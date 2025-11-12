import React, { useState, useMemo } from 'react';
import { seriesData } from '../data/seriesData';
import SeriesCard from '../components/SeriesCard';

const Explore = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');

  const genres = useMemo(() => {
    const allGenres = seriesData.flatMap(series => series.genre);
    return ['all', ...new Set(allGenres)];
  }, []);

  const filteredSeries = useMemo(() => {
    return seriesData.filter(series => {
      const matchesSearch = series.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           series.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesGenre = selectedGenre === 'all' || series.genre.includes(selectedGenre);
      const matchesStatus = statusFilter === 'all' || series.status.toLowerCase() === statusFilter;
      
      return matchesSearch && matchesGenre && matchesStatus;
    });
  }, [searchTerm, selectedGenre, statusFilter]);

  return (
    <div className="main-content">
      <h1 style={{ color: 'white', textAlign: 'center', marginBottom: '2rem' }}>
        🔍 Explore All Series
      </h1>

      {/* Filters */}
      <div style={{ 
        background: 'rgba(255, 255, 255, 0.95)', 
        padding: '2rem', 
        borderRadius: '20px', 
        marginBottom: '2rem',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)'
      }}>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
          {/* Search Input */}
          <div style={{ flex: 1, minWidth: '200px' }}>
            <input
              type="text"
              placeholder="🔍 Search series..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: '100%',
                padding: '1rem',
                border: '2px solid #8b5cf6',
                borderRadius: '25px',
                fontSize: '1rem',
                outline: 'none'
              }}
            />
          </div>

          {/* Genre Filter */}
          <div>
            <select
              value={selectedGenre}
              onChange={(e) => setSelectedGenre(e.target.value)}
              style={{
                padding: '1rem',
                border: '2px solid #8b5cf6',
                borderRadius: '25px',
                fontSize: '1rem',
                outline: 'none',
                background: 'white'
              }}
            >
              {genres.map(genre => (
                <option key={genre} value={genre}>
                  {genre === 'all' ? '🎭 All Genres' : genre}
                </option>
              ))}
            </select>
          </div>

          {/* Status Filter */}
          <div>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              style={{
                padding: '1rem',
                border: '2px solid #8b5cf6',
                borderRadius: '25px',
                fontSize: '1rem',
                outline: 'none',
                background: 'white'
              }}
            >
              <option value="all">📺 All Status</option>
              <option value="ongoing">🎬 Ongoing</option>
              <option value="upcoming">📅 Upcoming</option>
            </select>
          </div>

          {/* Reset Filters */}
          <button
            onClick={() => {
              setSearchTerm('');
              setSelectedGenre('all');
              setStatusFilter('all');
            }}
            style={{
              padding: '1rem 1.5rem',
              background: 'linear-gradient(45deg, #ff6b6b, #feca57)',
              color: 'white',
              border: 'none',
              borderRadius: '25px',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}
          >
            🔄 Reset
          </button>
        </div>
      </div>

      {/* Series Grid */}
      <div className="series-grid">
        {filteredSeries.map(series => (
          <SeriesCard key={series.id} series={series} />
        ))}
      </div>

      {filteredSeries.length === 0 && (
        <div style={{ 
          textAlign: 'center', 
          color: 'white', 
          padding: '3rem',
          background: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '20px',
          backdropFilter: 'blur(10px)'
        }}>
          <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🔍</div>
          <h3>No series found!</h3>
          <p>Try adjusting your search criteria or filters.</p>
        </div>
      )}
    </div>
  );
};

export default Explore;