import { Routes, Route } from 'react-router-dom';
import FsPyNavbar from './components/FsPyNavbar.jsx';
import FsPyFooter from './components/FsPyFooter.jsx';
import FsPyScrollProgress from './components/FsPyScrollProgress.jsx';
import FsPyHome from './pages/FsPyHome.jsx';
import FsPyTopics from './pages/FsPyTopics.jsx';
import FsPyTopicPage from './pages/FsPyTopicPage.jsx';
import FsPyBuild from './pages/FsPyBuild.jsx';
import './fspy-index.css';
import './FsPyApp.css';

export default function FsPyRoutes() {
  return (
    <div className="fspy-module" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <FsPyScrollProgress />
      <FsPyNavbar />
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<FsPyHome />} />
          <Route path="/python" element={<FsPyTopics />} />
          <Route path="/topic/:id" element={<FsPyTopicPage />} />
          <Route path="/build" element={<FsPyBuild />} />
          <Route path="/build/:projectId" element={<FsPyBuild />} />
        </Routes>
      </main>
      <FsPyFooter />
    </div>
  );
}
