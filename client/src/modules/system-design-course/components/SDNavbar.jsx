import React from 'react';
import { Moon, Sun, BookOpen, Target, Search, BarChart3, User } from 'lucide-react';
import { useDarkMode } from '../contexts/SDDarkModeContext';
import { useNavigate, useLocation } from 'react-router-dom';

const SDNavbar = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  const navItems = [
    { path: '/', label: 'Home', icon: BookOpen },
    { path: '/progress', label: 'Progress', icon: Target },
    { path: '/search', label: 'Search', icon: Search },
    { path: '/dashboard', label: 'Dashboard', icon: BarChart3 }
  ];

  return (
    <nav className="sd-neumorphic mx-4 my-4 rounded-2xl transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center space-x-6">
            <div className="flex items-center">
              <BookOpen 
                className="h-8 w-8 text-blue-600 dark:text-blue-400 mr-3 cursor-pointer hover:scale-110 transition-transform" 
                onClick={() => navigate('/')}
              />
              <h1 
                className="text-xl font-bold text-gray-900 dark:text-white cursor-pointer hover:text-blue-600 dark:hover:text-blue-400 transition-colors" 
                onClick={() => navigate('/')}
              >
                System Design Platform
              </h1>
            </div>
            
            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.path}
                  onClick={() => navigate(item.path)}
                  className={`sd-neumorphic-btn px-3 py-2 rounded-lg text-sm transition-all ${
                    isActive(item.path) ? 'ring-2 ring-blue-500' : ''
                  }`}
                >
                  <item.icon className="h-4 w-4" />
                  <span className="ml-2">{item.label}</span>
                </button>
              ))}
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className="sd-neumorphic-btn p-2 rounded-xl hover:scale-105 transition-transform"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <Sun className="h-5 w-5 text-yellow-500" />
              ) : (
                <Moon className="h-5 w-5 text-gray-700" />
              )}
            </button>
            
            {/* User Profile */}
            <button
              onClick={() => navigate('/dashboard')}
              className="sd-neumorphic-btn p-2 rounded-xl hover:scale-105 transition-transform"
              aria-label="User dashboard"
            >
              <User className="h-5 w-5 text-gray-600 dark:text-gray-400" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default SDNavbar;
