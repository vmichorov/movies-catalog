const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  title: { type: String, required: true },
  releasedAt: { type: Number, required: true },
  isFavourite: { type: Boolean, default: false },
  length: { type: Number, required: true },
  genre: { type: String, required: true },
  description: { type: String, required: true },
  imgUrl: { type: String, required: true, match: /^https?:\/\// },
});

module.exports = mongoose.model("Movie", schema);
