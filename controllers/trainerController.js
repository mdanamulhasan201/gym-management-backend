// trainerController.js
const Trainer = require('../models/Trainer');  // Assuming you have a Trainer model

// Get trainer by ID
const getTrainer = async (req, res) => {
  try {
    const trainer = await Trainer.findById(req.params.id);
    if (trainer) {
      res.json(trainer);
    } else {
      res.status(404).json({ message: 'Trainer not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Create a new trainer
const createTrainer = async (req, res) => {
  const { name, expertise, experience } = req.body;
  try {
    const newTrainer = new Trainer({ name, expertise, experience });
    const savedTrainer = await newTrainer.save();
    res.status(201).json(savedTrainer);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create trainer' });
  }
};

module.exports = { getTrainer, createTrainer };
