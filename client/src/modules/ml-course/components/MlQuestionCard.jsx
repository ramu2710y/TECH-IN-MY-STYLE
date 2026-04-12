import { useState } from 'react'
import './MlQuestionCard.css'

export default function MlQuestionCard({ question, answer, index }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className={`ml-question-card ${expanded ? 'expanded' : ''}`} id={`question-${index}`}>
      <div className="ml-question-header" onClick={() => setExpanded(!expanded)}>
        <h3>{index}. {question}</h3>
        <button className="ml-toggle-answer-btn" aria-label="Toggle answer">
          <span>{expanded ? 'Hide' : 'Show'} Answer</span>
          <i className={`fas fa-chevron-${expanded ? 'up' : 'down'}`}></i>
        </button>
      </div>
      <div className="ml-answer-body" style={{ maxHeight: expanded ? '500px' : '0' }}>
        <div className="ml-answer-content" dangerouslySetInnerHTML={{ __html: answer }} />
      </div>
    </div>
  )
}
