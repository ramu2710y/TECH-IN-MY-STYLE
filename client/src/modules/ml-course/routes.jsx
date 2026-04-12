import { Routes, Route } from 'react-router-dom'
import MlNavbar from './components/MlNavbar'
import MlFooter from './components/MlFooter'
import MlScrollToTop from './components/MlScrollToTop'
import MlHome from './pages/MlHome'
import MlTopics from './pages/MlTopics'
import MlSubtopicPage from './pages/MlSubtopicPage'
import './styles/ml-index.css'

export default function MlCourseRoutes() {
  return (
    <div className="ml-course-root">
      <MlScrollToTop />
      <MlNavbar />
      <Routes>
        <Route path="/" element={<MlHome />} />
        <Route path="/topics" element={<MlTopics />} />
        <Route path="/subtopics/:slug" element={<MlSubtopicPage />} />
      </Routes>
      <MlFooter />
    </div>
  )
}
