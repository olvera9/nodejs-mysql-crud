pipeline {
    agent any
    environment {
        REMOTE = sh (
            returnStdout: true,
            script: 'ip route show | grep default | awk \'{print $3}\''
        )
        USER = "joaquin"
    }
    stages {
        stage('Clean') {
            steps {
                sshagent(credentials:['2d516ecb-bdbe-4b0a-b7dc-73c285d2fa6a']) {
                    sh 'ssh -o StrictHostKeyChecking=no $USER@$REMOTE cd ~/projects/nodejs-mysql-crud && docker-compose down'
                }
            }
        }
        stage('Checkout') {
            steps {
                checout scm
                sh 'pwd'
                sh 'ls -ltr'
            }
        }
        //stage('Deploy') {
        //    steps {
        //        sshagent(credentials:['2d516ecb-bdbe-4b0a-b7dc-73c285d2fa6a']) {
        //            sh 'scp -r '
        //        }
        //    }
        //}
    }
}