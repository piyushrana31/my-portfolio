import React, { useState, useEffect } from 'react'
import Logo from '../shared/Logo'

/**
 * LaunchScreen
 * Rocket-style intro: logo ignites, shoots up, then returns to center
 * before fading out to the main webpage.
 */
export default function LaunchScreen({ onDone }) {
  const [phase, setPhase] = useState('loading')

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('ignite'), 1400) // flame appears
    const t2 = setTimeout(() => setPhase('launch'), 1800) // shoots up
    const t3 = setTimeout(() => setPhase('return'), 2600) // comes back down
    const t4 = setTimeout(() => setPhase('exit'),   3400) // fades overlay
    const t5 = setTimeout(() => onDone(),           4200) // unmounts
    return () => [t1, t2, t3, t4, t5].forEach(clearTimeout)
  }, [onDone])

  const isIgniting  = phase === 'ignite'
  const isLaunching = phase === 'launch'

  return (
    <div
      style={{
        position:       'fixed',
        inset:          0,
        background:     'var(--bg)',
        display:        'flex',
        alignItems:     'center',
        justifyContent: 'center',
        zIndex:         10000,
        overflow:       'hidden',
        opacity:        phase === 'exit' ? 0 : 1,
        transition:     'opacity 0.8s ease',
      }}
    >
      {/* Star field effect while launching */}
      {Array.from({ length: 50 }).map((_, i) => (
        <div
          key={i}
          style={{
            position:     'absolute',
            width:         Math.random() * 2 + 1,
            height:        Math.random() * 2 + 1,
            borderRadius: '50%',
            background:   'var(--cyan)',
            left:         `${Math.random() * 100}%`,
            top:          `${Math.random() * 100}%`,
            opacity:       Math.random() * 0.5 + 0.1,
            animation:     isLaunching || isIgniting
              ? `starStreak 0.5s forwards ${Math.random() * 0.2}s infinite`
              : 'none',
          }}
        />
      ))}

      {/* Main container */}
      <div
        style={{
          display:        'flex',
          flexDirection:  'column',
          alignItems:     'center',
          gap:             16,
          transform:       isLaunching ? 'translateY(-120vh)' : 'translateY(0)',
          transition:      'transform 0.7s cubic-bezier(0.5, -0.2, 0.3, 1.2)',
        }}
      >
        <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
          <Logo size="lg" />
          
          {/* Back Ignition Flame */}
          <div
            style={{
              position: 'absolute',
              top: '75%', // Starts behind the bottom part of the logo
              zIndex: -1,
              width: 34,
              height: (isIgniting || isLaunching) ? 160 : 0,
              background: 'linear-gradient(to bottom, var(--gold), #ff4500, transparent)',
              borderRadius: '0 0 50px 50px',
              filter: 'blur(6px)',
              opacity: (isIgniting || isLaunching) ? 1 : 0,
              transition: 'height 0.3s ease-in, opacity 0.2s',
              animation: (isIgniting || isLaunching) ? 'flicker 0.05s infinite alternate' : 'none',
              transformOrigin: 'top center',
            }}
          />
        </div>

        {/* Status text */}
        <p
          className="mono"
          style={{
            fontSize:    12,
            color:       'var(--muted)',
            letterSpacing: 4,
            opacity:     (isIgniting || isLaunching) ? 0 : 1,
            transition:  'opacity 0.3s',
            marginTop:   12,
          }}
        >
          {phase === 'return' || phase === 'exit' ? 'READY.' : 'INITIALISING...'}
        </p>

        {/* Progress bar */}
        <div
          style={{
            width:        220,
            height:       2,
            background:   'rgba(var(--cyan-rgb),0.1)',
            borderRadius: 1,
            overflow:     'hidden',
            opacity:     (isIgniting || isLaunching) ? 0 : 1,
            transition:  'opacity 0.3s',
          }}
        >
          <div
            style={{
              height:     '100%',
              background: 'linear-gradient(to right, var(--cyan), var(--gold))',
              boxShadow:  '0 0 10px var(--cyan)',
              animation:  'progressFill 1.3s ease forwards',
            }}
          />
        </div>
      </div>
    </div>
  )
}
