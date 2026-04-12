import { useState } from 'react';

export default function DlAccordion({ items }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (i) => setActiveIndex(activeIndex === i ? null : i);

  return (
    <div className="accordion">
      {items.map((item, i) => (
        <div key={i} className={`accordion-item${activeIndex === i ? ' active' : ''}`}>
          <div className="accordion-header" onClick={() => toggle(i)}>
            <h3>{item.question}</h3>
            <span className="toggle-icon"><i className={`fas fa-${activeIndex === i ? 'minus' : 'plus'}`} /></span>
          </div>
          <div className="accordion-content">
            <div dangerouslySetInnerHTML={{ __html: item.answer }} />
          </div>
        </div>
      ))}
    </div>
  );
}
