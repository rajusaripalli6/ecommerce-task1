// routes/userRoutes.js
const express = require("express");
const router = express.Router();
const User = require("../models/User");

// Register
router.post("/register", async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.json(user);
});

// Login
router.post("/login", async (req, res) => {
  const user = await User.findOne(req.body);
  res.json(user ? "Success" : "Invalid");
});

module.exports = router;