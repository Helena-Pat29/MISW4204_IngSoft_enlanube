import os
import tempfile
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_jwt_extended import JWTManager
from celery import Celery
from modelos import db
from sqlalchemy import DDL,text
from sqlalchemy.exc import ProgrammingError

UPLOAD_FOLDER = os.path.join(tempfile.gettempdir(), 'Sist_Conv_Files_Uploaded')
os.makedirs(UPLOAD_FOLDER, exist_ok=True)
PROCESSED_FOLDER = os.path.join(tempfile.gettempdir(), 'Sist_Conv_Files_Processed')
os.makedirs(PROCESSED_FOLDER, exist_ok=True)

app = Flask(__name__)

app.debug = True
app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DATABASE_URL', 'postgresql://postgres:admin@db/sistema_conversion')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['JWT_SECRET_KEY'] = 'frase-secreta'
app.config['PROPAGATE_EXCEPTIONS'] = True
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
app.config['PROCESSED_FOLDER'] = PROCESSED_FOLDER
app.config['REDIS_URL'] = os.environ.get('REDIS_URL', 'redis://redis:6379/0')

jwt = JWTManager(app)

app_context = app.app_context()
app_context.push()

db.init_app(app)
# Check if "extensionfinal" ENUM type exists
# result = db.engine.execute(text("SELECT 1 FROM pg_type WHERE typname = 'extensionfinal'"))
# if not result.scalar():
#     db.engine.execute(DDL("CREATE TYPE extensionfinal AS ENUM ('ZIP', 'TAR_GZ', 'TAR_BZ2')"))
db.create_all()

def create_celery_app(app):
    celery = Celery(app.name, broker=app.config['REDIS_URL'])
    celery.conf.update(app.config)
    return celery
