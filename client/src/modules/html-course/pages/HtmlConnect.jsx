import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import HtmlNavbar, { useDarkMode } from "../components/HtmlNavbar";
import HtmlFooter from "../components/HtmlFooter";

/* ─── Social platform data ──────────────────────────────────────── */
const SOCIALS = [
  {
    key: "youtube",
    label: "YouTube",
    handle: "@TECHINMYSTYLE",
    description:
      "Subscribe to our YouTube channel for in-depth video tutorials, full courses, and step-by-step coding guides on HTML, CSS, JavaScript, and more.",
    href: "https://www.youtube.com/@TECHINMYSTYLE",
    icon: "bi bi-youtube",
    color: "#FF0000",
    bg: "rgba(255,0,0,0.08)",
    border: "rgba(255,0,0,0.18)",
    cta: "Subscribe Now",
    badge: "Free Courses",
  },
  {
    key: "telegram",
    label: "Telegram",
    handle: "Tech_in_my_style_bot",
    description:
      "Join our Telegram community to get instant updates, quick tips, resources, and connect with thousands of learners worldwide.",
    href: "https://t.me/Tech_in_my_style_bot",
    icon: "bi bi-telegram",
    color: "#0088CC",
    bg: "rgba(0,136,204,0.08)",
    border: "rgba(0,136,204,0.18)",
    cta: "Join Channel",
    badge: "Daily Updates",
  },
  {
    key: "whatsapp",
    label: "WhatsApp",
    handle: "TECH IN MY STYLE",
    description:
      "Follow our WhatsApp channel for quick notes, cheat sheets, and the latest learning resources delivered straight to your phone.",
    href: "https://whatsapp.com/channel/0029VbAZrCD5fM5aOU10Av0d",
    icon: "bi bi-whatsapp",
    color: "#25D366",
    bg: "rgba(37,211,102,0.08)",
    border: "rgba(37,211,102,0.18)",
    cta: "Follow Channel",
    badge: "Resources",
  },
  {
    key: "instagram",
    label: "Instagram",
    handle: "@techinmystyle",
    description:
      "Follow us on Instagram for bite-sized coding tips, visual guides, course announcements, and behind-the-scenes content.",
    href: "https://www.instagram.com/techinmystyle/?igsh=YXIxdWl2NGFmdXZk",
    icon: "bi bi-instagram",
    color: "#E1306C",
    bg: "rgba(225,48,108,0.08)",
    border: "rgba(225,48,108,0.18)",
    cta: "Follow Us",
    badge: "Tips & Tricks",
  },
];

/* ─── FAQ data ──────────────────────────────────────────────────── */
const FAQS = [
  {
    q: "Is all the content on this platform free?",
    a: "Yes! HTML IN MY STYLE is 100% free. All courses, notes, references, and the playground are completely free with no signup required.",
  },
  {
    q: "How do I get notified of new course releases?",
    a: "Subscribe to our YouTube channel and join our Telegram channel to get instant notifications whenever new courses or resources are published.",
  },
  {
    q: "Can I suggest a topic or course?",
    a: "Absolutely. Reach out to us via Telegram or Instagram and we'll take your suggestion into consideration for future content.",
  },
  {
    q: "Are there any certificates available?",
    a: "We link to third-party certification platforms on our Resources page, including freeCodeCamp and W3Schools, where you can earn recognised credentials.",
  },
];

/* ─── FAQ Item ──────────────────────────────────────────────────── */
function FAQItem({ q, a, index }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`cn-faq-item${open ? " cn-faq-item--open" : ""}`}
      style={{ animationDelay: `${index * 0.08}s` }}
    >
      <button
        className="cn-faq-item__q"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        <span>{q}</span>
        <i
          className={`bi bi-chevron-down cn-faq-item__chevron`}
          aria-hidden="true"
        />
      </button>
      <div className="cn-faq-item__a-wrap">
        <p className="cn-faq-item__a">{a}</p>
      </div>
    </div>
  );
}

