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

exports.updatePost = async (req, res) => {
  const { id } = req.params;
  const { songName, artist, imageUrl, heart } = req.body;
  const file = req.files[0];
  let songUrl;

  if (file) {
    const fileName = req.files[0].originalname.split('.')[0];
    const fileBuffer = req.files[0].buffer;
    songUrl = await uploadAudio(fileName, fileBuffer);
  }

  try {
    const updatedAudio = await updateAudio(
      id,
      songName,
      songUrl,
      artist,
      imageUrl,
      heart,
    );
    if (!updatedAudio)
      return res
        .status(401)
        .json({ success: false, message: 'Audio not found!' });

    res.status(200).json({
      success: true,
      message: 'Update successfully!',
      audio: updatedAudio,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

exports.deleteAudio = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedAudio = await deleteAudio(id);
    if (!deletedAudio)
      return res
        .status(401)
        .json({ success: false, message: 'Audio not found!' });
    res.status(200).json({ success: true, message: 'Delete successfully!' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};
