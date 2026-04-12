import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const social = [
  { label: 'Telegram',  href: 'https://t.me/Tech_in_my_style_bot',                     icon: 'fab fa-telegram',  cls: 'hover:text-sky-400 hover:border-sky-400/40 hover:bg-sky-400/10 hover:shadow-[0_0_20px_rgba(56,189,248,0.3)]'  },
  { label: 'Instagram', href: 'https://www.instagram.com/techinmystyle',                icon: 'fab fa-instagram', cls: 'hover:text-pink-400 hover:border-pink-400/40 hover:bg-pink-400/10 hover:shadow-[0_0_20px_rgba(244,114,182,0.3)]' },
  { label: 'WhatsApp',  href: 'https://whatsapp.com/channel/0029VbAZrCD5fM5aOU10Av0d', icon: 'fab fa-whatsapp',  cls: 'hover:text-green-400 hover:border-green-400/40 hover:bg-green-400/10 hover:shadow-[0_0_20px_rgba(74,222,128,0.3)]' },
  { label: 'YouTube',   href: 'https://www.youtube.com/@TECHINMYSTYLE',                 icon: 'fab fa-youtube',   cls: 'hover:text-red-400 hover:border-red-400/40 hover:bg-red-400/10 hover:shadow-[0_0_20px_rgba(248,113,113,0.3)]'   },
];

const socialFull = [
  { label: 'Telegram',  href: 'https://t.me/Tech_in_my_style_bot',                     icon: 'fab fa-telegram',  iconCls: 'text-sky-400',   bgCls: 'bg-sky-400/10 border-sky-400/20',   rowCls: 'hover:border-sky-400/40 hover:bg-sky-400/5'   },
  { label: 'Instagram', href: 'https://www.instagram.com/techinmystyle',                icon: 'fab fa-instagram', iconCls: 'text-pink-400',  bgCls: 'bg-pink-400/10 border-pink-400/20', rowCls: 'hover:border-pink-400/40 hover:bg-pink-400/5' },
  { label: 'WhatsApp',  href: 'https://whatsapp.com/channel/0029VbAZrCD5fM5aOU10Av0d', icon: 'fab fa-whatsapp',  iconCls: 'text-green-400', bgCls: 'bg-green-400/10 border-green-400/20',rowCls: 'hover:border-green-400/40 hover:bg-green-400/5'},
  { label: 'YouTube',   href: 'https://www.youtube.com/@TECHINMYSTYLE',                 icon: 'fab fa-youtube',   iconCls: 'text-red-400',   bgCls: 'bg-red-400/10 border-red-400/20',   rowCls: 'hover:border-red-400/40 hover:bg-red-400/5'   },
];

const courses = [
  { label: 'HTML in My Style',       href: '/html-course',       icon: 'fab fa-html5',    iconCls: 'text-orange-400', bg: 'bg-orange-400/10 border-orange-400/20' },
  { label: 'CSS in My Style',        href: '/css-course',        icon: 'fab fa-css3-alt', iconCls: 'text-blue-400',   bg: 'bg-blue-400/10 border-blue-400/20'   },
  { label: 'JavaScript in My Style', href: '/js-basic-course',   icon: 'fab fa-js',       iconCls: 'text-yellow-400', bg: 'bg-yellow-400/10 border-yellow-400/20'},
  { label: 'Python in My Style',     href: '/python-course',     icon: 'fab fa-python',   iconCls: 'text-cyan-400',   bg: 'bg-cyan-400/10 border-cyan-400/20'   },
  { label: 'Gen AI in My Style',     href: '/genai-course',      icon: 'fas fa-robot',    iconCls: 'text-violet-400', bg: 'bg-violet-400/10 border-violet-400/20'},
];

const navLinks = [
  { label: 'Home',       to: '/genai-course',        icon: 'fas fa-house'  },
  { label: 'All Topics', to: '/genai-course/topics', icon: 'fas fa-brain'  },
  { label: 'Build Mode', to: '/genai-course/build',  icon: 'fas fa-hammer' },
];

