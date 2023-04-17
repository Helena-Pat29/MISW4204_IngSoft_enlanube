import os
import zipfile
import tarfile

from celery import Celery
from modelos.modelos import EstadoConversion, ExtensionFinal, TareaConversion, db
from config import app, UPLOAD_FOLDER, PROCESSED_FOLDER

celery = Celery("sistema_conversion", broker="redis://redis:6379/0", backend="redis://redis:6379/0")

app.app_context().push()

#@celery.task(bind=True, max_retries=5)
@celery.task()
def compress_file_and_update_status( tarea_id):
    tarea = TareaConversion.query.get(tarea_id)
    if not tarea:
        return

    tarea.estado_conversion = EstadoConversion.PROCESSING
    db.session.commit()

    try:
        # Compress the file
        compress_file(tarea)

        tarea.estado_conversion = EstadoConversion.COMPLETED
    # For debugging purposes
    # except FileNotFoundError as e:
    #     # Retry with exponential backoff
    #     countdown = 2 ** self.request.retries
    #     print(f"File not found, retrying in {countdown} seconds...")
    #     self.retry(countdown=countdown, exc=e)
    #     tarea.estado_conversion = EstadoConversion.FAILED

    except Exception as e:
        tarea.estado_conversion = EstadoConversion.FAILED
        print(f"Failed to compress the file: {e}")
        print(f"Exception type: {type(e)}")
        import traceback
        print(f"Traceback: {traceback.format_exc()}")

    db.session.commit()

def compress_file(tarea):
    input_file = os.path.join(UPLOAD_FOLDER, tarea.nombre_archivo)
    output_file = os.path.splitext(tarea.nombre_archivo)[0]

    if tarea.extension_final == ExtensionFinal.ZIP:
        output_file += '.zip'
    elif tarea.extension_final == ExtensionFinal.TAR_GZ:
        output_file += '.tar.gz'
    elif tarea.extension_final == ExtensionFinal.TAR_BZ2:
        output_file += '.tar.bz2'
    else:
        raise ValueError('Invalid compression format')
    
    output_file = os.path.join(PROCESSED_FOLDER, output_file)

    if tarea.extension_final == ExtensionFinal.ZIP:
        with zipfile.ZipFile(output_file, 'w', zipfile.ZIP_DEFLATED) as zf:
            zf.write(input_file, os.path.basename(input_file))
    elif tarea.extension_final == ExtensionFinal.TAR_GZ:
        with tarfile.open(output_file, 'w:gz') as tar:
            tar.add(input_file, arcname=os.path.basename(input_file))
    elif tarea.extension_final == ExtensionFinal.TAR_BZ2:
        with tarfile.open(output_file, 'w:bz2') as tar:
            tar.add(input_file, arcname=os.path.basename(input_file))