const mongoose = require('mongoose');

const PlayedSchema = new mongoose.Schema({
  home: {
    type: String,
    required: [true, 'must provide a team'],
    trim: true,
    maxLength: [20, 'name cannot be more than 20 characters'],
  },
  away: {
    type: String,
    required: [true, 'must provide a team'],
    trim: true,
    maxLength: [20, 'name cannot be more than 20 characters'],
  },
  predictions: {
    type: String,
    required: [true, 'must provide a predictions'],
    trim: true,
    maxLength: [20, 'name cannot be more than 20 characters'],
  },
  league: {
    type: String,
    required: [true, 'must provide a league'],
    trim: true,
    maxLength: [20, 'name cannot be more than 20 characters'],
  },
  scores: {
    type: String,
    trim: true,
    maxLength: [20, 'name cannot be more than 20 characters'],
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('PlayedGames', PlayedSchema);
