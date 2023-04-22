import os
import sys
import time
import psycopg2

def main():
    db_host = os.environ.get('POSTGRES_HOST', 'db')
    db_port = os.environ.get('POSTGRES_PORT', 5432)
    db_name = os.environ.get('POSTGRES_DB', 'sistema_conversion')
    db_user = os.environ.get('POSTGRES_USER', 'postgres')
    db_password = os.environ.get('POSTGRES_PASSWORD', 'admin')

    retries = 5
    wait_time = 5

    for i in range(retries):
        try:
            conn = psycopg2.connect(
                dbname=db_name,
                user=db_user,
                password=db_password,
                host=db_host,
                port=db_port
            )
            conn.close()
            print("Database is ready!")
            sys.exit(0)
        except Exception as e:
            print(f"Database not ready yet (attempt {i + 1}/{retries}): {e}")
            time.sleep(wait_time)

    print("Database connection check failed after retries. Exiting.")
    sys.exit(1)

if __name__ == "__main__":
    main()
