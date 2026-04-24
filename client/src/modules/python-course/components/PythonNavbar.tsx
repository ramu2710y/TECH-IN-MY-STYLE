import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import pyLogo from '../assets/py.svg'

interface Props { showTasks?: boolean }

export default function Header({ showTasks = false }: Props) {
  const [open, setOpen] = useState(false)
  const cls = ({ isActive }: { isActive: boolean }) => isActive ? 'active' : ''
  const close = () => setOpen(false)

  useEffect(() => {
    document.body.classList.toggle('no-scroll', open)
    return () => document.body.classList.remove('no-scroll')
  }, [open])

  return (
    <>
      <nav className="py-navbar">
        <div className="py-nav-inner">
          <Link to="/python-course" className="py-nav-brand" onClick={close}>
            <img src={pyLogo} alt="Python Logo" className="py-nav-logo-icon" />
            <div className="py-nav-brand-text">
              <span className="py-nb-main">Python in my style</span>
              <span className="py-nb-sub">Learn Â· Practice Â· Master</span>
            </div>
          </Link>

          <ul className="py-nav-menu">
            <li><NavLink to="/python-course" end className={cls}>Home</NavLink></li>
            <li><NavLink to="/python-course/topics" className={cls}>Topics</NavLink></li>
            <li><NavLink to="/python-course/about" className={cls}>About</NavLink></li>
            <li><NavLink to="/python-course/contact" className={cls}>Contact</NavLink></li>
            {showTasks && (
              <li>
                <NavLink to="/python-course/tasks" className={cls}>
                  Tasks <span className="nav-pill">30</span>
                </NavLink>
              </li>
            )}
          </ul>

          <div className="py-nav-end">
            <Link to="/courses" className="py-nav-pg" style={{ border: "1.5px solid currentColor", borderRadius: "20px", padding: "0.25rem 0.8rem", fontSize: "0.8rem", opacity: 0.8 }}>← Courses</Link>
            <Link to="/python-course/playground" className="py-nav-pg py-nav-pg--play">
              <i className="bi bi-play-circle-fill" />
              Playground
            </Link>
            <button className={`py-hbg${open ? ' on' : ''}`} aria-label="Menu" onClick={() => setOpen(p => !p)}>
              <span /><span /><span />
            </button>
          </div>
        </div>
      </nav>

      <div className={`py-mob-bg${open ? ' on' : ''}`} onClick={close}>
        <div className="py-mob-drawer" onClick={e => e.stopPropagation()}>
          <NavLink to="/python-course" end className={cls} onClick={close}>ðŸ  Home</NavLink>
          <NavLink to="/python-course/topics" className={cls} onClick={close}>ðŸ“š Topics</NavLink>
          <NavLink to="/python-course/about" className={cls} onClick={close}>â„¹ï¸ About</NavLink>
          <NavLink to="/python-course/contact" className={cls} onClick={close}>âœ‰ï¸ Contact</NavLink>
          {showTasks && <NavLink to="/python-course/tasks" className={cls} onClick={close}>âœ… Tasks</NavLink>}
          <Link to="/python-course/playground" className="py-mob-pg" onClick={close}>â–¶ Playground</Link>
        </div>
      </div>
    </>
  )
}

