const AWS = require('aws-sdk');

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

const uploadAudio = (filename, file) => {
  const params = {
    Key: filename,
    Bucket: process.env.AWS_BUCKET_NAME,
    Body: file,
    ContentType: 'audio/mpeg',
    ACL: 'public-read',
  };

  return new Promise((resolve, reject) => {
    s3.upload(params, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data.Location);
      }
    });
  });
};

module.exports = uploadAudio;
