import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { searchTopics } from "../data/genaiTopics";

export default function SearchBar({ placeholder = "Search topics...", className = "" }) {
  const [query,   setQuery]   = useState("");
  const [results, setResults] = useState([]);
  const [focused, setFocused] = useState(false);
  const ref = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    setResults(query.trim().length > 1 ? searchTopics(query).slice(0, 6) : []);
  }, [query]);

  const go = topic => {
    navigate(`/genai/${topic.id}`);
    setQuery(""); setResults([]);
    ref.current?.blur();
  };

  return (
    <div className={`relative ${className}`}>
      <div className="flex items-center gap-3 px-4 py-3 transition-all duration-300"
        style={{
          background: "#0d0d0d",
          border: focused ? "1px solid rgba(196,160,100,0.4)" : "1px solid rgba(196,160,100,0.15)",
        }}>
        <i className="fas fa-magnifying-glass text-xs" style={{ color: "rgba(196,160,100,0.4)" }} />
        <input ref={ref} type="text" value={query} onChange={e => setQuery(e.target.value)}
          onFocus={() => setFocused(true)} onBlur={() => setTimeout(() => setFocused(false), 200)}
          onKeyDown={e => e.key === "Escape" && (setQuery(""), setResults([]))}
          placeholder={placeholder}
          className="flex-1 bg-transparent text-sm font-light outline-none"
          style={{ color: "#c8b89a", letterSpacing: "0.02em" }}
        />
        {query && (
          <button onClick={() => { setQuery(""); setResults([]); }}
            className="text-xs transition-colors" style={{ color: "rgba(196,160,100,0.3)" }}
            onMouseEnter={e => e.currentTarget.style.color = "#c4a064"}
            onMouseLeave={e => e.currentTarget.style.color = "rgba(196,160,100,0.3)"}>
            <i className="fas fa-xmark" />
          </button>
        )}
      </div>

      <AnimatePresence>
        {results.length > 0 && focused && (
          <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }} transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 z-50 overflow-hidden"
            style={{ background: "#0d0d0d", border: "1px solid rgba(196,160,100,0.2)",
              borderTop: "none", boxShadow: "0 20px 60px rgba(0,0,0,0.8)" }}>
            {results.map((topic, i) => (
              <button key={topic.id} onClick={() => go(topic)}
                className="w-full flex items-center gap-4 px-5 py-3.5 text-left transition-colors duration-150 group"
                style={{ borderBottom: "1px solid rgba(196,160,100,0.06)" }}
                onMouseEnter={e => e.currentTarget.style.background = "rgba(196,160,100,0.04)"}
                onMouseLeave={e => e.currentTarget.style.background = "transparent"}>
                <span className="diamond-sm flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-light truncate" style={{ color: "#c8b89a" }}>{topic.title}</p>
                  <p className="text-xs font-light truncate mt-0.5" style={{ color: "#4a3f35" }}>{topic.category}</p>
                </div>
                <span className="text-xs tracking-wider" style={{ color: "rgba(196,160,100,0.3)" }}>{topic.readTime}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
