const mongoose = require('mongoose');
const shortId = require('shortid');

// Define the schema for the ShortUrl model
const shortUrlSchema = new mongoose.Schema({
  full: {
    type: String,
    required: true
  },
  short: {
    type: String,
    required: true,
    default: shortId.generate // Generate a short URL using shortid library
  },
  notes: {
    type: String,
    required: false
  },
  clicks: {
    type: Number,
    required: true,
    default: 0
  }
});

// Create and export the ShortUrl model
module.exports = mongoose.model('ShortUrl', shortUrlSchema);
