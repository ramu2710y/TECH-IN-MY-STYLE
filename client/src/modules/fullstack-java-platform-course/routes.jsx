import { Routes, Route } from 'react-router-dom'
import FsJavaNavbar from './components/FsJavaNavbar'
import FsJavaFooter from './components/FsJavaFooter'
import FsJavaHome from './pages/FsJavaHome'
import FsJavaPhasesOverview from './pages/FsJavaPhasesOverview'
import FsJavaPhasePage from './pages/FsJavaPhasePage'
import FsJavaTopicPage from './pages/FsJavaTopicPage'
import FsJavaApiLab from './pages/FsJavaApiLab'
import './fsjava-index.css'

export default function FsJavaRoutes() {
  return (
    <div className="fsjava-module">
      <FsJavaNavbar />
      <Routes>
        <Route path="/" element={<FsJavaHome />} />
        <Route path="/phases" element={<FsJavaPhasesOverview />} />
        <Route path="/phase/:phaseId" element={<FsJavaPhasePage />} />
        <Route path="/topic/:topicId" element={<FsJavaTopicPage />} />
        <Route path="/api-lab" element={<FsJavaApiLab />} />
      </Routes>
      <FsJavaFooter />
    </div>
  )
}
