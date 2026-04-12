import { Link } from 'react-router-dom';
import { CheckCircleIcon, ArrowRightIcon, AcademicCapIcon, CodeBracketIcon, TrophyIcon, LightBulbIcon } from '@heroicons/react/24/outline';

const differentiators = [
  {
    icon: <AcademicCapIcon className="w-7 h-7" />,
    title: 'Comprehensive Coverage',
    desc: 'From basic Java syntax to advanced concepts like multi-threading, generics, and the collections framework.',
    color: 'text-java-blue bg-blue-50 dark:bg-blue-900/20',
  },
  {
    icon: <CodeBracketIcon className="w-7 h-7" />,
    title: 'Practical Examples',
    desc: 'Real-world code examples that demonstrate how Java is used in production environments.',
    color: 'text-java-orange bg-orange-50 dark:bg-orange-900/20',
  },
  {
    icon: <TrophyIcon className="w-7 h-7" />,
    title: 'Interview Preparation',
    desc: 'MCQs and common Java interview questions curated to help you land your dream job.',
    color: 'text-purple-600 bg-purple-50 dark:bg-purple-900/20',
  },
  {
    icon: <LightBulbIcon className="w-7 h-7" />,
    title: 'Thinking Process',
    desc: 'We explain not just what to code, but why and how to think about programming problems.',
    color: 'text-green-600 bg-green-50 dark:bg-green-900/20',
  },
];

