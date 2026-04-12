import { useParams, Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import PythonNavbar from '../components/PythonNavbar'
import PythonFooter from '../components/PythonFooter'
import { getSubtopic } from '../data/allSubtopics'
import './SubtopicPage.css'

const VidIco = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
const BookIco = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>

const IQItem = ({ q, a }: { q: string, a: string }) => {
  const [open, setOpen] = useState(false)
  return (
    <div className={`py-iq-item ${open ? 'open' : ''}`}>
      <div className="py-iq-q" onClick={() => setOpen(!open)}>
        <span>{q}</span>
        <svg className="py-iq-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="6 9 12 15 18 9"/></svg>
      </div>
      <div className={`py-iq-a ${open ? 'showing' : ''}`}>
        <div className="py-iq-a-inner">{a}</div>
      </div>
    </div>
  )
}

export default function SubtopicPage() {
  const { slug } = useParams<{ slug: string }>()
  const data = getSubtopic(slug || '')
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => { window.scrollTo(0, 0) }, [slug])
  useEffect(() => {
    const obs = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }), { threshold: 0.08 })
    ref.current?.querySelectorAll('.cs').forEach(s => obs.observe(s))
    return () => obs.disconnect()
  }, [slug])

  if (!data) return <div style={{ padding: '4rem', textAlign: 'center' }}>Topic not found</div>

  const scroll = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault()
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="py-subtopic-page">
      <div className="py-sub-layout">
        <aside className="py-sub-sidebar">
          <div className="py-toc-box">
            <div className="py-toc-hd"><span>📋 Contents</span></div>
            <ul className="py-toc-ul">
              {[['#desc','Description'],['#prereq','Prerequisites'],['#examples','Examples'],['#rw','Real-World Uses'],['#apps','Applications'],['#res','Resources'],['#iq','Interview Questions']].map(([h,l]) => (
                <li key={h}><a href={h} onClick={scroll(h)}>{l}</a></li>
              ))}
            </ul>
          </div>
        </aside>

        <main className="py-sub-main">
          <div className="py-sub-crumbs">
            <Link to="/python-course">Home</Link><span className="py-sep">›</span>
            <Link to="/python-course/topics">Topics</Link><span className="py-sep">›</span>
            <span>{data.breadcrumb}</span><span className="py-sep">›</span>
            <span>{data.title}</span>
          </div>
          <div className="py-sub-title-area">
            <h1>{data.title}</h1>
            <div className="py-sub-chips">
              <span className="py-sub-chip"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>Introduction</span>
              <span className="py-sub-chip"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>{data.readingTime} read</span>
            </div>
          </div>

          <div className="py-sub-sections" ref={ref}>
            {[
              { id:'desc', ico:'📝', title:'Description', content: <p>{data.description}</p> },
              { id:'prereq', ico:'✅', title:'Prerequisites', content: <ul className="py-prereq-ul">{data.prerequisites.map((p,i)=><li key={i}>{p}</li>)}</ul> },
              { id:'examples', ico:'💻', title:'Examples', content: <><p>Here's a practical Python example:</p><div className="py-code-blk"><div className="py-code-blk-bar"><span>python</span><span>example.py</span></div><pre>{data.examples}</pre></div></> },
              { id:'rw', ico:'🌍', title:'Real-World Applications', content: data.realWorld.map((x,i)=><p key={i}>• {x}</p>) },
              { id:'apps', ico:'🚀', title:"Where It's Applied", content: data.applications.map((x,i)=><p key={i}>• {x}</p>) },
              { id:'res', ico:'📚', title:'Resources', content: data.resources.length > 0 ? data.resources.map((r,i)=>(
                <div key={i} className="py-res-card">
                  <div className="py-res-ico">{r.icon==='video'?<VidIco/>:<BookIco/>}</div>
                  <div className="py-res-info"><h4>{r.title}</h4><p>{r.description}</p></div>
                  <a href={r.link} target="_blank" rel="noopener noreferrer" className="py-res-link">{r.linkText}</a>
                </div>
              )) : <p style={{color:'var(--muted)',fontStyle:'italic'}}>Resources coming soon.</p> },
              { id:'iq', ico:'🎯', title:'Interview Questions', content: <div className="py-iq-list">{data.interviewQuestions.map((q,i)=><IQItem key={i} q={q.q} a={q.a} />)}</div> },
            ].map(s => (
              <div key={s.id} id={s.id} className="py-cs">
                <div className="py-cs-hd"><div className="py-cs-ico">{s.ico}</div><h2>{s.title}</h2></div>
                <div className="py-cs-body">{s.content}</div>
              </div>
            ))}
          </div>
        </main>
      </div>
      <PythonFooter />
    </div>
  )
}

