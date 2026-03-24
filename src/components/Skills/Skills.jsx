import React, { useState } from 'react'
import SectionTitle from '../shared/SectionTitle'
import RevealBox    from '../shared/RevealBox'
import { skills }   from '../../data/portfolioData'
import styles from './Skills.module.css'

function SkillChip({ name, color }) {
  const [hovered, setHovered] = useState(false)
  return (
    <span
      className={`mono ${styles.chip}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderColor: `${color}55`,
        color:       hovered ? '#020408' : color,
        background:  hovered ? color     : `${color}0e`,
        boxShadow:   hovered ? `0 0 18px ${color}` : 'none',
      }}
    >
      {name}
    </span>
  )
}

function SkillCard({ group, delay }) {
  const [hovered, setHovered] = useState(false)
  return (
    <RevealBox delay={delay}>
      <div
        className={`glass-card ${styles.card}`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          transform:  hovered ? 'translateY(-9px) scale(1.02)' : 'none',
          boxShadow:  hovered ? `0 24px 60px ${group.color}22` : 'none',
          transition: 'transform 0.35s, box-shadow 0.35s',
        }}
      >
        {/* Corner glow */}
        <div
          className={styles.cornerGlow}
          style={{ background: `radial-gradient(circle, ${group.color}20, transparent)` }}
        />

        {/* Header */}
        <div className={styles.cardHeader}>
          <span className={styles.icon}>{group.icon}</span>
          <h3
            className={`orbitron ${styles.groupName}`}
            style={{ color: group.color }}
          >
            {group.name}
          </h3>
        </div>

        {/* Chips */}
        <div className={styles.chips}>
          {group.items.map(item => (
            <SkillChip key={item} name={item} color={group.color} />
          ))}
        </div>

        {/* Bottom accent bar */}
        <div
          className={styles.accentBar}
          style={{
            background: `linear-gradient(to right, ${group.color}, transparent)`,
            opacity: hovered ? 1 : 0.3,
          }}
        />
      </div>
    </RevealBox>
  )
}

export default function Skills() {
  return (
    <section id="skills" className={`section section--alt`}>
      <SectionTitle label="TECH ARSENAL" title="Skills & Stack" />

      <div className={styles.grid}>
        {skills.map((group, i) => (
          <SkillCard key={group.name} group={group} delay={i * 0.08} />
        ))}
      </div>
    </section>
  )
}
