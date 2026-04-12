import { Link } from 'react-router-dom'
import './MlFooter.css'

const courses = [
  { name: 'HTML IN MY STYLE', href: '/html-course' },
  { name: 'CSS IN MY STYLE', href: '/css-course' },
  { name: 'JAVASCRIPT (BASIC)', href: '/js-basic-course' },
  { name: 'JAVASCRIPT (INTERMEDIATE)', href: '/js-int-course' },
  { name: 'C IN MY STYLE', href: '/c-course' },
  { name: 'JAVA IN MY STYLE', href: '/java-course' },
  { name: 'PYTHON IN MY STYLE', href: '/python-course' },
  { name: 'DEEP LEARNING', href: '/dl-course' },
  { name: 'AI IN MY STYLE', href: '/ai-course' },
]

const socialLinks = [
  { icon: 'fab fa-telegram', href: 'https://t.me/Tech_in_my_style_bot', label: 'Telegram' },
  { icon: 'fab fa-instagram', href: 'https://www.instagram.com/techinmystyle?igsh=YXIxdWl2NGFmdXZk', label: 'Instagram' },
  { icon: 'fab fa-whatsapp', href: 'https://whatsapp.com/channel/0029VbAZrCD5fM5aOU10Av0d', label: 'WhatsApp' },
  { icon: 'fab fa-youtube', href: 'https://www.youtube.com/@TECHINMYSTYLE', label: 'YouTube' },
]

export default function MlFooter() {
  return (
    <footer className="ml-site-footer" id="site-footer">
      <div className="ml-footer-content">
        <div className="ml-footer-section ml-footer-brand">
          <span className="ml-logo-text">ML<span className="ml-highlight"> In My Style</span></span>
          <p>Making Machine Learning accessible and engaging for everyone.</p>
        </div>

        <div className="ml-footer-section ml-footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/ml-course">Home</Link></li>
            <li><Link to="/ml-course/topics">Topics</Link></li>
            <li><a href="/ml-course#about">About</a></li>
          </ul>
        </div>

        <div className="ml-footer-section ml-footer-courses">
          <h3>Our Courses</h3>
          <ul>
            {courses.map((c, i) => (
              <li key={i}>
                <a href={c.href}>{c.name}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="ml-footer-section ml-footer-social">
          <h3>Connect With Us</h3>
          <div className="ml-social-icons">
            {socialLinks.map((s, i) => (
              <a
                key={i}
                href={s.href}
                className="ml-social-icon"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
              >
                <i className={s.icon}></i>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="ml-footer-bottom">
        <p>&copy; 2025 Machine Learning in My Style. All rights reserved.</p>
      </div>
    </footer>
  )
}
