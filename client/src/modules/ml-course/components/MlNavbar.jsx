import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './MlNavbar.css'

export default function MlNavbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(!menuOpen)
  const closeMenu = () => setMenuOpen(false)

  return (
    <header>
      <nav className="ml-navbar" id="main-navbar">
        <Link to="/ml-course" className="ml-logo" onClick={closeMenu}>
          <span className="ml-logo-text">ML<span className="ml-highlight"> In My Style</span></span>
        </Link>

        <div
          className={`ml-menu-toggle ${menuOpen ? 'active' : ''}`}
          id="mobile-menu"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span className="ml-bar"></span>
          <span className="ml-bar"></span>
          <span className="ml-bar"></span>
        </div>

        <ul className={`ml-nav-menu ${menuOpen ? 'active' : ''}`}>
          <li>
            <NavLink to="/ml-course" end onClick={closeMenu}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/ml-course/topics" onClick={closeMenu}>
              Topics
            </NavLink>
          </li>
          <li>
            <a href="/ml-course#about" onClick={closeMenu}>
              About
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
