const Audios = require('../models/Audios.models');
const Grid = require('gridfs-stream');
const mongoose = require('mongoose');

let gfs;

const conn = mongoose.connection;
conn.once('open', function () {
  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection('photos');
});

const createAudio = async (title, artist, image_url, heart, media) => {
  try {
    const newAudio = new Audios({
      title,
      artist,
      image_url,
      heart,
    });
    await newAudio.save();
    return newAudio;
  } catch (error) {
    throw error;
  }
};
const getAudios = () => {};

const getDetailAudio = async (fileName) => {
  try {
    const file = await gfs.files.findOne({ filename: fileName });
    const readStream = gfs.createReadStream(file.filename);
    readStream.pipe(res);
  } catch (error) {
    throw error;
  }
};

const updateAudio = () => {};

const deleteAudio = async (fileName) => {
  try {
    await gfs.files.deleteOne({ filename: fileName });
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createAudio,
  getAudios,
  getDetailAudio,
  updateAudio,
  deleteAudio,
};
