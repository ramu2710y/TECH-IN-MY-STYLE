import { useParams, Link } from 'react-router-dom'
import { getSubtopicBySlug } from '../data/mlTopicsData'
import MlBreadcrumb from '../components/MlBreadcrumb'
import MlGlassCard from '../components/MlGlassCard'
import MlCodeBlock from '../components/MlCodeBlock'
import MlQuestionCard from '../components/MlQuestionCard'
import MlResourceCard from '../components/MlResourceCard'
import MlAnimatedSection from '../components/MlAnimatedSection'
import './MlSubtopicPage.css'

export default function MlSubtopicPage() {
  const { slug } = useParams()
  const data = getSubtopicBySlug(slug)

  if (!data) {
    return (
      <main className="ml-subtopic-page">
        <div className="ml-not-found">
          <h1>404</h1>
          <p>Subtopic not found</p>
          <Link to="/ml-course/topics" className="ml-btn ml-btn-primary">
            <i className="fas fa-arrow-left"></i> Back to Topics
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="ml-subtopic-page">
      <div className="ml-subtopic-container">
        <MlBreadcrumb current={data.breadcrumb} />

        <MlAnimatedSection>
          <h1 className="ml-subtopic-title">{data.title}</h1>
        </MlAnimatedSection>

        {/* Description */}
        <MlAnimatedSection delay={0.1}>
          <section className="ml-subtopic-section" id="description">
            <h2><i className="fas fa-align-left"></i> Description</h2>
            {data.description.map((item, i) => {
              if (item.text) {
                return <p key={i} className="ml-section-text">{item.text}</p>
              }
              if (item.cardTitle) {
                return (
                  <MlGlassCard key={i}>
                    <h3>{item.cardTitle}</h3>
                    {item.cardText && <p>{item.cardText}</p>}
                    {item.list && (
                      <ul>
                        {item.list.map((li, j) => <li key={j}>{li}</li>)}
                      </ul>
                    )}
                  </MlGlassCard>
                )
              }
              return null
            })}
          </section>
        </MlAnimatedSection>

        {/* Examples */}
        {data.examples && data.examples.length > 0 && (
          <MlAnimatedSection delay={0.2}>
            <section className="ml-subtopic-section" id="examples">
              <h2><i className="fas fa-code"></i> Examples</h2>
              {data.examples.map((ex, i) => (
                <div key={i} className="ml-example-block">
                  {ex.title && <h3 className="ml-example-title">{ex.title}</h3>}
                  {ex.list && (
                    <ul className="ml-example-list">
                      {ex.list.map((item, j) => (
                        <li key={j} dangerouslySetInnerHTML={{ __html: item }} />
                      ))}
                    </ul>
                  )}
                  {ex.code && <MlCodeBlock code={ex.code} language={ex.language || 'python'} />}
                </div>
              ))}
            </section>
          </MlAnimatedSection>
        )}

        {/* Applications */}
        {data.applications && data.applications.length > 0 && (
          <MlAnimatedSection delay={0.3}>
            <section className="ml-subtopic-section" id="applications">
              <h2><i className="fas fa-globe"></i> Real-World Applications</h2>
              {data.applications.map((app, i) => (
                <MlGlassCard key={i} variant="application">
                  <h3>{app.title}</h3>
                  <div className="ml-application-content">
                    <div className="ml-application-text">
                      <ul>
                        {app.items.map((item, j) => (
                          <li key={j} dangerouslySetInnerHTML={{ __html: item }} />
                        ))}
                      </ul>
                    </div>
                    {app.image && (
                      <div className="ml-application-image">
                        <img
                          src={app.image}
                          alt={app.imageAlt || 'Application image'}
                          loading="lazy"
                        />
                      </div>
                    )}
                  </div>
                </MlGlassCard>
              ))}
            </section>
          </MlAnimatedSection>
        )}

        {/* Resources */}
        {data.resources && data.resources.length > 0 && (
          <MlAnimatedSection delay={0.4}>
            <section className="ml-subtopic-section" id="resources">
              <h2><i className="fas fa-book"></i> Resources</h2>
              {data.resources.map((res, i) => (
                <MlResourceCard key={i} type={res.type} title={res.title} url={res.url} />
              ))}
            </section>
          </MlAnimatedSection>
        )}

        {/* Interview Questions */}
        {data.interviewQuestions && data.interviewQuestions.length > 0 && (
          <MlAnimatedSection delay={0.5}>
            <section className="ml-subtopic-section" id="interview-questions">
              <h2><i className="fas fa-question-circle"></i> Interview Questions</h2>
              {data.interviewQuestions.map((qa, i) => (
                <MlQuestionCard key={i} question={qa.q} answer={qa.a} index={i + 1} />
              ))}
            </section>
          </MlAnimatedSection>
        )}

        {/* Navigation */}
        <div className="ml-navigation-buttons">
          <Link to="/ml-course/topics" className="ml-btn ml-btn-outline ml-nav-back-btn">
            <i className="fas fa-arrow-left"></i> Back to Topics
          </Link>
        </div>
      </div>
    </main>
  )
}
