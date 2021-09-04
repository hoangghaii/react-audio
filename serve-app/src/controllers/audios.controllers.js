const {
  createAudio,
  getAudios,
  getDetailAudio,
  updateAudio,
  deleteAudio,
} = require('../services/audios.services');

exports.getDetailAudio = async (req, res) => {
  const fileName = req.params.fileName;

  if (!fileName)
    return res
      .status(400)
      .json({ success: false, message: 'File name is required' });

  try {
    await getDetailAudio(fileName);
    res.status(200).json({ success: true, message: 'Create successfully!' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

exports.createAudio = async (req, res) => {
  const file = req.file;

  if (!file)
    return res
      .status(400)
      .json({ success: false, message: 'File is required' });

  try {
    const imgUrl = `http://localhost:${process.env.PORT}/file/${req.file.filename}`;
    res
      .status(200)
      .json({ success: true, message: 'Create successfully!', imgUrl });
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
