# Use the official Python base image
FROM python:3.9-slim-buster

# Set the working directory
WORKDIR /app

# Copy the requirements file and install dependencies
COPY Requirements.txt .
RUN pip install --no-cache-dir -r Requirements.txt

# Copy the rest of the application code
COPY . .

# Install PostgreSQL client
RUN apt-get update && \
    apt-get install -y postgresql-client && \
    rm -rf /var/lib/apt/lists/*

# Add this line to copy the wait-for-postgres.sh script
# COPY wait_for_postgres.sh /usr/local/bin/wait_for_postgres.sh

COPY wait_for_db.py /usr/local/bin/wait_for_db.py

# Expose the port the app will run on
EXPOSE 8000

# Start the application
CMD ["sh", "-c", "python3 /usr/local/bin/wait_for_db.py && gunicorn --bind 0.0.0.0:8000 app:app"]