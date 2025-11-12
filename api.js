const API_BASE = 'http://localhost:5000/api';

export const apiService = {
  async getPredictions() {
    const response = await fetch(`${API_BASE}/predictions`);
    return await response.json();
  },

  async getSeries() {
    const response = await fetch(`${API_BASE}/series`);
    return await response.json();
  },

  async voteOnPrediction(predictionId, option, token) {
    const response = await fetch(`${API_BASE}/predictions/${predictionId}/vote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ option }),
    });
    return await response.json();
  }
};