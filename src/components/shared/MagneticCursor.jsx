import React, { useRef, useEffect } from 'react'

/**
 * MagneticCursor
 * Renders a small dot that follows the mouse exactly, plus
 * a larger ring that lags behind for a magnetic feel.
 * Expands + turns gold when hovering interactive elements.
 */
export default function MagneticCursor() {
  const dotRef  = useRef(null)
  const ringRef = useRef(null)

  // Current mouse position (snapped)
  const mouse = useRef({ x: 0, y: 0 })
  // Lagged ring position
  const ring  = useRef({ x: 0, y: 0 })

  useEffect(() => {
    // Track exact mouse pos
    const onMove = e => {
      mouse.current = { x: e.clientX, y: e.clientY }
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX - 5}px, ${e.clientY - 5}px)`
      }
    }
    window.addEventListener('mousemove', onMove)

    // RAF loop for the lagged ring
    let raf
    const animate = () => {
      ring.current.x += (mouse.current.x - ring.current.x) * 0.75
      ring.current.y += (mouse.current.y - ring.current.y) * 0.75
      if (ringRef.current) {
        ringRef.current.style.transform =
          `translate(${ring.current.x - 20}px, ${ring.current.y - 20}px)`
      }
      raf = requestAnimationFrame(animate)
    }
    raf = requestAnimationFrame(animate)

    // Hover states on interactive elements
    const addHover = e => {
      if (e.target.closest('a, button, [data-hover]') && ringRef.current) {
        ringRef.current.dataset.hovered = 'true'
        ringRef.current.style.width       = '60px'
        ringRef.current.style.height      = '60px'
        ringRef.current.style.borderColor = 'var(--gold)'
        ringRef.current.style.marginLeft  = '-10px'
        ringRef.current.style.marginTop   = '-10px'
      }
    }
    const removeHover = () => {
      if (ringRef.current) {
        delete ringRef.current.dataset.hovered
        ringRef.current.style.width       = '40px'
        ringRef.current.style.height      = '40px'
        ringRef.current.style.borderColor = 'var(--cyan)'
        ringRef.current.style.marginLeft  = '0'
        ringRef.current.style.marginTop   = '0'
      }
    }

    document.addEventListener('mouseover', addHover)
    document.addEventListener('mouseout',  removeHover)

    return () => {
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', addHover)
      document.removeEventListener('mouseout',  removeHover)
      cancelAnimationFrame(raf)
    }
  }, [])

  const shared = {
    position:      'fixed',
    top:           0,
    left:          0,
    pointerEvents: 'none',
    zIndex:        99999,
  }

  return (
    <>
      {/* Inner dot */}
      <div
        ref={dotRef}
        style={{
          ...shared,
          width:      10,
          height:     10,
          borderRadius: '50%',
          background: 'var(--cyan)',
          mixBlendMode: 'difference',
        }}
      />

      {/* Outer lagged ring */}
      <div
        ref={ringRef}
        style={{
          ...shared,
          width:        40,
          height:       40,
          borderRadius: '50%',
          border:       '1.5px solid var(--cyan)',
          transition:   'width 0.3s, height 0.3s, border-color 0.3s, margin 0.3s',
        }}
      />
    </>
  )
}
