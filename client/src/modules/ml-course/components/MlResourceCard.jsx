import './MlResourceCard.css'

export default function MlResourceCard({ type, title, url }) {
  const icon = type === 'youtube' ? 'fab fa-youtube' : 'fas fa-file-pdf'
  const label = type === 'youtube' ? 'Watch Video' : 'View Document'
  const colorClass = type === 'youtube' ? 'ml-resource-youtube' : 'ml-resource-pdf'

  return (
    <div className={`ml-resource-card ${colorClass}`}>
      <div className="ml-resource-icon">
        <i className={icon}></i>
      </div>
      <div className="ml-resource-info">
        <h3>{title}</h3>
        <a href={url} target="_blank" rel="noopener noreferrer" className="ml-resource-link">
          {label} <i className="fas fa-external-link-alt"></i>
        </a>
      </div>
    </div>
  )
}
