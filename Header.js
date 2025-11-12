import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Header = () => {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <header style={{
      background: 'rgba(255, 255, 255, 0.95)',
      padding: '1rem 2rem',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      backdropFilter: 'blur(10px)'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <Link to="/" style={{
          fontSize: '1.5rem',
          fontWeight: 'bold',
          color: '#6d28d9',
          textDecoration: 'none'
        }}>
          🎬 PlotTwist
        </Link>

        <nav>
          {user ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span style={{ color: '#6d28d9', fontWeight: '600' }}>
                🍪 {user.browniePoints} | {user.username}
              </span>
              <Link to="/dashboard" style={{
                color: '#6d28d9',
                textDecoration: 'none',
                fontWeight: '600'
              }}>
                Dashboard
              </Link>
              <Link to="/predictions" style={{
                color: '#6d28d9',
                textDecoration: 'none',
                fontWeight: '600',
                margin: '0 1rem'
              }}>
                Predictions
              </Link>
              <button
                onClick={handleLogout}
                style={{
                  background: '#ef4444',
                  color: 'white',
                  border: 'none',
                  padding: '0.5rem 1rem',
                  borderRadius: '5px',
                  cursor: 'pointer'
                }}
              >
                Logout
              </button>
            </div>
          ) : (
            <div>
              <Link to="/predictions" style={{
                color: '#6d28d9',
                textDecoration: 'none',
                fontWeight: '600',
                marginRight: '1rem'
              }}>
                Predictions
              </Link>
              <Link to="/login" style={{
                background: '#8b5cf6',
                color: 'white',
                padding: '0.5rem 1rem',
                borderRadius: '5px',
                textDecoration: 'none',
                fontWeight: '600'
              }}>
                Login
              </Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;