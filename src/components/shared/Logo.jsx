import React from 'react'

export default function Logo({ size = 'md' }) {
  const iconSize = size === 'lg' ? 64 : 36
  const textSize = size === 'lg' ? 28 : 18

  return (
    <div
      style={{ display: 'flex', alignItems: 'center', gap: size === 'lg' ? 16 : 10, cursor: 'none' }}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      {/* Isometric 3D Cube Icon */}
      <div
        style={{
          position: 'relative',
          width: iconSize,
          height: iconSize,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }}
        data-hover
      >
        <svg
          viewBox="0 0 100 100"
          width="100%"
          height="100%"
          style={{
            overflow: 'visible',
            filter: 'drop-shadow(0 0 12px rgba(var(--cyan-rgb), 0.4))'
          }}
        >
          {/* Ambient core glow */}
          <circle cx="50" cy="50" r="28" fill="var(--cyan)" opacity="0.15" />

          {/* Top face */}
          <polygon
            points="50,18 82,36 50,54 18,36"
            fill="var(--bg)"
            stroke="var(--cyan)"
            strokeWidth="3.5"
            strokeLinejoin="round"
          />

          {/* Left face */}
          <polygon
            points="18,36 50,54 50,86 18,68"
            fill="rgba(var(--cyan-rgb),0.15)"
            stroke="var(--cyan)"
            strokeWidth="3.5"
            strokeLinejoin="round"
          />

          {/* Right face (Gold accent) */}
          <polygon
            points="82,36 82,68 50,86 50,54"
            fill="rgba(var(--gold-rgb),0.1)"
            stroke="var(--gold)"
            strokeWidth="3.5"
            strokeLinejoin="round"
          />

          {/* Floating inner core */}
          <polygon
            points="50,30 62,37 50,44 38,37"
            fill="var(--cyan)"
            style={{ transformOrigin: '50px 37px', animation: 'float 3s ease-in-out infinite' }}
          />
        </svg>
      </div>

      {/* Wordmark */}
      <span
        style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 800,
          fontSize: textSize,
          color: 'var(--text-h)',
          letterSpacing: 3,
        }}
        data-hover
      >
        RANA<span style={{ color: 'var(--gold)' }}>.</span>DEV
      </span>
    </div>
  )
}
