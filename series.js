const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const sampleSeries = [
    { id: 1, title: "Demon Slayer", poster: "⚔️" },
    { id: 2, title: "Attack on Titan", poster: "👹" },
    { id: 3, title: "Jujutsu Kaisen", poster: "🐍" }
  ];
  
  res.json({
    message: 'Series route working!',
    series: sampleSeries
  });
});

module.exports = router;