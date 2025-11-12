import React, { useState, useEffect } from 'react';
import PredictionCard from '../components/PredictionCard';
import { apiService } from '../services/api';
import { useAuth } from '../context/AuthContext';

const Predictions = () => {
  const [selectedSeries, setSelectedSeries] = useState('all');
  const [predictions, setPredictions] = useState([]);
  const [series, setSeries] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  // Load data from backend API
  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      setLoading(true);
      // Load predictions from real backend
      const predictionsResponse = await apiService.getPredictions();
      const seriesResponse = await apiService.getSeries();
      
      setPredictions(predictionsResponse.predictions || []);
      setSeries(seriesResponse.series || []);
    } catch (error) {
      console.error('Error loading data:', error);
      alert('Failed to load predictions. Make sure backend is running on port 5000.');
    } finally {
      setLoading(false);
    }
  };

  const filteredPredictions = selectedSeries === 'all' 
    ? predictions 
    : predictions.filter(pred => pred.seriesTitle === selectedSeries);

  const handleVote = async (predictionId, option) => {
    try {
      // Check if user is logged in
      const token = localStorage.getItem('token');
      if (!token || !user) {
        alert('Please login to vote!');
        return;
      }

      console.log('🔄 Voting...', { predictionId, option });
      const voteResult = await apiService.voteOnPrediction(predictionId, option, token);
      console.log('✅ Vote result:', voteResult);
      
      alert(`🎉 ${voteResult.message} Total Brownie Points: ${voteResult.browniePoints}`);
      
      // Reload ALL data from backend to get updated votes
      await loadData();
      
    } catch (error) {
      console.error('❌ Vote error:', error);
      alert('Failed to record vote. Please try again.');
    }
  };

  if (loading) {
    return (
      <div className="main-content" style={{ textAlign: 'center', color: 'white', padding: '3rem' }}>
        <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>⏳</div>
        <h3>Loading predictions...</h3>
        <p>Connecting to PlotTwist backend</p>
      </div>
    );
  }

  return (
    <div className="main-content">
      <h1 style={{ color: 'white', textAlign: 'center', marginBottom: '2rem' }}>
        🎯 Prediction Portal
      </h1>

      {/* Series Filter */}
      <div style={{ 
        background: 'rgba(255, 255, 255, 0.95)', 
        padding: '1.5rem', 
        borderRadius: '15px', 
        marginBottom: '2rem',
        textAlign: 'center'
      }}>
        <label style={{ marginRight: '1rem', fontWeight: '600', color: '#6d28d9' }}>
          Filter by Series:
        </label>
        <select
          value={selectedSeries}
          onChange={(e) => setSelectedSeries(e.target.value)}
          style={{
            padding: '0.8rem 1.5rem',
            border: '2px solid #8b5cf6',
            borderRadius: '25px',
            fontSize: '1rem',
            outline: 'none',
            background: 'white',
            cursor: 'pointer'
          }}
        >
          <option value="all">📺 All Series</option>
          {series.map(s => (
            <option key={s.id} value={s.title}>
              {s.poster} {s.title}
            </option>
          ))}
        </select>
      </div>

      {/* Predictions Grid */}
      <div>
        {filteredPredictions.map(prediction => (
          <div key={prediction.id} style={{ marginBottom: '2rem' }}>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '1rem', 
              marginBottom: '0.5rem',
              padding: '0 1rem'
            }}>
              <span style={{ fontSize: '1.5rem' }}>{prediction.seriesPoster}</span>
              <span style={{ color: 'white', fontWeight: '600' }}>{prediction.seriesTitle}</span>
            </div>
            <PredictionCard prediction={prediction} onVote={handleVote} />
          </div>
        ))}
      </div>

      {filteredPredictions.length === 0 && (
        <div style={{ 
          textAlign: 'center', 
          color: 'white', 
          padding: '3rem',
          background: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '20px',
          backdropFilter: 'blur(10px)'
        }}>
          <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🔮</div>
          <h3>No predictions available!</h3>
          <p>Be the first to make a prediction for your favorite series!</p>
        </div>
      )}

      {/* Prediction Stats */}
      <div style={{ 
        background: 'rgba(255, 255, 255, 0.95)', 
        padding: '1.5rem', 
        borderRadius: '15px', 
        marginTop: '2rem',
        textAlign: 'center'
      }}>
        <h3 style={{ color: '#6d28d9', marginBottom: '1rem' }}>📈 Prediction Statistics</h3>
        <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#8b5cf6' }}>
              {predictions.length}
            </div>
            <div>Total Predictions</div>
          </div>
          <div>
            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#8b5cf6' }}>
              {series.length}
            </div>
            <div>Active Series</div>
          </div>
          <div>
            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#8b5cf6' }}>
              {predictions.reduce((total, pred) => total + (pred.totalVotes || 0), 0)}
            </div>
            <div>Community Votes</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Predictions;