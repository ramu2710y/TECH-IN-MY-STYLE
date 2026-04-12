import React, { useEffect, useState, useRef, useCallback } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WebGLBackground from '../components/WebGLBackground';
import './Leaderboard.css';
import AOS from 'aos';
import { Chart, registerables } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

Chart.register(...registerables, ChartDataLabels);

const Leaderboard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('rank');
  const [leaderboardData, setLeaderboardData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [userProgress, setUserProgress] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState('');
  const [courseTotals] = useState({
    ai: 30, ml: 30, dl: 30, java: 30, c: 30, html: 30,
    css: 30, js: 30, 'js-intermediate': 30, python: 30, dsc: 30
  });

  const barChartRef = useRef(null);
  const barChartInstance = useRef(null);
  const pieChartRef = useRef(null);
  const pieChartInstance = useRef(null);
  const coursePieRef = useRef(null);
  const coursePieInstance = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: false,
      mirror: true,
      offset: 20
    });

    // Custom cursor
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
        cursor.style.visibility = 'visible';
      });

      document.addEventListener('mouseout', (e) => {
        if (e.clientY <= 0 || e.clientX <= 0 || e.clientX >= window.innerWidth || e.clientY >= window.innerHeight) {
          cursor.style.opacity = '0';
        }
      });
    };

    initCustomCursor();

    // Load sample data
    loadSampleData();

    return () => {
      if (barChartInstance.current) barChartInstance.current.destroy();
      if (pieChartInstance.current) pieChartInstance.current.destroy();
      if (coursePieInstance.current) coursePieInstance.current.destroy();
      const cursor = document.querySelector('.custom-cursor');
      if (cursor) {
        cursor.remove();
      }
    };
  }, []);



  const loadSampleData = () => {
    const sampleData = [
      { user: 'John Doe', score: 95 },
      { user: 'Jane Smith', score: 92 },
      { user: 'Mike Johnson', score: 88 },
      { user: 'Sarah Williams', score: 85 },
      { user: 'David Brown', score: 82 },
      { user: 'Emily Davis', score: 79 },
      { user: 'Chris Wilson', score: 76 },
      { user: 'Lisa Anderson', score: 73 },
      { user: 'Tom Martinez', score: 70 },
      { user: 'Amy Taylor', score: 67 }
    ];
    setLeaderboardData(sampleData);
  };

  const getFilteredData = useCallback(() => {
    let filtered = leaderboardData.filter(user =>
      user.user.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (sortBy === 'user') {
      filtered.sort((a, b) => a.user.localeCompare(b.user));
    } else if (sortBy === 'score') {
      filtered.sort((a, b) => b.score - a.score);
    } else {
      filtered.sort((a, b) => b.score - a.score);
    }

    return filtered;
  }, [leaderboardData, searchTerm, sortBy]);

  const updateBarChart = useCallback(() => {
    if (!barChartRef.current) return;

    const filtered = getFilteredData();
    const labels = filtered.map(u => u.user);
    const scores = filtered.map(u => u.score);

    if (barChartInstance.current) {
      barChartInstance.current.destroy();
    }

    const ctx = barChartRef.current.getContext('2d');
    barChartInstance.current = new Chart(ctx, {
      type: 'bar',
      data: {
        labels,
        datasets: [{
          label: 'Total Tasks Completed',
          data: scores,
          backgroundColor: getComputedStyle(document.body).getPropertyValue('--primary') || '#2196F3',
          borderColor: getComputedStyle(document.body).getPropertyValue('--primary') || '#2196F3',
          borderWidth: 2,
          borderRadius: 8,
          borderSkipped: false,
        }],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          datalabels: {
            color: 'white',
            anchor: 'end',
            align: 'top',
            formatter: v => v,
            font: { weight: 'bold', size: 12 }
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              stepSize: 1,
              color: getComputedStyle(document.body).getPropertyValue('--text') || '#000'
            },
            grid: { color: 'rgba(255, 255, 255, 0.1)' }
          },
          x: {
            ticks: { color: getComputedStyle(document.body).getPropertyValue('--text') || '#000' },
            grid: { color: 'rgba(255, 255, 255, 0.1)' }
          }
        }
      }
    });
  }, [getFilteredData]);

  useEffect(() => {
    updateBarChart();
  }, [leaderboardData, searchTerm, sortBy, updateBarChart]);

  const getMedalIcon = (rank) => {
    if (rank === 1) return <span className="rank-medal gold">🥇</span>;
    if (rank === 2) return <span className="rank-medal silver">🥈</span>;
    if (rank === 3) return <span className="rank-medal bronze">🥉</span>;
    return <span className="rank-number">{rank}</span>;
  };

  const getInitials = (name) => {
    if (!name) return 'U';
    const parts = name.split(/[ ._]/).filter(Boolean);
    return parts.length === 1 ? parts[0][0].toUpperCase() : (parts[0][0] + parts[1][0]).toUpperCase();
  };

  const handleUserClick = (username) => {
    setSelectedUser(username);
    setShowModal(true);
    loadUserProgress(username);
  };

  const loadUserProgress = (username) => {
    // Sample progress data
    const sampleProgress = {
      html: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      css: [1, 2, 3, 4, 5, 6, 7, 8],
      js: [1, 2, 3, 4, 5, 6],
      python: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      java: [1, 2, 3, 4, 5]
    };
    setUserProgress(sampleProgress);
    setSelectedCourse(Object.keys(sampleProgress)[0]);

    setTimeout(() => {
      renderProgressChart(sampleProgress);
      renderCoursePieChart(Object.keys(sampleProgress)[0], sampleProgress);
    }, 100);
  };

  const renderProgressChart = (progress) => {
    if (!pieChartRef.current || !progress) return;

    if (pieChartInstance.current) {
      pieChartInstance.current.destroy();
    }

    const labels = Object.keys(progress);
    const data = labels.map(c => progress[c]?.length || 0);
    const bgColors = ['#3574e6', '#56b881', '#ef476f', '#ffd166', '#06d6a0', '#118ab2', '#b388eb', '#f78fb3'];

    const ctx = pieChartRef.current.getContext('2d');
    pieChartInstance.current = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: labels.map(l => l.toUpperCase()),
        datasets: [{
          data: data,
          backgroundColor: bgColors.slice(0, labels.length),
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: true, position: 'bottom' },
          datalabels: {
            color: '#fff',
            font: { weight: 'bold', size: 14 },
            formatter: (value, context) => {
              const total = context.dataset.data.reduce((a, b) => a + b, 0) || 1;
              return ((value / total) * 100).toFixed(0) + '%';
            }
          }
        }
      }
    });
  };

  const renderCoursePieChart = (course, progress) => {
    if (!coursePieRef.current || !course || !progress) return;

    if (coursePieInstance.current) {
      coursePieInstance.current.destroy();
    }

    const total = courseTotals[course] || 0;
    const completed = progress[course]?.length || 0;
    const remaining = Math.max(total - completed, 0);

    const ctx = coursePieRef.current.getContext('2d');
    coursePieInstance.current = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Completed', 'Remaining'],
        datasets: [{
          data: [completed, remaining],
          backgroundColor: ['#56b881', 'rgba(255,255,255,0.3)'],
          borderWidth: 2,
          borderColor: '#fff'
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: true,
            position: 'bottom',
            labels: {
              color: getComputedStyle(document.body).getPropertyValue('--text') || '#000',
              font: { size: 12 }
            }
          },
          datalabels: {
            color: '#fff',
            font: { weight: 'bold', size: 12 },
            formatter: (value) => value === 0 ? '' : value
          }
        }
      }
    });
  };

  const handleCourseChange = (e) => {
    const course = e.target.value;
    setSelectedCourse(course);
    if (userProgress) {
      renderCoursePieChart(course, userProgress);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedUser(null);
    setUserProgress(null);
    setSelectedCourse('');
    if (pieChartInstance.current) pieChartInstance.current.destroy();
    if (coursePieInstance.current) coursePieInstance.current.destroy();
  };

  const filteredData = getFilteredData();

  return (
    <div className="leaderboard-page">
      <WebGLBackground />
      <Header />

      <div className="main-content">
        <div className="leaderboard-container" data-aos="fade-up">
          <div className="leaderboard-header">
            <h1>🏆 Leaderboard</h1>
            <p>Click a username for full course progress details and track your learning journey.</p>
          </div>

          <div className="controls">
            <input
              type="text"
              placeholder="🔍 Search user..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
              <option value="rank">Sort by Rank</option>
              <option value="score">Sort by Score</option>
              <option value="user">Sort by Username</option>
            </select>
          </div>

          <div className="leaderboard-table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Rank</th>
                  <th>User</th>
                  <th>Total Tasks</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((user, index) => (
                  <tr key={index} className={index < 3 ? 'top-row' : ''}>
                    <td>{getMedalIcon(index + 1)}</td>
                    <td className="user-cell">
                      <div className="avatar">{getInitials(user.user)}</div>
                      <span className="user-link" onClick={() => handleUserClick(user.user)}>
                        {user.user}
                      </span>
                    </td>
                    <td>{user.score}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredData.length === 0 && (
            <div className="no-results">
              <p>No users found matching "{searchTerm}"</p>
            </div>
          )}

          <div className="chart-container">
            <canvas ref={barChartRef} height="90"></canvas>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="progress-modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="closeModalBtn" onClick={closeModal}>&times;</button>
            <div className="modal-user">Course Progress for {selectedUser}</div>
            <div className="modal-content-bottom">
              <div className="modal-table-wrap chart-card">
                {userProgress && (
                  <table className="progress-table">
                    <thead>
                      <tr>
                        <th>Course Name</th>
                        <th>Tasks Completed</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Object.keys(userProgress).map((course) => (
                        <tr key={course}>
                          <td>{course.toUpperCase()}</td>
                          <td>{userProgress[course].length}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
              <div className="modal-chart-wrap chart-card">
                <canvas ref={pieChartRef} width="360" height="300"></canvas>
              </div>
              <div className="modal-summary chart-card">
                <select value={selectedCourse} onChange={handleCourseChange}>
                  <option value="">Select a course</option>
                  {userProgress && Object.keys(userProgress).map((course) => (
                    <option key={course} value={course}>{course.toUpperCase()}</option>
                  ))}
                </select>
                {selectedCourse && userProgress && (
                  <table className="course-summary-table">
                    <thead>
                      <tr>
                        <th>Course</th>
                        <th>Completed</th>
                        <th>Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{selectedCourse.toUpperCase()}</td>
                        <td>{userProgress[selectedCourse]?.length || 0}</td>
                        <td>{courseTotals[selectedCourse] || 0}</td>
                      </tr>
                    </tbody>
                  </table>
                )}
                <canvas ref={coursePieRef} width="280" height="250"></canvas>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Leaderboard;
