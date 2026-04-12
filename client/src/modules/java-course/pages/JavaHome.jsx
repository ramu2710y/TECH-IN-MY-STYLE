import { Link } from 'react-router-dom';
import {
  ArrowRightIcon,
  PlayIcon,
  CodeBracketIcon,
} from '@heroicons/react/24/outline';
import { topicsData, stats, features } from '../data/topicsData';
import { useState, useEffect, useRef } from 'react';

const codeLines = [
  { text: 'public class HelloWorld {', color: 'text-blue-400' },
  { text: '    public static void main(String[] args) {', color: 'text-gray-300' },
  { text: '        System.out.println("Hello, World!");', color: 'text-java-orange' },
  { text: '        // Java In My Style 🚀', color: 'text-green-400' },
  { text: '    }', color: 'text-gray-300' },
  { text: '}', color: 'text-blue-400' },
];

const floatingItems = [
  { text: 'JVM',         delay: '0s',    pos: 'top-10 left-8' },
  { text: 'OOP',         delay: '0.5s',  pos: 'top-20 right-10' },
  { text: 'Classes',     delay: '1s',    pos: 'bottom-32 left-10' },
  { text: 'Lambda',      delay: '1.5s',  pos: 'top-1/2 right-6' },
  { text: 'Generics',    delay: '2s',    pos: 'bottom-16 right-16' },
  { text: 'Streams',     delay: '0.8s',  pos: 'top-1/3 left-2' },
  { text: 'Inheritance', delay: '1.2s',  pos: 'bottom-40 right-32' },
  { text: 'Polymorphism',delay: '1.8s',  pos: 'top-28 left-1/3' },
];

const statCards = [
  { label: 'Topics Covered', value: '8',     suffix: '+', color: 'from-java-blue to-java-lightblue',     icon: '📚' },
  { label: 'Subtopics',      value: '60',    suffix: '+', color: 'from-java-orange to-amber-400',        icon: '📝' },
  { label: 'Code Examples',  value: '200',   suffix: '+', color: 'from-purple-600 to-java-blue',         icon: '💻' },
  { label: 'Students',       value: '10000', suffix: '+', color: 'from-green-500 to-java-blue',           icon: '👩‍💻' },
];

const featureCards = [
  {
    icon: '🎯',
    title: 'Comprehensive Curriculum',
    desc: 'From basics to advanced topics covering OOP, threading, collections, and more.',
    gradient: 'from-java-blue to-java-lightblue',
  },
  {
    icon: '⚡',
    title: 'Interactive Compiler',
    desc: 'Write and run Java code directly in your browser with our built-in Java IDE powered by Judge0.',
    gradient: 'from-java-orange to-amber-400',
  },
  {
    icon: '🎥',
    title: 'Video Resources',
    desc: 'Visual learning with curated video content for each topic to reinforce your understanding.',
    gradient: 'from-purple-600 to-java-blue',
  },
  {
    icon: '🏆',
    title: 'Interview Preparation',
    desc: 'MCQs and common Java interview questions to help you land your dream job.',
    gradient: 'from-green-500 to-java-blue',
  },
  {
    icon: '🐳',
    title: 'Docker Support',
    desc: 'Learn to containerize your Java apps with complete Docker guides and examples.',
    gradient: 'from-java-lightblue to-cyan-500',
  },
  {
    icon: '🤝',
    title: 'Community Connect',
    desc: 'Join our growing community on Telegram, Instagram, WhatsApp, and YouTube.',
    gradient: 'from-red-500 to-java-orange',
  },
];

