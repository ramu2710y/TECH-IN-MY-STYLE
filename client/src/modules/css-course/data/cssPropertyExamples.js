const propertyPagesData = [
  {
    property: 'color',
    description: 'sets the foreground color of an element\'s text content and text decorations.',
    htmlCode: `<div class="demo">
  <h1>CSS Color Property</h1>
  <p class="primary">This text uses a primary color.</p>
  <p class="secondary">This text uses a secondary color.</p>
  <p class="accent">This text uses an accent color.</p>
  <p class="muted">This text is muted / gray.</p>
  <a href="#">This is a styled link</a>
</div>`,
    cssCode: `body {
  font-family: 'Inter', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #f0f4ff;
}
.demo {
  background: white;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(38,77,228,0.1);
}
h1    { color: #264de4; }
.primary   { color: #1572b6; }
.secondary { color: #42a4f5; }
.accent    { color: #e44d90; }
.muted     { color: #9ca3af; }
a          { color: #264de4; text-decoration: underline; }`,
    editableCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CSS color Property</title>
  <style>
    body {
      font-family: 'Inter', sans-serif;
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      background: #f0f4ff;
    }
    .demo {
      background: white;
      padding: 2rem;
      border-radius: 16px;
      box-shadow: 0 8px 32px rgba(38,77,228,0.1);
    }
    h1         { color: #264de4; }
    .primary   { color: #1572b6; }
    .secondary { color: #42a4f5; }
    .accent    { color: #e44d90; }
    .muted     { color: #9ca3af; }
    a          { color: #264de4; text-decoration: underline; }
  </style>
</head>
<body>
  <div class="demo">
    <h1>CSS Color Property</h1>
    <p class="primary">This text uses a primary color.</p>
    <p class="secondary">This text uses a secondary color.</p>
    <p class="accent">This text uses an accent color.</p>
    <p class="muted">This text is muted / gray.</p>
    <a href="#">This is a styled link</a>
  </div>
</body>
</html>`
  },
  {
    property: 'font-family',
    description: 'specifies a prioritized list of font family names or generic family names for the selected element.',
    htmlCode: `<div class="demo">
  <p class="serif">Serif: "Georgia" — classic and elegant.</p>
  <p class="sans">Sans-serif: "Inter" — modern and clean.</p>
  <p class="mono">Monospace: "JetBrains Mono" — great for code.</p>
  <p class="cursive">Cursive: stylish and decorative.</p>
  <p class="system">System-UI: matches the user's OS font.</p>
</div>`,
    cssCode: `body { background: #f0f4ff; display:flex; justify-content:center; align-items:center; min-height:100vh; }
.demo { background:white; padding:2rem; border-radius:16px; box-shadow:0 8px 32px rgba(38,77,228,.1); }
.demo p { font-size:1.05rem; margin-bottom:0.75rem; color:#1e2a4a; }
.serif  { font-family: Georgia, "Times New Roman", serif; }
.sans   { font-family: "Inter", Arial, sans-serif; }
.mono   { font-family: "JetBrains Mono", "Courier New", monospace; }
.cursive{ font-family: cursive; }
.system { font-family: system-ui, -apple-system, sans-serif; }`,
    editableCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>CSS font-family Property</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter&family=JetBrains+Mono&display=swap" rel="stylesheet">
  <style>
    body { background: #f0f4ff; display:flex; justify-content:center; align-items:center; min-height:100vh; }
    .demo { background:white; padding:2rem; border-radius:16px; box-shadow:0 8px 32px rgba(38,77,228,.1); }
    .demo p { font-size:1.05rem; margin-bottom:0.75rem; color:#1e2a4a; }
    .serif  { font-family: Georgia, "Times New Roman", serif; }
    .sans   { font-family: "Inter", Arial, sans-serif; }
    .mono   { font-family: "JetBrains Mono", "Courier New", monospace; }
    .cursive{ font-family: cursive; }
    .system { font-family: system-ui, -apple-system, sans-serif; }
  </style>
</head>
<body>
  <div class="demo">
    <p class="serif">Serif: "Georgia" — classic and elegant.</p>
    <p class="sans">Sans-serif: "Inter" — modern and clean.</p>
    <p class="mono">Monospace: "JetBrains Mono" — great for code.</p>
    <p class="cursive">Cursive: stylish and decorative.</p>
    <p class="system">System-UI: matches the user's OS font.</p>
  </div>
</body>
</html>`
  },
  {
    property: 'font-size',
    description: 'sets the size of the font. Changing the font size also updates the sizes of font size-relative length units such as em and rem.',
    htmlCode: `<div class="demo">
  <p class="xs">font-size: 12px — Extra Small</p>
  <p class="sm">font-size: 14px — Small</p>
  <p class="base">font-size: 16px — Base (default)</p>
  <p class="lg">font-size: 20px — Large</p>
  <p class="xl">font-size: 24px — Extra Large</p>
  <p class="xxl">font-size: 2rem — 2rem unit</p>
  <p class="vw">font-size: 3vw — Viewport Width</p>
</div>`,
    cssCode: `body { background:#f0f4ff; display:flex; justify-content:center; align-items:center; min-height:100vh; }
.demo { background:white; padding:2rem; border-radius:16px; box-shadow:0 8px 32px rgba(38,77,228,.1); }
.demo p { color:#1e2a4a; margin-bottom:0.5rem; }
.xs   { font-size: 12px; }
.sm   { font-size: 14px; }
.base { font-size: 16px; }
.lg   { font-size: 20px; }
.xl   { font-size: 24px; }
.xxl  { font-size: 2rem; }
.vw   { font-size: 3vw; }`,
    editableCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>CSS font-size Property</title>
  <style>
    body { background:#f0f4ff; display:flex; justify-content:center; align-items:center; min-height:100vh; }
    .demo { background:white; padding:2rem; border-radius:16px; box-shadow:0 8px 32px rgba(38,77,228,.1); }
    .demo p { color:#1e2a4a; margin-bottom:0.5rem; }
    .xs   { font-size: 12px; }
    .sm   { font-size: 14px; }
    .base { font-size: 16px; }
    .lg   { font-size: 20px; }
    .xl   { font-size: 24px; }
    .xxl  { font-size: 2rem; }
    .vw   { font-size: 3vw; }
  </style>
</head>
<body>
  <div class="demo">
    <p class="xs">font-size: 12px — Extra Small</p>
    <p class="sm">font-size: 14px — Small</p>
    <p class="base">font-size: 16px — Base (default)</p>
    <p class="lg">font-size: 20px — Large</p>
    <p class="xl">font-size: 24px — Extra Large</p>
    <p class="xxl">font-size: 2rem — 2rem unit</p>
    <p class="vw">font-size: 3vw — Viewport Width</p>
  </div>
</body>
</html>`
  },
  {
    property: 'font-weight',
    description: 'sets the weight (or boldness) of the font. The weights available depend on the font-family that is currently set.',
    htmlCode: `<div class="demo">
  <p class="w100">font-weight: 100 — Thin</p>
  <p class="w300">font-weight: 300 — Light</p>
  <p class="w400">font-weight: 400 — Normal</p>
  <p class="w500">font-weight: 500 — Medium</p>
  <p class="w600">font-weight: 600 — Semi Bold</p>
  <p class="w700">font-weight: 700 — Bold</p>
  <p class="w900">font-weight: 900 — Black</p>
</div>`,
    cssCode: `body { background:#f0f4ff; display:flex; justify-content:center; align-items:center; min-height:100vh; }
.demo { background:white; padding:2rem; border-radius:16px; box-shadow:0 8px 32px rgba(38,77,228,.1); }
.demo p { font-size:1.1rem; color:#264de4; margin-bottom:0.5rem; }
.w100 { font-weight: 100; }
.w300 { font-weight: 300; }
.w400 { font-weight: 400; }
.w500 { font-weight: 500; }
.w600 { font-weight: 600; }
.w700 { font-weight: 700; }
.w900 { font-weight: 900; }`,
    editableCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>CSS font-weight Property</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;300;400;500;600;700;900&display=swap" rel="stylesheet">
  <style>
    body { font-family:'Inter',sans-serif; background:#f0f4ff; display:flex; justify-content:center; align-items:center; min-height:100vh; }
    .demo { background:white; padding:2rem; border-radius:16px; box-shadow:0 8px 32px rgba(38,77,228,.1); }
    .demo p { font-size:1.1rem; color:#264de4; margin-bottom:0.5rem; }
    .w100 { font-weight: 100; }
    .w300 { font-weight: 300; }
    .w400 { font-weight: 400; }
    .w500 { font-weight: 500; }
    .w600 { font-weight: 600; }
    .w700 { font-weight: 700; }
    .w900 { font-weight: 900; }
  </style>
</head>
<body>
  <div class="demo">
    <p class="w100">font-weight: 100 — Thin</p>
    <p class="w300">font-weight: 300 — Light</p>
    <p class="w400">font-weight: 400 — Normal</p>
    <p class="w500">font-weight: 500 — Medium</p>
    <p class="w600">font-weight: 600 — Semi Bold</p>
    <p class="w700">font-weight: 700 — Bold</p>
    <p class="w900">font-weight: 900 — Black</p>
  </div>
</body>
</html>`
  },
  {
    property: 'text-align',
    description: 'sets the horizontal alignment of the inline-level content inside a block element or table-cell box.',
    htmlCode: `<div class="demo">
  <p class="left">text-align: left — This text is aligned to the left side of the container.</p>
  <p class="center">text-align: center — This text is centered in the container.</p>
  <p class="right">text-align: right — This text is aligned to the right side.</p>
  <p class="justify">text-align: justify — This text is justified. It spreads out to fill the full width of the container line by line.</p>
</div>`,
    cssCode: `body { background:#f0f4ff; display:flex; justify-content:center; align-items:center; min-height:100vh; }
.demo { background:white; padding:2rem; border-radius:16px; box-shadow:0 8px 32px rgba(38,77,228,.1); max-width:500px; width:100%; }
.demo p { color:#1e2a4a; font-size:0.95rem; line-height:1.6; margin-bottom:1rem; padding:0.5rem; border-left:3px solid #264de4; }
.left    { text-align: left; }
.center  { text-align: center; border-left:3px solid #1572b6; }
.right   { text-align: right;  border-left:3px solid #42a4f5; }
.justify { text-align: justify; border-left:3px solid #0d6efd; }`,
    editableCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>CSS text-align Property</title>
  <style>
    body { background:#f0f4ff; display:flex; justify-content:center; align-items:center; min-height:100vh; }
    .demo { background:white; padding:2rem; border-radius:16px; box-shadow:0 8px 32px rgba(38,77,228,.1); max-width:500px; width:100%; }
    .demo p { color:#1e2a4a; font-size:0.95rem; line-height:1.6; margin-bottom:1rem; padding:0.5rem; border-left:3px solid #264de4; }
    .left    { text-align: left; }
    .center  { text-align: center; border-left:3px solid #1572b6; }
    .right   { text-align: right;  border-left:3px solid #42a4f5; }
    .justify { text-align: justify; border-left:3px solid #0d6efd; }
  </style>
</head>
<body>
  <div class="demo">
    <p class="left">text-align: left — This text is aligned to the left side of the container.</p>
    <p class="center">text-align: center — This text is centered in the container.</p>
    <p class="right">text-align: right — This text is aligned to the right side.</p>
    <p class="justify">text-align: justify — This text is justified. It spreads out to fill the full width of the container line by line.</p>
  </div>
</body>
</html>`
  },
  {
    property: 'text-decoration',
    description: 'sets the appearance of decorative lines on text such as underline, overline, and line-through.',
    htmlCode: `<div class="demo">
  <p class="none">text-decoration: none — No decoration</p>
  <p class="underline">text-decoration: underline — Underlined text</p>
  <p class="overline">text-decoration: overline — Overline text</p>
  <p class="through">text-decoration: line-through — Strikethrough</p>
  <p class="dashed">text-decoration: underline dashed blue</p>
  <p class="wavy">text-decoration: underline wavy red</p>
</div>`,
    cssCode: `body { background:#f0f4ff; display:flex; justify-content:center; align-items:center; min-height:100vh; }
.demo { background:white; padding:2rem; border-radius:16px; box-shadow:0 8px 32px rgba(38,77,228,.1); }
.demo p { font-size:1rem; color:#1e2a4a; margin-bottom:0.75rem; }
.none      { text-decoration: none; }
.underline { text-decoration: underline; }
.overline  { text-decoration: overline; }
.through   { text-decoration: line-through; }
.dashed    { text-decoration: underline dashed blue; }
.wavy      { text-decoration: underline wavy red; }`,
    editableCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>CSS text-decoration Property</title>
  <style>
    body { background:#f0f4ff; display:flex; justify-content:center; align-items:center; min-height:100vh; }
    .demo { background:white; padding:2rem; border-radius:16px; box-shadow:0 8px 32px rgba(38,77,228,.1); }
    .demo p { font-size:1rem; color:#1e2a4a; margin-bottom:0.75rem; }
    .none      { text-decoration: none; }
    .underline { text-decoration: underline; }
    .overline  { text-decoration: overline; }
    .through   { text-decoration: line-through; }
    .dashed    { text-decoration: underline dashed blue; }
    .wavy      { text-decoration: underline wavy red; }
  </style>
</head>
<body>
  <div class="demo">
    <p class="none">text-decoration: none — No decoration</p>
    <p class="underline">text-decoration: underline — Underlined text</p>
    <p class="overline">text-decoration: overline — Overline text</p>
    <p class="through">text-decoration: line-through — Strikethrough</p>
    <p class="dashed">text-decoration: underline dashed blue</p>
    <p class="wavy">text-decoration: underline wavy red</p>
  </div>
</body>
</html>`
  },
  {
    property: 'background-color',
    description: 'sets the background color of an element using color names, hex values, RGB, RGBA, HSL, or HSLA values.',
    htmlCode: `<div class="demo">
  <div class="box named">background-color: cornflowerblue</div>
  <div class="box hex">#264DE4 (HEX)</div>
  <div class="box rgb">rgb(21, 114, 182)</div>
  <div class="box rgba">rgba(38, 77, 228, 0.4)</div>
  <div class="box hsl">hsl(225, 73%, 52%)</div>
  <div class="box gradient">linear-gradient(to right, #264de4, #42a4f5)</div>
</div>`,
    cssCode: `body { background:#f0f4ff; display:flex; justify-content:center; align-items:center; min-height:100vh; }
.demo { display:flex; flex-direction:column; gap:0.75rem; padding:2rem; background:white; border-radius:16px; box-shadow:0 8px 32px rgba(38,77,228,.1); }
.box { padding:0.9rem 1.4rem; border-radius:10px; color:#fff; font-weight:600; font-size:0.9rem; }
.named    { background-color: cornflowerblue; }
.hex      { background-color: #264DE4; }
.rgb      { background-color: rgb(21, 114, 182); }
.rgba     { background-color: rgba(38, 77, 228, 0.4); color:#264de4; }
.hsl      { background-color: hsl(225, 73%, 52%); }
.gradient { background: linear-gradient(to right, #264de4, #42a4f5); }`,
    editableCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>CSS background-color Property</title>
  <style>
    body { background:#f0f4ff; display:flex; justify-content:center; align-items:center; min-height:100vh; }
    .demo { display:flex; flex-direction:column; gap:0.75rem; padding:2rem; background:white; border-radius:16px; box-shadow:0 8px 32px rgba(38,77,228,.1); }
    .box { padding:0.9rem 1.4rem; border-radius:10px; color:#fff; font-weight:600; font-size:0.9rem; }
    .named    { background-color: cornflowerblue; }
    .hex      { background-color: #264DE4; }
    .rgb      { background-color: rgb(21, 114, 182); }
    .rgba     { background-color: rgba(38, 77, 228, 0.4); color:#264de4; }
    .hsl      { background-color: hsl(225, 73%, 52%); }
    .gradient { background: linear-gradient(to right, #264de4, #42a4f5); }
  </style>
</head>
<body>
  <div class="demo">
    <div class="box named">background-color: cornflowerblue</div>
    <div class="box hex">#264DE4 (HEX)</div>
    <div class="box rgb">rgb(21, 114, 182)</div>
    <div class="box rgba">rgba(38, 77, 228, 0.4)</div>
    <div class="box hsl">hsl(225, 73%, 52%)</div>
    <div class="box gradient">linear-gradient(to right, #264de4, #42a4f5)</div>
  </div>
</body>
</html>`
  },
  {
    property: 'margin',
    description: 'sets the margin area on all four sides of an element. It is a shorthand for margin-top, margin-right, margin-bottom, and margin-left.',
    htmlCode: `<div class="demo">
  <div class="box b1">margin: 0</div>
  <div class="box b2">margin: 20px</div>
  <div class="box b3">margin: 10px 30px</div>
  <div class="box b4">margin: 10px 20px 30px 40px</div>
  <div class="box b5">margin: auto (centered)</div>
</div>`,
    cssCode: `body { background:#f0f4ff; min-height:100vh; padding:2rem; }
.demo { background:white; padding:1rem; border-radius:16px; box-shadow:0 8px 32px rgba(38,77,228,.1); }
.box { background:#264de4; color:#fff; font-weight:600; font-size:0.85rem; padding:0.75rem 1rem; border-radius:8px; border:2px dashed #42a4f5; }
.b1 { margin: 0; }
.b2 { margin: 20px; }
.b3 { margin: 10px 30px; }
.b4 { margin: 10px 20px 30px 40px; }
.b5 { margin: 10px auto; max-width:300px; text-align:center; }`,
    editableCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>CSS margin Property</title>
  <style>
    body { background:#f0f4ff; min-height:100vh; padding:2rem; font-family:sans-serif; }
    .demo { background:white; padding:1rem; border-radius:16px; box-shadow:0 8px 32px rgba(38,77,228,.1); }
    .box { background:#264de4; color:#fff; font-weight:600; font-size:0.85rem; padding:0.75rem 1rem; border-radius:8px; border:2px dashed #42a4f5; }
    .b1 { margin: 0; }
    .b2 { margin: 20px; }
    .b3 { margin: 10px 30px; }
    .b4 { margin: 10px 20px 30px 40px; }
    .b5 { margin: 10px auto; max-width:300px; text-align:center; }
  </style>
</head>
<body>
  <div class="demo">
    <div class="box b1">margin: 0</div>
    <div class="box b2">margin: 20px</div>
    <div class="box b3">margin: 10px 30px</div>
    <div class="box b4">margin: 10px 20px 30px 40px</div>
    <div class="box b5">margin: auto (centered)</div>
  </div>
</body>
</html>`
  },
  {
    property: 'padding',
    description: 'sets the padding area on all four sides of an element. It is a shorthand for padding-top, padding-right, padding-bottom, and padding-left.',
    htmlCode: `<div class="demo">
  <div class="box p0">padding: 0</div>
  <div class="box p1">padding: 10px</div>
  <div class="box p2">padding: 20px</div>
  <div class="box p3">padding: 10px 40px</div>
  <div class="box p4">padding: 5px 10px 20px 40px</div>
</div>`,
    cssCode: `body { background:#f0f4ff; display:flex; justify-content:center; align-items:center; min-height:100vh; }
.demo { display:flex; flex-direction:column; gap:0.75rem; padding:2rem; background:white; border-radius:16px; box-shadow:0 8px 32px rgba(38,77,228,.1); }
.box { background:rgba(38,77,228,0.08); border:2px solid #264de4; border-radius:8px; color:#264de4; font-weight:600; font-size:0.9rem; }
.p0 { padding: 0; }
.p1 { padding: 10px; }
.p2 { padding: 20px; }
.p3 { padding: 10px 40px; }
.p4 { padding: 5px 10px 20px 40px; }`,
    editableCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>CSS padding Property</title>
  <style>
    body { background:#f0f4ff; display:flex; justify-content:center; align-items:center; min-height:100vh; font-family:sans-serif; }
    .demo { display:flex; flex-direction:column; gap:0.75rem; padding:2rem; background:white; border-radius:16px; box-shadow:0 8px 32px rgba(38,77,228,.1); }
    .box { background:rgba(38,77,228,0.08); border:2px solid #264de4; border-radius:8px; color:#264de4; font-weight:600; font-size:0.9rem; }
    .p0 { padding: 0; }
    .p1 { padding: 10px; }
    .p2 { padding: 20px; }
    .p3 { padding: 10px 40px; }
    .p4 { padding: 5px 10px 20px 40px; }
  </style>
</head>
<body>
  <div class="demo">
    <div class="box p0">padding: 0</div>
    <div class="box p1">padding: 10px</div>
    <div class="box p2">padding: 20px</div>
    <div class="box p3">padding: 10px 40px</div>
    <div class="box p4">padding: 5px 10px 20px 40px</div>
  </div>
</body>
</html>`
  },
  {
    property: 'border',
    description: 'sets an element\'s border. It sets the values of border-width, border-style, and border-color in a single declaration.',
    htmlCode: `<div class="demo">
  <div class="box b1">border: 2px solid #264de4</div>
  <div class="box b2">border: 4px dashed #1572b6</div>
  <div class="box b3">border: 3px dotted #42a4f5</div>
  <div class="box b4">border: 5px double #264de4</div>
  <div class="box b5">border-radius: 50px (pill shape)</div>
  <div class="box b6">border-radius: 50% (circle)</div>
</div>`,
    cssCode: `body { background:#f0f4ff; display:flex; justify-content:center; align-items:center; min-height:100vh; }
.demo { display:flex; flex-direction:column; gap:0.75rem; padding:2rem; background:white; border-radius:16px; box-shadow:0 8px 32px rgba(38,77,228,.1); }
.box { padding:0.75rem 1.25rem; font-weight:600; font-size:0.9rem; color:#1e2a4a; }
.b1 { border: 2px solid #264de4; }
.b2 { border: 4px dashed #1572b6; }
.b3 { border: 3px dotted #42a4f5; }
.b4 { border: 5px double #264de4; }
.b5 { border: 2px solid #264de4; border-radius: 50px; }
.b6 { border: 2px solid #264de4; border-radius: 50%; width:80px; height:80px; display:flex; align-items:center; justify-content:center; font-size:0.7rem; text-align:center; }`,
    editableCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>CSS border Property</title>
  <style>
    body { background:#f0f4ff; display:flex; justify-content:center; align-items:center; min-height:100vh; font-family:sans-serif; }
    .demo { display:flex; flex-direction:column; gap:0.75rem; padding:2rem; background:white; border-radius:16px; box-shadow:0 8px 32px rgba(38,77,228,.1); }
    .box { padding:0.75rem 1.25rem; font-weight:600; font-size:0.9rem; color:#1e2a4a; }
    .b1 { border: 2px solid #264de4; }
    .b2 { border: 4px dashed #1572b6; }
    .b3 { border: 3px dotted #42a4f5; }
    .b4 { border: 5px double #264de4; }
    .b5 { border: 2px solid #264de4; border-radius: 50px; }
    .b6 { border: 2px solid #264de4; border-radius: 50%; width:80px; height:80px; display:flex; align-items:center; justify-content:center; font-size:0.7rem; text-align:center; }
  </style>
</head>
<body>
  <div class="demo">
    <div class="box b1">border: 2px solid #264de4</div>
    <div class="box b2">border: 4px dashed #1572b6</div>
    <div class="box b3">border: 3px dotted #42a4f5</div>
    <div class="box b4">border: 5px double #264de4</div>
    <div class="box b5">border-radius: 50px (pill shape)</div>
    <div class="box b6">border-radius: 50% (circle)</div>
  </div>
</body>
</html>`
  },
  {
    property: 'display',
    description: 'sets whether an element is treated as a block or inline box and the layout used for its children, such as flex or grid.',
    htmlCode: `<div class="demo">
  <div class="section">
    <span class="label">display: block</span>
    <div class="block-ex">Block 1</div>
    <div class="block-ex">Block 2</div>
  </div>
  <div class="section">
    <span class="label">display: inline</span>
    <span class="inline-ex">Inline 1</span>
    <span class="inline-ex">Inline 2</span>
    <span class="inline-ex">Inline 3</span>
  </div>
  <div class="section">
    <span class="label">display: flex</span>
    <div class="flex-ex">
      <div>Item A</div><div>Item B</div><div>Item C</div>
    </div>
  </div>
  <div class="section">
    <span class="label">display: grid</span>
    <div class="grid-ex">
      <div>1</div><div>2</div><div>3</div><div>4</div>
    </div>
  </div>
</div>`,
    cssCode: `body { background:#f0f4ff; display:flex; justify-content:center; align-items:flex-start; min-height:100vh; padding:2rem; }
.demo { background:white; padding:1.5rem; border-radius:16px; box-shadow:0 8px 32px rgba(38,77,228,.1); width:100%; max-width:500px; }
.section { margin-bottom:1.5rem; }
.label { font-size:0.78rem; font-weight:700; color:#264de4; text-transform:uppercase; letter-spacing:.05em; display:block; margin-bottom:.5rem; }
.block-ex { display:block; background:#264de4; color:#fff; padding:.4rem .8rem; border-radius:6px; margin-bottom:.3rem; font-size:.85rem; font-weight:600; }
.inline-ex { display:inline; background:#1572b6; color:#fff; padding:.3rem .7rem; border-radius:6px; font-size:.85rem; font-weight:600; margin-right:.3rem; }
.flex-ex { display:flex; gap:.5rem; }
.flex-ex div { background:#42a4f5; color:#fff; padding:.5rem 1rem; border-radius:6px; font-weight:600; font-size:.85rem; }
.grid-ex { display:grid; grid-template-columns:repeat(2,1fr); gap:.5rem; }
.grid-ex div { background:#0d6efd; color:#fff; padding:.5rem; border-radius:6px; text-align:center; font-weight:600; font-size:.85rem; }`,
    editableCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>CSS display Property</title>
  <style>
    body { background:#f0f4ff; display:flex; justify-content:center; align-items:flex-start; min-height:100vh; padding:2rem; font-family:sans-serif; }
    .demo { background:white; padding:1.5rem; border-radius:16px; box-shadow:0 8px 32px rgba(38,77,228,.1); width:100%; max-width:500px; }
    .section { margin-bottom:1.5rem; }
    .label { font-size:0.78rem; font-weight:700; color:#264de4; text-transform:uppercase; letter-spacing:.05em; display:block; margin-bottom:.5rem; }
    .block-ex { display:block; background:#264de4; color:#fff; padding:.4rem .8rem; border-radius:6px; margin-bottom:.3rem; font-size:.85rem; font-weight:600; }
    .inline-ex { display:inline; background:#1572b6; color:#fff; padding:.3rem .7rem; border-radius:6px; font-size:.85rem; font-weight:600; margin-right:.3rem; }
    .flex-ex { display:flex; gap:.5rem; }
    .flex-ex div { background:#42a4f5; color:#fff; padding:.5rem 1rem; border-radius:6px; font-weight:600; font-size:.85rem; }
    .grid-ex { display:grid; grid-template-columns:repeat(2,1fr); gap:.5rem; }
    .grid-ex div { background:#0d6efd; color:#fff; padding:.5rem; border-radius:6px; text-align:center; font-weight:600; font-size:.85rem; }
  </style>
</head>
<body>
  <div class="demo">
    <div class="section">
      <span class="label">display: block</span>
      <div class="block-ex">Block 1</div>
      <div class="block-ex">Block 2</div>
    </div>
    <div class="section">
      <span class="label">display: inline</span>
      <span class="inline-ex">Inline 1</span>
      <span class="inline-ex">Inline 2</span>
      <span class="inline-ex">Inline 3</span>
    </div>
    <div class="section">
      <span class="label">display: flex</span>
      <div class="flex-ex">
        <div>Item A</div><div>Item B</div><div>Item C</div>
      </div>
    </div>
    <div class="section">
      <span class="label">display: grid</span>
      <div class="grid-ex">
        <div>1</div><div>2</div><div>3</div><div>4</div>
      </div>
    </div>
  </div>
</body>
</html>`
  },
  {
    property: 'flex-direction',
    description: 'sets how flex items are placed in the flex container defining the main axis and the direction (normal or reversed).',
    htmlCode: `<div class="demo">
  <div class="section">
    <p class="label">flex-direction: row</p>
    <div class="flex row"><div>1</div><div>2</div><div>3</div></div>
  </div>
  <div class="section">
    <p class="label">flex-direction: row-reverse</p>
    <div class="flex row-rev"><div>1</div><div>2</div><div>3</div></div>
  </div>
  <div class="section">
    <p class="label">flex-direction: column</p>
    <div class="flex col"><div>1</div><div>2</div><div>3</div></div>
  </div>
  <div class="section">
    <p class="label">flex-direction: column-reverse</p>
    <div class="flex col-rev"><div>1</div><div>2</div><div>3</div></div>
  </div>
</div>`,
    cssCode: `body { background:#f0f4ff; display:flex; justify-content:center; padding:2rem; min-height:100vh; }
.demo { background:white; padding:1.5rem; border-radius:16px; box-shadow:0 8px 32px rgba(38,77,228,.1); width:100%; max-width:500px; }
.section { margin-bottom:1.5rem; }
.label { font-size:0.8rem; font-weight:700; color:#264de4; margin-bottom:.5rem; }
.flex { display:flex; gap:.5rem; background:#f0f4ff; padding:.75rem; border-radius:8px; }
.flex div { background:#264de4; color:#fff; padding:.5rem .9rem; border-radius:6px; font-weight:700; font-size:.9rem; }
.row     { flex-direction: row; }
.row-rev { flex-direction: row-reverse; }
.col     { flex-direction: column; }
.col-rev { flex-direction: column-reverse; }`,
    editableCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>CSS flex-direction Property</title>
  <style>
    body { background:#f0f4ff; display:flex; justify-content:center; padding:2rem; min-height:100vh; font-family:sans-serif; }
    .demo { background:white; padding:1.5rem; border-radius:16px; box-shadow:0 8px 32px rgba(38,77,228,.1); width:100%; max-width:500px; }
    .section { margin-bottom:1.5rem; }
    .label { font-size:0.8rem; font-weight:700; color:#264de4; margin-bottom:.5rem; }
    .flex { display:flex; gap:.5rem; background:#f0f4ff; padding:.75rem; border-radius:8px; }
    .flex div { background:#264de4; color:#fff; padding:.5rem .9rem; border-radius:6px; font-weight:700; font-size:.9rem; }
    .row     { flex-direction: row; }
    .row-rev { flex-direction: row-reverse; }
    .col     { flex-direction: column; }
    .col-rev { flex-direction: column-reverse; }
  </style>
</head>
<body>
  <div class="demo">
    <div class="section">
      <p class="label">flex-direction: row</p>
      <div class="flex row"><div>1</div><div>2</div><div>3</div></div>
    </div>
    <div class="section">
      <p class="label">flex-direction: row-reverse</p>
      <div class="flex row-rev"><div>1</div><div>2</div><div>3</div></div>
    </div>
    <div class="section">
      <p class="label">flex-direction: column</p>
      <div class="flex col"><div>1</div><div>2</div><div>3</div></div>
    </div>
    <div class="section">
      <p class="label">flex-direction: column-reverse</p>
      <div class="flex col-rev"><div>1</div><div>2</div><div>3</div></div>
    </div>
  </div>
</body>
</html>`
  },
  {
    property: 'justify-content',
    description: 'defines how the browser distributes space between and around content items along the main-axis of a flex container.',
    htmlCode: `<div class="demo">
  <p class="label">flex-start</p>
  <div class="flex jfs"><div>A</div><div>B</div><div>C</div></div>
  <p class="label">center</p>
  <div class="flex jc"><div>A</div><div>B</div><div>C</div></div>
  <p class="label">flex-end</p>
  <div class="flex jfe"><div>A</div><div>B</div><div>C</div></div>
  <p class="label">space-between</p>
  <div class="flex jsb"><div>A</div><div>B</div><div>C</div></div>
  <p class="label">space-around</p>
  <div class="flex jsa"><div>A</div><div>B</div><div>C</div></div>
  <p class="label">space-evenly</p>
  <div class="flex jse"><div>A</div><div>B</div><div>C</div></div>
</div>`,
    cssCode: `body { background:#f0f4ff; display:flex; justify-content:center; padding:2rem; min-height:100vh; }
.demo { background:white; padding:1.5rem; border-radius:16px; box-shadow:0 8px 32px rgba(38,77,228,.1); width:100%; max-width:540px; }
.label { font-size:0.78rem; font-weight:700; color:#264de4; margin:.6rem 0 .3rem; text-transform:uppercase; letter-spacing:.04em; }
.flex { display:flex; background:#f0f4ff; border-radius:8px; padding:.5rem; margin-bottom:.4rem; }
.flex div { background:#264de4; color:#fff; width:38px; height:38px; border-radius:6px; display:flex; align-items:center; justify-content:center; font-weight:700; font-size:.9rem; flex-shrink:0; }
.jfs { justify-content: flex-start; }
.jc  { justify-content: center; }
.jfe { justify-content: flex-end; }
.jsb { justify-content: space-between; }
.jsa { justify-content: space-around; }
.jse { justify-content: space-evenly; }`,
    editableCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>CSS justify-content Property</title>
  <style>
    body { background:#f0f4ff; display:flex; justify-content:center; padding:2rem; min-height:100vh; font-family:sans-serif; }
    .demo { background:white; padding:1.5rem; border-radius:16px; box-shadow:0 8px 32px rgba(38,77,228,.1); width:100%; max-width:540px; }
    .label { font-size:0.78rem; font-weight:700; color:#264de4; margin:.6rem 0 .3rem; text-transform:uppercase; letter-spacing:.04em; }
    .flex { display:flex; background:#f0f4ff; border-radius:8px; padding:.5rem; margin-bottom:.4rem; }
    .flex div { background:#264de4; color:#fff; width:38px; height:38px; border-radius:6px; display:flex; align-items:center; justify-content:center; font-weight:700; font-size:.9rem; flex-shrink:0; }
    .jfs { justify-content: flex-start; }
    .jc  { justify-content: center; }
    .jfe { justify-content: flex-end; }
    .jsb { justify-content: space-between; }
    .jsa { justify-content: space-around; }
    .jse { justify-content: space-evenly; }
  </style>
</head>
<body>
  <div class="demo">
    <p class="label">flex-start</p>
    <div class="flex jfs"><div>A</div><div>B</div><div>C</div></div>
    <p class="label">center</p>
    <div class="flex jc"><div>A</div><div>B</div><div>C</div></div>
    <p class="label">flex-end</p>
    <div class="flex jfe"><div>A</div><div>B</div><div>C</div></div>
    <p class="label">space-between</p>
    <div class="flex jsb"><div>A</div><div>B</div><div>C</div></div>
    <p class="label">space-around</p>
    <div class="flex jsa"><div>A</div><div>B</div><div>C</div></div>
    <p class="label">space-evenly</p>
    <div class="flex jse"><div>A</div><div>B</div><div>C</div></div>
  </div>
</body>
</html>`
  },
  {
    property: 'align-items',
    description: 'sets the align-self value on all direct children as a group. In flexbox, it controls alignment of items on the cross axis.',
    htmlCode: `<div class="demo">
  <p class="label">align-items: flex-start</p>
  <div class="flex afs"><div class="t">A</div><div class="m">B</div><div class="b">C</div></div>
  <p class="label">align-items: center</p>
  <div class="flex ac"><div class="t">A</div><div class="m">B</div><div class="b">C</div></div>
  <p class="label">align-items: flex-end</p>
  <div class="flex afe"><div class="t">A</div><div class="m">B</div><div class="b">C</div></div>
  <p class="label">align-items: stretch</p>
  <div class="flex as"><div>A</div><div>B</div><div>C</div></div>
</div>`,
    cssCode: `body { background:#f0f4ff; display:flex; justify-content:center; padding:2rem; min-height:100vh; }
.demo { background:white; padding:1.5rem; border-radius:16px; box-shadow:0 8px 32px rgba(38,77,228,.1); width:100%; max-width:500px; }
.label { font-size:0.78rem; font-weight:700; color:#264de4; margin:.6rem 0 .3rem; text-transform:uppercase; letter-spacing:.04em; }
.flex { display:flex; background:#f0f4ff; border-radius:8px; padding:.5rem; gap:.5rem; height:80px; margin-bottom:.5rem; }
.flex div { background:#264de4; color:#fff; width:50px; border-radius:6px; display:flex; align-items:center; justify-content:center; font-weight:700; }
.t { height:30px; }
.m { height:50px; }
.b { height:40px; }
.afs { align-items: flex-start; }
.ac  { align-items: center; }
.afe { align-items: flex-end; }
.as  { align-items: stretch; }
.as div { height:auto; }`,
    editableCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>CSS align-items Property</title>
  <style>
    body { background:#f0f4ff; display:flex; justify-content:center; padding:2rem; min-height:100vh; font-family:sans-serif; }
    .demo { background:white; padding:1.5rem; border-radius:16px; box-shadow:0 8px 32px rgba(38,77,228,.1); width:100%; max-width:500px; }
    .label { font-size:0.78rem; font-weight:700; color:#264de4; margin:.6rem 0 .3rem; text-transform:uppercase; letter-spacing:.04em; }
    .flex { display:flex; background:#f0f4ff; border-radius:8px; padding:.5rem; gap:.5rem; height:80px; margin-bottom:.5rem; }
    .flex div { background:#264de4; color:#fff; width:50px; border-radius:6px; display:flex; align-items:center; justify-content:center; font-weight:700; }
    .t { height:30px; } .m { height:50px; } .b { height:40px; }
    .afs { align-items: flex-start; }
    .ac  { align-items: center; }
    .afe { align-items: flex-end; }
    .as  { align-items: stretch; }
    .as div { height:auto; }
  </style>
</head>
<body>
  <div class="demo">
    <p class="label">align-items: flex-start</p>
    <div class="flex afs"><div class="t">A</div><div class="m">B</div><div class="b">C</div></div>
    <p class="label">align-items: center</p>
    <div class="flex ac"><div class="t">A</div><div class="m">B</div><div class="b">C</div></div>
    <p class="label">align-items: flex-end</p>
    <div class="flex afe"><div class="t">A</div><div class="m">B</div><div class="b">C</div></div>
    <p class="label">align-items: stretch</p>
    <div class="flex as"><div>A</div><div>B</div><div>C</div></div>
  </div>
</body>
</html>`
  },
  {
    property: 'grid-template-columns',
    description: 'defines the line names and track sizing functions of the grid columns.',
    htmlCode: `<div class="demo">
  <p class="label">grid-template-columns: repeat(3, 1fr)</p>
  <div class="grid g1"><div>1</div><div>2</div><div>3</div><div>4</div><div>5</div><div>6</div></div>
  <p class="label">grid-template-columns: 200px 1fr 2fr</p>
  <div class="grid g2"><div>200px</div><div>1fr</div><div>2fr</div></div>
  <p class="label">grid-template-columns: repeat(auto-fill, minmax(100px,1fr))</p>
  <div class="grid g3"><div>A</div><div>B</div><div>C</div><div>D</div><div>E</div></div>
</div>`,
    cssCode: `body { background:#f0f4ff; display:flex; justify-content:center; padding:2rem; min-height:100vh; }
.demo { background:white; padding:1.5rem; border-radius:16px; box-shadow:0 8px 32px rgba(38,77,228,.1); width:100%; max-width:580px; }
.label { font-size:0.78rem; font-weight:700; color:#264de4; margin:.8rem 0 .4rem; }
.grid { display:grid; gap:.5rem; background:#f0f4ff; padding:.75rem; border-radius:8px; margin-bottom:.5rem; }
.grid div { background:#264de4; color:#fff; padding:.6rem; border-radius:6px; text-align:center; font-weight:700; font-size:.85rem; }
.g1 { grid-template-columns: repeat(3, 1fr); }
.g2 { grid-template-columns: 200px 1fr 2fr; }
.g3 { grid-template-columns: repeat(auto-fill, minmax(80px, 1fr)); }`,
    editableCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>CSS grid-template-columns Property</title>
  <style>
    body { background:#f0f4ff; display:flex; justify-content:center; padding:2rem; min-height:100vh; font-family:sans-serif; }
    .demo { background:white; padding:1.5rem; border-radius:16px; box-shadow:0 8px 32px rgba(38,77,228,.1); width:100%; max-width:580px; }
    .label { font-size:0.78rem; font-weight:700; color:#264de4; margin:.8rem 0 .4rem; }
    .grid { display:grid; gap:.5rem; background:#f0f4ff; padding:.75rem; border-radius:8px; margin-bottom:.5rem; }
    .grid div { background:#264de4; color:#fff; padding:.6rem; border-radius:6px; text-align:center; font-weight:700; font-size:.85rem; }
    .g1 { grid-template-columns: repeat(3, 1fr); }
    .g2 { grid-template-columns: 200px 1fr 2fr; }
    .g3 { grid-template-columns: repeat(auto-fill, minmax(80px, 1fr)); }
  </style>
</head>
<body>
  <div class="demo">
    <p class="label">grid-template-columns: repeat(3, 1fr)</p>
    <div class="grid g1"><div>1</div><div>2</div><div>3</div><div>4</div><div>5</div><div>6</div></div>
    <p class="label">grid-template-columns: 200px 1fr 2fr</p>
    <div class="grid g2"><div>200px</div><div>1fr</div><div>2fr</div></div>
    <p class="label">grid-template-columns: repeat(auto-fill, minmax(100px,1fr))</p>
    <div class="grid g3"><div>A</div><div>B</div><div>C</div><div>D</div><div>E</div></div>
  </div>
</body>
</html>`
  },
  {
    property: 'position',
    description: 'sets how an element is positioned in a document. The top, right, bottom, and left properties determine the final location of positioned elements.',
    htmlCode: `<div class="demo">
  <div class="section">
    <p class="label">position: static (default)</p>
    <div class="container"><div class="box static-box">static</div></div>
  </div>
  <div class="section">
    <p class="label">position: relative (top:10px left:20px)</p>
    <div class="container"><div class="box relative-box">relative</div></div>
  </div>
  <div class="section">
    <p class="label">position: absolute (inside relative parent)</p>
    <div class="container rel-parent"><div class="box absolute-box">absolute</div></div>
  </div>
  <div class="section">
    <p class="label">position: sticky (scroll to see)</p>
    <div class="scroll-container"><div class="box sticky-box">sticky</div><div class="filler"></div></div>
  </div>
</div>`,
    cssCode: `body { background:#f0f4ff; display:flex; justify-content:center; padding:2rem; min-height:100vh; }
.demo { background:white; padding:1.5rem; border-radius:16px; box-shadow:0 8px 32px rgba(38,77,228,.1); width:100%; max-width:500px; }
.label { font-size:0.78rem; font-weight:700; color:#264de4; margin-bottom:.4rem; }
.section { margin-bottom:1.2rem; }
.container { background:#f0f4ff; height:70px; border-radius:8px; position:relative; overflow:hidden; }
.box { background:#264de4; color:#fff; padding:.4rem .8rem; border-radius:6px; font-weight:700; font-size:.85rem; display:inline-block; }
.static-box   { position: static; }
.relative-box { position: relative; top:10px; left:20px; }
.rel-parent   { position: relative; }
.absolute-box { position: absolute; bottom:8px; right:8px; }
.scroll-container { height:70px; overflow-y:auto; background:#f0f4ff; border-radius:8px; padding:.5rem; }
.sticky-box { position: sticky; top:0; z-index:1; }
.filler { height:150px; }`,
    editableCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>CSS position Property</title>
  <style>
    body { background:#f0f4ff; display:flex; justify-content:center; padding:2rem; min-height:100vh; font-family:sans-serif; }
    .demo { background:white; padding:1.5rem; border-radius:16px; box-shadow:0 8px 32px rgba(38,77,228,.1); width:100%; max-width:500px; }
    .label { font-size:0.78rem; font-weight:700; color:#264de4; margin-bottom:.4rem; }
    .section { margin-bottom:1.2rem; }
    .container { background:#f0f4ff; height:70px; border-radius:8px; position:relative; overflow:hidden; }
    .box { background:#264de4; color:#fff; padding:.4rem .8rem; border-radius:6px; font-weight:700; font-size:.85rem; display:inline-block; }
    .static-box   { position: static; }
    .relative-box { position: relative; top:10px; left:20px; }
    .rel-parent   { position: relative; }
    .absolute-box { position: absolute; bottom:8px; right:8px; }
    .scroll-container { height:70px; overflow-y:auto; background:#f0f4ff; border-radius:8px; padding:.5rem; }
    .sticky-box { position: sticky; top:0; z-index:1; }
    .filler { height:150px; }
  </style>
</head>
<body>
  <div class="demo">
    <div class="section">
      <p class="label">position: static (default)</p>
      <div class="container"><div class="box static-box">static</div></div>
    </div>
    <div class="section">
      <p class="label">position: relative (top:10px left:20px)</p>
      <div class="container"><div class="box relative-box">relative</div></div>
    </div>
    <div class="section">
      <p class="label">position: absolute (inside relative parent)</p>
      <div class="container rel-parent"><div class="box absolute-box">absolute</div></div>
    </div>
    <div class="section">
      <p class="label">position: sticky (scroll to see)</p>
      <div class="scroll-container"><div class="box sticky-box">sticky</div><div class="filler"></div></div>
    </div>
  </div>
</body>
</html>`
  },
  {
    property: 'transition',
    description: 'is a shorthand property for transition-property, transition-duration, transition-timing-function, and transition-delay. It enables smooth changes between CSS property values.',
    htmlCode: `<div class="demo">
  <button class="btn b1">Hover Me — Color</button>
  <button class="btn b2">Hover Me — Scale</button>
  <button class="btn b3">Hover Me — Shadow</button>
  <button class="btn b4">Hover Me — All (ease-in-out 0.5s)</button>
</div>`,
    cssCode: `body { background:#f0f4ff; display:flex; justify-content:center; align-items:center; min-height:100vh; }
.demo { display:flex; flex-direction:column; gap:1rem; padding:2rem; background:white; border-radius:16px; box-shadow:0 8px 32px rgba(38,77,228,.1); }
.btn { padding:.75rem 2rem; border:none; border-radius:50px; font-size:0.95rem; font-weight:600; cursor:pointer; background:#264de4; color:white; }
.b1 { transition: background 0.3s ease; }
.b1:hover { background: #42a4f5; }
.b2 { transition: transform 0.3s cubic-bezier(.34,1.56,.64,1); }
.b2:hover { transform: scale(1.1); }
.b3 { transition: box-shadow 0.3s ease; }
.b3:hover { box-shadow: 0 8px 30px rgba(38,77,228,0.5); }
.b4 { transition: all 0.5s ease-in-out; }
.b4:hover { background:#1572b6; transform:translateY(-4px); box-shadow:0 12px 32px rgba(38,77,228,0.4); }`,
    editableCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>CSS transition Property</title>
  <style>
    body { background:#f0f4ff; display:flex; justify-content:center; align-items:center; min-height:100vh; font-family:sans-serif; }
    .demo { display:flex; flex-direction:column; gap:1rem; padding:2rem; background:white; border-radius:16px; box-shadow:0 8px 32px rgba(38,77,228,.1); }
    .btn { padding:.75rem 2rem; border:none; border-radius:50px; font-size:0.95rem; font-weight:600; cursor:pointer; background:#264de4; color:white; }
    .b1 { transition: background 0.3s ease; }
    .b1:hover { background: #42a4f5; }
    .b2 { transition: transform 0.3s cubic-bezier(.34,1.56,.64,1); }
    .b2:hover { transform: scale(1.1); }
    .b3 { transition: box-shadow 0.3s ease; }
    .b3:hover { box-shadow: 0 8px 30px rgba(38,77,228,0.5); }
    .b4 { transition: all 0.5s ease-in-out; }
    .b4:hover { background:#1572b6; transform:translateY(-4px); box-shadow:0 12px 32px rgba(38,77,228,0.4); }
  </style>
</head>
<body>
  <div class="demo">
    <button class="btn b1">Hover Me — Color</button>
    <button class="btn b2">Hover Me — Scale</button>
    <button class="btn b3">Hover Me — Shadow</button>
    <button class="btn b4">Hover Me — All (ease-in-out 0.5s)</button>
  </div>
</body>
</html>`
  },
  {
    property: 'animation',
    description: 'is a shorthand property for animation-name, animation-duration, animation-timing-function, animation-delay, animation-iteration-count, and more.',
    htmlCode: `<div class="demo">
  <div class="box spin">Spin</div>
  <div class="box pulse">Pulse</div>
  <div class="box bounce">Bounce</div>
  <div class="box fade">Fade</div>
  <div class="box slide">Slide In</div>
</div>`,
    cssCode: `body { background:#f0f4ff; display:flex; justify-content:center; align-items:center; min-height:100vh; }
.demo { display:flex; flex-wrap:wrap; gap:1.5rem; justify-content:center; padding:2rem; background:white; border-radius:16px; box-shadow:0 8px 32px rgba(38,77,228,.1); }
.box { width:90px; height:90px; background:#264de4; color:#fff; border-radius:12px; display:flex; align-items:center; justify-content:center; font-weight:700; font-size:.85rem; }
@keyframes spin-anim   { to { transform: rotate(360deg); } }
@keyframes pulse-anim  { 0%,100% { transform:scale(1); } 50% { transform:scale(1.2); } }
@keyframes bounce-anim { 0%,100% { transform:translateY(0); } 50% { transform:translateY(-20px); } }
@keyframes fade-anim   { 0%,100% { opacity:1; } 50% { opacity:0.2; } }
@keyframes slide-anim  { from { transform:translateX(-40px); opacity:0; } to { transform:translateX(0); opacity:1; } }
.spin   { animation: spin-anim   2s linear infinite; }
.pulse  { animation: pulse-anim  1s ease-in-out infinite; }
.bounce { animation: bounce-anim 0.8s ease infinite; }
.fade   { animation: fade-anim   1.5s ease-in-out infinite; }
.slide  { animation: slide-anim  1s ease forwards; }`,
    editableCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>CSS animation Property</title>
  <style>
    body { background:#f0f4ff; display:flex; justify-content:center; align-items:center; min-height:100vh; font-family:sans-serif; }
    .demo { display:flex; flex-wrap:wrap; gap:1.5rem; justify-content:center; padding:2rem; background:white; border-radius:16px; box-shadow:0 8px 32px rgba(38,77,228,.1); }
    .box { width:90px; height:90px; background:#264de4; color:#fff; border-radius:12px; display:flex; align-items:center; justify-content:center; font-weight:700; font-size:.85rem; }
    @keyframes spin-anim   { to { transform: rotate(360deg); } }
    @keyframes pulse-anim  { 0%,100% { transform:scale(1); } 50% { transform:scale(1.2); } }
    @keyframes bounce-anim { 0%,100% { transform:translateY(0); } 50% { transform:translateY(-20px); } }
    @keyframes fade-anim   { 0%,100% { opacity:1; } 50% { opacity:0.2; } }
    @keyframes slide-anim  { from { transform:translateX(-40px); opacity:0; } to { transform:translateX(0); opacity:1; } }
    .spin   { animation: spin-anim   2s linear infinite; }
    .pulse  { animation: pulse-anim  1s ease-in-out infinite; }
    .bounce { animation: bounce-anim 0.8s ease infinite; }
    .fade   { animation: fade-anim   1.5s ease-in-out infinite; }
    .slide  { animation: slide-anim  1s ease forwards; }
  </style>
</head>
<body>
  <div class="demo">
    <div class="box spin">Spin</div>
    <div class="box pulse">Pulse</div>
    <div class="box bounce">Bounce</div>
    <div class="box fade">Fade</div>
    <div class="box slide">Slide In</div>
  </div>
</body>
</html>`
  },
  {
    property: 'transform',
    description: 'applies a 2D or 3D transformation to an element. It can rotate, scale, skew, or translate an element.',
    htmlCode: `<div class="demo">
  <div class="box t1">rotate(45deg)</div>
  <div class="box t2">scale(1.3)</div>
  <div class="box t3">translateX(20px)</div>
  <div class="box t4">skewX(20deg)</div>
  <div class="box t5">scaleX(-1) (flip)</div>
  <div class="box t6">rotate3d(1,1,0,45deg)</div>
</div>`,
    cssCode: `body { background:#f0f4ff; display:flex; justify-content:center; align-items:center; min-height:100vh; }
.demo { display:flex; flex-wrap:wrap; gap:2rem; justify-content:center; padding:3rem 2rem; background:white; border-radius:16px; box-shadow:0 8px 32px rgba(38,77,228,.1); max-width:580px; }
.box { width:110px; height:70px; background:#264de4; color:#fff; border-radius:8px; display:flex; align-items:center; justify-content:center; font-weight:600; font-size:0.72rem; text-align:center; padding:.3rem; }
.t1 { transform: rotate(45deg); }
.t2 { transform: scale(1.3); }
.t3 { transform: translateX(20px); }
.t4 { transform: skewX(20deg); }
.t5 { transform: scaleX(-1); }
.t6 { transform: rotate3d(1,1,0,45deg); }`,
    editableCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>CSS transform Property</title>
  <style>
    body { background:#f0f4ff; display:flex; justify-content:center; align-items:center; min-height:100vh; font-family:sans-serif; }
    .demo { display:flex; flex-wrap:wrap; gap:2rem; justify-content:center; padding:3rem 2rem; background:white; border-radius:16px; box-shadow:0 8px 32px rgba(38,77,228,.1); max-width:580px; }
    .box { width:110px; height:70px; background:#264de4; color:#fff; border-radius:8px; display:flex; align-items:center; justify-content:center; font-weight:600; font-size:0.72rem; text-align:center; padding:.3rem; }
    .t1 { transform: rotate(45deg); }
    .t2 { transform: scale(1.3); }
    .t3 { transform: translateX(20px); }
    .t4 { transform: skewX(20deg); }
    .t5 { transform: scaleX(-1); }
    .t6 { transform: rotate3d(1,1,0,45deg); }
  </style>
</head>
<body>
  <div class="demo">
    <div class="box t1">rotate(45deg)</div>
    <div class="box t2">scale(1.3)</div>
    <div class="box t3">translateX(20px)</div>
    <div class="box t4">skewX(20deg)</div>
    <div class="box t5">scaleX(-1) (flip)</div>
    <div class="box t6">rotate3d(1,1,0,45deg)</div>
  </div>
</body>
</html>`
  },
  {
    property: 'box-shadow',
    description: 'adds shadow effects around an element\'s frame. You can set multiple effects separated by commas.',
    htmlCode: `<div class="demo">
  <div class="card s1">Simple Shadow</div>
  <div class="card s2">Colored Shadow</div>
  <div class="card s3">Inset Shadow</div>
  <div class="card s4">Multiple Shadows</div>
  <div class="card s5">Glowing Effect</div>
</div>`,
    cssCode: `body { background:#f0f4ff; display:flex; justify-content:center; align-items:center; min-height:100vh; }
.demo { display:flex; flex-wrap:wrap; gap:1.5rem; justify-content:center; padding:2.5rem; background:white; border-radius:16px; }
.card { width:130px; height:80px; background:#fff; border-radius:12px; display:flex; align-items:center; justify-content:center; font-weight:700; font-size:.82rem; color:#264de4; text-align:center; padding:.5rem; }
.s1 { box-shadow: 0 4px 16px rgba(0,0,0,0.15); }
.s2 { box-shadow: 0 8px 24px rgba(38,77,228,0.35); }
.s3 { box-shadow: inset 0 4px 12px rgba(38,77,228,0.2); }
.s4 { box-shadow: 4px 4px 0 #264de4, -4px -4px 0 #42a4f5; }
.s5 { box-shadow: 0 0 20px 6px rgba(38,77,228,0.4); }`,
    editableCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>CSS box-shadow Property</title>
  <style>
    body { background:#f0f4ff; display:flex; justify-content:center; align-items:center; min-height:100vh; font-family:sans-serif; }
    .demo { display:flex; flex-wrap:wrap; gap:1.5rem; justify-content:center; padding:2.5rem; background:white; border-radius:16px; }
    .card { width:130px; height:80px; background:#fff; border-radius:12px; display:flex; align-items:center; justify-content:center; font-weight:700; font-size:.82rem; color:#264de4; text-align:center; padding:.5rem; }
    .s1 { box-shadow: 0 4px 16px rgba(0,0,0,0.15); }
    .s2 { box-shadow: 0 8px 24px rgba(38,77,228,0.35); }
    .s3 { box-shadow: inset 0 4px 12px rgba(38,77,228,0.2); }
    .s4 { box-shadow: 4px 4px 0 #264de4, -4px -4px 0 #42a4f5; }
    .s5 { box-shadow: 0 0 20px 6px rgba(38,77,228,0.4); }
  </style>
</head>
<body>
  <div class="demo">
    <div class="card s1">Simple Shadow</div>
    <div class="card s2">Colored Shadow</div>
    <div class="card s3">Inset Shadow</div>
    <div class="card s4">Multiple Shadows</div>
    <div class="card s5">Glowing Effect</div>
  </div>
</body>
</html>`
  },
  {
    property: 'opacity',
    description: 'sets the opacity of an element. Opacity is the degree to which content behind an element is hidden, and is the opposite of transparency.',
    htmlCode: `<div class="demo">
  <div class="box op100">opacity: 1.0 (100%)</div>
  <div class="box op75">opacity: 0.75 (75%)</div>
  <div class="box op50">opacity: 0.5 (50%)</div>
  <div class="box op25">opacity: 0.25 (25%)</div>
  <div class="box op10">opacity: 0.1 (10%)</div>
</div>`,
    cssCode: `body { background:#f0f4ff; display:flex; justify-content:center; align-items:center; min-height:100vh; }
.demo { display:flex; flex-direction:column; gap:0.75rem; padding:2rem; background:white; border-radius:16px; box-shadow:0 8px 32px rgba(38,77,228,.1); }
.box { background:#264de4; color:#fff; padding:0.75rem 1.5rem; border-radius:10px; font-weight:600; font-size:0.9rem; }
.op100 { opacity: 1.0; }
.op75  { opacity: 0.75; }
.op50  { opacity: 0.5; }
.op25  { opacity: 0.25; }
.op10  { opacity: 0.1; }`,
    editableCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>CSS opacity Property</title>
  <style>
    body { background:#f0f4ff; display:flex; justify-content:center; align-items:center; min-height:100vh; font-family:sans-serif; }
    .demo { display:flex; flex-direction:column; gap:0.75rem; padding:2rem; background:white; border-radius:16px; box-shadow:0 8px 32px rgba(38,77,228,.1); }
    .box { background:#264de4; color:#fff; padding:0.75rem 1.5rem; border-radius:10px; font-weight:600; font-size:0.9rem; }
    .op100 { opacity: 1.0; }
    .op75  { opacity: 0.75; }
    .op50  { opacity: 0.5; }
    .op25  { opacity: 0.25; }
    .op10  { opacity: 0.1; }
  </style>
</head>
<body>
  <div class="demo">
    <div class="box op100">opacity: 1.0 (100%)</div>
    <div class="box op75">opacity: 0.75 (75%)</div>
    <div class="box op50">opacity: 0.5 (50%)</div>
    <div class="box op25">opacity: 0.25 (25%)</div>
    <div class="box op10">opacity: 0.1 (10%)</div>
  </div>
</body>
</html>`
  },
  {
    property: 'overflow',
    description: 'sets what to do when an element\'s content is too big to fit in its block formatting context. It is a shorthand for overflow-x and overflow-y.',
    htmlCode: `<div class="demo">
  <div class="section">
    <p class="label">overflow: visible</p>
    <div class="box ov-visible">This content overflows and is still visible outside the box boundaries.</div>
  </div>
  <div class="section">
    <p class="label">overflow: hidden</p>
    <div class="box ov-hidden">This content is clipped and hidden when it exceeds the container size.</div>
  </div>
  <div class="section">
    <p class="label">overflow: scroll</p>
    <div class="box ov-scroll">This content will show scrollbars always even if not needed. You can scroll to see more text inside this container box.</div>
  </div>
  <div class="section">
    <p class="label">overflow: auto</p>
    <div class="box ov-auto">This content shows scrollbars only when needed. Scroll if there is overflow content to reveal.</div>
  </div>
</div>`,
    cssCode: `body { background:#f0f4ff; display:flex; justify-content:center; padding:2rem; min-height:100vh; }
.demo { background:white; padding:1.5rem; border-radius:16px; box-shadow:0 8px 32px rgba(38,77,228,.1); width:100%; max-width:480px; }
.section { margin-bottom:1.2rem; }
.label { font-size:0.78rem; font-weight:700; color:#264de4; margin-bottom:.4rem; }
.box { height:60px; padding:.5rem .75rem; background:#f0f4ff; border:2px solid #264de4; border-radius:8px; font-size:.85rem; color:#1e2a4a; line-height:1.5; }
.ov-visible { overflow: visible; }
.ov-hidden  { overflow: hidden; }
.ov-scroll  { overflow: scroll; }
.ov-auto    { overflow: auto; }`,
    editableCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>CSS overflow Property</title>
  <style>
    body { background:#f0f4ff; display:flex; justify-content:center; padding:2rem; min-height:100vh; font-family:sans-serif; }
    .demo { background:white; padding:1.5rem; border-radius:16px; box-shadow:0 8px 32px rgba(38,77,228,.1); width:100%; max-width:480px; }
    .section { margin-bottom:1.2rem; }
    .label { font-size:0.78rem; font-weight:700; color:#264de4; margin-bottom:.4rem; }
    .box { height:60px; padding:.5rem .75rem; background:#f0f4ff; border:2px solid #264de4; border-radius:8px; font-size:.85rem; color:#1e2a4a; line-height:1.5; }
    .ov-visible { overflow: visible; }
    .ov-hidden  { overflow: hidden; }
    .ov-scroll  { overflow: scroll; }
    .ov-auto    { overflow: auto; }
  </style>
</head>
<body>
  <div class="demo">
    <div class="section">
      <p class="label">overflow: visible</p>
      <div class="box ov-visible">This content overflows and is still visible outside the box boundaries.</div>
    </div>
    <div class="section">
      <p class="label">overflow: hidden</p>
      <div class="box ov-hidden">This content is clipped and hidden when it exceeds the container size.</div>
    </div>
    <div class="section">
      <p class="label">overflow: scroll</p>
      <div class="box ov-scroll">This content will show scrollbars always even if not needed. You can scroll to see more text inside this container box.</div>
    </div>
    <div class="section">
      <p class="label">overflow: auto</p>
      <div class="box ov-auto">This content shows scrollbars only when needed. Scroll if there is overflow content to reveal.</div>
    </div>
  </div>
</body>
</html>`
  },
  {
    property: 'var',
    description: 'inserts the value of a CSS custom property (variable). CSS variables are defined with a -- prefix and can be reused throughout a stylesheet.',
    htmlCode: `<div class="demo">
  <h2>CSS Variables Demo</h2>
  <div class="card primary-card">Primary Card</div>
  <div class="card accent-card">Accent Card</div>
  <div class="card success-card">Success Card</div>
  <p class="note">Change --primary in :root to update all cards at once!</p>
</div>`,
    cssCode: `:root {
  --primary: #264de4;
  --accent:  #42a4f5;
  --success: #22c55e;
  --radius:  12px;
  --spacing: 1rem;
}
body { background:#f0f4ff; display:flex; justify-content:center; align-items:center; min-height:100vh; }
.demo { background:white; padding:2rem; border-radius:var(--radius); box-shadow:0 8px 32px rgba(38,77,228,.1); }
h2 { color:var(--primary); margin-bottom:var(--spacing); font-size:1.2rem; }
.card { padding:var(--spacing); border-radius:var(--radius); color:#fff; font-weight:700; margin-bottom:.75rem; }
.primary-card { background: var(--primary); }
.accent-card  { background: var(--accent); }
.success-card { background: var(--success); }
.note { font-size:.8rem; color:#6b7280; margin-top:.5rem; }`,
    editableCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>CSS var() Function</title>
  <style>
    :root {
      --primary: #264de4;
      --accent:  #42a4f5;
      --success: #22c55e;
      --radius:  12px;
      --spacing: 1rem;
    }
    body { background:#f0f4ff; display:flex; justify-content:center; align-items:center; min-height:100vh; font-family:sans-serif; }
    .demo { background:white; padding:2rem; border-radius:var(--radius); box-shadow:0 8px 32px rgba(38,77,228,.1); }
    h2 { color:var(--primary); margin-bottom:var(--spacing); font-size:1.2rem; }
    .card { padding:var(--spacing); border-radius:var(--radius); color:#fff; font-weight:700; margin-bottom:.75rem; }
    .primary-card { background: var(--primary); }
    .accent-card  { background: var(--accent); }
    .success-card { background: var(--success); }
    .note { font-size:.8rem; color:#6b7280; margin-top:.5rem; }
  </style>
</head>
<body>
  <div class="demo">
    <h2>CSS Variables Demo</h2>
    <div class="card primary-card">Primary Card</div>
    <div class="card accent-card">Accent Card</div>
    <div class="card success-card">Success Card</div>
    <p class="note">Change --primary in :root to update all cards at once!</p>
  </div>
</body>
</html>`
  },
  {
    property: 'media-query',
    description: 'applies different styles for different media types/devices. Media queries are used for responsive design, enabling the layout to change at defined breakpoints.',
    htmlCode: `<div class="demo">
  <div class="card">
    <div class="indicator"></div>
    <h2>Responsive Layout</h2>
    <p>Resize the window to see the layout change!</p>
    <div class="grid">
      <div class="item">Box 1</div>
      <div class="item">Box 2</div>
      <div class="item">Box 3</div>
    </div>
  </div>
</div>`,
    cssCode: `body { background:#f0f4ff; display:flex; justify-content:center; padding:1rem; min-height:100vh; }
.demo { width:100%; max-width:600px; }
.card { background:white; padding:1.5rem; border-radius:16px; box-shadow:0 8px 32px rgba(38,77,228,.1); }
h2 { color:#264de4; margin-bottom:.5rem; }
p  { color:#6b7280; font-size:.9rem; margin-bottom:1rem; }
.grid { display:grid; gap:.75rem; }
.item { background:#264de4; color:#fff; padding:.75rem; border-radius:8px; text-align:center; font-weight:700; }
.indicator { padding:.4rem 1rem; border-radius:50px; font-size:.75rem; font-weight:700; display:inline-block; margin-bottom:1rem; }
/* Mobile */
@media (max-width: 480px) {
  .grid { grid-template-columns: 1fr; }
  .indicator { background:#e44d26; color:#fff; content:"Mobile"; }
  .indicator::before { content:"📱 Mobile View"; }
}
/* Tablet */
@media (min-width: 481px) and (max-width: 768px) {
  .grid { grid-template-columns: repeat(2, 1fr); }
  .indicator { background:#f59e0b; color:#fff; }
  .indicator::before { content:"📲 Tablet View"; }
}
/* Desktop */
@media (min-width: 769px) {
  .grid { grid-template-columns: repeat(3, 1fr); }
  .indicator { background:#22c55e; color:#fff; }
  .indicator::before { content:"🖥️ Desktop View"; }
}`,
    editableCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CSS Media Query</title>
  <style>
    body { background:#f0f4ff; display:flex; justify-content:center; padding:1rem; min-height:100vh; font-family:sans-serif; }
    .demo { width:100%; max-width:600px; }
    .card { background:white; padding:1.5rem; border-radius:16px; box-shadow:0 8px 32px rgba(38,77,228,.1); }
    h2 { color:#264de4; margin-bottom:.5rem; }
    p  { color:#6b7280; font-size:.9rem; margin-bottom:1rem; }
    .grid { display:grid; gap:.75rem; }
    .item { background:#264de4; color:#fff; padding:.75rem; border-radius:8px; text-align:center; font-weight:700; }
    .indicator { padding:.4rem 1rem; border-radius:50px; font-size:.75rem; font-weight:700; display:inline-block; margin-bottom:1rem; }
    @media (max-width: 480px) {
      .grid { grid-template-columns: 1fr; }
      .indicator { background:#e44d26; color:#fff; }
      .indicator::before { content:"📱 Mobile View"; }
    }
    @media (min-width: 481px) and (max-width: 768px) {
      .grid { grid-template-columns: repeat(2, 1fr); }
      .indicator { background:#f59e0b; color:#fff; }
      .indicator::before { content:"📲 Tablet View"; }
    }
    @media (min-width: 769px) {
      .grid { grid-template-columns: repeat(3, 1fr); }
      .indicator { background:#22c55e; color:#fff; }
      .indicator::before { content:"🖥️ Desktop View"; }
    }
  </style>
</head>
<body>
  <div class="demo">
    <div class="card">
      <div class="indicator"></div>
      <h2>Responsive Layout</h2>
      <p>Resize the window to see the layout change!</p>
      <div class="grid">
        <div class="item">Box 1</div>
        <div class="item">Box 2</div>
        <div class="item">Box 3</div>
      </div>
    </div>
  </div>
</body>
</html>`
  },
  {
    property: 'linear-gradient',
    description: 'creates an image consisting of a progressive transition between two or more colors along a straight line, used as a background image.',
    htmlCode: `<div class="demo">
  <div class="box g1">To Right</div>
  <div class="box g2">To Bottom Right</div>
  <div class="box g3">135deg</div>
  <div class="box g4">Multi-color</div>
  <div class="box g5">Transparent Fade</div>
  <div class="box g6">Hard Stop</div>
</div>`,
    cssCode: `body { background:#f0f4ff; display:flex; justify-content:center; align-items:center; min-height:100vh; }
.demo { display:flex; flex-wrap:wrap; gap:1rem; justify-content:center; padding:2rem; background:white; border-radius:16px; box-shadow:0 8px 32px rgba(38,77,228,.1); max-width:560px; }
.box { width:160px; height:80px; border-radius:12px; display:flex; align-items:center; justify-content:center; font-weight:700; color:#fff; font-size:.85rem; }
.g1 { background: linear-gradient(to right, #264de4, #42a4f5); }
.g2 { background: linear-gradient(to bottom right, #264de4, #1572b6); }
.g3 { background: linear-gradient(135deg, #264de4, #e44d90); }
.g4 { background: linear-gradient(to right, #264de4, #42a4f5, #22c55e); }
.g5 { background: linear-gradient(to right, #264de4, transparent); color:#264de4; }
.g6 { background: linear-gradient(to right, #264de4 50%, #42a4f5 50%); }`,
    editableCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>CSS linear-gradient()</title>
  <style>
    body { background:#f0f4ff; display:flex; justify-content:center; align-items:center; min-height:100vh; font-family:sans-serif; }
    .demo { display:flex; flex-wrap:wrap; gap:1rem; justify-content:center; padding:2rem; background:white; border-radius:16px; box-shadow:0 8px 32px rgba(38,77,228,.1); max-width:560px; }
    .box { width:160px; height:80px; border-radius:12px; display:flex; align-items:center; justify-content:center; font-weight:700; color:#fff; font-size:.85rem; }
    .g1 { background: linear-gradient(to right, #264de4, #42a4f5); }
    .g2 { background: linear-gradient(to bottom right, #264de4, #1572b6); }
    .g3 { background: linear-gradient(135deg, #264de4, #e44d90); }
    .g4 { background: linear-gradient(to right, #264de4, #42a4f5, #22c55e); }
    .g5 { background: linear-gradient(to right, #264de4, transparent); color:#264de4; }
    .g6 { background: linear-gradient(to right, #264de4 50%, #42a4f5 50%); }
  </style>
</head>
<body>
  <div class="demo">
    <div class="box g1">To Right</div>
    <div class="box g2">To Bottom Right</div>
    <div class="box g3">135deg</div>
    <div class="box g4">Multi-color</div>
    <div class="box g5">Transparent Fade</div>
    <div class="box g6">Hard Stop</div>
  </div>
</body>
</html>`
  },
  {
    property: 'hover',
    description: 'is a CSS pseudo-class that matches when the user interacts with an element with a pointing device, but does not necessarily activate it.',
    htmlCode: `<div class="demo">
  <button class="btn b1">Color Change</button>
  <button class="btn b2">Scale Up</button>
  <button class="btn b3">Lift Shadow</button>
  <a href="#" class="link-item">Underline on Hover</a>
  <div class="card-hover">
    <h3>Card Hover Effect</h3>
    <p>Hover to see border and shadow change</p>
  </div>
</div>`,
    cssCode: `body { background:#f0f4ff; display:flex; justify-content:center; align-items:center; min-height:100vh; }
.demo { display:flex; flex-direction:column; gap:1rem; padding:2rem; background:white; border-radius:16px; box-shadow:0 8px 32px rgba(38,77,228,.1); }
.btn { padding:.7rem 1.8rem; border:none; border-radius:50px; font-size:.9rem; font-weight:600; cursor:pointer; transition:all .3s ease; }
.b1 { background:#264de4; color:#fff; }
.b1:hover { background:#42a4f5; }
.b2 { background:#1572b6; color:#fff; }
.b2:hover { transform:scale(1.08); }
.b3 { background:#264de4; color:#fff; box-shadow:none; }
.b3:hover { box-shadow:0 8px 24px rgba(38,77,228,.5); transform:translateY(-3px); }
.link-item { color:#264de4; font-weight:600; text-decoration:none; transition:all .2s ease; display:inline-block; padding:.2rem 0; border-bottom:2px solid transparent; }
.link-item:hover { border-bottom-color:#264de4; }
.card-hover { padding:1rem; border:2px solid rgba(38,77,228,.15); border-radius:12px; cursor:pointer; transition:all .3s ease; }
.card-hover h3 { color:#264de4; font-size:.95rem; }
.card-hover p  { color:#6b7280; font-size:.82rem; margin-top:.3rem; }
.card-hover:hover { border-color:#264de4; box-shadow:0 8px 24px rgba(38,77,228,.2); transform:translateY(-2px); }`,
    editableCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>CSS :hover Pseudo-class</title>
  <style>
    body { background:#f0f4ff; display:flex; justify-content:center; align-items:center; min-height:100vh; font-family:sans-serif; }
    .demo { display:flex; flex-direction:column; gap:1rem; padding:2rem; background:white; border-radius:16px; box-shadow:0 8px 32px rgba(38,77,228,.1); }
    .btn { padding:.7rem 1.8rem; border:none; border-radius:50px; font-size:.9rem; font-weight:600; cursor:pointer; transition:all .3s ease; }
    .b1 { background:#264de4; color:#fff; }
    .b1:hover { background:#42a4f5; }
    .b2 { background:#1572b6; color:#fff; }
    .b2:hover { transform:scale(1.08); }
    .b3 { background:#264de4; color:#fff; box-shadow:none; }
    .b3:hover { box-shadow:0 8px 24px rgba(38,77,228,.5); transform:translateY(-3px); }
    .link-item { color:#264de4; font-weight:600; text-decoration:none; transition:all .2s ease; display:inline-block; padding:.2rem 0; border-bottom:2px solid transparent; }
    .link-item:hover { border-bottom-color:#264de4; }
    .card-hover { padding:1rem; border:2px solid rgba(38,77,228,.15); border-radius:12px; cursor:pointer; transition:all .3s ease; }
    .card-hover h3 { color:#264de4; font-size:.95rem; }
    .card-hover p  { color:#6b7280; font-size:.82rem; margin-top:.3rem; }
    .card-hover:hover { border-color:#264de4; box-shadow:0 8px 24px rgba(38,77,228,.2); transform:translateY(-2px); }
  </style>
</head>
<body>
  <div class="demo">
    <button class="btn b1">Color Change</button>
    <button class="btn b2">Scale Up</button>
    <button class="btn b3">Lift Shadow</button>
    <a href="#" class="link-item">Underline on Hover</a>
    <div class="card-hover">
      <h3>Card Hover Effect</h3>
      <p>Hover to see border and shadow change</p>
    </div>
  </div>
</body>
</html>`
  },
  {
    property: 'z-index',
    description: 'sets the z-order of a positioned element and its descendants or flex items. Overlapping elements with a larger z-index cover those with a smaller one.',
    htmlCode: `<div class="demo">
  <p class="label">Stacking Order with z-index</p>
  <div class="stack-container">
    <div class="layer l1">z-index: 1</div>
    <div class="layer l2">z-index: 2</div>
    <div class="layer l3">z-index: 3</div>
    <div class="layer l4">z-index: 4 (top)</div>
  </div>
</div>`,
    cssCode: `body { background:#f0f4ff; display:flex; justify-content:center; align-items:center; min-height:100vh; }
.demo { background:white; padding:2rem; border-radius:16px; box-shadow:0 8px 32px rgba(38,77,228,.1); }
.label { font-size:.78rem; font-weight:700; color:#264de4; margin-bottom:1rem; text-transform:uppercase; }
.stack-container { position:relative; height:160px; width:300px; }
.layer { position:absolute; width:180px; height:60px; border-radius:10px; display:flex; align-items:center; justify-content:center; font-weight:700; font-size:.85rem; color:#fff; border:2px solid rgba(255,255,255,.3); }
.l1 { background:rgba(38,77,228,.3); top:0; left:0; z-index:1; }
.l2 { background:rgba(38,77,228,.5); top:20px; left:20px; z-index:2; }
.l3 { background:rgba(38,77,228,.75); top:40px; left:40px; z-index:3; }
.l4 { background:#264de4; top:60px; left:60px; z-index:4; }`,
    editableCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>CSS z-index Property</title>
  <style>
    body { background:#f0f4ff; display:flex; justify-content:center; align-items:center; min-height:100vh; font-family:sans-serif; }
    .demo { background:white; padding:2rem; border-radius:16px; box-shadow:0 8px 32px rgba(38,77,228,.1); }
    .label { font-size:.78rem; font-weight:700; color:#264de4; margin-bottom:1rem; text-transform:uppercase; }
    .stack-container { position:relative; height:160px; width:300px; }
    .layer { position:absolute; width:180px; height:60px; border-radius:10px; display:flex; align-items:center; justify-content:center; font-weight:700; font-size:.85rem; color:#fff; border:2px solid rgba(255,255,255,.3); }
    .l1 { background:rgba(38,77,228,.3); top:0; left:0; z-index:1; }
    .l2 { background:rgba(38,77,228,.5); top:20px; left:20px; z-index:2; }
    .l3 { background:rgba(38,77,228,.75); top:40px; left:40px; z-index:3; }
    .l4 { background:#264de4; top:60px; left:60px; z-index:4; }
  </style>
</head>
<body>
  <div class="demo">
    <p class="label">Stacking Order with z-index</p>
    <div class="stack-container">
      <div class="layer l1">z-index: 1</div>
      <div class="layer l2">z-index: 2</div>
      <div class="layer l3">z-index: 3</div>
      <div class="layer l4">z-index: 4 (top)</div>
    </div>
  </div>
</body>
</html>`
  },
  {
    property: 'border-radius',
    description: 'rounds the corners of an element\'s outer border edge. You can set a single radius to make circular corners, or two radii to make elliptical corners.',
    htmlCode: `<div class="demo">
  <div class="box r0">border-radius: 0</div>
  <div class="box r1">border-radius: 8px</div>
  <div class="box r2">border-radius: 16px</div>
  <div class="box r3">border-radius: 50px (pill)</div>
  <div class="box r4">border-radius: 50% (circle)</div>
  <div class="box r5">border-radius: 20px 0 20px 0</div>
</div>`,
    cssCode: `body { background:#f0f4ff; display:flex; justify-content:center; align-items:center; min-height:100vh; }
.demo { display:flex; flex-wrap:wrap; gap:1rem; justify-content:center; padding:2rem; background:white; border-radius:16px; box-shadow:0 8px 32px rgba(38,77,228,.1); max-width:520px; }
.box { background:#264de4; color:#fff; font-weight:700; font-size:.8rem; text-align:center; display:flex; align-items:center; justify-content:center; padding:.5rem; }
.r0,.r1,.r2,.r3,.r5 { width:150px; height:55px; }
.r4 { width:80px; height:80px; }
.r0 { border-radius: 0; }
.r1 { border-radius: 8px; }
.r2 { border-radius: 16px; }
.r3 { border-radius: 50px; }
.r4 { border-radius: 50%; }
.r5 { border-radius: 20px 0 20px 0; }`,
    editableCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>CSS border-radius Property</title>
  <style>
    body { background:#f0f4ff; display:flex; justify-content:center; align-items:center; min-height:100vh; font-family:sans-serif; }
    .demo { display:flex; flex-wrap:wrap; gap:1rem; justify-content:center; padding:2rem; background:white; border-radius:16px; box-shadow:0 8px 32px rgba(38,77,228,.1); max-width:520px; }
    .box { background:#264de4; color:#fff; font-weight:700; font-size:.8rem; text-align:center; display:flex; align-items:center; justify-content:center; padding:.5rem; }
    .r0,.r1,.r2,.r3,.r5 { width:150px; height:55px; }
    .r4 { width:80px; height:80px; }
    .r0 { border-radius: 0; }
    .r1 { border-radius: 8px; }
    .r2 { border-radius: 16px; }
    .r3 { border-radius: 50px; }
    .r4 { border-radius: 50%; }
    .r5 { border-radius: 20px 0 20px 0; }
  </style>
</head>
<body>
  <div class="demo">
    <div class="box r0">border-radius: 0</div>
    <div class="box r1">border-radius: 8px</div>
    <div class="box r2">border-radius: 16px</div>
    <div class="box r3">border-radius: 50px (pill)</div>
    <div class="box r4">border-radius: 50% (circle)</div>
    <div class="box r5">border-radius: 20px 0 20px 0</div>
  </div>
</body>
</html>`
  },
  {
    property: 'width',
    description: 'sets the width of an element. By default, it sets the width of the content area, but when box-sizing is set to border-box, it sets the width including padding and border.',
    htmlCode: `<div class="demo">
  <div class="bar w50">width: 50px</div>
  <div class="bar w100px">width: 100px</div>
  <div class="bar w50pct">width: 50%</div>
  <div class="bar w100pct">width: 100%</div>
  <div class="bar wauto">width: auto</div>
  <div class="bar wfit">width: fit-content</div>
</div>`,
    cssCode: `body { background:#f0f4ff; display:flex; justify-content:center; padding:2rem; min-height:100vh; }
.demo { background:white; padding:1.5rem; border-radius:16px; box-shadow:0 8px 32px rgba(38,77,228,.1); width:100%; max-width:500px; display:flex; flex-direction:column; gap:.75rem; }
.bar { background:#264de4; color:#fff; padding:.5rem .75rem; border-radius:8px; font-size:.82rem; font-weight:700; white-space:nowrap; }
.w50     { width: 50px; }
.w100px  { width: 100px; }
.w50pct  { width: 50%; }
.w100pct { width: 100%; }
.wauto   { width: auto; }
.wfit    { width: fit-content; }`,
    editableCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>CSS width Property</title>
  <style>
    body { background:#f0f4ff; display:flex; justify-content:center; padding:2rem; min-height:100vh; font-family:sans-serif; }
    .demo { background:white; padding:1.5rem; border-radius:16px; box-shadow:0 8px 32px rgba(38,77,228,.1); width:100%; max-width:500px; display:flex; flex-direction:column; gap:.75rem; }
    .bar { background:#264de4; color:#fff; padding:.5rem .75rem; border-radius:8px; font-size:.82rem; font-weight:700; white-space:nowrap; }
    .w50     { width: 50px; }
    .w100px  { width: 100px; }
    .w50pct  { width: 50%; }
    .w100pct { width: 100%; }
    .wauto   { width: auto; }
    .wfit    { width: fit-content; }
  </style>
</head>
<body>
  <div class="demo">
    <div class="bar w50">width: 50px</div>
    <div class="bar w100px">width: 100px</div>
    <div class="bar w50pct">width: 50%</div>
    <div class="bar w100pct">width: 100%</div>
    <div class="bar wauto">width: auto</div>
    <div class="bar wfit">width: fit-content</div>
  </div>
</body>
</html>`
  },
  {
    property: 'background-image',
    description: 'sets one or more background images on an element. Background images are drawn on top of the background color. The first image is drawn on top.',
    htmlCode: `<div class="demo">
  <div class="box img1">URL Image</div>
  <div class="box img2">Linear Gradient</div>
  <div class="box img3">Radial Gradient</div>
  <div class="box img4">Conic Gradient</div>
  <div class="box img5">Gradient + Overlay</div>
</div>`,
    cssCode: `body { background:#f0f4ff; display:flex; justify-content:center; align-items:center; min-height:100vh; }
.demo { display:flex; flex-wrap:wrap; gap:1rem; justify-content:center; padding:2rem; background:white; border-radius:16px; box-shadow:0 8px 32px rgba(38,77,228,.1); max-width:560px; }
.box { width:160px; height:100px; border-radius:12px; display:flex; align-items:center; justify-content:center; font-weight:700; font-size:.82rem; color:#fff; text-shadow:0 1px 3px rgba(0,0,0,.5); }
.img1 { background-image: url('https://picsum.photos/160/100'); background-size:cover; background-position:center; }
.img2 { background-image: linear-gradient(135deg, #264de4, #42a4f5); }
.img3 { background-image: radial-gradient(circle, #42a4f5, #264de4); }
.img4 { background-image: conic-gradient(#264de4, #42a4f5, #1572b6, #264de4); }
.img5 { background-image: linear-gradient(rgba(38,77,228,.7),rgba(38,77,228,.7)), url('https://picsum.photos/160/100'); background-size:cover; }`,
    editableCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>CSS background-image Property</title>
  <style>
    body { background:#f0f4ff; display:flex; justify-content:center; align-items:center; min-height:100vh; font-family:sans-serif; }
    .demo { display:flex; flex-wrap:wrap; gap:1rem; justify-content:center; padding:2rem; background:white; border-radius:16px; box-shadow:0 8px 32px rgba(38,77,228,.1); max-width:560px; }
    .box { width:160px; height:100px; border-radius:12px; display:flex; align-items:center; justify-content:center; font-weight:700; font-size:.82rem; color:#fff; text-shadow:0 1px 3px rgba(0,0,0,.5); }
    .img1 { background-image: url('https://picsum.photos/160/100'); background-size:cover; background-position:center; }
    .img2 { background-image: linear-gradient(135deg, #264de4, #42a4f5); }
    .img3 { background-image: radial-gradient(circle, #42a4f5, #264de4); }
    .img4 { background-image: conic-gradient(#264de4, #42a4f5, #1572b6, #264de4); }
    .img5 { background-image: linear-gradient(rgba(38,77,228,.7),rgba(38,77,228,.7)), url('https://picsum.photos/160/100'); background-size:cover; }
  </style>
</head>
<body>
  <div class="demo">
    <div class="box img1">URL Image</div>
    <div class="box img2">Linear Gradient</div>
    <div class="box img3">Radial Gradient</div>
    <div class="box img4">Conic Gradient</div>
    <div class="box img5">Gradient + Overlay</div>
  </div>
</body>
</html>`
  },
  {
    property: 'object-fit',
    description: 'sets how the content of a replaced element, such as an img or video, should be resized to fit its container.',
    htmlCode: `<div class="demo">
  <div class="item">
    <p class="label">object-fit: fill</p>
    <img src="https://picsum.photos/200/150" class="img fill" alt="fill">
  </div>
  <div class="item">
    <p class="label">object-fit: contain</p>
    <img src="https://picsum.photos/200/150" class="img contain" alt="contain">
  </div>
  <div class="item">
    <p class="label">object-fit: cover</p>
    <img src="https://picsum.photos/200/150" class="img cover" alt="cover">
  </div>
  <div class="item">
    <p class="label">object-fit: none</p>
    <img src="https://picsum.photos/200/150" class="img none-fit" alt="none">
  </div>
</div>`,
    cssCode: `body { background:#f0f4ff; display:flex; justify-content:center; padding:2rem; min-height:100vh; }
.demo { display:flex; flex-wrap:wrap; gap:1.5rem; justify-content:center; background:white; padding:1.5rem; border-radius:16px; box-shadow:0 8px 32px rgba(38,77,228,.1); max-width:580px; }
.item { display:flex; flex-direction:column; align-items:center; gap:.4rem; }
.label { font-size:.75rem; font-weight:700; color:#264de4; text-align:center; }
.img { width:120px; height:90px; border:2px solid #264de4; border-radius:8px; background:#f0f4ff; }
.fill    { object-fit: fill; }
.contain { object-fit: contain; }
.cover   { object-fit: cover; }
.none-fit{ object-fit: none; }`,
    editableCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>CSS object-fit Property</title>
  <style>
    body { background:#f0f4ff; display:flex; justify-content:center; padding:2rem; min-height:100vh; font-family:sans-serif; }
    .demo { display:flex; flex-wrap:wrap; gap:1.5rem; justify-content:center; background:white; padding:1.5rem; border-radius:16px; box-shadow:0 8px 32px rgba(38,77,228,.1); max-width:580px; }
    .item { display:flex; flex-direction:column; align-items:center; gap:.4rem; }
    .label { font-size:.75rem; font-weight:700; color:#264de4; text-align:center; }
    .img { width:120px; height:90px; border:2px solid #264de4; border-radius:8px; background:#f0f4ff; }
    .fill    { object-fit: fill; }
    .contain { object-fit: contain; }
    .cover   { object-fit: cover; }
    .none-fit{ object-fit: none; }
  </style>
</head>
<body>
  <div class="demo">
    <div class="item">
      <p class="label">object-fit: fill</p>
      <img src="https://picsum.photos/200/150" class="img fill" alt="fill">
    </div>
    <div class="item">
      <p class="label">object-fit: contain</p>
      <img src="https://picsum.photos/200/150" class="img contain" alt="contain">
    </div>
    <div class="item">
      <p class="label">object-fit: cover</p>
      <img src="https://picsum.photos/200/150" class="img cover" alt="cover">
    </div>
    <div class="item">
      <p class="label">object-fit: none</p>
      <img src="https://picsum.photos/200/150" class="img none-fit" alt="none">
    </div>
  </div>
</body>
</html>`
  },
  {
    property: 'calc',
    description: 'is a CSS function that allows mathematical calculations to be performed when specifying CSS property values. It supports +, -, *, and / operators.',
    htmlCode: `<div class="demo">
  <h2>calc() Examples</h2>
  <div class="bar b1">width: calc(100% - 40px)</div>
  <div class="bar b2">width: calc(50% + 20px)</div>
  <div class="bar b3">font-size: calc(14px + 1vw)</div>
  <div class="bar b4">padding: calc(1rem * 2)</div>
  <div class="bar b5">height: calc(100vh - 200px)</div>
</div>`,
    cssCode: `body { background:#f0f4ff; display:flex; justify-content:center; padding:2rem; min-height:100vh; }
.demo { background:white; padding:1.5rem; border-radius:16px; box-shadow:0 8px 32px rgba(38,77,228,.1); width:100%; max-width:500px; }
h2 { color:#264de4; font-size:1rem; margin-bottom:1rem; }
.bar { background:#264de4; color:#fff; border-radius:8px; font-weight:600; font-size:.82rem; margin-bottom:.6rem; }
.b1 { width: calc(100% - 40px); padding:.6rem 1rem; }
.b2 { width: calc(50% + 20px); padding:.6rem 1rem; }
.b3 { font-size: calc(12px + 1vw); padding:.6rem 1rem; width:100%; }
.b4 { padding: calc(1rem * 2); width:fit-content; }
.b5 { height: calc(3rem + 20px); padding:.6rem 1rem; display:flex; align-items:center; width:100%; }`,
    editableCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>CSS calc() Function</title>
  <style>
    body { background:#f0f4ff; display:flex; justify-content:center; padding:2rem; min-height:100vh; font-family:sans-serif; }
    .demo { background:white; padding:1.5rem; border-radius:16px; box-shadow:0 8px 32px rgba(38,77,228,.1); width:100%; max-width:500px; }
    h2 { color:#264de4; font-size:1rem; margin-bottom:1rem; }
    .bar { background:#264de4; color:#fff; border-radius:8px; font-weight:600; font-size:.82rem; margin-bottom:.6rem; }
    .b1 { width: calc(100% - 40px); padding:.6rem 1rem; }
    .b2 { width: calc(50% + 20px); padding:.6rem 1rem; }
    .b3 { font-size: calc(12px + 1vw); padding:.6rem 1rem; width:100%; }
    .b4 { padding: calc(1rem * 2); width:fit-content; }
    .b5 { height: calc(3rem + 20px); padding:.6rem 1rem; display:flex; align-items:center; width:100%; }
  </style>
</head>
<body>
  <div class="demo">
    <h2>calc() Examples</h2>
    <div class="bar b1">width: calc(100% - 40px)</div>
    <div class="bar b2">width: calc(50% + 20px)</div>
    <div class="bar b3">font-size: calc(14px + 1vw)</div>
    <div class="bar b4">padding: calc(1rem * 2)</div>
    <div class="bar b5">height: calc(100vh - 200px)</div>
  </div>
</body>
</html>`
  }
];

export function getPropertyExample(propertyName) {
  if (!propertyName) return null;
  const item = propertyPagesData.find(
    (p) => p.property.toLowerCase() === propertyName.toLowerCase()
  );
  return item || null;
}

export default propertyPagesData;

export const propertyExamples = propertyPagesData;
