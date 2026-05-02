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

  {
  topic: "push-pop",
  description: "push() adds elements to the end of an array and returns new length. pop() removes and returns the last element.",
  html: `<div class="container">
  <h1>➕➖ Push & Pop</h1>
  <div class="demo">
    <input type="text" id="itemInput" value="orange" placeholder="Enter item to add">
    <button id="pushBtn">Push Item</button>
    <button id="popBtn">Pop Item</button>
    <button id="multiPushBtn">Push Multiple</button>
    <button id="showBtn">Show Array</button>
    <div class="result" id="result"></div>
  </div>
  <div class="output" id="output">Try push and pop operations!</div>
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
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.3);
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
  min-height: 120px;
  white-space: pre-wrap;
  margin-top: 1rem;
  font-size: 0.9rem;
  line-height: 1.6;
}

.output {
  padding: 1.5rem;
  background: #0d1117;
  color: #F7DF1E;
  border-radius: 12px;
  font-family: 'Courier New', monospace;
  text-align: center;
  font-weight: 600;
}`,
  js: `const itemInput = document.getElementById('itemInput');
const result = document.getElementById('result');
const output = document.getElementById('output');

let fruits = ['apple', 'banana', 'cherry'];

document.getElementById('pushBtn').addEventListener('click', () => {
  const item = itemInput.value || 'item';
  const newLength = fruits.push(item);
  
  result.textContent = \`const fruits = ['apple', 'banana', 'cherry'];\\n\\nconst newLength = fruits.push('\${item}');\\n\\nArray now: [\${fruits}]\\nNew length: \${newLength}\\n\\n✅ push() adds to end\\n✅ Returns new array length\\n✅ Modifies original array\`;
  
  output.textContent = \`✅ Pushed "\${item}" | Length: \${newLength}\`;
  console.log('After push:', fruits, 'Length:', newLength);
});

document.getElementById('popBtn').addEventListener('click', () => {
  if (fruits.length === 0) {
    result.textContent = \`const fruits = [];\\n\\nconst removed = fruits.pop();\\n\\nResult: undefined\\n\\n⚠️ Cannot pop from empty array\\n✅ Returns undefined\`;
    
    output.textContent = '⚠️ Array is empty!';
    console.log('Array is empty');
    return;
  }
  
  const removed = fruits.pop();
  
  result.textContent = \`const fruits = [\${fruits}, '\${removed}'];\\n\\nconst removed = fruits.pop();\\n\\nRemoved: "\${removed}"\\nArray now: [\${fruits}]\\nNew length: \${fruits.length}\\n\\n✅ pop() removes last element\\n✅ Returns removed element\\n✅ Modifies original array\`;
  
  output.textContent = \`✅ Popped "\${removed}" | Length: \${fruits.length}\`;
  console.log('After pop:', fruits, 'Removed:', removed);
});

document.getElementById('multiPushBtn').addEventListener('click', () => {
  const newLength = fruits.push('date', 'elderberry', 'fig');
  
  result.textContent = \`const fruits = [\${fruits.slice(0, -3)}];\\n\\nfruits.push('date', 'elderberry', 'fig');\\n\\nArray now: [\${fruits}]\\nNew length: \${newLength}\\n\\n✅ push() accepts multiple arguments\\n✅ Adds all items to end\\n✅ Returns final length\`;
  
  output.textContent = \`✅ Pushed 3 items | Length: \${newLength}\`;
  console.log('After multi-push:', fruits);
});

document.getElementById('showBtn').addEventListener('click', () => {
  result.textContent = \`Current array:\\n[\${fruits}]\\n\\nLength: \${fruits.length}\\n\\nElements:\\n\${fruits.map((item, i) => \`[\${i}] = "\${item}"\`).join('\\n')}\\n\\n✅ Array state displayed\`;
  
  output.textContent = \`✅ Array: [\${fruits}]\`;
  console.log('Current array:', fruits);
});

console.log('➕➖ Push & Pop ready!');`
} , 

{
  topic: "shift-unshift",
  description: "shift() removes and returns the first element. unshift() adds elements to the beginning and returns new length.",
  html: `<div class="container">
  <h1>⬅️➡️ Shift & Unshift</h1>
  <div class="demo">
    <input type="text" id="itemInput" value="mango" placeholder="Enter item to add">
    <button id="shiftBtn">Shift (Remove First)</button>
    <button id="unshiftBtn">Unshift (Add First)</button>
    <button id="multiUnshiftBtn">Unshift Multiple</button>
    <button id="showBtn">Show Array</button>
    <div class="result" id="result"></div>
  </div>
  <div class="output" id="output">Try shift and unshift operations!</div>
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
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.3);
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
  min-height: 120px;
  white-space: pre-wrap;
  margin-top: 1rem;
  font-size: 0.9rem;
  line-height: 1.6;
}

.output {
  padding: 1.5rem;
  background: #0d1117;
  color: #F7DF1E;
  border-radius: 12px;
  font-family: 'Courier New', monospace;
  text-align: center;
  font-weight: 600;
}`,
  js: `const itemInput = document.getElementById('itemInput');
const result = document.getElementById('result');
const output = document.getElementById('output');

let colors = ['red', 'green', 'blue', 'yellow'];

document.getElementById('shiftBtn').addEventListener('click', () => {
  if (colors.length === 0) {
    result.textContent = \`const colors = [];\\n\\nconst removed = colors.shift();\\n\\nResult: undefined\\n\\n⚠️ Cannot shift from empty array\\n✅ Returns undefined\`;
    
    output.textContent = '⚠️ Array is empty!';
    console.log('Array is empty');
    return;
  }
  
  const removed = colors.shift();
  
  result.textContent = \`const colors = ['\${removed}', \${colors.map(c => \`'\${c}'\`).join(', ')}];\\n\\nconst removed = colors.shift();\\n\\nRemoved: "\${removed}"\\nArray now: [\${colors}]\\nNew length: \${colors.length}\\n\\n✅ shift() removes first element\\n✅ Returns removed element\\n✅ Modifies original array\`;
  
  output.textContent = \`✅ Shifted "\${removed}" | Length: \${colors.length}\`;
  console.log('After shift:', colors, 'Removed:', removed);
});

document.getElementById('unshiftBtn').addEventListener('click', () => {
  const item = itemInput.value || 'item';
  const newLength = colors.unshift(item);
  
  result.textContent = \`const colors = [\${colors.slice(1).map(c => \`'\${c}'\`).join(', ')}];\\n\\nconst newLength = colors.unshift('\${item}');\\n\\nArray now: [\${colors}]\\nNew length: \${newLength}\\n\\n✅ unshift() adds to beginning\\n✅ Returns new array length\\n✅ Modifies original array\`;
  
  output.textContent = \`✅ Unshifted "\${item}" | Length: \${newLength}\`;
  console.log('After unshift:', colors, 'Length:', newLength);
});

document.getElementById('multiUnshiftBtn').addEventListener('click', () => {
  const newLength = colors.unshift('purple', 'orange', 'pink');
  
  result.textContent = \`const colors = [\${colors.slice(3).map(c => \`'\${c}'\`).join(', ')}];\\n\\ncolors.unshift('purple', 'orange', 'pink');\\n\\nArray now: [\${colors}]\\nNew length: \${newLength}\\n\\n✅ unshift() accepts multiple arguments\\n✅ Adds all items to beginning\\n✅ Returns final length\`;
  
  output.textContent = \`✅ Unshifted 3 items | Length: \${newLength}\`;
  console.log('After multi-unshift:', colors);
});

document.getElementById('showBtn').addEventListener('click', () => {
  result.textContent = \`Current array:\\n[\${colors}]\\n\\nLength: \${colors.length}\\n\\nElements:\\n\${colors.map((item, i) => \`[\${i}] = "\${item}"\`).join('\\n')}\\n\\n✅ Array state displayed\`;
  
  output.textContent = \`✅ Array: [\${colors}]\`;
  console.log('Current array:', colors);
});

console.log('⬅️➡️ Shift & Unshift ready!');`
} , 


{
  topic: "splice",
  description: "removes elements from an array and optionally inserts new elements. Modifies the original array and returns removed elements.",
  html: `<div class="container">
  <h1>✂️ Splice</h1>
  <div class="demo">
    <input type="number" id="startInput" value="1" placeholder="Start index" min="0">
    <input type="number" id="deleteInput" value="1" placeholder="Delete count" min="0">
    <input type="text" id="itemInput" value="new" placeholder="Item to insert">
    <button id="removeBtn">Remove Only</button>
    <button id="insertBtn">Insert Only</button>
    <button id="replaceBtn">Replace</button>
    <button id="showBtn">Show Array</button>
    <div class="result" id="result"></div>
  </div>
  <div class="output" id="output">Try splice operations!</div>
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
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.3);
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
  min-height: 120px;
  white-space: pre-wrap;
  margin-top: 1rem;
  font-size: 0.9rem;
  line-height: 1.6;
}

.output {
  padding: 1.5rem;
  background: #0d1117;
  color: #F7DF1E;
  border-radius: 12px;
  font-family: 'Courier New', monospace;
  text-align: center;
  font-weight: 600;
}`,
  js: `const startInput = document.getElementById('startInput');
const deleteInput = document.getElementById('deleteInput');
const itemInput = document.getElementById('itemInput');
const result = document.getElementById('result');
const output = document.getElementById('output');

let numbers = [10, 20, 30, 40, 50];

document.getElementById('removeBtn').addEventListener('click', () => {
  const start = parseInt(startInput.value) || 0;
  const deleteCount = parseInt(deleteInput.value) || 1;
  
  const removed = numbers.splice(start, deleteCount);
  
  result.textContent = \`const numbers = [10, 20, 30, 40, 50];\\n\\nconst removed = numbers.splice(\${start}, \${deleteCount});\\n\\nRemoved: [\${removed}]\\nArray now: [\${numbers}]\\n\\n✅ splice() removes elements\\n✅ Returns array of removed items\\n✅ Modifies original array\`;
  
  output.textContent = \`✅ Removed [\${removed}] | Array: [\${numbers}]\`;
  console.log('After splice remove:', numbers, 'Removed:', removed);
});

document.getElementById('insertBtn').addEventListener('click', () => {
  const start = parseInt(startInput.value) || 0;
  const item = itemInput.value || 'item';
  
  const removed = numbers.splice(start, 0, item);
  
  result.textContent = \`const numbers = [\${numbers.slice(0, -1)}];\\n\\nconst removed = numbers.splice(\${start}, 0, '\${item}');\\n\\nRemoved: [\${removed}]\\nArray now: [\${numbers}]\\n\\n✅ splice() with deleteCount=0 inserts\\n✅ Returns empty array\\n✅ Adds item at specified index\`;
  
  output.textContent = \`✅ Inserted "\${item}" | Array: [\${numbers}]\`;
  console.log('After splice insert:', numbers);
});

document.getElementById('replaceBtn').addEventListener('click', () => {
  const start = parseInt(startInput.value) || 0;
  const deleteCount = parseInt(deleteInput.value) || 1;
  const item = itemInput.value || 'item';
  
  const removed = numbers.splice(start, deleteCount, item);
  
  result.textContent = \`const numbers = [10, 20, 30, 40, 50];\\n\\nconst removed = numbers.splice(\${start}, \${deleteCount}, '\${item}');\\n\\nRemoved: [\${removed}]\\nArray now: [\${numbers}]\\n\\n✅ splice() removes AND inserts\\n✅ Returns removed elements\\n✅ Replaces at specified position\`;
  
  output.textContent = \`✅ Replaced with "\${item}" | Array: [\${numbers}]\`;
  console.log('After splice replace:', numbers, 'Removed:', removed);
});

document.getElementById('showBtn').addEventListener('click', () => {
  result.textContent = \`Current array:\\n[\${numbers}]\\n\\nLength: \${numbers.length}\\n\\nElements:\\n\${numbers.map((item, i) => \`[\${i}] = \${item}\`).join('\\n')}\\n\\n✅ Array state displayed\`;
  
  output.textContent = \`✅ Array: [\${numbers}]\`;
  console.log('Current array:', numbers);
});

console.log('✂️ Splice ready!');`
} , 

{
  topic: "slice",
  description: "extracts a portion of an array as a new array without modifying the original. Takes start and end indices.",
  html: `<div class="container">
  <h1>🔪 Slice</h1>
  <div class="demo">
    <input type="number" id="startInput" value="1" placeholder="Start index" min="0">
    <input type="number" id="endInput" value="3" placeholder="End index" min="0">
    <button id="sliceBtn">Slice Array</button>
    <button id="copyBtn">Copy Entire Array</button>
    <button id="lastBtn">Get Last 2 Elements</button>
    <button id="middleBtn">Get Middle Elements</button>
    <button id="showBtn">Show Original</button>
    <div class="result" id="result"></div>
  </div>
  <div class="output" id="output">Try slice operations!</div>
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
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.3);
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
  min-height: 120px;
  white-space: pre-wrap;
  margin-top: 1rem;
  font-size: 0.9rem;
  line-height: 1.6;
}

.output {
  padding: 1.5rem;
  background: #0d1117;
  color: #F7DF1E;
  border-radius: 12px;
  font-family: 'Courier New', monospace;
  text-align: center;
  font-weight: 600;
}`,
  js: `const startInput = document.getElementById('startInput');
const endInput = document.getElementById('endInput');
const result = document.getElementById('result');
const output = document.getElementById('output');

const numbers = [10, 20, 30, 40, 50, 60, 70];

document.getElementById('sliceBtn').addEventListener('click', () => {
  const start = parseInt(startInput.value) || 0;
  const end = parseInt(endInput.value) || 3;
  
  const sliced = numbers.slice(start, end);
  
  result.textContent = \`const numbers = [10, 20, 30, 40, 50, 60, 70];\\n\\nconst sliced = numbers.slice(\${start}, \${end});\\n\\nSliced: [\${sliced}]\\nOriginal: [\${numbers}]\\n\\n✅ slice() extracts portion\\n✅ Does NOT modify original\\n✅ End index is exclusive\`;
  
  output.textContent = \`✅ Sliced [\${sliced}]\`;
  console.log('Sliced:', sliced, 'Original:', numbers);
});

document.getElementById('copyBtn').addEventListener('click', () => {
  const copy = numbers.slice();
  
  result.textContent = \`const numbers = [10, 20, 30, 40, 50, 60, 70];\\n\\nconst copy = numbers.slice();\\n\\nCopy: [\${copy}]\\nOriginal: [\${numbers}]\\n\\n✅ slice() with no args copies entire array\\n✅ Creates shallow copy\\n✅ Original unchanged\`;
  
  output.textContent = \`✅ Array copied: [\${copy}]\`;
  console.log('Copy:', copy, 'Original:', numbers);
});

document.getElementById('lastBtn').addEventListener('click', () => {
  const last2 = numbers.slice(-2);
  
  result.textContent = \`const numbers = [10, 20, 30, 40, 50, 60, 70];\\n\\nconst last2 = numbers.slice(-2);\\n\\nLast 2: [\${last2}]\\nOriginal: [\${numbers}]\\n\\n✅ Negative index counts from end\\n✅ -1 = last element\\n✅ -2 = second to last\`;
  
  output.textContent = \`✅ Last 2 elements: [\${last2}]\`;
  console.log('Last 2:', last2);
});

document.getElementById('middleBtn').addEventListener('click', () => {
  const middle = numbers.slice(2, 5);
  
  result.textContent = \`const numbers = [10, 20, 30, 40, 50, 60, 70];\\n\\nconst middle = numbers.slice(2, 5);\\n\\nMiddle: [\${middle}]\\nOriginal: [\${numbers}]\\n\\nElements at indices 2, 3, 4\\n(index 5 is excluded)\\n\\n✅ Extract middle portion\\n✅ Original unchanged\`;
  
  output.textContent = \`✅ Middle elements: [\${middle}]\`;
  console.log('Middle:', middle);
});

document.getElementById('showBtn').addEventListener('click', () => {
  result.textContent = \`Original array:\\n[\${numbers}]\\n\\nLength: \${numbers.length}\\n\\nElements:\\n\${numbers.map((item, i) => \`[\${i}] = \${item}\`).join('\\n')}\\n\\n✅ Original array unchanged\`;
  
  output.textContent = \`✅ Original: [\${numbers}]\`;
  console.log('Original array:', numbers);
});

console.log('🔪 Slice ready!');`
} ,

{
  topic: "forEach",
  description: "iterates over every element with a callback function. Does not return a new array. Used for side effects.",
  html: `<div class="container">
  <h1>🔄 forEach</h1>
  <div class="demo">
    <button id="basicBtn">Basic forEach</button>
    <button id="indexBtn">With Index</button>
    <button id="arrayBtn">With Array Parameter</button>
    <button id="sumBtn">Sum All Elements</button>
    <button id="modifyBtn">Modify DOM</button>
    <div class="result" id="result"></div>
  </div>
  <div class="output" id="output">Try forEach operations!</div>
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
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.3);
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
  min-height: 120px;
  white-space: pre-wrap;
  margin-top: 1rem;
  font-size: 0.9rem;
  line-height: 1.6;
}

.output {
  padding: 1.5rem;
  background: #0d1117;
  color: #F7DF1E;
  border-radius: 12px;
  font-family: 'Courier New', monospace;
  text-align: center;
  font-weight: 600;
}`,
  js: `const result = document.getElementById('result');
const output = document.getElementById('output');

const numbers = [10, 20, 30, 40, 50];
const fruits = ['apple', 'banana', 'cherry'];

document.getElementById('basicBtn').addEventListener('click', () => {
  let output_text = '';
  
  numbers.forEach((num) => {
    output_text += \`\${num} \`;
  });
  
  result.textContent = \`const numbers = [10, 20, 30, 40, 50];\\n\\nnumbers.forEach((num) => {\\n  console.log(num);\\n});\\n\\nOutput:\\n\${output_text}\\n\\n✅ forEach iterates each element\\n✅ Does NOT return new array\\n✅ Used for side effects\`;
  
  output.textContent = \`✅ Logged: \${output_text}\`;
  console.log('forEach basic:', numbers);
  numbers.forEach((num) => console.log(num));
});

document.getElementById('indexBtn').addEventListener('click', () => {
  let output_text = '';
  
  fruits.forEach((fruit, index) => {
    output_text += \`[\${index}] = \${fruit}\\n\`;
  });
  
  result.textContent = \`const fruits = ['apple', 'banana', 'cherry'];\\n\\nfruits.forEach((fruit, index) => {\\n  console.log(index, fruit);\\n});\\n\\nOutput:\\n\${output_text}\\n✅ Access both element and index\\n✅ Index is second parameter\`;
  
  output.textContent = '✅ Logged with indices!';
  console.log('forEach with index:');
  fruits.forEach((fruit, index) => console.log(index, fruit));
});

document.getElementById('arrayBtn').addEventListener('click', () => {
  let output_text = '';
  
  numbers.forEach((num, index, arr) => {
    output_text += \`Element: \${num}, Index: \${index}, Array: [\${arr}]\\n\`;
  });
  
  result.textContent = \`const numbers = [10, 20, 30, 40, 50];\\n\\nnumbers.forEach((num, index, arr) => {\\n  console.log(num, index, arr);\\n});\\n\\n✅ Third parameter is entire array\\n✅ Useful for context\\n✅ All three parameters available\`;
  
  output.textContent = '✅ All parameters logged!';
  console.log('forEach with all params:');
  numbers.forEach((num, index, arr) => console.log(num, index, arr));
});

document.getElementById('sumBtn').addEventListener('click', () => {
  let sum = 0;
  
  numbers.forEach((num) => {
    sum += num;
  });
  
  result.textContent = \`const numbers = [10, 20, 30, 40, 50];\\nlet sum = 0;\\n\\nnumbers.forEach((num) => {\\n  sum += num;\\n});\\n\\nSum: \${sum}\\n\\n✅ forEach for accumulation\\n✅ Modifies external variable\\n✅ No return value\`;
  
  output.textContent = \`✅ Sum: \${sum}\`;
  console.log('Sum:', sum);
});

document.getElementById('modifyBtn').addEventListener('click', () => {
  let html_output = '';
  
  fruits.forEach((fruit, index) => {
    html_output += \`<div>[\${index}] \${fruit.toUpperCase()}</div>\\n\`;
  });
  
  result.textContent = \`const fruits = ['apple', 'banana', 'cherry'];\\n\\nfruits.forEach((fruit, index) => {\\n  // Modify DOM\\n  element.innerHTML += fruit;\\n});\\n\\nGenerated HTML:\\n\${html_output}\\n✅ forEach for DOM manipulation\\n✅ Common use case\\n✅ Side effects\`;
  
  output.textContent = '✅ DOM modified!';
  console.log('forEach for DOM:', fruits);
});

console.log('🔄 forEach ready!');`
} , 

{
  topic: "map",
  description: "transforms each element using a callback and returns a new array. Original array remains unchanged.",
  html: `<div class="container">
  <h1>🗺️ Map</h1>
  <div class="demo">
    <button id="doubleBtn">Double Numbers</button>
    <button id="squareBtn">Square Numbers</button>
    <button id="upperBtn">Uppercase Strings</button>
    <button id="extractBtn">Extract Properties</button>
    <button id="chainBtn">Chain Operations</button>
    <div class="result" id="result"></div>
  </div>
  <div class="output" id="output">Try map operations!</div>
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
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.3);
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
  min-height: 120px;
  white-space: pre-wrap;
  margin-top: 1rem;
  font-size: 0.9rem;
  line-height: 1.6;
}

.output {
  padding: 1.5rem;
  background: #0d1117;
  color: #F7DF1E;
  border-radius: 12px;
  font-family: 'Courier New', monospace;
  text-align: center;
  font-weight: 600;
}`,
  js: `const result = document.getElementById('result');
const output = document.getElementById('output');

const numbers = [1, 2, 3, 4, 5];
const fruits = ['apple', 'banana', 'cherry'];
const users = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 35 }
];

document.getElementById('doubleBtn').addEventListener('click', () => {
  const doubled = numbers.map((num) => num * 2);
  
  result.textContent = \`const numbers = [1, 2, 3, 4, 5];\\n\\nconst doubled = numbers.map((num) => num * 2);\\n\\nOriginal: [\${numbers}]\\nDoubled: [\${doubled}]\\n\\n✅ map() transforms each element\\n✅ Returns new array\\n✅ Original unchanged\`;
  
  output.textContent = \`✅ Doubled: [\${doubled}]\`;
  console.log('Doubled:', doubled);
});

document.getElementById('squareBtn').addEventListener('click', () => {
  const squared = numbers.map((num) => num * num);
  
  result.textContent = \`const numbers = [1, 2, 3, 4, 5];\\n\\nconst squared = numbers.map((num) => num * num);\\n\\nOriginal: [\${numbers}]\\nSquared: [\${squared}]\\n\\n✅ Each element transformed\\n✅ Same length as original\\n✅ New array created\`;
  
  output.textContent = \`✅ Squared: [\${squared}]\`;
  console.log('Squared:', squared);
});

document.getElementById('upperBtn').addEventListener('click', () => {
  const upper = fruits.map((fruit) => fruit.toUpperCase());
  
  result.textContent = \`const fruits = ['apple', 'banana', 'cherry'];\\n\\nconst upper = fruits.map((fruit) => fruit.toUpperCase());\\n\\nOriginal: [\${fruits}]\\nUppercase: [\${upper}]\\n\\n✅ Works with strings\\n✅ Applies method to each\\n✅ Returns transformed array\`;
  
  output.textContent = \`✅ Uppercase: [\${upper}]\`;
  console.log('Uppercase:', upper);
});

document.getElementById('extractBtn').addEventListener('click', () => {
  const names = users.map((user) => user.name);
  const ages = users.map((user) => user.age);
  
  result.textContent = \`const users = [\\n  { name: 'Alice', age: 25 },\\n  { name: 'Bob', age: 30 },\\n  { name: 'Charlie', age: 35 }\\n];\\n\\nconst names = users.map((user) => user.name);\\nconst ages = users.map((user) => user.age);\\n\\nNames: [\${names}]\\nAges: [\${ages}]\\n\\n✅ Extract properties from objects\\n✅ Common use case\\n✅ Powerful transformation\`;
  
  output.textContent = \`✅ Names: [\${names}]\`;
  console.log('Names:', names, 'Ages:', ages);
});

document.getElementById('chainBtn').addEventListener('click', () => {
  const result_val = numbers
    .map((num) => num * 2)
    .map((num) => num + 10)
    .map((num) => num / 2);
  
  result.textContent = \`const numbers = [1, 2, 3, 4, 5];\\n\\nconst result = numbers\\n  .map((num) => num * 2)\\n  .map((num) => num + 10)\\n  .map((num) => num / 2);\\n\\nOriginal: [\${numbers}]\\nResult: [\${result_val.map(n => n.toFixed(1))}]\\n\\n✅ Chain multiple map() calls\\n✅ Each returns new array\\n✅ Powerful for transformations\`;
  
  output.textContent = \`✅ Chained: [\${result_val.map(n => n.toFixed(1))}]\`;
  console.log('Chained:', result_val);
});

console.log('🗺️ Map ready!');`
} ,


{
  topic: "filter",
  description: "creates a new array with elements that pass a test function. Returns subset of original array.",
  html: `<div class="container">
  <h1>🔎 Filter</h1>
  <div class="demo">
    <button id="evenBtn">Filter Even Numbers</button>
    <button id="oddBtn">Filter Odd Numbers</button>
    <button id="lengthBtn">Filter Long Strings</button>
    <button id="ageBtn">Filter by Age</button>
    <button id="chainBtn">Filter & Map Chain</button>
    <div class="result" id="result"></div>
  </div>
  <div class="output" id="output">Try filter operations!</div>
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
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.3);
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
  min-height: 120px;
  white-space: pre-wrap;
  margin-top: 1rem;
  font-size: 0.9rem;
  line-height: 1.6;
}

.output {
  padding: 1.5rem;
  background: #0d1117;
  color: #F7DF1E;
  border-radius: 12px;
  font-family: 'Courier New', monospace;
  text-align: center;
  font-weight: 600;
}`,
  js: `const result = document.getElementById('result');
const output = document.getElementById('output');

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const fruits = ['apple', 'banana', 'cherry', 'date', 'fig'];
const users = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 17 },
  { name: 'Charlie', age: 35 },
  { name: 'Diana', age: 16 }
];

document.getElementById('evenBtn').addEventListener('click', () => {
  const evens = numbers.filter((num) => num % 2 === 0);
  
  result.textContent = \`const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];\\n\\nconst evens = numbers.filter((num) => num % 2 === 0);\\n\\nOriginal: [\${numbers}]\\nFiltered: [\${evens}]\\n\\n✅ filter() keeps matching elements\\n✅ Returns new array\\n✅ Original unchanged\`;
  
  output.textContent = \`✅ Even numbers: [\${evens}]\`;
  console.log('Even numbers:', evens);
});

document.getElementById('oddBtn').addEventListener('click', () => {
  const odds = numbers.filter((num) => num % 2 !== 0);
  
  result.textContent = \`const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];\\n\\nconst odds = numbers.filter((num) => num % 2 !== 0);\\n\\nOriginal: [\${numbers}]\\nFiltered: [\${odds}]\\n\\n✅ Test function returns boolean\\n✅ true = keep element\\n✅ false = remove element\`;
  
  output.textContent = \`✅ Odd numbers: [\${odds}]\`;
  console.log('Odd numbers:', odds);
});

document.getElementById('lengthBtn').addEventListener('click', () => {
  const longFruits = fruits.filter((fruit) => fruit.length > 5);
  
  result.textContent = \`const fruits = ['apple', 'banana', 'cherry', 'date', 'fig'];\\n\\nconst longFruits = fruits.filter((fruit) => fruit.length > 5);\\n\\nOriginal: [\${fruits}]\\nFiltered: [\${longFruits}]\\n\\n✅ Filter by string length\\n✅ Works with any condition\\n✅ Subset of original\`;
  
  output.textContent = \`✅ Long fruits: [\${longFruits}]\`;
  console.log('Long fruits:', longFruits);
});

document.getElementById('ageBtn').addEventListener('click', () => {
  const adults = users.filter((user) => user.age >= 18);
  
  result.textContent = \`const users = [\\n  { name: 'Alice', age: 25 },\\n  { name: 'Bob', age: 17 },\\n  { name: 'Charlie', age: 35 },\\n  { name: 'Diana', age: 16 }\\n];\\n\\nconst adults = users.filter((user) => user.age >= 18);\\n\\nFiltered: [\${adults.map(u => u.name).join(', ')}]\\n\\n✅ Filter objects by property\\n✅ Common use case\\n✅ Powerful for data filtering\`;
  
  output.textContent = \`✅ Adults: [\${adults.map(u => u.name).join(', ')}]\`;
  console.log('Adults:', adults);
});

document.getElementById('chainBtn').addEventListener('click', () => {
  const result_val = numbers
    .filter((num) => num > 3)
    .filter((num) => num < 9)
    .map((num) => num * 2);
  
  result.textContent = \`const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];\\n\\nconst result = numbers\\n  .filter((num) => num > 3)\\n  .filter((num) => num < 9)\\n  .map((num) => num * 2);\\n\\nOriginal: [\${numbers}]\\nResult: [\${result_val}]\\n\\n✅ Chain filter() and map()\\n✅ Filter first, then transform\\n✅ Powerful combinations\`;
  
  output.textContent = \`✅ Chained: [\${result_val}]\`;
  console.log('Chained filter & map:', result_val);
});

console.log('🔎 Filter ready!');`
} ,

{
  topic: 'find-findIndex',
  title: '🔍 Find & FindIndex',
  description: 'Find first element matching condition or get its index',
  tags: ['array-methods', 'search', 'intermediate'],
  difficulty: 'Intermediate',
  htmlCode: `
    <div class="topic-container">
      <h2>🔍 Array find() & findIndex()</h2>
      
      <div class="code-section">
        <h3>What is find()?</h3>
        <p>Returns the <strong>first element</strong> that matches a condition</p>
        <p>Returns <strong>undefined</strong> if no match found</p>
      </div>

      <div class="code-section">
        <h3>What is findIndex()?</h3>
        <p>Returns the <strong>index</strong> of first matching element</p>
        <p>Returns <strong>-1</strong> if no match found</p>
      </div>

      <div class="button-group">
        <button id="findBasicBtn" class="btn">Find Basic</button>
        <button id="findIndexBtn" class="btn">Find Index</button>
        <button id="findObjectBtn" class="btn">Find Object</button>
        <button id="findUndefinedBtn" class="btn">Find Undefined</button>
        <button id="findFirstBtn" class="btn">Find First Match</button>
      </div>

      <div class="result-section">
        <h3>Code:</h3>
        <pre id="result"></pre>
      </div>

      <div class="output-section">
        <h3>Output:</h3>
        <pre id="output"></pre>
      </div>
    </div>
  `,
  cssCode: `
    .topic-container {
      max-width: 900px;
      margin: 0 auto;
      padding: 20px;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      border-radius: 10px;
      color: #fff;
    }

    h2 {
      text-align: center;
      margin-bottom: 30px;
      font-size: 2.5em;
      text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
    }

    .code-section {
      background: rgba(255,255,255,0.1);
      padding: 15px;
      margin: 15px 0;
      border-left: 4px solid #ffd700;
      border-radius: 5px;
      backdrop-filter: blur(10px);
    }

    .code-section h3 {
      margin-top: 0;
      color: #ffd700;
    }

    .code-section p {
      margin: 8px 0;
      line-height: 1.6;
    }

    .button-group {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 10px;
      margin: 20px 0;
    }

    .btn {
      padding: 12px 20px;
      background: #ffd700;
      color: #333;
      border: none;
      border-radius: 5px;
      font-weight: bold;
      cursor: pointer;
      transition: all 0.3s ease;
      font-size: 14px;
    }

    .btn:hover {
      background: #ffed4e;
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(0,0,0,0.3);
    }

    .result-section, .output-section {
      background: rgba(0,0,0,0.2);
      padding: 15px;
      margin: 15px 0;
      border-radius: 5px;
      backdrop-filter: blur(10px);
    }

    .result-section h3, .output-section h3 {
      margin-top: 0;
      color: #ffd700;
    }

    pre {
      background: rgba(0,0,0,0.3);
      padding: 15px;
      border-radius: 5px;
      overflow-x: auto;
      color: #fff;
      font-size: 13px;
      line-height: 1.5;
      margin: 0;
    }
  `,
  jsCode: `
    const numbers = [10, 20, 30, 40, 50];
    const fruits = ['apple', 'banana', 'cherry', 'date', 'fig'];
    const users = [
      { id: 1, name: 'Alice', age: 25 },
      { id: 2, name: 'Bob', age: 17 },
      { id: 3, name: 'Charlie', age: 35 },
      { id: 4, name: 'Diana', age: 16 }
    ];

    const result = document.getElementById('result');
    const output = document.getElementById('output');

    document.getElementById('findBasicBtn').addEventListener('click', () => {
      const found = numbers.find((num) => num > 25);
      
      result.textContent = \`const numbers = [10, 20, 30, 40, 50];\\n\\nconst found = numbers.find((num) => num > 25);\\n\\nResult: \${found}\\n\\n✅ Returns first element > 25\\n✅ Stops searching after first match\\n✅ Returns undefined if no match\`;
      
      output.textContent = \`✅ Found: \${found}\\n✅ Type: \${typeof found}\\n✅ First number > 25\`;
      console.log('Found:', found);
    });

    document.getElementById('findIndexBtn').addEventListener('click', () => {
      const index = numbers.findIndex((num) => num > 25);
      
      result.textContent = \`const numbers = [10, 20, 30, 40, 50];\\n\\nconst index = numbers.findIndex((num) => num > 25);\\n\\nResult: \${index}\\n\\n✅ Returns index of first match\\n✅ Index starts at 0\\n✅ Returns -1 if no match\`;
      
      output.textContent = \`✅ Index: \${index}\\n✅ Element at index: \${numbers[index]}\\n✅ Position in array\`;
      console.log('Index:', index);
    });

    document.getElementById('findObjectBtn').addEventListener('click', () => {
      const user = users.find((user) => user.age >= 18);
      
      result.textContent = \`const users = [\\n  { id: 1, name: 'Alice', age: 25 },\\n  { id: 2, name: 'Bob', age: 17 },\\n  { id: 3, name: 'Charlie', age: 35 },\\n  { id: 4, name: 'Diana', age: 16 }\\n];\\n\\nconst user = users.find((user) => user.age >= 18);\\n\\nResult: { id: \${user.id}, name: '\${user.name}', age: \${user.age} }\\n\\n✅ Find object by property\\n✅ Common use case\\n✅ Returns entire object\`;
      
      output.textContent = \`✅ Found User: \${user.name}\\n✅ Age: \${user.age}\\n✅ ID: \${user.id}\`;
      console.log('Found user:', user);
    });

    document.getElementById('findUndefinedBtn').addEventListener('click', () => {
      const found = numbers.find((num) => num > 100);
      
      result.textContent = \`const numbers = [10, 20, 30, 40, 50];\\n\\nconst found = numbers.find((num) => num > 100);\\n\\nResult: \${found}\\n\\n✅ No element > 100\\n✅ Returns undefined\\n✅ Check with if statement\`;
      
      output.textContent = \`✅ Found: \${found}\\n✅ Type: \${typeof found}\\n✅ No match in array\`;
      console.log('Found:', found);
    });

    document.getElementById('findFirstBtn').addEventListener('click', () => {
      const found = fruits.find((fruit) => fruit.length > 4);
      const index = fruits.findIndex((fruit) => fruit.length > 4);
      
      result.textContent = \`const fruits = ['apple', 'banana', 'cherry', 'date', 'fig'];\\n\\nconst found = fruits.find((fruit) => fruit.length > 4);\\nconst index = fruits.findIndex((fruit) => fruit.length > 4);\\n\\nFound: '\${found}'\\nIndex: \${index}\\n\\n✅ find() returns element\\n✅ findIndex() returns position\\n✅ Both stop at first match\`;
      
      output.textContent = \`✅ Element: \${found}\\n✅ Index: \${index}\\n✅ Length: \${found.length}\`;
      console.log('Found:', found, 'at index:', index);
    });

    console.log('🔍 Find & FindIndex ready!');`
} ,

{
  topic: 'includes',
  title: '✔️ Includes',
  description: 'Check if array contains a specific element',
  tags: ['array-methods', 'search', 'beginner'],
  difficulty: 'Beginner',
  htmlCode: `
    <div class="topic-container">
      <h2>✔️ Array includes()</h2>
      
      <div class="code-section">
        <h3>What is includes()?</h3>
        <p>Returns <strong>true</strong> if element exists in array</p>
        <p>Returns <strong>false</strong> if element not found</p>
        <p>Case-sensitive for strings</p>
      </div>

      <div class="code-section">
        <h3>Syntax:</h3>
        <p><code>array.includes(searchElement, fromIndex)</code></p>
        <p><strong>searchElement:</strong> Value to search for</p>
        <p><strong>fromIndex:</strong> Start position (optional)</p>
      </div>

      <div class="button-group">
        <button id="includesBasicBtn" class="btn">Includes Basic</button>
        <button id="includesStringBtn" class="btn">Includes String</button>
        <button id="includesNotBtn" class="btn">Not Includes</button>
        <button id="includesCaseBtn" class="btn">Case Sensitive</button>
        <button id="includesFromBtn" class="btn">From Index</button>
      </div>

      <div class="result-section">
        <h3>Code:</h3>
        <pre id="result"></pre>
      </div>

      <div class="output-section">
        <h3>Output:</h3>
        <pre id="output"></pre>
      </div>
    </div>
  `,
  cssCode: `
    .topic-container {
      max-width: 900px;
      margin: 0 auto;
      padding: 20px;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%);
      border-radius: 10px;
      color: #fff;
    }

    h2 {
      text-align: center;
      margin-bottom: 30px;
      font-size: 2.5em;
      text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
    }

    .code-section {
      background: rgba(255,255,255,0.1);
      padding: 15px;
      margin: 15px 0;
      border-left: 4px solid #ffd700;
      border-radius: 5px;
      backdrop-filter: blur(10px);
    }

    .code-section h3 {
      margin-top: 0;
      color: #ffd700;
    }

    .code-section p {
      margin: 8px 0;
      line-height: 1.6;
    }

    code {
      background: rgba(0,0,0,0.2);
      padding: 2px 6px;
      border-radius: 3px;
      font-family: 'Courier New', monospace;
    }

    .button-group {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 10px;
      margin: 20px 0;
    }

    .btn {
      padding: 12px 20px;
      background: #ffd700;
      color: #333;
      border: none;
      border-radius: 5px;
      font-weight: bold;
      cursor: pointer;
      transition: all 0.3s ease;
      font-size: 14px;
    }

    .btn:hover {
      background: #ffed4e;
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(0,0,0,0.3);
    }

    .result-section, .output-section {
      background: rgba(0,0,0,0.2);
      padding: 15px;
      margin: 15px 0;
      border-radius: 5px;
      backdrop-filter: blur(10px);
    }

    .result-section h3, .output-section h3 {
      margin-top: 0;
      color: #ffd700;
    }

    pre {
      background: rgba(0,0,0,0.3);
      padding: 15px;
      border-radius: 5px;
      overflow-x: auto;
      color: #fff;
      font-size: 13px;
      line-height: 1.5;
      margin: 0;
    }
  `,
  jsCode: `
    const numbers = [10, 20, 30, 40, 50];
    const fruits = ['apple', 'banana', 'cherry', 'date', 'fig'];
    const colors = ['red', 'green', 'blue', 'yellow'];

    const result = document.getElementById('result');
    const output = document.getElementById('output');

    document.getElementById('includesBasicBtn').addEventListener('click', () => {
      const has30 = numbers.includes(30);
      const has99 = numbers.includes(99);
      
      result.textContent = \`const numbers = [10, 20, 30, 40, 50];\\n\\nconst has30 = numbers.includes(30);  // true\\nconst has99 = numbers.includes(99);  // false\\n\\n✅ Returns boolean (true/false)\\n✅ Simple and readable\\n✅ Perfect for validation\`;
      
      output.textContent = \`✅ includes(30): \${has30}\\n✅ includes(99): \${has99}\\n✅ Easy to check membership\`;
      console.log('includes(30):', has30, 'includes(99):', has99);
    });

    document.getElementById('includesStringBtn').addEventListener('click', () => {
      const hasApple = fruits.includes('apple');
      const hasOrange = fruits.includes('orange');
      
      result.textContent = \`const fruits = ['apple', 'banana', 'cherry', 'date', 'fig'];\\n\\nconst hasApple = fruits.includes('apple');    // true\\nconst hasOrange = fruits.includes('orange');  // false\\n\\n✅ Works with strings\\n✅ Exact match required\\n✅ Common use case\`;
      
      output.textContent = \`✅ includes('apple'): \${hasApple}\\n✅ includes('orange'): \${hasOrange}\\n✅ String search\`;
      console.log('includes(apple):', hasApple, 'includes(orange):', hasOrange);
    });

    document.getElementById('includesNotBtn').addEventListener('click', () => {
      const notInArray = !numbers.includes(100);
      
      result.textContent = \`const numbers = [10, 20, 30, 40, 50];\\n\\nconst notInArray = !numbers.includes(100);  // true\\n\\n✅ Use ! (NOT) operator\\n✅ Check if NOT included\\n✅ Useful for validation\`;
      
      output.textContent = \`✅ !includes(100): \${notInArray}\\n✅ 100 is NOT in array\\n✅ Negation works well\`;
      console.log('!includes(100):', notInArray);
    });

    document.getElementById('includesCaseBtn').addEventListener('click', () => {
      const hasApple = fruits.includes('apple');
      const hasApple_upper = fruits.includes('Apple');
      
      result.textContent = \`const fruits = ['apple', 'banana', 'cherry', 'date', 'fig'];\\n\\nconst hasApple = fruits.includes('apple');    // true\\nconst hasApple_upper = fruits.includes('Apple');  // false\\n\\n✅ Case-sensitive search\\n✅ 'apple' ≠ 'Apple'\\n✅ Exact match required\`;
      
      output.textContent = \`✅ includes('apple'): \${hasApple}\\n✅ includes('Apple'): \${hasApple_upper}\\n✅ Case matters!\`;
      console.log('includes(apple):', hasApple, 'includes(Apple):', hasApple_upper);
    });

    document.getElementById('includesFromBtn').addEventListener('click', () => {
      const fromStart = numbers.includes(30, 0);
      const fromIndex2 = numbers.includes(30, 2);
      const fromIndex3 = numbers.includes(30, 3);
      
      result.textContent = \`const numbers = [10, 20, 30, 40, 50];\\n\\nconst fromStart = numbers.includes(30, 0);   // true\\nconst fromIndex2 = numbers.includes(30, 2);  // true\\nconst fromIndex3 = numbers.includes(30, 3);  // false\\n\\n✅ Second parameter: start index\\n✅ Search from position onwards\\n✅ Useful for optimization\`;
      
      output.textContent = \`✅ includes(30, 0): \${fromStart}\\n✅ includes(30, 2): \${fromIndex2}\\n✅ includes(30, 3): \${fromIndex3}\\n✅ Search from index\`;
      console.log('includes(30, 0):', fromStart, 'includes(30, 2):', fromIndex2, 'includes(30, 3):', fromIndex3);
    });

    console.log('✔️ Includes ready!');`
} ,

{
  topic: 'sort',
  title: '📊 Sort',
  description: 'Sort array elements in place',
  tags: ['array-methods', 'sorting', 'intermediate'],
  difficulty: 'Intermediate',
  htmlCode: `
    <div class="topic-container">
      <h2>📊 Array sort()</h2>
      
      <div class="code-section">
        <h3>What is sort()?</h3>
        <p>Sorts array <strong>in place</strong> (modifies original)</p>
        <p>Default: sorts as <strong>strings</strong> (lexicographic)</p>
        <p>Use compare function for custom sorting</p>
      </div>

      <div class="code-section">
        <h3>Compare Function:</h3>
        <p><code>(a, b) => a - b</code> → Ascending (numbers)</p>
        <p><code>(a, b) => b - a</code> → Descending (numbers)</p>
        <p>Return: negative (a first), 0 (equal), positive (b first)</p>
      </div>

      <div class="button-group">
        <button id="sortDefaultBtn" class="btn">Sort Default</button>
        <button id="sortNumbersBtn" class="btn">Sort Numbers</button>
        <button id="sortDescBtn" class="btn">Sort Descending</button>
        <button id="sortStringsBtn" class="btn">Sort Strings</button>
        <button id="sortObjectsBtn" class="btn">Sort Objects</button>
      </div>

      <div class="result-section">
        <h3>Code:</h3>
        <pre id="result"></pre>
      </div>

      <div class="output-section">
        <h3>Output:</h3>
        <pre id="output"></pre>
      </div>
    </div>
  `,
  cssCode: `
    .topic-container {
      max-width: 900px;
      margin: 0 auto;
      padding: 20px;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
      border-radius: 10px;
      color: #fff;
    }

    h2 {
      text-align: center;
      margin-bottom: 30px;
      font-size: 2.5em;
      text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
    }

    .code-section {
      background: rgba(255,255,255,0.1);
      padding: 15px;
      margin: 15px 0;
      border-left: 4px solid #ffd700;
      border-radius: 5px;
      backdrop-filter: blur(10px);
    }

    .code-section h3 {
      margin-top: 0;
      color: #ffd700;
    }

    .code-section p {
      margin: 8px 0;
      line-height: 1.6;
    }

    code {
      background: rgba(0,0,0,0.2);
      padding: 2px 6px;
      border-radius: 3px;
      font-family: 'Courier New', monospace;
    }

    .button-group {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 10px;
      margin: 20px 0;
    }

    .btn {
      padding: 12px 20px;
      background: #ffd700;
      color: #333;
      border: none;
      border-radius: 5px;
      font-weight: bold;
      cursor: pointer;
      transition: all 0.3s ease;
      font-size: 14px;
    }

    .btn:hover {
      background: #ffed4e;
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(0,0,0,0.3);
    }

    .result-section, .output-section {
      background: rgba(0,0,0,0.2);
      padding: 15px;
      margin: 15px 0;
      border-radius: 5px;
      backdrop-filter: blur(10px);
    }

    .result-section h3, .output-section h3 {
      margin-top: 0;
      color: #ffd700;
    }

    pre {
      background: rgba(0,0,0,0.3);
      padding: 15px;
      border-radius: 5px;
      overflow-x: auto;
      color: #fff;
      font-size: 13px;
      line-height: 1.5;
      margin: 0;
    }
  `,
  jsCode: `
    const result = document.getElementById('result');
    const output = document.getElementById('output');

    document.getElementById('sortDefaultBtn').addEventListener('click', () => {
      const numbers = [30, 10, 50, 20, 40];
      const sorted = [...numbers].sort();
      
      result.textContent = \`const numbers = [30, 10, 50, 20, 40];\\n\\nconst sorted = [...numbers].sort();\\n\\nOriginal: [30, 10, 50, 20, 40]\\nSorted: [\${sorted}]\\n\\n⚠️ Default sorts as STRINGS!\\n✅ '10' comes before '2'\\n✅ Use compare function for numbers\`;
      
      output.textContent = \`✅ Default Sort: [\${sorted}]\\n⚠️ Lexicographic order\\n⚠️ Not numeric order!\`;
      console.log('Default sort:', sorted);
    });

    document.getElementById('sortNumbersBtn').addEventListener('click', () => {
      const numbers = [30, 10, 50, 20, 40];
      const sorted = [...numbers].sort((a, b) => a - b);
      
      result.textContent = \`const numbers = [30, 10, 50, 20, 40];\\n\\nconst sorted = [...numbers].sort((a, b) => a - b);\\n\\nOriginal: [30, 10, 50, 20, 40]\\nSorted: [\${sorted}]\\n\\n✅ Compare function: (a, b) => a - b\\n✅ Ascending order\\n✅ Numeric comparison\`;
      
      output.textContent = \`✅ Ascending: [\${sorted}]\\n✅ Numeric sort\\n✅ Correct order!\`;
      console.log('Numeric sort ascending:', sorted);
    });

    document.getElementById('sortDescBtn').addEventListener('click', () => {
      const numbers = [30, 10, 50, 20, 40];
      const sorted = [...numbers].sort((a, b) => b - a);
      
      result.textContent = \`const numbers = [30, 10, 50, 20, 40];\\n\\nconst sorted = [...numbers].sort((a, b) => b - a);\\n\\nOriginal: [30, 10, 50, 20, 40]\\nSorted: [\${sorted}]\\n\\n✅ Compare function: (a, b) => b - a\\n✅ Descending order\\n✅ Reverse numeric\`;
      
      output.textContent = \`✅ Descending: [\${sorted}]\\n✅ Largest first\\n✅ Reverse order!\`;
      console.log('Numeric sort descending:', sorted);
    });

    document.getElementById('sortStringsBtn').addEventListener('click', () => {
      const fruits = ['cherry', 'apple', 'date', 'banana', 'fig'];
      const sorted = [...fruits].sort();
      
      result.textContent = \`const fruits = ['cherry', 'apple', 'date', 'banana', 'fig'];\\n\\nconst sorted = [...fruits].sort();\\n\\nOriginal: [cherry, apple, date, banana, fig]\\nSorted: [\${sorted}]\\n\\n✅ Default sort works for strings\\n✅ Alphabetical order\\n✅ Case-sensitive\`;
      
      output.textContent = \`✅ Alphabetical: [\${sorted}]\\n✅ String sort\\n✅ A-Z order!\`;
      console.log('String sort:', sorted);
    });

    document.getElementById('sortObjectsBtn').addEventListener('click', () => {
      const users = [
        { name: 'Charlie', age: 35 },
        { name: 'Alice', age: 25 },
        { name: 'Bob', age: 30 }
      ];
      const sorted = [...users].sort((a, b) => a.age - b.age);
      
      result.textContent = \`const users = [\\n  { name: 'Charlie', age: 35 },\\n  { name: 'Alice', age: 25 },\\n  { name: 'Bob', age: 30 }\\n];\\n\\nconst sorted = [...users].sort((a, b) => a.age - b.age);\\n\\nSorted by age: [\${sorted.map(u => u.name).join(', ')}]\\n\\n✅ Sort objects by property\\n✅ Compare function accesses properties\\n✅ Powerful for data\`;
      
      output.textContent = \`✅ Sorted: [\${sorted.map(u => \`\${u.name}(\${u.age})\`).join(', ')}]\\n✅ By age ascending\\n✅ Object sorting!\`;
      console.log('Object sort:', sorted);
    });

    console.log('📊 Sort ready!');`
} ,

{
  topic: 'flat-flatMap',
  title: '📦 Flat & FlatMap',
  description: 'Flatten nested arrays and map combined',
  tags: ['array-methods', 'transformation', 'intermediate'],
  difficulty: 'Intermediate',
  htmlCode: `
    <div class="topic-container">
      <h2>📦 Array flat() & flatMap()</h2>
      
      <div class="code-section">
        <h3>What is flat()?</h3>
        <p>Flattens nested arrays into single level</p>
        <p><code>array.flat(depth)</code> - depth: how many levels to flatten</p>
        <p>Default depth: 1</p>
      </div>

      <div class="code-section">
        <h3>What is flatMap()?</h3>
        <p>Combines <strong>map()</strong> and <strong>flat()</strong></p>
        <p>Maps each element, then flattens result</p>
        <p>Equivalent to: <code>map().flat()</code></p>
      </div>

      <div class="button-group">
        <button id="flatBasicBtn" class="btn">Flat Basic</button>
        <button id="flatDepthBtn" class="btn">Flat Depth</button>
        <button id="flatMapBtn" class="btn">FlatMap</button>
        <button id="flatMapDuplicateBtn" class="btn">FlatMap Duplicate</button>
        <button id="flatMapFilterBtn" class="btn">FlatMap Filter</button>
      </div>

      <div class="result-section">
        <h3>Code:</h3>
        <pre id="result"></pre>
      </div>

      <div class="output-section">
        <h3>Output:</h3>
        <pre id="output"></pre>
      </div>
    </div>
  `,
  cssCode: `
    .topic-container {
      max-width: 900px;
      margin: 0 auto;
      padding: 20px;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
      border-radius: 10px;
      color: #fff;
    }

    h2 {
      text-align: center;
      margin-bottom: 30px;
      font-size: 2.5em;
      text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
    }

    .code-section {
      background: rgba(255,255,255,0.1);
      padding: 15px;
      margin: 15px 0;
      border-left: 4px solid #ffd700;
      border-radius: 5px;
      backdrop-filter: blur(10px);
    }

    .code-section h3 {
      margin-top: 0;
      color: #ffd700;
    }

    .code-section p {
      margin: 8px 0;
      line-height: 1.6;
    }

    code {
      background: rgba(0,0,0,0.2);
      padding: 2px 6px;
      border-radius: 3px;
      font-family: 'Courier New', monospace;
    }

    .button-group {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 10px;
      margin: 20px 0;
    }

    .btn {
      padding: 12px 20px;
      background: #ffd700;
      color: #333;
      border: none;
      border-radius: 5px;
      font-weight: bold;
      cursor: pointer;
      transition: all 0.3s ease;
      font-size: 14px;
    }

    .btn:hover {
      background: #ffed4e;
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(0,0,0,0.3);
    }

    .result-section, .output-section {
      background: rgba(0,0,0,0.2);
      padding: 15px;
      margin: 15px 0;
      border-radius: 5px;
      backdrop-filter: blur(10px);
    }

    .result-section h3, .output-section h3 {
      margin-top: 0;
      color: #ffd700;
    }

    pre {
      background: rgba(0,0,0,0.3);
      padding: 15px;
      border-radius: 5px;
      overflow-x: auto;
      color: #fff;
      font-size: 13px;
      line-height: 1.5;
      margin: 0;
    }
  `,
  jsCode: `
    const result = document.getElementById('result');
    const output = document.getElementById('output');

    document.getElementById('flatBasicBtn').addEventListener('click', () => {
      const nested = [1, [2, 3], [4, 5]];
      const flattened = nested.flat();
      
      result.textContent = \`const nested = [1, [2, 3], [4, 5]];\\n\\nconst flattened = nested.flat();\\n\\nOriginal: [1, [2, 3], [4, 5]]\\nFlattened: [\${flattened}]\\n\\n✅ Removes one level of nesting\\n✅ Default depth: 1\\n✅ Creates new array\`;
      
      output.textContent = \`✅ Result: [\${flattened}]\\n✅ Single level\\n✅ All elements accessible!\`;
      console.log('Flattened:', flattened);
    });

    document.getElementById('flatDepthBtn').addEventListener('click', () => {
      const deepNested = [1, [2, [3, [4, 5]]]];
      const flat1 = deepNested.flat(1);
      const flat2 = deepNested.flat(2);
      const flatAll = deepNested.flat(Infinity);
      
      result.textContent = \`const deepNested = [1, [2, [3, [4, 5]]]];\\n\\nconst flat1 = deepNested.flat(1);\\nconst flat2 = deepNested.flat(2);\\nconst flatAll = deepNested.flat(Infinity);\\n\\nflat(1): [\${flat1}]\\nflat(2): [\${flat2}]\\nflat(Infinity): [\${flatAll}]\\n\\n✅ Depth parameter controls levels\\n✅ Infinity flattens completely\\n✅ Useful for deep nesting\`;
      
      output.textContent = \`✅ flat(1): [\${flat1}]\\n✅ flat(2): [\${flat2}]\\n✅ flat(Infinity): [\${flatAll}]\`;
      console.log('flat(1):', flat1, 'flat(2):', flat2, 'flat(Infinity):', flatAll);
    });

    document.getElementById('flatMapBtn').addEventListener('click', () => {
      const numbers = [1, 2, 3];
      const result_val = numbers.flatMap((num) => [num, num * 2]);
      
      result.textContent = \`const numbers = [1, 2, 3];\\n\\nconst result = numbers.flatMap((num) => [num, num * 2]);\\n\\nOriginal: [1, 2, 3]\\nResult: [\${result_val}]\\n\\n✅ Maps each element to array\\n✅ Then flattens result\\n✅ Equivalent to map().flat()\`;
      
      output.textContent = \`✅ FlatMap Result: [\${result_val}]\\n✅ Each number doubled\\n✅ All in single array!\`;
      console.log('FlatMap:', result_val);
    });

    document.getElementById('flatMapDuplicateBtn').addEventListener('click', () => {
      const words = ['hello', 'world'];
      const result_val = words.flatMap((word) => [word, word.toUpperCase()]);
      
      result.textContent = \`const words = ['hello', 'world'];\\n\\nconst result = words.flatMap((word) => [word, word.toUpperCase()]);\\n\\nOriginal: [hello, world]\\nResult: [\${result_val}]\\n\\n✅ Creates pairs of values\\n✅ Flattens into single array\\n✅ Powerful transformation\`;
      
      output.textContent = \`✅ Result: [\${result_val}]\\n✅ Original + uppercase\\n✅ All combined!\`;
      console.log('FlatMap duplicate:', result_val);
    });

    document.getElementById('flatMapFilterBtn').addEventListener('click', () => {
      const numbers = [1, 2, 3, 4, 5];
      const result_val = numbers.flatMap((num) => num % 2 === 0 ? [num, num * 2] : []);
      
      result.textContent = \`const numbers = [1, 2, 3, 4, 5];\\n\\nconst result = numbers.flatMap((num) => \\n  num % 2 === 0 ? [num, num * 2] : []\\n);\\n\\nOriginal: [1, 2, 3, 4, 5]\\nResult: [\${result_val}]\\n\\n✅ Filter + map + flatten\\n✅ Return [] to skip\\n✅ Return [value] to include\`;
      
      output.textContent = \`✅ Result: [\${result_val}]\\n✅ Even numbers only\\n✅ With duplicates!\`;
      console.log('FlatMap filter:', result_val);
    });

    console.log('📦 Flat & FlatMap ready!');`
} ,

{
  topic: 'array-spread',
  title: '✨ Spread Operator',
  description: 'Expand array elements using spread syntax',
  tags: ['array-methods', 'syntax', 'intermediate'],
  difficulty: 'Intermediate',
  htmlCode: `
    <div class="topic-container">
      <h2>✨ Array Spread Operator (...)</h2>
      
      <div class="code-section">
        <h3>What is Spread Operator?</h3>
        <p>Expands array elements into individual items</p>
        <p>Syntax: <code>...array</code></p>
        <p>Creates shallow copy of array</p>
      </div>

      <div class="code-section">
        <h3>Common Uses:</h3>
        <p>✅ Copy arrays: <code>[...original]</code></p>
        <p>✅ Merge arrays: <code>[...arr1, ...arr2]</code></p>
        <p>✅ Add elements: <code>[...arr, newItem]</code></p>
        <p>✅ Function arguments: <code>func(...array)</code></p>
      </div>

      <div class="button-group">
        <button id="spreadCopyBtn" class="btn">Copy Array</button>
        <button id="spreadMergeBtn" class="btn">Merge Arrays</button>
        <button id="spreadAddBtn" class="btn">Add Elements</button>
        <button id="spreadFunctionBtn" class="btn">Function Args</button>
        <button id="spreadMiddleBtn" class="btn">Insert Middle</button>
      </div>

      <div class="result-section">
        <h3>Code:</h3>
        <pre id="result"></pre>
      </div>

      <div class="output-section">
        <h3>Output:</h3>
        <pre id="output"></pre>
      </div>
    </div>
  `,
  cssCode: `
    .topic-container {
      max-width: 900px;
      margin: 0 auto;
      padding: 20px;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
      border-radius: 10px;
      color: #fff;
    }

    h2 {
      text-align: center;
      margin-bottom: 30px;
      font-size: 2.5em;
      text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
    }

    .code-section {
      background: rgba(255,255,255,0.1);
      padding: 15px;
      margin: 15px 0;
      border-left: 4px solid #ffd700;
      border-radius: 5px;
      backdrop-filter: blur(10px);
    }

    .code-section h3 {
      margin-top: 0;
      color: #ffd700;
    }

    .code-section p {
      margin: 8px 0;
      line-height: 1.6;
    }

    code {
      background: rgba(0,0,0,0.2);
      padding: 2px 6px;
      border-radius: 3px;
      font-family: 'Courier New', monospace;
    }

    .button-group {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 10px;
      margin: 20px 0;
    }

    .btn {
      padding: 12px 20px;
      background: #ffd700;
      color: #333;
      border: none;
      border-radius: 5px;
      font-weight: bold;
      cursor: pointer;
      transition: all 0.3s ease;
      font-size: 14px;
    }

    .btn:hover {
      background: #ffed4e;
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(0,0,0,0.3);
    }

    .result-section, .output-section {
      background: rgba(0,0,0,0.2);
      padding: 15px;
      margin: 15px 0;
      border-radius: 5px;
      backdrop-filter: blur(10px);
    }

    .result-section h3, .output-section h3 {
      margin-top: 0;
      color: #ffd700;
    }

    pre {
      background: rgba(0,0,0,0.3);
      padding: 15px;
      border-radius: 5px;
      overflow-x: auto;
      color: #fff;
      font-size: 13px;
      line-height: 1.5;
      margin: 0;
    }
  `,
  jsCode: `
    const result = document.getElementById('result');
    const output = document.getElementById('output');

    document.getElementById('spreadCopyBtn').addEventListener('click', () => {
      const original = [1, 2, 3];
      const copy = [...original];
      copy[0] = 99;
      
      result.textContent = \`const original = [1, 2, 3];\\nconst copy = [...original];\\ncopy[0] = 99;\\n\\nOriginal: [\${original}]\\nCopy: [\${copy}]\\n\\n✅ Spread creates new array\\n✅ Changes don't affect original\\n✅ Shallow copy\`;
      
      output.textContent = \`✅ Original: [\${original}]\\n✅ Copy: [\${copy}]\\n✅ Independent arrays!\`;
      console.log('Original:', original, 'Copy:', copy);
    });

    document.getElementById('spreadMergeBtn').addEventListener('click', () => {
      const arr1 = [1, 2, 3];
      const arr2 = [4, 5, 6];
      const merged = [...arr1, ...arr2];
      
      result.textContent = \`const arr1 = [1, 2, 3];\\nconst arr2 = [4, 5, 6];\\nconst merged = [...arr1, ...arr2];\\n\\nArray 1: [\${arr1}]\\nArray 2: [\${arr2}]\\nMerged: [\${merged}]\\n\\n✅ Combine multiple arrays\\n✅ Order matters\\n✅ Creates new array\`;
      
      output.textContent = \`✅ Merged: [\${merged}]\\n✅ All elements combined\\n✅ Original order preserved!\`;
      console.log('Merged:', merged);
    });

    document.getElementById('spreadAddBtn').addEventListener('click', () => {
      const original = [1, 2, 3];
      const withNew = [...original, 4, 5];
      
      result.textContent = \`const original = [1, 2, 3];\\nconst withNew = [...original, 4, 5];\\n\\nOriginal: [\${original}]\\nWith new: [\${withNew}]\\n\\n✅ Add elements at end\\n✅ Spread first, then add\\n✅ Flexible syntax\`;
      
      output.textContent = \`✅ Result: [\${withNew}]\\n✅ Original + new items\\n✅ Easy to extend!\`;
      console.log('With new:', withNew);
    });

    document.getElementById('spreadFunctionBtn').addEventListener('click', () => {
      const numbers = [5, 2, 8, 1, 9];
      const max = Math.max(...numbers);
      const min = Math.min(...numbers);
      
      result.textContent = \`const numbers = [5, 2, 8, 1, 9];\\nconst max = Math.max(...numbers);\\nconst min = Math.min(...numbers);\\n\\nArray: [\${numbers}]\\nMax: \${max}\\nMin: \${min}\\n\\n✅ Pass array as function arguments\\n✅ Spread expands elements\\n✅ Works with any function\`;
      
      output.textContent = \`✅ Max: \${max}\\n✅ Min: \${min}\\n✅ Function arguments!\`;
      console.log('Max:', max, 'Min:', min);
    });

    document.getElementById('spreadMiddleBtn').addEventListener('click', () => {
      const arr1 = [1, 2];
      const arr2 = [5, 6];
      const combined = [...arr1, 3, 4, ...arr2];
      
      result.textContent = \`const arr1 = [1, 2];\\nconst arr2 = [5, 6];\\nconst combined = [...arr1, 3, 4, ...arr2];\\n\\nArray 1: [\${arr1}]\\nArray 2: [\${arr2}]\\nCombined: [\${combined}]\\n\\n✅ Insert elements in middle\\n✅ Multiple spreads allowed\\n✅ Mix spreads and values\`;
      
      output.textContent = \`✅ Result: [\${combined}]\\n✅ Elements in order\\n✅ Flexible positioning!\`;
      console.log('Combined:', combined);
    });

    console.log('✨ Spread Operator ready!');`
} ,

{
  topic: 'array-destructuring',
  title: '🎯 Array Destructuring',
  description: 'Extract values from arrays into variables',
  tags: ['array-methods', 'syntax', 'intermediate'],
  difficulty: 'Intermediate',
  htmlCode: `
    <div class="topic-container">
      <h2>🎯 Array Destructuring</h2>
      
      <div class="code-section">
        <h3>What is Destructuring?</h3>
        <p>Extract array elements into separate variables</p>
        <p>Syntax: <code>const [a, b, c] = array</code></p>
        <p>Cleaner than accessing by index</p>
      </div>

      <div class="code-section">
        <h3>Features:</h3>
        <p>✅ Skip elements: <code>const [a, , c] = array</code></p>
        <p>✅ Rest operator: <code>const [a, ...rest] = array</code></p>
        <p>✅ Default values: <code>const [a = 0] = array</code></p>
        <p>✅ Swap values: <code>[a, b] = [b, a]</code></p>
      </div>

      <div class="button-group">
        <button id="destructBasicBtn" class="btn">Basic</button>
        <button id="destructSkipBtn" class="btn">Skip Elements</button>
        <button id="destructRestBtn" class="btn">Rest Operator</button>
        <button id="destructDefaultBtn" class="btn">Default Values</button>
        <button id="destructSwapBtn" class="btn">Swap Values</button>
      </div>

      <div class="result-section">
        <h3>Code:</h3>
        <pre id="result"></pre>
      </div>

      <div class="output-section">
        <h3>Output:</h3>
        <pre id="output"></pre>
      </div>
    </div>
  `,
  cssCode: `
    .topic-container {
      max-width: 900px;
      margin: 0 auto;
      padding: 20px;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
      border-radius: 10px;
      color: #fff;
    }

    h2 {
      text-align: center;
      margin-bottom: 30px;
      font-size: 2.5em;
      text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
    }

    .code-section {
      background: rgba(255,255,255,0.1);
      padding: 15px;
      margin: 15px 0;
      border-left: 4px solid #ffd700;
      border-radius: 5px;
      backdrop-filter: blur(10px);
    }

    .code-section h3 {
      margin-top: 0;
      color: #ffd700;
    }

    .code-section p {
      margin: 8px 0;
      line-height: 1.6;
    }

    code {
      background: rgba(0,0,0,0.2);
      padding: 2px 6px;
      border-radius: 3px;
      font-family: 'Courier New', monospace;
    }

    .button-group {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 10px;
      margin: 20px 0;
    }

    .btn {
      padding: 12px 20px;
      background: #ffd700;
      color: #333;
      border: none;
      border-radius: 5px;
      font-weight: bold;
      cursor: pointer;
      transition: all 0.3s ease;
      font-size: 14px;
    }

    .btn:hover {
      background: #ffed4e;
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(0,0,0,0.3);
    }

    .result-section, .output-section {
      background: rgba(0,0,0,0.2);
      padding: 15px;
      margin: 15px 0;
      border-radius: 5px;
      backdrop-filter: blur(10px);
    }

    .result-section h3, .output-section h3 {
      margin-top: 0;
      color: #ffd700;
    }

    pre {
      background: rgba(0,0,0,0.3);
      padding: 15px;
      border-radius: 5px;
      overflow-x: auto;
      color: #fff;
      font-size: 13px;
      line-height: 1.5;
      margin: 0;
    }
  `,
  jsCode: `
    const result = document.getElementById('result');
    const output = document.getElementById('output');

    document.getElementById('destructBasicBtn').addEventListener('click', () => {
      const colors = ['red', 'green', 'blue'];
      const [first, second, third] = colors;
      
      result.textContent = \`const colors = ['red', 'green', 'blue'];\\nconst [first, second, third] = colors;\\n\\nfirst: '\${first}'\\nsecond: '\${second}'\\nthird: '\${third}'\\n\\n✅ Extract array elements\\n✅ Into separate variables\\n✅ Cleaner than index access\`;
      
      output.textContent = \`✅ first: \${first}\\n✅ second: \${second}\\n✅ third: \${third}\\n✅ Easy variable assignment!\`;
      console.log('first:', first, 'second:', second, 'third:', third);
    });

    document.getElementById('destructSkipBtn').addEventListener('click', () => {
      const numbers = [10, 20, 30, 40, 50];
      const [first, , third, , fifth] = numbers;
      
      result.textContent = \`const numbers = [10, 20, 30, 40, 50];\\nconst [first, , third, , fifth] = numbers;\\n\\nfirst: \${first}\\nthird: \${third}\\nfifth: \${fifth}\\n\\n✅ Skip elements with comma\\n✅ Only extract needed values\\n✅ Ignore middle elements\`;
      
      output.textContent = \`✅ first: \${first}\\n✅ third: \${third}\\n✅ fifth: \${fifth}\\n✅ Selective extraction!\`;
      console.log('first:', first, 'third:', third, 'fifth:', fifth);
    });

    document.getElementById('destructRestBtn').addEventListener('click', () => {
      const numbers = [1, 2, 3, 4, 5];
      const [first, second, ...rest] = numbers;
      
      result.textContent = \`const numbers = [1, 2, 3, 4, 5];\\nconst [first, second, ...rest] = numbers;\\n\\nfirst: \${first}\\nsecond: \${second}\\nrest: [\${rest}]\\n\\n✅ Rest operator (...) captures remaining\\n✅ Creates array of rest elements\\n✅ Must be last in destructuring\`;
      
      output.textContent = \`✅ first: \${first}\\n✅ second: \${second}\\n✅ rest: [\${rest}]\\n✅ Capture remaining elements!\`;
      console.log('first:', first, 'second:', second, 'rest:', rest);
    });

    document.getElementById('destructDefaultBtn').addEventListener('click', () => {
      const colors = ['red'];
      const [primary = 'blue', secondary = 'green', tertiary = 'yellow'] = colors;
      
      result.textContent = \`const colors = ['red'];\\nconst [primary = 'blue', secondary = 'green', tertiary = 'yellow'] = colors;\\n\\nprimary: '\${primary}'\\nsecondary: '\${secondary}'\\ntertiary: '\${tertiary}'\\n\\n✅ Set default values\\n✅ Used if element undefined\\n✅ Prevents undefined errors\`;
      
      output.textContent = \`✅ primary: \${primary}\\n✅ secondary: \${secondary}\\n✅ tertiary: \${tertiary}\\n✅ Defaults applied!\`;
      console.log('primary:', primary, 'secondary:', secondary, 'tertiary:', tertiary);
    });

    document.getElementById('destructSwapBtn').addEventListener('click', () => {
      let a = 5;
      let b = 10;
      
      result.textContent = \`let a = 5;\\nlet b = 10;\\n\\nBefore: a = \${a}, b = \${b}\\n\\n[a, b] = [b, a];\\n\\nAfter: a = \${b}, b = \${a}\\n\\n✅ Swap values easily\\n✅ No temp variable needed\\n✅ Destructuring magic!\`;
      
      [a, b] = [b, a];
      
      output.textContent = \`✅ Before: a = 5, b = 10\\n✅ After: a = \${a}, b = \${b}\\n✅ Values swapped!\`;
      console.log('After swap - a:', a, 'b:', b);
    });

    console.log('🎯 Array Destructuring ready!');`
} ,


  {
    topic: 'create-objects',
    title: '📦 Create Objects',
    description: 'Create objects with properties and methods',
    tags: ['objects', 'basics', 'beginner'],
    difficulty: 'Beginner',
    htmlCode: `
      <div class="topic-container">
        <h2>📦 Creating Objects</h2>
        
        <div class="code-section">
          <h3>Object Literal Syntax:</h3>
          <p><code>const obj = { key: value, method() {} }</code></p>
          <p>Most common way to create objects</p>
        </div>

        <div class="button-group">
          <button id="literalBtn" class="btn">Object Literal</button>
          <button id="propertiesBtn" class="btn">With Properties</button>
          <button id="methodsBtn" class="btn">With Methods</button>
          <button id="nestedBtn" class="btn">Nested Objects</button>
          <button id="mixedBtn" class="btn">Mixed Data</button>
        </div>

        <div class="result-section">
          <h3>Code:</h3>
          <pre id="result"></pre>
        </div>

        <div class="output-section">
          <h3>Output:</h3>
          <pre id="output"></pre>
        </div>
      </div>
    `,
    cssCode: `
      .topic-container {
        max-width: 900px;
        margin: 0 auto;
        padding: 20px;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        border-radius: 10px;
        color: #fff;
      }

      h2 {
        text-align: center;
        margin-bottom: 30px;
        font-size: 2.5em;
        text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
      }

      .code-section {
        background: rgba(255,255,255,0.1);
        padding: 15px;
        margin: 15px 0;
        border-left: 4px solid #ffd700;
        border-radius: 5px;
        backdrop-filter: blur(10px);
      }

      .code-section h3 {
        margin-top: 0;
        color: #ffd700;
      }

      .code-section p {
        margin: 8px 0;
        line-height: 1.6;
      }

      code {
        background: rgba(0,0,0,0.2);
        padding: 2px 6px;
        border-radius: 3px;
        font-family: 'Courier New', monospace;
      }

      .button-group {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        gap: 10px;
        margin: 20px 0;
      }

      .btn {
        padding: 12px 20px;
        background: #ffd700;
        color: #333;
        border: none;
        border-radius: 5px;
        font-weight: bold;
        cursor: pointer;
        transition: all 0.3s ease;
        font-size: 14px;
      }

      .btn:hover {
        background: #ffed4e;
        transform: translateY(-2px);
        box-shadow: 0 5px 15px rgba(0,0,0,0.3);
      }

      .result-section, .output-section {
        background: rgba(0,0,0,0.2);
        padding: 15px;
        margin: 15px 0;
        border-radius: 5px;
        backdrop-filter: blur(10px);
      }

      .result-section h3, .output-section h3 {
        margin-top: 0;
        color: #ffd700;
      }

      pre {
        background: rgba(0,0,0,0.3);
        padding: 15px;
        border-radius: 5px;
        overflow-x: auto;
        color: #fff;
        font-size: 13px;
        line-height: 1.5;
        margin: 0;
      }
    `,
    jsCode: `
      const result = document.getElementById('result');
      const output = document.getElementById('output');

      document.getElementById('literalBtn').addEventListener('click', () => {
        const obj = { name: 'John', age: 30 };
        
        result.textContent = \`const obj = { name: 'John', age: 30 };\\n\\nObject created!\\n\\n✅ Object literal syntax\\n✅ Key-value pairs\\n✅ Most common method\`;
        
        output.textContent = \`✅ Object: \${JSON.stringify(obj)}\\n✅ name: \${obj.name}\\n✅ age: \${obj.age}\`;
        console.log('Object:', obj);
      });

      document.getElementById('propertiesBtn').addEventListener('click', () => {
        const person = {
          name: 'Alice',
          age: 25,
          city: 'NYC',
          email: 'alice@example.com'
        };
        
        result.textContent = \`const person = {\\n  name: 'Alice',\\n  age: 25,\\n  city: 'NYC',\\n  email: 'alice@example.com'\\n};\\n\\n✅ Multiple properties\\n✅ Different data types\\n✅ Easy to organize\`;
        
        output.textContent = \`✅ Name: \${person.name}\\n✅ Age: \${person.age}\\n✅ City: \${person.city}\\n✅ Email: \${person.email}\`;
        console.log('Person:', person);
      });

      document.getElementById('methodsBtn').addEventListener('click', () => {
        const user = {
          name: 'Bob',
          greet() {
            return \`Hello, I'm \${this.name}!\`;
          },
          introduce() {
            return \`My name is \${this.name}\`;
          }
        };
        
        result.textContent = \`const user = {\\n  name: 'Bob',\\n  greet() {\\n    return \\\`Hello, I'm \${this.name}!\\\`;\\n  }\\n};\\n\\n✅ Methods in objects\\n✅ Functions as properties\\n✅ Access with this\`;
        
        output.textContent = \`✅ Greeting: \${user.greet()}\\n✅ Intro: \${user.introduce()}\`;
        console.log('User:', user);
      });

      document.getElementById('nestedBtn').addEventListener('click', () => {
        const company = {
          name: 'TechCorp',
          address: {
            street: '123 Main St',
            city: 'NYC',
            zip: '10001'
          }
        };
        
        result.textContent = \`const company = {\\n  name: 'TechCorp',\\n  address: {\\n    street: '123 Main St',\\n    city: 'NYC'\\n  }\\n};\\n\\n✅ Nested objects\\n✅ Objects within objects\\n✅ Access with dot notation\`;
        
        output.textContent = \`✅ Company: \${company.name}\\n✅ Street: \${company.address.street}\\n✅ City: \${company.address.city}\`;
        console.log('Company:', company);
      });

      document.getElementById('mixedBtn').addEventListener('click', () => {
        const data = {
          title: 'JavaScript',
          level: 3,
          active: true,
          tags: ['web', 'programming', 'js'],
          stats: { views: 1000, likes: 500 }
        };
        
        result.textContent = \`const data = {\\n  title: 'JavaScript',\\n  level: 3,\\n  active: true,\\n  tags: ['web', 'programming', 'js'],\\n  stats: { views: 1000, likes: 500 }\\n};\\n\\n✅ Mixed data types\\n✅ Strings, numbers, booleans\\n✅ Arrays and nested objects\`;
        
        output.textContent = \`✅ Title: \${data.title}\\n✅ Level: \${data.level}\\n✅ Active: \${data.active}\\n✅ Tags: \${data.tags.join(', ')}\\n✅ Views: \${data.stats.views}\`;
        console.log('Data:', data);
      });

      console.log('📦 Create Objects ready!');`
  } ,

  {
    topic: 'object-methods',
    title: '⚙️ Object Methods',
    description: 'Functions defined as properties on objects',
    tags: ['objects', 'methods', 'intermediate'],
    difficulty: 'Intermediate',
    htmlCode: `
      <div class="topic-container">
        <h2>⚙️ Object Methods</h2>
        
        <div class="code-section">
          <h3>Methods are Functions in Objects:</h3>
          <p><code>const obj = { method() { } }</code></p>
          <p>Access with <code>obj.method()</code></p>
        </div>

        <div class="button-group">
          <button id="basicMethodBtn" class="btn">Basic Method</button>
          <button id="thisBtn" class="btn">Using this</button>
          <button id="multipleBtn" class="btn">Multiple Methods</button>
          <button id="chainBtn" class="btn">Method Chaining</button>
          <button id="calculatorBtn" class="btn">Calculator</button>
        </div>

        <div class="result-section">
          <h3>Code:</h3>
          <pre id="result"></pre>
        </div>

        <div class="output-section">
          <h3>Output:</h3>
          <pre id="output"></pre>
        </div>
      </div>
    `,
    cssCode: `
      .topic-container {
        max-width: 900px;
        margin: 0 auto;
        padding: 20px;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%);
        border-radius: 10px;
        color: #fff;
      }

      h2 {
        text-align: center;
        margin-bottom: 30px;
        font-size: 2.5em;
        text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
      }

      .code-section {
        background: rgba(255,255,255,0.1);
        padding: 15px;
        margin: 15px 0;
        border-left: 4px solid #ffd700;
        border-radius: 5px;
        backdrop-filter: blur(10px);
      }

      .code-section h3 {
        margin-top: 0;
        color: #ffd700;
      }

      .code-section p {
        margin: 8px 0;
        line-height: 1.6;
      }

      code {
        background: rgba(0,0,0,0.2);
        padding: 2px 6px;
        border-radius: 3px;
        font-family: 'Courier New', monospace;
      }

      .button-group {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        gap: 10px;
        margin: 20px 0;
      }

      .btn {
        padding: 12px 20px;
        background: #ffd700;
        color: #333;
        border: none;
        border-radius: 5px;
        font-weight: bold;
        cursor: pointer;
        transition: all 0.3s ease;
        font-size: 14px;
      }

      .btn:hover {
        background: #ffed4e;
        transform: translateY(-2px);
        box-shadow: 0 5px 15px rgba(0,0,0,0.3);
      }

      .result-section, .output-section {
        background: rgba(0,0,0,0.2);
        padding: 15px;
        margin: 15px 0;
        border-radius: 5px;
        backdrop-filter: blur(10px);
      }

      .result-section h3, .output-section h3 {
        margin-top: 0;
        color: #ffd700;
      }

      pre {
        background: rgba(0,0,0,0.3);
        padding: 15px;
        border-radius: 5px;
        overflow-x: auto;
        color: #fff;
        font-size: 13px;
        line-height: 1.5;
        margin: 0;
      }
    `,
    jsCode: `
      const result = document.getElementById('result');
      const output = document.getElementById('output');

      document.getElementById('basicMethodBtn').addEventListener('click', () => {
        const obj = {
          greet() {
            return 'Hello!';
          }
        };
        
        result.textContent = \`const obj = {\\n  greet() {\\n    return 'Hello!';\\n  }\\n};\\n\\nobj.greet();  // 'Hello!'\\n\\n✅ Method is a function\\n✅ Called with ()\\n✅ Returns a value\`;
        
        output.textContent = \`✅ Result: \${obj.greet()}\\n✅ Method executed!\`;
        console.log('Basic method:', obj.greet());
      });

      document.getElementById('thisBtn').addEventListener('click', () => {
        const person = {
          name: 'Alice',
          age: 25,
          introduce() {
            return \`I'm \${this.name}, \${this.age} years old\`;
          }
        };
        
        result.textContent = \`const person = {\\n  name: 'Alice',\\n  age: 25,\\n  introduce() {\\n    return \\\`I'm \${this.name}, \${this.age}\\\`;\\n  }\\n};\\n\\n✅ this refers to object\\n✅ Access properties\\n✅ Dynamic values\`;
        
        output.textContent = \`✅ \${person.introduce()}\`;
        console.log('This keyword:', person.introduce());
      });

      document.getElementById('multipleBtn').addEventListener('click', () => {
        const calculator = {
          value: 0,
          add(n) { this.value += n; return this; },
          subtract(n) { this.value -= n; return this; },
          multiply(n) { this.value *= n; return this; },
          getResult() { return this.value; }
        };
        
        result.textContent = \`const calculator = {\\n  value: 0,\\n  add(n) { this.value += n; },\\n  subtract(n) { this.value -= n; },\\n  multiply(n) { this.value *= n; },\\n  getResult() { return this.value; }\\n};\\n\\n✅ Multiple methods\\n✅ Operate on same object\\n✅ Shared state\`;
        
        output.textContent = \`✅ Multiple methods defined\\n✅ Each modifies object\\n✅ Organized functionality!\`;
        console.log('Multiple methods:', calculator);
      });

      document.getElementById('chainBtn').addEventListener('click', () => {
        const calc = {
          value: 0,
          add(n) { this.value += n; return this; },
          multiply(n) { this.value *= n; return this; },
          getResult() { return this.value; }
        };
        
        const result_val = calc.add(5).multiply(2).getResult();
        
        result.textContent = \`const calc = {\\n  value: 0,\\n  add(n) { this.value += n; return this; },\\n  multiply(n) { this.value *= n; return this; }\\n};\\n\\ncalc.add(5).multiply(2).getResult();\\n\\n✅ Method chaining\\n✅ Return this\\n✅ Fluent interface\`;
        
        output.textContent = \`✅ (0 + 5) × 2 = \${result_val}\\n✅ Chained methods!\`;
        console.log('Chained:', result_val);
      });

      document.getElementById('calculatorBtn').addEventListener('click', () => {
        const calc = {
          num1: 10,
          num2: 5,
          add() { return this.num1 + this.num2; },
          subtract() { return this.num1 - this.num2; },
          multiply() { return this.num1 * this.num2; },
          divide() { return this.num1 / this.num2; }
        };
        
        result.textContent = \`const calc = {\\n  num1: 10, num2: 5,\\n  add() { return this.num1 + this.num2; },\\n  subtract() { return this.num1 - this.num2; },\\n  multiply() { return this.num1 * this.num2; },\\n  divide() { return this.num1 / this.num2; }\\n};\\n\\n✅ Calculator object\\n✅ Multiple operations\\n✅ Practical example\`;
        
        output.textContent = \`✅ Add: \${calc.add()}\\n✅ Subtract: \${calc.subtract()}\\n✅ Multiply: \${calc.multiply()}\\n✅ Divide: \${calc.divide()}\`;
        console.log('Calculator:', calc);
      });

      console.log('⚙️ Object Methods ready!');`
  } ,

  {
    topic: 'this-keyword',
    title: '👉 this Keyword',
    description: 'Refers to the object that called the current method',
    tags: ['objects', 'context', 'intermediate'],
    difficulty: 'Intermediate',
    htmlCode: `
      <div class="topic-container">
        <h2>👉 The this Keyword</h2>
        
        <div class="code-section">
          <h3>What is this?</h3>
          <p><code>this</code> refers to the object calling the method</p>
          <p>Value depends on how function is called</p>
        </div>

        <div class="button-group">
          <button id="objectThisBtn" class="btn">Object Context</button>
          <button id="globalThisBtn" class="btn">Global Context</button>
          <button id="methodThisBtn" class="btn">Method this</button>
          <button id="constructorBtn" class="btn">Constructor</button>
          <button id="bindBtn" class="btn">Bind this</button>
        </div>

        <div class="result-section">
          <h3>Code:</h3>
          <pre id="result"></pre>
        </div>

        <div class="output-section">
          <h3>Output:</h3>
          <pre id="output"></pre>
        </div>
      </div>
    `,
    cssCode: `
      .topic-container {
        max-width: 900px;
        margin: 0 auto;
        padding: 20px;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
        border-radius: 10px;
        color: #fff;
      }

      h2 {
        text-align: center;
        margin-bottom: 30px;
        font-size: 2.5em;
        text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
      }

      .code-section {
        background: rgba(255,255,255,0.1);
        padding: 15px;
        margin: 15px 0;
        border-left: 4px solid #ffd700;
        border-radius: 5px;
        backdrop-filter: blur(10px);
      }

      .code-section h3 {
        margin-top: 0;
        color: #ffd700;
      }

      .code-section p {
        margin: 8px 0;
        line-height: 1.6;
      }

      code {
        background: rgba(0,0,0,0.2);
        padding: 2px 6px;
        border-radius: 3px;
        font-family: 'Courier New', monospace;
      }

      .button-group {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        gap: 10px;
        margin: 20px 0;
      }

      .btn {
        padding: 12px 20px;
        background: #ffd700;
        color: #333;
        border: none;
        border-radius: 5px;
        font-weight: bold;
        cursor: pointer;
        transition: all 0.3s ease;
        font-size: 14px;
      }

      .btn:hover {
        background: #ffed4e;
        transform: translateY(-2px);
        box-shadow: 0 5px 15px rgba(0,0,0,0.3);
      }

      .result-section, .output-section {
        background: rgba(0,0,0,0.2);
        padding: 15px;
        margin: 15px 0;
        border-radius: 5px;
        backdrop-filter: blur(10px);
      }

      .result-section h3, .output-section h3 {
        margin-top: 0;
        color: #ffd700;
      }

      pre {
        background: rgba(0,0,0,0.3);
        padding: 15px;
        border-radius: 5px;
        overflow-x: auto;
        color: #fff;
        font-size: 13px;
        line-height: 1.5;
        margin: 0;
      }
    `,
    jsCode: `
      const result = document.getElementById('result');
      const output = document.getElementById('output');

      document.getElementById('objectThisBtn').addEventListener('click', () => {
        const user = {
          name: 'Alice',
          getName() {
            return this.name;
          }
        };
        
        result.textContent = \`const user = {\\n  name: 'Alice',\\n  getName() {\\n    return this.name;\\n  }\\n};\\n\\nuser.getName();  // 'Alice'\\n\\n✅ this = user object\\n✅ Accesses user.name\\n✅ Method context\`;
        
        output.textContent = \`✅ Name: \${user.getName()}\\n✅ this refers to user!\`;
        console.log('Object this:', user.getName());
      });

      document.getElementById('globalThisBtn').addEventListener('click', () => {
        result.textContent = \`function test() {\\n  console.log(this);\\n}\\n\\ntest();  // window (browser)\\n\\n✅ Global context\\n✅ this = window/global\\n✅ Avoid this pattern\`;
        
        output.textContent = \`✅ In global scope\\n✅ this = window object\\n✅ Not recommended!\`;
        console.log('Global this:', this);
      });

      document.getElementById('methodThisBtn').addEventListener('click', () => {
        const person = {
          name: 'Bob',
          age: 30,
          describe() {
            return \`\${this.name} is \${this.age} years old\`;
          }
        };
        
        result.textContent = \`const person = {\\n  name: 'Bob',\\n  age: 30,\\n  describe() {\\n    return \\\`\${this.name} is \${this.age}\\\`;\\n  }\\n};\\n\\n✅ this in method\\n✅ Access multiple properties\\n✅ Dynamic behavior\`;
        
        output.textContent = \`✅ \${person.describe()}\`;
        console.log('Method this:', person.describe());
      });

      document.getElementById('constructorBtn').addEventListener('click', () => {
        function Car(brand, model) {
          this.brand = brand;
          this.model = model;
          this.info = function() {
            return \`\${this.brand} \${this.model}\`;
          };
        }
        
        const car = new Car('Toyota', 'Camry');
        
        result.textContent = \`function Car(brand, model) {\\n  this.brand = brand;\\n  this.model = model;\\n}\\n\\nconst car = new Car('Toyota', 'Camry');\\n\\n✅ Constructor function\\n✅ this = new object\\n✅ Initialize properties\`;
        
        output.textContent = \`✅ Brand: \${car.brand}\\n✅ Model: \${car.model}\\n✅ Constructor this!\`;
        console.log('Constructor this:', car);
      });

      document.getElementById('bindBtn').addEventListener('click', () => {
        const user = {
          name: 'Charlie',
          greet() {
            return \`Hello, \${this.name}!\`;
          }
        };
        
        const boundGreet = user.greet.bind(user);
        
        result.textContent = \`const user = { name: 'Charlie', greet() { ... } };\\n\\nconst boundGreet = user.greet.bind(user);\\nboundGreet();  // 'Hello, Charlie!'\\n\\n✅ bind() sets this\\n✅ Permanent binding\\n✅ Useful for callbacks\`;
        
        output.textContent = \`✅ \${boundGreet()}\\n✅ Bound this!\`;
        console.log('Bound this:', boundGreet());
      });

      console.log('� this Keyword ready!');`
  } ,


// Additional topics to be inserted before the export statement
// These will be added to jsTopicExamples array


  {
    topic: 'object-methods',
    title: '⚙️ Object Methods',
    description: 'Functions defined as properties on objects',
    tags: ['objects', 'methods', 'intermediate'],
    difficulty: 'Intermediate',
    htmlCode: `
      <div class="topic-container">
        <h2>⚙️ Object Methods</h2>
        
        <div class="code-section">
          <h3>Methods are Functions in Objects:</h3>
          <p>Access with: <code>obj.method()</code></p>
          <p>Use <code>this</code> to reference the object</p>
        </div>

        <div class="button-group">
          <button id="basicMethodBtn" class="btn">Basic Method</button>
          <button id="thisBtn" class="btn">This Keyword</button>
          <button id="multiMethodBtn" class="btn">Multiple Methods</button>
          <button id="chainBtn" class="btn">Method Chaining</button>
          <button id="calculatorBtn" class="btn">Calculator</button>
        </div>

        <div class="result-section">
          <h3>Code:</h3>
          <pre id="result"></pre>
        </div>

        <div class="output-section">
          <h3>Output:</h3>
          <pre id="output"></pre>
        </div>
      </div>
    `,
    cssCode: `
      .topic-container {
        max-width: 900px;
        margin: 0 auto;
        padding: 20px;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%);
        border-radius: 10px;
        color: #fff;
      }

      h2 {
        text-align: center;
        margin-bottom: 30px;
        font-size: 2.5em;
        text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
      }

      .code-section {
        background: rgba(255,255,255,0.1);
        padding: 15px;
        margin: 15px 0;
        border-left: 4px solid #ffd700;
        border-radius: 5px;
        backdrop-filter: blur(10px);
      }

      .code-section h3 {
        margin-top: 0;
        color: #ffd700;
      }

      .code-section p {
        margin: 8px 0;
        line-height: 1.6;
      }

      code {
        background: rgba(0,0,0,0.2);
        padding: 2px 6px;
        border-radius: 3px;
        font-family: 'Courier New', monospace;
      }

      .button-group {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        gap: 10px;
        margin: 20px 0;
      }

      .btn {
        padding: 12px 20px;
        background: #ffd700;
        color: #333;
        border: none;
        border-radius: 5px;
        font-weight: bold;
        cursor: pointer;
        transition: all 0.3s ease;
        font-size: 14px;
      }

      .btn:hover {
        background: #ffed4e;
        transform: translateY(-2px);
        box-shadow: 0 5px 15px rgba(0,0,0,0.3);
      }

      .result-section, .output-section {
        background: rgba(0,0,0,0.2);
        padding: 15px;
        margin: 15px 0;
        border-radius: 5px;
        backdrop-filter: blur(10px);
      }

      .result-section h3, .output-section h3 {
        margin-top: 0;
        color: #ffd700;
      }

      pre {
        background: rgba(0,0,0,0.3);
        padding: 15px;
        border-radius: 5px;
        overflow-x: auto;
        color: #fff;
        font-size: 13px;
        line-height: 1.5;
        margin: 0;
      }
    `,
    jsCode: `
      const result = document.getElementById('result');
      const output = document.getElementById('output');

      document.getElementById('basicMethodBtn').addEventListener('click', () => {
        const obj = {
          greet: function() {
            return 'Hello!';
          }
        };
        
        result.textContent = \`const obj = {\\n  greet: function() {\\n    return 'Hello!';\\n  }\\n};\\n\\nobj.greet();  // 'Hello!'\\n\\n✅ Method is a function\\n✅ Called with parentheses\\n✅ Returns a value\`;
        
        output.textContent = \`✅ Result: \${obj.greet()}\\n✅ Method executed!\`;
        console.log('Method:', obj.greet());
      });

      document.getElementById('thisBtn').addEventListener('click', () => {
        const person = {
          name: 'Alice',
          age: 25,
          introduce: function() {
            return \`I'm \${this.name}, \${this.age} years old\`;
          }
        };
        
        result.textContent = \`const person = {\\n  name: 'Alice',\\n  age: 25,\\n  introduce: function() {\\n    return \\\`I'm \${this.name}, \${this.age}\\\`;\\n  }\\n};\\n\\n✅ this refers to object\\n✅ Access properties\\n✅ Dynamic values\`;
        
        output.textContent = \`✅ \${person.introduce()}\`;
        console.log('This:', person.introduce());
      });

      document.getElementById('multiMethodBtn').addEventListener('click', () => {
        const calculator = {
          value: 0,
          add: function(n) { this.value += n; return this; },
          subtract: function(n) { this.value -= n; return this; },
          multiply: function(n) { this.value *= n; return this; },
          getResult: function() { return this.value; }
        };
        
        const result_val = calculator.add(5).multiply(2).subtract(3).getResult();
        
        result.textContent = \`const calculator = {\\n  value: 0,\\n  add: function(n) { this.value += n; return this; },\\n  subtract: function(n) { this.value -= n; return this; }\\n};\\n\\n✅ Multiple methods\\n✅ Each does something\\n✅ Organized code\`;
        
        output.textContent = \`✅ Result: \${result_val}\\n✅ Multiple methods work!\`;
        console.log('Multiple methods:', result_val);
      });

      document.getElementById('chainBtn').addEventListener('click', () => {
        const obj = {
          value: 0,
          add: function(n) { this.value += n; return this; },
          multiply: function(n) { this.value *= n; return this; },
          getResult: function() { return this.value; }
        };
        
        const result_val = obj.add(5).multiply(2).getResult();
        
        result.textContent = \`const obj = {\\n  value: 0,\\n  add: function(n) { this.value += n; return this; },\\n  multiply: function(n) { this.value *= n; return this; }\\n};\\n\\nobj.add(5).multiply(2).getResult();\\n\\n✅ Method chaining\\n✅ Return this\\n✅ Fluent interface\`;
        
        output.textContent = \`✅ (0 + 5) * 2 = \${result_val}\\n✅ Chaining works!\`;
        console.log('Chaining:', result_val);
      });

      document.getElementById('calculatorBtn').addEventListener('click', () => {
        const calc = {
          num: 10,
          add: function(n) { this.num += n; return this; },
          subtract: function(n) { this.num -= n; return this; },
          multiply: function(n) { this.num *= n; return this; },
          divide: function(n) { this.num /= n; return this; },
          result: function() { return this.num; }
        };
        
        const final = calc.add(5).multiply(2).subtract(10).divide(2).result();
        
        result.textContent = \`Calculator object with methods:\\nadd(), subtract(), multiply(), divide()\\n\\nChain: add(5).multiply(2).subtract(10).divide(2)\\n\\n✅ Complex operations\\n✅ Method chaining\\n✅ Fluent API\`;
        
        output.textContent = \`✅ Start: 10\\n✅ +5 = 15\\n✅ *2 = 30\\n✅ -10 = 20\\n✅ /2 = \${final}\`;
        console.log('Calculator:', final);
      });

      console.log('⚙️ Object Methods ready!');`
  },

  {
    topic: 'this-keyword',
    title: '👉 This Keyword',
    description: 'Refers to the object that called the current method',
    tags: ['objects', 'this', 'intermediate'],
    difficulty: 'Intermediate',
    htmlCode: `
      <div class="topic-container">
        <h2>👉 This Keyword</h2>
        
        <div class="code-section">
          <h3>What is This?</h3>
          <p><code>this</code> refers to the object calling the method</p>
          <p>Context-dependent - changes based on how function is called</p>
        </div>

        <div class="button-group">
          <button id="objectThisBtn" class="btn">Object This</button>
          <button id="methodThisBtn" class="btn">Method This</button>
          <button id="globalThisBtn" class="btn">Global This</button>
          <button id="arrowThisBtn" class="btn">Arrow Function</button>
          <button id="bindThisBtn" class="btn">Bind This</button>
        </div>

        <div class="result-section">
          <h3>Code:</h3>
          <pre id="result"></pre>
        </div>

        <div class="output-section">
          <h3>Output:</h3>
          <pre id="output"></pre>
        </div>
      </div>
    `,
    cssCode: `
      .topic-container {
        max-width: 900px;
        margin: 0 auto;
        padding: 20px;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
        border-radius: 10px;
        color: #fff;
      }

      h2 {
        text-align: center;
        margin-bottom: 30px;
        font-size: 2.5em;
        text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
      }

      .code-section {
        background: rgba(255,255,255,0.1);
        padding: 15px;
        margin: 15px 0;
        border-left: 4px solid #ffd700;
        border-radius: 5px;
        backdrop-filter: blur(10px);
      }

      .code-section h3 {
        margin-top: 0;
        color: #ffd700;
      }

      .code-section p {
        margin: 8px 0;
        line-height: 1.6;
      }

      code {
        background: rgba(0,0,0,0.2);
        padding: 2px 6px;
        border-radius: 3px;
        font-family: 'Courier New', monospace;
      }

      .button-group {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        gap: 10px;
        margin: 20px 0;
      }

      .btn {
        padding: 12px 20px;
        background: #ffd700;
        color: #333;
        border: none;
        border-radius: 5px;
        font-weight: bold;
        cursor: pointer;
        transition: all 0.3s ease;
        font-size: 14px;
      }

      .btn:hover {
        background: #ffed4e;
        transform: translateY(-2px);
        box-shadow: 0 5px 15px rgba(0,0,0,0.3);
      }

      .result-section, .output-section {
        background: rgba(0,0,0,0.2);
        padding: 15px;
        margin: 15px 0;
        border-radius: 5px;
        backdrop-filter: blur(10px);
      }

      .result-section h3, .output-section h3 {
        margin-top: 0;
        color: #ffd700;
      }

      pre {
        background: rgba(0,0,0,0.3);
        padding: 15px;
        border-radius: 5px;
        overflow-x: auto;
        color: #fff;
        font-size: 13px;
        line-height: 1.5;
        margin: 0;
      }
    `,
    jsCode: `
      const result = document.getElementById('result');
      const output = document.getElementById('output');

      document.getElementById('objectThisBtn').addEventListener('click', () => {
        const person = {
          name: 'Alice',
          greet: function() {
            return \`Hello, I'm \${this.name}\`;
          }
        };
        
        result.textContent = \`const person = {\\n  name: 'Alice',\\n  greet: function() {\\n    return \\\`Hello, I'm \${this.name}\\\`;\\n  }\\n};\\n\\nperson.greet();\\n\\n✅ this = person object\\n✅ Accesses name property\\n✅ Context is object\`;
        
        output.textContent = \`✅ \${person.greet()}\`;
        console.log('Object this:', person.greet());
      });

      document.getElementById('methodThisBtn').addEventListener('click', () => {
        const user = {
          name: 'Bob',
          age: 30,
          describe: function() {
            return \`\${this.name} is \${this.age} years old\`;
          }
        };
        
        result.textContent = \`const user = {\\n  name: 'Bob',\\n  age: 30,\\n  describe: function() {\\n    return \\\`\${this.name} is \${this.age}\\\`;\\n  }\\n};\\n\\n✅ this accesses multiple properties\\n✅ Dynamic values\\n✅ Object context\`;
        
        output.textContent = \`✅ \${user.describe()}\`;
        console.log('Method this:', user.describe());
      });

      document.getElementById('globalThisBtn').addEventListener('click', () => {
        result.textContent = \`function test() {\\n  console.log(this);\\n}\\n\\ntest();  // window object (browser)\\n\\n✅ In global scope\\n✅ this = window (browser)\\n✅ this = global (Node.js)\`;
        
        output.textContent = \`✅ Global this = window\\n✅ Or global object\\n✅ Depends on environment\`;
        console.log('Global this:', this);
      });

      document.getElementById('arrowThisBtn').addEventListener('click', () => {
        const obj = {
          name: 'Charlie',
          regularFunc: function() {
            return this.name;
          },
          arrowFunc: () => {
            return this.name;
          }
        };
        
        result.textContent = \`const obj = {\\n  name: 'Charlie',\\n  regularFunc: function() { return this.name; },\\n  arrowFunc: () => { return this.name; }\\n};\\n\\n✅ Regular function: this = obj\\n✅ Arrow function: this = parent scope\\n✅ Arrow functions don't have own this\`;
        
        output.textContent = \`✅ Regular: \${obj.regularFunc()}\\n✅ Arrow: \${obj.arrowFunc() || 'undefined'}\\n✅ Different contexts!\`;
        console.log('Arrow this:', obj.arrowFunc());
      });

      document.getElementById('bindThisBtn').addEventListener('click', () => {
        const person = {
          name: 'Diana',
          greet: function() {
            return \`Hello, \${this.name}\`;
          }
        };
        
        const greetFunc = person.greet.bind(person);
        
        result.textContent = \`const person = { name: 'Diana', greet: function() {...} };\\n\\nconst greetFunc = person.greet.bind(person);\\ngreetFunc();\\n\\n✅ bind() sets this permanently\\n✅ Creates new function\\n✅ Useful for callbacks\`;
        
        output.textContent = \`✅ \${greetFunc()}\\n✅ Bind works!\`;
        console.log('Bind this:', greetFunc());
      });

      console.log('👉 This Keyword ready!');`
  },

  {
    topic: 'json',
    title: '📄 JSON',
    description: 'JSON.parse() and JSON.stringify() for serialization',
    tags: ['objects', 'json', 'intermediate'],
    difficulty: 'Intermediate',
    htmlCode: `
      <div class="topic-container">
        <h2>📄 JSON Serialization</h2>
        
        <div class="code-section">
          <h3>JSON Methods:</h3>
          <p>✅ <code>JSON.stringify()</code> - Object to JSON string</p>
          <p>✅ <code>JSON.parse()</code> - JSON string to Object</p>
        </div>

        <div class="button-group">
          <button id="stringifyBtn" class="btn">Stringify</button>
          <button id="parseBtn" class="btn">Parse</button>
          <button id="prettyBtn" class="btn">Pretty Print</button>
          <button id="roundTripBtn" class="btn">Round Trip</button>
          <button id="arrayJsonBtn" class="btn">Array JSON</button>
        </div>

        <div class="result-section">
          <h3>Code:</h3>
          <pre id="result"></pre>
        </div>

        <div class="output-section">
          <h3>Output:</h3>
          <pre id="output"></pre>
        </div>
      </div>
    `,
    cssCode: `
      .topic-container {
        max-width: 900px;
        margin: 0 auto;
        padding: 20px;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
        border-radius: 10px;
        color: #fff;
      }

      h2 {
        text-align: center;
        margin-bottom: 30px;
        font-size: 2.5em;
        text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
      }

      .code-section {
        background: rgba(255,255,255,0.1);
        padding: 15px;
        margin: 15px 0;
        border-left: 4px solid #ffd700;
        border-radius: 5px;
        backdrop-filter: blur(10px);
      }

      .code-section h3 {
        margin-top: 0;
        color: #ffd700;
      }

      .code-section p {
        margin: 8px 0;
        line-height: 1.6;
      }

      code {
        background: rgba(0,0,0,0.2);
        padding: 2px 6px;
        border-radius: 3px;
        font-family: 'Courier New', monospace;
      }

      .button-group {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        gap: 10px;
        margin: 20px 0;
      }

      .btn {
        padding: 12px 20px;
        background: #ffd700;
        color: #333;
        border: none;
        border-radius: 5px;
        font-weight: bold;
        cursor: pointer;
        transition: all 0.3s ease;
        font-size: 14px;
      }

      .btn:hover {
        background: #ffed4e;
        transform: translateY(-2px);
        box-shadow: 0 5px 15px rgba(0,0,0,0.3);
      }

      .result-section, .output-section {
        background: rgba(0,0,0,0.2);
        padding: 15px;
        margin: 15px 0;
        border-radius: 5px;
        backdrop-filter: blur(10px);
      }

      .result-section h3, .output-section h3 {
        margin-top: 0;
        color: #ffd700;
      }

      pre {
        background: rgba(0,0,0,0.3);
        padding: 15px;
        border-radius: 5px;
        overflow-x: auto;
        color: #fff;
        font-size: 13px;
        line-height: 1.5;
        margin: 0;
      }
    `,
    jsCode: `
      const result = document.getElementById('result');
      const output = document.getElementById('output');

      document.getElementById('stringifyBtn').addEventListener('click', () => {
        const obj = { name: 'Alice', age: 25, city: 'NYC' };
        const json = JSON.stringify(obj);
        
        result.textContent = \`const obj = { name: 'Alice', age: 25, city: 'NYC' };\\n\\nconst json = JSON.stringify(obj);\\n\\nResult: \${json}\\n\\n✅ Object to string\\n✅ Serialization\\n✅ Send over network\`;
        
        output.textContent = \`✅ JSON: \${json}\\n✅ Type: string\\n✅ Stringify works!\`;
        console.log('Stringify:', json);
      });

      document.getElementById('parseBtn').addEventListener('click', () => {
        const jsonStr = '{"name":"Bob","age":30,"city":"LA"}';
        const obj = JSON.parse(jsonStr);
        
        result.textContent = \`const jsonStr = '\${jsonStr}';\\n\\nconst obj = JSON.parse(jsonStr);\\n\\nResult: { name: '\${obj.name}', age: \${obj.age}, city: '\${obj.city}' }\\n\\n✅ String to object\\n✅ Deserialization\\n✅ Access properties\`;
        
        output.textContent = \`✅ Name: \${obj.name}\\n✅ Age: \${obj.age}\\n✅ City: \${obj.city}\\n✅ Parse works!\`;
        console.log('Parse:', obj);
      });

      document.getElementById('prettyBtn').addEventListener('click', () => {
        const obj = { name: 'Charlie', age: 35, skills: ['JS', 'React', 'Node'] };
        const pretty = JSON.stringify(obj, null, 2);
        
        result.textContent = \`const obj = { name: 'Charlie', age: 35, skills: [...] };\\n\\nconst pretty = JSON.stringify(obj, null, 2);\\n\\nResult:\\n\${pretty}\\n\\n✅ Pretty print\\n✅ Readable format\\n✅ 2-space indent\`;
        
        output.textContent = \`✅ Formatted JSON:\\n\${pretty}\`;
        console.log('Pretty:', pretty);
      });

      document.getElementById('roundTripBtn').addEventListener('click', () => {
        const original = { name: 'Diana', age: 28 };
        const json = JSON.stringify(original);
        const restored = JSON.parse(json);
        
        result.textContent = \`const original = { name: 'Diana', age: 28 };\\nconst json = JSON.stringify(original);\\nconst restored = JSON.parse(json);\\n\\n✅ Object → JSON → Object\\n✅ Round trip\\n✅ Data preserved\`;
        
        output.textContent = \`✅ Original: \${JSON.stringify(original)}\\n✅ Restored: \${JSON.stringify(restored)}\\n✅ Equal: \${JSON.stringify(original) === JSON.stringify(restored)}\`;
        console.log('Round trip:', original, restored);
      });

      document.getElementById('arrayJsonBtn').addEventListener('click', () => {
        const arr = [1, 2, 3, { name: 'Eve', age: 26 }];
        const json = JSON.stringify(arr);
        const parsed = JSON.parse(json);
        
        result.textContent = \`const arr = [1, 2, 3, { name: 'Eve', age: 26 }];\\n\\nconst json = JSON.stringify(arr);\\n\\nResult: \${json}\\n\\n✅ Arrays work too\\n✅ Nested objects\\n✅ Complex structures\`;
        
        output.textContent = \`✅ JSON: \${json}\\n✅ Parsed: [\${parsed.map(v => typeof v === 'object' ? JSON.stringify(v) : v).join(', ')}]\\n✅ Array JSON works!\`;
        console.log('Array JSON:', json);
      });

      console.log('📄 JSON ready!');`
  },

  {
    topic: 'string-basics',
    title: '📝 String Basics',
    description: 'Single quotes, double quotes, and backtick strings',
    tags: ['strings', 'basics', 'beginner'],
    difficulty: 'Beginner',
    htmlCode: `
      <div class="topic-container">
        <h2>📝 String Basics</h2>
        
        <div class="code-section">
          <h3>Three Ways to Create Strings:</h3>
          <p>✅ Single quotes: <code>'hello'</code></p>
          <p>✅ Double quotes: <code>"hello"</code></p>
          <p>✅ Backticks: <code>\`hello\`</code> (template literals)</p>
        </div>

        <div class="button-group">
          <button id="singleBtn" class="btn">Single Quotes</button>
          <button id="doubleBtn" class="btn">Double Quotes</button>
          <button id="backtickBtn" class="btn">Backticks</button>
          <button id="escapeBtn" class="btn">Escape Chars</button>
          <button id="multilineBtn" class="btn">Multiline</button>
        </div>

        <div class="result-section">
          <h3>Code:</h3>
          <pre id="result"></pre>
        </div>

        <div class="output-section">
          <h3>Output:</h3>
          <pre id="output"></pre>
        </div>
      </div>
    `,
    cssCode: `
      .topic-container {
        max-width: 900px;
        margin: 0 auto;
        padding: 20px;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);
        border-radius: 10px;
        color: #fff;
      }

      h2 {
        text-align: center;
        margin-bottom: 30px;
        font-size: 2.5em;
        text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
      }

      .code-section {
        background: rgba(255,255,255,0.1);
        padding: 15px;
        margin: 15px 0;
        border-left: 4px solid #ffd700;
        border-radius: 5px;
        backdrop-filter: blur(10px);
      }

      .code-section h3 {
        margin-top: 0;
        color: #ffd700;
      }

      .code-section p {
        margin: 8px 0;
        line-height: 1.6;
      }

      code {
        background: rgba(0,0,0,0.2);
        padding: 2px 6px;
        border-radius: 3px;
        font-family: 'Courier New', monospace;
      }

      .button-group {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        gap: 10px;
        margin: 20px 0;
      }

      .btn {
        padding: 12px 20px;
        background: #ffd700;
        color: #333;
        border: none;
        border-radius: 5px;
        font-weight: bold;
        cursor: pointer;
        transition: all 0.3s ease;
        font-size: 14px;
      }

      .btn:hover {
        background: #ffed4e;
        transform: translateY(-2px);
        box-shadow: 0 5px 15px rgba(0,0,0,0.3);
      }

      .result-section, .output-section {
        background: rgba(0,0,0,0.2);
        padding: 15px;
        margin: 15px 0;
        border-radius: 5px;
        backdrop-filter: blur(10px);
      }

      .result-section h3, .output-section h3 {
        margin-top: 0;
        color: #ffd700;
      }

      pre {
        background: rgba(0,0,0,0.3);
        padding: 15px;
        border-radius: 5px;
        overflow-x: auto;
        color: #fff;
        font-size: 13px;
        line-height: 1.5;
        margin: 0;
      }
    `,
    jsCode: `
      const result = document.getElementById('result');
      const output = document.getElementById('output');

      document.getElementById('singleBtn').addEventListener('click', () => {
        const str = 'Hello World';
        
        result.textContent = \`const str = 'Hello World';\\n\\n✅ Single quotes\\n✅ Most common\\n✅ Can use double inside\`;
        
        output.textContent = \`✅ String: \${str}\\n✅ Type: \${typeof str}\\n✅ Single quotes work!\`;
        console.log('Single:', str);
      });

      document.getElementById('doubleBtn').addEventListener('click', () => {
        const str = "Hello World";
        
        result.textContent = \`const str = "Hello World";\\n\\n✅ Double quotes\\n✅ Also common\\n✅ Can use single inside\`;
        
        output.textContent = \`✅ String: \${str}\\n✅ Type: \${typeof str}\\n✅ Double quotes work!\`;
        console.log('Double:', str);
      });

      document.getElementById('backtickBtn').addEventListener('click', () => {
        const name = 'Alice';
        const str = \`Hello \${name}\`;
        
        result.textContent = \`const name = 'Alice';\\nconst str = \\\`Hello \${name}\\\`;\\n\\n✅ Backticks (template literals)\\n✅ Interpolation with \${}\\n✅ Multiline support\`;
        
        output.textContent = \`✅ String: \${str}\\n✅ Interpolated\\n✅ Backticks work!\`;
        console.log('Backtick:', str);
      });

      document.getElementById('escapeBtn').addEventListener('click', () => {
        const str1 = 'It\\'s a string';
        const str2 = "She said \\"Hi\\"";
        const str3 = 'Line 1\\nLine 2';
        
        result.textContent = \`Escape characters:\\n\\nstr1 = 'It\\\\'s a string'\\nstr2 = "She said \\\\\\"Hi\\\\\\""\\nstr3 = 'Line 1\\\\nLine 2'\\n\\n✅ Escape with backslash\\n✅ \\\\' for single quote\\n✅ \\\\" for double quote\\n✅ \\\\n for newline\`;
        
        output.textContent = \`✅ \${str1}\\n✅ \${str2}\\n✅ \${str3}\`;
        console.log('Escape:', str1, str2, str3);
      });

      document.getElementById('multilineBtn').addEventListener('click', () => {
        const str = \`Line 1
Line 2
Line 3\`;
        
        result.textContent = \`const str = \\\`Line 1\\nLine 2\\nLine 3\\\`;\\n\\n✅ Multiline with backticks\\n✅ Preserves formatting\\n✅ No escape needed\`;
        
        output.textContent = \`✅ Multiline string:\\n\${str}\`;
        console.log('Multiline:', str);
      });

      console.log('📝 String Basics ready!');`
  },

  {
    topic: 'string-length',
    title: '📏 String Length',
    description: 'Count characters with the .length property',
    tags: ['strings', 'properties', 'beginner'],
    difficulty: 'Beginner',
    htmlCode: `
      <div class="topic-container">
        <h2>📏 String Length</h2>
        
        <div class="code-section">
          <h3>Get String Length:</h3>
          <p>Use the <code>.length</code> property</p>
          <p>Returns number of characters</p>
        </div>

        <div class="button-group">
          <button id="basicLengthBtn" class="btn">Basic Length</button>
          <button id="emptyBtn" class="btn">Empty String</button>
          <button id="spacesBtn" class="btn">With Spaces</button>
          <button id="specialBtn" class="btn">Special Chars</button>
          <button id="loopBtn" class="btn">Loop Through</button>
        </div>

        <div class="result-section">
          <h3>Code:</h3>
          <pre id="result"></pre>
        </div>

        <div class="output-section">
          <h3>Output:</h3>
          <pre id="output"></pre>
        </div>
      </div>
    `,
    cssCode: `
      .topic-container {
        max-width: 900px;
        margin: 0 auto;
        padding: 20px;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
        border-radius: 10px;
        color: #fff;
      }

      h2 {
        text-align: center;
        margin-bottom: 30px;
        font-size: 2.5em;
        text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
      }

      .code-section {
        background: rgba(255,255,255,0.1);
        padding: 15px;
        margin: 15px 0;
        border-left: 4px solid #ffd700;
        border-radius: 5px;
        backdrop-filter: blur(10px);
      }

      .code-section h3 {
        margin-top: 0;
        color: #ffd700;
      }

      .code-section p {
        margin: 8px 0;
        line-height: 1.6;
      }

      code {
        background: rgba(0,0,0,0.2);
        padding: 2px 6px;
        border-radius: 3px;
        font-family: 'Courier New', monospace;
      }

      .button-group {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        gap: 10px;
        margin: 20px 0;
      }

      .btn {
        padding: 12px 20px;
        background: #ffd700;
        color: #333;
        border: none;
        border-radius: 5px;
        font-weight: bold;
        cursor: pointer;
        transition: all 0.3s ease;
        font-size: 14px;
      }

      .btn:hover {
        background: #ffed4e;
        transform: translateY(-2px);
        box-shadow: 0 5px 15px rgba(0,0,0,0.3);
      }

      .result-section, .output-section {
        background: rgba(0,0,0,0.2);
        padding: 15px;
        margin: 15px 0;
        border-radius: 5px;
        backdrop-filter: blur(10px);
      }

      .result-section h3, .output-section h3 {
        margin-top: 0;
        color: #ffd700;
      }

      pre {
        background: rgba(0,0,0,0.3);
        padding: 15px;
        border-radius: 5px;
        overflow-x: auto;
        color: #fff;
        font-size: 13px;
        line-height: 1.5;
        margin: 0;
      }
    `,
    jsCode: `
      const result = document.getElementById('result');
      const output = document.getElementById('output');

      document.getElementById('basicLengthBtn').addEventListener('click', () => {
        const str = 'Hello';
        const len = str.length;
        
        result.textContent = \`const str = 'Hello';\\nconst len = str.length;\\n\\nResult: \${len}\\n\\n✅ .length property\\n✅ Returns number\\n✅ Counts all characters\`;
        
        output.textContent = \`✅ String: \${str}\\n✅ Length: \${len}\\n✅ 5 characters!\`;
        console.log('Length:', len);
      });

      document.getElementById('emptyBtn').addEventListener('click', () => {
        const empty = '';
        const len = empty.length;
        
        result.textContent = \`const empty = '';\\nconst len = empty.length;\\n\\nResult: \${len}\\n\\n✅ Empty string\\n✅ Length is 0\\n✅ Still a string\`;
        
        output.textContent = \`✅ String: (empty)\\n✅ Length: \${len}\\n✅ Zero length!\`;
        console.log('Empty length:', len);
      });

      document.getElementById('spacesBtn').addEventListener('click', () => {
        const str = 'Hello World';
        const len = str.length;
        
        result.textContent = \`const str = 'Hello World';\\nconst len = str.length;\\n\\nResult: \${len}\\n\\n✅ Includes space\\n✅ Space counts as character\\n✅ 11 total\`;
        
        output.textContent = \`✅ String: \${str}\\n✅ Length: \${len}\\n✅ Space included!\`;
        console.log('With spaces:', len);
      });

      document.getElementById('specialBtn').addEventListener('click', () => {
        const str = 'Hi! @#$%';
        const len = str.length;
        
        result.textContent = \`const str = 'Hi! @#$%';\\nconst len = str.length;\\n\\nResult: \${len}\\n\\n✅ Special characters\\n✅ All count\\n✅ Punctuation included\`;
        
        output.textContent = \`✅ String: \${str}\\n✅ Length: \${len}\\n✅ Special chars count!\`;
        console.log('Special chars:', len);
      });

      document.getElementById('loopBtn').addEventListener('click', () => {
        const str = 'Code';
        let chars = '';
        for (let i = 0; i < str.length; i++) {
          chars += str[i] + ' ';
        }
        
        result.textContent = \`const str = 'Code';\\nfor (let i = 0; i < str.length; i++) {\\n  console.log(str[i]);\\n}\\n\\n✅ Loop through string\\n✅ Use .length in condition\\n✅ Access each character\`;
        
        output.textContent = \`✅ Characters: \${chars}\\n✅ Looped through all!\`;
        console.log('Loop:', chars);
      });

      console.log('📏 String Length ready!');`
  },

  // ============================================
// MORE JAVASCRIPT TOPICS - BATCH 2
// ============================================

// TOPIC 4: FUNCTION DECLARATION
{
  topic: 'function-declaration',
  title: '📝 Function Declaration',
  description: 'Named function using the function keyword',
  tags: ['functions', 'declaration', 'beginner'],
  difficulty: 'Beginner',
  htmlCode: `
    <div class="topic-container">
      <h2>📝 Function Declaration</h2>
      
      <div class="code-section">
        <h3>Declare Named Functions:</h3>
        <p><code>function name(params) { return value; }</code></p>
        <p>Hoisted to top of scope</p>
      </div>

      <div class="button-group">
        <button id="basicBtn" class="btn">Basic Function</button>
        <button id="paramsBtn" class="btn">With Parameters</button>
        <button id="returnBtn" class="btn">Return Value</button>
        <button id="multiBtn" class="btn">Multiple Params</button>
        <button id="hoistBtn" class="btn">Hoisting</button>
      </div>

      <div class="result-section">
        <h3>Code:</h3>
        <pre id="result"></pre>
      </div>

      <div class="output-section">
        <h3>Output:</h3>
        <pre id="output"></pre>
      </div>
    </div>
  `,
  cssCode: `
    .topic-container {
      max-width: 900px;
      margin: 0 auto;
      padding: 20px;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
      border-radius: 10px;
      color: #fff;
    }

    h2 {
      text-align: center;
      margin-bottom: 30px;
      font-size: 2.5em;
      text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
    }

    .code-section {
      background: rgba(255,255,255,0.1);
      padding: 15px;
      margin: 15px 0;
      border-left: 4px solid #ffd700;
      border-radius: 5px;
      backdrop-filter: blur(10px);
    }

    .code-section h3 {
      margin-top: 0;
      color: #ffd700;
    }

    .code-section p {
      margin: 8px 0;
      line-height: 1.6;
    }

    code {
      background: rgba(0,0,0,0.2);
      padding: 2px 6px;
      border-radius: 3px;
      font-family: 'Courier New', monospace;
    }

    .button-group {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 10px;
      margin: 20px 0;
    }

    .btn {
      padding: 12px 20px;
      background: #ffd700;
      color: #333;
      border: none;
      border-radius: 5px;
      font-weight: bold;
      cursor: pointer;
      transition: all 0.3s ease;
      font-size: 14px;
    }

    .btn:hover {
      background: #ffed4e;
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(0,0,0,0.3);
    }

    .result-section, .output-section {
      background: rgba(0,0,0,0.2);
      padding: 15px;
      margin: 15px 0;
      border-radius: 5px;
      backdrop-filter: blur(10px);
    }

    .result-section h3, .output-section h3 {
      margin-top: 0;
      color: #ffd700;
    }

    pre {
      background: rgba(0,0,0,0.3);
      padding: 15px;
      border-radius: 5px;
      overflow-x: auto;
      color: #fff;
      font-size: 13px;
      line-height: 1.5;
      margin: 0;
    }
  `,
  jsCode: `
    const result = document.getElementById('result');
    const output = document.getElementById('output');

    function greet() {
      return 'Hello!';
    }

    document.getElementById('basicBtn').addEventListener('click', () => {
      const msg = greet();
      
      result.textContent = \`function greet() {\\n  return 'Hello!';\\n}\\n\\ngreet();\\n\\n✅ Named function\\n✅ Can be called\\n✅ Returns value\`;
      
      output.textContent = \`✅ Result: \${msg}\\n✅ Function works!\`;
      console.log('Basic:', msg);
    });

    document.getElementById('paramsBtn').addEventListener('click', () => {
      function add(a, b) {
        return a + b;
      }
      
      const sum = add(5, 3);
      
      result.textContent = \`function add(a, b) {\\n  return a + b;\\n}\\n\\nadd(5, 3);\\n\\n✅ Parameters\\n✅ Pass values\\n✅ Use in function\`;
      
      output.textContent = \`✅ Result: \${sum}\\n✅ 5 + 3 = \${sum}\`;
      console.log('With params:', sum);
    });

    document.getElementById('returnBtn').addEventListener('click', () => {
      function multiply(x, y) {
        return x * y;
      }
      
      const product = multiply(4, 7);
      
      result.textContent = \`function multiply(x, y) {\\n  return x * y;\\n}\\n\\nmultiply(4, 7);\\n\\n✅ Return statement\\n✅ Send value back\\n✅ Use result\`;
      
      output.textContent = \`✅ Result: \${product}\\n✅ 4 × 7 = \${product}\`;
      console.log('Return:', product);
    });

    document.getElementById('multiBtn').addEventListener('click', () => {
      function describe(name, age, city) {
        return \`\${name} is \${age} years old and lives in \${city}\`;
      }
      
      const desc = describe('Alice', 25, 'NYC');
      
      result.textContent = \`function describe(name, age, city) {\\n  return \\\`\${name} is \${age}...\\\`;\\n}\\n\\ndescribe('Alice', 25, 'NYC');\\n\\n✅ Multiple parameters\\n✅ Use all values\\n✅ Complex logic\`;
      
      output.textContent = \`✅ Result: \${desc}\`;
      console.log('Multiple params:', desc);
    });

    document.getElementById('hoistBtn').addEventListener('click', () => {
      result.textContent = \`// Function called BEFORE declaration\\ngreet();\\n\\nfunction greet() {\\n  return 'Hello!';\\n}\\n\\n✅ Hoisting\\n✅ Function moved to top\\n✅ Can call before declare\`;
      
      output.textContent = \`✅ Hoisting works!\\n✅ Functions are hoisted\\n✅ Can call before declare\`;
      console.log('Hoisting: functions are hoisted');
    });

    console.log('📝 Function Declaration ready!');`
},

// TOPIC 5: ARROW FUNCTIONS
{
  topic: 'arrow-functions',
  title: '⚡ Arrow Functions',
  description: 'Concise function syntax with the fat-arrow =>',
  tags: ['functions', 'arrow', 'intermediate'],
  difficulty: 'Intermediate',
  htmlCode: `
    <div class="topic-container">
      <h2>⚡ Arrow Functions</h2>
      
      <div class="code-section">
        <h3>Arrow Function Syntax:</h3>
        <p><code>const fn = (params) => { return value; }</code></p>
        <p>Shorter syntax, lexical this</p>
      </div>

      <div class="button-group">
        <button id="basicBtn" class="btn">Basic Arrow</button>
        <button id="singleBtn" class="btn">Single Param</button>
        <button id="implicitBtn" class="btn">Implicit Return</button>
        <button id="arrayBtn" class="btn">With Array</button>
        <button id="thisBtn" class="btn">This Binding</button>
      </div>

      <div class="result-section">
        <h3>Code:</h3>
        <pre id="result"></pre>
      </div>

      <div class="output-section">
        <h3>Output:</h3>
        <pre id="output"></pre>
      </div>
    </div>
  `,
  cssCode: `
    .topic-container {
      max-width: 900px;
      margin: 0 auto;
      padding: 20px;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%);
      border-radius: 10px;
      color: #fff;
    }

    h2 {
      text-align: center;
      margin-bottom: 30px;
      font-size: 2.5em;
      text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
    }

    .code-section {
      background: rgba(255,255,255,0.1);
      padding: 15px;
      margin: 15px 0;
      border-left: 4px solid #ffd700;
      border-radius: 5px;
      backdrop-filter: blur(10px);
    }

    .code-section h3 {
      margin-top: 0;
      color: #ffd700;
    }

    .code-section p {
      margin: 8px 0;
      line-height: 1.6;
    }

    code {
      background: rgba(0,0,0,0.2);
      padding: 2px 6px;
      border-radius: 3px;
      font-family: 'Courier New', monospace;
    }

    .button-group {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 10px;
      margin: 20px 0;
    }

    .btn {
      padding: 12px 20px;
      background: #ffd700;
      color: #333;
      border: none;
      border-radius: 5px;
      font-weight: bold;
      cursor: pointer;
      transition: all 0.3s ease;
      font-size: 14px;
    }

    .btn:hover {
      background: #ffed4e;
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(0,0,0,0.3);
    }

    .result-section, .output-section {
      background: rgba(0,0,0,0.2);
      padding: 15px;
      margin: 15px 0;
      border-radius: 5px;
      backdrop-filter: blur(10px);
    }

    .result-section h3, .output-section h3 {
      margin-top: 0;
      color: #ffd700;
    }

    pre {
      background: rgba(0,0,0,0.3);
      padding: 15px;
      border-radius: 5px;
      overflow-x: auto;
      color: #fff;
      font-size: 13px;
      line-height: 1.5;
      margin: 0;
    }
  `,
  jsCode: `
    const result = document.getElementById('result');
    const output = document.getElementById('output');

    document.getElementById('basicBtn').addEventListener('click', () => {
      const add = (a, b) => {
        return a + b;
      };
      
      const sum = add(5, 3);
      
      result.textContent = \`const add = (a, b) => {\\n  return a + b;\\n};\\n\\nadd(5, 3);\\n\\n✅ Arrow function\\n✅ Fat arrow =>\\n✅ Concise syntax\`;
      
      output.textContent = \`✅ Result: \${sum}\\n✅ Arrow works!\`;
      console.log('Basic arrow:', sum);
    });

    document.getElementById('singleBtn').addEventListener('click', () => {
      const square = x => x * x;
      
      const result_val = square(5);
      
      result.textContent = \`const square = x => x * x;\\n\\nsquare(5);\\n\\n✅ Single parameter\\n✅ No parentheses needed\\n✅ Shorter syntax\`;
      
      output.textContent = \`✅ Result: \${result_val}\\n✅ 5² = \${result_val}\`;
      console.log('Single param:', result_val);
    });

    document.getElementById('implicitBtn').addEventListener('click', () => {
      const multiply = (a, b) => a * b;
      
      const product = multiply(4, 7);
      
      result.textContent = \`const multiply = (a, b) => a * b;\\n\\nmultiply(4, 7);\\n\\n✅ Implicit return\\n✅ No braces needed\\n✅ Return automatically\`;
      
      output.textContent = \`✅ Result: \${product}\\n✅ 4 × 7 = \${product}\`;
      console.log('Implicit return:', product);
    });

    document.getElementById('arrayBtn').addEventListener('click', () => {
      const numbers = [1, 2, 3, 4, 5];
      const doubled = numbers.map(n => n * 2);
      
      result.textContent = \`const numbers = [1, 2, 3, 4, 5];\\nconst doubled = numbers.map(n => n * 2);\\n\\nResult: [\${doubled}]\\n\\n✅ Arrow with map()\\n✅ Perfect for callbacks\\n✅ Clean syntax\`;
      
      output.textContent = \`✅ Doubled: [\${doubled}]\\n✅ Arrow functions rock!\`;
      console.log('Array map:', doubled);
    });

    document.getElementById('thisBtn').addEventListener('click', () => {
      result.textContent = \`const obj = {\\n  name: 'Alice',\\n  regularFunc: function() { return this.name; },\\n  arrowFunc: () => { return this.name; }\\n};\\n\\n✅ Arrow functions\\n✅ Lexical this\\n✅ Inherit from parent\`;
      
      output.textContent = \`✅ Arrow functions have lexical this\\n✅ Don't create own this\\n✅ Inherit from parent scope\`;
      console.log('This binding: arrow functions use lexical this');
    });

    console.log('⚡ Arrow Functions ready!');`
},

// TOPIC 6: PARAMETERS
{
  topic: 'parameters',
  title: '📥 Function Parameters',
  description: 'Pass data into functions via named parameters',
  tags: ['functions', 'parameters', 'beginner'],
  difficulty: 'Beginner',
  htmlCode: `
    <div class="topic-container">
      <h2>📥 Function Parameters</h2>
      
      <div class="code-section">
        <h3>Pass Data to Functions:</h3>
        <p><code>function fn(param1, param2) { }</code></p>
        <p>Parameters receive arguments</p>
      </div>

      <div class="button-group">
        <button id="basicBtn" class="btn">Basic Parameters</button>
        <button id="multiBtn" class="btn">Multiple Params</button>
        <button id="typeBtn" class="btn">Different Types</button>
        <button id="orderBtn" class="btn">Parameter Order</button>
        <button id="countBtn" class="btn">Arguments Count</button>
      </div>

      <div class="result-section">
        <h3>Code:</h3>
        <pre id="result"></pre>
      </div>

      <div class="output-section">
        <h3>Output:</h3>
        <pre id="output"></pre>
      </div>
    </div>
  `,
  cssCode: `
    .topic-container {
      max-width: 900px;
      margin: 0 auto;
      padding: 20px;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      border-radius: 10px;
      color: #fff;
    }

    h2 {
      text-align: center;
      margin-bottom: 30px;
      font-size: 2.5em;
      text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
    }

    .code-section {
      background: rgba(255,255,255,0.1);
      padding: 15px;
      margin: 15px 0;
      border-left: 4px solid #ffd700;
      border-radius: 5px;
      backdrop-filter: blur(10px);
    }

    .code-section h3 {
      margin-top: 0;
      color: #ffd700;
    }

    .code-section p {
      margin: 8px 0;
      line-height: 1.6;
    }

    code {
      background: rgba(0,0,0,0.2);
      padding: 2px 6px;
      border-radius: 3px;
      font-family: 'Courier New', monospace;
    }

    .button-group {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 10px;
      margin: 20px 0;
    }

    .btn {
      padding: 12px 20px;
      background: #ffd700;
      color: #333;
      border: none;
      border-radius: 5px;
      font-weight: bold;
      cursor: pointer;
      transition: all 0.3s ease;
      font-size: 14px;
    }

    .btn:hover {
      background: #ffed4e;
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(0,0,0,0.3);
    }

    .result-section, .output-section {
      background: rgba(0,0,0,0.2);
      padding: 15px;
      margin: 15px 0;
      border-radius: 5px;
      backdrop-filter: blur(10px);
    }

    .result-section h3, .output-section h3 {
      margin-top: 0;
      color: #ffd700;
    }

    pre {
      background: rgba(0,0,0,0.3);
      padding: 15px;
      border-radius: 5px;
      overflow-x: auto;
      color: #fff;
      font-size: 13px;
      line-height: 1.5;
      margin: 0;
    }
  `,
  jsCode: `
    const result = document.getElementById('result');
    const output = document.getElementById('output');

    document.getElementById('basicBtn').addEventListener('click', () => {
      function greet(name) {
        return \`Hello, \${name}!\`;
      }
      
      const msg = greet('Alice');
      
      result.textContent = \`function greet(name) {\\n  return \\\`Hello, \${name}!\\\`;\\n}\\n\\ngreet('Alice');\\n\\n✅ Parameter: name\\n✅ Argument: 'Alice'\\n✅ Use in function\`;
      
      output.textContent = \`✅ Result: \${msg}\`;
      console.log('Basic param:', msg);
    });

    document.getElementById('multiBtn').addEventListener('click', () => {
      function introduce(name, age, city) {
        return \`\${name} is \${age} and lives in \${city}\`;
      }
      
      const intro = introduce('Bob', 30, 'NYC');
      
      result.textContent = \`function introduce(name, age, city) {\\n  return \\\`\${name} is \${age}...\\\`;\\n}\\n\\nintroduce('Bob', 30, 'NYC');\\n\\n✅ Multiple parameters\\n✅ Separate by comma\\n✅ Use all values\`;
      
      output.textContent = \`✅ Result: \${intro}\`;
      console.log('Multiple params:', intro);
    });

    document.getElementById('typeBtn').addEventListener('click', () => {
      function describe(name, age, active) {
        return \`\${name}, \${age} years, active: \${active}\`;
      }
      
      const desc = describe('Charlie', 25, true);
      
      result.textContent = \`function describe(name, age, active) {\\n  return \\\`\${name}, \${age}...\\\`;\\n}\\n\\ndescribe('Charlie', 25, true);\\n\\n✅ String parameter\\n✅ Number parameter\\n✅ Boolean parameter\`;
      
      output.textContent = \`✅ Result: \${desc}\\n✅ Different types!\`;
      console.log('Different types:', desc);
    });

    document.getElementById('orderBtn').addEventListener('click', () => {
      function calculate(a, b, operation) {
        if (operation === 'add') return a + b;
        if (operation === 'multiply') return a * b;
      }
      
      const sum = calculate(5, 3, 'add');
      const product = calculate(5, 3, 'multiply');
      
      result.textContent = \`function calculate(a, b, operation) {\\n  if (operation === 'add') return a + b;\\n  if (operation === 'multiply') return a * b;\\n}\\n\\ncalculate(5, 3, 'add');\\ncalculate(5, 3, 'multiply');\\n\\n✅ Parameter order matters\\n✅ First param: a\\n✅ Second param: b\`;
      
      output.textContent = \`✅ Add: \${sum}\\n✅ Multiply: \${product}\\n✅ Order matters!\`;
      console.log('Order:', sum, product);
    });

    document.getElementById('countBtn').addEventListener('click', () => {
      function test(a, b, c) {
        return \`Got \${arguments.length} arguments\`;
      }
      
      const result1 = test(1);
      const result2 = test(1, 2);
      const result3 = test(1, 2, 3);
      
      result.textContent = \`function test(a, b, c) {\\n  return \\\`Got \${arguments.length} arguments\\\`;\\n}\\n\\ntest(1);        // 1 argument\\ntest(1, 2);     // 2 arguments\\ntest(1, 2, 3);  // 3 arguments\\n\\n✅ Can pass fewer args\\n✅ Can pass more args\\n✅ Use arguments object\`;
      
      output.textContent = \`✅ 1 arg: \${result1}\\n✅ 2 args: \${result2}\\n✅ 3 args: \${result3}\`;
      console.log('Argument count:', result1, result2, result3);
    });

    console.log('📥 Function Parameters ready!');`
},

// ============================================
// REMAINING JAVASCRIPT TOPICS - READY TO ADD
// ============================================
// Add these topics to jsTopicExamples array before the export statement

// TOPIC 1: OBJECT DESTRUCTURING
{
  topic: 'object-destructuring',
  title: '🎯 Object Destructuring',
  description: 'Extract named properties into separate variables',
  tags: ['objects', 'destructuring', 'intermediate'],
  difficulty: 'Intermediate',
  htmlCode: `
    <div class="topic-container">
      <h2>🎯 Object Destructuring</h2>
      
      <div class="code-section">
        <h3>Extract Object Properties:</h3>
        <p><code>const { name, age } = obj</code></p>
        <p>Cleaner than obj.name and obj.age</p>
      </div>

      <div class="button-group">
        <button id="basicBtn" class="btn">Basic Destructuring</button>
        <button id="renameBtn" class="btn">Rename Properties</button>
        <button id="defaultBtn" class="btn">Default Values</button>
        <button id="nestedBtn" class.btn">Nested Objects</button>
        <button id="restBtn" class="btn">Rest Operator</button>
      </div>

      <div class="result-section">
        <h3>Code:</h3>
        <pre id="result"></pre>
      </div>

      <div class="output-section">
        <h3>Output:</h3>
        <pre id="output"></pre>
      </div>
    </div>
  `,
  cssCode: `
    .topic-container {
      max-width: 900px;
      margin: 0 auto;
      padding: 20px;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      border-radius: 10px;
      color: #fff;
    }

    h2 {
      text-align: center;
      margin-bottom: 30px;
      font-size: 2.5em;
      text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
    }

    .code-section {
      background: rgba(255,255,255,0.1);
      padding: 15px;
      margin: 15px 0;
      border-left: 4px solid #ffd700;
      border-radius: 5px;
      backdrop-filter: blur(10px);
    }

    .code-section h3 {
      margin-top: 0;
      color: #ffd700;
    }

    .code-section p {
      margin: 8px 0;
      line-height: 1.6;
    }

    code {
      background: rgba(0,0,0,0.2);
      padding: 2px 6px;
      border-radius: 3px;
      font-family: 'Courier New', monospace;
    }

    .button-group {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 10px;
      margin: 20px 0;
    }

    .btn {
      padding: 12px 20px;
      background: #ffd700;
      color: #333;
      border: none;
      border-radius: 5px;
      font-weight: bold;
      cursor: pointer;
      transition: all 0.3s ease;
      font-size: 14px;
    }

    .btn:hover {
      background: #ffed4e;
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(0,0,0,0.3);
    }

    .result-section, .output-section {
      background: rgba(0,0,0,0.2);
      padding: 15px;
      margin: 15px 0;
      border-radius: 5px;
      backdrop-filter: blur(10px);
    }

    .result-section h3, .output-section h3 {
      margin-top: 0;
      color: #ffd700;
    }

    pre {
      background: rgba(0,0,0,0.3);
      padding: 15px;
      border-radius: 5px;
      overflow-x: auto;
      color: #fff;
      font-size: 13px;
      line-height: 1.5;
      margin: 0;
    }
  `,
  jsCode: `
    const result = document.getElementById('result');
    const output = document.getElementById('output');

    document.getElementById('basicBtn').addEventListener('click', () => {
      const person = { name: 'Alice', age: 25, city: 'NYC' };
      const { name, age } = person;
      
      result.textContent = \`const person = { name: 'Alice', age: 25, city: 'NYC' };\\nconst { name, age } = person;\\n\\nname: '\${name}'\\nage: \${age}\\n\\n✅ Extract properties\\n✅ Into variables\\n✅ Cleaner syntax\`;
      
      output.textContent = \`✅ Name: \${name}\\n✅ Age: \${age}\\n✅ Destructured!\`;
      console.log('Basic destructuring:', name, age);
    });

    document.getElementById('renameBtn').addEventListener('click', () => {
      const person = { name: 'Bob', age: 30 };
      const { name: personName, age: personAge } = person;
      
      result.textContent = \`const person = { name: 'Bob', age: 30 };\\nconst { name: personName, age: personAge } = person;\\n\\npersonName: '\${personName}'\\npersonAge: \${personAge}\\n\\n✅ Rename properties\\n✅ Use colon syntax\\n✅ Custom variable names\`;
      
      output.textContent = \`✅ personName: \${personName}\\n✅ personAge: \${personAge}\\n✅ Renamed!\`;
      console.log('Renamed:', personName, personAge);
    });

    document.getElementById('defaultBtn').addEventListener('click', () => {
      const user = { name: 'Charlie' };
      const { name, age = 25, city = 'Unknown' } = user;
      
      result.textContent = \`const user = { name: 'Charlie' };\\nconst { name, age = 25, city = 'Unknown' } = user;\\n\\nname: '\${name}'\\nage: \${age}\\ncity: '\${city}'\\n\\n✅ Default values\\n✅ If property missing\\n✅ Fallback values\`;
      
      output.textContent = \`✅ Name: \${name}\\n✅ Age: \${age} (default)\\n✅ City: \${city} (default)\`;
      console.log('With defaults:', name, age, city);
    });

    document.getElementById('nestedBtn').addEventListener('click', () => {
      const company = {
        name: 'TechCorp',
        address: { city: 'NYC', zip: '10001' }
      };
      const { name, address: { city } } = company;
      
      result.textContent = \`const company = {\\n  name: 'TechCorp',\\n  address: { city: 'NYC', zip: '10001' }\\n};\\nconst { name, address: { city } } = company;\\n\\nname: '\${name}'\\ncity: '\${city}'\\n\\n✅ Nested destructuring\\n✅ Access nested properties\\n✅ Deep extraction\`;
      
      output.textContent = \`✅ Company: \${name}\\n✅ City: \${city}\\n✅ Nested works!\`;
      console.log('Nested:', name, city);
    });

    document.getElementById('restBtn').addEventListener('click', () => {
      const person = { name: 'Diana', age: 28, city: 'LA', country: 'USA' };
      const { name, ...rest } = person;
      
      result.textContent = \`const person = { name: 'Diana', age: 28, city: 'LA', country: 'USA' };\\nconst { name, ...rest } = person;\\n\\nname: '\${name}'\\nrest: \${JSON.stringify(rest)}\\n\\n✅ Rest operator\\n✅ Capture remaining\\n✅ Collect properties\`;
      
      output.textContent = \`✅ Name: \${name}\\n✅ Rest: \${JSON.stringify(rest)}\\n✅ Rest operator works!\`;
      console.log('Rest:', name, rest);
    });

    console.log('🎯 Object Destructuring ready!');`
},

// TOPIC 2: OBJECT SPREAD
{
  topic: 'object-spread',
  title: '✨ Object Spread',
  description: 'Shallow copy and merge objects with ...spread',
  tags: ['objects', 'spread', 'intermediate'],
  difficulty: 'Intermediate',
  htmlCode: `
    <div class="topic-container">
      <h2>✨ Object Spread Operator</h2>
      
      <div class="code-section">
        <h3>Spread Objects:</h3>
        <p><code>const copy = { ...original }</code></p>
        <p>Copy and merge objects easily</p>
      </div>

      <div class="button-group">
        <button id="copyBtn" class="btn">Copy Object</button>
        <button id="mergeBtn" class="btn">Merge Objects</button>
        <button id="overrideBtn" class="btn">Override Props</button>
        <button id="addBtn" class="btn">Add Properties</button>
        <button id="nestedBtn" class="btn">Nested Spread</button>
      </div>

      <div class="result-section">
        <h3>Code:</h3>
        <pre id="result"></pre>
      </div>

      <div class="output-section">
        <h3>Output:</h3>
        <pre id="output"></pre>
      </div>
    </div>
  `,
  cssCode: `
    .topic-container {
      max-width: 900px;
      margin: 0 auto;
      padding: 20px;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
      border-radius: 10px;
      color: #fff;
    }

    h2 {
      text-align: center;
      margin-bottom: 30px;
      font-size: 2.5em;
      text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
    }

    .code-section {
      background: rgba(255,255,255,0.1);
      padding: 15px;
      margin: 15px 0;
      border-left: 4px solid #ffd700;
      border-radius: 5px;
      backdrop-filter: blur(10px);
    }

    .code-section h3 {
      margin-top: 0;
      color: #ffd700;
    }

    .code-section p {
      margin: 8px 0;
      line-height: 1.6;
    }

    code {
      background: rgba(0,0,0,0.2);
      padding: 2px 6px;
      border-radius: 3px;
      font-family: 'Courier New', monospace;
    }

    .button-group {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 10px;
      margin: 20px 0;
    }

    .btn {
      padding: 12px 20px;
      background: #ffd700;
      color: #333;
      border: none;
      border-radius: 5px;
      font-weight: bold;
      cursor: pointer;
      transition: all 0.3s ease;
      font-size: 14px;
    }

    .btn:hover {
      background: #ffed4e;
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(0,0,0,0.3);
    }

    .result-section, .output-section {
      background: rgba(0,0,0,0.2);
      padding: 15px;
      margin: 15px 0;
      border-radius: 5px;
      backdrop-filter: blur(10px);
    }

    .result-section h3, .output-section h3 {
      margin-top: 0;
      color: #ffd700;
    }

    pre {
      background: rgba(0,0,0,0.3);
      padding: 15px;
      border-radius: 5px;
      overflow-x: auto;
      color: #fff;
      font-size: 13px;
      line-height: 1.5;
      margin: 0;
    }
  `,
  jsCode: `
    const result = document.getElementById('result');
    const output = document.getElementById('output');

    document.getElementById('copyBtn').addEventListener('click', () => {
      const original = { name: 'Alice', age: 25 };
      const copy = { ...original };
      copy.age = 26;
      
      result.textContent = \`const original = { name: 'Alice', age: 25 };\\nconst copy = { ...original };\\ncopy.age = 26;\\n\\nOriginal: \${JSON.stringify(original)}\\nCopy: \${JSON.stringify(copy)}\\n\\n✅ Spread creates copy\\n✅ Independent objects\\n✅ Changes don't affect original\`;
      
      output.textContent = \`✅ Original age: \${original.age}\\n✅ Copy age: \${copy.age}\\n✅ Spread works!\`;
      console.log('Copy:', original, copy);
    });

    document.getElementById('mergeBtn').addEventListener('click', () => {
      const obj1 = { name: 'Bob', age: 30 };
      const obj2 = { city: 'NYC', country: 'USA' };
      const merged = { ...obj1, ...obj2 };
      
      result.textContent = \`const obj1 = { name: 'Bob', age: 30 };\\nconst obj2 = { city: 'NYC', country: 'USA' };\\nconst merged = { ...obj1, ...obj2 };\\n\\nResult: \${JSON.stringify(merged)}\\n\\n✅ Merge multiple objects\\n✅ Combine properties\\n✅ New object created\`;
      
      output.textContent = \`✅ Merged: \${JSON.stringify(merged)}\\n✅ All properties combined!\`;
      console.log('Merged:', merged);
    });

    document.getElementById('overrideBtn').addEventListener('click', () => {
      const defaults = { theme: 'light', lang: 'en', size: 'medium' };
      const userSettings = { theme: 'dark', size: 'large' };
      const final = { ...defaults, ...userSettings };
      
      result.textContent = \`const defaults = { theme: 'light', lang: 'en', size: 'medium' };\\nconst userSettings = { theme: 'dark', size: 'large' };\\nconst final = { ...defaults, ...userSettings };\\n\\nResult: \${JSON.stringify(final)}\\n\\n✅ Override properties\\n✅ Later values win\\n✅ Merge with override\`;
      
      output.textContent = \`✅ Theme: \${final.theme} (overridden)\\n✅ Lang: \${final.lang} (default)\\n✅ Size: \${final.size} (overridden)\`;
      console.log('Override:', final);
    });

    document.getElementById('addBtn').addEventListener('click', () => {
      const person = { name: 'Charlie', age: 35 };
      const updated = { ...person, city: 'LA', country: 'USA' };
      
      result.textContent = \`const person = { name: 'Charlie', age: 35 };\\nconst updated = { ...person, city: 'LA', country: 'USA' };\\n\\nResult: \${JSON.stringify(updated)}\\n\\n✅ Add new properties\\n✅ Keep existing\\n✅ Extend object\`;
      
      output.textContent = \`✅ Updated: \${JSON.stringify(updated)}\\n✅ New properties added!\`;
      console.log('Added:', updated);
    });

    document.getElementById('nestedBtn').addEventListener('click', () => {
      const user = { name: 'Diana', address: { city: 'NYC' } };
      const updated = { ...user, address: { ...user.address, zip: '10001' } };
      
      result.textContent = \`const user = { name: 'Diana', address: { city: 'NYC' } };\\nconst updated = { ...user, address: { ...user.address, zip: '10001' } };\\n\\nResult: \${JSON.stringify(updated)}\\n\\n✅ Nested spread\\n✅ Deep copy pattern\\n✅ Preserve nested data\`;
      
      output.textContent = \`✅ Updated: \${JSON.stringify(updated)}\\n✅ Nested spread works!\`;
      console.log('Nested:', updated);
    });

    console.log('✨ Object Spread ready!');`
},

// TOPIC 3: OBJECT KEYS VALUES ENTRIES
{
  topic: 'Object-keys-values',
  title: '🔑 Object Keys, Values, Entries',
  description: 'Object.keys(), Object.values(), Object.entries()',
  tags: ['objects', 'methods', 'intermediate'],
  difficulty: 'Intermediate',
  htmlCode: `
    <div class="topic-container">
      <h2>🔑 Object Keys, Values, Entries</h2>
      
      <div class="code-section">
        <h3>Object Static Methods:</h3>
        <p>✅ <code>Object.keys(obj)</code> - Get all keys</p>
        <p>✅ <code>Object.values(obj)</code> - Get all values</p>
        <p>✅ <code>Object.entries(obj)</code> - Get [key, value] pairs</p>
      </div>

      <div class="button-group">
        <button id="keysBtn" class="btn">Object.keys()</button>
        <button id="valuesBtn" class="btn">Object.values()</button>
        <button id="entriesBtn" class="btn">Object.entries()</button>
        <button id="loopBtn" class="btn">Loop Entries</button>
        <button id="filterBtn" class="btn">Filter Values</button>
      </div>

      <div class="result-section">
        <h3>Code:</h3>
        <pre id="result"></pre>
      </div>

      <div class="output-section">
        <h3>Output:</h3>
        <pre id="output"></pre>
      </div>
    </div>
  `,
  cssCode: `
    .topic-container {
      max-width: 900px;
      margin: 0 auto;
      padding: 20px;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
      border-radius: 10px;
      color: #fff;
    }

    h2 {
      text-align: center;
      margin-bottom: 30px;
      font-size: 2.5em;
      text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
    }

    .code-section {
      background: rgba(255,255,255,0.1);
      padding: 15px;
      margin: 15px 0;
      border-left: 4px solid #ffd700;
      border-radius: 5px;
      backdrop-filter: blur(10px);
    }

    .code-section h3 {
      margin-top: 0;
      color: #ffd700;
    }

    .code-section p {
      margin: 8px 0;
      line-height: 1.6;
    }

    code {
      background: rgba(0,0,0,0.2);
      padding: 2px 6px;
      border-radius: 3px;
      font-family: 'Courier New', monospace;
    }

    .button-group {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 10px;
      margin: 20px 0;
    }

    .btn {
      padding: 12px 20px;
      background: #ffd700;
      color: #333;
      border: none;
      border-radius: 5px;
      font-weight: bold;
      cursor: pointer;
      transition: all 0.3s ease;
      font-size: 14px;
    }

    .btn:hover {
      background: #ffed4e;
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(0,0,0,0.3);
    }

    .result-section, .output-section {
      background: rgba(0,0,0,0.2);
      padding: 15px;
      margin: 15px 0;
      border-radius: 5px;
      backdrop-filter: blur(10px);
    }

    .result-section h3, .output-section h3 {
      margin-top: 0;
      color: #ffd700;
    }

    pre {
      background: rgba(0,0,0,0.3);
      padding: 15px;
      border-radius: 5px;
      overflow-x: auto;
      color: #fff;
      font-size: 13px;
      line-height: 1.5;
      margin: 0;
    }
  `,
  jsCode: `
    const result = document.getElementById('result');
    const output = document.getElementById('output');

    const person = { name: 'Alice', age: 25, city: 'NYC' };

    document.getElementById('keysBtn').addEventListener('click', () => {
      const keys = Object.keys(person);
      
      result.textContent = \`const person = { name: 'Alice', age: 25, city: 'NYC' };\\nconst keys = Object.keys(person);\\n\\nResult: [\${keys.map(k => "'" + k + "'").join(', ')}]\\n\\n✅ Get all keys\\n✅ Returns array\\n✅ Property names\`;
      
      output.textContent = \`✅ Keys: [\${keys.map(k => "'" + k + "'").join(', ')}]\\n✅ Array of keys!\`;
      console.log('Keys:', keys);
    });

    document.getElementById('valuesBtn').addEventListener('click', () => {
      const values = Object.values(person);
      
      result.textContent = \`const person = { name: 'Alice', age: 25, city: 'NYC' };\\nconst values = Object.values(person);\\n\\nResult: [\${values.map(v => typeof v === 'string' ? "'" + v + "'" : v).join(', ')}]\\n\\n✅ Get all values\\n✅ Returns array\\n✅ Property values\`;
      
      output.textContent = \`✅ Values: [\${values.map(v => typeof v === 'string' ? "'" + v + "'" : v).join(', ')}]\\n✅ Array of values!\`;
      console.log('Values:', values);
    });

    document.getElementById('entriesBtn').addEventListener('click', () => {
      const entries = Object.entries(person);
      
      result.textContent = \`const person = { name: 'Alice', age: 25, city: 'NYC' };\\nconst entries = Object.entries(person);\\n\\nResult: [\${entries.map(e => "['" + e[0] + "', " + (typeof e[1] === 'string' ? "'" + e[1] + "'" : e[1]) + "]").join(', ')}]\\n\\n✅ Get [key, value] pairs\\n✅ Returns array of arrays\\n✅ Key-value tuples\`;
      
      output.textContent = \`✅ Entries:\\n\${entries.map(e => \`  [\${e[0]}, \${typeof e[1] === 'string' ? "'" + e[1] + "'" : e[1]}]\`).join('\\n')}\\n✅ Key-value pairs!\`;
      console.log('Entries:', entries);
    });

    document.getElementById('loopBtn').addEventListener('click', () => {
      let output_text = '✅ Looping entries:\\n';
      Object.entries(person).forEach(([key, value]) => {
        output_text += \`  \${key}: \${typeof value === 'string' ? "'" + value + "'" : value}\\n\`;
      });
      
      result.textContent = \`Object.entries(person).forEach(([key, value]) => {\\n  console.log(key, value);\\n});\\n\\n✅ Loop through entries\\n✅ Destructure in forEach\\n✅ Access key and value\`;
      
      output.textContent = output_text;
      console.log('Loop entries:', person);
    });

    document.getElementById('filterBtn').addEventListener('click', () => {
      const filtered = Object.fromEntries(
        Object.entries(person).filter(([key, value]) => typeof value === 'string')
      );
      
      result.textContent = \`const filtered = Object.fromEntries(\\n  Object.entries(person).filter(([key, value]) => typeof value === 'string')\\n);\\n\\nResult: \${JSON.stringify(filtered)}\\n\\n✅ Filter entries\\n✅ Create new object\\n✅ Only string values\`;
      
      output.textContent = \`✅ Filtered: \${JSON.stringify(filtered)}\\n✅ Only strings!\`;
      console.log('Filtered:', filtered);
    });

    console.log('🔑 Object Keys, Values, Entries ready!');`
},

// ============================================
// BATCH 3: MORE JAVASCRIPT TOPICS
// ============================================

// TOPIC 7: DEFAULT PARAMETERS
{
  topic: 'default-parameters',
  title: '⚙️ Default Parameters',
  description: 'Provide fallback values for missing arguments',
  tags: ['functions', 'parameters', 'intermediate'],
  difficulty: 'Intermediate',
  htmlCode: `
    <div class="topic-container">
      <h2>⚙️ Default Parameters</h2>
      
      <div class="code-section">
        <h3>Set Default Values:</h3>
        <p><code>function fn(param = defaultValue) { }</code></p>
        <p>Used if argument not provided</p>
      </div>

      <div class="button-group">
        <button id="basicBtn" class="btn">Basic Default</button>
        <button id="multiBtn" class="btn">Multiple Defaults</button>
        <button id="expressionBtn" class="btn">Expression Default</button>
        <button id="undefinedBtn" class="btn">Undefined Triggers</button>
        <button id="arrowBtn" class="btn">Arrow Function</button>
      </div>

      <div class="result-section">
        <h3>Code:</h3>
        <pre id="result"></pre>
      </div>

      <div class="output-section">
        <h3>Output:</h3>
        <pre id="output"></pre>
      </div>
    </div>
  `,
  cssCode: `
    .topic-container {
      max-width: 900px;
      margin: 0 auto;
      padding: 20px;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
      border-radius: 10px;
      color: #fff;
    }

    h2 {
      text-align: center;
      margin-bottom: 30px;
      font-size: 2.5em;
      text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
    }

    .code-section {
      background: rgba(255,255,255,0.1);
      padding: 15px;
      margin: 15px 0;
      border-left: 4px solid #ffd700;
      border-radius: 5px;
      backdrop-filter: blur(10px);
    }

    .code-section h3 {
      margin-top: 0;
      color: #ffd700;
    }

    .code-section p {
      margin: 8px 0;
      line-height: 1.6;
    }

    code {
      background: rgba(0,0,0,0.2);
      padding: 2px 6px;
      border-radius: 3px;
      font-family: 'Courier New', monospace;
    }

    .button-group {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 10px;
      margin: 20px 0;
    }

    .btn {
      padding: 12px 20px;
      background: #ffd700;
      color: #333;
      border: none;
      border-radius: 5px;
      font-weight: bold;
      cursor: pointer;
      transition: all 0.3s ease;
      font-size: 14px;
    }

    .btn:hover {
      background: #ffed4e;
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(0,0,0,0.3);
    }

    .result-section, .output-section {
      background: rgba(0,0,0,0.2);
      padding: 15px;
      margin: 15px 0;
      border-radius: 5px;
      backdrop-filter: blur(10px);
    }

    .result-section h3, .output-section h3 {
      margin-top: 0;
      color: #ffd700;
    }

    pre {
      background: rgba(0,0,0,0.3);
      padding: 15px;
      border-radius: 5px;
      overflow-x: auto;
      color: #fff;
      font-size: 13px;
      line-height: 1.5;
      margin: 0;
    }
  `,
  jsCode: `
    const result = document.getElementById('result');
    const output = document.getElementById('output');

    document.getElementById('basicBtn').addEventListener('click', () => {
      function greet(name = 'Guest') {
        return \`Hello, \${name}!\`;
      }
      
      const msg1 = greet();
      const msg2 = greet('Alice');
      
      result.textContent = \`function greet(name = 'Guest') {\\n  return \\\`Hello, \${name}!\\\`;\\n}\\n\\ngreet();        // Uses default\\ngreet('Alice'); // Uses argument\\n\\n✅ Default parameter\\n✅ Used if no argument\\n✅ Can override\`;
      
      output.textContent = \`✅ No arg: \${msg1}\\n✅ With arg: \${msg2}\`;
      console.log('Basic default:', msg1, msg2);
    });

    document.getElementById('multiBtn').addEventListener('click', () => {
      function describe(name = 'Unknown', age = 0, city = 'Unknown') {
        return \`\${name}, \${age} years, \${city}\`;
      }
      
      const desc1 = describe();
      const desc2 = describe('Bob', 30);
      const desc3 = describe('Charlie', 25, 'NYC');
      
      result.textContent = \`function describe(name = 'Unknown', age = 0, city = 'Unknown') {\\n  return \\\`\${name}, \${age}...\\\`;\\n}\\n\\ndescribe();\\ndescribe('Bob', 30);\\ndescribe('Charlie', 25, 'NYC');\\n\\n✅ Multiple defaults\\n✅ Mix provided and defaults\\n✅ Flexible arguments\`;
      
      output.textContent = \`✅ All defaults: \${desc1}\\n✅ Partial: \${desc2}\\n✅ All provided: \${desc3}\`;
      console.log('Multiple defaults:', desc1, desc2, desc3);
    });

    document.getElementById('expressionBtn').addEventListener('click', () => {
      function createUser(name = 'User', id = Math.random()) {
        return { name, id };
      }
      
      const user1 = createUser();
      const user2 = createUser('Alice');
      
      result.textContent = \`function createUser(name = 'User', id = Math.random()) {\\n  return { name, id };\\n}\\n\\ncreateUser();\\ncreateUser('Alice');\\n\\n✅ Expression as default\\n✅ Evaluated each call\\n✅ Dynamic defaults\`;
      
      output.textContent = \`✅ User 1: \${JSON.stringify(user1)}\\n✅ User 2: \${JSON.stringify(user2)}\\n✅ Different IDs!\`;
      console.log('Expression default:', user1, user2);
    });

    document.getElementById('undefinedBtn').addEventListener('click', () => {
      function test(value = 'default') {
        return value;
      }
      
      const result1 = test();
      const result2 = test(undefined);
      const result3 = test(null);
      const result4 = test(0);
      
      result.textContent = \`function test(value = 'default') {\\n  return value;\\n}\\n\\ntest();           // 'default'\\ntest(undefined);  // 'default'\\ntest(null);       // null\\ntest(0);          // 0\\n\\n✅ undefined triggers default\\n✅ null does NOT\\n✅ 0 does NOT\`;
      
      output.textContent = \`✅ No arg: \${result1}\\n✅ undefined: \${result2}\\n✅ null: \${result3}\\n✅ 0: \${result4}\`;
      console.log('Undefined triggers:', result1, result2, result3, result4);
    });

    document.getElementById('arrowBtn').addEventListener('click', () => {
      const multiply = (a = 1, b = 1) => a * b;
      
      const result1 = multiply();
      const result2 = multiply(5);
      const result3 = multiply(5, 3);
      
      result.textContent = \`const multiply = (a = 1, b = 1) => a * b;\\n\\nmultiply();      // 1\\nmultiply(5);     // 5\\nmultiply(5, 3);  // 15\\n\\n✅ Arrow functions\\n✅ Support defaults\\n✅ Same syntax\`;
      
      output.textContent = \`✅ No args: \${result1}\\n✅ One arg: \${result2}\\n✅ Two args: \${result3}\`;
      console.log('Arrow defaults:', result1, result2, result3);
    });

    console.log('⚙️ Default Parameters ready!');`
},

// TOPIC 8: REST PARAMETERS
{
  topic: 'rest-parameters',
  title: '📦 Rest Parameters',
  description: 'Collect extra arguments into an array with ...rest',
  tags: ['functions', 'rest', 'intermediate'],
  difficulty: 'Intermediate',
  htmlCode: `
    <div class="topic-container">
      <h2>📦 Rest Parameters</h2>
      
      <div class="code-section">
        <h3>Collect Remaining Arguments:</h3>
        <p><code>function fn(first, ...rest) { }</code></p>
        <p>rest becomes an array</p>
      </div>

      <div class="button-group">
        <button id="basicBtn" class="btn">Basic Rest</button>
        <button id="multiBtn" class="btn">Multiple Args</button>
        <button id="sumBtn" class="btn">Sum All</button>
        <button id="firstBtn" class="btn">First + Rest</button>
        <button id="arrowBtn" class="btn">Arrow Function</button>
      </div>

      <div class="result-section">
        <h3>Code:</h3>
        <pre id="result"></pre>
      </div>

      <div class="output-section">
        <h3>Output:</h3>
        <pre id="output"></pre>
      </div>
    </div>
  `,
  cssCode: `
    .topic-container {
      max-width: 900px;
      margin: 0 auto;
      padding: 20px;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
      border-radius: 10px;
      color: #fff;
    }

    h2 {
      text-align: center;
      margin-bottom: 30px;
      font-size: 2.5em;
      text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
    }

    .code-section {
      background: rgba(255,255,255,0.1);
      padding: 15px;
      margin: 15px 0;
      border-left: 4px solid #ffd700;
      border-radius: 5px;
      backdrop-filter: blur(10px);
    }

    .code-section h3 {
      margin-top: 0;
      color: #ffd700;
    }

    .code-section p {
      margin: 8px 0;
      line-height: 1.6;
    }

    code {
      background: rgba(0,0,0,0.2);
      padding: 2px 6px;
      border-radius: 3px;
      font-family: 'Courier New', monospace;
    }

    .button-group {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 10px;
      margin: 20px 0;
    }

    .btn {
      padding: 12px 20px;
      background: #ffd700;
      color: #333;
      border: none;
      border-radius: 5px;
      font-weight: bold;
      cursor: pointer;
      transition: all 0.3s ease;
      font-size: 14px;
    }

    .btn:hover {
      background: #ffed4e;
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(0,0,0,0.3);
    }

    .result-section, .output-section {
      background: rgba(0,0,0,0.2);
      padding: 15px;
      margin: 15px 0;
      border-radius: 5px;
      backdrop-filter: blur(10px);
    }

    .result-section h3, .output-section h3 {
      margin-top: 0;
      color: #ffd700;
    }

    pre {
      background: rgba(0,0,0,0.3);
      padding: 15px;
      border-radius: 5px;
      overflow-x: auto;
      color: #fff;
      font-size: 13px;
      line-height: 1.5;
      margin: 0;
    }
  `,
  jsCode: `
    const result = document.getElementById('result');
    const output = document.getElementById('output');

    document.getElementById('basicBtn').addEventListener('click', () => {
      function collect(...args) {
        return args;
      }
      
      const result1 = collect(1, 2, 3);
      const result2 = collect('a', 'b', 'c', 'd');
      
      result.textContent = \`function collect(...args) {\\n  return args;\\n}\\n\\ncollect(1, 2, 3);\\ncollect('a', 'b', 'c', 'd');\\n\\n✅ Rest parameter\\n✅ Collects all args\\n✅ Returns array\`;
      
      output.textContent = \`✅ Result 1: [\${result1}]\\n✅ Result 2: [\${result2}]\`;
      console.log('Basic rest:', result1, result2);
    });

    document.getElementById('multiBtn').addEventListener('click', () => {
      function describe(first, ...rest) {
        return { first, rest };
      }
      
      const result_val = describe('Alice', 25, 'NYC', true);
      
      result.textContent = \`function describe(first, ...rest) {\\n  return { first, rest };\\n}\\n\\ndescribe('Alice', 25, 'NYC', true);\\n\\n✅ First parameter: 'Alice'\\n✅ Rest: [25, 'NYC', true]\\n✅ Separate first from rest\`;
      
      output.textContent = \`✅ First: \${result_val.first}\\n✅ Rest: [\${result_val.rest}]\`;
      console.log('Multiple:', result_val);
    });

    document.getElementById('sumBtn').addEventListener('click', () => {
      function sum(...numbers) {
        return numbers.reduce((a, b) => a + b, 0);
      }
      
      const result1 = sum(1, 2, 3);
      const result2 = sum(5, 10, 15, 20);
      
      result.textContent = \`function sum(...numbers) {\\n  return numbers.reduce((a, b) => a + b, 0);\\n}\\n\\nsum(1, 2, 3);\\nsum(5, 10, 15, 20);\\n\\n✅ Collect all numbers\\n✅ Use reduce to sum\\n✅ Flexible arguments\`;
      
      output.textContent = \`✅ Sum 1: \${result1}\\n✅ Sum 2: \${result2}\`;
      console.log('Sum:', result1, result2);
    });

    document.getElementById('firstBtn').addEventListener('click', () => {
      function greet(greeting, ...names) {
        return \`\${greeting} \${names.join(', ')}!\`;
      }
      
      const msg1 = greet('Hello', 'Alice');
      const msg2 = greet('Hi', 'Bob', 'Charlie', 'Diana');
      
      result.textContent = \`function greet(greeting, ...names) {\\n  return \\\`\${greeting} \${names.join(', ')}!\\\`;\\n}\\n\\ngreet('Hello', 'Alice');\\ngreet('Hi', 'Bob', 'Charlie', 'Diana');\\n\\n✅ First: greeting\\n✅ Rest: all names\\n✅ Join with comma\`;
      
      output.textContent = \`✅ Message 1: \${msg1}\\n✅ Message 2: \${msg2}\`;
      console.log('First + rest:', msg1, msg2);
    });

    document.getElementById('arrowBtn').addEventListener('click', () => {
      const concat = (...items) => items.join(' ');
      
      const result1 = concat('Hello', 'World');
      const result2 = concat('JavaScript', 'is', 'awesome');
      
      result.textContent = \`const concat = (...items) => items.join(' ');\\n\\nconcat('Hello', 'World');\\nconcat('JavaScript', 'is', 'awesome');\\n\\n✅ Arrow function\\n✅ Rest parameters\\n✅ Join with space\`;
      
      output.textContent = \`✅ Result 1: \${result1}\\n✅ Result 2: \${result2}\`;
      console.log('Arrow rest:', result1, result2);
    });

    console.log('📦 Rest Parameters ready!');`
},

// TOPIC 9: RETURN STATEMENT
{
  topic: 'return',
  title: '↩️ Return Statement',
  description: 'Send a value back from a function to the caller',
  tags: ['functions', 'return', 'beginner'],
  difficulty: 'Beginner',
  htmlCode: `
    <div class="topic-container">
      <h2>↩️ Return Statement</h2>
      
      <div class="code-section">
        <h3>Return Values from Functions:</h3>
        <p><code>return value;</code></p>
        <p>Exits function and sends value back</p>
      </div>

      <div class="button-group">
        <button id="basicBtn" class="btn">Basic Return</button>
        <button id="noReturnBtn" class="btn">No Return</button>
        <button id="earlyBtn" class="btn">Early Return</button>
        <button id="multiBtn" class="btn">Multiple Returns</button>
        <button id="objectBtn" class="btn">Return Object</button>
      </div>

      <div class="result-section">
        <h3>Code:</h3>
        <pre id="result"></pre>
      </div>

      <div class="output-section">
        <h3>Output:</h3>
        <pre id="output"></pre>
      </div>
    </div>
  `,
  cssCode: `
    .topic-container {
      max-width: 900px;
      margin: 0 auto;
      padding: 20px;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%);
      border-radius: 10px;
      color: #fff;
    }

    h2 {
      text-align: center;
      margin-bottom: 30px;
      font-size: 2.5em;
      text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
    }

    .code-section {
      background: rgba(255,255,255,0.1);
      padding: 15px;
      margin: 15px 0;
      border-left: 4px solid #ffd700;
      border-radius: 5px;
      backdrop-filter: blur(10px);
    }

    .code-section h3 {
      margin-top: 0;
      color: #ffd700;
    }

    .code-section p {
      margin: 8px 0;
      line-height: 1.6;
    }

    code {
      background: rgba(0,0,0,0.2);
      padding: 2px 6px;
      border-radius: 3px;
      font-family: 'Courier New', monospace;
    }

    .button-group {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 10px;
      margin: 20px 0;
    }

    .btn {
      padding: 12px 20px;
      background: #ffd700;
      color: #333;
      border: none;
      border-radius: 5px;
      font-weight: bold;
      cursor: pointer;
      transition: all 0.3s ease;
      font-size: 14px;
    }

    .btn:hover {
      background: #ffed4e;
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(0,0,0,0.3);
    }

    .result-section, .output-section {
      background: rgba(0,0,0,0.2);
      padding: 15px;
      margin: 15px 0;
      border-radius: 5px;
      backdrop-filter: blur(10px);
    }

    .result-section h3, .output-section h3 {
      margin-top: 0;
      color: #ffd700;
    }

    pre {
      background: rgba(0,0,0,0.3);
      padding: 15px;
      border-radius: 5px;
      overflow-x: auto;
      color: #fff;
      font-size: 13px;
      line-height: 1.5;
      margin: 0;
    }
  `,
  jsCode: `
    const result = document.getElementById('result');
    const output = document.getElementById('output');

    document.getElementById('basicBtn').addEventListener('click', () => {
      function add(a, b) {
        return a + b;
      }
      
      const sum = add(5, 3);
      
      result.textContent = \`function add(a, b) {\\n  return a + b;\\n}\\n\\nconst sum = add(5, 3);\\n\\n✅ Return statement\\n✅ Sends value back\\n✅ Assign to variable\`;
      
      output.textContent = \`✅ Result: \${sum}\\n✅ 5 + 3 = \${sum}\`;
      console.log('Basic return:', sum);
    });

    document.getElementById('noReturnBtn').addEventListener('click', () => {
      function noReturn() {
        console.log('This runs');
      }
      
      const result_val = noReturn();
      
      result.textContent = \`function noReturn() {\\n  console.log('This runs');\\n}\\n\\nconst result = noReturn();\\n\\n✅ No return statement\\n✅ Returns undefined\\n✅ Function still runs\`;
      
      output.textContent = \`✅ Result: \${result_val}\\n✅ undefined\`;
      console.log('No return:', result_val);
    });

    document.getElementById('earlyBtn').addEventListener('click', () => {
      function checkAge(age) {
        if (age < 18) {
          return 'Too young';
        }
        return 'Welcome';
      }
      
      const msg1 = checkAge(15);
      const msg2 = checkAge(25);
      
      result.textContent = \`function checkAge(age) {\\n  if (age < 18) {\\n    return 'Too young';\\n  }\\n  return 'Welcome';\\n}\\n\\n✅ Early return\\n✅ Exit function early\\n✅ Multiple returns\`;
      
      output.textContent = \`✅ Age 15: \${msg1}\\n✅ Age 25: \${msg2}\`;
      console.log('Early return:', msg1, msg2);
    });

    document.getElementById('multiBtn').addEventListener('click', () => {
      function getGrade(score) {
        if (score >= 90) return 'A';
        if (score >= 80) return 'B';
        if (score >= 70) return 'C';
        return 'F';
      }
      
      const grade1 = getGrade(95);
      const grade2 = getGrade(85);
      const grade3 = getGrade(65);
      
      result.textContent = \`function getGrade(score) {\\n  if (score >= 90) return 'A';\\n  if (score >= 80) return 'B';\\n  if (score >= 70) return 'C';\\n  return 'F';\\n}\\n\\n✅ Multiple returns\\n✅ Different paths\\n✅ Different values\`;
      
      output.textContent = \`✅ Score 95: \${grade1}\\n✅ Score 85: \${grade2}\\n✅ Score 65: \${grade3}\`;
      console.log('Multiple returns:', grade1, grade2, grade3);
    });

    document.getElementById('objectBtn').addEventListener('click', () => {
      function createUser(name, age) {
        return { name, age, active: true };
      }
      
      const user = createUser('Alice', 25);
      
      result.textContent = \`function createUser(name, age) {\\n  return { name, age, active: true };\\n}\\n\\nconst user = createUser('Alice', 25);\\n\\n✅ Return object\\n✅ Return array\\n✅ Return complex data\`;
      
      output.textContent = \`✅ User: \${JSON.stringify(user)}\`;
      console.log('Return object:', user);
    });

    console.log('↩️ Return Statement ready!');`
},


// ============================================
// BATCH 4: SCOPE, CLOSURES, AND MORE
// ============================================

// TOPIC 10: SCOPE
{
  topic: 'scope',
  title: '🔒 Scope',
  description: 'Global, function, and block scope explained',
  tags: ['functions', 'scope', 'intermediate'],
  difficulty: 'Intermediate',
  htmlCode: `
    <div class="topic-container">
      <h2>🔒 JavaScript Scope</h2>
      
      <div class="code-section">
        <h3>Three Types of Scope:</h3>
        <p>✅ Global - Accessible everywhere</p>
        <p>✅ Function - Accessible in function</p>
        <p>✅ Block - Accessible in block { }</p>
      </div>

      <div class="button-group">
        <button id="globalBtn" class="btn">Global Scope</button>
        <button id="functionBtn" class="btn">Function Scope</button>
        <button id="blockBtn" class="btn">Block Scope</button>
        <button id="shadowBtn" class="btn">Variable Shadowing</button>
        <button id="chainBtn" class="btn">Scope Chain</button>
      </div>

      <div class="result-section">
        <h3>Code:</h3>
        <pre id="result"></pre>
      </div>

      <div class="output-section">
        <h3>Output:</h3>
        <pre id="output"></pre>
      </div>
    </div>
  `,
  cssCode: `
    .topic-container {
      max-width: 900px;
      margin: 0 auto;
      padding: 20px;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      border-radius: 10px;
      color: #fff;
    }

    h2 {
      text-align: center;
      margin-bottom: 30px;
      font-size: 2.5em;
      text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
    }

    .code-section {
      background: rgba(255,255,255,0.1);
      padding: 15px;
      margin: 15px 0;
      border-left: 4px solid #ffd700;
      border-radius: 5px;
      backdrop-filter: blur(10px);
    }

    .code-section h3 {
      margin-top: 0;
      color: #ffd700;
    }

    .code-section p {
      margin: 8px 0;
      line-height: 1.6;
    }

    code {
      background: rgba(0,0,0,0.2);
      padding: 2px 6px;
      border-radius: 3px;
      font-family: 'Courier New', monospace;
    }

    .button-group {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 10px;
      margin: 20px 0;
    }

    .btn {
      padding: 12px 20px;
      background: #ffd700;
      color: #333;
      border: none;
      border-radius: 5px;
      font-weight: bold;
      cursor: pointer;
      transition: all 0.3s ease;
      font-size: 14px;
    }

    .btn:hover {
      background: #ffed4e;
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(0,0,0,0.3);
    }

    .result-section, .output-section {
      background: rgba(0,0,0,0.2);
      padding: 15px;
      margin: 15px 0;
      border-radius: 5px;
      backdrop-filter: blur(10px);
    }

    .result-section h3, .output-section h3 {
      margin-top: 0;
      color: #ffd700;
    }

    pre {
      background: rgba(0,0,0,0.3);
      padding: 15px;
      border-radius: 5px;
      overflow-x: auto;
      color: #fff;
      font-size: 13px;
      line-height: 1.5;
      margin: 0;
    }
  `,
  jsCode: `
    const result = document.getElementById('result');
    const output = document.getElementById('output');

    const globalVar = 'I am global';

    document.getElementById('globalBtn').addEventListener('click', () => {
      result.textContent = \`const globalVar = 'I am global';\\n\\nfunction test() {\\n  console.log(globalVar); // Accessible\\n}\\n\\ntest();\\n\\n✅ Global scope\\n✅ Accessible everywhere\\n✅ Outside all functions\`;
      
      output.textContent = \`✅ Global: \${globalVar}\\n✅ Accessible in function!\`;
      console.log('Global:', globalVar);
    });

    document.getElementById('functionBtn').addEventListener('click', () => {
      function test() {
        const funcVar = 'I am in function';
        return funcVar;
      }
      
      const msg = test();
      
      result.textContent = \`function test() {\\n  const funcVar = 'I am in function';\\n  return funcVar;\\n}\\n\\nconst msg = test();\\n\\n✅ Function scope\\n✅ Only in function\\n✅ Not accessible outside\`;
      
      output.textContent = \`✅ From function: \${msg}\\n✅ Function scope works!\`;
      console.log('Function scope:', msg);
    });

    document.getElementById('blockBtn').addEventListener('click', () => {
      let blockVar;
      if (true) {
        blockVar = 'I am in block';
      }
      
      result.textContent = \`let blockVar;\\nif (true) {\\n  blockVar = 'I am in block';\\n}\\n\\n✅ Block scope\\n✅ let/const are block-scoped\\n✅ var is function-scoped\`;
      
      output.textContent = \`✅ Block var: \${blockVar}\\n✅ Block scope works!\`;
      console.log('Block scope:', blockVar);
    });

    document.getElementById('shadowBtn').addEventListener('click', () => {
      const x = 'global';
      
      function test() {
        const x = 'function';
        return x;
      }
      
      const result_val = test();
      
      result.textContent = \`const x = 'global';\\n\\nfunction test() {\\n  const x = 'function';\\n  return x;\\n}\\n\\ntest(); // 'function'\\n\\n✅ Variable shadowing\\n✅ Inner x shadows outer x\\n✅ Inner scope wins\`;
      
      output.textContent = \`✅ Global x: \${x}\\n✅ Function x: \${result_val}\\n✅ Shadowing works!\`;
      console.log('Shadowing:', x, result_val);
    });

    document.getElementById('chainBtn').addEventListener('click', () => {
      const global = 'global';
      
      function outer() {
        const outerVar = 'outer';
        
        function inner() {
          const innerVar = 'inner';
          return { global, outerVar, innerVar };
        }
        
        return inner();
      }
      
      const result_val = outer();
      
      result.textContent = \`const global = 'global';\\nfunction outer() {\\n  const outerVar = 'outer';\\n  function inner() {\\n    const innerVar = 'inner';\\n    return { global, outerVar, innerVar };\\n  }\\n  return inner();\\n}\\n\\n✅ Scope chain\\n✅ Access all outer scopes\\n✅ Nested functions\`;
      
      output.textContent = \`✅ Result: \${JSON.stringify(result_val)}\\n✅ Scope chain works!\`;
      console.log('Scope chain:', result_val);
    });

    console.log('🔒 Scope ready!');`
},

// TOPIC 11: CLOSURES
{
  topic: 'closures',
  title: '🔐 Closures',
  description: 'Inner functions that retain access to outer scope',
  tags: ['functions', 'closures', 'advanced'],
  difficulty: 'Advanced',
  htmlCode: `
    <div class="topic-container">
      <h2>🔐 Closures</h2>
      
      <div class="code-section">
        <h3>What is a Closure?</h3>
        <p>Function that remembers variables from outer scope</p>
        <p>Even after outer function returns</p>
      </div>

      <div class="button-group">
        <button id="basicBtn" class="btn">Basic Closure</button>
        <button id="counterBtn" class="btn">Counter</button>
        <button id="privateBtn" class="btn">Private Variable</button>
        <button id="factoryBtn" class="btn">Factory Function</button>
        <button id="loopBtn" class="btn">Loop Closure</button>
      </div>

      <div class="result-section">
        <h3>Code:</h3>
        <pre id="result"></pre>
      </div>

      <div class="output-section">
        <h3>Output:</h3>
        <pre id="output"></pre>
      </div>
    </div>
  `,
  cssCode: `
    .topic-container {
      max-width: 900px;
      margin: 0 auto;
      padding: 20px;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
      border-radius: 10px;
      color: #fff;
    }

    h2 {
      text-align: center;
      margin-bottom: 30px;
      font-size: 2.5em;
      text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
    }

    .code-section {
      background: rgba(255,255,255,0.1);
      padding: 15px;
      margin: 15px 0;
      border-left: 4px solid #ffd700;
      border-radius: 5px;
      backdrop-filter: blur(10px);
    }

    .code-section h3 {
      margin-top: 0;
      color: #ffd700;
    }

    .code-section p {
      margin: 8px 0;
      line-height: 1.6;
    }

    code {
      background: rgba(0,0,0,0.2);
      padding: 2px 6px;
      border-radius: 3px;
      font-family: 'Courier New', monospace;
    }

    .button-group {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 10px;
      margin: 20px 0;
    }

    .btn {
      padding: 12px 20px;
      background: #ffd700;
      color: #333;
      border: none;
      border-radius: 5px;
      font-weight: bold;
      cursor: pointer;
      transition: all 0.3s ease;
      font-size: 14px;
    }

    .btn:hover {
      background: #ffed4e;
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(0,0,0,0.3);
    }

    .result-section, .output-section {
      background: rgba(0,0,0,0.2);
      padding: 15px;
      margin: 15px 0;
      border-radius: 5px;
      backdrop-filter: blur(10px);
    }

    .result-section h3, .output-section h3 {
      margin-top: 0;
      color: #ffd700;
    }

    pre {
      background: rgba(0,0,0,0.3);
      padding: 15px;
      border-radius: 5px;
      overflow-x: auto;
      color: #fff;
      font-size: 13px;
      line-height: 1.5;
      margin: 0;
    }
  `,
  jsCode: `
    const result = document.getElementById('result');
    const output = document.getElementById('output');

    document.getElementById('basicBtn').addEventListener('click', () => {
      function outer() {
        const message = 'Hello from outer';
        
        function inner() {
          return message;
        }
        
        return inner;
      }
      
      const fn = outer();
      const msg = fn();
      
      result.textContent = \`function outer() {\\n  const message = 'Hello from outer';\\n  function inner() {\\n    return message;\\n  }\\n  return inner;\\n}\\n\\nconst fn = outer();\\nconst msg = fn();\\n\\n✅ Closure\\n✅ inner remembers message\\n✅ Even after outer returns\`;
      
      output.textContent = \`✅ Message: \${msg}\\n✅ Closure works!\`;
      console.log('Basic closure:', msg);
    });

    document.getElementById('counterBtn').addEventListener('click', () => {
      function createCounter() {
        let count = 0;
        
        return function() {
          count++;
          return count;
        };
      }
      
      const counter = createCounter();
      const c1 = counter();
      const c2 = counter();
      const c3 = counter();
      
      result.textContent = \`function createCounter() {\\n  let count = 0;\\n  return function() {\\n    count++;\\n    return count;\\n  };\\n}\\n\\nconst counter = createCounter();\\ncounter(); // 1\\ncounter(); // 2\\ncounter(); // 3\\n\\n✅ Counter closure\\n✅ Maintains state\\n✅ Private variable\`;
      
      output.textContent = \`✅ Call 1: \${c1}\\n✅ Call 2: \${c2}\\n✅ Call 3: \${c3}\\n✅ Counter works!\`;
      console.log('Counter:', c1, c2, c3);
    });

    document.getElementById('privateBtn').addEventListener('click', () => {
      function createUser(name) {
        let password = 'secret123';
        
        return {
          getName: () => name,
          checkPassword: (pwd) => pwd === password
        };
      }
      
      const user = createUser('Alice');
      const name = user.getName();
      const correct = user.checkPassword('secret123');
      
      result.textContent = \`function createUser(name) {\\n  let password = 'secret123';\\n  return {\\n    getName: () => name,\\n    checkPassword: (pwd) => pwd === password\\n  };\\n}\\n\\n✅ Private variable\\n✅ password not accessible\\n✅ Only through methods\`;
      
      output.textContent = \`✅ Name: \${name}\\n✅ Password correct: \${correct}\\n✅ Private works!\`;
      console.log('Private:', name, correct);
    });

    document.getElementById('factoryBtn').addEventListener('click', () => {
      function createMultiplier(factor) {
        return function(number) {
          return number * factor;
        };
      }
      
      const double = createMultiplier(2);
      const triple = createMultiplier(3);
      
      const d1 = double(5);
      const t1 = triple(5);
      
      result.textContent = \`function createMultiplier(factor) {\\n  return function(number) {\\n    return number * factor;\\n  };\\n}\\n\\nconst double = createMultiplier(2);\\nconst triple = createMultiplier(3);\\n\\n✅ Factory function\\n✅ Creates specialized functions\\n✅ Each has own closure\`;
      
      output.textContent = \`✅ double(5): \${d1}\\n✅ triple(5): \${t1}\\n✅ Factory works!\`;
      console.log('Factory:', d1, t1);
    });

    document.getElementById('loopBtn').addEventListener('click', () => {
      const functions = [];
      
      for (let i = 0; i < 3; i++) {
        functions.push(() => i);
      }
      
      const r1 = functions[0]();
      const r2 = functions[1]();
      const r3 = functions[2]();
      
      result.textContent = \`const functions = [];\\nfor (let i = 0; i < 3; i++) {\\n  functions.push(() => i);\\n}\\n\\nfunctions[0](); // 0\\nfunctions[1](); // 1\\nfunctions[2](); // 2\\n\\n✅ Loop closure\\n✅ Each captures own i\\n✅ let creates new scope\`;
      
      output.textContent = \`✅ Function 0: \${r1}\\n✅ Function 1: \${r2}\\n✅ Function 2: \${r3}\\n✅ Loop closure works!\`;
      console.log('Loop closure:', r1, r2, r3);
    });

    console.log('🔐 Closures ready!');`
},

// TOPIC 12: CALLBACKS
{
  topic: 'callbacks',
  title: '📞 Callbacks',
  description: 'Functions passed as arguments and called later',
  tags: ['functions', 'callbacks', 'intermediate'],
  difficulty: 'Intermediate',
  htmlCode: `
    <div class="topic-container">
      <h2>📞 Callbacks</h2>
      
      <div class="code-section">
        <h3>What is a Callback?</h3>
        <p>Function passed to another function</p>
        <p>Called at a later time</p>
      </div>

      <div class="button-group">
        <button id="basicBtn" class="btn">Basic Callback</button>
        <button id="arrayBtn" class="btn">Array Callback</button>
        <button id="asyncBtn" class="btn">Async Callback</button>
        <button id="eventBtn" class="btn">Event Callback</button>
        <button id="chainBtn" class="btn">Callback Chain</button>
      </div>

      <div class="result-section">
        <h3>Code:</h3>
        <pre id="result"></pre>
      </div>

      <div class="output-section">
        <h3>Output:</h3>
        <pre id="output"></pre>
      </div>
    </div>
  `,
  cssCode: `
    .topic-container {
      max-width: 900px;
      margin: 0 auto;
      padding: 20px;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
      border-radius: 10px;
      color: #fff;
    }

    h2 {
      text-align: center;
      margin-bottom: 30px;
      font-size: 2.5em;
      text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
    }

    .code-section {
      background: rgba(255,255,255,0.1);
      padding: 15px;
      margin: 15px 0;
      border-left: 4px solid #ffd700;
      border-radius: 5px;
      backdrop-filter: blur(10px);
    }

    .code-section h3 {
      margin-top: 0;
      color: #ffd700;
    }

    .code-section p {
      margin: 8px 0;
      line-height: 1.6;
    }

    code {
      background: rgba(0,0,0,0.2);
      padding: 2px 6px;
      border-radius: 3px;
      font-family: 'Courier New', monospace;
    }

    .button-group {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 10px;
      margin: 20px 0;
    }

    .btn {
      padding: 12px 20px;
      background: #ffd700;
      color: #333;
      border: none;
      border-radius: 5px;
      font-weight: bold;
      cursor: pointer;
      transition: all 0.3s ease;
      font-size: 14px;
    }

    .btn:hover {
      background: #ffed4e;
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(0,0,0,0.3);
    }

    .result-section, .output-section {
      background: rgba(0,0,0,0.2);
      padding: 15px;
      margin: 15px 0;
      border-radius: 5px;
      backdrop-filter: blur(10px);
    }

    .result-section h3, .output-section h3 {
      margin-top: 0;
      color: #ffd700;
    }

    pre {
      background: rgba(0,0,0,0.3);
      padding: 15px;
      border-radius: 5px;
      overflow-x: auto;
      color: #fff;
      font-size: 13px;
      line-height: 1.5;
      margin: 0;
    }
  `,
  jsCode: `
    const result = document.getElementById('result');
    const output = document.getElementById('output');

    document.getElementById('basicBtn').addEventListener('click', () => {
      function greet(callback) {
        const message = 'Hello!';
        callback(message);
      }
      
      greet((msg) => {
        result.textContent = \`function greet(callback) {\\n  const message = 'Hello!';\\n  callback(message);\\n}\\n\\ngreet((msg) => {\\n  console.log(msg);\\n});\\n\\n✅ Callback function\\n✅ Passed as argument\\n✅ Called inside\`;
        
        output.textContent = \`✅ Message: \${msg}\\n✅ Callback works!\`;
        console.log('Basic callback:', msg);
      });
    });

    document.getElementById('arrayBtn').addEventListener('click', () => {
      const numbers = [1, 2, 3, 4, 5];
      const doubled = numbers.map((n) => n * 2);
      
      result.textContent = \`const numbers = [1, 2, 3, 4, 5];\\nconst doubled = numbers.map((n) => n * 2);\\n\\nResult: [\${doubled}]\\n\\n✅ Array callback\\n✅ map() uses callback\\n✅ Called for each element\`;
      
      output.textContent = \`✅ Doubled: [\${doubled}]\\n✅ Array callback works!\`;
      console.log('Array callback:', doubled);
    });

    document.getElementById('asyncBtn').addEventListener('click', () => {
      function fetchData(callback) {
        setTimeout(() => {
          callback('Data loaded!');
        }, 500);
      }
      
      fetchData((data) => {
        result.textContent = \`function fetchData(callback) {\\n  setTimeout(() => {\\n    callback('Data loaded!');\\n  }, 500);\\n}\\n\\nfetchData((data) => {\\n  console.log(data);\\n});\\n\\n✅ Async callback\\n✅ Called after delay\\n✅ Simulates async\`;
        
        output.textContent = \`✅ Data: \${data}\\n✅ Async callback works!\`;
        console.log('Async callback:', data);
      });
    });

    document.getElementById('eventBtn').addEventListener('click', () => {
      result.textContent = \`button.addEventListener('click', (event) => {\\n  console.log('Clicked!');\\n});\\n\\n✅ Event callback\\n✅ Called on event\\n✅ Receives event object\`;
      
      output.textContent = \`✅ Event callback\\n✅ Called on interaction\\n✅ Common pattern!\`;
      console.log('Event callback: addEventListener');
    });

    document.getElementById('chainBtn').addEventListener('click', () => {
      function step1(callback) {
        callback('Step 1 done');
      }
      
      function step2(callback) {
        callback('Step 2 done');
      }
      
      step1((msg1) => {
        result.textContent = \`step1((msg1) => {\\n  step2((msg2) => {\\n    console.log(msg1, msg2);\\n  });\\n});\\n\\n✅ Callback chain\\n✅ Nested callbacks\\n✅ Sequential execution\`;
        
        step2((msg2) => {
          output.textContent = \`✅ \${msg1}\\n✅ \${msg2}\\n✅ Callback chain works!\`;
          console.log('Callback chain:', msg1, msg2);
        });
      });
    });

    console.log('📞 Callbacks ready!');`
},


// ============================================
// BATCH 5: HIGHER-ORDER FUNCTIONS, IIFE, HOISTING
// ============================================

// TOPIC 13: HIGHER-ORDER FUNCTIONS
{
  topic: 'higher-order-functions',
  title: '🎯 Higher-Order Functions',
  description: 'Functions that accept or return other functions',
  tags: ['functions', 'higher-order', 'advanced'],
  difficulty: 'Advanced',
  htmlCode: `
    <div class="topic-container">
      <h2>🎯 Higher-Order Functions</h2>
      
      <div class="code-section">
        <h3>What is a Higher-Order Function?</h3>
        <p>Function that takes function as argument</p>
        <p>Or returns a function</p>
      </div>

      <div class="button-group">
        <button id="acceptBtn" class="btn">Accept Function</button>
        <button id="returnBtn" class="btn">Return Function</button>
        <button id="filterBtn" class="btn">Filter HOF</button>
        <button id="mapBtn" class="btn">Map HOF</button>
        <button id="composeBtn" class="btn">Compose</button>
      </div>

      <div class="result-section">
        <h3>Code:</h3>
        <pre id="result"></pre>
      </div>

      <div class="output-section">
        <h3>Output:</h3>
        <pre id="output"></pre>
      </div>
    </div>
  `,
  cssCode: `
    .topic-container {
      max-width: 900px;
      margin: 0 auto;
      padding: 20px;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
      border-radius: 10px;
      color: #fff;
    }

    h2 {
      text-align: center;
      margin-bottom: 30px;
      font-size: 2.5em;
      text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
    }

    .code-section {
      background: rgba(255,255,255,0.1);
      padding: 15px;
      margin: 15px 0;
      border-left: 4px solid #ffd700;
      border-radius: 5px;
      backdrop-filter: blur(10px);
    }

    .code-section h3 {
      margin-top: 0;
      color: #ffd700;
    }

    .code-section p {
      margin: 8px 0;
      line-height: 1.6;
    }

    code {
      background: rgba(0,0,0,0.2);
      padding: 2px 6px;
      border-radius: 3px;
      font-family: 'Courier New', monospace;
    }

    .button-group {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 10px;
      margin: 20px 0;
    }

    .btn {
      padding: 12px 20px;
      background: #ffd700;
      color: #333;
      border: none;
      border-radius: 5px;
      font-weight: bold;
      cursor: pointer;
      transition: all 0.3s ease;
      font-size: 14px;
    }

    .btn:hover {
      background: #ffed4e;
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(0,0,0,0.3);
    }

    .result-section, .output-section {
      background: rgba(0,0,0,0.2);
      padding: 15px;
      margin: 15px 0;
      border-radius: 5px;
      backdrop-filter: blur(10px);
    }

    .result-section h3, .output-section h3 {
      margin-top: 0;
      color: #ffd700;
    }

    pre {
      background: rgba(0,0,0,0.3);
      padding: 15px;
      border-radius: 5px;
      overflow-x: auto;
      color: #fff;
      font-size: 13px;
      line-height: 1.5;
      margin: 0;
    }
  `,
  jsCode: `
    const result = document.getElementById('result');
    const output = document.getElementById('output');

    document.getElementById('acceptBtn').addEventListener('click', () => {
      function execute(fn) {
        return fn();
      }
      
      const msg = execute(() => 'Hello from HOF');
      
      result.textContent = \`function execute(fn) {\\n  return fn();\\n}\\n\\nexecute(() => 'Hello from HOF');\\n\\n✅ Higher-order function\\n✅ Accepts function\\n✅ Calls it\`;
      
      output.textContent = \`✅ Result: \${msg}\\n✅ HOF works!\`;
      console.log('Accept function:', msg);
    });

    document.getElementById('returnBtn').addEventListener('click', () => {
      function createGreeter(greeting) {
        return function(name) {
          return \`\${greeting}, \${name}!\`;
        };
      }
      
      const greetHello = createGreeter('Hello');
      const msg = greetHello('Alice');
      
      result.textContent = \`function createGreeter(greeting) {\\n  return function(name) {\\n    return \\\`\${greeting}, \${name}!\\\`;\\n  };\\n}\\n\\nconst greetHello = createGreeter('Hello');\\ngreetHello('Alice');\\n\\n✅ Returns function\\n✅ Closure pattern\\n✅ Customizable\`;
      
      output.textContent = \`✅ Result: \${msg}\\n✅ HOF returns function!\`;
      console.log('Return function:', msg);
    });

    document.getElementById('filterBtn').addEventListener('click', () => {
      function filterArray(arr, predicate) {
        return arr.filter(predicate);
      }
      
      const numbers = [1, 2, 3, 4, 5, 6];
      const evens = filterArray(numbers, (n) => n % 2 === 0);
      
      result.textContent = \`function filterArray(arr, predicate) {\\n  return arr.filter(predicate);\\n}\\n\\nconst evens = filterArray([1,2,3,4,5,6], (n) => n % 2 === 0);\\n\\n✅ HOF with filter\\n✅ Accepts predicate\\n✅ Flexible filtering\`;
      
      output.textContent = \`✅ Evens: [\${evens}]\\n✅ Filter HOF works!\`;
      console.log('Filter HOF:', evens);
    });

    document.getElementById('mapBtn').addEventListener('click', () => {
      function mapArray(arr, transform) {
        return arr.map(transform);
      }
      
      const numbers = [1, 2, 3, 4, 5];
      const squared = mapArray(numbers, (n) => n * n);
      
      result.textContent = \`function mapArray(arr, transform) {\\n  return arr.map(transform);\\n}\\n\\nconst squared = mapArray([1,2,3,4,5], (n) => n * n);\\n\\n✅ HOF with map\\n✅ Accepts transform\\n✅ Flexible transformation\`;
      
      output.textContent = \`✅ Squared: [\${squared}]\\n✅ Map HOF works!\`;
      console.log('Map HOF:', squared);
    });

    document.getElementById('composeBtn').addEventListener('click', () => {
      function compose(f, g) {
        return function(x) {
          return f(g(x));
        };
      }
      
      const add5 = (x) => x + 5;
      const multiply2 = (x) => x * 2;
      const addThenMultiply = compose(multiply2, add5);
      
      const result_val = addThenMultiply(3);
      
      result.textContent = \`function compose(f, g) {\\n  return function(x) {\\n    return f(g(x));\\n  };\\n}\\n\\nconst addThenMultiply = compose(multiply2, add5);\\naddThenMultiply(3); // (3+5)*2 = 16\\n\\n✅ Function composition\\n✅ Combine functions\\n✅ Powerful pattern\`;
      
      output.textContent = \`✅ Result: \${result_val}\\n✅ (3 + 5) * 2 = \${result_val}\\n✅ Compose works!\`;
      console.log('Compose:', result_val);
    });

    console.log('🎯 Higher-Order Functions ready!');`
},

// TOPIC 14: IIFE
{
  topic: 'iife',
  title: '⚡ IIFE',
  description: 'Immediately Invoked Function Expressions',
  tags: ['functions', 'iife', 'intermediate'],
  difficulty: 'Intermediate',
  htmlCode: `
    <div class="topic-container">
      <h2>⚡ IIFE (Immediately Invoked Function Expression)</h2>
      
      <div class="code-section">
        <h3>What is IIFE?</h3>
        <p>Function that runs immediately when defined</p>
        <p>Creates own scope</p>
      </div>

      <div class="button-group">
        <button id="basicBtn" class="btn">Basic IIFE</button>
        <button id="paramBtn" class="btn">With Parameters</button>
        <button id="arrowBtn" class="btn">Arrow IIFE</button>
        <button id="scopeBtn" class="btn">Scope Isolation</button>
        <button id="moduleBtn" class="btn">Module Pattern</button>
      </div>

      <div class="result-section">
        <h3>Code:</h3>
        <pre id="result"></pre>
      </div>

      <div class="output-section">
        <h3>Output:</h3>
        <pre id="output"></pre>
      </div>
    </div>
  `,
  cssCode: `
    .topic-container {
      max-width: 900px;
      margin: 0 auto;
      padding: 20px;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%);
      border-radius: 10px;
      color: #fff;
    }

    h2 {
      text-align: center;
      margin-bottom: 30px;
      font-size: 2.5em;
      text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
    }

    .code-section {
      background: rgba(255,255,255,0.1);
      padding: 15px;
      margin: 15px 0;
      border-left: 4px solid #ffd700;
      border-radius: 5px;
      backdrop-filter: blur(10px);
    }

    .code-section h3 {
      margin-top: 0;
      color: #ffd700;
    }

    .code-section p {
      margin: 8px 0;
      line-height: 1.6;
    }

    code {
      background: rgba(0,0,0,0.2);
      padding: 2px 6px;
      border-radius: 3px;
      font-family: 'Courier New', monospace;
    }

    .button-group {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 10px;
      margin: 20px 0;
    }

    .btn {
      padding: 12px 20px;
      background: #ffd700;
      color: #333;
      border: none;
      border-radius: 5px;
      font-weight: bold;
      cursor: pointer;
      transition: all 0.3s ease;
      font-size: 14px;
    }

    .btn:hover {
      background: #ffed4e;
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(0,0,0,0.3);
    }

    .result-section, .output-section {
      background: rgba(0,0,0,0.2);
      padding: 15px;
      margin: 15px 0;
      border-radius: 5px;
      backdrop-filter: blur(10px);
    }

    .result-section h3, .output-section h3 {
      margin-top: 0;
      color: #ffd700;
    }

    pre {
      background: rgba(0,0,0,0.3);
      padding: 15px;
      border-radius: 5px;
      overflow-x: auto;
      color: #fff;
      font-size: 13px;
      line-height: 1.5;
      margin: 0;
    }
  `,
  jsCode: `
    const result = document.getElementById('result');
    const output = document.getElementById('output');

    document.getElementById('basicBtn').addEventListener('click', () => {
      result.textContent = \`(function() {\\n  console.log('IIFE runs immediately!');\\n})();\\n\\n✅ IIFE\\n✅ Runs right away\\n✅ No need to call\`;
      
      output.textContent = \`✅ IIFE executed!\\n✅ Immediately invoked!\`;
      console.log('Basic IIFE: runs immediately');
    });

    document.getElementById('paramBtn').addEventListener('click', () => {
      const msg = (function(name) {
        return \`Hello, \${name}!\`;
      })('Alice');
      
      result.textContent = \`(function(name) {\\n  return \\\`Hello, \${name}!\\\`;\\n})('Alice');\\n\\n✅ IIFE with parameters\\n✅ Pass arguments\\n✅ Returns value\`;
      
      output.textContent = \`✅ Result: \${msg}\\n✅ IIFE with params works!\`;
      console.log('IIFE with params:', msg);
    });

    document.getElementById('arrowBtn').addEventListener('click', () => {
      const msg = (() => 'Arrow IIFE')();
      
      result.textContent = \`(() => 'Arrow IIFE')();\\n\\n✅ Arrow function IIFE\\n✅ Shorter syntax\\n✅ Same behavior\`;
      
      output.textContent = \`✅ Result: \${msg}\\n✅ Arrow IIFE works!\`;
      console.log('Arrow IIFE:', msg);
    });

    document.getElementById('scopeBtn').addEventListener('click', () => {
      (function() {
        const privateVar = 'I am private';
        result.textContent = \`(function() {\\n  const privateVar = 'I am private';\\n  console.log(privateVar);\\n})();\\n\\n✅ Scope isolation\\n✅ privateVar not global\\n✅ Avoid pollution\`;
        
        output.textContent = \`✅ Private: \${privateVar}\\n✅ Scope isolated!\`;
        console.log('Scope isolation:', privateVar);
      })();
    });

    document.getElementById('moduleBtn').addEventListener('click', () => {
      const calculator = (function() {
        let result_val = 0;
        
        return {
          add: (n) => { result_val += n; return result_val; },
          subtract: (n) => { result_val -= n; return result_val; },
          getResult: () => result_val
        };
      })();
      
      const r1 = calculator.add(5);
      const r2 = calculator.subtract(2);
      
      result.textContent = \`const calculator = (function() {\\n  let result = 0;\\n  return {\\n    add: (n) => { result += n; return result; },\\n    subtract: (n) => { result -= n; return result; }\\n  };\\n})();\\n\\n✅ Module pattern\\n✅ Private state\\n✅ Public methods\`;
      
      output.textContent = \`✅ Add 5: \${r1}\\n✅ Subtract 2: \${r2}\\n✅ Module pattern works!\`;
      console.log('Module pattern:', r1, r2);
    });

    console.log('⚡ IIFE ready!');`
},

// TOPIC 15: HOISTING
{
  topic: 'hoisting',
  title: '⬆️ Hoisting',
  description: 'Function and var declarations lifted to scope top',
  tags: ['functions', 'hoisting', 'intermediate'],
  difficulty: 'Intermediate',
  htmlCode: `
    <div class="topic-container">
      <h2>⬆️ Hoisting</h2>
      
      <div class="code-section">
        <h3>What is Hoisting?</h3>
        <p>Declarations moved to top of scope</p>
        <p>Functions fully hoisted, vars partially</p>
      </div>

      <div class="button-group">
        <button id="funcBtn" class="btn">Function Hoisting</button>
        <button id="varBtn" class="btn">Var Hoisting</button>
        <button id="letBtn" class="btn">Let/Const</button>
        <button id="tdz" class="btn">Temporal Dead Zone</button>
        <button id="orderBtn" class="btn">Hoisting Order</button>
      </div>

      <div class="result-section">
        <h3>Code:</h3>
        <pre id="result"></pre>
      </div>

      <div class="output-section">
        <h3>Output:</h3>
        <pre id="output"></pre>
      </div>
    </div>
  `,
  cssCode: `
    .topic-container {
      max-width: 900px;
      margin: 0 auto;
      padding: 20px;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      border-radius: 10px;
      color: #fff;
    }

    h2 {
      text-align: center;
      margin-bottom: 30px;
      font-size: 2.5em;
      text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
    }

    .code-section {
      background: rgba(255,255,255,0.1);
      padding: 15px;
      margin: 15px 0;
      border-left: 4px solid #ffd700;
      border-radius: 5px;
      backdrop-filter: blur(10px);
    }

    .code-section h3 {
      margin-top: 0;
      color: #ffd700;
    }

    .code-section p {
      margin: 8px 0;
      line-height: 1.6;
    }

    code {
      background: rgba(0,0,0,0.2);
      padding: 2px 6px;
      border-radius: 3px;
      font-family: 'Courier New', monospace;
    }

    .button-group {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 10px;
      margin: 20px 0;
    }

    .btn {
      padding: 12px 20px;
      background: #ffd700;
      color: #333;
      border: none;
      border-radius: 5px;
      font-weight: bold;
      cursor: pointer;
      transition: all 0.3s ease;
      font-size: 14px;
    }

    .btn:hover {
      background: #ffed4e;
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(0,0,0,0.3);
    }

    .result-section, .output-section {
      background: rgba(0,0,0,0.2);
      padding: 15px;
      margin: 15px 0;
      border-radius: 5px;
      backdrop-filter: blur(10px);
    }

    .result-section h3, .output-section h3 {
      margin-top: 0;
      color: #ffd700;
    }

    pre {
      background: rgba(0,0,0,0.3);
      padding: 15px;
      border-radius: 5px;
      overflow-x: auto;
      color: #fff;
      font-size: 13px;
      line-height: 1.5;
      margin: 0;
    }
  `,
  jsCode: `
    const result = document.getElementById('result');
    const output = document.getElementById('output');

    document.getElementById('funcBtn').addEventListener('click', () => {
      result.textContent = \`// Called BEFORE declaration\\ngreet();\\n\\nfunction greet() {\\n  return 'Hello!';\\n}\\n\\n✅ Function hoisting\\n✅ Function moved to top\\n✅ Can call before declare\`;
      
      output.textContent = \`✅ Function hoisting works!\\n✅ Called before declaration!\`;
      console.log('Function hoisting: works');
    });

    document.getElementById('varBtn').addEventListener('click', () => {
      result.textContent = \`console.log(x); // undefined\\nvar x = 5;\\nconsole.log(x); // 5\\n\\n✅ Var hoisting\\n✅ Declaration moved up\\n✅ Initialized as undefined\`;
      
      output.textContent = \`✅ Var hoisting works!\\n✅ Initialized as undefined!\`;
      console.log('Var hoisting: initialized as undefined');
    });

    document.getElementById('letBtn').addEventListener('click', () => {
      result.textContent = \`// console.log(x); // ReferenceError\\nlet x = 5;\\nconsole.log(x); // 5\\n\\n✅ Let/const hoisting\\n✅ Not initialized\\n✅ Temporal Dead Zone\`;
      
      output.textContent = \`✅ Let/const hoisting works!\\n✅ Not initialized!\`;
      console.log('Let/const hoisting: not initialized');
    });

    document.getElementById('tdz').addEventListener('click', () => {
      result.textContent = \`// Temporal Dead Zone\\n// console.log(x); // ReferenceError\\nlet x = 5;\\nconsole.log(x); // 5\\n\\n✅ TDZ (Temporal Dead Zone)\\n✅ Between declaration and init\\n✅ Cannot access\`;
      
      output.textContent = \`✅ TDZ prevents errors!\\n✅ Safer than var!\`;
      console.log('TDZ: prevents access before init');
    });

    document.getElementById('orderBtn').addEventListener('click', () => {
      result.textContent = \`// Hoisting order:\\n// 1. Function declarations\\n// 2. Variable declarations\\n// 3. Code execution\\n\\nfunction test() { }\\nvar x = 5;\\ntest();\\n\\n✅ Functions first\\n✅ Variables second\\n✅ Code executes\`;
      
      output.textContent = \`✅ Hoisting order understood!\\n✅ Functions > Variables > Code!\`;
      console.log('Hoisting order: functions, variables, code');
    });

    console.log('⬆️ Hoisting ready!');`
},


// ============================================
// BATCH 6: STRING METHODS AND DOM SELECTION
// ============================================

// TOPIC 16: STRING ACCESS
{
  topic: 'string-access',
  title: '🔤 String Access',
  description: 'Read characters by index using [] or charAt()',
  tags: ['strings', 'access', 'beginner'],
  difficulty: 'Beginner',
  htmlCode: `
    <div class="topic-container">
      <h2>🔤 String Access</h2>
      
      <div class="code-section">
        <h3>Access String Characters:</h3>
        <p>✅ Bracket notation: <code>str[0]</code></p>
        <p>✅ charAt method: <code>str.charAt(0)</code></p>
      </div>

      <div class="button-group">
        <button id="bracketBtn" class="btn">Bracket Notation</button>
        <button id="charAtBtn" class="btn">charAt()</button>
        <button id="firstBtn" class="btn">First Character</button>
        <button id="lastBtn" class="btn">Last Character</button>
        <button id="loopBtn" class="btn">Loop Through</button>
      </div>

      <div class="result-section">
        <h3>Code:</h3>
        <pre id="result"></pre>
      </div>

      <div class="output-section">
        <h3>Output:</h3>
        <pre id="output"></pre>
      </div>
    </div>
  `,
  cssCode: `
    .topic-container {
      max-width: 900px;
      margin: 0 auto;
      padding: 20px;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);
      border-radius: 10px;
      color: #fff;
    }

    h2 {
      text-align: center;
      margin-bottom: 30px;
      font-size: 2.5em;
      text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
    }

    .code-section {
      background: rgba(255,255,255,0.1);
      padding: 15px;
      margin: 15px 0;
      border-left: 4px solid #ffd700;
      border-radius: 5px;
      backdrop-filter: blur(10px);
    }

    .code-section h3 {
      margin-top: 0;
      color: #ffd700;
    }

    .code-section p {
      margin: 8px 0;
      line-height: 1.6;
    }

    code {
      background: rgba(0,0,0,0.2);
      padding: 2px 6px;
      border-radius: 3px;
      font-family: 'Courier New', monospace;
    }

    .button-group {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 10px;
      margin: 20px 0;
    }

    .btn {
      padding: 12px 20px;
      background: #ffd700;
      color: #333;
      border: none;
      border-radius: 5px;
      font-weight: bold;
      cursor: pointer;
      transition: all 0.3s ease;
      font-size: 14px;
    }

    .btn:hover {
      background: #ffed4e;
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(0,0,0,0.3);
    }

    .result-section, .output-section {
      background: rgba(0,0,0,0.2);
      padding: 15px;
      margin: 15px 0;
      border-radius: 5px;
      backdrop-filter: blur(10px);
    }

    .result-section h3, .output-section h3 {
      margin-top: 0;
      color: #ffd700;
    }

    pre {
      background: rgba(0,0,0,0.3);
      padding: 15px;
      border-radius: 5px;
      overflow-x: auto;
      color: #fff;
      font-size: 13px;
      line-height: 1.5;
      margin: 0;
    }
  `,
  jsCode: `
    const result = document.getElementById('result');
    const output = document.getElementById('output');

    const str = 'JavaScript';

    document.getElementById('bracketBtn').addEventListener('click', () => {
      const char = str[0];
      
      result.textContent = \`const str = 'JavaScript';\\nconst char = str[0];\\n\\nResult: '\${char}'\\n\\n✅ Bracket notation\\n✅ Zero-based index\\n✅ Returns character\`;
      
      output.textContent = \`✅ Character: '\${char}'\\n✅ Index 0: '\${str[0]}'\\n✅ Index 4: '\${str[4]}'\`;
      console.log('Bracket notation:', char);
    });

    document.getElementById('charAtBtn').addEventListener('click', () => {
      const char = str.charAt(0);
      
      result.textContent = \`const str = 'JavaScript';\\nconst char = str.charAt(0);\\n\\nResult: '\${char}'\\n\\n✅ charAt() method\\n✅ Returns character\\n✅ Same as bracket\`;
      
      output.textContent = \`✅ charAt(0): '\${char}'\\n✅ charAt(4): '\${str.charAt(4)}'\\n✅ charAt(10): '\${str.charAt(10)}'\`;
      console.log('charAt:', char);
    });

    document.getElementById('firstBtn').addEventListener('click', () => {
      const first = str[0];
      
      result.textContent = \`const str = 'JavaScript';\\nconst first = str[0];\\n\\nResult: '\${first}'\\n\\n✅ First character\\n✅ Index 0\\n✅ Always first\`;
      
      output.textContent = \`✅ First: '\${first}'\\n✅ String: '\${str}'\`;
      console.log('First character:', first);
    });

    document.getElementById('lastBtn').addEventListener('click', () => {
      const last = str[str.length - 1];
      
      result.textContent = \`const str = 'JavaScript';\\nconst last = str[str.length - 1];\\n\\nResult: '\${last}'\\n\\n✅ Last character\\n✅ Use length - 1\\n✅ Dynamic index\`;
      
      output.textContent = \`✅ Last: '\${last}'\\n✅ Length: \${str.length}\\n✅ Index: \${str.length - 1}\`;
      console.log('Last character:', last);
    });

    document.getElementById('loopBtn').addEventListener('click', () => {
      let chars = '';
      for (let i = 0; i < str.length; i++) {
        chars += str[i] + ' ';
      }
      
      result.textContent = \`const str = 'JavaScript';\\nfor (let i = 0; i < str.length; i++) {\\n  console.log(str[i]);\\n}\\n\\n✅ Loop through string\\n✅ Access each character\\n✅ Use index\`;
      
      output.textContent = \`✅ Characters: \${chars}\\n✅ Looped through all!\`;
      console.log('Loop through:', chars);
    });

    console.log('🔤 String Access ready!');`
},

// TOPIC 17: QUERYSELECTOR
{
  topic: 'querySelector',
  title: '🎯 querySelector',
  description: 'Select first matching element with CSS selector',
  tags: ['dom', 'selection', 'beginner'],
  difficulty: 'Beginner',
  htmlCode: `
    <div class="topic-container">
      <h2>🎯 querySelector()</h2>
      
      <div class="code-section">
        <h3>Select Elements with CSS Selectors:</h3>
        <p><code>document.querySelector('selector')</code></p>
        <p>Returns first match or null</p>
      </div>

      <div id="demo1" class="demo-box">Demo Element</div>
      <div class="demo-box">Another Element</div>

      <div class="button-group">
        <button id="idBtn" class="btn">By ID</button>
        <button id="classBtn" class="btn">By Class</button>
        <button id="tagBtn" class="btn">By Tag</button>
        <button id="complexBtn" class="btn">Complex Selector</button>
        <button id="changeBtn" class="btn">Change Content</button>
      </div>

      <div class="result-section">
        <h3>Code:</h3>
        <pre id="result"></pre>
      </div>

      <div class="output-section">
        <h3>Output:</h3>
        <pre id="output"></pre>
      </div>
    </div>
  `,
  cssCode: `
    .topic-container {
      max-width: 900px;
      margin: 0 auto;
      padding: 20px;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      border-radius: 10px;
      color: #fff;
    }

    h2 {
      text-align: center;
      margin-bottom: 30px;
      font-size: 2.5em;
      text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
    }

    .demo-box {
      background: rgba(255,255,255,0.2);
      padding: 15px;
      margin: 10px 0;
      border-radius: 5px;
      border: 2px solid #ffd700;
    }

    .code-section {
      background: rgba(255,255,255,0.1);
      padding: 15px;
      margin: 15px 0;
      border-left: 4px solid #ffd700;
      border-radius: 5px;
      backdrop-filter: blur(10px);
    }

    .code-section h3 {
      margin-top: 0;
      color: #ffd700;
    }

    .code-section p {
      margin: 8px 0;
      line-height: 1.6;
    }

    code {
      background: rgba(0,0,0,0.2);
      padding: 2px 6px;
      border-radius: 3px;
      font-family: 'Courier New', monospace;
    }

    .button-group {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 10px;
      margin: 20px 0;
    }

    .btn {
      padding: 12px 20px;
      background: #ffd700;
      color: #333;
      border: none;
      border-radius: 5px;
      font-weight: bold;
      cursor: pointer;
      transition: all 0.3s ease;
      font-size: 14px;
    }

    .btn:hover {
      background: #ffed4e;
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(0,0,0,0.3);
    }

    .result-section, .output-section {
      background: rgba(0,0,0,0.2);
      padding: 15px;
      margin: 15px 0;
      border-radius: 5px;
      backdrop-filter: blur(10px);
    }

    .result-section h3, .output-section h3 {
      margin-top: 0;
      color: #ffd700;
    }

    pre {
      background: rgba(0,0,0,0.3);
      padding: 15px;
      border-radius: 5px;
      overflow-x: auto;
      color: #fff;
      font-size: 13px;
      line-height: 1.5;
      margin: 0;
    }
  `,
  jsCode: `
    const result = document.getElementById('result');
    const output = document.getElementById('output');

    document.getElementById('idBtn').addEventListener('click', () => {
      const elem = document.querySelector('#demo1');
      
      result.textContent = \`const elem = document.querySelector('#demo1');\\n\\n✅ Select by ID\\n✅ Use # prefix\\n✅ Returns element\`;
      
      output.textContent = \`✅ Element found: \${elem ? 'Yes' : 'No'}\\n✅ Content: \${elem.textContent}\\n✅ querySelector works!\`;
      console.log('By ID:', elem);
    });

    document.getElementById('classBtn').addEventListener('click', () => {
      const elem = document.querySelector('.demo-box');
      
      result.textContent = \`const elem = document.querySelector('.demo-box');\\n\\n✅ Select by class\\n✅ Use . prefix\\n✅ Returns first match\`;
      
      output.textContent = \`✅ Element found: \${elem ? 'Yes' : 'No'}\\n✅ Content: \${elem.textContent}\\n✅ First match only!\`;
      console.log('By class:', elem);
    });

    document.getElementById('tagBtn').addEventListener('click', () => {
      const elem = document.querySelector('div');
      
      result.textContent = \`const elem = document.querySelector('div');\\n\\n✅ Select by tag\\n✅ No prefix needed\\n✅ Returns first div\`;
      
      output.textContent = \`✅ Element found: \${elem ? 'Yes' : 'No'}\\n✅ Tag: \${elem.tagName}\\n✅ Tag selector works!\`;
      console.log('By tag:', elem);
    });

    document.getElementById('complexBtn').addEventListener('click', () => {
      const elem = document.querySelector('div.demo-box');
      
      result.textContent = \`const elem = document.querySelector('div.demo-box');\\n\\n✅ Complex selector\\n✅ Combine tag and class\\n✅ More specific\`;
      
      output.textContent = \`✅ Element found: \${elem ? 'Yes' : 'No'}\\n✅ Matches: div.demo-box\\n✅ Complex selector works!\`;
      console.log('Complex selector:', elem);
    });

    document.getElementById('changeBtn').addEventListener('click', () => {
      const elem = document.querySelector('#demo1');
      elem.textContent = '✅ Changed by querySelector!';
      
      result.textContent = \`const elem = document.querySelector('#demo1');\\nelem.textContent = '✅ Changed!';\\n\\n✅ Select and modify\\n✅ Change content\\n✅ Update DOM\`;
      
      output.textContent = \`✅ Content changed!\\n✅ New text: \${elem.textContent}\`;
      console.log('Changed:', elem);
    });

    console.log('🎯 querySelector ready!');`
},

// TOPIC 18: QUERYSELECTORALL
{
  topic: 'querySelectorAll',
  title: '🎯 querySelectorAll',
  description: 'Select all matching elements as a NodeList',
  tags: ['dom', 'selection', 'beginner'],
  difficulty: 'Beginner',
  htmlCode: `
    <div class="topic-container">
      <h2>🎯 querySelectorAll()</h2>
      
      <div class="code-section">
        <h3>Select Multiple Elements:</h3>
        <p><code>document.querySelectorAll('selector')</code></p>
        <p>Returns NodeList of all matches</p>
      </div>

      <div class="item">Item 1</div>
      <div class="item">Item 2</div>
      <div class="item">Item 3</div>

      <div class="button-group">
        <button id="selectBtn" class="btn">Select All</button>
        <button id="countBtn" class="btn">Count Elements</button>
        <button id="loopBtn" class="btn">Loop Through</button>
        <button id="forEachBtn" class="btn">forEach</button>
        <button id="changeBtn" class="btn">Change All</button>
      </div>

      <div class="result-section">
        <h3>Code:</h3>
        <pre id="result"></pre>
      </div>

      <div class="output-section">
        <h3>Output:</h3>
        <pre id="output"></pre>
      </div>
    </div>
  `,
  cssCode: `
    .topic-container {
      max-width: 900px;
      margin: 0 auto;
      padding: 20px;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
      border-radius: 10px;
      color: #fff;
    }

    h2 {
      text-align: center;
      margin-bottom: 30px;
      font-size: 2.5em;
      text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
    }

    .item {
      background: rgba(255,255,255,0.2);
      padding: 10px;
      margin: 8px 0;
      border-radius: 5px;
      border-left: 4px solid #ffd700;
    }

    .code-section {
      background: rgba(255,255,255,0.1);
      padding: 15px;
      margin: 15px 0;
      border-left: 4px solid #ffd700;
      border-radius: 5px;
      backdrop-filter: blur(10px);
    }

    .code-section h3 {
      margin-top: 0;
      color: #ffd700;
    }

    .code-section p {
      margin: 8px 0;
      line-height: 1.6;
    }

    code {
      background: rgba(0,0,0,0.2);
      padding: 2px 6px;
      border-radius: 3px;
      font-family: 'Courier New', monospace;
    }

    .button-group {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 10px;
      margin: 20px 0;
    }

    .btn {
      padding: 12px 20px;
      background: #ffd700;
      color: #333;
      border: none;
      border-radius: 5px;
      font-weight: bold;
      cursor: pointer;
      transition: all 0.3s ease;
      font-size: 14px;
    }

    .btn:hover {
      background: #ffed4e;
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(0,0,0,0.3);
    }

    .result-section, .output-section {
      background: rgba(0,0,0,0.2);
      padding: 15px;
      margin: 15px 0;
      border-radius: 5px;
      backdrop-filter: blur(10px);
    }

    .result-section h3, .output-section h3 {
      margin-top: 0;
      color: #ffd700;
    }

    pre {
      background: rgba(0,0,0,0.3);
      padding: 15px;
      border-radius: 5px;
      overflow-x: auto;
      color: #fff;
      font-size: 13px;
      line-height: 1.5;
      margin: 0;
    }
  `,
  jsCode: `
    const result = document.getElementById('result');
    const output = document.getElementById('output');

    document.getElementById('selectBtn').addEventListener('click', () => {
      const items = document.querySelectorAll('.item');
      
      result.textContent = \`const items = document.querySelectorAll('.item');\\n\\n✅ Select all matches\\n✅ Returns NodeList\\n✅ All elements\`;
      
      output.textContent = \`✅ Found: \${items.length} elements\\n✅ Type: NodeList\\n✅ querySelectorAll works!\`;
      console.log('Select all:', items);
    });

    document.getElementById('countBtn').addEventListener('click', () => {
      const items = document.querySelectorAll('.item');
      
      result.textContent = \`const items = document.querySelectorAll('.item');\\nconst count = items.length;\\n\\nResult: \${items.length}\\n\\n✅ Count elements\\n✅ Use .length\\n✅ Get total\`;
      
      output.textContent = \`✅ Total items: \${items.length}\\n✅ Length property works!\`;
      console.log('Count:', items.length);
    });

    document.getElementById('loopBtn').addEventListener('click', () => {
      const items = document.querySelectorAll('.item');
      let output_text = '✅ Items:\\n';
      
      for (let i = 0; i < items.length; i++) {
        output_text += \`  \${i}: \${items[i].textContent}\\n\`;
      }
      
      result.textContent = \`const items = document.querySelectorAll('.item');\\nfor (let i = 0; i < items.length; i++) {\\n  console.log(items[i]);\\n}\\n\\n✅ Loop through\\n✅ Access by index\\n✅ Traditional loop\`;
      
      output.textContent = output_text;
      console.log('Loop through:', items);
    });

    document.getElementById('forEachBtn').addEventListener('click', () => {
      const items = document.querySelectorAll('.item');
      let output_text = '✅ forEach:\\n';
      
      items.forEach((item, index) => {
        output_text += \`  \${index}: \${item.textContent}\\n\`;
      });
      
      result.textContent = \`const items = document.querySelectorAll('.item');\\nitems.forEach((item, index) => {\\n  console.log(item);\\n});\\n\\n✅ forEach method\\n✅ Modern approach\\n✅ Cleaner syntax\`;
      
      output.textContent = output_text;
      console.log('forEach:', items);
    });

    document.getElementById('changeBtn').addEventListener('click', () => {
      const items = document.querySelectorAll('.item');
      items.forEach((item, index) => {
        item.textContent = \`✅ Changed \${index + 1}\`;
      });
      
      result.textContent = \`const items = document.querySelectorAll('.item');\\nitems.forEach((item) => {\\n  item.textContent = 'Changed!';\\n});\\n\\n✅ Modify all\\n✅ Update each element\\n✅ Batch changes\`;
      
      output.textContent = \`✅ All items changed!\\n✅ Updated \${items.length} elements!\`;
      console.log('Changed all:', items);
    });

    console.log('🎯 querySelectorAll ready!');`
},


// ============================================
// BATCH 7: FINAL TOPICS - DOM, EVENTS, STRINGS
// ============================================

// TOPIC 19: INNERHTML
{
  topic: 'innerHTML',
  title: '📝 innerHTML',
  description: 'Get or set HTML markup inside an element',
  tags: ['dom', 'manipulation', 'beginner'],
  difficulty: 'Beginner',
  htmlCode: `
    <div class="topic-container">
      <h2>📝 innerHTML</h2>
      
      <div class="code-section">
        <h3>Get/Set HTML Content:</h3>
        <p><code>element.innerHTML = 'HTML'</code></p>
        <p>Includes HTML tags</p>
      </div>

      <div id="demo" style="background: rgba(255,255,255,0.2); padding: 15px; margin: 10px 0; border-radius: 5px;">
        Original content
      </div>

      <div class="button-group">
        <button id="getBtn" class="btn">Get innerHTML</button>
        <button id="setBtn" class="btn">Set innerHTML</button>
        <button id="htmlBtn" class="btn">Add HTML</button>
        <button id="appendBtn" class="btn">Append HTML</button>
        <button id="clearBtn" class="btn">Clear</button>
      </div>

      <div class="result-section">
        <h3>Code:</h3>
        <pre id="result"></pre>
      </div>

      <div class="output-section">
        <h3>Output:</h3>
        <pre id="output"></pre>
      </div>
    </div>
  `,
  cssCode: `
    .topic-container {
      max-width: 900px;
      margin: 0 auto;
      padding: 20px;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
      border-radius: 10px;
      color: #fff;
    }

    h2 {
      text-align: center;
      margin-bottom: 30px;
      font-size: 2.5em;
      text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
    }

    .code-section {
      background: rgba(255,255,255,0.1);
      padding: 15px;
      margin: 15px 0;
      border-left: 4px solid #ffd700;
      border-radius: 5px;
      backdrop-filter: blur(10px);
    }

    .code-section h3 {
      margin-top: 0;
      color: #ffd700;
    }

    .code-section p {
      margin: 8px 0;
      line-height: 1.6;
    }

    code {
      background: rgba(0,0,0,0.2);
      padding: 2px 6px;
      border-radius: 3px;
      font-family: 'Courier New', monospace;
    }

    .button-group {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 10px;
      margin: 20px 0;
    }

    .btn {
      padding: 12px 20px;
      background: #ffd700;
      color: #333;
      border: none;
      border-radius: 5px;
      font-weight: bold;
      cursor: pointer;
      transition: all 0.3s ease;
      font-size: 14px;
    }

    .btn:hover {
      background: #ffed4e;
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(0,0,0,0.3);
    }

    .result-section, .output-section {
      background: rgba(0,0,0,0.2);
      padding: 15px;
      margin: 15px 0;
      border-radius: 5px;
      backdrop-filter: blur(10px);
    }

    .result-section h3, .output-section h3 {
      margin-top: 0;
      color: #ffd700;
    }

    pre {
      background: rgba(0,0,0,0.3);
      padding: 15px;
      border-radius: 5px;
      overflow-x: auto;
      color: #fff;
      font-size: 13px;
      line-height: 1.5;
      margin: 0;
    }
  `,
  jsCode: `
    const result = document.getElementById('result');
    const output = document.getElementById('output');
    const demo = document.getElementById('demo');

    document.getElementById('getBtn').addEventListener('click', () => {
      const html = demo.innerHTML;
      
      result.textContent = \`const demo = document.getElementById('demo');\\nconst html = demo.innerHTML;\\n\\nResult: '\${html}'\\n\\n✅ Get HTML content\\n✅ Includes tags\\n✅ Returns string\`;
      
      output.textContent = \`✅ innerHTML: '\${html}'\\n✅ Get works!\`;
      console.log('Get innerHTML:', html);
    });

    document.getElementById('setBtn').addEventListener('click', () => {
      demo.innerHTML = '<strong>New HTML Content</strong>';
      
      result.textContent = \`demo.innerHTML = '<strong>New HTML Content</strong>';\\n\\n✅ Set HTML content\\n✅ Replaces everything\\n✅ Parses HTML\`;
      
      output.textContent = \`✅ Content: \${demo.innerHTML}\\n✅ Set works!\`;
      console.log('Set innerHTML:', demo.innerHTML);
    });

    document.getElementById('htmlBtn').addEventListener('click', () => {
      demo.innerHTML = '<em>Emphasized</em> <u>Underlined</u>';
      
      result.textContent = \`demo.innerHTML = '<em>Emphasized</em> <u>Underlined</u>';\\n\\n✅ HTML tags work\\n✅ Multiple tags\\n✅ Formatted content\`;
      
      output.textContent = \`✅ Content: \${demo.innerHTML}\\n✅ HTML tags work!\`;
      console.log('HTML tags:', demo.innerHTML);
    });

    document.getElementById('appendBtn').addEventListener('click', () => {
      demo.innerHTML += '<br><span style="color: #ffd700;">Appended!</span>';
      
      result.textContent = \`demo.innerHTML += '<br><span>Appended!</span>';\\n\\n✅ Append HTML\\n✅ Add to existing\\n✅ Concatenate\`;
      
      output.textContent = \`✅ Content: \${demo.innerHTML}\\n✅ Append works!\`;
      console.log('Append:', demo.innerHTML);
    });

    document.getElementById('clearBtn').addEventListener('click', () => {
      demo.innerHTML = '';
      
      result.textContent = \`demo.innerHTML = '';\\n\\n✅ Clear content\\n✅ Empty element\\n✅ Remove all\`;
      
      output.textContent = \`✅ Cleared!\\n✅ Element empty!\`;
      console.log('Cleared');
    });

    console.log('📝 innerHTML ready!');`
},

// TOPIC 20: TEXTCONTENT
{
  topic: 'textContent',
  title: '📄 textContent',
  description: 'Get or set plain text content of an element',
  tags: ['dom', 'manipulation', 'beginner'],
  difficulty: 'Beginner',
  htmlCode: `
    <div class="topic-container">
      <h2>📄 textContent</h2>
      
      <div class="code-section">
        <h3>Get/Set Plain Text:</h3>
        <p><code>element.textContent = 'text'</code></p>
        <p>No HTML parsing</p>
      </div>

      <div id="demo" style="background: rgba(255,255,255,0.2); padding: 15px; margin: 10px 0; border-radius: 5px;">
        Original text
      </div>

      <div class="button-group">
        <button id="getBtn" class="btn">Get textContent</button>
        <button id="setBtn" class="btn">Set textContent</button>
        <button id="htmlBtn" class="btn">HTML as Text</button>
        <button id="compareBtn" class="btn">vs innerHTML</button>
        <button id="clearBtn" class="btn">Clear</button>
      </div>

      <div class="result-section">
        <h3>Code:</h3>
        <pre id="result"></pre>
      </div>

      <div class="output-section">
        <h3>Output:</h3>
        <pre id="output"></pre>
      </div>
    </div>
  `,
  cssCode: `
    .topic-container {
      max-width: 900px;
      margin: 0 auto;
      padding: 20px;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
      border-radius: 10px;
      color: #fff;
    }

    h2 {
      text-align: center;
      margin-bottom: 30px;
      font-size: 2.5em;
      text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
    }

    .code-section {
      background: rgba(255,255,255,0.1);
      padding: 15px;
      margin: 15px 0;
      border-left: 4px solid #ffd700;
      border-radius: 5px;
      backdrop-filter: blur(10px);
    }

    .code-section h3 {
      margin-top: 0;
      color: #ffd700;
    }

    .code-section p {
      margin: 8px 0;
      line-height: 1.6;
    }

    code {
      background: rgba(0,0,0,0.2);
      padding: 2px 6px;
      border-radius: 3px;
      font-family: 'Courier New', monospace;
    }

    .button-group {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 10px;
      margin: 20px 0;
    }

    .btn {
      padding: 12px 20px;
      background: #ffd700;
      color: #333;
      border: none;
      border-radius: 5px;
      font-weight: bold;
      cursor: pointer;
      transition: all 0.3s ease;
      font-size: 14px;
    }

    .btn:hover {
      background: #ffed4e;
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(0,0,0,0.3);
    }

    .result-section, .output-section {
      background: rgba(0,0,0,0.2);
      padding: 15px;
      margin: 15px 0;
      border-radius: 5px;
      backdrop-filter: blur(10px);
    }

    .result-section h3, .output-section h3 {
      margin-top: 0;
      color: #ffd700;
    }

    pre {
      background: rgba(0,0,0,0.3);
      padding: 15px;
      border-radius: 5px;
      overflow-x: auto;
      color: #fff;
      font-size: 13px;
      line-height: 1.5;
      margin: 0;
    }
  `,
  jsCode: `
    const result = document.getElementById('result');
    const output = document.getElementById('output');
    const demo = document.getElementById('demo');

    document.getElementById('getBtn').addEventListener('click', () => {
      const text = demo.textContent;
      
      result.textContent = \`const demo = document.getElementById('demo');\\nconst text = demo.textContent;\\n\\nResult: '\${text}'\\n\\n✅ Get text content\\n✅ Plain text only\\n✅ No HTML\`;
      
      output.textContent = \`✅ textContent: '\${text}'\\n✅ Get works!\`;
      console.log('Get textContent:', text);
    });

    document.getElementById('setBtn').addEventListener('click', () => {
      demo.textContent = 'New Plain Text';
      
      result.textContent = \`demo.textContent = 'New Plain Text';\\n\\n✅ Set text content\\n✅ Plain text only\\n✅ No HTML parsing\`;
      
      output.textContent = \`✅ Content: \${demo.textContent}\\n✅ Set works!\`;
      console.log('Set textContent:', demo.textContent);
    });

    document.getElementById('htmlBtn').addEventListener('click', () => {
      demo.textContent = '<strong>This is HTML</strong>';
      
      result.textContent = \`demo.textContent = '<strong>This is HTML</strong>';\\n\\n✅ HTML treated as text\\n✅ Tags shown literally\\n✅ Not parsed\`;
      
      output.textContent = \`✅ Content: \${demo.textContent}\\n✅ HTML as text!\`;
      console.log('HTML as text:', demo.textContent);
    });

    document.getElementById('compareBtn').addEventListener('click', () => {
      demo.innerHTML = '<em>Emphasized</em>';
      const html = demo.innerHTML;
      const text = demo.textContent;
      
      result.textContent = \`demo.innerHTML = '<em>Emphasized</em>';\\n\\ninnerHTML: '\${html}'\\ntextContent: '\${text}'\\n\\n✅ innerHTML: includes tags\\n✅ textContent: text only\\n✅ Different results\`;
      
      output.textContent = \`✅ innerHTML: \${html}\\n✅ textContent: \${text}\\n✅ Different!\`;
      console.log('Compare:', html, text);
    });

    document.getElementById('clearBtn').addEventListener('click', () => {
      demo.textContent = '';
      
      result.textContent = \`demo.textContent = '';\\n\\n✅ Clear text\\n✅ Empty element\\n✅ Remove all\`;
      
      output.textContent = \`✅ Cleared!\\n✅ Element empty!\`;
      console.log('Cleared');
    });

    console.log('📄 textContent ready!');`
},

// TOPIC 21: CLASSLIST
{
  topic: 'classList',
  title: '🎨 classList',
  description: 'add, remove, toggle, and contains for CSS classes',
  tags: ['dom', 'classes', 'beginner'],
  difficulty: 'Beginner',
  htmlCode: `
    <div class="topic-container">
      <h2>🎨 classList</h2>
      
      <div class="code-section">
        <h3>Manage CSS Classes:</h3>
        <p>✅ <code>add()</code> - Add class</p>
        <p>✅ <code>remove()</code> - Remove class</p>
        <p>✅ <code>toggle()</code> - Toggle class</p>
      </div>

      <div id="demo" style="background: rgba(255,255,255,0.2); padding: 15px; margin: 10px 0; border-radius: 5px; transition: all 0.3s;">
        Demo Element
      </div>

      <style>
        .active { background: #ffd700 !important; color: #333 !important; }
        .highlight { border: 3px solid #ffd700 !important; }
        .hidden { display: none !important; }
      </style>

      <div class="button-group">
        <button id="addBtn" class="btn">Add Class</button>
        <button id="removeBtn" class="btn">Remove Class</button>
        <button id="toggleBtn" class="btn">Toggle Class</button>
        <button id="containsBtn" class="btn">Contains</button>
        <button id="multiBtn" class="btn">Multiple</button>
      </div>

      <div class="result-section">
        <h3>Code:</h3>
        <pre id="result"></pre>
      </div>

      <div class="output-section">
        <h3>Output:</h3>
        <pre id="output"></pre>
      </div>
    </div>
  `,
  cssCode: `
    .topic-container {
      max-width: 900px;
      margin: 0 auto;
      padding: 20px;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%);
      border-radius: 10px;
      color: #fff;
    }

    h2 {
      text-align: center;
      margin-bottom: 30px;
      font-size: 2.5em;
      text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
    }

    .code-section {
      background: rgba(255,255,255,0.1);
      padding: 15px;
      margin: 15px 0;
      border-left: 4px solid #ffd700;
      border-radius: 5px;
      backdrop-filter: blur(10px);
    }

    .code-section h3 {
      margin-top: 0;
      color: #ffd700;
    }

    .code-section p {
      margin: 8px 0;
      line-height: 1.6;
    }

    code {
      background: rgba(0,0,0,0.2);
      padding: 2px 6px;
      border-radius: 3px;
      font-family: 'Courier New', monospace;
    }

    .button-group {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 10px;
      margin: 20px 0;
    }

    .btn {
      padding: 12px 20px;
      background: #ffd700;
      color: #333;
      border: none;
      border-radius: 5px;
      font-weight: bold;
      cursor: pointer;
      transition: all 0.3s ease;
      font-size: 14px;
    }

    .btn:hover {
      background: #ffed4e;
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(0,0,0,0.3);
    }

    .result-section, .output-section {
      background: rgba(0,0,0,0.2);
      padding: 15px;
      margin: 15px 0;
      border-radius: 5px;
      backdrop-filter: blur(10px);
    }

    .result-section h3, .output-section h3 {
      margin-top: 0;
      color: #ffd700;
    }

    pre {
      background: rgba(0,0,0,0.3);
      padding: 15px;
      border-radius: 5px;
      overflow-x: auto;
      color: #fff;
      font-size: 13px;
      line-height: 1.5;
      margin: 0;
    }
  `,
  jsCode: `
    const result = document.getElementById('result');
    const output = document.getElementById('output');
    const demo = document.getElementById('demo');

    document.getElementById('addBtn').addEventListener('click', () => {
      demo.classList.add('active');
      
      result.textContent = \`demo.classList.add('active');\\n\\n✅ Add class\\n✅ Element gets class\\n✅ Styles applied\`;
      
      output.textContent = \`✅ Classes: \${demo.className}\\n✅ Add works!\`;
      console.log('Add class:', demo.className);
    });

    document.getElementById('removeBtn').addEventListener('click', () => {
      demo.classList.remove('active');
      
      result.textContent = \`demo.classList.remove('active');\\n\\n✅ Remove class\\n✅ Class removed\\n✅ Styles gone\`;
      
      output.textContent = \`✅ Classes: \${demo.className || '(none)'}\\n✅ Remove works!\`;
      console.log('Remove class:', demo.className);
    });

    document.getElementById('toggleBtn').addEventListener('click', () => {
      demo.classList.toggle('highlight');
      
      result.textContent = \`demo.classList.toggle('highlight');\\n\\n✅ Toggle class\\n✅ Add if missing\\n✅ Remove if present\`;
      
      output.textContent = \`✅ Classes: \${demo.className}\\n✅ Toggle works!\`;
      console.log('Toggle class:', demo.className);
    });

    document.getElementById('containsBtn').addEventListener('click', () => {
      const hasActive = demo.classList.contains('active');
      const hasHidden = demo.classList.contains('hidden');
      
      result.textContent = \`const hasActive = demo.classList.contains('active');\\nconst hasHidden = demo.classList.contains('hidden');\\n\\nhasActive: \${hasActive}\\nhasHidden: \${hasHidden}\\n\\n✅ Check if has class\\n✅ Returns boolean\\n✅ Useful for conditions\`;
      
      output.textContent = \`✅ Has 'active': \${hasActive}\\n✅ Has 'hidden': \${hasHidden}\\n✅ Contains works!\`;
      console.log('Contains:', hasActive, hasHidden);
    });

    document.getElementById('multiBtn').addEventListener('click', () => {
      demo.classList.add('active', 'highlight');
      
      result.textContent = \`demo.classList.add('active', 'highlight');\\n\\n✅ Add multiple classes\\n✅ Separate by comma\\n✅ All applied\`;
      
      output.textContent = \`✅ Classes: \${demo.className}\\n✅ Multiple works!\`;
      console.log('Multiple classes:', demo.className);
    });

    console.log('🎨 classList ready!');`
},

// TOPIC 22: CLICK EVENT
{
  topic: 'click-event',
  title: '🖱️ Click Event',
  description: 'Fire a handler when the user clicks an element',
  tags: ['events', 'click', 'beginner'],
  difficulty: 'Beginner',
  htmlCode: `
    <div class="topic-container">
      <h2>🖱️ Click Event</h2>
      
      <div class="code-section">
        <h3>Handle Click Events:</h3>
        <p><code>element.addEventListener('click', handler)</code></p>
        <p>Fires when user clicks</p>
      </div>

      <div class="button-group">
        <button id="clickBtn" class="btn">Click Me</button>
        <button id="doubleBtn" class="btn">Double Click</button>
        <button id="countBtn" class="btn">Count Clicks</button>
        <button id="eventBtn" class="btn">Event Object</button>
        <button id="removeBtn" class="btn">Remove Listener</button>
      </div>

      <div class="result-section">
        <h3>Code:</h3>
        <pre id="result"></pre>
      </div>

      <div class="output-section">
        <h3>Output:</h3>
        <pre id="output"></pre>
      </div>
    </div>
  `,
  cssCode: `
    .topic-container {
      max-width: 900px;
      margin: 0 auto;
      padding: 20px;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      border-radius: 10px;
      color: #fff;
    }

    h2 {
      text-align: center;
      margin-bottom: 30px;
      font-size: 2.5em;
      text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
    }

    .code-section {
      background: rgba(255,255,255,0.1);
      padding: 15px;
      margin: 15px 0;
      border-left: 4px solid #ffd700;
      border-radius: 5px;
      backdrop-filter: blur(10px);
    }

    .code-section h3 {
      margin-top: 0;
      color: #ffd700;
    }

    .code-section p {
      margin: 8px 0;
      line-height: 1.6;
    }

    code {
      background: rgba(0,0,0,0.2);
      padding: 2px 6px;
      border-radius: 3px;
      font-family: 'Courier New', monospace;
    }

    .button-group {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 10px;
      margin: 20px 0;
    }

    .btn {
      padding: 12px 20px;
      background: #ffd700;
      color: #333;
      border: none;
      border-radius: 5px;
      font-weight: bold;
      cursor: pointer;
      transition: all 0.3s ease;
      font-size: 14px;
    }

    .btn:hover {
      background: #ffed4e;
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(0,0,0,0.3);
    }

    .result-section, .output-section {
      background: rgba(0,0,0,0.2);
      padding: 15px;
      margin: 15px 0;
      border-radius: 5px;
      backdrop-filter: blur(10px);
    }

    .result-section h3, .output-section h3 {
      margin-top: 0;
      color: #ffd700;
    }

    pre {
      background: rgba(0,0,0,0.3);
      padding: 15px;
      border-radius: 5px;
      overflow-x: auto;
      color: #fff;
      font-size: 13px;
      line-height: 1.5;
      margin: 0;
    }
  `,
  jsCode: `
    const result = document.getElementById('result');
    const output = document.getElementById('output');

    document.getElementById('clickBtn').addEventListener('click', () => {
      result.textContent = \`button.addEventListener('click', () => {\\n  console.log('Clicked!');\\n});\\n\\n✅ Click event\\n✅ Fires on click\\n✅ Handler executes\`;
      
      output.textContent = \`✅ Button clicked!\\n✅ Event fired!\`;
      console.log('Click event fired!');
    });

    document.getElementById('doubleBtn').addEventListener('dblclick', () => {
      result.textContent = \`button.addEventListener('dblclick', () => {\\n  console.log('Double clicked!');\\n});\\n\\n✅ Double click event\\n✅ Fires on double click\\n✅ Two clicks required\`;
      
      output.textContent = \`✅ Double clicked!\\n✅ dblclick event!\`;
      console.log('Double click event fired!');
    });

    let clickCount = 0;
    document.getElementById('countBtn').addEventListener('click', () => {
      clickCount++;
      
      result.textContent = \`let count = 0;\\nbutton.addEventListener('click', () => {\\n  count++;\\n  console.log(count);\\n});\\n\\n✅ Count clicks\\n✅ Increment counter\\n✅ Track interactions\`;
      
      output.textContent = \`✅ Click count: \${clickCount}\\n✅ Counting works!\`;
      console.log('Click count:', clickCount);
    });

    document.getElementById('eventBtn').addEventListener('click', (event) => {
      result.textContent = \`button.addEventListener('click', (event) => {\\n  console.log(event);\\n});\\n\\n✅ Event object\\n✅ Contains info\\n✅ target, type, etc.\`;
      
      output.textContent = \`✅ Event type: \${event.type}\\n✅ Target: \${event.target.tagName}\\n✅ Event object works!\`;
      console.log('Event object:', event);
    });

    const handler = () => {
      result.textContent = \`const handler = () => { };\\nbutton.addEventListener('click', handler);\\nbutton.removeEventListener('click', handler);\\n\\n✅ Remove listener\\n✅ Stop listening\\n✅ Clean up\`;
      
      output.textContent = \`✅ Listener removed!\\n✅ No longer listening!\`;
    };

    document.getElementById('removeBtn').addEventListener('click', handler);
    setTimeout(() => {
      document.getElementById('removeBtn').removeEventListener('click', handler);
    }, 100);

    console.log('🖱️ Click Event ready!');`
},


// ============================================
// BATCH 9: TOPIC 1 - STRING METHODS
// ============================================

{
  topic: 'string-methods',
  title: '📝 String Methods',
  description: 'toUpperCase, toLowerCase, trim, repeat, padStart, padEnd',
  tags: ['strings', 'methods', 'beginner'],
  difficulty: 'Beginner',
  htmlCode: `
    <div class="topic-container">
      <h2>📝 String Methods</h2>
      
      <div class="code-section">
        <h3>Common String Methods:</h3>
        <p>✅ <code>toUpperCase()</code> - Convert to uppercase</p>
        <p>✅ <code>toLowerCase()</code> - Convert to lowercase</p>
        <p>✅ <code>trim()</code> - Remove whitespace</p>
        <p>✅ <code>repeat()</code> - Repeat string</p>
        <p>✅ <code>padStart/padEnd()</code> - Add padding</p>
      </div>

      <input type="text" id="input" value="hello world" placeholder="Enter text" style="width: 100%; padding: 10px; margin: 10px 0; border-radius: 5px; border: 2px solid #667eea;">

      <div class="button-group">
        <button id="upperBtn" class="btn">toUpperCase()</button>
        <button id="lowerBtn" class="btn">toLowerCase()</button>
        <button id="trimBtn" class="btn">trim()</button>
        <button id="repeatBtn" class="btn">repeat()</button>
        <button id="padBtn" class="btn">padStart/padEnd</button>
      </div>

      <div class="result-section">
        <h3>Code:</h3>
        <pre id="result"></pre>
      </div>

      <div class="output-section">
        <h3>Output:</h3>
        <pre id="output"></pre>
      </div>
    </div>
  `,
  cssCode: `
    .topic-container {
      max-width: 900px;
      margin: 0 auto;
      padding: 20px;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      border-radius: 10px;
      color: #fff;
    }

    h2 {
      text-align: center;
      margin-bottom: 30px;
      font-size: 2.5em;
      text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
    }

    .code-section {
      background: rgba(255,255,255,0.1);
      padding: 15px;
      margin: 15px 0;
      border-left: 4px solid #ffd700;
      border-radius: 5px;
      backdrop-filter: blur(10px);
    }

    .code-section h3 {
      margin-top: 0;
      color: #ffd700;
    }

    .code-section p {
      margin: 8px 0;
      line-height: 1.6;
    }

    code {
      background: rgba(0,0,0,0.2);
      padding: 2px 6px;
      border-radius: 3px;
      font-family: 'Courier New', monospace;
    }

    .button-group {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 10px;
      margin: 20px 0;
    }

    .btn {
      padding: 12px 20px;
      background: #ffd700;
      color: #333;
      border: none;
      border-radius: 5px;
      font-weight: bold;
      cursor: pointer;
      transition: all 0.3s ease;
      font-size: 14px;
    }

    .btn:hover {
      background: #ffed4e;
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(0,0,0,0.3);
    }

    .result-section, .output-section {
      background: rgba(0,0,0,0.2);
      padding: 15px;
      margin: 15px 0;
      border-radius: 5px;
      backdrop-filter: blur(10px);
    }

    .result-section h3, .output-section h3 {
      margin-top: 0;
      color: #ffd700;
    }

    pre {
      background: rgba(0,0,0,0.3);
      padding: 15px;
      border-radius: 5px;
      overflow-x: auto;
      color: #fff;
      font-size: 13px;
      line-height: 1.5;
      margin: 0;
    }
  `,
  jsCode: `
    const result = document.getElementById('result');
    const output = document.getElementById('output');
    const input = document.getElementById('input');

    document.getElementById('upperBtn').addEventListener('click', () => {
      const text = input.value;
      const upper = text.toUpperCase();
      
      result.textContent = \`const text = '\${text}';
const upper = text.toUpperCase();

Result: '\${upper}'

✅ Converts all to uppercase
✅ Original unchanged
✅ Returns new string\`;
      
      output.textContent = \`✅ toUpperCase()
Input: '\${text}'
Output: '\${upper}'\`;
      console.log('toUpperCase:', upper);
    });

    document.getElementById('lowerBtn').addEventListener('click', () => {
      const text = input.value;
      const lower = text.toLowerCase();
      
      result.textContent = \`const text = '\${text}';
const lower = text.toLowerCase();

Result: '\${lower}'

✅ Converts all to lowercase
✅ Original unchanged
✅ Returns new string\`;
      
      output.textContent = \`✅ toLowerCase()
Input: '\${text}'
Output: '\${lower}'\`;
      console.log('toLowerCase:', lower);
    });

    document.getElementById('trimBtn').addEventListener('click', () => {
      const text = '  hello world  ';
      const trimmed = text.trim();
      
      result.textContent = \`const text = '  hello world  ';
const trimmed = text.trim();

Result: '\${trimmed}'

✅ Removes leading/trailing whitespace
✅ Keeps internal spaces
✅ Very useful for form input\`;
      
      output.textContent = \`✅ trim()
Input: '  hello world  '
Output: '\${trimmed}'\`;
      console.log('trim:', trimmed);
    });

    document.getElementById('repeatBtn').addEventListener('click', () => {
      const text = input.value;
      const repeated = text.repeat(2);
      
      result.textContent = \`const text = '\${text}';
const repeated = text.repeat(2);

Result: '\${repeated}'

✅ Repeats string N times
✅ Creates new string
✅ Useful for patterns\`;
      
      output.textContent = \`✅ repeat(2)
Input: '\${text}'
Output: '\${repeated}'\`;
      console.log('repeat:', repeated);
    });

    document.getElementById('padBtn').addEventListener('click', () => {
      const text = input.value;
      const padStart = text.padStart(20, '*');
      const padEnd = text.padEnd(20, '*');
      
      result.textContent = \`const text = '\${text}';
const padStart = text.padStart(20, '*');
const padEnd = text.padEnd(20, '*');

padStart: '\${padStart}'
padEnd: '\${padEnd}'

✅ Adds padding to reach length
✅ padStart: left side
✅ padEnd: right side\`;
      
      output.textContent = \`✅ padStart/padEnd
padStart(20, '*'): '\${padStart}'
padEnd(20, '*'): '\${padEnd}'\`;
      console.log('padStart:', padStart, 'padEnd:', padEnd);
    });

    console.log('📝 String methods ready!');
  `
},


// ============================================
// BATCH 9: TOPIC 2 - INDEXOF & INCLUDES
// ============================================

{
  topic: 'indexOf-includes',
  title: '🔍 indexOf & includes',
  description: 'Find substrings with indexOf(), includes(), startsWith()',
  tags: ['strings', 'search', 'beginner'],
  difficulty: 'Beginner',
  htmlCode: `
    <div class="topic-container">
      <h2>🔍 indexOf & includes</h2>
      
      <div class="code-section">
        <h3>String Search Methods:</h3>
        <p>✅ <code>indexOf()</code> - Find position of substring</p>
        <p>✅ <code>includes()</code> - Check if contains substring</p>
        <p>✅ <code>startsWith()</code> - Check if starts with</p>
        <p>✅ <code>endsWith()</code> - Check if ends with</p>
      </div>

      <input type="text" id="text" value="JavaScript is awesome" placeholder="Text" style="width: 100%; padding: 10px; margin: 10px 0; border-radius: 5px; border: 2px solid #f5576c;">
      <input type="text" id="search" value="Java" placeholder="Search term" style="width: 100%; padding: 10px; margin: 10px 0; border-radius: 5px; border: 2px solid #f5576c;">

      <div class="button-group">
        <button id="indexBtn" class="btn">indexOf()</button>
        <button id="includesBtn" class="btn">includes()</button>
        <button id="startsBtn" class="btn">startsWith()</button>
        <button id="endsBtn" class="btn">endsWith()</button>
      </div>

      <div class="result-section">
        <h3>Code:</h3>
        <pre id="result"></pre>
      </div>

      <div class="output-section">
        <h3>Output:</h3>
        <pre id="output"></pre>
      </div>
    </div>
  `,
  cssCode: `
    .topic-container {
      max-width: 900px;
      margin: 0 auto;
      padding: 20px;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
      border-radius: 10px;
      color: #fff;
    }

    h2 {
      text-align: center;
      margin-bottom: 30px;
      font-size: 2.5em;
      text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
    }

    .code-section {
      background: rgba(255,255,255,0.1);
      padding: 15px;
      margin: 15px 0;
      border-left: 4px solid #ffd700;
      border-radius: 5px;
      backdrop-filter: blur(10px);
    }

    .code-section h3 {
      margin-top: 0;
      color: #ffd700;
    }

    .code-section p {
      margin: 8px 0;
      line-height: 1.6;
    }

    code {
      background: rgba(0,0,0,0.2);
      padding: 2px 6px;
      border-radius: 3px;
      font-family: 'Courier New', monospace;
    }

    input {
      width: 100%;
      padding: 10px;
      margin: 10px 0;
      border-radius: 5px;
      border: 2px solid #ffd700;
      font-size: 14px;
    }

    .button-group {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 10px;
      margin: 20px 0;
    }

    .btn {
      padding: 12px 20px;
      background: #ffd700;
      color: #333;
      border: none;
      border-radius: 5px;
      font-weight: bold;
      cursor: pointer;
      transition: all 0.3s ease;
      font-size: 14px;
    }

    .btn:hover {
      background: #ffed4e;
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(0,0,0,0.3);
    }

    .result-section, .output-section {
      background: rgba(0,0,0,0.2);
      padding: 15px;
      margin: 15px 0;
      border-radius: 5px;
      backdrop-filter: blur(10px);
    }

    .result-section h3, .output-section h3 {
      margin-top: 0;
      color: #ffd700;
    }

    pre {
      background: rgba(0,0,0,0.3);
      padding: 15px;
      border-radius: 5px;
      overflow-x: auto;
      color: #fff;
      font-size: 13px;
      line-height: 1.5;
      margin: 0;
    }
  `,
  jsCode: `
    const result = document.getElementById('result');
    const output = document.getElementById('output');
    const text = document.getElementById('text');
    const search = document.getElementById('search');

    document.getElementById('indexBtn').addEventListener('click', () => {
      const str = text.value;
      const term = search.value;
      const index = str.indexOf(term);
      
      result.textContent = \`const str = '\${str}';
const term = '\${term}';
const index = str.indexOf(term);

Result: \${index}

✅ Returns position (0-based)
✅ Returns -1 if not found
✅ Finds first occurrence\`;
      
      output.textContent = \`✅ indexOf()
Text: '\${str}'
Search: '\${term}'
Position: \${index}
\${index >= 0 ? '✅ Found!' : '❌ Not found'}\`;
      console.log('indexOf:', index);
    });

    document.getElementById('includesBtn').addEventListener('click', () => {
      const str = text.value;
      const term = search.value;
      const has = str.includes(term);
      
      result.textContent = \`const str = '\${str}';
const term = '\${term}';
const has = str.includes(term);

Result: \${has}

✅ Returns boolean
✅ true if found
✅ false if not found\`;
      
      output.textContent = \`✅ includes()
Text: '\${str}'
Search: '\${term}'
Contains: \${has}
\${has ? '✅ Yes!' : '❌ No'}\`;
      console.log('includes:', has);
    });

    document.getElementById('startsBtn').addEventListener('click', () => {
      const str = text.value;
      const term = search.value;
      const starts = str.startsWith(term);
      
      result.textContent = \`const str = '\${str}';
const term = '\${term}';
const starts = str.startsWith(term);

Result: \${starts}

✅ Checks beginning only
✅ Returns boolean
✅ Case sensitive\`;
      
      output.textContent = \`✅ startsWith()
Text: '\${str}'
Search: '\${term}'
Starts with: \${starts}
\${starts ? '✅ Yes!' : '❌ No'}\`;
      console.log('startsWith:', starts);
    });

    document.getElementById('endsBtn').addEventListener('click', () => {
      const str = text.value;
      const term = search.value;
      const ends = str.endsWith(term);
      
      result.textContent = \`const str = '\${str}';
const term = '\${term}';
const ends = str.endsWith(term);

Result: \${ends}

✅ Checks ending only
✅ Returns boolean
✅ Case sensitive\`;
      
      output.textContent = \`✅ endsWith()
Text: '\${str}'
Search: '\${term}'
Ends with: \${ends}
\${ends ? '✅ Yes!' : '❌ No'}\`;
      console.log('endsWith:', ends);
    });

    console.log('🔍 indexOf & includes ready!');
  `
},


// ============================================
// BATCH 9: TOPIC 3 - SLICE & SUBSTRING
// ============================================

{
  topic: 'slice-substring',
  title: '✂️ slice & substring',
  description: 'Extract portions with slice() and substring()',
  tags: ['strings', 'extraction', 'beginner'],
  difficulty: 'Beginner',
  htmlCode: `
    <div class="topic-container">
      <h2>✂️ slice & substring</h2>
      
      <div class="code-section">
        <h3>String Extraction Methods:</h3>
        <p>✅ <code>slice(start, end)</code> - Extract portion</p>
        <p>✅ <code>substring(start, end)</code> - Extract portion</p>
        <p>✅ Supports negative indices (slice only)</p>
        <p>✅ Returns new string</p>
      </div>

      <input type="text" id="text" value="JavaScript" placeholder="Text" style="width: 100%; padding: 10px; margin: 10px 0; border-radius: 5px; border: 2px solid #4facfe;">
      <input type="number" id="start" value="0" placeholder="Start" style="width: 48%; padding: 10px; margin: 10px 1%; border-radius: 5px; border: 2px solid #4facfe;">
      <input type="number" id="end" value="4" placeholder="End" style="width: 48%; padding: 10px; margin: 10px 1%; border-radius: 5px; border: 2px solid #4facfe;">

      <div class="button-group">
        <button id="sliceBtn" class="btn">slice()</button>
        <button id="substringBtn" class="btn">substring()</button>
        <button id="negativeBtn" class="btn">Negative Index</button>
        <button id="compareBtn" class="btn">Compare</button>
      </div>

      <div class="result-section">
        <h3>Code:</h3>
        <pre id="result"></pre>
      </div>

      <div class="output-section">
        <h3>Output:</h3>
        <pre id="output"></pre>
      </div>
    </div>
  `,
  cssCode: `
    .topic-container {
      max-width: 900px;
      margin: 0 auto;
      padding: 20px;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
      border-radius: 10px;
      color: #fff;
    }

    h2 {
      text-align: center;
      margin-bottom: 30px;
      font-size: 2.5em;
      text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
    }

    .code-section {
      background: rgba(255,255,255,0.1);
      padding: 15px;
      margin: 15px 0;
      border-left: 4px solid #ffd700;
      border-radius: 5px;
      backdrop-filter: blur(10px);
    }

    .code-section h3 {
      margin-top: 0;
      color: #ffd700;
    }

    .code-section p {
      margin: 8px 0;
      line-height: 1.6;
    }

    code {
      background: rgba(0,0,0,0.2);
      padding: 2px 6px;
      border-radius: 3px;
      font-family: 'Courier New', monospace;
    }

    input {
      padding: 10px;
      margin: 10px 0;
      border-radius: 5px;
      border: 2px solid #ffd700;
      font-size: 14px;
    }

    .button-group {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 10px;
      margin: 20px 0;
    }

    .btn {
      padding: 12px 20px;
      background: #ffd700;
      color: #333;
      border: none;
      border-radius: 5px;
      font-weight: bold;
      cursor: pointer;
      transition: all 0.3s ease;
      font-size: 14px;
    }

    .btn:hover {
      background: #ffed4e;
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(0,0,0,0.3);
    }

    .result-section, .output-section {
      background: rgba(0,0,0,0.2);
      padding: 15px;
      margin: 15px 0;
      border-radius: 5px;
      backdrop-filter: blur(10px);
    }

    .result-section h3, .output-section h3 {
      margin-top: 0;
      color: #ffd700;
    }

    pre {
      background: rgba(0,0,0,0.3);
      padding: 15px;
      border-radius: 5px;
      overflow-x: auto;
      color: #fff;
      font-size: 13px;
      line-height: 1.5;
      margin: 0;
    }
  `,
  jsCode: `
    const result = document.getElementById('result');
    const output = document.getElementById('output');
    const text = document.getElementById('text');
    const start = document.getElementById('start');
    const end = document.getElementById('end');

    document.getElementById('sliceBtn').addEventListener('click', () => {
      const str = text.value;
      const s = parseInt(start.value);
      const e = parseInt(end.value);
      const sliced = str.slice(s, e);
      
      result.textContent = \`const str = '\${str}';
const sliced = str.slice(\${s}, \${e});

Result: '\${sliced}'

✅ Extracts from index \${s} to \${e}
✅ End index not included
✅ Supports negative indices
✅ Returns new string\`;
      
      output.textContent = \`✅ slice(\${s}, \${e})
Text: '\${str}'
Result: '\${sliced}'
Length: \${sliced.length}\`;
      console.log('slice:', sliced);
    });

    document.getElementById('substringBtn').addEventListener('click', () => {
      const str = text.value;
      const s = parseInt(start.value);
      const e = parseInt(end.value);
      const subbed = str.substring(s, e);
      
      result.textContent = \`const str = '\${str}';
const subbed = str.substring(\${s}, \${e});

Result: '\${subbed}'

✅ Extracts from index \${s} to \${e}
✅ End index not included
✅ NO negative indices
✅ Returns new string\`;
      
      output.textContent = \`✅ substring(\${s}, \${e})
Text: '\${str}'
Result: '\${subbed}'
Length: \${subbed.length}\`;
      console.log('substring:', subbed);
    });

    document.getElementById('negativeBtn').addEventListener('click', () => {
      const str = text.value;
      const sliced = str.slice(-4);
      
      result.textContent = \`const str = '\${str}';
const sliced = str.slice(-4);

Result: '\${sliced}'

✅ Negative index counts from end
✅ -4 means last 4 characters
✅ slice() supports this
✅ substring() does NOT\`;
      
      output.textContent = \`✅ slice(-4)
Text: '\${str}'
Last 4 chars: '\${sliced}'
Length: \${sliced.length}\`;
      console.log('negative slice:', sliced);
    });

    document.getElementById('compareBtn').addEventListener('click', () => {
      const str = text.value;
      const s = parseInt(start.value);
      const e = parseInt(end.value);
      const sliced = str.slice(s, e);
      const subbed = str.substring(s, e);
      
      result.textContent = \`const str = '\${str}';
const s = \${s}, e = \${e};

slice(\${s}, \${e}): '\${sliced}'
substring(\${s}, \${e}): '\${subbed}'

✅ Same result with positive indices
✅ slice() better for negative
✅ substring() swaps if start > end\`;
      
      output.textContent = \`✅ Compare
slice: '\${sliced}'
substring: '\${subbed}'
Same: \${sliced === subbed ? '✅ Yes' : '❌ No'}\`;
      console.log('compare:', sliced, subbed);
    });

    console.log('✂️ slice & substring ready!');
  `
},


// ============================================
// BATCH 9: TOPIC 4 - SPLIT & JOIN
// ============================================

{
  topic: 'split-join',
  title: '🔄 split & join',
  description: 'Convert strings to arrays and back with split and join',
  tags: ['strings', 'arrays', 'conversion', 'beginner'],
  difficulty: 'Beginner',
  htmlCode: `
    <div class="topic-container">
      <h2>🔄 split & join</h2>
      
      <div class="code-section">
        <h3>String ↔ Array Conversion:</h3>
        <p>✅ <code>split(separator)</code> - String to Array</p>
        <p>✅ <code>join(separator)</code> - Array to String</p>
        <p>✅ Powerful for data transformation</p>
        <p>✅ Works with any separator</p>
      </div>

      <input type="text" id="text" value="apple,banana,orange" placeholder="Text" style="width: 100%; padding: 10px; margin: 10px 0; border-radius: 5px; border: 2px solid #a8edea;">
      <input type="text" id="separator" value="," placeholder="Separator" style="width: 100%; padding: 10px; margin: 10px 0; border-radius: 5px; border: 2px solid #a8edea;">

      <div class="button-group">
        <button id="splitBtn" class="btn">split()</button>
        <button id="joinBtn" class="btn">join()</button>
        <button id="transformBtn" class="btn">Transform</button>
        <button id="chainBtn" class="btn">Chain Methods</button>
      </div>

      <div class="result-section">
        <h3>Code:</h3>
        <pre id="result"></pre>
      </div>

      <div class="output-section">
        <h3>Output:</h3>
        <pre id="output"></pre>
      </div>
    </div>
  `,
  cssCode: `
    .topic-container {
      max-width: 900px;
      margin: 0 auto;
      padding: 20px;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
      border-radius: 10px;
      color: #333;
    }

    h2 {
      text-align: center;
      margin-bottom: 30px;
      font-size: 2.5em;
      text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
      color: #333;
    }

    .code-section {
      background: rgba(255,255,255,0.5);
      padding: 15px;
      margin: 15px 0;
      border-left: 4px solid #667eea;
      border-radius: 5px;
      backdrop-filter: blur(10px);
    }

    .code-section h3 {
      margin-top: 0;
      color: #667eea;
    }

    .code-section p {
      margin: 8px 0;
      line-height: 1.6;
      color: #333;
    }

    code {
      background: rgba(0,0,0,0.1);
      padding: 2px 6px;
      border-radius: 3px;
      font-family: 'Courier New', monospace;
    }

    input {
      padding: 10px;
      margin: 10px 0;
      border-radius: 5px;
      border: 2px solid #667eea;
      font-size: 14px;
    }

    .button-group {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 10px;
      margin: 20px 0;
    }

    .btn {
      padding: 12px 20px;
      background: #667eea;
      color: white;
      border: none;
      border-radius: 5px;
      font-weight: bold;
      cursor: pointer;
      transition: all 0.3s ease;
      font-size: 14px;
    }

    .btn:hover {
      background: #5568d3;
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(0,0,0,0.2);
    }

    .result-section, .output-section {
      background: rgba(255,255,255,0.3);
      padding: 15px;
      margin: 15px 0;
      border-radius: 5px;
      backdrop-filter: blur(10px);
    }

    .result-section h3, .output-section h3 {
      margin-top: 0;
      color: #667eea;
    }

    pre {
      background: rgba(0,0,0,0.1);
      padding: 15px;
      border-radius: 5px;
      overflow-x: auto;
      color: #333;
      font-size: 13px;
      line-height: 1.5;
      margin: 0;
    }
  `,
  jsCode: `
    const result = document.getElementById('result');
    const output = document.getElementById('output');
    const text = document.getElementById('text');
    const separator = document.getElementById('separator');

    document.getElementById('splitBtn').addEventListener('click', () => {
      const str = text.value;
      const sep = separator.value;
      const arr = str.split(sep);
      
      result.textContent = \`const str = '\${str}';
const sep = '\${sep}';
const arr = str.split(sep);

Result: [\${arr.map(s => \`'\${s}'\`).join(', ')}]

✅ Converts string to array
✅ Splits by separator
✅ Returns array of strings
✅ Original unchanged\`;
      
      output.textContent = \`✅ split('\${sep}')
Input: '\${str}'
Array: [\${arr.map(s => \`'\${s}'\`).join(', ')}]
Length: \${arr.length}\`;
      console.log('split:', arr);
    });

    document.getElementById('joinBtn').addEventListener('click', () => {
      const str = text.value;
      const sep = separator.value;
      const arr = str.split(sep);
      const joined = arr.join(' | ');
      
      result.textContent = \`const str = '\${str}';
const arr = str.split('\${sep}');
const joined = arr.join(' | ');

Result: '\${joined}'

✅ Converts array to string
✅ Joins with separator
✅ Returns single string
✅ Original array unchanged\`;
      
      output.textContent = \`✅ join(' | ')
Array: [\${arr.map(s => \`'\${s}'\`).join(', ')}]
Result: '\${joined}'\`;
      console.log('join:', joined);
    });

    document.getElementById('transformBtn').addEventListener('click', () => {
      const str = text.value;
      const sep = separator.value;
      const arr = str.split(sep);
      const transformed = arr.map(s => s.trim().toUpperCase());
      const result_str = transformed.join(' - ');
      
      result.textContent = \`const str = '\${str}';
const arr = str.split('\${sep}');
const transformed = arr
  .map(s => s.trim().toUpperCase());
const result = transformed.join(' - ');

Result: '\${result_str}'

✅ Split string
✅ Map to uppercase
✅ Join with new separator\`;
      
      output.textContent = \`✅ Transform
Original: '\${str}'
Split: [\${arr.map(s => \`'\${s}'\`).join(', ')}]
Transformed: [\${transformed.map(s => \`'\${s}'\`).join(', ')}]
Final: '\${result_str}'\`;
      console.log('transform:', result_str);
    });

    document.getElementById('chainBtn').addEventListener('click', () => {
      const str = text.value;
      const sep = separator.value;
      const result_str = str
        .split(sep)
        .map(s => s.trim())
        .filter(s => s.length > 0)
        .join(' | ');
      
      result.textContent = \`const result = str
  .split('\${sep}')
  .map(s => s.trim())
  .filter(s => s.length > 0)
  .join(' | ');

Result: '\${result_str}'

✅ Chain multiple methods
✅ Split → map → filter → join
✅ Powerful data transformation\`;
      
      output.textContent = \`✅ Method Chaining
Input: '\${str}'
After split: [\${str.split(sep).map(s => \`'\${s}'\`).join(', ')}]
After trim & filter: [\${str.split(sep).map(s => s.trim()).filter(s => s.length > 0).map(s => \`'\${s}'\`).join(', ')}]
Final: '\${result_str}'\`;
      console.log('chain:', result_str);
    });

    console.log('🔄 split & join ready!');
  `
},


// ============================================
// BATCH 9: TOPIC 5 - REPLACE & REPLACEALL
// ============================================

{
  topic: 'replace-replaceAll',
  title: '🔀 replace & replaceAll',
  description: 'Replace occurrences using replace() and replaceAll()',
  tags: ['strings', 'replacement', 'beginner'],
  difficulty: 'Beginner',
  htmlCode: `
    <div class="topic-container">
      <h2>🔀 replace & replaceAll</h2>
      
      <div class="code-section">
        <h3>String Replacement Methods:</h3>
        <p>✅ <code>replace()</code> - Replace first occurrence</p>
        <p>✅ <code>replaceAll()</code> - Replace all occurrences</p>
        <p>✅ Regex support with /g flag</p>
        <p>✅ Returns new string</p>
      </div>

      <input type="text" id="text" value="cat cat cat" placeholder="Text" style="width: 100%; padding: 10px; margin: 10px 0; border-radius: 5px; border: 2px solid #ffecd2;">
      <input type="text" id="find" value="cat" placeholder="Find" style="width: 48%; padding: 10px; margin: 10px 1%; border-radius: 5px; border: 2px solid #ffecd2;">
      <input type="text" id="replace" value="dog" placeholder="Replace" style="width: 48%; padding: 10px; margin: 10px 1%; border-radius: 5px; border: 2px solid #ffecd2;">

      <div class="button-group">
        <button id="replaceBtn" class="btn">replace()</button>
        <button id="replaceAllBtn" class="btn">replaceAll()</button>
        <button id="regexBtn" class="btn">Regex /g</button>
        <button id="caseBtn" class="btn">Case Insensitive</button>
      </div>

      <div class="result-section">
        <h3>Code:</h3>
        <pre id="result"></pre>
      </div>

      <div class="output-section">
        <h3>Output:</h3>
        <pre id="output"></pre>
      </div>
    </div>
  `,
  cssCode: `
    .topic-container {
      max-width: 900px;
      margin: 0 auto;
      padding: 20px;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);
      border-radius: 10px;
      color: #333;
    }

    h2 {
      text-align: center;
      margin-bottom: 30px;
      font-size: 2.5em;
      text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
      color: #333;
    }

    .code-section {
      background: rgba(255,255,255,0.5);
      padding: 15px;
      margin: 15px 0;
      border-left: 4px solid #fc8f6f;
      border-radius: 5px;
      backdrop-filter: blur(10px);
    }

    .code-section h3 {
      margin-top: 0;
      color: #fc8f6f;
    }

    .code-section p {
      margin: 8px 0;
      line-height: 1.6;
      color: #333;
    }

    code {
      background: rgba(0,0,0,0.1);
      padding: 2px 6px;
      border-radius: 3px;
      font-family: 'Courier New', monospace;
    }

    input {
      padding: 10px;
      margin: 10px 0;
      border-radius: 5px;
      border: 2px solid #fc8f6f;
      font-size: 14px;
    }

    .button-group {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 10px;
      margin: 20px 0;
    }

    .btn {
      padding: 12px 20px;
      background: #fc8f6f;
      color: white;
      border: none;
      border-radius: 5px;
      font-weight: bold;
      cursor: pointer;
      transition: all 0.3s ease;
      font-size: 14px;
    }

    .btn:hover {
      background: #e67d5f;
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(0,0,0,0.2);
    }

    .result-section, .output-section {
      background: rgba(255,255,255,0.3);
      padding: 15px;
      margin: 15px 0;
      border-radius: 5px;
      backdrop-filter: blur(10px);
    }

    .result-section h3, .output-section h3 {
      margin-top: 0;
      color: #fc8f6f;
    }

    pre {
      background: rgba(0,0,0,0.1);
      padding: 15px;
      border-radius: 5px;
      overflow-x: auto;
      color: #333;
      font-size: 13px;
      line-height: 1.5;
      margin: 0;
    }
  `,
  jsCode: `
    const result = document.getElementById('result');
    const output = document.getElementById('output');
    const text = document.getElementById('text');
    const find = document.getElementById('find');
    const replace = document.getElementById('replace');

    document.getElementById('replaceBtn').addEventListener('click', () => {
      const str = text.value;
      const findStr = find.value;
      const replaceStr = replace.value;
      const replaced = str.replace(findStr, replaceStr);
      
      result.textContent = \`const str = '\${str}';
const replaced = str.replace('\${findStr}', '\${replaceStr}');

Result: '\${replaced}'

✅ Replaces FIRST occurrence only
✅ Returns new string
✅ Original unchanged
✅ Case sensitive\`;
      
      output.textContent = \`✅ replace()
Input: '\${str}'
Find: '\${findStr}'
Replace: '\${replaceStr}'
Result: '\${replaced}'
(Only first replaced)\`;
      console.log('replace:', replaced);
    });

    document.getElementById('replaceAllBtn').addEventListener('click', () => {
      const str = text.value;
      const findStr = find.value;
      const replaceStr = replace.value;
      const replaced = str.replaceAll(findStr, replaceStr);
      
      result.textContent = \`const str = '\${str}';
const replaced = str.replaceAll('\${findStr}', '\${replaceStr}');

Result: '\${replaced}'

✅ Replaces ALL occurrences
✅ Returns new string
✅ Original unchanged
✅ Case sensitive\`;
      
      output.textContent = \`✅ replaceAll()
Input: '\${str}'
Find: '\${findStr}'
Replace: '\${replaceStr}'
Result: '\${replaced}'
(All replaced)\`;
      console.log('replaceAll:', replaced);
    });

    document.getElementById('regexBtn').addEventListener('click', () => {
      const str = text.value;
      const findStr = find.value;
      const replaceStr = replace.value;
      const replaced = str.replace(new RegExp(findStr, 'g'), replaceStr);
      
      result.textContent = \`const str = '\${str}';
const replaced = str.replace(
  new RegExp('\${findStr}', 'g'),
  '\${replaceStr}'
);

Result: '\${replaced}'

✅ Regex with /g flag
✅ Replaces all matches
✅ More powerful than replaceAll
✅ Supports patterns\`;
      
      output.textContent = \`✅ Regex replace(/g)
Input: '\${str}'
Pattern: /\${findStr}/g
Replace: '\${replaceStr}'
Result: '\${replaced}'\`;
      console.log('regex replace:', replaced);
    });

    document.getElementById('caseBtn').addEventListener('click', () => {
      const str = text.value;
      const findStr = find.value;
      const replaceStr = replace.value;
      const replaced = str.replace(
        new RegExp(findStr, 'gi'),
        replaceStr
      );
      
      result.textContent = \`const str = '\${str}';
const replaced = str.replace(
  new RegExp('\${findStr}', 'gi'),
  '\${replaceStr}'
);

Result: '\${replaced}'

✅ Regex with /gi flags
✅ g = global (all)
✅ i = case insensitive
✅ Matches any case\`;
      
      output.textContent = \`✅ Case Insensitive (/gi)
Input: '\${str}'
Pattern: /\${findStr}/gi
Replace: '\${replaceStr}'
Result: '\${replaced}'
(Case ignored)\`;
      console.log('case insensitive:', replaced);
    });

    console.log('🔀 replace & replaceAll ready!');
  `
},


// ============================================
// BATCH 10: TOPIC 6 - OBJECT ACCESS
// ============================================

{
  topic: 'object-access',
  title: '🔑 Object Access',
  description: 'Dot notation and bracket notation property access',
  tags: ['objects', 'access', 'beginner'],
  difficulty: 'Beginner',
  htmlCode: `
    <div class="topic-container">
      <h2>🔑 Object Access</h2>
      
      <div class="code-section">
        <h3>Two Ways to Access Properties:</h3>
        <p>✅ <code>object.property</code> - Dot notation</p>
        <p>✅ <code>object['property']</code> - Bracket notation</p>
        <p>✅ Bracket allows dynamic keys</p>
        <p>✅ Both access same data</p>
      </div>

      <div class="button-group">
        <button id="dotBtn" class="btn">Dot Notation</button>
        <button id="bracketBtn" class="btn">Bracket Notation</button>
        <button id="dynamicBtn" class="btn">Dynamic Access</button>
        <button id="methodBtn" class="btn">Call Method</button>
      </div>

      <div class="result-section">
        <h3>Code:</h3>
        <pre id="result"></pre>
      </div>

      <div class="output-section">
        <h3>Output:</h3>
        <pre id="output"></pre>
      </div>
    </div>
  `,
  cssCode: `
    .topic-container {
      max-width: 900px;
      margin: 0 auto;
      padding: 20px;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%);
      border-radius: 10px;
      color: #fff;
    }

    h2 {
      text-align: center;
      margin-bottom: 30px;
      font-size: 2.5em;
      text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
    }

    .code-section {
      background: rgba(255,255,255,0.1);
      padding: 15px;
      margin: 15px 0;
      border-left: 4px solid #ffd700;
      border-radius: 5px;
      backdrop-filter: blur(10px);
    }

    .code-section h3 {
      margin-top: 0;
      color: #ffd700;
    }

    .code-section p {
      margin: 8px 0;
      line-height: 1.6;
    }

    code {
      background: rgba(0,0,0,0.2);
      padding: 2px 6px;
      border-radius: 3px;
      font-family: 'Courier New', monospace;
    }

    .button-group {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 10px;
      margin: 20px 0;
    }

    .btn {
      padding: 12px 20px;
      background: #ffd700;
      color: #333;
      border: none;
      border-radius: 5px;
      font-weight: bold;
      cursor: pointer;
      transition: all 0.3s ease;
      font-size: 14px;
    }

    .btn:hover {
      background: #ffed4e;
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(0,0,0,0.3);
    }

    .result-section, .output-section {
      background: rgba(0,0,0,0.2);
      padding: 15px;
      margin: 15px 0;
      border-radius: 5px;
      backdrop-filter: blur(10px);
    }

    .result-section h3, .output-section h3 {
      margin-top: 0;
      color: #ffd700;
    }

    pre {
      background: rgba(0,0,0,0.3);
      padding: 15px;
      border-radius: 5px;
      overflow-x: auto;
      color: #fff;
      font-size: 13px;
      line-height: 1.5;
      margin: 0;
    }
  `,
  jsCode: `
    const result = document.getElementById('result');
    const output = document.getElementById('output');

    const person = {
      name: 'John',
      age: 30,
      city: 'New York',
      email: 'john@example.com',
      greet() {
        return \`Hello, I'm \${this.name}!\`;
      }
    };

    document.getElementById('dotBtn').addEventListener('click', () => {
      const name = person.name;
      const age = person.age;
      const city = person.city;
      
      result.textContent = \`const person = {
  name: 'John',
  age: 30,
  city: 'New York'
};

const name = person.name;
const age = person.age;
const city = person.city;

Results:
name: '\${name}'
age: \${age}
city: '\${city}'

✅ Dot notation
✅ Clean and readable
✅ Use for known properties\`;
      
      output.textContent = \`✅ Dot Notation
person.name = '\${name}'
person.age = \${age}
person.city = '\${city}'\`;
      console.log('Dot notation:', name, age, city);
    });

    document.getElementById('bracketBtn').addEventListener('click', () => {
      const name = person['name'];
      const age = person['age'];
      const city = person['city'];
      
      result.textContent = \`const person = {
  name: 'John',
  age: 30,
  city: 'New York'
};

const name = person['name'];
const age = person['age'];
const city = person['city'];

Results:
name: '\${name}'
age: \${age}
city: '\${city}'

✅ Bracket notation
✅ Works like dot notation
✅ Allows dynamic keys\`;
      
      output.textContent = \`✅ Bracket Notation
person['name'] = '\${name}'
person['age'] = \${age}
person['city'] = '\${city}'\`;
      console.log('Bracket notation:', name, age, city);
    });

    document.getElementById('dynamicBtn').addEventListener('click', () => {
      const key = 'email';
      const value = person[key];
      
      result.textContent = \`const person = { ... };
const key = 'email';
const value = person[key];

Result: '\${value}'

✅ Dynamic property access
✅ Key stored in variable
✅ Bracket notation only
✅ Very powerful!\`;
      
      output.textContent = \`✅ Dynamic Access
key = '\${key}'
person[key] = '\${value}'
(Access with variable)\`;
      console.log('Dynamic access:', value);
    });

    document.getElementById('methodBtn').addEventListener('click', () => {
      const greeting = person.greet();
      
      result.textContent = \`const person = {
  name: 'John',
  greet() {
    return \\\`Hello, I'm \\\${this.name}!\\\`;
  }
};

const greeting = person.greet();

Result: '\${greeting}'

✅ Call object methods
✅ Use dot notation
✅ 'this' refers to object
✅ Methods are functions\`;
      
      output.textContent = \`✅ Method Call
person.greet()
Result: '\${greeting}'\`;
      console.log('Method call:', greeting);
    });

    console.log('🔑 Object access ready!');
  `
},


// ============================================
// BATCH 10: TOPIC 7 - OBJECT SHORTHAND
// ============================================

{
  topic: 'object-shorthand',
  title: '⚡ Object Shorthand',
  description: 'Shorthand property and method syntax in ES6',
  tags: ['objects', 'es6', 'syntax', 'beginner'],
  difficulty: 'Beginner',
  htmlCode: `
    <div class="topic-container">
      <h2>⚡ Object Shorthand</h2>
      
      <div class="code-section">
        <h3>ES6 Shorthand Syntax:</h3>
        <p>✅ <code>{ name }</code> instead of <code>{ name: name }</code></p>
        <p>✅ <code>method() {}</code> instead of <code>method: function() {}</code></p>
        <p>✅ <code>[key]: value</code> - Computed properties</p>
        <p>✅ Cleaner, more readable code</p>
      </div>

      <div class="button-group">
        <button id="propertyBtn" class="btn">Property Shorthand</button>
        <button id="methodBtn" class="btn">Method Shorthand</button>
        <button id="computedBtn" class="btn">Computed Properties</button>
        <button id="compareBtn" class="btn">Compare</button>
      </div>

      <div class="result-section">
        <h3>Code:</h3>
        <pre id="result"></pre>
      </div>

      <div class="output-section">
        <h3>Output:</h3>
        <pre id="output"></pre>
      </div>
    </div>
  `,
  cssCode: `
    .topic-container {
      max-width: 900px;
      margin: 0 auto;
      padding: 20px;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
      border-radius: 10px;
      color: #333;
    }

    h2 {
      text-align: center;
      margin-bottom: 30px;
      font-size: 2.5em;
      text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
      color: #333;
    }

    .code-section {
      background: rgba(255,255,255,0.5);
      padding: 15px;
      margin: 15px 0;
      border-left: 4px solid #fa709a;
      border-radius: 5px;
      backdrop-filter: blur(10px);
    }

    .code-section h3 {
      margin-top: 0;
      color: #fa709a;
    }

    .code-section p {
      margin: 8px 0;
      line-height: 1.6;
      color: #333;
    }

    code {
      background: rgba(0,0,0,0.1);
      padding: 2px 6px;
      border-radius: 3px;
      font-family: 'Courier New', monospace;
    }

    .button-group {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 10px;
      margin: 20px 0;
    }

    .btn {
      padding: 12px 20px;
      background: #fa709a;
      color: white;
      border: none;
      border-radius: 5px;
      font-weight: bold;
      cursor: pointer;
      transition: all 0.3s ease;
      font-size: 14px;
    }

    .btn:hover {
      background: #f08a8a;
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(0,0,0,0.2);
    }

    .result-section, .output-section {
      background: rgba(255,255,255,0.3);
      padding: 15px;
      margin: 15px 0;
      border-radius: 5px;
      backdrop-filter: blur(10px);
    }

    .result-section h3, .output-section h3 {
      margin-top: 0;
      color: #fa709a;
    }

    pre {
      background: rgba(0,0,0,0.1);
      padding: 15px;
      border-radius: 5px;
      overflow-x: auto;
      color: #333;
      font-size: 13px;
      line-height: 1.5;
      margin: 0;
    }
  `,
  jsCode: `
    const result = document.getElementById('result');
    const output = document.getElementById('output');

    document.getElementById('propertyBtn').addEventListener('click', () => {
      const name = 'Alice';
      const age = 25;
      const city = 'Boston';
      
      // Shorthand
      const shorthand = { name, age, city };
      
      // Long form
      const longform = { name: name, age: age, city: city };
      
      result.textContent = \`// Shorthand (ES6)
const name = 'Alice';
const age = 25;
const city = 'Boston';
const obj = { name, age, city };

// Long form (ES5)
const obj = { 
  name: name, 
  age: age, 
  city: city 
};

Both create same object!

✅ Shorthand cleaner
✅ Same result
✅ Modern JavaScript\`;
      
      output.textContent = \`✅ Property Shorthand
Shorthand: { name, age, city }
Result: {
  name: '\${shorthand.name}',
  age: \${shorthand.age},
  city: '\${shorthand.city}'
}\`;
      console.log('Shorthand:', shorthand);
    });

    document.getElementById('methodBtn').addEventListener('click', () => {
      // Shorthand
      const shorthand = {
        name: 'Bob',
        greet() {
          return \`Hi, I'm \${this.name}\`;
        }
      };
      
      // Long form
      const longform = {
        name: 'Bob',
        greet: function() {
          return \`Hi, I'm \${this.name}\`;
        }
      };
      
      result.textContent = \`// Shorthand (ES6)
const obj = {
  name: 'Bob',
  greet() {
    return \\\`Hi, I'm \\\${this.name}\\\`;
  }
};

// Long form (ES5)
const obj = {
  name: 'Bob',
  greet: function() {
    return \\\`Hi, I'm \\\${this.name}\\\`;
  }
};

Both work the same!

✅ No 'function' keyword
✅ Cleaner syntax
✅ Same functionality\`;
      
      output.textContent = \`✅ Method Shorthand
Shorthand: greet() { ... }
Result: '\${shorthand.greet()}'
Long form: greet: function() { ... }
Result: '\${longform.greet()}'\`;
      console.log('Method shorthand:', shorthand.greet());
    });

    document.getElementById('computedBtn').addEventListener('click', () => {
      const key = 'status';
      const value = 'active';
      
      const obj = { [key]: value };
      
      result.textContent = \`const key = 'status';
const value = 'active';
const obj = { [key]: value };

Result: { status: 'active' }

✅ Computed property names
✅ Key from variable
✅ Brackets [ ] syntax
✅ Very powerful!\`;
      
      output.textContent = \`✅ Computed Properties
key = '\${key}'
value = '\${value}'
obj = { [\${key}]: '\${value}' }
Result: { \${key}: '\${value}' }\`;
      console.log('Computed:', obj);
    });

    document.getElementById('compareBtn').addEventListener('click', () => {
      const name = 'Charlie';
      const age = 35;
      
      // Shorthand
      const shorthand = { name, age };
      
      // Long form
      const longform = { name: name, age: age };
      
      result.textContent = \`// Shorthand
const obj = { name, age };

// Long form
const obj = { name: name, age: age };

// Both create:
{
  name: '\${shorthand.name}',
  age: \${shorthand.age}
}

✅ Identical results
✅ Shorthand preferred
✅ Modern best practice\`;
      
      output.textContent = \`✅ Compare
Shorthand: { name, age }
Long form: { name: name, age: age }
Same object: \${JSON.stringify(shorthand) === JSON.stringify(longform) ? '✅ Yes' : '❌ No'}\`;
      console.log('Compare:', shorthand, longform);
    });

    console.log('⚡ Object shorthand ready!');
  `
},


// ============================================
// BATCH 10: TOPIC 8 - COMPUTED PROPERTIES
// ============================================

{
  topic: 'computed-properties',
  title: '🔧 Computed Properties',
  description: 'Dynamic property names using [expression] syntax',
  tags: ['objects', 'dynamic', 'advanced'],
  difficulty: 'Intermediate',
  htmlCode: `
    <div class="topic-container">
      <h2>🔧 Computed Properties</h2>
      
      <div class="code-section">
        <h3>Dynamic Property Names:</h3>
        <p>✅ <code>{ [expression]: value }</code> - Computed key</p>
        <p>✅ Key from variable or expression</p>
        <p>✅ Powerful for dynamic objects</p>
        <p>✅ Brackets [ ] syntax</p>
      </div>

      <input type="text" id="keyInput" value="color" placeholder="Property name" style="width: 48%; padding: 10px; margin: 10px 1%; border-radius: 5px; border: 2px solid #667eea;">
      <input type="text" id="valueInput" value="blue" placeholder="Value" style="width: 48%; padding: 10px; margin: 10px 1%; border-radius: 5px; border: 2px solid #667eea;">

      <div class="button-group">
        <button id="createBtn" class="btn">Create Object</button>
        <button id="dynamicBtn" class="btn">Dynamic Key</button>
        <button id="expressionBtn" class="btn">Expression</button>
        <button id="accessBtn" class="btn">Access</button>
      </div>

      <div class="result-section">
        <h3>Code:</h3>
        <pre id="result"></pre>
      </div>

      <div class="output-section">
        <h3>Output:</h3>
        <pre id="output"></pre>
      </div>
    </div>
  `,
  cssCode: `
    .topic-container {
      max-width: 900px;
      margin: 0 auto;
      padding: 20px;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      border-radius: 10px;
      color: #fff;
    }

    h2 {
      text-align: center;
      margin-bottom: 30px;
      font-size: 2.5em;
      text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
    }

    .code-section {
      background: rgba(255,255,255,0.1);
      padding: 15px;
      margin: 15px 0;
      border-left: 4px solid #ffd700;
      border-radius: 5px;
      backdrop-filter: blur(10px);
    }

    .code-section h3 {
      margin-top: 0;
      color: #ffd700;
    }

    .code-section p {
      margin: 8px 0;
      line-height: 1.6;
    }

    code {
      background: rgba(0,0,0,0.2);
      padding: 2px 6px;
      border-radius: 3px;
      font-family: 'Courier New', monospace;
    }

    input {
      padding: 10px;
      margin: 10px 0;
      border-radius: 5px;
      border: 2px solid #ffd700;
      font-size: 14px;
    }

    .button-group {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 10px;
      margin: 20px 0;
    }

    .btn {
      padding: 12px 20px;
      background: #ffd700;
      color: #333;
      border: none;
      border-radius: 5px;
      font-weight: bold;
      cursor: pointer;
      transition: all 0.3s ease;
      font-size: 14px;
    }

    .btn:hover {
      background: #ffed4e;
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(0,0,0,0.3);
    }

    .result-section, .output-section {
      background: rgba(0,0,0,0.2);
      padding: 15px;
      margin: 15px 0;
      border-radius: 5px;
      backdrop-filter: blur(10px);
    }

    .result-section h3, .output-section h3 {
      margin-top: 0;
      color: #ffd700;
    }

    pre {
      background: rgba(0,0,0,0.3);
      padding: 15px;
      border-radius: 5px;
      overflow-x: auto;
      color: #fff;
      font-size: 13px;
      line-height: 1.5;
      margin: 0;
    }
  `,
  jsCode: `
    const result = document.getElementById('result');
    const output = document.getElementById('output');
    const keyInput = document.getElementById('keyInput');
    const valueInput = document.getElementById('valueInput');

    let obj = {};

    document.getElementById('createBtn').addEventListener('click', () => {
      const key = keyInput.value;
      const value = valueInput.value;
      
      obj = { [key]: value };
      
      result.textContent = \`const key = '\${key}';
const value = '\${value}';
const obj = { [key]: value };

Result: { \${key}: '\${value}' }

✅ Computed property
✅ Key from variable
✅ Brackets [ ] syntax
✅ Dynamic creation\`;
      
      output.textContent = \`✅ Create Object
Key: '\${key}'
Value: '\${value}'
Object: { \${key}: '\${value}' }\`;
      console.log('Created:', obj);
    });

    document.getElementById('dynamicBtn').addEventListener('click', () => {
      const timestamp = Date.now();
      const key = 'user_' + timestamp;
      
      obj[key] = 'dynamic value';
      
      result.textContent = \`const timestamp = Date.now();
const key = 'user_' + timestamp;
obj[key] = 'dynamic value';

Key: '\${key}'
Value: 'dynamic value'

✅ Dynamic key creation
✅ Unique identifiers
✅ Timestamp based\`;
      
      output.textContent = \`✅ Dynamic Key
Timestamp: \${timestamp}
Key: '\${key}'
Value: 'dynamic value'
Object: { \${key}: 'dynamic value' }\`;
      console.log('Dynamic:', obj);
    });

    document.getElementById('expressionBtn').addEventListener('click', () => {
      const prefix = 'item';
      const index = 1;
      
      const newObj = {
        [\`\${prefix}_\${index}\`]: 'first',
        [\`\${prefix}_\${index + 1}\`]: 'second',
        [\`\${prefix}_\${index + 2}\`]: 'third'
      };
      
      result.textContent = \`const prefix = 'item';
const index = 1;

const obj = {
  [\\\`\\\${prefix}_\\\${index}\\\`]: 'first',
  [\\\`\\\${prefix}_\\\${index + 1}\\\`]: 'second',
  [\\\`\\\${prefix}_\\\${index + 2}\\\`]: 'third'
};

✅ Template literals in keys
✅ Expressions evaluated
✅ Multiple computed keys
✅ Very flexible!\`;
      
      output.textContent = \`✅ Expression Keys
Object: {
  item_1: 'first',
  item_2: 'second',
  item_3: 'third'
}\`;
      console.log('Expression:', newObj);
    });

    document.getElementById('accessBtn').addEventListener('click', () => {
      const key = keyInput.value;
      const value = obj[key];
      
      result.textContent = \`const key = '\${key}';
const value = obj[key];

Result: '\${value}'

✅ Access computed property
✅ Use bracket notation
✅ Key from variable
✅ Same as creation\`;
      
      output.textContent = \`✅ Access
Key: '\${key}'
obj[key] = '\${value}'
(Access with variable)\`;
      console.log('Access:', value);
    });

    console.log('🔧 Computed properties ready!');
  `
},


// ============================================
// BATCH 11: TOPIC 9 - SETATTRIBUTE
// ============================================

{
  topic: 'setAttribute',
  title: '🏷️ setAttribute',
  description: 'Read and write element attributes',
  tags: ['dom', 'attributes', 'beginner'],
  difficulty: 'Beginner',
  htmlCode: `
    <div class="topic-container">
      <h2>🏷️ setAttribute</h2>
      
      <div class="code-section">
        <h3>Manage Element Attributes:</h3>
        <p>✅ <code>setAttribute(name, value)</code> - Set attribute</p>
        <p>✅ <code>getAttribute(name)</code> - Get attribute</p>
        <p>✅ <code>removeAttribute(name)</code> - Remove attribute</p>
        <p>✅ <code>hasAttribute(name)</code> - Check if exists</p>
      </div>

      <input type="text" id="attrName" value="title" placeholder="Attribute name" style="width: 48%; padding: 10px; margin: 10px 1%; border-radius: 5px; border: 2px solid #667eea;">
      <input type="text" id="attrValue" value="Hello World!" placeholder="Attribute value" style="width: 48%; padding: 10px; margin: 10px 1%; border-radius: 5px; border: 2px solid #667eea;">

      <div id="testElement" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 10px; margin: 20px 0; text-align: center; font-weight: bold;">
        Test Element
      </div>

      <div class="button-group">
        <button id="setBtn" class="btn">setAttribute()</button>
        <button id="getBtn" class="btn">getAttribute()</button>
        <button id="removeBtn" class="btn">removeAttribute()</button>
        <button id="hasBtn" class="btn">hasAttribute()</button>
      </div>

      <div class="result-section">
        <h3>Code:</h3>
        <pre id="result"></pre>
      </div>

      <div class="output-section">
        <h3>Output:</h3>
        <pre id="output"></pre>
      </div>
    </div>
  `,
  cssCode: `
    .topic-container {
      max-width: 900px;
      margin: 0 auto;
      padding: 20px;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      border-radius: 10px;
      color: #fff;
    }

    h2 {
      text-align: center;
      margin-bottom: 30px;
      font-size: 2.5em;
      text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
    }

    .code-section {
      background: rgba(255,255,255,0.1);
      padding: 15px;
      margin: 15px 0;
      border-left: 4px solid #ffd700;
      border-radius: 5px;
      backdrop-filter: blur(10px);
    }

    .code-section h3 {
      margin-top: 0;
      color: #ffd700;
    }

    .code-section p {
      margin: 8px 0;
      line-height: 1.6;
    }

    code {
      background: rgba(0,0,0,0.2);
      padding: 2px 6px;
      border-radius: 3px;
      font-family: 'Courier New', monospace;
    }

    input {
      padding: 10px;
      margin: 10px 0;
      border-radius: 5px;
      border: 2px solid #ffd700;
      font-size: 14px;
    }

    .button-group {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 10px;
      margin: 20px 0;
    }

    .btn {
      padding: 12px 20px;
      background: #ffd700;
      color: #333;
      border: none;
      border-radius: 5px;
      font-weight: bold;
      cursor: pointer;
      transition: all 0.3s ease;
      font-size: 14px;
    }

    .btn:hover {
      background: #ffed4e;
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(0,0,0,0.3);
    }

    .result-section, .output-section {
      background: rgba(0,0,0,0.2);
      padding: 15px;
      margin: 15px 0;
      border-radius: 5px;
      backdrop-filter: blur(10px);
    }

    .result-section h3, .output-section h3 {
      margin-top: 0;
      color: #ffd700;
    }

    pre {
      background: rgba(0,0,0,0.3);
      padding: 15px;
      border-radius: 5px;
      overflow-x: auto;
      color: #fff;
      font-size: 13px;
      line-height: 1.5;
      margin: 0;
    }
  `,
  jsCode: `
    const result = document.getElementById('result');
    const output = document.getElementById('output');
    const testElement = document.getElementById('testElement');
    const attrName = document.getElementById('attrName');
    const attrValue = document.getElementById('attrValue');

    document.getElementById('setBtn').addEventListener('click', () => {
      const name = attrName.value;
      const value = attrValue.value;
      
      testElement.setAttribute(name, value);
      
      result.textContent = \`const element = document.getElementById('testElement');
const name = '\${name}';
const value = '\${value}';

element.setAttribute(name, value);

✅ Sets attribute on element
✅ Creates if not exists
✅ Updates if exists
✅ Any attribute name\`;
      
      output.textContent = \`✅ setAttribute()
Attribute: \${name}
Value: \${value}
Element now has: \${name}="\${value}"\`;
      console.log('setAttribute:', name, value);
    });

    document.getElementById('getBtn').addEventListener('click', () => {
      const name = attrName.value;
      const value = testElement.getAttribute(name);
      
      result.textContent = \`const element = document.getElementById('testElement');
const name = '\${name}';
const value = element.getAttribute(name);

Result: '\${value}'

✅ Gets attribute value
✅ Returns string
✅ Returns null if not exists
✅ Read-only operation\`;
      
      output.textContent = \`✅ getAttribute()
Attribute: \${name}
Value: '\${value}'
(null if not set)\`;
      console.log('getAttribute:', value);
    });

    document.getElementById('removeBtn').addEventListener('click', () => {
      const name = attrName.value;
      
      testElement.removeAttribute(name);
      
      result.textContent = \`const element = document.getElementById('testElement');
const name = '\${name}';

element.removeAttribute(name);

✅ Removes attribute
✅ No error if not exists
✅ Element still exists
✅ Attribute gone\`;
      
      output.textContent = \`✅ removeAttribute()
Removed: \${name}
Element: still exists
Attribute: removed\`;
      console.log('removeAttribute:', name);
    });

    document.getElementById('hasBtn').addEventListener('click', () => {
      const name = attrName.value;
      const has = testElement.hasAttribute(name);
      
      result.textContent = \`const element = document.getElementById('testElement');
const name = '\${name}';
const has = element.hasAttribute(name);

Result: \${has}

✅ Checks if attribute exists
✅ Returns boolean
✅ true or false
✅ Useful for conditions\`;
      
      output.textContent = \`✅ hasAttribute()
Attribute: \${name}
Exists: \${has}
\${has ? '✅ Yes' : '❌ No'}\`;
      console.log('hasAttribute:', has);
    });

    console.log('🏷️ setAttribute ready!');
  `
},


// ============================================
// BATCH 11: TOPIC 10 - STYLE PROPERTY
// ============================================

{
  topic: 'style-property',
  title: '🎨 style Property',
  description: 'Set inline styles directly via element.style',
  tags: ['dom', 'styling', 'beginner'],
  difficulty: 'Beginner',
  htmlCode: `
    <div class="topic-container">
      <h2>🎨 style Property</h2>
      
      <div class="code-section">
        <h3>Set Inline Styles:</h3>
        <p>✅ <code>element.style.property = 'value'</code></p>
        <p>✅ CSS properties in camelCase</p>
        <p>✅ Direct DOM manipulation</p>
        <p>✅ Overrides CSS rules</p>
      </div>

      <div id="testElement" style="background: #667eea; color: white; padding: 20px; border-radius: 10px; margin: 20px 0; text-align: center; font-weight: bold; transition: all 0.3s;">
        Style Me!
      </div>

      <div class="button-group">
        <button id="bgBtn" class="btn">Change Background</button>
        <button id="textBtn" class="btn">Change Text</button>
        <button id="sizeBtn" class="btn">Change Size</button>
        <button id="borderBtn" class="btn">Add Border</button>
        <button id="resetBtn" class="btn">Reset</button>
      </div>

      <div class="result-section">
        <h3>Code:</h3>
        <pre id="result"></pre>
      </div>

      <div class="output-section">
        <h3>Output:</h3>
        <pre id="output"></pre>
      </div>
    </div>
  `,
  cssCode: `
    .topic-container {
      max-width: 900px;
      margin: 0 auto;
      padding: 20px;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      border-radius: 10px;
      color: #fff;
    }

    h2 {
      text-align: center;
      margin-bottom: 30px;
      font-size: 2.5em;
      text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
    }

    .code-section {
      background: rgba(255,255,255,0.1);
      padding: 15px;
      margin: 15px 0;
      border-left: 4px solid #ffd700;
      border-radius: 5px;
      backdrop-filter: blur(10px);
    }

    .code-section h3 {
      margin-top: 0;
      color: #ffd700;
    }

    .code-section p {
      margin: 8px 0;
      line-height: 1.6;
    }

    code {
      background: rgba(0,0,0,0.2);
      padding: 2px 6px;
      border-radius: 3px;
      font-family: 'Courier New', monospace;
    }

    .button-group {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 10px;
      margin: 20px 0;
    }

    .btn {
      padding: 12px 20px;
      background: #ffd700;
      color: #333;
      border: none;
      border-radius: 5px;
      font-weight: bold;
      cursor: pointer;
      transition: all 0.3s ease;
      font-size: 14px;
    }

    .btn:hover {
      background: #ffed4e;
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(0,0,0,0.3);
    }

    .result-section, .output-section {
      background: rgba(0,0,0,0.2);
      padding: 15px;
      margin: 15px 0;
      border-radius: 5px;
      backdrop-filter: blur(10px);
    }

    .result-section h3, .output-section h3 {
      margin-top: 0;
      color: #ffd700;
    }

    pre {
      background: rgba(0,0,0,0.3);
      padding: 15px;
      border-radius: 5px;
      overflow-x: auto;
      color: #fff;
      font-size: 13px;
      line-height: 1.5;
      margin: 0;
    }
  `,
  jsCode: `
    const result = document.getElementById('result');
    const output = document.getElementById('output');
    const testElement = document.getElementById('testElement');

    document.getElementById('bgBtn').addEventListener('click', () => {
      const colors = ['#667eea', '#f5576c', '#4facfe', '#11998e', '#ffa726'];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      
      testElement.style.backgroundColor = randomColor;
      
      result.textContent = \`const element = document.getElementById('testElement');
const color = '\${randomColor}';

element.style.backgroundColor = color;

✅ Sets inline style
✅ CSS property in camelCase
✅ backgroundColor not background-color
✅ Overrides CSS rules\`;
      
      output.textContent = \`✅ Change Background
Color: \${randomColor}
Style: background-color: \${randomColor};\`;
      console.log('Background changed:', randomColor);
    });

    document.getElementById('textBtn').addEventListener('click', () => {
      const colors = ['#fff', '#ffd700', '#ffed4e', '#000'];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      
      testElement.style.color = randomColor;
      
      result.textContent = \`const element = document.getElementById('testElement');
const color = '\${randomColor}';

element.style.color = color;

✅ Sets text color
✅ CSS property: color
✅ Direct manipulation
✅ Immediate effect\`;
      
      output.textContent = \`✅ Change Text Color
Color: \${randomColor}
Style: color: \${randomColor};\`;
      console.log('Text color changed:', randomColor);
    });

    document.getElementById('sizeBtn').addEventListener('click', () => {
      const sizes = ['20px', '30px', '40px', '50px'];
      const randomSize = sizes[Math.floor(Math.random() * sizes.length)];
      
      testElement.style.fontSize = randomSize;
      testElement.style.padding = randomSize;
      
      result.textContent = \`const element = document.getElementById('testElement');
const size = '\${randomSize}';

element.style.fontSize = size;
element.style.padding = size;

✅ Multiple style changes
✅ fontSize in camelCase
✅ padding in camelCase
✅ All applied together\`;
      
      output.textContent = \`✅ Change Size
Font size: \${randomSize}
Padding: \${randomSize}
Styles applied!\`;
      console.log('Size changed:', randomSize);
    });

    document.getElementById('borderBtn').addEventListener('click', () => {
      testElement.style.border = '3px solid #ffd700';
      testElement.style.boxShadow = '0 5px 15px rgba(0,0,0,0.3)';
      
      result.textContent = \`const element = document.getElementById('testElement');

element.style.border = '3px solid #ffd700';
element.style.boxShadow = '0 5px 15px rgba(0,0,0,0.3)';

✅ Complex style values
✅ Multiple properties
✅ boxShadow in camelCase
✅ Full CSS support\`;
      
      output.textContent = \`✅ Add Border & Shadow
Border: 3px solid #ffd700
Shadow: 0 5px 15px rgba(0,0,0,0.3)
Styles applied!\`;
      console.log('Border & shadow added');
    });

    document.getElementById('resetBtn').addEventListener('click', () => {
      testElement.style.backgroundColor = '#667eea';
      testElement.style.color = '#fff';
      testElement.style.fontSize = '16px';
      testElement.style.padding = '20px';
      testElement.style.border = 'none';
      testElement.style.boxShadow = 'none';
      
      result.textContent = \`const element = document.getElementById('testElement');

element.style.backgroundColor = '#667eea';
element.style.color = '#fff';
element.style.fontSize = '16px';
element.style.padding = '20px';
element.style.border = 'none';
element.style.boxShadow = 'none';

✅ Reset all styles
✅ Back to original
✅ Multiple properties
✅ Clean reset\`;
      
      output.textContent = \`✅ Reset Styles
All styles reset to original
Element restored!\`;
      console.log('Styles reset');
    });

    console.log('🎨 style property ready!');
  `
},


// ============================================
// BATCH 11: TOPIC 11 - CREATEELEMENT
// ============================================

{
  topic: 'createElement',
  title: '✨ createElement',
  description: 'Create new DOM elements with document.createElement',
  tags: ['dom', 'creation', 'beginner'],
  difficulty: 'Beginner',
  htmlCode: `
    <div class="topic-container">
      <h2>✨ createElement</h2>
      
      <div class="code-section">
        <h3>Create New Elements:</h3>
        <p>✅ <code>document.createElement(tagName)</code></p>
        <p>✅ Creates element in memory</p>
        <p>✅ Not added to DOM yet</p>
        <p>✅ Must append to add to page</p>
      </div>

      <input type="text" id="tagInput" value="div" placeholder="Tag name" style="width: 48%; padding: 10px; margin: 10px 1%; border-radius: 5px; border: 2px solid #4facfe;">
      <input type="text" id="textInput" value="New Element" placeholder="Text content" style="width: 48%; padding: 10px; margin: 10px 1%; border-radius: 5px; border: 2px solid #4facfe;">

      <div class="button-group">
        <button id="createBtn" class="btn">Create Element</button>
        <button id="createMultiBtn" class="btn">Create Multiple</button>
        <button id="createListBtn" class="btn">Create List</button>
        <button id="clearBtn" class="btn">Clear All</button>
      </div>

      <div id="container" style="background: rgba(255,255,255,0.1); padding: 15px; margin: 15px 0; border-radius: 5px; min-height: 50px;">
        <!-- Elements will be added here -->
      </div>

      <div class="result-section">
        <h3>Code:</h3>
        <pre id="result"></pre>
      </div>

      <div class="output-section">
        <h3>Output:</h3>
        <pre id="output"></pre>
      </div>
    </div>
  `,
  cssCode: `
    .topic-container {
      max-width: 900px;
      margin: 0 auto;
      padding: 20px;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
      border-radius: 10px;
      color: #fff;
    }

    h2 {
      text-align: center;
      margin-bottom: 30px;
      font-size: 2.5em;
      text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
    }

    .code-section {
      background: rgba(255,255,255,0.1);
      padding: 15px;
      margin: 15px 0;
      border-left: 4px solid #ffd700;
      border-radius: 5px;
      backdrop-filter: blur(10px);
    }

    .code-section h3 {
      margin-top: 0;
      color: #ffd700;
    }

    .code-section p {
      margin: 8px 0;
      line-height: 1.6;
    }

    code {
      background: rgba(0,0,0,0.2);
      padding: 2px 6px;
      border-radius: 3px;
      font-family: 'Courier New', monospace;
    }

    input {
      padding: 10px;
      margin: 10px 0;
      border-radius: 5px;
      border: 2px solid #ffd700;
      font-size: 14px;
    }

    .button-group {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 10px;
      margin: 20px 0;
    }

    .btn {
      padding: 12px 20px;
      background: #ffd700;
      color: #333;
      border: none;
      border-radius: 5px;
      font-weight: bold;
      cursor: pointer;
      transition: all 0.3s ease;
      font-size: 14px;
    }

    .btn:hover {
      background: #ffed4e;
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(0,0,0,0.3);
    }

    .result-section, .output-section {
      background: rgba(0,0,0,0.2);
      padding: 15px;
      margin: 15px 0;
      border-radius: 5px;
      backdrop-filter: blur(10px);
    }

    .result-section h3, .output-section h3 {
      margin-top: 0;
      color: #ffd700;
    }

    pre {
      background: rgba(0,0,0,0.3);
      padding: 15px;
      border-radius: 5px;
      overflow-x: auto;
      color: #fff;
      font-size: 13px;
      line-height: 1.5;
      margin: 0;
    }

    #container > * {
      background: rgba(255,255,255,0.2);
      padding: 10px;
      margin: 5px 0;
      border-radius: 5px;
      border-left: 3px solid #ffd700;
    }
  `,
  jsCode: `
    const result = document.getElementById('result');
    const output = document.getElementById('output');
    const container = document.getElementById('container');
    const tagInput = document.getElementById('tagInput');
    const textInput = document.getElementById('textInput');

    document.getElementById('createBtn').addEventListener('click', () => {
      const tag = tagInput.value || 'div';
      const text = textInput.value || 'New Element';
      
      const element = document.createElement(tag);
      element.textContent = text;
      element.style.padding = '10px';
      element.style.background = 'rgba(255,255,255,0.2)';
      element.style.borderRadius = '5px';
      element.style.marginBottom = '5px';
      
      container.appendChild(element);
      
      result.textContent = \`const element = document.createElement('\${tag}');
element.textContent = '\${text}';
element.style.padding = '10px';

container.appendChild(element);

✅ Create element
✅ Set properties
✅ Add to DOM
✅ Now visible!\`;
      
      output.textContent = \`✅ Created <\${tag}>
Text: \${text}
Added to container
Element visible!\`;
      console.log('Element created:', element);
    });

    document.getElementById('createMultiBtn').addEventListener('click', () => {
      const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#6c5ce7'];
      
      for (let i = 0; i < 3; i++) {
        const div = document.createElement('div');
        div.textContent = \`Item \${i + 1}\`;
        div.style.background = colors[i];
        div.style.color = '#fff';
        div.style.padding = '10px';
        div.style.borderRadius = '5px';
        div.style.marginBottom = '5px';
        
        container.appendChild(div);
      }
      
      result.textContent = \`for (let i = 0; i < 3; i++) {
  const div = document.createElement('div');
  div.textContent = \\\`Item \\\${i + 1}\\\`;
  div.style.background = colors[i];
  
  container.appendChild(div);
}

✅ Loop to create multiple
✅ Each with unique content
✅ Different colors
✅ All added to DOM\`;
      
      output.textContent = \`✅ Created 3 Elements
Item 1, Item 2, Item 3
All added to container
Loop created them!\`;
      console.log('Multiple elements created');
    });

    document.getElementById('createListBtn').addEventListener('click', () => {
      const ul = document.createElement('ul');
      ul.style.color = '#fff';
      
      const items = ['JavaScript', 'HTML', 'CSS', 'DOM'];
      
      items.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        li.style.marginBottom = '5px';
        ul.appendChild(li);
      });
      
      container.appendChild(ul);
      
      result.textContent = \`const ul = document.createElement('ul');
const items = ['JavaScript', 'HTML', 'CSS', 'DOM'];

items.forEach(item => {
  const li = document.createElement('li');
  li.textContent = item;
  ul.appendChild(li);
});

container.appendChild(ul);

✅ Create list structure
✅ Nested elements
✅ forEach loop
✅ Complex DOM\`;
      
      output.textContent = \`✅ Created List
<ul>
  <li>JavaScript</li>
  <li>HTML</li>
  <li>CSS</li>
  <li>DOM</li>
</ul>\`;
      console.log('List created');
    });

    document.getElementById('clearBtn').addEventListener('click', () => {
      container.innerHTML = '';
      
      result.textContent = \`container.innerHTML = '';

✅ Clear all elements
✅ Empty container
✅ Remove all children
✅ Start fresh\`;
      
      output.textContent = \`✅ Cleared
All elements removed
Container empty!\`;
      console.log('Container cleared');
    });

    console.log('✨ createElement ready!');
  `
},


// ============================================
// BATCH 11: TOPIC 12 - APPENDCHILD
// ============================================

{
  topic: 'appendChild',
  title: '📌 appendChild',
  description: 'Attach new or existing nodes as children',
  tags: ['dom', 'manipulation', 'beginner'],
  difficulty: 'Beginner',
  htmlCode: `
    <div class="topic-container">
      <h2>📌 appendChild</h2>
      
      <div class="code-section">
        <h3>Add Child Elements:</h3>
        <p>✅ <code>parent.appendChild(child)</code></p>
        <p>✅ Adds as last child</p>
        <p>✅ Moves existing elements</p>
        <p>✅ Returns the appended node</p>
      </div>

      <input type="text" id="textInput" value="New Item" placeholder="Item text" style="width: 100%; padding: 10px; margin: 10px 0; border-radius: 5px; border: 2px solid #a8edea;">

      <div class="button-group">
        <button id="appendBtn" class="btn">Append Item</button>
        <button id="appendMultiBtn" class="btn">Append Multiple</button>
        <button id="moveBtn" class="btn">Move Element</button>
        <button id="clearBtn" class="btn">Clear</button>
      </div>

      <div id="container" style="background: rgba(255,255,255,0.2); padding: 15px; margin: 15px 0; border-radius: 5px; min-height: 50px; border: 2px dashed #667eea;">
        <div style="color: #667eea; text-align: center; font-style: italic;">Items will appear here</div>
      </div>

      <div class="result-section">
        <h3>Code:</h3>
        <pre id="result"></pre>
      </div>

      <div class="output-section">
        <h3>Output:</h3>
        <pre id="output"></pre>
      </div>
    </div>
  `,
  cssCode: `
    .topic-container {
      max-width: 900px;
      margin: 0 auto;
      padding: 20px;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
      border-radius: 10px;
      color: #333;
    }

    h2 {
      text-align: center;
      margin-bottom: 30px;
      font-size: 2.5em;
      text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
      color: #333;
    }

    .code-section {
      background: rgba(255,255,255,0.5);
      padding: 15px;
      margin: 15px 0;
      border-left: 4px solid #667eea;
      border-radius: 5px;
      backdrop-filter: blur(10px);
    }

    .code-section h3 {
      margin-top: 0;
      color: #667eea;
    }

    .code-section p {
      margin: 8px 0;
      line-height: 1.6;
      color: #333;
    }

    code {
      background: rgba(0,0,0,0.1);
      padding: 2px 6px;
      border-radius: 3px;
      font-family: 'Courier New', monospace;
    }

    input {
      padding: 10px;
      margin: 10px 0;
      border-radius: 5px;
      border: 2px solid #667eea;
      font-size: 14px;
    }

    .button-group {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 10px;
      margin: 20px 0;
    }

    .btn {
      padding: 12px 20px;
      background: #667eea;
      color: white;
      border: none;
      border-radius: 5px;
      font-weight: bold;
      cursor: pointer;
      transition: all 0.3s ease;
      font-size: 14px;
    }

    .btn:hover {
      background: #5568d3;
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(0,0,0,0.2);
    }

    .result-section, .output-section {
      background: rgba(255,255,255,0.3);
      padding: 15px;
      margin: 15px 0;
      border-radius: 5px;
      backdrop-filter: blur(10px);
    }

    .result-section h3, .output-section h3 {
      margin-top: 0;
      color: #667eea;
    }

    pre {
      background: rgba(0,0,0,0.1);
      padding: 15px;
      border-radius: 5px;
      overflow-x: auto;
      color: #333;
      font-size: 13px;
      line-height: 1.5;
      margin: 0;
    }

    #container > div {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 10px;
      margin: 5px 0;
      border-radius: 5px;
      animation: slideIn 0.3s ease;
    }

    @keyframes slideIn {
      from {
        opacity: 0;
        transform: translateY(-10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `,
  jsCode: `
    const result = document.getElementById('result');
    const output = document.getElementById('output');
    const container = document.getElementById('container');
    const textInput = document.getElementById('textInput');

    document.getElementById('appendBtn').addEventListener('click', () => {
      const text = textInput.value || 'New Item';
      
      const div = document.createElement('div');
      div.textContent = text;
      div.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
      div.style.color = '#fff';
      div.style.padding = '10px';
      div.style.borderRadius = '5px';
      div.style.marginBottom = '5px';
      
      container.appendChild(div);
      
      result.textContent = \`const div = document.createElement('div');
div.textContent = '\${text}';

const container = document.getElementById('container');
container.appendChild(div);

✅ Create element
✅ Append to container
✅ Added as last child
✅ Now visible!\`;
      
      output.textContent = \`✅ Appended
Text: \${text}
Added to container
As last child\`;
      console.log('Element appended:', div);
    });

    document.getElementById('appendMultiBtn').addEventListener('click', () => {
      const items = ['Item 1', 'Item 2', 'Item 3'];
      
      items.forEach(text => {
        const div = document.createElement('div');
        div.textContent = text;
        div.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
        div.style.color = '#fff';
        div.style.padding = '10px';
        div.style.borderRadius = '5px';
        div.style.marginBottom = '5px';
        
        container.appendChild(div);
      });
      
      result.textContent = \`const items = ['Item 1', 'Item 2', 'Item 3'];

items.forEach(text => {
  const div = document.createElement('div');
  div.textContent = text;
  
  container.appendChild(div);
});

✅ Loop through items
✅ Create each element
✅ Append each one
✅ All added in order\`;
      
      output.textContent = \`✅ Appended Multiple
Item 1
Item 2
Item 3
All added to container!\`;
      console.log('Multiple elements appended');
    });

    document.getElementById('moveBtn').addEventListener('click', () => {
      const firstChild = container.firstElementChild;
      
      if (firstChild && firstChild.textContent !== 'Items will appear here') {
        container.appendChild(firstChild);
        
        result.textContent = \`const firstChild = container.firstElementChild;
container.appendChild(firstChild);

✅ Move existing element
✅ Removes from old position
✅ Adds to end
✅ Reorders children\`;
        
        output.textContent = \`✅ Moved Element
First child moved to end
Element reordered
appendChild moves!\`;
        console.log('Element moved:', firstChild);
      }
    });

    document.getElementById('clearBtn').addEventListener('click', () => {
      container.innerHTML = '<div style="color: #667eea; text-align: center; font-style: italic;">Items will appear here</div>';
      
      result.textContent = \`container.innerHTML = '';

✅ Clear all children
✅ Empty container
✅ Remove all elements
✅ Start fresh\`;
      
      output.textContent = \`✅ Cleared
All elements removed
Container empty!\`;
      console.log('Container cleared');
    });

    console.log('📌 appendChild ready!');
  `
},


// ============================================
// BATCH 12: TOPIC 13 - REMOVECHILD
// ============================================

{
  topic: 'removeChild',
  title: '🗑️ removeChild',
  description: 'Remove a child node from its parent',
  tags: ['dom', 'removal', 'beginner'],
  difficulty: 'Beginner',
  htmlCode: `
    <div class="topic-container">
      <h2>🗑️ removeChild</h2>
      
      <div class="code-section">
        <h3>Remove Child Elements:</h3>
        <p>✅ <code>parent.removeChild(child)</code></p>
        <p>✅ Removes from DOM</p>
        <p>✅ Returns removed node</p>
        <p>✅ Can be re-added later</p>
      </div>

      <div class="button-group">
        <button id="addBtn" class="btn">Add Item</button>
        <button id="removeFirstBtn" class="btn">Remove First</button>
        <button id="removeLastBtn" class="btn">Remove Last</button>
        <button id="removeAllBtn" class="btn">Remove All</button>
      </div>

      <div id="container" style="background: rgba(255,255,255,0.2); padding: 15px; margin: 15px 0; border-radius: 5px; min-height: 50px; border: 2px dashed #11998e;">
        <div style="color: #11998e; text-align: center; font-style: italic;">Items will appear here</div>
      </div>

      <div class="result-section">
        <h3>Code:</h3>
        <pre id="result"></pre>
      </div>

      <div class="output-section">
        <h3>Output:</h3>
        <pre id="output"></pre>
      </div>
    </div>
  `,
  cssCode: `
    .topic-container {
      max-width: 900px;
      margin: 0 auto;
      padding: 20px;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%);
      border-radius: 10px;
      color: #fff;
    }

    h2 {
      text-align: center;
      margin-bottom: 30px;
      font-size: 2.5em;
      text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
    }

    .code-section {
      background: rgba(255,255,255,0.1);
      padding: 15px;
      margin: 15px 0;
      border-left: 4px solid #ffd700;
      border-radius: 5px;
      backdrop-filter: blur(10px);
    }

    .code-section h3 {
      margin-top: 0;
      color: #ffd700;
    }

    .code-section p {
      margin: 8px 0;
      line-height: 1.6;
    }

    code {
      background: rgba(0,0,0,0.2);
      padding: 2px 6px;
      border-radius: 3px;
      font-family: 'Courier New', monospace;
    }

    .button-group {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 10px;
      margin: 20px 0;
    }

    .btn {
      padding: 12px 20px;
      background: #ffd700;
      color: #333;
      border: none;
      border-radius: 5px;
      font-weight: bold;
      cursor: pointer;
      transition: all 0.3s ease;
      font-size: 14px;
    }

    .btn:hover {
      background: #ffed4e;
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(0,0,0,0.3);
    }

    .result-section, .output-section {
      background: rgba(0,0,0,0.2);
      padding: 15px;
      margin: 15px 0;
      border-radius: 5px;
      backdrop-filter: blur(10px);
    }

    .result-section h3, .output-section h3 {
      margin-top: 0;
      color: #ffd700;
    }

    pre {
      background: rgba(0,0,0,0.3);
      padding: 15px;
      border-radius: 5px;
      overflow-x: auto;
      color: #fff;
      font-size: 13px;
      line-height: 1.5;
      margin: 0;
    }

    #container > div {
      background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%);
      color: white;
      padding: 10px;
      margin: 5px 0;
      border-radius: 5px;
      animation: slideIn 0.3s ease;
    }

    @keyframes slideIn {
      from {
        opacity: 0;
        transform: translateY(-10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes slideOut {
      from {
        opacity: 1;
        transform: translateX(0);
      }
      to {
        opacity: 0;
        transform: translateX(100px);
      }
    }
  `,
  jsCode: `
    const result = document.getElementById('result');
    const output = document.getElementById('output');
    const container = document.getElementById('container');
    let itemCount = 0;

    document.getElementById('addBtn').addEventListener('click', () => {
      itemCount++;
      const text = \`Item \${itemCount}\`;
      
      const div = document.createElement('div');
      div.textContent = text;
      div.style.background = 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)';
      div.style.color = '#fff';
      div.style.padding = '10px';
      div.style.borderRadius = '5px';
      div.style.marginBottom = '5px';
      
      // Clear placeholder if first item
      if (container.children.length === 1 && container.children[0].textContent === 'Items will appear here') {
        container.innerHTML = '';
      }
      
      container.appendChild(div);
      
      result.textContent = \`const div = document.createElement('div');
div.textContent = '\${text}';

container.appendChild(div);

✅ Create element
✅ Append to container
✅ Item added\`;
      
      output.textContent = \`✅ Added
Text: \${text}
Total items: \${container.children.length}\`;
      console.log('Item added:', text);
    });

    document.getElementById('removeFirstBtn').addEventListener('click', () => {
      const firstChild = container.firstElementChild;
      
      if (firstChild && firstChild.textContent !== 'Items will appear here') {
        const removed = container.removeChild(firstChild);
        
        result.textContent = \`const firstChild = container.firstElementChild;
const removed = container.removeChild(firstChild);

✅ Remove first child
✅ Element removed from DOM
✅ Returned from function
✅ Can be re-added\`;
        
        output.textContent = \`✅ Removed First
Removed: \${removed.textContent}
Remaining: \${container.children.length}\`;
        console.log('First child removed:', removed);
      }
    });

    document.getElementById('removeLastBtn').addEventListener('click', () => {
      const lastChild = container.lastElementChild;
      
      if (lastChild && lastChild.textContent !== 'Items will appear here') {
        const removed = container.removeChild(lastChild);
        
        result.textContent = \`const lastChild = container.lastElementChild;
const removed = container.removeChild(lastChild);

✅ Remove last child
✅ Element removed from DOM
✅ Returned from function
✅ Can be re-added\`;
        
        output.textContent = \`✅ Removed Last
Removed: \${removed.textContent}
Remaining: \${container.children.length}\`;
        console.log('Last child removed:', removed);
      }
    });

    document.getElementById('removeAllBtn').addEventListener('click', () => {
      const count = container.children.length;
      
      while (container.firstElementChild) {
        container.removeChild(container.firstElementChild);
      }
      
      container.innerHTML = '<div style="color: #11998e; text-align: center; font-style: italic;">Items will appear here</div>';
      
      result.textContent = \`while (container.firstElementChild) {
  container.removeChild(container.firstElementChild);
}

✅ Remove all children
✅ Loop through each
✅ Remove one by one
✅ Container empty\`;
      
      output.textContent = \`✅ Removed All
Removed: \${count} items
Container: empty
Ready for new items!\`;
      console.log('All children removed');
    });

    console.log('🗑️ removeChild ready!');
  `
},

];

/* ─── Export helper function ─────────────────────────────────────── */
export function getTopicExample(topicName) {
  if (!topicName) return null;
  const key = topicName.toLowerCase().trim();
  return jsTopicExamples.find((ex) => ex.topic.toLowerCase() === key) || null;
}

export default jsTopicExamples;

