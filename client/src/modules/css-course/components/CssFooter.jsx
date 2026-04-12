import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/CssFooter.css';

const CssPageFooter = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="css-page-footer">
      <div className="css-footer-container">
        <div className="css-footer-grid">
          {/* Column 1: Brand & About */}
          <div className="css-footer-col css-footer-brand">
            <div className="css-footer-logo">
              <span className="css-footer-logo__icon">{'{ }'}</span>
              <span className="css-footer-logo__text">CSS <span className="css-footer-logo__sub">IN MY STYLE</span></span>
              <div className="css-footer-logo__underline"></div>
            </div>
            <p className="css-footer-about">
              Learn CSS and modern web styling the right way — with clear explanations, 
              interactive examples, and hands-on practice. Powered by <span className="css-text-accent">TECH IN MY STYLE</span>.
            </p>
            <div className="css-footer-socials">
              <a href="https://t.me/Tech_in_my_style_bot" target="_blank" rel="noopener noreferrer" className="css-social-link" aria-label="Telegram">
                <i className="bi bi-telegram"></i>
              </a>
              <a href="https://whatsapp.com/channel/0029VbAZrCD5fM5aOU10Av0d" target="_blank" rel="noopener noreferrer" className="css-social-link" aria-label="WhatsApp">
                <i className="bi bi-whatsapp"></i>
              </a>
              <a href="https://www.instagram.com/techinmystyle" target="_blank" rel="noopener noreferrer" className="css-social-link" aria-label="Instagram">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="https://www.youtube.com/@TECHINMYSTYLE" target="_blank" rel="noopener noreferrer" className="css-social-link" aria-label="YouTube">
                <i className="bi bi-youtube"></i>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="css-footer-col">
            <h4 className="css-footer-title">QUICK LINKS</h4>
            <ul className="css-footer-links">
              <li><Link to="/css-course"><i className="bi bi-chevron-right"></i> Home</Link></li>
              <li><Link to="/css-course/reference"><i className="bi bi-chevron-right"></i> CSS Reference</Link></li>
              <li><Link to="/css-course/resources"><i className="bi bi-chevron-right"></i> Resources</Link></li>
              <li><Link to="/css-course/compiler"><i className="bi bi-chevron-right"></i> Playground</Link></li>
              <li><Link to="/css-course/connect"><i className="bi bi-chevron-right"></i> Let's Connect</Link></li>
            </ul>
          </div>

          {/* Column 3: CSS Topics */}
          <div className="css-footer-col">
            <h4 className="css-footer-title">CSS TOPICS</h4>
            <ul className="css-footer-links">
              <li><Link to="/css-course/reference"><i className="bi bi-chevron-right"></i> CSS Basics</Link></li>
              <li><Link to="/css-course/reference"><i className="bi bi-chevron-right"></i> CSS Properties A-Z</Link></li>
              <li><Link to="/css-course/property/flexbox"><i className="bi bi-chevron-right"></i> CSS Flexbox</Link></li>
              <li><Link to="/css-course/property/grid"><i className="bi bi-chevron-right"></i> CSS Grid</Link></li>
              <li><Link to="/css-course/property/animation"><i className="bi bi-chevron-right"></i> CSS Animations</Link></li>
              <li><Link to="/css-course/property/variables"><i className="bi bi-chevron-right"></i> CSS Variables</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="css-footer-col">
            <h4 className="css-footer-title">CONTACT</h4>
            <div className="css-footer-contact-list">
              <div className="css-contact-item">
                <div className="css-contact-icon"><i className="bi bi-envelope-fill"></i></div>
                <div className="css-contact-info">
                  <span className="css-contact-label">EMAIL US</span>
                  <a href="mailto:techinmystyle@gmail.com" className="css-contact-value">techinmystyle@gmail.com</a>
                </div>
              </div>
              <div className="css-contact-item">
                <div className="css-contact-icon"><i className="bi bi-youtube"></i></div>
                <div className="css-contact-info">
                  <span className="css-contact-label">YOUTUBE CHANNEL</span>
                  <a href="https://www.youtube.com/@TECHINMYSTYLE" target="_blank" rel="noopener noreferrer" className="css-contact-value">@TECHINMYSTYLE</a>
                </div>
              </div>
              <div className="css-contact-item">
                <div className="css-contact-icon"><i className="bi bi-instagram"></i></div>
                <div className="css-contact-info">
                  <span className="css-contact-label">INSTAGRAM</span>
                  <a href="https://www.instagram.com/techinmystyle" target="_blank" rel="noopener noreferrer" className="css-contact-value">@techinmystyle</a>
                </div>
              </div>
              <div className="css-contact-item">
                <div className="css-contact-icon"><i className="bi bi-telegram"></i></div>
                <div className="css-contact-info">
                  <span className="css-contact-label">TELEGRAM BOT</span>
                  <a href="https://t.me/Tech_in_my_style_bot" target="_blank" rel="noopener noreferrer" className="css-contact-value">Tech_in_my_style_bot</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright and Links */}
        <div className="css-footer-bottom">
          <div className="css-footer-bottom-left">
            <p>&copy; {new Date().getFullYear()} <span className="css-text-bold">CSS IN MY STYLE</span> · All rights reserved <span className="css-heart-icon">💙</span></p>
          </div>
          <div className="css-footer-bottom-right">
            <nav className="css-footer-legal">
              <Link to="/privacy">Privacy Policy</Link>
              <span className="css-dot-separator">•</span>
              <Link to="/terms">Terms of Use</Link>
              <span className="css-dot-separator">•</span>
              <Link to="/sitemap">Sitemap</Link>
            </nav>
            <button onClick={scrollToTop} className="css-back-to-top-btn">
              <i className="bi bi-arrow-up"></i> Back to top
            </button>
          </div>
        </div>
      </div>

      {/* Powered By Bottom Strip */}
      <div className="css-footer-powered-by">
        <p>
          <i className="bi bi-lightning-charge-fill"></i> Powered by <span className="css-text-bold">TECH IN MY STYLE</span> · Made with <span className="css-heart-icon">💙</span> for web learners everywhere
        </p>
      </div>
    </footer>
  );
};

export default CssPageFooter;
