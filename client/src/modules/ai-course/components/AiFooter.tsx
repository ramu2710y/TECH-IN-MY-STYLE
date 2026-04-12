import { Link } from 'react-router-dom'

export default function AiFooter() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/ai-course" className="logo-link">
              <div className="logo-icon">
                <img src="/Ai.svg" alt="AI In My Style" />
              </div>
              <span className="logo-text">AI <span>In My Style</span></span>
            </Link>
            <p>Your comprehensive resource for learning Artificial Intelligence — from fundamentals to advanced applications.</p>
            <div className="footer-socials">
              {[
                { icon: 'fa-telegram', href: 'https://t.me/Tech_in_my_style_bot' },
                { icon: 'fa-instagram', href: 'https://www.instagram.com/techinmystyle' },
                { icon: 'fa-whatsapp', href: 'https://whatsapp.com/channel/0029VbAZrCD5fM5aOU10Av0d' },
                { icon: 'fa-youtube', href: 'https://www.youtube.com/@TECHINMYSTYLE' },
              ].map((s, i) => (
                <a key={i} href={s.href} className="social-btn" target="_blank" rel="noopener noreferrer">
                  <i className={`fab ${s.icon}`}></i>
                </a>
              ))}
            </div>
          </div>

          <div className="footer-col">
            <h4>Navigation</h4>
            <ul>
              <li><Link to="/ai-course">Home</Link></li>
              <li><Link to="/ai-course/topics">Topics</Link></li>
              <li><Link to="/ai-course/about">About</Link></li>
              <li><Link to="/ai-course/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>AI Topics</h4>
            <ul>
              <li><Link to="/ai-course/topics/what-is-ai/definition">What is AI?</Link></li>
              <li><Link to="/ai-course/topics/types/narrow-ai">Types of AI</Link></li>
              <li><Link to="/ai-course/topics/ai-ml-dl/differences">AI vs ML vs DL</Link></li>
              <li><Link to="/ai-course/topics/search/algorithms">Search Algorithms</Link></li>
              <li><Link to="/ai-course/topics/game-playing/minimax">Game Playing</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>More Courses</h4>
            <ul>
              <li><a href="/html-course">HTML</a></li>
              <li><a href="/css-course">CSS</a></li>
              <li><a href="/python-course">Python</a></li>
              <li><a href="/java-course">Java</a></li>
              <li><a href="/c-course">C Programming</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 Artificial Intelligence In My Style. All Rights Reserved.</p>
          <p>Built with ❤️ for AI learners worldwide</p>
        </div>
      </div>
    </footer>
  )
}
