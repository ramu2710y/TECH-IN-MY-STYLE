import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GenAiCodeBlock from '../components/GenAiCodeBlock';

const projects = [
  {
    id: 'chatbot',
    title: 'AI Chatbot UI',
    subtitle: 'Streaming · Multi-turn · Context-aware',
    description: 'A production-grade chat interface with real-time streaming, conversation memory, and a polished UI that feels like ChatGPT.',
    icon: 'fas fa-comments',
    accent: '#a78bfa',
    accentDim: 'rgba(167,139,250,0.12)',
    accentBorder: 'rgba(167,139,250,0.3)',
    accentGlow: 'rgba(167,139,250,0.2)',
    tags: ['React', 'OpenAI', 'Streaming', 'Hooks'],
    difficulty: 'Beginner',
    diffColor: '#4ade80',
    diffBg: 'rgba(74,222,128,0.1)',
    steps: ['Set up OpenAI client', 'Build message state', 'Stream tokens in real-time', 'Render chat UI'],
    features: ['Real-time token streaming', 'Conversation history', 'System prompt config', 'Auto-scroll to latest'],
    preview: {
      type: 'chat',
      messages: [
        { role: 'user', content: 'What is RAG?' },
        { role: 'assistant', content: 'RAG (Retrieval Augmented Generation) enhances LLMs by retrieving relevant documents before generating a response — reducing hallucinations and enabling private data access.' },
      ],
    },
    code: `import { useState, useRef, useEffect } from 'react';
import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true, // Use server-side in production!
});

export default function AIChatbot() {
  const [messages, setMessages] = useState([
    { role: 'system', content: 'You are a helpful AI assistant.' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [streamingText, setStreamingText] = useState('');
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, streamingText]);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;
    const userMessage = { role: 'user', content: input };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput('');
    setLoading(true);
    setStreamingText('');

    try {
      const stream = await client.chat.completions.create({
        model: 'gpt-4o',
        messages: newMessages,
        stream: true,
      });
      let fullText = '';
      for await (const chunk of stream) {
        const delta = chunk.choices[0]?.delta?.content || '';
        fullText += delta;
        setStreamingText(fullText);
      }
      setMessages(prev => [...prev, { role: 'assistant', content: fullText }]);
      setStreamingText('');
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const display = messages.filter(m => m.role !== 'system');

  return (
    <div className="flex flex-col h-screen max-w-2xl mx-auto p-4 bg-[#04040a]">
      <div className="flex-1 overflow-y-auto space-y-4 py-4">
        {display.map((msg, i) => (
          <div key={i} className={\`flex \${msg.role === 'user' ? 'justify-end' : 'justify-start'}\`}>
            <div className={\`max-w-[80%] px-4 py-3 rounded-2xl text-sm leading-relaxed \${
              msg.role === 'user'
                ? 'bg-violet-600 text-white'
                : 'bg-white/8 text-gray-200 border border-white/10'
            }\`}>
              {msg.content}
            </div>
          </div>
        ))}
        {streamingText && (
          <div className="flex justify-start">
            <div className="max-w-[80%] px-4 py-3 rounded-2xl bg-white/8 text-gray-200 text-sm border border-white/10">
              {streamingText}<span className="animate-pulse ml-0.5">▋</span>
            </div>
          </div>
        )}
        <div ref={bottomRef} />
      </div>
      <div className="flex gap-2 pt-4 border-t border-white/8">
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && sendMessage()}
          placeholder="Ask anything..."
          className="flex-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 text-sm outline-none focus:border-violet-500/50 transition-colors"
        />
        <button
          onClick={sendMessage}
          disabled={loading || !input.trim()}
          className="px-5 py-3 rounded-xl font-semibold text-sm text-white disabled:opacity-40 transition-all"
          style={{ background: 'linear-gradient(135deg,#7c3aed,#0891b2)' }}
        >
          {loading ? '...' : 'Send'}
        </button>
      </div>
    </div>
  );
}`,
  },
  {
    id: 'email',
    title: 'Email Generator',
    subtitle: 'Tone-aware · Professional · Instant',
    description: 'Transform bullet points into polished professional emails. Supports 5 tones and generates in under 3 seconds.',
    icon: 'fas fa-envelope-open-text',
    accent: '#67e8f9',
    accentDim: 'rgba(103,232,249,0.1)',
    accentBorder: 'rgba(103,232,249,0.3)',
    accentGlow: 'rgba(103,232,249,0.18)',
    tags: ['React', 'OpenAI', 'Forms', 'UX'],
    difficulty: 'Beginner',
    diffColor: '#4ade80',
    diffBg: 'rgba(74,222,128,0.1)',
    steps: ['Define tone options', 'Build form UI', 'Craft system prompt', 'Display + copy output'],
    features: ['5 writing tones', 'Bullet-to-email conversion', 'One-click copy', 'Instant generation'],
    preview: { type: 'form', fields: ['Subject', 'Key Points', 'Tone'] },
    code: `import { useState } from 'react';
import OpenAI from 'openai';

const client = new OpenAI({ apiKey: import.meta.env.VITE_OPENAI_API_KEY, dangerouslyAllowBrowser: true });
const TONES = ['Professional', 'Friendly', 'Formal', 'Casual', 'Persuasive'];

export default function EmailGenerator() {
  const [subject, setSubject] = useState('');
  const [points, setPoints] = useState('');
  const [tone, setTone] = useState('Professional');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const generate = async () => {
    if (!subject || !points) return;
    setLoading(true);
    try {
      const response = await client.chat.completions.create({
        model: 'gpt-4o',
        messages: [
          { role: 'system', content: \`You are an expert email writer. Write \${tone.toLowerCase()} emails that are clear, concise, and impactful.\` },
          { role: 'user', content: \`Subject: \${subject}\\nKey points:\\n\${points}\\n\\nWrite a complete email with subject line, greeting, body, and sign-off.\` },
        ],
        temperature: 0.7,
      });
      setEmail(response.choices[0].message.content);
    } finally { setLoading(false); }
  };

  const copy = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-4">
      <input value={subject} onChange={e => setSubject(e.target.value)} placeholder="Email subject..."
        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm outline-none focus:border-cyan-500/50 transition-colors" />
      <textarea value={points} onChange={e => setPoints(e.target.value)} placeholder="Key points (one per line)..." rows={4}
        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm outline-none resize-none focus:border-cyan-500/50 transition-colors" />
      <div className="flex gap-2 flex-wrap">
        {TONES.map(t => (
          <button key={t} onClick={() => setTone(t)}
            className="px-3 py-1.5 rounded-lg text-sm font-medium transition-all"
            style={tone === t
              ? { background: 'rgba(103,232,249,0.15)', border: '1px solid rgba(103,232,249,0.4)', color: '#67e8f9' }
              : { background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: '#64748b' }}>
            {t}
          </button>
        ))}
      </div>
      <button onClick={generate} disabled={loading || !subject || !points}
        className="w-full py-3 rounded-xl text-white font-semibold text-sm disabled:opacity-40 transition-all"
        style={{ background: 'linear-gradient(135deg,#0891b2,#06b6d4)' }}>
        {loading ? 'Generating...' : 'Generate Email'}
      </button>
      {email && (
        <div className="rounded-xl overflow-hidden" style={{ border: '1px solid rgba(103,232,249,0.2)', background: 'rgba(103,232,249,0.04)' }}>
          <div className="flex items-center justify-between px-4 py-2.5" style={{ borderBottom: '1px solid rgba(103,232,249,0.15)' }}>
            <span className="text-xs font-semibold text-cyan-400">Generated Email</span>
            <button onClick={copy} className="flex items-center gap-1.5 text-xs px-3 py-1 rounded-lg transition-all"
              style={{ background: copied ? 'rgba(74,222,128,0.15)' : 'rgba(255,255,255,0.06)', color: copied ? '#4ade80' : '#94a3b8' }}>
              <i className={copied ? 'fas fa-check' : 'fas fa-copy'} style={{ fontSize: '10px' }} />
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </div>
          <pre className="p-4 text-gray-300 text-sm whitespace-pre-wrap font-sans leading-relaxed">{email}</pre>
        </div>
      )}
    </div>
  );
}`,
  },
  {
    id: 'resume',
    title: 'Resume Generator',
    subtitle: 'ATS-optimized · Tailored · Markdown',
    description: 'Paste a job description and your experience — get a perfectly tailored, ATS-optimized resume in seconds.',
    icon: 'fas fa-file-lines',
    accent: '#86efac',
    accentDim: 'rgba(134,239,172,0.1)',
    accentBorder: 'rgba(134,239,172,0.3)',
    accentGlow: 'rgba(134,239,172,0.18)',
    tags: ['React', 'OpenAI', 'Markdown', 'ATS'],
    difficulty: 'Intermediate',
    diffColor: '#fbbf24',
    diffBg: 'rgba(251,191,36,0.1)',
    steps: ['Parse job description', 'Match skills to requirements', 'Generate ATS-friendly format', 'Export as markdown'],
    features: ['ATS keyword optimization', 'Job-tailored content', 'Action verb suggestions', 'Markdown output'],
    preview: { type: 'form', fields: ['Job Description', 'Your Experience', 'Skills'] },
    code: `import { useState } from 'react';
import OpenAI from 'openai';

const client = new OpenAI({ apiKey: import.meta.env.VITE_OPENAI_API_KEY, dangerouslyAllowBrowser: true });

export default function ResumeGenerator() {
  const [jobDesc, setJobDesc] = useState('');
  const [experience, setExperience] = useState('');
  const [skills, setSkills] = useState('');
  const [resume, setResume] = useState('');
  const [loading, setLoading] = useState(false);

  const generate = async () => {
    setLoading(true);
    try {
      const response = await client.chat.completions.create({
        model: 'gpt-4o',
        messages: [
          {
            role: 'system',
            content: \`You are an expert resume writer and ATS optimization specialist.
Create resumes that:
- Use strong action verbs (Led, Built, Increased, Optimized)
- Quantify achievements where possible
- Mirror keywords from the job description
- Follow clean markdown formatting
- Are concise and impactful\`,
          },
          {
            role: 'user',
            content: \`Create a tailored resume:

JOB DESCRIPTION:
\${jobDesc}

MY EXPERIENCE:
\${experience}

MY SKILLS:
\${skills}

Generate a complete ATS-optimized resume in markdown.\`,
          },
        ],
        temperature: 0.4,
      });
      setResume(response.choices[0].message.content);
    } finally { setLoading(false); }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-4">
      <textarea value={jobDesc} onChange={e => setJobDesc(e.target.value)}
        placeholder="Paste the job description here..." rows={5}
        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm outline-none resize-none focus:border-green-500/50 transition-colors" />
      <textarea value={experience} onChange={e => setExperience(e.target.value)}
        placeholder="Your work experience (company, role, key achievements)..." rows={5}
        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm outline-none resize-none focus:border-green-500/50 transition-colors" />
      <input value={skills} onChange={e => setSkills(e.target.value)}
        placeholder="Your skills (comma separated)..."
        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm outline-none focus:border-green-500/50 transition-colors" />
      <button onClick={generate} disabled={loading || !jobDesc || !experience}
        className="w-full py-3 rounded-xl text-white font-semibold text-sm disabled:opacity-40"
        style={{ background: 'linear-gradient(135deg,#16a34a,#059669)' }}>
        {loading ? 'Generating Resume...' : 'Generate ATS Resume'}
      </button>
      {resume && (
        <div className="rounded-xl overflow-hidden" style={{ border: '1px solid rgba(134,239,172,0.2)', background: 'rgba(134,239,172,0.04)' }}>
          <div className="px-4 py-2.5 flex items-center justify-between" style={{ borderBottom: '1px solid rgba(134,239,172,0.15)' }}>
            <span className="text-xs font-semibold text-green-400">Generated Resume</span>
            <button onClick={() => navigator.clipboard.writeText(resume)}
              className="text-xs px-3 py-1 rounded-lg text-gray-400 hover:text-white transition-colors"
              style={{ background: 'rgba(255,255,255,0.06)' }}>
              <i className="fas fa-copy mr-1.5" style={{ fontSize: '10px' }} />Copy
            </button>
          </div>
          <pre className="p-4 text-gray-300 text-sm whitespace-pre-wrap font-sans leading-relaxed">{resume}</pre>
        </div>
      )}
    </div>
  );
}`,
  },
  {
    id: 'assistant',
    title: 'AI Assistant',
    subtitle: 'Tool-using · Agentic · Real-time',
    description: 'A tool-using AI agent that can calculate, fetch data, and complete multi-step tasks autonomously using function calling.',
    icon: 'fas fa-robot',
    accent: '#fdba74',
    accentDim: 'rgba(253,186,116,0.1)',
    accentBorder: 'rgba(253,186,116,0.3)',
    accentGlow: 'rgba(253,186,116,0.18)',
    tags: ['React', 'OpenAI', 'Function Calling', 'Agents'],
    difficulty: 'Advanced',
    diffColor: '#f87171',
    diffBg: 'rgba(248,113,113,0.1)',
    steps: ['Define tool schemas', 'Build agent loop', 'Execute tool calls', 'Return final answer'],
    features: ['Function calling', 'Tool execution loop', 'Math & time tools', 'Transparent tool log'],
    preview: {
      type: 'chat',
      messages: [
        { role: 'user', content: 'What is 15% of 847?' },
        { role: 'assistant', content: '15% of 847 = 127.05 — calculated using the math tool: 847 × 0.15 = 127.05' },
      ],
    },
    code: `import { useState } from 'react';
import OpenAI from 'openai';

const client = new OpenAI({ apiKey: import.meta.env.VITE_OPENAI_API_KEY, dangerouslyAllowBrowser: true });

const tools = [
  {
    type: 'function',
    function: {
      name: 'calculate',
      description: 'Perform mathematical calculations safely',
      parameters: { type: 'object', properties: { expression: { type: 'string', description: 'Math expression to evaluate' } }, required: ['expression'] }
    }
  },
  {
    type: 'function',
    function: {
      name: 'get_current_time',
      description: 'Get the current date and time',
      parameters: { type: 'object', properties: {} }
    }
  }
];

function executeTool(name, args) {
  if (name === 'calculate') {
    try { return String(Function('"use strict"; return (' + args.expression + ')')()) }
    catch (e) { return 'Error: ' + e.message }
  }
  if (name === 'get_current_time') return new Date().toLocaleString();
  return 'Unknown tool';
}

export default function AIAssistant() {
  const [messages, setMessages] = useState([
    { role: 'system', content: 'You are a helpful assistant with tools. Use them when needed to give accurate answers.' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [toolLog, setToolLog] = useState([]);

  const send = async () => {
    if (!input.trim() || loading) return;
    let current = [...messages, { role: 'user', content: input }];
    setMessages(current);
    setInput('');
    setLoading(true);

    try {
      while (true) {
        const res = await client.chat.completions.create({ model: 'gpt-4o', messages: current, tools, tool_choice: 'auto' });
        const choice = res.choices[0];
        current = [...current, choice.message];

        if (choice.finish_reason === 'stop') { setMessages(current); break; }

        if (choice.finish_reason === 'tool_calls') {
          const results = [];
          for (const tc of choice.message.tool_calls) {
            const args = JSON.parse(tc.function.arguments);
            const result = executeTool(tc.function.name, args);
            setToolLog(prev => [...prev, { name: tc.function.name, args, result }]);
            results.push({ role: 'tool', tool_call_id: tc.id, content: result });
          }
          current = [...current, ...results];
        }
      }
    } finally { setLoading(false); }
  };

  const display = messages.filter(m => m.role === 'user' || m.role === 'assistant');

  return (
    <div className="max-w-2xl mx-auto p-6">
      {toolLog.length > 0 && (
        <div className="mb-4 p-3 rounded-xl" style={{ background: 'rgba(253,186,116,0.08)', border: '1px solid rgba(253,186,116,0.2)' }}>
          <p className="text-orange-300 text-xs font-bold mb-2 flex items-center gap-1.5">
            <i className="fas fa-wrench" style={{ fontSize: '10px' }} /> Tool Calls
          </p>
          {toolLog.slice(-3).map((log, i) => (
            <p key={i} className="text-gray-500 text-xs font-mono">{log.name}({JSON.stringify(log.args)}) → {log.result}</p>
          ))}
        </div>
      )}
      <div className="space-y-3 mb-4 max-h-80 overflow-y-auto">
        {display.map((msg, i) => (
          <div key={i} className={\`flex \${msg.role === 'user' ? 'justify-end' : 'justify-start'}\`}>
            <div className={\`max-w-[80%] px-4 py-3 rounded-2xl text-sm \${msg.role === 'user' ? 'text-white' : 'bg-white/8 text-gray-200 border border-white/10'}\`}
              style={msg.role === 'user' ? { background: 'linear-gradient(135deg,#ea580c,#dc2626)' } : {}}>
              {msg.content}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="px-4 py-3 rounded-2xl bg-white/8 text-gray-500 text-sm border border-white/10 flex items-center gap-2">
              <i className="fas fa-circle-notch fa-spin text-orange-400" style={{ fontSize: '12px' }} /> Thinking...
            </div>
          </div>
        )}
      </div>
      <div className="flex gap-2">
        <input value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => e.key === 'Enter' && send()}
          placeholder="Ask me anything..." className="flex-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm outline-none focus:border-orange-500/50 transition-colors" />
        <button onClick={send} disabled={loading}
          className="px-5 py-3 rounded-xl text-white font-semibold text-sm disabled:opacity-40"
          style={{ background: 'linear-gradient(135deg,#ea580c,#dc2626)' }}>
          Send
        </button>
      </div>
    </div>
  );
}`,
  },
];
export default function BuildMode() {
  const [active,    setActive]    = useState(projects[0]);
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen pt-16">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 neural-grid opacity-40 pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 60% at 50% 0%, rgba(249,115,22,0.1) 0%, transparent 70%)' }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-14 pb-12">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold mb-6" style={{ background: 'rgba(249,115,22,0.1)', border: '1px solid rgba(249,115,22,0.3)', color: '#fdba74' }}>
              <i className="fas fa-hammer" /> Build Mode — Ship Real AI
            </div>
            <h1 className="text-5xl sm:text-6xl font-black text-white mb-4 leading-tight">Build Real <span className="gradient-text">AI Projects</span></h1>
            <p className="text-gray-400 text-xl max-w-2xl leading-relaxed">Production-ready code. Copy, customize, and ship. Each project is a complete, working application.</p>
          </motion.div>
        </div>
        <div className="section-divider" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {projects.map((p, i) => (
            <motion.button key={p.id} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}
              onClick={() => { setActive(p); setActiveTab('overview'); }}
              className="group text-left rounded-2xl p-5 transition-all duration-300 relative overflow-hidden"
              style={{ background: active.id === p.id ? p.accentDim : 'rgba(255,255,255,0.025)', border: `1px solid ${active.id === p.id ? p.accentBorder : 'rgba(255,255,255,0.07)'}`, boxShadow: active.id === p.id ? `0 0 40px ${p.accentGlow}` : 'none' }}>
              {active.id === p.id && <div className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl" style={{ background: `linear-gradient(90deg,transparent,${p.accent},transparent)` }} />}
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-105" style={{ background: p.accentDim, border: `1px solid ${p.accentBorder}` }}>
                <i className={`${p.icon} text-xl`} style={{ color: p.accent }} />
              </div>
              <h3 className="text-white font-bold text-base mb-0.5">{p.title}</h3>
              <p className="text-xs font-medium mb-2" style={{ color: p.accent }}>{p.subtitle}</p>
              <p className="text-gray-600 text-xs mb-4 line-clamp-2 leading-relaxed">{p.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs px-2.5 py-1 rounded-full font-bold" style={{ background: p.diffBg, color: p.diffColor, border: `1px solid ${p.diffColor}30` }}>{p.difficulty}</span>
                <i className="fas fa-arrow-right text-xs opacity-0 group-hover:opacity-100 transition-all -translate-x-1 group-hover:translate-x-0" style={{ color: p.accent }} />
              </div>
            </motion.button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div key={active.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} transition={{ duration: 0.3 }}
            className="rounded-3xl overflow-hidden" style={{ border: `1px solid ${active.accentBorder}`, background: 'rgba(255,255,255,0.02)', boxShadow: `0 0 60px ${active.accentGlow}` }}>

            <div className="relative overflow-hidden px-8 py-8" style={{ background: `linear-gradient(135deg,${active.accentDim},rgba(255,255,255,0.01))`, borderBottom: `1px solid ${active.accentBorder}` }}>
              <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full pointer-events-none" style={{ background: `radial-gradient(circle,${active.accentGlow} 0%,transparent 70%)` }} />
              <div className="relative flex flex-col sm:flex-row sm:items-start justify-between gap-6">
                <div className="flex items-start gap-5">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ background: active.accentDim, border: `1px solid ${active.accentBorder}`, boxShadow: `0 0 24px ${active.accentGlow}` }}>
                    <i className={`${active.icon} text-3xl`} style={{ color: active.accent }} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-black text-white mb-0.5">{active.title}</h2>
                    <p className="text-sm font-semibold mb-3" style={{ color: active.accent }}>{active.subtitle}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {active.tags.map(tag => (<span key={tag} className="text-xs px-2.5 py-1 rounded-full font-medium" style={{ background: 'rgba(255,255,255,0.07)', color: '#94a3b8', border: '1px solid rgba(255,255,255,0.1)' }}>{tag}</span>))}
                    </div>
                  </div>
                </div>
                <span className="text-xs px-3 py-1.5 rounded-full font-bold self-start" style={{ background: active.diffBg, color: active.diffColor, border: `1px solid ${active.diffColor}40` }}>
                  <i className="fas fa-signal mr-1.5" style={{ fontSize: '10px' }} />{active.difficulty}
                </span>
              </div>
              <p className="relative text-gray-300 text-sm mt-5 max-w-2xl leading-relaxed">{active.description}</p>
            </div>

            <div className="flex px-2 pt-2" style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
              {[{ id: 'overview', label: 'Overview', icon: 'fas fa-eye' }, { id: 'code', label: 'Full Code', icon: 'fas fa-code' }].map(tab => (
                <button key={tab.id} onClick={() => setActiveTab(tab.id)}
                  className="flex items-center gap-2 px-5 py-3 text-sm font-semibold transition-all duration-200 border-b-2 -mb-px rounded-t-lg"
                  style={activeTab === tab.id ? { borderColor: active.accent, color: active.accent, background: active.accentDim } : { borderColor: 'transparent', color: '#475569' }}>
                  <i className={`${tab.icon} text-xs`} /> {tab.label}
                </button>
              ))}
            </div>

            <div className="p-8">
              {activeTab === 'overview' && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-white font-bold text-sm mb-3 flex items-center gap-2"><i className="fas fa-desktop text-xs" style={{ color: active.accent }} /> UI Preview</h3>
                      <div className="rounded-2xl overflow-hidden" style={{ background: '#07071a', border: `1px solid ${active.accentBorder}` }}>
                        <div className="flex items-center gap-1.5 px-4 py-2.5" style={{ background: 'rgba(255,255,255,0.03)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                          <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" /><div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" /><div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                          <div className="flex-1 mx-3 h-5 rounded-md" style={{ background: 'rgba(255,255,255,0.04)' }} />
                        </div>
                        <div className="p-5">
                          {active.preview.type === 'chat' && (
                            <div className="space-y-3">
                              {active.preview.messages.map((msg, i) => (
                                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                  <div className={`max-w-[85%] px-3.5 py-2.5 rounded-2xl text-xs leading-relaxed ${msg.role === 'user' ? 'text-white' : 'text-gray-300 border border-white/10'}`}
                                    style={msg.role === 'user' ? { background: `linear-gradient(135deg,${active.accent}cc,${active.accent}88)` } : { background: 'rgba(255,255,255,0.05)' }}>
                                    {msg.content}
                                  </div>
                                </div>
                              ))}
                              <div className="flex gap-2 pt-2" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                                <div className="flex-1 h-8 rounded-xl" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }} />
                                <div className="w-16 h-8 rounded-xl" style={{ background: active.accentDim, border: `1px solid ${active.accentBorder}` }} />
                              </div>
                            </div>
                          )}
                          {active.preview.type === 'form' && (
                            <div className="space-y-3">
                              {active.preview.fields.map((field, fi) => (
                                <div key={field}>
                                  <p className="text-xs text-gray-600 mb-1 font-medium">{field}</p>
                                  <div className={`rounded-xl ${fi === 1 ? 'h-16' : 'h-9'}`} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }} />
                                </div>
                              ))}
                              <div className="h-10 rounded-xl mt-1" style={{ background: `linear-gradient(135deg,${active.accent}40,${active.accent}20)`, border: `1px solid ${active.accentBorder}` }} />
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-sm mb-3 flex items-center gap-2"><i className="fas fa-list-ol text-xs" style={{ color: active.accent }} /> Build Steps</h3>
                      <div className="space-y-2">
                        {active.steps.map((step, si) => (
                          <div key={si} className="flex items-center gap-3 p-3 rounded-xl" style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.06)' }}>
                            <div className="w-6 h-6 rounded-lg flex items-center justify-center text-xs font-black flex-shrink-0" style={{ background: active.accentDim, color: active.accent, border: `1px solid ${active.accentBorder}` }}>{si + 1}</div>
                            <span className="text-gray-400 text-sm">{step}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-white font-bold text-sm mb-3 flex items-center gap-2"><i className="fas fa-sparkles text-xs" style={{ color: active.accent }} /> What you will build</h3>
                      <div className="grid grid-cols-1 gap-2">
                        {active.features.map(f => (
                          <div key={f} className="flex items-center gap-3 p-3 rounded-xl" style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.06)' }}>
                            <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(74,222,128,0.15)' }}>
                              <i className="fas fa-check text-green-400" style={{ fontSize: '9px' }} />
                            </div>
                            <span className="text-gray-300 text-sm">{f}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="rounded-2xl p-5" style={{ background: 'rgba(251,191,36,0.06)', border: '1px solid rgba(251,191,36,0.2)' }}>
                      <div className="flex gap-3">
                        <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(251,191,36,0.15)' }}>
                          <i className="fas fa-triangle-exclamation text-amber-400 text-sm" />
                        </div>
                        <div>
                          <p className="text-amber-300 font-bold text-sm mb-1.5">Setup Required</p>
                          <p className="text-gray-400 text-sm leading-relaxed">Add your OpenAI API key to <code className="text-amber-300 font-mono text-xs bg-amber-500/10 px-1.5 py-0.5 rounded">.env</code> as <code className="text-amber-300 font-mono text-xs bg-amber-500/10 px-1.5 py-0.5 rounded">VITE_OPENAI_API_KEY</code>. Never expose keys in production.</p>
                        </div>
                      </div>
                    </div>
                    <button onClick={() => setActiveTab('code')}
                      className="w-full py-4 rounded-2xl text-white font-bold text-base flex items-center justify-center gap-3 transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5"
                      style={{ background: `linear-gradient(135deg,${active.accent}cc,${active.accent}88)`, boxShadow: `0 8px 32px ${active.accentGlow}` }}>
                      <i className="fas fa-code" /> View Full Source Code <i className="fas fa-arrow-right text-sm" />
                    </button>
                  </div>
                </div>
              )}
              {activeTab === 'code' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: active.accentDim, border: `1px solid ${active.accentBorder}` }}>
                        <i className={`${active.icon} text-sm`} style={{ color: active.accent }} />
                      </div>
                      <div>
                        <p className="text-white font-bold text-sm">{active.title}.jsx</p>
                        <p className="text-gray-600 text-xs">{active.subtitle}</p>
                      </div>
                    </div>
                    <span className="text-xs px-3 py-1.5 rounded-full font-bold" style={{ background: active.diffBg, color: active.diffColor, border: `1px solid ${active.diffColor}30` }}>{active.difficulty}</span>
                  </div>
                  <GenAiCodeBlock code={active.code} language="javascript" title={`${active.title}.jsx`} />
                </div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}