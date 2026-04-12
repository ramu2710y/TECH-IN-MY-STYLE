import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { allTopics } from '../data/topics';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const SECTIONS = [
  { id: 'overview', label: 'Overview', icon: 'fa-book' },
  { id: 'code', label: 'Code', icon: 'fa-code' },
  { id: 'applications', label: 'Applications', icon: 'fa-rocket' },
  { id: 'interview', label: 'Interview', icon: 'fa-comments' },
  { id: 'mcqs', label: 'MCQs', icon: 'fa-check-circle' },
  { id: 'resources', label: 'Resources', icon: 'fa-link' },
];

export default function FsPyTopicPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const topic = allTopics.find(t => t.id === id);
  const [activeSection, setActiveSection] = useState('overview');
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setActiveSection('overview');
    setSelectedAnswers({});
    setShowResults(false);
  }, [id]);

  if (!topic) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: 62 }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🔍</div>
          <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '0.5rem' }}>Topic Not Found</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>This topic doesn't exist yet.</p>
          <button className="mac-btn mac-btn-primary" onClick={() => navigate('/fullstack-python-course/python')}>
            Back to Topics
          </button>
        </div>
      </div>
    );
  }

  const handleMCQAnswer = (qIndex, optionIndex) => {
    if (!showResults) {
      setSelectedAnswers(prev => ({ ...prev, [qIndex]: optionIndex }));
    }
  };

  const checkAnswers = () => {
    setShowResults(true);
  };

  const score = topic.mcqs ? topic.mcqs.reduce((acc, mcq, idx) => {
    return acc + (selectedAnswers[idx] === mcq.answer ? 1 : 0);
  }, 0) : 0;

  return (
    <div style={{ paddingTop: 62, minHeight: '100vh' }}>
      
      {/* HERO */}
      <section style={{ padding: '3rem 1.5rem 2rem', background: `linear-gradient(135deg, ${topic.color}08, var(--mac-surface))`, borderBottom: '1px solid var(--mac-border)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: -40, right: -40, width: 200, height: 200, borderRadius: '50%', background: `${topic.color}15`, filter: 'blur(60px)', pointerEvents: 'none' }} />
        
        <div style={{ maxWidth: 1000, margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <button onClick={() => navigate(-1)}
            style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.85rem', marginBottom: '1.5rem', fontWeight: 500, transition: 'color 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}>
            <i className="fas fa-arrow-left" /> Back
          </button>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
              <div style={{ width: 56, height: 56, borderRadius: 14, background: `${topic.color}20`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <i className={`fas ${topic.icon}`} style={{ color: topic.color, fontSize: '1.5rem' }} />
              </div>
              <div className="mac-badge" style={{ background: `${topic.color}15`, color: topic.color, border: `1px solid ${topic.color}30` }}>
                {topic.category}
              </div>
            </div>

            <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, marginBottom: '0.75rem', letterSpacing: '-0.01em' }}>
              {topic.title}
            </h1>
            <p style={{ color: 'var(--accent)', fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem' }}>
              {topic.tagline}
            </p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.7, maxWidth: 700 }}>
              {topic.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION NAV */}
      <div style={{ position: 'sticky', top: 62, zIndex: 40, background: 'var(--mac-surface)', backdropFilter: 'blur(20px)', borderBottom: '1px solid var(--mac-border)' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto', padding: '0 1.5rem', display: 'flex', overflowX: 'auto' }}>
          {SECTIONS.map(s => {
            const active = activeSection === s.id;
            return (
              <button key={s.id}
                onClick={() => setActiveSection(s.id)}
                style={{
                  background: 'none',
                  border: 'none',
                  padding: '1rem 1.25rem',
                  cursor: 'pointer',
                  color: active ? 'var(--accent)' : 'var(--text-secondary)',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  borderBottom: active ? '2px solid var(--accent)' : '2px solid transparent',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  whiteSpace: 'nowrap',
                  transition: 'all 0.2s',
                }}>
                <i className={`fas ${s.icon}`} style={{ fontSize: '0.8rem' }} />
                {s.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* CONTENT */}
      <section style={{ padding: '3rem 1.5rem 6rem', maxWidth: 1000, margin: '0 auto' }}>
        <motion.div key={activeSection} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>

          {activeSection === 'overview' && (
            <div>
              <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: 10 }}>
                <i className="fas fa-lightbulb" style={{ color: topic.color }} />
                Key Concepts
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '3rem' }}>
                {topic.keyPoints.map((point, i) => (
                  <motion.div key={i}
                    initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08 }}
                    className="mac-card"
                    style={{ padding: '1.25rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <div style={{ width: 32, height: 32, borderRadius: 8, background: `${topic.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <span style={{ color: topic.color, fontWeight: 700, fontSize: '0.9rem' }}>{i + 1}</span>
                    </div>
                    <p style={{ color: 'var(--text-primary)', fontSize: '0.95rem', lineHeight: 1.7, flex: 1 }}>{point}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {activeSection === 'code' && (
            <div>
              <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: 10 }}>
                <i className="fas fa-code" style={{ color: topic.color }} />
                Code Examples
              </h2>
              <div className="mac-code-window">
                <div className="mac-titlebar">
                  <div className="mac-dot" style={{ background: 'var(--red-dot)' }} />
                  <div className="mac-dot" style={{ background: 'var(--yellow-dot)' }} />
                  <div className="mac-dot" style={{ background: 'var(--green-dot)' }} />
                  <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-tertiary)', marginLeft: 8 }}>
                    {topic.id}.py
                  </span>
                </div>
                <SyntaxHighlighter language="python" style={vscDarkPlus} customStyle={{ margin: 0, borderRadius: 0, fontSize: '0.85rem' }}>
                  {topic.code}
                </SyntaxHighlighter>
              </div>
            </div>
          )}

          {activeSection === 'applications' && (
            <div>
              <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: 10 }}>
                <i className="fas fa-rocket" style={{ color: topic.color }} />
                Real-World Applications
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                {topic.applications.map((app, i) => (
                  <motion.div key={i}
                    initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.08 }}
                    className="mac-card"
                    style={{ padding: '1.5rem', textAlign: 'center' }}>
                    <div style={{ width: 48, height: 48, borderRadius: 12, background: `${topic.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
                      <i className={`fas ${app.icon}`} style={{ color: topic.color, fontSize: '1.2rem' }} />
                    </div>
                    <h3 style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-primary)' }}>{app.title}</h3>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {activeSection === 'interview' && (
            <div>
              <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: 10 }}>
                <i className="fas fa-comments" style={{ color: topic.color }} />
                Interview Questions
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {topic.interview.map((item, i) => (
                  <motion.div key={i}
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="mac-card"
                    style={{ padding: '1.75rem' }}>
                    <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
                      <div style={{ width: 32, height: 32, borderRadius: 8, background: `${topic.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <span style={{ color: topic.color, fontWeight: 700, fontSize: '0.85rem' }}>Q{i + 1}</span>
                      </div>
                      <h3 style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--text-primary)', lineHeight: 1.5 }}>{item.q}</h3>
                    </div>
                    <div style={{ paddingLeft: '3rem', borderLeft: `3px solid ${topic.color}20`, marginLeft: '1rem' }}>
                      <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.7 }}>{item.a}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {activeSection === 'mcqs' && (
            <div>
              <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: 10 }}>
                <i className="fas fa-check-circle" style={{ color: topic.color }} />
                Practice MCQs
              </h2>
              
              {showResults && (
                <div className="mac-card" style={{ padding: '1.5rem', marginBottom: '2rem', background: `${topic.color}08`, border: `1px solid ${topic.color}30` }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ width: 56, height: 56, borderRadius: 12, background: `${topic.color}20`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <span style={{ fontSize: '1.5rem', fontWeight: 800, color: topic.color }}>{score}/{topic.mcqs.length}</span>
                    </div>
                    <div>
                      <div style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                        Your Score: {Math.round((score / topic.mcqs.length) * 100)}%
                      </div>
                      <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                        {score === topic.mcqs.length ? 'Perfect! 🎉' : score >= topic.mcqs.length * 0.7 ? 'Great job! 👏' : 'Keep practicing! 💪'}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {topic.mcqs.map((mcq, qIdx) => (
                  <motion.div key={qIdx}
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: qIdx * 0.1 }}
                    className="mac-card"
                    style={{ padding: '1.75rem' }}>
                    <h3 style={{ fontSize: '1.05rem', fontWeight: 600, marginBottom: '1.25rem', color: 'var(--text-primary)' }}>
                      {qIdx + 1}. {mcq.q}
                    </h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                      {mcq.options.map((option, optIdx) => {
                        const selected = selectedAnswers[qIdx] === optIdx;
                        const isCorrect = mcq.answer === optIdx;
                        const showCorrect = showResults && isCorrect;
                        const showWrong = showResults && selected && !isCorrect;

                        return (
                          <button key={optIdx}
                            onClick={() => handleMCQAnswer(qIdx, optIdx)}
                            disabled={showResults}
                            style={{
                              background: showCorrect ? '#22c55e15' : showWrong ? '#ef444415' : selected ? `${topic.color}10` : 'var(--mac-surface-2)',
                              border: `1px solid ${showCorrect ? '#22c55e' : showWrong ? '#ef4444' : selected ? topic.color : 'var(--mac-border)'}`,
                              borderRadius: 10,
                              padding: '1rem 1.25rem',
                              textAlign: 'left',
                              cursor: showResults ? 'default' : 'pointer',
                              transition: 'all 0.2s',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '0.75rem',
                            }}>
                            <div style={{
                              width: 24,
                              height: 24,
                              borderRadius: '50%',
                              border: `2px solid ${showCorrect ? '#22c55e' : showWrong ? '#ef4444' : selected ? topic.color : 'var(--mac-border)'}`,
                              background: showCorrect ? '#22c55e' : showWrong ? '#ef4444' : selected ? topic.color : 'transparent',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              flexShrink: 0,
                            }}>
                              {(showCorrect || (selected && !showResults)) && <i className="fas fa-check" style={{ color: '#fff', fontSize: '0.7rem' }} />}
                              {showWrong && <i className="fas fa-times" style={{ color: '#fff', fontSize: '0.7rem' }} />}
                            </div>
                            <span style={{ color: 'var(--text-primary)', fontSize: '0.95rem', fontWeight: selected ? 600 : 400 }}>
                              {option}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </motion.div>
                ))}
              </div>

              {!showResults && Object.keys(selectedAnswers).length === topic.mcqs.length && (
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} style={{ marginTop: '2rem', textAlign: 'center' }}>
                  <button className="mac-btn mac-btn-primary" style={{ fontSize: '1rem', padding: '12px 32px' }} onClick={checkAnswers}>
                    <i className="fas fa-check" />
                    Check Answers
                  </button>
                </motion.div>
              )}
            </div>
          )}

          {activeSection === 'resources' && (
            <div>
              <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: 10 }}>
                <i className="fas fa-link" style={{ color: topic.color }} />
                Additional Resources
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {topic.resources.map((resource, i) => (
                  <motion.a key={i}
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08 }}
                    className="mac-card"
                    style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem', textDecoration: 'none' }}>
                    <div style={{ width: 48, height: 48, borderRadius: 12, background: `${topic.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <i className={`fas ${resource.icon}`} style={{ color: topic.color, fontSize: '1.1rem' }} />
                    </div>
                    <div style={{ flex: 1 }}>
                      <h3 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
                        {resource.title}
                      </h3>
                      <p style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)' }}>{resource.url}</p>
                    </div>
                    <i className="fas fa-external-link-alt" style={{ color: 'var(--text-tertiary)', fontSize: '0.9rem' }} />
                  </motion.a>
                ))}
              </div>
            </div>
          )}

        </motion.div>
      </section>

    </div>
  );
}
