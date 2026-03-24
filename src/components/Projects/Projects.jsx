import React from 'react'
import SectionTitle from '../shared/SectionTitle'
import RevealBox from '../shared/RevealBox'
import { projects } from '../../data/portfolioData'
import styles from './Projects.module.css'

function ProjectCard({ proj, delay }) {
  return (
    <RevealBox delay={delay}>
      <div className={styles.cardContainer}>
        <div className={styles.flipWrapper}>
          {/* ── Front ── */}
          <div className={`glass-card ${styles.face} ${styles.front}`}>
            {/* Glow blob */}
            <div
              className={styles.blob}
              style={{ background: `radial-gradient(circle, ${proj.color}20, transparent)` }}
            />

            <span className={styles.projIcon}>{proj.icon}</span>

            <span className={`mono ${styles.period}`} style={{ color: proj.color }}>
              {proj.period}
            </span>

            <h3 className={`orbitron ${styles.projName}`} style={{ color: proj.color }}>
              {proj.name}
            </h3>

            <p className={styles.projDesc}>{proj.desc}</p>

            <div className={styles.techRow}>
              {proj.tech.slice(0, 4).map(t => (
                <span
                  key={t}
                  className={`mono ${styles.techBadge}`}
                  style={{ borderColor: `${proj.color}44`, color: proj.color, background: `${proj.color}10` }}
                >
                  {t}
                </span>
              ))}
            </div>

            <p className={`mono ${styles.flipHint}`}>HOVER TO EXPLORE →</p>
          </div>

          {/* ── Back ── */}
          <div
            className={`${styles.face} ${styles.back}`}
            style={{
              background: `radial-gradient(135deg, ${proj.color}18, var(--bg))`,
              borderColor: `${proj.color}66`,
            }}
          >
            <h3 className={`orbitron ${styles.backTitle}`} style={{ color: proj.color, textShadow: `0 0 20px ${proj.color}` }}>
              {proj.name}
            </h3>

            <p className={styles.backDesc}>{proj.fullDesc}</p>

            <div className={styles.techRowBack}>
              {proj.tech.map(t => (
                <span
                  key={t}
                  className={`mono ${styles.techBadgeFull}`}
                  style={{ background: proj.color, color: '#020408' }}
                >
                  {t}
                </span>
              ))}
            </div>

            <div className={styles.backLinks}>
              <a
                href={proj.github}
                target="_blank"
                rel="noreferrer"
                data-hover
                className={`orbitron ${styles.backBtn}`}
                style={{ borderColor: proj.color, color: proj.color, boxShadow: `0 0 15px ${proj.color}44` }}
              >
                🐙 GITHUB
              </a>
            </div>
          </div>
        </div>
      </div>
    </RevealBox>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="section section--alt">
      <SectionTitle label="WHAT I BUILT" title="Projects" />

      <div className={styles.grid}>
        {projects.map((p, i) => (
          <ProjectCard key={p.name} proj={p} delay={i * 0.1} />
        ))}
      </div>
    </section>
  )
}
