const multer = require('multer');
const { GridFsStorage } = require('multer-gridfs-storage');

const storage = new GridFsStorage({
  url: process.env.DB,
  options: { useNewUrlParser: true, useUnifiedTopology: true },
  file: (req, file) => {
    const match = ['audio/mpeg'];

    if (match.indexOf(file.mimetype) === -1) {
      const filename = file.originalname;
      return filename;
    }

    return {
      bucketName: 'tracks',
      filename: file.originalname,
    };
  },
});

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'uploads');
//   },
//   filename: (req, file, cb) => {
//     cb(null, file.fieldname + '-' + Date.now());
//   },
// });

module.exports = multer({ storage: storage });
