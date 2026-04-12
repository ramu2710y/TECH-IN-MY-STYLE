import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

export default function DbAccordion({ items, color = '#00f0ff' }) {
  const [open, setOpen] = useState(null);

  return (
    <div>
      {items.map((item, i) => (
        <div key={i} className="accordion-item" style={{ borderColor: `${color}22` }}>
          <div
            className="accordion-header"
            style={{ color }}
            onClick={() => setOpen(open === i ? null : i)}
          >
            <span style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 600, fontSize: '0.95rem' }}>
              {item.q}
            </span>
            <motion.span
              animate={{ rotate: open === i ? 180 : 0 }}
              transition={{ duration: 0.2 }}
              style={{ color: `${color}88`, fontSize: '0.75rem' }}
            >
              <FontAwesomeIcon icon={faChevronDown} />
            </motion.span>
          </div>
          <AnimatePresence>
            {open === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25 }}
                style={{ overflow: 'hidden' }}
              >
                <div className="accordion-body">{item.a}</div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
