import { useState } from 'react'
import { Link } from 'react-router-dom'
import AiHeader from '../components/AiHeader'
import AiFooter from '../components/AiFooter'
import '../styles/ai-topics.css'

const topicsData = [
  { icon: '🤖', title: 'What is AI?', subtopics: [
    { label: 'Definition of Artificial Intelligence', path: '/ai-course/topics/what-is-ai/definition' },
    { label: 'Brief history and evolution', path: '/ai-course/topics/what-is-ai/history' },
    { label: 'Goals and importance', path: '/ai-course/topics/what-is-ai/goals' },
  ]},
  { icon: '⚙️', title: 'Applications of AI', subtopics: [
    { label: 'Healthcare', path: '/ai-course/topics/applications/healthcare' },
    { label: 'Finance', path: '/ai-course/topics/applications/finance' },
    { label: 'Retail', path: '/ai-course/topics/applications/retail' },
    { label: 'Education', path: '/ai-course/topics/applications/education' },
    { label: 'Transportation', path: '/ai-course/topics/applications/transportation' },
    { label: 'Gaming', path: '/ai-course/topics/applications/gaming' },
  ]},
  { icon: '🧩', title: 'Types of AI', subtopics: [
    { label: 'Narrow AI (Weak AI)', path: '/ai-course/topics/types/narrow-ai' },
    { label: 'General AI (Strong AI)', path: '/ai-course/topics/types/general-ai' },
    { label: 'Super AI (Future concept)', path: '/ai-course/topics/types/super-ai' },
  ]},
  { icon: '🕵️', title: 'Intelligent Agents', subtopics: [
    { label: 'Agent vs environment', path: '/ai-course/topics/agents/agent-environment' },
    { label: 'Types of agents', path: '/ai-course/topics/agents/agent-types' },
  ]},
  { icon: '🔀', title: 'AI vs ML vs DL', subtopics: [
    { label: 'Core differences with examples', path: '/ai-course/topics/ai-ml-dl/differences' },
    { label: 'Use cases to show practical distinctions', path: '/ai-course/topics/ai-ml-dl/use-cases' },
  ]},
  { icon: '🧪', title: 'Turing Test', subtopics: [
    { label: 'What it is and how it tests machine intelligence', path: '/ai-course/topics/turing-test/what-is' },
    { label: 'Real-world relevance today', path: '/ai-course/topics/turing-test/relevance' },
  ]},
  { icon: '🔍', title: 'State Space Search', subtopics: [
    { label: 'Problem-solving via search', path: '/ai-course/topics/search/problem-solving' },
    { label: 'Algorithms: BFS, DFS, A*, Uniform Cost', path: '/ai-course/topics/search/algorithms' },
  ]},
  { icon: '🧠', title: 'Knowledge Representation', subtopics: [
    { label: 'Propositional logic', path: '/ai-course/topics/knowledge/propositional-logic' },
    { label: 'Semantic networks', path: '/ai-course/topics/knowledge/semantic-networks' },
    { label: 'Frames and ontologies', path: '/ai-course/topics/knowledge/frames-ontologies' },
  ]},
  { icon: '💡', title: 'Expert Systems', subtopics: [
    { label: 'Rule-based systems', path: '/ai-course/topics/expert-systems/rule-based' },
    { label: 'Architecture (inference engine, knowledge base)', path: '/ai-course/topics/expert-systems/architecture' },
    { label: 'Real-world domains like medical diagnosis', path: '/ai-course/topics/expert-systems/real-world' },
  ]},
  { icon: '♟️', title: 'AI in Game Playing', subtopics: [
    { label: 'Minimax algorithm', path: '/ai-course/topics/game-playing/minimax' },
    { label: 'Alpha-beta pruning', path: '/ai-course/topics/game-playing/alpha-beta' },
    { label: 'Example: Tic-Tac-Toe, Chess bots', path: '/ai-course/topics/game-playing/examples' },
  ]},
  { icon: '🚀', title: 'Mini Projects', subtopics: [
    { label: 'Regression Model for Web-Friendly Data', path: '/ai-course/topics/mini/project1' },
    { label: 'Classification Model for Tabular Data', path: '/ai-course/topics/mini/project2' },
  ]},
]

export default function AiTopics() {
  const [search, setSearch] = useState('')

  const filtered = topicsData.filter(t =>
    t.title.toLowerCase().includes(search.toLowerCase()) ||
    t.subtopics.some(s => s.label.toLowerCase().includes(search.toLowerCase()))
  )

  return (
    <>
      <AiHeader />

      <section className="topics-hero">
        <span className="badge badge-cyan">All Topics</span>
        <h1>Explore <span className="grad">AI Topics</span></h1>
        <p>Dive into our comprehensive collection of AI topics, from fundamentals to advanced concepts.</p>
      </section>

      <section className="topics-body">
        <div className="container">
          <div className="topics-search">
            <i className="fas fa-search search-icon"></i>
            <input
              type="text"
              placeholder="Search topics and subtopics..."
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>

          <div className="topics-grid">
            {filtered.length === 0 ? (
              <div className="no-results">
                <i className="fas fa-search"></i>
                <p>No topics found for "<strong>{search}</strong>"</p>
              </div>
            ) : filtered.map((topic, i) => (
              <div className="topic-card" key={i}>
                <div className="tc-header">
                  <div className="tc-icon">{topic.icon}</div>
                  <h2>{topic.title}</h2>
                </div>
                <div className="tc-links">
                  {topic.subtopics.map((s, j) => (
                    <Link to={s.path} className="tc-link" key={j}>
                      <i className="fas fa-chevron-right"></i>
                      {s.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AiFooter />
    </>
  )
}
