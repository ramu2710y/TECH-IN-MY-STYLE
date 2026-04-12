/* ═══════════════════════════════════════════════════════════════════
   jsTopicExamples.js  —  JAVASCRIPT BASIC IN MY STYLE
   Complete, runnable HTML documents for every topic.
   Each entry: { topic, description, code }
   The `code` is a full HTML document shown in the Monaco editor
   and rendered live in the iframe preview.
═══════════════════════════════════════════════════════════════════ */

const jsTopicExamples = [

  /* ══════════════════════════════════════════════
     GETTING STARTED
  ══════════════════════════════════════════════ */
  {
    topic: "introduction",
    description: "is the scripting language of the web that adds interactivity, logic, and dynamic behaviour to HTML pages.",
    code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>Introduction to JavaScript</title>
<style>
  *{margin:0;padding:0;box-sizing:border-box}
  body{font-family:'Inter',system-ui,sans-serif;background:#FFFDE7;display:flex;align-items:center;justify-content:center;min-height:100vh;padding:2rem}
  .card{background:#fff;border-radius:20px;padding:2.5rem;max-width:520px;width:100%;box-shadow:0 8px 32px rgba(247,223,30,0.2);border:1.5px solid rgba(247,223,30,0.3)}
  .badge{display:inline-block;background:#F7DF1E;color:#323330;font-family:'JetBrains Mono',monospace;font-weight:900;font-size:0.85rem;padding:0.3rem 0.9rem;border-radius:9999px;margin-bottom:1rem;letter-spacing:0.05em}
  h1{font-size:1.8rem;font-weight:900;color:#323330;margin-bottom:0.75rem;letter-spacing:-0.03em}
  p{color:#5a5a2a;line-height:1.75;margin-bottom:1rem}
  .features{display:grid;grid-template-columns:1fr 1fr;gap:0.75rem;margin-top:1.25rem}
  .feature{background:#FFFDE7;border:1.5px solid rgba(247,223,30,0.35);border-radius:12px;padding:0.85rem 1rem;font-size:0.875rem;color:#5a4a00;font-weight:600;display:flex;align-items:center;gap:0.5rem}
  .dot{width:8px;height:8px;background:#F7DF1E;border-radius:50%;flex-shrink:0}
  button{margin-top:1.5rem;width:100%;padding:0.85rem;background:#F7DF1E;color:#323330;border:none;border-radius:12px;font-weight:800;font-size:1rem;cursor:pointer;transition:all 0.25s;font-family:inherit}
  button:hover{background:#FFE566;transform:translateY(-2px);box-shadow:0 6px 18px rgba(247,223,30,0.4)}
</style>
</head>
<body>
<div class="card">
  <div class="badge">JS</div>
  <h1>What is JavaScript?</h1>
  <p>JavaScript is the programming language of the web. It runs directly in your browser and makes web pages <strong>interactive</strong>, <strong>dynamic</strong>, and <strong>responsive</strong>.</p>
  <div class="features">
    <div class="feature"><div class="dot"></div>Client-side</div>
    <div class="feature"><div class="dot"></div>Server-side (Node.js)</div>
    <div class="feature"><div class="dot"></div>Dynamic typing</div>
    <div class="feature"><div class="dot"></div>Event-driven</div>
    <div class="feature"><div class="dot"></div>Prototype-based</div>
    <div class="feature"><div class="dot"></div>First-class functions</div>
  </div>
  <button onclick="this.textContent='Welcome to JavaScript! 🎉'">Click to Start Learning!</button>
</div>
</body>
</html>`,
  },

  {
    topic: "hello-world",
    description: "is the traditional first program — displaying 'Hello, World!' using console.log, alert, and DOM manipulation.",
    code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Hello World</title>
<style>
  *{margin:0;padding:0;box-sizing:border-box}
  body{font-family:'Inter',system-ui,sans-serif;background:#FFFDE7;padding:2rem;display:flex;flex-direction:column;gap:1rem;min-height:100vh}
  h2{color:#323330;font-size:1.4rem;font-weight:900}
  .card{background:#fff;border-radius:14px;padding:1.5rem;border:1.5px solid rgba(247,223,30,0.3);box-shadow:0 4px 16px rgba(247,223,30,0.12)}
  .label{font-size:0.72rem;font-weight:800;color:#C9B800;text-transform:uppercase;letter-spacing:0.07em;margin-bottom:0.5rem;display:flex;align-items:center;gap:0.35rem}
  pre{background:#0d1117;color:#F7DF1E;padding:1rem;border-radius:10px;font-family:'JetBrains Mono',monospace;font-size:0.88rem;line-height:1.6;overflow-x:auto}
  .output{background:#1c1c10;color:#F7DF1E;padding:1rem;border-radius:10px;font-family:'JetBrains Mono',monospace;font-size:0.9rem;min-height:48px;display:flex;align-items:center}
  button{background:#F7DF1E;color:#323330;border:none;border-radius:9px;padding:0.6rem 1.4rem;font-weight:800;font-size:0.88rem;cursor:pointer;transition:all 0.2s;margin-top:0.75rem;font-family:inherit}
  button:hover{background:#FFE566;transform:translateY(-2px);box-shadow:0 4px 14px rgba(247,223,30,0.38)}
</style>
</head>
<body>
<h2>Hello, World! — Three Ways</h2>

<div class="card">
  <div class="label">1 · console.log()</div>
  <pre>console.log("Hello, World!");</pre>
  <div class="output" id="out1">Click ▶ to run</div>
  <button onclick="document.getElementById('out1').textContent='> Hello, World!'">▶ Run</button>
</div>

<div class="card">
  <div class="label">2 · alert()</div>
  <pre>alert("Hello, World!");</pre>
  <button onclick="alert('Hello, World!')">▶ Show Alert</button>
</div>

<div class="card">
  <div class="label">3 · DOM — Write to Page</div>
  <pre>document.getElementById("output").textContent = "Hello, World!";</pre>
  <div class="output" id="out3">Nothing yet…</div>
  <button onclick="document.getElementById('out3').textContent='Hello, World! ✅'">▶ Write to DOM</button>
</div>
</body>
</html>`,
  },

  {
    topic: "console",
    description: "provides methods like log, warn, error, table, and time for debugging and output in the browser developer tools.",
    code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Console Methods</title>
<style>
  *{margin:0;padding:0;box-sizing:border-box}
  body{font-family:'Inter',system-ui,sans-serif;background:#0d1117;color:#e6edf3;min-height:100vh;padding:1.5rem}
  h2{color:#F7DF1E;font-size:1.3rem;font-weight:900;margin-bottom:1.25rem;font-family:'JetBrains Mono',monospace}
  .terminal{background:#0d1117;border:1px solid rgba(247,223,30,0.18);border-radius:14px;overflow:hidden;margin-bottom:1rem}
  .terminal-bar{background:#161b22;padding:0.55rem 1rem;display:flex;align-items:center;gap:0.5rem;border-bottom:1px solid rgba(247,223,30,0.10)}
  .dot{width:12px;height:12px;border-radius:50%}
  .r{background:#ff5f57}.y{background:#ffbd2e}.g{background:#28ca41}
  .fn{color:#F7DF1E;font-size:0.75rem;font-family:'JetBrains Mono',monospace;margin-left:0.5rem}
  .code{padding:0.85rem 1rem;font-family:'JetBrains Mono',monospace;font-size:0.85rem;line-height:1.65}
  .log{color:#86efac}.warn{color:#fbbf24}.error{color:#f87171}.info{color:#79b8ff}.method{color:#F7DF1E}.str{color:#a5d6ff}.num{color:#f2cc60}
  .row{margin:0.2rem 0;display:flex;align-items:baseline;gap:0.5rem}
  .prefix{opacity:0.45;font-size:0.75rem;min-width:55px}
  button{background:#F7DF1E;color:#323330;border:none;border-radius:9px;padding:0.55rem 1.3rem;font-weight:800;font-size:0.82rem;cursor:pointer;transition:all 0.2s;margin:0.5rem 0.5rem 0.5rem 1rem;font-family:inherit}
  button:hover{background:#FFE566;transform:translateY(-2px)}
  #output{min-height:60px;padding:0.75rem 1rem;border-top:1px solid rgba(247,223,30,0.10)}
</style>
</head>
<body>
<h2>// Console Methods</h2>

<div class="terminal">
  <div class="terminal-bar"><div class="dot r"></div><div class="dot y"></div><div class="dot g"></div><div class="fn">console methods</div></div>
  <div class="code">
    <div class="row"><span class="method">console</span><span style="color:#e6edf3">.</span><span class="log">log</span><span style="color:#e6edf3">(</span><span class="str">"Hello, World!"</span><span style="color:#e6edf3">);</span></div>
    <div class="row"><span class="method">console</span><span style="color:#e6edf3">.</span><span class="warn">warn</span><span style="color:#e6edf3">(</span><span class="str">"This is a warning"</span><span style="color:#e6edf3">);</span></div>
    <div class="row"><span class="method">console</span><span style="color:#e6edf3">.</span><span class="error">error</span><span style="color:#e6edf3">(</span><span class="str">"Something went wrong!"</span><span style="color:#e6edf3">);</span></div>
    <div class="row"><span class="method">console</span><span style="color:#e6edf3">.</span><span class="info">info</span><span style="color:#e6edf3">(</span><span class="str">"FYI: JS is awesome"</span><span style="color:#e6edf3">);</span></div>
    <div class="row"><span class="method">console</span><span style="color:#e6edf3">.</span><span style="color:#c8e1ff">table</span><span style="color:#e6edf3">([</span><span class="str">"HTML"</span><span style="color:#e6edf3">, </span><span class="str">"CSS"</span><span style="color:#e6edf3">, </span><span class="str">"JS"</span><span style="color:#e6edf3">]);</span></div>
  </div>
  <div id="output" class="code"><span style="color:#5a5a3a">Click a button to see output…</span></div>
</div>

<div style="display:flex;flex-wrap:wrap;gap:0">
  <button onclick="log('log','> Hello, World!','log')">▶ log</button>
  <button onclick="log('warn','⚠ This is a warning','warn')">▶ warn</button>
  <button onclick="log('error','✖ Something went wrong!','error')">▶ error</button>
  <button onclick="log('info','ℹ FYI: JS is awesome','info')">▶ info</button>
  <button onclick="logTable()">▶ table</button>
</div>

<script>
function log(type, msg, cls) {
  const out = document.getElementById('output');
  out.innerHTML = '<div class="row '+cls+'"><span class="prefix">['+type.toUpperCase()+']</span><span>'+msg+'</span></div>';
}
function logTable() {
  const out = document.getElementById('output');
  out.innerHTML = '<div class="row" style="color:#c8e1ff"><span class="prefix">[TABLE]</span><span>["HTML", "CSS", "JS"] — Check the real console (F12)!</span></div>';
  console.table(["HTML", "CSS", "JS"]);
}
</script>
</body>
</html>`,
  },

  {
    topic: "comments",
    description: "are non-executed notes in your code. Use // for single-line and /* */ for multi-line comments.",
    code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Comments in JavaScript</title>
<style>
  *{margin:0;padding:0;box-sizing:border-box}
  body{font-family:'Inter',system-ui,sans-serif;background:#0d1117;color:#e6edf3;padding:2rem;min-height:100vh}
  h2{color:#F7DF1E;font-size:1.3rem;font-weight:900;margin-bottom:1.25rem;font-family:'JetBrains Mono',monospace}
  .block{background:#161b22;border-radius:12px;padding:1.25rem;margin-bottom:1rem;border:1px solid rgba(247,223,30,0.12)}
  .label{font-size:0.72rem;font-weight:800;color:#C9B800;text-transform:uppercase;letter-spacing:0.07em;margin-bottom:0.65rem}
  pre{font-family:'JetBrains Mono',monospace;font-size:0.88rem;line-height:1.7;overflow-x:auto}
  .cmt{color:#6a9955}.kw{color:#569cd6}.str{color:#ce9178}.fn{color:#dcdcaa}.num{color:#b5cea8}.var{color:#9cdcfe}
  .tip{background:rgba(247,223,30,0.08);border:1px solid rgba(247,223,30,0.18);border-radius:10px;padding:1rem;margin-top:0.5rem;font-size:0.875rem;color:#c8b840;line-height:1.6}
</style>
</head>
<body>
<h2>// JavaScript Comments</h2>

<div class="block">
  <div class="label">Single-line comment  //</div>
  <pre><span class="cmt">// This is a single-line comment — JS ignores this line</span>
<span class="kw">let</span> <span class="var">name</span> = <span class="str">"JavaScript"</span>; <span class="cmt">// can also be inline</span>
<span class="fn">console</span>.<span class="fn">log</span>(<span class="var">name</span>); <span class="cmt">// prints: JavaScript</span></pre>
</div>

<div class="block">
  <div class="label">Multi-line comment  /* */</div>
  <pre><span class="cmt">/*
  This is a multi-line comment.
  It can span many lines.
  Useful for explaining complex logic.
*/</span>
<span class="kw">function</span> <span class="fn">add</span>(<span class="var">a</span>, <span class="var">b</span>) {
  <span class="cmt">/* Returns the sum of two numbers */</span>
  <span class="kw">return</span> <span class="var">a</span> + <span class="var">b</span>;
}
<span class="fn">console</span>.<span class="fn">log</span>(<span class="fn">add</span>(<span class="num">5</span>, <span class="num">3</span>)); <span class="cmt">// 8</span></pre>
</div>

<div class="block">
  <div class="label">JSDoc comment  /** */</div>
  <pre><span class="cmt">/**
 * Greets a user by name.
 * @param {string} name - The user's name
 * @returns {string} A greeting message
 */</span>
<span class="kw">function</span> <span class="fn">greet</span>(<span class="var">name</span>) {
  <span class="kw">return</span> <span class="str">\`Hello, \${<span class="var">name</span>}!\`</span>;
}</pre>
</div>

<div class="tip">
  💡 <strong>Best practice:</strong> Write comments that explain <em>why</em> code does something, not <em>what</em> it does. Good code should be self-documenting.
</div>
</body>
</html>`,
  },

  {
    topic: "script-tag",
    description: "is used to embed or reference JavaScript in an HTML document — either inline or via an external .js file.",
    code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>The Script Tag</title>
<style>
  *{margin:0;padding:0;box-sizing:border-box}
  body{font-family:'Inter',system-ui,sans-serif;background:#FFFDE7;padding:2rem;min-height:100vh}
  h2{color:#323330;font-size:1.4rem;font-weight:900;margin-bottom:1.25rem}
  .card{background:#fff;border-radius:14px;padding:1.5rem;margin-bottom:1rem;border:1.5px solid rgba(247,223,30,0.3);box-shadow:0 4px 14px rgba(247,223,30,0.12)}
  .label{font-size:0.72rem;font-weight:800;color:#C9B800;text-transform:uppercase;letter-spacing:0.07em;margin-bottom:0.6rem}
  pre{background:#0d1117;color:#e6edf3;padding:1rem;border-radius:10px;font-family:'JetBrains Mono',monospace;font-size:0.85rem;line-height:1.65;overflow-x:auto}
  .tag{color:#f97583}.attr{color:#b392f0}.str{color:#9ecbff}.cmt{color:#6a9955}
  .output{background:#323330;color:#F7DF1E;padding:0.8rem 1rem;border-radius:10px;font-family:'JetBrains Mono',monospace;font-size:0.9rem;margin-top:0.75rem;min-height:44px}
</style>
</head>
<body>
<h2>The &lt;script&gt; Tag</h2>

<div class="card">
  <div class="label">1 · Inline JavaScript</div>
  <pre><span class="tag">&lt;script&gt;</span>
  <span class="cmt">// JS runs directly in the HTML file</span>
  console.log(<span class="str">"I am inline JavaScript"</span>);
  document.getElementById(<span class="str">"out1"</span>).textContent = <span class="str">"✅ Inline script ran!"</span>;
<span class="tag">&lt;/script&gt;</span></pre>
  <div class="output" id="out1">Waiting…</div>
</div>

<div class="card">
  <div class="label">2 · External JavaScript File</div>
  <pre><span class="cmt">&lt;!-- In your HTML --&gt;</span>
<span class="tag">&lt;script </span><span class="attr">src</span>=<span class="str">"app.js"</span><span class="tag">&gt;&lt;/script&gt;</span>

<span class="cmt">// app.js — separate file
</span>console.log(<span class="str">"I am from app.js"</span>);</pre>
</div>

<div class="card">
  <div class="label">3 · Defer &amp; Async (best practice)</div>
  <pre><span class="cmt">&lt;!-- defer: waits for HTML to be parsed --&gt;</span>
<span class="tag">&lt;script </span><span class="attr">src</span>=<span class="str">"app.js"</span> <span class="attr">defer</span><span class="tag">&gt;&lt;/script&gt;</span>

<span class="cmt">&lt;!-- async: downloads in parallel, runs immediately --&gt;</span>
<span class="tag">&lt;script </span><span class="attr">src</span>=<span class="str">"analytics.js"</span> <span class="attr">async</span><span class="tag">&gt;&lt;/script&gt;</span></pre>
</div>

<script>
document.getElementById('out1').textContent = '✅ Inline script ran successfully!';
</script>
</body>
</html>`,
  },

  /* ══════════════════════════════════════════════
     VARIABLES & DATA TYPES
  ══════════════════════════════════════════════ */
  {
    topic: "var",
    description: "declares a function-scoped or globally-scoped variable. It is hoisted and can be redeclared — use let/const in modern JS instead.",
    code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>var keyword</title>
<style>
  *{margin:0;padding:0;box-sizing:border-box}
  body{font-family:'Inter',system-ui,sans-serif;background:#0d1117;color:#e6edf3;padding:2rem;min-height:100vh}
  h2{color:#F7DF1E;font-size:1.3rem;font-weight:900;margin-bottom:1.25rem;font-family:'JetBrains Mono',monospace}
  .block{background:#161b22;border-radius:12px;padding:1.25rem;margin-bottom:1rem;border:1px solid rgba(247,223,30,0.12)}
  .label{font-size:0.72rem;font-weight:800;color:#C9B800;text-transform:uppercase;letter-spacing:0.07em;margin-bottom:0.65rem}
  pre{font-family:'JetBrains Mono',monospace;font-size:0.85rem;line-height:1.7;overflow-x:auto}
  .kw{color:#F7DF1E}.str{color:#a5d6ff}.num{color:#f2cc60}.cmt{color:#6a9955}.var{color:#e6edf3}.fn{color:#dcdcaa}
  .warn{background:rgba(251,191,36,0.10);border:1px solid rgba(251,191,36,0.25);border-radius:10px;padding:1rem;margin-top:0.5rem;color:#fbbf24;font-size:0.875rem;line-height:1.65}
  .output{background:#0d1117;border:1px solid rgba(247,223,30,0.18);border-radius:8px;padding:0.75rem 1rem;margin-top:0.75rem;font-family:'JetBrains Mono',monospace;font-size:0.85rem;color:#F7DF1E}
  button{background:#F7DF1E;color:#323330;border:none;border-radius:8px;padding:0.5rem 1.2rem;font-weight:800;font-size:0.82rem;cursor:pointer;margin-top:0.75rem;font-family:inherit;transition:all 0.2s}
  button:hover{background:#FFE566;transform:translateY(-2px)}
</style>
</head>
<body>
<h2>// var keyword</h2>

<div class="block">
  <div class="label">Basic var declaration</div>
  <pre><span class="kw">var</span> <span class="var">name</span> = <span class="str">"Alice"</span>;
<span class="kw">var</span> <span class="var">age</span> = <span class="num">25</span>;
<span class="kw">var</span> <span class="var">name</span> = <span class="str">"Bob"</span>; <span class="cmt">// ✅ can be redeclared!</span>
<span class="fn">console</span>.<span class="fn">log</span>(<span class="var">name</span>); <span class="cmt">// Bob</span></pre>
  <div class="output" id="out1">Click Run…</div>
  <button onclick="run1()">▶ Run</button>
</div>

<div class="block">
  <div class="label">var is function-scoped (not block-scoped)</div>
  <pre><span class="kw">function</span> <span class="fn">test</span>() {
  <span class="kw">if</span> (<span class="num">true</span>) {
    <span class="kw">var</span> <span class="var">x</span> = <span class="num">10</span>; <span class="cmt">// leaks out of the if block!</span>
  }
  <span class="fn">console</span>.<span class="fn">log</span>(<span class="var">x</span>); <span class="cmt">// 10 — accessible here!</span>
}
<span class="fn">test</span>();</pre>
  <div class="output" id="out2">Click Run…</div>
  <button onclick="run2()">▶ Run</button>
</div>

<div class="block">
  <div class="label">var is hoisted (declaration moved to top)</div>
  <pre><span class="fn">console</span>.<span class="fn">log</span>(<span class="var">greeting</span>); <span class="cmt">// undefined (not an error!)</span>
<span class="kw">var</span> <span class="var">greeting</span> = <span class="str">"Hello"</span>;
<span class="fn">console</span>.<span class="fn">log</span>(<span class="var">greeting</span>); <span class="cmt">// "Hello"</span></pre>
  <div class="output" id="out3">Click Run…</div>
  <button onclick="run3()">▶ Run</button>
</div>

<div class="warn">⚠ <strong>Avoid var in modern JavaScript.</strong> Use <code style="background:rgba(247,223,30,0.15);padding:0.1rem 0.4rem;border-radius:4px;color:#F7DF1E">let</code> for mutable values and <code style="background:rgba(247,223,30,0.15);padding:0.1rem 0.4rem;border-radius:4px;color:#F7DF1E">const</code> for constants.</div>

<script>
function run1(){var name="Alice";var age=25;var name="Bob";document.getElementById('out1').textContent='> name = "'+name+'", age = '+age}
function run2(){function test(){if(true){var x=10;}return x;}document.getElementById('out2').textContent='> x inside if with var = '+test()+' (leaked out of block!)'}
function run3(){document.getElementById('out3').textContent='> console.log(greeting) before declaration = undefined\n> After: "Hello"'}
</script>
</body>
</html>`,
  },

  {
    topic: "let",
    description: "declares a block-scoped variable that can be reassigned but not redeclared in the same scope. Preferred over var.",
    code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>let keyword</title>
<style>
  *{margin:0;padding:0;box-sizing:border-box}
  body{font-family:'Inter',system-ui,sans-serif;background:#0d1117;color:#e6edf3;padding:2rem;min-height:100vh}
  h2{color:#F7DF1E;font-size:1.3rem;font-weight:900;margin-bottom:1.25rem;font-family:'JetBrains Mono',monospace}
  .block{background:#161b22;border-radius:12px;padding:1.25rem;margin-bottom:1rem;border:1px solid rgba(247,223,30,0.12)}
  .label{font-size:0.72rem;font-weight:800;color:#C9B800;text-transform:uppercase;letter-spacing:0.07em;margin-bottom:0.65rem}
  pre{font-family:'JetBrains Mono',monospace;font-size:0.85rem;line-height:1.7;overflow-x:auto}
  .kw{color:#F7DF1E}.str{color:#a5d6ff}.num{color:#f2cc60}.cmt{color:#6a9955}.var{color:#e6edf3}.fn{color:#dcdcaa}.good{color:#86efac}.bad{color:#f87171}
  .output{background:#0d1117;border:1px solid rgba(247,223,30,0.18);border-radius:8px;padding:0.75rem 1rem;margin-top:0.75rem;font-family:'JetBrains Mono',monospace;font-size:0.85rem;color:#F7DF1E;min-height:44px}
  button{background:#F7DF1E;color:#323330;border:none;border-radius:8px;padding:0.5rem 1.2rem;font-weight:800;font-size:0.82rem;cursor:pointer;margin-top:0.75rem;font-family:inherit;transition:all 0.2s}
  button:hover{background:#FFE566;transform:translateY(-2px)}
</style>
</head>
<body>
<h2>// let keyword</h2>

<div class="block">
  <div class="label">let — block scoped</div>
  <pre><span class="kw">let</span> <span class="var">score</span> = <span class="num">0</span>;
<span class="var">score</span> = <span class="num">10</span>; <span class="cmt good">// ✅ reassignment is fine</span>

<span class="kw">if</span> (<span class="num">true</span>) {
  <span class="kw">let</span> <span class="var">insideBlock</span> = <span class="str">"only here"</span>;
  <span class="fn">console</span>.<span class="fn">log</span>(<span class="var">insideBlock</span>); <span class="cmt">// "only here" ✅</span>
}
<span class="cmt bad">// console.log(insideBlock); // ❌ ReferenceError!</span></pre>
  <div class="output" id="out1">Click Run…</div>
  <button onclick="run1()">▶ Run</button>
</div>

<div class="block">
  <div class="label">let in a loop — each iteration has its own scope</div>
  <pre><span class="kw">for</span> (<span class="kw">let</span> <span class="var">i</span> = <span class="num">0</span>; <span class="var">i</span> &lt; <span class="num">3</span>; <span class="var">i</span>++) {
  <span class="cmt">// each i is its own block-scoped variable</span>
  <span class="fn">setTimeout</span>(() => <span class="fn">console</span>.<span class="fn">log</span>(<span class="var">i</span>), <span class="num">0</span>);
}
<span class="cmt">// Prints: 0, 1, 2  (not 3, 3, 3 like var!)</span></pre>
  <div class="output" id="out2">Click Run…</div>
  <button onclick="run2()">▶ Run</button>
</div>

<div class="block">
  <div class="label">let is NOT hoisted usably (Temporal Dead Zone)</div>
  <pre><span class="cmt bad">// console.log(x); // ❌ ReferenceError: Cannot access before init</span>
<span class="kw">let</span> <span class="var">x</span> = <span class="num">5</span>;
<span class="fn">console</span>.<span class="fn">log</span>(<span class="var">x</span>); <span class="cmt">// ✅ 5</span></pre>
  <div class="output" id="out3">Click Run…</div>
  <button onclick="run3()">▶ Run</button>
</div>

<script>
function run1(){let score=0;score=10;let msg='> score = '+score+'\n> insideBlock is scoped to the if block only';document.getElementById('out1').textContent=msg}
function run2(){let results=[];for(let i=0;i<3;i++){results.push(i);}document.getElementById('out2').textContent='> Loop with let: ['+results.join(', ')+']  ← correct! (not 3,3,3)'}
function run3(){let x=5;document.getElementById('out3').textContent='> x = '+x+'\n> Accessing let before declaration causes ReferenceError (TDZ)'}
</script>
</body>
</html>`,
  },

  {
    topic: "const",
    description: "declares a block-scoped constant. The binding cannot be reassigned, but object/array contents can still be mutated.",
    code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>const keyword</title>
<style>
  *{margin:0;padding:0;box-sizing:border-box}
  body{font-family:'Inter',system-ui,sans-serif;background:#0d1117;color:#e6edf3;padding:2rem;min-height:100vh}
  h2{color:#F7DF1E;font-size:1.3rem;font-weight:900;margin-bottom:1.25rem;font-family:'JetBrains Mono',monospace}
  .block{background:#161b22;border-radius:12px;padding:1.25rem;margin-bottom:1rem;border:1px solid rgba(247,223,30,0.12)}
  .label{font-size:0.72rem;font-weight:800;color:#C9B800;text-transform:uppercase;letter-spacing:0.07em;margin-bottom:0.65rem}
  pre{font-family:'JetBrains Mono',monospace;font-size:0.85rem;line-height:1.7;overflow-x:auto}
  .kw{color:#F7DF1E}.str{color:#a5d6ff}.num{color:#f2cc60}.cmt{color:#6a9955}.var{color:#e6edf3}.fn{color:#dcdcaa}.good{color:#86efac}.bad{color:#f87171}
  .output{background:#0d1117;border:1px solid rgba(247,223,30,0.18);border-radius:8px;padding:0.75rem 1rem;margin-top:0.75rem;font-family:'JetBrains Mono',monospace;font-size:0.85rem;color:#F7DF1E;white-space:pre-line;min-height:44px}
  button{background:#F7DF1E;color:#323330;border:none;border-radius:8px;padding:0.5rem 1.2rem;font-weight:800;font-size:0.82rem;cursor:pointer;margin-top:0.75rem;font-family:inherit;transition:all 0.2s}
  button:hover{background:#FFE566;transform:translateY(-2px)}
</style>
</head>
<body>
<h2>// const keyword</h2>

<div class="block">
  <div class="label">const — cannot be reassigned</div>
  <pre><span class="kw">const</span> <span class="var">PI</span> = <span class="num">3.14159</span>;
<span class="fn">console</span>.<span class="fn">log</span>(<span class="var">PI</span>); <span class="cmt">// 3.14159</span>
<span class="cmt bad">// PI = 3; // ❌ TypeError: Assignment to constant variable</span></pre>
  <div class="output" id="out1">Click Run…</div>
  <button onclick="run1()">▶ Run</button>
</div>

<div class="block">
  <div class="label">const objects — contents CAN be mutated</div>
  <pre><span class="kw">const</span> <span class="var">user</span> = { <span class="str">name</span>: <span class="str">"Alice"</span>, <span class="str">age</span>: <span class="num">25</span> };
<span class="var">user</span>.<span class="var">age</span> = <span class="num">26</span>; <span class="cmt good">// ✅ OK — mutating content</span>
<span class="fn">console</span>.<span class="fn">log</span>(<span class="var">user</span>.<span class="var">age</span>); <span class="cmt">// 26</span>
<span class="cmt bad">// user = {}; // ❌ TypeError: reassignment not allowed</span></pre>
  <div class="output" id="out2">Click Run…</div>
  <button onclick="run2()">▶ Run</button>
</div>

<div class="block">
  <div class="label">const arrays — elements CAN be changed</div>
  <pre><span class="kw">const</span> <span class="var">colors</span> = [<span class="str">"red"</span>, <span class="str">"blue"</span>];
<span class="var">colors</span>.<span class="fn">push</span>(<span class="str">"green"</span>); <span class="cmt good">// ✅ OK</span>
<span class="fn">console</span>.<span class="fn">log</span>(<span class="var">colors</span>); <span class="cmt">// ["red", "blue", "green"]</span>
<span class="cmt bad">// colors = []; // ❌ TypeError!</span></pre>
  <div class="output" id="out3">Click Run…</div>
  <button onclick="run3()">▶ Run</button>
</div>

<script>
function run1(){const PI=3.14159;document.getElementById('out1').textContent='> PI = '+PI+'\n> Trying to reassign → TypeError: Assignment to constant variable'}
function run2(){const user={name:"Alice",age:25};user.age=26;document.getElementById('out2').textContent='> user.age after mutation = '+user.age+'\n> The binding "user" still points to the same object ✅'}
function run3(){const colors=["red","blue"];colors.push("green");document.getElementById('out3').textContent='> colors = ['+colors.join(', ')+']\n> push() mutated the array contents — const allows this ✅'}
</script>
</body>
</html>`,
  },

  {
    topic: "string",
    description: "is a sequence of characters used to represent text. Strings can be created with single quotes, double quotes, or template literals.",
    code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>JavaScript Strings</title>
<style>
  *{margin:0;padding:0;box-sizing:border-box}
  body{font-family:'Inter',system-ui,sans-serif;background:#FFFDE7;padding:2rem;min-height:100vh}
  h2{color:#323330;font-size:1.4rem;font-weight:900;margin-bottom:1.25rem}
  .card{background:#fff;border-radius:14px;padding:1.5rem;margin-bottom:1rem;border:1.5px solid rgba(247,223,30,0.3);box-shadow:0 4px 14px rgba(247,223,30,0.10)}
  .label{font-size:0.72rem;font-weight:800;color:#C9B800;text-transform:uppercase;letter-spacing:0.07em;margin-bottom:0.65rem}
  pre{background:#0d1117;color:#e6edf3;padding:1rem;border-radius:10px;font-family:'JetBrains Mono',monospace;font-size:0.85rem;line-height:1.65;overflow-x:auto}
  .str{color:#a5d6ff}.kw{color:#F7DF1E}.var{color:#e6edf3}.cmt{color:#6a9955}.num{color:#f2cc60}
  .output{background:#fffde0;border:1px solid rgba(247,223,30,0.3);border-radius:8px;padding:0.75rem 1rem;margin-top:0.75rem;font-family:'JetBrains Mono',monospace;font-size:0.88rem;color:#5a4a00;white-space:pre-line;min-height:44px}
  button{background:#F7DF1E;color:#323330;border:none;border-radius:8px;padding:0.5rem 1.2rem;font-weight:800;font-size:0.82rem;cursor:pointer;margin-top:0.75rem;font-family:inherit;transition:all 0.2s}
  button:hover{background:#FFE566;transform:translateY(-2px)}
</style>
</head>
<body>
<h2>JavaScript Strings</h2>

<div class="card">
  <div class="label">Creating strings</div>
  <pre><span class="kw">let</span> <span class="var">single</span> = <span class="str">'Hello'</span>;         <span class="cmt">// single quotes</span>
<span class="kw">let</span> <span class="var">double</span> = <span class="str">"World"</span>;         <span class="cmt">// double quotes</span>
<span class="kw">let</span> <span class="var">backtick</span> = <span class="str">\`Template!\`</span>;    <span class="cmt">// template literal</span>
<span class="kw">let</span> <span class="var">name</span> = <span class="str">"Alice"</span>;
<span class="kw">let</span> <span class="var">greeting</span> = <span class="str">\`Hello, \${<span class="var">name</span>}!\`</span>; <span class="cmt">// interpolation</span></pre>
  <div class="output" id="out1">Click Run…</div>
  <button onclick="run1()">▶ Run</button>
</div>

<div class="card">
  <div class="label">String properties and escape characters</div>
  <pre><span class="kw">let</span> <span class="var">msg</span> = <span class="str">"Hello, World!"</span>;
<span class="var">msg</span>.<span class="var">length</span>;      <span class="cmt">// 13</span>
<span class="var">msg</span>[<span class="num">0</span>];           <span class="cmt">// "H"</span>
<span class="var">msg</span>[<span class="var">msg</span>.<span class="var">length</span>-<span class="num">1</span>];<span class="cmt">// "!"</span>

<span class="kw">let</span> <span class="var">escaped</span> = <span class="str">"He said \"Hi\""</span>; <span class="cmt">// escape with \</span>
<span class="kw">let</span> <span class="var">newline</span> = <span class="str">"Line 1\nLine 2"</span>;  <span class="cmt">// \n = newline</span></pre>
  <div class="output" id="out2">Click Run…</div>
  <button onclick="run2()">▶ Run</button>
</div>

<div class="card">
  <div class="label">Concatenation vs template literals</div>
  <pre><span class="kw">let</span> <span class="var">first</span> = <span class="str">"JavaScript"</span>, <span class="var">level</span> = <span class="str">"Basic"</span>;
<span class="cmt">// Old way: concatenation</span>
<span class="kw">let</span> <span class="var">a</span> = <span class="var">first</span> + <span class="str">" "</span> + <span class="var">level</span> + <span class="str">" Course"</span>;
<span class="cmt">// Modern way: template literal</span>
<span class="kw">let</span> <span class="var">b</span> = <span class="str">\`\${<span class="var">first</span>} \${<span class="var">level</span>} Course\`</span>;
<span class="cmt">// Both: "JavaScript Basic Course"</span></pre>
  <div class="output" id="out3">Click Run…</div>
  <button onclick="run3()">▶ Run</button>
</div>

<script>
function run1(){let single='Hello';let double="World";let name="Alice";let greeting=\`Hello, \${name}!\`;document.getElementById('out1').textContent="single = '"+single+"'\\ndouble = \\""+double+"\\"\\ngreeting = \\""+greeting+"\\""}
function run2(){let msg="Hello, World!";document.getElementById('out2').textContent='length = '+msg.length+'\nmsg[0] = "'+msg[0]+'"\nlast = "'+msg[msg.length-1]+'"\nescaped = He said "Hi"\nnewline = Line 1\nLine 2'}
function run3(){let first="JavaScript",level="Basic";let a=first+" "+level+" Course";let b=\`\${first} \${level} Course\`;document.getElementById('out3').textContent='concat: "'+a+'"\\ntemplate: "'+b+'"\\nBoth produce the same result ✅'}
</script>
</body>
</html>`,
  },

  {
    topic: "number",
    description: "is the numeric data type in JavaScript, covering integers, floats, Infinity, NaN, and the Math object.",
    code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>JavaScript Numbers</title>
<style>
  *{margin:0;padding:0;box-sizing:border-box}
  body{font-family:'Inter',system-ui,sans-serif;background:#FFFDE7;padding:2rem;min-height:100vh}
  h2{color:#323330;font-size:1.4rem;font-weight:900;margin-bottom:1.25rem}
  .card{background:#fff;border-radius:14px;padding:1.5rem;margin-bottom:1rem;border:1.5px solid rgba(247,223,30,0.3);box-shadow:0 4px 14px rgba(247,223,30,0.10)}
  .label{font-size:0.72rem;font-weight:800;color:#C9B800;text-transform:uppercase;letter-spacing:0.07em;margin-bottom:0.65rem}
  pre{background:#0d1117;color:#e6edf3;padding:1rem;border-radius:10px;font-family:'JetBrains Mono',monospace;font-size:0.85rem;line-height:1.65;overflow-x:auto}
  .kw{color:#F7DF1E}.num{color:#f2cc60}.var{color:#e6edf3}.cmt{color:#6a9955}.fn{color:#dcdcaa}.str{color:#a5d6ff}
  .output{background:#fffde0;border:1px solid rgba(247,223,30,0.3);border-radius:8px;padding:0.75rem 1rem;margin-top:0.75rem;font-family:'JetBrains Mono',monospace;font-size:0.88rem;color:#5a4a00;white-space:pre-line}
  button{background:#F7DF1E;color:#323330;border:none;border-radius:8px;padding:0.5rem 1.2rem;font-weight:800;font-size:0.82rem;cursor:pointer;margin-top:0.75rem;font-family:inherit;transition:all 0.2s}
  button:hover{background:#FFE566;transform:translateY(-2px)}
</style>
</head>
<body>
<h2>JavaScript Numbers</h2>

<div class="card">
  <div class="label">Integer, Float, Special values</div>
  <pre><span class="kw">let</span> <span class="var">integer</span> = <span class="num">42</span>;
<span class="kw">let</span> <span class="var">float</span>   = <span class="num">3.14</span>;
<span class="kw">let</span> <span class="var">negative</span>= <span class="num">-7</span>;
<span class="kw">let</span> <span class="var">huge</span>    = <span class="num">1e6</span>;         <span class="cmt">// 1,000,000</span>
<span class="kw">let</span> <span class="var">inf</span>     = <span class="fn">Infinity</span>;   <span class="cmt">// 1/0</span>
<span class="kw">let</span> <span class="var">notNum</span>  = <span class="fn">NaN</span>;        <span class="cmt">// "hello" * 2</span></pre>
  <div class="output" id="out1">Click Run…</div>
  <button onclick="run1()">▶ Run</button>
</div>

<div class="card">
  <div class="label">Number methods</div>
  <pre><span class="kw">let</span> <span class="var">n</span> = <span class="num">3.14159</span>;
<span class="var">n</span>.<span class="fn">toFixed</span>(<span class="num">2</span>);         <span class="cmt">// "3.14"</span>
<span class="var">n</span>.<span class="fn">toPrecision</span>(<span class="num">4</span>);    <span class="cmt">// "3.142"</span>
<span class="fn">Number</span>.<span class="fn">isInteger</span>(<span class="num">5</span>);  <span class="cmt">// true</span>
<span class="fn">Number</span>.<span class="fn">isNaN</span>(<span class="fn">NaN</span>);    <span class="cmt">// true</span>
<span class="fn">parseInt</span>(<span class="str">"42px"</span>);     <span class="cmt">// 42</span>
<span class="fn">parseFloat</span>(<span class="str">"3.14"</span>);  <span class="cmt">// 3.14</span></pre>
  <div class="output" id="out2">Click Run…</div>
  <button onclick="run2()">▶ Run</button>
</div>

<div class="card">
  <div class="label">Math object</div>
  <pre><span class="fn">Math</span>.<span class="fn">round</span>(<span class="num">4.6</span>);   <span class="cmt">// 5</span>
<span class="fn">Math</span>.<span class="fn">floor</span>(<span class="num">4.9</span>);   <span class="cmt">// 4</span>
<span class="fn">Math</span>.<span class="fn">ceil</span>(<span class="num">4.1</span>);    <span class="cmt">// 5</span>
<span class="fn">Math</span>.<span class="fn">abs</span>(<span class="num">-7</span>);     <span class="cmt">// 7</span>
<span class="fn">Math</span>.<span class="fn">sqrt</span>(<span class="num">25</span>);    <span class="cmt">// 5</span>
<span class="fn">Math</span>.<span class="fn">pow</span>(<span class="num">2</span>, <span class="num">10</span>);  <span class="cmt">// 1024</span>
<span class="fn">Math</span>.<span class="fn">random</span>();    <span class="cmt">// 0.0 – 0.999</span>
<span class="fn">Math</span>.<span class="fn">max</span>(<span class="num">1</span>,<span class="num">5</span>,<span class="num">3</span>);  <span class="cmt">// 5</span></pre>
  <div class="output" id="out3">Click Run…</div>
  <button onclick="run3()">▶ Run</button>
</div>

<script>
function run1(){document.getElementById('out1').textContent='integer = 42\nfloat = 3.14\nhuge (1e6) = '+1e6+'\nInfinity = '+Infinity+'\nNaN = '+NaN+'\ntypeof NaN = "'+typeof NaN+'"'}
function run2(){let n=3.14159;document.getElementById('out2').textContent='toFixed(2) = "'+n.toFixed(2)+'"\ntoPrecision(4) = "'+n.toPrecision(4)+'"\nisInteger(5) = '+Number.isInteger(5)+'\nisNaN(NaN) = '+Number.isNaN(NaN)+'\nparseInt("42px") = '+parseInt("42px")+'\nparseFloat("3.14") = '+parseFloat("3.14")}
function run3(){document.getElementById('out3').textContent='round(4.6) = '+Math.round(4.6)+'\nfloor(4.9) = '+Math.floor(4.9)+'\nceil(4.1)  = '+Math.ceil(4.1)+'\nabs(-7)    = '+Math.abs(-7)+'\nsqrt(25)   = '+Math.sqrt(25)+'\npow(2,10)  = '+Math.pow(2,10)+'\nrandom()   = '+Math.random().toFixed(4)+'\nmax(1,5,3) = '+Math.max(1,5,3)}
</script>
</body>
</html>`,
  },

  {
    topic: "boolean",
    description: "is a logical data type with only two values: true or false. Used in conditions, comparisons, and logical expressions.",
    code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>JavaScript Booleans</title>
<style>
  *{margin:0;padding:0;box-sizing:border-box}
  body{font-family:'Inter',system-ui,sans-serif;background:#FFFDE7;padding:2rem;min-height:100vh}
  h2{color:#323330;font-size:1.4rem;font-weight:900;margin-bottom:1.25rem}
  .card{background:#fff;border-radius:14px;padding:1.5rem;margin-bottom:1rem;border:1.5px solid rgba(247,223,30,0.3);box-shadow:0 4px 14px rgba(247,223,30,0.10)}
  .label{font-size:0.72rem;font-weight:800;color:#C9B800;text-transform:uppercase;letter-spacing:0.07em;margin-bottom:0.65rem}
  pre{background:#0d1117;color:#e6edf3;padding:1rem;border-radius:10px;font-family:'JetBrains Mono',monospace;font-size:0.85rem;line-height:1.65;overflow-x:auto}
  .kw{color:#F7DF1E}.bool{color:#79c0ff}.var{color:#e6edf3}.cmt{color:#6a9955}.fn{color:#dcdcaa}.str{color:#a5d6ff}.num{color:#f2cc60}
  .grid{display:grid;grid-template-columns:1fr 1fr;gap:0.75rem;margin-top:0.75rem}
  .chip{padding:0.55rem 0.85rem;border-radius:9px;font-family:'JetBrains Mono',monospace;font-size:0.82rem;font-weight:700;text-align:center}
  .t{background:rgba(134,239,172,0.15);color:#86efac;border:1px solid rgba(134,239,172,0.3)}
  .f{background:rgba(248,113,113,0.12);color:#f87171;border:1px solid rgba(248,113,113,0.25)}
  .output{background:#fffde0;border:1px solid rgba(247,223,30,0.3);border-radius:8px;padding:0.75rem 1rem;margin-top:0.75rem;font-family:'JetBrains Mono',monospace;font-size:0.88rem;color:#5a4a00;white-space:pre-line}
  button{background:#F7DF1E;color:#323330;border:none;border-radius:8px;padding:0.5rem 1.2rem;font-weight:800;font-size:0.82rem;cursor:pointer;margin-top:0.75rem;font-family:inherit;transition:all 0.2s}
  button:hover{background:#FFE566;transform:translateY(-2px)}
</style>
</head>
<body>
<h2>JavaScript Booleans</h2>

<div class="card">
  <div class="label">Boolean values and Boolean()</div>
  <pre><span class="kw">let</span> <span class="var">isLoggedIn</span> = <span class="bool">true</span>;
<span class="kw">let</span> <span class="var">hasPermission</span> = <span class="bool">false</span>;
<span class="fn">console</span>.<span class="fn">log</span>(<span class="kw">typeof</span> <span class="bool">true</span>); <span class="cmt">// "boolean"</span></pre>
  <div class="output" id="out1">Click Run…</div>
  <button onclick="run1()">▶ Run</button>
</div>

<div class="card">
  <div class="label">Truthy and Falsy values</div>
  <div class="grid">
    <div class="chip f">false</div>
    <div class="chip t">true</div>
    <div class="chip f">0</div>
    <div class="chip t">1 (any non-zero)</div>
    <div class="chip f">""  (empty string)</div>
    <div class="chip t">"hello" (non-empty)</div>
    <div class="chip f">null</div>
    <div class="chip t">[] (empty array)</div>
    <div class="chip f">undefined</div>
    <div class="chip t">{} (empty object)</div>
    <div class="chip f">NaN</div>
    <div class="chip t">Infinity</div>
  </div>
  <div class="output" id="out2">Click Run…</div>
  <button onclick="run2()">▶ Run</button>
</div>

<div class="card">
  <div class="label">Boolean in conditions</div>
  <pre><span class="kw">const</span> <span class="var">age</span> = <span class="num">18</span>;
<span class="kw">const</span> <span class="var">isAdult</span> = <span class="var">age</span> >= <span class="num">18</span>; <span class="cmt">// true</span>
<span class="kw">if</span> (<span class="var">isAdult</span>) {
  <span class="fn">console</span>.<span class="fn">log</span>(<span class="str">"Welcome!"</span>);
} <span class="kw">else</span> {
  <span class="fn">console</span>.<span class="fn">log</span>(<span class="str">"Too young"</span>);
}</pre>
  <div class="output" id="out3">Click Run…</div>
  <button onclick="run3()">▶ Run</button>
</div>

<script>
function run1(){let isLoggedIn=true;let hasPermission=false;document.getElementById('out1').textContent='isLoggedIn = '+isLoggedIn+'\nhasPermission = '+hasPermission+'\ntypeof true = "'+typeof true+'"'}
function run2(){let results=['Boolean(false)='+Boolean(false),'Boolean(0)='+Boolean(0),'Boolean("")='+Boolean(""),'Boolean(null)='+Boolean(null),'Boolean(undefined)='+Boolean(undefined),'Boolean(NaN)='+Boolean(NaN),'Boolean(1)='+Boolean(1),'Boolean("hi")='+Boolean("hi"),'Boolean([])='+Boolean([]),'Boolean({})='+Boolean({})];document.getElementById('out2').textContent=results.join('\n')}
function run3(){const age=18;const isAdult=age>=18;document.getElementById('out3').textContent='age = '+age+'\nisAdult = '+isAdult+'\nResult: '+(isAdult?"Welcome! ✅":"Too young ❌")}
</script>
</body>
</html>`,
  },

  {
    topic: "typeof",
    description: "is an operator that returns a string indicating the type of the operand: 'string', 'number', 'boolean', 'object', 'function', 'undefined', or 'symbol'.",
    code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>typeof Operator</title>
<style>
  *{margin:0;padding:0;box-sizing:border-box}
  body{font-family:'Inter',system-ui,sans-serif;background:#FFFDE7;padding:2rem;min-height:100vh}
  h2{color:#323330;font-size:1.4rem;font-weight:900;margin-bottom:1.25rem}
  .card{background:#fff;border-radius:14px;padding:1.5rem;margin-bottom:1rem;border:1.5px solid rgba(247,223,30,0.3);box-shadow:0 4px 14px rgba(247,223,30,0.10)}
  .label{font-size:0.72rem;font-weight:800;color:#C9B800;text-transform:uppercase;letter-spacing:0.07em;margin-bottom:0.65rem}
  table{width:100%;border-collapse:collapse;font-family:'JetBrains Mono',monospace;font-size:0.85rem}
  th{background:#323330;color:#F7DF1E;padding:0.65rem 1rem;text-align:left;font-size:0.72rem;letter-spacing:0.05em;text-transform:uppercase}
  td{padding:0.6rem 1rem;border-bottom:1px solid rgba(247,223,30,0.12)}
  tr:last-child td{border-bottom:none}
  tr:nth-child(even) td{background:rgba(247,223,30,0.05)}
  .expr{color:#C9B800}.result{color:#86efac;font-weight:700}.note{color:#f87171;font-style:italic;font-size:0.78rem}
  button{background:#F7DF1E;color:#323330;border:none;border-radius:8px;padding:0.65rem 1.5rem;font-weight:800;font-size:0.9rem;cursor:pointer;margin-top:1rem;font-family:inherit;width:100%;transition:all 0.2s}
  button:hover{background:#FFE566;transform:translateY(-2px);box-shadow:0 4px 14px rgba(247,223,30,0.35)}
  .output{background:#fffde0;border:1px solid rgba(247,223,30,0.3);border-radius:8px;padding:0.75rem 1rem;margin-top:0.75rem;font-family:'JetBrains Mono',monospace;font-size:0.85rem;color:#5a4a00;white-space:pre-line}
</style>
</head>
<body>
<h2>typeof Operator</h2>

<div class="card">
  <div class="label">typeof for every data type</div>
  <table>
    <thead><tr><th>Expression</th><th>Result</th><th>Note</th></tr></thead>
    <tbody>
      <tr><td class="expr">typeof "hello"</td><td class="result">"string"</td><td></td></tr>
      <tr><td class="expr">typeof 42</td><td class="result">"number"</td><td></td></tr>
      <tr><td class="expr">typeof true</td><td class="result">"boolean"</td><td></td></tr>
      <tr><td class="expr">typeof undefined</td><td class="result">"undefined"</td><td></td></tr>
      <tr><td class="expr">typeof null</td><td class="result">"object"</td><td class="note">⚠ historical bug!</td></tr>
      <tr><td class="expr">typeof {}</td><td class="result">"object"</td><td></td></tr>
      <tr><td class="expr">typeof []</td><td class="result">"object"</td><td class="note">arrays are objects</td></tr>
      <tr><td class="expr">typeof function(){}</td><td class="result">"function"</td><td></td></tr>
      <tr><td class="expr">typeof Symbol()</td><td class="result">"symbol"</td><td></td></tr>
      <tr><td class="expr">typeof 9007199n</td><td class="result">"bigint"</td><td></td></tr>
    </tbody>
  </table>
</div>

<div class="card">
  <div class="label">Live typeof checker</div>
  <div style="display:flex;gap:0.5rem;flex-wrap:wrap;margin-bottom:0.75rem">
    <button style="width:auto;padding:0.4rem 0.9rem;font-size:0.8rem" onclick="check('hello')">check "hello"</button>
    <button style="width:auto;padding:0.4rem 0.9rem;font-size:0.8rem" onclick="check(42)">check 42</button>
    <button style="width:auto;padding:0.4rem 0.9rem;font-size:0.8rem" onclick="check(true)">check true</button>
    <button style="width:auto;padding:0.4rem 0.9rem;font-size:0.8rem" onclick="check(null)">check null</button>
    <button style="width:auto;padding:0.4rem 0.9rem;font-size:0.8rem" onclick="check(undefined)">check undefined</button>
    <button style="width:auto;padding:0.4rem 0.9rem;font-size:0.8rem" onclick="check([1,2,3])">check [1,2,3]</button>
  </div>
  <div class="output" id="checker">Select a value above to check its type…</div>
</div>

<script>
function check(val){document.getElementById('checker').textContent='Value: '+JSON.stringify(val)+'\ntypeof: "'+typeof val+'"'}
</script>
</body>
</html>`,
  },

  {
    topic: "template-literals",
    description: "are strings enclosed in backticks that support multi-line text, embedded expressions, and tagged templates.",
    code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Template Literals</title>
<style>
  *{margin:0;padding:0;box-sizing:border-box}
  body{font-family:'Inter',system-ui,sans-serif;background:#FFFDE7;padding:2rem;min-height:100vh}
  h2{color:#323330;font-size:1.4rem;font-weight:900;margin-bottom:1.25rem}
  .card{background:#fff;border-radius:14px;padding:1.5rem;margin-bottom:1rem;border:1.5px solid rgba(247,223,30,0.3);box-shadow:0 4px 14px rgba(247,223,30,0.10)}
  .label{font-size:0.72rem;font-weight:800;color:#C9B800;text-transform:uppercase;letter-spacing:0.07em;margin-bottom:0.65rem}
  pre{background:#0d1117;color:#e6edf3;padding:1rem;border-radius:10px;font-family:'JetBrains Mono',monospace;font-size:0.85rem;line-height:1.65;overflow-x:auto}
  .kw{color:#F7DF1E}.str{color:#a5d6ff}.tl{color:#79c0ff}.expr{color:#F7DF1E}.var{color:#e6edf3}.cmt{color:#6a9955}.num{color:#f2cc60}.fn{color:#dcdcaa}
  .output{background:#fffde0;border:1px solid rgba(247,223,30,0.3);border-radius:8px;padding:0.75rem 1rem;margin-top:0.75rem;font-family:'JetBrains Mono',monospace;font-size:0.88rem;color:#5a4a00;white-space:pre-line;min-height:44px}
  button{background:#F7DF1E;color:#323330;border:none;border-radius:8px;padding:0.5rem 1.2rem;font-weight:800;font-size:0.82rem;cursor:pointer;margin-top:0.75rem;font-family:inherit;transition:all 0.2s}
  button:hover{background:#FFE566;transform:translateY(-2px)}
</style>
</head>
<body>
<h2>Template Literals</h2>

<div class="card">
  <div class="label">String interpolation</div>
  <pre><span class="kw">const</span> <span class="var">name</span> = <span class="str">"Alice"</span>;
<span class="kw">const</span> <span class="var">age</span>  = <span class="num">25</span>;
<span class="cmt">// Old way:</span>
<span class="kw">const</span> <span class="var">old</span>  = <span class="str">"Hi, I'm "</span> + <span class="var">name</span> + <span class="str">" and I'm "</span> + <span class="var">age</span>;
<span class="cmt">// Template literal:</span>
<span class="kw">const</span> <span class="var">msg</span>  = <span class="tl">\`Hi, I'm \${<span class="expr">name</span>} and I'm \${<span class="expr">age</span>}\`</span>;</pre>
  <div class="output" id="out1">Click Run…</div>
  <button onclick="run1()">▶ Run</button>
</div>

<div class="card">
  <div class="label">Expressions inside \${ }</div>
  <pre><span class="kw">const</span> <span class="var">a</span> = <span class="num">10</span>, <span class="var">b</span> = <span class="num">5</span>;
<span class="fn">console</span>.<span class="fn">log</span>(<span class="tl">\`Sum: \${<span class="expr">a + b</span>}\`</span>);       <span class="cmt">// Sum: 15</span>
<span class="fn">console</span>.<span class="fn">log</span>(<span class="tl">\`Product: \${<span class="expr">a * b</span>}\`</span>);   <span class="cmt">// Product: 50</span>
<span class="fn">console</span>.<span class="fn">log</span>(<span class="tl">\`Is even: \${<span class="expr">a % 2 === 0</span>}\`</span>); <span class="cmt">// true</span>
<span class="fn">console</span>.<span class="fn">log</span>(<span class="tl">\`\${<span class="expr">a > b ? "a wins" : "b wins"</span>}\`</span>);</pre>
  <div class="output" id="out2">Click Run…</div>
  <button onclick="run2()">▶ Run</button>
</div>

<div class="card">
  <div class="label">Multi-line strings</div>
  <pre><span class="cmt">// Old way needed \n</span>
<span class="kw">const</span> <span class="var">old</span> = <span class="str">"Line 1\nLine 2\nLine 3"</span>;
<span class="cmt">// Template literal — naturally multi-line!</span>
<span class="kw">const</span> <span class="var">poem</span> = <span class="tl">\`Roses are red,
Violets are blue,
JavaScript is awesome,
And so are you!\`</span>;</pre>
  <div class="output" id="out3">Click Run…</div>
  <button onclick="run3()">▶ Run</button>
</div>

<script>
function run1(){const name="Alice";const age=25;const old="Hi, I'm "+name+" and I'm "+age;const msg=\`Hi, I'm \${name} and I'm \${age}\`;document.getElementById('out1').textContent='old way: "'+old+'"\\ntemplate: "'+msg+'"'}
function run2(){const a=10,b=5;const r=[\`Sum: \${a+b}\`,\`Product: \${a*b}\`,\`Is even: \${a%2===0}\`,\`\${a>b?"a wins":"b wins"}\`];document.getElementById('out2').textContent=r.join('\\n')}
function run3(){const poem=\`Roses are red,\\nViolets are blue,\\nJavaScript is awesome,\\nAnd so are you!\`;document.getElementById('out3').textContent=poem}
</script>
</body>
</html>`,
  },

  /* ══════════════════════════════════════════════
     OPERATORS
  ══════════════════════════════════════════════ */
  {
    topic: "arithmetic-operators",
    description: "perform mathematical operations: addition (+), subtraction (-), multiplication (*), division (/), modulus (%), and exponentiation (**).",
    code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Arithmetic Operators</title>
<style>
  *{margin:0;padding:0;box-sizing:border-box}
  body{font-family:'Inter',system-ui,sans-serif;background:#FFFDE7;padding:2rem;min-height:100vh}
  h2{color:#323330;font-size:1.4rem;font-weight:900;margin-bottom:1.25rem}
  .card{background:#fff;border-radius:14px;padding:1.5rem;margin-bottom:1rem;border:1.5px solid rgba(247,223,30,0.3);box-shadow:0 4px 14px rgba(247,223,30,0.10)}
  .label{font-size:0.72rem;font-weight:800;color:#C9B800;text-transform:uppercase;letter-spacing:0.07em;margin-bottom:0.65rem}
  .calc{display:grid;grid-template-columns:1fr 1fr;gap:0.75rem;margin-bottom:1rem}
  .op-card{background:#FFFDE7;border:1.5px solid rgba(247,223,30,0.3);border-radius:12px;padding:1rem;text-align:center}
  .op-symbol{font-size:1.8rem;font-weight:900;color:#323330;font-family:'JetBrains Mono',monospace}
  .op-name{font-size:0.72rem;font-weight:700;color:#C9B800;text-transform:uppercase;letter-spacing:0.06em;margin:0.25rem 0}
  .op-example{font-family:'JetBrains Mono',monospace;font-size:0.82rem;color:#5a5a2a}
  .interactive{display:flex;gap:0.5rem;align-items:center;flex-wrap:wrap;margin-top:0.75rem}
  input{background:#FFFDE7;border:1.5px solid rgba(247,223,30,0.4);border-radius:8px;padding:0.5rem 0.75rem;font-family:'JetBrains Mono',monospace;font-size:0.95rem;width:80px;color:#323330;text-align:center;outline:none}
  input:focus{border-color:#C9B800;box-shadow:0 0 0 3px rgba(247,223,30,0.2)}
  select{background:#FFFDE7;border:1.5px solid rgba(247,223,30,0.4);border-radius:8px;padding:0.5rem 0.75rem;font-family:'JetBrains Mono',monospace;font-size:1rem;color:#323330;outline:none;cursor:pointer;font-weight:700}
  .result-box{background:#323330;color:#F7DF1E;padding:0.65rem 1.2rem;border-radius:8px;font-family:'JetBrains Mono',monospace;font-size:1.1rem;font-weight:800;min-width:80px;text-align:center}
  button{background:#F7DF1E;color:#323330;border:none;border-radius:8px;padding:0.55rem 1.2rem;font-weight:800;font-size:0.88rem;cursor:pointer;font-family:inherit;transition:all 0.2s}
  button:hover{background:#FFE566;transform:translateY(-2px)}
</style>
</head>
<body>
<h2>Arithmetic Operators</h2>

<div class="card">
  <div class="calc">
    <div class="op-card"><div class="op-symbol">+</div><div class="op-name">Addition</div><div class="op-example">5 + 3 = 8</div></div>
    <div class="op-card"><div class="op-symbol">-</div><div class="op-name">Subtraction</div><div class="op-example">5 - 3 = 2</div></div>
    <div class="op-card"><div class="op-symbol">*</div><div class="op-name">Multiplication</div><div class="op-example">5 * 3 = 15</div></div>
    <div class="op-card"><div class="op-symbol">/</div><div class="op-name">Division</div><div class="op-example">15 / 3 = 5</div></div>
    <div class="op-card"><div class="op-symbol">%</div><div class="op-name">Modulus</div><div class="op-example">7 % 3 = 1</div></div>
    <div class="op-card"><div class="op-symbol">**</div><div class="op-name">Exponent</div><div class="op-example">2 ** 8 = 256</div></div>
  </div>

  <div class="label">Live Calculator</div>
  <div class="interactive">
    <input type="number" id="numA" value="10" />
    <select id="op">
      <option value="+">+</option>
      <option value="-">-</option>
      <option value="*">*</option>
      <option value="/">/</option>
      <option value="%">%</option>
      <option value="**">**</option>
    </select>
    <input type="number" id="numB" value="3" />
    <span style="font-size:1.2rem;font-weight:800;color:#C9B800">=</span>
    <div class="result-box" id="result">?</div>
    <button onclick="calculate()">Calculate</button>
  </div>
</div>

<script>
function calculate(){
  const a=parseFloat(document.getElementById('numA').value);
  const b=parseFloat(document.getElementById('numB').value);
  const op=document.getElementById('op').value;
  let result;
  switch(op){
    case '+':result=a+b;break;
    case '-':result=a-b;break;
    case '*':result=a*b;break;
    case '/':result=b===0?'∞':a/b;break;
    case '%':result=a%b;break;
    case '**':result=Math.pow(a,b);break;
  }
  document.getElementById('result').textContent=result;
}
calculate();
</script>
</body>
</html>`,
  },

  {
    topic: "comparison-operators",
    description: "compare two values and return a boolean. == (loose) vs === (strict), !=, !==, >, <, >=, <=.",
    code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Comparison Operators</title>
<style>
  *{margin:0;padding:0;box-sizing:border-box}
  body{font-family:'Inter',system-ui,sans-serif;background:#FFFDE7;padding:2rem;min-height:100vh}
  h2{color:#323330;font-size:1.4rem;font-weight:900;margin-bottom:1.25rem}
  .card{background:#fff;border-radius:14px;padding:1.5rem;margin-bottom:1rem;border:1.5px solid rgba(247,223,30,0.3);box-shadow:0 4px 14px rgba(247,223,30,0.10)}
  .label{font-size:0.72rem;font-weight:800;color:#C9B800;text-transform:uppercase;letter-spacing:0.07em;margin-bottom:0.65rem}
  table{width:100%;border-collapse:collapse;font-family:'JetBrains Mono',monospace;font-size:0.85rem}
  th{background:#323330;color:#F7DF1E;padding:0.6rem 1rem;text-align:left;font-size:0.7rem;letter-spacing:0.05em;text-transform:uppercase}
  td{padding:0.55rem 1rem;border-bottom:1px solid rgba(247,223,30,0.10)}
  tr:last-child td{border-bottom:none}
  tr:nth-child(even) td{background:rgba(247,223,30,0.04)}
  .op{color:#C9B800;font-weight:700}.expr{color:#5a5a2a}.t{color:#16a34a;font-weight:700}.f{color:#dc2626;font-weight:700}
  .warn{background:rgba(251,191,36,0.10);border:1px solid rgba(251,191,36,0.25);border-radius:10px;padding:1rem;color:#92400e;font-size:0.875rem;line-height:1.65;margin-top:0.75rem}
  button{background:#F7DF1E;color:#323330;border:none;border-radius:8px;padding:0.5rem 1.2rem;font-weight:800;font-size:0.82rem;cursor:pointer;margin-top:0.75rem;font-family:inherit;transition:all 0.2s}
  button:hover{background:#FFE566;transform:translateY(-2px)}
  .output{background:#fffde0;border:1px solid rgba(247,223,30,0.3);border-radius:8px;padding:0.75rem 1rem;margin-top:0.75rem;font-family:'JetBrains Mono',monospace;font-size:0.85rem;color:#5a4a00;white-space:pre-line}
</style>
</head>
<body>
<h2>Comparison Operators</h2>

<div class="card">
  <div class="label">All comparison operators</div>
  <table>
    <thead><tr><th>Operator</th><th>Expression</th><th>Result</th><th>Meaning</th></tr></thead>
    <tbody>
      <tr><td class="op">==</td><td class="expr">5 == "5"</td><td class="t">true</td><td>loose equality (type coercion)</td></tr>
      <tr><td class="op">===</td><td class="expr">5 === "5"</td><td class="f">false</td><td>strict equality (no coercion)</td></tr>
      <tr><td class="op">!=</td><td class="expr">5 != "6"</td><td class="t">true</td><td>loose inequality</td></tr>
      <tr><td class="op">!==</td><td class="expr">5 !== "5"</td><td class="t">true</td><td>strict inequality</td></tr>
      <tr><td class="op">></td><td class="expr">10 > 5</td><td class="t">true</td><td>greater than</td></tr>
      <tr><td class="op"><</td><td class="expr">3 < 8</td><td class="t">true</td><td>less than</td></tr>
      <tr><td class="op">>=</td><td class="expr">5 >= 5</td><td class="t">true</td><td>greater than or equal</td></tr>
      <tr><td class="op"><=</td><td class="expr">4 <= 3</td><td class="f">false</td><td>less than or equal</td></tr>
    </tbody>
  </table>
  <div class="warn">⚠ <strong>Always use === and !==</strong> in modern JavaScript. The loose == can cause unexpected results due to type coercion. For example: <code style="background:rgba(247,223,30,0.2);padding:0.1rem 0.4rem;border-radius:4px">0 == false</code> is true, but <code style="background:rgba(247,223,30,0.2);padding:0.1rem 0.4rem;border-radius:4px">0 === false</code> is false.</div>
</div>

<div class="card">
  <div class="label">Live comparison checker</div>
  <div style="display:flex;gap:0.5rem;flex-wrap:wrap;margin-bottom:0.75rem">
    <button onclick="cmp(5,'==',5)">5 == 5</button>
    <button onclick="cmp(5,'===','5')">5 === "5"</button>
    <button onclick="cmp(0,'==',false)">0 == false</button>
    <button onclick="cmp(0,'===',false)">0 === false</button>
    <button onclick="cmp(null,'==',undefined)">null == undefined</button>
    <button onclick="cmp(null,'===',undefined)">null === undefined</button>
  </div>
  <div class="output" id="checker">Click a comparison above…</div>
</div>

<script>
function cmp(a,op,b){
  let r;
  switch(op){
    case '==':r=a==b;break;
    case '===':r=a===b;break;
  }
  document.getElementById('checker').textContent=JSON.stringify(a)+' '+op+' '+JSON.stringify(b)+' = '+r;
}
</script>
</body>
</html>`,
  },

  {
    topic: "ternary-operator",
    description: "is a concise one-line conditional: condition ? expressionIfTrue : expressionIfFalse. A shorthand for simple if/else.",
    code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Ternary Operator</title>
<style>
  *{margin:0;padding:0;box-sizing:border-box}
  body{font-family:'Inter',system-ui,sans-serif;background:#FFFDE7;padding:2rem;min-height:100vh}
  h2{color:#323330;font-size:1.4rem;font-weight:900;margin-bottom:1.25rem}
  .card{background:#fff;border-radius:14px;padding:1.5rem;margin-bottom:1rem;border:1.5px solid rgba(247,223,30,0.3);box-shadow:0 4px 14px rgba(247,223,30,0.10)}
  .label{font-size:0.72rem;font-weight:800;color:#C9B800;text-transform:uppercase;letter-spacing:0.07em;margin-bottom:0.65rem}
  pre{background:#0d1117;color:#e6edf3;padding:1rem;border-radius:10px;font-family:'JetBrains Mono',monospace;font-size:0.85rem;line-height:1.65;overflow-x:auto}
  .kw{color:#F7DF1E}.str{color:#a5d6ff}.num{color:#f2cc60}.var{color:#e6edf3}.cmt{color:#6a9955}.op{color:#79c0ff}
  .output{background:#fffde0;border:1px solid rgba(247,223,30,0.3);border-radius:8px;padding:0.75rem 1rem;margin-top:0.75rem;font-family:'JetBrains Mono',monospace;font-size:0.9rem;color:#5a4a00;white-space:pre-line;min-height:48px}
  .demo{background:#FFFDE7;border-radius:12px;padding:1.25rem;margin-top:1rem;border:1.5px solid rgba(247,223,30,0.3)}
  .row{display:flex;align-items:center;gap:0.75rem;margin-bottom:0.75rem;flex-wrap:wrap}
  label{font-size:0.82rem;font-weight:700;color:#5a5a2a;min-width:80px}
  input[type=range]{flex:1;accent-color:#F7DF1E;min-width:100px}
  .badge{padding:0.35rem 1rem;border-radius:9999px;font-weight:800;font-size:0.88rem;font-family:'JetBrains Mono',monospace}
  button{background:#F7DF1E;color:#323330;border:none;border-radius:8px;padding:0.5rem 1.2rem;font-weight:800;font-size:0.82rem;cursor:pointer;margin-top:0.75rem;font-family:inherit;transition:all 0.2s}
  button:hover{background:#FFE566;transform:translateY(-2px)}
</style>
</head>
<body>
<h2>Ternary Operator  ?  :</h2>

<div class="card">
  <div class="label">Syntax</div>
  <pre><span class="cmt">// condition ? ifTrue : ifFalse</span>
<span class="kw">const</span> <span class="var">age</span> = <span class="num">20</span>;
<span class="kw">const</span> <span class="var">status</span> = <span class="var">age</span> >= <span class="num">18</span> <span class="op">?</span> <span class="str">"Adult"</span> <span class="op">:</span> <span class="str">"Minor"</span>;
<span class="cmt">// Equivalent if/else:</span>
<span class="kw">let</span> <span class="var">status2</span>;
<span class="kw">if</span> (<span class="var">age</span> >= <span class="num">18</span>) { <span class="var">status2</span> = <span class="str">"Adult"</span>; }
<span class="kw">else</span>            { <span class="var">status2</span> = <span class="str">"Minor"</span>; }</pre>
  <div class="output" id="out1">Click Run…</div>
  <button onclick="run1()">▶ Run</button>
</div>

<div class="card">
  <div class="label">Nested ternaries</div>
  <pre><span class="kw">const</span> <span class="var">score</span> = <span class="num">75</span>;
<span class="kw">const</span> <span class="var">grade</span> = <span class="var">score</span> >= <span class="num">90</span> <span class="op">?</span> <span class="str">"A"</span>
            : <span class="var">score</span> >= <span class="num">80</span> <span class="op">?</span> <span class="str">"B"</span>
            : <span class="var">score</span> >= <span class="num">70</span> <span class="op">?</span> <span class="str">"C"</span>
            : <span class="str">"F"</span>;
<span class="cmt">// grade = "C" for score 75</span></pre>
  <div class="output" id="out2">Click Run…</div>
  <button onclick="run2()">▶ Run</button>
</div>

<div class="card">
  <div class="label">Interactive — slide to set age</div>
  <div class="demo">
    <div class="row">
      <label>Age: <span id="ageVal">20</span></label>
      <input type="range" id="ageSlider" min="1" max="100" value="20" oninput="updateAge()">
    </div>
    <div class="row">
      <label>Status:</label>
      <span id="statusBadge" class="badge" style="background:#F7DF1E;color:#323330">Adult</span>
    </div>
    <div class="output" id="ternaryOut">age >= 18 ? "Adult" : "Minor" → "Adult"</div>
  </div>
</div>

<script>
function run1(){const age=20;const status=age>=18?"Adult":"Minor";document.getElementById('out1').textContent='age = '+age+'\nstatus = "'+status+'"'}
function run2(){const score=75;const grade=score>=90?"A":score>=80?"B":score>=70?"C":"F";document.getElementById('out2').textContent='score = '+score+'\ngrade = "'+grade+'"'}
function updateAge(){const age=+document.getElementById('ageSlider').value;document.getElementById('ageVal').textContent=age;const status=age>=18?"Adult":"Minor";const badge=document.getElementById('statusBadge');badge.textContent=status;badge.style.background=age>=18?"#F7DF1E":"#f87171";badge.style.color=age>=18?"#323330":"#fff";document.getElementById('ternaryOut').textContent='age >= 18 ? "Adult" : "Minor"\n→ "'+status+'"'}
</script>
</body>
</html>`,
  },

  /* ══════════════════════════════════════════════
     CONTROL FLOW
  ══════════════════════════════════════════════ */
  {
    topic: "if-else",
    description: "executes a block of code if a specified condition is true, and an optional else block if it is false.",
    code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>if / else</title>
<style>
  *{margin:0;padding:0;box-sizing:border-box}
  body{font-family:'Inter',system-ui,sans-serif;background:#FFFDE7;padding:2rem;min-height:100vh}
  h2{color:#323330;font-size:1.4rem;font-weight:900;margin-bottom:1.25rem}
  .card{background:#fff;border-radius:14px;padding:1.5rem;margin-bottom:1rem;border:1.5px solid rgba(247,223,30,0.3);box-shadow:0 4px 14px rgba(247,223,30,0.10)}
  .label{font-size:0.72rem;font-weight:800;color:#C9B800;text-transform:uppercase;letter-spacing:0.07em;margin-bottom:0.65rem}
  pre{background:#0d1117;color:#e6edf3;padding:1rem;border-radius:10px;font-family:'JetBrains Mono',monospace;font-size:0.85rem;line-height:1.65;overflow-x:auto}
  .kw{color:#F7DF1E}.str{color:#a5d6ff}.num{color:#f2cc60}.var{color:#e6edf3}.cmt{color:#6a9955}.fn{color:#dcdcaa}
  .demo{background:#FFFDE7;border-radius:12px;padding:1.25rem;border:1.5px solid rgba(247,223,30,0.3);margin-top:1rem}
  input[type=number]{background:#fff;border:1.5px solid rgba(247,223,30,0.4);border-radius:8px;padding:0.6rem 0.9rem;font-family:'JetBrains Mono',monospace;font-size:1rem;width:120px;color:#323330;outline:none;text-align:center}
  input:focus{border-color:#C9B800;box-shadow:0 0 0 3px rgba(247,223,30,0.2)}
  .result{margin-top:1rem;padding:1rem 1.25rem;border-radius:10px;font-weight:700;font-size:1rem;min-height:52px;display:flex;align-items:center;gap:0.5rem}
  button{background:#F7DF1E;color:#323330;border:none;border-radius:8px;padding:0.6rem 1.5rem;font-weight:800;font-size:0.9rem;cursor:pointer;font-family:inherit;transition:all 0.2s;margin-left:0.5rem}
  button:hover{background:#FFE566;transform:translateY(-2px)}
</style>
</head>
<body>
<h2>if / else Statement</h2>

<div class="card">
  <div class="label">Syntax</div>
  <pre><span class="kw">if</span> (condition) {
  <span class="cmt">// runs when condition is truthy</span>
} <span class="kw">else if</span> (anotherCondition) {
  <span class="cmt">// runs when first is false, second is true</span>
} <span class="kw">else</span> {
  <span class="cmt">// runs when all conditions are false</span>
}</pre>
</div>

<div class="card">
  <div class="label">Grade Calculator</div>
  <pre><span class="kw">function</span> <span class="fn">getGrade</span>(<span class="var">score</span>) {
  <span class="kw">if</span> (<span class="var">score</span> >= <span class="num">90</span>)      <span class="kw">return</span> <span class="str">"A — Excellent! 🌟"</span>;
  <span class="kw">else if</span> (<span class="var">score</span> >= <span class="num">80</span>) <span class="kw">return</span> <span class="str">"B — Great! 👍"</span>;
  <span class="kw">else if</span> (<span class="var">score</span> >= <span class="num">70</span>) <span class="kw">return</span> <span class="str">"C — Good 📖"</span>;
  <span class="kw">else if</span> (<span class="var">score</span> >= <span class="num">60</span>) <span class="kw">return</span> <span class="str">"D — Needs work 📝"</span>;
  <span class="kw">else</span>                  <span class="kw">return</span> <span class="str">"F — Study harder 💪"</span>;
}</pre>
  <div class="demo">
    <div style="display:flex;align-items:center;gap:0.5rem;flex-wrap:wrap">
      <span style="font-weight:700;color:#5a5a2a">Enter score (0–100):</span>
      <input type="number" id="score" value="75" min="0" max="100" />
      <button onclick="checkGrade()">Get Grade</button>
    </div>
    <div class="result" id="gradeResult" style="background:#FFFDE7;color:#5a5a2a;border:1.5px solid rgba(247,223,30,0.3)">
      Press "Get Grade" to see your result!
    </div>
  </div>
</div>

<script>
function checkGrade(){
  const score=parseInt(document.getElementById('score').value)||0;
  const el=document.getElementById('gradeResult');
  let grade,bg,color;
  if(score>=90){grade="A — Excellent! 🌟";bg="#dcfce7";color="#166534";}
  else if(score>=80){grade="B — Great! 👍";bg="#d1fae5";color="#065f46";}
  else if(score>=70){grade="C — Good 📖";bg="#FFFDE7";color="#78350f";}
  else if(score>=60){grade="D — Needs work 📝";bg="#fef3c7";color="#92400e";}
  else{grade="F — Study harder 💪";bg="#fee2e2";color="#991b1b";}
  el.style.background=bg;el.style.color=color;el.style.border="none";
  el.textContent='Score: '+score+' → '+grade;
}
checkGrade();
</script>
</body>
</html>`,
  },

  {
    topic: "switch",
    description: "matches an expression against multiple case values and executes the matching block. Use break to prevent fall-through.",
    code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>switch Statement</title>
<style>
  *{margin:0;padding:0;box-sizing:border-box}
  body{font-family:'Inter',system-ui,sans-serif;background:#FFFDE7;padding:2rem;min-height:100vh}
  h2{color:#323330;font-size:1.4rem;font-weight:900;margin-bottom:1.25rem}
  .card{background:#fff;border-radius:14px;padding:1.5rem;margin-bottom:1rem;border:1.5px solid rgba(247,223,30,0.3);box-shadow:0 4px 14px rgba(247,223,30,0.10)}
  .label{font-size:0.72rem;font-weight:800;color:#C9B800;text-transform:uppercase;letter-spacing:0.07em;margin-bottom:0.65rem}
  pre{background:#0d1117;color:#e6edf3;padding:1rem;border-radius:10px;font-family:'JetBrains Mono',monospace;font-size:0.85rem;line-height:1.65;overflow-x:auto}
  .kw{color:#F7DF1E}.str{color:#a5d6ff}.num{color:#f2cc60}.var{color:#e6edf3}.cmt{color:#6a9955}.fn{color:#dcdcaa}
  .day-grid{display:grid;grid-template-columns:repeat(7,1fr);gap:0.4rem;margin-top:1rem}
  .day-btn{padding:0.5rem 0.25rem;border-radius:8px;border:1.5px solid rgba(247,223,30,0.3);background:#FFFDE7;cursor:pointer;font-size:0.78rem;font-weight:700;color:#5a5a2a;transition:all 0.2s;font-family:inherit}
  .day-btn:hover{background:#F7DF1E;color:#323330;border-color:transparent}
  .day-btn.active{background:#323330;color:#F7DF1E;border-color:transparent}
  .output{background:#fffde0;border:1px solid rgba(247,223,30,0.3);border-radius:10px;padding:1rem 1.25rem;margin-top:0.75rem;font-size:1rem;font-weight:700;color:#5a4a00;min-height:52px;display:flex;align-items:center}
</style>
</head>
<body>
<h2>switch Statement</h2>

<div class="card">
  <div class="label">Syntax</div>
  <pre><span class="kw">switch</span> (expression) {
  <span class="kw">case</span> value1:
    <span class="cmt">// code for case 1</span>
    <span class="kw">break</span>;       <span class="cmt">// ← prevents fall-through</span>
  <span class="kw">case</span> value2:
    <span class="cmt">// code for case 2</span>
    <span class="kw">break</span>;
  <span class="kw">default</span>:
    <span class="cmt">// runs if no case matches</span>
}</pre>
</div>

<div class="card">
  <div class="label">Day of Week — Click a day</div>
  <pre><span class="kw">function</span> <span class="fn">getDayInfo</span>(<span class="var">day</span>) {
  <span class="kw">switch</span> (<span class="var">day</span>) {
    <span class="kw">case</span> <span class="str">"Monday"</span>:  <span class="kw">return</span> <span class="str">"Start of the week 💼"</span>;
    <span class="kw">case</span> <span class="str">"Friday"</span>:  <span class="kw">return</span> <span class="str">"TGIF! Weekend soon 🎉"</span>;
    <span class="kw">case</span> <span class="str">"Saturday"</span>:
    <span class="kw">case</span> <span class="str">"Sunday"</span>:   <span class="kw">return</span> <span class="str">"Weekend! 🏖️"</span>;
    <span class="kw">default</span>:        <span class="kw">return</span> <span class="str">"Keep going! 🚀"</span>;
  }
}</pre>
  <div class="day-grid">
    <button class="day-btn" onclick="selectDay('Monday',this)">Mon</button>
    <button class="day-btn" onclick="selectDay('Tuesday',this)">Tue</button>
    <button class="day-btn" onclick="selectDay('Wednesday',this)">Wed</button>
    <button class="day-btn" onclick="selectDay('Thursday',this)">Thu</button>
    <button class="day-btn" onclick="selectDay('Friday',this)">Fri</button>
    <button class="day-btn" onclick="selectDay('Saturday',this)">Sat</button>
    <button class="day-btn" onclick="selectDay('Sunday',this)">Sun</button>
  </div>
  <div class="output" id="dayOut">👆 Click a day to see its message</div>
</div>

<script>
function getDayInfo(day){
  switch(day){
    case "Monday":  return "Start of the week 💼";
    case "Friday":  return "TGIF! Weekend soon 🎉";
    case "Saturday":
    case "Sunday":  return "Weekend! 🏖️";
    default:        return "Keep going! 🚀";
  }
}
function selectDay(day,btn){
  document.querySelectorAll('.day-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('dayOut').textContent=day+': '+getDayInfo(day);
}
</script>
</body>
</html>`,
  },

  /* ══════════════════════════════════════════════
     LOOPS
  ══════════════════════════════════════════════ */
  {
    topic: "for-loop",
    description: "repeats a block of code a specific number of times using an initializer, a condition, and an increment expression.",
    code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>for Loop</title>
<style>
  *{margin:0;padding:0;box-sizing:border-box}
  body{font-family:'Inter',system-ui,sans-serif;background:#FFFDE7;padding:2rem;min-height:100vh}
  h2{color:#323330;font-size:1.4rem;font-weight:900;margin-bottom:1.25rem}
  .card{background:#fff;border-radius:14px;padding:1.5rem;margin-bottom:1rem;border:1.5px solid rgba(247,223,30,0.3);box-shadow:0 4px 14px rgba(247,223,30,0.10)}
  .label{font-size:0.72rem;font-weight:800;color:#C9B800;text-transform:uppercase;letter-spacing:0.07em;margin-bottom:0.65rem}
  pre{background:#0d1117;color:#e6edf3;padding:1rem;border-radius:10px;font-family:'JetBrains Mono',monospace;font-size:0.85rem;line-height:1.65;overflow-x:auto}
  .kw{color:#F7DF1E}.str{color:#a5d6ff}.num{color:#f2cc60}.var{color:#e6edf3}.cmt{color:#6a9955}.fn{color:#dcdcaa}
  .grid{display:flex;flex-wrap:wrap;gap:0.5rem;margin-top:0.75rem}
  .item{background:#F7DF1E;color:#323330;border-radius:8px;padding:0.5rem 0.9rem;font-family:'JetBrains Mono',monospace;font-weight:800;font-size:0.9rem}
  button{background:#F7DF1E;color:#323330;border:none;border-radius:8px;padding:0.55rem 1.3rem;font-weight:800;font-size:0.88rem;cursor:pointer;font-family:inherit;transition:all 0.2s;margin-top:0.75rem}
  button:hover{background:#FFE566;transform:translateY(-2px)}
  .output{background:#fffde0;border:1px solid rgba(247,223,30,0.3);border-radius:8px;padding:0.75rem 1rem;margin-top:0.75rem;font-family:'JetBrains Mono',monospace;font-size:0.85rem;color:#5a4a00;white-space:pre-line;min-height:44px}
</style>
</head>
<body>
<h2>for Loop</h2>

<div class="card">
  <div class="label">Syntax</div>
  <pre><span class="kw">for</span> (<span class="var">init</span>; <span class="var">condition</span>; <span class="var">update</span>) {
  <span class="cmt">// code to repeat</span>
}
<span class="cmt">// Example:</span>
<span class="kw">for</span> (<span class="kw">let</span> <span class="var">i</span> = <span class="num">0</span>; <span class="var">i</span> &lt; <span class="num">5</span>; <span class="var">i</span>++) {
  <span class="fn">console</span>.<span class="fn">log</span>(<span class="var">i</span>); <span class="cmt">// 0 1 2 3 4</span>
}</pre>
  <div class="output" id="out1">Click Run…</div>
  <button onclick="run1()">▶ Run (count 0–4)</button>
</div>

<div class="card">
  <div class="label">Loop through an array</div>
  <pre><span class="kw">const</span> <span class="var">fruits</span> = [<span class="str">"🍎"</span>, <span class="str">"🍌"</span>, <span class="str">"🍇"</span>, <span class="str">"🍊"</span>, <span class="str">"🍓"</span>];
<span class="kw">for</span> (<span class="kw">let</span> <span class="var">i</span> = <span class="num">0</span>; <span class="var">i</span> &lt; <span class="var">fruits</span>.<span class="var">length</span>; <span class="var">i</span>++) {
  <span class="fn">console</span>.<span class="fn">log</span>(<span class="var">fruits</span>[<span class="var">i</span>]);
}</pre>
  <div id="fruitsGrid" class="grid"></div>
  <button onclick="runFruits()">▶ Loop Through Fruits</button>
</div>

<div class="card">
  <div class="label">Multiplication table</div>
  <pre><span class="kw">for</span> (<span class="kw">let</span> <span class="var">i</span> = <span class="num">1</span>; <span class="var">i</span> &lt;= <span class="num">5</span>; <span class="var">i</span>++) {
  <span class="fn">console</span>.<span class="fn">log</span>(<span class="str">\`5 × \${<span class="var">i</span>} = \${<span class="num">5</span> * <span class="var">i</span>}\`</span>);
}</pre>
  <div class="output" id="tableOut">Click Run…</div>
  <button onclick="runTable()">▶ Show 5× Table</button>
</div>

<script>
function run1(){let r=[];for(let i=0;i<5;i++){r.push(i);}document.getElementById('out1').textContent='> i = '+r.join(', ')+'\n> Loop ran '+r.length+' times'}
function runFruits(){const fruits=["🍎","🍌","🍇","🍊","🍓"];const g=document.getElementById('fruitsGrid');g.innerHTML='';for(let i=0;i<fruits.length;i++){const d=document.createElement('div');d.className='item';d.textContent=fruits[i]+' ['+i+']';g.appendChild(d);}}
function runTable(){let r=[];for(let i=1;i<=5;i++){r.push(\`5 × \${i} = \${5*i}\`);}document.getElementById('tableOut').textContent=r.join('\\n')}
</script>
</body>
</html>`,
  },

  {
    topic: "while-loop",
    description: "executes a block of code repeatedly as long as its condition evaluates to true. The condition is checked before each iteration.",
    code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>while Loop</title>
<style>
  *{margin:0;padding:0;box-sizing:border-box}
  body{font-family:'Inter',system-ui,sans-serif;background:#FFFDE7;padding:2rem;min-height:100vh}
  h2{color:#323330;font-size:1.4rem;font-weight:900;margin-bottom:1.25rem}
  .card{background:#fff;border-radius:14px;padding:1.5rem;margin-bottom:1rem;border:1.5px solid rgba(247,223,30,0.3);box-shadow:0 4px 14px rgba(247,223,30,0.10)}
  .label{font-size:0.72rem;font-weight:800;color:#C9B800;text-transform:uppercase;letter-spacing:0.07em;margin-bottom:0.65rem}
  pre{background:#0d1117;color:#e6edf3;padding:1rem;border-radius:10px;font-family:'JetBrains Mono',monospace;font-size:0.85rem;line-height:1.65;overflow-x:auto}
  .kw{color:#F7DF1E}.str{color:#a5d6ff}.num{color:#f2cc60}.var{color:#e6edf3}.cmt{color:#6a9955}.fn{color:#dcdcaa}
  .output{background:#fffde0;border:1px solid rgba(247,223,30,0.3);border-radius:8px;padding:0.75rem 1rem;margin-top:0.75rem;font-family:'JetBrains Mono',monospace;font-size:0.85rem;color:#5a4a00;white-space:pre-line;min-height:48px}
  button{background:#F7DF1E;color:#323330;border:none;border-radius:8px;padding:0.55rem 1.3rem;font-weight:800;font-size:0.88rem;cursor:pointer;font-family:inherit;transition:all 0.2s;margin-top:0.75rem}
  button:hover{background:#FFE566;transform:translateY(-2px)}
  .progress{background:rgba(247,223,30,0.18);border-radius:9999px;height:20px;overflow:hidden;margin-top:0.5rem;border:1px solid rgba(247,223,30,0.3)}
  .progress-bar{height:100%;background:linear-gradient(90deg,#323330,#F7DF1E);border-radius:9999px;transition:width 0.3s ease;width:0}
</style>
</head>
<body>
<h2>while Loop</h2>

<div class="card">
  <div class="label">Basic while loop</div>
  <pre><span class="kw">let</span> <span class="var">count</span> = <span class="num">1</span>;
<span class="kw">while</span> (<span class="var">count</span> &lt;= <span class="num">5</span>) {
  <span class="fn">console</span>.<span class="fn">log</span>(<span class="str">"Count: "</span> + <span class="var">count</span>);
  <span class="var">count</span>++; <span class="cmt">// important! update the counter</span>
}
<span class="cmt">// Prints: Count: 1, 2, 3, 4, 5</span></pre>
  <div class="output" id="out1">Click Run…</div>
  <button onclick="run1()">▶ Run</button>
</div>

<div class="card">
  <div class="label">while with condition — find first power of 2 over 100</div>
  <pre><span class="kw">let</span> <span class="var">n</span> = <span class="num">1</span>;
<span class="kw">while</span> (<span class="var">n</span> &lt;= <span class="num">100</span>) {
  <span class="var">n</span> *= <span class="num">2</span>; <span class="cmt">// double n each iteration</span>
}
<span class="fn">console</span>.<span class="fn">log</span>(<span class="var">n</span>); <span class="cmt">// 128 (first power of 2 &gt; 100)</span></pre>
  <div class="output" id="out2">Click Run…</div>
  <button onclick="run2()">▶ Run</button>
</div>

<div class="card">
  <div class="label">Animated counter — while loop in action</div>
  <div id="counterDisplay" style="font-size:2.5rem;font-weight:900;color:#323330;text-align:center;padding:1rem;font-family:'JetBrains Mono',monospace">0</div>
  <div class="progress"><div class="progress-bar" id="pbar"></div></div>
  <button onclick="animateCount()">▶ Count to 100</button>
</div>

<script>
function run1(){let count=1;let r=[];while(count<=5){r.push('Count: '+count);count++;}document.getElementById('out1').textContent=r.join('\n')}
function run2(){let n=1;let steps=[];while(n<=100){n*=2;steps.push(n);}document.getElementById('out2').textContent='Powers of 2: '+steps.join(' → ')+'\nFirst > 100 = '+n}
function animateCount(){let n=0;const max=100;const disp=document.getElementById('counterDisplay');const bar=document.getElementById('pbar');const timer=setInterval(()=>{n++;disp.textContent=n;bar.style.width=(n/max*100)+'%';if(n>=max){clearInterval(timer);disp.style.color='#C9B800';}},30);}
</script>
</body>
</html>`,
  },

  /* ══════════════════════════════════════════════
     FUNCTIONS
  ══════════════════════════════════════════════ */
  {
    topic: "function-declaration",
    description: "creates a named, reusable function using the function keyword. Declarations are hoisted to the top of their scope.",
    code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Function Declaration</title>
<style>
  *{margin:0;padding:0;box-sizing:border-box}
  body{font-family:'Inter',system-ui,sans-serif;background:#FFFDE7;padding:2rem;min-height:100vh}
  h2{color:#323330;font-size:1.4rem;font-weight:900;margin-bottom:1.25rem}
  .card{background:#fff;border-radius:14px;padding:1.5rem;margin-bottom:1rem;border:1.5px solid rgba(247,223,30,0.3);box-shadow:0 4px 14px rgba(247,223,30,0.10)}
  .label{font-size:0.72rem;font-weight:800;color:#C9B800;text-transform:uppercase;letter-spacing:0.07em;margin-bottom:0.65rem}
  pre{background:#0d1117;color:#e6edf3;padding:1rem;border-radius:10px;font-family:'JetBrains Mono',monospace;font-size:0.85rem;line-height:1.65;overflow-x:auto}
  .kw{color:#F7DF1E}.str{color:#a5d6ff}.num{color:#f2cc60}.var{color:#e6edf3}.cmt{color:#6a9955}.fn{color:#dcdcaa}
  .demo{display:flex;gap:0.5rem;align-items:center;flex-wrap:wrap;margin-top:0.75rem}
  input{background:#FFFDE7;border:1.5px solid rgba(247,223,30,0.4);border-radius:8px;padding:0.5rem 0.75rem;font-family:inherit;font-size:0.95rem;width:160px;color:#323330;outline:none}
  input:focus{border-color:#C9B800}
  button{background:#F7DF1E;color:#323330;border:none;border-radius:8px;padding:0.55rem 1.3rem;font-weight:800;font-size:0.88rem;cursor:pointer;font-family:inherit;transition:all 0.2s}
  button:hover{background:#FFE566;transform:translateY(-2px)}
  .output{background:#fffde0;border:1px solid rgba(247,223,30,0.3);border-radius:8px;padding:0.75rem 1rem;margin-top:0.75rem;font-family:'JetBrains Mono',monospace;font-size:0.9rem;color:#5a4a00;white-space:pre-line;min-height:44px}
</style>
</head>
<body>
<h2>Function Declaration</h2>

<div class="card">
  <div class="label">Syntax</div>
  <pre><span class="kw">function</span> <span class="fn">functionName</span>(<span class="var">parameter1</span>, <span class="var">parameter2</span>) {
  <span class="cmt">// function body</span>
  <span class="kw">return</span> result;  <span class="cmt">// optional return value</span>
}
<span class="cmt">// Call it:</span>
<span class="fn">functionName</span>(<span class="var">arg1</span>, <span class="var">arg2</span>);</pre>
</div>

<div class="card">
  <div class="label">Greeting function</div>
  <pre><span class="kw">function</span> <span class="fn">greet</span>(<span class="var">name</span>) {
  <span class="kw">return</span> <span class="str">\`Hello, \${<span class="var">name</span>}! Welcome to JS. 👋\`</span>;
}
<span class="fn">console</span>.<span class="fn">log</span>(<span class="fn">greet</span>(<span class="str">"Alice"</span>)); <span class="cmt">// Hello, Alice!</span></pre>
  <div class="demo">
    <input id="greetName" type="text" placeholder="Your name…" value="Alice" />
    <button onclick="runGreet()">▶ Greet</button>
  </div>
  <div class="output" id="greetOut">Enter your name and click Greet!</div>
</div>

<div class="card">
  <div class="label">Calculator functions</div>
  <pre><span class="kw">function</span> <span class="fn">add</span>(<span class="var">a</span>, <span class="var">b</span>)      { <span class="kw">return</span> <span class="var">a</span> + <span class="var">b</span>; }
<span class="kw">function</span> <span class="fn">multiply</span>(<span class="var">a</span>, <span class="var">b</span>) { <span class="kw">return</span> <span class="var">a</span> * <span class="var">b</span>; }
<span class="kw">function</span> <span class="fn">power</span>(<span class="var">base</span>, <span class="var">exp</span>) { <span class="kw">return</span> <span class="var">base</span> ** <span class="var">exp</span>; }
<span class="kw">function</span> <span class="fn">isEven</span>(<span class="var">n</span>)     { <span class="kw">return</span> <span class="var">n</span> % <span class="num">2</span> === <span class="num">0</span>; }</pre>
  <div class="output" id="calcOut">Click Run…</div>
  <button onclick="runCalc()">▶ Run all functions</button>
</div>

<script>
function greet(name){return\`Hello, \${name}! Welcome to JavaScript. 👋\`;}
function add(a,b){return a+b;}
function multiply(a,b){return a*b;}
function power(base,exp){return base**exp;}
function isEven(n){return n%2===0;}
function runGreet(){const n=document.getElementById('greetName').value||'World';document.getElementById('greetOut').textContent=greet(n);}
function runCalc(){const r=['add(5, 3) = '+add(5,3),'multiply(6, 7) = '+multiply(6,7),'power(2, 10) = '+power(2,10),'isEven(4) = '+isEven(4),'isEven(7) = '+isEven(7)];document.getElementById('calcOut').textContent=r.join('\n');}
runGreet();
</script>
</body>
</html>`,
  },

  {
    topic: "arrow-functions",
    description: "are a concise ES6 syntax for writing functions using =>. They do not have their own this binding.",
    code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Arrow Functions</title>
<style>
  *{margin:0;padding:0;box-sizing:border-box}
  body{font-family:'Inter',system-ui,sans-serif;background:#0d1117;color:#e6edf3;padding:2rem;min-height:100vh}
  h2{color:#F7DF1E;font-size:1.3rem;font-weight:900;margin-bottom:1.25rem;font-family:'JetBrains Mono',monospace}
  .block{background:#161b22;border-radius:12px;padding:1.25rem;margin-bottom:1rem;border:1px solid rgba(247,223,30,0.12)}
  .label{font-size:0.72rem;font-weight:800;color:#C9B800;text-transform:uppercase;letter-spacing:0.07em;margin-bottom:0.65rem}
  pre{font-family:'JetBrains Mono',monospace;font-size:0.85rem;line-height:1.7;overflow-x:auto}
  .kw{color:#F7DF1E}.str{color:#a5d6ff}.num{color:#f2cc60}.var{color:#e6edf3}.cmt{color:#6a9955}.fn{color:#dcdcaa}.arr{color:#79c0ff}
  .output{background:#0d1117;border:1px solid rgba(247,223,30,0.18);border-radius:8px;padding:0.75rem 1rem;margin-top:0.75rem;font-family:'JetBrains Mono',monospace;font-size:0.85rem;color:#F7DF1E;white-space:pre-line;min-height:44px}
  button{background:#F7DF1E;color:#323330;border:none;border-radius:8px;padding:0.5rem 1.2rem;font-weight:800;font-size:0.82rem;cursor:pointer;margin-top:0.75rem;font-family:inherit;transition:all 0.2s}
  button:hover{background:#FFE566;transform:translateY(-2px)}
</style>
</head>
<body>
<h2>// Arrow Functions  =></h2>

<div class="block">
  <div class="label">Three ways to write an arrow function</div>
  <pre><span class="cmt">// 1. Multi-param, multi-line</span>
<span class="kw">const</span> <span class="fn">add</span> = (<span class="var">a</span>, <span class="var">b</span>) <span class="arr">=></span> {
  <span class="kw">return</span> <span class="var">a</span> + <span class="var">b</span>;
};

<span class="cmt">// 2. Implicit return (single expression)</span>
<span class="kw">const</span> <span class="fn">add</span> = (<span class="var">a</span>, <span class="var">b</span>) <span class="arr">=></span> <span class="var">a</span> + <span class="var">b</span>;

<span class="cmt">// 3. Single param — no parentheses needed</span>
<span class="kw">const</span> <span class="fn">double</span> = <span class="var">n</span> <span class="arr">=></span> <span class="var">n</span> * <span class="num">2</span>;

<span class="cmt">// No params — empty parentheses required</span>
<span class="kw">const</span> <span class="fn">greet</span> = () <span class="arr">=></span> <span class="str">"Hello!"</span>;</pre>
  <div class="output" id="out1">Click Run…</div>
  <button onclick="run1()">▶ Run</button>
</div>

<div class="block">
  <div class="label">Arrow functions with arrays (map, filter)</div>
  <pre><span class="kw">const</span> <span class="var">nums</span> = [<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>, <span class="num">4</span>, <span class="num">5</span>];

<span class="cmt">// double each number</span>
<span class="kw">const</span> <span class="var">doubled</span> = <span class="var">nums</span>.<span class="fn">map</span>(<span class="var">n</span> <span class="arr">=></span> <span class="var">n</span> * <span class="num">2</span>);
<span class="cmt">// [2, 4, 6, 8, 10]</span>

<span class="cmt">// keep only even numbers</span>
<span class="kw">const</span> <span class="var">evens</span> = <span class="var">nums</span>.<span class="fn">filter</span>(<span class="var">n</span> <span class="arr">=></span> <span class="var">n</span> % <span class="num">2</span> === <span class="num">0</span>);
<span class="cmt">// [2, 4]</span></pre>
  <div class="output" id="out2">Click Run…</div>
  <button onclick="run2()">▶ Run</button>
</div>

<div class="block">
  <div class="label">Traditional vs arrow function syntax</div>
  <pre><span class="cmt">// Traditional function</span>
<span class="kw">function</span> <span class="fn">square</span>(<span class="var">x</span>) { <span class="kw">return</span> <span class="var">x</span> * <span class="var">x</span>; }

<span class="cmt">// Same as arrow function</span>
<span class="kw">const</span> <span class="fn">square</span> = <span class="var">x</span> <span class="arr">=></span> <span class="var">x</span> * <span class="var">x</span>;

<span class="cmt">// Called the same way</span>
<span class="fn">square</span>(<span class="num">9</span>); <span class="cmt">// 81</span></pre>
  <div class="output" id="out3">Click Run…</div>
  <button onclick="run3()">▶ Run</button>
</div>

<script>
function run1(){const add=(a,b)=>a+b;const double=n=>n*2;const greet=()=>"Hello!";document.getElementById('out1').textContent='add(3, 4) = '+add(3,4)+'\ndouble(7) = '+double(7)+'\ngreet() = "'+greet()+'"'}
function run2(){const nums=[1,2,3,4,5];const doubled=nums.map(n=>n*2);const evens=nums.filter(n=>n%2===0);document.getElementById('out2').textContent='nums    = ['+nums+']\ndoubled = ['+doubled+']\nevens   = ['+evens+']'}
function run3(){const square=x=>x*x;const results=[1,2,3,4,5,6,7,8,9,10].map(n=>n+' → '+square(n));document.getElementById('out3').textContent=results.join('\n')}
</script>
</body>
</html>`,
  },

  {
    topic: "closures",
    description: "are functions that 'remember' their outer lexical scope even after the outer function has returned. Fundamental to JS patterns.",
    code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Closures</title>
<style>
  *{margin:0;padding:0;box-sizing:border-box}
  body{font-family:'Inter',system-ui,sans-serif;background:#0d1117;color:#e6edf3;padding:2rem;min-height:100vh}
  h2{color:#F7DF1E;font-size:1.3rem;font-weight:900;margin-bottom:1.25rem;font-family:'JetBrains Mono',monospace}
  .block{background:#161b22;border-radius:12px;padding:1.25rem;margin-bottom:1rem;border:1px solid rgba(247,223,30,0.12)}
  .label{font-size:0.72rem;font-weight:800;color:#C9B800;text-transform:uppercase;letter-spacing:0.07em;margin-bottom:0.65rem}
  pre{font-family:'JetBrains Mono',monospace;font-size:0.85rem;line-height:1.7;overflow-x:auto}
  .kw{color:#F7DF1E}.str{color:#a5d6ff}.num{color:#f2cc60}.var{color:#e6edf3}.cmt{color:#6a9955}.fn{color:#dcdcaa}.arr{color:#79c0ff}
  .output{background:#0d1117;border:1px solid rgba(247,223,30,0.18);border-radius:8px;padding:0.75rem 1rem;margin-top:0.75rem;font-family:'JetBrains Mono',monospace;font-size:0.85rem;color:#F7DF1E;white-space:pre-line;min-height:44px}
  .counter-demo{display:flex;align-items:center;gap:1rem;margin-top:0.75rem;flex-wrap:wrap}
  .count-display{background:#323330;color:#F7DF1E;font-size:2rem;font-weight:900;width:70px;height:70px;display:flex;align-items:center;justify-content:center;border-radius:12px;font-family:'JetBrains Mono',monospace;border:2px solid rgba(247,223,30,0.3)}
  button{background:#F7DF1E;color:#323330;border:none;border-radius:8px;padding:0.55rem 1.2rem;font-weight:800;font-size:0.88rem;cursor:pointer;font-family:inherit;transition:all 0.2s}
  button:hover{background:#FFE566;transform:translateY(-2px)}
  .btn-ghost{background:rgba(247,223,30,0.10);color:#C9B800;border:1px solid rgba(247,223,30,0.25)}
  .btn-ghost:hover{background:rgba(247,223,30,0.18)}
</style>
</head>
<body>
<h2>// Closures</h2>

<div class="block">
  <div class="label">What is a closure?</div>
  <pre><span class="kw">function</span> <span class="fn">outer</span>() {
  <span class="kw">let</span> <span class="var">secret</span> = <span class="str">"I am remembered!"</span>;

  <span class="kw">function</span> <span class="fn">inner</span>() {
    <span class="cmt">// inner "closes over" outer's scope</span>
    <span class="fn">console</span>.<span class="fn">log</span>(<span class="var">secret</span>); <span class="cmt">// ✅ still accessible</span>
  }

  <span class="kw">return</span> <span class="fn">inner</span>; <span class="cmt">// return the function itself</span>
}

<span class="kw">const</span> <span class="var">remember</span> = <span class="fn">outer</span>(); <span class="cmt">// outer() has finished</span>
<span class="var">remember</span>();  <span class="cmt">// "I am remembered!" — still works!</span></pre>
  <div class="output" id="out1">Click Run…</div>
  <button onclick="run1()">▶ Run</button>
</div>

<div class="block">
  <div class="label">Counter factory — practical closure</div>
  <pre><span class="kw">function</span> <span class="fn">createCounter</span>() {
  <span class="kw">let</span> <span class="var">count</span> = <span class="num">0</span>; <span class="cmt">// private state</span>
  <span class="kw">return</span> {
    <span class="fn">increment</span>: () <span class="arr">=></span> ++<span class="var">count</span>,
    <span class="fn">decrement</span>: () <span class="arr">=></span> --<span class="var">count</span>,
    <span class="fn">getCount</span>:  () <span class="arr">=></span> <span class="var">count</span>,
  };
}
<span class="kw">const</span> <span class="var">counter</span> = <span class="fn">createCounter</span>();
<span class="var">counter</span>.<span class="fn">increment</span>(); <span class="cmt">// 1</span>
<span class="var">counter</span>.<span class="fn">increment</span>(); <span class="cmt">// 2</span></pre>
  <div class="counter-demo">
    <div class="count-display" id="countDisplay">0</div>
    <button onclick="c.increment();update()">+ Increment</button>
    <button onclick="c.decrement();update()" class="btn-ghost">- Decrement</button>
    <button onclick="c=createCounter();update()" class="btn-ghost">↺ Reset</button>
  </div>
</div>

<script>
function outer(){let secret="I am remembered!";function inner(){return secret;}return inner;}
function run1(){const remember=outer();document.getElementById('out1').textContent='> outer() called and returned\n> outer() has now finished\n> remember() → "'+remember()+'"'}
function createCounter(){let count=0;return{increment:()=>++count,decrement:()=>--count,getCount:()=>count};}
let c=createCounter();
function update(){document.getElementById('countDisplay').textContent=c.getCount();}
</script>
</body>
</html>`,
  },

  /* ══════════════════════════════════════════════
     ARRAYS
  ══════════════════════════════════════════════ */
  {
    topic: "create-arrays",
    description: "demonstrates multiple ways to create arrays: array literals, the Array constructor, Array.from(), and Array.of().",
    code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Creating Arrays</title>
<style>
  *{margin:0;padding:0;box-sizing:border-box}
  body{font-family:'Inter',system-ui,sans-serif;background:#FFFDE7;padding:2rem;min-height:100vh}
  h2{color:#323330;font-size:1.4rem;font-weight:900;margin-bottom:1.25rem}
  .card{background:#fff;border-radius:14px;padding:1.5rem;margin-bottom:1rem;border:1.5px solid rgba(247,223,30,0.3);box-shadow:0 4px 14px rgba(247,223,30,0.10)}
  .label{font-size:0.72rem;font-weight:800;color:#C9B800;text-transform:uppercase;letter-spacing:0.07em;margin-bottom:0.65rem}
  pre{background:#0d1117;color:#e6edf3;padding:1rem;border-radius:10px;font-family:'JetBrains Mono',monospace;font-size:0.85rem;line-height:1.65;overflow-x:auto}
  .kw{color:#F7DF1E}.str{color:#a5d6ff}.num{color:#f2cc60}.var{color:#e6edf3}.cmt{color:#6a9955}.fn{color:#dcdcaa}
  .output{background:#fffde0;border:1px solid rgba(247,223,30,0.3);border-radius:8px;padding:0.75rem 1rem;margin-top:0.75rem;font-family:'JetBrains Mono',monospace;font-size:0.85rem;color:#5a4a00;white-space:pre-line;min-height:44px}
  .visual{display:flex;gap:0.5rem;flex-wrap:wrap;margin-top:0.75rem}
  .item{background:#323330;color:#F7DF1E;border-radius:8px;padding:0.5rem 0.9rem;font-family:'JetBrains Mono',monospace;font-weight:700;font-size:0.88rem;display:flex;flex-direction:column;align-items:center;gap:0.15rem}
  .idx{font-size:0.6rem;opacity:0.5;font-weight:400}
  button{background:#F7DF1E;color:#323330;border:none;border-radius:8px;padding:0.55rem 1.3rem;font-weight:800;font-size:0.88rem;cursor:pointer;font-family:inherit;transition:all 0.2s;margin-top:0.75rem}
  button:hover{background:#FFE566;transform:translateY(-2px)}
</style>
</head>
<body>
<h2>Creating Arrays</h2>

<div class="card">
  <div class="label">1 · Array Literal (most common)</div>
  <pre><span class="kw">const</span> <span class="var">fruits</span> = [<span class="str">"apple"</span>, <span class="str">"banana"</span>, <span class="str">"cherry"</span>];
<span class="kw">const</span> <span class="var">nums</span>   = [<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>, <span class="num">4</span>, <span class="num">5</span>];
<span class="kw">const</span> <span class="var">mixed</span>  = [<span class="str">"JS"</span>, <span class="num">42</span>, <span class="num">true</span>, <span class="num">null</span>]; <span class="cmt">// mixed types</span>
<span class="kw">const</span> <span class="var">empty</span>  = []; <span class="cmt">// empty array</span></pre>
  <div id="literalViz" class="visual"></div>
  <button onclick="runLiteral()">▶ Visualise</button>
</div>

<div class="card">
  <div class="label">2 · Array.from() — convert array-like objects</div>
  <pre><span class="cmt">// From a string</span>
<span class="fn">Array</span>.<span class="fn">from</span>(<span class="str">"hello"</span>);         <span class="cmt">// ["h","e","l","l","o"]</span>
<span class="cmt">// With a mapping function</span>
<span class="fn">Array</span>.<span class="fn">from</span>({length: <span class="num">5</span>}, (_, <span class="var">i</span>) => <span class="var">i</span> + <span class="num">1</span>);
<span class="cmt">// [1, 2, 3, 4, 5]</span></pre>
  <div class="output" id="fromOut">Click Run…</div>
  <button onclick="runFrom()">▶ Run</button>
</div>

<div class="card">
  <div class="label">3 · Accessing elements</div>
  <pre><span class="kw">const</span> <span class="var">arr</span> = [<span class="str">"JS"</span>, <span class="str">"Basic"</span>, <span class="str">"Course"</span>];
<span class="var">arr</span>[<span class="num">0</span>];          <span class="cmt">// "JS"     ← first element</span>
<span class="var">arr</span>[<span class="num">1</span>];          <span class="cmt">// "Basic"</span>
<span class="var">arr</span>.<span class="var">length</span>;      <span class="cmt">// 3</span>
<span class="var">arr</span>[<span class="var">arr</span>.<span class="var">length</span>-<span class="num">1</span>];<span class="cmt">// "Course" ← last element</span>
<span class="var">arr</span>.<span class="fn">at</span>(-<span class="num">1</span>);       <span class="cmt">// "Course" ← modern syntax</span></pre>
  <div class="output" id="accessOut">Click Run…</div>
  <button onclick="runAccess()">▶ Run</button>
</div>

<script>
function runLiteral(){const fruits=["apple","banana","cherry"];const viz=document.getElementById('literalViz');viz.innerHTML='';fruits.forEach((f,i)=>{const d=document.createElement('div');d.className='item';d.innerHTML='<span>'+f+'</span><span class="idx">['+i+']</span>';viz.appendChild(d);});}
function runFrom(){const fromStr=Array.from("hello");const fromLen=Array.from({length:5},(_,i)=>i+1);document.getElementById('fromOut').textContent='from("hello") = ['+fromStr.map(c=>'"'+c+'"').join(', ')+']\nfrom({length:5}, (_, i) => i+1) = ['+fromLen+']'}
function runAccess(){const arr=["JS","Basic","Course"];document.getElementById('accessOut').textContent='arr = ["JS","Basic","Course"]\narr[0] = "'+arr[0]+'"\narr[1] = "'+arr[1]+'"\narr.length = '+arr.length+'\narr[arr.length-1] = "'+arr[arr.length-1]+'"\narr.at(-1) = "'+arr.at(-1)+'"'}
</script>
</body>
</html>`,
  },

  {
    topic: "map",
    description: "creates a new array by calling a function on every element of the original array. The original array is not modified.",
    code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Array.map()</title>
<style>
  *{margin:0;padding:0;box-sizing:border-box}
  body{font-family:'Inter',system-ui,sans-serif;background:#FFFDE7;padding:2rem;min-height:100vh}
  h2{color:#323330;font-size:1.4rem;font-weight:900;margin-bottom:1.25rem}
  .card{background:#fff;border-radius:14px;padding:1.5rem;margin-bottom:1rem;border:1.5px solid rgba(247,223,30,0.3);box-shadow:0 4px 14px rgba(247,223,30,0.10)}
  .label{font-size:0.72rem;font-weight:800;color:#C9B800;text-transform:uppercase;letter-spacing:0.07em;margin-bottom:0.65rem}
  pre{background:#0d1117;color:#e6edf3;padding:1rem;border-radius:10px;font-family:'JetBrains Mono',monospace;font-size:0.85rem;line-height:1.65;overflow-x:auto}
  .kw{color:#F7DF1E}.str{color:#a5d6ff}.num{color:#f2cc60}.var{color:#e6edf3}.cmt{color:#6a9955}.fn{color:#dcdcaa}.arr{color:#79c0ff}
  .transform{display:flex;align-items:center;gap:0.5rem;flex-wrap:wrap;margin-top:0.75rem}
  .arr-display{display:flex;gap:0.35rem;flex-wrap:wrap}
  .item{background:#323330;color:#F7DF1E;border-radius:7px;padding:0.4rem 0.75rem;font-family:'JetBrains Mono',monospace;font-size:0.85rem;font-weight:700}
  .item.new{background:#C9B800;color:#323330}
  .arrow{font-size:1.5rem;color:#C9B800;font-weight:900}
  .label2{font-size:0.72rem;font-weight:700;color:#C9B800;margin-bottom:0.35rem}
  button{background:#F7DF1E;color:#323330;border:none;border-radius:8px;padding:0.55rem 1.3rem;font-weight:800;font-size:0.88rem;cursor:pointer;font-family:inherit;transition:all 0.2s;margin-top:0.75rem}
  button:hover{background:#FFE566;transform:translateY(-2px)}
  .output{background:#fffde0;border:1px solid rgba(247,223,30,0.3);border-radius:8px;padding:0.75rem 1rem;margin-top:0.75rem;font-family:'JetBrains Mono',monospace;font-size:0.85rem;color:#5a4a00;white-space:pre-line}
</style>
</head>
<body>
<h2>Array.map()</h2>

<div class="card">
  <div class="label">Syntax — returns a NEW array</div>
  <pre><span class="kw">const</span> <span class="var">newArray</span> = <span class="var">originalArray</span>.<span class="fn">map</span>((<span class="var">element</span>, <span class="var">index</span>) <span class="arr">=></span> {
  <span class="kw">return</span> <span class="cmt">/* transformed element */</span>;
});</pre>
</div>

<div class="card">
  <div class="label">Double every number</div>
  <pre><span class="kw">const</span> <span class="var">nums</span>    = [<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>, <span class="num">4</span>, <span class="num">5</span>];
<span class="kw">const</span> <span class="var">doubled</span> = <span class="var">nums</span>.<span class="fn">map</span>(<span class="var">n</span> <span class="arr">=></span> <span class="var">n</span> * <span class="num">2</span>);
<span class="cmt">// [2, 4, 6, 8, 10]</span></pre>
  <div id="doubleViz" class="transform">Click Run to visualise</div>
  <button onclick="runDouble()">▶ Run</button>
</div>

<div class="card">
  <div class="label">Transform objects</div>
  <pre><span class="kw">const</span> <span class="var">people</span> = [
  {<span class="str">name</span>: <span class="str">"Alice"</span>, <span class="str">age</span>: <span class="num">25</span>},
  {<span class="str">name</span>: <span class="str">"Bob"</span>,   <span class="str">age</span>: <span class="num">30</span>},
];
<span class="kw">const</span> <span class="var">names</span> = <span class="var">people</span>.<span class="fn">map</span>(<span class="var">p</span> <span class="arr">=></span> <span class="var">p</span>.<span class="var">name</span>);
<span class="cmt">// ["Alice", "Bob"]</span>

<span class="kw">const</span> <span class="var">greetings</span> = <span class="var">people</span>.<span class="fn">map</span>(<span class="var">p</span> <span class="arr">=></span> <span class="str">\`Hi, \${<span class="var">p</span>.<span class="var">name</span>}!\`</span>);
<span class="cmt">// ["Hi, Alice!", "Hi, Bob!"]</span></pre>
  <div class="output" id="objOut">Click Run…</div>
  <button onclick="runObj()">▶ Run</button>
</div>

<script>
function runDouble(){const nums=[1,2,3,4,5];const doubled=nums.map(n=>n*2);const viz=document.getElementById('doubleViz');viz.innerHTML='<div><div class="label2">Original</div><div class="arr-display">'+nums.map(n=>'<div class="item">'+n+'</div>').join('')+'</div></div><div class="arrow">→ map(n⇒n×2) →</div><div><div class="label2">Doubled</div><div class="arr-display">'+doubled.map(n=>'<div class="item new">'+n+'</div>').join('')+'</div></div>';}
function runObj(){const people=[{name:"Alice",age:25},{name:"Bob",age:30},{name:"Charlie",age:22}];const names=people.map(p=>p.name);const greetings=people.map(p=>\`Hi, \${p.name}! (age \${p.age})\`);document.getElementById('objOut').textContent='names = ['+names.map(n=>'"'+n+'"').join(', ')+']\\n\\ngreetings:\\n'+greetings.join('\\n')}
</script>
</body>
</html>`,
  },

  {
    topic: "filter",
    description: "creates a new array with all elements that pass a test function. The original array is not modified.",
    code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Array.filter()</title>
<style>
  *{margin:0;padding:0;box-sizing:border-box}
  body{font-family:'Inter',system-ui,sans-serif;background:#FFFDE7;padding:2rem;min-height:100vh}
  h2{color:#323330;font-size:1.4rem;font-weight:900;margin-bottom:1.25rem}
  .card{background:#fff;border-radius:14px;padding:1.5rem;margin-bottom:1rem;border:1.5px solid rgba(247,223,30,0.3);box-shadow:0 4px 14px rgba(247,223,30,0.10)}
  .label{font-size:0.72rem;font-weight:800;color:#C9B800;text-transform:uppercase;letter-spacing:0.07em;margin-bottom:0.65rem}
  pre{background:#0d1117;color:#e6edf3;padding:1rem;border-radius:10px;font-family:'JetBrains Mono',monospace;font-size:0.85rem;line-height:1.65;overflow-x:auto}
  .kw{color:#F7DF1E}.str{color:#a5d6ff}.num{color:#f2cc60}.var{color:#e6edf3}.cmt{color:#6a9955}.fn{color:#dcdcaa}.arr{color:#79c0ff}
  .arr-display{display:flex;gap:0.35rem;flex-wrap:wrap;margin:0.5rem 0}
  .item{border-radius:7px;padding:0.4rem 0.75rem;font-family:'JetBrains Mono',monospace;font-size:0.88rem;font-weight:700;transition:all 0.3s}
  .pass{background:#dcfce7;color:#166534;border:1.5px solid #86efac}
  .fail{background:#fee2e2;color:#991b1b;border:1.5px solid #fca5a5;opacity:0.45;text-decoration:line-through}
  .output{background:#fffde0;border:1px solid rgba(247,223,30,0.3);border-radius:8px;padding:0.75rem 1rem;margin-top:0.75rem;font-family:'JetBrains Mono',monospace;font-size:0.85rem;color:#5a4a00;white-space:pre-line;min-height:44px}
  button{background:#F7DF1E;color:#323330;border:none;border-radius:8px;padding:0.55rem 1.3rem;font-weight:800;font-size:0.88rem;cursor:pointer;font-family:inherit;transition:all 0.2s;margin-top:0.75rem}
  button:hover{background:#FFE566;transform:translateY(-2px)}
  .label2{font-size:0.72rem;font-weight:700;color:#C9B800;margin-bottom:0.3rem}
</style>
</head>
<body>
<h2>Array.filter()</h2>

<div class="card">
  <div class="label">Filter even numbers</div>
  <pre><span class="kw">const</span> <span class="var">nums</span>  = [<span class="num">1</span>,<span class="num">2</span>,<span class="num">3</span>,<span class="num">4</span>,<span class="num">5</span>,<span class="num">6</span>,<span class="num">7</span>,<span class="num">8</span>];
<span class="kw">const</span> <span class="var">evens</span> = <span class="var">nums</span>.<span class="fn">filter</span>(<span class="var">n</span> <span class="arr">=></span> <span class="var">n</span> % <span class="num">2</span> === <span class="num">0</span>);
<span class="cmt">// [2, 4, 6, 8]</span></pre>
  <div class="label2">All numbers:</div>
  <div id="allNums" class="arr-display"></div>
  <div class="label2">After filter (evens only):</div>
  <div id="evenNums" class="arr-display"></div>
  <button onclick="runEvens()">▶ Filter Evens</button>
</div>

<div class="card">
  <div class="label">Filter objects by condition</div>
  <pre><span class="kw">const</span> <span class="var">products</span> = [
  {<span class="str">name</span>: <span class="str">"Laptop"</span>,  <span class="str">price</span>: <span class="num">999</span>},
  {<span class="str">name</span>: <span class="str">"Mouse"</span>,   <span class="str">price</span>: <span class="num">25</span>},
  {<span class="str">name</span>: <span class="str">"Monitor"</span>, <span class="str">price</span>: <span class="num">350</span>},
  {<span class="str">name</span>: <span class="str">"Keyboard"</span>,<span class="str">price</span>: <span class="num">80</span>},
];
<span class="kw">const</span> <span class="var">expensive</span> = <span class="var">products</span>.<span class="fn">filter</span>(<span class="var">p</span> <span class="arr">=></span> <span class="var">p</span>.<span class="var">price</span> > <span class="num">100</span>);</pre>
  <div class="output" id="prodOut">Click Run…</div>
  <button onclick="runProducts()">▶ Filter > $100</button>
</div>

<script>
function runEvens(){const nums=[1,2,3,4,5,6,7,8];const evens=nums.filter(n=>n%2===0);const allEl=document.getElementById('allNums');allEl.innerHTML='';nums.forEach(n=>{const d=document.createElement('div');d.className='item '+(n%2===0?'pass':'fail');d.textContent=n;allEl.appendChild(d);});const evenEl=document.getElementById('evenNums');evenEl.innerHTML='';evens.forEach(n=>{const d=document.createElement('div');d.className='item pass';d.textContent=n;evenEl.appendChild(d);});}
function runProducts(){const products=[{name:"Laptop",price:999},{name:"Mouse",price:25},{name:"Monitor",price:350},{name:"Keyboard",price:80}];const expensive=products.filter(p=>p.price>100);document.getElementById('prodOut').textContent='All products: '+products.length+'\nFiltered (price > $100): '+expensive.length+'\n\n'+expensive.map(p=>p.name+': $'+p.price).join('\n')}
</script>
</body>
</html>`,
  },

  {
    topic: "reduce",
    description: "reduces an array to a single value by executing a reducer function on each element, accumulating a result.",
    code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Array.reduce()</title>
<style>
  *{margin:0;padding:0;box-sizing:border-box}
  body{font-family:'Inter',system-ui,sans-serif;background:#0d1117;color:#e6edf3;padding:2rem;min-height:100vh}
  h2{color:#F7DF1E;font-size:1.3rem;font-weight:900;margin-bottom:1.25rem;font-family:'JetBrains Mono',monospace}
  .block{background:#161b22;border-radius:12px;padding:1.25rem;margin-bottom:1rem;border:1px solid rgba(247,223,30,0.12)}
  .label{font-size:0.72rem;font-weight:800;color:#C9B800;text-transform:uppercase;letter-spacing:0.07em;margin-bottom:0.65rem}
  pre{font-family:'JetBrains Mono',monospace;font-size:0.85rem;line-height:1.7;overflow-x:auto}
  .kw{color:#F7DF1E}.str{color:#a5d6ff}.num{color:#f2cc60}.var{color:#e6edf3}.cmt{color:#6a9955}.fn{color:#dcdcaa}.arr{color:#79c0ff}
  .output{background:#0d1117;border:1px solid rgba(247,223,30,0.18);border-radius:8px;padding:0.75rem 1rem;margin-top:0.75rem;font-family:'JetBrains Mono',monospace;font-size:0.85rem;color:#F7DF1E;white-space:pre-line;min-height:44px}
  .steps{display:flex;gap:0.4rem;flex-wrap:wrap;margin-top:0.75rem;align-items:center}
  .step{background:#323330;border:1px solid rgba(247,223,30,0.2);border-radius:8px;padding:0.45rem 0.75rem;font-family:'JetBrains Mono',monospace;font-size:0.8rem;color:#e6edf3}
  .step .acc{color:#F7DF1E;font-weight:700}.step .plus{color:#C9B800}.arrow{color:#C9B800;font-weight:900;font-size:1.1rem}
  button{background:#F7DF1E;color:#323330;border:none;border-radius:8px;padding:0.5rem 1.2rem;font-weight:800;font-size:0.82rem;cursor:pointer;margin-top:0.75rem;font-family:inherit;transition:all 0.2s}
  button:hover{background:#FFE566;transform:translateY(-2px)}
</style>
</head>
<body>
<h2>// Array.reduce()</h2>

<div class="block">
  <div class="label">Syntax</div>
  <pre><span class="var">array</span>.<span class="fn">reduce</span>((<span class="var">accumulator</span>, <span class="var">currentValue</span>) <span class="arr">=></span> {
  <span class="kw">return</span> <span class="var">accumulator</span> + <span class="var">currentValue</span>;
}, <span class="var">initialValue</span>);</pre>
</div>

<div class="block">
  <div class="label">Sum all numbers</div>
  <pre><span class="kw">const</span> <span class="var">nums</span> = [<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>, <span class="num">4</span>, <span class="num">5</span>];
<span class="kw">const</span> <span class="var">sum</span> = <span class="var">nums</span>.<span class="fn">reduce</span>((<span class="var">acc</span>, <span class="var">curr</span>) <span class="arr">=></span> <span class="var">acc</span> + <span class="var">curr</span>, <span class="num">0</span>);
<span class="cmt">// 0+1=1 → 1+2=3 → 3+3=6 → 6+4=10 → 10+5=15</span></pre>
  <div id="sumSteps" class="steps">Click Run to see step-by-step</div>
  <button onclick="runSum()">▶ Run (show steps)</button>
</div>

<div class="block">
  <div class="label">reduce to find max value</div>
  <pre><span class="kw">const</span> <span class="var">nums</span> = [<span class="num">3</span>, <span class="num">9</span>, <span class="num">1</span>, <span class="num">7</span>, <span class="num">5</span>, <span class="num">12</span>, <span class="num">2</span>];
<span class="kw">const</span> <span class="var">max</span> = <span class="var">nums</span>.<span class="fn">reduce</span>(
  (<span class="var">acc</span>, <span class="var">curr</span>) <span class="arr">=></span> <span class="var">curr</span> > <span class="var">acc</span> ? <span class="var">curr</span> : <span class="var">acc</span>, <span class="num">0</span>
);
<span class="cmt">// 12</span></pre>
  <div class="output" id="maxOut">Click Run…</div>
  <button onclick="runMax()">▶ Run</button>
</div>

<div class="block">
  <div class="label">reduce to count occurrences</div>
  <pre><span class="kw">const</span> <span class="var">words</span> = [<span class="str">"js"</span>,<span class="str">"css"</span>,<span class="str">"js"</span>,<span class="str">"html"</span>,<span class="str">"js"</span>,<span class="str">"css"</span>];
<span class="kw">const</span> <span class="var">count</span> = <span class="var">words</span>.<span class="fn">reduce</span>((<span class="var">acc</span>, <span class="var">word</span>) => {
  <span class="var">acc</span>[<span class="var">word</span>] = (<span class="var">acc</span>[<span class="var">word</span>] || <span class="num">0</span>) + <span class="num">1</span>;
  <span class="kw">return</span> <span class="var">acc</span>;
}, {});</pre>
  <div class="output" id="countOut">Click Run…</div>
  <button onclick="runCount()">▶ Run</button>
</div>

<script>
function runSum(){const nums=[1,2,3,4,5];let acc=0;const steps=[];nums.forEach(curr=>{const prev=acc;acc+=curr;steps.push({prev,curr,acc});});const el=document.getElementById('sumSteps');el.innerHTML='<div class="step"><span class="acc">0</span></div>';steps.forEach(s=>{el.innerHTML+='<div class="arrow">+'+s.curr+'=</div><div class="step"><span class="acc">'+s.acc+'</span></div>';});}
function runMax(){const nums=[3,9,1,7,5,12,2];const max=nums.reduce((acc,curr)=>curr>acc?curr:acc,0);document.getElementById('maxOut').textContent='nums = ['+nums+']\nmax = '+max}
function runCount(){const words=["js","css","js","html","js","css"];const count=words.reduce((acc,word)=>{acc[word]=(acc[word]||0)+1;return acc;},{});document.getElementById('countOut').textContent='words = ['+words.map(w=>'"'+w+'"').join(', ')+']\n\ncount = '+JSON.stringify(count,null,2)}
</script>
</body>
</html>`,
  },

  /* ══════════════════════════════════════════════
     OBJECTS
  ══════════════════════════════════════════════ */
  {
    topic: "create-objects",
    description: "demonstrates creating objects using object literals with properties and methods, and how to access and modify them.",
    code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Creating Objects</title>
<style>
  *{margin:0;padding:0;box-sizing:border-box}
  body{font-family:'Inter',system-ui,sans-serif;background:#FFFDE7;padding:2rem;min-height:100vh}
  h2{color:#323330;font-size:1.4rem;font-weight:900;margin-bottom:1.25rem}
  .card{background:#fff;border-radius:14px;padding:1.5rem;margin-bottom:1rem;border:1.5px solid rgba(247,223,30,0.3);box-shadow:0 4px 14px rgba(247,223,30,0.10)}
  .label{font-size:0.72rem;font-weight:800;color:#C9B800;text-transform:uppercase;letter-spacing:0.07em;margin-bottom:0.65rem}
  pre{background:#0d1117;color:#e6edf3;padding:1rem;border-radius:10px;font-family:'JetBrains Mono',monospace;font-size:0.85rem;line-height:1.65;overflow-x:auto}
  .kw{color:#F7DF1E}.str{color:#a5d6ff}.num{color:#f2cc60}.var{color:#e6edf3}.cmt{color:#6a9955}.fn{color:#dcdcaa}.prop{color:#79c0ff}
  .profile{background:#FFFDE7;border-radius:12px;padding:1.25rem;border:1.5px solid rgba(247,223,30,0.3);margin-top:0.75rem}
  .profile-row{display:flex;gap:0.5rem;align-items:center;margin-bottom:0.5rem;font-size:0.9rem}
  .profile-key{font-family:'JetBrains Mono',monospace;font-weight:700;color:#C9B800;min-width:90px}
  .profile-val{color:#5a4a00}
  .output{background:#fffde0;border:1px solid rgba(247,223,30,0.3);border-radius:8px;padding:0.75rem 1rem;margin-top:0.75rem;font-family:'JetBrains Mono',monospace;font-size:0.85rem;color:#5a4a00;white-space:pre-line;min-height:44px}
  button{background:#F7DF1E;color:#323330;border:none;border-radius:8px;padding:0.55rem 1.3rem;font-weight:800;font-size:0.88rem;cursor:pointer;font-family:inherit;transition:all 0.2s;margin-top:0.75rem}
  button:hover{background:#FFE566;transform:translateY(-2px)}
</style>
</head>
<body>
<h2>Creating Objects</h2>

<div class="card">
  <div class="label">Object literal syntax</div>
  <pre><span class="kw">const</span> <span class="var">person</span> = {
  <span class="prop">name</span>: <span class="str">"Alice"</span>,
  <span class="prop">age</span>: <span class="num">28</span>,
  <span class="prop">isStudent</span>: <span class="kw">false</span>,
  <span class="prop">greet</span>: <span class="kw">function</span>() {           <span class="cmt">// method</span>
    <span class="kw">return</span> <span class="str">\`Hi! I'm \${this.name}\`</span>;
  },
};</pre>
  <div class="profile" id="personCard">Click to build the object…</div>
  <button onclick="buildPerson()">▶ Create Object</button>
</div>

<div class="card">
  <div class="label">Accessing and modifying properties</div>
  <pre><span class="cmt">// Dot notation</span>
<span class="var">person</span>.<span class="prop">name</span>;              <span class="cmt">// "Alice"</span>
<span class="cmt">// Bracket notation (dynamic keys)</span>
<span class="var">person</span>[<span class="str">"age"</span>];            <span class="cmt">// 28</span>

<span class="cmt">// Modify a property</span>
<span class="var">person</span>.<span class="prop">age</span> = <span class="num">29</span>;
<span class="cmt">// Add a new property</span>
<span class="var">person</span>.<span class="prop">city</span> = <span class="str">"London"</span>;
<span class="cmt">// Delete a property</span>
<span class="kw">delete</span> <span class="var">person</span>.<span class="prop">isStudent</span>;</pre>
  <div class="output" id="accessOut">Click Run…</div>
  <button onclick="runAccess()">▶ Run</button>
</div>

<div class="card">
  <div class="label">Calling an object method</div>
  <pre><span class="kw">const</span> <span class="var">car</span> = {
  <span class="prop">brand</span>: <span class="str">"Toyota"</span>,
  <span class="prop">model</span>: <span class="str">"Corolla"</span>,
  <span class="prop">year</span>: <span class="num">2023</span>,
  <span class="prop">describe</span>() {
    <span class="kw">return</span> <span class="str">\`\${this.year} \${this.brand} \${this.model}\`</span>;
  },
};
<span class="fn">console</span>.<span class="fn">log</span>(<span class="var">car</span>.<span class="fn">describe</span>());</pre>
  <div class="output" id="carOut">Click Run…</div>
  <button onclick="runCar()">▶ Run</button>
</div>

<script>
function buildPerson(){const person={name:"Alice",age:28,isStudent:false};const card=document.getElementById('personCard');card.innerHTML=\`<div class="profile-row"><span class="profile-key">name:</span><span class="profile-val">"\${person.name}"</span></div><div class="profile-row"><span class="profile-key">age:</span><span class="profile-val">\${person.age}</span></div><div class="profile-row"><span class="profile-key">isStudent:</span><span class="profile-val">\${person.isStudent}</span></div><div class="profile-row"><span class="profile-key">greet():</span><span class="profile-val">"Hi! I'm \${person.name}"</span></div>\`;}
function runAccess(){const person={name:"Alice",age:28,isStudent:false};const dotNotation=person.name;const bracketNotation=person["age"];person.age=29;person.city="London";delete person.isStudent;document.getElementById('accessOut').textContent='person.name (dot) = "'+dotNotation+'"\nperson["age"] (bracket) = '+bracketNotation+'\nAfter person.age = 29 → '+person.age+'\nAfter person.city = "London" → "'+person.city+'"\nAfter delete person.isStudent → '+person.isStudent}
function runCar(){const car={brand:"Toyota",model:"Corolla",year:2023,describe(){return\`\${this.year} \${this.brand} \${this.model}\`;}};document.getElementById('carOut').textContent='car.describe() = "'+car.describe()+'"'}
</script>
</body>
</html>`,
  },

  {
    topic: "json",
    description: "stands for JavaScript Object Notation. Use JSON.stringify() to convert objects to strings and JSON.parse() to convert back.",
    code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>JSON</title>
<style>
  *{margin:0;padding:0;box-sizing:border-box}
  body{font-family:'Inter',system-ui,sans-serif;background:#FFFDE7;padding:2rem;min-height:100vh}
  h2{color:#323330;font-size:1.4rem;font-weight:900;margin-bottom:1.25rem}
  .card{background:#fff;border-radius:14px;padding:1.5rem;margin-bottom:1rem;border:1.5px solid rgba(247,223,30,0.3);box-shadow:0 4px 14px rgba(247,223,30,0.10)}
  .label{font-size:0.72rem;font-weight:800;color:#C9B800;text-transform:uppercase;letter-spacing:0.07em;margin-bottom:0.65rem}
  pre{background:#0d1117;color:#e6edf3;padding:1rem;border-radius:10px;font-family:'JetBrains Mono',monospace;font-size:0.85rem;line-height:1.65;overflow-x:auto}
  .kw{color:#F7DF1E}.str{color:#a5d6ff}.num{color:#f2cc60}.var{color:#e6edf3}.cmt{color:#6a9955}.fn{color:#dcdcaa}.prop{color:#79c0ff}
  .flow{display:flex;align-items:stretch;gap:0;margin-top:1rem;background:#FFFDE7;border-radius:12px;overflow:hidden;border:1.5px solid rgba(247,223,30,0.3)}
  .flow-box{flex:1;padding:1rem;min-width:0}
  .flow-arrow{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0.5rem;background:rgba(247,223,30,0.15);font-size:0.72rem;font-weight:800;color:#C9B800;text-align:center;gap:0.25rem;min-width:70px}
  .flow-title{font-size:0.65rem;font-weight:800;color:#C9B800;text-transform:uppercase;letter-spacing:0.06em;margin-bottom:0.4rem}
  .flow-content{font-family:'JetBrains Mono',monospace;font-size:0.78rem;color:#5a4a00;word-break:break-all;line-height:1.6}
  button{background:#F7DF1E;color:#323330;border:none;border-radius:8px;padding:0.55rem 1.3rem;font-weight:800;font-size:0.88rem;cursor:pointer;font-family:inherit;transition:all 0.2s;margin-top:0.75rem}
  button:hover{background:#FFE566;transform:translateY(-2px)}
</style>
</head>
<body>
<h2>JSON — JavaScript Object Notation</h2>

<div class="card">
  <div class="label">JSON.stringify() — Object → String</div>
  <pre><span class="kw">const</span> <span class="var">user</span> = {
  <span class="prop">name</span>: <span class="str">"Alice"</span>,
  <span class="prop">age</span>: <span class="num">28</span>,
  <span class="prop">skills</span>: [<span class="str">"HTML"</span>, <span class="str">"CSS"</span>, <span class="str">"JS"</span>],
};
<span class="cmt">// Convert object to JSON string</span>
<span class="kw">const</span> <span class="var">json</span> = <span class="fn">JSON</span>.<span class="fn">stringify</span>(<span class="var">user</span>);
<span class="cmt">// Pretty-print with 2 spaces indentation</span>
<span class="kw">const</span> <span class="var">pretty</span> = <span class="fn">JSON</span>.<span class="fn">stringify</span>(<span class="var">user</span>, <span class="kw">null</span>, <span class="num">2</span>);</pre>

  <div class="flow" id="stringifyFlow">
    <div class="flow-box"><div class="flow-title">JS Object</div><div class="flow-content">{ name: "Alice", age: 28, skills: [...] }</div></div>
    <div class="flow-arrow">→<br>stringify<br>→</div>
    <div class="flow-box"><div class="flow-title">JSON String</div><div class="flow-content" id="jsonStr">Click Run…</div></div>
  </div>
  <button onclick="runStringify()">▶ Stringify</button>
</div>

<div class="card">
  <div class="label">JSON.parse() — String → Object</div>
  <pre><span class="kw">const</span> <span class="var">jsonStr</span> = <span class="str">'{"name":"Bob","score":95}'</span>;
<span class="kw">const</span> <span class="var">obj</span>     = <span class="fn">JSON</span>.<span class="fn">parse</span>(<span class="var">jsonStr</span>);
<span class="fn">console</span>.<span class="fn">log</span>(<span class="var">obj</span>.<span class="prop">name</span>);  <span class="cmt">// "Bob"</span>
<span class="fn">console</span>.<span class="fn">log</span>(<span class="var">obj</span>.<span class="prop">score</span>); <span class="cmt">// 95</span></pre>

  <div class="flow">
    <div class="flow-box"><div class="flow-title">JSON String</div><div class="flow-content">{"name":"Bob","score":95}</div></div>
    <div class="flow-arrow">→<br>parse<br>→</div>
    <div class="flow-box"><div class="flow-title">JS Object</div><div class="flow-content" id="parsedObj">Click Run…</div></div>
  </div>
  <button onclick="runParse()">▶ Parse</button>
</div>

<script>
function runStringify(){const user={name:"Alice",age:28,skills:["HTML","CSS","JS"]};const json=JSON.stringify(user,null,2);document.getElementById('jsonStr').textContent=json;}
function runParse(){const jsonStr='{"name":"Bob","score":95,"hobbies":["coding","reading"]}';const obj=JSON.parse(jsonStr);document.getElementById('parsedObj').textContent='obj.name = "'+obj.name+'"\nobj.score = '+obj.score+'\nobj.hobbies = ['+obj.hobbies.map(h=>'"'+h+'"').join(', ')+']';}
</script>
</body>
</html>`,
  },

  /* ══════════════════════════════════════════════
     DOM MANIPULATION
  ══════════════════════════════════════════════ */
  {
    topic: "querySelector",
    description: "selects the first element that matches a CSS selector. Use querySelectorAll() to get all matching elements.",
    code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>querySelector</title>
<style>
  *{margin:0;padding:0;box-sizing:border-box}
  body{font-family:'Inter',system-ui,sans-serif;background:#FFFDE7;padding:2rem;min-height:100vh}
  h2{color:#323330;font-size:1.4rem;font-weight:900;margin-bottom:1.25rem}
  .card{background:#fff;border-radius:14px;padding:1.5rem;margin-bottom:1rem;border:1.5px solid rgba(247,223,30,0.3);box-shadow:0 4px 14px rgba(247,223,30,0.10)}
  .label{font-size:0.72rem;font-weight:800;color:#C9B800;text-transform:uppercase;letter-spacing:0.07em;margin-bottom:0.65rem}
  pre{background:#0d1117;color:#e6edf3;padding:1rem;border-radius:10px;font-family:'JetBrains Mono',monospace;font-size:0.85rem;line-height:1.65;overflow-x:auto}
  .kw{color:#F7DF1E}.str{color:#a5d6ff}.fn{color:#dcdcaa}.var{color:#e6edf3}.cmt{color:#6a9955}
  #demo-area{background:#FFFDE7;border:1.5px dashed rgba(247,223,30,0.5);border-radius:12px;padding:1.25rem;margin-top:0.75rem}
  #demo-area h3{color:#323330;margin-bottom:0.5rem;font-size:1rem}
  #demo-area p{color:#5a5a2a;font-size:0.9rem;line-height:1.6;margin-bottom:0.5rem}
  .highlight{background:#F7DF1E!important;color:#323330!important;outline:3px solid #C9B800;outline-offset:2px;border-radius:4px;transition:all 0.3s}
  .item-list{list-style:none;display:flex;flex-direction:column;gap:0.4rem}
  .item-list li{background:#fff;border:1.5px solid rgba(247,223,30,0.3);border-radius:8px;padding:0.5rem 0.85rem;font-size:0.88rem;color:#5a4a00;transition:all 0.3s}
  .btn-row{display:flex;gap:0.5rem;flex-wrap:wrap;margin-top:0.75rem}
  button{background:#F7DF1E;color:#323330;border:none;border-radius:8px;padding:0.45rem 1rem;font-weight:800;font-size:0.82rem;cursor:pointer;font-family:inherit;transition:all 0.2s}
  button:hover{background:#FFE566;transform:translateY(-2px)}
  .output{background:#fffde0;border:1px solid rgba(247,223,30,0.3);border-radius:8px;padding:0.65rem 1rem;margin-top:0.75rem;font-family:'JetBrains Mono',monospace;font-size:0.82rem;color:#5a4a00}
</style>
</head>
<body>
<h2>querySelector & querySelectorAll</h2>

<div class="card">
  <div class="label">Selectors</div>
  <pre><span class="cmt">// Select by tag</span>
<span class="fn">document</span>.<span class="fn">querySelector</span>(<span class="str">"p"</span>);
<span class="cmt">// Select by ID (#)</span>
<span class="fn">document</span>.<span class="fn">querySelector</span>(<span class="str">"#title"</span>);
<span class="cmt">// Select by class (.)</span>
<span class="fn">document</span>.<span class="fn">querySelector</span>(<span class="str">".item"</span>);
<span class="cmt">// Select ALL matching elements</span>
<span class="fn">document</span>.<span class="fn">querySelectorAll</span>(<span class="str">".item"</span>);</pre>

  <div id="demo-area">
    <h3 id="demo-title">Demo Heading</h3>
    <p class="demo-paragraph">First paragraph in the demo area.</p>
    <p class="demo-paragraph">Second paragraph in the demo area.</p>
    <ul class="item-list">
      <li class="list-item">Item One</li>
      <li class="list-item">Item Two</li>
      <li class="list-item">Item Three</li>
    </ul>
  </div>

  <div class="btn-row">
    <button onclick="selectOne('#demo-title')">Select #demo-title</button>
    <button onclick="selectOne('.demo-paragraph')">Select first .paragraph</button>
    <button onclick="selectAll('.list-item')">SelectAll .list-item</button>
    <button onclick="resetAll()">Reset</button>
  </div>
  <div class="output" id="selectorOut">Click a button to select elements…</div>
</div>

<script>
function resetAll(){document.querySelectorAll('.highlight').forEach(el=>el.classList.remove('highlight'));}
function selectOne(selector){resetAll();const el=document.querySelector(selector);if(el){el.classList.add('highlight');document.getElementById('selectorOut').textContent='querySelector("'+selector+'")\nFound: <'+el.tagName.toLowerCase()+'> "'+el.textContent.trim()+'"';}else{document.getElementById('selectorOut').textContent='Nothing found for: '+selector;}}
function selectAll(selector){resetAll();const els=document.querySelectorAll(selector);els.forEach(el=>el.classList.add('highlight'));document.getElementById('selectorOut').textContent='querySelectorAll("'+selector+'")\nFound: '+els.length+' element(s)\n'+Array.from(els).map((el,i)=>'['+i+'] "'+el.textContent.trim()+'"').join('\n');}
</script>
</body>
</html>`,
  },

  {
    topic: "classList",
    description: "provides methods to add, remove, toggle, and check CSS classes on DOM elements without touching innerHTML.",
    code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>classList</title>
<style>
  *{margin:0;padding:0;box-sizing:border-box}
  body{font-family:'Inter',system-ui,sans-serif;background:#FFFDE7;padding:2rem;min-height:100vh}
  h2{color:#323330;font-size:1.4rem;font-weight:900;margin-bottom:1.25rem}
  .card{background:#fff;border-radius:14px;padding:1.5rem;margin-bottom:1rem;border:1.5px solid rgba(247,223,30,0.3);box-shadow:0 4px 14px rgba(247,223,30,0.10)}
  .label{font-size:0.72rem;font-weight:800;color:#C9B800;text-transform:uppercase;letter-spacing:0.07em;margin-bottom:0.65rem}
  pre{background:#0d1117;color:#e6edf3;padding:1rem;border-radius:10px;font-family:'JetBrains Mono',monospace;font-size:0.85rem;line-height:1.65;overflow-x:auto}
  .kw{color:#F7DF1E}.str{color:#a5d6ff}.fn{color:#dcdcaa}.var{color:#e6edf3}.cmt{color:#6a9955}
  .demo-box{background:#FFFDE7;border:2px solid rgba(247,223,30,0.4);border-radius:12px;padding:1.5rem 2rem;text-align:center;font-weight:700;font-size:1.1rem;color:#5a5a2a;transition:all 0.3s;margin:1rem 0}
  .demo-box.highlighted{background:#F7DF1E;color:#323330;border-color:#C9B800;box-shadow:0 4px 18px rgba(247,223,30,0.45)}
  .demo-box.large{font-size:1.4rem;padding:2rem}
  .demo-box.rounded{border-radius:50px}
  .demo-box.shadow{box-shadow:0 8px 28px rgba(0,0,0,0.2)}
  .class-display{background:#323330;color:#F7DF1E;padding:0.6rem 1rem;border-radius:8px;font-family:'JetBrains Mono',monospace;font-size:0.85rem;margin-top:0.5rem;min-height:38px}
  .btn-row{display:flex;gap:0.5rem;flex-wrap:wrap}
  button{background:#F7DF1E;color:#323330;border:none;border-radius:8px;padding:0.45rem 1rem;font-weight:800;font-size:0.82rem;cursor:pointer;font-family:inherit;transition:all 0.2s}
  button:hover{background:#FFE566;transform:translateY(-2px)}
  .btn-ghost{background:rgba(247,223,30,0.15);border:1.5px solid rgba(247,223,30,0.3);color:#8a7000}
</style>
</head>
<body>
<h2>classList Methods</h2>

<div class="card">
  <div class="label">Available methods</div>
  <pre><span class="var">el</span>.<span class="var">classList</span>.<span class="fn">add</span>(<span class="str">"class"</span>)      <span class="cmt">// Add a class</span>
<span class="var">el</span>.<span class="var">classList</span>.<span class="fn">remove</span>(<span class="str">"class"</span>)   <span class="cmt">// Remove a class</span>
<span class="var">el</span>.<span class="var">classList</span>.<span class="fn">toggle</span>(<span class="str">"class"</span>)   <span class="cmt">// Add if absent, remove if present</span>
<span class="var">el</span>.<span class="var">classList</span>.<span class="fn">contains</span>(<span class="str">"class"</span>)<span class="cmt">// Returns true/false</span>
<span class="var">el</span>.<span class="var">classList</span>.<span class="var">value</span>             <span class="cmt">// Space-separated string of all classes</span></pre>
</div>

<div class="card">
  <div class="label">Live demo — click buttons to modify classes</div>
  <div id="demoBox" class="demo-box">Watch my classes change!</div>
  <div class="class-display">Classes: <span id="classDisplay">demo-box</span></div>

  <div class="btn-row" style="margin-top:1rem">
    <button onclick="toggleClass('highlighted')">Toggle .highlighted</button>
    <button onclick="addClass('large')">Add .large</button>
    <button onclick="addClass('rounded')">Add .rounded</button>
    <button onclick="addClass('shadow')">Add .shadow</button>
    <button onclick="removeClass('large')" class="btn-ghost">Remove .large</button>
    <button onclick="removeClass('rounded')" class="btn-ghost">Remove .rounded</button>
    <button onclick="removeClass('shadow')" class="btn-ghost">Remove .shadow</button>
    <button onclick="resetClasses()" class="btn-ghost">Reset All</button>
  </div>
  <div id="containsResult" style="margin-top:0.75rem;font-family:'JetBrains Mono',monospace;font-size:0.82rem;color:#C9B800"></div>
</div>

<script>
const box=document.getElementById('demoBox');
const classDisp=document.getElementById('classDisplay');
function updateDisplay(){classDisp.textContent=box.className;}
function addClass(c){box.classList.add(c);document.getElementById('containsResult').textContent='add("'+c+'") → contains: '+box.classList.contains(c);updateDisplay();}
function removeClass(c){box.classList.remove(c);document.getElementById('containsResult').textContent='remove("'+c+'") → contains: '+box.classList.contains(c);updateDisplay();}
function toggleClass(c){box.classList.toggle(c);document.getElementById('containsResult').textContent='toggle("'+c+'") → now contains: '+box.classList.contains(c);updateDisplay();}
function resetClasses(){box.className='demo-box';document.getElementById('containsResult').textContent='Classes reset.';updateDisplay();}
</script>
</body>
</html>`,
  },

  /* ══════════════════════════════════════════════
     EVENTS
  ══════════════════════════════════════════════ */
  {
    topic: "addEventListener",
    description: "attaches an event handler to a DOM element. The callback function runs whenever the specified event fires.",
    code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>addEventListener</title>
<style>
  *{margin:0;padding:0;box-sizing:border-box}
  body{font-family:'Inter',system-ui,sans-serif;background:#FFFDE7;padding:2rem;min-height:100vh}
  h2{color:#323330;font-size:1.4rem;font-weight:900;margin-bottom:1.25rem}
  .card{background:#fff;border-radius:14px;padding:1.5rem;margin-bottom:1rem;border:1.5px solid rgba(247,223,30,0.3);box-shadow:0 4px 14px rgba(247,223,30,0.10)}
  .label{font-size:0.72rem;font-weight:800;color:#C9B800;text-transform:uppercase;letter-spacing:0.07em;margin-bottom:0.65rem}
  pre{background:#0d1117;color:#e6edf3;padding:1rem;border-radius:10px;font-family:'JetBrains Mono',monospace;font-size:0.85rem;line-height:1.65;overflow-x:auto}
  .kw{color:#F7DF1E}.str{color:#a5d6ff}.fn{color:#dcdcaa}.var{color:#e6edf3}.cmt{color:#6a9955}
  #clickBtn{background:#F7DF1E;color:#323330;border:none;border-radius:12px;padding:1rem 2.5rem;font-weight:900;font-size:1.1rem;cursor:pointer;font-family:inherit;transition:all 0.25s;display:block;margin:1rem auto;box-shadow:0 4px 16px rgba(247,223,30,0.35)}
  #clickBtn:hover{background:#FFE566;transform:translateY(-3px) scale(1.04);box-shadow:0 8px 24px rgba(247,223,30,0.45)}
  #clickBtn:active{transform:scale(0.97)}
  .click-counter{text-align:center;font-size:3rem;font-weight:900;color:#323330;font-family:'JetBrains Mono',monospace;margin:0.5rem 0}
  .event-log{background:#0d1117;border-radius:10px;padding:0.75rem 1rem;font-family:'JetBrains Mono',monospace;font-size:0.8rem;color:#F7DF1E;max-height:150px;overflow-y:auto;margin-top:0.75rem}
  .log-entry{padding:0.2rem 0;border-bottom:1px solid rgba(247,223,30,0.08);color:#86efac}
  .log-entry:last-child{border:none}
  #hoverBox{background:#FFFDE7;border:2px solid rgba(247,223,30,0.4);border-radius:12px;padding:1.5rem;text-align:center;font-weight:700;color:#5a5a2a;transition:all 0.2s;cursor:pointer;margin-top:0.75rem;user-select:none}
  #hoverBox.hovered{background:#F7DF1E;color:#323330;border-color:#C9B800}
  button{background:#F7DF1E;color:#323330;border:none;border-radius:8px;padding:0.45rem 1rem;font-weight:800;font-size:0.82rem;cursor:pointer;font-family:inherit;transition:all 0.2s}
  button:hover{background:#FFE566;transform:translateY(-2px)}
</style>
</head>
<body>
<h2>addEventListener</h2>

<div class="card">
  <div class="label">Syntax</div>
  <pre><span class="var">element</span>.<span class="fn">addEventListener</span>(<span class="str">"eventType"</span>, <span class="var">callback</span>);

<span class="var">button</span>.<span class="fn">addEventListener</span>(<span class="str">"click"</span>, () <span class="arr">=></span> {
  <span class="fn">console</span>.<span class="fn">log</span>(<span class="str">"Button clicked!"</span>);
});</pre>
</div>

<div class="card">
  <div class="label">Click event — count clicks</div>
  <button id="clickBtn">🎯 Click Me!</button>
  <div class="click-counter" id="counter">0</div>
  <div style="text-align:center;font-size:0.82rem;color:#C9B800;font-weight:600">clicks</div>
  <div class="event-log" id="eventLog">
    <div style="color:#6b7280;font-style:italic">Event log will appear here…</div>
  </div>
</div>

<div class="card">
  <div class="label">Mouseover event</div>
  <pre><span class="var">box</span>.<span class="fn">addEventListener</span>(<span class="str">"mouseover"</span>, () <span class="arr">=></span> { <span class="cmt">/* hover */</span> });
<span class="var">box</span>.<span class="fn">addEventListener</span>(<span class="str">"mouseout"</span>,  () <span class="arr">=></span> { <span class="cmt">/* leave */</span> });</pre>
  <div id="hoverBox">🖱️ Hover over me to trigger the event!</div>
  <div id="hoverStatus" style="margin-top:0.5rem;font-family:'JetBrains Mono',monospace;font-size:0.85rem;color:#C9B800;min-height:20px"></div>
</div>

<script>
let clickCount=0;
const btn=document.getElementById('clickBtn');
const counter=document.getElementById('counter');
const log=document.getElementById('eventLog');
btn.addEventListener('click',()=>{
  clickCount++;
  counter.textContent=clickCount;
  const entry=document.createElement('div');
  entry.className='log-entry';
  entry.textContent='['+new Date().toLocaleTimeString()+'] click #'+clickCount;
  if(log.firstChild&&log.firstChild.style){log.removeChild(log.firstChild);}
  log.insertBefore(entry,log.firstChild);
});
const box=document.getElementById('hoverBox');
const status=document.getElementById('hoverStatus');
box.addEventListener('mouseover',()=>{box.classList.add('hovered');box.textContent='✅ mouseover fired!';status.textContent='Event: mouseover';});
box.addEventListener('mouseout',()=>{box.classList.remove('hovered');box.textContent='🖱️ Hover over me to trigger the event!';status.textContent='Event: mouseout';});
</script>
</body>
</html>`,
  },

  /* ══════════════════════════════════════════════
     ERROR HANDLING
  ══════════════════════════════════════════════ */
  {
    topic: "try-catch",
    description: "wraps code that might fail in a try block and handles any thrown errors in the catch block, preventing script crashes.",
    code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>try / catch</title>
<style>
  *{margin:0;padding:0;box-sizing:border-box}
  body{font-family:'Inter',system-ui,sans-serif;background:#0d1117;color:#e6edf3;padding:2rem;min-height:100vh}
  h2{color:#F7DF1E;font-size:1.3rem;font-weight:900;margin-bottom:1.25rem;font-family:'JetBrains Mono',monospace}
  .block{background:#161b22;border-radius:12px;padding:1.25rem;margin-bottom:1rem;border:1px solid rgba(247,223,30,0.12)}
  .label{font-size:0.72rem;font-weight:800;color:#C9B800;text-transform:uppercase;letter-spacing:0.07em;margin-bottom:0.65rem}
  pre{font-family:'JetBrains Mono',monospace;font-size:0.85rem;line-height:1.7;overflow-x:auto}
  .kw{color:#F7DF1E}.str{color:#a5d6ff}.num{color:#f2cc60}.var{color:#e6edf3}.cmt{color:#6a9955}.fn{color:#dcdcaa}.err{color:#f87171}
  .output{background:#0d1117;border:1px solid rgba(247,223,30,0.18);border-radius:8px;padding:0.75rem 1rem;margin-top:0.75rem;font-family:'JetBrains Mono',monospace;font-size:0.85rem;color:#F7DF1E;white-space:pre-line;min-height:44px}
  .output.error{color:#f87171;border-color:rgba(248,113,113,0.3)}
  .output.success{color:#86efac;border-color:rgba(134,239,172,0.3)}
  button{background:#F7DF1E;color:#323330;border:none;border-radius:8px;padding:0.5rem 1.2rem;font-weight:800;font-size:0.82rem;cursor:pointer;margin-top:0.75rem;font-family:inherit;transition:all 0.2s}
  button:hover{background:#FFE566;transform:translateY(-2px)}
  .btn-row{display:flex;gap:0.5rem;flex-wrap:wrap;margin-top:0.75rem}
  .btn-bad{background:rgba(248,113,113,0.15);color:#f87171;border:1px solid rgba(248,113,113,0.3)}
  .btn-good{background:#F7DF1E;color:#323330}
  .btn-good:hover,.btn-bad:hover{transform:translateY(-2px)}
</style>
</head>
<body>
<h2>// try / catch</h2>

<div class="block">
  <div class="label">Syntax</div>
  <pre><span class="kw">try</span> {
  <span class="cmt">// Code that might throw an error</span>
  <span class="var">riskyOperation</span>();
} <span class="kw">catch</span> (<span class="var">error</span>) {
  <span class="cmt">// Handle the error gracefully</span>
  <span class="fn">console</span>.<span class="err">error</span>(<span class="var">error</span>.<span class="var">message</span>);
} <span class="kw">finally</span> {
  <span class="cmt">// Always runs (success or fail)</span>
  <span class="fn">console</span>.<span class="fn">log</span>(<span class="str">"Done"</span>);
}</pre>
</div>

<div class="block">
  <div class="label">Catch a runtime error</div>
  <pre><span class="kw">function</span> <span class="fn">parseData</span>(<span class="var">jsonStr</span>) {
  <span class="kw">try</span> {
    <span class="kw">const</span> <span class="var">data</span> = <span class="fn">JSON</span>.<span class="fn">parse</span>(<span class="var">jsonStr</span>);
    <span class="kw">return</span> <span class="str">"✅ Parsed: "</span> + <span class="fn">JSON</span>.<span class="fn">stringify</span>(<span class="var">data</span>);
  } <span class="kw">catch</span> (<span class="var">e</span>) {
    <span class="kw">return</span> <span class="str">"❌ Error: "</span> + <span class="var">e</span>.<span class="var">message</span>;
  }
}</pre>
  <div class="btn-row">
    <button class="btn-good" onclick="runGoodJSON()">▶ Valid JSON</button>
    <button class="btn-bad" onclick="runBadJSON()">▶ Invalid JSON (triggers catch)</button>
  </div>
  <div class="output" id="jsonOut">Click a button…</div>
</div>

<div class="block">
  <div class="label">finally always runs</div>
  <pre><span class="kw">function</span> <span class="fn">divide</span>(<span class="var">a</span>, <span class="var">b</span>) {
  <span class="kw">try</span> {
    <span class="kw">if</span> (<span class="var">b</span> === <span class="num">0</span>) <span class="kw">throw new</span> <span class="err">Error</span>(<span class="str">"Division by zero!"</span>);
    <span class="kw">return</span> <span class="var">a</span> / <span class="var">b</span>;
  } <span class="kw">catch</span> (<span class="var">e</span>) {
    <span class="kw">return</span> <span class="str">"Caught: "</span> + <span class="var">e</span>.<span class="var">message</span>;
  } <span class="kw">finally</span> {
    <span class="fn">console</span>.<span class="fn">log</span>(<span class="str">"divide() called (finally)"</span>);
  }
}</pre>
  <div class="btn-row">
    <button class="btn-good" onclick="runDivide(10,2)">▶ divide(10, 2)</button>
    <button class="btn-bad" onclick="runDivide(10,0)">▶ divide(10, 0)</button>
  </div>
  <div class="output" id="divOut">Click a button…</div>
</div>

<script>
function parseData(jsonStr){try{const data=JSON.parse(jsonStr);return"✅ Parsed: "+JSON.stringify(data);}catch(e){return"❌ SyntaxError: "+e.message;}}
function divide(a,b){try{if(b===0)throw new Error("Division by zero!");return"Result: "+a/b;}catch(e){return"Caught: "+e.message;}finally{console.log("divide() called — finally block ran");}}
function runGoodJSON(){const r=parseData('{"name":"Alice","age":28}');const el=document.getElementById('jsonOut');el.className='output '+(r.startsWith('✅')?'success':'error');el.textContent=r;}
function runBadJSON(){const r=parseData('{bad json!!!}');const el=document.getElementById('jsonOut');el.className='output '+(r.startsWith('✅')?'success':'error');el.textContent=r;}
function runDivide(a,b){const r=divide(a,b);const el=document.getElementById('divOut');el.className='output '+(r.startsWith('Result')?'success':'error');el.textContent='divide('+a+', '+b+')\n'+r+'\n\n(Check F12 console to see the "finally" log)';}
</script>
</body>
</html>`,
  },

]

/* ─── Helper: get example by topic name ─────────────────────────── */
export function getTopicExample(name) {
  if (!name) return null
  const key = name.toLowerCase().trim()
  return jsTopicExamples.find((e) => e.topic === key) || null
}

export default jsTopicExamples
