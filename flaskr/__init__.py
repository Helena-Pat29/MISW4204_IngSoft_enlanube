from flask import Flask

UPLOAD_FOLDER = 'C:\tmp\Sist_Conv_Files'

def create_app(config_name):
    app= Flask (__name__)
    app.debug = True
    app.config['SQLALCHEMY_DATABASE_URI']='sqlite:///sistema_conversion.db'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS']= False
    #el JWT_SECRET_KEY se debe modificar?
    app.config['JWT_SECRET_KEY'] = 'frase-secreta'
    app.config['PROPAGATE_EXCEPTIONS'] = True
    app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
    return app
