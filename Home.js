import React from 'react';
import { useNavigate } from 'react-router-dom';
import { seriesData, leaderboardData } from '../data/seriesData';
import SeriesCard from '../components/SeriesCard';
import Leaderboard from '../components/Leaderboard';

const Home = () => {
  const navigate = useNavigate();
  const trendingSeries = seriesData.slice(0, 3);
  const topPredictors = leaderboardData.slice(0, 5);

  return (
    <div className="main-content">
      {/* Hero Section */}
      <section className="hero">
        <h1>🎬 Think You Know What Happens Next? 🔮</h1>
        <p>Join thousands of fans predicting the future of your favorite series! 
           Make predictions, compete with friends, and become the ultimate Story Prophet! 🌟</p>
        <button 
          className="cta-button"
          onClick={() => navigate('/explore')}
        >
          🚀 Start Predicting Now!
        </button>
      </section>

      {/* Trending Series */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ color: 'white', marginBottom: '1.5rem', textAlign: 'center' }}>
          🔥 Trending Series Right Now
        </h2>
        <div className="series-grid">
          {trendingSeries.map(series => (
            <SeriesCard key={series.id} series={series} />
          ))}
        </div>
      </section>

      {/* Leaderboard Preview */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ color: 'white', marginBottom: '1.5rem', textAlign: 'center' }}>
          🏆 Top Predictors This Week
        </h2>
        <Leaderboard data={topPredictors} />
        <div style={{ textAlign: 'center', marginTop: '1rem' }}>
          <button 
            className="cta-button"
            onClick={() => navigate('/leaderboard')}
            style={{ background: 'linear-gradient(45deg, #48dbfb, #0abde3)' }}
          >
            View Full Leaderboard 📈
          </button>
        </div>
      </section>

      {/* Features Grid */}
      <section>
        <h2 style={{ color: 'white', marginBottom: '2rem', textAlign: 'center' }}>
          🌟 Why Join PlotTwist?
        </h2>
        <div className="series-grid">
          <div className="series-card" style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎯</div>
            <h3>Make Predictions</h3>
            <p>Guess plot twists, character fates, and series endings before they happen!</p>
          </div>
          
          <div className="series-card" style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🏆</div>
            <h3>Compete & Win</h3>
            <p>Earn points for correct predictions and climb the global leaderboard!</p>
          </div>
          
          <div className="series-card" style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>💬</div>
            <h3>Chat with Fans</h3>
            <p>Join discussions in ChatBat and share your theories with the community!</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;