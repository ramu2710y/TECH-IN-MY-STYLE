import { Routes, Route } from 'react-router-dom';
import DscHeader from './components/DscHeader';
import DscFooter from './components/DscFooter';
import DscHome from './pages/DscHome';
import DscTopics from './pages/DscTopics';
import DscAbout from './pages/DscAbout';
import DscSubtopicPage from './pages/DscSubtopicPage';
import './styles/dsc-index.css';
import './styles/dsc-app.css';

export default function DscCourseRoutes() {
  return (
    <div className="dsc-course-root">
      <DscHeader />
      <Routes>
        <Route path="/" element={<DscHome />} />
        <Route path="/topics" element={<DscTopics />} />
        <Route path="/topics/:topicId/:slug" element={<DscSubtopicPage />} />
        <Route path="/about" element={<DscAbout />} />
      </Routes>
      <DscFooter />
    </div>
  );
}
