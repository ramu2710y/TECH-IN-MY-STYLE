import { useState } from 'react';
import './OsQuiz.css';

export default function OsQuiz({ title = 'Knowledge Check', questions }) {
    const [selected, setSelected] = useState({});
    const [revealed, setRevealed] = useState(false);

    const score = Object.entries(selected).filter(
        ([idx, ans]) => questions[idx].answer === ans
    ).length;

    const handleSelect = (qIdx, optIdx) => {
        if (revealed) return;
        setSelected((prev) => ({ ...prev, [qIdx]: optIdx }));
    };

    return (
        <div className="quiz panel">
            <div className="quiz-header">
                <span className="quiz-icon">⟩</span>
                <h3>{title}</h3>
            </div>
            {questions.map((q, qi) => (
                <div key={qi} className="quiz-question">
                    <p className="quiz-prompt">
                        <span className="quiz-number">{qi + 1}.</span> {q.question}
                    </p>
                    <div className="quiz-options">
                        {q.options.map((opt, oi) => {
                            let cls = 'quiz-option';
                            if (selected[qi] === oi) cls += ' quiz-option--selected';
                            if (revealed) {
                                if (q.answer === oi) cls += ' quiz-option--correct';
                                else if (selected[qi] === oi) cls += ' quiz-option--wrong';
                            }
                            return (
                                <button key={oi} className={cls} onClick={() => handleSelect(qi, oi)}>
                                    <span className="quiz-option-letter">{String.fromCharCode(65 + oi)}</span>
                                    {opt}
                                </button>
                            );
                        })}
                    </div>
                    {revealed && selected[qi] !== undefined && selected[qi] !== q.answer && q.explanation && (
                        <p className="quiz-explanation">💡 {q.explanation}</p>
                    )}
                </div>
            ))}
            <div className="quiz-footer">
                {!revealed ? (
                    <button className="quiz-submit" onClick={() => setRevealed(true)} disabled={Object.keys(selected).length < questions.length}>
                        ▶ Submit Answers
                    </button>
                ) : (
                    <div className="quiz-result">
                        <span className="quiz-score">Score: {score}/{questions.length}</span>
                        <button className="quiz-retry" onClick={() => { setSelected({}); setRevealed(false); }}>↻ Retry</button>
                    </div>
                )}
            </div>
        </div>
    );
}
