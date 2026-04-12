import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import GenAiTopicCard from "../components/GenAiTopicCard";
import topics, { categories } from "../data/genaiTopics";

export default function GenAI() {
  const [cat,   setCat]   = useState("all");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    let r = topics;
    if (cat !== "all") r = r.filter(t => t.category === cat);
    if (query.trim()) {
      const q = query.toLowerCase();
      r = r.filter(t => t.title.toLowerCase().includes(q) || t.description.toLowerCase().includes(q));
    }
    return r;
  }, [cat, query]);

  const allCats = [{ id: "all", label: "All" }, ...categories];

  return (
    <div style={{ background: "#080808", minHeight: "100vh" }}>

      {/* Header */}
      <div className="pt-32 pb-16" style={{ borderBottom: "1px solid rgba(196,160,100,0.08)" }}>
        <div className="container-rr">
          <div className="ornament mb-8"><span>Knowledge Library</span></div>
          <h1 className="font-display font-light text-rr-ivory mb-4"
            style={{ fontSize: "clamp(2.5rem,6vw,5rem)", letterSpacing: "-0.01em" }}>
            Generative AI <em className="gold-text not-italic">Topics</em>
          </h1>
          <p className="text-rr-stone font-light text-lg max-w-xl mb-10">
            {topics.length} topics — from first principles to production systems.
          </p>

          {/* Search */}
          <div className="flex items-center gap-3 px-5 py-3.5 max-w-md transition-all duration-300"
            style={{ background: "#0d0d0d", border: "1px solid rgba(196,160,100,0.15)" }}>
            <i className="fas fa-magnifying-glass text-xs" style={{ color: "rgba(196,160,100,0.4)" }} />
            <input type="text" value={query} onChange={e => setQuery(e.target.value)}
              placeholder="Search topics..."
              className="flex-1 bg-transparent text-sm font-light outline-none"
              style={{ color: "#c8b89a", letterSpacing: "0.02em" }} />
            {query && (
              <button onClick={() => setQuery("")} className="text-xs" style={{ color: "rgba(196,160,100,0.3)" }}>
                <i className="fas fa-xmark" />
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="container-rr py-12">
        {/* Category filter */}
        <div className="flex gap-0 overflow-x-auto scrollbar-hide mb-12"
          style={{ borderBottom: "1px solid rgba(196,160,100,0.08)" }}>
          {allCats.map(c => {
            const active = cat === c.id;
            const count  = c.id === "all" ? topics.length : topics.filter(t => t.category === c.id).length;
            return (
              <button key={c.id} onClick={() => setCat(c.id)}
                className="tab-rr flex items-center gap-2 flex-shrink-0"
                style={active ? { color: "#c4a064", borderBottomColor: "#c4a064" } : {}}>
                {c.label}
                <span className="text-xs" style={{ color: "rgba(196,160,100,0.3)" }}>({count})</span>
              </button>
            );
          })}
        </div>

        {/* Count */}
        <p className="text-xs tracking-widest uppercase mb-8" style={{ color: "rgba(196,160,100,0.3)" }}>
          {filtered.length} {filtered.length === 1 ? "topic" : "topics"}
          {query && ` — "${query}"`}
        </p>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px"
            style={{ background: "rgba(196,160,100,0.06)" }}>
            {filtered.map((topic, i) => (
              <div key={topic.id} style={{ background: "#080808" }}>
                <GenAiTopicCard topic={topic} index={i} />
              </div>
            ))}
          </div>
        ) : (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-24">
            <p className="font-display text-4xl font-light mb-4" style={{ color: "rgba(196,160,100,0.2)" }}>◇</p>
            <p className="text-rr-stone font-light">No topics found for "{query}"</p>
            <button onClick={() => { setQuery(""); setCat("all"); }}
              className="btn-rr-outline mt-6 text-xs">Clear filters</button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
