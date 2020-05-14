const mongoose = require("mongoose");

// Shoe schema
const shoeSchema = new mongoose.Schema({
  brand: {
    type: String,
    required: true,
  },
  colorVariants: [
    {
      color: { type: String },
      image: { type: String },
    },
  ],
  //svg
  laceImg: {
    type: String,
  },
  favorite: { type: Boolean, default: false },
});

const Shoe = mongoose.model("Shoe", shoeSchema);

module.exports = Shoe;
