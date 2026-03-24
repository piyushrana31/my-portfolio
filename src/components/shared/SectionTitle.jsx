import React from 'react'
import { useScrollReveal } from '../../hooks'

/**
 * SectionTitle – animated section heading with label + divider.
 * Props:
 *   label – small monospace label (e.g. "WHO AM I")
 *   title – main heading text; first word coloured cyan, rest default
 */
export default function SectionTitle({ label, title }) {
  const { ref, visible } = useScrollReveal(0.3)
  const [first, ...rest] = title.split(' ')

  return (
    <div ref={ref} style={{ marginBottom: 64, textAlign: 'center' }}>
      {/* Label */}
      <p
        className="mono"
        style={{
          fontSize: 11,
          color: 'var(--gold)',
          letterSpacing: 6,
          marginBottom: 14,
          opacity:    visible ? 1 : 0,
          transform:  visible ? 'translateY(0)' : 'translateY(18px)',
          transition: 'opacity 0.6s, transform 0.6s',
        }}
      >
        {`// ${label}`}
      </p>

      {/* Heading */}
      <h2
        className="orbitron"
        style={{
          fontWeight: 900,
          fontSize: 'clamp(26px, 4vw, 50px)',
          opacity:    visible ? 1 : 0,
          transform:  visible ? 'translateY(0)' : 'translateY(24px)',
          transition: 'opacity 0.7s 0.1s, transform 0.7s 0.1s',
        }}
      >
        <span style={{ color: 'var(--cyan)' }}>{first} </span>
        <span style={{ color: 'var(--text)' }}>{rest.join(' ')}</span>
      </h2>

      {/* Divider */}
      <div
        style={{
          width:      visible ? 80 : 0,
          height:     2,
          background: 'linear-gradient(to right, var(--cyan), var(--gold))',
          margin:     '18px auto 0',
          borderRadius: 2,
          transition: 'width 0.8s 0.3s ease',
          boxShadow:  '0 0 12px rgba(var(--cyan-rgb),0.5)',
        }}
      />
    </div>
  )
}
