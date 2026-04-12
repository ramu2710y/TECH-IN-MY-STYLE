import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import './OsCodeBlock.css';

const langLabels = { c: 'C', python: 'Python', java: 'Java', bash: 'Bash' };

export default function OsCodeBlock({ codes, title = 'code_example' }) {
    const languages = Object.keys(codes);
    const [activeTab, setActiveTab] = useState(languages[0]);

    return (
        <div className="codeblock">
            <div className="terminal-header">
                <div className="terminal-dots">
                    <span></span><span></span><span></span>
                </div>
                <span className="codeblock-title">{title}</span>
            </div>
            <div className="codeblock-tabs">
                {languages.map((lang) => (
                    <button
                        key={lang}
                        className={`codeblock-tab ${activeTab === lang ? 'codeblock-tab--active' : ''}`}
                        onClick={() => setActiveTab(lang)}
                    >
                        {langLabels[lang] || lang}
                    </button>
                ))}
            </div>
            <div className="codeblock-body">
                <SyntaxHighlighter
                    language={activeTab}
                    style={atomDark}
                    customStyle={{ margin: 0, padding: '1.2rem', background: 'transparent', fontSize: '0.85rem', lineHeight: '1.6' }}
                    showLineNumbers
                    lineNumberStyle={{ color: '#3a4a5c', fontSize: '0.75rem' }}
                >
                    {codes[activeTab]}
                </SyntaxHighlighter>
            </div>
        </div>
    );
}
