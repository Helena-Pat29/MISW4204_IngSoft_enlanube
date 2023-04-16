# Use the official Python base image
FROM python:3.9

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
COPY wait_for_postgres.sh /usr/local/bin/wait_for_postgres.sh

# Expose the port the app will run on
EXPOSE 8000

# Start the application
CMD ["gunicorn", "-c", "gunicorn.conf.py", "app:app"]
