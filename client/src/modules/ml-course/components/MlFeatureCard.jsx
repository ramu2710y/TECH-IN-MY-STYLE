import './MlFeatureCard.css'

export default function MlFeatureCard({ icon, title, description, delay = 0 }) {
  return (
    <div className="ml-feature-card" style={{ animationDelay: `${delay}s` }}>
      <div className="ml-feature-icon">
        <i className={icon}></i>
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}
