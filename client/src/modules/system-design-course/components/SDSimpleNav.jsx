import React from 'react';
import { useNavigate } from 'react-router-dom';

const SDSimpleNav = () => {
  const navigate = useNavigate();

  return (
    <nav className="sd-neumorphic p-4 rounded-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => navigate('/')}
              className="sd-neumorphic-btn px-4 py-2 rounded-lg text-sm hover:scale-105 transition-transform"
            >
              <span className="text-gray-900 dark:text-white">Home</span>
            </button>
          </div>
          
          <div className="flex items-center space-x-2">
            <button
              onClick={() => navigate('/level1/system-design-intro')}
              className="sd-neumorphic-btn px-4 py-2 rounded-lg text-sm hover:scale-105 transition-transform"
            >
              <span className="text-gray-900 dark:text-white">Level 1</span>
            </button>
            <button
              onClick={() => navigate('/level2/load-balancer')}
              className="sd-neumorphic-btn px-4 py-2 rounded-lg text-sm hover:scale-105 transition-transform"
            >
              <span className="text-gray-900 dark:text-white">Level 2</span>
            </button>
            <button
              onClick={() => navigate('/level3/microservices')}
              className="sd-neumorphic-btn px-4 py-2 rounded-lg text-sm hover:scale-105 transition-transform"
            >
              <span className="text-gray-900 dark:text-white">Level 3</span>
            </button>
            <button
              onClick={() => navigate('/level4/whatsapp')}
              className="sd-neumorphic-btn px-4 py-2 rounded-lg text-sm hover:scale-105 transition-transform"
            >
              <span className="text-gray-900 dark:text-white">Level 4</span>
            </button>
          </div>
          
          <div className="flex items-center space-x-4">
            <button
              onClick={() => navigate('/level1/scaling')}
              className="sd-neumorphic-btn px-4 py-2 rounded-lg text-sm hover:scale-105 transition-transform"
            >
              <span className="text-gray-900 dark:text-white">Scaling</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default SDSimpleNav;
