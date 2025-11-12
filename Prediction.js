const mongoose = require('mongoose');

const predictionSchema = new mongoose.Schema({
  series: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Series',
    required: true
  },
  question: {
    type: String,
    required: true
  },
  type: {
    type: String,
    enum: ['yesno', 'multiple'],
    default: 'yesno'
  },
  options: [String],
  correctAnswer: String,
  deadline: Date,
  isActive: {
    type: Boolean,
    default: true
  },
  episodeReference: String,
  totalVotes: {
    type: Number,
    default: 0
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
}, {
  timestamps: true
});

// Vote sub-schema
const voteSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  option: String,
  votedAt: {
    type: Date,
    default: Date.now
  }
});

predictionSchema.add({
  votes: [voteSchema]
});

module.exports = mongoose.model('Prediction', predictionSchema);