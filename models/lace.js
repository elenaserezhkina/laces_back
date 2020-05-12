const mongoose = require("mongoose");

// Lace schema
const laceSchema = new mogoose.Schema({
  name: {
    type: String,
    required: true,
  },
  laceImg: Buffer,
  pattern: Buffer,
});

const Lace = mongoose.model("Lace", laceSchema);

module.exports = Lace;
