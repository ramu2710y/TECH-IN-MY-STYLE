import { useState } from 'react';
import './CInterviewQA.css';

export default function CInterviewQA({ questions }) {
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <div className="c-interview-questions">
      {questions.map((q, i) => (
        <div key={i} className={`c-question-item c-glass-card${openIndex === i ? ' active' : ''}`}>
          <div className="c-question-header" onClick={() => toggle(i)}>
            <h4>{q.question}</h4>
            <i className="fas fa-chevron-down"></i>
          </div>
          {openIndex === i && (
            <div className="c-question-answer">
              <p dangerouslySetInnerHTML={{ __html: q.answer }} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
