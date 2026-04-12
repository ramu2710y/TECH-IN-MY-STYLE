import { useEffect, useRef, useState } from 'react';
import './OsVisualization.css';

/* ========== CPU Scheduling Gantt Chart ========== */
export function SchedulingViz() {
    const [algorithm, setAlgorithm] = useState('fcfs');
    const [running, setRunning] = useState(false);
    const [step, setStep] = useState(0);
    const timerRef = useRef(null);

    const processes = [
        { id: 'P1', burst: 4, arrival: 0, color: '#00e5ff' },
        { id: 'P2', burst: 3, arrival: 1, color: '#39ff14' },
        { id: 'P3', burst: 2, arrival: 2, color: '#ff2d55' },
        { id: 'P4', burst: 5, arrival: 3, color: '#ffab00' },
    ];

    const getSchedule = () => {
        let schedule = [];
        if (algorithm === 'fcfs') {
            let time = 0;
            processes.forEach((p) => {
                const start = Math.max(time, p.arrival);
                schedule.push({ ...p, start, end: start + p.burst });
                time = start + p.burst;
            });
        } else if (algorithm === 'sjf') {
            let time = 0;
            const sorted = [...processes].sort((a, b) => a.burst - b.burst);
            sorted.forEach((p) => {
                const start = Math.max(time, p.arrival);
                schedule.push({ ...p, start, end: start + p.burst });
                time = start + p.burst;
            });
        } else {
            const quantum = 2;
            let time = 0;
            let remaining = processes.map((p) => ({ ...p, rem: p.burst }));
            while (remaining.some((p) => p.rem > 0)) {
                for (let p of remaining) {
                    if (p.rem > 0 && p.arrival <= time) {
                        const run = Math.min(quantum, p.rem);
                        schedule.push({ ...p, start: time, end: time + run });
                        p.rem -= run;
                        time += run;
                    }
                }
                if (remaining.every((p) => p.rem === 0 || p.arrival > time)) time++;
            }
        }
        return schedule;
    };

    const schedule = getSchedule();
    const totalTime = Math.max(...schedule.map((s) => s.end));

    useEffect(() => {
        if (running && step < totalTime) {
            timerRef.current = setTimeout(() => setStep((s) => s + 1), 500);
        } else {
            setRunning(false);
        }
        return () => clearTimeout(timerRef.current);
    }, [running, step, totalTime]);

    const handleRun = () => { setStep(0); setRunning(true); };

    return (
        <div className="viz panel">
            <div className="viz-header">
                <h3>⚙ CPU Scheduling Visualization</h3>
                <div className="viz-controls">
                    {['fcfs', 'sjf', 'rr'].map((alg) => (
                        <button key={alg} className={`viz-btn ${algorithm === alg ? 'viz-btn--active' : ''}`}
                            onClick={() => { setAlgorithm(alg); setStep(0); setRunning(false); }}>
                            {alg.toUpperCase()}
                        </button>
                    ))}
                    <button className="viz-btn viz-btn--run" onClick={handleRun}>▶ Run</button>
                </div>
            </div>
            <div className="gantt-container">
                <div className="gantt-timeline">
                    {Array.from({ length: totalTime + 1 }, (_, i) => (
                        <span key={i} className="gantt-tick">{i}</span>
                    ))}
                </div>
                {schedule.map((s, i) => (
                    <div key={i} className="gantt-bar"
                        style={{
                            left: `${(s.start / totalTime) * 100}%`,
                            width: `${((s.end - s.start) / totalTime) * 100}%`,
                            background: s.color,
                            opacity: step >= s.end ? 1 : step >= s.start ? 0.7 : 0.2,
                            boxShadow: step >= s.start && step <= s.end ? `0 0 12px ${s.color}60` : 'none',
                        }}>
                        {s.id}
                    </div>
                ))}
            </div>
            <div className="gantt-legend">
                {processes.map((p) => (
                    <span key={p.id} className="gantt-legend-item">
                        <span className="gantt-dot" style={{ background: p.color }}></span>
                        {p.id} (Burst: {p.burst})
                    </span>
                ))}
            </div>
        </div>
    );
}

