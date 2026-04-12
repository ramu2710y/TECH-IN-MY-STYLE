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
              <span className="py-nb-sub">Learn · Practice · Master</span>
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
          <NavLink to="/python-course" end className={cls} onClick={close}>🏠 Home</NavLink>
          <NavLink to="/python-course/topics" className={cls} onClick={close}>📚 Topics</NavLink>
          <NavLink to="/python-course/about" className={cls} onClick={close}>ℹ️ About</NavLink>
          <NavLink to="/python-course/contact" className={cls} onClick={close}>✉️ Contact</NavLink>
          {showTasks && <NavLink to="/python-course/tasks" className={cls} onClick={close}>✅ Tasks</NavLink>}
          <Link to="/python-course/playground" className="py-mob-pg" onClick={close}>▶ Playground</Link>
        </div>
      </div>
    </>
  )
}
