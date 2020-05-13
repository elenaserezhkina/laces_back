const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const app = express();
const shoeRoutes = require("./routes/shoe.routes");
const colorRoutes = require("./routes/color.routes");
// Connection for Mongoose
const connect = () => {
  return mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

connect();

app.use(express.json());

app.use("/shoes", shoeRoutes);
app.use("/color", colorRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`app is running on ${PORT}`);
});
