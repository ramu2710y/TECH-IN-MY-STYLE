import { Link } from 'react-router-dom';
import DlNavbar from '../components/DlNavbar';
import DlFooter from '../components/DlFooter';
import { dlTopicsData } from '../data/dlTopicsData';
import './DlTopics.css';

export default function DlTopics() {
  return (
    <>
      <DlNavbar />
      <div className="dl-main-content">
        <section className="dl-topics-header">
          <h1>Deep Learning Topics</h1>
          <p>Explore our comprehensive collection of deep learning topics. Click on any topic to dive deeper.</p>
        </section>

        <section className="dl-topics-container">
          {dlTopicsData.map((topic) => (
            <div key={topic.number} className="dl-topic-box">
              <div className="dl-topic-title">
                <span className="dl-topic-number">{topic.number}</span>
                <h2>{topic.title}</h2>
              </div>
              <div className="dl-subtopics">
                {topic.subtopics.map((sub) => (
                  <Link key={sub.path} to={`/dl-course/topics/${sub.path}`} className="dl-subtopic">
                    <div className="dl-subtopic-content">
                      <span className="dl-subtopic-icon"><i className={`fas ${sub.icon}`} /></span>
                      <h3>{sub.title}</h3>
                    </div>
                    <span className="dl-arrow"><i className="fas fa-chevron-right" /></span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </section>
      </div>
      <DlFooter />
    </>
  );
}
