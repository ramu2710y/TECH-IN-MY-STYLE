#!/bin/bash
# Build the Python runner Docker image
echo "Building python-studio-runner image..."
docker build -f Dockerfile.runner -t python-studio-runner .
echo "Done! Image: python-studio-runner"
