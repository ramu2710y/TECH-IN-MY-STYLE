import { useState } from 'react'
import PythonNavbar from '../components/PythonNavbar'
import PythonFooter from '../components/PythonFooter'
import './Contact.css'

export default function Contact() {
  const [f, setF] = useState({ name: '', email: '', subject: '', message: '' })
  const set = (k: keyof typeof f) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => setF(p => ({ ...p, [k]: e.target.value }))

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(`Thank you, ${f.name}! Your message has been received. We'll get back to you shortly.`)
    setF({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <div className="py-contact-page">
      <PythonNavbar showTasks />
      <div className="py-contact-hero">
        <span className="py-chip">✉️ Contact</span>
        <h1>Get in <span>Touch</span></h1>
        <p>Have questions, feedback, or just want to say hello? We'd love to hear from you!</p>
      </div>
      <main className="py-contact-body">
        <div className="py-cf-card">
          <h2>Send us a message</h2>
          <form onSubmit={submit}>
            <div className="py-form-row">
              <div className="py-fg"><label>Your Name</label><input type="text" placeholder="John Doe" value={f.name} onChange={set('name')} required /></div>
              <div className="py-fg"><label>Email Address</label><input type="email" placeholder="john@example.com" value={f.email} onChange={set('email')} required /></div>
            </div>
            <div className="py-fg">
              <label>Subject</label>
              <select value={f.subject} onChange={set('subject')} required>
                <option value="" disabled>Select a subject</option>
                <option>General Inquiry</option><option>Content Suggestion</option>
                <option>Report an Issue</option><option>Collaboration</option><option>Other</option>
              </select>
            </div>
            <div className="py-fg"><label>Your Message</label><textarea placeholder="Write your message here..." value={f.message} onChange={set('message')} required /></div>
            <button type="submit" className="py-btn py-btn-y" style={{ width: '100%', border: 'none' }}>Send Message →</button>
          </form>
        </div>

        <div className="py-ci-stack">
          {[
            { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>, t: 'Email', v: 'contact@pythoninmystyle.com' },
            { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>, t: 'Response Time', v: 'We typically respond within 24–48 hours' },
          ].map(item => (
            <div key={item.t} className="py-ci-block">
              <div className="py-ci-ico">{item.icon}</div>
              <div className="py-ci-txt"><h3>{item.t}</h3><p>{item.v}</p></div>
            </div>
          ))}
          <div className="py-ci-soc">
            <h3>Follow Us</h3>
            <div className="py-ci-soc-links">
              {[
                { href: 'https://www.instagram.com/tech_in_my_style', label: 'Instagram', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="20" height="20" x="2" y="2" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg> },
                { href: 'https://www.youtube.com/@TECHINMYSTYLE', label: 'YouTube', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-2C18.88 4 12 4 12 4s-6.88 0-8.59.42a2.78 2.78 0 0 0-1.95 2A29.94 29.94 0 0 0 1 12a29.94 29.94 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 2C5.12 20 12 20 12 20s6.88 0 8.59-.42a2.78 2.78 0 0 0 1.95-2A29.94 29.94 0 0 0 23 12a29.94 29.94 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></svg> },
                { href: 'https://t.me/Tech_in_my_style_bot', label: 'Telegram', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg> },
              ].map(s => (
                <a key={s.label} href={s.href} className="py-ci-soc-link" target="_blank" rel="noopener noreferrer">{s.icon}{s.label}</a>
              ))}
            </div>
          </div>
        </div>
      </main>
      <PythonFooter />
    </div>
  )
}
