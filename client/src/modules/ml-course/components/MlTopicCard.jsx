import { useState } from 'react'
import { Link } from 'react-router-dom'
import './MlTopicCard.css'

export default function MlTopicCard({ topic, index }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className={`ml-topic-card ${expanded ? 'expanded' : ''}`} id={`topic-${index}`}>
      <div className="ml-topic-header" onClick={() => setExpanded(!expanded)}>
        <div className="ml-topic-icon">
          <i className={topic.icon}></i>
        </div>
        <h2 className="ml-topic-title">{topic.title}</h2>
        <div className="ml-expand-icon">
          <i className="fas fa-chevron-down"></i>
        </div>
      </div>
      <div className="ml-subtopics-list">
        {topic.subtopics.map((sub, i) => (
          <Link to={`/ml-course/subtopics/${sub.slug}`} className="ml-subtopic-item" key={i}>
            <span className="ml-subtopic-name">{sub.name}</span>
            <i className="fas fa-arrow-right"></i>
          </Link>
        ))}
      </div>
    </div>
  )
}
