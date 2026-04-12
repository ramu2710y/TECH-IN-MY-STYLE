import { Routes, Route } from 'react-router-dom';
import OsLayout from './components/OsLayout';
import OsLanding from './pages/OsLanding';
import OsCourseOverview from './pages/OsCourseOverview';
import OsIntroduction from './pages/OsIntroduction';
import OsProcessManagement from './pages/OsProcessManagement';
import OsThreadConcurrency from './pages/OsThreadConcurrency';
import OsMemoryManagement from './pages/OsMemoryManagement';
import OsFileSystems from './pages/OsFileSystems';
import OsIOSystems from './pages/OsIOSystems';
import OsSecurity from './pages/OsSecurity';
import OsRealWorldApps from './pages/OsRealWorldApps';
import OsInterviewPrep from './pages/OsInterviewPrep';
import OsProjects from './pages/OsProjects';
import './styles/os-index.css';
import './styles/OsModules.css';

export default function OsCourseRoutes() {
  return (
    <div className="os-course-root">
      <Routes>
        {/* Landing page — no sidebar */}
        <Route index element={<OsLanding />} />

        {/* Course content — with sidebar layout */}
        <Route element={<OsLayout />}>
          <Route path="overview" element={<OsCourseOverview />} />
          <Route path="introduction" element={<OsIntroduction />} />
          <Route path="process-management" element={<OsProcessManagement />} />
          <Route path="threads" element={<OsThreadConcurrency />} />
          <Route path="memory" element={<OsMemoryManagement />} />
          <Route path="file-systems" element={<OsFileSystems />} />
          <Route path="io-systems" element={<OsIOSystems />} />
          <Route path="security" element={<OsSecurity />} />
          <Route path="real-world" element={<OsRealWorldApps />} />
          <Route path="interview-prep" element={<OsInterviewPrep />} />
          <Route path="projects" element={<OsProjects />} />
        </Route>
      </Routes>
    </div>
  );
}
