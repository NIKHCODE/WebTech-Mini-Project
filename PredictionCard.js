import React, { useState } from 'react';

const PredictionCard = ({ prediction, onVote }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [hasVoted, setHasVoted] = useState(false);

  const handleVote = (option) => {
    if (!hasVoted) {
      setSelectedOption(option);
      setHasVoted(true);
      onVote(prediction.id, option);
    }
  };

  const totalVotes = Object.values(prediction.votes).reduce((a, b) => a + b, 0);

  return (
    <div className="prediction-card">
      <h3 className="prediction-question">{prediction.question}</h3>
      
      <div className="prediction-options">
        {prediction.options.map((option, index) => {
          const voteCount = prediction.votes[option] || 0;
          const percentage = totalVotes > 0 ? ((voteCount / totalVotes) * 100).toFixed(1) : 0;
          
          return (
            <button
              key={index}
              className={`option-button ${selectedOption === option ? 'voted' : ''}`}
              onClick={() => handleVote(option)}
              disabled={hasVoted && selectedOption !== option}
            >
              {option}
              {hasVoted && (
                <div className="vote-stats">
                  <span>{voteCount} votes</span>
                  <span>{percentage}%</span>
                </div>
              )}
            </button>
          );
        })}
      </div>
      
      <div className="prediction-meta">
        <small>⏰ Deadline: {new Date(prediction.deadline).toLocaleDateString()}</small>
        {!hasVoted && <small>🗳️ {totalVotes} total votes</small>}
      </div>
    </div>
  );
};

export default PredictionCard;