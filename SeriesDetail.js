import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { seriesData } from '../data/seriesData';
import PredictionCard from '../components/PredictionCard';

const SeriesDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const series = seriesData.find(s => s.id === parseInt(id));

  if (!series) {
    return (
      <div className="main-content" style={{ textAlign: 'center', color: 'white' }}>
        <h2>Series not found! 😔</h2>
        <button 
          className="cta-button"
          onClick={() => navigate('/explore')}
        >
          Back to Explore
        </button>
      </div>
    );
  }

  const handleVote = (predictionId, option) => {
    // In a real app, this would send data to the backend
    console.log(`Voted for prediction ${predictionId}: ${option}`);
    alert(`🎉 Thanks for voting! You predicted: ${option}`);
  };

  return (
    <div className="main-content">
      {/* Series Header */}
      <div style={{ 
        background: 'rgba(255, 255, 255, 0.95)', 
        padding: '2rem', 
        borderRadius: '20px', 
        marginBottom: '2rem',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)'
      }}>
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
          <div style={{ fontSize: '6rem' }}>{series.poster}</div>
          
          <div style={{ flex: 1 }}>
            <h1 style={{ color: '#6d28d9', marginBottom: '1rem' }}>{series.title}</h1>
            
            <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
              {series.genre.map((genre, index) => (
                <span key={index} className="genre-tag">
                  {genre}
                </span>
              ))}
            </div>
            
            <p style={{ marginBottom: '1rem', lineHeight: '1.6', color: '#666' }}>
              {series.description}
            </p>
            
            <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
              <div>
                <strong>Status:</strong>{' '}
                <span className={`series-status status-${series.status.toLowerCase()}`}>
                  {series.status}
                </span>
              </div>
              
              <div>
                <strong>Next Episode:</strong>{' '}
                <span style={{ color: '#6d28d9', fontWeight: '600' }}>
                  🗓️ {new Date(series.releaseDate).toLocaleDateString()}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Active Predictions */}
      <section>
        <h2 style={{ color: 'white', marginBottom: '1.5rem' }}>
          🎯 Active Predictions for {series.title}
        </h2>
        
        {series.predictions.map(prediction => (
          <PredictionCard 
            key={prediction.id} 
            prediction={prediction} 
            onVote={handleVote}
          />
        ))}
        
        {series.predictions.length === 0 && (
          <div style={{ 
            textAlign: 'center', 
            color: 'white', 
            padding: '3rem',
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '20px',
            backdropFilter: 'blur(10px)'
          }}>
            <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>⏰</div>
            <h3>No active predictions right now!</h3>
            <p>Check back later for new prediction opportunities.</p>
          </div>
        )}
      </section>

      {/* Community Stats */}
      <div style={{ 
        background: 'rgba(255, 255, 255, 0.95)', 
        padding: '1.5rem', 
        borderRadius: '15px', 
        marginTop: '2rem',
        textAlign: 'center'
      }}>
        <h3 style={{ color: '#6d28d9', marginBottom: '1rem' }}>📊 Community Activity</h3>
        <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#8b5cf6' }}>
              {series.predictions.length}
            </div>
            <div>Active Predictions</div>
          </div>
          <div>
            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#8b5cf6' }}>
              {series.predictions.reduce((total, pred) => total + Object.values(pred.votes).reduce((a, b) => a + b, 0), 0)}
            </div>
            <div>Total Votes</div>
          </div>
          <div>
            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#8b5cf6' }}>
              {Math.max(...series.predictions.map(pred => Object.values(pred.votes).reduce((a, b) => a + b, 0)))}
            </div>
            <div>Most Popular Poll</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeriesDetail;