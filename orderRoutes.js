// routes/orderRoutes.js
const express = require("express");
const router = express.Router();
const Order = require("../models/Order");

// Create order
router.post("/", async (req, res) => {
  const order = new Order(req.body);
  await order.save();
  res.json(order);
});

module.exports = router;