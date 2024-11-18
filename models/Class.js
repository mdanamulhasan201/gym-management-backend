const mongoose = require('mongoose');

const classSchema = new mongoose.Schema(
  {
    className: { type: String, required: true },
    date: { type: Date, required: true },
    trainer: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    maxTrainees: { type: Number, default: 10 },
    trainees: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  },
  { timestamps: true }
);

const Class = mongoose.model('Class', classSchema);

module.exports = Class;
