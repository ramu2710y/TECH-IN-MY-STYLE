import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import DsaHome from './pages/DsaHome';
import DsaTopicPage from './pages/DsaTopicPage';
import DsaAllTopics from './pages/DsaAllTopics';
import DsaBookmarks from './pages/DsaBookmarks';
import DsaNavbar from './components/DsaNavbar';
import DsaFooter from './components/DsaFooter';
import DsaEmberCanvas from './components/DsaEmberCanvas';
import './styles/dsa-index.css';
import './styles/dsa-app.css';

function DsaAnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<DsaHome />} />
        <Route path="/topic/:id" element={<DsaTopicPage />} />
        <Route path="/topics" element={<DsaAllTopics />} />
        <Route path="/bookmarks" element={<DsaBookmarks />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function DsaCourseRoutes() {
  return (
    <div className="dsa-course-root">
      <DsaEmberCanvas />
      <DsaNavbar />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <DsaAnimatedRoutes />
      </div>
      <DsaFooter />
    </div>
  );
}
