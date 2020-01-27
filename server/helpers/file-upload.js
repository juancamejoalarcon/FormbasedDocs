// const aws = require('aws-sdk');
// const multer = require('multer');
// const multerS3 = require('multer-s3');

// aws.config.update({
//     secretAccessKey: process.env.AWS_SECRET_ACCESS,
//     accessKeyId: process.env.AWS_KEY_ID,
//     region: 'eu-west-3'
// });

// const s3 = new aws.S3();

// const fileFilter = (req, file, cb) => {
//   cb(null, true);
// };

// const upload = multer({
//     fileFilter,
//     storage: multerS3({
//       s3,
//       bucket: process.env.AWS_BUCKET,
//       acl: 'public-read',
//       metadata: function (req, file, cb) {
//         cb(null, {fieldName: 'TESTING_META_DATA!'});
//       },
//       key: function (req, file, cb) {
//         cb(null, Date.now().toString())
//       }
//     })
//   })
  
//   module.exports = upload;