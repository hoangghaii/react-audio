const controller = require('../controllers/audios.controllers');
const upload = require('../middleware/upload');

module.exports = function (app) {
  // @route GET api/audios
  // @desc Get audios
  // @access Public
  // app.get("/api/audios", controller.getaudios);

  // @route GET api/audios
  // @desc Get detail audio
  // @access Public
  app.get('/api/audios/:fileName', controller.getDetailAudio);

  // @route POST api/audios
  // @desc Create audio
  // @access Public
  app.post('/api/audios', upload.single('file'), controller.createAudio);

  // @route PUT api/audios/:id
  // @desc Update audio
  // @access Public
  // app.put("/api/audios/:id", controller.updatePost);

  // @route DELETE api/audios/:id
  // @desc Delete audio
  // @access Public
  app.delete('/api/audios/:fileName', controller.deleteAudio);
};
