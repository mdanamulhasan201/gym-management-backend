// userRoutes.js
const express = require('express');
const router = express.Router();
const { getUser, updateUser } = require('../controllers/userController');  // Ensure proper controller methods

// Define routes
router.get('/:id', getUser);  // Example: Get user by ID
router.put('/:id', updateUser);  // Example: Update user by ID

module.exports = router;  // Export the router
