const mongoose = require("mongoose");

// Color schema
const colorSchema = new mogoose.Schema({
  name: {
    type: String,
    required: true,
  },
  colorImg: Buffer,
  url: String,
});

const Color = mongoose.model("Color", colorSchema);

module.exports = Color;
