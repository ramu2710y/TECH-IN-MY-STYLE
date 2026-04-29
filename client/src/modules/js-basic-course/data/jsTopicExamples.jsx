/* ═══════════════════════════════════════════════════════════════════
   jsTopicExamples.jsx  —  JAVASCRIPT BASIC IN MY STYLE
   Complete, truly interactive examples for all 111 topics
   Each entry: { topic, description, html, css, js }
   BATCH 1: Topics 1-5 (Getting Started)
═══════════════════════════════════════════════════════════════════ */

const jsTopicExamples = [

  /* ══════════════════════════════════════════════
     BATCH 1: GETTING STARTED (5 topics)
  ══════════════════════════════════════════════ */

  {
    topic: "introduction",
    description: "is the scripting language of the web that adds interactivity, logic, and dynamic behaviour to HTML pages.",
    html: `<div class="container">
  <h1>🚀 JavaScript Makes Pages Interactive!</h1>
  
  <div class="interactive-grid">
    <div class="feature-card" id="card1">
      <div class="icon">🎨</div>
      <h3>Change Colors</h3>
      <button class="feature-btn" id="colorBtn">Click Me!</button>
    </div>
    
    <div class="feature-card" id="card2">
      <div class="icon">🔢</div>
      <h3>Live Counter</h3>
      <div class="counter" id="counter">0</div>
      <button class="feature-btn" id="countBtn">Count Up!</button>
    </div>
    
    <div class="feature-card" id="card3">
      <div class="icon">✨</div>
      <h3>Magic Text</h3>
      <input type="text" id="nameInput" placeholder="Enter your name">
      <p class="greeting" id="greeting"></p>
    </div>
  </div>
  
  <div class="output" id="output">👆 Try the interactive features above!</div>
</div>`,
    css: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: 'Inter', system-ui, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}
.container {
  background: #fff;
  border-radius: 24px;
  padding: 3rem;
  max-width: 800px;
  width: 100%;
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.3);
}
h1 {
  color: #667eea;
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2.5rem;
}
.interactive-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}
.feature-card {
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  padding: 2rem;
  border-radius: 16px;
  text-align: center;
  transition: all 0.3s;
  cursor: pointer;
}
.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
}
.icon {
  font-size: 3rem;
  margin-bottom: 1rem;
  animation: bounce 2s infinite;
}
@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}
h3 {
  color: #333;
  margin-bottom: 1rem;
  font-size: 1.1rem;
}
.feature-btn {
  padding: 0.75rem 1.5rem;
  background: #667eea;
  color: white;
  border: none;
  border-radius: 10px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s;
  font-size: 0.95rem;
  width: 100%;
}
.feature-btn:hover {
  background: #5568d3;
  transform: scale(1.05);
}
.counter {
  font-size: 3rem;
  font-weight: 900;
  color: #667eea;
  margin: 1rem 0;
  transition: transform 0.2s;
}
input {
  width: 100%;
  padding: 0.75rem;
  border: 2px solid #667eea;
  border-radius: 8px;
  font-size: 1rem;
  margin-bottom: 0.5rem;
}
.greeting {
  color: #667eea;
  font-weight: 700;
  font-size: 1.1rem;
  min-height: 30px;
}
.output {
  padding: 1.5rem;
  background: #0d1117;
  color: #F7DF1E;
  border-radius: 12px;
  font-family: 'Courier New', monospace;
  text-align: center;
  font-size: 1rem;
}`,
    js: `// Color changing feature
const colorBtn = document.getElementById('colorBtn');
const card1 = document.getElementById('card1');
const colors = ['#ffadad', '#ffd6a5', '#fdffb6', '#caffbf', '#9bf6ff', '#a0c4ff', '#bdb2ff', '#ffc6ff'];
let colorIndex = 0;

colorBtn.addEventListener('click', () => {
  card1.style.background = colors[colorIndex];
  colorIndex = (colorIndex + 1) % colors.length;
  console.log('🎨 Color changed to:', colors[colorIndex]);
});

// Counter feature
const countBtn = document.getElementById('countBtn');
const counter = document.getElementById('counter');
let count = 0;

countBtn.addEventListener('click', () => {
  count++;
  counter.textContent = count;
  counter.style.transform = 'scale(1.2)';
  setTimeout(() => {
    counter.style.transform = 'scale(1)';
  }, 200);
  console.log('🔢 Counter:', count);
});

// Live greeting feature
const nameInput = document.getElementById('nameInput');
const greeting = document.getElementById('greeting');
const output = document.getElementById('output');

