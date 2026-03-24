import React, { useState } from 'react'
import SectionTitle    from '../shared/SectionTitle'
import RevealBox       from '../shared/RevealBox'
import { certificates } from '../../data/portfolioData'
import styles from './Certificates.module.css'

function CertCard({ cert, delay }) {
  const [hovered, setHovered] = useState(false)

  return (
    <RevealBox delay={delay}>
      <div
        className={styles.card}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          borderColor: `${cert.color}44`,
          background:  `radial-gradient(140% 140% at 0% 0%, ${cert.color}0c, var(--bg))`,
          transform:   hovered ? 'translateY(-8px)' : 'none',
          boxShadow:   hovered ? `0 24px 55px ${cert.color}22` : 'none',
        }}
      >
        {/* Holographic shine sweep */}
        <div className={styles.shine} style={{ animationDelay: `${delay * 2}s` }} />

        {/* Verified ribbon */}
        <div className={styles.ribbon} style={{ background: cert.color }}>
          <span className="mono">VERIFIED</span>
        </div>

        <span className={styles.certIcon}>{cert.icon}</span>

        <p className={`mono ${styles.date}`} style={{ color: cert.color }}>
          {cert.date}
        </p>

        <h3 className={styles.certName}>{cert.name}</h3>

        <p className={styles.certBy}>
          by <span style={{ color: cert.color, fontWeight: 700 }}>{cert.by}</span>
        </p>

        {/* Bottom glow line */}
        <div
          className={styles.bottomLine}
          style={{
            background: `linear-gradient(to right, transparent, ${cert.color}, transparent)`,
            opacity: hovered ? 1 : 0.3,
          }}
        />

        {/* Hover Image Overlay */}
        <div
          className={styles.certImageOverlay}
          style={{
            opacity: hovered ? 1 : 0,
            visibility: hovered ? 'visible' : 'hidden',
          }}
        >
          <a href={cert.show} target="_blank" rel="noreferrer" style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'none' }} data-hover>
            <img src={cert.image} alt={cert.name} className={styles.overlayImg} />
          </a>
        </div>
      </div>
    </RevealBox>
  )
}

export default function Certificates() {
  return (
    <section id="certificates" className="section">
      <SectionTitle label="CREDENTIALS" title="Certificates" />

      <div className={styles.grid}>
        {certificates.map((cert, i) => (
          <CertCard key={cert.name} cert={cert} delay={i * 0.1} />
        ))}
      </div>
    </section>
  )
}
