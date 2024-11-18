// models/Trainer.js
const mongoose = require('mongoose');

// Define the schema for Trainer
const trainerSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    expertise: { type: String, required: true },
    experience: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

// Create a model for the schema
const Trainer = mongoose.model('Trainer', trainerSchema);

module.exports = Trainer;  // Export the model
