#!/bin/bash

set -e

# Install vendors
docker-compose run -u $(id -u):$(id -g) -it app npm install
