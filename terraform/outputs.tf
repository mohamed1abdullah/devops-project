# outputs.tf
output "jenkins_server_ip" {
  description = "Public IP of the Jenkins Server"
  value       = aws_instance.jenkins_server.public_ip
}

output "k8s_server_ip" {
  description = "Public IP of the Kubernetes Server"
  value       = aws_instance.k8s_server.public_ip
}