import OsModuleCard from '../components/OsModuleCard';
import './OsCourseOverview.css';

const modules = [
    { to: '/os-course/introduction', icon: '⬡', title: 'Introduction to OS', description: 'What is an OS? Types, history, and architecture.', color: 'linear-gradient(135deg, #8b5cf6, #6366f1)' },
    { to: '/os-course/process-management', icon: '⚙', title: 'Process Management', description: 'Process lifecycle, scheduling algorithms, and PCBs.', color: 'linear-gradient(135deg, #3b82f6, #2563eb)' },
    { to: '/os-course/threads', icon: '⧉', title: 'Threads & Concurrency', description: 'Multithreading, synchronization, and deadlocks.', color: 'linear-gradient(135deg, #ec4899, #db2777)' },
    { to: '/os-course/memory', icon: '▦', title: 'Memory Management', description: 'Paging, segmentation, virtual memory, and allocation.', color: 'linear-gradient(135deg, #f59e0b, #d97706)' },
    { to: '/os-course/file-systems', icon: '◫', title: 'File Systems', description: 'File organization, directories, and storage management.', color: 'linear-gradient(135deg, #a78bfa, #7c3aed)' },
    { to: '/os-course/io-systems', icon: '⇄', title: 'I/O Systems', description: 'Device drivers, buffering, and I/O scheduling.', color: 'linear-gradient(135deg, #06b6d4, #0891b2)' },
    { to: '/os-course/security', icon: '◆', title: 'Security & Protection', description: 'Access control, authentication, and threats.', color: 'linear-gradient(135deg, #ef4444, #dc2626)' },
    { to: '/os-course/real-world', icon: '◉', title: 'Real-World Applications', description: 'Linux, Windows, Android, cloud OS concepts.', color: 'linear-gradient(135deg, #10b981, #059669)' },
    { to: '/os-course/interview-prep', icon: '◧', title: 'Interview Prep', description: 'Top OS questions for tech interviews.', color: 'linear-gradient(135deg, #6366f1, #4f46e5)' },
    { to: '/os-course/projects', icon: '⬢', title: 'Projects & Hands-On', description: 'Build schedulers, memory allocators, and shells.', color: 'linear-gradient(135deg, #f59e0b, #ea580c)' },
];

export default function OsCourseOverview() {
    return (
        <div className="overview animate-fade-in">
            <section className="overview-hero">
                <div className="overview-hero-badge">INTERACTIVE COURSE</div>
                <h1 className="overview-hero-title">
                    Master <span className="glow-text">Operating Systems</span>
                </h1>
                <p className="overview-hero-sub">
                    A deep-dive into OS internals with interactive visualizations, code examples in C, Python &amp; Java,
                    embedded quizzes, and real-world projects  -  designed for clarity and depth.
                </p>
                <div className="overview-stats">
                    <div className="stat-card"><span className="stat-num">10</span><span className="stat-label">Modules</span></div>
                    <div className="stat-card"><span className="stat-num">50+</span><span className="stat-label">Code Examples</span></div>
                    <div className="stat-card"><span className="stat-num">30+</span><span className="stat-label">Quiz Questions</span></div>
                    <div className="stat-card"><span className="stat-num">5</span><span className="stat-label">Visualizations</span></div>
                </div>
            </section>

            <section className="overview-modules">
                <h2 className="section-title">Course Modules</h2>
                <div className="module-grid">
                    {modules.map((mod, i) => (
                        <OsModuleCard key={mod.to} number={i + 1} {...mod} />
                    ))}
                </div>
            </section>

            <section className="overview-resources">
                <h2 className="section-title">Recommended Resources</h2>
                <div className="resource-grid">
                    <div className="resource-item">
                        <span className="resource-icon">📖</span>
                        <div><strong>Operating System Concepts</strong><p>Silberschatz, Galvin, Gagne  -  the classic "Dinosaur Book"</p></div>
                    </div>
                    <div className="resource-item">
                        <span className="resource-icon">📖</span>
                        <div><strong>Modern Operating Systems</strong><p>Andrew S. Tanenbaum  -  comprehensive and research-oriented</p></div>
                    </div>
                    <div className="resource-item">
                        <span className="resource-icon">📖</span>
                        <div><strong>OSTEP (Free)</strong><p>Operating Systems: Three Easy Pieces  -  free online textbook</p></div>
                    </div>
                    <div className="resource-item">
                        <span className="resource-icon">🎥</span>
                        <div><strong>MIT 6.828</strong><p>MIT OpenCourseWare  -  Operating System Engineering</p></div>
                    </div>
                </div>
            </section>
        </div>
    );
}
