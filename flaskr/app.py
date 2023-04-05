from flaskr import create_app
from flask_cors import CORS
from flask_jwt_extended import JWTManager
from flask_restful import Api
from datetime import datetime

from .modelos import db, \
    Usuario, TareaConversion, Archivo, EstadoConversion, ExtensionFinal, EstadoTarea
from .modelos import UsuarioSchema, TareaConversionSchema, ArchivoSchema

from .vistas import \
    VistaSignIn, VistaLogIn, \
    VistaUpload,\
    VistaUsuarios, VistaUsuario


app = create_app('default')
app_context= app.app_context()
app_context.push()

db.init_app(app)
db.create_all()

#validar si esto se necesita
cors=CORS(app)

api = Api(app)
api.add_resource(VistaSignIn,'/signin')
api.add_resource(VistaLogIn,'/login')
api.add_resource(VistaUpload,'/upload')
api.add_resource(VistaUsuarios,'/usuarios')
api.add_resource(VistaUsuario,'/usuario/<int:id_usuario>')

jwt =JWTManager(app)






# #Prueba
# with app.app_context():
#     u = Usuario(usuario_nombre='UserTest', contrasena='123456', correo='testuser@gmail.com')
#     db.session.add(u)
#     db.session.commit()
#     print (Usuario.query.all())

#Prueba
# with app.app_context():
#     u = Usuario(usuario_nombre='UserTest', contrasena='123456', correo='testuser@gmail.com')
#     a = Archivo(nombre_original = 'PrimerArchivo', archivo_original="Archivo guardado", fecha_creacion= datetime(2022,4,2), estado_conversion=EstadoConversion.UPLOADED, usuario_id=1)
#     t =TareaConversion(extension_final=ExtensionFinal.ZIP,estado_tarea=EstadoTarea.DISPONIBLE,usuario_id=1,archivo_id=1)
#     #t.archivos.append(a) // Esta no funciono!!
#     u.tareas.append(t)
#     db.session.add(u)
#     db.session.add(t)
#     db.session.add(a)
#     db.session.commit()
#     print (Usuario.query.all())
#     print (Usuario.query.all()[0].tareas)
#     print (TareaConversion.query.all())
#     db.session.delete(t)
#     print (Usuario.query.all())
#     print (TareaConversion.query.all())

#Prueba
# with app.app_context():
#     user_schema=UsuarioSchema()
#     U =Usuario(usuario_nombre='UserTest', contrasena='123456', correo='testuser@gmail.com')
#     db.session.add(U)
#     db.session.commit()
#     print([user_schema.dumps(usuario) for usuario in Usuario.query.all()])

# with app.app_context():
#     tarea_schema=TareaConversionSchema()
#     T =TareaConversion(extension_final=ExtensionFinal.ZIP,estado_tarea=EstadoTarea.DISPONIBLE)
#     db.session.add(T)
#     db.session.commit()
#     print([tarea_schema.dumps(tarea) for tarea in TareaConversion.query.all()])

# with app.app_context():
#     archivo_schema=ArchivoSchema()
#     A = Archivo(nombre_original = 'PrimerArchivo', archivo_original="Archivo guardado", fecha_creacion= datetime(2022,4,2), estado_conversion=EstadoConversion.UPLOADED)
#     db.session.add(A)
#     db.session.commit()
#     print([archivo_schema.dumps(archivo) for archivo in Archivo.query.all()])

