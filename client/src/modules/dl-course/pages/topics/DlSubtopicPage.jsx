import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import DlNavbar from '../../components/DlNavbar';
import DlFooter from '../../components/DlFooter';
import DlSubtopicLayout from '../../components/DlSubtopicLayout';
import { dlSubtopicsContent } from '../../data/dlSubtopicsContent';

export default function DlSubtopicPage() {
  const { topicId, subtopicId } = useParams();
  const key = `${topicId}/${subtopicId}`;
  const content = dlSubtopicsContent[key];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [key]);

  if (!content) {
    return (
      <>
        <DlNavbar />
        <div className="dl-subtopic-main" style={{ padding: '4rem 2rem', textAlign: 'center' }}>
          <h2 style={{ color: 'var(--dl-text-primary)' }}>Topic not found</h2>
          <p style={{ color: 'var(--dl-text-secondary)' }}>
            The topic <strong>{key}</strong> doesn't have content yet.
          </p>
        </div>
        <DlFooter />
      </>
    );
  }

  return (
    <>
      <DlNavbar />
      <DlSubtopicLayout {...content} />
      <DlFooter />
    </>
  );
}
