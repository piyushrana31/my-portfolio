import React, { useState } from 'react'
import SectionTitle from '../shared/SectionTitle'
import RevealBox    from '../shared/RevealBox'
import { personal } from '../../data/portfolioData'
import styles from './Contact.module.css'

const CONTACT_ITEMS = [
  { icon: '📧', label: 'Email',    value: personal.email,    href: `mailto:${personal.email}` },
  { icon: '📱', label: 'Mobile',   value: personal.mobile,   href: `tel:${personal.mobile}` },
  { icon: '💼', label: 'LinkedIn', value: 'piyush-rana31',   href: personal.linkedin },
  { icon: '🐙', label: 'GitHub',   value: 'piyushrana31',    href: personal.github },
]

function ContactInfo() {
  return (
    <RevealBox delay={0.1}>
      <h3 className={`orbitron ${styles.infoTitle}`}>LET'S BUILD SOMETHING</h3>
      <p className={styles.infoSub}>
        Open for internships, collaborations, and exciting projects. Drop a message — I respond faster than my code compiles.
      </p>

      <div className={styles.infoList}>
        {CONTACT_ITEMS.map(({ icon, label, value, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noreferrer"
            data-hover
            className={styles.infoRow}
          >
            <span className={styles.infoIcon}>{icon}</span>
            <div>
              <p className={`mono ${styles.infoLabel}`}>{label}</p>
              <p className={styles.infoValue}>{value}</p>
            </div>
          </a>
        ))}
      </div>
    </RevealBox>
  )
}

function ContactForm() {
  const [form, setForm]   = useState({ name: '', email: '', message: '' })
  const [sent, setSent]   = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = e =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => { setLoading(false); setSent(true) }, 1200)
  }

  if (sent) {
    return (
      <RevealBox delay={0.1}>
        <div className={styles.successBox}>
          <span className={styles.successIcon}>🚀</span>
          <h3 className={`orbitron ${styles.successTitle}`}>MESSAGE LAUNCHED!</h3>
          <p className={styles.successSub}>
            Your message is orbiting my inbox. I'll catch it soon!
          </p>
          <button
            data-hover
            className={styles.resetBtn}
            onClick={() => { setSent(false); setForm({ name: '', email: '', message: '' }) }}
          >
            SEND ANOTHER
          </button>
        </div>
      </RevealBox>
    )
  }

  return (
    <RevealBox delay={0.2}>
      <form className={styles.form} onSubmit={handleSubmit}>
        {['name', 'email'].map(field => (
          <input
            key={field}
            name={field}
            type={field === 'email' ? 'email' : 'text'}
            placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
            value={form[field]}
            onChange={handleChange}
            required
            className={styles.input}
          />
        ))}

        <textarea
          name="message"
          placeholder="Message..."
          value={form.message}
          onChange={handleChange}
          required
          rows={5}
          className={`${styles.input} ${styles.textarea}`}
        />

        <button
          type="submit"
          data-hover
          className={styles.submitBtn}
          disabled={loading}
        >
          {loading ? 'LAUNCHING...' : '🚀 LAUNCH MESSAGE'}
        </button>
      </form>
    </RevealBox>
  )
}

export default function Contact() {
  return (
    <section id="contact" className="section">
      <SectionTitle label="GET IN TOUCH" title="Contact Me" />

      <div className={styles.grid}>
        <ContactInfo />
        <ContactForm />
      </div>
    </section>
  )
}
