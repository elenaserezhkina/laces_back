const mongoose = require("mongoose");

// Color schema
const colorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  colorImg: String,
  url: String,
  isFavourite: { type: Boolean, default: false },
});

const ColorSchema = mongoose.model("colors", colorSchema);

module.exports = ColorSchema;