nameInput.addEventListener('input', (e) => {
  const name = e.target.value;
  if (name) {
    greeting.textContent = \`Hello, \${name}! 👋\`;
    output.textContent = \`✨ JavaScript is updating in real-time!\`;
    console.log('✨ Greeting updated for:', name);
  } else {
    greeting.textContent = '';
    output.textContent = '👆 Try the interactive features above!';
  }
});

console.log('🚀 JavaScript Introduction loaded!');
console.log('All interactive features are ready!');`,
  },

  {
    topic: "hello-world",
    description: "is the traditional first program — displaying 'Hello, World!' using console.log, alert, and DOM manipulation.",
    html: `<div class="container">
  <h1>👋 Hello, World!</h1>
  
  <div class="hello-display" id="helloDisplay">
    <div class="hello-text">Hello, World!</div>
  </div>
  
  <div class="method-grid">
    <div class="method-card" id="consoleBtn">
      <div class="method-icon">📝</div>
      <div class="method-name">console.log()</div>
      <div class="method-desc">Log to console</div>
    </div>
    
    <div class="method-card" id="alertBtn">
      <div class="method-icon">⚠️</div>
      <div class="method-name">alert()</div>
      <div class="method-desc">Show alert</div>
    </div>
    
    <div class="method-card" id="domBtn">
      <div class="method-icon">🌐</div>
      <div class="method-name">DOM</div>
      <div class="method-desc">Update page</div>
    </div>
    
    <div class="method-card" id="animateBtn">
      <div class="method-icon">✨</div>
      <div class="method-name">Animate</div>
      <div class="method-desc">Add effects</div>
    </div>
  </div>
  
  <div class="output" id="output">Click any method to see Hello, World!</div>
</div>`,
    css: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: 'Inter', system-ui, sans-serif;
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}
.container {
  background: white;
  border-radius: 24px;
  padding: 3rem;
  max-width: 700px;
  width: 100%;
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.3);
}
h1 {
  color: #f5576c;
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2.5rem;
}
.hello-display {
  background: linear-gradient(135deg, #fff5f7 0%, #ffe5e9 100%);
  padding: 3rem;
  border-radius: 16px;
  margin-bottom: 2rem;
  text-align: center;
  border: 3px dashed #f5576c;
}
.hello-text {
  font-size: 2.5rem;
  font-weight: 900;
  color: #f5576c;
  transition: all 0.3s;
}
.method-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-bottom: 2rem;
}
.method-card {
  background: white;
  border: 2px solid #f5576c;
  padding: 1.5rem;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s;
  text-align: center;
}
.method-card:hover {
  background: #f5576c;
  color: white;
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(245, 87, 108, 0.3);
}
.method-icon {
  font-size: 2rem;
  margin-bottom: 0.5rem;
  transition: transform 0.3s;
}
.method-card:hover .method-icon {
  transform: scale(1.2);
}
.method-name {
  font-weight: 700;
  font-size: 1rem;
  margin-bottom: 0.25rem;
  font-family: 'Courier New', monospace;
}
.method-desc {
  font-size: 0.85rem;
  opacity: 0.8;
}
.output {
  padding: 1.5rem;
  background: #0d1117;
  color: #F7DF1E;
  border-radius: 12px;
  font-family: 'Courier New', monospace;
  text-align: center;
}
@keyframes rainbow {
  0% { color: #f5576c; }
  25% { color: #f093fb; }
  50% { color: #667eea; }
  75% { color: #4facfe; }
  100% { color: #f5576c; }
}
.rainbow {
  animation: rainbow 2s infinite;
}`,
    js: `const helloDisplay = document.getElementById('helloDisplay');
const helloText = helloDisplay.querySelector('.hello-text');
const output = document.getElementById('output');

document.getElementById('consoleBtn').addEventListener('click', () => {
  console.log('Hello, World!');
  console.log('👋 Logged to console at:', new Date().toLocaleTimeString());
  output.textContent = '✅ Check the console (F12) - Hello, World! logged!';
  helloText.style.color = '#4facfe';
});

document.getElementById('alertBtn').addEventListener('click', () => {
  alert('Hello, World!');
  output.textContent = '✅ Alert dialog shown with Hello, World!';
  helloText.style.color = '#ffa726';
  console.log('⚠️ Alert displayed');
});

document.getElementById('domBtn').addEventListener('click', () => {
  const messages = [
    'Hello, World! 🌍',
    'Hola, Mundo! 🌎',
    'Bonjour, Monde! 🌏',
    'Ciao, Mondo! 🌐',
    'Hello, World! 👋'
  ];
  const randomMsg = messages[Math.floor(Math.random() * messages.length)];
  helloText.textContent = randomMsg;
  output.textContent = '✅ DOM updated with: ' + randomMsg;
  helloText.style.color = '#66bb6a';
  console.log('🌐 DOM updated:', randomMsg);
});

document.getElementById('animateBtn').addEventListener('click', () => {
  helloText.classList.add('rainbow');
  helloText.style.transform = 'scale(1.2) rotate(5deg)';
  output.textContent = '✨ Animation applied to Hello, World!';
  
  setTimeout(() => {
    helloText.style.transform = 'scale(1) rotate(0deg)';
  }, 500);
  
  console.log('✨ Animation triggered');
});

console.log('👋 Hello, World! program loaded');
console.log('Try all 4 methods to see different outputs!');`,
  },

  {
    topic: "console",
    description: "provides methods like log, warn, error, table, and time for debugging and output in the browser developer tools.",
    html: `<div class="container">
  <h1>🔍 Console Methods</h1>
  
  <div class="console-simulator">
    <div class="console-header">
      <span>Console Output</span>
      <button id="clearSimBtn">Clear</button>
    </div>
    <div class="console-content" id="consoleContent">
      <div class="console-line">Ready to test console methods...</div>
    </div>
  </div>
  
  <div class="method-grid">
    <button class="console-btn log" id="logBtn">
      <span class="icon">📝</span>
      log()
    </button>
    <button class="console-btn warn" id="warnBtn">
      <span class="icon">⚠️</span>
      warn()
    </button>
    <button class="console-btn error" id="errorBtn">
      <span class="icon">❌</span>
      error()
    </button>
    <button class="console-btn table" id="tableBtn">
      <span class="icon">📊</span>
      table()
    </button>
    <button class="console-btn time" id="timeBtn">
      <span class="icon">⏱️</span>
      time()
    </button>
    <button class="console-btn group" id="groupBtn">
      <span class="icon">📁</span>
      group()
    </button>
  </div>
  
  <div class="output" id="output">Click buttons to test console methods!</div>
</div>`,
    css: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: 'Inter', system-ui, sans-serif;
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}
.container {
  background: white;
  border-radius: 24px;
  padding: 3rem;
  max-width: 750px;
  width: 100%;
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.3);
}
h1 {
  color: #4facfe;
  text-align: center;
  margin-bottom: 2rem;
}
.console-simulator {
  background: #1e1e1e;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 2rem;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}
.console-header {
  background: #2d2d2d;
  padding: 0.75rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  font-size: 0.9rem;
  font-weight: 600;
}
.console-header button {
  background: #4facfe;
  color: white;
  border: none;
  padding: 0.4rem 0.8rem;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.85rem;
}
.console-content {
  padding: 1rem;
  max-height: 200px;
  overflow-y: auto;
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
}
.console-line {
  color: #d4d4d4;
  padding: 0.25rem 0;
  border-bottom: 1px solid #333;
}
.console-line.log {
  color: #4facfe;
}
.console-line.warn {
  color: #ffa726;
}
.console-line.error {
  color: #ef5350;
}
.method-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-bottom: 2rem;
}
.console-btn {
  padding: 1.2rem;
  border: none;
  border-radius: 12px;
  font-family: 'Courier New', monospace;
  font-size: 0.95rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}
.console-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}
.icon {
  font-size: 1.5rem;
}
.log {
  background: #4facfe;
}
.warn {
  background: #ffa726;
}
.error {
  background: #ef5350;
}
.table {
  background: #66bb6a;
}
.time {
  background: #ab47bc;
}
.group {
  background: #78909c;
}
.output {
  padding: 1.5rem;
  background: #f0f9ff;
  border-radius: 12px;
  color: #4facfe;
  font-weight: 600;
  text-align: center;
  border: 2px solid #4facfe;
}`,
    js: `const consoleContent = document.getElementById('consoleContent');
const output = document.getElementById('output');

function addConsoleLine(text, type = 'log') {
  const line = document.createElement('div');
  line.className = \`console-line \${type}\`;
  line.textContent = text;
  consoleContent.appendChild(line);
  consoleContent.scrollTop = consoleContent.scrollHeight;
}

document.getElementById('logBtn').addEventListener('click', () => {
  console.log('This is a log message');
  console.log('Multiple values:', 42, true, { name: 'JS' });
  addConsoleLine('> console.log("This is a log message")', 'log');
  addConsoleLine('> Multiple values: 42, true, {name: "JS"}', 'log');
  output.textContent = '✅ Log messages sent to console';
});

document.getElementById('warnBtn').addEventListener('click', () => {
  console.warn('⚠️ This is a warning!');
  addConsoleLine('⚠️ Warning: This is a warning!', 'warn');
  output.textContent = '⚠️ Warning sent to console';
});

document.getElementById('errorBtn').addEventListener('click', () => {
  console.error('❌ This is an error!');
  addConsoleLine('❌ Error: This is an error!', 'error');
  output.textContent = '❌ Error sent to console';
});

document.getElementById('tableBtn').addEventListener('click', () => {
  const users = [
    { name: 'Alice', age: 25, role: 'Dev' },
    { name: 'Bob', age: 30, role: 'Designer' }
  ];
  console.table(users);
  addConsoleLine('📊 Table displayed (check real console)', 'log');
  output.textContent = '📊 Table displayed in console';
});

document.getElementById('timeBtn').addEventListener('click', () => {
  console.time('Timer');
  let sum = 0;
  for (let i = 0; i < 1000000; i++) sum += i;
  console.timeEnd('Timer');
  addConsoleLine(\`⏱️ Timer: ~\${(Math.random() * 10).toFixed(2)}ms\`, 'log');
  output.textContent = '⏱️ Timer result in console';
});

document.getElementById('groupBtn').addEventListener('click', () => {
  console.group('User Details');
  console.log('Name: John');
  console.log('Age: 25');
  console.groupEnd();
  addConsoleLine('📁 Group created (check real console)', 'log');
  output.textContent = '📁 Console group created';
});

document.getElementById('clearSimBtn').addEventListener('click', () => {
  consoleContent.innerHTML = '<div class="console-line">Console cleared...</div>';
  console.clear();
});

console.log('🔍 Console methods demo ready!');`,
  },

  {
    topic: "comments",
    description: "are non-executed notes in your code. Use // for single-line and /* */ for multi-line comments.",
    html: `<div class="container">
  <h1>💬 JavaScript Comments</h1>
  
  <div class="comment-demo">
    <div class="code-editor"><span class="comment">// This is a single-line comment</span>
<span class="keyword">const</span> message = <span class="string">'Hello'</span>; <span class="comment">// inline comment</span>

<span class="comment">/*
  Multi-line comment
  Can span multiple lines
*/</span>
<span class="keyword">function</span> <span class="function">greet</span>() {
  <span class="keyword">return</span> message;
}</div>
  </div>
  
  <div class="interactive-section">
    <h3>Try It Yourself:</h3>
    <textarea id="userCode" placeholder="Write code with comments here...">// Your comment here
const x = 5;</textarea>
    <button id="runBtn">Run Code</button>
    <button id="toggleBtn">Toggle Comments</button>
  </div>
  
  <div class="output" id="output">Write code above and click Run!</div>
</div>`,
    css: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: 'Inter', system-ui, sans-serif;
  background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}
.container {
  background: white;
  border-radius: 24px;
  padding: 3rem;
  max-width: 700px;
  width: 100%;
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.3);
}
h1 {
  color: #667eea;
  text-align: center;
  margin-bottom: 2rem;
}
.comment-demo {
  background: #1e1e1e;
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 2rem;
}
.code-editor {
  font-family: 'Courier New', monospace;
  font-size: 0.9rem;
  line-height: 1.8;
  color: #d4d4d4;
  white-space: pre;
}
.comment {
  color: #6a9955;
  font-style: italic;
}
.keyword {
  color: #569cd6;
}
.string {
  color: #ce9178;
}
.function {
  color: #dcdcaa;
}
.interactive-section {
  margin-bottom: 2rem;
}
h3 {
  color: #333;
  margin-bottom: 1rem;
}
textarea {
  width: 100%;
  min-height: 120px;
  padding: 1rem;
  border: 2px solid #667eea;
  border-radius: 12px;
  font-family: 'Courier New', monospace;
  font-size: 0.9rem;
  margin-bottom: 1rem;
  resize: vertical;
}
button {
  padding: 0.75rem 1.5rem;
  background: #667eea;
  color: white;
  border: none;
  border-radius: 10px;
  font-weight: 700;
  cursor: pointer;
  margin-right: 0.5rem;
  transition: all 0.3s;
}
button:hover {
  background: #5568d3;
  transform: translateY(-2px);
}
.output {
  padding: 1.5rem;
  background: #f0f4ff;
  border-radius: 12px;
  color: #667eea;
  font-weight: 600;
  font-family: 'Courier New', monospace;
  white-space: pre-wrap;
}`,
    js: `const userCode = document.getElementById('userCode');
const output = document.getElementById('output');
let commentsVisible = true;

document.getElementById('runBtn').addEventListener('click', () => {
  const code = userCode.value;
  
  // Count comments
  const singleLineComments = (code.match(/\\/\\//g) || []).length;
  const multiLineComments = (code.match(/\\/\\*/g) || []).length;
  
  output.textContent = \`Code Analysis:
━━━━━━━━━━━━━━━━━━━━━━
Lines: \${code.split('\\n').length}
Single-line comments (//): \${singleLineComments}
Multi-line comments (/* */): \${multiLineComments}

✅ Code is ready to run!
💡 Comments are ignored by JavaScript\`;
  
  console.log('Code analyzed:', {
    lines: code.split('\\n').length,
    singleLineComments,
    multiLineComments
  });
});

document.getElementById('toggleBtn').addEventListener('click', () => {
  const code = userCode.value;
  
  if (commentsVisible) {
    // Remove comments
    let cleaned = code.replace(/\\/\\/.*$/gm, '');
    cleaned = cleaned.replace(/\\/\\*[\\s\\S]*?\\*\\//g, '');
    userCode.value = cleaned;
    output.textContent = '🚫 Comments removed!\\nThis is what JavaScript sees.';
    commentsVisible = false;
  } else {
    // Restore
    userCode.value = \`// Your comment here
const x = 5;\`;
    output.textContent = '✅ Comments restored!';
    commentsVisible = true;
  }
  
  console.log('Comments toggled:', commentsVisible ? 'visible' : 'hidden');
});

console.log('💬 Comments demo ready!');
console.log('Comments are essential for code documentation');`,
  },

  {
    topic: "script-tag",
    description: "is used to embed or reference JavaScript in an HTML document — either inline or via an external .js file.",
    html: `<div class="container">
  <h1>📜 Script Tag</h1>
  
  <div class="methods-showcase">
    <div class="method-box">
      <div class="method-header">
        <span class="icon">📝</span>
        <h3>Inline Script</h3>
      </div>
      <div class="code-block">&lt;script&gt;
  alert('Hello!');
  console.log('Inline');
&lt;/script&gt;</div>
      <button class="test-btn" id="inlineBtn">Test Inline</button>
    </div>
    
    <div class="method-box">
      <div class="method-header">
        <span class="icon">📁</span>
        <h3>External Script</h3>
      </div>
      <div class="code-block">&lt;script src="app.js"&gt;
&lt;/script&gt;</div>
      <button class="test-btn" id="externalBtn">Test External</button>
    </div>
  </div>
  
  <div class="execution-tracker">
    <h3>Script Execution Log:</h3>
    <div class="log-container" id="logContainer">
      <div class="log-entry">⏳ Waiting for script execution...</div>
    </div>
  </div>
  
  <div class="stats">
    <div class="stat-item">
      <span class="stat-label">Scripts Executed:</span>
      <span class="stat-value" id="execCount">0</span>
    </div>
    <div class="stat-item">
      <span class="stat-label">Load Time:</span>
      <span class="stat-value" id="loadTime">0ms</span>
    </div>
  </div>
  
  <div class="output" id="output">Click buttons to test script execution!</div>
</div>`,
    css: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: 'Inter', system-ui, sans-serif;
  background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}
.container {
  background: white;
  border-radius: 24px;
  padding: 3rem;
  max-width: 750px;
  width: 100%;
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.3);
}
h1 {
  color: #fc8f6f;
  text-align: center;
  margin-bottom: 2rem;
}
.methods-showcase {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin-bottom: 2rem;
}
.method-box {
  background: #fff5f0;
  padding: 1.5rem;
  border-radius: 16px;
  border: 2px solid #fc8f6f;
}
.method-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
}
.icon {
  font-size: 1.5rem;
}
h3 {
  color: #fc8f6f;
  font-size: 1.1rem;
}
.code-block {
  background: #2d2d2d;
  color: #f8f8f2;
  padding: 1rem;
  border-radius: 8px;
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
  margin-bottom: 1rem;
  white-space: pre;
  overflow-x: auto;
}
.test-btn {
  width: 100%;
  padding: 0.75rem;
  background: #fc8f6f;
  color: white;
  border: none;
  border-radius: 10px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s;
}
.test-btn:hover {
  background: #e67d5f;
  transform: translateY(-2px);
}
.execution-tracker {
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 12px;
  margin-bottom: 2rem;
}
.execution-tracker h3 {
  color: #333;
  margin-bottom: 1rem;
}
.log-container {
  background: #1e1e1e;
  padding: 1rem;
  border-radius: 8px;
  max-height: 150px;
  overflow-y: auto;
}
.log-entry {
  color: #4facfe;
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
  padding: 0.25rem 0;
  border-bottom: 1px solid #333;
}
.stats {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-bottom: 2rem;
}
.stat-item {
  background: linear-gradient(135deg, #fff5f0 0%, #ffe5dc 100%);
  padding: 1rem;
  border-radius: 12px;
  text-align: center;
}
.stat-label {
  display: block;
  color: #666;
  font-size: 0.85rem;
  margin-bottom: 0.5rem;
}
.stat-value {
  display: block;
  color: #fc8f6f;
  font-size: 1.8rem;
  font-weight: 900;
}
.output {
  padding: 1.5rem;
  background: #fff5f0;
  border-radius: 12px;
  color: #fc8f6f;
  font-weight: 600;
  text-align: center;
}`,
    js: `const logContainer = document.getElementById('logContainer');
const output = document.getElementById('output');
const execCountEl = document.getElementById('execCount');
const loadTimeEl = document.getElementById('loadTime');

let execCount = 0;
const startTime = performance.now();

function addLog(message) {
  const entry = document.createElement('div');
  entry.className = 'log-entry';
  entry.textContent = \`[\${new Date().toLocaleTimeString()}] \${message}\`;
  logContainer.appendChild(entry);
  logContainer.scrollTop = logContainer.scrollHeight;
}

document.getElementById('inlineBtn').addEventListener('click', () => {
  execCount++;
  execCountEl.textContent = execCount;
  
  addLog('✅ Inline script executed');
  addLog('📝 Code: alert("Hello from inline script")');
  
  output.textContent = \`✅ Inline Script Executed!

This simulates:
<script>
  alert('Hello!');
</script>\`;
  
  console.log('📝 Inline script executed');
  console.log('Inline scripts run immediately when parsed');
});

document.getElementById('externalBtn').addEventListener('click', () => {
  execCount++;
  execCountEl.textContent = execCount;
  
  addLog('✅ External script loaded');
  addLog('📁 File: app.js (simulated)');
  
  output.textContent = \`✅ External Script Loaded!

This simulates:
<script src="app.js"></script>

Benefits:
• Reusable code
• Better organization
• Browser caching\`;
  
  console.log('📁 External script loaded');
  console.log('External scripts are cached by browser');
});

// Initial load
setTimeout(() => {
  const loadTime = Math.round(performance.now() - startTime);
  loadTimeEl.textContent = loadTime + 'ms';
  addLog('🚀 Script tag demo loaded');
  console.log('📜 Script tag demo ready!');
  console.log('Load time:', loadTime + 'ms');
}, 100);`,
  },

  /* ══════════════════════════════════════════════
     BATCH 2: VARIABLES & DATA TYPES (5 topics)
  ══════════════════════════════════════════════ */

  {
    topic: "var",
    description: "declares a function-scoped or globally-scoped variable. It is hoisted and can be redeclared — use let/const in modern JS instead.",
    html: `<div class="container">
  <h1>🔄 var Keyword</h1>
  
  <div class="demo-section">
    <h3>🔍 Test var Behavior:</h3>
    
    <div class="test-card">
      <h4>1. Hoisting Test</h4>
      <button class="test-btn" id="hoistBtn">Test Hoisting</button>
      <div class="result" id="hoistResult"></div>
    </div>
    
    <div class="test-card">
      <h4>2. Redeclaration Test</h4>
      <button class="test-btn" id="redeclareBtn">Test Redeclaration</button>
      <div class="result" id="redeclareResult"></div>
    </div>
    
    <div class="test-card">
      <h4>3. Function Scope Test</h4>
      <button class="test-btn" id="scopeBtn">Test Scope</button>
      <div class="result" id="scopeResult"></div>
    </div>
  </div>
  
  <div class="output" id="output">Click buttons to see var behavior!</div>
</div>`,
    css: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: 'Inter', system-ui, sans-serif;
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}
.container {
  background: white;
  border-radius: 24px;
  padding: 3rem;
  max-width: 700px;
  width: 100%;
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.3);
}
h1 {
  color: #f5576c;
  text-align: center;
  margin-bottom: 2rem;
}
.demo-section h3 {
  color: #333;
  margin-bottom: 1.5rem;
}
.test-card {
  background: #fff5f7;
  padding: 1.5rem;
  border-radius: 12px;
  margin-bottom: 1rem;
  border-left: 4px solid #f5576c;
}
h4 {
  color: #f5576c;
  margin-bottom: 1rem;
}
.test-btn {
  padding: 0.75rem 1.5rem;
  background: #f5576c;
  color: white;
  border: none;
  border-radius: 10px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s;
  margin-bottom: 0.75rem;
}
.test-btn:hover {
  background: #e04858;
  transform: translateY(-2px);
}
.result {
  background: #2d2d2d;
  color: #4facfe;
  padding: 1rem;
  border-radius: 8px;
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
  min-height: 60px;
  white-space: pre-wrap;
}
.output {
  margin-top: 2rem;
  padding: 1.5rem;
  background: #0d1117;
  color: #F7DF1E;
  border-radius: 12px;
  font-family: 'Courier New', monospace;
  text-align: center;
}`,
    js: `const output = document.getElementById('output');

document.getElementById('hoistBtn').addEventListener('click', () => {
  const result = document.getElementById('hoistResult');
  
  result.textContent = \`Before declaration: x = undefined

var x = 10;

After declaration: x = 10

✅ var is hoisted to the top!
Variables declared with var are hoisted but initialized as undefined.\`;
  
  console.log('🔄 Hoisting test:', 'var is hoisted');
  output.textContent = '✅ Hoisting demonstrated!';
});

document.getElementById('redeclareBtn').addEventListener('click', () => {
  const result = document.getElementById('redeclareResult');
  
  var testVar = 'First';
  var testVar = 'Second'; // Redeclaration allowed!
  
  result.textContent = \`var testVar = 'First';
var testVar = 'Second';

Result: testVar = "\${testVar}"

✅ var allows redeclaration!
This can lead to bugs - use let/const instead.\`;
  
  console.log('🔄 Redeclaration test:', testVar);
  output.textContent = '✅ Redeclaration allowed with var!';
});

document.getElementById('scopeBtn').addEventListener('click', () => {
  const result = document.getElementById('scopeResult');
  
  function testScope() {
    if (true) {
      var funcVar = 'I am function-scoped';
    }
    return funcVar; // Accessible outside if block!
  }
  
  const value = testScope();
  
  result.textContent = \`function testScope() {
  if (true) {
    var funcVar = 'I am function-scoped';
  }
  return funcVar; // ✅ Accessible!
}

Result: "\${value}"

✅ var is function-scoped, not block-scoped!\`;
  
  console.log('🔄 Scope test:', value);
  output.textContent = '✅ var is function-scoped!';
});

console.log('🔄 var demo ready!');`,
  },

  {
    topic: "let",
    description: "declares a block-scoped variable that can be reassigned but not redeclared in the same scope. Preferred over var.",
    html: `<div class="container">
  <h1>🔒 let Keyword</h1>
  
  <div class="demo-card">
    <h3>Block Scope Visualizer</h3>
    
    <div class="scope-container">
      <div class="scope-block" id="globalScope">
        <span class="scope-label">Global Scope</span>
        <div class="variable-list" id="globalVars"></div>
      </div>
      
      <div class="scope-block hidden" id="blockScope">
        <span class="scope-label">Block Scope { }</span>
        <div class="variable-list" id="blockVars"></div>
      </div>
    </div>
    
    <button id="createBlockBtn" style="width: 100%; margin-bottom: 1rem;">
      Create Block Scope { }
    </button>
    
    <div class="controls">
      <input type="text" id="varName" placeholder="Variable name">
      <input type="text" id="varValue" placeholder="Value">
      <button id="declareBtn">Declare with let</button>
      <button id="reassignBtn">Reassign</button>
      <button id="accessBtn">Access from Global</button>
    </div>
  </div>
  
  <div class="output" id="output">Try declaring variables in different scopes!</div>
</div>`,
    css: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: 'Inter', system-ui, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}
.container {
  background: white;
  border-radius: 24px;
  padding: 3rem;
  max-width: 750px;
  width: 100%;
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.3);
}
h1 {
  color: #667eea;
  text-align: center;
  margin-bottom: 2rem;
}
.demo-card {
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 16px;
  margin-bottom: 2rem;
}
h3 {
  color: #333;
  margin-bottom: 1.5rem;
  text-align: center;
}
.scope-container {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
}
.scope-block {
  flex: 1;
  background: white;
  border: 3px solid #667eea;
  border-radius: 12px;
  padding: 1.5rem;
  min-height: 200px;
  transition: all 0.3s;
}
.scope-block.hidden {
  opacity: 0.3;
  pointer-events: none;
}
.scope-label {
  display: block;
  color: #667eea;
  font-weight: 700;
  margin-bottom: 1rem;
  font-family: 'Courier New', monospace;
}
.variable-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.variable-item {
  background: #e3f2fd;
  padding: 0.75rem;
  border-radius: 8px;
  font-family: 'Courier New', monospace;
  font-size: 0.9rem;
  color: #667eea;
  animation: slideIn 0.3s;
}
@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
.controls {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 2rem;
}
input {
  padding: 0.75rem;
  border: 2px solid #667eea;
  border-radius: 10px;
  font-size: 1rem;
}
button {
  padding: 0.75rem 1.5rem;
  background: #667eea;
  color: white;
  border: none;
  border-radius: 10px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s;
}
button:hover {
  background: #5568d3;
  transform: translateY(-2px);
}
.output {
  padding: 1.5rem;
  background: #0d1117;
  color: #F7DF1E;
  border-radius: 12px;
  font-family: 'Courier New', monospace;
  text-align: center;
}`,
    js: `const output = document.getElementById('output');
const globalVars = document.getElementById('globalVars');
const blockVars = document.getElementById('blockVars');
const blockScope = document.getElementById('blockScope');

let inBlockScope = false;
const variables = { global: {}, block: {} };

document.getElementById('createBlockBtn').addEventListener('click', () => {
  inBlockScope = !inBlockScope;
  blockScope.classList.toggle('hidden');
  output.textContent = inBlockScope ? 
    '✅ Block scope created! Variables declared here are block-scoped.' :
    '❌ Block scope closed! Block variables are no longer accessible.';
  console.log('🔒 Block scope:', inBlockScope ? 'active' : 'inactive');
});

document.getElementById('declareBtn').addEventListener('click', () => {
  const name = document.getElementById('varName').value;
  const value = document.getElementById('varValue').value;
  
  if (!name || !value) {
    output.textContent = '⚠️ Please enter both name and value!';
    return;
  }
  
  const scope = inBlockScope ? 'block' : 'global';
  
  if (variables[scope][name]) {
    output.textContent = \`❌ Error: Cannot redeclare '\${name}'!\\nlet prevents redeclaration.\`;
    console.error('🔒 Redeclaration error:', name);
    return;
  }
  
  variables[scope][name] = value;
  
  const varElement = document.createElement('div');
  varElement.className = 'variable-item';
  varElement.textContent = \`let \${name} = '\${value}';\`;
  
  if (scope === 'block') {
    blockVars.appendChild(varElement);
  } else {
    globalVars.appendChild(varElement);
  }
  
  output.textContent = \`✅ Declared: let \${name} = '\${value}' in \${scope} scope\`;
  console.log(\`🔒 let \${name} declared in \${scope} scope\`);
});

document.getElementById('reassignBtn').addEventListener('click', () => {
  const name = document.getElementById('varName').value;
  const value = document.getElementById('varValue').value;
  
  const scope = inBlockScope ? 'block' : 'global';
  
  if (!variables[scope][name]) {
    output.textContent = \`❌ Variable '\${name}' not found in \${scope} scope!\`;
    return;
  }
  
  variables[scope][name] = value;
  output.textContent = \`✅ Reassigned: \${name} = '\${value}'\\nlet allows reassignment!\`;
  console.log(\`🔒 let \${name} reassigned to '\${value}'\`);
});

document.getElementById('accessBtn').addEventListener('click', () => {
  const name = document.getElementById('varName').value;
  
  if (variables.global[name]) {
    output.textContent = \`✅ Global: \${name} = '\${variables.global[name]}'\`;
  } else if (variables.block[name]) {
    output.textContent = \`❌ Error: \${name} is block-scoped!\\nCannot access from global scope.\`;
  } else {
    output.textContent = \`❌ Variable '\${name}' not found!\`;
  }
  
  console.log('🔒 Access attempt:', name);
});

console.log('🔒 let demo ready!');
console.log('let: block-scoped, no redeclaration, reassignable');`,
  },

  {
    topic: "const",
    description: "declares a block-scoped constant. The binding cannot be reassigned, but object/array contents can still be mutated.",
    html: `<div class="container">
  <h1>🔒 const Keyword</h1>
  
  <div class="demo-grid">
    <div class="test-card">
      <h3>🚫 Reassignment Test</h3>
      <button class="test-btn" id="reassignBtn">Try Reassign</button>
      <div class="result" id="reassignResult"></div>
    </div>
    
    <div class="test-card">
      <h3>✅ Object Mutation Test</h3>
      <button class="test-btn" id="objectBtn">Mutate Object</button>
      <div class="result" id="objectResult"></div>
    </div>
    
    <div class="test-card">
      <h3>✅ Array Mutation Test</h3>
      <button class="test-btn" id="arrayBtn">Mutate Array</button>
      <div class="result" id="arrayResult"></div>
    </div>
    
    <div class="test-card">
      <h3>🔍 Const vs Let</h3>
      <button class="test-btn" id="compareBtn">Compare</button>
      <div class="result" id="compareResult"></div>
    </div>
  </div>
  
  <div class="live-demo">
    <h3>Interactive Demo:</h3>
    <div class="code-display">const PI = 3.14159;
const user = { name: 'Alice', age: 25 };
const colors = ['red', 'green', 'blue'];</div>
  </div>
  
  <div class="output" id="output">Click buttons to test const behavior!</div>
</div>`,
    css: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: 'Inter', system-ui, sans-serif;
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}
.container {
  background: white;
  border-radius: 24px;
  padding: 3rem;
  max-width: 850px;
  width: 100%;
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.3);
}
h1 {
  color: #4facfe;
  text-align: center;
  margin-bottom: 2rem;
}
.demo-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-bottom: 2rem;
}
.test-card {
  background: #f0f9ff;
  padding: 1.5rem;
  border-radius: 12px;
  border-left: 4px solid #4facfe;
}
h3 {
  color: #4facfe;
  margin-bottom: 1rem;
  font-size: 1rem;
}
.test-btn {
  width: 100%;
  padding: 0.75rem;
  background: #4facfe;
  color: white;
  border: none;
  border-radius: 10px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s;
  margin-bottom: 0.75rem;
}
.test-btn:hover {
  background: #3d9ae6;
  transform: translateY(-2px);
}
.result {
  background: #2d2d2d;
  color: #4facfe;
  padding: 1rem;
  border-radius: 8px;
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
  min-height: 80px;
  white-space: pre-wrap;
}
.live-demo {
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 16px;
  margin-bottom: 2rem;
}
.code-display {
  background: #2d2d2d;
  color: #4facfe;
  padding: 1.5rem;
  border-radius: 12px;
  font-family: 'Courier New', monospace;
  font-size: 0.95rem;
  white-space: pre;
  line-height: 1.8;
}
.output {
  padding: 1.5rem;
  background: #0d1117;
  color: #F7DF1E;
  border-radius: 12px;
  font-family: 'Courier New', monospace;
  text-align: center;
}`,
    js: `const output = document.getElementById('output');

// Test 1: Reassignment (should fail)
document.getElementById('reassignBtn').addEventListener('click', () => {
  const result = document.getElementById('reassignResult');
  
  try {
    const PI = 3.14159;
    // This will throw an error
    eval('PI = 3.14');
    result.textContent = '✅ Reassignment succeeded';
  } catch (error) {
    result.textContent = \`❌ TypeError: Assignment to constant

const PI = 3.14159;
PI = 3.14; // ❌ Error!

✅ const prevents reassignment!\`;
    console.error('🔒 const reassignment error:', error.message);
  }
  
  output.textContent = '❌ const variables cannot be reassigned!';
});

// Test 2: Object mutation (should work)
document.getElementById('objectBtn').addEventListener('click', () => {
  const result = document.getElementById('objectResult');
  
  const user = { name: 'Alice', age: 25 };
  console.log('Original:', user);
  
  user.age = 26;
  user.city = 'NYC';
  
  result.textContent = \`✅ Object mutation allowed!

const user = { name: 'Alice', age: 25 };
user.age = 26; // ✅ Works!
user.city = 'NYC'; // ✅ Works!

Result: \${JSON.stringify(user, null, 2)}\`;
  
  output.textContent = '✅ const allows object property changes!';
  console.log('Modified:', user);
});

// Test 3: Array mutation (should work)
document.getElementById('arrayBtn').addEventListener('click', () => {
  const result = document.getElementById('arrayResult');
  
  const colors = ['red', 'green', 'blue'];
  console.log('Original:', colors);
  
  colors.push('yellow');
  colors[0] = 'crimson';
  
  result.textContent = \`✅ Array mutation allowed!

const colors = ['red', 'green', 'blue'];
colors.push('yellow'); // ✅ Works!
colors[0] = 'crimson'; // ✅ Works!

Result: [\${colors.map(c => "'" + c + "'").join(', ')}]\`;
  
  output.textContent = '✅ const allows array modifications!';
  console.log('Modified:', colors);
});

// Test 4: Comparison
document.getElementById('compareBtn').addEventListener('click', () => {
  const result = document.getElementById('compareResult');
  
  result.textContent = \`📊 const vs let:

const:
• Block-scoped ✅
• Cannot reassign ❌
• Must initialize ✅
• Object/Array mutable ✅

let:
• Block-scoped ✅
• Can reassign ✅
• Can declare without init ✅
• Object/Array mutable ✅

Use const by default!\`;
  
  output.textContent = '📊 const is preferred for immutable bindings!';
  console.log('🔒 const vs let comparison shown');
});

console.log('🔒 const demo ready!');
console.log('const: block-scoped, no reassignment, mutable content');`,
  },

  {
    topic: "string",
    description: "is a sequence of characters used to represent text. Strings can be created with single quotes, double quotes, or template literals.",
    html: `<div class="container">
  <h1>📝 String Data Type</h1>
  
  <div class="string-playground">
    <h3>String Playground:</h3>
    <input type="text" id="input1" placeholder="First string" value="Hello">
    <input type="text" id="input2" placeholder="Second string" value="World">
    
    <div class="method-grid">
      <button class="method-btn" id="concatBtn">
        <span class="icon">➕</span>
        Concatenate
      </button>
      <button class="method-btn" id="upperBtn">
        <span class="icon">🔠</span>
        Uppercase
      </button>
      <button class="method-btn" id="lowerBtn">
        <span class="icon">🔡</span>
        Lowercase
      </button>
      <button class="method-btn" id="lengthBtn">
        <span class="icon">📏</span>
        Length
      </button>
      <button class="method-btn" id="sliceBtn">
        <span class="icon">✂️</span>
        Slice
      </button>
      <button class="method-btn" id="replaceBtn">
        <span class="icon">🔄</span>
        Replace
      </button>
      <button class="method-btn" id="splitBtn">
        <span class="icon">📊</span>
        Split
      </button>
      <button class="method-btn" id="templateBtn">
        <span class="icon">✨</span>
        Template
      </button>
    </div>
  </div>
  
  <div class="result-display">
    <h3>Result:</h3>
    <div class="result-box" id="resultBox">Click a method to see the result!</div>
  </div>
  
  <div class="output" id="output">Try different string methods!</div>
</div>`,
    css: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: 'Inter', system-ui, sans-serif;
  background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}
.container {
  background: white;
  border-radius: 24px;
  padding: 3rem;
  max-width: 800px;
  width: 100%;
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.3);
}
h1 {
  color: #fc8f6f;
  text-align: center;
  margin-bottom: 2rem;
}
.string-playground {
  background: #fff5f0;
  padding: 2rem;
  border-radius: 16px;
  margin-bottom: 2rem;
}
h3 {
  color: #fc8f6f;
  margin-bottom: 1rem;
}
input {
  width: 100%;
  padding: 1rem;
  border: 2px solid #fc8f6f;
  border-radius: 12px;
  font-size: 1rem;
  margin-bottom: 1rem;
}
.method-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.75rem;
}
.method-btn {
  padding: 1rem;
  background: #fc8f6f;
  color: white;
  border: none;
  border-radius: 10px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.85rem;
}
.method-btn:hover {
  background: #e67d5f;
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(252, 143, 111, 0.3);
}
.icon {
  font-size: 1.5rem;
}
.result-display {
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 16px;
  margin-bottom: 2rem;
}
.result-box {
  background: #2d2d2d;
  color: #fc8f6f;
  padding: 1.5rem;
  border-radius: 12px;
  font-family: 'Courier New', monospace;
  font-size: 1rem;
  min-height: 100px;
  white-space: pre-wrap;
  line-height: 1.8;
}
.output {
  padding: 1.5rem;
  background: #0d1117;
  color: #F7DF1E;
  border-radius: 12px;
  font-family: 'Courier New', monospace;
  text-align: center;
}`,
    js: `const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const resultBox = document.getElementById('resultBox');
const output = document.getElementById('output');

document.getElementById('concatBtn').addEventListener('click', () => {
  const str1 = input1.value;
  const str2 = input2.value;
  const result = str1 + ' ' + str2;
  
  resultBox.textContent = \`Concatenation:
"\${str1}" + " " + "\${str2}"
= "\${result}"\`;
  
  output.textContent = '➕ Strings concatenated!';
  console.log('➕ Concatenation:', result);
});

document.getElementById('upperBtn').addEventListener('click', () => {
  const str = input1.value;
  const result = str.toUpperCase();
  
  resultBox.textContent = \`Uppercase:
"\${str}".toUpperCase()
= "\${result}"\`;
  
  output.textContent = '🔠 Converted to uppercase!';
  console.log('🔠 Uppercase:', result);
});

document.getElementById('lowerBtn').addEventListener('click', () => {
  const str = input1.value;
  const result = str.toLowerCase();
  
  resultBox.textContent = \`Lowercase:
"\${str}".toLowerCase()
= "\${result}"\`;
  
  output.textContent = '🔡 Converted to lowercase!';
  console.log('🔡 Lowercase:', result);
});

document.getElementById('lengthBtn').addEventListener('click', () => {
  const str = input1.value;
  const result = str.length;
  
  resultBox.textContent = \`Length:
"\${str}".length
= \${result} characters\`;
  
  output.textContent = '📏 String length calculated!';
  console.log('📏 Length:', result);
});

document.getElementById('sliceBtn').addEventListener('click', () => {
  const str = input1.value;
  const result = str.slice(0, 3);
  
  resultBox.textContent = \`Slice (first 3 chars):
"\${str}".slice(0, 3)
= "\${result}"\`;
  
  output.textContent = '✂️ String sliced!';
  console.log('✂️ Slice:', result);
});

document.getElementById('replaceBtn').addEventListener('click', () => {
  const str = input1.value;
  const result = str.replace(str[0], '🎉');
  
  resultBox.textContent = \`Replace (first char):
"\${str}".replace("\${str[0]}", "🎉")
= "\${result}"\`;
  
  output.textContent = '🔄 String replaced!';
  console.log('🔄 Replace:', result);
});

document.getElementById('splitBtn').addEventListener('click', () => {
  const str = input1.value;
  const result = str.split('');
  
  resultBox.textContent = \`Split into array:
"\${str}".split('')
= [\${result.map(c => "'" + c + "'").join(', ')}]\`;
  
  output.textContent = '📊 String split into array!';
  console.log('📊 Split:', result);
});

document.getElementById('templateBtn').addEventListener('click', () => {
  const str1 = input1.value;
  const str2 = input2.value;
  const result = \`\${str1}, \${str2}!\`;
  
  resultBox.textContent = \`Template Literal:
\\\`\\\${str1}, \\\${str2}!\\\`
= "\${result}"\`;
  
  output.textContent = '✨ Template literal created!';
  console.log('✨ Template:', result);
});

console.log('📝 String demo ready!');`,
  },

  {
    topic: "number",
    description: "is a numeric data type for integers and floating-point values. JavaScript uses 64-bit floating-point format (IEEE 754).",
    html: `<div class="container">
  <h1>🔢 Number Data Type</h1>
  
  <div class="calculator">
    <h3>Number Calculator:</h3>
    <input type="number" id="num1" placeholder="First number" value="10">
    <input type="number" id="num2" placeholder="Second number" value="5">
    
    <div class="operations-grid">
      <button class="op-btn" id="addBtn">
        <span class="icon">➕</span>
        Add
      </button>
      <button class="op-btn" id="subBtn">
        <span class="icon">➖</span>
        Subtract
      </button>
      <button class="op-btn" id="mulBtn">
        <span class="icon">✖️</span>
        Multiply
      </button>
      <button class="op-btn" id="divBtn">
        <span class="icon">➗</span>
        Divide
      </button>
      <button class="op-btn" id="powBtn">
        <span class="icon">⚡</span>
        Power
      </button>
      <button class="op-btn" id="sqrtBtn">
        <span class="icon">√</span>
        Sqrt
      </button>
      <button class="op-btn" id="roundBtn">
        <span class="icon">🔄</span>
        Round
      </button>
      <button class="op-btn" id="randomBtn">
        <span class="icon">🎲</span>
        Random
      </button>
    </div>
  </div>
  
  <div class="result-display">
    <h3>Result:</h3>
    <div class="result-box" id="resultBox">Perform an operation!</div>
  </div>
  
  <div class="output" id="output">Try different number operations!</div>
</div>`,
    css: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: 'Inter', system-ui, sans-serif;
  background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}
.container {
  background: white;
  border-radius: 24px;
  padding: 3rem;
  max-width: 750px;
  width: 100%;
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.3);
}
h1 {
  color: #667eea;
  text-align: center;
  margin-bottom: 2rem;
}
.calculator {
  background: #f0f4ff;
  padding: 2rem;
  border-radius: 16px;
  margin-bottom: 2rem;
}
h3 {
  color: #667eea;
  margin-bottom: 1rem;
}
input {
  width: 100%;
  padding: 1rem;
  border: 2px solid #667eea;
  border-radius: 12px;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  text-align: center;
  font-weight: 700;
}
.operations-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.75rem;
}
.op-btn {
  padding: 1.2rem;
  background: #667eea;
  color: white;
  border: none;
  border-radius: 12px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
}
.op-btn:hover {
  background: #5568d3;
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(102, 126, 234, 0.3);
}
.icon {
  font-size: 1.5rem;
}
.result-display {
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 16px;
  margin-bottom: 2rem;
}
.result-box {
  background: #2d2d2d;
  color: #667eea;
  padding: 1.5rem;
  border-radius: 12px;
  font-family: 'Courier New', monospace;
  font-size: 1.2rem;
  min-height: 80px;
  text-align: center;
  line-height: 1.8;
}
.output {
  padding: 1.5rem;
  background: #0d1117;
  color: #F7DF1E;
  border-radius: 12px;
  font-family: 'Courier New', monospace;
  text-align: center;
}`,
    js: `const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const resultBox = document.getElementById('resultBox');
const output = document.getElementById('output');

document.getElementById('addBtn').addEventListener('click', () => {
  const a = parseFloat(num1.value);
  const b = parseFloat(num2.value);
  const result = a + b;
  
  resultBox.textContent = \`\${a} + \${b} = \${result}\`;
  output.textContent = '➕ Addition performed!';
  console.log('➕ Add:', result);
});

document.getElementById('subBtn').addEventListener('click', () => {
  const a = parseFloat(num1.value);
  const b = parseFloat(num2.value);
  const result = a - b;
  
  resultBox.textContent = \`\${a} - \${b} = \${result}\`;
  output.textContent = '➖ Subtraction performed!';
  console.log('➖ Subtract:', result);
});

document.getElementById('mulBtn').addEventListener('click', () => {
  const a = parseFloat(num1.value);
  const b = parseFloat(num2.value);
  const result = a * b;
  
  resultBox.textContent = \`\${a} × \${b} = \${result}\`;
  output.textContent = '✖️ Multiplication performed!';
  console.log('✖️ Multiply:', result);
});

document.getElementById('divBtn').addEventListener('click', () => {
  const a = parseFloat(num1.value);
  const b = parseFloat(num2.value);
  const result = a / b;
  
  resultBox.textContent = \`\${a} ÷ \${b} = \${result}\`;
  output.textContent = '➗ Division performed!';
  console.log('➗ Divide:', result);
});

document.getElementById('powBtn').addEventListener('click', () => {
  const a = parseFloat(num1.value);
  const b = parseFloat(num2.value);
  const result = Math.pow(a, b);
  
  resultBox.textContent = \`\${a} ^ \${b} = \${result}\`;
  output.textContent = '⚡ Power calculated!';
  console.log('⚡ Power:', result);
});

document.getElementById('sqrtBtn').addEventListener('click', () => {
  const a = parseFloat(num1.value);
  const result = Math.sqrt(a);
  
  resultBox.textContent = \`√\${a} = \${result.toFixed(2)}\`;
  output.textContent = '√ Square root calculated!';
  console.log('√ Sqrt:', result);
});

document.getElementById('roundBtn').addEventListener('click', () => {
  const a = parseFloat(num1.value);
  const result = Math.round(a);
  
  resultBox.textContent = \`Round(\${a}) = \${result}\`;
  output.textContent = '🔄 Number rounded!';
  console.log('🔄 Round:', result);
});

document.getElementById('randomBtn').addEventListener('click', () => {
  const result = Math.random();
  
  resultBox.textContent = \`Math.random() = \${result.toFixed(4)}\`;
  output.textContent = '🎲 Random number generated!';
  console.log('🎲 Random:', result);
});

console.log('🔢 Number demo ready!');`,
  },

  {
    topic: "boolean",
    description: "is a logical data type with only two values: true or false. Used for conditional logic and comparisons.",
    html: `<div class="container">
  <h1>✓ Boolean Data Type</h1>
  
  <div class="truth-table">
    <h3>Truth Table:</h3>
    <div class="table-grid">
      <div class="table-header">Value</div>
      <div class="table-header">Type</div>
      <div class="table-header">Boolean</div>
      
      <div class="table-cell">true</div>
      <div class="table-cell">boolean</div>
      <div class="table-cell true">✓ true</div>
      
      <div class="table-cell">false</div>
      <div class="table-cell">boolean</div>
      <div class="table-cell false">✗ false</div>
      
      <div class="table-cell">1</div>
      <div class="table-cell">number</div>
      <div class="table-cell true">✓ truthy</div>
      
      <div class="table-cell">0</div>
      <div class="table-cell">number</div>
      <div class="table-cell false">✗ falsy</div>
      
      <div class="table-cell">"hello"</div>
      <div class="table-cell">string</div>
      <div class="table-cell true">✓ truthy</div>
      
      <div class="table-cell">""</div>
      <div class="table-cell">string</div>
      <div class="table-cell false">✗ falsy</div>
    </div>
  </div>
  
  <div class="interactive-section">
    <h3>Test Values:</h3>
    <input type="text" id="testInput" placeholder="Enter a value to test">
    <button id="testBtn">Test Boolean Value</button>
  </div>
  
  <div class="output" id="output">Enter a value to test its boolean conversion!</div>
</div>`,
    css: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: 'Inter', system-ui, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}
.container {
  background: white;
  border-radius: 24px;
  padding: 3rem;
  max-width: 700px;
  width: 100%;
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.3);
}
h1 {
  color: #667eea;
  text-align: center;
  margin-bottom: 2rem;
}
.truth-table {
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 16px;
  margin-bottom: 2rem;
}
h3 {
  color: #333;
  margin-bottom: 1rem;
}
.table-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem;
}
.table-header {
  background: #667eea;
  color: white;
  padding: 0.75rem;
  font-weight: 700;
  text-align: center;
  border-radius: 8px;
}
.table-cell {
  background: white;
  padding: 0.75rem;
  text-align: center;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-family: 'Courier New', monospace;
}
.table-cell.true {
  background: #e8f5e9;
  color: #2e7d32;
  font-weight: 700;
}
.table-cell.false {
  background: #ffebee;
  color: #c62828;
  font-weight: 700;
}
.interactive-section {
  margin-bottom: 2rem;
}
input {
  width: 100%;
  padding: 1rem;
  border: 2px solid #667eea;
  border-radius: 12px;
  font-size: 1rem;
  margin-bottom: 1rem;
}
button {
  width: 100%;
  padding: 0.75rem;
  background: #667eea;
  color: white;
  border: none;
  border-radius: 10px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s;
}
button:hover {
  background: #5568d3;
  transform: translateY(-2px);
}
.output {
  padding: 1.5rem;
  background: #0d1117;
  color: #F7DF1E;
  border-radius: 12px;
  font-family: 'Courier New', monospace;
  text-align: center;
  white-space: pre-wrap;
}`,
    js: `const testInput = document.getElementById('testInput');
const output = document.getElementById('output');

document.getElementById('testBtn').addEventListener('click', () => {
  const value = testInput.value;
  
  // Try to parse as number
  let testValue = value;
  if (!isNaN(value) && value !== '') {
    testValue = Number(value);
  } else if (value === 'true') {
    testValue = true;
  } else if (value === 'false') {
    testValue = false;
  } else if (value === 'null') {
    testValue = null;
  } else if (value === 'undefined') {
    testValue = undefined;
  }
  
  const boolValue = Boolean(testValue);
  const isTruthy = !!testValue;
  
  output.textContent = \`Input: "\${value}"
Type: \${typeof testValue}
Boolean(\${value}): \${boolValue}
Truthy/Falsy: \${isTruthy ? '✓ truthy' : '✗ falsy'}

Falsy values in JS:
• false
• 0
• "" (empty string)
• null
• undefined
• NaN\`;
  
  console.log('Boolean test:', { value, testValue, boolValue, isTruthy });
});

console.log('✓ Boolean demo ready!');`,
  },

  {
    topic: "typeof",
    description: "is an operator that returns a string indicating the type of a value: 'string', 'number', 'boolean', 'object', 'function', 'undefined', 'symbol', 'bigint'.",
    html: `<div class="container">
  <h1>🔍 typeof Operator</h1>
  
  <div class="type-checker">
    <h3>Type Checker:</h3>
    <input type="text" id="valueInput" placeholder="Enter a value">
    <button id="checkBtn">Check Type</button>
    <div class="result" id="result"></div>
  </div>
  
  <div class="examples-grid">
    <div class="example-card" data-value="'Hello'">
      <div class="value">'Hello'</div>
      <div class="type">string</div>
    </div>
    <div class="example-card" data-value="42">
      <div class="value">42</div>
      <div class="type">number</div>
    </div>
    <div class="example-card" data-value="true">
      <div class="value">true</div>
      <div class="type">boolean</div>
    </div>
    <div class="example-card" data-value="{}">
      <div class="value">{}</div>
      <div class="type">object</div>
    </div>
    <div class="example-card" data-value="[]">
      <div class="value">[]</div>
      <div class="type">object</div>
    </div>
    <div class="example-card" data-value="null">
      <div class="value">null</div>
      <div class="type">object ⚠️</div>
    </div>
    <div class="example-card" data-value="undefined">
      <div class="value">undefined</div>
      <div class="type">undefined</div>
    </div>
    <div class="example-card" data-value="function(){}">
      <div class="value">function(){}</div>
      <div class="type">function</div>
    </div>
  </div>
  
  <div class="output" id="output">Click examples or enter your own value!</div>
</div>`,
    css: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: 'Inter', system-ui, sans-serif;
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}
.container {
  background: white;
  border-radius: 24px;
  padding: 3rem;
  max-width: 800px;
  width: 100%;
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.3);
}
h1 {
  color: #4facfe;
  text-align: center;
  margin-bottom: 2rem;
}
.type-checker {
  background: #f0f9ff;
  padding: 2rem;
  border-radius: 16px;
  margin-bottom: 2rem;
}
h3 {
  color: #4facfe;
  margin-bottom: 1rem;
}
input {
  width: 100%;
  padding: 1rem;
  border: 2px solid #4facfe;
  border-radius: 12px;
  font-size: 1rem;
  margin-bottom: 1rem;
}
button {
  width: 100%;
  padding: 0.75rem;
  background: #4facfe;
  color: white;
  border: none;
  border-radius: 10px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s;
  margin-bottom: 1rem;
}
button:hover {
  background: #3d9ae6;
  transform: translateY(-2px);
}
.result {
  background: #2d2d2d;
  color: #4facfe;
  padding: 1.5rem;
  border-radius: 12px;
  font-family: 'Courier New', monospace;
  min-height: 80px;
  white-space: pre-wrap;
}
.examples-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  margin-bottom: 2rem;
}
.example-card {
  background: #f8f9fa;
  padding: 1rem;
  border-radius: 12px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s;
  border: 2px solid transparent;
}
.example-card:hover {
  background: #4facfe;
  color: white;
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(79, 172, 254, 0.3);
}
.value {
  font-family: 'Courier New', monospace;
  font-weight: 700;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
}
.type {
  font-size: 0.85rem;
  opacity: 0.8;
}
.output {
  padding: 1.5rem;
  background: #0d1117;
  color: #F7DF1E;
  border-radius: 12px;
  font-family: 'Courier New', monospace;
  text-align: center;
}`,
    js: `const valueInput = document.getElementById('valueInput');
const result = document.getElementById('result');
const output = document.getElementById('output');

function checkType(value) {
  let testValue;
  
  // Parse the input
  try {
    if (value === 'null') testValue = null;
    else if (value === 'undefined') testValue = undefined;
    else if (value === 'true') testValue = true;
    else if (value === 'false') testValue = false;
    else if (value === '{}') testValue = {};
    else if (value === '[]') testValue = [];
    else if (value.startsWith("'") && value.endsWith("'")) testValue = value.slice(1, -1);
    else if (!isNaN(value) && value !== '') testValue = Number(value);
    else testValue = value;
  } catch {
    testValue = value;
  }
  
  const type = typeof testValue;
  
  result.textContent = \`Value: \${value}
typeof: "\${type}"

Type Details:
• Primitive: \${type !== 'object' && type !== 'function'}
• Reference: \${type === 'object' || type === 'function'}
• Nullable: \${testValue === null || testValue === undefined}\`;
  
  output.textContent = \`✅ Type checked: \${type}\`;
  console.log('typeof:', { value, testValue, type });
}

document.getElementById('checkBtn').addEventListener('click', () => {
  checkType(valueInput.value);
});

// Example cards
document.querySelectorAll('.example-card').forEach(card => {
  card.addEventListener('click', () => {
    const value = card.dataset.value;
    valueInput.value = value;
    checkType(value);
  });
});

console.log('🔍 typeof demo ready!');`,
  },

  {
    topic: "template-literals",
    description: "use backticks (\`) to create strings with embedded expressions, multi-line support, and cleaner string interpolation using ${}.",
    html: `<div class="container">
  <h1>✨ Template Literals</h1>
  
  <div class="demo-section">
    <h3>String Interpolation:</h3>
    <input type="text" id="nameInput" placeholder="Your name" value="Alice">
    <input type="number" id="ageInput" placeholder="Your age" value="25">
    <button id="interpolateBtn">Generate String</button>
    <div class="result" id="interpolateResult"></div>
  </div>
  
  <div class="demo-section">
    <h3>Multi-line Strings:</h3>
    <button id="multilineBtn">Show Multi-line</button>
    <div class="result" id="multilineResult"></div>
  </div>
  
  <div class="demo-section">
    <h3>Expression Evaluation:</h3>
    <input type="number" id="expr1" placeholder="Number 1" value="10">
    <input type="number" id="expr2" placeholder="Number 2" value="5">
    <button id="exprBtn">Evaluate Expression</button>
    <div class="result" id="exprResult"></div>
  </div>
  
  <div class="output" id="output">Try template literal features!</div>
</div>`,
    css: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: 'Inter', system-ui, sans-serif;
  background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}
.container {
  background: white;
  border-radius: 24px;
  padding: 3rem;
  max-width: 700px;
  width: 100%;
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.3);
}
h1 {
  color: #fc8f6f;
  text-align: center;
  margin-bottom: 2rem;
}
.demo-section {
  background: #fff5f0;
  padding: 1.5rem;
  border-radius: 12px;
  margin-bottom: 1.5rem;
}
h3 {
  color: #fc8f6f;
  margin-bottom: 1rem;
}
input {
  width: 100%;
  padding: 0.75rem;
  border: 2px solid #fc8f6f;
  border-radius: 10px;
  font-size: 1rem;
  margin-bottom: 0.75rem;
}
button {
  width: 100%;
  padding: 0.75rem;
  background: #fc8f6f;
  color: white;
  border: none;
  border-radius: 10px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s;
  margin-bottom: 0.75rem;
}
button:hover {
  background: #e67d5f;
  transform: translateY(-2px);
}
.result {
  background: #2d2d2d;
  color: #fc8f6f;
  padding: 1rem;
  border-radius: 8px;
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
  min-height: 60px;
  white-space: pre-wrap;
}
.output {
  padding: 1.5rem;
  background: #0d1117;
  color: #F7DF1E;
  border-radius: 12px;
  font-family: 'Courier New', monospace;
  text-align: center;
}`,
    js: `const output = document.getElementById('output');

document.getElementById('interpolateBtn').addEventListener('click', () => {
  const name = document.getElementById('nameInput').value;
  const age = document.getElementById('ageInput').value;
  const result = document.getElementById('interpolateResult');
  
  const message = \`Hello, my name is \${name} and I am \${age} years old.\`;
  
  result.textContent = \`Template Literal:
\\\`Hello, my name is \\\${name} and I am \\\${age} years old.\\\`

Result:
"\${message}"\`;
  
  output.textContent = '✨ String interpolation complete!';
  console.log('Interpolation:', message);
});

document.getElementById('multilineBtn').addEventListener('click', () => {
  const result = document.getElementById('multilineResult');
  
  const multiline = \`This is line 1
This is line 2
This is line 3\`;
  
  result.textContent = \`Multi-line Template:
\\\`This is line 1
This is line 2
This is line 3\\\`

Result:
\${multiline}\`;
  
  output.textContent = '✨ Multi-line string created!';
  console.log('Multi-line:', multiline);
});

document.getElementById('exprBtn').addEventListener('click', () => {
  const num1 = parseFloat(document.getElementById('expr1').value);
  const num2 = parseFloat(document.getElementById('expr2').value);
  const result = document.getElementById('exprResult');
  
  const message = \`\${num1} + \${num2} = \${num1 + num2}\`;
  
  result.textContent = \`Expression in Template:
\\\`\\\${num1} + \\\${num2} = \\\${num1 + num2}\\\`

Result:
"\${message}"

✅ Expressions are evaluated inside \${}\`;
  
  output.textContent = '✨ Expression evaluated!';
  console.log('Expression:', message);
});

console.log('✨ Template literals demo ready!');`,
  },

  {
    topic: "type-conversion",
    description: "is the process of converting values between types using String(), Number(), Boolean(), parseInt(), parseFloat(), and implicit coercion.",
    html: `<div class="container">
  <h1>🔄 Type Conversion</h1>
  
  <div class="converter">
    <h3>Value Converter:</h3>
    <input type="text" id="valueInput" placeholder="Enter a value" value="42">
    
    <div class="conversion-grid">
      <button class="convert-btn" id="toStringBtn">
        <span class="icon">📝</span>
        to String
      </button>
      <button class="convert-btn" id="toNumberBtn">
        <span class="icon">🔢</span>
        to Number
      </button>
      <button class="convert-btn" id="toBoolBtn">
        <span class="icon">✓</span>
        to Boolean
      </button>
      <button class="convert-btn" id="parseIntBtn">
        <span class="icon">🎯</span>
        parseInt
      </button>
      <button class="convert-btn" id="parseFloatBtn">
        <span class="icon">🎯</span>
        parseFloat
      </button>
      <button class="convert-btn" id="implicitBtn">
        <span class="icon">⚡</span>
        Implicit
      </button>
    </div>
  </div>
  
  <div class="result-display">
    <h3>Conversion Result:</h3>
    <div class="result" id="result"></div>
  </div>
  
  <div class="output" id="output">Try different type conversions!</div>
</div>`,
    css: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: 'Inter', system-ui, sans-serif;
  background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}
.container {
  background: white;
  border-radius: 24px;
  padding: 3rem;
  max-width: 750px;
  width: 100%;
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.3);
}
h1 {
  color: #667eea;
  text-align: center;
  margin-bottom: 2rem;
}
.converter {
  background: #f0f4ff;
  padding: 2rem;
  border-radius: 16px;
  margin-bottom: 2rem;
}
h3 {
  color: #667eea;
  margin-bottom: 1rem;
}
input {
  width: 100%;
  padding: 1rem;
  border: 2px solid #667eea;
  border-radius: 12px;
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  text-align: center;
  font-weight: 700;
}
.conversion-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}
.convert-btn {
  padding: 1.2rem;
  background: #667eea;
  color: white;
  border: none;
  border-radius: 12px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
}
.convert-btn:hover {
  background: #5568d3;
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(102, 126, 234, 0.3);
}
.icon {
  font-size: 1.5rem;
}
.result-display {
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 16px;
  margin-bottom: 2rem;
}
.result {
  background: #2d2d2d;
  color: #667eea;
  padding: 1.5rem;
  border-radius: 12px;
  font-family: 'Courier New', monospace;
  font-size: 0.9rem;
  min-height: 100px;
  white-space: pre-wrap;
}
.output {
  padding: 1.5rem;
  background: #0d1117;
  color: #F7DF1E;
  border-radius: 12px;
  font-family: 'Courier New', monospace;
  text-align: center;
}`,
    js: `const valueInput = document.getElementById('valueInput');
