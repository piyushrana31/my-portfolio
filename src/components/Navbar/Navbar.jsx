import React, { useState, useEffect } from 'react'
import Logo from '../shared/Logo'
import { useTheme } from '../../context/ThemeContext'

const NAV_ITEMS = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Education', id: 'education' },
  { label: 'Projects', id: 'projects' },
  { label: 'Certificates', id: 'certificates' },
  { label: 'Achievements', id: 'achievements' },
  { label: 'Contact', id: 'contact' },
]

// ─── Theme Toggle Button ─────────────────────────────────────────
function ThemeToggle() {
  const { dark, toggle } = useTheme()

  return (
    <button
      data-hover
      onClick={toggle}
      aria-label="Toggle theme"
      style={{
        width: 64,
        height: 32,
        borderRadius: 16,
        border: '1.5px solid var(--cyan)',
        background: dark ? 'rgba(var(--cyan-rgb),0.05)' : 'rgba(var(--gold-rgb),0.1)',
        cursor: 'none',
        position: 'relative',
        overflow: 'hidden',
        transition: 'all 0.4s',
        boxShadow: dark
          ? '0 0 14px rgba(var(--cyan-rgb),0.3)'
          : '0 0 14px rgba(var(--gold-rgb),0.3)',
        flexShrink: 0,
      }}
    >
      <div
        style={{
          width: 24,
          height: 24,
          borderRadius: '50%',
          position: 'absolute',
          top: 3,
          left: dark ? 5 : 35,
          background: dark ? 'var(--cyan)' : 'var(--gold)',
          boxShadow: dark ? '0 0 10px var(--cyan)' : '0 0 10px var(--gold)',
          transition: 'left 0.4s cubic-bezier(0.34,1.56,0.64,1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 13,
        }}
      >
        {dark ? '🌙' : '☀️'}
      </div>
    </button>
  )
}

// ─── Navbar ──────────────────────────────────────────────────────
export default function Navbar({ active }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const scrollTo = id =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '12px 5%',
        background: scrolled ? 'rgba(2,4,8,0.88)' : 'transparent',
        backdropFilter: scrolled ? 'blur(22px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border)' : 'none',
        transition: 'background 0.4s, backdrop-filter 0.4s, border 0.4s',
        flexWrap: 'wrap',
        gap: 8,
      }}
    >
      <Logo />

      {/* Nav links + controls */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 4, flexWrap: 'wrap' }}>
        {NAV_ITEMS.map(({ label, id }) => (
          <button
            key={id}
            data-hover
            onClick={() => scrollTo(id)}
            style={{
              background: 'none',
              border: 'none',
              color: active === id ? 'var(--cyan)' : 'var(--muted)',
              fontFamily: 'var(--font-body)',
              fontWeight: 600,
              fontSize: 12,
              letterSpacing: 1,
              cursor: 'none',
              padding: '6px 9px',
              borderRadius: 6,
              position: 'relative',
              transition: 'color 0.3s',
            }}
          >
            {active === id && (
              <span
                style={{
                  position: 'absolute',
                  bottom: 1,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: 4,
                  height: 4,
                  borderRadius: '50%',
                  background: 'var(--cyan)',
                  boxShadow: '0 0 8px var(--cyan)',
                }}
              />
            )}
            {label.toUpperCase()}
          </button>
        ))}

        <ThemeToggle />

        {/* CV Download */}
        <a
          href="/CV1.pdf"
          download
          data-hover
          style={{
            padding: '8px 18px',
            borderRadius: 8,
            background: 'linear-gradient(135deg, var(--cyan), var(--cyan2))',
            color: '#020408',
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            fontSize: 10,
            textDecoration: 'none',
            letterSpacing: 1,
            boxShadow: '0 0 20px rgba(var(--cyan-rgb),0.4)',
            whiteSpace: 'nowrap',
            transition: 'box-shadow 0.3s',
          }}
        >
          ⬇ DOWNLOAD CV
        </a>
      </div>
    </nav>
  )
}
