import React from 'react';
import { motion } from 'framer-motion';
import { Network, Layers, Zap, BookOpen, Target, Search, BarChart3, Globe, Server } from 'lucide-react';
import SDCard from '../components/SDCard';
import { useNavigate } from 'react-router-dom';

export default function SystemDesignHome() {
  const navigate = useNavigate();

  const levels = [
    {
      id: 'level1',
      title: 'Level 1: Basics',
      description: 'Fundamental concepts of system design',
      icon: <BookOpen className="h-8 w-8" />,
      color: 'from-blue-500 to-indigo-600',
      topics: [
        { name: 'System Design Introduction', path: '/system-design-course/level1/system-design-intro' },
        { name: 'Client-Server Architecture', path: '/system-design-course/level1/client-server' },
        { name: 'Latency vs Throughput', path: '/system-design-course/level1/latency-vs-throughput' },
        { name: 'CAP Theorem', path: '/system-design-course/level1/cap-theorem' },
        { name: 'Scaling Strategies', path: '/system-design-course/level1/scaling' }
      ]
    },
    {
      id: 'level2',
      title: 'Level 2: Core',
      description: 'Essential components and patterns',
      icon: <Zap className="h-8 w-8" />,
      color: 'from-green-500 to-teal-600',
      topics: [
        { name: 'Load Balancer', path: '/system-design-course/level2/load-balancer' },
        { name: 'Databases', path: '/system-design-course/level2/databases' },
        { name: 'Caching', path: '/system-design-course/level2/caching' },
        { name: 'Content Delivery Network', path: '/system-design-course/level2/cdn' },
        { name: 'Message Queue', path: '/system-design-course/level2/message-queue' }
      ]
    },
    {
      id: 'level3',
      title: 'Level 3: Advanced',
      description: 'Complex architectural patterns',
      icon: <Globe className="h-8 w-8" />,
      color: 'from-purple-500 to-pink-600',
      topics: [
        { name: 'Microservices', path: '/system-design-course/level3/microservices' },
        { name: 'API Gateway', path: '/system-design-course/level3/api-gateway' },
        { name: 'Rate Limiting', path: '/system-design-course/level3/rate-limiting' },
        { name: 'Database Sharding', path: '/system-design-course/level3/sharding' },
        { name: 'Consistent Hashing', path: '/system-design-course/level3/consistent-hashing' }
      ]
    },
    {
      id: 'level4',
      title: 'Level 4: System Design',
      description: 'Real-world system implementations',
      icon: <Server className="h-8 w-8" />,
      color: 'from-red-500 to-orange-600',
      topics: [
        { name: 'WhatsApp', path: '/system-design-course/level4/whatsapp' },
        { name: 'Instagram', path: '/system-design-course/level4/instagram' },
        { name: 'Netflix', path: '/system-design-course/level4/netflix' },
        { name: 'URL Shortener', path: '/system-design-course/level4/url-shortener' },
        { name: 'Uber', path: '/system-design-course/level4/uber' }
      ]
    }
  ];

  const handleTopicClick = (path) => {
    navigate(path);
  };

  return (
    <div className="p-6 space-y-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12 sd-neumorphic-card">
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
          System Design Learning Platform
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Master system design concepts from basics to real-world implementations
        </p>
      </div>

      
      {/* Levels Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {levels.map((level) => (
          <SDCard key={level.id} className="h-full">
            <div className={`bg-gradient-to-r ${level.color} text-white p-6 rounded-t-2xl`}>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold">{level.title}</h2>
                {level.icon}
              </div>
              <p className="text-sm opacity-90">{level.description}</p>
            </div>
            
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                Topics
              </h3>
              <div className="space-y-2">
                {level.topics.map((topic, index) => (
                  <button
                    key={index}
                    onClick={() => handleTopicClick(topic.path)}
                    className="w-full text-left p-4 sd-neumorphic-btn rounded-lg transition-all hover:scale-105 group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
                        {topic.name}
                      </span>
                      <Network className="h-4 w-4 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </SDCard>
        ))}
      </div>

    </div>
  );
}
