import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function MCQ({ questions }) {
  const [answers,  setAnswers]  = useState({});
  const [revealed, setRevealed] = useState({});

  const select = (qi, oi) => { if (!revealed[qi]) setAnswers(p => ({ ...p, [qi]: oi })); };
  const reveal = qi => { if (answers[qi] !== undefined) setRevealed(p => ({ ...p, [qi]: true })); };

  const total   = Object.keys(revealed).length;
  const correct = Object.keys(revealed).filter(i => answers[i] === questions[i].answer).length;
  const pct     = total ? Math.round((correct / total) * 100) : 0;

  return (
    <div className="space-y-5">
      <AnimatePresence>
        {total > 0 && (
          <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-4 p-4 rounded-2xl"
            style={{ background: 'rgba(124,58,237,0.1)', border: '1px solid rgba(124,58,237,0.25)' }}>
            <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: 'linear-gradient(135deg,#7c3aed,#0891b2)' }}>
              <i className="fas fa-trophy text-white text-lg" />
            </div>
            <div className="flex-1">
              <p className="text-white font-bold">{correct} / {total} correct &mdash; {pct}%</p>
              <div className="mt-1.5 h-1.5 rounded-full bg-white/10 overflow-hidden">
                <motion.div initial={{ width: 0 }} animate={{ width: `${pct}%` }}
                  className="h-full rounded-full" style={{ background: 'linear-gradient(90deg,#7c3aed,#06b6d4)' }} />
              </div>
            </div>
            <span className="text-2xl">{pct === 100 ? '🎉' : pct >= 50 ? '👍' : '💪'}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {questions.map((q, qi) => {
        const sel = answers[qi];
        const isRevealed = revealed[qi];
        const isCorrect  = sel === q.answer;

        return (
          <motion.div key={qi} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: qi * 0.08 }} className="rounded-2xl p-5"
            style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.07)' }}>

            <div className="flex gap-3 mb-4">
              <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 text-xs font-bold mt-0.5"
                style={{ background: 'rgba(124,58,237,0.2)', color: '#a78bfa', border: '1px solid rgba(124,58,237,0.3)' }}>
                {qi + 1}
              </div>
              <p className="text-white font-medium text-sm leading-relaxed">{q.q}</p>
            </div>

            <div className="space-y-2 mb-4 ml-10">
              {q.options.map((opt, oi) => {
                let bg, border, color, icon;
                if (!isRevealed) {
                  if (sel === oi) { bg='rgba(124,58,237,0.2)'; border='rgba(124,58,237,0.5)'; color='#fff'; icon='fas fa-circle-dot'; }
                  else { bg='rgba(255,255,255,0.03)'; border='rgba(255,255,255,0.08)'; color='#94a3b8'; icon='far fa-circle'; }
                } else {
                  if (oi === q.answer) { bg='rgba(16,185,129,0.15)'; border='rgba(16,185,129,0.4)'; color='#6ee7b7'; icon='fas fa-circle-check'; }
                  else if (sel === oi) { bg='rgba(239,68,68,0.15)'; border='rgba(239,68,68,0.4)'; color='#fca5a5'; icon='fas fa-circle-xmark'; }
                  else { bg='rgba(255,255,255,0.02)'; border='rgba(255,255,255,0.05)'; color='#475569'; icon='far fa-circle'; }
                }
                return (
                  <button key={oi} onClick={() => select(qi, oi)} disabled={isRevealed}
                    className="w-full text-left flex items-center gap-3 px-4 py-3 rounded-xl text-sm transition-all duration-150"
                    style={{ background: bg, border: `1px solid ${border}`, color, cursor: isRevealed ? 'default' : 'pointer' }}>
                    <i className={`${icon} flex-shrink-0`} style={{ fontSize: '14px' }} />
                    <span className="font-mono text-xs opacity-60 flex-shrink-0">{String.fromCharCode(65 + oi)}.</span>
                    {opt}
                  </button>
                );
              })}
            </div>

            <div className="ml-10">
              <button onClick={() => reveal(qi)} disabled={sel === undefined || isRevealed}
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all"
                style={sel !== undefined && !isRevealed
                  ? { background: 'linear-gradient(135deg,#7c3aed,#0891b2)', color: '#fff', cursor: 'pointer' }
                  : { background: 'rgba(255,255,255,0.05)', color: '#475569', cursor: 'not-allowed' }}>
                <i className={`fas ${isRevealed ? (isCorrect ? 'fa-check' : 'fa-xmark') : 'fa-magnifying-glass'} text-xs`} />
                {isRevealed ? (isCorrect ? 'Correct!' : 'Incorrect') : 'Check Answer'}
              </button>
            </div>

            <AnimatePresence>
              {isRevealed && (
                <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }} className="mt-3 ml-10">
                  <div className="flex gap-3 p-3 rounded-xl text-sm"
                    style={{ background: 'rgba(6,182,212,0.08)', border: '1px solid rgba(6,182,212,0.2)' }}>
                    <i className="fas fa-lightbulb text-cyan-400 flex-shrink-0 mt-0.5" style={{ fontSize: '13px' }} />
                    <p className="text-gray-300 leading-relaxed">
                      <span className="text-cyan-400 font-semibold">Explanation: </span>{q.explanation}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}