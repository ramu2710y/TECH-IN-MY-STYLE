import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import DlNavbar from '../components/DlNavbar';
import DlFooter from '../components/DlFooter';
import './DlHome.css';

export default function DlHome() {
  const particlesLoaded = useRef(false);

  useEffect(() => {
    if (particlesLoaded.current) return;
    particlesLoaded.current = true;

    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
    script.onload = () => {
      window.particlesJS('dl-particles-js', {
        particles: {
          number: { value: 80, density: { enable: true, value_area: 800 } },
          color: { value: '#4361ee' },
          shape: { type: 'circle' },
          opacity: { value: 0.5 },
          size: { value: 3, random: true },
          line_linked: { enable: true, distance: 150, color: '#4361ee', opacity: 0.4, width: 1 },
          move: { enable: true, speed: 2, out_mode: 'out' },
        },
        interactivity: {
          detect_on: 'canvas',
          events: { onhover: { enable: true, mode: 'grab' }, onclick: { enable: true, mode: 'push' }, resize: true },
          modes: { grab: { distance: 140, line_linked: { opacity: 1 } }, push: { particles_nb: 4 } },
        },
        retina_detect: true,
      });
    };
    document.body.appendChild(script);
  }, []);

  return (
    <>
      <DlNavbar />
      <div id="dl-particles-js" />
      <div className="dl-main-content">
        <section className="dl-hero">
          <div className="dl-hero-content">
            <h1>Deep Learning <span className="dl-highlight">in my style</span></h1>
            <p>Explore the fascinating world of neural networks, machine learning, and artificial intelligence through our comprehensive learning platform.</p>
            <Link to="/dl-course/topics" className="dl-cta-button">Explore Topics</Link>
          </div>
          <div className="dl-hero-image">
            <img src="/dl/neural-network.svg" alt="Neural Network Illustration" />
          </div>
        </section>

        <section id="about" className="dl-about">
          <div className="dl-section-header">
            <h2>About This Platform</h2>
            <div className="dl-section-divider" />
          </div>
          <div className="dl-about-content">
            {[
              { icon: 'fa-brain', title: 'Comprehensive Learning', desc: 'From basic concepts to advanced architectures, learn everything about deep learning in a structured way.' },
              { icon: 'fa-code', title: 'Practical Examples', desc: 'Each topic comes with code examples and real-world applications to help you understand the practical aspects.' },
              { icon: 'fa-user-graduate', title: 'Interview Preparation', desc: 'Prepare for technical interviews with our curated list of interview questions for each topic.' },
            ].map((card) => (
              <div key={card.title} className="dl-about-card">
                <div className="dl-icon"><i className={`fas ${card.icon}`} /></div>
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="featured-topics" className="dl-featured-topics">
          <div className="dl-section-header">
            <h2>Featured Topics</h2>
            <div className="dl-section-divider" />
          </div>
          <div className="dl-topics-preview">
            {[
              { icon: 'fa-lightbulb', title: 'Introduction to Deep Learning', desc: 'Understand the foundations of deep learning and how it differs from traditional machine learning.' },
              { icon: 'fa-network-wired', title: 'Neural Networks Basics', desc: 'Learn about perceptrons, activation functions, and the fundamentals of neural networks.' },
              { icon: 'fa-cogs', title: 'Advanced Architectures', desc: 'Explore CNN, RNN, and other advanced deep learning architectures.' },
            ].map((card) => (
              <div key={card.title} className="dl-topic-card">
                <div className="dl-topic-icon"><i className={`fas ${card.icon}`} /></div>
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
              </div>
            ))}
          </div>
          <div className="dl-center-btn">
            <Link to="/dl-course/topics" className="dl-secondary-button">View All Topics</Link>
          </div>
        </section>
      </div>
      <DlFooter />
    </>
  );
}
