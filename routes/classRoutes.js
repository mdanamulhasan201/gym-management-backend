const express = require('express');
const { createClass, bookClass } = require('../controllers/classController');
const { protect, admin, trainer } = require('../middleware/roleMiddleware');

const router = express.Router();

// Admin can create classes
router.post('/create', protect, admin, createClass);

// Trainee can book classes
router.post('/book', protect, bookClass);

module.exports = router;
