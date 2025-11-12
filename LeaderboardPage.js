import React from 'react';
import { leaderboardData } from '../data/seriesData';
import Leaderboard from '../components/Leaderboard';

const LeaderboardPage = () => {
  return (
    <div className="main-content">
      <h1 style={{ color: 'white', textAlign: 'center', marginBottom: '2rem' }}>
        🏆 Global Leaderboard
      </h1>

      <Leaderboard data={leaderboardData} />

      {/* User Stats Section */}
      <div style={{ 
        background: 'rgba(255, 255, 255, 0.95)', 
        padding: '2rem', 
        borderRadius: '20px', 
        marginTop: '2rem',
        textAlign: 'center'
      }}>
        <h2 style={{ color: '#6d28d9', marginBottom: '1.5rem' }}>📊 Your Stats</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
          <div>
            <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#8b5cf6' }}>42</div>
            <div style={{ color: '#666' }}>Predictions Made</div>
          </div>
          <div>
            <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#8b5cf6' }}>28</div>
            <div style={{ color: '#666' }}>Correct Predictions</div>
          </div>
          <div>
            <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#8b5cf6' }}>67%</div>
            <div style={{ color: '#666' }}>Accuracy Rate</div>
          </div>
          <div>
            <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#8b5cf6' }}>#156</div>
            <div style={{ color: '#666' }}>Global Rank</div>
          </div>
        </div>

        <div style={{ 
          background: 'linear-gradient(45deg, #ff6b6b, #feca57)', 
          padding: '1rem 2rem', 
          borderRadius: '25px',
          color: 'white',
          fontWeight: 'bold',
          display: 'inline-block'
        }}>
          🎯 Level 7 Story Prophet
        </div>
      </div>

      {/* Achievement Badges */}
      <div style={{ 
        background: 'rgba(255, 255, 255, 0.95)', 
        padding: '2rem', 
        borderRadius: '20px', 
        marginTop: '2rem'
      }}>
        <h2 style={{ color: '#6d28d9', textAlign: 'center', marginBottom: '1.5rem' }}>🎖️ Your Achievements</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '1rem' }}>
          {[
            { icon: '🔮', name: 'First Prediction', earned: true },
            { icon: '🏆', name: 'Top 100', earned: true },
            { icon: '⭐', name: '5 Streak', earned: true },
            { icon: '👑', name: 'Series Master', earned: false },
            { icon: '💎', name: 'Perfect Week', earned: false },
            { icon: '🚀', name: 'Rising Star', earned: true }
          ].map((badge, index) => (
            <div 
              key={index}
              style={{ 
                textAlign: 'center',
                padding: '1rem',
                background: badge.earned ? 'linear-gradient(45deg, #a78bfa, #8b5cf6)' : 'rgba(0, 0, 0, 0.1)',
                borderRadius: '15px',
                color: badge.earned ? 'white' : '#999',
                opacity: badge.earned ? 1 : 0.6
              }}
            >
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{badge.icon}</div>
              <div style={{ fontSize: '0.8rem', fontWeight: '600' }}>{badge.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeaderboardPage;