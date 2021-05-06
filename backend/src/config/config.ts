export const config = {
  "dev": {
    "username": "imagepost",
    "password": "imagepost",
    "database": "postgres",
    "host": "imagepost.c373g1a9htmv.us-east-1.rds.amazonaws.com",
    "dialect": "postgres",
    "aws_region": "us-east-1",
    "aws_profile": "default",
    "aws_media_bucket": "images-post-dev-v1-20210504"
  },
  "prod": {
    "username": "",
    "password": "",
    "database": "udagram_prod",
    "host": "",
    "dialect": "postgres"
  }
}
