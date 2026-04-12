import { Routes, Route } from 'react-router-dom'
import './playground.css'
import PlaygroundDashboard from './pages/PlaygroundDashboard'
import PlaygroundIDE from './pages/PlaygroundIDE'
import PlaygroundInstructions from './pages/PlaygroundInstructions'

export default function PlaygroundRoutes() {
  return (
    <div className="p5-playground-root">
      <Routes>
        <Route path="/" element={<PlaygroundDashboard />} />
        <Route path="/ide" element={<PlaygroundIDE />} />
        <Route path="/instructions" element={<PlaygroundInstructions />} />
      </Routes>
    </div>
  )
}
