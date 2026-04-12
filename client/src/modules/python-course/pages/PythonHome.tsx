import { Link } from 'react-router-dom'
import PythonNavbar from '../components/PythonNavbar'
import PythonFooter from '../components/PythonFooter'
import './Home.css'

function Terminal() {
  return (
    <div className="py-terminal">
      <div className="py-term-topbar">
        <div className="py-term-dots"><span/><span/><span/></div>
        <div className="py-term-title">python3 — hello.py</div>
      </div>
      <div className="py-term-body">
        <div className="py-tl"><span className="py-tl-prompt">$</span> <span className="py-tl-cmd">python3 hello.py</span></div>
        <div className="py-tl-blank"/>
        <div className="py-tl"><span className="py-tl-comment"># Python in my style</span></div>
        <div className="py-tl-blank"/>
        <div className="py-tl"><span className="py-tl-kw">def </span><span className="py-tl-fn">learn</span>(topic):</div>
        <div className="py-tl">    <span className="py-tl-kw">return </span><span className="py-tl-str">f"Mastered: {'{'}topic{'}'} ✓"</span></div>
        <div className="py-tl-blank"/>
        <div className="py-tl"><span className="py-tl-var">topics</span> = [<span className="py-tl-str">"Basics"</span>, <span className="py-tl-str">"OOP"</span>, <span className="py-tl-str">"Advanced"</span>]</div>
        <div className="py-tl"><span className="py-tl-kw">for </span><span className="py-tl-var">t </span><span className="py-tl-kw">in </span><span className="py-tl-var">topics</span>:</div>
        <div className="py-tl">    <span className="py-tl-fn">print</span>(learn(t))</div>
        <div className="py-tl-blank"/>
        <div className="py-tl-out">Mastered: Basics ✓</div>
        <div className="py-tl-out">Mastered: OOP ✓</div>
        <div className="py-tl-out">Mastered: Advanced ✓</div>
        <div className="py-tl-blank"/>
        <div className="py-tl"><span className="py-tl-prompt">$</span> <span className="py-tl-cmd"> </span><span className="py-cursor"/></div>
      </div>
    </div>
  )
}

export default function PythonHome() {
  return (
    <div className="py-home">
      <PythonNavbar showTasks />

      <section className="py-hero">
        <div className="py-hero-inner">
          <div className="py-hero-content">
            <div className="py-hero-eyebrow">🐍 Python Learning Platform</div>
            <h1 className="py-hero-h1">Master Python<br /><span className="py-hl">Your Way</span></h1>
            <p className="py-hero-sub">Comprehensive, interactive Python resources — from absolute basics to advanced topics. Learn at your own pace with real examples.</p>
            <div className="py-hero-btns" style={{ display: 'flex', gap: '1rem' }}>
              <Link to="/python-course/topics" className="py-btn py-btn-y">Explore Topics →</Link>
            </div>
            <div className="py-hero-stats">
              <div className="py-hs-item"><div className="py-hs-n">50+</div><div className="py-hs-l">Topics</div></div>
              <div className="py-hs-item"><div className="py-hs-n">30</div><div className="py-hs-l">Practice Tasks</div></div>
              <div className="py-hs-item"><div className="py-hs-n">100%</div><div className="py-hs-l">Free</div></div>
            </div>
          </div>
          <div className="py-terminal-wrap">
            <Terminal />
          </div>
        </div>
      </section>

      <section className="py-feat-sec">
        <div className="py-sec-hd">
          <span className="py-chip">✨ Why Choose Us</span>
          <h2>Everything you need to learn Python</h2>
          <p>Structured curriculum, real examples, interview prep, and hands-on tasks — all in one place.</p>
        </div>
        <div className="py-feat-grid">
          {[
            { i:'📚', t:'Comprehensive Curriculum', d:'From basics to advanced — everything structured and easy to follow.' },
            { i:'🎯', t:'Real-World Examples', d:'Practical code examples and applications to solidify your understanding.' },
            { i:'🧠', t:'Interview Prep', d:'Curated interview questions for every topic to help you land your dream job.' },
            { i:'✅', t:'30 Practice Tasks', d:'Hands-on coding tasks with instant validation to test your skills.' },
          ].map(f => (
            <div key={f.t} className="py-feat-card">
              <div className="py-feat-ico">{f.i}</div>
              <h3>{f.t}</h3>
              <p>{f.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-prev-sec">
        <div className="py-prev-hd">
          <div>
            <span className="py-chip">📖 Curriculum</span>
            <h2>What You'll Learn</h2>
          </div>
          <Link to="/python-course/topics" className="py-btn py-btn-o">See All Topics →</Link>
        </div>
        <div className="py-prev-grid">
          {[
            { i:'🔤', t:'Python Basics', d:'Variables, data types, operators, control flow, and Python syntax fundamentals.' },
            { i:'🏗️', t:'Object-Oriented Programming', d:'Classes, objects, inheritance, encapsulation, polymorphism, and abstraction.' },
            { i:'📦', t:'Data Structures', d:'Lists, tuples, sets, dictionaries — basic and advanced usage patterns.' },
          ].map(c => (
            <div key={c.t} className="py-prev-card">
              <div className="py-pc-ico">{c.i}</div>
              <h3>{c.t}</h3>
              <p>{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-cta-sec">
        <div className="py-cta-inner">
          <h2>Ready to start your <span>Python journey?</span></h2>
          <p>Join thousands of learners mastering Python with our structured, hands-on curriculum.</p>
          <div className="py-cta-btns">
            <Link to="/python-course/topics" className="py-btn py-btn-y">Start Learning Free →</Link>
            <Link to="/python-course/tasks" className="py-btn py-btn-w">Try a Task</Link>
          </div>
        </div>
      </section>

      <PythonFooter />
    </div>
  )
}
