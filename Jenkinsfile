pipeline {
    agent {   
        label 'agent1'
    }

    environment {
        DOCKER_IMAGE = 'shehab19/frontend-deployment'
    }

    stages {
        stage('fetch code') {
            steps {
                git url: 'https://github.com/shehab-19/frontend-app-deployment.git', branch: 'main'
            }
        }

        stage('build the image') {
            steps {
                sh "sudo docker build -t ${DOCKER_IMAGE}:v2 ."
            }
        }

        stage('login to DockerHub') {
            steps {
                script {
                    withCredentials([usernamePassword(credentialsId: 'dockerhub', usernameVariable: 'DOCKERHUB_USERNAME', passwordVariable: 'DOCKERHUB_PASSWORD')]) {
                        sh '''
                        echo $DOCKERHUB_PASSWORD | docker login -u $DOCKERHUB_USERNAME --password-stdin
                        '''
                    }
                }
            }
        }

        stage('push the image') {
            steps {
                sh "sudo docker push ${DOCKER_IMAGE}:v2"
            }
        }
    }

    post {

        always {

            sh "sudo docker rmi ${DOCKER_IMAGE}:v2"
        }

        success {
            echo 'Build and push completed successfully'
        }
        failure {
            echo 'Build failed'
        }
        
    }
}
