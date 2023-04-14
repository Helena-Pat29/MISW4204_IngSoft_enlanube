#!/bin/sh
# called by Dockerfile

# go to directory where manage.py is
cd /home/flask_app/converter
# start gunicorn
exec gunicorn --bind 0.0.0.0:8001 wsgi:application
