const mongoose = require("mongoose");

// Shoe schema
const shoeSchema = new mongoose.Schema({
  brand: {
    type: String,
    required: true,
  },
  colorVariants: [
    new mongoose.Schema({
      color: { type: String },
      image: { type: Buffer },
    }),
  ],
  //svg
  laceImg: Buffer,
});

const Shoe = mongoose.model("Shoe", shoeSchema);

module.exports = Shoe;
