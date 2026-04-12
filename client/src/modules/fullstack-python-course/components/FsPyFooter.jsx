import { Link } from 'react-router-dom';

export default function FsPyFooter() {
  return (
    <footer className="footer">
      <div className="footer-content">

        {/* Logo block */}
        <div>
          <div className="footer-logo-block">
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
              alt="Python Logo"
              height="40"
            />
            <span>Full Stack Python</span>
          </div>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)', lineHeight: 1.6, marginTop: 4 }}>
            A flagship module of Tech in My Style. From zero to production-level backend systems.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <Link to="/fullstack-python-course">Home</Link>
          <Link to="/fullstack-python-course/python">Topics</Link>
          <Link to="/fullstack-python-course/build">Build</Link>
        </div>

        {/* Popular Courses */}
        <div className="footer-links">
          <h3>Popular Courses</h3>
          <a href="https://techinmystyle.com" target="_blank" rel="noreferrer">HTML IN MY STYLE</a>
          <a href="https://techinmystyle.com" target="_blank" rel="noreferrer">CSS IN MY STYLE</a>
          <a href="https://techinmystyle.com" target="_blank" rel="noreferrer">JAVASCRIPT IN MY STYLE</a>
          <a href="https://techinmystyle.com" target="_blank" rel="noreferrer">PYTHON IN MY STYLE</a>
        </div>

        {/* Social */}
        <div className="footer-social">
          <h3>Connect With Us</h3>
          <div className="social-icons">
            <a href="https://t.me/Tech_in_my_style_bot" target="_blank" rel="noreferrer" className="social-icon">
              <i className="fab fa-telegram" />
            </a>
            <a href="https://www.instagram.com/techinmystyle" target="_blank" rel="noreferrer" className="social-icon">
              <i className="fab fa-instagram" />
            </a>
            <a href="https://whatsapp.com/channel/0029VbAZrCD5fM5aOU10Av0d" target="_blank" rel="noreferrer" className="social-icon">
              <i className="fab fa-whatsapp" />
            </a>
            <a href="https://www.youtube.com/@TECHINMYSTYLE" target="_blank" rel="noreferrer" className="social-icon">
              <i className="fab fa-youtube" />
            </a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 Full Stack Python in My Style. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
