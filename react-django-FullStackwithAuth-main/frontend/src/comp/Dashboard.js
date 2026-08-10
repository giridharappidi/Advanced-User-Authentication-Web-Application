import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../utils/axios';
import '../styles/Dashboard.css';

function Dashboard() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchUserProfile();
  }, []);

  const fetchUserProfile = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem('access_token');
      if (!token) {
        navigate('/login');
        return;
      }

      // Since we don't have a profile endpoint, decode the token to get user info
      const decodedToken = JSON.parse(atob(token.split('.')[1]));
      setUser({
        id: decodedToken.user_id,
        username: decodedToken.username || 'User',
      });
    } catch (err) {
      console.error('Error fetching profile:', err);
      setError('Failed to load profile');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    navigate('/login');
  };

  if (loading) {
    return (
      <div className="dashboard-container">
        <div className="loading">Loading...</div>
      </div>
    );
  }

  return (
    <div className="dashboard-container">
      <div className="dashboard">
        <h1>Welcome, {user?.username || 'User'}!</h1>
        {error && <div className="error-message">{error}</div>}

        <div className="dashboard-content">
          <div className="user-info">
            <h2>User Information</h2>
            <p>
              <strong>Username:</strong> {user?.username}
            </p>
            <p>
              <strong>ID:</strong> {user?.id}
            </p>
          </div>

          <div className="dashboard-actions">
            <h2>Actions</h2>
            <button onClick={handleLogout} className="logout-btn">
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
