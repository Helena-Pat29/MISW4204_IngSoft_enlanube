import datetime

import jwt
from flask import request
from flask_jwt_extended import jwt_required, create_access_token, get_jwt_identity
from flask_restful import Resource
import hashlib

from modelos import db, Upload, UploadSchema, Usuario, UsuarioSchema, EstadoConversion, TareaConversion, ExtensionFinal

upload_schema = UploadSchema()
usuario_schema = UsuarioSchema()



class VistaSignIn(Resource):

    # solo el post hace parte de la entrega
    # Pte doble contraseña (Sebas)
    def post(self):
        usuario = Usuario.query.filter(Usuario.correo == request.json["correo"]).first()
        if usuario is None:
            contrasena_encriptada = hashlib.md5(request.json["contrasena"].encode('utf-8')).hexdigest()
            nuevo_usuario = Usuario(usuario_nombre=request.json["usuario_nombre"], contrasena=contrasena_encriptada,
                                    correo=request.json["correo"])
            db.session.add(nuevo_usuario)
            db.session.commit()
            return {"mensaje": "usuario creado exitosamente", "id": nuevo_usuario.id}
        else:
            return "El usuario ya existe", 404


class VistaLogIn(Resource):

    def post(self):

        contrasena_encriptada = hashlib.md5(request.json["contrasena"].encode('utf-8')).hexdigest()
        usuario = Usuario.query.filter(Usuario.correo == request.json["correo"],
                                      Usuario.contrasena == contrasena_encriptada).first()
        db.session.commit()
        if usuario is None:
            return "Error de Autenticación: El usuario no existe en el sistema", 404
        else:
            token_de_acceso = create_access_token(identity={"usuario": usuario.id})
            return {"mensaje": "Inicio de sesión exitoso", "token": token_de_acceso, "id": usuario.id}


# Pte: Modificar desde el Post la tabla de tarea de conversion (Carlos)
# Llamado a parte asincrona (Post) (Sergio)
# Incluir UserID (Sebas)

class VistaTasks(Resource):
    @jwt_required()
    def post(self):
        file = request.files['file']
        new_format_input = request.form['newFormat']
        status_init = EstadoConversion.UPLOADED
        # usuario
        upload = Upload(
            nombre_archivo=file.filename,
            data=file.read())
        db.session.add(upload)
        db.session.commit()

        tarea = TareaConversion(
            new_format=new_format_input,
            status=status_init,
            time_stamp=datetime.datetime.now(),
            usuario_id=get_jwt_identity()['usuario'],
            upload_id=upload.id
        )
        db.session.add(tarea)
        db.session.commit()
        filename = file.filename
        return {"File uploaded=": filename}

    # Incluir parametros en el get (Helena)
    def get(self):
        return [upload_schema.dump(upload) for upload in Upload.query.all()]


class VistaTaskId(Resource):
    def get(self):
        return None

    def delete(self):
        return None


class VistaFiles(Resource):
    def get(self):
        return None
