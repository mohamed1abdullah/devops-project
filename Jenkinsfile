pipeline {
    agent any
    
    // تعريف المتغيرات
    environment {
        DOCKERHUB_CREDENTIALS = credentials('dockerhub-creds')
        DOCKERHUB_USERNAME = "mohamed010" // 🔴 غيّر هذا باسم حسابك في Docker Hub
    }

    stages {
        stage('Checkout Code') {
            steps {
                // 🔴 غيّر هذا برابط الجيت هاب الخاص بك
                git branch: 'main', url: 'https://github.com/mohamed1abdullah/devops-project.git'
            }
        }

        stage('Build Backend Image') {
            steps {
                dir('backend') {
                    sh 'docker build -t ${DOCKERHUB_USERNAME}/devops-backend:latest .'
                }
            }
        }

        stage('Build Frontend Image') {
            steps {
                dir('frontend') {
                    sh 'docker build -t ${DOCKERHUB_USERNAME}/devops-frontend:latest .'
                }
            }
        }

        stage('Push Images to Docker Hub') {
            steps {
                // تسجيل الدخول إلى Docker Hub ثم رفع الصور
                sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
                sh 'docker push ${DOCKERHUB_USERNAME}/devops-backend:latest'
                sh 'docker push ${DOCKERHUB_USERNAME}/devops-frontend:latest'
            }
        }
    }

    // تنظيف بعد الانتهاء
    post {
        always {
            sh 'docker logout'
        }
    }
}