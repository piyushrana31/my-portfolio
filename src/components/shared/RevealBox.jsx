import React from 'react'
import { useScrollReveal } from '../../hooks'

/**
 * RevealBox – wraps children in a scroll-triggered fade+slide animation.
 * Props:
 *   delay  – animation delay in seconds (default 0)
 *   style  – extra inline styles on the wrapper
 *   className
 */
export default function RevealBox({ children, delay = 0, style = {}, className = '' }) {
  const { ref, visible } = useScrollReveal()

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity:    visible ? 1 : 0,
        transform:  visible ? 'translateY(0) scale(1)' : 'translateY(56px) scale(0.96)',
        transition: `opacity 0.75s ${delay}s ease, transform 0.75s ${delay}s cubic-bezier(0.34,1.2,0.64,1)`,
        ...style,
      }}
    >
      {children}
    </div>
  )
}
