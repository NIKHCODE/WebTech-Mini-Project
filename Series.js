const mongoose = require('mongoose');

const seriesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  genre: [String],
  poster: String,
  description: String,
  status: {
    type: String,
    enum: ['Ongoing', 'Upcoming', 'Completed'],
    default: 'Ongoing'
  },
  releaseDate: Date,
  totalPredictions: {
    type: Number,
    default: 0
  },
  popularity: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Series', seriesSchema);