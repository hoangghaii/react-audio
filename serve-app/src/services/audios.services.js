const Audio = require('../models/Audios.models');

const createAudio = async (songName, songUrl, artist, imageUrl, heart) => {
  try {
    const newAudio = new Audio({
      songName,
      songUrl,
      artist,
      imageUrl,
      heart: heart || false,
    });
    await newAudio.save();
    return newAudio;
  } catch (error) {
    throw error;
  }
};
const getAudios = async () => {
  try {
    const audios = await Audio.find();
    return audios;
  } catch (error) {
    throw error;
  }
};

const getDetailAudio = async (id) => {
  try {
    const audio = await Audio.findById(id);
    return audio;
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
