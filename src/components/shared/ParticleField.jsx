import React, { useRef, useEffect } from 'react'
import { useTheme } from '../../context/ThemeContext'

/**
 * ParticleField
 * Full-viewport canvas with floating particles + constellation lines.
 * Particles repel from the mouse cursor.
 */
export default function ParticleField({ count = 80 }) {
  const canvasRef = useRef(null)
  const { dark } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    const cyanRgb = dark ? '0,245,255' : '0,123,181'

    const resize = () => {
      canvas.width  = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()

    // Build particles
    const particles = Array.from({ length: count }, () => ({
      x:  Math.random() * canvas.width,
      y:  Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r:  Math.random() * 1.4 + 0.5,
      a:  Math.random() * 0.6 + 0.1,
    }))

    const mouse = { x: -999, y: -999 }
    const onMouseMove = e => { mouse.x = e.clientX; mouse.y = e.clientY }
    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('resize', resize)

    let raf
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach(p => {
        // Mouse repulsion
        const dx   = mouse.x - p.x
        const dy   = mouse.y - p.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < 130) {
          p.vx -= (dx / dist) * 0.06
          p.vy -= (dy / dist) * 0.06
        }

        // Friction & movement
        p.vx *= 0.99
        p.vy *= 0.99
        p.x  += p.vx
        p.y  += p.vy

        // Wrap edges
        if (p.x < 0)             p.x = canvas.width
        if (p.x > canvas.width)  p.x = 0
        if (p.y < 0)             p.y = canvas.height
        if (p.y > canvas.height) p.y = 0

        // Draw dot
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${cyanRgb},${p.a * 0.55})`
        ctx.fill()
      })

      // Constellation lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const d  = Math.sqrt(dx * dx + dy * dy)
          if (d < 110) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(${cyanRgb},${(1 - d / 110) * 0.14})`
            ctx.lineWidth   = 0.5
            ctx.stroke()
          }
        }
      }

      raf = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('resize', resize)
    }
  }, [count, dark])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position:      'fixed',
        top:           0,
        left:          0,
        pointerEvents: 'none',
        zIndex:        0,
        opacity:       0.75,
      }}
    />
  )
}