const result = document.getElementById('result');
const output = document.getElementById('output');

document.getElementById('toStringBtn').addEventListener('click', () => {
  const value = valueInput.value;
  const converted = String(value);
  
  result.textContent = \`String() Conversion:
Input: \${value}
Type: \${typeof value}

String(\${value})
Result: "\${converted}"
Type: \${typeof converted}\`;
  
  output.textContent = '📝 Converted to string!';
  console.log('String conversion:', converted);
});

document.getElementById('toNumberBtn').addEventListener('click', () => {
  const value = valueInput.value;
  const converted = Number(value);
  
  result.textContent = \`Number() Conversion:
Input: "\${value}"
Type: \${typeof value}

Number("\${value}")
Result: \${converted}
Type: \${typeof converted}
isNaN: \${isNaN(converted)}\`;
  
  output.textContent = '🔢 Converted to number!';
  console.log('Number conversion:', converted);
});

document.getElementById('toBoolBtn').addEventListener('click', () => {
  const value = valueInput.value;
  const converted = Boolean(value);
  
  result.textContent = \`Boolean() Conversion:
Input: "\${value}"
Type: \${typeof value}

Boolean("\${value}")
Result: \${converted}
Type: \${typeof converted}

Truthy: \${!!value}\`;
  
  output.textContent = '✓ Converted to boolean!';
  console.log('Boolean conversion:', converted);
});

document.getElementById('parseIntBtn').addEventListener('click', () => {
  const value = valueInput.value;
  const converted = parseInt(value);
  
  result.textContent = \`parseInt() Conversion:
Input: "\${value}"

parseInt("\${value}")
Result: \${converted}
Type: \${typeof converted}

Parses until first non-digit\`;
  
  output.textContent = '🎯 Parsed to integer!';
  console.log('parseInt:', converted);
});

document.getElementById('parseFloatBtn').addEventListener('click', () => {
  const value = valueInput.value;
  const converted = parseFloat(value);
  
  result.textContent = \`parseFloat() Conversion:
Input: "\${value}"

parseFloat("\${value}")
Result: \${converted}
Type: \${typeof converted}

Parses decimal numbers\`;
  
  output.textContent = '🎯 Parsed to float!';
  console.log('parseFloat:', converted);
});

document.getElementById('implicitBtn').addEventListener('click', () => {
  const value = valueInput.value;
  
  result.textContent = \`Implicit Coercion:
Input: "\${value}"

"\${value}" + 1 = "\${value + 1}" (string concat)
"\${value}" - 1 = \${value - 1} (number)
"\${value}" * 2 = \${value * 2} (number)
+"\${value}" = \${+value} (unary +)
!"\${value}" = \${!value} (boolean)\`;
  
  output.textContent = '⚡ Implicit coercion shown!';
  console.log('Implicit coercion examples');
});

console.log('🔄 Type conversion demo ready!');`,
  },

  /* ══════════════════════════════════════════════
     BATCH 3: OPERATORS (7 topics)
  ══════════════════════════════════════════════ */

  {
    topic: "arithmetic-operators",
    description: "perform mathematical calculations: + (add), - (subtract), * (multiply), / (divide), % (modulus), ** (exponent), ++ (increment), -- (decrement).",
    html: `<div class="container">
  <h1>➕ Arithmetic Operators</h1>
  <div class="calculator">
    <input type="number" id="num1" value="10">
    <input type="number" id="num2" value="5">
    <div class="ops-grid">
      <button id="addBtn">+ Add</button>
      <button id="subBtn">- Subtract</button>
      <button id="mulBtn">× Multiply</button>
      <button id="divBtn">÷ Divide</button>
      <button id="modBtn">% Modulus</button>
      <button id="powBtn">** Power</button>
      <button id="incBtn">++ Increment</button>
      <button id="decBtn">-- Decrement</button>
    </div>
  </div>
  <div class="output" id="output">Click an operator!</div>
</div>`,
    css: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.container {
  background: white;
  border-radius: 24px;
  padding: 3rem;
  max-width: 600px;
  width: 100%;
  box-shadow: 0 25px 70px rgba(0,0,0,0.3);
}

h1 {
  color: #667eea;
  text-align: center;
  margin-bottom: 2rem;
}

.calculator {
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 16px;
  margin-bottom: 2rem;
}

input {
  width: 100%;
  padding: 1rem;
  border: 2px solid #667eea;
  border-radius: 12px;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  text-align: center;
  font-weight: 700;
}

.ops-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

button {
  padding: 1rem;
  background: #667eea;
  color: white;
  border: none;
  border-radius: 10px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s;
}

button:hover {
  background: #5568d3;
  transform: translateY(-2px);
}

.output {
  padding: 1.5rem;
  background: #0d1117;
  color: #F7DF1E;
  border-radius: 12px;
  font-family: 'Courier New', monospace;
  text-align: center;
  font-size: 1.2rem;
}`,
    js: `const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const output = document.getElementById('output');

document.getElementById('addBtn').addEventListener('click', () => {
  const result = parseFloat(num1.value) + parseFloat(num2.value);
  output.textContent = \`\${num1.value} + \${num2.value} = \${result}\`;
  console.log('Add:', result);
});

document.getElementById('subBtn').addEventListener('click', () => {
  const result = parseFloat(num1.value) - parseFloat(num2.value);
  output.textContent = \`\${num1.value} - \${num2.value} = \${result}\`;
  console.log('Subtract:', result);
});

document.getElementById('mulBtn').addEventListener('click', () => {
  const result = parseFloat(num1.value) * parseFloat(num2.value);
  output.textContent = \`\${num1.value} × \${num2.value} = \${result}\`;
  console.log('Multiply:', result);
});

document.getElementById('divBtn').addEventListener('click', () => {
  const result = parseFloat(num1.value) / parseFloat(num2.value);
  output.textContent = \`\${num1.value} ÷ \${num2.value} = \${result.toFixed(2)}\`;
  console.log('Divide:', result);
});

document.getElementById('modBtn').addEventListener('click', () => {
  const result = parseFloat(num1.value) % parseFloat(num2.value);
  output.textContent = \`\${num1.value} % \${num2.value} = \${result}\`;
  console.log('Modulus:', result);
});

document.getElementById('powBtn').addEventListener('click', () => {
  const result = parseFloat(num1.value) ** parseFloat(num2.value);
  output.textContent = \`\${num1.value} ** \${num2.value} = \${result}\`;
  console.log('Power:', result);
});

document.getElementById('incBtn').addEventListener('click', () => {
  let val = parseFloat(num1.value);
  output.textContent = \`\${val}++ = \${val++} (then \${val})\`;
  console.log('Increment:', val);
});

document.getElementById('decBtn').addEventListener('click', () => {
  let val = parseFloat(num1.value);
  output.textContent = \`\${val}-- = \${val--} (then \${val})\`;
  console.log('Decrement:', val);
});

console.log('➕ Arithmetic operators ready!');`,
  },

  {
    topic: "assignment-operators",
    description: "assign values to variables: = (assign), += (add and assign), -= (subtract and assign), *= (multiply and assign), /= (divide and assign), %= (modulus and assign).",
    html: `<div class="container">
  <h1>= Assignment Operators</h1>
  <div class="demo">
    <input type="number" id="baseValue" value="10" placeholder="Base value">
    <input type="number" id="operand" value="5" placeholder="Operand">
    <div class="ops-grid">
      <button id="assignBtn">= Assign</button>
      <button id="addAssignBtn">+= Add Assign</button>
      <button id="subAssignBtn">-= Sub Assign</button>
      <button id="mulAssignBtn">*= Mul Assign</button>
      <button id="divAssignBtn">/= Div Assign</button>
      <button id="modAssignBtn">%= Mod Assign</button>
    </div>
    <div class="result" id="result">Result: 10</div>
  </div>
  <div class="output" id="output">Try assignment operators!</div>
</div>`,
    css: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', sans-serif;
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.container {
  background: white;
  border-radius: 24px;
  padding: 3rem;
  max-width: 600px;
  width: 100%;
  box-shadow: 0 25px 70px rgba(0,0,0,0.3);
}

h1 {
  color: #f5576c;
  text-align: center;
  margin-bottom: 2rem;
}

.demo {
  background: #fff5f7;
  padding: 2rem;
  border-radius: 16px;
  margin-bottom: 2rem;
}

input {
  width: 100%;
  padding: 1rem;
  border: 2px solid #f5576c;
  border-radius: 12px;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  text-align: center;
  font-weight: 700;
}

.ops-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-bottom: 1rem;
}

button {
  padding: 1rem;
  background: #f5576c;
  color: white;
  border: none;
  border-radius: 10px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s;
}

button:hover {
  background: #e04858;
  transform: translateY(-2px);
}

.result {
  background: #2d2d2d;
  color: #f5576c;
  padding: 1.5rem;
  border-radius: 12px;
  font-family: 'Courier New', monospace;
  font-size: 1.5rem;
  text-align: center;
  font-weight: 700;
}

.output {
  padding: 1.5rem;
  background: #0d1117;
  color: #F7DF1E;
  border-radius: 12px;
  font-family: 'Courier New', monospace;
  text-align: center;
}`,
    js: `const baseValue = document.getElementById('baseValue');
const operand = document.getElementById('operand');
const result = document.getElementById('result');
const output = document.getElementById('output');

let currentValue = 10;

function updateDisplay() {
  result.textContent = \`Result: \${currentValue}\`;
}

document.getElementById('assignBtn').addEventListener('click', () => {
  currentValue = parseFloat(operand.value);
  updateDisplay();
  output.textContent = \`x = \${operand.value}\`;
  console.log('Assign:', currentValue);
});

document.getElementById('addAssignBtn').addEventListener('click', () => {
  const op = parseFloat(operand.value);
  currentValue += op;
  updateDisplay();
  output.textContent = \`x += \${op} (x = x + \${op})\`;
  console.log('Add assign:', currentValue);
});

document.getElementById('subAssignBtn').addEventListener('click', () => {
  const op = parseFloat(operand.value);
  currentValue -= op;
  updateDisplay();
  output.textContent = \`x -= \${op} (x = x - \${op})\`;
  console.log('Sub assign:', currentValue);
});

document.getElementById('mulAssignBtn').addEventListener('click', () => {
  const op = parseFloat(operand.value);
  currentValue *= op;
  updateDisplay();
  output.textContent = \`x *= \${op} (x = x * \${op})\`;
  console.log('Mul assign:', currentValue);
});

document.getElementById('divAssignBtn').addEventListener('click', () => {
  const op = parseFloat(operand.value);
  currentValue /= op;
  updateDisplay();
  output.textContent = \`x /= \${op} (x = x / \${op})\`;
  console.log('Div assign:', currentValue);
});

document.getElementById('modAssignBtn').addEventListener('click', () => {
  const op = parseFloat(operand.value);
  currentValue %= op;
  updateDisplay();
  output.textContent = \`x %= \${op} (x = x % \${op})\`;
  console.log('Mod assign:', currentValue);
});

console.log('= Assignment operators ready!');`,
  },

  {
    topic: "comparison-operators",
    description: "compare values and return boolean: == (equal), === (strict equal), != (not equal), !== (strict not equal), > (greater), < (less), >= (greater or equal), <= (less or equal).",
    html: `<div class="container">
  <h1>⚖️ Comparison Operators</h1>
  <div class="demo">
    <input type="text" id="val1" value="5" placeholder="Value 1">
    <input type="text" id="val2" value="5" placeholder="Value 2">
    <div class="ops-grid">
      <button id="eqBtn">== Equal</button>
      <button id="strictEqBtn">=== Strict Equal</button>
      <button id="neBtn">!= Not Equal</button>
      <button id="strictNeBtn">!== Strict Not Equal</button>
      <button id="gtBtn">> Greater</button>
      <button id="ltBtn">< Less</button>
      <button id="gteBtn">>= Greater or Equal</button>
      <button id="lteBtn"><= Less or Equal</button>
    </div>
  </div>
  <div class="output" id="output">Compare values!</div>
</div>`,
    css: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', sans-serif;
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.container {
  background: white;
  border-radius: 24px;
  padding: 3rem;
  max-width: 650px;
  width: 100%;
  box-shadow: 0 25px 70px rgba(0,0,0,0.3);
}

h1 {
  color: #4facfe;
  text-align: center;
  margin-bottom: 2rem;
}

.demo {
  background: #f0f9ff;
  padding: 2rem;
  border-radius: 16px;
  margin-bottom: 2rem;
}

input {
  width: 100%;
  padding: 1rem;
  border: 2px solid #4facfe;
  border-radius: 12px;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  text-align: center;
  font-weight: 700;
}

.ops-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

button {
  padding: 1rem;
  background: #4facfe;
  color: white;
  border: none;
  border-radius: 10px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s;
  font-size: 0.9rem;
}

button:hover {
  background: #3d9ae6;
  transform: translateY(-2px);
}

.output {
  padding: 1.5rem;
  background: #0d1117;
  color: #F7DF1E;
  border-radius: 12px;
  font-family: 'Courier New', monospace;
  text-align: center;
  white-space: pre-wrap;
}`,
    js: `const val1 = document.getElementById('val1');
const val2 = document.getElementById('val2');
const output = document.getElementById('output');

document.getElementById('eqBtn').addEventListener('click', () => {
  const result = val1.value == val2.value;
  output.textContent = \`"\${val1.value}" == "\${val2.value}" = \${result}\`;
  console.log('==:', result);
});

document.getElementById('strictEqBtn').addEventListener('click', () => {
  const result = val1.value === val2.value;
  output.textContent = \`"\${val1.value}" === "\${val2.value}" = \${result}\`;
  console.log('===:', result);
});

document.getElementById('neBtn').addEventListener('click', () => {
  const result = val1.value != val2.value;
  output.textContent = \`"\${val1.value}" != "\${val2.value}" = \${result}\`;
  console.log('!=:', result);
});

document.getElementById('strictNeBtn').addEventListener('click', () => {
  const result = val1.value !== val2.value;
  output.textContent = \`"\${val1.value}" !== "\${val2.value}" = \${result}\`;
  console.log('!==:', result);
});

document.getElementById('gtBtn').addEventListener('click', () => {
  const result = parseFloat(val1.value) > parseFloat(val2.value);
  output.textContent = \`\${val1.value} > \${val2.value} = \${result}\`;
  console.log('>:', result);
});

document.getElementById('ltBtn').addEventListener('click', () => {
  const result = parseFloat(val1.value) < parseFloat(val2.value);
  output.textContent = \`\${val1.value} < \${val2.value} = \${result}\`;
  console.log('<:', result);
});

document.getElementById('gteBtn').addEventListener('click', () => {
  const result = parseFloat(val1.value) >= parseFloat(val2.value);
  output.textContent = \`\${val1.value} >= \${val2.value} = \${result}\`;
  console.log('>=:', result);
});

document.getElementById('lteBtn').addEventListener('click', () => {
  const result = parseFloat(val1.value) <= parseFloat(val2.value);
  output.textContent = \`\${val1.value} <= \${val2.value} = \${result}\`;
  console.log('<=:', result);
});

console.log('⚖️ Comparison operators ready!');`,
  },

  {
    topic: "logical-operators",
    description: "perform logical operations: && (AND), || (OR), ! (NOT). Used for combining boolean expressions and conditional logic.",
    html: `<div class="container">
  <h1>🔀 Logical Operators</h1>
  <div class="demo">
    <div class="checkboxes">
      <label>
        <input type="checkbox" id="check1"> Condition A
      </label>
      <label>
        <input type="checkbox" id="check2"> Condition B
      </label>
    </div>
    <div class="ops-grid">
      <button id="andBtn">&& AND</button>
      <button id="orBtn">|| OR</button>
      <button id="notBtn">! NOT</button>
      <button id="combineBtn">Combined</button>
    </div>
  </div>
  <div class="output" id="output">Test logical operators!</div>
</div>`,
    css: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', sans-serif;
  background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.container {
  background: white;
  border-radius: 24px;
  padding: 3rem;
  max-width: 600px;
  width: 100%;
  box-shadow: 0 25px 70px rgba(0,0,0,0.3);
}

h1 {
  color: #fc8f6f;
  text-align: center;
  margin-bottom: 2rem;
}

.demo {
  background: #fff5f0;
  padding: 2rem;
  border-radius: 16px;
  margin-bottom: 2rem;
}

.checkboxes {
  margin-bottom: 1.5rem;
}

label {
  display: block;
  padding: 1rem;
  background: white;
  border: 2px solid #fc8f6f;
  border-radius: 10px;
  margin-bottom: 0.75rem;
  cursor: pointer;
  font-weight: 600;
}

input[type="checkbox"] {
  margin-right: 0.5rem;
}

.ops-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

button {
  padding: 1rem;
  background: #fc8f6f;
  color: white;
  border: none;
  border-radius: 10px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s;
}

button:hover {
  background: #e67d5f;
  transform: translateY(-2px);
}

.output {
  padding: 1.5rem;
  background: #0d1117;
  color: #F7DF1E;
  border-radius: 12px;
  font-family: 'Courier New', monospace;
  text-align: center;
  white-space: pre-wrap;
}`,
    js: `const check1 = document.getElementById('check1');
const check2 = document.getElementById('check2');
const output = document.getElementById('output');

document.getElementById('andBtn').addEventListener('click', () => {
  const result = check1.checked && check2.checked;
  output.textContent = \`A && B = \${result}\\n(Both must be true)\`;
  console.log('AND:', result);
});

document.getElementById('orBtn').addEventListener('click', () => {
  const result = check1.checked || check2.checked;
  output.textContent = \`A || B = \${result}\\n(At least one must be true)\`;
  console.log('OR:', result);
});

document.getElementById('notBtn').addEventListener('click', () => {
  const resultA = !check1.checked;
  const resultB = !check2.checked;
  output.textContent = \`!A = \${resultA}\\n!B = \${resultB}\\n(Inverts the value)\`;
  console.log('NOT:', { resultA, resultB });
});

document.getElementById('combineBtn').addEventListener('click', () => {
  const result = (check1.checked && check2.checked) || (!check1.checked && !check2.checked);
  output.textContent = \`(A && B) || (!A && !B) = \${result}\\n(Both same state)\`;
  console.log('Combined:', result);
});

console.log('🔀 Logical operators ready!');`,
  },

  {
    topic: "ternary-operator",
    description: "is a shorthand for if-else: condition ? valueIfTrue : valueIfFalse. Useful for inline conditional expressions.",
    html: `<div class="container">
  <h1>❓ Ternary Operator</h1>
  <div class="demo">
    <input type="number" id="ageInput" value="18" placeholder="Enter age">
    <button id="checkBtn">Check Age</button>
    <div class="result" id="result"></div>
  </div>
  <div class="examples">
    <h3>Examples:</h3>
    <button id="ex1">Even/Odd</button>
    <button id="ex2">Pass/Fail</button>
    <button id="ex3">Nested Ternary</button>
  </div>
  <div class="output" id="output">Try the ternary operator!</div>
</div>`,
    css: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', sans-serif;
  background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.container {
  background: white;
  border-radius: 24px;
  padding: 3rem;
  max-width: 600px;
  width: 100%;
  box-shadow: 0 25px 70px rgba(0,0,0,0.3);
}

h1 {
  color: #667eea;
  text-align: center;
  margin-bottom: 2rem;
}

.demo {
  background: #f0f4ff;
  padding: 2rem;
  border-radius: 16px;
  margin-bottom: 2rem;
}

input {
  width: 100%;
  padding: 1rem;
  border: 2px solid #667eea;
  border-radius: 12px;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  text-align: center;
  font-weight: 700;
}

button {
  width: 100%;
  padding: 0.75rem;
  background: #667eea;
  color: white;
  border: none;
  border-radius: 10px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s;
  margin-bottom: 0.75rem;
}

button:hover {
  background: #5568d3;
  transform: translateY(-2px);
}

.result {
  background: #2d2d2d;
  color: #667eea;
  padding: 1.5rem;
  border-radius: 12px;
  font-family: 'Courier New', monospace;
  min-height: 80px;
  white-space: pre-wrap;
  margin-top: 1rem;
}

.examples {
  margin-bottom: 2rem;
}

h3 {
  color: #333;
  margin-bottom: 1rem;
}

.output {
  padding: 1.5rem;
  background: #0d1117;
  color: #F7DF1E;
  border-radius: 12px;
  font-family: 'Courier New', monospace;
  text-align: center;
}`,
    js: `const ageInput = document.getElementById('ageInput');
const result = document.getElementById('result');
const output = document.getElementById('output');

document.getElementById('checkBtn').addEventListener('click', () => {
  const age = parseInt(ageInput.value);
  const status = age >= 18 ? 'Adult' : 'Minor';
  result.textContent = \`age >= 18 ? 'Adult' : 'Minor'\\n\\nAge: \${age}\\nStatus: \${status}\`;
  output.textContent = \`✅ Ternary: \${status}\`;
  console.log('Ternary result:', status);
});

document.getElementById('ex1').addEventListener('click', () => {
  const num = parseInt(ageInput.value);
  const evenOdd = num % 2 === 0 ? 'Even' : 'Odd';
  result.textContent = \`num % 2 === 0 ? 'Even' : 'Odd'\\n\\nNumber: \${num}\\nResult: \${evenOdd}\`;
  output.textContent = \`✅ \${num} is \${evenOdd}\`;
  console.log('Even/Odd:', evenOdd);
});

document.getElementById('ex2').addEventListener('click', () => {
  const score = parseInt(ageInput.value);
  const grade = score >= 50 ? 'Pass' : 'Fail';
  result.textContent = \`score >= 50 ? 'Pass' : 'Fail'\\n\\nScore: \${score}\\nGrade: \${grade}\`;
  output.textContent = \`✅ Grade: \${grade}\`;
  console.log('Pass/Fail:', grade);
});

document.getElementById('ex3').addEventListener('click', () => {
  const score = parseInt(ageInput.value);
  const grade = score >= 90 ? 'A' : score >= 80 ? 'B' : score >= 70 ? 'C' : 'F';
  result.textContent = \`Nested Ternary:\\nscore >= 90 ? 'A' :\\nscore >= 80 ? 'B' :\\nscore >= 70 ? 'C' : 'F'\\n\\nScore: \${score}\\nGrade: \${grade}\`;
  output.textContent = \`✅ Nested result: \${grade}\`;
  console.log('Nested ternary:', grade);
});

console.log('❓ Ternary operator ready!');`,
  },

  {
    topic: "spread-operator",
    description: "(...) expands iterables like arrays or objects. Used for copying, merging, and passing elements as individual arguments.",
    html: `<div class="container">
  <h1>... Spread Operator</h1>
  <div class="demo">
    <h3>Array Operations:</h3>
    <button id="copyBtn">Copy Array</button>
    <button id="mergeBtn">Merge Arrays</button>
    <button id="addBtn">Add Elements</button>
    <h3>Object Operations:</h3>
    <button id="copyObjBtn">Copy Object</button>
    <button id="mergeObjBtn">Merge Objects</button>
    <button id="overrideBtn">Override Props</button>
  </div>
  <div class="output" id="output">Try spread operator!</div>
</div>`,
    css: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.container {
  background: white;
  border-radius: 24px;
  padding: 3rem;
  max-width: 600px;
  width: 100%;
  box-shadow: 0 25px 70px rgba(0,0,0,0.3);
}

h1 {
  color: #667eea;
  text-align: center;
  margin-bottom: 2rem;
}

.demo {
  background: #f0f4ff;
  padding: 2rem;
  border-radius: 16px;
  margin-bottom: 2rem;
}

h3 {
  color: #333;
  margin: 1rem 0;
}

button {
  width: 100%;
  padding: 0.75rem;
  background: #667eea;
  color: white;
  border: none;
  border-radius: 10px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s;
  margin-bottom: 0.75rem;
}

button:hover {
  background: #5568d3;
  transform: translateY(-2px);
}

.output {
  padding: 1.5rem;
  background: #0d1117;
  color: #F7DF1E;
  border-radius: 12px;
  font-family: 'Courier New', monospace;
  white-space: pre-wrap;
}`,
    js: `const output = document.getElementById('output');

document.getElementById('copyBtn').addEventListener('click', () => {
  const arr = [1, 2, 3];
  const copy = [...arr];
  output.textContent = \`const arr = [1, 2, 3];\\nconst copy = [...arr];\\n\\nOriginal: [\${arr}]\\nCopy: [\${copy}]\\n\\n✅ Shallow copy created\`;
  console.log('Copy:', copy);
});

document.getElementById('mergeBtn').addEventListener('click', () => {
  const arr1 = [1, 2, 3];
  const arr2 = [4, 5, 6];
  const merged = [...arr1, ...arr2];
  output.textContent = \`const arr1 = [1, 2, 3];\\nconst arr2 = [4, 5, 6];\\nconst merged = [...arr1, ...arr2];\\n\\nResult: [\${merged}]\`;
  console.log('Merged:', merged);
});

document.getElementById('addBtn').addEventListener('click', () => {
  const arr = [2, 3, 4];
  const newArr = [1, ...arr, 5];
  output.textContent = \`const arr = [2, 3, 4];\\nconst newArr = [1, ...arr, 5];\\n\\nResult: [\${newArr}]\`;
  console.log('Added:', newArr);
});

document.getElementById('copyObjBtn').addEventListener('click', () => {
  const obj = { name: 'Alice', age: 25 };
  const copy = { ...obj };
  output.textContent = \`const obj = { name: 'Alice', age: 25 };\\nconst copy = { ...obj };\\n\\nCopy: \${JSON.stringify(copy, null, 2)}\`;
  console.log('Object copy:', copy);
});

document.getElementById('mergeObjBtn').addEventListener('click', () => {
  const obj1 = { name: 'Alice' };
  const obj2 = { age: 25 };
  const merged = { ...obj1, ...obj2 };
  output.textContent = \`const obj1 = { name: 'Alice' };\\nconst obj2 = { age: 25 };\\nconst merged = { ...obj1, ...obj2 };\\n\\nResult: \${JSON.stringify(merged, null, 2)}\`;
  console.log('Merged objects:', merged);
});

document.getElementById('overrideBtn').addEventListener('click', () => {
  const obj = { name: 'Alice', age: 25 };
  const updated = { ...obj, age: 26, city: 'NYC' };
  output.textContent = \`const obj = { name: 'Alice', age: 25 };\\nconst updated = { ...obj, age: 26, city: 'NYC' };\\n\\nResult: \${JSON.stringify(updated, null, 2)}\`;
  console.log('Override:', updated);
});

console.log('... Spread operator ready!');`,
  },

  {
    topic: "destructuring",
    description: "extracts values from arrays or properties from objects into distinct variables using a concise syntax.",
    html: `<div class="container">
  <h1>🎯 Destructuring</h1>
  <div class="demo">
    <h3>Array Destructuring:</h3>
    <button id="arrayBtn">Basic Array</button>
    <button id="skipBtn">Skip Elements</button>
    <button id="restBtn">Rest Pattern</button>
    <h3>Object Destructuring:</h3>
    <button id="objBtn">Basic Object</button>
    <button id="renameBtn">Rename Props</button>
    <button id="defaultBtn">Default Values</button>
  </div>
  <div class="output" id="output">Try destructuring!</div>
</div>`,
    css: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', sans-serif;
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.container {
  background: white;
  border-radius: 24px;
  padding: 3rem;
  max-width: 600px;
  width: 100%;
  box-shadow: 0 25px 70px rgba(0,0,0,0.3);
}

h1 {
  color: #f5576c;
  text-align: center;
  margin-bottom: 2rem;
}

.demo {
  background: #fff5f7;
  padding: 2rem;
  border-radius: 16px;
  margin-bottom: 2rem;
}

h3 {
  color: #333;
  margin: 1rem 0;
}

button {
  width: 100%;
  padding: 0.75rem;
  background: #f5576c;
  color: white;
  border: none;
  border-radius: 10px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s;
  margin-bottom: 0.75rem;
}

button:hover {
  background: #e04858;
  transform: translateY(-2px);
}

.output {
  padding: 1.5rem;
  background: #0d1117;
  color: #F7DF1E;
  border-radius: 12px;
  font-family: 'Courier New', monospace;
  white-space: pre-wrap;
}`,
    js: `const output = document.getElementById('output');

document.getElementById('arrayBtn').addEventListener('click', () => {
  const arr = [1, 2, 3];
  const [a, b, c] = arr;
  output.textContent = \`const arr = [1, 2, 3];\\nconst [a, b, c] = arr;\\n\\na = \${a}\\nb = \${b}\\nc = \${c}\`;
  console.log('Array destructuring:', { a, b, c });
});

document.getElementById('skipBtn').addEventListener('click', () => {
  const arr = [1, 2, 3, 4, 5];
  const [first, , third, , fifth] = arr;
  output.textContent = \`const arr = [1, 2, 3, 4, 5];\\nconst [first, , third, , fifth] = arr;\\n\\nfirst = \${first}\\nthird = \${third}\\nfifth = \${fifth}\`;
  console.log('Skip elements:', { first, third, fifth });
});

document.getElementById('restBtn').addEventListener('click', () => {
  const arr = [1, 2, 3, 4, 5];
  const [first, second, ...rest] = arr;
  output.textContent = \`const arr = [1, 2, 3, 4, 5];\\nconst [first, second, ...rest] = arr;\\n\\nfirst = \${first}\\nsecond = \${second}\\nrest = [\${rest}]\`;
  console.log('Rest pattern:', { first, second, rest });
});

document.getElementById('objBtn').addEventListener('click', () => {
  const obj = { name: 'Alice', age: 25, city: 'NYC' };
  const { name, age, city } = obj;
  output.textContent = \`const obj = { name: 'Alice', age: 25, city: 'NYC' };\\nconst { name, age, city } = obj;\\n\\nname = "\${name}"\\nage = \${age}\\ncity = "\${city}"\`;
  console.log('Object destructuring:', { name, age, city });
});

document.getElementById('renameBtn').addEventListener('click', () => {
  const obj = { name: 'Alice', age: 25 };
  const { name: userName, age: userAge } = obj;
  output.textContent = \`const obj = { name: 'Alice', age: 25 };\\nconst { name: userName, age: userAge } = obj;\\n\\nuserName = "\${userName}"\\nuserAge = \${userAge}\`;
  console.log('Rename:', { userName, userAge });
});

document.getElementById('defaultBtn').addEventListener('click', () => {
  const obj = { name: 'Alice' };
  const { name, age = 18, city = 'Unknown' } = obj;
  output.textContent = \`const obj = { name: 'Alice' };\\nconst { name, age = 18, city = 'Unknown' } = obj;\\n\\nname = "\${name}"\\nage = \${age} (default)\\ncity = "\${city}" (default)\`;
  console.log('Defaults:', { name, age, city });
});

console.log('🎯 Destructuring ready!');`,
  },

  /* ══════════════════════════════════════════════
     BATCH 4: CONTROL FLOW (6 topics)
  ══════════════════════════════════════════════ */

  {
    topic: "if-else",
    description: "executes code blocks based on conditions. If the condition is true, the if block runs; otherwise, the else block runs.",
    html: `<div class="container"><h1>🔀 if-else Statement</h1><div class="demo"><input type="number" id="numInput" value="15" placeholder="Enter a number"><button id="checkBtn">Check Number</button><div class="result" id="result"></div></div><div class="output" id="output">Test if-else conditions!</div></div>`,
    css: `* { margin: 0; padding: 0; box-sizing: border-box; }
body { font-family: 'Inter', sans-serif; background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); min-height: 100vh; display: flex; align-items: center; justify-content: center; padding: 2rem; }
.container { background: white; border-radius: 24px; padding: 3rem; max-width: 600px; width: 100%; box-shadow: 0 25px 70px rgba(0,0,0,0.3); }
h1 { color: #4facfe; text-align: center; margin-bottom: 2rem; }
.demo { background: #f0f9ff; padding: 2rem; border-radius: 16px; margin-bottom: 2rem; }
input { width: 100%; padding: 1rem; border: 2px solid #4facfe; border-radius: 12px; font-size: 1.2rem; margin-bottom: 1rem; text-align: center; font-weight: 700; }
button { width: 100%; padding: 0.75rem; background: #4facfe; color: white; border: none; border-radius: 10px; font-weight: 700; cursor: pointer; transition: all 0.3s; margin-bottom: 1rem; }
button:hover { background: #3d9ae6; transform: translateY(-2px); }
.result { background: #2d2d2d; color: #4facfe; padding: 1.5rem; border-radius: 12px; font-family: 'Courier New', monospace; min-height: 100px; white-space: pre-wrap; }
.output { padding: 1.5rem; background: #0d1117; color: #F7DF1E; border-radius: 12px; font-family: 'Courier New', monospace; text-align: center; }`,
    js: `const numInput = document.getElementById('numInput');
const result = document.getElementById('result');
const output = document.getElementById('output');

document.getElementById('checkBtn').addEventListener('click', () => {
  const num = parseInt(numInput.value);
  
  let message;
  if (num > 10) {
    message = \`if (num > 10) {\\n  // This block runs\\n  message = "Greater than 10";\\n}\\n\\nResult: \${num} is greater than 10 ✅\`;
  } else {
    message = \`if (num > 10) {\\n  // Skipped\\n} else {\\n  // This block runs\\n  message = "10 or less";\\n}\\n\\nResult: \${num} is 10 or less ✅\`;
  }
  
  result.textContent = message;
  output.textContent = \`✅ Condition evaluated: \${num > 10 ? 'true' : 'false'}\`;
  console.log('if-else:', { num, condition: num > 10 });
});

console.log('🔀 if-else ready!');`,
  },

  {
    topic: "else-if",
    description: "chains multiple conditions. Tests conditions in order and executes the first matching block.",
    html: `<div class="container"><h1>🔀 else-if Statement</h1><div class="demo"><input type="number" id="scoreInput" value="75" placeholder="Enter score (0-100)"><button id="gradeBtn">Get Grade</button><div class="result" id="result"></div></div><div class="output" id="output">Test else-if chains!</div></div>`,
    css: `* { margin: 0; padding: 0; box-sizing: border-box; }
body { font-family: 'Inter', sans-serif; background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%); min-height: 100vh; display: flex; align-items: center; justify-content: center; padding: 2rem; }
.container { background: white; border-radius: 24px; padding: 3rem; max-width: 600px; width: 100%; box-shadow: 0 25px 70px rgba(0,0,0,0.3); }
h1 { color: #fc8f6f; text-align: center; margin-bottom: 2rem; }
.demo { background: #fff5f0; padding: 2rem; border-radius: 16px; margin-bottom: 2rem; }
input { width: 100%; padding: 1rem; border: 2px solid #fc8f6f; border-radius: 12px; font-size: 1.2rem; margin-bottom: 1rem; text-align: center; font-weight: 700; }
button { width: 100%; padding: 0.75rem; background: #fc8f6f; color: white; border: none; border-radius: 10px; font-weight: 700; cursor: pointer; transition: all 0.3s; margin-bottom: 1rem; }
button:hover { background: #e67d5f; transform: translateY(-2px); }
.result { background: #2d2d2d; color: #fc8f6f; padding: 1.5rem; border-radius: 12px; font-family: 'Courier New', monospace; min-height: 120px; white-space: pre-wrap; }
.output { padding: 1.5rem; background: #0d1117; color: #F7DF1E; border-radius: 12px; font-family: 'Courier New', monospace; text-align: center; }`,
    js: `const scoreInput = document.getElementById('scoreInput');
const result = document.getElementById('result');
const output = document.getElementById('output');

document.getElementById('gradeBtn').addEventListener('click', () => {
  const score = parseInt(scoreInput.value);
  
  let grade;
  if (score >= 90) {
    grade = 'A';
  } else if (score >= 80) {
    grade = 'B';
  } else if (score >= 70) {
    grade = 'C';
  } else if (score >= 60) {
    grade = 'D';
  } else {
    grade = 'F';
  }
  
  result.textContent = \`if (score >= 90) {\\n  grade = 'A';\\n} else if (score >= 80) {\\n  grade = 'B';\\n} else if (score >= 70) {\\n  grade = 'C';\\n} else if (score >= 60) {\\n  grade = 'D';\\n} else {\\n  grade = 'F';\\n}\\n\\nScore: \${score}\\nGrade: \${grade} ✅\`;
  
  output.textContent = \`✅ Grade assigned: \${grade}\`;
  console.log('else-if:', { score, grade });
});

console.log('🔀 else-if ready!');`,
  },

  {
    topic: "switch",
    description: "evaluates an expression and executes code based on matching case values. More readable than multiple if-else for discrete values.",
    html: `<div class="container"><h1>🔀 switch Statement</h1><div class="demo"><select id="daySelect"><option value="1">Monday</option><option value="2">Tuesday</option><option value="3">Wednesday</option><option value="4">Thursday</option><option value="5">Friday</option><option value="6">Saturday</option><option value="7">Sunday</option></select><button id="checkBtn">Check Day</button><div class="result" id="result"></div></div><div class="output" id="output">Test switch cases!</div></div>`,
    css: `* { margin: 0; padding: 0; box-sizing: border-box; }
body { font-family: 'Inter', sans-serif; background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%); min-height: 100vh; display: flex; align-items: center; justify-content: center; padding: 2rem; }
.container { background: white; border-radius: 24px; padding: 3rem; max-width: 600px; width: 100%; box-shadow: 0 25px 70px rgba(0,0,0,0.3); }
h1 { color: #667eea; text-align: center; margin-bottom: 2rem; }
.demo { background: #f0f4ff; padding: 2rem; border-radius: 16px; margin-bottom: 2rem; }
select { width: 100%; padding: 1rem; border: 2px solid #667eea; border-radius: 12px; font-size: 1.1rem; margin-bottom: 1rem; font-weight: 600; }
button { width: 100%; padding: 0.75rem; background: #667eea; color: white; border: none; border-radius: 10px; font-weight: 700; cursor: pointer; transition: all 0.3s; margin-bottom: 1rem; }
button:hover { background: #5568d3; transform: translateY(-2px); }
.result { background: #2d2d2d; color: #667eea; padding: 1.5rem; border-radius: 12px; font-family: 'Courier New', monospace; min-height: 100px; white-space: pre-wrap; }
.output { padding: 1.5rem; background: #0d1117; color: #F7DF1E; border-radius: 12px; font-family: 'Courier New', monospace; text-align: center; }`,
    js: `const daySelect = document.getElementById('daySelect');
const result = document.getElementById('result');
const output = document.getElementById('output');

document.getElementById('checkBtn').addEventListener('click', () => {
  const day = parseInt(daySelect.value);
  
  let type;
  switch (day) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      type = 'Weekday';
      break;
    case 6:
    case 7:
      type = 'Weekend';
      break;
    default:
      type = 'Invalid';
  }
  
  result.textContent = \`switch (day) {\\n  case 1:\\n  case 2:\\n  case 3:\\n  case 4:\\n  case 5:\\n    type = 'Weekday';\\n    break;\\n  case 6:\\n  case 7:\\n    type = 'Weekend';\\n    break;\\n  default:\\n    type = 'Invalid';\\n}\\n\\nDay: \${day}\\nType: \${type} ✅\`;
  
  output.textContent = \`✅ Day type: \${type}\`;
  console.log('switch:', { day, type });
});

console.log('🔀 switch ready!');`,
  },

  {
    topic: "short-circuit",
    description: "evaluation stops as soon as the result is determined. && returns first falsy value or last value; || returns first truthy value or last value.",
    html: `<div class="container"><h1>⚡ Short-Circuit Evaluation</h1><div class="demo"><button id="andBtn">&& AND Short-Circuit</button><button id="orBtn">|| OR Short-Circuit</button><button id="defaultBtn">Default Values</button><button id="conditionalBtn">Conditional Execution</button></div><div class="output" id="output">Test short-circuit!</div></div>`,
    css: `* { margin: 0; padding: 0; box-sizing: border-box; }
body { font-family: 'Inter', sans-serif; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); min-height: 100vh; display: flex; align-items: center; justify-content: center; padding: 2rem; }
.container { background: white; border-radius: 24px; padding: 3rem; max-width: 600px; width: 100%; box-shadow: 0 25px 70px rgba(0,0,0,0.3); }
h1 { color: #667eea; text-align: center; margin-bottom: 2rem; }
.demo { background: #f0f4ff; padding: 2rem; border-radius: 16px; margin-bottom: 2rem; }
button { width: 100%; padding: 1rem; background: #667eea; color: white; border: none; border-radius: 10px; font-weight: 700; cursor: pointer; transition: all 0.3s; margin-bottom: 0.75rem; }
button:hover { background: #5568d3; transform: translateY(-2px); }
.output { padding: 1.5rem; background: #0d1117; color: #F7DF1E; border-radius: 12px; font-family: 'Courier New', monospace; white-space: pre-wrap; }`,
    js: `const output = document.getElementById('output');

document.getElementById('andBtn').addEventListener('click', () => {
  const result1 = true && 'Hello';
  const result2 = false && 'Hello';
  const result3 = 0 && 'Hello';
  
  output.textContent = \`&& Short-Circuit:\\n\\ntrue && 'Hello' = "\${result1}"\\nfalse && 'Hello' = \${result2}\\n0 && 'Hello' = \${result3}\\n\\n✅ Returns first falsy or last value\`;
  console.log('AND short-circuit:', { result1, result2, result3 });
});

document.getElementById('orBtn').addEventListener('click', () => {
  const result1 = false || 'Default';
  const result2 = 0 || 'Default';
  const result3 = 'Hello' || 'Default';
  
  output.textContent = \`|| Short-Circuit:\\n\\nfalse || 'Default' = "\${result1}"\\n0 || 'Default' = "\${result2}"\\n'Hello' || 'Default' = "\${result3}"\\n\\n✅ Returns first truthy or last value\`;
  console.log('OR short-circuit:', { result1, result2, result3 });
});

document.getElementById('defaultBtn').addEventListener('click', () => {
  const name = '';
  const displayName = name || 'Guest';
  
  output.textContent = \`Default Values:\\n\\nconst name = '';\\nconst displayName = name || 'Guest';\\n\\nResult: "\${displayName}"\\n\\n✅ Common pattern for defaults\`;
  console.log('Default:', displayName);
});

document.getElementById('conditionalBtn').addEventListener('click', () => {
  let count = 0;
  const isLoggedIn = true;
  
  isLoggedIn && count++;
  
  output.textContent = \`Conditional Execution:\\n\\nconst isLoggedIn = true;\\nisLoggedIn && count++;\\n\\ncount = \${count}\\n\\n✅ Execute only if condition is true\`;
  console.log('Conditional:', count);
});

console.log('⚡ Short-circuit ready!');`,
  },

  {
    topic: "nullish-coalescing",
    description: "(??) returns the right operand when the left is null or undefined, but not for other falsy values like 0 or ''.",
    html: `<div class="container"><h1>?? Nullish Coalescing</h1><div class="demo"><button id="nullBtn">null ?? 'default'</button><button id="undefinedBtn">undefined ?? 'default'</button><button id="zeroBtn">0 ?? 'default'</button><button id="emptyBtn">'' ?? 'default'</button><button id="compareBtn">?? vs ||</button></div><div class="output" id="output">Test nullish coalescing!</div></div>`,
    css: `* { margin: 0; padding: 0; box-sizing: border-box; }
body { font-family: 'Inter', sans-serif; background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); min-height: 100vh; display: flex; align-items: center; justify-content: center; padding: 2rem; }
.container { background: white; border-radius: 24px; padding: 3rem; max-width: 600px; width: 100%; box-shadow: 0 25px 70px rgba(0,0,0,0.3); }
h1 { color: #f5576c; text-align: center; margin-bottom: 2rem; }
.demo { background: #fff5f7; padding: 2rem; border-radius: 16px; margin-bottom: 2rem; }
button { width: 100%; padding: 1rem; background: #f5576c; color: white; border: none; border-radius: 10px; font-weight: 700; cursor: pointer; transition: all 0.3s; margin-bottom: 0.75rem; }
button:hover { background: #e04858; transform: translateY(-2px); }
.output { padding: 1.5rem; background: #0d1117; color: #F7DF1E; border-radius: 12px; font-family: 'Courier New', monospace; white-space: pre-wrap; }`,
    js: `const output = document.getElementById('output');

document.getElementById('nullBtn').addEventListener('click', () => {
  const result = null ?? 'default';
  output.textContent = \`null ?? 'default' = "\${result}"\\n\\n✅ null is nullish, returns 'default'\`;
  console.log('null ??:', result);
});

document.getElementById('undefinedBtn').addEventListener('click', () => {
  const result = undefined ?? 'default';
  output.textContent = \`undefined ?? 'default' = "\${result}"\\n\\n✅ undefined is nullish, returns 'default'\`;
  console.log('undefined ??:', result);
});

document.getElementById('zeroBtn').addEventListener('click', () => {
  const result = 0 ?? 'default';
  output.textContent = \`0 ?? 'default' = \${result}\\n\\n✅ 0 is NOT nullish, returns 0\`;
  console.log('0 ??:', result);
});

document.getElementById('emptyBtn').addEventListener('click', () => {
  const result = '' ?? 'default';
  output.textContent = \`'' ?? 'default' = "\${result}"\\n\\n✅ Empty string is NOT nullish, returns ''\`;
  console.log("'' ??:", result);
});

document.getElementById('compareBtn').addEventListener('click', () => {
  const val1 = 0 || 'default';
  const val2 = 0 ?? 'default';
  const val3 = '' || 'default';
  const val4 = '' ?? 'default';
  
  output.textContent = \`?? vs ||:\\n\\n0 || 'default' = "\${val1}"\\n0 ?? 'default' = \${val2}\\n\\n'' || 'default' = "\${val3}"\\n'' ?? 'default' = "\${val4}"\\n\\n✅ ?? only checks null/undefined\`;
  console.log('Comparison:', { val1, val2, val3, val4 });
});

console.log('?? Nullish coalescing ready!');`,
  },

  {
    topic: "optional-chaining",
    description: "(?.) safely accesses nested object properties. Returns undefined if any part of the chain is null or undefined, preventing errors.",
    html: `<div class="container"><h1>?. Optional Chaining</h1><div class="demo"><button id="safeBtn">Safe Access</button><button id="unsafeBtn">Without ?.</button><button id="arrayBtn">Array Access</button><button id="functionBtn">Function Call</button></div><div class="output" id="output">Test optional chaining!</div></div>`,
    css: `* { margin: 0; padding: 0; box-sizing: border-box; }
body { font-family: 'Inter', sans-serif; background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); min-height: 100vh; display: flex; align-items: center; justify-content: center; padding: 2rem; }
.container { background: white; border-radius: 24px; padding: 3rem; max-width: 600px; width: 100%; box-shadow: 0 25px 70px rgba(0,0,0,0.3); }
h1 { color: #4facfe; text-align: center; margin-bottom: 2rem; }
.demo { background: #f0f9ff; padding: 2rem; border-radius: 16px; margin-bottom: 2rem; }
button { width: 100%; padding: 1rem; background: #4facfe; color: white; border: none; border-radius: 10px; font-weight: 700; cursor: pointer; transition: all 0.3s; margin-bottom: 0.75rem; }
button:hover { background: #3d9ae6; transform: translateY(-2px); }
.output { padding: 1.5rem; background: #0d1117; color: #F7DF1E; border-radius: 12px; font-family: 'Courier New', monospace; white-space: pre-wrap; }`,
    js: `const output = document.getElementById('output');

document.getElementById('safeBtn').addEventListener('click', () => {
  const user = { name: 'Alice' };
  const city = user?.address?.city;
  
  output.textContent = \`const user = { name: 'Alice' };\\nconst city = user?.address?.city;\\n\\nResult: \${city}\\n\\n✅ Returns undefined safely (no error)\`;
  console.log('Safe access:', city);
});

document.getElementById('unsafeBtn').addEventListener('click', () => {
  const user = { name: 'Alice' };
  
  try {
    const city = user.address.city;
    output.textContent = \`Result: \${city}\`;
  } catch (error) {
    output.textContent = \`const user = { name: 'Alice' };\\nconst city = user.address.city;\\n\\n❌ Error: \${error.message}\\n\\nWithout ?. it throws an error!\`;
  }
  
  console.log('Unsafe access attempted');
});

document.getElementById('arrayBtn').addEventListener('click', () => {
  const data = { items: [1, 2, 3] };
  const first = data?.items?.[0];
  const missing = data?.missing?.[0];
  
  output.textContent = \`const data = { items: [1, 2, 3] };\\n\\ndata?.items?.[0] = \${first}\\ndata?.missing?.[0] = \${missing}\\n\\n✅ Works with array access too\`;
  console.log('Array access:', { first, missing });
});

document.getElementById('functionBtn').addEventListener('click', () => {
  const obj = { greet: () => 'Hello!' };
  const result1 = obj.greet?.();
  const result2 = obj.missing?.();
  
  output.textContent = \`const obj = { greet: () => 'Hello!' };\\n\\nobj.greet?.() = "\${result1}"\\nobj.missing?.() = \${result2}\\n\\n✅ Safe function calls\`;
  console.log('Function call:', { result1, result2 });
});

console.log('?. Optional chaining ready!');`,
  },

  /* ══════════════════════════════════════════════
     BATCH 5: LOOPS (8 topics)
  ══════════════════════════════════════════════ */

  {
    topic: "for-loop",
    description: "repeats code a specific number of times with initialization, condition, and increment/decrement in one line.",
    html: `<div class="container"><h1>🔁 for Loop</h1><div class="demo"><input type="number" id="countInput" value="5" placeholder="Loop count"><button id="runBtn">Run Loop</button><div class="result" id="result"></div></div><div class="output" id="output">Run a for loop!</div></div>`,
    css: `* { margin: 0; padding: 0; box-sizing: border-box; }
body { font-family: 'Inter', sans-serif; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); min-height: 100vh; display: flex; align-items: center; justify-content: center; padding: 2rem; }
.container { background: white; border-radius: 24px; padding: 3rem; max-width: 600px; width: 100%; box-shadow: 0 25px 70px rgba(0,0,0,0.3); }
h1 { color: #667eea; text-align: center; margin-bottom: 2rem; }
.demo { background: #f0f4ff; padding: 2rem; border-radius: 16px; margin-bottom: 2rem; }
input { width: 100%; padding: 1rem; border: 2px solid #667eea; border-radius: 12px; font-size: 1.2rem; margin-bottom: 1rem; text-align: center; font-weight: 700; }
button { width: 100%; padding: 0.75rem; background: #667eea; color: white; border: none; border-radius: 10px; font-weight: 700; cursor: pointer; transition: all 0.3s; margin-bottom: 1rem; }
button:hover { background: #5568d3; transform: translateY(-2px); }
.result { background: #2d2d2d; color: #667eea; padding: 1.5rem; border-radius: 12px; font-family: 'Courier New', monospace; min-height: 100px; white-space: pre-wrap; }
.output { padding: 1.5rem; background: #0d1117; color: #F7DF1E; border-radius: 12px; font-family: 'Courier New', monospace; text-align: center; }`,
    js: `const countInput = document.getElementById('countInput');
const result = document.getElementById('result');
const output = document.getElementById('output');

document.getElementById('runBtn').addEventListener('click', () => {
  const count = parseInt(countInput.value);
  let iterations = '';
  
  for (let i = 0; i < count; i++) {
    iterations += \`Iteration \${i}: i = \${i}\\n\`;
    console.log('for loop iteration:', i);
  }
  
  result.textContent = \`for (let i = 0; i < \${count}; i++) {\\n  console.log(i);\\n}\\n\\n\${iterations}\\n✅ Loop completed \${count} times\`;
  output.textContent = \`✅ for loop ran \${count} times\`;
});

console.log('🔁 for loop ready!');`,
  },

  {
    topic: "while-loop",
    description: "repeats code while a condition is true. The condition is checked before each iteration.",
    html: `<div class="container"><h1>🔁 while Loop</h1><div class="demo"><input type="number" id="limitInput" value="5" placeholder="Limit"><button id="runBtn">Run while Loop</button><div class="result" id="result"></div></div><div class="output" id="output">Run a while loop!</div></div>`,
    css: `* { margin: 0; padding: 0; box-sizing: border-box; }
body { font-family: 'Inter', sans-serif; background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); min-height: 100vh; display: flex; align-items: center; justify-content: center; padding: 2rem; }
.container { background: white; border-radius: 24px; padding: 3rem; max-width: 600px; width: 100%; box-shadow: 0 25px 70px rgba(0,0,0,0.3); }
h1 { color: #f5576c; text-align: center; margin-bottom: 2rem; }
.demo { background: #fff5f7; padding: 2rem; border-radius: 16px; margin-bottom: 2rem; }
input { width: 100%; padding: 1rem; border: 2px solid #f5576c; border-radius: 12px; font-size: 1.2rem; margin-bottom: 1rem; text-align: center; font-weight: 700; }
button { width: 100%; padding: 0.75rem; background: #f5576c; color: white; border: none; border-radius: 10px; font-weight: 700; cursor: pointer; transition: all 0.3s; margin-bottom: 1rem; }
button:hover { background: #e04858; transform: translateY(-2px); }
.result { background: #2d2d2d; color: #f5576c; padding: 1.5rem; border-radius: 12px; font-family: 'Courier New', monospace; min-height: 100px; white-space: pre-wrap; }
.output { padding: 1.5rem; background: #0d1117; color: #F7DF1E; border-radius: 12px; font-family: 'Courier New', monospace; text-align: center; }`,
    js: `const limitInput = document.getElementById('limitInput');
const result = document.getElementById('result');
const output = document.getElementById('output');

document.getElementById('runBtn').addEventListener('click', () => {
  const limit = parseInt(limitInput.value);
  let i = 0;
  let iterations = '';
  
  while (i < limit) {
    iterations += \`Iteration \${i}: i = \${i}\\n\`;
    console.log('while loop iteration:', i);
    i++;
  }
  
  result.textContent = \`let i = 0;\\nwhile (i < \${limit}) {\\n  console.log(i);\\n  i++;\\n}\\n\\n\${iterations}\\n✅ Loop completed\`;
  output.textContent = \`✅ while loop ran \${limit} times\`;
});

console.log('🔁 while loop ready!');`,
  },

  {
    topic: "do-while",
    description: "executes code at least once, then repeats while a condition is true. The condition is checked after each iteration.",
    html: `<div class="container"><h1>🔁 do-while Loop</h1><div class="demo"><input type="number" id="limitInput" value="0" placeholder="Limit (try 0)"><button id="runBtn">Run do-while</button><div class="result" id="result"></div></div><div class="output" id="output">Run a do-while loop!</div></div>`,
    css: `* { margin: 0; padding: 0; box-sizing: border-box; }
body { font-family: 'Inter', sans-serif; background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); min-height: 100vh; display: flex; align-items: center; justify-content: center; padding: 2rem; }
.container { background: white; border-radius: 24px; padding: 3rem; max-width: 600px; width: 100%; box-shadow: 0 25px 70px rgba(0,0,0,0.3); }
h1 { color: #4facfe; text-align: center; margin-bottom: 2rem; }
.demo { background: #f0f9ff; padding: 2rem; border-radius: 16px; margin-bottom: 2rem; }
input { width: 100%; padding: 1rem; border: 2px solid #4facfe; border-radius: 12px; font-size: 1.2rem; margin-bottom: 1rem; text-align: center; font-weight: 700; }
button { width: 100%; padding: 0.75rem; background: #4facfe; color: white; border: none; border-radius: 10px; font-weight: 700; cursor: pointer; transition: all 0.3s; margin-bottom: 1rem; }
button:hover { background: #3d9ae6; transform: translateY(-2px); }
.result { background: #2d2d2d; color: #4facfe; padding: 1.5rem; border-radius: 12px; font-family: 'Courier New', monospace; min-height: 100px; white-space: pre-wrap; }
.output { padding: 1.5rem; background: #0d1117; color: #F7DF1E; border-radius: 12px; font-family: 'Courier New', monospace; text-align: center; }`,
    js: `const limitInput = document.getElementById('limitInput');
const result = document.getElementById('result');
const output = document.getElementById('output');

document.getElementById('runBtn').addEventListener('click', () => {
  const limit = parseInt(limitInput.value);
  let i = 0;
  let iterations = '';
  
  do {
    iterations += \`Iteration \${i}: i = \${i}\\n\`;
    console.log('do-while iteration:', i);
    i++;
  } while (i < limit);
  
  result.textContent = \`let i = 0;\\ndo {\\n  console.log(i);\\n  i++;\\n} while (i < \${limit});\\n\\n\${iterations}\\n✅ Runs at least once even if limit is 0!\`;
  output.textContent = \`✅ do-while ran \${i} time(s)\`;
});

console.log('🔁 do-while ready!');`,
  },

  {
    topic: "for-of",
    description: "iterates over iterable objects like arrays, strings, Maps, Sets. Returns values directly.",
    html: `<div class="container"><h1>🔁 for-of Loop</h1><div class="demo"><button id="arrayBtn">Array</button><button id="stringBtn">String</button><button id="setBtn">Set</button><button id="mapBtn">Map</button></div><div class="output" id="output">Try for-of with different iterables!</div></div>`,
    css: `* { margin: 0; padding: 0; box-sizing: border-box; }
body { font-family: 'Inter', sans-serif; background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%); min-height: 100vh; display: flex; align-items: center; justify-content: center; padding: 2rem; }
.container { background: white; border-radius: 24px; padding: 3rem; max-width: 600px; width: 100%; box-shadow: 0 25px 70px rgba(0,0,0,0.3); }
h1 { color: #fc8f6f; text-align: center; margin-bottom: 2rem; }
.demo { background: #fff5f0; padding: 2rem; border-radius: 16px; margin-bottom: 2rem; }
button { width: 100%; padding: 1rem; background: #fc8f6f; color: white; border: none; border-radius: 10px; font-weight: 700; cursor: pointer; transition: all 0.3s; margin-bottom: 0.75rem; }
button:hover { background: #e67d5f; transform: translateY(-2px); }
.output { padding: 1.5rem; background: #0d1117; color: #F7DF1E; border-radius: 12px; font-family: 'Courier New', monospace; white-space: pre-wrap; }`,
    js: `const output = document.getElementById('output');

document.getElementById('arrayBtn').addEventListener('click', () => {
  const arr = ['apple', 'banana', 'cherry'];
  let result = 'for (const fruit of arr) {\\n';
  
  for (const fruit of arr) {
    result += \`  \${fruit}\\n\`;
    console.log('for-of array:', fruit);
  }
  
  output.textContent = result + '}\\n\\n✅ Iterates over array values';
});

document.getElementById('stringBtn').addEventListener('click', () => {
  const str = 'Hello';
  let result = 'for (const char of str) {\\n';
  
  for (const char of str) {
    result += \`  \${char}\\n\`;
    console.log('for-of string:', char);
  }
  
  output.textContent = result + '}\\n\\n✅ Iterates over string characters';
});

document.getElementById('setBtn').addEventListener('click', () => {
  const set = new Set([1, 2, 3]);
  let result = 'for (const num of set) {\\n';
  
  for (const num of set) {
    result += \`  \${num}\\n\`;
    console.log('for-of set:', num);
  }
  
  output.textContent = result + '}\\n\\n✅ Iterates over Set values';
});

document.getElementById('mapBtn').addEventListener('click', () => {
  const map = new Map([['a', 1], ['b', 2]]);
  let result = 'for (const [key, value] of map) {\\n';
  
  for (const [key, value] of map) {
    result += \`  \${key}: \${value}\\n\`;
    console.log('for-of map:', key, value);
  }
  
  output.textContent = result + '}\\n\\n✅ Iterates over Map entries';
});

console.log('🔁 for-of ready!');`,
  },

  {
    topic: "for-in",
    description: "iterates over enumerable property keys of an object. Not recommended for arrays.",
    html: `<div class="container"><h1>🔁 for-in Loop</h1><div class="demo"><button id="objBtn">Object Properties</button><button id="arrayBtn">Array (not recommended)</button><button id="protoBtn">Inherited Properties</button></div><div class="output" id="output">Try for-in with objects!</div></div>`,
    css: `* { margin: 0; padding: 0; box-sizing: border-box; }
body { font-family: 'Inter', sans-serif; background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%); min-height: 100vh; display: flex; align-items: center; justify-content: center; padding: 2rem; }
.container { background: white; border-radius: 24px; padding: 3rem; max-width: 600px; width: 100%; box-shadow: 0 25px 70px rgba(0,0,0,0.3); }
h1 { color: #667eea; text-align: center; margin-bottom: 2rem; }
.demo { background: #f0f4ff; padding: 2rem; border-radius: 16px; margin-bottom: 2rem; }
button { width: 100%; padding: 1rem; background: #667eea; color: white; border: none; border-radius: 10px; font-weight: 700; cursor: pointer; transition: all 0.3s; margin-bottom: 0.75rem; }
button:hover { background: #5568d3; transform: translateY(-2px); }
.output { padding: 1.5rem; background: #0d1117; color: #F7DF1E; border-radius: 12px; font-family: 'Courier New', monospace; white-space: pre-wrap; }`,
    js: `const output = document.getElementById('output');

document.getElementById('objBtn').addEventListener('click', () => {
  const obj = { name: 'Alice', age: 25, city: 'NYC' };
  let result = 'for (const key in obj) {\\n';
  
  for (const key in obj) {
    result += \`  \${key}: \${obj[key]}\\n\`;
    console.log('for-in object:', key, obj[key]);
  }
  
  output.textContent = result + '}\\n\\n✅ Iterates over object keys';
});

document.getElementById('arrayBtn').addEventListener('click', () => {
  const arr = ['a', 'b', 'c'];
  let result = 'for (const index in arr) {\\n';
  
  for (const index in arr) {
    result += \`  \${index}: \${arr[index]}\\n\`;
    console.log('for-in array:', index, arr[index]);
  }
  
  output.textContent = result + '}\\n\\n⚠️ Returns indices, use for-of instead';
});

document.getElementById('protoBtn').addEventListener('click', () => {
  const obj = { own: 'property' };
  Object.prototype.inherited = 'value';
  
  let result = 'for (const key in obj) {\\n';
  for (const key in obj) {
    result += \`  \${key}: \${obj[key]}\\n\`;
  }
  
  delete Object.prototype.inherited;
  
  output.textContent = result + '}\\n\\n⚠️ Includes inherited properties!\\nUse hasOwnProperty() to filter';
});

console.log('🔁 for-in ready!');`,
  },

  {
    topic: "break",
    description: "exits a loop or switch statement immediately, skipping remaining iterations.",
    html: `<div class="container"><h1>🛑 break Statement</h1><div class="demo"><input type="number" id="targetInput" value="5" placeholder="Break at"><button id="runBtn">Run Loop with break</button><div class="result" id="result"></div></div><div class="output" id="output">Test break statement!</div></div>`,
    css: `* { margin: 0; padding: 0; box-sizing: border-box; }
body { font-family: 'Inter', sans-serif; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); min-height: 100vh; display: flex; align-items: center; justify-content: center; padding: 2rem; }
.container { background: white; border-radius: 24px; padding: 3rem; max-width: 600px; width: 100%; box-shadow: 0 25px 70px rgba(0,0,0,0.3); }
h1 { color: #667eea; text-align: center; margin-bottom: 2rem; }
.demo { background: #f0f4ff; padding: 2rem; border-radius: 16px; margin-bottom: 2rem; }
input { width: 100%; padding: 1rem; border: 2px solid #667eea; border-radius: 12px; font-size: 1.2rem; margin-bottom: 1rem; text-align: center; font-weight: 700; }
button { width: 100%; padding: 0.75rem; background: #667eea; color: white; border: none; border-radius: 10px; font-weight: 700; cursor: pointer; transition: all 0.3s; margin-bottom: 1rem; }
button:hover { background: #5568d3; transform: translateY(-2px); }
.result { background: #2d2d2d; color: #667eea; padding: 1.5rem; border-radius: 12px; font-family: 'Courier New', monospace; min-height: 100px; white-space: pre-wrap; }
.output { padding: 1.5rem; background: #0d1117; color: #F7DF1E; border-radius: 12px; font-family: 'Courier New', monospace; text-align: center; }`,
    js: `const targetInput = document.getElementById('targetInput');
const result = document.getElementById('result');
const output = document.getElementById('output');

document.getElementById('runBtn').addEventListener('click', () => {
  const target = parseInt(targetInput.value);
  let iterations = '';
  
  for (let i = 0; i < 10; i++) {
    if (i === target) {
      iterations += \`Iteration \${i}: BREAK! 🛑\\n\`;
      console.log('break at:', i);
      break;
    }
    iterations += \`Iteration \${i}: i = \${i}\\n\`;
  }
  
  result.textContent = \`for (let i = 0; i < 10; i++) {\\n  if (i === \${target}) {\\n    break;\\n  }\\n  console.log(i);\\n}\\n\\n\${iterations}\\n✅ Loop stopped at \${target}\`;
  output.textContent = \`🛑 Loop broke at i = \${target}\`;
});

console.log('🛑 break ready!');`,
  },

  {
    topic: "continue",
    description: "skips the current iteration and moves to the next one. The loop continues running.",
    html: `<div class="container"><h1>⏭️ continue Statement</h1><div class="demo"><input type="number" id="skipInput" value="3" placeholder="Skip number"><button id="runBtn">Run Loop with continue</button><div class="result" id="result"></div></div><div class="output" id="output">Test continue statement!</div></div>`,
    css: `* { margin: 0; padding: 0; box-sizing: border-box; }
body { font-family: 'Inter', sans-serif; background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); min-height: 100vh; display: flex; align-items: center; justify-content: center; padding: 2rem; }
.container { background: white; border-radius: 24px; padding: 3rem; max-width: 600px; width: 100%; box-shadow: 0 25px 70px rgba(0,0,0,0.3); }
h1 { color: #f5576c; text-align: center; margin-bottom: 2rem; }
.demo { background: #fff5f7; padding: 2rem; border-radius: 16px; margin-bottom: 2rem; }
input { width: 100%; padding: 1rem; border: 2px solid #f5576c; border-radius: 12px; font-size: 1.2rem; margin-bottom: 1rem; text-align: center; font-weight: 700; }
button { width: 100%; padding: 0.75rem; background: #f5576c; color: white; border: none; border-radius: 10px; font-weight: 700; cursor: pointer; transition: all 0.3s; margin-bottom: 1rem; }
button:hover { background: #e04858; transform: translateY(-2px); }
.result { background: #2d2d2d; color: #f5576c; padding: 1.5rem; border-radius: 12px; font-family: 'Courier New', monospace; min-height: 100px; white-space: pre-wrap; }
.output { padding: 1.5rem; background: #0d1117; color: #F7DF1E; border-radius: 12px; font-family: 'Courier New', monospace; text-align: center; }`,
    js: `const skipInput = document.getElementById('skipInput');
const result = document.getElementById('result');
const output = document.getElementById('output');

document.getElementById('runBtn').addEventListener('click', () => {
  const skip = parseInt(skipInput.value);
  let iterations = '';
  
  for (let i = 0; i < 7; i++) {
    if (i === skip) {
      iterations += \`Iteration \${i}: SKIPPED! ⏭️\\n\`;
      console.log('continue at:', i);
      continue;
    }
    iterations += \`Iteration \${i}: i = \${i}\\n\`;
  }
  
  result.textContent = \`for (let i = 0; i < 7; i++) {\\n  if (i === \${skip}) {\\n    continue;\\n  }\\n  console.log(i);\\n}\\n\\n\${iterations}\\n✅ Skipped iteration \${skip}\`;
  output.textContent = \`⏭️ Skipped i = \${skip}, loop continued\`;
});

console.log('⏭️ continue ready!');`,
  },

  {
    topic: "nested-loops",
    description: "are loops inside other loops. Used for multi-dimensional iteration like matrices, grids, or combinations.",
    html: `<div class="container"><h1>🔁 Nested Loops</h1><div class="demo"><button id="tableBtn">Multiplication Table</button><button id="patternBtn">Pattern</button><button id="gridBtn">Grid</button></div><div class="output" id="output">Try nested loops!</div></div>`,
    css: `* { margin: 0; padding: 0; box-sizing: border-box; }
body { font-family: 'Inter', sans-serif; background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); min-height: 100vh; display: flex; align-items: center; justify-content: center; padding: 2rem; }
.container { background: white; border-radius: 24px; padding: 3rem; max-width: 600px; width: 100%; box-shadow: 0 25px 70px rgba(0,0,0,0.3); }
h1 { color: #4facfe; text-align: center; margin-bottom: 2rem; }
.demo { background: #f0f9ff; padding: 2rem; border-radius: 16px; margin-bottom: 2rem; }
button { width: 100%; padding: 1rem; background: #4facfe; color: white; border: none; border-radius: 10px; font-weight: 700; cursor: pointer; transition: all 0.3s; margin-bottom: 0.75rem; }
button:hover { background: #3d9ae6; transform: translateY(-2px); }
.output { padding: 1.5rem; background: #0d1117; color: #F7DF1E; border-radius: 12px; font-family: 'Courier New', monospace; white-space: pre-wrap; font-size: 0.85rem; }`,
    js: `const output = document.getElementById('output');

document.getElementById('tableBtn').addEventListener('click', () => {
  let table = 'Multiplication Table (3x3):\\n\\n';
  
  for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
      table += \`\${i} × \${j} = \${i * j}  \`;
      console.log(\`\${i} × \${j} = \${i * j}\`);
    }
    table += '\\n';
  }
  
  output.textContent = table + '\\n✅ Nested loops for table';
});

document.getElementById('patternBtn').addEventListener('click', () => {
  let pattern = 'Star Pattern:\\n\\n';
  
  for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i; j++) {
      pattern += '★ ';
    }
    pattern += '\\n';
    console.log('Pattern row:', i);
  }
  
  output.textContent = pattern + '\\n✅ Nested loops for pattern';
});

document.getElementById('gridBtn').addEventListener('click', () => {
  let grid = 'Grid Coordinates:\\n\\n';
  
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      grid += \`(\${row},\${col}) \`;
      console.log('Grid:', row, col);
    }
    grid += '\\n';
  }
  
  output.textContent = grid + '\\n✅ Nested loops for grid';
});

console.log('🔁 Nested loops ready!');`,
  },

  /* ══════════════════════════════════════════════
     BATCH 6: FUNCTIONS PART 1 (5 topics)
  ══════════════════════════════════════════════ */

  {
    topic: "function-declaration",
    description: "defines a named function using the function keyword. Hoisted to the top, can be called before declaration.",
    html: `<div class="container">
  <h1>🔧 Function Declaration</h1>
  <div class="demo">
    <input type="text" id="nameInput" value="Alice" placeholder="Enter name">
    <button id="greetBtn">Call greet()</button>
    <button id="addBtn">Call add(5, 3)</button>
    <button id="hoistBtn">Test Hoisting</button>
    <div class="result" id="result"></div>
  </div>
  <div class="output" id="output">Try function declarations!</div>
</div>`,
    css: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.container {
  background: white;
  border-radius: 24px;
  padding: 3rem;
  max-width: 600px;
  width: 100%;
  box-shadow: 0 25px 70px rgba(0,0,0,0.3);
}

h1 {
  color: #667eea;
  text-align: center;
  margin-bottom: 2rem;
}

.demo {
  background: #f0f4ff;
  padding: 2rem;
  border-radius: 16px;
  margin-bottom: 2rem;
}

input {
  width: 100%;
  padding: 1rem;
  border: 2px solid #667eea;
  border-radius: 12px;
  font-size: 1.1rem;
  margin-bottom: 1rem;
  text-align: center;
  font-weight: 600;
}

button {
  width: 100%;
  padding: 0.75rem;
  background: #667eea;
  color: white;
  border: none;
  border-radius: 10px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s;
  margin-bottom: 0.75rem;
}

button:hover {
  background: #5568d3;
  transform: translateY(-2px);
}

.result {
  background: #2d2d2d;
  color: #667eea;
  padding: 1.5rem;
  border-radius: 12px;
  font-family: 'Courier New', monospace;
  min-height: 100px;
  white-space: pre-wrap;
  margin-top: 1rem;
}

.output {
  padding: 1.5rem;
  background: #0d1117;
  color: #F7DF1E;
  border-radius: 12px;
  font-family: 'Courier New', monospace;
  text-align: center;
}`,
    js: `const nameInput = document.getElementById('nameInput');
const result = document.getElementById('result');
const output = document.getElementById('output');

// Function Declaration
function greet(name) {
  return \`Hello, \${name}! Welcome! 👋\`;
}

function add(a, b) {
  return a + b;
}

function hoistedFunction() {
  return 'I was called before declaration! ✅';
}

document.getElementById('greetBtn').addEventListener('click', () => {
  const name = nameInput.value;
  const greeting = greet(name);
  
  result.textContent = \`function greet(name) {\\n  return \\\`Hello, \\\${name}! Welcome! 👋\\\`;\\n}\\n\\ngreet("\${name}")\\n\\nResult: "\${greeting}"\`;
  
  output.textContent = '✅ Function called successfully!';
  console.log('greet() called:', greeting);
});

document.getElementById('addBtn').addEventListener('click', () => {
  const sum = add(5, 3);
  
  result.textContent = \`function add(a, b) {\\n  return a + b;\\n}\\n\\nadd(5, 3)\\n\\nResult: \${sum}\`;
  
  output.textContent = '✅ Function returned: ' + sum;
  console.log('add() called:', sum);
});

document.getElementById('hoistBtn').addEventListener('click', () => {
  const msg = hoistedFunction();
  
  result.textContent = \`// Called BEFORE declaration\\nconst msg = hoistedFunction();\\n\\nfunction hoistedFunction() {\\n  return 'I was called before declaration! ✅';\\n}\\n\\nResult: "\${msg}"\\n\\n✅ Function declarations are HOISTED!\`;
  
  output.textContent = '✅ Hoisting works!';
  console.log('Hoisting test:', msg);
});

console.log('🔧 Function declaration ready!');`,
  },

  {
    topic: "function-expression",
    description: "assigns a function to a variable. Not hoisted, must be defined before use. Can be anonymous or named.",
    html: `<div class="container">
  <h1>🔧 Function Expression</h1>
  <div class="demo">
    <input type="number" id="numInput" value="5" placeholder="Enter number">
    <button id="squareBtn">Call square()</button>
    <button id="anonymousBtn">Anonymous Function</button>
    <button id="namedBtn">Named Expression</button>
    <div class="result" id="result"></div>
  </div>
  <div class="output" id="output">Try function expressions!</div>
</div>`,
    css: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', sans-serif;
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.container {
  background: white;
  border-radius: 24px;
  padding: 3rem;
  max-width: 600px;
  width: 100%;
  box-shadow: 0 25px 70px rgba(0,0,0,0.3);
}

h1 {
  color: #f5576c;
  text-align: center;
  margin-bottom: 2rem;
}

.demo {
  background: #fff5f7;
  padding: 2rem;
  border-radius: 16px;
  margin-bottom: 2rem;
}

input {
  width: 100%;
  padding: 1rem;
  border: 2px solid #f5576c;
  border-radius: 12px;
  font-size: 1.1rem;
  margin-bottom: 1rem;
  text-align: center;
  font-weight: 600;
}

button {
  width: 100%;
  padding: 0.75rem;
  background: #f5576c;
  color: white;
  border: none;
  border-radius: 10px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s;
  margin-bottom: 0.75rem;
}

button:hover {
  background: #e04858;
  transform: translateY(-2px);
}

.result {
  background: #2d2d2d;
  color: #f5576c;
  padding: 1.5rem;
  border-radius: 12px;
  font-family: 'Courier New', monospace;
  min-height: 100px;
  white-space: pre-wrap;
  margin-top: 1rem;
}

.output {
  padding: 1.5rem;
  background: #0d1117;
  color: #F7DF1E;
  border-radius: 12px;
  font-family: 'Courier New', monospace;
  text-align: center;
}`,
    js: `const numInput = document.getElementById('numInput');
const result = document.getElementById('result');
const output = document.getElementById('output');

// Function Expression (anonymous)
const square = function(x) {
  return x * x;
};

// Named Function Expression
const factorial = function fact(n) {
  if (n <= 1) return 1;
  return n * fact(n - 1);
};

document.getElementById('squareBtn').addEventListener('click', () => {
  const num = parseFloat(numInput.value);
  const squared = square(num);
  
  result.textContent = \`const square = function(x) {\\n  return x * x;\\n};\\n\\nsquare(\${num})\\n\\nResult: \${squared}\\n\\n✅ Anonymous function expression\`;
  
  output.textContent = \`✅ \${num}² = \${squared}\`;
  console.log('square() called:', squared);
});

document.getElementById('anonymousBtn').addEventListener('click', () => {
  const greet = function(name) {
    return \`Hi, \${name}!\`;
  };
  
  const greeting = greet('Alice');
  
  result.textContent = \`const greet = function(name) {\\n  return \\\`Hi, \\\${name}!\\\`;\\n};\\n\\ngreet('Alice')\\n\\nResult: "\${greeting}"\\n\\n✅ Function stored in variable\`;
  
  output.textContent = '✅ Anonymous function executed!';
  console.log('Anonymous:', greeting);
});

document.getElementById('namedBtn').addEventListener('click', () => {
  const num = 5;
  const result_val = factorial(num);
  
  result.textContent = \`const factorial = function fact(n) {\\n  if (n <= 1) return 1;\\n  return n * fact(n - 1);\\n};\\n\\nfactorial(\${num})\\n\\nResult: \${result_val}\\n\\n✅ Named function expression\\n(can call itself recursively)\`;
  
  output.textContent = \`✅ \${num}! = \${result_val}\`;
  console.log('factorial() called:', result_val);
});

console.log('🔧 Function expression ready!');`,
  },

  {
    topic: "arrow-functions",
    description: "provide a shorter syntax using =>. Lexically bind 'this', no arguments object, cannot be used as constructors.",
    html: `<div class="container">
  <h1>➡️ Arrow Functions</h1>
  <div class="demo">
    <input type="number" id="numInput" value="10" placeholder="Enter number">
    <button id="basicBtn">Basic Arrow</button>
    <button id="implicitBtn">Implicit Return</button>
    <button id="multilineBtn">Multiline</button>
    <button id="arrayBtn">Array Methods</button>
    <div class="result" id="result"></div>
  </div>
  <div class="output" id="output">Try arrow functions!</div>
</div>`,
    css: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', sans-serif;
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.container {
  background: white;
  border-radius: 24px;
  padding: 3rem;
  max-width: 600px;
  width: 100%;
  box-shadow: 0 25px 70px rgba(0,0,0,0.3);
}

h1 {
  color: #4facfe;
  text-align: center;
  margin-bottom: 2rem;
}

.demo {
  background: #f0f9ff;
  padding: 2rem;
  border-radius: 16px;
  margin-bottom: 2rem;
}

input {
  width: 100%;
  padding: 1rem;
  border: 2px solid #4facfe;
  border-radius: 12px;
  font-size: 1.1rem;
  margin-bottom: 1rem;
  text-align: center;
  font-weight: 600;
}

button {
  width: 100%;
  padding: 0.75rem;
  background: #4facfe;
  color: white;
  border: none;
  border-radius: 10px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s;
  margin-bottom: 0.75rem;
}

button:hover {
  background: #3d9ae6;
  transform: translateY(-2px);
}

.result {
  background: #2d2d2d;
  color: #4facfe;
  padding: 1.5rem;
  border-radius: 12px;
  font-family: 'Courier New', monospace;
  min-height: 100px;
  white-space: pre-wrap;
  margin-top: 1rem;
}

.output {
  padding: 1.5rem;
  background: #0d1117;
  color: #F7DF1E;
  border-radius: 12px;
  font-family: 'Courier New', monospace;
  text-align: center;
}`,
    js: `const numInput = document.getElementById('numInput');
const result = document.getElementById('result');
const output = document.getElementById('output');

// Arrow Functions
const double = (x) => {
  return x * 2;
};

const triple = x => x * 3;

const add = (a, b) => a + b;

document.getElementById('basicBtn').addEventListener('click', () => {
  const num = parseFloat(numInput.value);
  const doubled = double(num);
  
  result.textContent = \`const double = (x) => {\\n  return x * 2;\\n};\\n\\ndouble(\${num})\\n\\nResult: \${doubled}\\n\\n✅ Basic arrow function with block\`;
  
  output.textContent = \`✅ \${num} × 2 = \${doubled}\`;
  console.log('double() called:', doubled);
});

document.getElementById('implicitBtn').addEventListener('click', () => {
  const num = parseFloat(numInput.value);
  const tripled = triple(num);
  
  result.textContent = \`const triple = x => x * 3;\\n\\ntriple(\${num})\\n\\nResult: \${tripled}\\n\\n✅ Implicit return (no braces)\\n✅ Single param (no parentheses)\`;
  
  output.textContent = \`✅ \${num} × 3 = \${tripled}\`;
  console.log('triple() called:', tripled);
});

document.getElementById('multilineBtn').addEventListener('click', () => {
  const calculate = (x) => {
    const squared = x * x;
    const doubled = x * 2;
    return { squared, doubled };
  };
  
  const num = parseFloat(numInput.value);
  const results = calculate(num);
  
  result.textContent = \`const calculate = (x) => {\\n  const squared = x * x;\\n  const doubled = x * 2;\\n  return { squared, doubled };\\n};\\n\\ncalculate(\${num})\\n\\nResult: \${JSON.stringify(results, null, 2)}\`;
  
  output.textContent = '✅ Multiline arrow function!';
  console.log('calculate() called:', results);
});

document.getElementById('arrayBtn').addEventListener('click', () => {
  const numbers = [1, 2, 3, 4, 5];
  const doubled = numbers.map(n => n * 2);
  const evens = numbers.filter(n => n % 2 === 0);
  
  result.textContent = \`const numbers = [1, 2, 3, 4, 5];\\n\\nnumbers.map(n => n * 2)\\nResult: [\${doubled}]\\n\\nnumbers.filter(n => n % 2 === 0)\\nResult: [\${evens}]\\n\\n✅ Arrow functions in array methods\`;
  
  output.textContent = '✅ Array methods with arrows!';
  console.log('Array methods:', { doubled, evens });
});

console.log('➡️ Arrow functions ready!');`,
  },

  {
    topic: "parameters",
    description: "are variables listed in function definition that receive values (arguments) when the function is called.",
    html: `<div class="container">
  <h1>📥 Function Parameters</h1>
  <div class="demo">
    <input type="text" id="param1" value="Alice" placeholder="Parameter 1">
    <input type="text" id="param2" value="25" placeholder="Parameter 2">
    <button id="singleBtn">Single Parameter</button>
    <button id="multipleBtn">Multiple Parameters</button>
    <button id="noParamBtn">No Parameters</button>
    <div class="result" id="result"></div>
  </div>
  <div class="output" id="output">Try function parameters!</div>
</div>`,
    css: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', sans-serif;
  background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.container {
  background: white;
  border-radius: 24px;
  padding: 3rem;
  max-width: 600px;
  width: 100%;
  box-shadow: 0 25px 70px rgba(0,0,0,0.3);
}

h1 {
  color: #fc8f6f;
  text-align: center;
  margin-bottom: 2rem;
}

.demo {
  background: #fff5f0;
  padding: 2rem;
  border-radius: 16px;
  margin-bottom: 2rem;
}

input {
  width: 100%;
  padding: 1rem;
  border: 2px solid #fc8f6f;
  border-radius: 12px;
  font-size: 1.1rem;
  margin-bottom: 1rem;
  text-align: center;
  font-weight: 600;
}

button {
  width: 100%;
  padding: 0.75rem;
  background: #fc8f6f;
  color: white;
  border: none;
  border-radius: 10px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s;
  margin-bottom: 0.75rem;
}

button:hover {
  background: #e67d5f;
  transform: translateY(-2px);
}

.result {
  background: #2d2d2d;
  color: #fc8f6f;
  padding: 1.5rem;
  border-radius: 12px;
  font-family: 'Courier New', monospace;
  min-height: 100px;
  white-space: pre-wrap;
  margin-top: 1rem;
}

.output {
  padding: 1.5rem;
  background: #0d1117;
  color: #F7DF1E;
  border-radius: 12px;
  font-family: 'Courier New', monospace;
  text-align: center;
}`,
    js: `const param1 = document.getElementById('param1');
const param2 = document.getElementById('param2');
const result = document.getElementById('result');
const output = document.getElementById('output');

// Functions with different parameters
function greet(name) {
  return \`Hello, \${name}!\`;
}

function introduce(name, age) {
  return \`My name is \${name} and I am \${age} years old.\`;
}

function sayHello() {
  return 'Hello, World!';
}

document.getElementById('singleBtn').addEventListener('click', () => {
  const name = param1.value;
  const greeting = greet(name);
  
  result.textContent = \`function greet(name) {\\n  return \\\`Hello, \\\${name}!\\\`;\\n}\\n\\ngreet("\${name}")\\n\\nResult: "\${greeting}"\\n\\n✅ Single parameter function\`;
  
  output.textContent = '✅ Function called with 1 parameter';
  console.log('greet() called:', greeting);
});

document.getElementById('multipleBtn').addEventListener('click', () => {
  const name = param1.value;
  const age = param2.value;
  const intro = introduce(name, age);
  
  result.textContent = \`function introduce(name, age) {\\n  return \\\`My name is \\\${name} and I am \\\${age} years old.\\\`;\\n}\\n\\nintroduce("\${name}", "\${age}")\\n\\nResult: "\${intro}"\\n\\n✅ Multiple parameters function\`;
  
  output.textContent = '✅ Function called with 2 parameters';
  console.log('introduce() called:', intro);
});

document.getElementById('noParamBtn').addEventListener('click', () => {
  const hello = sayHello();
  
  result.textContent = \`function sayHello() {\\n  return 'Hello, World!';\\n}\\n\\nsayHello()\\n\\nResult: "\${hello}"\\n\\n✅ No parameters needed\`;
  
  output.textContent = '✅ Function called with no parameters';
  console.log('sayHello() called:', hello);
});

console.log('📥 Function parameters ready!');`,
  },

  {
    topic: "default-parameters",
    description: "allow parameters to have default values if no argument is provided or if undefined is passed.",
    html: `<div class="container">
  <h1>🎯 Default Parameters</h1>
  <div class="demo">
    <input type="text" id="nameInput" value="" placeholder="Name (optional)">
    <input type="number" id="ageInput" value="" placeholder="Age (optional)">
    <button id="withDefaultsBtn">Call with Defaults</button>
    <button id="withValuesBtn">Call with Values</button>
    <button id="partialBtn">Partial Values</button>
    <div class="result" id="result"></div>
  </div>
  <div class="output" id="output">Try default parameters!</div>
</div>`,
    css: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', sans-serif;
  background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.container {
  background: white;
  border-radius: 24px;
  padding: 3rem;
  max-width: 600px;
  width: 100%;
  box-shadow: 0 25px 70px rgba(0,0,0,0.3);
}

h1 {
  color: #667eea;
  text-align: center;
  margin-bottom: 2rem;
}

.demo {
  background: #f0f4ff;
  padding: 2rem;
  border-radius: 16px;
  margin-bottom: 2rem;
}

input {
  width: 100%;
  padding: 1rem;
  border: 2px solid #667eea;
  border-radius: 12px;
  font-size: 1.1rem;
  margin-bottom: 1rem;
  text-align: center;
  font-weight: 600;
}

button {
  width: 100%;
  padding: 0.75rem;
  background: #667eea;
  color: white;
  border: none;
  border-radius: 10px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s;
  margin-bottom: 0.75rem;
}

button:hover {
  background: #5568d3;
  transform: translateY(-2px);
}

.result {
  background: #2d2d2d;
  color: #667eea;
  padding: 1.5rem;
  border-radius: 12px;
  font-family: 'Courier New', monospace;
  min-height: 100px;
  white-space: pre-wrap;
  margin-top: 1rem;
}

.output {
  padding: 1.5rem;
  background: #0d1117;
  color: #F7DF1E;
  border-radius: 12px;
  font-family: 'Courier New', monospace;
  text-align: center;
}`,
    js: `const nameInput = document.getElementById('nameInput');
const ageInput = document.getElementById('ageInput');
const result = document.getElementById('result');
const output = document.getElementById('output');

// Function with default parameters
function greet(name = 'Guest', age = 18) {
  return \`Hello, \${name}! You are \${age} years old.\`;
}

function multiply(a, b = 1) {
  return a * b;
}

document.getElementById('withDefaultsBtn').addEventListener('click', () => {
  const greeting = greet();
  
  result.textContent = \`function greet(name = 'Guest', age = 18) {\\n  return \\\`Hello, \\\${name}! You are \\\${age} years old.\\\`;\\n}\\n\\ngreet()  // No arguments\\n\\nResult: "\${greeting}"\\n\\n✅ Both defaults used\`;
  
  output.textContent = '✅ Default parameters applied!';
  console.log('greet() with defaults:', greeting);
});

document.getElementById('withValuesBtn').addEventListener('click', () => {
  const name = nameInput.value || 'Alice';
  const age = ageInput.value || 25;
  const greeting = greet(name, age);
  
  result.textContent = \`function greet(name = 'Guest', age = 18) {\\n  return \\\`Hello, \\\${name}! You are \\\${age} years old.\\\`;\\n}\\n\\ngreet("\${name}", \${age})\\n\\nResult: "\${greeting}"\\n\\n✅ Custom values provided\`;
  
  output.textContent = '✅ Custom values used!';
  console.log('greet() with values:', greeting);
});

document.getElementById('partialBtn').addEventListener('click', () => {
  const name = nameInput.value || 'Bob';
  const greeting = greet(name);
  
  const product1 = multiply(5);
  const product2 = multiply(5, 3);
  
  result.textContent = \`greet("\${name}")  // Only first param\\nResult: "\${greeting}"\\n\\nmultiply(5)  // b defaults to 1\\nResult: \${product1}\\n\\nmultiply(5, 3)  // Both provided\\nResult: \${product2}\\n\\n✅ Mix of defaults and values\`;
  
  output.textContent = '✅ Partial parameters!';
  console.log('Partial:', { greeting, product1, product2 });
});

console.log('🎯 Default parameters ready!');`,
  },

  /* ══════════════════════════════════════════════
     BATCH 7: FUNCTIONS PART 2 (5 topics)
  ══════════════════════════════════════════════ */

  {
    topic: "rest-parameters",
    description: "(...args) collects remaining arguments into an array. Must be the last parameter. Useful for variable-length argument lists.",
    html: `<div class="container">
  <h1>... Rest Parameters</h1>
  <div class="demo">
    <input type="text" id="numbersInput" value="1, 2, 3, 4, 5" placeholder="Enter numbers (comma-separated)">
    <button id="sumBtn">Sum All</button>
    <button id="maxBtn">Find Max</button>
    <button id="combineBtn">Combine with Fixed</button>
    <div class="result" id="result"></div>
  </div>
  <div class="output" id="output">Try rest parameters!</div>
</div>`,
    css: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.container {
  background: white;
  border-radius: 24px;
  padding: 3rem;
  max-width: 600px;
  width: 100%;
  box-shadow: 0 25px 70px rgba(0,0,0,0.3);
}

h1 {
  color: #667eea;
  text-align: center;
  margin-bottom: 2rem;
}

.demo {
  background: #f0f4ff;
  padding: 2rem;
  border-radius: 16px;
  margin-bottom: 2rem;
}

input {
  width: 100%;
  padding: 1rem;
  border: 2px solid #667eea;
  border-radius: 12px;
  font-size: 1.1rem;
  margin-bottom: 1rem;
  text-align: center;
  font-weight: 600;
}

button {
  width: 100%;
  padding: 0.75rem;
  background: #667eea;
  color: white;
  border: none;
  border-radius: 10px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s;
  margin-bottom: 0.75rem;
}

button:hover {
  background: #5568d3;
  transform: translateY(-2px);
}

.result {
  background: #2d2d2d;
  color: #667eea;
  padding: 1.5rem;
  border-radius: 12px;
  font-family: 'Courier New', monospace;
  min-height: 100px;
  white-space: pre-wrap;
  margin-top: 1rem;
}

.output {
  padding: 1.5rem;
  background: #0d1117;
  color: #F7DF1E;
  border-radius: 12px;
  font-family: 'Courier New', monospace;
  text-align: center;
}`,
    js: `const numbersInput = document.getElementById('numbersInput');
const result = document.getElementById('result');
const output = document.getElementById('output');

// Rest parameters
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

function findMax(...numbers) {
  return Math.max(...numbers);
}

function greetAll(greeting, ...names) {
  return names.map(name => \`\${greeting}, \${name}!\`).join('\\n');
}

document.getElementById('sumBtn').addEventListener('click', () => {
  const nums = numbersInput.value.split(',').map(n => parseFloat(n.trim()));
  const total = sum(...nums);
  
  result.textContent = \`function sum(...numbers) {\\n  return numbers.reduce((total, num) => total + num, 0);\\n}\\n\\nsum(\${nums.join(', ')})\\n\\nResult: \${total}\\n\\n✅ Rest parameter collects all arguments\`;
  
  output.textContent = \`✅ Sum: \${total}\`;
  console.log('sum() called:', total);
});

document.getElementById('maxBtn').addEventListener('click', () => {
  const nums = numbersInput.value.split(',').map(n => parseFloat(n.trim()));
  const maximum = findMax(...nums);
  
  result.textContent = \`function findMax(...numbers) {\\n  return Math.max(...numbers);\\n}\\n\\nfindMax(\${nums.join(', ')})\\n\\nResult: \${maximum}\\n\\n✅ Rest parameter with Math.max\`;
  
  output.textContent = \`✅ Max: \${maximum}\`;
  console.log('findMax() called:', maximum);
});

document.getElementById('combineBtn').addEventListener('click', () => {
  const greetings = greetAll('Hello', 'Alice', 'Bob', 'Charlie');
  
  result.textContent = \`function greetAll(greeting, ...names) {\\n  return names.map(name => \\\`\\\${greeting}, \\\${name}!\\\`).join('\\\\n');\\n}\\n\\ngreetAll('Hello', 'Alice', 'Bob', 'Charlie')\\n\\nResult:\\n\${greetings}\\n\\n✅ Fixed param + rest parameters\`;
  
  output.textContent = '✅ Combined parameters!';
  console.log('greetAll() called');
});

console.log('... Rest parameters ready!');`,
  },

  {
    topic: "return",
    description: "exits a function and optionally sends a value back to the caller. Without return, functions return undefined.",
    html: `<div class="container">
  <h1>↩️ Return Statement</h1>
  <div class="demo">
    <input type="number" id="numInput" value="5" placeholder="Enter number">
    <button id="withReturnBtn">With Return</button>
    <button id="noReturnBtn">No Return</button>
    <button id="earlyReturnBtn">Early Return</button>
    <button id="multipleBtn">Multiple Returns</button>
    <div class="result" id="result"></div>
  </div>
  <div class="output" id="output">Try return statements!</div>
</div>`,
    css: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', sans-serif;
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.container {
  background: white;
  border-radius: 24px;
  padding: 3rem;
  max-width: 600px;
  width: 100%;
  box-shadow: 0 25px 70px rgba(0,0,0,0.3);
}

h1 {
  color: #f5576c;
  text-align: center;
  margin-bottom: 2rem;
}

.demo {
  background: #fff5f7;
  padding: 2rem;
  border-radius: 16px;
  margin-bottom: 2rem;
}

input {
  width: 100%;
  padding: 1rem;
  border: 2px solid #f5576c;
  border-radius: 12px;
  font-size: 1.1rem;
  margin-bottom: 1rem;
  text-align: center;
  font-weight: 600;
}

button {
  width: 100%;
  padding: 0.75rem;
  background: #f5576c;
  color: white;
  border: none;
  border-radius: 10px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s;
  margin-bottom: 0.75rem;
}

button:hover {
  background: #e04858;
  transform: translateY(-2px);
}

.result {
  background: #2d2d2d;
  color: #f5576c;
  padding: 1.5rem;
  border-radius: 12px;
  font-family: 'Courier New', monospace;
  min-height: 100px;
  white-space: pre-wrap;
  margin-top: 1rem;
}

.output {
  padding: 1.5rem;
  background: #0d1117;
  color: #F7DF1E;
  border-radius: 12px;
  font-family: 'Courier New', monospace;
  text-align: center;
}`,
    js: `const numInput = document.getElementById('numInput');
const result = document.getElementById('result');
const output = document.getElementById('output');

// Functions with return
function square(x) {
  return x * x;
}

function noReturn(x) {
  x * x; // No return!
}

function checkPositive(x) {
  if (x < 0) {
    return 'Negative';
  }
  return 'Positive or Zero';
}

function getGrade(score) {
  if (score >= 90) return 'A';
  if (score >= 80) return 'B';
  if (score >= 70) return 'C';
  return 'F';
}

document.getElementById('withReturnBtn').addEventListener('click', () => {
  const num = parseFloat(numInput.value);
  const squared = square(num);
  
  result.textContent = \`function square(x) {\\n  return x * x;\\n}\\n\\nconst squared = square(\${num});\\n\\nResult: \${squared}\\nType: \${typeof squared}\\n\\n✅ Function returns a value\`;
  
  output.textContent = \`✅ Returned: \${squared}\`;
  console.log('square() returned:', squared);
});

document.getElementById('noReturnBtn').addEventListener('click', () => {
  const num = parseFloat(numInput.value);
  const result_val = noReturn(num);
  
  result.textContent = \`function noReturn(x) {\\n  x * x;  // No return!\\n}\\n\\nconst result = noReturn(\${num});\\n\\nResult: \${result_val}\\nType: \${typeof result_val}\\n\\n⚠️ Without return, function returns undefined\`;
  
  output.textContent = '⚠️ Returned: undefined';
  console.log('noReturn() returned:', result_val);
});

document.getElementById('earlyReturnBtn').addEventListener('click', () => {
  const num = parseFloat(numInput.value);
  const check = checkPositive(num);
  
  result.textContent = \`function checkPositive(x) {\\n  if (x < 0) {\\n    return 'Negative';  // Early exit\\n  }\\n  return 'Positive or Zero';\\n}\\n\\ncheckPositive(\${num})\\n\\nResult: "\${check}"\\n\\n✅ Early return exits function immediately\`;
  
  output.textContent = \`✅ Result: \${check}\`;
  console.log('checkPositive() returned:', check);
});

document.getElementById('multipleBtn').addEventListener('click', () => {
  const score = parseFloat(numInput.value);
  const grade = getGrade(score);
  
  result.textContent = \`function getGrade(score) {\\n  if (score >= 90) return 'A';\\n  if (score >= 80) return 'B';\\n  if (score >= 70) return 'C';\\n  return 'F';\\n}\\n\\ngetGrade(\${score})\\n\\nResult: "\${grade}"\\n\\n✅ Multiple return statements\`;
  
  output.textContent = \`✅ Grade: \${grade}\`;
  console.log('getGrade() returned:', grade);
});

console.log('↩️ Return statement ready!');`,
  },

  {
    topic: "scope",
    description: "determines where variables are accessible. Global scope is everywhere, function scope is within functions, block scope is within {}.",
    html: `<div class="container">
  <h1>🔍 Scope</h1>
  <div class="demo">
    <button id="globalBtn">Global Scope</button>
    <button id="functionBtn">Function Scope</button>
    <button id="blockBtn">Block Scope</button>
    <button id="shadowBtn">Variable Shadowing</button>
    <div class="result" id="result"></div>
  </div>
  <div class="output" id="output">Try different scopes!</div>
</div>`,
    css: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', sans-serif;
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.container {
  background: white;
  border-radius: 24px;
  padding: 3rem;
  max-width: 600px;
  width: 100%;
  box-shadow: 0 25px 70px rgba(0,0,0,0.3);
}

h1 {
  color: #4facfe;
  text-align: center;
  margin-bottom: 2rem;
}

.demo {
  background: #f0f9ff;
  padding: 2rem;
  border-radius: 16px;
  margin-bottom: 2rem;
}

button {
  width: 100%;
  padding: 0.75rem;
  background: #4facfe;
  color: white;
  border: none;
  border-radius: 10px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s;
  margin-bottom: 0.75rem;
}

button:hover {
  background: #3d9ae6;
  transform: translateY(-2px);
}

.result {
  background: #2d2d2d;
  color: #4facfe;
  padding: 1.5rem;
  border-radius: 12px;
  font-family: 'Courier New', monospace;
  min-height: 100px;
  white-space: pre-wrap;
  margin-top: 1rem;
}

.output {
  padding: 1.5rem;
  background: #0d1117;
  color: #F7DF1E;
  border-radius: 12px;
  font-family: 'Courier New', monospace;
  text-align: center;
}`,
    js: `const result = document.getElementById('result');
const output = document.getElementById('output');

// Global scope
const globalVar = 'I am global';

document.getElementById('globalBtn').addEventListener('click', () => {
  function accessGlobal() {
    return globalVar; // Can access global
  }
  
  const value = accessGlobal();
  
  result.textContent = \`// Global Scope\\nconst globalVar = 'I am global';\\n\\nfunction accessGlobal() {\\n  return globalVar;  // ✅ Accessible\\n}\\n\\nResult: "\${value}"\\n\\n✅ Global variables accessible everywhere\`;
  
  output.textContent = '✅ Global scope accessed!';
  console.log('Global:', value);
});

document.getElementById('functionBtn').addEventListener('click', () => {
  function testFunction() {
    const functionVar = 'I am in function';
    return functionVar;
  }
  
  const value = testFunction();
  
  result.textContent = \`// Function Scope\\nfunction testFunction() {\\n  const functionVar = 'I am in function';\\n  return functionVar;  // ✅ Accessible here\\n}\\n\\nResult: "\${value}"\\n\\n// console.log(functionVar);  // ❌ Error outside\\n\\n✅ Function variables only accessible inside\`;
  
  output.textContent = '✅ Function scope!';
  console.log('Function:', value);
});

document.getElementById('blockBtn').addEventListener('click', () => {
  let blockResult = '';
  
  if (true) {
    const blockVar = 'I am in block';
    let blockLet = 'Block let';
    blockResult = \`Inside block:\\nblockVar = "\${blockVar}"\\nblockLet = "\${blockLet}"\`;
  }
  
  result.textContent = \`// Block Scope\\nif (true) {\\n  const blockVar = 'I am in block';\\n  let blockLet = 'Block let';\\n  // ✅ Accessible here\\n}\\n// console.log(blockVar);  // ❌ Error outside\\n\\n\${blockResult}\\n\\n✅ const/let are block-scoped\`;
  
  output.textContent = '✅ Block scope!';
  console.log('Block scope tested');
});

document.getElementById('shadowBtn').addEventListener('click', () => {
  const x = 'outer';
  
  function shadow() {
    const x = 'inner';
    return x;
  }
  
  const inner = shadow();
  
  result.textContent = \`// Variable Shadowing\\nconst x = 'outer';\\n\\nfunction shadow() {\\n  const x = 'inner';  // Shadows outer x\\n  return x;\\n}\\n\\nInside function: "\${inner}"\\nOutside function: "\${x}"\\n\\n✅ Inner variable shadows outer\`;
  
  output.textContent = '✅ Variable shadowing!';
  console.log('Shadow:', { inner, outer: x });
});

console.log('🔍 Scope ready!');`,
  },

  {
    topic: "hoisting",
    description: "moves declarations to the top of their scope before execution. var and function declarations are hoisted, let/const are not.",
    html: `<div class="container">
  <h1>⬆️ Hoisting</h1>
  <div class="demo">
    <button id="functionBtn">Function Hoisting</button>
    <button id="varBtn">var Hoisting</button>
    <button id="letBtn">let/const (No Hoisting)</button>
    <button id="orderBtn">Declaration Order</button>
    <div class="result" id="result"></div>
  </div>
  <div class="output" id="output">Try hoisting examples!</div>
</div>`,
    css: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', sans-serif;
  background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.container {
  background: white;
  border-radius: 24px;
  padding: 3rem;
  max-width: 600px;
  width: 100%;
  box-shadow: 0 25px 70px rgba(0,0,0,0.3);
}

h1 {
  color: #fc8f6f;
  text-align: center;
  margin-bottom: 2rem;
}

.demo {
  background: #fff5f0;
  padding: 2rem;
  border-radius: 16px;
  margin-bottom: 2rem;
}

button {
  width: 100%;
  padding: 0.75rem;
  background: #fc8f6f;
  color: white;
  border: none;
  border-radius: 10px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s;
  margin-bottom: 0.75rem;
}

button:hover {
  background: #e67d5f;
  transform: translateY(-2px);
}

.result {
  background: #2d2d2d;
  color: #fc8f6f;
  padding: 1.5rem;
  border-radius: 12px;
  font-family: 'Courier New', monospace;
  min-height: 100px;
  white-space: pre-wrap;
  margin-top: 1rem;
}

.output {
  padding: 1.5rem;
  background: #0d1117;
  color: #F7DF1E;
  border-radius: 12px;
  font-family: 'Courier New', monospace;
  text-align: center;
}`,
    js: `const result = document.getElementById('result');
const output = document.getElementById('output');

// Hoisted function
function hoistedFunc() {
  return 'I was called before declaration!';
}

document.getElementById('functionBtn').addEventListener('click', () => {
  // This works because function declarations are hoisted
  const msg = hoistedFunc();
  
  result.textContent = \`// Called BEFORE declaration\\nconst msg = hoistedFunc();\\n\\nfunction hoistedFunc() {\\n  return 'I was called before declaration!';\\n}\\n\\nResult: "\${msg}"\\n\\n✅ Function declarations are HOISTED!\`;
  
  output.textContent = '✅ Function hoisting works!';
  console.log('Function hoisting:', msg);
});

document.getElementById('varBtn').addEventListener('click', () => {
  function testVar() {
    console.log('x before:', x); // undefined (hoisted but not initialized)
    var x = 10;
    console.log('x after:', x); // 10
    return x;
  }
  
  const value = testVar();
  
  result.textContent = \`function testVar() {\\n  console.log(x);  // undefined (hoisted)\\n  var x = 10;\\n  console.log(x);  // 10\\n  return x;\\n}\\n\\nResult: \${value}\\n\\n✅ var is hoisted but initialized as undefined\`;
  
  output.textContent = '✅ var hoisting!';
});

document.getElementById('letBtn').addEventListener('click', () => {
  result.textContent = \`// Temporal Dead Zone\\nfunction testLet() {\\n  // console.log(y);  // ❌ ReferenceError!\\n  let y = 20;\\n  console.log(y);  // 20\\n}\\n\\n✅ let/const are NOT hoisted\\n⚠️ Accessing before declaration = Error\\n\\nThis is called the "Temporal Dead Zone"\`;
  
  output.textContent = '⚠️ let/const not hoisted!';
  console.log('let/const hoisting explained');
});

document.getElementById('orderBtn').addEventListener('click', () => {
  result.textContent = \`// What JavaScript sees:\\n\\n// 1. Hoisting phase:\\nfunction myFunc() { ... }  // Hoisted\\nvar x;  // Hoisted (undefined)\\n// let y;  // NOT hoisted\\n\\n// 2. Execution phase:\\nx = 10;  // Assignment\\nlet y = 20;  // Declaration + Assignment\\n\\n✅ Declarations move up, assignments stay\`;
  
  output.textContent = '✅ Hoisting order explained!';
  console.log('Hoisting order');
});

console.log('⬆️ Hoisting ready!');`,
  },

  {
    topic: "closures",
    description: "occur when a function remembers variables from its outer scope even after the outer function has finished executing.",
    html: `<div class="container">
  <h1>🔒 Closures</h1>
  <div class="demo">
    <button id="basicBtn">Basic Closure</button>
    <button id="counterBtn">Counter Example</button>
    <button id="privateBtn">Private Variables</button>
    <button id="multipleBtn">Multiple Closures</button>
    <div class="result" id="result"></div>
  </div>
  <div class="output" id="output">Try closures!</div>
</div>`,
    css: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', sans-serif;
  background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.container {
  background: white;
  border-radius: 24px;
  padding: 3rem;
  max-width: 600px;
  width: 100%;
  box-shadow: 0 25px 70px rgba(0,0,0,0.3);
}

h1 {
  color: #667eea;
  text-align: center;
  margin-bottom: 2rem;
}

.demo {
  background: #f0f4ff;
  padding: 2rem;
  border-radius: 16px;
  margin-bottom: 2rem;
}

button {
  width: 100%;
  padding: 0.75rem;
  background: #667eea;
  color: white;
  border: none;
  border-radius: 10px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s;
  margin-bottom: 0.75rem;
}

button:hover {
  background: #5568d3;
  transform: translateY(-2px);
}

.result {
  background: #2d2d2d;
  color: #667eea;
  padding: 1.5rem;
  border-radius: 12px;
  font-family: 'Courier New', monospace;
  min-height: 100px;
  white-space: pre-wrap;
  margin-top: 1rem;
}

.output {
  padding: 1.5rem;
  background: #0d1117;
  color: #F7DF1E;
  border-radius: 12px;
  font-family: 'Courier New', monospace;
  text-align: center;
}`,
    js: `const result = document.getElementById('result');
const output = document.getElementById('output');

// Basic closure
function outer() {
  const message = 'Hello from outer!';
  
  function inner() {
    return message; // Accesses outer variable
  }
  
  return inner;
}

// Counter closure
function createCounter() {
  let count = 0;
  
  return {
    increment: () => ++count,
    decrement: () => --count,
    getCount: () => count
  };
}

document.getElementById('basicBtn').addEventListener('click', () => {
  const innerFunc = outer();
  const msg = innerFunc();
  
  result.textContent = \`function outer() {\\n  const message = 'Hello from outer!';\\n  \\n  function inner() {\\n    return message;  // Closure!\\n  }\\n  \\n  return inner;\\n}\\n\\nconst innerFunc = outer();\\nconst msg = innerFunc();\\n\\nResult: "\${msg}"\\n\\n✅ Inner function remembers outer variable\`;
  
  output.textContent = '✅ Basic closure!';
  console.log('Closure:', msg);
});

let counter;
document.getElementById('counterBtn').addEventListener('click', () => {
  if (!counter) {
    counter = createCounter();
  }
  
  counter.increment();
  counter.increment();
  const count = counter.getCount();
  
  result.textContent = \`function createCounter() {\\n  let count = 0;  // Private variable\\n  \\n  return {\\n    increment: () => ++count,\\n    getCount: () => count\\n  };\\n}\\n\\nconst counter = createCounter();\\ncounter.increment();\\ncounter.increment();\\n\\nCount: \${count}\\n\\n✅ Closure maintains state!\`;
  
  output.textContent = \`✅ Count: \${count}\`;
  console.log('Counter:', count);
});

document.getElementById('privateBtn').addEventListener('click', () => {
  function createPerson(name) {
    let age = 0; // Private
    
    return {
      getName: () => name,
      getAge: () => age,
      birthday: () => ++age
    };
  }
  
  const person = createPerson('Alice');
  person.birthday();
  person.birthday();
  
  result.textContent = \`function createPerson(name) {\\n  let age = 0;  // Private!\\n  \\n  return {\\n    getName: () => name,\\n    getAge: () => age,\\n    birthday: () => ++age\\n  };\\n}\\n\\nconst person = createPerson('Alice');\\nperson.birthday();\\nperson.birthday();\\n\\nName: \${person.getName()}\\nAge: \${person.getAge()}\\n\\n✅ Closures create private variables!\`;
  
  output.textContent = '✅ Private variables!';
  console.log('Person:', person.getName(), person.getAge());
});

document.getElementById('multipleBtn').addEventListener('click', () => {
  function multiplier(factor) {
    return (x) => x * factor;
  }
  
  const double = multiplier(2);
  const triple = multiplier(3);
  
  result.textContent = \`function multiplier(factor) {\\n  return (x) => x * factor;  // Closure\\n}\\n\\nconst double = multiplier(2);\\nconst triple = multiplier(3);\\n\\ndouble(5) = \${double(5)}\\ntriple(5) = \${triple(5)}\\n\\n✅ Each closure has its own scope!\`;
  
  output.textContent = '✅ Multiple closures!';
  console.log('Multipliers:', double(5), triple(5));
});

console.log('🔒 Closures ready!');`,
  },

  /* ══════════════════════════════════════════════
     BATCH 8: FUNCTIONS PART 3 (3 topics)
  ══════════════════════════════════════════════ */

  {
    topic: "iife",
    description: "(Immediately Invoked Function Expression) executes immediately after creation. Used for creating private scope and avoiding global pollution.",
    html: `<div class="container">
  <h1>⚡ IIFE</h1>
  <div class="demo">
    <button id="basicBtn">Basic IIFE</button>
    <button id="paramsBtn">IIFE with Parameters</button>
    <button id="returnBtn">IIFE with Return</button>
    <button id="moduleBtn">Module Pattern</button>
    <div class="result" id="result"></div>
  </div>
  <div class="output" id="output">Try IIFE patterns!</div>
</div>`,
    css: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.container {
  background: white;
  border-radius: 24px;
  padding: 3rem;
  max-width: 600px;
  width: 100%;
  box-shadow: 0 25px 70px rgba(0,0,0,0.3);
}

h1 {
  color: #667eea;
  text-align: center;
  margin-bottom: 2rem;
}

.demo {
  background: #f0f4ff;
  padding: 2rem;
  border-radius: 16px;
  margin-bottom: 2rem;
}

button {
  width: 100%;
  padding: 0.75rem;
  background: #667eea;
  color: white;
  border: none;
  border-radius: 10px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s;
  margin-bottom: 0.75rem;
}

button:hover {
  background: #5568d3;
  transform: translateY(-2px);
}

.result {
  background: #2d2d2d;
  color: #667eea;
  padding: 1.5rem;
  border-radius: 12px;
  font-family: 'Courier New', monospace;
  min-height: 100px;
  white-space: pre-wrap;
  margin-top: 1rem;
}

.output {
  padding: 1.5rem;
  background: #0d1117;
  color: #F7DF1E;
  border-radius: 12px;
  font-family: 'Courier New', monospace;
  text-align: center;
}`,
    js: `const result = document.getElementById('result');
const output = document.getElementById('output');

document.getElementById('basicBtn').addEventListener('click', () => {
  // Basic IIFE
  const msg = (function() {
    const privateVar = 'I am private!';
    return privateVar;
  })();
  
  result.textContent = \`// Basic IIFE\\n(function() {\\n  const privateVar = 'I am private!';\\n  console.log(privateVar);\\n})();  // Executes immediately!\\n\\nResult: "\${msg}"\\n\\n✅ Function runs immediately\\n✅ Variables stay private\`;
  
  output.textContent = '✅ IIFE executed!';
  console.log('Basic IIFE:', msg);
});

document.getElementById('paramsBtn').addEventListener('click', () => {
  // IIFE with parameters
  const greeting = (function(name, age) {
    return \`Hello, \${name}! You are \${age} years old.\`;
  })('Alice', 25);
  
  result.textContent = \`// IIFE with Parameters\\n(function(name, age) {\\n  return \\\`Hello, \\\${name}! You are \\\${age} years old.\\\`;\\n})('Alice', 25);\\n\\nResult: "\${greeting}"\\n\\n✅ Pass arguments to IIFE\`;
  
  output.textContent = '✅ IIFE with params!';
  console.log('IIFE with params:', greeting);
});

document.getElementById('returnBtn').addEventListener('click', () => {
  // IIFE with return value
  const calculator = (function() {
    return {
      add: (a, b) => a + b,
      subtract: (a, b) => a - b,
      multiply: (a, b) => a * b
    };
  })();
  
  const sum = calculator.add(5, 3);
  const product = calculator.multiply(4, 2);
  
  result.textContent = \`// IIFE Returning Object\\nconst calculator = (function() {\\n  return {\\n    add: (a, b) => a + b,\\n    multiply: (a, b) => a * b\\n  };\\n})();\\n\\ncalculator.add(5, 3) = \${sum}\\ncalculator.multiply(4, 2) = \${product}\\n\\n✅ IIFE returns reusable object\`;
  
  output.textContent = '✅ IIFE with return!';
  console.log('Calculator:', { sum, product });
});

document.getElementById('moduleBtn').addEventListener('click', () => {
  // Module pattern with IIFE
  const counter = (function() {
    let count = 0; // Private
    
    return {
      increment: () => ++count,
      decrement: () => --count,
      getCount: () => count
    };
  })();
  
  counter.increment();
  counter.increment();
  counter.increment();
  const currentCount = counter.getCount();
  
  result.textContent = \`// Module Pattern\\nconst counter = (function() {\\n  let count = 0;  // Private!\\n  \\n  return {\\n    increment: () => ++count,\\n    getCount: () => count\\n  };\\n})();\\n\\ncounter.increment();\\ncounter.increment();\\ncounter.increment();\\n\\nCount: \${currentCount}\\n\\n✅ IIFE creates private state\\n✅ Module pattern!\`;
  
  output.textContent = \`✅ Count: \${currentCount}\`;
  console.log('Module pattern:', currentCount);
});

console.log('⚡ IIFE ready!');`,
  },

  {
    topic: "callbacks",
    description: "are functions passed as arguments to other functions, executed later. Used for async operations, event handlers, and array methods.",
    html: `<div class="container">
  <h1>📞 Callbacks</h1>
  <div class="demo">
    <input type="text" id="nameInput" value="Alice" placeholder="Enter name">
    <button id="basicBtn">Basic Callback</button>
    <button id="asyncBtn">Async Callback</button>
    <button id="arrayBtn">Array Callbacks</button>
    <button id="multipleBtn">Multiple Callbacks</button>
    <div class="result" id="result"></div>
  </div>
  <div class="output" id="output">Try callbacks!</div>
</div>`,
    css: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', sans-serif;
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.container {
  background: white;
  border-radius: 24px;
  padding: 3rem;
  max-width: 600px;
  width: 100%;
  box-shadow: 0 25px 70px rgba(0,0,0,0.3);
}

h1 {
  color: #f5576c;
  text-align: center;
  margin-bottom: 2rem;
}

.demo {
  background: #fff5f7;
  padding: 2rem;
  border-radius: 16px;
  margin-bottom: 2rem;
}

input {
  width: 100%;
  padding: 1rem;
  border: 2px solid #f5576c;
  border-radius: 12px;
  font-size: 1.1rem;
  margin-bottom: 1rem;
  text-align: center;
  font-weight: 600;
}

button {
  width: 100%;
  padding: 0.75rem;
  background: #f5576c;
  color: white;
  border: none;
  border-radius: 10px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s;
  margin-bottom: 0.75rem;
}

button:hover {
  background: #e04858;
  transform: translateY(-2px);
}

.result {
  background: #2d2d2d;
  color: #f5576c;
  padding: 1.5rem;
  border-radius: 12px;
  font-family: 'Courier New', monospace;
  min-height: 100px;
  white-space: pre-wrap;
  margin-top: 1rem;
}

.output {
  padding: 1.5rem;
  background: #0d1117;
  color: #F7DF1E;
  border-radius: 12px;
  font-family: 'Courier New', monospace;
  text-align: center;
}`,
    js: `const nameInput = document.getElementById('nameInput');
const result = document.getElementById('result');
const output = document.getElementById('output');

// Function that takes a callback
function greet(name, callback) {
  const message = \`Hello, \${name}!\`;
  callback(message);
}

function processUser(name, successCallback, errorCallback) {
  if (name) {
    successCallback(\`User \${name} processed!\`);
  } else {
    errorCallback('No name provided!');
  }
}

document.getElementById('basicBtn').addEventListener('click', () => {
  const name = nameInput.value;
  let callbackResult = '';
  
  greet(name, (msg) => {
    callbackResult = msg;
  });
  
  result.textContent = \`function greet(name, callback) {\\n  const message = \\\`Hello, \\\${name}!\\\`;\\n  callback(message);  // Execute callback\\n}\\n\\ngreet("\${name}", (msg) => {\\n  console.log(msg);\\n});\\n\\nResult: "\${callbackResult}"\\n\\n✅ Callback function executed!\`;
  
  output.textContent = '✅ Callback called!';
  console.log('Basic callback:', callbackResult);
});

document.getElementById('asyncBtn').addEventListener('click', () => {
  const name = nameInput.value;
  
  result.textContent = \`// Async Callback\\nsetTimeout(() => {\\n  console.log('Executed after 2 seconds!');\\n}, 2000);\\n\\n⏳ Waiting 2 seconds...\\n\\n✅ Callbacks handle async operations\`;
  
  output.textContent = '⏳ Waiting...';
  
  setTimeout(() => {
    result.textContent = \`// Async Callback\\nsetTimeout(() => {\\n  console.log('Executed after 2 seconds!');\\n}, 2000);\\n\\n✅ Callback executed after 2 seconds!\\n\\nAsync callbacks are used for:\\n- Timers\\n- API calls\\n- File operations\\n- Event handlers\`;
    
    output.textContent = '✅ Async callback done!';
    console.log('Async callback executed');
  }, 2000);
});

document.getElementById('arrayBtn').addEventListener('click', () => {
  const numbers = [1, 2, 3, 4, 5];
  
  const doubled = numbers.map(n => n * 2);
  const evens = numbers.filter(n => n % 2 === 0);
  
  result.textContent = \`// Array Method Callbacks\\nconst numbers = [1, 2, 3, 4, 5];\\n\\nnumbers.map(n => n * 2)\\nResult: [\${doubled}]\\n\\nnumbers.filter(n => n % 2 === 0)\\nResult: [\${evens}]\\n\\n✅ Callbacks in array methods:\\n- map, filter, reduce\\n- forEach, find, some, every\`;
  
  output.textContent = '✅ Array callbacks!';
  console.log('Array callbacks:', { doubled, evens });
});

document.getElementById('multipleBtn').addEventListener('click', () => {
  const name = nameInput.value;
  let resultMsg = '';
  
  processUser(
    name,
    (successMsg) => {
      resultMsg = \`✅ Success: \${successMsg}\`;
    },
    (errorMsg) => {
      resultMsg = \`❌ Error: \${errorMsg}\`;
    }
  );
  
  result.textContent = \`function processUser(name, successCallback, errorCallback) {\\n  if (name) {\\n    successCallback(\\\`User \\\${name} processed!\\\`);\\n  } else {\\n    errorCallback('No name provided!');\\n  }\\n}\\n\\nprocessUser("\${name}", \\n  (msg) => console.log('Success:', msg),\\n  (err) => console.log('Error:', err)\\n);\\n\\n\${resultMsg}\\n\\n✅ Multiple callbacks for different scenarios\`;
  
  output.textContent = '✅ Multiple callbacks!';
  console.log('Multiple callbacks:', resultMsg);
});

console.log('📞 Callbacks ready!');`,
  },

  {
    topic: "higher-order-functions",
    description: "are functions that take functions as arguments or return functions. Enable functional programming patterns like map, filter, reduce.",
    html: `<div class="container">
  <h1>🎯 Higher-Order Functions</h1>
  <div class="demo">
    <input type="number" id="numInput" value="5" placeholder="Enter number">
    <button id="returnBtn">Return Function</button>
    <button id="acceptBtn">Accept Function</button>
    <button id="bothBtn">Both</button>
    <button id="compositionBtn">Function Composition</button>
    <div class="result" id="result"></div>
  </div>
  <div class="output" id="output">Try higher-order functions!</div>
</div>`,
    css: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', sans-serif;
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.container {
  background: white;
  border-radius: 24px;
  padding: 3rem;
  max-width: 600px;
  width: 100%;
  box-shadow: 0 25px 70px rgba(0,0,0,0.3);
}

h1 {
  color: #4facfe;
  text-align: center;
  margin-bottom: 2rem;
}

.demo {
  background: #f0f9ff;
  padding: 2rem;
  border-radius: 16px;
  margin-bottom: 2rem;
}

input {
  width: 100%;
  padding: 1rem;
  border: 2px solid #4facfe;
  border-radius: 12px;
  font-size: 1.1rem;
  margin-bottom: 1rem;
  text-align: center;
  font-weight: 600;
}

button {
  width: 100%;
  padding: 0.75rem;
  background: #4facfe;
  color: white;
  border: none;
  border-radius: 10px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s;
  margin-bottom: 0.75rem;
}

button:hover {
  background: #3d9ae6;
  transform: translateY(-2px);
}

.result {
  background: #2d2d2d;
  color: #4facfe;
  padding: 1.5rem;
  border-radius: 12px;
  font-family: 'Courier New', monospace;
  min-height: 100px;
  white-space: pre-wrap;
  margin-top: 1rem;
}

.output {
  padding: 1.5rem;
  background: #0d1117;
  color: #F7DF1E;
  border-radius: 12px;
  font-family: 'Courier New', monospace;
  text-align: center;
}`,
    js: `const numInput = document.getElementById('numInput');
const result = document.getElementById('result');
const output = document.getElementById('output');

// Returns a function
function multiplier(factor) {
  return (x) => x * factor;
}

// Accepts a function
function applyOperation(x, operation) {
  return operation(x);
}

// Both: accepts and returns functions
function createLogger(prefix) {
  return function(message) {
    return \`[\${prefix}] \${message}\`;
  };
}

document.getElementById('returnBtn').addEventListener('click', () => {
  const num = parseFloat(numInput.value);
  
  const double = multiplier(2);
  const triple = multiplier(3);
  
  const doubled = double(num);
  const tripled = triple(num);
  
  result.textContent = \`// Returns a Function\\nfunction multiplier(factor) {\\n  return (x) => x * factor;\\n}\\n\\nconst double = multiplier(2);\\nconst triple = multiplier(3);\\n\\ndouble(\${num}) = \${doubled}\\ntriple(\${num}) = \${tripled}\\n\\n✅ Higher-order function returns function\`;
  
  output.textContent = '✅ Function returned!';
  console.log('Multipliers:', { doubled, tripled });
});

document.getElementById('acceptBtn').addEventListener('click', () => {
  const num = parseFloat(numInput.value);
  
  const squared = applyOperation(num, x => x * x);
  const cubed = applyOperation(num, x => x * x * x);
  
  result.textContent = \`// Accepts a Function\\nfunction applyOperation(x, operation) {\\n  return operation(x);\\n}\\n\\napplyOperation(\${num}, x => x * x)\\nResult: \${squared}\\n\\napplyOperation(\${num}, x => x * x * x)\\nResult: \${cubed}\\n\\n✅ Higher-order function accepts function\`;
  
  output.textContent = '✅ Function accepted!';
  console.log('Operations:', { squared, cubed });
});

document.getElementById('bothBtn').addEventListener('click', () => {
  const infoLogger = createLogger('INFO');
  const errorLogger = createLogger('ERROR');
  
  const info = infoLogger('Application started');
  const error = errorLogger('Something went wrong');
  
  result.textContent = \`// Accepts AND Returns Function\\nfunction createLogger(prefix) {\\n  return function(message) {\\n    return \\\`[\\\${prefix}] \\\${message}\\\`;\\n  };\\n}\\n\\nconst infoLogger = createLogger('INFO');\\nconst errorLogger = createLogger('ERROR');\\n\\ninfoLogger('Application started')\\n"\${info}"\\n\\nerrorLogger('Something went wrong')\\n"\${error}"\\n\\n✅ Both accept and return functions\`;
  
  output.textContent = '✅ Logger created!';
  console.log('Loggers:', { info, error });
});

document.getElementById('compositionBtn').addEventListener('click', () => {
  const num = parseFloat(numInput.value);
  
  const add5 = x => x + 5;
  const double = x => x * 2;
  const square = x => x * x;
  
  // Compose functions
  const compose = (...fns) => x => fns.reduceRight((acc, fn) => fn(acc), x);
  
  const addThenDouble = compose(double, add5);
  const result1 = addThenDouble(num);
  
  const addThenDoubleSquare = compose(square, double, add5);
  const result2 = addThenDoubleSquare(num);
  
  result.textContent = \`// Function Composition\\nconst add5 = x => x + 5;\\nconst double = x => x * 2;\\nconst square = x => x * x;\\n\\nconst compose = (...fns) => x => \\n  fns.reduceRight((acc, fn) => fn(acc), x);\\n\\ncompose(double, add5)(\${num})\\n= double(add5(\${num}))\\n= double(\${num + 5})\\n= \${result1}\\n\\ncompose(square, double, add5)(\${num})\\n= \${result2}\\n\\n✅ Compose multiple functions!\`;
  
  output.textContent = '✅ Function composition!';
  console.log('Composition:', { result1, result2 });
});

console.log('🎯 Higher-order functions ready!');`,
  },

  
  /* ══════════════════════════════════════════════
     BATCH 9: ARRAYS PART 1 (5 topics)
  ══════════════════════════════════════════════ */

  {
    topic: "create-arrays",
    description: "can be created using array literals [], Array() constructor, Array.of(), or Array.from(). Literals are most common.",
    html: `<div class="container">
  <h1>📦 Create Arrays</h1>
  <div class="demo">
    <button id="literalBtn">Array Literal []</button>
    <button id="constructorBtn">Array() Constructor</button>
    <button id="ofBtn">Array.of()</button>
    <button id="fromBtn">Array.from()</button>
    <div class="result" id="result"></div>
  </div>
  <div class="output" id="output">Try different array creation methods!</div>
</div>`,
    css: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.container {
  background: white;
  border-radius: 24px;
  padding: 3rem;
  max-width: 600px;
  width: 100%;
  box-shadow: 0 25px 70px rgba(0,0,0,0.3);
}

h1 {
  color: #667eea;
  text-align: center;
  margin-bottom: 2rem;
}

.demo {
  background: #f0f4ff;
  padding: 2rem;
  border-radius: 16px;
  margin-bottom: 2rem;
}

button {
  width: 100%;
  padding: 0.75rem;
  background: #667eea;
  color: white;
  border: none;
  border-radius: 10px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s;
  margin-bottom: 0.75rem;
}

button:hover {
  background: #5568d3;
  transform: translateY(-2px);
}

.result {
  background: #2d2d2d;
  color: #667eea;
  padding: 1.5rem;
  border-radius: 12px;
  font-family: 'Courier New', monospace;
  min-height: 100px;
  white-space: pre-wrap;
  margin-top: 1rem;
}

.output {
  padding: 1.5rem;
  background: #0d1117;
  color: #F7DF1E;
  border-radius: 12px;
  font-family: 'Courier New', monospace;
  text-align: center;
}`,
    js: `const result = document.getElementById('result');
const output = document.getElementById('output');

document.getElementById('literalBtn').addEventListener('click', () => {
  const arr1 = [1, 2, 3, 4, 5];
  const arr2 = ['apple', 'banana', 'cherry'];
  const arr3 = [1, 'hello', true, null, { name: 'Alice' }];
  
  result.textContent = \`// Array Literal (most common)\\nconst arr1 = [1, 2, 3, 4, 5];\\nconst arr2 = ['apple', 'banana', 'cherry'];\\nconst arr3 = [1, 'hello', true, null, { name: 'Alice' }];\\n\\narr1: [\${arr1}]\\narr2: [\${arr2}]\\narr3: [\${arr3.map(v => typeof v === 'object' ? JSON.stringify(v) : v)}]\\n\\n✅ Array literals are simple and fast\`;
  
  output.textContent = '✅ Array literal created!';
  console.log('Literal arrays:', { arr1, arr2, arr3 });
});

document.getElementById('constructorBtn').addEventListener('click', () => {
  const arr1 = new Array(5);
  const arr2 = new Array(1, 2, 3);
  const arr3 = Array(3);
  
  result.textContent = \`// Array Constructor\\nconst arr1 = new Array(5);  // Empty array with length 5\\nconst arr2 = new Array(1, 2, 3);  // [1, 2, 3]\\nconst arr3 = Array(3);  // Empty array with length 3\\n\\narr1: [\${arr1}] (length: \${arr1.length})\\narr2: [\${arr2}]\\narr3: [\${arr3}] (length: \${arr3.length})\\n\\n⚠️ Single number creates empty array with that length\`;
  
  output.textContent = '✅ Constructor arrays created!';
  console.log('Constructor arrays:', { arr1, arr2, arr3 });
});

document.getElementById('ofBtn').addEventListener('click', () => {
  const arr1 = Array.of(5);
  const arr2 = Array.of(1, 2, 3, 4, 5);
  const arr3 = Array.of('hello', 'world');
  
  result.textContent = \`// Array.of() - creates array from arguments\\nconst arr1 = Array.of(5);  // [5]\\nconst arr2 = Array.of(1, 2, 3, 4, 5);\\nconst arr3 = Array.of('hello', 'world');\\n\\narr1: [\${arr1}]\\narr2: [\${arr2}]\\narr3: [\${arr3}]\\n\\n✅ Array.of() treats single number as element\`;
  
  output.textContent = '✅ Array.of() created!';
  console.log('Array.of():', { arr1, arr2, arr3 });
});

document.getElementById('fromBtn').addEventListener('click', () => {
  const arr1 = Array.from('hello');
  const arr2 = Array.from([1, 2, 3], x => x * 2);
  const arr3 = Array.from({ length: 5 }, (_, i) => i + 1);
  
  result.textContent = \`// Array.from() - creates array from iterable\\nconst arr1 = Array.from('hello');\\nconst arr2 = Array.from([1, 2, 3], x => x * 2);\\nconst arr3 = Array.from({ length: 5 }, (_, i) => i + 1);\\n\\narr1: [\${arr1}]\\narr2: [\${arr2}]\\narr3: [\${arr3}]\\n\\n✅ Array.from() can map while creating\`;
  
  output.textContent = '✅ Array.from() created!';
  console.log('Array.from():', { arr1, arr2, arr3 });
});

console.log('📦 Create arrays ready!');`,
  },

  {
    topic: "array-access",
    description: "allows reading elements by index using bracket notation. Arrays are zero-indexed. Use .length property to get array size.",
    html: `<div class="container">
  <h1>🔍 Array Access</h1>
  <div class="demo">
    <div class="array-display" id="arrayDisplay"></div>
    <input type="number" id="indexInput" value="0" placeholder="Enter index">
    <button id="accessBtn">Access Element</button>
    <button id="lengthBtn">Get Length</button>
    <button id="firstLastBtn">First & Last</button>
    <button id="negativeBtn">Negative Index</button>
    <div class="result" id="result"></div>
  </div>
  <div class="output" id="output">Try array access!</div>
</div>`,
    css: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', sans-serif;
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.container {
  background: white;
  border-radius: 24px;
  padding: 3rem;
  max-width: 600px;
  width: 100%;
  box-shadow: 0 25px 70px rgba(0,0,0,0.3);
}

h1 {
  color: #f5576c;
  text-align: center;
  margin-bottom: 2rem;
}

.demo {
  background: #fff5f7;
  padding: 2rem;
  border-radius: 16px;
  margin-bottom: 2rem;
}

.array-display {
  background: #2d2d2d;
  color: #f5576c;
  padding: 1rem;
  border-radius: 10px;
  font-family: 'Courier New', monospace;
  text-align: center;
  margin-bottom: 1rem;
  font-size: 1.1rem;
}

input {
  width: 100%;
  padding: 1rem;
  border: 2px solid #f5576c;
  border-radius: 12px;
  font-size: 1.1rem;
  margin-bottom: 1rem;
  text-align: center;
  font-weight: 600;
}

button {
  width: 100%;
  padding: 0.75rem;
  background: #f5576c;
  color: white;
  border: none;
  border-radius: 10px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s;
  margin-bottom: 0.75rem;
}

button:hover {
  background: #e04858;
  transform: translateY(-2px);
}

.result {
  background: #2d2d2d;
  color: #f5576c;
  padding: 1.5rem;
  border-radius: 12px;
  font-family: 'Courier New', monospace;
  min-height: 100px;
  white-space: pre-wrap;
  margin-top: 1rem;
}

.output {
  padding: 1.5rem;
  background: #0d1117;
  color: #F7DF1E;
  border-radius: 12px;
  font-family: 'Courier New', monospace;
  text-align: center;
}`,
    js: `const fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
const arrayDisplay = document.getElementById('arrayDisplay');
const indexInput = document.getElementById('indexInput');
const result = document.getElementById('result');
const output = document.getElementById('output');

arrayDisplay.textContent = \`fruits = [\${fruits.map(f => '"' + f + '"').join(', ')}]\`;

document.getElementById('accessBtn').addEventListener('click', () => {
  const index = parseInt(indexInput.value);
  const element = fruits[index];
  
  result.textContent = \`// Access by Index\\nconst fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];\\n\\nfruits[\${index}]\\n\\nResult: \${element !== undefined ? '"' + element + '"' : 'undefined'}\\n\\n\${element !== undefined ? '✅ Element found!' : '⚠️ Index out of bounds'}\`;
  
  output.textContent = element !== undefined ? \`✅ fruits[\${index}] = "\${element}"\` : '⚠️ undefined';
  console.log(\`fruits[\${index}]:\`, element);
});

document.getElementById('lengthBtn').addEventListener('click', () => {
  const len = fruits.length;
  
  result.textContent = \`// Array Length\\nconst fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];\\n\\nfruits.length\\n\\nResult: \${len}\\n\\n✅ Arrays are zero-indexed\\n✅ Valid indices: 0 to \${len - 1}\`;
  
  output.textContent = \`✅ Length: \${len}\`;
  console.log('Length:', len);
});

document.getElementById('firstLastBtn').addEventListener('click', () => {
  const first = fruits[0];
  const last = fruits[fruits.length - 1];
  
  result.textContent = \`// First and Last Elements\\nconst first = fruits[0];\\nconst last = fruits[fruits.length - 1];\\n\\nFirst: "\${first}"\\nLast: "\${last}"\\n\\n✅ First element is always at index 0\\n✅ Last element is at length - 1\`;
  
  output.textContent = \`✅ First: "\${first}", Last: "\${last}"\`;
  console.log('First & Last:', { first, last });
});

document.getElementById('negativeBtn').addEventListener('click', () => {
  const lastWithAt = fruits.at(-1);
  const secondLastWithAt = fruits.at(-2);
  
  result.textContent = \`// Negative Indices (with .at())\\nconst lastWithAt = fruits.at(-1);\\nconst secondLastWithAt = fruits.at(-2);\\n\\nfruits.at(-1): "\${lastWithAt}"\\nfruits.at(-2): "\${secondLastWithAt}"\\n\\n✅ .at() method supports negative indices\\n✅ -1 is last, -2 is second-to-last, etc.\`;
  
  output.textContent = '✅ Negative indices work with .at()!';
  console.log('Negative indices:', { lastWithAt, secondLastWithAt });
});

console.log('🔍 Array access ready!');`,
  },

  
  /* ══════════════════════════════════════════════
     BATCH 10: ARRAYS PART 2 (5 topics)
  ══════════════════════════════════════════════ */

  {
    topic: "slice",
    description: "extracts a portion of an array as a new array without modifying the original. Takes start and end indices.",
    html: `<div class="container">
  <h1>✂️ Array slice()</h1>
  <div class="demo">
    <div class="array-display" id="arrayDisplay"></div>
    <div class="input-group">
      <input type="number" id="startInput" value="1" placeholder="Start index">
      <input type="number" id="endInput" value="4" placeholder="End index">
    </div>
    <button id="sliceBtn">Slice Array</button>
    <button id="negativeBtn">Negative Indices</button>
    <button id="copyBtn">Copy Entire Array</button>
    <div class="result" id="result"></div>
  </div>
  <div class="output" id="output">Try slice method!</div>
</div>`,
    css: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', sans-serif;
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.container {
  background: white;
  border-radius: 24px;
  padding: 3rem;
  max-width: 600px;
  width: 100%;
  box-shadow: 0 25px 70px rgba(0,0,0,0.3);
}

h1 {
  color: #4facfe;
  text-align: center;
  margin-bottom: 2rem;
}

.demo {
  background: #f0f9ff;
  padding: 2rem;
  border-radius: 16px;
  margin-bottom: 2rem;
}

.array-display {
  background: #2d2d2d;
  color: #4facfe;
  padding: 1rem;
  border-radius: 10px;
  font-family: 'Courier New', monospace;
  text-align: center;
  margin-bottom: 1rem;
  font-size: 1.1rem;
}

.input-group {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 1rem;
}

input {
  padding: 1rem;
  border: 2px solid #4facfe;
  border-radius: 12px;
  font-size: 1.1rem;
  text-align: center;
  font-weight: 600;
}

button {
  width: 100%;
  padding: 0.75rem;
  background: #4facfe;
  color: white;
  border: none;
  border-radius: 10px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s;
  margin-bottom: 0.75rem;
}

button:hover {
  background: #3d9ae6;
  transform: translateY(-2px);
}

.result {
  background: #2d2d2d;
  color: #4facfe;
  padding: 1.5rem;
  border-radius: 12px;
  font-family: 'Courier New', monospace;
  min-height: 100px;
  white-space: pre-wrap;
  margin-top: 1rem;
}

.output {
  padding: 1.5rem;
  background: #0d1117;
  color: #F7DF1E;
  border-radius: 12px;
  font-family: 'Courier New', monospace;
  text-align: center;
}`,
    js: `const fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry', 'fig'];
const arrayDisplay = document.getElementById('arrayDisplay');
const startInput = document.getElementById('startInput');
const endInput = document.getElementById('endInput');
const result = document.getElementById('result');
const output = document.getElementById('output');

arrayDisplay.textContent = \`fruits = [\${fruits.map(f => '"' + f + '"').join(', ')}]\`;

document.getElementById('sliceBtn').addEventListener('click', () => {
  const start = parseInt(startInput.value);
  const end = parseInt(endInput.value);
  const sliced = fruits.slice(start, end);
  
  result.textContent = \`// slice(start, end)\\nconst fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry', 'fig'];\\n\\nfruits.slice(\${start}, \${end})\\n\\nResult: [\${sliced.map(f => '"' + f + '"').join(', ')}]\\n\\nOriginal: [\${fruits.map(f => '"' + f + '"').join(', ')}]\\n\\n✅ Original array unchanged\\n✅ Returns new array from index \${start} to \${end - 1}\`;
  
  output.textContent = \`✅ Sliced: [\${sliced.join(', ')}]\`;
  console.log('Sliced:', sliced);
});

document.getElementById('negativeBtn').addEventListener('click', () => {
  const sliced = fruits.slice(-3, -1);
  
  result.textContent = \`// Negative Indices\\nfruits.slice(-3, -1)\\n\\nResult: [\${sliced.map(f => '"' + f + '"').join(', ')}]\\n\\n✅ -3 means 3rd from end\\n✅ -1 means last element (not included)\\n✅ Gets elements at indices -3 and -2\`;
  
  output.textContent = \`✅ Last 3 to 1: [\${sliced.join(', ')}]\`;
  console.log('Negative slice:', sliced);
});

document.getElementById('copyBtn').addEventListener('click', () => {
  const copy = fruits.slice();
  
  result.textContent = \`// Copy Entire Array\\nconst copy = fruits.slice();\\n\\nOriginal: [\${fruits.map(f => '"' + f + '"').join(', ')}]\\n\\nCopy: [\${copy.map(f => '"' + f + '"').join(', ')}]\\n\\n✅ slice() with no arguments copies entire array\\n✅ Creates shallow copy\`;
  
  output.textContent = '✅ Array copied!';
  console.log('Copy:', copy);
});

console.log('✂️ slice() ready!');`,
  },

  {
    topic: "forEach",
    description: "iterates over every element with a callback function. Does not return a new array. Used for side effects.",
    html: `<div class="container">
  <h1>🔄 Array forEach()</h1>
  <div class="demo">
    <div class="array-display" id="arrayDisplay"></div>
    <button id="basicBtn">Basic forEach</button>
    <button id="indexBtn">With Index</button>
    <button id="modifyBtn">Modify Elements</button>
    <button id="breakBtn">Cannot Break</button>
    <div class="result" id="result"></div>
  </div>
  <div class="output" id="output">Try forEach method!</div>
</div>`,
    css: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', sans-serif;
  background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.container {
  background: white;
  border-radius: 24px;
  padding: 3rem;
  max-width: 600px;
  width: 100%;
  box-shadow: 0 25px 70px rgba(0,0,0,0.3);
}

h1 {
  color: #fc8f6f;
  text-align: center;
  margin-bottom: 2rem;
}

.demo {
  background: #fff5f0;
  padding: 2rem;
  border-radius: 16px;
  margin-bottom: 2rem;
}

.array-display {
  background: #2d2d2d;
  color: #fc8f6f;
  padding: 1rem;
  border-radius: 10px;
  font-family: 'Courier New', monospace;
  text-align: center;
  margin-bottom: 1rem;
  font-size: 1.1rem;
}

button {
  width: 100%;
  padding: 0.75rem;
  background: #fc8f6f;
  color: white;
  border: none;
  border-radius: 10px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s;
  margin-bottom: 0.75rem;
}

button:hover {
  background: #e67d5f;
  transform: translateY(-2px);
}

.result {
  background: #2d2d2d;
  color: #fc8f6f;
  padding: 1.5rem;
  border-radius: 12px;
  font-family: 'Courier New', monospace;
  min-height: 100px;
  white-space: pre-wrap;
  margin-top: 1rem;
}

.output {
  padding: 1.5rem;
  background: #0d1117;
  color: #F7DF1E;
  border-radius: 12px;
  font-family: 'Courier New', monospace;
  text-align: center;
}`,
    js: `const numbers = [1, 2, 3, 4, 5];
const arrayDisplay = document.getElementById('arrayDisplay');
const result = document.getElementById('result');
const output = document.getElementById('output');

arrayDisplay.textContent = \`numbers = [\${numbers.join(', ')}]\`;

document.getElementById('basicBtn').addEventListener('click', () => {
  let iterations = '';
  
  numbers.forEach(num => {
    iterations += \`Element: \${num}\\n\`;
    console.log('forEach element:', num);
  });
  
  result.textContent = \`// Basic forEach\\nnumbers.forEach(num => {\\n  console.log(num);\\n});\\n\\nIterations:\\n\${iterations}\\n✅ Executes callback for each element\\n✅ Returns undefined (no return value)\`;
  
  output.textContent = '✅ forEach completed!';
});

document.getElementById('indexBtn').addEventListener('click', () => {
  let iterations = '';
  
  numbers.forEach((num, index) => {
    iterations += \`Index \${index}: \${num}\\n\`;
    console.log(\`[\${index}]:\`, num);
  });
  
  result.textContent = \`// forEach with Index\\nnumbers.forEach((num, index) => {\\n  console.log(\\\`[\\\${index}]: \\\${num}\\\`);\\n});\\n\\nIterations:\\n\${iterations}\\n✅ Callback receives (element, index, array)\`;
  
  output.textContent = '✅ forEach with index!';
});

document.getElementById('modifyBtn').addEventListener('click', () => {
  const fruits = ['apple', 'banana', 'cherry'];
  let modified = '';
  
  fruits.forEach((fruit, index, arr) => {
    arr[index] = fruit.toUpperCase();
    modified += \`\${index}: \${arr[index]}\\n\`;
  });
  
  result.textContent = \`// Modify Original Array\\nconst fruits = ['apple', 'banana', 'cherry'];\\n\\nfruits.forEach((fruit, index, arr) => {\\n  arr[index] = fruit.toUpperCase();\\n});\\n\\nModified:\\n\${modified}\\nResult: [\${fruits.map(f => '"' + f + '"').join(', ')}]\\n\\n✅ Can modify original array\`;
  
  output.textContent = '✅ Array modified!';
  console.log('Modified:', fruits);
});

document.getElementById('breakBtn').addEventListener('click', () => {
  let iterations = '';
  
  numbers.forEach(num => {
    if (num === 3) {
      iterations += \`\${num} - tried to break, but can't!\\n\`;
      return; // Only skips this iteration
    }
    iterations += \`\${num}\\n\`;
  });
  
  result.textContent = \`// Cannot Break forEach\\nnumbers.forEach(num => {\\n  if (num === 3) {\\n    return;  // Only skips this iteration\\n  }\\n  console.log(num);\\n});\\n\\nIterations:\\n\${iterations}\\n⚠️ return only skips current iteration\\n⚠️ Cannot break out of forEach\\n✅ Use for...of if you need to break\`;
  
  output.textContent = '⚠️ forEach cannot break!';
});

console.log('🔄 forEach() ready!');`,
  },

  {
    topic: "map",
    description: "transforms each element using a callback and returns a new array. Original array remains unchanged.",
    html: `<div class="container">
  <h1>🗺️ Array map()</h1>
  <div class="demo">
    <div class="array-display" id="arrayDisplay"></div>
    <button id="doubleBtn">Double Numbers</button>
    <button id="upperBtn">Uppercase Strings</button>
    <button id="objectBtn">Extract Properties</button>
    <button id="chainBtn">Chain Methods</button>
    <div class="result" id="result"></div>
  </div>
  <div class="output" id="output">Try map method!</div>
</div>`,
    css: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', sans-serif;
  background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.container {
  background: white;
  border-radius: 24px;
  padding: 3rem;
  max-width: 600px;
  width: 100%;
  box-shadow: 0 25px 70px rgba(0,0,0,0.3);
}

h1 {
  color: #667eea;
  text-align: center;
  margin-bottom: 2rem;
}

.demo {
  background: #f0f4ff;
  padding: 2rem;
  border-radius: 16px;
  margin-bottom: 2rem;
}

.array-display {
  background: #2d2d2d;
  color: #667eea;
  padding: 1rem;
  border-radius: 10px;
  font-family: 'Courier New', monospace;
  text-align: center;
  margin-bottom: 1rem;
  font-size: 1.1rem;
}

button {
  width: 100%;
  padding: 0.75rem;
  background: #667eea;
  color: white;
  border: none;
  border-radius: 10px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s;
  margin-bottom: 0.75rem;
}

button:hover {
  background: #5568d3;
  transform: translateY(-2px);
}

.result {
  background: #2d2d2d;
  color: #667eea;
  padding: 1.5rem;
  border-radius: 12px;
  font-family: 'Courier New', monospace;
  min-height: 100px;
  white-space: pre-wrap;
  margin-top: 1rem;
}

.output {
  padding: 1.5rem;
  background: #0d1117;
  color: #F7DF1E;
  border-radius: 12px;
  font-family: 'Courier New', monospace;
  text-align: center;
}`,
    js: `const numbers = [1, 2, 3, 4, 5];
const arrayDisplay = document.getElementById('arrayDisplay');
const result = document.getElementById('result');
const output = document.getElementById('output');

arrayDisplay.textContent = \`numbers = [\${numbers.join(', ')}]\`;

document.getElementById('doubleBtn').addEventListener('click', () => {
  const doubled = numbers.map(num => num * 2);
  
  result.textContent = \`// Transform Numbers\\nconst doubled = numbers.map(num => num * 2);\\n\\nOriginal: [\${numbers.join(', ')}]\\nDoubled: [\${doubled.join(', ')}]\\n\\n✅ Returns new array\\n✅ Original unchanged\\n✅ Same length as original\`;
  
  output.textContent = \`✅ Doubled: [\${doubled.join(', ')}]\`;
  console.log('Doubled:', doubled);
});

document.getElementById('upperBtn').addEventListener('click', () => {
  const fruits = ['apple', 'banana', 'cherry'];
  const upper = fruits.map(fruit => fruit.toUpperCase());
  
  result.textContent = \`// Transform Strings\\nconst fruits = ['apple', 'banana', 'cherry'];\\nconst upper = fruits.map(fruit => fruit.toUpperCase());\\n\\nOriginal: [\${fruits.map(f => '"' + f + '"').join(', ')}]\\nUppercase: [\${upper.map(f => '"' + f + '"').join(', ')}]\\n\\n✅ Transform each element\`;
  
  output.textContent = \`✅ Uppercase: [\${upper.join(', ')}]\`;
  console.log('Uppercase:', upper);
});

document.getElementById('objectBtn').addEventListener('click', () => {
  const users = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 }
  ];
  
  const names = users.map(user => user.name);
  const ages = users.map(user => user.age);
  
  result.textContent = \`// Extract Properties\\nconst users = [\\n  { name: 'Alice', age: 25 },\\n  { name: 'Bob', age: 30 },\\n  { name: 'Charlie', age: 35 }\\n];\\n\\nconst names = users.map(user => user.name);\\nconst ages = users.map(user => user.age);\\n\\nNames: [\${names.map(n => '"' + n + '"').join(', ')}]\\nAges: [\${ages.join(', ')}]\\n\\n✅ Extract specific properties\`;
  
  output.textContent = '✅ Properties extracted!';
  console.log('Names:', names, 'Ages:', ages);
});

document.getElementById('chainBtn').addEventListener('click', () => {
  const result_val = numbers
    .map(num => num * 2)
    .map(num => num + 1)
    .map(num => num * num);
  
  result.textContent = \`// Chain map() Calls\\nconst result = numbers\\n  .map(num => num * 2)      // [2, 4, 6, 8, 10]\\n  .map(num => num + 1)      // [3, 5, 7, 9, 11]\\n  .map(num => num * num);   // [9, 25, 49, 81, 121]\\n\\nOriginal: [\${numbers.join(', ')}]\\nResult: [\${result_val.join(', ')}]\\n\\n✅ Chain multiple transformations\`;
  
  output.textContent = \`✅ Chained: [\${result_val.join(', ')}]\`;
  console.log('Chained:', result_val);
});

console.log('🗺️ map() ready!');`,
  },

  {
    topic: "filter",
    description: "creates a new array with elements that pass a test function. Returns subset of original array.",
    html: `<div class="container">
  <h1>🔍 Array filter()</h1>
  <div class="demo">
    <div class="array-display" id="arrayDisplay"></div>
    <button id="evenBtn">Filter Even Numbers</button>
    <button id="greaterBtn">Greater Than 5</button>
    <button id="stringBtn">Filter by Length</button>
    <button id="combineBtn">Combine with map()</button>
    <div class="result" id="result"></div>
  </div>
  <div class="output" id="output">Try filter method!</div>
</div>`,
    css: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.container {
  background: white;
  border-radius: 24px;
  padding: 3rem;
  max-width: 600px;
  width: 100%;
  box-shadow: 0 25px 70px rgba(0,0,0,0.3);
}

h1 {
  color: #667eea;
  text-align: center;
  margin-bottom: 2rem;
}

.demo {
  background: #f0f4ff;
  padding: 2rem;
  border-radius: 16px;
  margin-bottom: 2rem;
}

.array-display {
  background: #2d2d2d;
  color: #667eea;
  padding: 1rem;
  border-radius: 10px;
  font-family: 'Courier New', monospace;
  text-align: center;
  margin-bottom: 1rem;
  font-size: 1.1rem;
}

button {
  width: 100%;
  padding: 0.75rem;
  background: #667eea;
  color: white;
  border: none;
  border-radius: 10px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s;
  margin-bottom: 0.75rem;
}

button:hover {
  background: #5568d3;
  transform: translateY(-2px);
}

.result {
  background: #2d2d2d;
  color: #667eea;
  padding: 1.5rem;
  border-radius: 12px;
  font-family: 'Courier New', monospace;
  min-height: 100px;
  white-space: pre-wrap;
  margin-top: 1rem;
}

.output {
  padding: 1.5rem;
  background: #0d1117;
  color: #F7DF1E;
  border-radius: 12px;
  font-family: 'Courier New', monospace;
  text-align: center;
}`,
    js: `const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arrayDisplay = document.getElementById('arrayDisplay');
const result = document.getElementById('result');
const output = document.getElementById('output');

arrayDisplay.textContent = \`numbers = [\${numbers.join(', ')}]\`;

document.getElementById('evenBtn').addEventListener('click', () => {
  const evens = numbers.filter(num => num % 2 === 0);
  
  result.textContent = \`// Filter Even Numbers\\nconst evens = numbers.filter(num => num % 2 === 0);\\n\\nOriginal: [\${numbers.join(', ')}]\\nEvens: [\${evens.join(', ')}]\\n\\n✅ Returns new array\\n✅ Only elements that pass test\\n✅ Original unchanged\`;
  
  output.textContent = \`✅ Evens: [\${evens.join(', ')}]\`;
  console.log('Evens:', evens);
});

document.getElementById('greaterBtn').addEventListener('click', () => {
  const greater = numbers.filter(num => num > 5);
  
  result.textContent = \`// Filter by Condition\\nconst greater = numbers.filter(num => num > 5);\\n\\nOriginal: [\${numbers.join(', ')}]\\nGreater than 5: [\${greater.join(', ')}]\\n\\n✅ Test function returns true/false\\n✅ Keeps elements where test is true\`;
  
  output.textContent = \`✅ Greater: [\${greater.join(', ')}]\`;
  console.log('Greater than 5:', greater);
});

document.getElementById('stringBtn').addEventListener('click', () => {
  const fruits = ['apple', 'banana', 'kiwi', 'cherry', 'date'];
  const long = fruits.filter(fruit => fruit.length > 5);
  
  result.textContent = \`// Filter Strings by Length\\nconst fruits = ['apple', 'banana', 'kiwi', 'cherry', 'date'];\\nconst long = fruits.filter(fruit => fruit.length > 5);\\n\\nOriginal: [\${fruits.map(f => '"' + f + '"').join(', ')}]\\nLong names: [\${long.map(f => '"' + f + '"').join(', ')}]\\n\\n✅ Filter by any condition\`;
  
  output.textContent = \`✅ Long: [\${long.join(', ')}]\`;
  console.log('Long names:', long);
});

document.getElementById('combineBtn').addEventListener('click', () => {
  const result_val = numbers
    .filter(num => num % 2 === 0)
    .map(num => num * 2);
  
  result.textContent = \`// Combine filter() and map()\\nconst result = numbers\\n  .filter(num => num % 2 === 0)  // [2, 4, 6, 8, 10]\\n  .map(num => num * 2);           // [4, 8, 12, 16, 20]\\n\\nOriginal: [\${numbers.join(', ')}]\\nFiltered & Doubled: [\${result_val.join(', ')}]\\n\\n✅ Chain filter and map\\n✅ Filter first, then transform\`;
  
  output.textContent = \`✅ Result: [\${result_val.join(', ')}]\`;
  console.log('Filtered & mapped:', result_val);
});

console.log('🔍 filter() ready!');`,
  },

  {
    topic: "reduce",
    description: "accumulates array values into a single output using a reducer function. Takes accumulator and current value.",
    html: `<div class="container">
  <h1>📊 Array reduce()</h1>
  <div class="demo">
    <div class="array-display" id="arrayDisplay"></div>
    <button id="sumBtn">Sum All Numbers</button>
    <button id="productBtn">Product</button>
    <button id="maxBtn">Find Maximum</button>
    <button id="objectBtn">Build Object</button>
    <div class="result" id="result"></div>
  </div>
  <div class="output" id="output">Try reduce method!</div>
</div>`,
    css: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', sans-serif;
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.container {
  background: white;
  border-radius: 24px;
  padding: 3rem;
  max-width: 600px;
  width: 100%;
  box-shadow: 0 25px 70px rgba(0,0,0,0.3);
}

h1 {
  color: #f5576c;
  text-align: center;
  margin-bottom: 2rem;
}

.demo {
  background: #fff5f7;
  padding: 2rem;
  border-radius: 16px;
  margin-bottom: 2rem;
}

.array-display {
  background: #2d2d2d;
  color: #f5576c;
  padding: 1rem;
  border-radius: 10px;
  font-family: 'Courier New', monospace;
  text-align: center;
  margin-bottom: 1rem;
  font-size: 1.1rem;
}

button {
  width: 100%;
  padding: 0.75rem;
  background: #f5576c;
  color: white;
  border: none;
  border-radius: 10px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s;
  margin-bottom: 0.75rem;
}

button:hover {
  background: #e04858;
  transform: translateY(-2px);
}

.result {
  background: #2d2d2d;
  color: #f5576c;
  padding: 1.5rem;
  border-radius: 12px;
  font-family: 'Courier New', monospace;
  min-height: 100px;
  white-space: pre-wrap;
  margin-top: 1rem;
}

.output {
  padding: 1.5rem;
  background: #0d1117;
  color: #F7DF1E;
  border-radius: 12px;
  font-family: 'Courier New', monospace;
  text-align: center;
}`,
    js: `const numbers = [1, 2, 3, 4, 5];
const arrayDisplay = document.getElementById('arrayDisplay');
const result = document.getElementById('result');
const output = document.getElementById('output');

arrayDisplay.textContent = \`numbers = [\${numbers.join(', ')}]\`;

document.getElementById('sumBtn').addEventListener('click', () => {
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  
  result.textContent = \`// Sum All Numbers\\nconst sum = numbers.reduce((acc, num) => acc + num, 0);\\n\\nSteps:\\nacc=0, num=1 → 0+1=1\\nacc=1, num=2 → 1+2=3\\nacc=3, num=3 → 3+3=6\\nacc=6, num=4 → 6+4=10\\nacc=10, num=5 → 10+5=15\\n\\nResult: \${sum}\\n\\n✅ Accumulates values into single result\`;
  
  output.textContent = \`✅ Sum: \${sum}\`;
  console.log('Sum:', sum);
});

document.getElementById('productBtn').addEventListener('click', () => {
  const product = numbers.reduce((acc, num) => acc * num, 1);
  
  result.textContent = \`// Product of All Numbers\\nconst product = numbers.reduce((acc, num) => acc * num, 1);\\n\\nSteps:\\nacc=1, num=1 → 1*1=1\\nacc=1, num=2 → 1*2=2\\nacc=2, num=3 → 2*3=6\\nacc=6, num=4 → 6*4=24\\nacc=24, num=5 → 24*5=120\\n\\nResult: \${product}\\n\\n✅ Initial value is 1 for multiplication\`;
  
  output.textContent = \`✅ Product: \${product}\`;
  console.log('Product:', product);
});

document.getElementById('maxBtn').addEventListener('click', () => {
  const max = numbers.reduce((acc, num) => num > acc ? num : acc);
  
  result.textContent = \`// Find Maximum\\nconst max = numbers.reduce((acc, num) => num > acc ? num : acc);\\n\\nArray: [\${numbers.join(', ')}]\\nMaximum: \${max}\\n\\n✅ Compare accumulator with current\\n✅ Keep the larger value\`;
  
  output.textContent = \`✅ Max: \${max}\`;
  console.log('Max:', max);
});

document.getElementById('objectBtn').addEventListener('click', () => {
  const fruits = ['apple', 'banana', 'apple', 'cherry', 'banana', 'apple'];
  const count = fruits.reduce((acc, fruit) => {
    acc[fruit] = (acc[fruit] || 0) + 1;
    return acc;
  }, {});
  
  result.textContent = \`// Build Object (Count Occurrences)\\nconst fruits = ['apple', 'banana', 'apple', 'cherry', 'banana', 'apple'];\\n\\nconst count = fruits.reduce((acc, fruit) => {\\n  acc[fruit] = (acc[fruit] || 0) + 1;\\n  return acc;\\n}, {});\\n\\nResult:\\n\${JSON.stringify(count, null, 2)}\\n\\n✅ Build complex data structures\\n✅ Initial value is empty object {}\`;
  
  output.textContent = '✅ Object built!';
  console.log('Count:', count);
});

console.log('📊 reduce() ready!');`,
  },
];

/* ─── Export helper function ─────────────────────────────────────── */
export function getTopicExample(topicName) {
  if (!topicName) return null;
  const key = topicName.toLowerCase().trim();
  return jsTopicExamples.find((ex) => ex.topic.toLowerCase() === key) || null;
}

export default jsTopicExamples;
