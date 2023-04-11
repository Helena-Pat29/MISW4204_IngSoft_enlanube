from flask_sqlalchemy import SQLAlchemy
from marshmallow import fields, Schema
from marshmallow_sqlalchemy import SQLAlchemyAutoSchema
from werkzeug.datastructures import FileStorage

import enum
import datetime

db = SQLAlchemy()


class ExtensionFinal(enum.Enum):
    ZIP = 1
    TAR_GZ = 2
    TAR_BZ2 = 3


class EstadoTarea(enum.Enum):
    DISPONIBLE = 1
    NO_DISPONIBLE = 2


class EstadoConversion(enum.Enum):
    UPLOADED = 1
    PROCESSED = 2


class Usuario(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    usuario_nombre = db.Column(db.String(30))
    contrasena = db.Column(db.String(30))
    correo = db.Column(db.String(50), unique=True)
    tareas = db.relationship('TareaConversion', cascade='all, delete, delete-orphan')


# REVISAR ESTA TABLA
class TareaConversion(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    new_format = db.Column(db.String(30))
    status = db.Column(db.Enum(EstadoConversion))
    time_stamp = db.Column(db.DateTime, default=datetime.datetime.now)
    usuario_id = db.Column(db.Integer, db.ForeignKey('usuario.id'))
    upload_id = db.Column(db.Integer, db.ForeignKey('upload.id'))


# upload files in flask DB


class Upload(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nombre_archivo = db.Column(db.String(128))
    data = db.Column(db.LargeBinary)
    tareas = db.relationship('TareaConversion', cascade='all, delete, delete-orphan')


class EnumADiccionario(fields.Field):
    def _serialize(self, value, attr, obj, **kwargs):
        if value is None:
            return None
        return {'llave': value.name, 'valor': value.value}


class UsuarioSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = Usuario
        include_relationships = True
        include_fk = True
        load_instance = True

    id = fields.String()
    usuario_nombre = fields.String()
    contrasena = fields.String()
    correo = fields.String()


class TareaConversionSchema(SQLAlchemyAutoSchema):
    extension_final = EnumADiccionario(attribute=('extension_final'))
    estado_tarea = EnumADiccionario(attribute='estado_tarea')

    class Meta:
        model = TareaConversion
        include_relationships = True
        include_fk = True
        load_instance = True

    id = fields.String()


class UploadSchema(SQLAlchemyAutoSchema):
    status = EnumADiccionario(attribute='estado_conversion')

    class Meta:
        model = Upload
        include_relationships = True
        include_fk = True
        load_instance = True

    id = fields.String()
    nombre_archivo = fields.String()
    # Cambios get
    data = fields.Raw(load_only=True)
    new_format = fields.String()
    time_stamp = fields.String()
