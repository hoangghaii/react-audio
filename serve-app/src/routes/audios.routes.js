const controller = require('../controllers/audios.controllers');

module.exports = function (app) {
  // @route GET api/posts
  // @desc Get posts
  // @access Private
  // app.get("/api/posts", verifyToken, controller.getPosts);

  // @route GET api/posts
  // @desc Get  detail post
  // @access Private
  // app.get("/api/posts/:id", verifyToken, controller.getDetailPost);

  // @route POST api/posts
  // @desc Create post
  // @access Private
  app.post('/api/audios', controller.createAudio);

  // @route PUT api/posts/:id
  // @desc Update post
  // @access Private
  // app.put("/api/posts/:id", verifyToken, controller.updatePost);

  // @route DELETE api/posts/:id
  // @desc Delete post
  // @access Private
  // app.delete("/api/posts/:id", verifyToken, controller.deletePost);
};
