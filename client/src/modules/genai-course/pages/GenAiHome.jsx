import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import GenAiTopicCard from "../components/GenAiTopicCard";
import GenAiSectionHeader from "../components/GenAiSectionHeader";
import { learningPaths } from "../data/genaiTopics";
import topics from "../data/genaiTopics";

const featuredTopics = topics.slice(0, 6);

const pathMeta = {
  beginner: { num: "I",   label: "Beginner",  desc: "Foundation & core concepts" },
  builder:  { num: "II",  label: "Builder",   desc: "APIs, RAG & real applications" },
  advanced: { num: "III", label: "Advanced",  desc: "Agents, fine-tuning & beyond" },
};

const buildItems = [
  { title: "AI Chatbot",      desc: "Streaming multi-turn conversations",  icon: "fas fa-comments",   path: "/genai-course/build" },
  { title: "Email Generator", desc: "Professional emails from bullet points", icon: "fas fa-envelope",   path: "/genai-course/build" },
  { title: "Resume Builder",  desc: "ATS-optimized tailored resumes",      icon: "fas fa-file-lines", path: "/genai-course/build" },
  { title: "AI Assistant",    desc: "Tool-using autonomous agent",         icon: "fas fa-robot",      path: "/genai-course/build" },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Home() {
  return (
    <div style={{ background: "#080808" }}>

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Subtle radial */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 60% 50% at 50% 40%, rgba(196,160,100,0.04) 0%, transparent 70%)" }} />

        {/* Fine grid */}
        <div className="absolute inset-0 pointer-events-none opacity-30"
          style={{
            backgroundImage: "linear-gradient(rgba(196,160,100,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(196,160,100,0.04) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }} />

        {/* Corner ornaments */}
        {[["top-20 left-8", "right"], ["top-20 right-8", "left"], ["bottom-8 left-8", "right"], ["bottom-8 right-8", "left"]].map(([pos, dir], i) => (
          <div key={i} className={`absolute ${pos} hidden lg:block`}>
            <div className="w-8 h-8" style={{
              borderTop: "1px solid rgba(196,160,100,0.2)",
              borderLeft: dir === "right" ? "1px solid rgba(196,160,100,0.2)" : "none",
              borderRight: dir === "left" ? "1px solid rgba(196,160,100,0.2)" : "none",
            }} />
          </div>
        ))}

        <div className="container-rr text-center relative z-10 pt-20">
          <motion.div {...fadeUp(0.1)}>
            <div className="badge-rr mx-auto mb-10 w-fit">
              <span className="diamond-sm" />
              The AI Learning Platform for Builders
            </div>
          </motion.div>

          <motion.div {...fadeUp(0.25)}>
            <h1 className="font-display font-light text-rr-ivory leading-none mb-4"
              style={{ fontSize: "clamp(3.5rem, 10vw, 8rem)", letterSpacing: "-0.02em" }}>
              Gen AI
            </h1>
            <h2 className="font-display font-light leading-none mb-10"
              style={{ fontSize: "clamp(2rem, 6vw, 5rem)", letterSpacing: "0.05em" }}>
              <em className="gold-text not-italic">in My Style</em>
            </h2>
          </motion.div>

          <motion.div {...fadeUp(0.4)}>
            <p className="text-rr-stone text-lg font-light max-w-xl mx-auto mb-12 leading-relaxed">
              Master Generative AI from fundamentals to building real AI systems.
              Crafted for developers, students, and builders.
            </p>
          </motion.div>

          <motion.div {...fadeUp(0.5)} className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
            <Link to="/genai-course/topics" className="btn-rr">
              <span>Begin Learning</span>
              <i className="fas fa-arrow-right text-xs" />
            </Link>
            <Link to="/genai-course/build" className="btn-rr-outline">
              <span>Explore Projects</span>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div {...fadeUp(0.6)}
            className="grid grid-cols-2 sm:grid-cols-4 gap-px max-w-2xl mx-auto"
            style={{ border: "1px solid rgba(196,160,100,0.1)", background: "rgba(196,160,100,0.1)" }}>
            {[
              { v: `${topics.length}+`, l: "Topics" },
              { v: "3",    l: "Learning Paths" },
              { v: "4",    l: "Build Projects" },
              { v: "100%", l: "Free" },
            ].map(s => (
              <div key={s.l} className="py-6 text-center" style={{ background: "#080808" }}>
                <p className="font-display text-3xl font-light gold-text">{s.v}</p>
                <p className="text-rr-stone text-xs tracking-widest uppercase mt-1">{s.l}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll */}
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 2.5, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <div className="w-px h-8" style={{ background: "linear-gradient(180deg, transparent, rgba(196,160,100,0.4))" }} />
          <span className="text-xs tracking-widest uppercase" style={{ color: "rgba(196,160,100,0.3)" }}>Scroll</span>
        </motion.div>
      </section>

      {/* ── FEATURED TOPICS ── */}
      <section className="section-rr" style={{ borderTop: "1px solid rgba(196,160,100,0.08)" }}>
        <div className="container-rr">
          <GenAiSectionHeader eyebrow="Featured Topics" title="Start with the" highlight="Essentials"
            subtitle="Hand-picked topics to get you from zero to building real AI applications." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px"
            style={{ background: "rgba(196,160,100,0.08)" }}>
            {featuredTopics.map((topic, i) => (
              <div key={topic.id} style={{ background: "#080808" }}>
                <GenAiTopicCard topic={topic} index={i} />
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/genai-course/topics" className="btn-rr-outline">
              <span>View All {topics.length} Topics</span>
              <i className="fas fa-arrow-right text-xs" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── LEARNING PATHS ── */}
      <section className="section-rr" style={{ background: "#0a0a0a", borderTop: "1px solid rgba(196,160,100,0.08)" }}>
        <div className="container-rr">
          <GenAiSectionHeader eyebrow="Learning Paths" title="Choose your" highlight="Journey"
            subtitle="Structured progressions designed for where you are and where you want to go." center />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px"
            style={{ background: "rgba(196,160,100,0.08)" }}>
            {Object.entries(learningPaths).map(([key, path], i) => {
              const meta = pathMeta[key];
              return (
                <motion.div key={key} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.12, duration: 0.7 }}
                  className="p-8 group" style={{ background: "#0a0a0a" }}>
                  <div className="flex items-start justify-between mb-6">
                    <span className="font-display text-5xl font-light" style={{ color: "rgba(196,160,100,0.15)" }}>
                      {meta.num}
                    </span>
                    <div className="h-px flex-1 mx-4 mt-6" style={{ background: "rgba(196,160,100,0.1)" }} />
                  </div>
                  <h3 className="font-display text-2xl font-light text-rr-ivory mb-1">{meta.label}</h3>
                  <p className="text-rr-stone text-sm font-light mb-6">{meta.desc}</p>
                  <div className="space-y-2.5">
                    {path.topics.map(tid => {
                      const t = topics.find(t => t.id === tid);
                      return t ? (
                        <Link key={tid} to={`/genai-course/${tid}`}
                          className="flex items-center gap-3 text-sm font-light transition-colors duration-200 group/l"
                          style={{ color: "#4a3f35" }}
                          onMouseEnter={e => e.currentTarget.style.color = "#c4a064"}
                          onMouseLeave={e => e.currentTarget.style.color = "#4a3f35"}>
                          <span className="diamond-sm flex-shrink-0" />
                          {t.title}
                        </Link>
                      ) : null;
                    })}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── BUILD ── */}
      <section className="section-rr" style={{ borderTop: "1px solid rgba(196,160,100,0.08)" }}>
        <div className="container-rr">
          <GenAiSectionHeader eyebrow="Build Mode" title="Build real" highlight="AI Projects"
            subtitle="Production-ready code for real AI applications. Copy, customize, and ship." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px"
            style={{ background: "rgba(196,160,100,0.08)" }}>
            {buildItems.map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                <Link to={item.path}>
                  <div className="p-8 group transition-all duration-300 h-full"
                    style={{ background: "#080808" }}
                    onMouseEnter={e => e.currentTarget.style.background = "#0d0d0d"}
                    onMouseLeave={e => e.currentTarget.style.background = "#080808"}>
                    <div className="w-10 h-10 flex items-center justify-center mb-6 transition-colors duration-300"
                      style={{ border: "1px solid rgba(196,160,100,0.2)" }}
                      onMouseEnter={e => e.currentTarget.style.borderColor = "rgba(196,160,100,0.5)"}
                      onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(196,160,100,0.2)"}>
                      <i className={`${item.icon} text-sm`} style={{ color: "rgba(196,160,100,0.6)" }} />
                    </div>
                    <h3 className="font-display text-xl font-light text-rr-ivory mb-2 group-hover:text-rr-gold-light transition-colors">{item.title}</h3>
                    <p className="text-rr-stone text-sm font-light">{item.desc}</p>
                    <div className="mt-6 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="h-px w-6" style={{ background: "rgba(196,160,100,0.4)" }} />
                      <i className="fas fa-arrow-right text-xs text-rr-gold" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/genai-course/build" className="btn-rr">
              <span>Explore Build Mode</span>
              <i className="fas fa-arrow-right text-xs" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
