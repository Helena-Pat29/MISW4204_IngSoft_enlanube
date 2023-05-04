import datetime
import logging
import tempfile
import jwt
from config import UPLOAD_FOLDER, PROCESSED_FOLDER
from celery_worker import compress_file_and_update_status
from flask import request, jsonify, current_app, send_from_directory, make_response, send_file
from flask_jwt_extended import jwt_required, create_access_token, get_jwt_identity
from flask_restful import Resource
from modelos import db, Usuario, UsuarioSchema, EstadoConversion, TareaConversion, ExtensionFinal
from modelos.modelos import EstadoTarea, TareaConversionSchema
from utils import check_password, set_password
from werkzeug.utils import secure_filename
from utils import upload_blob
from google.cloud import storage
from mimetypes import guess_type
import os

usuario_schema = UsuarioSchema()
tarea_conversion_schema_single = TareaConversionSchema()
tarea_conversion_schema_many = TareaConversionSchema(many=True)

class VistaSignUp(Resource):

    def post(self):
        usuario = request.json.get('username')
        contrasena1 = request.json.get('password1')
        contrasena2 = request.json.get('password2')
        correo = request.json.get('email')

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
        usuario = request.json.get('username')
        contrasena = request.json.get('password')

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
        
        temp_file_path = os.path.join(tempfile.gettempdir(), filename)
        file.save(temp_file_path)
        print(f"File saved at: {temp_file_path}") 
        bucket_name = "converter_files"
        destination_blob_name = f"{UPLOAD_FOLDER}/{filename}"
        upload_blob(bucket_name, temp_file_path, destination_blob_name)
        os.remove(temp_file_path)

        print(f"File saved at: gs://{bucket_name}/{destination_blob_name}")

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
            extension_final=new_format,
        )

        db.session.add(nueva_tarea)
        db.session.commit()

        #compress_file_and_update_status.delay(nueva_tarea.id)
        compress_file_and_update_status.apply_async((nueva_tarea.id,), countdown=10)

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
    @jwt_required()
    def get(self, filename):
        user_id = get_jwt_identity()['usuario']
        base_name, file_ext = os.path.splitext(filename)
        print(f"Extension: {file_ext}") 
        if file_ext == '.zip' or file_ext == '.gz' or file_ext == '.bz2':
            folder = PROCESSED_FOLDER
        else:
            folder = UPLOAD_FOLDER

        bucket_name = "converter_files"
        blob_name = f"{folder}/{filename}"

        # Check if the blob exists
        storage_client = storage.Client()
        bucket = storage_client.bucket(bucket_name)
        blob = bucket.blob(blob_name)

        if not blob.exists():
            logging.error(f"File not found in bucket: {blob_name}")
            return {'mensaje': 'Archivo no encontrado'}, 404

        # Download the file to a temporary location and send it as a response
        with tempfile.NamedTemporaryFile(delete=False) as temp_file:
            blob.download_to_filename(temp_file.name)
            temp_file.close()

            # Send the temporary file as a response
            response = make_response(send_file(temp_file.name, attachment_filename=filename, as_attachment=True))
            response.headers['Content-Type'] = guess_type(filename)[0] or 'application/octet-stream'

            # Delete the temporary file after the response is sent
            os.remove(temp_file.name)
            
        return response

