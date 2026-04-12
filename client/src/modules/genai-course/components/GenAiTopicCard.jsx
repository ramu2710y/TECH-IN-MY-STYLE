import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const catAccent = {
  foundations: "#7aad8a", architecture: "#9ab0c8", prompting: "#c4a064",
  embeddings: "#8ab8c8", rag: "#b09ac8", agents: "#c87a7a",
  finetuning: "#c89ab0", devstack: "#8a9ab0", applications: "#7aad8a",
  multimodal: "#c8ad7a", safety: "#c8907a", optimization: "#7ac8b8",
  advanced: "#b07ac8",
};

const tagLabel = { beginner: "Beginner", builder: "Builder", advanced: "Advanced" };

export default function TopicCard({ topic, index = 0 }) {
  const accent = catAccent[topic.category] || "#c4a064";

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.04, ease: [0.22,1,0.36,1] }}
      whileHover={{ y: -4 }} className="group h-full">
      <Link to={`/genai-course/${topic.id}`} className="block h-full">
        <div className="card-rr h-full p-6 flex flex-col" style={{ borderRadius: 0 }}>
          {/* Top accent line */}
          <div className="h-px mb-6 transition-all duration-500"
            style={{ background: `linear-gradient(90deg, ${accent}60, transparent)`,
              opacity: 0.4 }} />

          {/* Category */}
          <p className="text-xs tracking-widest uppercase mb-3 transition-colors duration-300"
            style={{ color: accent + "80" }}>
            {topic.category}
          </p>

          {/* Title */}
          <h3 className="font-display text-xl font-light text-rr-ivory mb-3 leading-snug
            group-hover:text-rr-gold-light transition-colors duration-300 flex-1">
            {topic.title}
          </h3>

          {/* Description */}
          <p className="text-rr-stone text-sm font-light leading-relaxed mb-5 line-clamp-2">
            {topic.description}
          </p>

          {/* Footer */}
          <div className="flex items-center justify-between pt-4"
            style={{ borderTop: "1px solid rgba(196,160,100,0.08)" }}>
            <div className="flex gap-2">
              {topic.tags.map(tag => (
                <span key={tag} className="text-xs tracking-wider uppercase"
                  style={{ color: "rgba(196,160,100,0.5)" }}>
                  {tagLabel[tag] || tag}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-2 text-xs text-rr-muted">
              <i className="fas fa-clock" style={{ fontSize: "10px" }} />
              {topic.readTime}
            </div>
          </div>

          {/* Hover arrow */}
          <div className="flex items-center gap-2 mt-4 opacity-0 group-hover:opacity-100
            transition-all duration-300 -translate-x-2 group-hover:translate-x-0">
            <div className="h-px flex-1" style={{ background: `linear-gradient(90deg, ${accent}60, transparent)` }} />
            <i className="fas fa-arrow-right text-xs" style={{ color: accent }} />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}