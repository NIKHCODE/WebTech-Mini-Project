import React from 'react';
import { useNavigate } from 'react-router-dom';

const SeriesCard = ({ series }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/series/${series.id}`);
  };

  return (
    <div className="series-card" onClick={handleCardClick}>
      <div className="series-header">
        <div className="series-poster">{series.poster}</div>
        <h3 className="series-title">{series.title}</h3>
      </div>
      
      <div className="series-genre">
        {series.genre.map((genre, index) => (
          <span key={index} className="genre-tag">
            {genre}
          </span>
        ))}
      </div>
      
      <p className="series-description">{series.description}</p>
      
      <div className="series-meta">
        <span className={`series-status status-${series.status.toLowerCase()}`}>
          {series.status === 'Ongoing' ? '📺 Ongoing' : '📅 Upcoming'}
        </span>
        <span className="series-release">
          🗓️ {new Date(series.releaseDate).toLocaleDateString()}
        </span>
      </div>
      
      <div className="series-predictions">
        <small>🎯 {series.predictions.length} active predictions</small>
      </div>
    </div>
  );
};

export default SeriesCard;