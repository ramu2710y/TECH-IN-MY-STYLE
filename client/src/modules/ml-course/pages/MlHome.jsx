import { Link } from 'react-router-dom'
import MlFeatureCard from '../components/MlFeatureCard'
import MlAnimatedSection from '../components/MlAnimatedSection'
import './MlHome.css'

const features = [
  { icon: 'fas fa-book-open', title: 'Comprehensive Topics', description: 'From basic ML concepts to advanced algorithms — covering regression, classification, clustering, and much more with real-world examples.' },
  { icon: 'fas fa-code', title: 'Hands-On Code', description: 'Every concept comes with Python code examples using scikit-learn, TensorFlow, and other popular libraries you can run immediately.' },
  { icon: 'fas fa-brain', title: 'Interview Ready', description: 'Each topic includes carefully curated interview questions with detailed answers to help you ace your ML interviews.' },
]

export default function MlHome() {
  return (
    <main className="ml-home-page">
      {/* Hero Section */}
      <section className="ml-hero" id="hero-section">
        <div className="ml-hero-bg-effects">
          <div className="ml-hero-glow ml-hero-glow-1"></div>
          <div className="ml-hero-glow ml-hero-glow-2"></div>
          <div className="ml-hero-glow ml-hero-glow-3"></div>
          <div className="ml-hero-grid"></div>
          <div className="ml-hero-particles">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="ml-hero-particle"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  width: `${2 + Math.random() * 4}px`,
                  height: `${2 + Math.random() * 4}px`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${3 + Math.random() * 4}s`,
                }}
              />
            ))}
          </div>
        </div>

        <div className="ml-hero-content ml-hero-content--centered">
          <MlAnimatedSection delay={0.1}>
            <span className="ml-hero-badge">
              <i className="fas fa-robot"></i> Machine Learning Course
            </span>
          </MlAnimatedSection>

          <MlAnimatedSection delay={0.2}>
            <h1>
              Machine Learning<br />
              <span className="ml-gradient-text">In My Style</span>
            </h1>
          </MlAnimatedSection>

          <MlAnimatedSection delay={0.3}>
            <p className="ml-hero-subtitle">
              Master Machine Learning from fundamentals to advanced algorithms. Build real projects, understand the math, and prepare for interviews — all in one place.
            </p>
          </MlAnimatedSection>

          <MlAnimatedSection delay={0.4}>
            <div className="ml-hero-actions">
              <Link to="/ml-course/topics" className="ml-btn ml-btn-primary" id="explore-topics-btn">
                <i className="fas fa-rocket"></i> Explore Topics
              </Link>
              <a href="#about" className="ml-btn ml-btn-outline" id="learn-more-btn">
                <i className="fas fa-info-circle"></i> Learn More
              </a>
            </div>
          </MlAnimatedSection>

          <MlAnimatedSection delay={0.5}>
            <div className="ml-hero-stats">
              <div className="ml-stat-item">
                <span className="ml-stat-number">10+</span>
                <span className="ml-stat-label">Topics</span>
              </div>
              <div className="ml-stat-divider"></div>
              <div className="ml-stat-item">
                <span className="ml-stat-number">35+</span>
                <span className="ml-stat-label">Subtopics</span>
              </div>
              <div className="ml-stat-divider"></div>
              <div className="ml-stat-item">
                <span className="ml-stat-number">175+</span>
                <span className="ml-stat-label">Interview Q&A</span>
              </div>
            </div>
          </MlAnimatedSection>
        </div>
      </section>

      {/* Features Section */}
      <section className="ml-features-section" id="features">
        <MlAnimatedSection>
          <h2 className="ml-section-title">
            Why Learn <span className="ml-gradient-text">ML In My Style?</span>
          </h2>
        </MlAnimatedSection>

        <div className="ml-features-grid">
          {features.map((f, i) => (
            <MlAnimatedSection key={i} delay={0.1 * (i + 1)}>
              <MlFeatureCard icon={f.icon} title={f.title} description={f.description} />
            </MlAnimatedSection>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="ml-about-section" id="about">
        <MlAnimatedSection>
          <div className="ml-about-card">
            <h2>About <span className="ml-gradient-text">This Course</span></h2>
            <p>
              <strong>Machine Learning in My Style</strong> is designed to make ML accessible to everyone. Whether you're a beginner stepping into the world of artificial intelligence or an intermediate learner looking to strengthen your foundations, this course covers everything you need.
            </p>
            <p>
              Each topic is broken down into clear descriptions, practical code examples, real-world applications, curated resources, and interview questions — making it a one-stop resource for learning and career preparation.
            </p>
            <div className="ml-about-highlights">
              <div className="ml-about-highlight-item">
                <i className="fas fa-check-circle"></i>
                <span>10 comprehensive topic modules</span>
              </div>
              <div className="ml-about-highlight-item">
                <i className="fas fa-check-circle"></i>
                <span>35+ detailed subtopics with examples</span>
              </div>
              <div className="ml-about-highlight-item">
                <i className="fas fa-check-circle"></i>
                <span>Real Python code you can run</span>
              </div>
              <div className="ml-about-highlight-item">
                <i className="fas fa-check-circle"></i>
                <span>175+ interview Q&A pairs</span>
              </div>
              <div className="ml-about-highlight-item">
                <i className="fas fa-check-circle"></i>
                <span>YouTube & PDF resources per topic</span>
              </div>
              <div className="ml-about-highlight-item">
                <i className="fas fa-check-circle"></i>
                <span>Mini projects with real datasets</span>
              </div>
            </div>
            <Link to="/ml-course/topics" className="ml-btn ml-btn-primary ml-about-cta">
              <i className="fas fa-arrow-right"></i> Start Learning Now
            </Link>
          </div>
        </MlAnimatedSection>
      </section>
    </main>
  )
}
