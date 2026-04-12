import { motion } from "framer-motion";

export default function SectionHeader({ eyebrow, title, highlight, subtitle, center = false }) {
  return (
    <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} transition={{ duration: 0.7, ease: [0.22,1,0.36,1] }}
      className={`mb-16 ${center ? "text-center" : ""}`}>
      {eyebrow && (
        <div className={`ornament mb-6 ${center ? "justify-center" : ""}`}>
          <span>{eyebrow}</span>
        </div>
      )}
      <h2 className="font-display text-4xl sm:text-5xl font-light text-rr-ivory mb-4 leading-tight">
        {title}{" "}
        {highlight && <em className="gold-text not-italic">{highlight}</em>}
      </h2>
      {subtitle && (
        <p className={`text-rr-stone text-base font-light leading-relaxed ${center ? "mx-auto" : ""} max-w-xl`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}