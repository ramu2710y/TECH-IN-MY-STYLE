import './MlGlassCard.css'

export default function MlGlassCard({ children, className = '', variant = 'default' }) {
  return (
    <div className={`ml-glass-card ml-glass-card--${variant} ${className}`}>
      {children}
    </div>
  )
}
