import os
import tempfile
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_jwt_extended import JWTManager

from modelos import db

UPLOAD_FOLDER = os.path.join(tempfile.gettempdir(), 'Sist_Conv_Files')
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

app = Flask(__name__)

app.debug = True
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///sistema_conversion.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['JWT_SECRET_KEY'] = 'frase-secreta'
app.config['PROPAGATE_EXCEPTIONS'] = True
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

jwt = JWTManager(app)

app_context = app.app_context()
app_context.push()

db.init_app(app)
db.create_all()
