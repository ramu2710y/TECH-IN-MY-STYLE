import { Link } from 'react-router-dom';

export default function DscHome() {
  return (
    <main>
      <section className="dsc-hero">
        <div className="dsc-hero-content">
          <h1>Learn Data Science Your Way</h1>
          <p>Master data science concepts with structured, easy-to-follow resources</p>
          <Link to="/dsc-course/topics" className="dsc-cta-button">Explore Topics</Link>
        </div>
        <div className="dsc-hero-image">
          <img
            src="https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Data Science Visualization"
          />
        </div>
      </section>

      <section className="dsc-features">
        <h2>Why Learn Data Science With Us?</h2>
        <div className="dsc-feature-cards">
          <div className="dsc-feature-card">
            <div className="dsc-feature-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" x2="12" y1="20" y2="10"/><line x1="18" x2="18" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="16"/>
              </svg>
            </div>
            <h3>Comprehensive Curriculum</h3>
            <p>From basics to advanced topics, everything organized in a logical progression</p>
          </div>
          <div className="dsc-feature-card">
            <div className="dsc-feature-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
              </svg>
            </div>
            <h3>Practical Examples</h3>
            <p>Real-world applications and examples to reinforce your learning</p>
          </div>
          <div className="dsc-feature-card">
            <div className="dsc-feature-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
              </svg>
            </div>
            <h3>Interview Preparation</h3>
            <p>Common interview questions and answers to help you land your dream job</p>
          </div>
        </div>
      </section>

      <section className="dsc-topics-preview">
        <h2>What You&apos;ll Learn</h2>
        <div className="dsc-topics-grid">
          <div className="dsc-topic-card">
            <h3>Introduction to Data Science</h3>
            <p>Learn what data science is, its lifecycle, and real-world applications</p>
            <Link to="/dsc-course/topics#dsc-introduction" className="dsc-topic-link">Explore &rarr;</Link>
          </div>
          <div className="dsc-topic-card">
            <h3>Python Libraries</h3>
            <p>Master NumPy, Pandas, Matplotlib, and Seaborn for data analysis</p>
            <Link to="/dsc-course/topics#dsc-python-libraries" className="dsc-topic-link">Explore &rarr;</Link>
          </div>
          <div className="dsc-topic-card">
            <h3>Data Cleaning</h3>
            <p>Learn techniques for handling missing data, duplicates, and more</p>
            <Link to="/dsc-course/topics#dsc-data-cleaning" className="dsc-topic-link">Explore &rarr;</Link>
          </div>
          <div className="dsc-topic-card">
            <h3>Data Visualization</h3>
            <p>Create insightful visualizations to communicate data effectively</p>
            <Link to="/dsc-course/topics#dsc-data-visualization" className="dsc-topic-link">Explore &rarr;</Link>
          </div>
        </div>
        <div className="dsc-view-all-container">
          <Link to="/dsc-course/topics" className="dsc-view-all-link">View All Topics</Link>
        </div>
      </section>
    </main>
  );
}
