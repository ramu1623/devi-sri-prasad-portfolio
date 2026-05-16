const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const contactRoutes = require("./routes/contactRoutes");

dotenv.config();

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// database connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// routes
app.use("/api", contactRoutes);

// test route
app.get("/", (req, res) => {
  res.send("API running");
});

// server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});