import { useState } from 'react'
import AiHeader from '../components/AiHeader'
import AiFooter from '../components/AiFooter'
import '../styles/ai-contact.css'

const faqs = [
  { q: 'Is this content suitable for beginners?', a: 'Yes! Our content is designed for learners at all levels. We start with the basics and gradually progress to more advanced topics.' },
  { q: 'Are the resources free to use?', a: 'Yes, all educational content on this website is completely free to access. We believe in making AI education accessible to everyone.' },
  { q: 'How often is the content updated?', a: 'We regularly update our content to reflect the latest developments in AI. The field evolves rapidly and we strive to keep resources current.' },
  { q: 'Can I suggest new topics or improvements?', a: 'Absolutely! We welcome suggestions for new topics, improvements to existing content, or any other feedback via the contact form.' },
]

export default function AiContact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(`Thank you, ${form.name}! We'll get back to you soon.`)
    setForm({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <>
      <AiHeader />

      <section className="contact-hero">
        <span className="badge badge-cyan">Contact Us</span>
        <h1>Get in <span className="grad">Touch</span></h1>
        <p>Have questions, suggestions, or feedback? We'd love to hear from you.</p>
      </section>

      <section className="contact-body">
        <div className="container">
          <div className="contact-layout">
            {/* Info */}
            <div className="contact-info-panel">
              <h2>Contact <span className="grad">Information</span></h2>
              {[
                { icon: 'fa-envelope', cls: 'iri-1', title: 'Email', val: 'techinmystyle@gmail.com' },
                { icon: 'fa-map-marker-alt', cls: 'iri-2', title: 'Location', val: 'Andhra Pradesh, India' },
                { icon: 'fa-clock', cls: 'iri-3', title: 'Response Time', val: 'We typically respond within 24–48 hours' },
              ].map((r, i) => (
                <div className="info-row" key={i}>
                  <div className={`info-row-icon ${r.cls}`}><i className={`fas ${r.icon}`}></i></div>
                  <div className="info-row-text">
                    <h4>{r.title}</h4>
                    <p>{r.val}</p>
                  </div>
                </div>
              ))}

              <div className="connect-section">
                <h4>Connect With Us</h4>
                <div className="connect-links">
                  {[
                    { icon: 'fa-telegram', label: 'Telegram', href: 'https://t.me/Tech_in_my_style_bot' },
                    { icon: 'fa-instagram', label: 'Instagram', href: 'https://www.instagram.com/techinmystyle' },
                    { icon: 'fa-whatsapp', label: 'WhatsApp', href: 'https://whatsapp.com/channel/0029VbAZrCD5fM5aOU10Av0d' },
                    { icon: 'fa-youtube', label: 'YouTube', href: 'https://www.youtube.com/@TECHINMYSTYLE' },
                  ].map((s, i) => (
                    <a key={i} href={s.href} className="connect-link" target="_blank" rel="noopener noreferrer">
                      <i className={`fab ${s.icon}`}></i> {s.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="contact-form-panel">
              <h2>Send Us a <span className="grad">Message</span></h2>
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-field">
                    <label>Name</label>
                    <input type="text" placeholder="Your name" required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
                  </div>
                  <div className="form-field">
                    <label>Email</label>
                    <input type="email" placeholder="your@email.com" required value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
                  </div>
                </div>
                <div className="form-field">
                  <label>Subject</label>
                  <input type="text" placeholder="What's this about?" required value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })} />
                </div>
                <div className="form-field">
                  <label>Message</label>
                  <textarea placeholder="Tell us more..." required value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} />
                </div>
                <button type="submit" className="btn btn-primary form-submit">
                  <i className="fas fa-paper-plane"></i> Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-section">
        <div className="container">
          <div className="section-label"><span className="badge badge-purple">FAQ</span></div>
          <h2 className="section-title">Frequently Asked <span className="grad">Questions</span></h2>
          <div className="faq-grid">
            {faqs.map((f, i) => (
              <div className={`faq-card${openFaq === i ? ' open' : ''}`} key={i}>
                <div className="faq-q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <h3>{f.q}</h3>
                  <div className="faq-chevron"><i className="fas fa-chevron-down"></i></div>
                </div>
                <div className="faq-a"><p>{f.a}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AiFooter />
    </>
  )
}