/* ─── Main Component ─────────────────────────────────────────────── */
export default function HtmlConnect() {
  const { dark, toggle } = useDarkMode();
  const [heroIn, setHeroIn] = useState(false);
  const [showBackTop, setShowBackTop] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHeroIn(true), 80);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const onScroll = () => setShowBackTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={`cn-page${dark ? " cn-page--dark" : ""}`}>

      <main id="main-content">
        {/* ══════════ HERO ══════════ */}
        <section
          className={`cn-hero${heroIn ? " cn-hero--in" : ""}`}
          aria-label="Connect page hero"
        >
          {/* Decorative blobs */}
          <span className="cn-hero__blob cn-hero__blob--a" aria-hidden="true" />
          <span className="cn-hero__blob cn-hero__blob--b" aria-hidden="true" />
          <span className="cn-hero__blob cn-hero__blob--c" aria-hidden="true" />

          <div className="cn-hero__inner">
            {/* Badge */}
            <div className="cn-hero__badge">
              <i className="bi bi-people-fill" aria-hidden="true" />
              <span>Join Our Community</span>
            </div>

            {/* Heading */}
            <h1 className="cn-hero__title">
              Let's <span className="cn-hero__title-accent">Connect!</span>
            </h1>

            {/* Logo image */}
            <div className="cn-hero__img-wrap" aria-hidden="true">
              <img
                src="/img/TECH.png"
                alt="TECH IN MY STYLE"
                className="cn-hero__img"
                loading="lazy"
              />
              <div className="cn-hero__img-glow" />
            </div>

            <p className="cn-hero__desc">
              Ready to start your HTML journey? Join our thriving community of
              learners, get daily tips, watch free courses, and stay updated
              with the latest web development content from{" "}
              <strong>TECH IN MY STYLE</strong>.
            </p>

            {/* Quick-link pills */}
            <div className="cn-hero__platforms" aria-label="Social platforms">
              {SOCIALS.map((s) => (
                <a
                  key={s.key}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cn-hero__platform-pill"
                  style={{
                    "--pill-color": s.color,
                    "--pill-bg": s.bg,
                    "--pill-border": s.border,
                  }}
                  aria-label={s.label}
                  title={s.label}
                >
                  <i className={s.icon} aria-hidden="true" />
                  <span>{s.label}</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════ SOCIAL CARDS ══════════ */}
        <section
          className="cn-socials"
          aria-labelledby="socials-heading"
          id="socials"
        >
          <div className="cn-container">
            <div className="cn-section-header">
              <div className="cn-pill">
                <i className="bi bi-share-fill" aria-hidden="true" />
                Stay Connected
              </div>
              <h2 className="cn-section-title" id="socials-heading">
                Find Us On Social Media
              </h2>
              <p className="cn-section-desc">
                Pick your favourite platform and join a community of passionate
                learners. We post regularly on all channels.
              </p>
            </div>

            <div className="cn-cards-grid">
              {SOCIALS.map((s, i) => (
                <a
                  key={s.key}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cn-social-card"
                  style={{
                    "--sc-color": s.color,
                    "--sc-bg": s.bg,
                    "--sc-border": s.border,
                    animationDelay: `${i * 0.1}s`,
                  }}
                  aria-label={`${s.label} — ${s.handle}`}
                >
                  {/* Top accent bar */}
                  <div className="cn-social-card__accent" />

                  {/* Icon */}
                  <div className="cn-social-card__icon-wrap">
                    <i className={s.icon} aria-hidden="true" />
                  </div>

                  {/* Badge */}
                  <span className="cn-social-card__badge">{s.badge}</span>

                  {/* Content */}
                  <h3 className="cn-social-card__name">{s.label}</h3>
                  <p className="cn-social-card__handle">{s.handle}</p>
                  <p className="cn-social-card__desc">{s.description}</p>

                  {/* CTA */}
                  <div className="cn-social-card__cta">
                    <span className="cn-social-card__cta-btn">
                      {s.cta}
                      <i className="bi bi-arrow-up-right" aria-hidden="true" />
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════ EMAIL / CONTACT ══════════ */}
        <section
          className="cn-contact-section"
          aria-labelledby="contact-heading"
        >
          <div className="cn-container">
            <div className="cn-contact-card">
              {/* Left decoration */}
              <div className="cn-contact-card__deco" aria-hidden="true">
                <div className="cn-contact-card__deco-ring cn-contact-card__deco-ring--1" />
                <div className="cn-contact-card__deco-ring cn-contact-card__deco-ring--2" />
                <div className="cn-contact-card__deco-ring cn-contact-card__deco-ring--3" />
              </div>

              <div className="cn-contact-card__body">
                <div className="cn-contact-card__icon" aria-hidden="true">
                  <i className="bi bi-envelope-fill" />
                </div>
                <h2 className="cn-contact-card__title" id="contact-heading">
                  Send Us an Email
                </h2>
                <p className="cn-contact-card__desc">
                  Have a question, feedback, or want to collaborate? Drop us an
                  email and we'll get back to you as soon as possible.
                </p>
                <div className="cn-contact-card__details">
                  <div className="cn-contact-detail">
                    <div className="cn-contact-detail__icon">
                      <i
                        className="bi bi-envelope-at-fill"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="cn-contact-detail__text">
                      <span className="cn-contact-detail__label">Email</span>
                      <a
                        href="mailto:techinmystyle@gmail.com"
                        className="cn-contact-detail__value"
                      >
                        techinmystyle@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="cn-contact-detail">
                    <div className="cn-contact-detail__icon">
                      <i className="bi bi-youtube" aria-hidden="true" />
                    </div>
                    <div className="cn-contact-detail__text">
                      <span className="cn-contact-detail__label">YouTube</span>
                      <a
                        href="https://www.youtube.com/@TECHINMYSTYLE"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cn-contact-detail__value"
                      >
                        @TECHINMYSTYLE
                      </a>
                    </div>
                  </div>

                  <div className="cn-contact-detail">
                    <div className="cn-contact-detail__icon">
                      <i className="bi bi-telegram" aria-hidden="true" />
                    </div>
                    <div className="cn-contact-detail__text">
                      <span className="cn-contact-detail__label">Telegram</span>
                      <a
                        href="https://t.me/Tech_in_my_style_bot"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cn-contact-detail__value"
                      >
                        Tech_in_my_style_bot
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: terminal widget */}
              <div
                className="cn-terminal"
                aria-label="Contact terminal display"
              >
                <div className="cn-terminal__bar">
                  <span className="cn-terminal__dot cn-terminal__dot--red" />
                  <span className="cn-terminal__dot cn-terminal__dot--yellow" />
                  <span className="cn-terminal__dot cn-terminal__dot--green" />
                  <span className="cn-terminal__title">
                    <i className="bi bi-terminal-fill" aria-hidden="true" />
                    contact.sh
                  </span>
                </div>
                <div className="cn-terminal__body">
                  <p className="cn-terminal__line">
                    <span className="cn-terminal__prompt">$</span>
                    <span className="cn-terminal__cmd"> reach_out</span>
                  </p>
                  <p className="cn-terminal__line cn-terminal__line--out">
                    📬 Connecting to TECH IN MY STYLE...
                  </p>
                  <p className="cn-terminal__line cn-terminal__line--out">
                    ✅ Connection established!
                  </p>
                  <p className="cn-terminal__line cn-terminal__line--out">
                    🎓 Platform: HTML IN MY STYLE
                  </p>
                  <p className="cn-terminal__line">
                    <span className="cn-terminal__prompt">$</span>
                    <span className="cn-terminal__cmd"> send --email</span>
                  </p>
                  <p className="cn-terminal__line cn-terminal__line--out">
                    📧 techinmystyle@gmail.com
                  </p>
                  <p className="cn-terminal__line">
                    <span className="cn-terminal__prompt">$</span>
                    <span className="cn-terminal__cmd"> join --community</span>
                  </p>
                  <p className="cn-terminal__line cn-terminal__line--out">
                    🚀 Welcome to the family!
                  </p>
                  <p className="cn-terminal__line cn-terminal__line--cursor">
                    <span className="cn-terminal__prompt">$</span>
                    <span className="cn-terminal__caret" aria-hidden="true">
                      █
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════ STATS STRIP ══════════ */}
        <section className="cn-stats" aria-label="Community statistics">
          <div className="cn-container">
            <div className="cn-stats__grid">
              {[
                {
                  icon: "bi bi-play-circle-fill",
                  value: "11+",
                  label: "Courses in Progress",
                  color: "#FF0000",
                },
                {
                  icon: "bi bi-people-fill",
                  value: "10K+",
                  label: "Community Members",
                  color: "#25D366",
                },
                {
                  icon: "bi bi-tags-fill",
                  value: "100+",
                  label: "HTML Tags Covered",
                  color: "#E34F26",
                },
                {
                  icon: "bi bi-heart-fill",
                  value: "100%",
                  label: "Free Forever",
                  color: "#E1306C",
                },
              ].map((stat, i) => (
                <div
                  key={stat.label}
                  className="cn-stat"
                  style={{
                    "--st-color": stat.color,
                    animationDelay: `${i * 0.1}s`,
                  }}
                >
                  <div className="cn-stat__icon">
                    <i className={stat.icon} aria-hidden="true" />
                  </div>
                  <div className="cn-stat__value">{stat.value}</div>
                  <div className="cn-stat__label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════ FAQ ══════════ */}
        <section className="cn-faq-section" aria-labelledby="faq-heading">
          <div className="cn-container">
            <div className="cn-section-header">
              <div className="cn-pill">
                <i className="bi bi-question-circle-fill" aria-hidden="true" />
                FAQ
              </div>
              <h2 className="cn-section-title" id="faq-heading">
                Frequently Asked Questions
              </h2>
              <p className="cn-section-desc">
                Got questions? Here are answers to the most common things our
                community asks.
              </p>
            </div>

            <div className="cn-faq-list">
              {FAQS.map((item, i) => (
                <FAQItem key={i} q={item.q} a={item.a} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* ══════════ CTA BANNER ══════════ */}
        <section className="cn-cta" aria-labelledby="cta-heading">
          <div className="cn-cta__blob cn-cta__blob--1" aria-hidden="true" />
          <div className="cn-cta__blob cn-cta__blob--2" aria-hidden="true" />
          <div className="cn-container cn-cta__inner">
            <div className="cn-cta__icon" aria-hidden="true">
              <i className="bi bi-rocket-takeoff-fill" />
            </div>
            <h2 className="cn-cta__title" id="cta-heading">
              Start Learning HTML Today
            </h2>
            <p className="cn-cta__desc">
              Explore our free, comprehensive HTML reference and interactive
              playground. No signup. No cost. Just learn.
            </p>
            <div className="cn-cta__actions">
              <Link to="/html-course/reference" className="cn-cta__btn cn-cta__btn--white">
                <i className="bi bi-code-slash" aria-hidden="true" />
                HTML Reference
              </Link>
              <Link to="/html-course/compiler" className="cn-cta__btn cn-cta__btn--outline">
                <i className="bi bi-terminal-fill" aria-hidden="true" />
                Try Playground
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Back to top */}
      <button
        className={`cn-back-top${showBackTop ? " cn-back-top--visible" : ""}`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        type="button"
      >
        <i className="bi bi-arrow-up" aria-hidden="true" />
      </button>

      {/* ── All styles scoped inside this component ── */}
      <style>{`
        /* ════════════════════════════════════════════
           CONNECT PAGE — DESIGN TOKENS
        ════════════════════════════════════════════ */
        .cn-page {
          --cn-primary: #e34f26;
          --cn-primary-dk: #c73e1d;
          --cn-secondary: #f16529;
          --cn-bg: #fff8f5;
          --cn-bg-alt: #ffffff;
          --cn-card: #ffffff;
          --cn-border: rgba(227,79,38,0.12);
          --cn-border-soft: rgba(0,0,0,0.07);
          --cn-text: #1a1a2e;
          --cn-text-muted: #5a5a72;
          --cn-text-faint: #9898b0;
          --cn-grad: linear-gradient(135deg,#e34f26,#f16529);
          --cn-grad-dk: linear-gradient(135deg,#c73e1d,#e34f26);
          --cn-grad-soft: linear-gradient(135deg,rgba(227,79,38,0.08),rgba(241,101,41,0.04));
          --cn-shadow-xs: 0 1px 4px rgba(0,0,0,0.06);
          --cn-shadow-sm: 0 2px 10px rgba(0,0,0,0.08);
          --cn-shadow-md: 0 8px 28px rgba(0,0,0,0.1);
          --cn-shadow-brand: 0 10px 32px rgba(227,79,38,0.2);
          --cn-r-sm: 8px;
          --cn-r-md: 14px;
          --cn-r-lg: 20px;
          --cn-r-xl: 28px;
          --cn-r-full: 9999px;
          --cn-ease: cubic-bezier(0.4,0,0.2,1);
          --cn-bounce: cubic-bezier(0.34,1.56,0.64,1);
          --cn-fast: 180ms;
          --cn-mid: 320ms;
          font-family:'Inter',system-ui,-apple-system,sans-serif;
          background:var(--cn-bg);
          color:var(--cn-text);
          min-height:100vh;
          overflow-x:hidden;
          transition:background var(--cn-mid) var(--cn-ease), color var(--cn-mid) var(--cn-ease);
        }

        /* ── Dark mode ── */
        .cn-page--dark {
          --cn-bg:#0d0d0d;
          --cn-bg-alt:#111111;
          --cn-card:#1a1a1a;
          --cn-border:rgba(227,79,38,0.18);
          --cn-border-soft:rgba(255,255,255,0.07);
          --cn-text:#f0f0f0;
          --cn-text-muted:#a0a0b8;
          --cn-text-faint:#606072;
          --cn-shadow-xs:0 1px 4px rgba(0,0,0,0.3);
          --cn-shadow-sm:0 2px 10px rgba(0,0,0,0.4);
          --cn-shadow-md:0 8px 28px rgba(0,0,0,0.55);
          --cn-shadow-brand:0 10px 32px rgba(227,79,38,0.25);
          --cn-grad-soft:linear-gradient(135deg,rgba(227,79,38,0.13),rgba(241,101,41,0.06));
        }

        /* ── Container ── */
        .cn-container {
          width:100%;max-width:1240px;margin:0 auto;padding:0 2rem;
        }

        /* ════════════════════════════════════════════
           SHARED SECTION HEADER
        ════════════════════════════════════════════ */
        .cn-section-header {
          text-align:center;margin-bottom:3rem;
        }
        .cn-pill {
          display:inline-flex;align-items:center;gap:0.45rem;
          padding:0.35rem 1.1rem;
          background:var(--cn-grad-soft);
          border:1px solid var(--cn-border);
          border-radius:var(--cn-r-full);
          color:var(--cn-primary);
          font-size:0.78rem;font-weight:700;
          letter-spacing:0.05em;text-transform:uppercase;
          margin-bottom:1rem;
        }
        .cn-pill i { font-size:0.9rem; }
        .cn-section-title {
          font-size:clamp(1.75rem,3.5vw,2.5rem);
          font-weight:900;letter-spacing:-0.03em;line-height:1.2;
          color:var(--cn-text);margin:0 0 0.85rem;
        }
        .cn-section-desc {
          max-width:620px;margin:0 auto;
          color:var(--cn-text-muted);font-size:1.02rem;line-height:1.75;
        }

        /* ════════════════════════════════════════════
           HERO
        ════════════════════════════════════════════ */
        .cn-hero {
          position:relative;
          background:var(--cn-bg);
          padding:6.5rem 2rem 5rem;
          overflow:hidden;
          border-bottom:1px solid var(--cn-border-soft);
          transition:background var(--cn-mid) var(--cn-ease);
        }
        .cn-hero__blob {
          position:absolute;border-radius:50%;filter:blur(72px);
          pointer-events:none;z-index:0;
        }
        .cn-hero__blob--a {
          width:520px;height:520px;top:-160px;left:-140px;
          background:radial-gradient(circle,rgba(227,79,38,0.16) 0%,transparent 70%);
          animation:cnBlobFloat 11s ease-in-out infinite;
        }
        .cn-hero__blob--b {
          width:400px;height:400px;bottom:-120px;right:-100px;
          background:radial-gradient(circle,rgba(241,101,41,0.13) 0%,transparent 70%);
          animation:cnBlobFloat 14s ease-in-out infinite reverse;
        }
        .cn-hero__blob--c {
          width:260px;height:260px;top:50%;left:48%;
          background:radial-gradient(circle,rgba(255,112,67,0.07) 0%,transparent 70%);
          animation:cnBlobFloat 9s ease-in-out infinite 2s;
        }
        @keyframes cnBlobFloat {
          0%,100%{transform:translate(0,0) scale(1);}
          33%{transform:translate(20px,-20px) scale(1.04);}
          66%{transform:translate(-14px,14px) scale(0.97);}
        }

        .cn-hero__inner {
          position:relative;z-index:1;
          max-width:680px;margin:0 auto;
          text-align:center;
          display:flex;flex-direction:column;align-items:center;gap:1.25rem;
          opacity:0;transform:translateY(26px);
          transition:opacity 0.7s var(--cn-ease), transform 0.7s var(--cn-ease);
        }
        .cn-hero--in .cn-hero__inner {
          opacity:1;transform:translateY(0);
        }

        .cn-hero__badge {
          display:inline-flex;align-items:center;gap:0.4rem;
          padding:0.38rem 1.1rem;
          background:var(--cn-grad-soft);
          border:1px solid var(--cn-border);
          border-radius:var(--cn-r-full);
          color:var(--cn-primary);
          font-size:0.78rem;font-weight:700;
          letter-spacing:0.05em;text-transform:uppercase;
          animation:cnBadgePop 0.6s var(--cn-bounce) both 0.2s;
        }
        @keyframes cnBadgePop {
          from{opacity:0;transform:scale(0.82) translateY(8px);}
          to{opacity:1;transform:scale(1) translateY(0);}
        }
        .cn-hero__badge i { font-size:0.95rem; }

        .cn-hero__title {
          font-size:clamp(2.2rem,5.5vw,3.6rem);
          font-weight:900;letter-spacing:-0.04em;line-height:1.12;
          color:var(--cn-text);margin:0;
        }
        .cn-hero__title-accent {
          background:var(--cn-grad);
          -webkit-background-clip:text;background-clip:text;color:transparent;
        }

        /* Logo / feature image */
        .cn-hero__img-wrap {
          position:relative;display:inline-block;
          animation:cnImgFloat 5s ease-in-out infinite;
        }
        @keyframes cnImgFloat {
          0%,100%{transform:translateY(0);}
          50%{transform:translateY(-10px);}
        }
        .cn-hero__img {
          width:140px;height:140px;object-fit:contain;
          filter:drop-shadow(0 8px 24px rgba(227,79,38,0.3));
          border-radius:50%;
          position:relative;z-index:1;
        }
        .cn-hero__img-glow {
          position:absolute;inset:-20px;border-radius:50%;
          background:radial-gradient(circle,rgba(227,79,38,0.2) 0%,transparent 70%);
          animation:cnGlowPulse 3s ease-in-out infinite;
          pointer-events:none;
        }
        @keyframes cnGlowPulse {
          0%,100%{transform:scale(1);opacity:0.7;}
          50%{transform:scale(1.15);opacity:1;}
        }

        .cn-hero__desc {
          font-size:1.05rem;color:var(--cn-text-muted);line-height:1.8;
          max-width:560px;margin:0;
        }
        .cn-hero__desc strong { color:var(--cn-primary);font-weight:700; }

        /* Platform pills */
        .cn-hero__platforms {
          display:flex;flex-wrap:wrap;justify-content:center;gap:0.65rem;
          margin-top:0.25rem;
        }
        .cn-hero__platform-pill {
          display:inline-flex;align-items:center;gap:0.45rem;
          padding:0.5rem 1.1rem;
          border-radius:var(--cn-r-full);
          background:var(--pill-bg);
          border:1.5px solid var(--pill-border);
          color:var(--pill-color);
          font-size:0.85rem;font-weight:700;
          text-decoration:none;
          transition:transform var(--cn-fast) var(--cn-bounce), box-shadow var(--cn-fast) var(--cn-ease), background var(--cn-fast) var(--cn-ease);
        }
        .cn-hero__platform-pill i { font-size:1.05rem; }
        .cn-hero__platform-pill:hover {
          transform:translateY(-4px) scale(1.06);
          box-shadow:0 6px 20px rgba(0,0,0,0.12);
          background:var(--pill-color);
          color:#fff;
          border-color:transparent;
        }

        /* ════════════════════════════════════════════
           SOCIAL CARDS GRID
        ════════════════════════════════════════════ */
        .cn-socials {
          padding:5.5rem 2rem 6rem;
          background:var(--cn-bg-alt);
          transition:background var(--cn-mid) var(--cn-ease);
        }
        .cn-page--dark .cn-socials { background:var(--cn-bg-alt); }

        .cn-cards-grid {
          display:grid;
          grid-template-columns:repeat(auto-fill,minmax(260px,1fr));
          gap:1.75rem;
        }

        .cn-social-card {
          position:relative;
          background:var(--cn-card);
          border:1px solid var(--cn-border);
          border-radius:var(--cn-r-lg);
          padding:2rem 1.75rem 1.75rem;
          display:flex;flex-direction:column;gap:0.6rem;
          text-decoration:none;color:var(--cn-text);
          box-shadow:var(--cn-shadow-xs);
          overflow:hidden;
          animation:cnCardIn 0.55s var(--cn-bounce) both;
          transition:transform var(--cn-mid) var(--cn-bounce), box-shadow var(--cn-mid) var(--cn-ease), border-color var(--cn-mid) var(--cn-ease);
        }
        @keyframes cnCardIn {
          from{opacity:0;transform:translateY(20px) scale(0.96);}
          to{opacity:1;transform:translateY(0) scale(1);}
        }
        .cn-social-card:hover {
          transform:translateY(-10px) scale(1.015);
          box-shadow:var(--cn-shadow-brand);
          border-color:var(--sc-color);
        }

        /* Top accent bar */
        .cn-social-card__accent {
          position:absolute;top:0;left:0;right:0;height:3px;
          background:var(--sc-color);
          transform:scaleX(0.6);transform-origin:left;
          transition:transform var(--cn-mid) var(--cn-ease);
        }
        .cn-social-card:hover .cn-social-card__accent { transform:scaleX(1); }

        /* Icon */
        .cn-social-card__icon-wrap {
          width:58px;height:58px;border-radius:var(--cn-r-md);
          background:var(--sc-bg);
          border:1.5px solid var(--sc-border);
          display:flex;align-items:center;justify-content:center;
          font-size:1.65rem;color:var(--sc-color);
          flex-shrink:0;
          transition:background var(--cn-mid) var(--cn-ease), color var(--cn-mid) var(--cn-ease), transform var(--cn-mid) var(--cn-bounce);
        }
        .cn-social-card:hover .cn-social-card__icon-wrap {
          background:var(--sc-color);color:#fff;transform:scale(1.1) rotate(-6deg);
        }

        /* Badge */
        .cn-social-card__badge {
          display:inline-flex;align-items:center;
          align-self:flex-start;
          padding:0.2rem 0.7rem;
          border-radius:var(--cn-r-full);
          background:var(--sc-bg);
          border:1px solid var(--sc-border);
          color:var(--sc-color);
          font-size:0.68rem;font-weight:800;
          letter-spacing:0.05em;text-transform:uppercase;
          margin-top:0.1rem;
        }

        .cn-social-card__name {
          font-size:1.25rem;font-weight:800;
          color:var(--cn-text);margin:0.25rem 0 0;letter-spacing:-0.02em;
        }
        .cn-social-card__handle {
          font-size:0.82rem;font-weight:600;
          color:var(--sc-color);margin:0;font-family:'JetBrains Mono',monospace;
        }
        .cn-social-card__desc {
          font-size:0.875rem;color:var(--cn-text-muted);line-height:1.7;
          margin:0;flex:1;
        }

        /* CTA */
        .cn-social-card__cta {
          margin-top:auto;padding-top:1rem;
          border-top:1px solid var(--cn-border-soft);
        }
        .cn-social-card__cta-btn {
          display:inline-flex;align-items:center;gap:0.4rem;
          font-size:0.875rem;font-weight:700;color:var(--sc-color);
          transition:gap var(--cn-fast) var(--cn-ease);
        }
        .cn-social-card:hover .cn-social-card__cta-btn { gap:0.65rem; }
        .cn-social-card__cta-btn i { font-size:0.85rem; }

        /* ════════════════════════════════════════════
           CONTACT SECTION
        ════════════════════════════════════════════ */
        .cn-contact-section {
          padding:5.5rem 2rem;
          background:var(--cn-bg);
          transition:background var(--cn-mid) var(--cn-ease);
        }

        .cn-contact-card {
          background:var(--cn-card);
          border:1px solid var(--cn-border);
          border-radius:var(--cn-r-xl);
          box-shadow:var(--cn-shadow-sm);
          display:grid;
          grid-template-columns:1fr 1fr;
          overflow:hidden;
          position:relative;
        }
        .cn-contact-card::before {
          content:'';position:absolute;top:0;left:0;right:0;height:4px;
          background:var(--cn-grad);
        }

        /* Left decorative rings */
        .cn-contact-card__deco {
          position:absolute;top:-40px;right:52%;
          width:200px;height:200px;pointer-events:none;z-index:0;
        }
        .cn-contact-card__deco-ring {
          position:absolute;border-radius:50%;
          border:1.5px solid var(--cn-border);
        }
        .cn-contact-card__deco-ring--1 { inset:0; }
        .cn-contact-card__deco-ring--2 { inset:25px; }
        .cn-contact-card__deco-ring--3 { inset:50px; }

        /* Body */
        .cn-contact-card__body {
          padding:3rem 2.5rem;
          display:flex;flex-direction:column;gap:1.25rem;
          position:relative;z-index:1;
        }
        .cn-contact-card__icon {
          width:58px;height:58px;border-radius:var(--cn-r-md);
          background:var(--cn-grad-soft);border:1.5px solid var(--cn-border);
          display:flex;align-items:center;justify-content:center;
          font-size:1.5rem;color:var(--cn-primary);flex-shrink:0;
        }
        .cn-contact-card__title {
          font-size:clamp(1.4rem,2.8vw,1.9rem);font-weight:900;
          color:var(--cn-text);letter-spacing:-0.03em;margin:0;
        }
        .cn-contact-card__desc {
          font-size:0.95rem;color:var(--cn-text-muted);line-height:1.75;margin:0;
        }

        /* Contact details list */
        .cn-contact-card__details { display:flex;flex-direction:column;gap:1rem;margin-top:0.5rem; }
        .cn-contact-detail {
          display:flex;align-items:center;gap:0.85rem;
        }
        .cn-contact-detail__icon {
          width:38px;height:38px;border-radius:var(--cn-r-sm);
          background:var(--cn-grad-soft);border:1px solid var(--cn-border);
          display:flex;align-items:center;justify-content:center;
          font-size:1rem;color:var(--cn-primary);flex-shrink:0;
        }
        .cn-contact-detail__text { display:flex;flex-direction:column;gap:0.1rem; }
        .cn-contact-detail__label {
          font-size:0.7rem;font-weight:700;
          text-transform:uppercase;letter-spacing:0.05em;
          color:var(--cn-text-faint);
        }
        .cn-contact-detail__value {
          font-size:0.88rem;font-weight:600;color:var(--cn-primary);
          text-decoration:none;
          transition:opacity var(--cn-fast) var(--cn-ease);
        }
        .cn-contact-detail__value:hover { opacity:0.75; }

        /* Terminal panel */
        .cn-terminal {
          background:#0d1117;
          display:flex;flex-direction:column;
          border-left:1px solid rgba(255,255,255,0.06);
        }
        .cn-terminal__bar {
          background:#161b22;
          padding:0.6rem 1.1rem;
          display:flex;align-items:center;gap:0.5rem;
          border-bottom:1px solid rgba(255,255,255,0.05);
        }
        .cn-terminal__dot {
          width:12px;height:12px;border-radius:50%;flex-shrink:0;
        }
        .cn-terminal__dot--red { background:#ff5f57; }
        .cn-terminal__dot--yellow { background:#ffbd2e; }
        .cn-terminal__dot--green { background:#28ca41; }
        .cn-terminal__title {
          margin-left:0.5rem;font-family:'JetBrains Mono',monospace;
          font-size:0.75rem;color:#8b949e;
          display:flex;align-items:center;gap:0.35rem;
        }
        .cn-terminal__title i { color:#e34f26;font-size:0.8rem; }

        .cn-terminal__body {
          padding:1.25rem 1.4rem;
          font-family:'JetBrains Mono','Fira Code',monospace;
          font-size:0.82rem;line-height:1.75;
          display:flex;flex-direction:column;gap:0.15rem;
          overflow-y:auto;
        }
        .cn-terminal__line { display:flex;align-items:baseline;gap:0.4rem;color:#abb2bf; }
        .cn-terminal__line--out { color:#8b949e;padding-left:1.2rem; }
        .cn-terminal__prompt { color:#e34f26;font-weight:700;flex-shrink:0; }
        .cn-terminal__cmd { color:#98c379; }
        .cn-terminal__line--cursor .cn-terminal__caret {
          color:#e34f26;animation:cnCaret 1s step-end infinite;
        }
        @keyframes cnCaret { 0%,100%{opacity:1;} 50%{opacity:0;} }

        /* ════════════════════════════════════════════
           STATS STRIP
        ════════════════════════════════════════════ */
        .cn-stats {
          background:var(--cn-grad);
          padding:3.5rem 2rem;
          position:relative;overflow:hidden;
        }
        .cn-stats::before {
          content:'';position:absolute;inset:0;
          background:url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.04'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }
        .cn-stats__grid {
          position:relative;
          display:grid;grid-template-columns:repeat(4,1fr);gap:2rem;
          max-width:900px;margin:0 auto;
        }
        .cn-stat { text-align:center;color:#fff; }
        .cn-stat__icon {
          width:54px;height:54px;border-radius:50%;
          background:rgba(255,255,255,0.18);
          display:flex;align-items:center;justify-content:center;
          font-size:1.4rem;color:#fff;margin:0 auto 0.85rem;
          backdrop-filter:blur(4px);
          transition:transform var(--cn-mid) var(--cn-bounce);
        }
        .cn-stat:hover .cn-stat__icon { transform:scale(1.15) rotate(-5deg); }
        .cn-stat__value {
          font-size:clamp(1.75rem,3.5vw,2.5rem);
          font-weight:900;letter-spacing:-0.04em;line-height:1;margin-bottom:0.35rem;
        }
        .cn-stat__label { font-size:0.85rem;opacity:0.88;font-weight:500;letter-spacing:0.02em; }

        /* ════════════════════════════════════════════
           FAQ
        ════════════════════════════════════════════ */
        .cn-faq-section {
          padding:5.5rem 2rem 6rem;
          background:var(--cn-bg-alt);
          transition:background var(--cn-mid) var(--cn-ease);
        }
        .cn-faq-list {
          max-width:780px;margin:0 auto;
          display:flex;flex-direction:column;gap:0.85rem;
        }

        .cn-faq-item {
          background:var(--cn-card);
          border:1px solid var(--cn-border);
          border-radius:var(--cn-r-md);
          overflow:hidden;
          box-shadow:var(--cn-shadow-xs);
          animation:cnCardIn 0.5s var(--cn-bounce) both;
          transition:box-shadow var(--cn-mid) var(--cn-ease), border-color var(--cn-mid) var(--cn-ease);
        }
        .cn-faq-item--open {
          border-color:var(--cn-primary);
          box-shadow:var(--cn-shadow-brand);
        }

        .cn-faq-item__q {
          width:100%;display:flex;align-items:center;justify-content:space-between;gap:1rem;
          padding:1.2rem 1.5rem;
          background:none;border:none;cursor:pointer;
          font-family:inherit;font-size:0.97rem;font-weight:700;
          color:var(--cn-text);text-align:left;
          transition:background var(--cn-fast) var(--cn-ease);
        }
        .cn-faq-item__q:hover { background:var(--cn-grad-soft); }
        .cn-faq-item--open .cn-faq-item__q { color:var(--cn-primary); }

        .cn-faq-item__chevron {
          color:var(--cn-text-faint);font-size:1rem;flex-shrink:0;
          transition:transform var(--cn-mid) var(--cn-ease), color var(--cn-mid) var(--cn-ease);
        }
        .cn-faq-item--open .cn-faq-item__chevron {
          transform:rotate(180deg);color:var(--cn-primary);
        }

        .cn-faq-item__a-wrap {
          max-height:0;overflow:hidden;
          transition:max-height var(--cn-mid) var(--cn-ease);
        }
        .cn-faq-item--open .cn-faq-item__a-wrap { max-height:300px; }

        .cn-faq-item__a {
          padding:0 1.5rem 1.3rem;
          font-size:0.9rem;color:var(--cn-text-muted);line-height:1.75;margin:0;
        }

        /* ════════════════════════════════════════════
           CTA BANNER
        ════════════════════════════════════════════ */
        .cn-cta {
          position:relative;
          background:var(--cn-grad);
          padding:6rem 2rem;
          text-align:center;overflow:hidden;
        }
        .cn-cta::before {
          content:'';position:absolute;inset:0;
          background:url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }
        .cn-cta__blob {
          position:absolute;border-radius:50%;filter:blur(60px);pointer-events:none;
        }
        .cn-cta__blob--1 { width:320px;height:320px;top:-100px;left:-80px;background:rgba(255,255,255,0.12); }
        .cn-cta__blob--2 { width:260px;height:260px;bottom:-80px;right:-60px;background:rgba(255,255,255,0.1); }

        .cn-cta__inner { position:relative;z-index:1; }
        .cn-cta__icon {
          width:72px;height:72px;border-radius:50%;
          background:rgba(255,255,255,0.2);
          display:flex;align-items:center;justify-content:center;
          font-size:2rem;color:#fff;margin:0 auto 1.5rem;
          backdrop-filter:blur(8px);
          animation:cnIconPulse 3s ease-in-out infinite;
        }
        @keyframes cnIconPulse {
          0%,100%{box-shadow:0 0 0 0 rgba(255,255,255,0.3);}
          50%{box-shadow:0 0 0 16px rgba(255,255,255,0);}
        }
        .cn-cta__title {
          font-size:clamp(1.8rem,4vw,2.8rem);font-weight:900;color:#fff;
          letter-spacing:-0.03em;margin-bottom:1rem;
        }
        .cn-cta__desc {
          max-width:580px;margin:0 auto 2.5rem;
          color:rgba(255,255,255,0.88);font-size:1.05rem;line-height:1.75;
        }
        .cn-cta__actions {
          display:flex;gap:1rem;justify-content:center;flex-wrap:wrap;
        }
        .cn-cta__btn {
          display:inline-flex;align-items:center;gap:0.5rem;
          padding:0.9rem 1.8rem;border-radius:var(--cn-r-md);
          font-family:inherit;font-size:1rem;font-weight:700;
          cursor:pointer;text-decoration:none;border:none;
          transition:all var(--cn-fast) var(--cn-ease);
        }
        .cn-cta__btn i { font-size:1.05rem; }
        .cn-cta__btn--white {
          background:#fff;color:var(--cn-primary);
          box-shadow:0 4px 16px rgba(0,0,0,0.12);
        }
        .cn-cta__btn--white:hover { background:#f8f8f8;transform:translateY(-3px);box-shadow:0 8px 24px rgba(0,0,0,0.18); }
        .cn-cta__btn--outline {
          background:transparent;border:2px solid rgba(255,255,255,0.75);color:#fff;
        }
        .cn-cta__btn--outline:hover { background:rgba(255,255,255,0.15);border-color:#fff;transform:translateY(-3px); }

        /* ════════════════════════════════════════════
           BACK TO TOP
        ════════════════════════════════════════════ */
        .cn-back-top {
          position:fixed;bottom:1.5rem;right:1.5rem;
          width:46px;height:46px;border-radius:50%;border:none;
          background:var(--cn-grad);color:#fff;font-size:1.15rem;
          display:flex;align-items:center;justify-content:center;
          cursor:pointer;z-index:900;
          box-shadow:0 4px 16px rgba(227,79,38,0.3);
          opacity:0;pointer-events:none;transform:translateY(12px) scale(0.85);
          transition:opacity var(--cn-fast) var(--cn-ease), transform var(--cn-mid) var(--cn-bounce), box-shadow var(--cn-fast) var(--cn-ease);
        }
        .cn-back-top--visible { opacity:1;pointer-events:auto;transform:translateY(0) scale(1); }
        .cn-back-top:hover { background:var(--cn-grad-dk);transform:translateY(-4px) scale(1.08);box-shadow:0 8px 22px rgba(227,79,38,0.4); }

        /* ════════════════════════════════════════════
           RESPONSIVE
        ════════════════════════════════════════════ */
        @media (max-width:900px) {
          .cn-contact-card { grid-template-columns:1fr; }
          .cn-terminal { border-left:none;border-top:1px solid rgba(255,255,255,0.06); }
          .cn-stats__grid { grid-template-columns:repeat(2,1fr);gap:1.5rem; }
          .cn-cards-grid { grid-template-columns:repeat(auto-fill,minmax(240px,1fr)); }
        }
        @media (max-width:640px) {
          .cn-hero { padding:5.5rem 1.25rem 4rem; }
          .cn-container { padding:0 1.25rem; }
          .cn-socials, .cn-contact-section, .cn-faq-section { padding:4rem 1.25rem; }
          .cn-hero__title { font-size:2.1rem; }
          .cn-hero__img { width:110px;height:110px; }
          .cn-hero__platforms { gap:0.45rem; }
          .cn-hero__platform-pill { padding:0.4rem 0.85rem;font-size:0.78rem; }
          .cn-cards-grid { grid-template-columns:1fr; }
          .cn-stats { padding:2.5rem 1.25rem; }
          .cn-stats__grid { grid-template-columns:repeat(2,1fr);gap:1rem; }
          .cn-stat__value { font-size:1.6rem; }
          .cn-contact-card__body { padding:2rem 1.5rem; }
          .cn-cta { padding:4rem 1.25rem; }
          .cn-cta__actions { flex-direction:column;align-items:center; }
          .cn-cta__btn { width:100%;justify-content:center; }
          .cn-section-title { font-size:1.65rem; }
        }
        @media (prefers-reduced-motion:reduce) {
          *,*::before,*::after {
            animation-duration:0.01ms !important;
            animation-iteration-count:1 !important;
            transition-duration:0.01ms !important;
          }
        }
      `}</style>
    </div>
  );
}
