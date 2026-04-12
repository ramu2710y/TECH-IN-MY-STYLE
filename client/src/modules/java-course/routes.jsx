import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import JavaHome from './pages/JavaHome';
import JavaTopics from './pages/JavaTopics';
import JavaAbout from './pages/JavaAbout';
import JavaCompiler from './pages/JavaCompiler';
import JavaDocker from './pages/JavaDocker';
import JavaConnect from './pages/JavaConnect';
import JavaSubtopicPage from './pages/JavaSubtopicPage';
import JavaNavbar from './components/JavaNavbar';
import JavaFooter from './components/JavaFooter';
import ScrollToTop from './components/ScrollToTop';
import './styles/java.css';

function JavaCourseRoutes() {
  return (
    <div className="java-course-root">
      <ThemeProvider>
        <ScrollToTop />
        <JavaNavbar />
        <div className="pt-16">
          <Routes>
            <Route path="/" element={<JavaHome />} />
            <Route path="/topics" element={<JavaTopics />} />
            <Route path="/topic/:topicId/:subtopicSlug" element={<JavaSubtopicPage />} />
            <Route path="/about" element={<JavaAbout />} />
            <Route path="/compiler" element={<JavaCompiler />} />
            <Route path="/docker" element={<JavaDocker />} />
            <Route path="/connect" element={<JavaConnect />} />
          </Routes>
        </div>
        <JavaFooter />
      </ThemeProvider>
    </div>
  );
}

export default JavaCourseRoutes;
