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
                sh 'pwd'
                sh 'ls -ltr'
                sshagent(credentials:['cc8ee0a9-1179-4577-8416-283b64f992d0']) {
                    sh 'ssh -o StrictHostKeyChecking=no $USER@$REMOTE cd /projects/nodejs-mysql-crud && pwd'
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