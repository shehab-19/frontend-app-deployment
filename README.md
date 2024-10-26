# Front-End App Deployment

This project automates the deployment of a front-end application using Jenkins and Docker.

## Overview

The project is set up to fetch the source code from a GitHub repository, build a Docker image, log in to DockerHub, and push the image for deployment.

## Jenkins Pipeline

The Jenkins pipeline orchestrates the following stages:

1. **Fetch Code**: Clones the repository from GitHub.
2. **Build the Image**: Builds a Docker image for the front-end application.
3. **Login to DockerHub**: Authenticates with DockerHub using stored credentials.
4. **Push the Image**: Pushes the built image to DockerHub.

## Prerequisites

- **Jenkins**: Ensure you have Jenkins installed and configured.
- **Docker**: Docker must be installed and running on the Jenkins agent.
- **GitHub Repository**: The source code should be available in a GitHub repository.
- **DockerHub Credentials**: Store your DockerHub credentials in Jenkins using the ID `dockerhub`.

## Usage

1. Set up the Jenkins pipeline using the provided `Jenkinsfile` in the repository.
2. Trigger the pipeline to automate the deployment process.
3. Monitor the logs for successful build and push status.

## Conclusion

This Jenkins pipeline simplifies the process of deploying a front-end application by automating the build and push steps to DockerHub. Modify the Docker image name and repository as needed for your specific use case.
