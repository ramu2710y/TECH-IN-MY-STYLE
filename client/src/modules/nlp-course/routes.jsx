import { Routes, Route } from 'react-router-dom';
import NlpNavbar from './components/NlpNavbar';
import NlpHomePage from './pages/NlpHomePage';
import NlpTopicsPage from './pages/NlpTopicsPage';
import NlpTopicPage from './pages/NlpTopicPage';
import './styles/nlp-index.css';

export default function NlpCourseRoutes() {
  return (
    <div className="nlp-course-root">
      <NlpNavbar />
      <Routes>
        <Route path="/" element={<NlpHomePage />} />
        <Route path="/topics" element={<NlpTopicsPage />} />
        <Route path="/topic/:topic" element={<NlpTopicPage />} />
      </Routes>
    </div>
  );
}
