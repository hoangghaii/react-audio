const {
  createAudio,
  getAudios,
  getDetailAudio,
  updateAudio,
  deleteAudio,
} = require('../services/audios.services');
const uploadAudio = require('../middleware/uploadAudio');

exports.getAudios = async (req, res) => {
  try {
    const audios = await getAudios();
    res.status(200).json({ success: true, audios });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

exports.getDetailAudio = async (req, res) => {
  const { id } = req.params;

  if (!id)
    return res.status(400).json({ success: false, message: 'Id is required' });

  try {
    const audio = await getDetailAudio(id);
    res.status(200).json({ success: true, audio });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

exports.createAudio = async (req, res) => {
  const { songName, artist, imageUrl } = req.body;
  const filename = req.files[0].originalname.split('.')[0];
  const file = req.files[0].buffer;
  const link = await uploadAudio(filename, file);

  if (!file)
    return res
      .status(400)
      .json({ success: false, message: 'File is required' });

  try {
    const newAudio = await createAudio(songName, link, artist, imageUrl);
    res.status(200).json({ success: true, audio: newAudio });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

exports.deleteAudio = async (req, res) => {
  const fileName = req.params.fileName;

  if (!fileName)
    return res
      .status(400)
      .json({ success: false, message: 'File name is required' });

  try {
    await deleteAudio(fileName);
    res.status(200).json({ success: true, message: 'Create successfully!' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};
