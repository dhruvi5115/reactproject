const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// ✅ MongoDB connect (IMPORTANT)
// ✅ NEW (Docker use)
mongoose.connect("mongodb://mongo:27017/shoesDB")
  .then(() => console.log("MongoDB Connected ✅"))
  .catch(err => console.log("MongoDB Error ❌", err));

// Routes
const productRoutes = require("./routes/productRoutes");
app.use("/api/products", productRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

// Server start
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

