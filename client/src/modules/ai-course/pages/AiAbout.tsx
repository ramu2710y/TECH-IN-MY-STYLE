import { Link } from 'react-router-dom'
import AiHeader from '../components/AiHeader'
import AiFooter from '../components/AiFooter'
import '../styles/ai-about.css'

const offers = [
  { icon: 'fa-book-open', cls: 'oi-1', title: 'Comprehensive Topics', desc: 'Wide range of AI topics from basic concepts to advanced techniques in a structured format.' },
  { icon: 'fa-code', cls: 'oi-2', title: 'Practical Examples', desc: 'Real-world Python code examples that demonstrate AI concepts in action.' },
  { icon: 'fa-briefcase', cls: 'oi-3', title: 'Interview Prep', desc: 'Curated questions and detailed answers based on industry standards.' },
  { icon: 'fa-video', cls: 'oi-4', title: 'Learning Resources', desc: 'Videos, PDFs, and recommended readings to deepen your knowledge.' },
]

export default function AiAbout() {
  return (
    <>
      <AiHeader />

      {/* HERO */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-inner">
            <div>
              <div className="about-eyebrow">
                <span className="badge badge-cyan">About Us</span>
              </div>
              <h1>Making <span className="grad">AI Education</span> Accessible to Everyone</h1>
              <p>At Artificial Intelligence In My Style, we believe understanding AI should be accessible to everyone — from students to seasoned professionals.</p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link to="/ai-course/topics" className="btn btn-primary">
                  <i className="fas fa-rocket"></i> Start Learning
                </Link>
                <Link to="/ai-course/contact" className="btn btn-outline">Contact Us</Link>
              </div>
            </div>
            <div className="about-hero-img">
              <img src="https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=800" alt="AI Learning" />
            </div>
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="mission-section">
        <div className="container">
          <div className="mission-grid">
            <div className="mission-text">
              <span className="badge badge-purple" style={{ marginBottom: '1.25rem', display: 'inline-flex' }}>Our Mission</span>
              <h2>We demystify <span className="grad">AI technology</span> through clear explanations</h2>
              <p>Our mission is to provide clear, comprehensive, and engaging educational resources on AI concepts — from fundamental principles to advanced applications.</p>
              <p>Whether you're a student, professional, or simply curious about AI, we help you build a solid foundation to navigate the rapidly evolving landscape of artificial intelligence.</p>
              <div className="mission-points">
                {[
                  { icon: 'fa-bullseye', cls: 'mp-icon-1', title: 'Structured Learning', desc: 'Topics organized from beginner to advanced' },
                  { icon: 'fa-code', cls: 'mp-icon-2', title: 'Hands-on Code', desc: 'Every concept backed by working Python examples' },
                  { icon: 'fa-users', cls: 'mp-icon-3', title: 'Community Focused', desc: 'Built for learners at every stage of their journey' },
                ].map((m, i) => (
                  <div className="mp-item" key={i}>
                    <div className={`mp-icon ${m.cls}`}><i className={`fas ${m.icon}`}></i></div>
                    <div className="mp-text">
                      <h4>{m.title}</h4>
                      <p>{m.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mission-visual">
              {[
                { num: '30+', label: 'Topics', color: 'var(--cyan)' },
                { num: '11', label: 'Categories', color: 'var(--purple-light)' },
                { num: '100%', label: 'Free', color: 'var(--green)' },
                { num: '∞', label: 'Learning', color: 'var(--orange)' },
              ].map((s, i) => (
                <div className="mv-card" key={i}>
                  <div className="mv-num" style={{ color: s.color }}>{s.num}</div>
                  <div className="mv-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* OFFERS */}
      <section className="offers-section">
        <div className="container">
          <div className="section-label"><span className="badge badge-cyan">What We Offer</span></div>
          <h2 className="section-title">Everything you need to <span className="grad">succeed</span></h2>
          <p className="section-sub">Comprehensive resources designed to take you from AI beginner to confident practitioner.</p>
          <div className="offers-grid">
            {offers.map((o, i) => (
              <div className="offer-card" key={i}>
                <div className={`offer-icon ${o.cls}`}><i className={`fas ${o.icon}`}></i></div>
                <h3>{o.title}</h3>
                <p>{o.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="container" style={{ paddingBottom: '5rem' }}>
        <div className="cta-banner">
          <h2>Ready to explore <span className="grad">AI concepts</span>?</h2>
          <p>Dive into our comprehensive collection of AI topics and resources.</p>
          <div className="cta-actions">
            <Link to="/ai-course/topics" className="btn btn-primary">
              <i className="fas fa-th-large"></i> Browse Topics
            </Link>
          </div>
        </div>
      </div>

      <AiFooter />
    </>
  )
}
