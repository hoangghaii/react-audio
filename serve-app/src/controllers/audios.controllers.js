const {
  createAudio,
  getAudios,
  getDetailAudio,
  updateAudio,
  deleteAudio,
} = require('../services/audios.services');

exports.createAudio = async (req, res) => {
  const { title, artist, image_url, heart, media } = req.body;

  if (!title)
    return res
      .status(400)
      .json({ success: false, message: 'Title is required' });

  try {
    const newAudio = await createAudio(title, artist, image_url, heart, media);
    res
      .status(200)
      .json({ success: true, message: 'Create successfully!', audo: newAudio });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};
