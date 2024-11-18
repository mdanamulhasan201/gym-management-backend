const Class = require('../models/Class');
const User = require('../models/User');

// Create class schedule
const createClass = async (req, res) => {
  const { className, date, trainerId, maxTrainees } = req.body;

  // Check if admin is attempting to create more than 5 classes a day
  const existingClasses = await Class.find({ date: { $eq: date } });
  if (existingClasses.length >= 5) {
    return res.status(400).json({ message: 'Class schedule limit exceeded for the day' });
  }

  const trainer = await User.findById(trainerId);
  if (!trainer || trainer.role !== 'trainer') {
    return res.status(400).json({ message: 'Invalid trainer ID' });
  }

  const newClass = new Class({
    className,
    date,
    trainer: trainerId,
    maxTrainees,
    trainees: [],
  });

  const savedClass = await newClass.save();
  res.status(201).json(savedClass);
};

// Book a class
const bookClass = async (req, res) => {
  const { classId } = req.body;
  const trainee = req.user;

  const gymClass = await Class.findById(classId);
  if (!gymClass) {
    return res.status(404).json({ message: 'Class not found' });
  }

  if (gymClass.trainees.length >= gymClass.maxTrainees) {
    return res.status(400).json({ message: 'Class is fully booked' });
  }

  gymClass.trainees.push(trainee._id);
  await gymClass.save();
  res.status(200).json({ message: 'Class booked successfully' });
};

module.exports = { createClass, bookClass };
