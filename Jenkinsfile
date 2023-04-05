pipeline {
  agent any
  stages {
    stage('Npm install') {
      steps {
        bat 'npm install'
      }
    }
    stage('Npm build client') {
      steps {
        bat 'npm run build-client-prod'
      }
    }
    stage('Npm build') {
      steps {
        bat 'npm run build-prod'
      }
    }
    stage('Docker build') {
      steps {
        bat 'docker login --username jenkins --password hDkxFxBSwmQ3ANLBFt https://nexus-ynov-sandbox.asys-cloud.fr/repository/ynov-docker'
        bat 'docker build -t nexus-ynov-sandbox.asys-cloud.fr/repository/ynov-docker/ynov-core-core-ui-angular:1.12.0 .'
      }
    }
    stage('Docker push') {
      steps {
        bat ' docker push nexus-ynov-sandbox.asys-cloud.fr/repository/ynov-docker/ynov-core-core-ui-angular:1.12.0'
      }
    }
  }
}

