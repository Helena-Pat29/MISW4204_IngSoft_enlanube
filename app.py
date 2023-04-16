from flask_restful import Api
from vistas import VistaSignUp, VistaLogIn, VistaTasks, VistaTaskId, VistaFiles
from config import app, create_celery_app

celery = create_celery_app(app)

api = Api(app)
api.add_resource(VistaSignUp, '/api/auth/signup')
api.add_resource(VistaLogIn, '/api/auth/login')
api.add_resource(VistaTasks, '/api/tasks')
api.add_resource(VistaTaskId, '/api/tasks/<int:id_task>')
api.add_resource(VistaFiles, '/api/files/<string:filename>')

if __name__ == '__main__':
    app.run()
