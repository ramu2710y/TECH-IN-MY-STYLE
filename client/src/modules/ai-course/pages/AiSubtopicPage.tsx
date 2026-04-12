import { useState, useEffect } from 'react'
import { useParams, Link, useLocation } from 'react-router-dom'
import AiHeader from '../components/AiHeader'
import AiFooter from '../components/AiFooter'
import { subtopicsMap } from '../data/aiSubtopics'
import '../styles/ai-subtopic.css'

export default function AiSubtopicPage() {
  const { category, slug } = useParams()
  const { pathname } = useLocation()
  const [openAcc, setOpenAcc] = useState<number | null>(null)
  const key = `${category}/${slug}`
  const data = subtopicsMap[key]

  useEffect(() => {
    setOpenAcc(null)
    window.scrollTo(0, 0)
    if ((window as any).hljs) (window as any).hljs.highlightAll()
  }, [key])

  if (!data) {
    return (
      <>
        <AiHeader />
        <div className="not-found-page">
          <div style={{ fontSize: '3rem' }}>🔍</div>
          <h1>Topic Not Found</h1>
          <p>This topic doesn't exist yet or is coming soon.</p>
          <Link to="/ai-course/topics" className="btn btn-primary">
            <i className="fas fa-th-large"></i> Browse All Topics
          </Link>
        </div>
        <AiFooter />
      </>
    )
  }

  // Fix breadcrumb paths to use /ai-course prefix
  const breadcrumb = data.breadcrumb.map(b => ({
    ...b,
    path: b.path === '/' ? '/ai-course' : b.path === '/topics' ? '/ai-course/topics' : b.path,
  }))

  // Fix sidebar links to use /ai-course prefix
  const sidebarLinks = data.sidebarLinks.map(l => ({
    ...l,
    path: l.path.startsWith('/topics/') ? l.path.replace('/topics/', '/ai-course/topics/') : l.path,
  }))

  const relatedLinks = data.relatedLinks.map(l => ({
    ...l,
    path: l.path.startsWith('/topics/') ? l.path.replace('/topics/', '/ai-course/topics/') : l.path,
  }))

  return (
    <>
      <AiHeader />

      {/* Breadcrumb */}
      <div className="breadcrumb-bar">
        <div className="container">
          <div className="breadcrumb-inner">
            {breadcrumb.map((b, i) => (
              <span key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                {i > 0 && <span>/</span>}
                {b.path
                  ? <Link to={b.path}>{b.label}</Link>
                  : <span className="bc-current">{b.label}</span>
                }
              </span>
            ))}
          </div>
        </div>
      </div>

      <section className="subtopic-layout">
        <div className="container">
          <div className="subtopic-inner">

            {/* Sidebar */}
            <aside className="subtopic-sidebar">
              <div className="sidebar-nav">
                <div className="sidebar-section">
                  <div className="sidebar-section-title">{data.sidebarTitle}</div>
                  {sidebarLinks.map((l, i) => (
                    <Link key={i} to={l.path} className={`sidebar-link${pathname === l.path ? ' active' : ''}`}>
                      <i className="fas fa-chevron-right"></i>
                      {l.label}
                    </Link>
                  ))}
                </div>
                {relatedLinks.length > 0 && (
                  <div className="sidebar-section">
                    <div className="sidebar-section-title">Related Topics</div>
                    {relatedLinks.map((l, i) => (
                      <Link key={i} to={l.path} className="sidebar-link">
                        <i className="fas fa-link"></i>
                        {l.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </aside>

            {/* Main */}
            <main className="subtopic-main">

              {/* Title */}
              <div className="page-title-card">
                <h1 className="page-title">{data.title}</h1>
                <p>{data.description[0]?.substring(0, 120)}...</p>
              </div>

              {/* Description */}
              <div className="content-card">
                <div className="content-card-header">
                  <div className="cc-icon cc-icon-desc"><i className="fas fa-align-left"></i></div>
                  <h2>Description</h2>
                </div>
                <div className="desc-text">
                  {data.description.map((p, i) => <p key={i}>{p}</p>)}
                  {data.infoBox && (
                    <div className="info-box">
                      <ul>
                        {data.infoBox.map((item, i) => (
                          <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>

              {/* Code */}
              <div className="content-card">
                <div className="content-card-header">
                  <div className="cc-icon cc-icon-code"><i className="fas fa-code"></i></div>
                  <h2>Code Example</h2>
                </div>
                <div className="code-block">
                  <div className="code-header">
                    <span className="code-lang">Python</span>
                    <div className="code-dots">
                      <span /><span /><span />
                    </div>
                  </div>
                  <pre><code className="language-python">{data.code}</code></pre>
                </div>
              </div>

              {/* Applications */}
              <div className="content-card">
                <div className="content-card-header">
                  <div className="cc-icon cc-icon-apps"><i className="fas fa-globe"></i></div>
                  <h2>Real-World Applications</h2>
                </div>
                <div className="apps-grid">
                  {data.appCards.map((card, i) => (
                    <div className="app-card" key={i}>
                      <i className={`fas ${card.icon}`}></i>
                      <h3>{card.title}</h3>
                      <p>{card.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Table */}
              <div className="content-card">
                <div className="content-card-header">
                  <div className="cc-icon cc-icon-table"><i className="fas fa-table"></i></div>
                  <h2>Where AI Is Applied</h2>
                </div>
                <div className="table-wrap">
                  <table className="data-table">
                    <thead>
                      <tr>{data.tableHeaders.map((h, i) => <th key={i}>{h}</th>)}</tr>
                    </thead>
                    <tbody>
                      {data.tableRows.map((row, i) => (
                        <tr key={i}>
                          <td>{row.col1}</td>
                          <td>{row.col2}</td>
                          <td>{row.col3}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Resources */}
              <div className="content-card">
                <div className="content-card-header">
                  <div className="cc-icon cc-icon-res"><i className="fas fa-book"></i></div>
                  <h2>Resources</h2>
                </div>
                <div className="resource-links">
                  <a href={data.youtubeLink} target="_blank" rel="noopener noreferrer" className="resource-link">
                    <div className="resource-link-icon rli-yt"><i className="fab fa-youtube"></i></div>
                    <span>YouTube Video Tutorial</span>
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                  <a href={data.driveLink} target="_blank" rel="noopener noreferrer" className="resource-link">
                    <div className="resource-link-icon rli-pdf"><i className="fas fa-file-pdf"></i></div>
                    <span>PDF / Study Notes (Google Drive)</span>
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                </div>
              </div>

              {/* Accordion */}
              <div className="content-card">
                <div className="content-card-header">
                  <div className="cc-icon cc-icon-qa"><i className="fas fa-question-circle"></i></div>
                  <h2>Interview Questions & Answers</h2>
                </div>
                <div className="accordion">
                  {data.accordion.map((item, i) => (
                    <div className={`acc-item${openAcc === i ? ' open' : ''}`} key={i}>
                      <div className="acc-header" onClick={() => setOpenAcc(openAcc === i ? null : i)}>
                        <h3>Q{i + 1}. {item.q}</h3>
                        <div className="acc-chevron"><i className="fas fa-chevron-down"></i></div>
                      </div>
                      <div className="acc-body"><p>{item.a}</p></div>
                    </div>
                  ))}
                </div>
              </div>

            </main>
          </div>
        </div>
      </section>

      <AiFooter />
    </>
  )
}
