const express = require("express");
const mongoose = require("mongoose");
const app = express();
const shoeRoutes = require("./routes/shoe.routes");
// Connection for Mongoose
const connect = () => {
  return mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

connect();

app.use(express.json());

app.use("/", shoeRoutes);
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`app is running on ${PORT}`);
});
