import { topicsData } from '../data/mlTopicsData'
import MlTopicCard from '../components/MlTopicCard'
import MlAnimatedSection from '../components/MlAnimatedSection'
import './MlTopics.css'

export default function MlTopics() {
  return (
    <main className="ml-topics-page">
      <section className="ml-topics-hero">
        <MlAnimatedSection>
          <h1>
            Explore <span className="ml-gradient-text">ML Topics</span>
          </h1>
          <p className="ml-topics-subtitle">
            Click on any topic to expand its subtopics. Each subtopic contains detailed descriptions,
            code examples, real-world applications, resources, and interview questions.
          </p>
        </MlAnimatedSection>
      </section>

      <section className="ml-topics-grid">
        {topicsData.map((topic, index) => (
          <MlAnimatedSection key={topic.id} delay={0.05 * (index + 1)}>
            <MlTopicCard topic={topic} index={index} />
          </MlAnimatedSection>
        ))}
      </section>
    </main>
  )
}