/* ─── Animated counter ─────────────────────────────────────────────────────── */
function AnimatedCounter({ end, suffix = '' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !started) setStarted(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const endNum = parseInt(String(end).replace(/\D/g, ''), 10);
    const duration = 2000;
    const step = endNum / (duration / 16);
    let current = 0;
    const timer = setInterval(() => {
      current += step;
      if (current >= endNum) {
        setCount(endNum);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [started, end]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  );
}

/* ─── Home ──────────────────────────────────────────────────────────────────── */
export default function Home() {
  const [typedIndex, setTypedIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  /* typing effect */
  useEffect(() => {
    if (typedIndex >= codeLines.length) return;
    const timer = setTimeout(() => setTypedIndex(prev => prev + 1), 420);
    return () => clearTimeout(timer);
  }, [typedIndex]);

  /* blinking cursor */
  useEffect(() => {
    const id = setInterval(() => setShowCursor(p => !p), 530);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="overflow-x-hidden">

      {/* ════════════════════════════════════════
          HERO SECTION
      ════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-java-dark via-[#0a1628] to-java-darker overflow-hidden">

        {/* ── Ambient glows ── */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-java-blue/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-java-orange/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-java-lightblue/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          {/* grid */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: 'linear-gradient(#0074BD 1px, transparent 1px), linear-gradient(90deg, #0074BD 1px, transparent 1px)',
              backgroundSize: '50px 50px',
            }}
          />
        </div>

        {/* ── Floating Java keywords ── */}
        {floatingItems.map((item, i) => (
          <div
            key={i}
            className={`absolute ${item.pos} hidden lg:block px-3 py-1 rounded-full text-xs font-mono font-semibold
              border border-java-blue/30 text-java-blue/60 bg-java-blue/5 backdrop-blur-sm select-none`}
            style={{ animation: 'float 3s ease-in-out infinite', animationDelay: item.delay }}
          >
            {item.text}
          </div>
        ))}

        {/* ── Main content ── */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
          <div className="grid lg:grid-cols-2 gap-14 items-center">

            {/* Left: Hero text */}
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-java-blue/10 border border-java-blue/20 text-java-orange text-sm font-medium mb-7">
                <span className="w-2 h-2 bg-java-orange rounded-full animate-pulse" />
                🚀 Learn Java The Right Way
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-poppins text-white leading-tight mb-6">
                Master{' '}
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-java-blue to-java-orange bg-clip-text text-transparent">Java</span>
                  <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-gradient-to-r from-java-blue to-java-orange rounded-full" />
                </span>
                {' '}Programming{' '}
                <span className="text-java-orange whitespace-nowrap">in My Style</span>
              </h1>

              <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-lg">
                A comprehensive guide to learning Java from basics to advanced concepts with
                real-world examples, an interactive compiler, and interview preparation — all in one place.
              </p>

              {/* CTA buttons */}
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/java-course/topics"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-java-blue to-java-lightblue text-white font-semibold rounded-xl hover:opacity-90 hover:-translate-y-0.5 transition-all duration-200 shadow-lg shadow-java-blue/30"
                >
                  Explore Topics
                  <ArrowRightIcon className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/java-course/compiler"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-transparent border-2 border-white/30 text-white font-semibold rounded-xl hover:border-java-orange hover:bg-java-orange hover:-translate-y-0.5 transition-all duration-200"
                >
                  <PlayIcon className="w-5 h-5" />
                  Try Compiler
                </Link>
              </div>

              {/* Mini stats strip */}
              <div className="flex flex-wrap gap-8 mt-10 pt-8 border-t border-white/10">
                {[
                  { value: '8+',    label: 'Topics' },
                  { value: '60+',   label: 'Subtopics' },
                  { value: '200+',  label: 'Examples' },
                  { value: '10K+',  label: 'Students' },
                ].map(s => (
                  <div key={s.label} className="text-center">
                    <p className="text-2xl font-bold font-poppins text-white">{s.value}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Animated code card */}
            <div className="relative">
              <div className="relative bg-gray-900/80 backdrop-blur-xl rounded-2xl border border-java-blue/20 shadow-2xl shadow-java-blue/20 overflow-hidden">

                {/* Terminal title bar */}
                <div className="flex items-center gap-2 px-4 py-3 bg-gray-800/80 border-b border-white/5">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <span className="text-gray-400 text-sm font-mono ml-2">HelloWorld.java</span>
                  <div className="ml-auto flex items-center gap-1.5 text-xs text-java-orange">
                    <span className="w-2 h-2 bg-java-orange rounded-full animate-pulse" />
                    Running…
                  </div>
                </div>

                {/* Code lines */}
                <div className="p-6 font-mono text-sm min-h-[200px]">
                  {codeLines.slice(0, typedIndex).map((line, i) => (
                    <div key={i} className={`leading-7 ${line.color}`}>
                      {line.text}
                    </div>
                  ))}
                  {typedIndex < codeLines.length && (
                    <span
                      className={`inline-block w-[9px] h-5 rounded-sm align-middle transition-opacity duration-100 ${
                        showCursor ? 'bg-java-orange opacity-100' : 'opacity-0'
                      }`}
                    />
                  )}
                </div>

                {/* Output pane */}
                {typedIndex >= codeLines.length && (
                  <div className="px-6 pb-5 border-t border-white/5">
                    <div className="flex items-center gap-3 text-xs text-gray-500 mb-2 mt-3">
                      <span className="uppercase tracking-wider">Output</span>
                      <span className="text-green-400 flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-green-400 inline-block" />
                        Success
                      </span>
                    </div>
                    <p className="text-green-400 font-mono text-sm">Hello, World!</p>
                  </div>
                )}
              </div>

              {/* Card glow */}
              <div className="absolute -inset-4 bg-java-blue/5 rounded-3xl blur-2xl -z-10 pointer-events-none" />

              {/* Decorative badge */}
              <div className="absolute -bottom-4 -left-4 bg-gradient-to-br from-java-orange to-amber-400 text-white text-xs font-bold px-4 py-2 rounded-xl shadow-lg shadow-java-orange/30 hidden sm:block">
                ☕ Java Powered
              </div>
            </div>

          </div>
        </div>

        {/* Wave bottom divider */}
        <div className="absolute bottom-0 left-0 right-0 leading-none pointer-events-none">
          <svg viewBox="0 0 1440 72" xmlns="http://www.w3.org/2000/svg" className="w-full block">
            <path
              d="M0 72L60 66.7C120 61.3 240 50.7 360 45.3C480 40 600 40 720 45.3C840 50.7 960 61.3 1080 64C1200 66.7 1320 61.3 1380 58.7L1440 56V72H1380C1320 72 1200 72 1080 72C960 72 840 72 720 72C600 72 480 72 360 72C240 72 120 72 60 72H0Z"
              className="fill-gray-50 dark:fill-[#0f172a]"
            />
          </svg>
        </div>
      </section>


      {/* ════════════════════════════════════════
          STATS SECTION
      ════════════════════════════════════════ */}
      <section className="py-16 bg-gray-50 dark:bg-[#0f172a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {statCards.map((stat, i) => (
              <div
                key={i}
                className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${stat.color} p-[2px] transition-transform duration-300 hover:-translate-y-1`}
              >
                <div className="bg-white dark:bg-[#1e293b] rounded-[14px] p-6 text-center h-full">
                  <div className="text-3xl mb-3">{stat.icon}</div>
                  <div className="text-3xl font-bold font-poppins text-gray-900 dark:text-white mb-1">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ════════════════════════════════════════
          FEATURES SECTION
      ════════════════════════════════════════ */}
      <section className="py-20 bg-white dark:bg-[#1e293b]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Heading */}
          <div className="text-center mb-16">
            <span className="inline-block text-java-orange font-semibold text-sm uppercase tracking-widest mb-3">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-poppins text-gray-900 dark:text-white mb-4">
              Why Learn Java{' '}
              <span className="bg-gradient-to-r from-java-blue to-java-orange bg-clip-text text-transparent">
                With Us?
              </span>
            </h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
              Everything you need to become a Java expert, all in one place.
            </p>
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featureCards.map((f, i) => (
              <div
                key={i}
                className="group relative rounded-2xl border border-gray-100 dark:border-slate-700 bg-gray-50 dark:bg-[#0f172a] p-6 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-java-blue/10 hover:border-java-blue/30"
              >
                {/* Hover gradient wash */}
                <div className={`absolute inset-0 bg-gradient-to-br ${f.gradient} opacity-0 group-hover:opacity-[0.06] transition-opacity duration-500 pointer-events-none`} />

                <div className="text-4xl mb-4">{f.icon}</div>
                <h3 className="font-poppins font-semibold text-gray-900 dark:text-white text-lg mb-2 group-hover:text-java-blue dark:group-hover:text-java-orange transition-colors">
                  {f.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                  {f.desc}
                </p>
                {/* Animated underline */}
                <div className="mt-5 h-0.5 w-8 bg-java-blue group-hover:w-full transition-all duration-500 rounded-full" />
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ════════════════════════════════════════
          TOPICS PREVIEW SECTION
      ════════════════════════════════════════ */}
      <section className="py-20 bg-gray-50 dark:bg-[#0f172a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Heading */}
          <div className="text-center mb-16">
            <span className="inline-block text-java-orange font-semibold text-sm uppercase tracking-widest mb-3">
              Curriculum
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-poppins text-gray-900 dark:text-white mb-4">
              What You'll{' '}
              <span className="bg-gradient-to-r from-java-blue to-java-orange bg-clip-text text-transparent">
                Learn
              </span>
            </h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
              A structured, comprehensive curriculum designed to take you from zero to Java hero.
            </p>
          </div>

          {/* Topic cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {topicsData.slice(0, 8).map((topic) => (
              <Link
                key={topic.id}
                to="/java-course/topics"
                className="group relative rounded-2xl overflow-hidden border border-gray-200 dark:border-slate-700 bg-white dark:bg-[#1e293b] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-java-blue/10 hover:border-java-blue/30"
              >
                {/* Color stripe */}
                <div className={`h-[3px] bg-gradient-to-r ${topic.color || 'from-java-blue to-java-lightblue'}`} />

                <div className="p-5">
                  <div className="flex items-center justify-between mb-3">
                    <span className="w-7 h-7 rounded-full bg-java-blue text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                      {topic.number || (topicsData.indexOf(topic) + 1)}
                    </span>
                    <span className="text-xs text-gray-400 dark:text-gray-500">
                      {topic.subtopics?.length ?? 0} subtopics
                    </span>
                  </div>

                  <h3 className="font-poppins font-semibold text-gray-900 dark:text-white text-sm leading-snug mb-2 group-hover:text-java-blue dark:group-hover:text-java-orange transition-colors">
                    {topic.title}
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-3">
                    {topic.description}
                  </p>

                  <div className="mt-4 flex items-center text-java-blue dark:text-java-orange text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    Explore
                    <ArrowRightIcon className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* View all button */}
          <div className="text-center mt-12">
            <Link
              to="/java-course/topics"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-java-blue to-java-lightblue text-white font-semibold rounded-xl hover:opacity-90 hover:-translate-y-0.5 transition-all duration-200 shadow-lg shadow-java-blue/30"
            >
              View All Topics
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>


      {/* ════════════════════════════════════════
          CTA BANNER
      ════════════════════════════════════════ */}
      <section className="relative py-24 overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-r from-java-blue via-java-lightblue to-java-blue bg-[length:200%_100%] animate-[gradientShift_4s_linear_infinite]" />

        {/* Dot pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />

        {/* Glow orbs */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-72 h-72 bg-white/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-72 h-72 bg-java-orange/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white/80 text-sm font-medium mb-6">
            🎯 Start your journey today
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-poppins text-white mb-6 leading-tight">
            Ready to Start Your <br />
            <span className="text-java-orange drop-shadow-md">Java Journey?</span>
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
            Join thousands of developers learning Java the right way. Start with our comprehensive topics today — free, structured, and practical.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/java-course/topics"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-java-blue font-bold text-base rounded-xl hover:bg-java-orange hover:text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl shadow-lg"
            >
              Get Started Now
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
            <Link
              to="/java-course/compiler"
              className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white font-bold text-base rounded-xl hover:bg-white hover:text-java-blue transition-all duration-300 hover:-translate-y-1"
            >
              <CodeBracketIcon className="w-5 h-5" />
              Try Compiler
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
