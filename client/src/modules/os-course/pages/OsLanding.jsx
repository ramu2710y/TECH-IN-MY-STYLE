import { useNavigate } from 'react-router-dom';

const features = [
  { icon: '⚙', title: 'Process Management', desc: 'Scheduling, PCBs, context switching, IPC' },
  { icon: '⧉', title: 'Threads & Concurrency', desc: 'Mutexes, semaphores, deadlocks, race conditions' },
  { icon: '▦', title: 'Memory Management', desc: 'Paging, virtual memory, TLB, page replacement' },
  { icon: '◫', title: 'File Systems', desc: 'Inodes, allocation methods, journaling, VFS' },
  { icon: '⇄', title: 'I/O Systems', desc: 'DMA, disk scheduling, RAID, buffering' },
  { icon: '◆', title: 'Security', desc: 'Access control, authentication, CIA triad' },
];

const stats = [
  { value: '10', label: 'Modules' },
  { value: '50+', label: 'Code Examples' },
  { value: '30+', label: 'Quiz Questions' },
  { value: '3', label: 'Languages' },
];

export default function OsLanding() {
  const navigate = useNavigate();

  return (
    <div style={{ minHeight: '100vh', overflowY: 'auto', background: '#0b0f1a' }}>

      {/* Ambient background */}
      <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0,
        background: `
          radial-gradient(ellipse 70% 50% at 15% 20%, rgba(124,58,237,0.1) 0%, transparent 55%),
          radial-gradient(ellipse 60% 45% at 85% 15%, rgba(59,130,246,0.08) 0%, transparent 55%),
          radial-gradient(ellipse 50% 40% at 50% 85%, rgba(6,182,212,0.07) 0%, transparent 55%)
        `
      }} />

      {/* Navbar */}
      <nav style={{ position: 'sticky', top: 0, zIndex: 50, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 2rem', height: 64,
        background: 'rgba(11,15,26,0.9)', backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(139,92,246,0.12)',
        boxShadow: '0 4px 20px rgba(0,0,0,0.4)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ width: 36, height: 36, borderRadius: 8, background: 'linear-gradient(135deg,#7c3aed,#3b82f6)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '0.8rem', color: '#fff',
            boxShadow: '3px 3px 8px rgba(0,0,0,0.5), -2px -2px 5px rgba(255,255,255,0.03)'
          }}>OS</div>
          <span style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: '1.05rem', color: '#f1f5f9' }}>
            OS <span style={{ color: '#8b5cf6' }}>in My Style</span>
          </span>
        </div>
        <button onClick={() => navigate('/os-course/overview')}
          style={{ padding: '9px 22px', borderRadius: 8, border: 'none', cursor: 'pointer', fontWeight: 600, fontSize: '0.88rem', color: '#fff',
            background: 'linear-gradient(135deg,#7c3aed,#3b82f6)',
            boxShadow: '4px 4px 10px rgba(0,0,0,0.45), -2px -2px 6px rgba(255,255,255,0.03)',
            transition: 'all 200ms ease'
          }}
          onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-1px)'}
          onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
        >
          Start Learning
        </button>
      </nav>

      {/* Hero */}
      <section style={{ position: 'relative', zIndex: 1, textAlign: 'center', padding: '100px 24px 80px' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 18px', borderRadius: 100, marginBottom: 32,
          background: 'rgba(139,92,246,0.08)', border: '1px solid rgba(139,92,246,0.2)',
          fontSize: 11, fontWeight: 600, color: '#8b5cf6', letterSpacing: '0.1em', textTransform: 'uppercase'
        }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#10b981', display: 'inline-block', boxShadow: '0 0 8px rgba(16,185,129,0.6)' }} />
          Interactive OS Course
        </div>

        <h1 style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(2.8rem, 7vw, 5.5rem)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.03em', marginBottom: 24, color: '#f1f5f9' }}>
          Master{' '}
          <span style={{ background: 'linear-gradient(135deg,#7c3aed,#3b82f6,#06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Operating Systems
          </span>
          <br />like never before
        </h1>

        <p style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)', color: '#94a3b8', maxWidth: 560, margin: '0 auto 48px', lineHeight: 1.75, fontWeight: 300 }}>
          From processes to security — learn OS internals with interactive visualizations,
          real code in C, Python and Java, and interview-ready Q&As.
        </p>

        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <button onClick={() => navigate('/os-course/overview')}
            style={{ padding: '14px 36px', borderRadius: 10, border: 'none', cursor: 'pointer', fontWeight: 700, fontSize: '1rem', color: '#fff',
              background: 'linear-gradient(135deg,#7c3aed,#3b82f6)',
              boxShadow: '6px 6px 16px rgba(0,0,0,0.5), -3px -3px 8px rgba(255,255,255,0.03), 0 0 30px rgba(124,58,237,0.25)',
              transition: 'all 200ms ease'
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '8px 8px 20px rgba(0,0,0,0.6), -3px -3px 8px rgba(255,255,255,0.04), 0 0 40px rgba(124,58,237,0.35)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '6px 6px 16px rgba(0,0,0,0.5), -3px -3px 8px rgba(255,255,255,0.03), 0 0 30px rgba(124,58,237,0.25)'; }}
          >
            Explore Course
          </button>
          <button onClick={() => navigate('/os-course/introduction')}
            style={{ padding: '14px 36px', borderRadius: 10, cursor: 'pointer', fontWeight: 600, fontSize: '1rem', color: '#8b5cf6',
              background: '#0f1525', border: 'none',
              boxShadow: '6px 6px 14px rgba(0,0,0,0.5), -3px -3px 8px rgba(255,255,255,0.025)',
              transition: 'all 200ms ease'
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '8px 8px 18px rgba(0,0,0,0.6), -3px -3px 8px rgba(255,255,255,0.03), 0 0 16px rgba(139,92,246,0.2)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '6px 6px 14px rgba(0,0,0,0.5), -3px -3px 8px rgba(255,255,255,0.025)'; }}
          >
            Start Module 1
          </button>
        </div>
      </section>

      {/* Stats */}
      <section style={{ position: 'relative', zIndex: 1, maxWidth: 900, margin: '0 auto', padding: '0 24px 80px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 16 }}>
          {stats.map((s, i) => (
            <div key={i} style={{ textAlign: 'center', padding: '28px 16px', borderRadius: 16,
              background: '#0f1525',
              boxShadow: '6px 6px 14px rgba(0,0,0,0.5), -4px -4px 10px rgba(255,255,255,0.025)'
            }}>
              <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '2.4rem', fontWeight: 800, marginBottom: 6,
                background: 'linear-gradient(135deg,#7c3aed,#3b82f6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'
              }}>{s.value}</div>
              <div style={{ fontSize: '0.75rem', color: '#64748b', letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 500 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section style={{ position: 'relative', zIndex: 1, maxWidth: 1100, margin: '0 auto', padding: '0 24px 100px' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <p style={{ fontSize: 11, color: '#8b5cf6', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 600, marginBottom: 12 }}>What you will learn</p>
          <h2 style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 700, color: '#f1f5f9', letterSpacing: '-0.02em' }}>
            10 modules. Every OS concept.
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 20 }}>
          {features.map((f, i) => (
            <div key={i} style={{ padding: '28px 24px', borderRadius: 16,
              background: '#0f1525',
              boxShadow: '6px 6px 14px rgba(0,0,0,0.5), -4px -4px 10px rgba(255,255,255,0.025)',
              transition: 'all 200ms ease', cursor: 'default'
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '10px 10px 22px rgba(0,0,0,0.6), -4px -4px 10px rgba(255,255,255,0.03), 0 0 20px rgba(139,92,246,0.12)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '6px 6px 14px rgba(0,0,0,0.5), -4px -4px 10px rgba(255,255,255,0.025)'; }}
            >
              <div style={{ width: 48, height: 48, borderRadius: 12, marginBottom: 18, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem',
                background: '#0a0e1a',
                boxShadow: 'inset 3px 3px 7px rgba(0,0,0,0.45), inset -2px -2px 5px rgba(255,255,255,0.02)'
              }}>{f.icon}</div>
              <h3 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '1.05rem', fontWeight: 700, color: '#f1f5f9', marginBottom: 8 }}>{f.title}</h3>
              <p style={{ fontSize: '0.85rem', color: '#64748b', lineHeight: 1.6, margin: 0 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ position: 'relative', zIndex: 1, maxWidth: 800, margin: '0 auto', padding: '0 24px 100px' }}>
        <div style={{ textAlign: 'center', padding: '64px 48px', borderRadius: 24,
          background: '#0f1525',
          boxShadow: '8px 8px 20px rgba(0,0,0,0.55), -4px -4px 12px rgba(255,255,255,0.025), 0 0 40px rgba(124,58,237,0.1)'
        }}>
          <h2 style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(1.6rem, 4vw, 2.4rem)', fontWeight: 700, color: '#f1f5f9', marginBottom: 16, letterSpacing: '-0.02em' }}>
            Ready to go deep?
          </h2>
          <p style={{ fontSize: '1rem', color: '#64748b', marginBottom: 36, fontWeight: 300 }}>
            Code examples in C, Python and Java. Quizzes. Visualizations. Interview prep.
          </p>
          <button onClick={() => navigate('/os-course/overview')}
            style={{ padding: '14px 40px', borderRadius: 10, border: 'none', cursor: 'pointer', fontWeight: 700, fontSize: '1rem', color: '#fff',
              background: 'linear-gradient(135deg,#7c3aed,#3b82f6)',
              boxShadow: '6px 6px 16px rgba(0,0,0,0.5), -3px -3px 8px rgba(255,255,255,0.03), 0 0 30px rgba(124,58,237,0.25)',
              transition: 'all 200ms ease'
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
          >
            Enter the Course
          </button>
        </div>
      </section>

    </div>
  );
}
