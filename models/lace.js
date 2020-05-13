const mongoose = require("mongoose");

// Lace schema
const laceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  laceImg: Buffer,
  pattern: Buffer,
});

const Lace = mongoose.model("Lace", laceSchema);

module.exports = Lace;
