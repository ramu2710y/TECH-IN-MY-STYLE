import { Routes, Route } from 'react-router-dom';
import CNavbar from './components/CNavbar';
import CFooter from './components/CFooter';
import CHome from './pages/CHome';
import CTopicPage from './pages/CTopicPage';
import './styles/c-global.css';

export default function CCourseRoutes() {
  return (
    <div className="c-course-root">
      <CNavbar />
      <div style={{ paddingTop: '70px' }}>
        <Routes>
          <Route path="/" element={<CHome />} />
          <Route path="/topic/:slug" element={<CTopicPage />} />
        </Routes>
      </div>
      <CFooter />
    </div>
  );
}
