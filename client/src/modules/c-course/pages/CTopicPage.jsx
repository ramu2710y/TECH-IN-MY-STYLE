import { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { modules, slugToModule } from '../data/cTopics';
import content from '../data/cTopicContent';
import CCodeBlock from '../components/CCodeBlock';
import CInterviewQA from '../components/CInterviewQA';
import './CTopicPage.css';

export default function CTopicPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const mod = slugToModule[slug];
  const data = content[slug];

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!window.Prism) {
      const script = document.createElement('script');
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-core.min.js';
      script.onload = () => {
        const autoloader = document.createElement('script');
        autoloader.src = 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/plugins/autoloader/prism-autoloader.min.js';
        document.head.appendChild(autoloader);
      };
      document.head.appendChild(script);
    } else {
      window.Prism.highlightAll();
    }
  }, [slug]);

  if (!mod || !data) {
    return (
      <div className="c-not-found">
        <h2>Topic not found</h2>
        <button onClick={() => navigate('/c-course')}>Go Home</button>
      </div>
    );
  }

  return (
    <main className="c-topic-main">
      <div className="c-topic-container">
        {/* Sidebar */}
        <aside className="c-topic-sidebar c-glass-card">
          <div className="c-sidebar-header">
            <h3>{mod.title}</h3>
          </div>
          <nav className="c-sidebar-nav">
            {mod.subtopics.map(sub => (
              <Link
                key={sub.slug}
                to={`/c-course/topic/${sub.slug}`}
                className={`c-sidebar-link${slug === sub.slug ? ' active' : ''}`}
              >
                <i className={`fas ${sub.icon}`}></i>
                {sub.label}
              </Link>
            ))}
          </nav>
        </aside>

        {/* Content */}
        <div className="c-topic-content">
          <header className="c-content-header">
            <nav className="c-breadcrumb">
              <Link to="/c-course">Home</Link>
              <i className="fas fa-chevron-right"></i>
              <Link to="/c-course#c-topics">Topics</Link>
              <i className="fas fa-chevron-right"></i>
              <span>{data.breadcrumb[0]}</span>
              <i className="fas fa-chevron-right"></i>
              <span>{data.breadcrumb[1]}</span>
            </nav>
            <h1 className="c-content-title">{data.title}</h1>
          </header>

          <article className="c-content-article">
            {/* Overview */}
            <section className="c-content-section">
              <h2>Overview</h2>
              <p>{data.overview}</p>
              {data.tip && (
                <div className="c-highlight-box">
                  <i className="fas fa-info-circle"></i>
                  <div>
                    <h4>{data.tip.heading}</h4>
                    <p dangerouslySetInnerHTML={{ __html: data.tip.text }} />
                  </div>
                </div>
              )}
            </section>

            {/* Extra sections */}
            {data.sections?.map((sec, i) => (
              <section key={i} className="c-content-section">
                <h2>{sec.heading}</h2>
                <div dangerouslySetInnerHTML={{ __html: sec.content }} />
              </section>
            ))}

            {/* Code Example */}
            {data.code && (
              <section className="c-content-section">
                <h2>Example Program</h2>
                <CCodeBlock filename={data.code.filename} code={data.code.code} />
              </section>
            )}

            {/* Applications */}
            {data.applications?.length > 0 && (
              <section className="c-content-section">
                <h2>Real-World Applications</h2>
                <div className="c-applications-grid">
                  {data.applications.map((app, i) => (
                    <div key={i} className="c-app-card c-glass-card">
                      <div className="c-app-icon"><i className={`fas ${app.icon}`}></i></div>
                      <h4>{app.title}</h4>
                      <p>{app.desc}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Interview Questions */}
            {data.questions?.length > 0 && (
              <section className="c-content-section">
                <h2>Interview Questions</h2>
                <CInterviewQA questions={data.questions} />
              </section>
            )}

            {/* Resources */}
            {data.pdfLink && (
              <section className="c-content-section">
                <h2>Resources</h2>
                <div className="c-resources-list">
                  <div className="c-resource-item">
                    <div className="c-resource-icon"><i className="fas fa-book"></i></div>
                    <div className="c-resource-content">
                      <h4>Topic PDF</h4>
                      <a href={data.pdfLink} target="_blank" rel="noreferrer" className="c-resource-link">
                        Read More <i className="fas fa-external-link-alt"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* Navigation */}
            <div className="c-content-navigation">
              {(() => {
                const idx = mod.subtopics.findIndex(s => s.slug === slug);
                const prev = mod.subtopics[idx - 1];
                const next = mod.subtopics[idx + 1];
                return (
                  <>
                    {prev ? (
                      <Link to={`/c-course/topic/${prev.slug}`} className="c-nav-item c-nav-prev">
                        <i className="fas fa-chevron-left"></i> {prev.label}
                      </Link>
                    ) : <span className="c-nav-item disabled"><i className="fas fa-chevron-left"></i> Previous</span>}
                    {next ? (
                      <Link to={`/c-course/topic/${next.slug}`} className="c-nav-item c-nav-next">
                        {next.label} <i className="fas fa-chevron-right"></i>
                      </Link>
                    ) : <span className="c-nav-item disabled">Next <i className="fas fa-chevron-right"></i></span>}
                  </>
                );
              })()}
            </div>
          </article>
        </div>
      </div>
    </main>
  );
}
