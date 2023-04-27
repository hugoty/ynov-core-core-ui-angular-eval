pipeline {
  agent any

  stages {
    stage('Checkout') {
      steps {
        git branch: 'add-pipeline-dockerfile', url: 'https://github.com/hugoty/ynov-core-core-ui-angular-eval'
      }
    }

    stage('NPM et LINT') {
      steps {
        bat 'npm install'
        bat 'npm run lint --fix'
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