import { Link } from 'react-router-dom'
import PythonNavbar from '../components/PythonNavbar'
import PythonFooter from '../components/PythonFooter'
import { topicSections } from '../data/topicsData'
import './Topics.css'

const icons = ['🚀', '⚙️', '🔬', '🏆']

export default function Topics() {
  return (
    <div className="py-topics-page">
      <PythonNavbar showTasks />
      <div className="py-topics-hero">
        <span className="py-chip">📚 Curriculum</span>
        <h1>Python <span>Topics</span></h1>
        <p>Explore our comprehensive Python curriculum. Each topic contains detailed explanations, code examples, and interview questions.</p>
      </div>
      <main className="py-topics-body">
        {topicSections.map((sec, si) => (
          <section key={sec.title} className="py-topic-sec">
            <div className="py-topic-sec-hd">
              <div className="py-sec-num">{icons[si]}</div>
              <h2>{sec.title}</h2>
            </div>
            <div className="py-topic-cards-grid">
              {sec.cards.map(card => (
                <div key={card.title} className="py-topic-card">
                  <div className="py-tc-top">
                    <h3>{card.title}</h3>
                    <p>{card.description}</p>
                  </div>
                  <div className="py-tc-links">
                    {card.subtopics.map(sub => (
                      <Link key={sub.slug} to={`/python-course/subtopics/${sub.slug}`} className="py-tc-link">{sub.label}</Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </main>
      <PythonFooter />
    </div>
  )
}
