import { useState } from 'react';
import './OsInterviewQuestion.css';

export default function OsInterviewQuestion({ question, answer }) {
    const [open, setOpen] = useState(false);

    return (
        <div className={`iq ${open ? 'iq--open' : ''}`}>
            <button className="iq-toggle" onClick={() => setOpen(!open)}>
                <span className="iq-icon">{open ? '▾' : '▸'}</span>
                <span className="iq-question">{question}</span>
            </button>
            {open && (
                <div className="iq-answer animate-fade-in">
                    <p>{answer}</p>
                </div>
            )}
        </div>
    );
}
