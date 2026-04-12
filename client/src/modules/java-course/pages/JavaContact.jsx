import { useState } from 'react';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
  PaperAirplaneIcon,
  ChevronDownIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline';

const contactInfo = [
  {
    icon: <MapPinIcon className="w-6 h-6" />,
    title: 'Our Location',
    value: 'Tech In My Style, Online Platform',
    color: 'text-java-blue bg-blue-50 dark:bg-blue-900/20',
  },
  {
    icon: <EnvelopeIcon className="w-6 h-6" />,
    title: 'Email Address',
    value: 'support@techinmystyle.com',
    color: 'text-java-orange bg-orange-50 dark:bg-orange-900/20',
  },
  {
    icon: <PhoneIcon className="w-6 h-6" />,
    title: 'Telegram',
    value: 't.me/Tech_in_my_style_bot',
    color: 'text-purple-600 bg-purple-50 dark:bg-purple-900/20',
  },
  {
    icon: <ClockIcon className="w-6 h-6" />,
    title: 'Response Time',
    value: 'Within 24 hours',
    color: 'text-green-600 bg-green-50 dark:bg-green-900/20',
  },
];

const socials = [
  {
    name: 'Telegram',
    url: 'https://t.me/Tech_in_my_style_bot',
    color: 'from-blue-500 to-blue-600',
    desc: 'Join our Telegram community',
    icon: '✈️',
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/techinmystyle',
    color: 'from-pink-500 to-purple-600',
    desc: 'Follow us on Instagram',
    icon: '📸',
  },
  {
    name: 'WhatsApp',
    url: 'https://whatsapp.com/channel/0029VbAZrCD5fM5aOU10Av0d',
    color: 'from-green-500 to-green-600',
    desc: 'Join our WhatsApp channel',
    icon: '💬',
  },
  {
    name: 'YouTube',
    url: 'https://www.youtube.com/@TECHINMYSTYLE',
    color: 'from-red-500 to-red-600',
    desc: 'Subscribe on YouTube',
    icon: '▶️',
  },
];

