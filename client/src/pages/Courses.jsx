import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WebGLBackground from '../components/WebGLBackground';
import './Courses.css';
import AOS from 'aos';

const Courses = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });

    // Custom cursor implementation
    const initCustomCursor = () => {
      if (window.innerWidth <= 768) return;

      // Remove any existing custom cursor
      const existingCursor = document.querySelector('.custom-cursor');
      if (existingCursor) {
        existingCursor.remove();
      }

      const cursor = document.createElement('div');
      cursor.classList.add('custom-cursor');
      
      const cursorDot = document.createElement('div');
      cursorDot.classList.add('cursor-dot');
      
      cursor.appendChild(cursorDot);
      document.body.appendChild(cursor);
      
      document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        cursor.style.opacity = '1';
      });
      
      document.addEventListener('mouseout', (e) => {
        if (e.clientY <= 0 || e.clientX <= 0 || e.clientX >= window.innerWidth || e.clientY >= window.innerHeight) {
          cursor.style.opacity = '0';
        }
      });
    };

    initCustomCursor();

    // Cleanup function
    return () => {
      const cursor = document.querySelector('.custom-cursor');
      if (cursor) {
        cursor.remove();
      }
    };
  }, []);

  const categories = [
    {
      id: 'web',
      name: 'Web Development',
      icon: 'fas fa-code',
      description: 'Master HTML, CSS, and JavaScript'
    },
    {
      id: 'programming',
      name: 'Programming Languages',
      icon: 'fas fa-laptop-code',
      description: 'Learn Python, Java, and C'
    },
    {
      id: 'ai-ml',
      name: 'AI & Machine Learning',
      icon: 'fas fa-brain',
      description: 'Explore AI, ML, and Deep Learning'
    },
    {
      id: 'data',
      name: 'Data Science',
      icon: 'fas fa-chart-line',
      description: 'Master data analysis and visualization'
    }
  ];

  const allCourses = [
    {
      id: 1,
      name: 'HTML in My Style',
      category: 'web',
      icon: 'fab fa-html5',
      description: 'Master HTML fundamentals and web structure for robust web development.',
      level: 'Beginner',
      duration: '4 weeks',
      lessons: 25
    },
    {
      id: 2,
      name: 'CSS in My Style',
      category: 'web',
      icon: 'fab fa-css3-alt',
      description: 'Learn CSS styling, layouts, and responsive design to create visually appealing websites.',
      level: 'Beginner',
      duration: '5 weeks',
      lessons: 30
    },
    {
      id: 3,
      name: 'JavaScript in My Style - Basic',
      category: 'web',
      icon: 'fab fa-js',
      description: 'Understand JavaScript fundamentals and DOM manipulation for interactive web pages.',
      level: 'Beginner',
      duration: '6 weeks',
      lessons: 35
    },
    {
      id: 4,
      name: 'JavaScript in My Style - Intermediate',
      category: 'web',
      icon: 'fab fa-js',
      description: 'Advance your JavaScript skills with intermediate concepts and application development.',
      level: 'Intermediate',
      duration: '8 weeks',
      lessons: 40
    },
    {
      id: 5,
      name: 'JavaScript in My Style - Advanced',
      category: 'web',
      icon: 'fab fa-js',
      description: 'Master Enterprise-Level JavaScript concepts, patterns, and architecture.',
      level: 'Advanced',
      duration: '10 weeks',
      lessons: 54
    },
    {
      id: 12,
      name: 'C in My Style',
      category: 'programming',
      icon: 'fas fa-copyright',
      description: 'Master the fundamentals of C programming, a powerful language for system-level development.',
      level: 'Beginner',
      duration: '7 weeks',
      lessons: 38
    },
    {
      id: 6,
      name: 'Java in My Style',
      category: 'programming',
      icon: 'fab fa-java',
      description: 'Learn Java programming for robust applications, enterprise software, and Android development.',
      level: 'Beginner',
      duration: '10 weeks',
      lessons: 45
    },
    {
      id: 7,
      name: 'Python in My Style',
      category: 'programming',
      icon: 'fab fa-python',
      description: 'Explore Python for web development, data science, machine learning, and automation.',
      level: 'Beginner',
      duration: '8 weeks',
      lessons: 42
    },
    {
      id: 8,
      name: 'AI in My Style',
      category: 'ai-ml',
      icon: 'fas fa-robot',
      description: 'Dive into Artificial Intelligence concepts, algorithms, and applications.',
      level: 'Beginner',
      duration: '10 weeks',
      lessons: 48
    },
    {
      id: 9,
      name: 'ML in My Style',
      category: 'ai-ml',
      icon: 'fas fa-brain',
      description: 'Learn Machine Learning techniques, models, and practical implementations.',
      level: 'Beginner',
      duration: '12 weeks',
      lessons: 50
    },
    {
      id: 10,
      name: 'DL in My Style',
      category: 'ai-ml',
      icon: 'fas fa-network-wired',
      description: 'Master Deep Learning with neural networks, frameworks, and advanced AI applications.',
      level: 'Intermediate',
      duration: '14 weeks',
      lessons: 55
    },
    {
      id: 11,
      name: 'DSC in My Style',
      category: 'data',
      icon: 'fas fa-chart-bar',
      description: 'Gain expertise in Data Science concepts, analysis, and visualization techniques.',
      level: 'Beginner',
      duration: '10 weeks',
      lessons: 46
    },
    {
      id: 13,
      name: 'DSA in My Style',
      category: 'programming',
      icon: 'fas fa-sitemap',
      description: 'Master Data Structures and Algorithms with interactive visualizers, code examples in 3 languages, and interview prep.',
      level: 'Intermediate',
      duration: '12 weeks',
      lessons: 22
    },
    {
      id: 14,
      name: 'NLP in My Style',
      category: 'ai-ml',
      icon: 'fas fa-language',
      description: 'Master Natural Language Processing from tokenization to transformers with code examples, MCQs, and interview prep.',
      level: 'Intermediate',
      duration: '8 weeks',
      lessons: 11
    },
    {
      id: 15,
      name: 'OS in My Style',
      category: 'programming',
      icon: 'fas fa-microchip',
      description: 'Master Operating Systems — processes, memory, file systems, security, and more with interactive visualizations and code examples.',
      level: 'Intermediate',
      duration: '10 weeks',
      lessons: 10
    },
    {
      id: 16,
      name: 'System Design in My Style',
      category: 'programming',
      icon: 'fas fa-server',
      description: 'Master system design concepts from basics to real-world implementations with interactive diagrams and interview prep.',
      level: 'Intermediate',
      duration: '12 weeks',
      lessons: 20
    },
    {
      id: 17,
      name: 'Database in My Style',
      category: 'data',
      icon: 'fas fa-database',
      description: 'Master SQL and MongoDB with live query execution, visualizers, and 50+ interview questions in a gaming-grade environment.',
      level: 'Beginner',
      duration: '8 weeks',
      lessons: 30
    },
    {
      id: 18,
      name: 'Gen AI in My Style',
      category: 'ai-ml',
      icon: 'fas fa-wand-magic-sparkles',
      description: 'Master Generative AI from foundations to production — LLMs, RAG, agents, embeddings, and real-world applications.',
      level: 'Intermediate',
      duration: '10 weeks',
      lessons: 25
    },
    {
      id: 19,
      name: 'Full Stack Python in My Style',
      category: 'programming',
      icon: 'fab fa-python',
      description: 'Master Python from fundamentals to deployment. Build REST APIs, work with databases, and ship production-ready backend applications.',
      level: 'Intermediate',
      duration: '12 weeks',
      lessons: 25
    },
    {
      id: 20,
      name: 'Full Stack Java in My Style',
      category: 'programming',
      icon: 'fab fa-java',
      description: 'Build scalable backend systems with Java and Spring Boot. Master microservices, security, and deployment for enterprise applications.',
      level: 'Intermediate',
      duration: '14 weeks',
      lessons: 30
    }
  ];

  const filteredCourses = selectedCategory === 'all' 
    ? allCourses 
    : allCourses.filter(course => course.category === selectedCategory);

  const handleCourseClick = (course) => {
    if (course.name === 'HTML in My Style') {
      navigate('/html-course');
    } else if (course.name === 'CSS in My Style') {
      navigate('/css-course');
    } else if (course.name === 'Python in My Style') {
      navigate('/python-course');
    } else if (course.name === 'JavaScript in My Style - Basic') {
      navigate('/js-basic-course');
    } else if (course.name === 'JavaScript in My Style - Intermediate') {
      navigate('/js-int-course');
    } else if (course.name === 'JavaScript in My Style - Advanced') {
      navigate('/js-adv-course');
    } else if (course.name === 'Java in My Style') {
      navigate('/java-course');
    } else if (course.name === 'C in My Style') {
      navigate('/c-course');
    } else if (course.name === 'AI in My Style') {
      navigate('/ai-course');
    } else if (course.name === 'DL in My Style') {
      navigate('/dl-course');
    } else if (course.name === 'ML in My Style') {
      navigate('/ml-course');
    } else if (course.name === 'DSC in My Style') {
      navigate('/dsc-course');
    } else if (course.name === 'DSA in My Style') {
      navigate('/dsa-course');
    } else if (course.name === 'NLP in My Style') {
      navigate('/nlp-course');
    } else if (course.name === 'OS in My Style') {
      navigate('/os-course');
    } else if (course.name === 'System Design in My Style') {
      navigate('/system-design-course');
    } else if (course.name === 'Database in My Style') {
      navigate('/database-course');
    } else if (course.name === 'Gen AI in My Style') {
      navigate('/genai-course');
    } else if (course.name === 'Full Stack Python in My Style') {
      navigate('/fullstack-python-course');
    } else if (course.name === 'Full Stack Java in My Style') {
      navigate('/fullstack-java-platform-course');
    } else {
      alert(`${course.name} is coming soon!`);
    }
  };

  return (
    <div className="courses-page">
      <WebGLBackground />
      <Header />
      
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content" data-aos="fade-up">
            <h1>Our <span className="color-change">Courses</span></h1>
            <p>Explore our comprehensive curriculum and start your learning journey today</p>
          </div>
        </div>
      </section>

      {/* Course Categories */}
      <section className="course-categories">
        <div className="container">
          <h2 data-aos="fade-up">Course Categories</h2>
          <div className="categories-grid">
            {categories.map((category, index) => (
              <div 
                className="category-card" 
                key={category.id}
                data-aos="fade-up" 
                data-aos-delay={index * 100}
                onClick={() => setSelectedCategory(category.id)}
              >
                <i className={category.icon}></i>
                <h3>{category.name}</h3>
                <p>{category.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Courses */}
      <section className="all-courses">
        <div className="container">
          <div className="courses-header">
            <h2 data-aos="fade-up">
              {selectedCategory === 'all' ? 'All Courses' : 'Filtered Courses'}
            </h2>
            {selectedCategory !== 'all' && (
              <button 
                className="btn secondary" 
                onClick={() => setSelectedCategory('all')}
              >
                Show All Courses
              </button>
            )}
          </div>
          <div className="courses-grid">
            {filteredCourses.map((course, index) => (
              <div 
                className={`course-card clickable`} 
                key={course.id}
                data-aos="fade-up" 
                data-aos-delay={index * 100}
                onClick={() => handleCourseClick(course)}
              >
                <div className="course-image">
                  <i className={course.icon}></i>
                </div>
                <div className="course-content">
                  <h3>{course.name}</h3>
                  <p>{course.description}</p>
                  <div className="course-meta">
                    <span className="course-level">{course.level}</span>
                    <span className="course-duration">
                      <i className="fas fa-clock"></i> {course.duration}
                    </span>
                    <span className="course-lessons">
                      <i className="fas fa-book"></i> {course.lessons} lessons
                    </span>
                  </div>
                  <button 
                    className="btn primary course-btn"
                    onClick={(e) => { e.stopPropagation(); handleCourseClick(course); }}
                  >
                    Visit Course
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Path */}
      <section className="learning-path">
        <div className="container">
          <h2 data-aos="fade-up">🚦 Realistic Roadmaps for Aspiring Full-Stack Developers</h2>
          <div className="modern-paths-grid">
            {/* Python Full-Stack Path */}
            <div className="modern-path-card" data-aos="fade-up" data-aos-delay="50">
              <div className="modern-path-header" style={{background: 'linear-gradient(90deg, #3776AB, #4e73df)'}}>
                <i className="fab fa-python"></i>
                <span>Full-Stack Python for Web Development</span>
              </div>
              <ul className="modern-path-steps">
                <li>
                  <span className="step-dot"></span>
                  HTML & CSS Fundamentals
                  <span className="step-desc">Build the foundation of web structure and design</span>
                </li>
                <li>
                  <span className="step-dot"></span>
                  JavaScript Essentials
                  <span className="step-desc">Add interactivity to your web pages</span>
                </li>
                <li>
                  <span className="step-dot"></span>
                  Python Programming Basics
                  <span className="step-desc">Master Python syntax and core concepts</span>
                </li>
                <li>
                  <span className="step-dot"></span>
                  Version Control with Git & GitHub
                  <span className="step-desc">Collaborate and manage your codebase</span>
                </li>
                <li>
                  <span className="step-dot"></span>
                  Backend with Flask
                  <span className="step-desc">Create REST APIs and dynamic web apps</span>
                </li>
                <li>
                  <span className="step-dot"></span>
                  Databases (SQL & ORM)
                  <span className="step-desc">Work with SQLite/PostgreSQL and SQLAlchemy</span>
                </li>
                <li>
                  <span className="step-dot"></span>
                  Frontend with React.js
                  <span className="step-desc">Build modern, component-based UIs</span>
                </li>
                <li>
                  <span className="step-dot"></span>
                  User Authentication & Security
                  <span className="step-desc">Implement login, registration, and secure your app</span>
                </li>
                <li>
                  <span className="step-dot"></span>
                  Deployment
                  <span className="step-desc">Host your app on Heroku, Vercel, or AWS</span>
                </li>
                <li>
                  <span className="step-dot"></span>
                  Capstone Project
                  <span className="step-desc">Build and deploy a full-stack Python web application</span>
                </li>
              </ul>
              <div className="modern-path-note">
                This roadmap is a suggested learning journey for aspiring full-stack Python web developers.
              </div>
            </div>

            {/* Java Full-Stack Path */}
            <div className="modern-path-card" data-aos="fade-up" data-aos-delay="100">
              <div className="modern-path-header" style={{background: 'linear-gradient(90deg, var(--primary), var(--secondary))'}}>
                <i className="fab fa-java"></i>
                <span>Full-Stack Java for Web Development</span>
              </div>
              <ul className="modern-path-steps">
                <li>
                  <span className="step-dot"></span>
                  HTML & CSS Fundamentals
                  <span className="step-desc">Structure and style your web pages</span>
                </li>
                <li>
                  <span className="step-dot"></span>
                  JavaScript Essentials
                  <span className="step-desc">Add dynamic features to your sites</span>
                </li>
                <li>
                  <span className="step-dot"></span>
                  Java Programming Basics
                  <span className="step-desc">Understand OOP and Java syntax</span>
                </li>
                <li>
                  <span className="step-dot"></span>
                  Version Control with Git & GitHub
                  <span className="step-desc">Track and collaborate on code</span>
                </li>
                <li>
                  <span className="step-dot"></span>
                  Backend with Spring Boot
                  <span className="step-desc">Develop robust RESTful APIs</span>
                </li>
                <li>
                  <span className="step-dot"></span>
                  Databases (MySQL & JPA/Hibernate)
                  <span className="step-desc">Integrate and manage data</span>
                </li>
                <li>
                  <span className="step-dot"></span>
                  Frontend with Angular or React.js
                  <span className="step-desc">Build scalable, interactive UIs</span>
                </li>
                <li>
                  <span className="step-dot"></span>
                  User Authentication & Security
                  <span className="step-desc">Secure your Java web apps</span>
                </li>
                <li>
                  <span className="step-dot"></span>
                  Deployment
                  <span className="step-desc">Deploy on AWS, Azure, or DigitalOcean</span>
                </li>
                <li>
                  <span className="step-dot"></span>
                  Capstone Project
                  <span className="step-desc">Deliver a production-ready full-stack Java application</span>
                </li>
              </ul>
              <div className="modern-path-note">
                This roadmap is a suggested learning journey for aspiring full-stack Java web developers.
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Courses;
