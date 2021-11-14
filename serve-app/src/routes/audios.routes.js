const controller = require('../controllers/audios.controllers');

module.exports = function (app) {
  // @route GET api/audios
  // @desc Get audios
  // @access Public
  app.get('/api/audios', controller.getAudios);

  // @route GET api/audios
  // @desc Get detail audio
  // @access Public
  app.get('/api/audios/:id', controller.getDetailAudio);

  // @route POST api/audios
  // @desc Create audio
  // @access Public
  app.post('/api/audios', controller.createAudio);

  // @route PUT api/audios/:id
  // @desc Update audio
  // @access Public
  // app.put("/api/audios/:id", controller.updatePost);

  // @route DELETE api/audios/:id
  // @desc Delete audio
  // @access Public
  app.delete('/api/audios/:fileName', controller.deleteAudio);
};