const hotTopics = [
  { label: 'What is Generative AI', to: '/genai-course/what-is-generative-ai'    },
  { label: 'Prompt Engineering',    to: '/genai-course/prompt-engineering-basics' },
  { label: 'RAG',                   to: '/genai-course/rag-basics'                },
  { label: 'AI Agents',             to: '/genai-course/agents'                    },
  { label: 'OpenAI API',            to: '/genai-course/openai-api'                },
  { label: 'Embeddings',            to: '/genai-course/embeddings'                },
];

const stats = [
  { value: '40+',  label: 'Topics',         icon: 'fas fa-book-open' },
  { value: '3',    label: 'Learning Paths', icon: 'fas fa-route'     },
  { value: '4',    label: 'Build Projects', icon: 'fas fa-hammer'    },
  { value: '100%', label: 'Free Forever',   icon: 'fas fa-infinity'  },
];

function ColHeader({ icon, label }) {
  return (
    <p className="text-xs font-bold uppercase tracking-[0.15em] text-gray-600 mb-5 flex items-center gap-2">
      <i className={`${icon} text-violet-500/50`} style={{ fontSize: '10px' }} />
      {label}
    </p>
  );
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#04040a]">

      {/* dot matrix */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.07]"
        style={{
          backgroundImage: 'radial-gradient(rgba(124,58,237,1) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          maskImage: 'radial-gradient(ellipse 90% 90% at 50% 50%, black 30%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 90% 90% at 50% 50%, black 30%, transparent 100%)',
        }}
      />

      {/* ambient glows */}
      <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 65%)' }} />
      <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.08) 0%, transparent 65%)' }} />

      {/* top shimmer */}
      <div className="absolute top-0 inset-x-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent 0%, #7c3aed 30%, #06b6d4 70%, transparent 100%)' }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── STATS ── */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-14 pb-10">
          {stats.map((s, i) => (
            <motion.div key={s.label}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.07 }}
              className="group relative rounded-2xl p-4 overflow-hidden border border-white/[0.06] bg-white/[0.02] hover:border-violet-500/25 hover:bg-violet-500/5 transition-all duration-300 cursor-default"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 border border-violet-500/25"
                  style={{ background: 'linear-gradient(135deg,rgba(124,58,237,0.2),rgba(6,182,212,0.2))' }}>
                  <i className={`${s.icon} text-sm gradient-text`} />
                </div>
                <div>
                  <p className="text-2xl font-black gradient-text leading-none">{s.value}</p>
                  <p className="text-gray-500 text-xs mt-0.5 font-medium">{s.label}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />

        {/* ── MAIN GRID ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 py-14">

          {/* Brand — 4 cols */}
          <div className="lg:col-span-4">
            <Link to="/genai-course" className="inline-flex items-center gap-3 mb-6 group">
              <div className="relative w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_0_30px_rgba(124,58,237,0.5)]"
                style={{ background: 'linear-gradient(135deg,#7c3aed,#0891b2)', boxShadow: '0 0 20px rgba(124,58,237,0.35)' }}>
                <i className="fas fa-robot text-white text-xl" />
              </div>
              <div>
                <p className="font-black text-white text-lg leading-tight tracking-tight">Gen AI</p>
                <p className="text-sm font-bold leading-tight gradient-text">in My Style</p>
              </div>
            </Link>

            <p className="text-gray-500 text-sm leading-relaxed mb-7 max-w-xs">
              A premium AI learning platform built for developers, students, and builders who want to go from zero to production AI systems.
            </p>

            {/* Social icon row */}
            <div className="flex items-center gap-2.5 mb-7">
              {social.map(s => (
                <motion.a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                  aria-label={s.label}
                  whileHover={{ y: -4, scale: 1.12 }} whileTap={{ scale: 0.92 }}
                  className={`w-10 h-10 rounded-xl flex items-center justify-center text-gray-500 border border-white/[0.09] bg-white/[0.04] transition-all duration-200 ${s.cls}`}
                >
                  <i className={`${s.icon} text-base`} />
                </motion.a>
              ))}
            </div>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-semibold border border-violet-500/25 bg-violet-500/10 text-violet-300">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
              <i className="fas fa-microchip text-xs" />
              Powered by OpenAI
            </div>
          </div>

          {/* Navigate — 3 cols */}
          <div className="lg:col-span-3">
            <ColHeader icon="fas fa-compass" label="Navigate" />
            <ul className="space-y-0.5 mb-7">
              {navLinks.map(link => (
                <li key={link.to}>
                  <Link to={link.to}
                    className="group flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-gray-500 hover:text-white hover:bg-violet-500/[0.08] transition-all duration-150">
                    <span className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 bg-white/[0.04] border border-white/[0.07] group-hover:border-violet-500/30 transition-colors">
                      <i className={`${link.icon} text-xs text-gray-600 group-hover:text-violet-400 transition-colors`} />
                    </span>
                    {link.label}
                    <i className="fas fa-arrow-right text-xs ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-1 text-violet-400 transition-all duration-150" />
                  </Link>
                </li>
              ))}
            </ul>

            <ColHeader icon="fas fa-fire-flame-curved" label="Hot Topics" />
            <ul className="space-y-0.5">
              {hotTopics.map(link => (
                <li key={link.to}>
                  <Link to={link.to}
                    className="group flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm text-gray-600 hover:text-white hover:bg-white/[0.04] transition-all duration-150">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500/40 group-hover:bg-cyan-400 transition-colors flex-shrink-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses — 3 cols */}
          <div className="lg:col-span-3">
            <ColHeader icon="fas fa-graduation-cap" label="Our Courses" />
            <ul className="space-y-2">
              {courses.map(c => (
                <li key={c.label}>
                  <a href={c.href}
                    className="group flex items-center gap-3 p-3 rounded-xl border border-white/[0.06] bg-white/[0.025] hover:bg-white/[0.05] hover:border-white/[0.12] transition-all duration-200"
                  >
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 border ${c.bg} transition-transform duration-200 group-hover:scale-110`}>
                      <i className={`${c.icon} text-sm ${c.iconCls}`} />
                    </div>
                    <span className="text-gray-400 group-hover:text-white text-sm font-medium transition-colors flex-1">{c.label}</span>
                    <i className="fas fa-arrow-up-right-from-square text-gray-700 group-hover:text-gray-400 text-xs transition-colors" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect — 2 cols */}
          <div className="lg:col-span-2">
            <ColHeader icon="fas fa-satellite-dish" label="Connect" />
            <div className="space-y-2.5">
              {socialFull.map(s => (
                <motion.a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                  whileHover={{ x: 3 }}
                  className={`group flex items-center gap-3 p-2.5 rounded-xl border border-white/[0.06] bg-white/[0.025] transition-all duration-200 ${s.rowCls}`}
                >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 border ${s.bgCls}`}>
                    <i className={`${s.icon} text-sm ${s.iconCls}`} />
                  </div>
                  <span className="text-gray-500 group-hover:text-white text-xs font-semibold transition-colors">{s.label}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />

        {/* ── BOTTOM BAR ── */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-gray-600">
            <i className="fas fa-copyright" />
            <span>2025</span>
            <span className="font-semibold text-gray-400">Gen AI in My Style</span>
            <span className="hidden sm:inline text-gray-700">·</span>
            <span className="hidden sm:inline">All Rights Reserved</span>
            <span className="text-gray-700">·</span>
            <a href="https://techinmystyle.com" target="_blank" rel="noopener noreferrer"
              className="font-bold gradient-text hover:opacity-80 transition-opacity">
              TechInMyStyle
            </a>
          </div>
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-1.5 text-xs text-gray-600">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              All systems operational
            </div>
            <div className="h-3 w-px bg-white/10" />
            <div className="flex items-center gap-1.5 text-xs text-gray-600">
              <i className="fas fa-code text-violet-500/50" />
              <span>React</span>
              <span className="text-gray-700">+</span>
              <span className="gradient-text font-semibold">AI</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}