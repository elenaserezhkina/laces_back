const mongoose = require("mongoose");

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
const ShoeSchema = mongoose.model("shoeSchema", shoeSchema);

module.exports = ShoeSchema;
