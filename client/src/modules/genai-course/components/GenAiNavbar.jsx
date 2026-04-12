import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Home",    path: "/genai-course",       icon: "fas fa-house" },
  { label: "Topics",  path: "/genai-course/topics", icon: "fas fa-brain" },
  { label: "Build",   path: "/genai-course/build",  icon: "fas fa-hammer" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const loc = useLocation();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  useEffect(() => setOpen(false), [loc]);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 inset-x-0 z-50 transition-all duration-500"
      style={scrolled ? {
        background: "rgba(8,8,8,0.96)",
        backdropFilter: "blur(24px)",
        borderBottom: "1px solid rgba(196,160,100,0.12)",
        boxShadow: "0 4px 60px rgba(0,0,0,0.8)",
      } : { background: "transparent" }}
    >
      <div className="container-rr">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link to="/genai-course" className="flex items-center gap-4 group">
            <div className="relative">
              <div className="w-10 h-10 border flex items-center justify-center transition-all duration-300 group-hover:border-rr-gold"
                style={{ borderColor: "rgba(196,160,100,0.4)" }}>
                <span className="diamond" />
              </div>
            </div>
            <div>
              <p className="font-display text-rr-gold-light text-lg font-light tracking-widest leading-none">GEN AI</p>
              <p className="text-rr-stone text-xs tracking-widest2 uppercase mt-0.5">in My Style</p>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {links.map(l => {
              const active = loc.pathname === l.path;
              return (
                <Link key={l.path} to={l.path}
                  className="relative text-xs tracking-widest uppercase transition-colors duration-300 pb-1"
                  style={{ color: active ? "#c4a064" : "#6b6055" }}
                  onMouseEnter={e => { if (!active) e.currentTarget.style.color = "#c8b89a"; }}
                  onMouseLeave={e => { if (!active) e.currentTarget.style.color = "#6b6055"; }}
                >
                  {l.label}
                  {active && (
                    <motion.div layoutId="nav-indicator"
                      className="absolute bottom-0 left-0 right-0 h-px"
                      style={{ background: "linear-gradient(90deg, transparent, #c4a064, transparent)" }} />
                  )}
                </Link>
              );
            })}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-6">
            <div className="w-px h-6" style={{ background: "rgba(196,160,100,0.2)" }} />
            <Link to="/genai-course/topics" className="btn-rr text-xs">
              <span>Begin</span>
              <i className="fas fa-arrow-right text-xs" />
            </Link>
          </div>

          {/* Mobile */}
          <button onClick={() => setOpen(!open)}
            className="md:hidden w-10 h-10 flex items-center justify-center border transition-colors"
            style={{ borderColor: "rgba(196,160,100,0.2)", color: "#c4a064" }}>
            <i className={`fas ${open ? "fa-xmark" : "fa-bars"} text-sm`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3 }}
            style={{ background: "rgba(8,8,8,0.98)", borderBottom: "1px solid rgba(196,160,100,0.12)" }}>
            <div className="container-rr py-6 space-y-1">
              {links.map(l => (
                <Link key={l.path} to={l.path}
                  className="flex items-center gap-4 py-3 text-xs tracking-widest uppercase transition-colors"
                  style={{ color: loc.pathname === l.path ? "#c4a064" : "#6b6055",
                    borderBottom: "1px solid rgba(196,160,100,0.06)" }}>
                  <span className="diamond-sm" />
                  {l.label}
                </Link>
              ))}
              <div className="pt-4">
                <Link to="/genai-course/topics" className="btn-rr text-xs w-full justify-center">
                  <span>Begin Learning</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}