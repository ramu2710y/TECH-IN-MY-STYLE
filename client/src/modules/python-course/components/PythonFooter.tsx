import { Link } from 'react-router-dom'
import pyLogo from '../assets/py.svg'

export default function PythonFooter() {
  return (
    <footer className="py-footer">
      <div className="py-footer-inner">
        <div className="py-footer-grid">
          <div className="py-footer-brand-col">
            <div className="py-fb-logo">
              <img src={pyLogo} alt="Python Logo" className="py-footer-logo-icon" />
              <span>Python in my style</span>
            </div>
            <p>Empowering developers to master Python with structured, practical tutorials and a hands-on approach to modern programming.</p>
          </div>
          <div className="py-footer-col">
            <h5>Explore</h5>
            <ul>
              <li><Link to="/python-course">Home</Link></li>
              <li><Link to="/python-course/topics">Learning Path</Link></li>
              <li><Link to="/python-course/tasks">Challenge Lab</Link></li>
              <li><Link to="/python-course/about">Our Story</Link></li>
            </ul>
          </div>
          <div className="py-footer-col">
            <h5>Curriculum</h5>
            <ul>
              <li><Link to="/python-course/subtopics/python-overview">Python Basics</Link></li>
              <li><Link to="/python-course/subtopics/function-definition">Functional Coding</Link></li>
              <li><Link to="/python-course/subtopics/classes-objects">Advanced OOP</Link></li>
              <li><Link to="/python-course/subtopics/regex">RegEx Master</Link></li>
            </ul>
          </div>
          <div className="py-footer-col">
            <h5>Connect</h5>
            <div className="py-footer-socials">
              <a href="https://www.instagram.com/tech_in_my_style" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-instagram"></i> Instagram
              </a>
              <a href="https://www.youtube.com/@TECHINMYSTYLE" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-youtube"></i> YouTube
              </a>
              <a href="https://t.me/Tech_in_my_style_bot" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-telegram"></i> Telegram
              </a>
              <a href="https://whatsapp.com/channel/0029VbAZrCD5fM5aOU10Av0d" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-whatsapp"></i> WhatsApp
              </a>
            </div>
          </div>
        </div>
        <div className="py-footer-bottom">
          <div className="py-footer-legal">
            <p>© 2025 Tech In My Style. All rights reserved.</p>
            <div className="py-footer-legal-links">
              <Link to="/privacy">Privacy</Link>
              <Link to="/terms">Terms</Link>
            </div>
          </div>
          <div className="py-footer-pill">Built with Python 🐍</div>
        </div>
      </div>
    </footer>
  )
}