const techStack = [
  { name: 'Java', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg' },
  { name: 'React', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg' },
  { name: 'Vite', logo: 'https://vitejs.dev/logo.svg' },
  { name: 'Tailwind', logo: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg' },
  { name: 'Docker', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg' },
  { name: 'Git', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg' },
];

const milestones = [
  { year: '2023', title: 'Platform Launched', desc: 'Java In My Style went live with core Java topics.' },
  { year: '2024', title: 'Compiler Added', desc: 'Integrated the online Java IDE for hands-on learning.' },
  { year: '2024', title: '10K+ Students', desc: 'Reached over 10,000 active learners worldwide.' },
  { year: '2025', title: 'React Rebuild', desc: 'Complete UI overhaul with React, Vite & Tailwind CSS.' },
];

export default function About() {
  return (
    <div className="overflow-x-hidden">
      {/* ====== PAGE HEADER ====== */}
      <section className="relative py-24 bg-gradient-to-br from-java-dark via-[#0a1628] to-java-darker overflow-hidden">
        {/* Grid background */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              'linear-gradient(#0074BD 1px, transparent 1px), linear-gradient(90deg, #0074BD 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        ></div>
        {/* Glow blobs */}
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-java-orange/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-java-blue/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-java-blue/10 border border-java-blue/20 text-java-orange text-sm font-medium mb-6">
            🎯 Our Story
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold font-poppins text-white mb-6 leading-tight">
            About{' '}
            <span className="bg-gradient-to-r from-java-blue to-java-orange bg-clip-text text-transparent">
              Java In My Style
            </span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Learn more about our mission to make Java programming accessible, engaging, and effective for everyone.
          </p>
          {/* Breadcrumb */}
          <div className="flex items-center justify-center gap-2 mt-8 text-sm text-gray-400">
            <Link to="/java-course" className="hover:text-java-orange transition-colors duration-200">
              Home
            </Link>
            <span>/</span>
            <span className="text-java-orange">About</span>
          </div>
        </div>
      </section>

      {/* ====== MISSION SECTION ====== */}
      <section className="py-20 bg-gray-50 dark:bg-java-darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <div>
              <span className="inline-block text-java-orange font-semibold text-sm uppercase tracking-widest mb-3">
                Our Mission
              </span>
              <h2 className="text-3xl md:text-4xl font-bold font-poppins text-gray-900 dark:text-white mb-6 leading-tight">
                Making Java Learning{' '}
                <span className="java-gradient-text">Accessible for All</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                Java Programming in My Style was created with a simple mission: to make learning Java programming
                accessible, engaging, and effective for everyone. We believe that programming should be approachable
                and that anyone with determination can master Java.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                Our comprehensive curriculum is designed to take you from complete beginner to professional Java
                developer through structured, practical learning experiences.
              </p>
              <div className="space-y-3">
                {[
                  'Free access to all Java topics',
                  'Interactive online Java compiler',
                  'Real-world code examples',
                  'Interview preparation materials',
                  'Active community support',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircleIcon className="w-5 h-5 text-java-blue flex-shrink-0" />
                    <span className="text-gray-600 dark:text-gray-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <Link to="/java-course/topics" className="btn-primary mt-8 inline-flex">
                Start Learning <ArrowRightIcon className="w-5 h-5" />
              </Link>
            </div>

            {/* Image card */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-java-blue/20">
                <img
                  src="https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Java Programming"
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-java-dark/80 to-transparent"></div>
                {/* Stats overlay */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { val: '8+', label: 'Topics' },
                      { val: '60+', label: 'Subtopics' },
                      { val: '10K+', label: 'Students' },
                    ].map((s) => (
                      <div
                        key={s.label}
                        className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/20"
                      >
                        <p className="text-white font-bold text-xl font-poppins">{s.val}</p>
                        <p className="text-white/70 text-xs mt-0.5">{s.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* Java logo badge */}
              <div className="absolute -top-4 -right-4 bg-java-orange text-white rounded-2xl p-4 shadow-xl shadow-java-orange/30">
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg"
                  className="w-10 h-10"
                  alt="Java"
                />
              </div>
              {/* Decorative ring */}
              <div className="absolute -bottom-6 -left-6 w-48 h-48 rounded-full border-2 border-dashed border-java-blue/20 pointer-events-none"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== WHAT MAKES US DIFFERENT ====== */}
      <section className="py-20 bg-white dark:bg-java-card-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-java-orange font-semibold text-sm uppercase tracking-widest mb-3">
              Our Approach
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-poppins text-gray-900 dark:text-white mb-4">
              What Makes Us <span className="java-gradient-text">Different?</span>
            </h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
              We go beyond just teaching syntax — we build real programming intuition.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {differentiators.map((d, i) => (
              <div
                key={i}
                className="group flex gap-5 p-6 rounded-2xl border border-gray-100 dark:border-java-border-dark bg-gray-50 dark:bg-java-darker card-hover transition-all duration-300"
              >
                <div
                  className={`flex-shrink-0 w-14 h-14 rounded-2xl ${d.color} flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}
                >
                  {d.icon}
                </div>
                <div>
                  <h3 className="font-poppins font-semibold text-gray-900 dark:text-white text-lg mb-2 group-hover:text-java-blue dark:group-hover:text-java-orange transition-colors duration-200">
                    {d.title}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{d.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== MILESTONE TIMELINE ====== */}
      <section className="py-20 bg-gray-50 dark:bg-java-darker">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-java-orange font-semibold text-sm uppercase tracking-widest mb-3">
              Journey
            </span>
            <h2 className="text-3xl font-bold font-poppins text-gray-900 dark:text-white">
              Our <span className="java-gradient-text">Milestones</span>
            </h2>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-java-blue via-java-lightblue to-java-orange rounded-full"></div>

            <div className="space-y-10">
              {milestones.map((m, i) => (
                <div key={i} className="relative flex gap-8 items-start group">
                  {/* Year badge */}
                  <div className="relative flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-java-blue to-java-lightblue flex items-center justify-center text-white font-bold text-sm font-poppins shadow-lg shadow-java-blue/30 z-10 group-hover:scale-110 transition-transform duration-300">
                    {m.year}
                  </div>
                  {/* Content */}
                  <div className="pt-3 pb-6 flex-1 border-b border-gray-200 dark:border-java-border-dark last:border-0">
                    <h3 className="font-poppins font-semibold text-gray-900 dark:text-white text-lg mb-1 group-hover:text-java-blue dark:group-hover:text-java-orange transition-colors duration-200">
                      {m.title}
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ====== TECH STACK ====== */}
      <section className="py-20 bg-white dark:bg-java-card-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-java-orange font-semibold text-sm uppercase tracking-widest mb-3">
              Technology
            </span>
            <h2 className="text-3xl font-bold font-poppins text-gray-900 dark:text-white mb-4">
              Built With <span className="java-gradient-text">Modern Tech</span>
            </h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
              A carefully chosen stack for performance, developer experience, and scalability.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {techStack.map((t) => (
              <div
                key={t.name}
                className="group flex flex-col items-center gap-3 p-5 rounded-2xl border border-gray-100 dark:border-java-border-dark bg-gray-50 dark:bg-java-darker card-hover w-28 transition-all duration-300"
              >
                <img
                  src={t.logo}
                  alt={t.name}
                  className="w-12 h-12 group-hover:scale-110 transition-transform duration-300"
                />
                <span className="text-sm font-medium text-gray-600 dark:text-gray-300 font-poppins">{t.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== COMMUNITY SECTION ====== */}
      <section className="py-20 bg-gray-50 dark:bg-java-darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-java-orange font-semibold text-sm uppercase tracking-widest mb-3">
              Community
            </span>
            <h2 className="text-3xl font-bold font-poppins text-gray-900 dark:text-white mb-4">
              Join Our <span className="java-gradient-text">Community</span>
            </h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
              Connect with thousands of Java learners across our social platforms.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                platform: 'YouTube',
                emoji: '🎥',
                desc: 'Video tutorials & walkthroughs',
                color: 'from-red-500 to-red-600',
                bg: 'bg-red-50 dark:bg-red-900/10',
                border: 'border-red-100 dark:border-red-800/30',
              },
              {
                platform: 'Telegram',
                emoji: '✈️',
                desc: 'Daily tips & discussions',
                color: 'from-blue-400 to-blue-600',
                bg: 'bg-blue-50 dark:bg-blue-900/10',
                border: 'border-blue-100 dark:border-blue-800/30',
              },
              {
                platform: 'Instagram',
                emoji: '📸',
                desc: 'Quick code snippets & updates',
                color: 'from-pink-500 to-purple-600',
                bg: 'bg-pink-50 dark:bg-pink-900/10',
                border: 'border-pink-100 dark:border-pink-800/30',
              },
              {
                platform: 'WhatsApp',
                emoji: '💬',
                desc: 'Live Q&A and support group',
                color: 'from-green-500 to-green-600',
                bg: 'bg-green-50 dark:bg-green-900/10',
                border: 'border-green-100 dark:border-green-800/30',
              },
            ].map((c, i) => (
              <div
                key={i}
                className={`group relative rounded-2xl border ${c.border} ${c.bg} p-6 text-center card-hover overflow-hidden transition-all duration-300`}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${c.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                ></div>
                <div className="text-4xl mb-3">{c.emoji}</div>
                <h3 className="font-poppins font-semibold text-gray-900 dark:text-white text-base mb-1">
                  {c.platform}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed">{c.desc}</p>
                <div
                  className={`mt-4 h-0.5 w-8 mx-auto rounded-full bg-gradient-to-r ${c.color} group-hover:w-full transition-all duration-500`}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== CTA SECTION ====== */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-java-blue via-java-lightblue to-java-blue"></div>
        {/* Dot pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '30px 30px',
          }}
        ></div>
        {/* Glow orbs */}
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-java-orange/20 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-java-orange rounded-full animate-pulse"></span>
            Start Today — It's Free
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-white mb-4 leading-tight">
            Ready to Start Learning Java?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            Explore our comprehensive curriculum and master Java programming today.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/java-course/topics"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-java-blue font-bold rounded-xl hover:bg-java-orange hover:text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl shadow-lg font-poppins"
            >
              Explore Topics <ArrowRightIcon className="w-5 h-5" />
            </Link>
            <Link
              to="/java-course/compiler"
              className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-java-blue transition-all duration-300 hover:-translate-y-1 font-poppins"
            >
              <CodeBracketIcon className="w-5 h-5" /> Try the Compiler
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
