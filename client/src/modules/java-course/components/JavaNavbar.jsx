import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SunIcon, MoonIcon, Bars3Icon, XMarkIcon, CodeBracketIcon } from '@heroicons/react/24/outline';
import { useTheme } from "../context/ThemeContext";

const navLinks = [
  { name: 'Home', path: '/java-course' },
  { name: 'Topics', path: '/java-course/topics' },
  { name: 'About', path: '/java-course/about' },
  { name: 'Compiler', path: '/java-course/compiler' },
  { name: 'Docker', path: '/java-course/docker' },
  { name: "Let's Connect", path: '/java-course/connect' },
];

export default function JavaNavbar() {
  const { isDark, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-white/90 dark:bg-java-darker/90 backdrop-blur-xl shadow-lg shadow-java-blue/10 border-b border-gray-200/50 dark:border-java-border-dark/50'
        : 'bg-white dark:bg-java-darker border-b border-gray-100 dark:border-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link to="/java-course" className="flex items-center gap-3 group">
            <div className="relative">
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg"
                alt="Java Logo"
                className="h-10 w-10 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12"
              />
              <div className="absolute inset-0 bg-java-orange/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="hidden sm:block">
              <span className="font-poppins font-bold text-lg text-java-blue dark:text-white leading-none">
                Java In <span className="text-java-orange">My Style</span>
              </span>
              <p className="text-xs text-gray-500 dark:text-gray-400 font-roboto">by Tech In My Style</p>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium font-poppins transition-all duration-200 ${
                  location.pathname === link.path
                    ? 'bg-java-blue/10 text-java-blue dark:bg-java-orange/10 dark:text-java-orange'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/5 hover:text-java-blue dark:hover:text-java-orange'
                }`}
              >
                {link.path === '/java-course/compiler' && (
                  <CodeBracketIcon className="inline w-4 h-4 mr-1 -mt-0.5" />
                )}
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Controls */}
          <div className="flex items-center gap-2">

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="relative w-14 h-7 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-java-blue/50"
              style={{
                background: isDark
                  ? 'linear-gradient(135deg, #1a1a2e, #0074BD)'
                  : 'linear-gradient(135deg, #F89820, #0074BD)',
              }}
              aria-label="Toggle theme"
            >
              <span
                className={`absolute top-0.5 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 shadow-md ${
                  isDark ? 'left-7 bg-java-dark' : 'left-0.5 bg-white'
                }`}
              >
                {isDark
                  ? <MoonIcon className="w-3.5 h-3.5 text-java-orange" />
                  : <SunIcon className="w-3.5 h-3.5 text-java-orange" />
                }
              </span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/5 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen
                ? <XMarkIcon className="w-6 h-6" />
                : <Bars3Icon className="w-6 h-6" />
              }
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        } bg-white dark:bg-java-darker border-t border-gray-100 dark:border-java-border-dark`}
      >
        <div className="px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium font-poppins transition-all duration-200 ${
                location.pathname === link.path
                  ? 'bg-java-blue/10 text-java-blue dark:bg-java-orange/10 dark:text-java-orange font-semibold'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-white/5'
              }`}
            >
              {link.path === '/java-course/compiler' && (
                <CodeBracketIcon className="w-4 h-4" />
              )}
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
