const express = require('express');
const router = express.Router();
const Prediction = require('../models/prediction');
const User = require('../models/User');
const jwt = require('jsonwebtoken');

// Get user from token
const getUserFromToken = async (token) => {
  try {
    const decoded = jwt.verify(token, 'your-secret-key');
    return await User.findById(decoded.userId);
  } catch (error) {
    return null;
  }
};

// Vote on prediction
router.post('/:id/vote', async (req, res) => {
  try {
    const { option } = req.body;
    const predictionId = req.params.id;
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
      return res.status(401).json({ error: 'Please login to vote' });
    }

    const user = await getUserFromToken(token);
    if (!user) {
      return res.status(401).json({ error: 'Invalid token' });
    }

    // Check if user already voted
    const existingVote = user.predictions.find(p => p.predictionId.toString() === predictionId);
    if (existingVote) {
      return res.status(400).json({ error: 'You have already voted on this prediction' });
    }

    const prediction = await Prediction.findById(predictionId);
    if (!prediction) {
      return res.status(404).json({ error: 'Prediction not found' });
    }

    // Add prediction to user's history
    user.predictions.push({
      predictionId: predictionId,
      option: option,
      pointsEarned: 10 // Award points for voting
    });

    // Add brownie points
    user.browniePoints += 10;

    // Update prediction votes
    prediction.totalVotes += 1;
    if (!prediction.votes) prediction.votes = {};
    prediction.votes[option] = (prediction.votes[option] || 0) + 1;

    await user.save();
    await prediction.save();

    res.json({
      message: `Vote recorded for ${option}! +10 Brownie Points!`,
      browniePoints: user.browniePoints,
      status: 'success'
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to record vote' });
  }
});

// Get all predictions
router.get('/', async (req, res) => {
  try {
    const predictions = await Prediction.find();
    
    const samplePredictions = [
      {
        _id: '1',
        question: "Who will win the final battle?",
        options: ["Tanjiro wins", "Nezuko transforms", "Other outcome"],
        totalVotes: 28
      },
      {
        _id: '2', 
        question: "Next character to die?",
        options: ["Levi", "Mikasa", "Armin", "No one"],
        totalVotes: 28
      }
    ];

    const transformedPredictions = predictions.length > 0 ? predictions : samplePredictions;

    res.json({
      predictions: transformedPredictions.map(pred => ({
        id: pred._id || pred.id,
        title: pred.question,
        description: `Make your prediction!`,
        seriesTitle: "Popular Series",
        seriesPoster: "📺",
        options: pred.options,
        votes: pred.votes || { [pred.options[0]]: 10, [pred.options[1]]: 8, [pred.options[2]]: 5 },
        totalVotes: pred.totalVotes || 23
      }))
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to load predictions' });
  }
});

module.exports = router;