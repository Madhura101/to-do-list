#!/bin/sh

host="$1"
shift

echo "⏳ Waiting for MongoDB at $host:27017..."

until nc -z "$host" 27017; do
  echo "MongoDB is unavailable - sleeping"
  sleep 2
done

echo "✅ MongoDB is up - starting the app"
exec "$@"

