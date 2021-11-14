const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AudioSchema = new Schema({
  songName: { type: String, required: true },
  songUrl: { type: String, required: true },
  artist: { type: String, required: true },
  imageUrl: { type: String, required: true },
  heart: { type: Boolean, required: true },
});

module.exports = mongoose.model('audio', AudioSchema);
