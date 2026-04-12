import { Link } from 'react-router-dom';

export default function DlFooter() {
  return (
    <div className="dl-footer-wrapper">
      <div className="dl-footer-content">
        <div className="dl-footer-logo">
          <span>Deep</span>Learning <span>In My Style</span>
        </div>
        <div className="dl-footer-links">
          <h3>Quick Links</h3>
          <Link to="/dl-course">Home</Link>
          <Link to="/dl-course/topics">Topics</Link>
          <Link to="/dl-course/about">About</Link>
          <Link to="/dl-course/contact">Contact</Link>
        </div>
        <div className="dl-footer-links">
          <h3>Popular Courses</h3>
          <ul>
            {[
              ['HTML IN MY STYLE', '/html-course'],
              ['CSS IN MY STYLE', '/css-course'],
              ['JAVASCRIPT IN MY STYLE', '/js-basic-course'],
              ['PYTHON IN MY STYLE', '/python-course'],
              ['AI IN MY STYLE', '/ai-course'],
            ].map(([label, href]) => (
              <li key={label}><a href={href}>{label}</a></li>
            ))}
          </ul>
        </div>
        <div className="dl-footer-social">
          <h3>Connect With Us</h3>
          <div className="dl-social-icons">
            <a href="https://t.me/Tech_in_my_style_bot" className="dl-social-icon"><i className="fab fa-telegram" /></a>
            <a href="https://www.instagram.com/techinmystyle?igsh=YXIxdWl2NGFmdXZk" className="dl-social-icon"><i className="fab fa-instagram" /></a>
            <a href="https://whatsapp.com/channel/0029VbAZrCD5fM5aOU10Av0d" className="dl-social-icon"><i className="fab fa-whatsapp" /></a>
            <a href="https://www.youtube.com/@TECHINMYSTYLE" className="dl-social-icon"><i className="fab fa-youtube" /></a>
          </div>
        </div>
      </div>
      <div className="dl-footer-bottom">
        <p>&copy; 2025 Deep Learning in my style. All rights reserved.</p>
      </div>
    </div>
  );
}
