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

const updateAudio = async (id, songName, songUrl, artist, imageUrl, heart) => {
  try {
    const currentAudio = await Audio.findById(id);

    let updatedAudio = {
      songName: songName || currentAudio.songName,
      songUrl: songUrl || currentAudio.songUrl,
      artist: artist || currentAudio.artist,
      imageUrl: imageUrl || currentAudio.imageUrl,
      heart: heart || currentAudio.heart,
    };

    updatedAudio = await Audio.findByIdAndUpdate(id, updatedAudio, {
      new: true,
    });
    if (!updatedAudio) return;
    return updatedAudio;
  } catch (error) {
    throw error;
  }
};

const deleteAudio = async (id) => {
  try {
    const deletedAudio = await Audio.findByIdAndDelete(id);
    if (!deletedAudio) return;
    return deletedAudio;
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
