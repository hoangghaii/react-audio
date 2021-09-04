const Audios = require('../models/Audios.models');

const createAudio = async (title, artist, image_url, heart, media) => {
  try {
    const newAudio = new Audios({
      title,
      artist,
      image_url,
      heart,
      media,
    });
    await newAudio.save();
    return newAudio;
  } catch (error) {
    throw error;
  }
};
const getAudios = () => {};
const getDetailAudio = () => {};
const updateAudio = () => {};
const deleteAudio = () => {};

module.exports = {
  createAudio,
  getAudios,
  getDetailAudio,
  updateAudio,
  deleteAudio,
};
