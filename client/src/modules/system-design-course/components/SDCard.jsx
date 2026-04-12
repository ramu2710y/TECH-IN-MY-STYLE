import React from 'react';
import { motion } from 'framer-motion';

const SDCard = ({ children, className = '', animate = true }) => {
  if (animate) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`sd-neumorphic-card ${className}`}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <div className={`sd-neumorphic-card ${className}`}>
      {children}
    </div>
  );
};

export default SDCard;
