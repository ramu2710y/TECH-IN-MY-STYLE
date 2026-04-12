import { useState, useEffect, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getSubtopicContent } from '../data/dscTopicsData';

function DscAccordion({ items }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const toggle = i => setActiveIndex(prev => (prev === i ? -1 : i));
  return (
    <div className="dsc-accordion">
      {items.map((item, i) => (
        <div key={i} className={`dsc-accordion-item ${activeIndex === i ? 'active' : ''}`}>
          <button className="dsc-accordion-header" onClick={() => toggle(i)}>
            <span>{item.q}</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9"/>
            </svg>
          </button>
          <div className="dsc-accordion-content"><p>{item.a}</p></div>
        </div>
      ))}
    </div>
  );
}

export default function DscSubtopicPage() {
  const { topicId, slug } = useParams();
  const content = getSubtopicContent(slug);
  const [activeSection, setActiveSection] = useState('description');
  const contentRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.dsc-content-section');
      let current = '';
      sections.forEach(section => {
        const top = section.offsetTop - 150;
        if (window.scrollY >= top) current = section.getAttribute('id');
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
  };

  if (!content) {
    return (
      <main className="dsc-subtopic-container">
        <h1>Topic not found</h1>
        <Link to="/dsc-course/topics">Back to Topics</Link>
      </main>
    );
  }

  const tocItems = [
    { id: 'dsc-description', label: 'Description' },
    { id: 'dsc-prerequisites', label: 'Prerequisites' },
    { id: 'dsc-examples', label: 'Examples' },
    { id: 'dsc-real-world', label: 'Real-World Applications' },
    { id: 'dsc-applications', label: 'Where It Is Applied' },
    { id: 'dsc-resources', label: 'Resources' },
    { id: 'dsc-interview-questions', label: 'Interview Questions' },
  ];

  return (
    <main className="dsc-subtopic-container" ref={contentRef}>
      <div className="dsc-subtopic-header">
        <div className="dsc-breadcrumbs">
          <Link to="/dsc-course">Home</Link>
          <span className="dsc-separator">›</span>
          <Link to="/dsc-course/topics">Topics</Link>
          <span className="dsc-separator">›</span>
          <Link to={`/dsc-course/topics#dsc-${content.topicId}`}>{content.topicTitle}</Link>
          <span className="dsc-separator">›</span>
          <span>{content.title}</span>
        </div>
        <h1 className="dsc-subtopic-title">{content.title}</h1>
        <div className="dsc-subtopic-meta">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
            </svg>
            {content.category}
          </span>
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
            </svg>
            Reading Time: {content.readingTime}
          </span>
        </div>
      </div>

      <div className="dsc-table-of-contents">
        <h3>Table of Contents</h3>
        <ul className="dsc-toc-list">
          {tocItems.map(item => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={activeSection === item.id ? 'dsc-toc-active' : ''}
                onClick={e => { e.preventDefault(); scrollTo(item.id); }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="dsc-subtopic-content">
        <section id="dsc-description" className="dsc-content-section dsc-section-description">
          <h2>Description</h2>
          {content.description.split('\n').filter(Boolean).map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </section>

        <section id="dsc-prerequisites" className="dsc-content-section">
          <h2>Prerequisites</h2>
          <ul className="dsc-prerequisites-list">
            {content.prerequisites.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        </section>

        <section id="dsc-examples" className="dsc-content-section">
          <h2>Examples</h2>
          <p>Here&apos;s a simple example of a data science task using Python:</p>
          <div className="dsc-code-example">
            <pre><code>{content.codeExample}</code></pre>
          </div>
        </section>

        <section id="dsc-real-world" className="dsc-content-section dsc-section-real-world">
          <h2>Real-World Applications</h2>
          <div className="dsc-application-cards">
            {content.realWorldApps.map((app, i) => (
              <div key={i} className="dsc-application-card">
                {app.title && <h3>{app.title}</h3>}
                {app.description && <p>{app.description}</p>}
              </div>
            ))}
          </div>
        </section>

        <section id="dsc-applications" className="dsc-content-section dsc-section-applications">
          <h2>Where It Is Applied</h2>
          <div className="dsc-industry-grid">
            {content.industries.map((ind, i) => (
              <div key={i} className="dsc-industry-item">
                <h3>{ind.name}</h3>
                <ul>{ind.items.map((item, j) => <li key={j}>{item}</li>)}</ul>
              </div>
            ))}
          </div>
        </section>

        <section id="dsc-resources" className="dsc-content-section dsc-section-resources">
          <h2>Resources</h2>
          {content.resources.map((res, i) => (
            <div key={i} className="dsc-resource-item">
              <div className="dsc-resource-icon">
                {res.type === 'download' ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/><line x1="10" x2="8" y1="9" y2="9"/>
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/>
                  </svg>
                )}
              </div>
              <div className="dsc-resource-details">
                <h4>{res.title}</h4>
                {res.description && <p>{res.description}</p>}
              </div>
              <a href={res.link} target="_blank" rel="noreferrer" className="dsc-resource-link">
                {res.type === 'download' ? 'Download' : 'Visit'}
              </a>
            </div>
          ))}
        </section>

        <section id="dsc-interview-questions" className="dsc-content-section">
          <h2>Interview Questions</h2>
          <DscAccordion items={content.interviewQA} />
        </section>
      </div>
    </main>
  );
}
