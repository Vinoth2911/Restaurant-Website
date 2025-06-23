const express = require("express");
const app = express();
const cors = require('cors');



const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");


dotenv.config();
app.use(express.json());


// Update MongoDB connection options
const mongooseOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose
  .connect(process.env.MONGO_URL, mongooseOptions)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

  app.use(cors());

  
  app.use("/auth", authRoute);


app.listen(5000, () => {
  console.log("Backend is running on port 5000.");
});
