const express = require("express");
const router = express.Router();
const { registerUser, loginUser } = require("../controllers/authController"); 
const authMiddleware = require("../middleware/authMiddleware");

// Register route
router.post("/register", registerUser);

// Login route
router.post("/login", loginUser);

// Protected route
router.get("/profile", authMiddleware, (req, res) => {
  res.json({ message: "This is a protected route", user: req.user });
});

module.exports = router;
