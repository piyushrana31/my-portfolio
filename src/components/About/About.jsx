import React, { useState } from 'react'
import SectionTitle from '../shared/SectionTitle'
import RevealBox    from '../shared/RevealBox'
import { personal } from '../../data/portfolioData'
import styles from './About.module.css'
import { useScrollReveal } from '../../hooks'

// Animated avatar with rotating orbital rings
function Avatar({ contacts }) {
  const { ref, visible } = useScrollReveal(0.2, true)
  const [showPic3, setShowPic3] = useState(false)

  return (
    <div 
      ref={ref}
      className={styles.avatarWrapper}
      style={{
        opacity: visible ? 1 : 0,
        // Fly in from the right/top and scale down into position
        transform: visible ? 'translate(0, 0) scale(1)' : 'translate(30vw, -120px) scale(1.6)',
        transition: 'opacity 1.2s ease, transform 1.2s cubic-bezier(0.2, 0.9, 0.3, 1.1)',
      }}
    >
      {/* Orbital rings */}
      {[0, 1, 2].map(i => (
        <div
          key={i}
          className={styles.ring}
          style={{
            width:     340 + i * 48,
            height:    340 + i * 48,
            marginTop: -(170 + i * 24),
            marginLeft:-(170 + i * 24),
            animationDuration: `${9 + i * 3}s`,
            animationDirection: i % 2 ? 'reverse' : 'normal',
            borderColor: i % 2
              ? 'rgba(var(--cyan-rgb),0.12)'
              : 'rgba(var(--gold-rgb),0.1)',
          }}
        >
          {/* Dot on ring */}
          <div
            className={styles.ringDot}
            style={{ background: i % 2 ? 'var(--cyan)' : 'var(--gold)', boxShadow: `0 0 10px ${i % 2 ? 'var(--cyan)' : 'var(--gold)'}` }}
          />
        </div>
      ))}

      {/* Core orb container with 3D Flip */}
      <div 
        className={styles.orbFlipContainer}
        onDoubleClick={() => setShowPic3(prev => !prev)}
        style={{ cursor: 'pointer' }}
      >
        {/* Front (Photo 1 or Photo 3 on double click) */}
        <div className={`${styles.orbFace} ${styles.orbFront}`}>
          <div className={styles.pulseRing} />
          <img 
            src={showPic3 ? "/portfolioPic3.jpeg" : "/portfolioPic.jpeg"} 
            alt="Piyush Rana" 
            style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', zIndex: 0 }} 
          />
        </div>
        
        {/* Back (Photo 2 on hover) */}
        <div className={`${styles.orbFace} ${styles.orbBack}`} style={{ padding: 0 }}>
          <img 
            src="/portfolioPic2.jpeg" 
            alt="Piyush Rana Alternate" 
            style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', zIndex: 0 }} 
          />
        </div>
      </div>
    </div>
  )
}

export default function About() {
  const contacts = [
    { icon: '📧', label: personal.email    },
    { icon: '🔗', label: 'linkedin.com/in/piyush-rana31' },
    { icon: '🐙', label: 'github.com/piyushrana31' },
    { icon: '📍', label: personal.university },
  ]

  return (
    <section id="about" className="section">
      <SectionTitle label="WHO AM I" title="About Me" />

      <div className={styles.grid}>
        {/* Avatar */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Avatar contacts={contacts} />
        </div>

        {/* Text content */}
        <div className={styles.textCol}>
          {personal.bio.map((para, i) => (
            <RevealBox key={i} delay={0.1 + i * 0.12}>
              <p className={styles.para}>{para}</p>
            </RevealBox>
          ))}

          {/* Contact chips */}
          <RevealBox delay={0.45}>
            <div className={styles.chips}>
              {contacts.map(({ icon, label }) => (
                <span key={label} className={`mono ${styles.chip}`}>
                  {icon} {label}
                </span>
              ))}
            </div>
          </RevealBox>
        </div>
      </div>
    </section>
  )
}
