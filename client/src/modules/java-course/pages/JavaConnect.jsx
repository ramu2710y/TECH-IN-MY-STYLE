import { useState } from 'react';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { ArrowRightIcon, UsersIcon, BellIcon, BookOpenIcon, ChatBubbleLeftRightIcon, SparklesIcon } from '@heroicons/react/24/outline';

const TelegramSVG = () => (
  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
  </svg>
);

const InstagramSVG = () => (
  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const WhatsAppSVG = () => (
  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const YouTubeSVG = () => (
  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const platforms = [
  {
    name: 'Telegram',
    handle: '@Tech_in_my_style_bot',
    url: 'https://t.me/Tech_in_my_style_bot',
    members: '5K+ Members',
    cta: 'Join Channel',
    desc: 'Get instant Java tips, code snippets, daily challenges, and quick Q&A sessions delivered straight to you.',
    features: ['Daily Java tips', 'Code challenges', 'Q&A sessions', 'Resource sharing'],
    gradient: 'from-blue-500 to-blue-600',
    glow: 'shadow-blue-500/25',
    border: 'border-blue-200/50 dark:border-blue-500/20',
    bg: 'bg-gradient-to-br from-blue-50 to-white dark:from-blue-900/10 dark:to-java-card-dark',
    Icon: TelegramSVG,
  },
  {
    name: 'Instagram',
    handle: '@techinmystyle',
    url: 'https://www.instagram.com/techinmystyle',
    members: '10K+ Followers',
    cta: 'Follow Us',
    desc: 'Visual Java learning — beautiful infographics, 60-second reels, and story-format coding concepts.',
    features: ['Java infographics', 'Coding reels', 'Story tutorials', 'Behind the scenes'],
    gradient: 'from-pink-500 via-purple-500 to-orange-400',
    glow: 'shadow-pink-500/25',
    border: 'border-pink-200/50 dark:border-pink-500/20',
    bg: 'bg-gradient-to-br from-pink-50 to-white dark:from-pink-900/10 dark:to-java-card-dark',
    Icon: InstagramSVG,
  },
  {
    name: 'WhatsApp',
    handle: 'Tech In My Style Channel',
    url: 'https://whatsapp.com/channel/0029VbAZrCD5fM5aOU10Av0d',
    members: '8K+ Subscribers',
    cta: 'Join Channel',
    desc: 'Stay updated with Java tutorials, practice problems, and important announcements in your WhatsApp.',
    features: ['Tutorial updates', 'Practice problems', 'Quick tips', 'Topic releases'],
    gradient: 'from-green-500 to-emerald-600',
    glow: 'shadow-green-500/25',
    border: 'border-green-200/50 dark:border-green-500/20',
    bg: 'bg-gradient-to-br from-green-50 to-white dark:from-green-900/10 dark:to-java-card-dark',
    Icon: WhatsAppSVG,
  },
  {
    name: 'YouTube',
    handle: '@TECHINMYSTYLE',
    url: 'https://www.youtube.com/@TECHINMYSTYLE',
    members: '15K+ Subscribers',
    cta: 'Subscribe',
    desc: 'Full Java course videos, live coding sessions, project walkthroughs, and career advice.',
    features: ['Full Java course', 'Live coding', 'Project walkthroughs', 'Interview prep'],
    gradient: 'from-red-500 to-rose-600',
    glow: 'shadow-red-500/25',
    border: 'border-red-200/50 dark:border-red-500/20',
    bg: 'bg-gradient-to-br from-red-50 to-white dark:from-red-900/10 dark:to-java-card-dark',
    Icon: YouTubeSVG,
  },
];

const benefits = [
  {
    Icon: BookOpenIcon,
    title: 'Learn Faster',
    desc: 'Daily Java tips and tricks from our expert community',
    color: 'text-java-blue bg-blue-50 dark:bg-blue-900/20',
  },
  {
    Icon: ChatBubbleLeftRightIcon,
    title: 'Get Help',
    desc: 'Ask questions and get answers from Java experts',
    color: 'text-java-orange bg-orange-50 dark:bg-orange-900/20',
  },
  {
    Icon: UsersIcon,
    title: 'Network',
    desc: 'Connect with thousands of Java developers globally',
    color: 'text-purple-600 bg-purple-50 dark:bg-purple-900/20',
  },
  {
    Icon: BellIcon,
    title: 'Stay Updated',
    desc: 'Never miss new content, Java news, or updates',
    color: 'text-green-600 bg-green-50 dark:bg-green-900/20',
  },
];

const recentActivity = [
  {
    platform: 'YouTube',
    text: '🎬 New video: "Java Streams API Complete Guide" — 2.1K views in 24hrs!',
    time: '2 hours ago',
    color: 'border-red-500/30 bg-red-50/50 dark:bg-red-900/5',
  },
  {
    platform: 'Telegram',
    text: '📚 Daily challenge posted: Implement a thread-safe Singleton in Java!',
    time: '5 hours ago',
    color: 'border-blue-500/30 bg-blue-50/50 dark:bg-blue-900/5',
  },
  {
    platform: 'Instagram',
    text: '🎨 New Java Collections infographic — saved 3,200 times!',
    time: '1 day ago',
    color: 'border-pink-500/30 bg-pink-50/50 dark:bg-pink-900/5',
  },
  {
    platform: 'WhatsApp',
    text: '💬 OOP Design Patterns cheat sheet shared on channel!',
    time: '2 days ago',
    color: 'border-green-500/30 bg-green-50/50 dark:bg-green-900/5',
  },
];

export default function Connect() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [subLoading, setSubLoading] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error('Please enter a valid email address');
      return;
    }
    setSubLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setSubLoading(false);
    setSubscribed(true);
    toast.success("You're subscribed! Welcome aboard 🚀", { duration: 5000 });
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-java-darker overflow-x-hidden">

      {/* ===== HERO HEADER ===== */}
      <section className="relative py-24 bg-gradient-to-br from-java-dark via-[#0a1628] to-java-darker overflow-hidden">
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
        <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-java-blue/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-java-orange/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-java-blue/10 border border-java-blue/20 text-java-orange text-sm font-medium mb-6 font-poppins">
            🤝 Our Community
          </div>

          <h1 className="text-5xl sm:text-6xl font-bold font-poppins text-white mb-6">
            Let's{' '}
            <span className="bg-gradient-to-r from-java-blue via-java-lightblue to-java-orange bg-clip-text text-transparent">
              Connect!
            </span>
          </h1>

          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
            Join the Java In My Style community across all platforms. Learn together, grow together,
            and connect with 38,000+ Java developers worldwide.
          </p>

          {/* Community Stats */}
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { val: '38K+', label: 'Community Members', color: 'border-java-blue/30 bg-java-blue/5' },
              { val: '4', label: 'Active Platforms', color: 'border-java-orange/30 bg-java-orange/5' },
              { val: '500+', label: 'Content Posts', color: 'border-purple-500/30 bg-purple-500/5' },
              { val: 'Free', label: 'Always', color: 'border-green-500/30 bg-green-500/5' },
            ].map((s) => (
              <div
                key={s.label}
                className={`${s.color} backdrop-blur-sm border rounded-2xl px-7 py-4`}
              >
                <p className="text-white font-bold text-2xl font-poppins">{s.val}</p>
                <p className="text-gray-400 text-xs mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>

          {/* Breadcrumb */}
          <div className="flex items-center justify-center gap-2 mt-10 text-sm text-gray-400">
            <Link to="/java-course" className="hover:text-java-orange transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-java-orange">Connect</span>
          </div>
        </div>
      </section>

      {/* ===== PLATFORM CARDS ===== */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section heading */}
          <div className="text-center mb-14">
            <span className="inline-block text-java-orange font-semibold text-sm uppercase tracking-widest mb-3">
              Find Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-poppins text-gray-900 dark:text-white">
              We&apos;re{' '}
              <span className="java-gradient-text">Everywhere</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {platforms.map((p) => (
              <div
                key={p.name}
                className={`relative rounded-3xl border ${p.border} ${p.bg} overflow-hidden group card-hover`}
              >
                <div className="p-8">
                  {/* Top row: icon + member badge */}
                  <div className="flex items-start justify-between mb-6">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${p.gradient} flex items-center justify-center text-white shadow-lg ${p.glow} shadow-xl group-hover:scale-110 transition-transform duration-300`}
                    >
                      <p.Icon />
                    </div>
                    <div
                      className={`px-4 py-1.5 rounded-full bg-gradient-to-r ${p.gradient} text-white text-xs font-bold font-poppins shadow-sm`}
                    >
                      {p.members}
                    </div>
                  </div>

                  {/* Platform info */}
                  <h3 className="text-2xl font-bold font-poppins text-gray-900 dark:text-white mb-1">
                    {p.name}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 font-mono mb-4">
                    {p.handle}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6">
                    {p.desc}
                  </p>

                  {/* Feature list */}
                  <div className="grid grid-cols-2 gap-2 mb-8">
                    {p.features.map((f) => (
                      <div
                        key={f}
                        className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-java-orange flex-shrink-0" />
                        {f}
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-gradient-to-r ${p.gradient} text-white font-bold text-sm font-poppins hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300`}
                  >
                    {p.cta}
                    <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>

                {/* Decorative glow orb */}
                <div
                  className={`absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-gradient-to-br ${p.gradient} opacity-5 group-hover:opacity-10 transition-opacity blur-2xl`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY JOIN ===== */}
      <section className="py-16 bg-white dark:bg-java-card-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-java-orange font-semibold text-sm uppercase tracking-widest mb-3">
              Benefits
            </span>
            <h2 className="text-3xl font-bold font-poppins text-gray-900 dark:text-white">
              Why Join Our{' '}
              <span className="java-gradient-text">Community?</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, i) => (
              <div
                key={i}
                className="group p-7 rounded-3xl border border-gray-100 dark:border-java-border-dark bg-gray-50 dark:bg-java-darker card-hover text-center"
              >
                <div
                  className={`w-16 h-16 rounded-2xl ${b.color} flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300`}
                >
                  <b.Icon className="w-7 h-7" />
                </div>
                <h3 className="font-poppins font-bold text-gray-900 dark:text-white text-base mb-2">
                  {b.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                  {b.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== RECENT ACTIVITY ===== */}
      <section className="py-16 bg-gray-50 dark:bg-java-darker">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="inline-block text-java-orange font-semibold text-sm uppercase tracking-widest mb-3">
              Live Feed
            </span>
            <h2 className="text-3xl font-bold font-poppins text-gray-900 dark:text-white">
              Recent <span className="java-gradient-text">Activity</span>
            </h2>
          </div>

          <div className="space-y-4">
            {recentActivity.map((item, i) => (
              <div
                key={i}
                className={`flex items-start gap-4 p-5 rounded-2xl border ${item.color} card-hover`}
              >
                <div className="w-10 h-10 rounded-xl bg-white dark:bg-java-card-dark flex items-center justify-center text-lg flex-shrink-0 shadow-sm">
                  {item.platform === 'YouTube'
                    ? '▶️'
                    : item.platform === 'Telegram'
                    ? '✈️'
                    : item.platform === 'Instagram'
                    ? '📸'
                    : '💬'}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold font-poppins text-gray-600 dark:text-gray-400">
                      {item.platform}
                    </span>
                    <span className="text-xs text-gray-400">·</span>
                    <span className="text-xs text-gray-400">{item.time}</span>
                  </div>
                  <p className="text-gray-800 dark:text-gray-200 text-sm leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== NEWSLETTER ===== */}
      <section className="relative py-20 overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-java-blue via-java-lightblue to-java-blue" />
        {/* Dot pattern overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '25px 25px',
          }}
        />

        <div className="relative max-w-xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm font-medium mb-6">
            <SparklesIcon className="w-4 h-4" /> Stay in the Loop
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold font-poppins text-white mb-4">
            Never Miss a Java Update
          </h2>
          <p className="text-white/75 text-base mb-8 leading-relaxed">
            Get the latest Java tutorials, tips, community highlights, and exclusive content
            delivered to your inbox weekly.
          </p>

          {subscribed ? (
            <div className="flex items-center justify-center gap-3 bg-white/10 border border-white/20 rounded-2xl px-6 py-5">
              <span className="text-3xl">🎉</span>
              <div className="text-left">
                <p className="text-white font-bold font-poppins">You&apos;re subscribed!</p>
                <p className="text-white/70 text-sm">
                  Welcome to the Java In My Style community.
                </p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address..."
                className="flex-1 px-5 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-white focus:bg-white/15 transition-all text-sm font-roboto"
              />
              <button
                type="submit"
                disabled={subLoading}
                className="px-7 py-3.5 bg-white text-java-blue font-bold rounded-xl hover:bg-java-orange hover:text-white transition-all duration-300 hover:shadow-2xl disabled:opacity-60 whitespace-nowrap text-sm font-poppins flex items-center justify-center gap-2"
              >
                {subLoading ? (
                  <span className="w-4 h-4 border-2 border-java-blue/30 border-t-java-blue rounded-full animate-spin" />
                ) : null}
                Subscribe Free
              </button>
            </form>
          )}

          <p className="text-white/40 text-xs mt-4">
            No spam ever. Unsubscribe anytime. 100% free.
          </p>
        </div>
      </section>
    </div>
  );
}
