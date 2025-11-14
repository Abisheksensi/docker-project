pipeline {
    agent any

    options {
        // This enables GitHub status checks (green tick / red cross)
        githubNotify()
    }

    environment {
        DOCKERHUB_CREDENTIALS = credentials('dockerhub')
        DOCKER_USERNAME = "abishekdesign"
    }

    stages {

        stage('Clone Repository') {
            steps {
                git branch: 'main', url: 'https://github.com/Abisheksensi/docker-project.git'
            }
        }

        stage('Build Frontend Image') {
            steps {
                script {
                    sh """
                    docker build -t ${DOCKER_USERNAME}/frontend:latest ./frontend
                    """
                }
            }
        }

        stage('Build Backend Image') {
            steps {
                script {
                    sh """
                    docker build -t ${DOCKER_USERNAME}/backend:latest ./backend
                    """
                }
            }
        }

        stage('Login to Docker Hub') {
            steps {
                script {
                    sh """
                    echo "${DOCKERHUB_CREDENTIALS_PSW}" | docker login -u "${DOCKERHUB_CREDENTIALS_USR}" --password-stdin
                    """
                }
            }
        }

        stage('Push Images') {
            steps {
                script {
                    sh """
                    docker push ${DOCKER_USERNAME}/frontend:latest
                    docker push ${DOCKER_USERNAME}/backend:latest
                    """
                }
            }
        }
    }

    triggers {
        githubPush()   // triggers pipeline when GitHub sends webhook
    }
}
