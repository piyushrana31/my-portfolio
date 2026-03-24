import React from 'react'
import SectionTitle from '../shared/SectionTitle'
import RevealBox    from '../shared/RevealBox'
import { education } from '../../data/portfolioData'
import styles from './Education.module.css'

function EducationCard({ item, index }) {
  return (
    <RevealBox delay={index * 0.15} className={styles.row}>
      {/* Timeline node */}
      <div className={styles.node} style={{ borderColor: item.color, boxShadow: `0 0 20px ${item.color}55` }}>
        <span className={styles.nodeIcon}>{item.icon}</span>
        {/* Pulse */}
        <div className={styles.nodePulse} style={{ borderColor: item.color }} />
      </div>

      {/* Card */}
      <div className={`glass-card ${styles.card}`}>
        {/* Corner accent */}
        <div
          className={styles.cardAccent}
          style={{ background: `linear-gradient(135deg, ${item.color}18, transparent)` }}
        />

        <p className={`mono ${styles.year}`} style={{ color: item.color }}>
          {item.year}
        </p>

        <h3 className={`orbitron ${styles.inst}`} style={{ color: item.color }}>
          {item.inst}
        </h3>

        <p className={styles.loc}>{item.loc}</p>
        <p className={styles.degree}>{item.degree}</p>

        <span
          className={`mono ${styles.score}`}
          style={{
            borderColor: `${item.color}55`,
            color:       item.color,
            background:  `${item.color}12`,
          }}
        >
          {item.score}
        </span>
      </div>
    </RevealBox>
  )
}

export default function Education() {
  return (
    <section id="education" className="section">
      <SectionTitle label="ACADEMIC JOURNEY" title="Education" />

      <div className={styles.timeline}>
        {/* Vertical line */}
        <div className={styles.line} />

        {education.map((item, i) => (
          <EducationCard key={item.inst} item={item} index={i} />
        ))}
      </div>
    </section>
  )
}
