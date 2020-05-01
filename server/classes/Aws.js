const AWS = require('aws-sdk');
const Utils = require('./Utils');
const utils = new Utils();

class Aws {
    constructor() {
        this.setAwsConfig();
    }
    setAwsConfig() {
        AWS.config.update({
            secretAccessKey: process.env.AWS_SECRET_ACCESS,
            accessKeyId: process.env.AWS_KEY_ID,
            region: 'eu-west-3'
        });
        this.s3 = new AWS.S3();
    }
    getUserImage(userId) {
        return new Promise((resolve) => {
            this.s3.getObject({
                Bucket: process.env.AWS_BUCKET,
                Key: userId
            }, (err, data) => {
                let image64;
                if (err) {
                    utils.logError('Get image from aws', err.message);
                    image64 = undefined;
                } else {
                    image64 = 'data:' + data.ContentType + ';' + data.ContentEncoding + ',' + data.Body.toString('base64');
                }
                resolve(image64);
            });
        });
    }
    uploadUserImage(image, user) {
        return new Promise((resolve) => {
            let imageType;
            ['jpeg', 'png', 'jpg', 'gif'].forEach((type) => {
                if (image.substring(0, 40).includes(type)) {
                    imageType = type;
                }
            });
            const buf = new Buffer(image.replace(/^data:image\/\w+;base64,/, ""), 'base64');
            this.s3.putObject({
                Bucket: process.env.AWS_BUCKET,
                Body: buf,
                Key: `${user.id}`,
                ContentEncoding: 'base64',
                ContentType: `image/${imageType}`
            }).promise().then(response => {
                utils.logSuccess('Image was saved in aws', response);
                resolve(true);
            }).catch(err => {
                utils.logError('Image was NOT saved in aws', err);
                resolve(false, err);
            });
        });
    }
}

module.exports = Aws;