import React from 'react';
import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div className="main-content">
      <div style={{ 
        maxWidth: '800px', 
        margin: '0 auto', 
        padding: '2rem' 
      }}>
        <h1 style={{ color: 'white', textAlign: 'center', marginBottom: '2rem' }}>
          🏆 Your Dashboard
        </h1>

        {/* User Stats */}
        <div style={{ 
          background: 'rgba(255, 255, 255, 0.95)', 
          padding: '2rem', 
          borderRadius: '15px',
          marginBottom: '2rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
            <div style={{
              width: '60px',
              height: '60px',
              background: '#8b5cf6',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '1.5rem',
              fontWeight: 'bold',
              marginRight: '1rem'
            }}>
              {user?.username?.charAt(0).toUpperCase()}
            </div>
            <div>
              <h2 style={{ margin: 0, color: '#6d28d9' }}>{user?.username}</h2>
              <p style={{ margin: 0, color: '#6b7280' }}>{user?.email}</p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <div style={{
              flex: 1,
              minWidth: '200px',
              background: '#f0f9ff',
              padding: '1.5rem',
              borderRadius: '10px',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#0369a1' }}>
                🍪
              </div>
              <h3 style={{ color: '#0369a1', margin: '0.5rem 0' }}>Brownie Points</h3>
              <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#0369a1', margin: 0 }}>
                {user?.browniePoints || 0}
              </p>
            </div>

            <div style={{
              flex: 1,
              minWidth: '200px',
              background: '#f0fdf4',
              padding: '1.5rem',
              borderRadius: '10px',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#15803d' }}>
                🔮
              </div>
              <h3 style={{ color: '#15803d', margin: '0.5rem 0' }}>Total Predictions</h3>
              <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#15803d', margin: 0 }}>
                {user?.predictions?.length || 0}
              </p>
            </div>
          </div>
        </div>

        {/* Recent Predictions */}
        <div style={{ 
          background: 'rgba(255, 255, 255, 0.95)', 
          padding: '2rem', 
          borderRadius: '15px'
        }}>
          <h3 style={{ color: '#6d28d9', marginBottom: '1rem' }}>📊 Your Predictions</h3>
          {user?.predictions && user.predictions.length > 0 ? (
            <div>
              {user.predictions.map((pred, index) => (
                <div key={index} style={{
                  padding: '1rem',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                  marginBottom: '0.5rem',
                  background: '#f9fafb'
                }}>
                  <div style={{ fontWeight: '600' }}>Prediction #{index + 1}</div>
                  <div>Your vote: <strong>{pred.option}</strong></div>
                  <div>Points earned: <strong>+{pred.pointsEarned || 10}</strong></div>
                </div>
              ))}
            </div>
          ) : (
            <div style={{ textAlign: 'center', color: '#6b7280', padding: '2rem' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔮</div>
              <p>You haven't made any predictions yet!</p>
              <p>Go to the Predictions page to start earning brownie points!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;