import { useState, useEffect, useRef } from 'react'

// ─── useScrollReveal ─────────────────────────────────────────────
// Returns true once the ref'd element enters the viewport
export function useScrollReveal(threshold = 0.2, repeat = false) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { 
        if (entry.isIntersecting) {
            setVisible(true)
        } else if (repeat) {
            setVisible(false)
        }
      },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold, repeat])

  return { ref, visible }
}

// ─── useScrollVelocity ───────────────────────────────────────────
// Returns a 0–1 normalised velocity value based on scroll speed
export function useScrollVelocity() {
  const [velocity, setVelocity] = useState(0)
  const last = useRef({ y: 0, t: Date.now() })

  useEffect(() => {
    let timeout
    const handler = () => {
      const now = Date.now()
      const dy  = Math.abs(window.scrollY - last.current.y)
      const dt  = Math.max(now - last.current.t, 1)
      setVelocity(Math.min((dy / dt) * 20, 1))
      last.current = { y: window.scrollY, t: now }
      clearTimeout(timeout)
      timeout = setTimeout(() => setVelocity(0), 150)
    }
    window.addEventListener('scroll', handler, { passive: true })
    return () => {
      window.removeEventListener('scroll', handler)
      clearTimeout(timeout)
    }
  }, [])

  return velocity
}

// ─── useActiveSection ────────────────────────────────────────────
// Tracks which section id is currently in view
export function useActiveSection(sectionIds) {
  const [active, setActive] = useState(sectionIds[0])

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id) })
      },
      { threshold: 0.35 }
    )
    sectionIds.forEach(id => {
      const el = document.getElementById(id)
      if (el) obs.observe(el)
    })
    return () => obs.disconnect()
  }, [])

  return active
}

// ─── useTypingEffect ─────────────────────────────────────────────
// Cycles through an array of strings with a typewriter effect
export function useTypingEffect(words, typingSpeed = 80, deletingSpeed = 40, pauseMs = 1800) {
  const [displayed, setDisplayed] = useState('')
  const wordIndex = useRef(0)
  const charIndex = useRef(0)
  const direction = useRef(1) // 1 = typing, -1 = deleting

  useEffect(() => {
    let timeout
    const tick = () => {
      const word = words[wordIndex.current]
      if (direction.current === 1) {
        charIndex.current++
        setDisplayed(word.slice(0, charIndex.current))
        if (charIndex.current >= word.length) {
          direction.current = -1
          timeout = setTimeout(tick, pauseMs)
          return
        }
      } else {
        charIndex.current--
        setDisplayed(word.slice(0, charIndex.current))
        if (charIndex.current <= 0) {
          direction.current = 1
          wordIndex.current = (wordIndex.current + 1) % words.length
        }
      }
      timeout = setTimeout(tick, direction.current === 1 ? typingSpeed : deletingSpeed)
    }
    timeout = setTimeout(tick, 500)
    return () => clearTimeout(timeout)
  }, [])

  return displayed
}

// ─── useMousePosition ────────────────────────────────────────────
// Returns live { x, y } mouse coordinates
export function useMousePosition() {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  useEffect(() => {
    const h = e => setPos({ x: e.clientX, y: e.clientY })
    window.addEventListener('mousemove', h)
    return () => window.removeEventListener('mousemove', h)
  }, [])
  return pos
}
