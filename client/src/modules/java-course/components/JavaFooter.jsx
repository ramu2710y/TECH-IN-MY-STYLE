import { Link } from 'react-router-dom';

const quickLinks = [
  { name: 'Home', path: '/java-course' },
  { name: 'Topics', path: '/java-course/topics' },
  { name: 'About', path: '/java-course/about' },
  { name: 'Compiler', path: '/java-course/compiler' },
  { name: 'Docker Guide', path: '/java-course/docker' },
  { name: "Let's Connect", path: '/java-course/connect' },
];

const courses = [
  'HTML IN MY STYLE',
  'CSS IN MY STYLE',
  'JAVASCRIPT IN MY STYLE',
  'JAVA IN MY STYLE',
  'PYTHON IN MY STYLE',
  'C IN MY STYLE',
  'MACHINE LEARNING IN MY STYLE',
  'DEEP LEARNING IN MY STYLE',
  'DATA SCIENCE IN MY STYLE',
  'AI IN MY STYLE',
];

const javaTopics = [
  'Introduction',
  'Java Basics',
  'OOP Concepts',
  'Multi-Threading',
  'Packages',
  'Exception Handling',
  'Strings & Enums',
  'Collections',
];

const socials = [
  {
    name: 'Telegram',
    icon: 'telegram',
    url: 'https://t.me/Tech_in_my_style_bot',
    color: 'hover:bg-blue-500',
  },
  {
    name: 'Instagram',
    icon: 'instagram',
    url: 'https://www.instagram.com/techinmystyle',
    color: 'hover:bg-pink-600',
  },
  {
    name: 'WhatsApp',
    icon: 'whatsapp',
    url: 'https://whatsapp.com/channel/0029VbAZrCD5fM5aOU10Av0d',
    color: 'hover:bg-green-500',
  },
  {
    name: 'YouTube',
    icon: 'youtube',
    url: 'https://www.youtube.com/@TECHINMYSTYLE',
    color: 'hover:bg-red-600',
  },
];

const SocialIcon = ({ type }) => {
  const icons = {
    telegram: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
      </svg>
    ),
    instagram: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
    whatsapp: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
    youtube: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  };
  return icons[type] || null;
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-java-darker text-gray-300">
      {/* Gradient top border */}
      <div className="h-1 bg-gradient-to-r from-java-blue via-java-lightblue to-java-orange" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* ── Brand Column ── */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg"
                alt="Java Logo"
                className="h-12 w-12"
              />
              <div>
                <p className="font-poppins font-bold text-white text-lg leading-none">
                  Java In{' '}
                  <span className="text-java-orange">My Style</span>
                </p>
                <p className="text-xs text-gray-400 mt-0.5">by Tech In My Style</p>
              </div>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Master Java programming from basics to advanced with real-world
              examples, interactive compiler, and interview prep.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className={`w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center
                    text-gray-400 hover:text-white transition-all duration-300
                    hover:-translate-y-1 hover:shadow-lg hover:border-transparent ${s.color}`}
                >
                  <SocialIcon type={s.icon} />
                </a>
              ))}
            </div>
          </div>

          {/* ── Quick Links ── */}
          <div>
            <h3 className="font-poppins font-semibold text-white text-base mb-1">
              Quick Links
            </h3>
            <span className="block w-8 h-0.5 bg-java-orange mb-5" />
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-java-orange transition-all duration-200
                      text-sm flex items-center gap-2 group"
                  >
                    <span
                      className="w-1 h-1 rounded-full bg-java-blue
                        group-hover:w-2 transition-all duration-200 shrink-0"
                    />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Popular Courses ── */}
          <div>
            <h3 className="font-poppins font-semibold text-white text-base mb-1">
              Popular Courses
            </h3>
            <span className="block w-8 h-0.5 bg-java-orange mb-5" />
            <ul className="space-y-2">
              {courses.map((c) => (
                <li key={c}>
                  <span
                    className="text-gray-400 text-xs flex items-center gap-2
                      hover:text-java-orange transition-colors cursor-default"
                  >
                    <span className="w-1 h-1 rounded-full bg-java-orange/50 shrink-0" />
                    {c}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Java Topics ── */}
          <div>
            <h3 className="font-poppins font-semibold text-white text-base mb-1">
              Java Topics
            </h3>
            <span className="block w-8 h-0.5 bg-java-orange mb-5" />
            <ul className="space-y-2.5">
              {javaTopics.map((t) => (
                <li key={t}>
                  <Link
                    to="/java-course/topics"
                    className="text-gray-400 hover:text-java-orange transition-all duration-200
                      text-sm flex items-center gap-2 group"
                  >
                    <span
                      className="w-1 h-1 rounded-full bg-java-blue
                        group-hover:w-2 transition-all duration-200 shrink-0"
                    />
                    {t}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div className="border-t border-white/5">
        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6
            flex flex-col sm:flex-row justify-between items-center gap-4"
        >
          <p className="text-gray-500 text-sm text-center sm:text-left">
            &copy; 2025{' '}
            <span className="text-java-blue font-medium">Java In My Style</span>.
            {' '}All Rights Reserved.
          </p>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span>Built with</span>
            <span className="text-red-400">&#10084;</span>
            <span>using React + Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