const faqs = [
  {
    q: 'How can I access all topics?',
    a: 'All topics are freely accessible from our Topics page. Click on any topic to expand it and see the subtopics inside.',
  },
  {
    q: 'Do you offer personalized help?',
    a: 'Yes! If you have specific questions, contact us through the form and our team will get back to you within 24 hours.',
  },
  {
    q: 'Is this content suitable for beginners?',
    a: "Absolutely! Our curriculum is designed from complete beginner to advanced. Start with the Introduction section if you're new to Java.",
  },
  {
    q: 'How do I use the online Java compiler?',
    a: 'Visit the Compiler page, write your Java code in the editor, and click Run. Your output will appear below the code editor instantly.',
  },
  {
    q: 'How often is the content updated?',
    a: 'We regularly update content to align with the latest Java versions and industry practices. Updates are announced on our social channels.',
  },
  {
    q: 'Is there a mobile app?',
    a: "Currently we're a web platform, but our site is fully responsive and works perfectly on all mobile browsers.",
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.trim()) e.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email address';
    if (!form.message.trim()) e.message = 'Message is required';
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    toast.success("Message sent! We'll get back to you soon. 🚀", { duration: 4000 });
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  const inputClass = (field) =>
    `w-full px-4 py-3.5 rounded-xl border ${
      errors[field]
        ? 'border-red-400 bg-red-50 dark:bg-red-900/10'
        : 'border-gray-200 dark:border-java-border-dark bg-white dark:bg-java-darker'
    } text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-java-blue dark:focus:border-java-orange focus:ring-2 focus:ring-java-blue/20 dark:focus:ring-java-orange/20 transition-all text-sm font-roboto`;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-java-darker">

      {/* ─── Page Header ─── */}
      <section className="relative py-20 bg-gradient-to-br from-java-dark via-[#0a1628] to-java-darker overflow-hidden">
        {/* Grid background */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              'linear-gradient(#0074BD 1px, transparent 1px), linear-gradient(90deg, #0074BD 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />
        {/* Glow blobs */}
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-java-orange/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-java-blue/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-java-blue/10 border border-java-blue/20 text-java-orange text-sm font-medium mb-6">
            📬 Get In Touch
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold font-poppins text-white mb-4">
            Contact{' '}
            <span className="bg-gradient-to-r from-java-blue to-java-orange bg-clip-text text-transparent">
              Us
            </span>
          </h1>
          <p className="text-gray-300 text-lg max-w-xl mx-auto mb-6">
            Have questions or feedback? We'd love to hear from you — we typically respond within 24 hours.
          </p>
          {/* Breadcrumb */}
          <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
            <Link to="/java-course" className="hover:text-java-orange transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-java-orange">Contact</span>
          </div>
        </div>
      </section>

      {/* ─── Form + Info ─── */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">

            {/* ── Contact Form ── */}
            <div className="bg-white dark:bg-java-card-dark rounded-3xl border border-gray-100 dark:border-java-border-dark p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-java-blue to-java-lightblue flex items-center justify-center">
                  <PaperAirplaneIcon className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold font-poppins text-gray-900 dark:text-white">
                  Send Us a Message
                </h2>
              </div>
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-8 ml-13">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                {/* Name + Email row */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 font-poppins">
                      Your Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className={inputClass('name')}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1">
                        <span>⚠</span> {errors.name}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 font-poppins">
                      Email Address <span className="text-red-400">*</span>
                    </label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className={inputClass('email')}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1">
                        <span>⚠</span> {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 font-poppins">
                    Subject
                  </label>
                  <input
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    className={inputClass('subject')}
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 font-poppins">
                    Message <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us more about your question or feedback..."
                    className={`${inputClass('message')} resize-none`}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1">
                      <span>⚠</span> {errors.message}
                    </p>
                  )}
                  <p className="text-xs text-gray-400 dark:text-gray-500 mt-1.5 text-right">
                    {form.message.length} characters
                  </p>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full btn-primary justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      <PaperAirplaneIcon className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* ── Right column ── */}
            <div className="space-y-6">

              {/* Contact Info Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {contactInfo.map((info, i) => (
                  <div
                    key={i}
                    className="bg-white dark:bg-java-card-dark rounded-2xl border border-gray-100 dark:border-java-border-dark p-5 card-hover"
                  >
                    <div
                      className={`w-12 h-12 rounded-xl ${info.color} flex items-center justify-center mb-4`}
                    >
                      {info.icon}
                    </div>
                    <h3 className="font-poppins font-semibold text-gray-900 dark:text-white text-sm mb-1">
                      {info.title}
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm break-words">{info.value}</p>
                  </div>
                ))}
              </div>

              {/* Social Connect */}
              <div className="bg-white dark:bg-java-card-dark rounded-3xl border border-gray-100 dark:border-java-border-dark p-6">
                <h3 className="font-poppins font-semibold text-gray-900 dark:text-white text-lg mb-1">
                  Connect With Us
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-5">
                  Stay updated across all our channels.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {socials.map((s) => (
                    <a
                      key={s.name}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group flex items-center gap-3 p-4 rounded-2xl bg-gradient-to-br ${s.color} text-white hover:-translate-y-1 hover:shadow-lg transition-all duration-300`}
                    >
                      <span className="text-2xl">{s.icon}</span>
                      <div>
                        <p className="font-semibold text-sm font-poppins leading-tight">{s.name}</p>
                        <p className="text-white/70 text-xs leading-tight mt-0.5">{s.desc}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick Help Banner */}
              <div className="relative bg-gradient-to-r from-java-blue to-java-lightblue rounded-2xl p-6 text-white overflow-hidden">
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                    backgroundSize: '20px 20px',
                  }}
                />
                <div className="relative">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">⚡</span>
                    <h3 className="font-poppins font-semibold text-lg">Need Quick Help?</h3>
                  </div>
                  <p className="text-white/80 text-sm mb-4 leading-relaxed">
                    For the fastest response, reach out on Telegram — our most active support channel.
                  </p>
                  <a
                    href="https://t.me/Tech_in_my_style_bot"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white text-java-blue font-semibold text-sm px-5 py-2.5 rounded-xl hover:bg-java-orange hover:text-white transition-all duration-300 shadow-md"
                  >
                    Open Telegram
                    <ArrowRightIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FAQ Section ─── */}
      <section className="py-16 bg-white dark:bg-java-card-dark">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section heading */}
          <div className="text-center mb-12">
            <span className="inline-block text-java-orange font-semibold text-sm uppercase tracking-widest mb-3 font-poppins">
              FAQ
            </span>
            <h2 className="text-3xl font-bold font-poppins text-gray-900 dark:text-white">
              Frequently Asked{' '}
              <span className="java-gradient-text">Questions</span>
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mt-3 text-sm">
              Can't find what you're looking for? Send us a message above.
            </p>
          </div>

          {/* Accordion */}
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  openFaq === i
                    ? 'border-java-blue/40 dark:border-java-orange/40 bg-blue-50/50 dark:bg-java-darker shadow-sm shadow-java-blue/10'
                    : 'border-gray-100 dark:border-java-border-dark bg-gray-50 dark:bg-java-darker'
                }`}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                  className="w-full flex items-center justify-between p-5 text-left group"
                >
                  <div className="flex items-center gap-3 pr-4">
                    <span
                      className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold font-poppins transition-colors ${
                        openFaq === i
                          ? 'bg-java-blue text-white'
                          : 'bg-gray-200 dark:bg-java-border-dark text-gray-500 dark:text-gray-400'
                      }`}
                    >
                      {i + 1}
                    </span>
                    <span
                      className={`font-poppins font-medium text-sm transition-colors ${
                        openFaq === i
                          ? 'text-java-blue dark:text-java-orange'
                          : 'text-gray-900 dark:text-white group-hover:text-java-blue dark:group-hover:text-java-orange'
                      }`}
                    >
                      {faq.q}
                    </span>
                  </div>
                  <ChevronDownIcon
                    className={`w-5 h-5 flex-shrink-0 transition-all duration-300 ${
                      openFaq === i
                        ? 'rotate-180 text-java-blue dark:text-java-orange'
                        : 'text-gray-400 group-hover:text-java-blue dark:group-hover:text-java-orange'
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openFaq === i ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-5 pb-5 ml-9">
                    <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Still have questions CTA */}
          <div className="mt-10 text-center p-8 rounded-3xl bg-gradient-to-br from-java-dark to-java-darker">
            <p className="text-white font-poppins font-semibold text-lg mb-2">Still have questions?</p>
            <p className="text-gray-400 text-sm mb-5">
              Our team is here to help. Send us a message and we'll respond promptly.
            </p>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="btn-primary"
            >
              <PaperAirplaneIcon className="w-4 h-4" />
              Send a Message
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
