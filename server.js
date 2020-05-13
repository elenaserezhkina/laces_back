require("dotenv").config();
const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const app = express();

const shoeRoutes = require("./routes/shoe.routes");
const colorRoutes = require("./routes/color.routes");
const laceRoutes = require("./routes/lace.routes");

// Connection for Mongoose
const connect = () => {
  return mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

connect();

app.use(express.json());

app.use("/color", colorRoutes);
app.use("/laces", laceRoutes);
app.use("/", shoeRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`app is running on ${PORT}`);
});
module.exports = app;
