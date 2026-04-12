import { Link } from 'react-router-dom'
import './MlBreadcrumb.css'

export default function MlBreadcrumb({ current }) {
  return (
    <nav className="ml-breadcrumb" aria-label="Breadcrumb">
      <Link to="/ml-course">Home</Link>
      <span className="ml-breadcrumb-sep">/</span>
      <Link to="/ml-course/topics">Topics</Link>
      <span className="ml-breadcrumb-sep">/</span>
      <span className="ml-breadcrumb-current">{current}</span>
    </nav>
  )
}
