import datetime
import jwt

from celery_worker import compress_file_and_update_status
from flask import request, jsonify, current_app
from flask_jwt_extended import jwt_required, create_access_token, get_jwt_identity
from flask_restful import Resource
from modelos import db, Usuario, UsuarioSchema, EstadoConversion, TareaConversion, ExtensionFinal
from modelos.modelos import EstadoTarea, TareaConversionSchema
from utils import check_password, set_password
from werkzeug.utils import secure_filename
import os

usuario_schema = UsuarioSchema()
tarea_conversion_schema_single = TareaConversionSchema()
tarea_conversion_schema_many = TareaConversionSchema(many=True)

class VistaSignUp(Resource):

    def post(self):
        usuario = request.json.get('usuario_nombre')
        contrasena1 = request.json.get('contrasena1')
        contrasena2 = request.json.get('contrasena2')
        correo = request.json.get('correo')

        if not all([usuario, contrasena1, contrasena2, correo]):
            return {'mensaje': 'Todos los campos son requeridos'}, 404
        
        if contrasena1 != contrasena2:
            return {'mensaje': 'Las contraseñas no coinciden'}, 404
        
        if Usuario.query.filter_by(usuario_nombre=usuario).first() or Usuario.query.filter_by(correo=correo).first():
            return {'mensaje': 'El usuario o el correo ya existe'}, 409
        
        usuario = Usuario(usuario_nombre=usuario, correo=correo, contrasena_encriptada=set_password(contrasena1))
        db.session.add(usuario)
        db.session.commit()

        return {'mensaje': 'Usuario creado exitosamente'}, 201


class VistaLogIn(Resource):

    def post(self):
        usuario = request.json.get('usuario_nombre')
        contrasena = request.json.get('contrasena')

        if not usuario or not contrasena:
            return {'mensaje': 'Usuario y contrasena son requeridos'}, 400

        usuario = Usuario.query.filter_by(usuario_nombre=usuario).first()

        if not usuario or not check_password(usuario.contrasena_encriptada, contrasena):
            return {'mensaje': 'Usuario o contrasena incorrectos'}, 401
        
        token_de_acceso = create_access_token(identity={"usuario": usuario.id})
        return {"mensaje": "Inicio de sesión exitoso", "token": token_de_acceso}, 200


class VistaTasks(Resource):
    @jwt_required()
    def get(self):
        user_id = get_jwt_identity()['usuario']
        max_results = request.args.get('max', default=None, type=int)
        order = request.args.get('order', default=0, type=int)

        if order == 0:
            tasks = TareaConversion.query.filter_by(usuario_id=user_id).order_by(TareaConversion.id.asc()).limit(max_results).all()
        else:
            tasks = TareaConversion.query.filter_by(usuario_id=user_id).order_by(TareaConversion.id.desc()).limit(max_results).all()

        serialized_tasks = tarea_conversion_schema_many.dump(tasks)
        return serialized_tasks, 200

    @jwt_required()
    def post(self):
        user_id = get_jwt_identity()['usuario']
        file = request.files['fileName']
        filename = secure_filename(file.filename)
        file_path = os.path.join(current_app.config['UPLOAD_FOLDER'], filename)
        file.save(file_path)

        print(f"File saved at: {file_path}") 
        new_format_str = request.form.get('newFormat')

        if not all([file, new_format_str]):
            return {'mensaje': 'Todos los campos son requeridos'}, 400

        try:
            new_format = ExtensionFinal[new_format_str.upper()]
        except KeyError:
            return {'mensaje': 'Formato inválido'}, 400
        
        nueva_tarea = TareaConversion(
            nombre_archivo=filename,
            estado_tarea=EstadoTarea.DISPONIBLE,
            estado_conversion=EstadoConversion.UPLOADED,
            usuario_id=user_id,
            fecha_creacion=datetime.datetime.now(),
            extension_final=ExtensionFinal[new_format_str.upper()],
        )

        db.session.add(nueva_tarea)
        db.session.commit()

        compress_file_and_update_status.delay(nueva_tarea.id)

        return {'mensaje': 'Tarea creada exitosamente'}, 201


class VistaTaskId(Resource):
    @jwt_required()
    def get(self, id_task):
        user_id = get_jwt_identity()['usuario']
        task = TareaConversion.query.filter_by(id=id_task, usuario_id=user_id).first()

        if not task:
            return {"mensaje": "Tarea no encontrada"}, 404

        return tarea_conversion_schema_single.dump(task), 200
    
    @jwt_required()
    def delete(self, id_task):
        user_id = get_jwt_identity()['usuario']
        task = TareaConversion.query.filter_by(id=id_task, usuario_id=user_id).first()

        if not task:
            return {'mensaje': 'Tarea no encontrada'}, 404

        db.session.delete(task)
        db.session.commit()

        return {'mensaje': 'Tarea eliminada exitosamente'}, 200


class VistaFiles(Resource):
    def get(self):
        return None
