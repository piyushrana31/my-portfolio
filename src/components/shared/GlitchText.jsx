import React, { useState, useEffect } from 'react'

/**
 * GlitchText – randomly triggers a red/green chromatic glitch.
 * Props:
 *   text  – string to display
 *   size  – font-size in px (default 72)
 *   gold  – use gold colour instead of cyan
 */
export default function GlitchText({ text, size = 72, gold = false }) {
  const [glitching, setGlitching] = useState(false)

  useEffect(() => {
    const trigger = () => {
      setGlitching(true)
      setTimeout(() => setGlitching(false), 180)
    }
    const id = setInterval(trigger, 3000 + Math.random() * 2500)
    return () => clearInterval(id)
  }, [])

  const base = {
    fontFamily: 'var(--font-display)',
    fontWeight: 900,
    fontSize:   size,
    letterSpacing: 4,
    lineHeight: 1,
    display:    'block',
    color:      gold ? 'var(--gold)' : 'var(--cyan)',
    textShadow: gold ? '0 0 30px var(--gold)' : '0 0 30px var(--cyan)',
  }

  const ghost = {
    position:  'absolute',
    top: 0, left: 0,
    fontFamily: 'var(--font-display)',
    fontWeight: 900,
    fontSize:   size,
    letterSpacing: 4,
    lineHeight: 1,
  }

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <span style={base}>{text}</span>

      {glitching && (
        <>
          <span style={{ ...ghost, color: '#ff0055', opacity: 0.75, animation: 'glitchR 0.18s steps(1) infinite' }}>
            {text}
          </span>
          <span style={{ ...ghost, color: '#00ff88', opacity: 0.75, animation: 'glitchB 0.18s steps(1) infinite' }}>
            {text}
          </span>
        </>
      )}
    </div>
  )
}
