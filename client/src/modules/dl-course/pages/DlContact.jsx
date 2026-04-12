import { useState } from 'react';
import DlNavbar from '../components/DlNavbar';
import DlFooter from '../components/DlFooter';
import './DlContact.css';

const faqs = [
  { q: 'Is this content suitable for beginners?', a: 'Yes! Our content is designed for learners at all levels. We start with the basics and gradually progress to advanced deep learning topics.' },
  { q: 'Are the resources free to use?', a: 'Yes, all educational content on this website is completely free to access. We believe in making deep learning education accessible to everyone.' },
  { q: 'How often is the content updated?', a: 'We regularly update our content to reflect the latest developments in deep learning. The field evolves rapidly and we strive to keep resources current.' },
  { q: 'Can I suggest new topics or improvements?', a: 'Absolutely! We welcome suggestions for new topics, improvements to existing content, or any other feedback via the contact form.' },
];

export default function DlContact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [openFaq, setOpenFaq] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${form.name}! We'll get back to you soon.`);
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <>
      <DlNavbar />
      <div className="dl-main-content">

        {/* Hero */}
        <section className="dl-contact-hero">
          <span className="dl-badge">Contact Us</span>
          <h1>Get in <span className="dl-grad">Touch</span></h1>
          <p>Have questions, suggestions, or feedback? We'd love to hear from you.</p>
        </section>

        {/* Contact Body */}
        <section className="dl-contact-body">
          <div className="dl-contact-layout">

            {/* Info Panel */}
            <div className="dl-contact-info-panel">
              <h2>Contact <span className="dl-grad">Information</span></h2>
              {[
                { icon: 'fa-envelope', title: 'Email', val: 'techinmystyle@gmail.com' },
                { icon: 'fa-map-marker-alt', title: 'Location', val: 'Andhra Pradesh, India' },
                { icon: 'fa-clock', title: 'Response Time', val: 'We typically respond within 24–48 hours' },
              ].map((r, i) => (
                <div className="dl-info-row" key={i}>
                  <div className="dl-info-icon"><i className={`fas ${r.icon}`} /></div>
                  <div>
                    <h4>{r.title}</h4>
                    <p>{r.val}</p>
                  </div>
                </div>
              ))}

              <div className="dl-connect-section">
                <h4>Connect With Us</h4>
                <div className="dl-connect-links">
                  {[
                    { icon: 'fa-telegram', label: 'Telegram', href: 'https://t.me/Tech_in_my_style_bot' },
                    { icon: 'fa-instagram', label: 'Instagram', href: 'https://www.instagram.com/techinmystyle?igsh=YXIxdWl2NGFmdXZk' },
                    { icon: 'fa-whatsapp', label: 'WhatsApp', href: 'https://whatsapp.com/channel/0029VbAZrCD5fM5aOU10Av0d' },
                    { icon: 'fa-youtube', label: 'YouTube', href: 'https://www.youtube.com/@TECHINMYSTYLE' },
                  ].map((s, i) => (
                    <a key={i} href={s.href} className="dl-connect-link" target="_blank" rel="noopener noreferrer">
                      <i className={`fab ${s.icon}`} /> {s.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Form Panel */}
            <div className="dl-contact-form-panel">
              <h2>Send Us a <span className="dl-grad">Message</span></h2>
              <form onSubmit={handleSubmit}>
                <div className="dl-form-row">
                  <div className="dl-form-field">
                    <label>Name</label>
                    <input type="text" placeholder="Your name" required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
                  </div>
                  <div className="dl-form-field">
                    <label>Email</label>
                    <input type="email" placeholder="your@email.com" required value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
                  </div>
                </div>
                <div className="dl-form-field">
                  <label>Subject</label>
                  <input type="text" placeholder="What's this about?" required value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })} />
                </div>
                <div className="dl-form-field">
                  <label>Message</label>
                  <textarea placeholder="Tell us more..." required value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} />
                </div>
                <button type="submit" className="dl-cta-button dl-form-submit">
                  <i className="fas fa-paper-plane" /> Send Message
                </button>
              </form>
            </div>

          </div>
        </section>

        {/* FAQ */}
        <section className="dl-faq-section">
          <div className="dl-section-header">
            <span className="dl-badge">FAQ</span>
            <h2>Frequently Asked <span className="dl-grad">Questions</span></h2>
          </div>
          <div className="dl-faq-grid">
            {faqs.map((f, i) => (
              <div className={`dl-faq-card${openFaq === i ? ' open' : ''}`} key={i}>
                <div className="dl-faq-q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <h3>{f.q}</h3>
                  <div className="dl-faq-chevron"><i className="fas fa-chevron-down" /></div>
                </div>
                <div className="dl-faq-a"><p>{f.a}</p></div>
              </div>
            ))}
          </div>
        </section>

      </div>
      <DlFooter />
    </>
  );
}
