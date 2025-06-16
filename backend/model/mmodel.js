const mongoose = require("mongoose");

const mSchema = new mongoose.Schema(
  {
    title: String,
    content: String,
    image: String,
  }
);

const mModel = mongoose.model("movies", mSchema);

module.exports = mModel; 