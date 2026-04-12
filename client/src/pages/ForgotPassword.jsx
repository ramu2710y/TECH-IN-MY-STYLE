import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Auth.css';
import axios from 'axios';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Custom cursor
    const initCustomCursor = () => {
      if (window.innerWidth <= 768) return;

      const existingCursor = document.querySelector('.custom-cursor');
      if (existingCursor) existingCursor.remove();

      const cursor = document.createElement('div');
      cursor.classList.add('custom-cursor');
      
      const cursorDot = document.createElement('div');
      cursorDot.classList.add('cursor-dot');
      
      cursor.appendChild(cursorDot);
      document.body.appendChild(cursor);
      
      document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        cursor.style.opacity = '1';
      });
    };

    initCustomCursor();

    return () => {
      const cursor = document.querySelector('.custom-cursor');
      if (cursor) cursor.remove();
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      await axios.post(`${API_URL}/api/auth/forgot-password`, { email });
      setSuccess('Password reset link has been sent to your email. Please check your inbox.');
      setEmail('');
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to send reset email. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page theme-violet">
      <div className="auth-container">
        <div className="auth-card">
          <div className="auth-header">
            <Link to="/" className="auth-logo">
              <h1>TECH IN MY STYLE</h1>
            </Link>
            <div className="auth-icon-badge">
              <i className="fas fa-envelope"></i>
            </div>
            <h2>Forgot Password?</h2>
            <p>Enter your email to receive a password reset link</p>
          </div>

          <form className="auth-form" onSubmit={handleSubmit}>
            {error && <div className="error-message">{error}</div>}
            {success && <div className="success-message">{success}</div>}

            <div className="form-group">
              <label htmlFor="email">
                <i className="fas fa-envelope"></i>
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your registered email"
                required
              />
            </div>

            <button type="submit" className="btn primary auth-btn" disabled={loading}>
              {loading ? (
                <>
                  <i className="fas fa-spinner fa-spin"></i>
                  Sending...
                </>
              ) : (
                <>
                  <i className="fas fa-paper-plane"></i>
                  Send Reset Link
                </>
              )}
            </button>
          </form>

          <div className="auth-switch">
            <p>Remember your password? <Link to="/login">Login here</Link></p>
            <p>Don't have an account? <Link to="/register">Register here</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
