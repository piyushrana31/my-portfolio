import React from 'react'
import GlitchText from '../shared/GlitchText'
import HackerRoom from './HackerRoom'
import RevealBox from '../shared/RevealBox'
import { useTypingEffect } from '../../hooks'
import { personal } from '../../data/portfolioData'
import styles from './Hero.module.css'

export default function Hero() {
  const typed = useTypingEffect(personal.roles)

  const scrollTo = id =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="home" className={`section ${styles.hero}`}>
      {/* Ambient blobs */}
      <div className={styles.blob1} />
      <div className={styles.blob2} />

      <div className={styles.heroGrid}>
        <div className={styles.content}>
          {/* Pre-label */}
          <RevealBox delay={0.05}>
            <p className={`mono ${styles.preLabel}`}>&gt; HELLO WORLD! I AM</p>
          </RevealBox>

          {/* Glitch name */}
          <RevealBox delay={0.15}>
            <GlitchText text="PIYUSH" size={78} />
            <GlitchText text="RANA" size={78} gold />
          </RevealBox>

          {/* Typing role */}
          <RevealBox delay={0.3}>
            <p className={styles.roleText}>
              <span style={{ color: 'var(--cyan)' }}>{'< '}</span>
              {typed}
              <span className={styles.cursor}>|</span>
              <span style={{ color: 'var(--cyan)' }}>{' />'}</span>
            </p>
          </RevealBox>

          {/* Bio */}
          <RevealBox delay={0.42}>
            <p className={styles.bio}>
              I architect full-stack systems where performance meets precision and ideas evolve into seamless digital experiences.
            </p>
          </RevealBox>

          {/* CTA buttons */}
          <RevealBox delay={0.55} style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <button
              data-hover
              className={styles.btnPrimary}
              onClick={() => scrollTo('projects')}
            >
              VIEW PROJECTS
            </button>
            <button
              data-hover
              className={styles.btnSecondary}
              onClick={() => scrollTo('contact')}
            >
              CONTACT ME
            </button>
          </RevealBox>

          {/* Stats */}
          <RevealBox delay={0.7} style={{ display: 'flex', gap: 36, flexWrap: 'wrap', marginTop: 48 }}>
            {personal.stats.map(({ value, label }) => (
              <div key={label} className={styles.stat}>
                <span className={`orbitron ${styles.statValue}`}>{value}</span>
                <span className={`mono ${styles.statLabel}`}>{label}</span>
              </div>
            ))}
          </RevealBox>
        </div>

        {/* Hacker Room Model */}
        <div className={styles.hackerWrapper}>
          <RevealBox delay={0.8}>
            <HackerRoom />
          </RevealBox>
        </div>
      </div>
    </section>
  )
}
