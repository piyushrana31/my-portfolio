import React, { useState } from 'react'
import SectionTitle    from '../shared/SectionTitle'
import RevealBox       from '../shared/RevealBox'
import { achievements } from '../../data/portfolioData'
import styles from './Achievements.module.css'

function AchievementCard({ item, delay }) {
  const [hovered, setHovered] = useState(false)

  return (
    <RevealBox delay={delay}>
      <div
        className={styles.card}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          borderColor: `${item.color}44`,
          background:  `radial-gradient(circle at top left, ${item.color}10, var(--bg))`,
          transform:   hovered ? 'translateY(-12px) scale(1.03)' : 'none',
          boxShadow:   hovered ? `0 28px 65px ${item.color}28` : 'none',
        }}
      >
        {/* Outer ring glow on hover */}
        {hovered && (
          <div
            className={styles.hoverRing}
            style={{ borderColor: item.color }}
          />
        )}

        <div
          className={styles.iconWrap}
          style={{ boxShadow: hovered ? `0 0 30px ${item.color}` : `0 0 14px ${item.color}55` }}
        >
          <span className={styles.icon}>{item.icon}</span>
        </div>

        <h3
          className={`orbitron ${styles.title}`}
          style={{ color: item.color }}
        >
          {item.title}
        </h3>

        <p className={styles.desc}>{item.desc}</p>

        <div
          className={styles.accentLine}
          style={{
            background: `linear-gradient(to right, ${item.color}, transparent)`,
            opacity: hovered ? 1 : 0.25,
          }}
        />
      </div>
    </RevealBox>
  )
}

export default function Achievements() {
  return (
    <section id="achievements" className="section section--alt">
      <SectionTitle label="MY WINS" title="Achievements" />

      <div className={styles.grid}>
        {achievements.map((a, i) => (
          <AchievementCard key={a.title} item={a} delay={i * 0.12} />
        ))}
      </div>
    </section>
  )
}
