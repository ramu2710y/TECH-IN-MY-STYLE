import { Link } from 'react-router-dom';
import DlNavbar from '../components/DlNavbar';
import DlFooter from '../components/DlFooter';
import './DlAbout.css';

const offers = [
  { icon: 'fa-brain', title: 'Deep Coverage', desc: 'From neural network basics to advanced architectures — every concept explained clearly with visuals.' },
  { icon: 'fa-code', title: 'Code Examples', desc: 'Real Python code using TensorFlow, Keras, and PyTorch for every topic so you learn by doing.' },
  { icon: 'fa-briefcase', title: 'Interview Prep', desc: 'Curated Q&A for deep learning job interviews at top tech companies.' },
  { icon: 'fa-globe', title: 'Real Applications', desc: 'See how deep learning transforms healthcare, finance, autonomous vehicles, and more.' },
];

const stats = [
  { num: '34+', label: 'Subtopics' },
  { num: '11', label: 'Categories' },
  { num: '100%', label: 'Free' },
  { num: '∞', label: 'Learning' },
];

export default function DlAbout() {
  return (
    <>
      <DlNavbar />
      <div className="dl-main-content">

        {/* Hero */}
        <section className="dl-about-hero">
          <div className="dl-about-hero-inner">
            <div className="dl-about-hero-text">
              <h1>Making <span className="dl-grad">Deep Learning</span> Accessible to Everyone</h1>
              <p>At Deep Learning In My Style, we believe understanding neural networks should be accessible to everyone — from students to seasoned professionals.</p>
              <div className="dl-about-hero-btns">
                <Link to="/dl-course/topics" className="dl-cta-button">Start Learning</Link>
                <Link to="/dl-course/contact" className="dl-secondary-button">Contact Us</Link>
              </div>
            </div>
            <div className="dl-about-hero-img">
              <img src="/dl/neural-network.svg" alt="Deep Learning" />
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="dl-mission-section">
          <div className="dl-mission-grid">
            <div className="dl-mission-text">
              <span className="dl-badge">Our Mission</span>
              <h2>We demystify <span className="dl-grad">deep learning</span> through clear explanations</h2>
              <p>Our mission is to provide clear, comprehensive, and engaging educational resources on deep learning — from fundamental principles to advanced architectures.</p>
              <p>Whether you're a student, professional, or simply curious about AI, we help you build a solid foundation in deep learning.</p>
              <div className="dl-mission-points">
                {[
                  { icon: 'fa-bullseye', title: 'Structured Learning', desc: 'Topics organized from beginner to advanced' },
                  { icon: 'fa-code', title: 'Hands-on Code', desc: 'Every concept backed by working Python examples' },
                  { icon: 'fa-users', title: 'Community Focused', desc: 'Built for learners at every stage of their journey' },
                ].map((m, i) => (
                  <div className="dl-mp-item" key={i}>
                    <div className="dl-mp-icon"><i className={`fas ${m.icon}`} /></div>
                    <div>
                      <h4>{m.title}</h4>
                      <p>{m.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="dl-mission-stats">
              {stats.map((s, i) => (
                <div className="dl-stat-card" key={i}>
                  <div className="dl-stat-num">{s.num}</div>
                  <div className="dl-stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Offers */}
        <section className="dl-offers-section">
          <div className="dl-section-header">
            <span className="dl-badge">What We Offer</span>
            <h2>Everything you need to <span className="dl-grad">succeed</span></h2>
            <p>Comprehensive resources designed to take you from DL beginner to confident practitioner.</p>
          </div>
          <div className="dl-offers-grid">
            {offers.map((o, i) => (
              <div className="dl-offer-card" key={i}>
                <div className="dl-offer-icon"><i className={`fas ${o.icon}`} /></div>
                <h3>{o.title}</h3>
                <p>{o.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="dl-about-cta">
          <h2>Ready to explore <span className="dl-grad">Deep Learning</span>?</h2>
          <p>Dive into our comprehensive collection of topics and resources.</p>
          <Link to="/dl-course/topics" className="dl-cta-button">Browse Topics</Link>
        </div>

      </div>
      <DlFooter />
    </>
  );
}
