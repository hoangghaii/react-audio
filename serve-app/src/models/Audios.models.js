const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AudioSchema = new Schema({
  title: { type: String, required: true },
  artist: { type: String, required: true },
  image_url: { type: String, required: true },
  heart: { type: Boolean, required: true },
  // media: { data: Buffer, contentType: String, required: true },
});

module.exports = mongoose.model('audios', AudioSchema);
