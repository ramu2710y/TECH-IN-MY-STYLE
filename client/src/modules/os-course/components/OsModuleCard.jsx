import { Link } from 'react-router-dom';
import './OsModuleCard.css';

export default function OsModuleCard({ to, icon, number, title, description, color = 'var(--gradient-primary)' }) {
    return (
        <Link to={to} className="module-card" style={{ '--card-accent': color }}>
            <div className="module-card-number">{String(number).padStart(2, '0')}</div>
            <div className="module-card-icon">{icon}</div>
            <h3 className="module-card-title">{title}</h3>
            <p className="module-card-desc">{description}</p>
            <span className="module-card-arrow">→</span>
        </Link>
    );
}
