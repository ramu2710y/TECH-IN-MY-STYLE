import { Link } from 'react-router-dom';

export default function DsaFooter() {
  return (
    <footer className="dsa-footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand-col">
            <div className="fb-logo">
              <span style={{ fontSize: '1.4rem' }}>🐉</span>
              <span>DSA in My Style</span>
            </div>
            <p>A premium DSA learning platform. Master data structures and algorithms like a warrior — structured, visual, immersive.</p>
          </div>
          <div className="footer-col">
            <h5>Navigate</h5>
            <ul>
              <li><Link to="/dsa-course">Home</Link></li>
              <li><Link to="/dsa-course/topics">Topics</Link></li>
              <li><Link to="/dsa-course/topic/arrays">Arrays</Link></li>
              <li><Link to="/dsa-course/topic/linked-list">Linked Lists</Link></li>
              <li><Link to="/dsa-course/bookmarks">Bookmarks</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Learn</h5>
            <ul>
              <li><Link to="/dsa-course/topic/arrays">Arrays</Link></li>
              <li><Link to="/dsa-course/topic/linked-list">Linked Lists</Link></li>
              <li><Link to="/dsa-course/topic/trees">Trees</Link></li>
              <li><Link to="/dsa-course/topic/graphs">Graphs</Link></li>
              <li><Link to="/dsa-course/topic/dp">Dynamic Programming</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Connect</h5>
            <div className="footer-socials">
              <a href="https://www.instagram.com/tech_in_my_style?igsh=MXU0dG5qMDYwdG1xcw==" className="fsoc" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect width="20" height="20" x="2" y="2" rx="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
                Instagram
              </a>
              <a href="https://www.youtube.com/@TECHINMYSTYLE" className="fsoc" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-2C18.88 4 12 4 12 4s-6.88 0-8.59.42a2.78 2.78 0 0 0-1.95 2A29.94 29.94 0 0 0 1 12a29.94 29.94 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 2C5.12 20 12 20 12 20s6.88 0 8.59-.42a2.78 2.78 0 0 0 1.95-2A29.94 29.94 0 0 0 23 12a29.94 29.94 0 0 0-.46-5.58z"/>
                  <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
                </svg>
                YouTube
              </a>
              <a href="https://t.me/Tech_in_my_style_bot" className="fsoc" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="m22 2-7 20-4-9-9-4Z"/>
                  <path d="M22 2 11 13"/>
                </svg>
                Telegram
              </a>
              <a href="https://whatsapp.com/channel/0029VbAZrCD5fM5aOU10Av0d" className="fsoc" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                </svg>
                WhatsApp
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 Tech in My Style. All rights reserved.</p>
          <div className="footer-pill">
            <span className="yd" />
            Made with ⚔️ DSA
          </div>
        </div>
      </div>
    </footer>
  );
}
