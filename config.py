import os
import tempfile
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_jwt_extended import JWTManager
from celery import Celery
from modelos import db
from sqlalchemy import DDL,text
from sqlalchemy.exc import ProgrammingError
from google.cloud import storage

#Initialize the GCS client
storage_client = storage.Client()
UPLOAD_FOLDER = 'uploaded-files'
PROCESSED_FOLDER = 'processed-files'
db_user = os.environ.get('POSTGRES_USER', 'postgres')
db_password = os.environ.get('POSTGRES_PASSWORD', 'admin')
db_name = os.environ.get('POSTGRES_DB', 'sistema_conversion')
db_host = os.environ.get('POSTGRES_HOST', 'db')
db_port = os.environ.get('POSTGRES_PORT', 5432)

app = Flask(__name__)

app.debug = True
app.config['SQLALCHEMY_DATABASE_URI'] = f"postgresql://{db_user}:{db_password}@{db_host}:{db_port}/{db_name}"
#app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DATABASE_URL', 'postgresql://postgres:admin@db/sistema_conversion')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['JWT_SECRET_KEY'] = 'frase-secreta'
app.config['PROPAGATE_EXCEPTIONS'] = True
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
app.config['PROCESSED_FOLDER'] = PROCESSED_FOLDER
app.config['REDIS_URL'] = os.environ.get('REDIS_URL', 'redis://redis:6379/0')
print("REDIS_URL:", app.config['REDIS_URL'])

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
