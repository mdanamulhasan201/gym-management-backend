// trainerRoutes.js
const express = require('express');
const router = express.Router();
const { getTrainer, createTrainer } = require('../controllers/trainerController');  // Controller methods

// Define routes
router.get('/:id', getTrainer);  // Example: Get trainer by ID
router.post('/', createTrainer);  // Example: Create a new trainer

module.exports = router;  // Export the router
