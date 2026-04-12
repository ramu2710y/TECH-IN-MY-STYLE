import { Link } from 'react-router-dom';
import './CFooter.css';

export default function CFooter() {
  return (
    <footer className="c-footer">
      <div className="c-container">
        <div className="c-footer-content">
          <div className="c-footer-section">
            <div className="c-footer-logo">
              <i className="fas fa-code"></i>
              <span className="c-logo-text">C Programming<span className="c-logo-accent"> In My Style</span></span>
            </div>
            <p className="c-footer-description">Master C programming with our comprehensive learning platform</p>
          </div>
          <div className="c-footer-section">
            <h4 className="c-footer-title">Quick Links</h4>
            <ul className="c-footer-links">
              <li><Link to="/c-course">Home</Link></li>
              <li><a href="/c-course#c-topics">Topics</a></li>
              <li><a href="/c-course#c-resources">Resources</a></li>
              <li><a href="/c-course#c-about">About</a></li>
            </ul>
          </div>
          <div className="c-footer-section">
            <h4 className="c-footer-title">Popular Topics</h4>
            <ul className="c-footer-links">
              <li><Link to="/c-course/topic/introduction">Introduction</Link></li>
              <li><Link to="/c-course/topic/basics">C Basics</Link></li>
              <li><Link to="/c-course/topic/pointers">Pointers</Link></li>
              <li><Link to="/c-course/topic/memory-management">Memory Management</Link></li>
            </ul>
          </div>
          <div className="c-footer-section">
            <h4 className="c-footer-title">Connect</h4>
            <div className="c-social-links">
              <a href="https://t.me/Tech_in_my_style_bot" className="c-social-icon" target="_blank" rel="noreferrer"><i className="fab fa-telegram"></i></a>
              <a href="https://www.instagram.com/techinmystyle" className="c-social-icon" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>
              <a href="https://whatsapp.com/channel/0029VbAZrCD5fM5aOU10Av0d" className="c-social-icon" target="_blank" rel="noreferrer"><i className="fab fa-whatsapp"></i></a>
              <a href="https://www.youtube.com/@TECHINMYSTYLE" className="c-social-icon" target="_blank" rel="noreferrer"><i className="fab fa-youtube"></i></a>
            </div>
          </div>
        </div>
        <div className="c-footer-bottom">
          <p>&copy; 2025 C Programming In My Style. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
