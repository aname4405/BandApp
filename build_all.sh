#!/bin/bash

BACKEND="spring-boot-backend"
FRONTEND="react-frontend"


pushd $BACKEND

# build app
mvn clean install
mvn package

# build docker image
docker build -t spring-boot-backend:latest .

popd

pushd $FRONTEND

# build containerise app
docker build -t react-frontend:latest .

popd
