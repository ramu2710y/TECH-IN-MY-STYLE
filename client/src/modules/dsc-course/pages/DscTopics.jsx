import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { topicsData } from '../data/dscTopicsData';

export default function DscTopics() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
    }
  }, [location]);

  return (
    <main className="dsc-topics-container">
      <div className="dsc-topics-header">
        <h1>Data Science Topics</h1>
        <p>Browse through our comprehensive data science curriculum</p>
      </div>
      <div className="dsc-topics-list">
        {topicsData.map(topic => (
          <section key={topic.id} id={`dsc-${topic.id}`} className="dsc-topic-section">
            <h2>{topic.number}. {topic.title}</h2>
            <div className="dsc-subtopics">
              {topic.subtopics.map(sub => (
                <Link
                  key={sub.slug}
                  to={`/dsc-course/topics/${topic.id}/${sub.slug}`}
                  className="dsc-subtopic-card"
                >
                  <h3>{sub.title}</h3>
                  {sub.description && <p>{sub.description}</p>}
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
