const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors()); // Allow cross-origin requests

// Sample product data
const products = [
  { name: "T-Shirt", price: 499 },
  { name: "Sneakers", price: 2499 },
  { name: "Smartwatch", price: 3999 },
];

// API endpoint
app.get("/api/products", (req, res) => {
  res.json(products);
});

// Start server
const PORT = 5000;
app.listen(PORT, () => console.log(🚀 Backend running on http://localhost:${PORT}));
