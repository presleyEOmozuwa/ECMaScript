

#! /bash/sh

IMAGE_NAME=mongo

CONTAINER_ID=$(docker ps --all --quiet --filter ancestor=$IMAGE_NAME --format="{{.ID}}")

CONTAINER_STATUS=$(docker inspect --format "{{json .State.Status }}" $CONTAINER_ID)

until [ $CONTAINER_STATUS == '"running"' ]
do
    echo "Waiting for container to start..."
    sleep 1
done