/* ========== Memory Paging Grid ========== */
export function MemoryViz() {
    const [frames, setFrames] = useState(
        Array.from({ length: 16 }, (_, i) => ({ id: i, allocated: false, process: null, color: null }))
    );
    const colors = ['#00e5ff', '#39ff14', '#ff2d55', '#ffab00', '#b388ff'];
    const [nextProcess, setNextProcess] = useState(1);

    const allocate = () => {
        const size = Math.floor(Math.random() * 4) + 1;
        const color = colors[(nextProcess - 1) % colors.length];
        const freeFrames = frames.filter((f) => !f.allocated);
        if (freeFrames.length < size) return;
        const toAllocate = freeFrames.slice(0, size).map((f) => f.id);
        setFrames((prev) => prev.map((f) => toAllocate.includes(f.id) ? { ...f, allocated: true, process: `P${nextProcess}`, color } : f));
        setNextProcess((p) => p + 1);
    };

    const deallocate = () => {
        const allocated = frames.filter((f) => f.allocated);
        if (!allocated.length) return;
        const processes = [...new Set(allocated.map((f) => f.process))];
        const toFree = processes[Math.floor(Math.random() * processes.length)];
        setFrames((prev) => prev.map((f) => f.process === toFree ? { ...f, allocated: false, process: null, color: null } : f));
    };

    const reset = () => {
        setFrames(Array.from({ length: 16 }, (_, i) => ({ id: i, allocated: false, process: null, color: null })));
        setNextProcess(1);
    };

    return (
        <div className="viz panel">
            <div className="viz-header">
                <h3>▦ Memory Paging</h3>
                <div className="viz-controls">
                    <button className="viz-btn viz-btn--run" onClick={allocate}>+ Allocate</button>
                    <button className="viz-btn" onClick={deallocate}>− Free</button>
                    <button className="viz-btn" onClick={reset}>↻ Reset</button>
                </div>
            </div>
            <div className="memory-grid">
                {frames.map((f) => (
                    <div key={f.id} className={`memory-cell ${f.allocated ? 'memory-cell--used' : ''}`}
                        style={f.allocated ? { background: `${f.color}18`, borderColor: f.color, boxShadow: `0 0 8px ${f.color}30` } : {}}>
                        <span className="memory-addr">0x{(f.id * 4096).toString(16).toUpperCase()}</span>
                        {f.process && <span className="memory-proc" style={{ color: f.color }}>{f.process}</span>}
                    </div>
                ))}
            </div>
        </div>
    );
}

/* ========== Process State Diagram ========== */
export function ProcessStateDiagram() {
    const [activeState, setActiveState] = useState('new');

    const states = [
        { id: 'new', label: 'New', x: 50, y: 80 },
        { id: 'ready', label: 'Ready', x: 200, y: 80 },
        { id: 'running', label: 'Running', x: 370, y: 80 },
        { id: 'waiting', label: 'Waiting', x: 370, y: 200 },
        { id: 'terminated', label: 'Terminated', x: 540, y: 80 },
    ];

    const transitions = [
        { from: 'new', to: 'ready', label: 'Admitted' },
        { from: 'ready', to: 'running', label: 'Dispatch' },
        { from: 'running', to: 'ready', label: 'Preempt' },
        { from: 'running', to: 'waiting', label: 'I/O Wait' },
        { from: 'waiting', to: 'ready', label: 'I/O Done' },
        { from: 'running', to: 'terminated', label: 'Exit' },
    ];

    const getPos = (id) => states.find((s) => s.id === id);

    return (
        <div className="viz panel">
            <div className="viz-header"><h3>⟳ Process State Transitions</h3></div>
            <div className="state-diagram">
                <svg viewBox="0 0 650 280" className="state-svg">
                    <defs>
                        <marker id="os-arrow" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
                            <polygon points="0 0, 8 3, 0 6" fill="#5f6b7a" />
                        </marker>
                    </defs>
                    {transitions.map((t, i) => {
                        const from = getPos(t.from);
                        const to = getPos(t.to);
                        const midX = (from.x + to.x) / 2;
                        const midY = (from.y + to.y) / 2 - (t.from === 'running' && t.to === 'ready' ? 30 : 0);
                        return (
                            <g key={i}>
                                <line x1={from.x + 40} y1={from.y + 15} x2={to.x - 5} y2={to.y + 15}
                                    stroke="#5f6b7a" strokeWidth="1.5" markerEnd="url(#os-arrow)" />
                                <text x={midX} y={midY - 5} fill="#5f6b7a" fontSize="10"
                                    fontFamily="var(--font-mono)" textAnchor="middle">{t.label}</text>
                            </g>
                        );
                    })}
                    {states.map((s) => (
                        <g key={s.id} onClick={() => setActiveState(s.id)} style={{ cursor: 'pointer' }}>
                            <rect x={s.x - 10} y={s.y} width={100} height={32} rx={6}
                                fill={activeState === s.id ? '#0f1923' : '#0a0e17'}
                                stroke={activeState === s.id ? '#00e5ff' : '#1a2536'}
                                strokeWidth={activeState === s.id ? 2 : 1} />
                            <text x={s.x + 40} y={s.y + 20} fill={activeState === s.id ? '#00e5ff' : '#9aa0a8'}
                                fontSize="12" fontFamily="var(--font-mono)" textAnchor="middle">{s.label}</text>
                        </g>
                    ))}
                </svg>
            </div>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>
                Click on a state to highlight it. Current: <span className="glow-text">{activeState}</span>
            </p>
        </div>
    );
}
