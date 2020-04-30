const AWS = require('aws-sdk');

AWS.config.update({
    secretAccessKey: process.env.AWS_SECRET_ACCESS,
    accessKeyId: process.env.AWS_KEY_ID,
    region: 'eu-west-3'
});
const s3 = new AWS.S3();

module.exports = s3;