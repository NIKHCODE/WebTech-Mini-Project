const express = require('express');
const router = express.Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');

// Get user dashboard
router.get('/', async (req, res) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      return res.status(401).json({ error: 'Please login' });
    }

    const decoded = jwt.verify(token, 'your-secret-key');
    const user = await User.findById(decoded.userId).populate('predictions.predictionId');

    res.json({
      user: {
        id: user._id,
        username: user.username,
        browniePoints: user.browniePoints,
        totalPredictions: user.predictions.length,
        predictions: user.predictions
      }
    });
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' });
  }
});

module.exports = router;