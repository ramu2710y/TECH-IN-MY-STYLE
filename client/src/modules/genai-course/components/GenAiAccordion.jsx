import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Item({ item, index, isOpen, onToggle }) {
  return (
    <div className="transition-all duration-300"
      style={{ borderBottom: "1px solid rgba(196,160,100,0.08)" }}>
      <button onClick={onToggle}
        className="w-full flex items-start justify-between py-5 text-left group">
        <div className="flex items-start gap-4 flex-1">
          <span className="font-display text-2xl font-light mt-0.5 transition-colors duration-300"
            style={{ color: isOpen ? "#c4a064" : "rgba(196,160,100,0.25)", minWidth: "2rem" }}>
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="text-sm font-light leading-relaxed transition-colors duration-300"
            style={{ color: isOpen ? "#e8d5b0" : "#8a7a6a" }}>
            {item.q}
          </span>
        </div>
        <motion.div animate={{ rotate: isOpen ? 45 : 0 }} transition={{ duration: 0.25 }}
          className="flex-shrink-0 ml-4 mt-0.5">
          <i className="fas fa-plus text-xs" style={{ color: isOpen ? "#c4a064" : "rgba(196,160,100,0.3)" }} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: "easeInOut" }}>
            <div className="pb-5 pl-14 pr-8">
              <div className="h-px mb-4" style={{ background: "linear-gradient(90deg, rgba(196,160,100,0.2), transparent)" }} />
              <p className="text-rr-stone text-sm font-light leading-relaxed">{item.a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Accordion({ items }) {
  const [open, setOpen] = useState(null);
  return (
    <div style={{ borderTop: "1px solid rgba(196,160,100,0.08)" }}>
      {items.map((item, i) => (
        <Item key={i} item={item} index={i} isOpen={open === i} onToggle={() => setOpen(open === i ? null : i)} />
      ))}
    </div>
  );
}
