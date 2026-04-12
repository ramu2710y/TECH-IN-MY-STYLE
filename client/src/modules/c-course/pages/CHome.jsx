import { useNavigate } from 'react-router-dom';
import { modules } from '../data/cTopics';
import './CHome.css';

export default function CHome() {
  const navigate = useNavigate();

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      {/* Hero */}
      <section id="c-home" className="c-hero-section">
        <div className="c-hero-container">
          <div className="c-hero-content">
            <div className="c-hero-badge">
              <i className="fas fa-star"></i>
              <span>Master C Programming</span>
            </div>
            <h1 className="c-hero-title">
              Learn <span className="c-text-gradient">C Programming</span><br />
              From Basics to Advanced
            </h1>
            <p className="c-hero-description">
              Master the fundamentals of C programming with our comprehensive curriculum.
              From syntax basics to advanced concepts like pointers, memory management, and system programming.
            </p>
            <div className="c-hero-buttons">
              <button className="c-btn c-btn-primary" onClick={() => scrollTo('c-topics')}>
                <i className="fas fa-rocket"></i> Start Learning
              </button>
              <button className="c-btn c-btn-secondary" onClick={() => scrollTo('c-resources')}>
                <i className="fas fa-book"></i> Browse Resources
              </button>
            </div>
          </div>
          <div className="c-hero-visual">
            <div className="c-code-window">
              <div className="c-code-header">
                <div className="c-code-buttons">
                  <span className="c-code-btn red"></span>
                  <span className="c-code-btn yellow"></span>
                  <span className="c-code-btn green"></span>
                </div>
                <span className="c-code-title-label">hello.c</span>
              </div>
              <div className="c-code-content">
                <pre><code>
<span className="c-code-include">#include &lt;stdio.h&gt;</span>{'\n\n'}
<span className="c-code-keyword">int</span> <span className="c-code-function">main</span>() {'{'}{'\n'}
{'    '}<span className="c-code-function">printf</span>(<span className="c-code-string">"Hello, World!"</span>);{'\n'}
{'    '}<span className="c-code-keyword">return</span> <span className="c-code-number">0</span>;{'\n'}
{'}'}
                </code></pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Topics */}
      <section id="c-topics" className="c-topics-section">
        <div className="c-container">
          <div className="c-section-header">
            <h2 className="c-section-title">Complete Learning Path</h2>
            <p className="c-section-description">
              Comprehensive curriculum with {modules.length} modules designed to take you from beginner to expert
            </p>
          </div>
          <div className="c-topics-grid">
            {modules.map(mod => (
              <div
                key={mod.id}
                className="c-topic-card c-glass-card"
                onClick={() => navigate(`/c-course/topic/${mod.subtopics[0].slug}`)}
              >
                <div className="c-topic-icon">
                  <i className={`fas ${mod.icon}`}></i>
                </div>
                <h3 className="c-topic-title">{mod.number}. {mod.title}</h3>
                <p className="c-topic-description">{mod.description}</p>
                <div className="c-topic-meta">
                  <span className="c-topic-lessons">{mod.lessons} lessons</span>
                  <span className={`c-topic-difficulty ${mod.difficulty}`}>{mod.difficulty}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="c-features" className="c-features-section">
        <div className="c-container">
          <div className="c-section-header">
            <h2 className="c-section-title">Why Choose C Mastery?</h2>
            <p className="c-section-description">Everything you need to master C programming</p>
          </div>
          <div className="c-features-grid">
            {[
              { icon: 'fa-graduation-cap', title: 'Structured Learning', desc: 'Follow our carefully designed curriculum that takes you from basics to advanced concepts' },
              { icon: 'fa-code', title: 'Code Examples', desc: 'Learn with practical code examples and real-world applications for every concept' },
              { icon: 'fa-question-circle', title: 'Interview Prep', desc: 'Practice with curated interview questions to ace your technical interviews' },
              { icon: 'fa-mobile-alt', title: 'Responsive Design', desc: 'Learn anywhere, anytime with our fully responsive platform that works on all devices' },
            ].map((f, i) => (
              <div key={i} className="c-feature-card c-glass-card">
                <div className="c-feature-icon"><i className={`fas ${f.icon}`}></i></div>
                <h3 className="c-feature-title">{f.title}</h3>
                <p className="c-feature-description">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section id="c-resources" className="c-resources-section">
        <div className="c-container">
          <div className="c-section-header">
            <h2 className="c-section-title">Learning Resources</h2>
            <p className="c-section-description">Additional materials to enhance your C programming journey</p>
          </div>
          <div className="c-resources-grid">
            <div className="c-resource-card c-glass-card">
              <div className="c-resource-icon"><i className="fas fa-book"></i></div>
              <h3 className="c-resource-title">Books</h3>
              <p className="c-resource-description">Curated list of essential C programming books</p>
              <ul className="c-resource-list">
                <li>The C Programming Language (K&R)</li>
                <li>C Programming: A Modern Approach</li>
                <li>Expert C Programming</li>
              </ul>
            </div>
            <div className="c-resource-card c-glass-card">
              <div className="c-resource-icon"><i className="fas fa-tools"></i></div>
              <h3 className="c-resource-title">Tools</h3>
              <p className="c-resource-description">Development tools and compilers for C programming</p>
              <ul className="c-resource-list">
                <li>GCC Compiler</li>
                <li>Code::Blocks IDE</li>
                <li>Visual Studio Code</li>
              </ul>
            </div>
            <div className="c-resource-card c-glass-card">
              <div className="c-resource-icon"><i className="fas fa-globe"></i></div>
              <h3 className="c-resource-title">Online Resources</h3>
              <p className="c-resource-description">Websites and platforms for additional learning</p>
              <ul className="c-resource-list">
                <li>C Reference Documentation</li>
                <li>Online C Compilers</li>
                <li>Programming Forums</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="c-about" className="c-about-section">
        <div className="c-container">
          <div className="c-about-content">
            <div className="c-about-text">
              <h2 className="c-section-title">About C Mastery</h2>
              <p className="c-about-description">
                C Mastery is a comprehensive learning platform designed to teach C programming
                from the ground up. Our structured approach ensures that you build a solid
                foundation before moving to advanced topics.
              </p>
              <div className="c-about-stats">
                <div className="c-stat-item"><div className="c-stat-number">15</div><div className="c-stat-label">Modules</div></div>
                <div className="c-stat-item"><div className="c-stat-number">70+</div><div className="c-stat-label">Lessons</div></div>
                <div className="c-stat-item"><div className="c-stat-number">100+</div><div className="c-stat-label">Code Examples</div></div>
              </div>
            </div>
            <div className="c-about-visual">
              <div className="c-about-card c-glass-card">
                <h4>Learn by Doing</h4>
                <p>Every concept is reinforced with practical examples and real-world applications.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
