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

    stage('Build') {
      steps {
        bat 'npm run build'
      }
    }
    
    stage('Test') {
      steps {
        bat 'npm run test'
      }
    }
  }


}
