import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

export default function DbHUDCard({ title, subtitle, icon, to, color = '#00f0ff', index = 0, badge }) {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08 }}
      whileHover={{ y: -4, scale: 1.01 }}
      onClick={() => to && navigate(to)}
      className="topic-card hud-panel corner-tl corner-br"
      style={{
        padding: '1.2rem',
        cursor: to ? 'pointer' : 'default',
        borderColor: `${color}22`,
      }}
    >
      {/* Scan line on hover */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileHover={{ scaleX: 1, opacity: 1 }}
        style={{
          position: 'absolute',
          top: '50%',
          left: 0,
          right: 0,
          height: '1px',
          background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
          transformOrigin: 'left',
        }}
      />

      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.8rem' }}>
        {icon && (
          <div style={{
            width: 36, height: 36,
            border: `1px solid ${color}44`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color, fontSize: '0.9rem', flexShrink: 0,
            background: `${color}08`,
          }}>
            <FontAwesomeIcon icon={icon} />
          </div>
        )}
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
            <span className="font-orbitron" style={{ fontSize: '0.7rem', color, letterSpacing: '0.05em' }}>
              {title}
            </span>
            {badge && (
              <span style={{
                fontSize: '0.55rem', padding: '1px 6px',
                background: `${color}22`, border: `1px solid ${color}44`,
                color, fontFamily: 'Orbitron, monospace',
              }}>
                {badge}
              </span>
            )}
          </div>
          {subtitle && (
            <p style={{ fontSize: '0.8rem', color: '#607d8b', lineHeight: 1.4 }}>{subtitle}</p>
          )}
        </div>
        {to && (
          <FontAwesomeIcon icon={faChevronRight} style={{ color: `${color}66`, fontSize: '0.7rem', flexShrink: 0 }} />
        )}
      </div>
    </motion.div>
  );
}
