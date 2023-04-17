#!/bin/bash
# wait-for-postgres.sh

set -e

host="$1"
shift
cmd="$@"

# Use POSTGRES_USER and POSTGRES_PASSWORD environment variables
user="$POSTGRES_USER"
password="$POSTGRES_PASSWORD"

until PGPASSWORD="$password" psql -h "$host" -U "$user" -c '\q'; do
  >&2 echo "Postgres is unavailable - sleeping"
  sleep 1
done

>&2 echo "Postgres is up - executing command"
exec $cmd
