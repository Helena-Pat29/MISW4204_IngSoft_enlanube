import logging
import os
import tempfile
import zipfile
import tarfile

from concurrent.futures import TimeoutError

import celery
from google.cloud import pubsub_v1
from modelos.modelos import EstadoConversion, ExtensionFinal, TareaConversion, db
from config import app, UPLOAD_FOLDER, PROCESSED_FOLDER
from utils import download_blob, upload_blob

timeout = 10.0
project_id = app.config['PROJECT_ID']
subscription_id = app.config['SUBSCRIPTION_ID']

subscriber = pubsub_v1.SubscriberClient()
subscription_path = subscriber.subscription_path(project_id, subscription_id)
app.app_context().push()


def callback(message: pubsub_v1.subscriber.message.Message) -> None:
    logging.info(f"Received {message}.")
    message.ack()

@celery.Task
def compress_file(tarea):
    # Download the uploaded file from the GCS bucket
    bucket_name = "converter_files"
    source_blob_name = f"{UPLOAD_FOLDER}/{tarea.nombre_archivo}"
    with tempfile.NamedTemporaryFile(delete=False) as temp_input_file:
        download_blob(bucket_name, source_blob_name, temp_input_file.name)
        input_file = temp_input_file.name

        # Process the output file name
        output_file = os.path.splitext(tarea.nombre_archivo)[0]

        if tarea.extension_final == ExtensionFinal.ZIP:
            output_file += '.zip'
        elif tarea.extension_final == ExtensionFinal.TAR_GZ:
            output_file += '.tar.gz'
        elif tarea.extension_final == ExtensionFinal.TAR_BZ2:
            output_file += '.tar.bz2'
        else:
            raise ValueError('Invalid compression format')

        output_blob_name = f"{PROCESSED_FOLDER}/{output_file}"

        with tempfile.NamedTemporaryFile(delete=False) as temp_output_file:
            if tarea.extension_final == ExtensionFinal.ZIP:
                with zipfile.ZipFile(temp_output_file, 'w', zipfile.ZIP_DEFLATED) as zf:
                    zf.write(input_file, os.path.basename(input_file))
            elif tarea.extension_final == ExtensionFinal.TAR_GZ:
                with tarfile.open(temp_output_file.name, 'w:gz') as tar:
                    tar.add(input_file, arcname=os.path.basename(input_file))
            elif tarea.extension_final == ExtensionFinal.TAR_BZ2:
                with tarfile.open(temp_output_file.name, 'w:bz2') as tar:
                    tar.add(input_file, arcname=os.path.basename(input_file))
            else:
                raise ValueError('Invalid compression format')

            temp_output_file.close()
            # Upload the output file to the GCS bucket
            upload_blob(bucket_name, temp_output_file.name, output_blob_name)
            os.remove(temp_output_file.name)

    temp_input_file.close()
    os.remove(temp_input_file.name)

    # Update the database record with the output file's blob name
    tarea.archivo_salida = output_blob_name
    db.session.commit()


streaming_pull_future = subscriber.subscribe(subscription_path, compress_file)
print(f"Listening for messages on {subscription_path}..\n")


with subscriber:
    try:
        streaming_pull_future.result(timeout=timeout)
        print(f"streaming_pull_future::::: {streaming_pull_future}")
        tarea_id = streaming_pull_future
        tarea = TareaConversion.query.get(tarea_id)
        print(f"Attempting to compress file with ID: {tarea_id}")

        tarea.estado_conversion = EstadoConversion.PROCESSING
        db.session.commit()

        # Compress the file
        compress_file(tarea)
        tarea.estado_conversion = EstadoConversion.COMPLETED
    except TimeoutError:
        streaming_pull_future.cancel()
        streaming_pull_future.result()
    except Exception as e:
        tarea.estado_conversion = EstadoConversion.FAILED
        print(f"Failed to compress the file: {e}")
        print(f"Exception type: {type(e)}")
        import traceback

        print(f"Traceback: {traceback.format_exc()}")

    db.session.commit()

