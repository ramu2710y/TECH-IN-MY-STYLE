export default function HtmlTagPageFooter() {
  return (
    <footer className="tag-page-footer">
      <div className="tag-footer-container">
        <div className="tag-footer-content">
          <div className="tag-footer-text">
            <h3>HTML IN MY STYLE</h3>
            <p>Learn all the HTML content in my style</p>
          </div>

          <div className="tag-social-icons">
            {/* Instagram */}
            <div className="tag-social-icon-wrapper">
              <a
                href="https://www.instagram.com/techinmystyle?igsh=YXIxdWl2NGFmdXZk"
                className="tag-social-icon"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <span className="tag-social-icon-label">Instagram</span>
            </div>

            {/* YouTube */}
            <div className="tag-social-icon-wrapper">
              <a
                href="https://www.youtube.com/@TECHINMYSTYLE"
                className="tag-social-icon"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
                </svg>
              </a>
              <span className="tag-social-icon-label">YouTube</span>
            </div>

            {/* Telegram */}
            <div className="tag-social-icon-wrapper">
              <a
                href="https://t.me/Tech_in_my_style_bot"
                className="tag-social-icon"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 2L11 13" />
                  <path d="M22 2L15 22L11 13L2 9L22 2z" />
                </svg>
              </a>
              <span className="tag-social-icon-label">Telegram</span>
            </div>
          </div>
        </div>

        <div className="tag-contact-email">
          <p>
            <a href="mailto:techinmystyle@gmail.com" target="_blank" rel="noopener noreferrer">
              Contact us: techinmystyle@gmail.com
            </a>
          </p>
        </div>

        <div className="tag-copyright">
          <p>&copy; {new Date().getFullYear()} HTML IN MY STYLE. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}
