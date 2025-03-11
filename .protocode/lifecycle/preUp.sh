#!/bin/bash

set -e

# Install vendors
docker-compose run --rm app npm install --yes
