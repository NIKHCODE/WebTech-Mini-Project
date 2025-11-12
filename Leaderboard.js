import React from 'react';

const Leaderboard = ({ data }) => {
  const getRankColor = (rank) => {
    switch(rank) {
      case 1: return '#FFD700'; // Gold
      case 2: return '#C0C0C0'; // Silver
      case 3: return '#CD7F32'; // Bronze
      default: return '#6d28d9';
    }
  };

  return (
    <div className="leaderboard">
      <h2 style={{ textAlign: 'center', marginBottom: '2rem', color: '#6d28d9' }}>
        🏆 Top Predictors Leaderboard
      </h2>
      
      {data.map((user, index) => (
        <div key={user.id} className="leaderboard-item">
          <div 
            className="leaderboard-rank"
            style={{ color: getRankColor(index + 1) }}
          >
            #{index + 1}
          </div>
          
          <div className="leaderboard-avatar">
            {user.avatar}
          </div>
          
          <div className="leaderboard-info">
            <div className="leaderboard-name">{user.name}</div>
            <div className="leaderboard-score">Score: {user.score.toLocaleString()}</div>
          </div>
          
          <div className="leaderboard-badge">
            {index === 0 && '👑'}
            {index === 1 && '⭐'}
            {index === 2 && '🔥'}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Leaderboard;