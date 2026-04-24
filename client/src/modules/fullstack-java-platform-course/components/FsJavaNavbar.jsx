import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaJava } from 'react-icons/fa'
import { SiSpringboot } from 'react-icons/si'
import { HiBeaker } from 'react-icons/hi2'
import { RiHome4Line, RiStackLine } from 'react-icons/ri'

export default function FsJavaNavbar() {
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { to: '/fullstack-java-platform-course',        label: 'HOME',   Icon: RiHome4Line },
    { to: '/fullstack-java-platform-course/phases',  label: 'PHASES', Icon: RiStackLine },
    { to: '/fullstack-java-platform-course/api-lab', label: 'API LAB',Icon: HiBeaker },
  ]

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled ? 'rgba(6,10,20,0.97)' : 'rgba(6,10,20,0.7)',
        backdropFilter: 'blur(18px)',
        borderBottom: '1px solid rgba(83,130,161,0.18)',
        transition: 'background 0.3s',
      }}
    >
      {/* top accent line */}
      <div style={{ height: 2, background: 'linear-gradient(90deg, var(--java-blue), var(--java-orange), var(--java-blue))', opacity: 0.7 }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 58 }}>

        {/* Logo */}
        <Link to="/fullstack-java-platform-course" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <div style={{
            width: 36, height: 36, borderRadius: 8,
            background: 'linear-gradient(135deg, rgba(248,152,32,0.15), rgba(83,130,161,0.15))',
            border: '1px solid rgba(248,152,32,0.35)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <FaJava size={20} color="#f89820" className="java-icon-glow" />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}>
            <span style={{ fontFamily: 'Orbitron', color: '#f89820', fontSize: '0.72rem', fontWeight: 700, letterSpacing: 1 }}>
              FULL STACK
            </span>
            <span style={{ fontFamily: 'Orbitron', color: '#5382a1', fontSize: '0.6rem', letterSpacing: 2 }}>
              JAVA IN MY STYLE
            </span>
          </div>
        </Link>

        {/* Links */}
        <div style={{ display: 'flex', gap: '0.25rem', alignItems: 'center' }}>
          {links.map(({ to, label, Icon }) => {
            const active = location.pathname === to
            return (
              <Link key={to} to={to} style={{
                textDecoration: 'none',
                display: 'flex', alignItems: 'center', gap: '0.4rem',
                fontFamily: 'Orbitron', fontSize: '0.6rem', letterSpacing: 1.5,
                color: active ? '#f89820' : '#4a6070',
                background: active ? 'rgba(248,152,32,0.08)' : 'transparent',
                border: `1px solid ${active ? 'rgba(248,152,32,0.25)' : 'transparent'}`,
                padding: '0.45rem 0.85rem', borderRadius: 5,
                transition: 'all 0.2s',
              }}>
                <Icon size={13} />
                {label}
              </Link>
            )
          })}

          {/* CTA */}
          <Link to="/fullstack-java-platform-course/api-lab" style={{
            textDecoration: 'none', marginLeft: '0.5rem',
            display: 'flex', alignItems: 'center', gap: '0.4rem',
            background: 'linear-gradient(135deg, rgba(248,152,32,0.18), rgba(83,130,161,0.12))',
            border: '1px solid rgba(248,152,32,0.4)',
            color: '#f89820',
            fontFamily: 'Orbitron', fontSize: '0.6rem', letterSpacing: 1,
            padding: '0.45rem 1rem', borderRadius: 5,
            boxShadow: '0 0 12px rgba(248,152,32,0.15)',
            transition: 'all 0.2s',
          }}>
            <SiSpringboot size={12} />
            LAUNCH LAB
          </Link>
        </div>
      </div>
    </motion.nav>
  )
}

