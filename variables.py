POSTGRES_USER = 'postgres'
POSTGRES_PW = 'admin'
POSTGRES_URL = '127.0.0.1:5433'
POSTGRES_DB = 'nube'

DB_URL = 'postgresql+psycopg2://{user}:{pw}@{url}/{db}'.format(user=POSTGRES_USER,pw=POSTGRES_PW,url=POSTGRES_URL,db=POSTGRES_DB)
UPLOAD_FOLDER= 'Sist_Conv_Files'

JWT_SECRET_KEY = 'frase-secreta'