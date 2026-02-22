# variables.tf
variable "aws_region" {
  description = "The AWS region to deploy resources"
  type        = string
  default     = "us-east-1"
}

variable "instance_type" {
  description = "EC2 instance type"
  type        = string
  default     = "c7i-flex.large"
}

variable "key_name" {
  description = "Name of the AWS Key Pair"
  type        = string
  default     = "devops-key" # تأكد أن هذا هو اسم المفتاح الخاص بك
}