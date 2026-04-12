import { Link } from 'react-router-dom';

export default function DscFooter() {
  return (
    <footer className="dsc-footer">
      <div className="dsc-footer-content">
        <div className="dsc-footer-logo">
          <h2>Data Science in my style</h2>
          <p>Learn data science your way</p>
        </div>
        <div className="dsc-footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/dsc-course">Home</Link></li>
            <li><Link to="/dsc-course/topics">Topics</Link></li>
            <li><Link to="/dsc-course/about">About</Link></li>
          </ul>
        </div>
        <div className="dsc-footer-links">
          <h3>Popular Courses</h3>
          <ul>
            <li><a href="/html-course">HTML IN MY STYLE</a></li>
            <li><a href="/css-course">CSS IN MY STYLE</a></li>
            <li><a href="/js-basic-course">JAVASCRIPT IN MY STYLE (BASIC)</a></li>
            <li><a href="/python-course">PYTHON IN MY STYLE</a></li>
            <li><a href="/ml-course">MACHINE LEARNING IN MY STYLE</a></li>
            <li><a href="/ai-course">ARTIFICIAL INTELLIGENCE IN MY STYLE</a></li>
          </ul>
        </div>
        <div className="dsc-footer-social">
          <h3>Connect With Us</h3>
          <div className="dsc-social-icons">
            <a href="https://www.instagram.com/techinmystyle?igsh=YXIxdWl2NGFmdXZk" className="dsc-social-icon" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
              </svg>
            </a>
            <a href="https://t.me/Tech_in_my_style_bot" className="dsc-social-icon" aria-label="Telegram">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>
              </svg>
            </a>
            <a href="https://whatsapp.com/channel/0029VbAZrCD5fM5aOU10Av0d" className="dsc-social-icon" aria-label="WhatsApp">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
              </svg>
            </a>
            <a href="https://www.youtube.com/@TECHINMYSTYLE" className="dsc-social-icon" aria-label="YouTube">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-2C18.88 4 12 4 12 4s-6.88 0-8.59.42a2.78 2.78 0 0 0-1.95 2A29.94 29.94 0 0 0 1 12a29.94 29.94 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 2C5.12 20 12 20 12 20s6.88 0 8.59-.42a2.78 2.78 0 0 0 1.95-2A29.94 29.94 0 0 0 23 12a29.94 29.94 0 0 0-.46-5.58z"/>
                <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="dsc-footer-bottom">
        <p>© 2025 Data Science in my style. All rights reserved.</p>
      </div>
    </footer>
  );
}
