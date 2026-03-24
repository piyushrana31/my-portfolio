import React from 'react'
import Logo from '../shared/Logo'
import { personal } from '../../data/portfolioData'
import styles from './Footer.module.css'

const SOCIAL = [
  { label: 'GitHub',   href: personal.github   },
  { label: 'LinkedIn', href: personal.linkedin  },
  { label: 'Email',    href: `mailto:${personal.email}` },
]

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <Logo />

        <p className={`mono ${styles.copy}`}>
          {'</>'} Crafted with{' '}
          <span style={{ color: 'var(--cyan)' }}>React</span> &amp;{' '}
          <span style={{ color: 'var(--gold)' }}>passion</span>{' '}
          by Piyush Rana
        </p>

        <div className={styles.links}>
          {SOCIAL.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              data-hover
              className={`mono ${styles.link}`}
            >
              {label}
            </a>
          ))}
        </div>
      </div>

      <p className={`mono ${styles.bottom}`}>© 2025 RANA.DEV — All rights reserved</p>
    </footer>
  )
}
