import os
import zipfile
import tarfile

from celery import Celery
from project.modelos.modelos import EstadoConversion, ExtensionFinal,\
    TareaConversion, db
from project.config import app, UPLOAD_FOLDER

celery = Celery("sistema_conversion", broker="redis://localhost:6379/0", backend="redis://localhost:6379/0")

app.app_context().push()


@celery.task
def compress_file_and_update_status(tarea_id):
    tarea = TareaConversion.query.get(tarea_id)
    if not tarea:
        return

    tarea.estado_conversion = EstadoConversion.PROCESSING
    db.session.commit()

    try:
        # Compress the file
        compress_file(tarea)

        tarea.estado_conversion = EstadoConversion.COMPLETED
    except Exception as e:
        tarea.estado_conversion = EstadoConversion.FAILED
        print(f"Failed to compress the file: {e}")

    db.session.commit()


def compress_file(tarea):
    input_file = os.path.join(UPLOAD_FOLDER, tarea.nombre_archivo)
    output_file = os.path.splitext(input_file)[0]

    if tarea.extension_final == ExtensionFinal.ZIP:
        output_file += '.zip'
        with zipfile.ZipFile(output_file, 'w', zipfile.ZIP_DEFLATED) as zf:
            zf.write(input_file, os.path.basename(input_file))

    elif tarea.extension_final == ExtensionFinal.TAR_GZ:
        output_file += '.tar.gz'
        with tarfile.open(output_file, 'w:gz') as tar:
            tar.add(input_file, arcname=os.path.basename(input_file))

    elif tarea.extension_final == ExtensionFinal.TAR_BZ2:
        output_file += '.tar.bz2'
        with tarfile.open(output_file, 'w:bz2') as tar:
            tar.add(input_file, arcname=os.path.basename(input_file))

    else:
        raise ValueError('Invalid compression format')
