import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import DlAccordion from './DlAccordion';
import './DlSubtopicLayout.css';

export default function DlSubtopicLayout({ title, description, examples, applications, resources, interviewQuestions }) {
  useEffect(() => {
    if (window.hljs) {
      setTimeout(() => window.hljs.highlightAll(), 50);
    }
  }, [title]);

  return (
    <div className="dl-subtopic-main">
      <div className="topic-navigation">
        <Link to="/dl-course/topics">
          <i className="fas fa-arrow-left" /> Back to Topics
        </Link>
      </div>

      <div className="subtopic-page-wrapper">
        <div className="subtopic-article">

          <div className="subtopic-header">
            <h1>{title}</h1>
            <div className="header-divider" />
          </div>

          {description && (
            <section className="content-section">
              <h2><i className="fas fa-book" /> Description</h2>
              <div className="section-content" dangerouslySetInnerHTML={{ __html: description }} />
            </section>
          )}

          {examples && (
            <section className="content-section">
              <h2><i className="fas fa-code" /> Examples</h2>
              <div className="section-content" dangerouslySetInnerHTML={{ __html: examples }} />
            </section>
          )}

          {applications && applications.length > 0 && (
            <section className="content-section">
              <h2><i className="fas fa-globe" /> Real-World Applications</h2>
              <div className="section-content">
                <div className="applications-grid">
                  {applications.map((app, i) => (
                    <div key={i} className="application-card">
                      <div className="app-icon"><i className={`fas ${app.icon}`} /></div>
                      <h3>{app.title}</h3>
                      <p>{app.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {resources && (
            <section className="content-section">
              <h2><i className="fas fa-external-link-alt" /> Resources</h2>
              <div className="section-content">
                <div className="resources-container">
                  {resources.video && (
                    <div className="resource-group">
                      <h3><i className="fab fa-youtube" /> Video Tutorials</h3>
                      <ul className="resource-list">
                        <li><a href={resources.video} target="_blank" rel="noreferrer">YouTube: Topic Video</a></li>
                      </ul>
                    </div>
                  )}
                  {resources.pdf && (
                    <div className="resource-group">
                      <h3><i className="fas fa-file-pdf" /> PDFs</h3>
                      <ul className="resource-list">
                        <li><a href={resources.pdf} target="_blank" rel="noreferrer">Topic PDF</a></li>
                      </ul>
                    </div>
                  )}
                  {resources.books && (
                    <div className="resource-group">
                      <h3><i className="fas fa-book" /> Recommended Books</h3>
                      <ul className="resource-list">
                        {resources.books.map((b, i) => (
                          <li key={i}>
                            <a href={b.url} target="_blank" rel="noreferrer">{b.title}</a>
                            {b.author ? ` — ${b.author}` : ''}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {resources.links && (
                    <div className="resource-group">
                      <h3><i className="fas fa-link" /> External Links</h3>
                      <ul className="resource-list">
                        {resources.links.map((l, i) => (
                          <li key={i}><a href={l.url} target="_blank" rel="noreferrer">{l.title}</a></li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </section>
          )}

          {interviewQuestions && interviewQuestions.length > 0 && (
            <section className="content-section">
              <h2><i className="fas fa-question-circle" /> Interview Questions</h2>
              <div className="section-content">
                <DlAccordion items={interviewQuestions} />
              </div>
            </section>
          )}

        </div>
      </div>
    </div>
  );
}
