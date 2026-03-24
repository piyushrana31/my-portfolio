import React, { useState, useCallback } from 'react'
import { ThemeProvider } from './context/ThemeContext'
import { useActiveSection } from './hooks'

import MagneticCursor from './components/shared/MagneticCursor'
import ParticleField from './components/shared/ParticleField'
import LaunchScreen from './components/Launch/LaunchScreen'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Education from './components/Education/Education'
import Projects from './components/Projects/Projects'
import Certificates from './components/Certificates/Certificates'
import Achievements from './components/Achievements/Achievements'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

const SECTION_IDS = [
  'home', 'about', 'skills', 'education',
  'projects', 'certificates', 'achievements', 'contact',
]

// Wrapper without scroll-velocity blur effect
function ScrollCanvas({ children }) {
  return (
    <div>
      {children}
    </div>
  )
}

// Scroll-to-top FAB
function ScrollTopBtn() {
  return (
    <button
      data-hover
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Scroll to top"
      style={{
        position: 'fixed',
        bottom: 32,
        right: 32,
        width: 48,
        height: 48,
        borderRadius: '50%',
        border: '1.5px solid var(--cyan)',
        background: 'var(--bg)',
        cursor: 'none',
        color: 'var(--cyan)',
        fontSize: 20,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 0 20px rgba(var(--cyan-rgb),0.3)',
        zIndex: 500,
        transition: 'box-shadow 0.3s, transform 0.3s',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.boxShadow = '0 0 35px rgba(var(--cyan-rgb),0.6)'
        e.currentTarget.style.transform = 'translateY(-3px)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.boxShadow = '0 0 20px rgba(var(--cyan-rgb),0.3)'
        e.currentTarget.style.transform = ''
      }}
    >
      ↑
    </button>
  )
}

function PortfolioApp() {
  const active = useActiveSection(SECTION_IDS)

  return (
    <>
      <MagneticCursor />
      <ParticleField count={75} />
      <Navbar active={active} />

      <ScrollCanvas>
        <Hero />
        <About />
        <Skills />
        <Education />
        <Projects />
        <Certificates />
        <Achievements />
        <Contact />
        <Footer />
      </ScrollCanvas>

      <ScrollTopBtn />
    </>
  )
}

export default function App() {
  const [launched, setLaunched] = useState(false)
  const onDone = useCallback(() => setLaunched(true), [])

  return (
    <ThemeProvider>
      {!launched && <LaunchScreen onDone={onDone} />}

      {/* Mount immediately but hide until launch completes */}
      <div
        style={{
          opacity: launched ? 1 : 0,
          transition: 'opacity 0.9s ease',
          pointerEvents: launched ? 'auto' : 'none',
        }}
      >
        {launched && <PortfolioApp />}
      </div>
    </ThemeProvider>
  )
}
