import { Routes, Route } from 'react-router-dom'
import './index.css'
import PythonHome from './pages/PythonHome'
import Topics from './pages/Topics'
import About from './pages/About'
import Contact from './pages/Contact'
import Tasks from './pages/Tasks'
import SubtopicPage from './pages/SubtopicPage'
import Playground from './pages/Playground'

function PythonApp() {
  return (
    <div className="py-module-container">
      <Routes>
        <Route path="/" element={<PythonHome />} />
        <Route path="/topics" element={<Topics />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/subtopics/:slug" element={<SubtopicPage />} />
        <Route path="/playground/*" element={<Playground />} />
      </Routes>
    </div>
  )
}

export default PythonApp
