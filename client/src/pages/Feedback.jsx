import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WebGLBackground from '../components/WebGLBackground';
import './Feedback.css';
import AOS from 'aos';

const Feedback = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });

    // Custom cursor implementation
    const initCustomCursor = () => {
      if (window.innerWidth <= 768) return;

      // Remove any existing custom cursor
      const existingCursor = document.querySelector('.custom-cursor');
      if (existingCursor) {
        existingCursor.remove();
      }

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
      
      document.addEventListener('mouseout', (e) => {
        if (e.clientY <= 0 || e.clientX <= 0 || e.clientX >= window.innerWidth || e.clientY >= window.innerHeight) {
          cursor.style.opacity = '0';
        }
      });
    };

    initCustomCursor();

    // Cleanup function
    return () => {
      const cursor = document.querySelector('.custom-cursor');
      if (cursor) {
        cursor.remove();
      }
    };
  }, []);

  return (
    <div className="feedback-page">
      <WebGLBackground />
      <Header />
      
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content" data-aos="fade-up">
            <h1>Feedback <span className="color-change">Center</span></h1>
            <p>Help us improve and create a better learning experience for everyone</p>
          </div>
        </div>
      </section>

      {/* Feedback Center */}
      <section className="feedback-center">
        <div className="container">
          <div className="feedback-intro" data-aos="fade-up">
            <p>At Tech in My Style, we believe that learning is a journey — and like every journey, mistakes can happen along the way. If you notice any error on our website — such as broken links, incorrect content, or anything that needs improvement — we would love to hear from you.</p>
            <p><strong>Your feedback helps us create a better, cleaner, and more user-friendly learning platform for everyone. 💡</strong></p>
          </div>

          <div className="feedback-card" data-aos="fade-up" data-aos-delay="100">
            <div className="feedback-icon">
              <i className="fas fa-comment-dots"></i>
            </div>
            <h3>📝 Share Your Feedback</h3>
            <p>Please drop your feedback using the form below.</p>
            
            {/* Dropdown Section */}
            <div className="dropdown-container">
              <button 
                className={`dropdown-btn ${dropdownOpen ? 'active' : ''}`}
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <i className="fas fa-external-link-alt"></i>
                Submit Your Feedback Here
                <i className="fas fa-chevron-down"></i>
              </button>
              <div className={`dropdown-content ${dropdownOpen ? 'active' : ''}`}>
                <div className="dropdown-item">
                  <strong>When submitting, kindly:</strong>
                </div>
                <div className="dropdown-item">
                  📷 <strong>Attach a screenshot</strong> of the issue (if possible)
                </div>
                <div className="dropdown-item">
                  📝 <strong>Clearly describe the problem</strong>
                </div>
                <div className="dropdown-item">
                  ⚡ This makes it easier for us to review and fix it quickly.
                </div>
              </div>
            </div>

            <button 
              className="btn primary" 
              onClick={() => window.open('https://forms.gle/VJHwCcSGue7j1eJS7', '_blank')}
            >
              <i className="fas fa-paper-plane"></i>
              Open Feedback Form
            </button>
          </div>

          {/* Connect and Note Cards */}
          <div className="feedback-row">
            <div className="feedback-card" data-aos="fade-right" data-aos-delay="200">
              <div className="feedback-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <h3>📩 Connect With Us</h3>
              <p>You can also send us a direct message on our social platforms — we will make sure to respond and resolve the issue.</p>
            </div>
            
            <div className="feedback-card" data-aos="fade-left" data-aos-delay="300">
              <div className="feedback-icon">
                <i className="fas fa-heart"></i>
              </div>
              <h3>❤️ A Note to Our Learners</h3>
              <p>We are here because of you. If something goes wrong, please understand that it was not intentional — and we are always ready to make it right.</p>
            </div>
          </div>

          {/* Promise Section */}
          <div className="feedback-card promise-card" data-aos="fade-up" data-aos-delay="400">
            <h3>🌟 Our Promise</h3>
            <div className="promise-grid">
              <div className="promise-item">
                <i className="fas fa-tools"></i>
                <p><strong>We try to fix everything</strong> as much as possible by ourselves</p>
              </div>
              <div className="promise-item">
                <i className="fas fa-ear-listen"></i>
                <p><strong>We will listen</strong> to your concerns</p>
              </div>
              <div className="promise-item">
                <i className="fas fa-bolt"></i>
                <p><strong>We will rectify errors</strong> quickly</p>
              </div>
              <div className="promise-item">
                <i className="fas fa-chart-line"></i>
                <p><strong>We will keep improving</strong> to provide quality content</p>
              </div>
            </div>
            <div className="promise-note">
              <p><em>We sincerely apologize if anyone ever feels inconvenienced or disappointed.</em></p>
              <p><strong>If this platform can make a difference in even one learner's life, that brings us true happiness.</strong></p>
              <p>Stay connected, keep learning, and let's grow together. 🌱</p>
              <p><strong>— Team Tech in My Style</strong></p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Feedback;
