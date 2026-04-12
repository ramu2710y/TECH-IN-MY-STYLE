const tagPagesData = [
  {
    tag: 'a',
    description: 'The <a> tag defines a hyperlink, which is used to link from one page to another. The most important attribute is the href attribute, which indicates the link destination.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Anchor Tag Example</title>
</head>
<body>
  <h2>Anchor Tag Example:</h2>
  <p><a href="https://techinmystyle.com" target="_self">Open site in same tab</a></p>
  <p><a href="https://techinmystyle.com" target="_blank">Open site in a new tab</a></p>
  <p><a href="https://techinmystyle.com" target="_parent">Open site in parent frame</a></p>
  <p><a href="https://techinmystyle.com" target="_top">Open site in full window</a></p>
  <p><a href="#section1">Jump to section 1</a></p>
  <p><a href="mailto:example@example.com">Send Email</a></p>
  <p><a href="tel:+1234567890">Call Us</a></p>
  <p><a href="document.pdf" download>Download PDF</a></p>
  <h3 id="section1">Section 1</h3>
  <mark>If the above code is not working, copy and run it in the compiler.</mark>
</body>
</html>`
  },
  {
    tag: 'abbr',
    description: 'The <abbr> tag defines an abbreviation or an acronym. The title attribute is used to show the full form of the abbreviation when hovered.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Abbr Tag Example</title>
  <style>
    abbr { text-decoration: underline dotted; cursor: help; }
  </style>
</head>
<body>
  <h2>Abbreviation Tag Example:</h2>
  <p>The <abbr title="World Health Organization">WHO</abbr> was founded in 1948.</p>
  <p><abbr title="HyperText Markup Language">HTML</abbr> is the standard markup language for web pages.</p>
  <p><abbr title="Cascading Style Sheets">CSS</abbr> is used to style HTML documents.</p>
  <p>I work at <abbr title="National Aeronautics and Space Administration">NASA</abbr>.</p>
  <p><abbr title="As Soon As Possible">ASAP</abbr> means as quickly as possible.</p>
  <mark>If the above code is not working, copy and run it in the compiler.</mark>
</body>
</html>`
  },
  {
    tag: 'address',
    description: 'The <address> tag defines contact information for the author/owner of a document or an article. It typically renders in italic and is used to provide postal or digital contact details.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Address Tag Example</title>
</head>
<body>
  <h2>Address Tag Example:</h2>
  <h3>Author Contact:</h3>
  <address>
    Written by <a href="mailto:john@example.com">John Doe</a>.<br>
    Visit us at:<br>
    Example.com<br>
    Box 564, Disneyland<br>
    USA
  </address>

  <h3>Business Address:</h3>
  <address>
    <strong>Tech In My Style</strong><br>
    123 Web Developer Lane<br>
    Silicon Valley, CA 94025<br>
    Phone: <a href="tel:+11234567890">+1 (123) 456-7890</a><br>
    Email: <a href="mailto:info@techinmystyle.com">info@techinmystyle.com</a>
  </address>
  <mark>If the above code is not working, copy and run it in the compiler.</mark>
</body>
</html>`
  },
  {
    tag: 'article',
    description: 'The <article> tag specifies independent, self-contained content. An article should make sense on its own and can be distributed independently (blog post, news article, forum post, etc.).',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Article Tag Example</title>
  <style>
    article { border: 1px solid #ccc; padding: 15px; margin: 10px 0; border-radius: 5px; }
    article h3 { color: #333; }
  </style>
</head>
<body>
  <h2>Article Tag Example:</h2>

  <article>
    <h3>What is HTML?</h3>
    <p>HTML stands for HyperText Markup Language. It is the standard language for creating web pages.</p>
    <footer>
      <p>Posted by <strong>Jane Doe</strong> on <time datetime="2024-01-15">January 15, 2024</time></p>
    </footer>
  </article>

  <article>
    <h3>Introduction to CSS</h3>
    <p>CSS stands for Cascading Style Sheets. It is used to style and layout web pages.</p>
    <footer>
      <p>Posted by <strong>John Smith</strong> on <time datetime="2024-02-20">February 20, 2024</time></p>
    </footer>
  </article>
  <mark>If the above code is not working, copy and run it in the compiler.</mark>
</body>
</html>`
  },
  {
    tag: 'aside',
    description: 'The <aside> tag defines content that is placed aside from the content it is placed in. It is used for sidebars, pull quotes, or any content that is tangentially related to surrounding content.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Aside Tag Example</title>
  <style>
    body { display: flex; gap: 20px; font-family: Arial, sans-serif; }
    main { flex: 3; }
    aside { flex: 1; background: #f0f0f0; padding: 15px; border-left: 3px solid #007bff; border-radius: 5px; }
    aside h4 { margin-top: 0; }
  </style>
</head>
<body>
  <main>
    <h2>Learning HTML</h2>
    <p>HTML is the backbone of all web pages. It provides the structure for content on the web, defining elements like headings, paragraphs, links, and images.</p>
    <p>Every webpage you visit is built using HTML at its core, making it one of the most important skills for a web developer to learn.</p>
  </main>
  <aside>
    <h4>Did You Know?</h4>
    <p>HTML was created by Tim Berners-Lee in 1991.</p>
    <h4>Related Topics</h4>
    <ul>
      <li>CSS</li>
      <li>JavaScript</li>
      <li>Web Design</li>
    </ul>
  </aside>
  <mark>If the above code is not working, copy and run it in the compiler.</mark>
</body>
</html>`
  },
  {
    tag: 'audio',
    description: 'The <audio> tag is used to embed sound content in a document. It may contain one or more <source> tags with different audio formats so the browser can pick the one it supports.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Audio Tag Example</title>
</head>
<body>
  <h2>Audio Tag Example:</h2>

  <h3>Basic Audio with Controls:</h3>
  <audio controls>
    <source src="audio.mp3" type="audio/mpeg">
    <source src="audio.ogg" type="audio/ogg">
    Your browser does not support the audio element.
  </audio>

  <h3>Autoplay and Loop:</h3>
  <audio controls autoplay loop>
    <source src="background.mp3" type="audio/mpeg">
    Your browser does not support the audio element.
  </audio>

  <h3>Muted Audio:</h3>
  <audio controls muted>
    <source src="audio.mp3" type="audio/mpeg">
    Your browser does not support the audio element.
  </audio>

  <h3>Audio Attributes:</h3>
  <ul>
    <li><strong>controls</strong> - Displays play/pause, volume controls</li>
    <li><strong>autoplay</strong> - Audio starts automatically</li>
    <li><strong>loop</strong> - Audio replays after ending</li>
    <li><strong>muted</strong> - Audio is muted by default</li>
    <li><strong>preload</strong> - Specifies if audio should be preloaded</li>
  </ul>
  <mark>If the above code is not working, copy and run it in the compiler.</mark>
</body>
</html>`
  },
  {
    tag: 'b',
    description: 'The <b> tag specifies bold text without any extra importance. It is used to draw attention to text without conveying extra importance or emphasis (use <strong> for semantic importance).',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Bold Tag Example</title>
</head>
<body>
  <h2>Bold Tag Example:</h2>
  <p>This is <b>bold text</b> using the b tag.</p>
  <p>Product: <b>Laptop Pro X200</b> - Available in stores now.</p>
  <p>Recipe: Add <b>2 cups of flour</b>, <b>1 cup of sugar</b>, and <b>3 eggs</b>.</p>
  <p>Keywords: <b>HTML</b>, <b>CSS</b>, and <b>JavaScript</b> are core web technologies.</p>

  <h3>Difference between b and strong:</h3>
  <p><b>Bold text</b> - visual only, no semantic importance.</p>
  <p><strong>Strong text</strong> - semantic importance, also renders bold.</p>
  <mark>If the above code is not working, copy and run it in the compiler.</mark>
</body>
</html>`
  },
  {
    tag: 'base',
    description: 'The <base> tag specifies the base URL and/or target for all relative URLs in a document. There can only be one <base> element in a document, and it must be inside the <head> element.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Base Tag Example</title>
  <base href="https://www.example.com/" target="_blank">
</head>
<body>
  <h2>Base Tag Example:</h2>
  <p>The base tag is placed in the head and sets a base URL for all relative links on the page.</p>

  <h3>Relative links using the base URL:</h3>
  <p><a href="about.html">About Us</a> - resolves to https://www.example.com/about.html</p>
  <p><a href="contact.html">Contact</a> - resolves to https://www.example.com/contact.html</p>
  <p><a href="images/logo.png">Logo</a> - resolves to https://www.example.com/images/logo.png</p>

  <h3>Base Tag Attributes:</h3>
  <ul>
    <li><strong>href</strong> - Specifies the base URL for all relative URLs</li>
    <li><strong>target</strong> - Specifies the default target for all links (_blank, _self, _parent, _top)</li>
  </ul>

  <h3>Usage in head:</h3>
  <pre>&lt;base href="https://www.example.com/" target="_blank"&gt;</pre>
  <mark>If the above code is not working, copy and run it in the compiler.</mark>
</body>
</html>`
  },
  {
    tag: 'bdi',
    description: 'The <bdi> tag stands for Bidirectional Isolation. It isolates a part of text that might be formatted in a different direction from other text outside it, useful when dealing with user-generated content of unknown directionality.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>BDI Tag Example</title>
</head>
<body>
  <h2>BDI (Bidirectional Isolation) Tag Example:</h2>
  <p>The bdi tag is useful when displaying user-submitted text that may contain right-to-left languages.</p>

  <h3>Leaderboard Example:</h3>
  <ul>
    <li>User: <bdi>John Smith</bdi> - Score: 95</li>
    <li>User: <bdi>Ahmed Mohamed</bdi> - Score: 88</li>
    <li>User: <bdi>李明</bdi> - Score: 82</li>
  </ul>

  <h3>Without bdi (may cause layout issues with RTL text):</h3>
  <p>User: <span>Ahmed</span> scored 100 points.</p>

  <h3>With bdi (safely isolated):</h3>
  <p>User: <bdi>Ahmed</bdi> scored 100 points.</p>

  <h3>When to use bdi:</h3>
  <ul>
    <li>Displaying usernames from different language backgrounds</li>
    <li>Showing user-generated content of unknown directionality</li>
    <li>Mixing LTR and RTL text safely</li>
  </ul>
  <mark>If the above code is not working, copy and run it in the compiler.</mark>
</body>
</html>`
  },
  {
    tag: 'bdo',
    description: 'The <bdo> tag stands for Bidirectional Override. It is used to override the current text direction, allowing you to display text in the opposite direction using the dir attribute.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>BDO Tag Example</title>
</head>
<body>
  <h2>BDO (Bidirectional Override) Tag Example:</h2>

  <h3>Normal text direction (LTR):</h3>
  <p>This is normal left-to-right text.</p>

  <h3>Right-to-left override:</h3>
  <p><bdo dir="rtl">This text will be displayed right to left.</bdo></p>

  <h3>Left-to-right override:</h3>
  <p><bdo dir="ltr">This text is forced left to right.</bdo></p>

  <h3>More examples:</h3>
  <p>Normal: Hello World</p>
  <p>RTL: <bdo dir="rtl">Hello World</bdo></p>
  <p>The word "Hello" reversed: <bdo dir="rtl">Hello</bdo></p>

  <h3>BDO Attributes:</h3>
  <ul>
    <li><strong>dir="ltr"</strong> - Left to Right</li>
    <li><strong>dir="rtl"</strong> - Right to Left</li>
  </ul>
  <mark>If the above code is not working, copy and run it in the compiler.</mark>
</body>
</html>`
  },
  {
    tag: 'blockquote',
    description: 'The <blockquote> tag specifies a section that is quoted from another source. Browsers usually indent blockquote elements. The cite attribute can specify the source URL.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Blockquote Tag Example</title>
  <style>
    blockquote {
      border-left: 4px solid #007bff;
      padding: 10px 20px;
      margin: 20px 0;
      background: #f9f9f9;
      color: #555;
      font-style: italic;
    }
    blockquote footer { font-style: normal; color: #333; font-size: 0.9em; }
  </style>
</head>
<body>
  <h2>Blockquote Tag Example:</h2>

  <h3>Basic Blockquote:</h3>
  <blockquote cite="https://www.example.com">
    <p>The only way to do great work is to love what you do.</p>
    <footer>— Steve Jobs</footer>
  </blockquote>

  <h3>Another Example:</h3>
  <blockquote cite="https://www.brainyquote.com">
    <p>In the middle of every difficulty lies opportunity.</p>
    <footer>— Albert Einstein</footer>
  </blockquote>

  <h3>Multi-paragraph Blockquote:</h3>
  <blockquote>
    <p>HTML is not a programming language; it is a markup language.</p>
    <p>It tells the browser how to display the content.</p>
    <footer>— Web Development Fundamentals</footer>
  </blockquote>
  <mark>If the above code is not working, copy and run it in the compiler.</mark>
</body>
</html>`
  },
  {
    tag: 'button',
    description: 'The <button> tag defines a clickable button. It can contain text or images and is used to submit forms, trigger JavaScript actions, or act as a UI control element.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Button Tag Example</title>
  <style>
    button { margin: 5px; padding: 8px 16px; border-radius: 4px; cursor: pointer; }
    .primary { background: #007bff; color: white; border: none; }
    .danger  { background: #dc3545; color: white; border: none; }
    .outline { background: transparent; color: #007bff; border: 2px solid #007bff; }
  </style>
</head>
<body>
  <h2>Button Tag Example:</h2>

  <h3>Button Types:</h3>
  <button type="button" onclick="alert('Button clicked!')">Click Me</button>
  <button type="submit">Submit Form</button>
  <button type="reset">Reset Form</button>

  <h3>Styled Buttons:</h3>
  <button class="primary">Primary Button</button>
  <button class="danger">Danger Button</button>
  <button class="outline">Outline Button</button>

  <h3>Disabled Button:</h3>
  <button disabled>Disabled Button</button>

  <h3>Button with Icon Text:</h3>
  <button type="button">&#128269; Search</button>
  <button type="button">&#10004; Confirm</button>
  <button type="button">&#10008; Cancel</button>

  <h3>Form Example:</h3>
  <form action="#" method="post">
    <input type="text" placeholder="Enter your name">
    <button type="submit">Submit</button>
    <button type="reset">Clear</button>
  </form>
  <mark>If the above code is not working, copy and run it in the compiler.</mark>
</body>
</html>`
  },
  {
    tag: 'canvas',
    description: 'The <canvas> tag is used to draw graphics via JavaScript. It is a container for graphics and you must use JavaScript to actually draw the graphics using the Canvas API.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Canvas Tag Example</title>
  <style>
    canvas { border: 2px solid #333; display: block; margin: 10px 0; }
  </style>
</head>
<body>
  <h2>Canvas Tag Example:</h2>

  <h3>Drawing a Rectangle:</h3>
  <canvas id="rectCanvas" width="300" height="150"></canvas>

  <h3>Drawing a Circle:</h3>
  <canvas id="circleCanvas" width="300" height="150"></canvas>

  <h3>Drawing Text on Canvas:</h3>
  <canvas id="textCanvas" width="300" height="100"></canvas>

  <script>
    // Rectangle
    var ctx1 = document.getElementById('rectCanvas').getContext('2d');
    ctx1.fillStyle = '#007bff';
    ctx1.fillRect(20, 20, 200, 100);
    ctx1.strokeStyle = '#ff0000';
    ctx1.strokeRect(240, 20, 50, 50);

    // Circle
    var ctx2 = document.getElementById('circleCanvas').getContext('2d');
    ctx2.beginPath();
    ctx2.arc(75, 75, 60, 0, Math.PI * 2);
    ctx2.fillStyle = '#28a745';
    ctx2.fill();
    ctx2.strokeStyle = '#000';
    ctx2.stroke();

    // Text
    var ctx3 = document.getElementById('textCanvas').getContext('2d');
    ctx3.font = '24px Arial';
    ctx3.fillStyle = '#333';
    ctx3.fillText('Hello Canvas!', 50, 60);
  </script>
  <mark>If the above code is not working, copy and run it in the compiler.</mark>
</body>
</html>`
  },
  {
    tag: 'caption',
    description: 'The <caption> tag defines a table caption (title). It must be inserted immediately after the <table> tag. By default, it is centered above the table.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Caption Tag Example</title>
  <style>
    table { border-collapse: collapse; width: 100%; margin: 20px 0; }
    th, td { border: 1px solid #ccc; padding: 10px; text-align: left; }
    th { background: #007bff; color: white; }
    caption { font-size: 1.2em; font-weight: bold; padding: 10px; background: #e9ecef; }
  </style>
</head>
<body>
  <h2>Caption Tag Example:</h2>

  <table>
    <caption>Student Grade Report - 2024</caption>
    <thead>
      <tr>
        <th>Student Name</th>
        <th>Subject</th>
        <th>Grade</th>
        <th>Score</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>Alice Johnson</td><td>Mathematics</td><td>A</td><td>95</td></tr>
      <tr><td>Bob Smith</td><td>Science</td><td>B+</td><td>87</td></tr>
      <tr><td>Carol White</td><td>English</td><td>A-</td><td>91</td></tr>
    </tbody>
  </table>

  <table>
    <caption>Monthly Sales Data</caption>
    <thead>
      <tr><th>Month</th><th>Sales</th><th>Revenue</th></tr>
    </thead>
    <tbody>
      <tr><td>January</td><td>150</td><td>$15,000</td></tr>
      <tr><td>February</td><td>180</td><td>$18,000</td></tr>
    </tbody>
  </table>
  <mark>If the above code is not working, copy and run it in the compiler.</mark>
</body>
</html>`
  },
  {
    tag: 'cite',
    description: 'The <cite> tag defines the title of a creative work (book, poem, song, movie, painting, etc.). The text in the <cite> element usually renders in italic.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Cite Tag Example</title>
</head>
<body>
  <h2>Cite Tag Example:</h2>

  <h3>Citing a Book:</h3>
  <p><cite>The Great Gatsby</cite> was written by F. Scott Fitzgerald.</p>

  <h3>Citing a Movie:</h3>
  <p>My favourite movie is <cite>The Shawshank Redemption</cite>.</p>

  <h3>Citing a Song:</h3>
  <p>The song <cite>Bohemian Rhapsody</cite> was performed by Queen.</p>

  <h3>Citing a Painting:</h3>
  <p>The famous painting <cite>Mona Lisa</cite> was created by Leonardo da Vinci.</p>

  <h3>Citing with Blockquote:</h3>
  <figure>
    <blockquote>
      <p>To be, or not to be, that is the question.</p>
    </blockquote>
    <figcaption>From <cite>Hamlet</cite> by William Shakespeare</figcaption>
  </figure>

  <h3>Citing a Website:</h3>
  <p>More information can be found at <cite><a href="https://techinmystyle.com">Tech In My Style</a></cite>.</p>
  <mark>If the above code is not working, copy and run it in the compiler.</mark>
</body>
</html>`
  },
  {
    tag: 'code',
    description: 'The <code> tag is used to define a piece of computer code. The content inside is displayed in the browser default monospace font, making it visually distinct from regular text.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Code Tag Example</title>
  <style>
    code { background: #f4f4f4; padding: 2px 6px; border-radius: 3px; font-family: monospace; color: #c7254e; }
    pre code { display: block; padding: 15px; background: #282c34; color: #abb2bf; border-radius: 5px; font-size: 14px; }
  </style>
</head>
<body>
  <h2>Code Tag Example:</h2>

  <h3>Inline Code:</h3>
  <p>Use the <code>console.log()</code> function to print output in JavaScript.</p>
  <p>The <code>document.getElementById()</code> method returns an element by its ID.</p>
  <p>In Python, use <code>print()</code> to display output.</p>

  <h3>Block of Code (with pre):</h3>
  <pre><code>function greet(name) {
  console.log("Hello, " + name + "!");
}
greet("World");</code></pre>

  <h3>HTML Code Example:</h3>
  <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;body&gt;
    &lt;h1&gt;My First Heading&lt;/h1&gt;
    &lt;p&gt;My first paragraph.&lt;/p&gt;
  &lt;/body&gt;
&lt;/html&gt;</code></pre>
  <mark>If the above code is not working, copy and run it in the compiler.</mark>
</body>
</html>`
  },
  {
    tag: 'col',
    description: 'The <col> tag specifies column properties for each column within a <colgroup> element. It is useful for applying styles to entire columns instead of repeating the style on each row.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Col Tag Example</title>
  <style>
    table { border-collapse: collapse; width: 100%; }
    th, td { border: 1px solid #ccc; padding: 10px; text-align: left; }
  </style>
</head>
<body>
  <h2>Col Tag Example:</h2>

  <h3>Applying Column Styles:</h3>
  <table>
    <colgroup>
      <col style="background-color: #ffeeba;">
      <col style="background-color: #d4edda;">
      <col style="background-color: #cce5ff;">
      <col style="background-color: #f8d7da;">
    </colgroup>
    <thead>
      <tr>
        <th>Name</th>
        <th>Subject</th>
        <th>Score</th>
        <th>Grade</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>Alice</td><td>Math</td><td>95</td><td>A</td></tr>
      <tr><td>Bob</td><td>Science</td><td>82</td><td>B</td></tr>
      <tr><td>Carol</td><td>English</td><td>91</td><td>A</td></tr>
    </tbody>
  </table>

  <h3>Col with Span:</h3>
  <table>
    <colgroup>
      <col span="2" style="background-color: #e2e3e5;">
      <col style="background-color: #d1ecf1;">
    </colgroup>
    <tr><th>Product</th><th>Category</th><th>Price</th></tr>
    <tr><td>Laptop</td><td>Electronics</td><td>$999</td></tr>
    <tr><td>Book</td><td>Education</td><td>$29</td></tr>
  </table>
  <mark>If the above code is not working, copy and run it in the compiler.</mark>
</body>
</html>`
  },
  {
    tag: 'data',
    description: 'The <data> tag links a given piece of content with a machine-readable translation. The value attribute provides the machine-readable form while the content between tags is human-readable.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Data Tag Example</title>
</head>
<body>
  <h2>Data Tag Example:</h2>

  <h3>Product Catalog with Machine-Readable IDs:</h3>
  <ul>
    <li><data value="prod-001">Apple iPhone 15</data> - $999</li>
    <li><data value="prod-002">Samsung Galaxy S24</data> - $899</li>
    <li><data value="prod-003">Google Pixel 8</data> - $699</li>
  </ul>

  <h3>Using Data with Values:</h3>
  <p>Temperature: <data value="21.5">21.5 degrees Celsius</data></p>
  <p>Item Code: <data value="SKU-98765">Blue Running Shoes</data></p>

  <h3>Menu with Prices:</h3>
  <ul>
    <li><data value="1.99">Small Coffee</data></li>
    <li><data value="2.99">Medium Coffee</data></li>
    <li><data value="3.99">Large Coffee</data></li>
  </ul>

  <h3>When to Use Data:</h3>
  <p>The data tag is useful when you want to display human-readable text while embedding machine-readable values for scripts or search engines.</p>
  <mark>If the above code is not working, copy and run it in the compiler.</mark>
</body>
</html>`
  },
  {
    tag: 'datalist',
    description: 'The <datalist> tag specifies a list of pre-defined options for an <input> element. It provides an autocomplete feature on input fields, showing suggestions as the user types.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Datalist Tag Example</title>
  <style>
    input { padding: 8px; width: 250px; margin: 5px 0; border: 1px solid #ccc; border-radius: 4px; }
    label { display: block; margin-top: 10px; font-weight: bold; }
  </style>
</head>
<body>
  <h2>Datalist Tag Example:</h2>

  <h3>Country Suggestions:</h3>
  <label for="country">Choose a country:</label>
  <input list="countries" id="country" name="country" placeholder="Start typing a country...">
  <datalist id="countries">
    <option value="United States">
    <option value="United Kingdom">
    <option value="Canada">
    <option value="Australia">
    <option value="Germany">
    <option value="France">
    <option value="India">
    <option value="Japan">
    <option value="Brazil">
    <option value="South Africa">
  </datalist>

  <h3>Programming Languages:</h3>
  <label for="language">Favourite language:</label>
  <input list="languages" id="language" name="language" placeholder="Type a language...">
  <datalist id="languages">
    <option value="HTML">
    <option value="CSS">
    <option value="JavaScript">
    <option value="Python">
    <option value="Java">
    <option value="C++">
    <option value="TypeScript">
    <option value="PHP">
  </datalist>
  <mark>If the above code is not working, copy and run it in the compiler.</mark>
</body>
</html>`
  },
  {
    tag: 'del',
    description: 'The <del> tag defines text that has been deleted from a document. It is typically rendered with a strikethrough line. It is often used alongside <ins> to show document revisions.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Del Tag Example</title>
  <style>
    del { color: #dc3545; }
    ins { color: #28a745; text-decoration: none; }
  </style>
</head>
<body>
  <h2>Del (Deleted Text) Tag Example:</h2>

  <h3>Basic Deleted Text:</h3>
  <p>My favourite colour is <del>blue</del> <ins>green</ins>.</p>

  <h3>Price Change Example:</h3>
  <p>Sale Price: <del>$99.99</del> <strong>$49.99</strong></p>
  <p>Old plan: <del>$19/month</del> New plan: $9/month</p>

  <h3>Document Revision:</h3>
  <p><del datetime="2024-01-15">The meeting is on Monday.</del></p>
  <p><ins datetime="2024-01-16">The meeting has been moved to Wednesday.</ins></p>

  <h3>Shopping List Update:</h3>
  <ul>
    <li><del>Milk</del> (already bought)</li>
    <li><del>Eggs</del> (already bought)</li>
    <li>Bread</li>
    <li>Butter</li>
  </ul>

  <h3>Del Attributes:</h3>
  <ul>
    <li><strong>cite</strong> - URL explaining the change</li>
    <li><strong>datetime</strong> - Date/time of the deletion</li>
  </ul>
  <mark>If the above code is not working, copy and run it in the compiler.</mark>
</body>
</html>`
  },
  {
    tag: 'details',
    description: 'The <details> tag creates a disclosure widget in which information is visible only when toggled open. A <summary> element provides a visible heading. The content toggles open/closed when clicked.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Details Tag Example</title>
  <style>
    details { border: 1px solid #aaa; border-radius: 4px; padding: 10px; margin: 10px 0; }
    summary { font-weight: bold; cursor: pointer; color: #007bff; }
    details[open] summary { color: #dc3545; }
  </style>
</head>
<body>
  <h2>Details Tag Example:</h2>

  <details>
    <summary>What is HTML?</summary>
    <p>HTML stands for HyperText Markup Language. It is the standard language used to create and structure content on the web.</p>
  </details>

  <details>
    <summary>What is CSS?</summary>
    <p>CSS stands for Cascading Style Sheets. It is used to style and layout web pages, including changing fonts, colors, and spacing.</p>
  </details>

  <details open>
    <summary>What is JavaScript? (Open by default)</summary>
    <p>JavaScript is a scripting language used to create dynamic and interactive content on websites.</p>
  </details>

  <details>
    <summary>System Requirements</summary>
    <ul>
      <li>Operating System: Windows 10 or later</li>
      <li>RAM: Minimum 4GB</li>
      <li>Storage: At least 10GB free</li>
      <li>Internet Connection: Required</li>
    </ul>
  </details>
  <mark>If the above code is not working, copy and run it in the compiler.</mark>
</body>
</html>`
  },
  {
    tag: 'dfn',
    description: 'The <dfn> tag stands for "definition element" and marks the term being defined within a sentence. It specifies a term that is being defined in the context of a definition phrase.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Dfn Tag Example</title>
  <style>
    dfn { font-style: italic; font-weight: bold; color: #007bff; }
  </style>
</head>
<body>
  <h2>Dfn (Definition) Tag Example:</h2>

  <h3>Basic Definitions:</h3>
  <p><dfn>HTML</dfn> is the standard markup language for creating web pages.</p>
  <p><dfn>CSS</dfn> is a stylesheet language used to describe the presentation of a document.</p>
  <p><dfn>JavaScript</dfn> is a programming language used to make web pages interactive.</p>

  <h3>Dfn with Title Attribute:</h3>
  <p>The <dfn title="World Wide Web Consortium">W3C</dfn> is the main international standards organization for the web.</p>

  <h3>Dfn with Abbr Inside:</h3>
  <p>The <dfn><abbr title="Application Programming Interface">API</abbr></dfn> allows different software applications to communicate.</p>

  <h3>Glossary Example:</h3>
  <dl>
    <dt><dfn>Browser</dfn></dt>
    <dd>A software application used to access and navigate the internet.</dd>
    <dt><dfn>Server</dfn></dt>
    <dd>A computer that provides data to other computers over a network.</dd>
  </dl>
  <mark>If the above code is not working, copy and run it in the compiler.</mark>
</body>
</html>`
  },
  {
    tag: 'dialog',
    description: 'The <dialog> tag defines a dialog box or other interactive component, like a dismissible alert, inspector, or subwindow. JavaScript is used to open and close it using the showModal() and close() methods.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Dialog Tag Example</title>
  <style>
    dialog { border: none; border-radius: 8px; padding: 20px; box-shadow: 0 4px 20px rgba(0,0,0,0.3); min-width: 300px; }
    dialog h3 { margin-top: 0; }
    button { padding: 8px 16px; margin: 5px; border-radius: 4px; cursor: pointer; }
    .open-btn { background: #007bff; color: white; border: none; }
    .close-btn { background: #dc3545; color: white; border: none; }
  </style>
</head>
<body>
  <h2>Dialog Tag Example:</h2>

  <h3>Modal Dialog:</h3>
  <button class="open-btn" onclick="document.getElementById('myDialog').showModal()">Open Modal Dialog</button>

  <dialog id="myDialog">
    <h3>Dialog Box Title</h3>
    <p>This is a modal dialog box. You can put any content here.</p>
    <p>Click the button below to close this dialog.</p>
    <button class="close-btn" onclick="document.getElementById('myDialog').close()">Close Dialog</button>
  </dialog>

  <h3>Non-modal Dialog (open attribute):</h3>
  <dialog open>
    <p>This dialog is open by default using the open attribute.</p>
  </dialog>

  <h3>Confirmation Dialog:</h3>
  <button class="open-btn" onclick="document.getElementById('confirmDialog').showModal()">Delete Item</button>
  <dialog id="confirmDialog">
    <h3>Confirm Deletion</h3>
    <p>Are you sure you want to delete this item? This action cannot be undone.</p>
    <button class="close-btn" onclick="document.getElementById('confirmDialog').close()">Cancel</button>
    <button style="background:#28a745;color:white;border:none;padding:8px 16px;border-radius:4px;cursor:pointer;" onclick="document.getElementById('confirmDialog').close()">Confirm</button>
  </dialog>
  <mark>If the above code is not working, copy and run it in the compiler.</mark>
</body>
</html>`
  },
  {
    tag: 'div',
    description: 'The <div> tag defines a division or section in an HTML document. It is a block-level container element used to group other elements for styling or scripting purposes. It has no special semantic meaning.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Div Tag Example</title>
  <style>
    .container { max-width: 800px; margin: 0 auto; font-family: Arial, sans-serif; }
    .header { background: #007bff; color: white; padding: 20px; border-radius: 5px; margin-bottom: 10px; }
    .content { display: flex; gap: 10px; }
    .main { flex: 3; background: #f8f9fa; padding: 15px; border-radius: 5px; }
    .sidebar { flex: 1; background: #e9ecef; padding: 15px; border-radius: 5px; }
    .footer { background: #343a40; color: white; padding: 15px; border-radius: 5px; margin-top: 10px; text-align: center; }
    .card { background: white; border: 1px solid #ddd; padding: 15px; margin: 10px 0; border-radius: 5px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Website Header</h1>
      <p>Navigation goes here</p>
    </div>
    <div class="content">
      <div class="main">
        <h2>Main Content</h2>
        <div class="card">
          <h3>Article 1</h3>
          <p>This is the first article content.</p>
        </div>
        <div class="card">
          <h3>Article 2</h3>
          <p>This is the second article content.</p>
        </div>
      </div>
      <div class="sidebar">
        <h3>Sidebar</h3>
        <p>Side content here.</p>
      </div>
    </div>
    <div class="footer">Footer Content</div>
  </div>
  <mark>If the above code is not working, copy and run it in the compiler.</mark>
</body>
</html>`
  },
  {
    tag: 'em',
    description: 'The <em> tag is used to define emphasized text. The content inside is typically displayed in italic. A screen reader will pronounce the text with verbal stress, conveying semantic emphasis.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Em Tag Example</title>
</head>
<body>
  <h2>Em (Emphasis) Tag Example:</h2>

  <h3>Basic Emphasis:</h3>
  <p>You <em>must</em> submit the form before midnight.</p>
  <p>The answer is <em>not</em> what you expected.</p>
  <p>I <em>really</em> enjoy learning web development.</p>

  <h3>Emphasis Changes Meaning:</h3>
  <p><em>Cats</em> are better than dogs. (cats, not something else)</p>
  <p>Cats are <em>better</em> than dogs. (better, not just equal)</p>
  <p>Cats are better than <em>dogs</em>. (dogs, not other animals)</p>

  <h3>Difference Between em and i:</h3>
  <p><em>Emphasized text</em> (semantic importance for screen readers)</p>
  <p><i>Italic text</i> (visual only, no semantic meaning)</p>

  <h3>Nested Emphasis:</h3>
  <p>This is <em>very <em>very</em> important</em> information.</p>
  <mark>If the above code is not working, copy and run it in the compiler.</mark>
</body>
</html>`
  },
  {
    tag: 'embed',
    description: 'The <embed> tag defines a container for external content such as a plugin, media, or an interactive application. It is a void element with no closing tag.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Embed Tag Example</title>
</head>
<body>
  <h2>Embed Tag Example:</h2>

  <h3>Embedding a YouTube Video:</h3>
  <embed width="560" height="315"
    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
    type="text/html">

  <h3>Embedding a PDF:</h3>
  <embed src="document.pdf" type="application/pdf" width="600" height="400">

  <h3>Embedding an SVG Image:</h3>
  <embed src="image.svg" type="image/svg+xml" width="200" height="200">

  <h3>Embed Attributes:</h3>
  <ul>
    <li><strong>src</strong> - URL of the embedded content</li>
    <li><strong>type</strong> - MIME type of the embedded content</li>
    <li><strong>width</strong> - Width of the embedded content</li>
    <li><strong>height</strong> - Height of the embedded content</li>
  </ul>

  <h3>Note:</h3>
  <p>The embed tag is used to embed external applications, especially plugins. For video/audio, the video/audio tags are preferred. For web pages, iframe is preferred.</p>
  <mark>If the above code is not working, copy and run it in the compiler.</mark>
</body>
</html>`
  },
  {
    tag: 'fieldset',
    description: 'The <fieldset> tag is used to group related elements in a form. It draws a box around related elements and is typically used with the <legend> tag to provide a caption for the group.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Fieldset Tag Example</title>
  <style>
    fieldset { border: 2px solid #007bff; border-radius: 5px; padding: 15px; margin: 15px 0; }
    legend { font-weight: bold; color: #007bff; padding: 0 10px; }
    input, select { display: block; margin: 8px 0; padding: 6px; width: 200px; border: 1px solid #ccc; border-radius: 4px; }
    label { font-weight: bold; }
    button { padding: 8px 16px; background: #007bff; color: white; border: none; border-radius: 4px; cursor: pointer; }
  </style>
</head>
<body>
  <h2>Fieldset Tag Example:</h2>

  <form action="#" method="post">
    <fieldset>
      <legend>Personal Information</legend>
      <label>First Name: <input type="text" name="fname" placeholder="Enter first name"></label>
      <label>Last Name: <input type="text" name="lname" placeholder="Enter last name"></label>
      <label>Email: <input type="email" name="email" placeholder="Enter email"></label>
    </fieldset>

    <fieldset>
      <legend>Address Details</legend>
      <label>Street: <input type="text" name="street" placeholder="Enter street"></label>
      <label>City: <input type="text" name="city" placeholder="Enter city"></label>
      <label>Country: <select name="country"><option>USA</option><option>UK</option><option>India</option></select></label>
    </fieldset>

    <fieldset disabled>
      <legend>Disabled Section</legend>
      <label>Card Number: <input type="text" placeholder="Disabled field"></label>
    </fieldset>

    <button type="submit">Submit</button>
  </form>
  <mark>If the above code is not working, copy and run it in the compiler.</mark>
</body>
</html>`
  },
  {
    tag: 'figcaption',
    description: 'The <figcaption> tag defines a caption for a <figure> element. It can be placed as the first or last child of a <figure> element, providing a visible description for the figure content.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Figcaption Tag Example</title>
  <style>
    figure { border: 1px solid #ddd; padding: 10px; display: inline-block; margin: 10px; border-radius: 5px; }
    figcaption { text-align: center; font-style: italic; color: #555; margin-top: 8px; }
    img { width: 200px; height: 150px; object-fit: cover; border-radius: 3px; background: #e0e0e0; display: block; }
  </style>
</head>
<body>
  <h2>Figcaption Tag Example:</h2>

  <figure>
    <img src="mountain.jpg" alt="A beautiful mountain landscape">
    <figcaption>Fig. 1 - A breathtaking mountain landscape at sunrise.</figcaption>
  </figure>

  <figure>
    <img src="ocean.jpg" alt="Ocean view">
    <figcaption>Fig. 2 - The Pacific Ocean as seen from the coast of California.</figcaption>
  </figure>

  <figure>
    <pre><code>function hello() {
  console.log("Hello, World!");
}</code></pre>
    <figcaption>Code Listing 1 - A simple Hello World function in JavaScript.</figcaption>
  </figure>

  <figure>
    <blockquote>Learning never exhausts the mind.</blockquote>
    <figcaption>— Leonardo da Vinci</figcaption>
  </figure>
  <mark>If the above code is not working, copy and run it in the compiler.</mark>
</body>
</html>`
  },
  {
    tag: 'figure',
    description: 'The <figure> tag specifies self-contained content like illustrations, diagrams, photos, code listings, etc. A <figcaption> element can be added inside to provide a caption for the figure.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Figure Tag Example</title>
  <style>
    body { font-family: Arial, sans-serif; max-width: 800px; margin: auto; padding: 20px; }
    figure { border: 1px solid #ccc; border-radius: 6px; padding: 10px; margin: 20px 0; background: #f9f9f9; }
    figcaption { font-style: italic; color: #666; margin-top: 8px; text-align: center; }
    figure img { width: 100%; max-width: 400px; display: block; margin: auto; border-radius: 4px; }
  </style>
</head>
<body>
  <h2>Figure Tag Example:</h2>

  <p>The figure tag is used to group self-contained content with an optional caption.</p>

  <figure>
    <img src="https://via.placeholder.com/400x250" alt="Placeholder Image">
    <figcaption>Figure 1: A sample placeholder image demonstrating the figure element.</figcaption>
  </figure>

  <figure>
    <svg width="200" height="100">
      <rect width="200" height="100" style="fill:#3498db;"/>
      <text x="50" y="55" fill="white" font-size="20">SVG Graphic</text>
    </svg>
    <figcaption>Figure 2: An inline SVG graphic inside a figure element.</figcaption>
  </figure>

  <figure>
    <pre>SELECT * FROM users WHERE active = 1;</pre>
    <figcaption>Code 1: SQL query to fetch all active users.</figcaption>
  </figure>
  <mark>If the above code is not working, copy and run it in the compiler.</mark>
</body>
</html>`
  },
  {
    tag: 'footer',
    description: 'The <footer> tag defines a footer for a document or section. It typically contains authorship information, copyright data, links to related documents, contact information, and sitemap links.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Footer Tag Example</title>
  <style>
    body { font-family: Arial, sans-serif; margin: 0; display: flex; flex-direction: column; min-height: 100vh; }
    main { flex: 1; padding: 20px; }
    footer { background: #343a40; color: white; padding: 30px 20px; }
    .footer-grid { display: flex; justify-content: space-between; flex-wrap: wrap; gap: 20px; }
    footer a { color: #adb5bd; text-decoration: none; display: block; margin: 5px 0; }
    footer a:hover { color: white; }
    .footer-bottom { border-top: 1px solid #495057; margin-top: 20px; padding-top: 15px; text-align: center; color: #6c757d; }
  </style>
</head>
<body>
  <main>
    <h2>Footer Tag Example</h2>
    <p>Scroll down to see the footer at the bottom of the page.</p>
  </main>

  <footer>
    <div class="footer-grid">
      <div>
        <h4>About Us</h4>
        <a href="#">Our Story</a>
        <a href="#">Careers</a>
        <a href="#">Blog</a>
      </div>
      <div>
        <h4>Services</h4>
        <a href="#">Web Design</a>
        <a href="#">Development</a>
        <a href="#">Consulting</a>
      </div>
      <div>
        <h4>Contact</h4>
        <a href="mailto:info@example.com">info@example.com</a>
        <a href="tel:+1234567890">+1 (234) 567-890</a>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; 2024 Tech In My Style. All rights reserved.</p>
    </div>
  </footer>
  <mark>If the above code is not working, copy and run it in the compiler.</mark>
</body>
</html>`
  },
  {
    tag: 'form',
    description: 'The <form> tag creates an HTML form for user input. It can contain text fields, checkboxes, radio buttons, submit buttons, and more. The action and method attributes control where and how data is sent.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Form Tag Example</title>
  <style>
    form { max-width: 400px; background: #f9f9f9; padding: 20px; border-radius: 8px; border: 1px solid #ddd; }
    .form-group { margin-bottom: 15px; }
    label { display: block; font-weight: bold; margin-bottom: 5px; }
    input, select, textarea { width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 4px; box-sizing: border-box; }
    button { padding: 10px 20px; background: #007bff; color: white; border: none; border-radius: 4px; cursor: pointer; width: 100%; }
  </style>
</head>
<body>
  <h2>Form Tag Example:</h2>

  <form action="https://example.com/register" method="post" enctype="multipart/form-data">
    <h3>User Registration</h3>
    <div class="form-group">
      <label for="name">Full Name:</label>
      <input type="text" id="name" name="name" placeholder="Enter full name" required>
    </div>
    <div class="form-group">
      <label for="email">Email:</label>
      <input type="email" id="email" name="email" placeholder="Enter email" required>
    </div>
    <div class="form-group">
      <label for="password">Password:</label>
      <input type="password" id="password" name="password" placeholder="Enter password" required>
    </div>
    <div class="form-group">
      <label for="gender">Gender:</label>
      <select id="gender" name="gender">
        <option value="">Select gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
    </div>
    <div class="form-group">
      <label><input type="checkbox" name="terms"> I agree to the Terms and Conditions</label>
    </div>
    <button type="submit">Register</button>
  </form>
  <mark>If the above code is not working, copy and run it in the compiler.</mark>
</body>
</html>`
  },
  {
    tag: 'h1-h6',
    description: 'The <h1> to <h6> tags define HTML headings. <h1> defines the most important heading and <h6> the least. Headings are used to structure content hierarchically and are important for SEO and accessibility.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Headings Tag Example</title>
  <style>
    .heading-demo { background: #f8f9fa; padding: 15px; border-left: 4px solid #007bff; margin: 10px 0; }
    h1 { color: #1a1a2e; }
    h2 { color: #16213e; }
    h3 { color: #0f3460; }
    h4 { color: #533483; }
    h5 { color: #e94560; }
    h6 { color: #0f3460; }
  </style>
</head>
<body>
  <h2>HTML Headings (h1 - h6) Example:</h2>

  <div class="heading-demo">
    <h1>Heading 1 - Main Title (Largest)</h1>
    <h2>Heading 2 - Section Title</h2>
    <h3>Heading 3 - Sub-section Title</h3>
    <h4>Heading 4 - Sub-sub-section</h4>
    <h5>Heading 5 - Minor Heading</h5>
    <h6>Heading 6 - Smallest Heading</h6>
  </div>

  <h3>Practical Page Structure:</h3>
  <h1>Website Name</h1>
    <h2>Main Section: HTML Basics</h2>
      <h3>What is HTML?</h3>
        <h4>History of HTML</h4>
          <h5>HTML 1.0</h5>
          <h5>HTML 5</h5>
      <h3>HTML Elements</h3>
    <h2>Main Section: CSS Basics</h2>

  <h3>Important Notes:</h3>
  <ul>
    <li>Use only one <code>h1</code> per page (main title)</li>
    <li>Do not skip heading levels</li>
    <li>Headings improve SEO and accessibility</li>
  </ul>
  <mark>If the above code is not working, copy and run it in the compiler.</mark>
</body>
</html>`
  },
  {
    tag: 'header',
    description: 'The <header> tag represents a container for introductory content or navigational links. It typically contains a logo, site name, search bar, or navigation menu. A page can have multiple header elements.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Header Tag Example</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: Arial, sans-serif; }
    header { background: #007bff; color: white; padding: 15px 30px; display: flex; justify-content: space-between; align-items: center; }
    header .logo { font-size: 1.5em; font-weight: bold; }
    header nav a { color: white; text-decoration: none; margin-left: 20px; }
    header nav a:hover { text-decoration: underline; }
    article header { background: #e9ecef; color: #333; padding: 10px 15px; border-left: 3px solid #007bff; margin: 15px 0 5px 0; }
    main { padding: 20px; }
  </style>
</head>
<body>
  <header>
    <div class="logo">Tech In My Style</div>
    <nav>
      <a href="#">Home</a>
      <a href="#">Tutorials</a>
      <a href="#">About</a>
      <a href="#">Contact</a>
    </nav>
  </header>

  <main>
    <h2>Header Tag Example</h2>
    <p>The header above is the main page header. Articles can also have their own headers:</p>

    <article>
      <header>
        <h3>Understanding HTML Semantics</h3>
        <p>By John Doe | Published: January 2024 | 5 min read</p>
      </header>
      <p>Semantic HTML helps both browsers and developers understand the structure and meaning of web content...</p>
    </article>
  </main>
  <mark>If the above code is not working, copy and run it in the compiler.</mark>
</body>
</html>`
  },
  {
    tag: 'hgroup',
    description: 'The <hgroup> tag is used to group a heading with related content such as subheadings, taglines, or other supplementary text. It groups an h1-h6 element with one or more p elements.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Hgroup Tag Example</title>
  <style>
    hgroup { background: #f0f4ff; padding: 20px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #007bff; }
    hgroup h1, hgroup h2 { margin: 0 0 5px 0; color: #333; }
    hgroup p { margin: 0; color: #666; font-size: 0.95em; }
    article { border: 1px solid #ddd; border-radius: 6px; padding: 20px; margin: 15px 0; }
  </style>
</head>
<body>
  <h2>Hgroup Tag Example:</h2>

  <hgroup>
    <h1>Tech In My Style</h1>
    <p>Learn Web Development the Easy Way</p>
  </hgroup>

  <article>
    <hgroup>
      <h2>Mastering HTML5</h2>
      <p>A complete guide for beginners and intermediate developers</p>
    </hgroup>
    <p>This article covers everything you need to know about HTML5 features...</p>
  </article>

  <article>
    <hgroup>
      <h2>CSS Grid Layout</h2>
      <p>Published on January 15, 2024 &bull; 8 min read</p>
    </hgroup>
    <p>CSS Grid is a powerful two-dimensional layout system that revolutionizes web design...</p>
  </article>

  <hgroup>
    <h3>Chapter 5: Advanced JavaScript</h3>
    <p>Prerequisites: Basic JavaScript, Functions, and Arrays</p>
  </hgroup>
  <mark>If the above code is not working, copy and run it in the compiler.</mark>
</body>
</html>`
  },
  {
    tag: 'i',
    description: 'The <i> tag defines a part of text in an alternate voice or mood. The content inside is typically displayed in italic. Use it for technical terms, foreign phrases, or thoughts. For semantic emphasis, use <em> instead.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>I Tag Example</title>
</head>
<body>
  <h2>I (Italic) Tag Example:</h2>

  <h3>Technical Terms:</h3>
  <p>In HTML, the <i>Document Object Model</i> (DOM) represents the page structure.</p>

  <h3>Foreign Words:</h3>
  <p>The Latin phrase <i>carpe diem</i> means "seize the day".</p>
  <p>The French word <i>bonjour</i> means "good day".</p>

  <h3>Thoughts or Inner Monologue:</h3>
  <p>She looked at the broken vase. <i>How am I going to explain this?</i> she thought.</p>

  <h3>Taxonomic Names (Scientific):</h3>
  <p>The lion is scientifically known as <i>Panthera leo</i>.</p>
  <p>Humans belong to the species <i>Homo sapiens</i>.</p>

  <h3>Icons (Font Awesome style):</h3>
  <p><i class="icon">&#9733;</i> Star rating</p>
  <p><i class="icon">&#10003;</i> Checkmark</p>

  <h3>Difference between i and em:</h3>
  <p><i>Italic text</i> - visual styling only</p>
  <p><em>Emphasized text</em> - semantic meaning (stress)</p>
  <mark>If the above code is not working, copy and run it in the compiler.</mark>
</body>
</html>`
  },
  {
    tag: 'iframe',
    description: 'The <iframe> tag defines an inline frame used to embed another document within the current HTML document. It is commonly used to embed maps, videos, social media posts, and other external content.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Iframe Tag Example</title>
  <style>
    iframe { border: 2px solid #ddd; border-radius: 5px; display: block; margin: 10px 0; }
  </style>
</head>
<body>
  <h2>Iframe Tag Example:</h2>

  <h3>Embedding a YouTube Video:</h3>
  <iframe width="560" height="315"
    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
    title="YouTube video player"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen>
  </iframe>

  <h3>Embedding Google Maps:</h3>
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.305!2d-74.25987!3d40.697149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1234567890"
    width="600" height="450"
    style="border:0;"
    allowfullscreen=""
    loading="lazy">
  </iframe>

  <h3>Iframe Attributes:</h3>
  <ul>
    <li><strong>src</strong> - URL of the page to embed</li>
    <li><strong>width / height</strong> - Dimensions</li>
    <li><strong>allowfullscreen</strong> - Allow fullscreen mode</li>
    <li><strong>loading="lazy"</strong> - Lazy load the iframe</li>
    <li><strong>sandbox</strong> - Applies restrictions on content</li>
  </ul>
  <mark>If the above code is not working, copy and run it in the compiler.</mark>
</body>
</html>`
  },
  {
    tag: 'img',
    description: 'The <img> tag is used to embed an image in an HTML page. Images are not inserted into a page; they are linked to web pages. The src and alt attributes are required.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Img Tag Example</title>
  <style>
    img { border: 2px solid #ddd; border-radius: 5px; margin: 5px; }
    .responsive { max-width: 100%; height: auto; }
    .thumbnail { width: 100px; height: 100px; object-fit: cover; }
  </style>
</head>
<body>
  <h2>Image Tag Example:</h2>

  <h3>Basic Image:</h3>
  <img src="https://via.placeholder.com/300x200" alt="Placeholder Image" width="300" height="200">

  <h3>Image with Title (tooltip):</h3>
  <img src="https://via.placeholder.com/200x150" alt="Sample Image" title="Hover to see this tooltip" width="200" height="150">

  <h3>Responsive Image:</h3>
  <img src="https://via.placeholder.com/800x400" alt="Responsive Image" class="responsive">

  <h3>Thumbnail Image:</h3>
  <img src="https://via.placeholder.com/300x300" alt="Thumbnail" class="thumbnail">

  <h3>Lazy Loading:</h3>
  <img src="https://via.placeholder.com/300x200" alt="Lazy loaded image" loading="lazy" width="300">

  <h3>Image Attributes:</h3>
  <ul>
    <li><strong>src</strong> - Path to the image file</li>
    <li><strong>alt</strong> - Alternative text description</li>
    <li><strong>width / height</strong> - Image dimensions</li>
    <li><strong>loading</strong> - lazy or eager loading</li>
    <li><strong>title</strong> - Tooltip text on hover</li>
  </ul>
  <mark>If the above code is not working, copy and run it in the compiler.</mark>
</body>
</html>`
  },
  {
    tag: 'input',
    description: 'The <input> tag specifies an input field where the user can enter data. It is a void element with many types: text, password, email, number, checkbox, radio, file, date, and many more.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Input Tag Example</title>
  <style>
    .input-group { margin: 10px 0; }
    label { display: block; font-weight: bold; margin-bottom: 4px; }
    input[type="text"], input[type="email"], input[type="password"],
    input[type="number"], input[type="date"], input[type="tel"],
    input[type="url"], input[type="search"] {
      padding: 8px; border: 1px solid #ccc; border-radius: 4px; width: 250px;
    }
    .row { display: flex; flex-wrap: wrap; gap: 20px; }
  </style>
</head>
<body>
  <h2>Input Tag Example:</h2>
  <form>
    <div class="row">
      <div>
        <div class="input-group"><label>Text:</label><input type="text" placeholder="Enter text"></div>
        <div class="input-group"><label>Email:</label><input type="email" placeholder="email@example.com"></div>
        <div class="input-group"><label>Password:</label><input type="password" placeholder="Password"></div>
        <div class="input-group"><label>Number:</label><input type="number" min="0" max="100" value="50"></div>
        <div class="input-group"><label>Date:</label><input type="date"></div>
        <div class="input-group"><label>Tel:</label><input type="tel" placeholder="+1 234 567 8900"></div>
        <div class="input-group"><label>URL:</label><input type="url" placeholder="https://example.com"></div>
        <div class="input-group"><label>Search:</label><input type="search" placeholder="Search..."></div>
        <div class="input-group"><label>Color:</label><input type="color" value="#007bff"></div>
        <div class="input-group"><label>Range:</label><input type="range" min="0" max="100" value="50"></div>
      </div>
      <div>
        <div class="input-group"><label>Checkbox:</label><input type="checkbox" checked> Accept Terms</div>
        <div class="input-group"><label>Radio:</label>
          <input type="radio" name="option" value="yes"> Yes
          <input type="radio" name="option" value="no"> No
        </div>
        <div class="input-group"><label>File:</label><input type="file"></div>
        <div class="input-group"><label>Hidden:</label><input type="hidden" value="hidden-value"></div>
        <div class="input-group"><input type="submit" value="Submit"></div>
        <div class="input-group"><input type="reset" value="Reset"></div>
        <div class="input-group"><input type="button" value="Click Me"></div>
      </div>
    </div>
  </form>
  <mark>If the above code is not working, copy and run it in the compiler.</mark>
</body>
</html>`
  },
  {
    tag: 'ins',
    description: 'The <ins> tag defines a text that has been inserted into a document. Browsers will typically underline the inserted text. It is commonly used alongside <del> to show document changes and revisions.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ins Tag Example</title>
  <style>
    del { color: #dc3545; }
    ins { color: #28a745; background: #d4edda; text-decoration: none; padding: 0 2px; }
  </style>
</head>
<body>
  <h2>Ins (Inserted Text) Tag Example:</h2>

  <h3>Basic Inserted Text:</h3>
  <p>My favourite color is <del>blue</del> <ins>green</ins>.</p>

  <h3>Document Revision:</h3>
  <p>The meeting is <del>on Monday at 10am</del> <ins>on Wednesday at 2pm</ins>.</p>

  <h3>Using datetime and cite Attributes:</h3>
  <p>
    <del datetime="2024-01-01">Price: $50</del>
    <ins datetime="2024-06-01" cite="https://example.com/pricelist">Price: $35</ins>
  </p>

  <h3>New Content Added to Document:</h3>
  <p>Original paragraph content here.</p>
  <ins>
    <p>This entire paragraph was added in the latest revision of this document.</p>
    <p>It shows multiple paragraphs being inserted at once.</p>
  </ins>

  <h3>Shopping Cart Update:</h3>
  <ul>
    <li>Laptop - <del>$1200</del> <ins>$999</ins></li>
    <li>Mouse - $25</li>
    <li><ins>Keyboard - $45</ins> (newly added)</li>
  </ul>
  <mark>If the above code is not working, copy and run it in the compiler.</mark>
</body>
</html>`
  },
  {
    tag: 'kbd',
    description: 'The <kbd> tag defines keyboard input. It is used to mark text that should be typed on the keyboard. The content is typically displayed in a monospace font and is useful for documentation and tutorials.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Kbd Tag Example</title>
  <style>
    kbd {
      background-color: #f7f7f7;
      border: 1px solid #ccc;
      border-bottom: 3px solid #aaa;
      border-radius: 4px;
      color: #333;
      display: inline-block;
      font-family: monospace;
      font-size: 0.9em;
      padding: 2px 6px;
      margin: 0 2px;
      box-shadow: 0 1px 0 rgba(0,0,0,0.2);
    }
    .shortcut { background: #f8f9fa; padding: 10px; border-radius: 5px; margin: 8px 0; }
  </style>
</head>
<body>
  <h2>Kbd (Keyboard Input) Tag Example:</h2>

  <h3>Common Keyboard Shortcuts:</h3>
  <div class="shortcut">Press <kbd>Ctrl</kbd> + <kbd>C</kbd> to copy</div>
  <div class="shortcut">Press <kbd>Ctrl</kbd> + <kbd>V</kbd> to paste</div>
  <div class="shortcut">Press <kbd>Ctrl</kbd> + <kbd>Z</kbd> to undo</div>
  <div class="shortcut">Press <kbd>Ctrl</kbd> + <kbd>S</kbd> to save</div>
  <div class="shortcut">Press <kbd>Alt</kbd> + <kbd>F4</kbd> to close the window</div>
  <div class="shortcut">Press <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>I</kbd> to open DevTools</div>

  <h3>Navigation Keys:</h3>
  <p>Use <kbd>Arrow Up</kbd>, <kbd>Arrow Down</kbd>, <kbd>Arrow Left</kbd>, <kbd>Arrow Right</kbd> to navigate.</p>

  <h3>Command Line Instructions:</h3>
  <p>Type <kbd>npm install</kbd> to install dependencies.</p>
  <p>Type <kbd>git commit -m "message"</kbd> to commit changes.</p>
  <mark>If the above code is not working, copy and run it in the compiler.</mark>
</body>
</html>`
  },
  {
    tag: 'label',
    description: 'The <label> tag defines a label for several form elements. It improves usability and accessibility by allowing users to click the label to focus/activate the associated input element.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Label Tag Example</title>
  <style>
    form { max-width: 400px; padding: 20px; background: #f9f9f9; border-radius: 8px; }
    .form-group { margin: 12px 0; }
    label { display: block; font-weight: bold; margin-bottom: 5px; color: #333; cursor: pointer; }
    input[type="text"], input[type="email"], select { width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 4px; box-sizing: border-box; }
    .radio-group label, .checkbox-group label { display: inline; font-weight: normal; margin-left: 5px; }
    button { padding: 10px 20px; background: #007bff; color: white; border: none; border-radius: 4px; cursor: pointer; margin-top: 10px; }
  </style>
</head>
<body>
  <h2>Label Tag Example:</h2>
  <form>
    <div class="form-group">
      <label for="username">Username:</label>
      <input type="text" id="username" name="username" placeholder="Enter username">
    </div>
    <div class="form-group">
      <label for="email">Email Address:</label>
      <input type="email" id="email" name="email" placeholder="Enter email">
    </div>
    <div class="form-group">
      <label for="country">Country:</label>
      <select id="country" name="country">
        <option>USA</option>
        <option>UK</option>
        <option>India</option>
      </select>
    </div>
    <div class="radio-group form-group">
      <strong>Gender:</strong><br>
      <input type="radio" id="male" name="gender" value="male">
      <label for="male">Male</label>
      <input type="radio" id="female" name="gender" value="female">
      <label for="female">Female</label>
    </div>
    <div class="checkbox-group form-group">
      <input type="checkbox" id="terms" name="terms">
      <label for="terms">I agree to the Terms and Conditions</label>
    </div>
    <button type="submit">Submit</button>
  </form>
  <mark>If the above code is not working, copy and run it in the compiler.</mark>
</body>
</html>`
  },
  {
    tag: 'legend',
    description: 'The <legend> tag defines a caption for the <fieldset> element. It must be the first child element of a fieldset and gives users a clear description of the group of related form controls inside.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Legend Tag Example</title>
  <style>
    fieldset { border: 2px solid #007bff; border-radius: 5px; padding: 15px; margin: 15px 0; max-width: 400px; }
    legend { font-weight: bold; font-size: 1.1em; color: #007bff; padding: 0 10px; }
    .form-group { margin: 10px 0; }
    label { display: block; font-weight: bold; margin-bottom: 4px; }
    input { width: 100%; padding: 6px; border: 1px solid #ccc; border-radius: 4px; box-sizing: border-box; }
    .radio-label { display: inline; font-weight: normal; margin-left: 5px; }
  </style>
</head>
<body>
  <h2>Legend Tag Example:</h2>
  <form>
    <fieldset>
      <legend>Personal Details</legend>
      <div class="form-group">
        <label for="fullname">Full Name:</label>
        <input type="text" id="fullname" placeholder="John Doe">
      </div>
      <div class="form-group">
        <label for="dob">Date of Birth:</label>
        <input type="date" id="dob">
      </div>
    </fieldset>

    <fieldset>
      <legend>Contact Information</legend>
      <div class="form-group">
        <label for="phone">Phone:</label>
        <input type="tel" id="phone" placeholder="+1 234 567 8900">
      </div>
      <div class="form-group">
        <label for="mail">Email:</label>
        <input type="email" id="mail" placeholder="email@example.com">
      </div>
    </fieldset>

    <fieldset>
      <legend>Preferences</legend>
      <div class="form-group">
        <input type="radio" name="theme" id="light"> <label class="radio-label" for="light">Light Theme</label><br>
        <input type="radio" name="theme" id="dark"> <label class="radio-label" for="dark">Dark Theme</label>
      </div>
    </fieldset>
  </form>
  <mark>If the above code is not working, copy and run it in the compiler.</mark>
</body>
</html>`
  },
  {
    tag: 'li',
    description: 'The <li> tag defines a list item. It is used inside ordered lists (<ol>), unordered lists (<ul>), and menu lists (<menu>). In ordered lists, the value attribute sets the item number.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Li Tag Example</title>
  <style>
    ul, ol { margin: 10px 0; padding-left: 25px; }
    li { margin: 5px 0; line-height: 1.6; }
    .custom-list { list-style: none; padding: 0; }
    .custom-list li::before { content: "▶ "; color: #007bff; }
    .value-demo li { font-weight: bold; }
  </style>
</head>
<body>
  <h2>Li (List Item) Tag Example:</h2>

  <h3>Unordered List:</h3>
  <ul>
    <li>HTML - Structure</li>
    <li>CSS - Styling</li>
    <li>JavaScript - Interactivity</li>
    <li>React - UI Library</li>
  </ul>

  <h3>Ordered List:</h3>
  <ol>
    <li>Open the browser</li>
    <li>Navigate to the website</li>
    <li>Click on Register</li>
    <li>Fill in the form</li>
    <li>Click Submit</li>
  </ol>

  <h3>Using the value Attribute in Ordered List:</h3>
  <ol class="value-demo">
    <li value="5">Item starting at 5</li>
    <li>Item 6</li>
    <li value="10">Item starting at 10</li>
    <li>Item 11</li>
  </ol>

  <h3>Nested List Items:</h3>
  <ul>
    <li>Frontend
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
      </ul>
    </li>
    <li>Backend
      <ul>
        <li>Node.js</li>
        <li>Python</li>
      </ul>
    </li>
  </ul>

  <h3>Custom Styled List:</h3>
  <ul class="custom-list">
    <li>Learn HTML Basics</li>
    <li>Master CSS Styling</li>
    <li>Build with JavaScript</li>
  </ul>
  <mark>If the above code is not working, copy and run it in the compiler.</mark>
</body>
</html>`
  },
  {
    tag: 'link',
    description: 'The <link> tag defines the relationship between the current document and an external resource. It is most commonly used to link to external stylesheets and is placed in the <head> section.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Link Tag Example</title>

  <!-- Linking an external CSS stylesheet -->
  <link rel="stylesheet" href="styles.css">

  <!-- Linking a favicon -->
  <link rel="icon" type="image/x-icon" href="favicon.ico">

  <!-- Linking a canonical URL -->
  <link rel="canonical" href="https://www.example.com/page">

  <!-- Preloading a font -->
  <link rel="preload" href="font.woff2" as="font" type="font/woff2" crossorigin>

  <!-- Alternate stylesheet -->
  <link rel="alternate stylesheet" href="dark-theme.css" title="Dark Theme">

  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
</head>
<body>
  <h2>Link Tag Example:</h2>
  <p>The link tag is placed in the head section. It connects your HTML document to external resources.</p>

  <h3>Common Uses of the Link Tag:</h3>
  <ul>
    <li><code>rel="stylesheet"</code> - Link to external CSS file</li>
    <li><code>rel="icon"</code> - Link to favicon</li>
    <li><code>rel="canonical"</code> - Specify the canonical URL</li>
    <li><code>rel="preload"</code> - Preload resources for performance</li>
    <li><code>rel="alternate"</code> - Link to alternate versions</li>
    <li><code>rel="preconnect"</code> - Establish early connections</li>
  </ul>

  <h3>Link Attributes:</h3>
  <ul>
    <li><strong>rel</strong> - Relationship between document and linked resource</li>
    <li><strong>href</strong> - URL of the linked resource</li>
    <li><strong>type</strong> - MIME type of the linked resource</li>
    <li><strong>media</strong> - What media/device the resource is for</li>
  </ul>
  <mark>If the above code is not working, copy and run it in the compiler.</mark>
</body>
</html>`
  },
  {
    tag: 'main',
    description: 'The <main> tag specifies the main content of a document. The content inside the <main> element should be unique to the document. There should only be one <main> element per page, and it should not be inside header, footer, nav, aside, or article elements.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Main Tag Example</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: Arial, sans-serif; display: flex; flex-direction: column; min-height: 100vh; }
    header { background: #007bff; color: white; padding: 15px 20px; }
    nav { background: #0056b3; padding: 10px 20px; }
    nav a { color: white; text-decoration: none; margin-right: 15px; }
    main { flex: 1; padding: 30px 20px; max-width: 900px; margin: 0 auto; width: 100%; }
    main h2 { color: #333; margin-bottom: 15px; }
    .content-grid { display: grid; grid-template-columns: 2fr 1fr; gap: 20px; margin-top: 20px; }
    article { background: #f8f9fa; padding: 20px; border-radius: 8px; }
    aside { background: #e9ecef; padding: 15px; border-radius: 8px; }
    footer { background: #343a40; color: white; padding: 15px; text-align: center; }
  </style>
</head>
<body>
  <header><h1>My Website</h1></header>
  <nav>
    <a href="#">Home</a>
    <a href="#">Articles</a>
    <a href="#">About</a>
  </nav>

  <main>
    <h2>Welcome to the Main Content Area</h2>
    <p>This is the primary content of the page. The main tag wraps the most important and unique content.</p>
    <div class="content-grid">
      <article>
        <h3>Latest Article</h3>
        <p>This is the main article content. It is the primary reason the user visited this page.</p>
      </article>
      <aside>
        <h4>Related Links</h4>
        <ul><li>Link 1</li><li>Link 2</li></ul>
      </aside>
    </div>
  </main>

  <footer>&copy; 2024 My Website</footer>
  <mark>If the above code is not working, copy and run it in the compiler.</mark>
</body>
</html>`
  },
  {
    tag: 'mark',
    description: 'The <mark> tag defines text that should be highlighted. It is used to mark or highlight parts of text that are relevant to the user, such as search results or important keywords.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mark Tag Example</title>
  <style>
    mark { background-color: yellow; color: black; padding: 0 3px; border-radius: 2px; }
    .custom-mark { background-color: #90EE90; }
    .important-mark { background-color: #FFB6C1; font-weight: bold; }
    .search-result { border: 1px solid #ddd; padding: 15px; border-radius: 5px; margin: 10px 0; }
  </style>
</head>
<body>
  <h2>Mark (Highlight) Tag Example:</h2>

  <h3>Basic Highlight:</h3>
  <p>The most <mark>important concept</mark> in HTML is understanding the document structure.</p>

  <h3>Search Result Highlighting:</h3>
  <div class="search-result">
    <p>Learn <mark>HTML</mark> and CSS to build beautiful websites. <mark>HTML</mark> stands for HyperText Markup Language.</p>
  </div>

  <h3>Custom Styled Marks:</h3>
  <p>This is <mark class="custom-mark">green highlighted</mark> text.</p>
  <p>This is <mark class="important-mark">important highlighted</mark> text.</p>

  <h3>Multiple Highlights in a Paragraph:</h3>
  <p>In web development, <mark>HTML</mark> provides structure, <mark>CSS</mark> provides styling, and <mark>JavaScript</mark> provides interactivity.</p>

  <h3>Mark in a Quote:</h3>
  <blockquote>
    The only way to do <mark>great work</mark> is to <mark>love what you do</mark>.
    <footer>— Steve Jobs</footer>
  </blockquote>
  <mark>If the above code is not working, copy and run it in the compiler.</mark>
</body>
</html>`
  },
  {
    tag: 'meta',
    description: 'The <meta> tag defines metadata about an HTML document. Metadata is not displayed on the page but provides information about the page to browsers, search engines, and other web services.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="A comprehensive tutorial on HTML meta tags and their usage in web development.">
  <meta name="keywords" content="HTML, meta tags, SEO, web development, tutorial">
  <meta name="author" content="Tech In My Style">
  <meta name="robots" content="index, follow">
  <meta http-equiv="refresh" content="30">
  <meta property="og:title" content="HTML Meta Tags Tutorial">
  <meta property="og:description" content="Learn all about HTML meta tags.">
  <meta property="og:image" content="https://example.com/image.jpg">
  <meta property="og:url" content="https://example.com/meta-tags">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="HTML Meta Tags Tutorial">
  <title>Meta Tag Example</title>
</head>
<body>
  <h2>Meta Tag Example:</h2>
  <p>All meta tags are placed in the &lt;head&gt; section. They are not visible on the page.</p>

  <h3>Common Meta Tags Used in this Page:</h3>
  <ul>
    <li><code>charset="UTF-8"</code> - Character encoding for the document</li>
    <li><code>name="viewport"</code> - Makes the page responsive on mobile devices</li>
    <li><code>name="description"</code> - Page description for search engines</li>
    <li><code>name="keywords"</code> - Keywords for search engines</li>
    <li><code>name="author"</code> - Author of the document</li>
    <li><code>name="robots"</code> - Instructions for search engine crawlers</li>
    <li><code>http-equiv="refresh"</code> - Auto-refresh the page</li>
    <li><code>property="og:..."</code> - Open Graph tags for social sharing</li>
    <li><code>name="twitter:..."</code> - Twitter Card metadata</li>
  </ul>
  <mark>If the above code is not working, copy and run it in the compiler.</mark>
</body>
</html>`
  },
  {
    tag: 'meter',
    description: 'The <meter> tag defines a scalar measurement within a known range, or a fractional value (such as disk usage, query result relevance, or voting population). It should not be used for progress — use <progress> for that.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Meter Tag Example</title>
  <style>
    .meter-group { margin: 15px 0; }
    label { display: block; font-weight: bold; margin-bottom: 5px; }
    meter { width: 300px; height: 20px; }
  </style>
</head>
<body>
  <h2>Meter Tag Example:</h2>

  <h3>Disk Usage:</h3>
  <div class="meter-group">
    <label>Disk Space Used (70%):</label>
    <meter value="0.7">70%</meter> 70%
  </div>

  <h3>Battery Level:</h3>
  <div class="meter-group">
    <label>Battery (85%):</label>
    <meter value="85" min="0" max="100" low="20" high="80" optimum="100">85%</meter> 85%
  </div>

  <h3>Grade/Score:</h3>
  <div class="meter-group">
    <label>Test Score - Alice (92/100):</label>
    <meter value="92" min="0" max="100" low="40" high="70" optimum="100">92</meter> 92/100
  </div>
  <div class="meter-group">
    <label>Test Score - Bob (35/100) - Low:</label>
    <meter value="35" min="0" max="100" low="40" high="70" optimum="100">35</meter> 35/100
  </div>

  <h3>Meter Attributes:</h3>
  <ul>
    <li><strong>value</strong> - Current value</li>
    <li><strong>min</strong> - Minimum value (default: 0)</li>
    <li><strong>max</strong> - Maximum value (default: 1)</li>
    <li><strong>low</strong> - Lower bound of "low" range</li>
    <li><strong>high</strong> - Upper bound of "high" range</li>
    <li><strong>optimum</strong> - Optimal value</li>
  </ul>
  <mark>If the above code is not working, copy and run it in the compiler.</mark>
</body>
</html>`
  },
  {
    tag: 'nav',
    description: 'The <nav> tag defines a set of navigation links. Not all links of a document should be inside a nav element — only major blocks of navigational links such as site menus, tables of contents, and indexes.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Nav Tag Example</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: Arial, sans-serif; }
    header { background: #1a1a2e; padding: 15px 30px; }
    header nav { display: flex; align-items: center; justify-content: space-between; }
    header nav .brand { color: white; font-size: 1.5em; font-weight: bold; }
    header nav ul { list-style: none; display: flex; gap: 20px; }
    header nav ul li a { color: #aaa; text-decoration: none; padding: 8px 12px; border-radius: 4px; transition: background 0.2s; }
    header nav ul li a:hover { background: #007bff; color: white; }
    .breadcrumb { background: #f8f9fa; padding: 12px 20px; }
    .breadcrumb nav a { color: #007bff; text-decoration: none; }
    .breadcrumb nav span { margin: 0 8px; color: #999; }
    .sidebar nav ul { list-style: none; padding: 0; }
    .sidebar nav ul li a { display: block; padding: 8px 15px; color: #333; text-decoration: none; border-bottom: 1px solid #eee; }
    .sidebar nav ul li a:hover { background: #007bff; color: white; }
    .content-area { display: flex; gap: 20px; padding: 20px; }
    .sidebar { width: 200px; background: #f8f9fa; border-radius: 8px; padding: 10px; }
    main { flex: 1; }
  </style>
</head>
<body>
  <header>
    <nav>
      <span class="brand">Tech In My Style</span>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Tutorials</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  </header>

  <div class="breadcrumb">
    <nav aria-label="breadcrumb">
      <a href="#">Home</a>
      <span>/</span>
      <a href="#">HTML</a>
      <span>/</span>
      <a href="#">Nav Tag</a>
    </nav>
  </div>

  <div class="content-area">
    <div class="sidebar">
      <nav aria-label="sidebar">
        <ul>
          <li><a href="#">HTML Basics</a></li>
          <li><a href="#">CSS Styling</a></li>
          <li><a href="#">JavaScript</a></li>
          <li><a href="#">React</a></li>
        </ul>
      </nav>
    </div>
    <main>
      <h2>Nav Tag Example</h2>
      <p>This page demonstrates three types of navigation: main nav, breadcrumb nav, and sidebar nav.</p>
    </main>
  </div>
  <mark>If the above code is not working, copy and run it in the compiler.</mark>
</body>
</html>`
  },
  {
    tag: 'object',
    description: 'The <object> tag defines a container for an external resource such as a web page, image, PDF, or plug-in. The <param> element is used to pass parameters to the embedded object.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Object Tag Example</title>
  <style>
    object { border: 2px solid #ddd; border-radius: 5px; display: block; margin: 10px 0; }
  </style>
</head>
<body>
  <h2>Object Tag Example:</h2>

  <h3>Embedding a PDF:</h3>
  <object data="document.pdf" type="application/pdf" width="600" height="400">
    <p>Your browser does not support PDFs. <a href="document.pdf">Download the PDF</a> instead.</p>
  </object>

  <h3>Embedding an Image:</h3>
  <object data="https://via.placeholder.com/300x200" type="image/png" width="300" height="200">
    <p>Image could not be loaded.</p>
  </object>

  <h3>Embedding with Parameters:</h3>
  <object data="media-player.swf" type="application/x-shockwave-flash" width="400" height="300">
    <param name="movie" value="media-player.swf">
    <param name="allowfullscreen" value="true">
    <param name="autoplay" value="false">
    <p>Flash content not supported. Please update your browser.</p>
  </object>

  <h3>Object Attributes:</h3>
  <ul>
    <li><strong>data</strong> - URL of the resource</li>
    <li><strong>type</strong> - MIME type of the resource</li>
    <li><strong>width / height</strong> - Dimensions of the object</li>
    <li><strong>name</strong> - Name for the object (for scripting)</li>
    <li><strong>form</strong> - Associated form element</li>
  </ul>
  <mark>If the above code is not working, copy and run it in the compiler.</mark>
</body>
</html>`
  },
  {
    tag: 'ol',
    description: 'The <ol> tag defines an ordered list. An ordered list can be numerical or alphabetical. The list items are marked with numbers by default. Each item is defined with an <li> tag.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ordered List Tag Example</title>
  <style>
    ol { margin: 10px 0; padding-left: 25px; }
    li { margin: 6px 0; line-height: 1.6; }
  </style>
</head>
<body>
  <h2>Ordered List (ol) Tag Example:</h2>

  <h3>Default (Numbers):</h3>
  <ol>
    <li>Learn HTML</li>
    <li>Learn CSS</li>
    <li>Learn JavaScript</li>
    <li>Build Projects</li>
  </ol>

  <h3>Lowercase Letters (type="a"):</h3>
  <ol type="a">
    <li>First item</li>
    <li>Second item</li>
    <li>Third item</li>
  </ol>

  <h3>Uppercase Letters (type="A"):</h3>
  <ol type="A">
    <li>Option A</li>
    <li>Option B</li>
    <li>Option C</li>
  </ol>

  <h3>Roman Numerals (type="i"):</h3>
  <ol type="i">
    <li>Chapter one</li>
    <li>Chapter two</li>
    <li>Chapter three</li>
  </ol>

  <h3>Start from Custom Number (start="5"):</h3>
  <ol start="5">
    <li>Step 5</li>
    <li>Step 6</li>
    <li>Step 7</li>
  </ol>

  <h3>Reversed List:</h3>
  <ol reversed>
    <li>Third place</li>
    <li>Second place</li>
    <li>First place</li>
  </ol>

  <h3>Nested Ordered List:</h3>
  <ol>
    <li>Main Step 1
      <ol type="a">
        <li>Sub step a</li>
        <li>Sub step b</li>
      </ol>
    </li>
    <li>Main Step 2</li>
  </ol>
  <mark>If the above code is not working, copy and run it in the compiler.</mark>
</body>
</html>`
  },
  {
    tag: 'optgroup',
    description: 'The <optgroup> tag is used to group related options in a <select> element. It creates a visual grouping of options with a label, making long dropdown lists easier to navigate.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Optgroup Tag Example</title>
  <style>
    select { padding: 8px; width: 250px; border: 1px solid #ccc; border-radius: 4px; font-size: 14px; margin: 10px 0; display: block; }
    label { font-weight: bold; display: block; margin-top: 15px; }
  </style>
</head>
<body>
  <h2>Optgroup Tag Example:</h2>

  <h3>Programming Languages by Type:</h3>
  <label for="lang">Select a Language:</label>
  <select id="lang" name="language">
    <option value="">-- Choose a Language --</option>
    <optgroup label="Frontend">
      <option value="html">HTML</option>
      <option value="css">CSS</option>
      <option value="js">JavaScript</option>
      <option value="ts">TypeScript</option>
    </optgroup>
    <optgroup label="Backend">
      <option value="python">Python</option>
      <option value="java">Java</option>
      <option value="php">PHP</option>
      <option value="nodejs">Node.js</option>
    </optgroup>
    <optgroup label="Database">
      <option value="mysql">MySQL</option>
      <option value="mongodb">MongoDB</option>
      <option value="postgres">PostgreSQL</option>
    </optgroup>
  </select>

  <h3>Cars by Brand:</h3>
  <label for="car">Select a Car:</label>
  <select id="car" name="car">
    <optgroup label="Japanese Brands">
      <option value="toyota">Toyota Camry</option>
      <option value="honda">Honda Civic</option>
      <option value="mazda">Mazda 3</option>
    </optgroup>
    <optgroup label="European Brands">
      <option value="bmw">BMW 3 Series</option>
      <option value="audi">Audi A4</option>
      <option value="mercedes">Mercedes C-Class</option>
    </optgroup>
    <optgroup label="American Brands" disabled>
      <option value="ford">Ford Mustang</option>
      <option value="chevy">Chevrolet Corvette</option>
    </optgroup>
  </select>
  <mark>If the above code is not working, copy and run it in the compiler.</mark>
</body>
</html>`
  },
  {
    tag: 'option',
    description: 'The <option> tag defines an option in a select list or datalist. It must be contained in a <select>, <optgroup>, or <datalist> element. The value attribute specifies what is submitted with the form.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Option Tag Example</title>
  <style>
    .form-group { margin: 15px 0; }
    label { display: block; font-weight: bold; margin-bottom: 5px; }
    select { padding: 8px; width: 250px; border: 1px solid #ccc; border-radius: 4px; }
    button { padding: 8px 20px; background: #007bff; color: white; border: none; border-radius: 4px; cursor: pointer; margin-top: 10px; }
  </style>
</head>
<body>
  <h2>Option Tag Example:</h2>
  <form>
    <div class="form-group">
      <label for="country">Country:</label>
      <select id="country" name="country">
        <option value="">-- Select Country --</option>
        <option value="us">United States</option>
        <option value="uk">United Kingdom</option>
        <option value="in" selected>India</option>
        <option value="ca">Canada</option>
        <option value="au">Australia</option>
        <option value="de" disabled>Germany (unavailable)</option>
      </select>
    </div>

    <div class="form-group">
      <label for="size">T-Shirt Size:</label>
      <select id="size" name="size" multiple size="5">
        <option value="xs">XS - Extra Small</option>
        <option value="s">S - Small</option>
        <option value="m" selected>M - Medium</option>
        <option value="l">L - Large</option>
        <option value="xl" selected>XL - Extra Large</option>
      </select>
      <small>(Hold Ctrl/Cmd to select multiple)</small>
    </div>

    <button type="submit">Submit</button>
  </form>

  <h3>Option Attributes:</h3>
  <ul>
    <li><strong>value</strong> - Data sent to the server</li>
    <li><strong>selected</strong> - Pre-selects this option</li>
    <li><strong>disabled</strong> - Makes this option unselectable</li>
    <li><strong>label</strong> - Alternate label for the option</li>
  </ul>
  <mark>If the above code is not working, copy and run it in the compiler.</mark>
</body>
</html>`
  },
  {
    tag: 'output',
    description: 'The <output> tag represents the result of a calculation or user action. It is often used in forms to display the result of a calculation based on user inputs, typically using JavaScript or the oninput event.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Output Tag Example</title>
  <style>
    form { max-width: 450px; background: #f8f9fa; padding: 20px; border-radius: 8px; }
    .form-group { margin: 15px 0; }
    label { display: block; font-weight: bold; margin-bottom: 5px; }
    input[type="range"], input[type="number"] { width: 200px; }
    output { background: #007bff; color: white; padding: 5px 12px; border-radius: 20px; font-weight: bold; font-size: 1.1em; }
    .result-box { margin-top: 15px; padding: 15px; background: white; border-radius: 5px; border: 1px solid #ddd; }
  </style>
</head>
<body>
  <h2>Output Tag Example:</h2>

  <h3>Volume Control:</h3>
  <form oninput="vol.value = volume.value">
    <div class="form-group">
      <label>Volume: <input type="range" id="volume" name="volume" min="0" max="100" value="50"></label>
      <output name="vol" for="volume">50</output>
    </div>
  </form>

  <h3>Calculator:</h3>
  <form oninput="result.value = parseInt(num1.value) + parseInt(num2.value)">
    <div class="form-group">
      <label>Number 1: <input type="number" id="num1" name="num1" value="10" min="0"></label>
    </div>
    <div class="form-group">
      <label>Number 2: <input type="number" id="num2" name="num2" value="5" min="0"></label>
    </div>
    <div class="result-box">
      Sum = <output name="result" for="num1 num2">15</output>
    </div>
  </form>

  <h3>BMI Calculator:</h3>
  <form oninput="bmi.value = (weight.value / ((height.value/100) * (height.value/100))).toFixed(1)">
    <div class="form-group">
      <label>Weight (kg): <input type="number" id="weight" name="weight" value="70" min="1"></label>
    </div>
    <div class="form-group">
      <label>Height (cm): <input type="number" id="height" name="height" value="170" min="1"></label>
    </div>
    <div class="result-box">
      BMI = <output name="bmi" for="weight height">24.2</output>
    </div>
  </form>
  <mark>If the above code is not working, copy and run it in the compiler.</mark>
</body>
</html>`
  },
  {
    tag: 'p',
    description: 'The <p> tag defines a paragraph. Browsers automatically add some space (margin) before and after each paragraph. Paragraphs are block-level elements and always start on a new line.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Paragraph Tag Example</title>
  <style>
    .styled-p { color: #555; line-height: 1.8; font-size: 1.05em; }
    .lead { font-size: 1.25em; color: #333; font-weight: 300; }
    .text-center { text-align: center; }
    .text-right { text-align: right; }
    .drop-cap::first-letter { font-size: 3em; float: left; line-height: 1; margin-right: 8px; color: #007bff; font-weight: bold; }
  </style>
</head>
<body>
  <h2>Paragraph Tag Example:</h2>

  <h3>Basic Paragraphs:</h3>
  <p>This is the first paragraph. HTML paragraphs are defined using the p tag.</p>
  <p>This is the second paragraph. Browsers automatically add space between paragraphs.</p>

  <h3>Lead Paragraph:</h3>
  <p class="lead">This is a lead paragraph with larger text, often used for introductory content.</p>

  <h3>Styled Paragraph:</h3>
  <p class="styled-p">HTML (HyperText Markup Language) is the standard markup language for creating web pages. It describes the structure of a web page and consists of a series of elements that tell the browser how to display the content.</p>

  <h3>Text Alignment:</h3>
  <p class="text-center">This paragraph is centered.</p>
  <p class="text-right">This paragraph is right-aligned.</p>

  <h3>Drop Cap Effect:</h3>
  <p class="drop-cap">Once upon a time in a land of beautiful code, there was a developer who discovered the power of semantic HTML and used it to build amazing websites that were accessible, fast, and search-engine friendly.</p>
  <mark>If the above code is not working, copy and run it in the compiler.</mark>
</body>
</html>`
  },
  {
    tag: 'param',
    description: 'The <param> tag defines parameters for an <object> element. It is used inside the <object> element to specify how the object behaves. It is a void element and has no content or closing tag.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Param Tag Example</title>
</head>
<body>
  <h2>Param Tag Example:</h2>

  <h3>Using Param with Object (Flash/Media):</h3>
  <object data="movie.swf" type="application/x-shockwave-flash" width="400" height="300">
    <param name="movie" value="movie.swf">
    <param name="quality" value="high">
    <param name="bgcolor" value="#ffffff">
    <param name="play" value="true">
    <param name="loop" value="false">
    <param name="allowfullscreen" value="true">
    <p>Flash content is not supported in your browser.</p>
  </object>

  <h3>Using Param with a Video Object:</h3>
  <object data="sample-video.mp4" type="video/mp4" width="400" height="300">
    <param name="autoplay" value="false">
    <param name="controls" value="true">
    <param name="loop" value="false">
    <param name="muted" value="true">
    <p>Video not supported. <a href="sample-video.mp4">Download the video</a>.</p>
  </object>

  <h3>Param Attributes:</h3>
  <ul>
    <li><strong>name</strong> - The name of the parameter</li>
    <li><strong>value</strong> - The value of the parameter</li>
  </ul>

  <h3>Notes:</h3>
  <p>The param element is a void element (no closing tag). Its behavior depends entirely on the type of object it is used with.</p>
  <mark>If the above code is not working, copy and run it in the compiler.</mark>
</body>
</html>`
  },
  {
    tag: 'picture',
    description: 'The <picture> tag gives web developers more flexibility in specifying image resources. It contains zero or more <source> elements and one <img> element to offer alternative versions of an image for different devices and scenarios.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Picture Tag Example</title>
  <style>
    picture img { max-width: 100%; border: 2px solid #ddd; border-radius: 5px; display: block; margin: 10px 0; }
    .demo { background: #f8f9fa; padding: 15px; border-radius: 8px; margin: 15px 0; }
  </style>
</head>
<body>
  <h2>Picture Tag Example:</h2>

  <h3>Responsive Image Sources:</h3>
  <picture>
    <source media="(min-width: 900px)" srcset="https://via.placeholder.com/900x300" type="image/jpeg">
    <source media="(min-width: 600px)" srcset="https://via.placeholder.com/600x250" type="image/jpeg">
    <img src="https://via.placeholder.com/400x200" alt="Responsive image example">
  </picture>

  <h3>Modern Image Format with Fallback:</h3>
  <picture>
    <source srcset="image.avif" type="image/avif">
    <source srcset="image.webp" type="image/webp">
    <img src="image.jpg" alt="Image with modern format fallback" width="400">
  </picture>

  <h3>Dark Mode Image:</h3>
  <picture>
    <source srcset="logo-dark.png" media="(prefers-color-scheme: dark)">
    <img src="logo-light.png" alt="Logo that adapts to dark/light mode">
  </picture>

  <h3>How Picture Works:</h3>
  <div class="demo">
    <ol>
      <li>Browser reads source elements from top to bottom</li>
      <li>It uses the first source whose conditions match</li>
      <li>If no source matches, the img fallback is used</li>
      <li>The img alt text is always used for accessibility</li>
    </ol>
  </div>
  <mark>If the above code is not working, copy and run it in the compiler.</mark>
</body>
</html>`
  },
  {
    tag: 'pre',
    description: 'The <pre> tag defines preformatted text. Text in a <pre> element is displayed in a fixed-width font (usually monospace) and preserves both spaces and line breaks, making it ideal for code and ASCII art.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Pre Tag Example</title>
  <style>
    pre { background: #282c34; color: #abb2bf; padding: 20px; border-radius: 8px; overflow-x: auto; font-family: 'Courier New', monospace; font-size: 14px; line-height: 1.6; margin: 15px 0; }
    pre.poem { background: #f8f9fa; color: #333; border-left: 4px solid #007bff; }
  </style>
</head>
<body>
  <h2>Pre (Preformatted Text) Tag Example:</h2>

  <h3>Code Block:</h3>
  <pre>
function fibonacci(n) {
    if (n &lt;= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Print first 10 fibonacci numbers
for (let i = 0; i &lt; 10; i++) {
    console.log(fibonacci(i));
}
  </pre>

  <h3>HTML Structure:</h3>
  <pre>
&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
  &lt;head&gt;
    &lt;title&gt;My Page&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;h1&gt;Hello World&lt;/h1&gt;
  &lt;/body&gt;
&lt;/html&gt;
  </pre>

  <h3>Poem (preserving whitespace):</h3>
  <pre class="poem">
    Roses are red,
    Violets are blue,
    HTML is awesome,
    And so are you!
  </pre>
  <mark>If the above code is not working, copy and run it in the compiler.</mark>
</body>
</html>`
  },
  {
    tag: 'progress',
    description: 'The <progress> tag represents the completion progress of a task. It is typically used to show how much of a download, file upload, or form completion has been done. It is different from <meter> which shows a gauge.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Progress Tag Example</title>
  <style>
    .progress-group { margin: 15px 0; }
    label { display: block; font-weight: bold; margin-bottom: 5px; }
    progress { width: 300px; height: 20px; }
    button { padding: 8px 16px; background: #007bff; color: white; border: none; border-radius: 4px; cursor: pointer; margin: 5px; }
  </style>
</head>
<body>
  <h2>Progress Tag Example:</h2>

  <h3>File Download Progress:</h3>
  <div class="progress-group">
    <label>Downloading: file.zip</label>
    <progress value="70" max="100">70%</progress> 70%
  </div>

  <h3>Course Completion:</h3>
  <div class="progress-group">
    <label>HTML Course: </label>
    <progress value="45" max="60">45 of 60 lessons</progress> 45/60 lessons
  </div>

  <h3>Indeterminate Progress (no value):</h3>
  <div class="progress-group">
    <label>Loading... (unknown duration)</label>
    <progress>Loading...</progress>
  </div>

  <h3>Interactive Progress Bar:</h3>
  <div class="progress-group">
    <label>Manual Control:</label>
    <progress id="myProgress" value="0" max="100">0%</progress>
    <span id="progressLabel">0%</span>
  </div>
  <button onclick="changeProgress(-10)">-10%</button>
  <button onclick="changeProgress(10)">+10%</button>

  <script>
    function changeProgress(amount) {
      var p = document.getElementById('myProgress');
      var newVal = Math.min(100, Math.max(0, p.value + amount));
      p.value = newVal;
      document.getElementById('progressLabel').textContent = newVal + '%';
    }
  </script>
  <mark>If the above code is not working, copy and run it in the compiler.</mark>
</body>
</html>`
  },
  {
    tag: 'q',
    description: 'The <q> tag defines a short inline quotation. Browsers normally insert quotation marks around the text. For long quotations that require their own block, use <blockquote> instead.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Q Tag Example</title>
  <style>
    q { color: #555; font-style: italic; }
    q::before { content: open-quote; }
    q::after  { content: close-quote; }
    .custom-quote { quotes: '"' '"' "'" "'"; }
  </style>
</head>
<body>
  <h2>Q (Inline Quotation) Tag Example:</h2>

  <h3>Basic Inline Quotes:</h3>
  <p>According to Einstein, <q>Imagination is more important than knowledge.</q></p>
  <p>Shakespeare wrote: <q>To be, or not to be, that is the question.</q></p>

  <h3>Quote with Cite Attribute:</h3>
  <p>According to the MDN docs, <q cite="https://developer.mozilla.org">The q element indicates that the enclosed text is a short inline quotation.</q></p>

  <h3>Nested Quotations:</h3>
  <p>She said, <q>He told me <q>I will be there</q> but he never came.</q></p>

  <h3>Difference Between q and blockquote:</h3>
  <p>For short inline quotes use <code>q</code>:</p>
  <p>Einstein said <q>E = mc squared</q> which changed physics.</p>
  <p>For long block quotes use <code>blockquote</code>:</p>
  <blockquote>
    <p>Two roads diverged in a wood, and I took the one less traveled by, and that has made all the difference.</p>
    <footer>— Robert Frost, <cite>The Road Not Taken</cite></footer>
  </blockquote>
  <mark>If the above code is not working, copy and run it in the compiler.</mark>
</body>
</html>`
  },
  {
    tag: 's',
    description: 'The <s> tag specifies text that is no longer correct, accurate or relevant. The text will be displayed with a strikethrough line. It differs from <del> which marks text deleted from a document revision.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>S Tag Example</title>
  <style>
    s { color: #999; }
    .price-new { color: #28a745; font-weight: bold; font-size: 1.2em; }
    .price-old { color: #dc3545; }
    .sale-tag { background: #dc3545; color: white; padding: 2px 8px; border-radius: 3px; font-size: 0.8em; margin-left: 5px; }
  </style>
</head>
<body>
  <h2>S (Strikethrough) Tag Example:</h2>

  <h3>Price Discounts:</h3>
  <p>Regular Price: <s class="price-old">$199.99</s> <span class="price-new">$99.99</span> <span class="sale-tag">SALE</span></p>
  <p>Was: <s>$49</s> Now: $29</p>

  <h3>Outdated Information:</h3>
  <p>The event is on <s>Friday, January 10</s> Monday, January 13.</p>
  <p>Contact: <s>support@old-email.com</s> help@new-email.com</p>

  <h3>Product Availability:</h3>
  <ul>
    <li>Blue Widget - $15 <span class="sale-tag">Available</span></li>
    <li><s>Red Widget - $20</s> <span style="color:#dc3545;">(Out of Stock)</span></li>
    <li>Green Widget - $18 <span class="sale-tag">Available</span></li>
  </ul>

  <h3>Difference between s and del:</h3>
  <p><s>Text that is no longer accurate</s> - use &lt;s&gt;</p>
  <p><del>Text that was deliberately removed from a document</del> - use &lt;del&gt;</p>
  <mark>If the above code is not working, copy and run it in the compiler.</mark>
</body>
</html>`
  },
  {
    tag: 'section',
    description: 'The <section> tag defines a section in a document. A section is a thematic grouping of content, typically with a heading. Sections can be nested and help organize page content semantically.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Section Tag Example</title>
  <style>
    section { border: 1px solid #ddd; border-radius: 8px; padding: 20px; margin: 15px 0; background: #fff; }
    section h2 { color: #007bff; border-bottom: 2px solid #007bff; padding-bottom: 8px; }
    section h3 { color: #0056b3; }
    .highlight { background: #e8f4fd; border-left: 4px solid #007bff; padding: 15px; }
  </style>
</head>
<body>
  <h1>Web Development Guide</h1>

  <section id="html">
    <h2>HTML Section</h2>
    <p>HTML is the standard markup language for creating web pages. It stands for HyperText Markup Language.</p>
    <section class="highlight">
      <h3>Key Features</h3>
      <ul>
        <li>Defines the structure of web pages</li>
        <li>Uses elements and tags</li>
        <li>Platform independent</li>
      </ul>
    </section>
  </section>

  <section id="css">
    <h2>CSS Section</h2>
    <p>CSS stands for Cascading Style Sheets. It is used to control the layout and visual appearance of HTML elements.</p>
    <section class="highlight">
      <h3>Key Features</h3>
      <ul>
        <li>Controls colors, fonts, spacing</li>
        <li>Enables responsive design</li>
        <li>Supports animations</li>
      </ul>
    </section>
  </section>

  <section id="js">
    <h2>JavaScript Section</h2>
    <p>JavaScript is the programming language of the web, enabling dynamic and interactive content.</p>
  </section>
  <mark>If the above code is not working, copy and run it in the compiler.</mark>
</body>
</html>`
  },
  {
    tag: 'select',
    description: 'The <select> tag creates a drop-down list. It is used inside a form to collect user input. It works with <option> and <optgroup> child elements to define the available choices.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Select Tag Example</title>
  <style>
    .form-group { margin: 15px 0; }
    label { display: block; font-weight: bold; margin-bottom: 5px; }
    select { padding: 8px; border: 1px solid #ccc; border-radius: 4px; font-size: 14px; width: 250px; }
    button { padding: 10px 20px; background: #007bff; color: white; border: none; border-radius: 4px; cursor: pointer; margin-top: 10px; }
    form { max-width: 400px; background: #f9f9f9; padding: 20px; border-radius: 8px; }
  </style>
</head>
<body>
  <h2>Select Tag Example:</h2>
  <form>
    <div class="form-group">
      <label for="country">Country:</label>
      <select id="country" name="country">
        <option value="">-- Select Country --</option>
        <option value="us">United States</option>
        <option value="uk">United Kingdom</option>
        <option value="in" selected>India</option>
        <option value="ca">Canada</option>
      </select>
    </div>

    <div class="form-group">
      <label for="tech">Grouped Technologies:</label>
      <select id="tech" name="tech">
        <optgroup label="Frontend">
          <option value="html">HTML</option>
          <option value="css">CSS</option>
          <option value="js">JavaScript</option>
        </optgroup>
        <optgroup label="Backend">
          <option value="node">Node.js</option>
          <option value="python">Python</option>
        </optgroup>
      </select>
    </div>

    <div class="form-group">
      <label for="skills">Multiple Selection (hold Ctrl):</label>
      <select id="skills" name="skills" multiple size="4">
        <option value="html">HTML</option>
        <option value="css">CSS</option>
        <option value="js">JavaScript</option>
        <option value="react">React</option>
        <option value="node">Node.js</option>
      </select>
    </div>

    <button type="submit">Submit</button>
  </form>
  <mark>If the above code is not working, copy and run it in the compiler.</mark>
</body>
</html>`
  },
  {
    tag: 'small',
    description: 'The <small> tag defines smaller text. It is typically used for fine print, copyright notices, legal text, disclaimers, and side comments. The rendered text is one font size smaller than the surrounding text.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Small Tag Example</title>
</head>
<body>
  <h2>Small Tag Example:</h2>

  <h3>Copyright Footer:</h3>
  <p>&copy; 2024 Tech In My Style. <small>All rights reserved.</small></p>

  <h3>Terms and Conditions:</h3>
  <p>By using this service, you agree to our Terms of Service.</p>
  <small>This agreement is subject to change without notice. Please review periodically.</small>

  <h3>Price with Fine Print:</h3>
  <p><strong>$9.99/month</strong> <small>(billed annually, cancel anytime)</small></p>

  <h3>Legal Disclaimer:</h3>
  <p>Results may vary. <small>*Individual results are not guaranteed. Past performance does not predict future results.</small></p>

  <h3>Product Details:</h3>
  <h1>SuperPhone X <small>by TechBrand</small></h1>

  <h3>Version Info:</h3>
  <p>App Version 3.2.1 <small>(Released January 2024)</small></p>

  <h3>Nested Small:</h3>
  <p>Normal text <small>small text <small>smaller text</small></small></p>
  <mark>If the above code is not working, copy and run it in the compiler.</mark>
</body>
</html>`
  },
  {
    tag: 'source',
    description: 'The <source> tag specifies multiple media resources for the <picture>, <video>, and <audio> elements. It allows you to specify alternative media files the browser can choose between based on support and conditions.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Source Tag Example</title>
  <style>
    video, audio { display: block; margin: 10px 0; border-radius: 5px; }
    picture img { max-width: 100%; border-radius: 5px; border: 2px solid #ddd; }
  </style>
</head>
<body>
  <h2>Source Tag Example:</h2>

  <h3>Source in Video Element:</h3>
  <video width="400" controls>
    <source src="video.webm" type="video/webm">
    <source src="video.mp4" type="video/mp4">
    <source src="video.ogg" type="video/ogg">
    Your browser does not support the video tag.
  </video>

  <h3>Source in Audio Element:</h3>
  <audio controls>
    <source src="audio.ogg" type="audio/ogg">
    <source src="audio.mp3" type="audio/mpeg">
    <source src="audio.wav" type="audio/wav">
    Your browser does not support the audio element.
  </audio>

  <h3>Source in Picture Element (Responsive Images):</h3>
  <picture>
    <source media="(min-width: 900px)" srcset="https://via.placeholder.com/800x300" type="image/jpeg">
    <source media="(min-width: 600px)" srcset="https://via.placeholder.com/600x250" type="image/jpeg">
    <img src="https://via.placeholder.com/400x200" alt="Responsive example">
  </picture>

  <h3>Source Attributes:</h3>
  <ul>
    <li><strong>src</strong> - URL of the media file (for video/audio)</li>
    <li><strong>srcset</strong> - URL of the image (for picture)</li>
    <li><strong>type</strong> - MIME type of the media file</li>
    <li><strong>media</strong> - Media condition (for picture)</li>
    <li><strong>sizes</strong> - Image sizes for different layouts</li>
  </ul>
  <mark>If the above code is not working, copy and run it in the compiler.</mark>
</body>
</html>`
  },
  {
    tag: 'span',
    description: 'The <span> tag is an inline container used to mark up a part of a text, or a part of a document. It has no default visual effect and is used to apply CSS styles or JavaScript to a specific portion of inline content.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Span Tag Example</title>
  <style>
    .highlight { background: yellow; }
    .red { color: red; font-weight: bold; }
    .blue { color: #007bff; }
    .badge { background: #28a745; color: white; padding: 2px 8px; border-radius: 12px; font-size: 0.8em; }
    .price { color: #dc3545; font-size: 1.3em; font-weight: bold; }
    .old-price { text-decoration: line-through; color: #999; font-size: 0.9em; }
    .tag { background: #e9ecef; padding: 2px 8px; border-radius: 4px; font-size: 0.85em; margin: 2px; display: inline-block; }
  </style>
</head>
<body>
  <h2>Span Tag Example:</h2>

  <h3>Inline Styling:</h3>
  <p>My car is <span class="red">red</span> and my bike is <span class="blue">blue</span>.</p>

  <h3>Highlight Important Text:</h3>
  <p>Please note: <span class="highlight">Payment is due by January 31st</span>.</p>

  <h3>Badge/Label:</h3>
  <p>HTML Tutorial <span class="badge">New</span></p>
  <p>JavaScript Course <span class="badge" style="background:#007bff;">Updated</span></p>

  <h3>Price Display:</h3>
  <p><span class="old-price">$99.99</span> <span class="price">$49.99</span></p>

  <h3>Tags/Keywords:</h3>
  <p>Related:
    <span class="tag">HTML</span>
    <span class="tag">CSS</span>
    <span class="tag">JavaScript</span>
    <span class="tag">React</span>
  </p>

  <h3>Span vs Div:</h3>
  <p><span style="color:green;">Span is inline</span> — it doesn't break the line.</p>
  <div style="color:purple; border: 1px solid purple; padding: 5px;">Div is block — it takes up the full width.</div>
  <mark>If the above code is not working, copy and run it in the compiler.</mark>
</body>
</html>`
  },
  {
    tag: 'strong',
    description: 'The <strong> tag defines text with strong importance. The content inside is typically displayed in bold. Unlike <b>, the <strong> tag has semantic meaning, indicating the text is of great importance.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Strong Tag Example</title>
</head>
<body>
  <h2>Strong Tag Example:</h2>

  <h3>Basic Strong Text:</h3>
  <p>This is <strong>very important</strong> information you must read.</p>

  <h3>Warning Messages:</h3>
  <p><strong>Warning:</strong> Do not leave the oven unattended while cooking.</p>
  <p><strong>Important:</strong> Save your work frequently to avoid data loss.</p>
  <p><strong>Note:</strong> All fields marked with * are required.</p>

  <h3>Highlighting Key Terms:</h3>
  <p>The three pillars of web development are <strong>HTML</strong>, <strong>CSS</strong>, and <strong>JavaScript</strong>.</p>

  <h3>Step Instructions:</h3>
  <ol>
    <li><strong>First</strong>, install Node.js from the official website.</li>
    <li><strong>Then</strong>, open your terminal and run npm install.</li>
    <li><strong>Finally</strong>, start the server with npm start.</li>
  </ol>

  <h3>Strong vs Bold:</h3>
  <p><strong>Strong text</strong> — has semantic importance (screen readers emphasize this)</p>
  <p><b>Bold text</b> — only visual, no semantic meaning</p>
  <mark>If the above code is not working, copy and run it in the compiler.</mark>
</body>
</html>`
  },
  {
    tag: 'style',
    description: 'The <style> tag is used to define style information (CSS) for an HTML document. It is placed inside the <head> section. For multiple pages, external stylesheets (using the link tag) are recommended.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Style Tag Example</title>
  <style>
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background: linear-gradient(135deg, #f5f7fa, #c3cfe2);
      min-height: 100vh;
      padding: 20px;
    }
    h2 { color: #1a1a2e; text-align: center; }
    .card {
      background: white;
      border-radius: 10px;
      padding: 20px;
      margin: 15px auto;
      max-width: 500px;
      box-shadow: 0 4px 15px rgba(0,0,0,0.1);
      transition: transform 0.3s ease;
    }
    .card:hover { transform: translateY(-5px); }
    .card h3 { color: #007bff; margin-top: 0; }
    .badge {
      display: inline-block;
      padding: 4px 12px;
      border-radius: 20px;
      font-size: 0.85em;
      font-weight: bold;
    }
    .badge-blue { background: #cce5ff; color: #004085; }
    .badge-green { background: #d4edda; color: #155724; }
    .badge-red { background: #f8d7da; color: #721c24; }
    @media (max-width: 600px) {
      .card { margin: 10px; }
    }
  </style>
</head>
<body>
  <h2>Style Tag Example</h2>
  <div class="card">
    <h3>HTML Tutorial</h3>
    <p>Learn the building blocks of the web.</p>
    <span class="badge badge-blue">Beginner</span>
  </div>
  <div class="card">
    <h3>CSS Mastery</h3>
    <p>Style your web pages like a pro.</p>
    <span class="badge badge-green">Intermediate</span>
  </div>
  <div class="card">
    <h3>JavaScript Advanced</h3>
    <p>Master asynchronous programming and more.</p>
    <span class="badge badge-red">Advanced</span>
  </div>
  <mark>If the above code is not working, copy and run it in the compiler.</mark>
</body>
</html>`
  },
  {
    tag: 'sub',
    description: 'The <sub> tag defines subscript text. Subscript text appears half a character below the normal line and is sometimes rendered in a smaller font. It is commonly used for chemical formulas and mathematical expressions.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sub Tag Example</title>
  <style>
    .formula { font-size: 1.1em; background: #f8f9fa; padding: 10px; border-left: 3px solid #007bff; margin: 10px 0; }
  </style>
</head>
<body>
  <h2>Sub (Subscript) Tag Example:</h2>

  <h3>Chemical Formulas:</h3>
  <div class="formula">Water: H<sub>2</sub>O</div>
  <div class="formula">Carbon Dioxide: CO<sub>2</sub></div>
  <div class="formula">Glucose: C<sub>6</sub>H<sub>12</sub>O<sub>6</sub></div>
  <div class="formula">Sulphuric Acid: H<sub>2</sub>SO<sub>4</sub></div>
  <div class="formula">Methane: CH<sub>4</sub></div>

  <h3>Mathematical Expressions:</h3>
  <p>Logarithm base 10: log<sub>10</sub>(100) = 2</p>
  <p>Logarithm base 2: log<sub>2</sub>(8) = 3</p>

  <h3>Footnotes:</h3>
  <p>The study was conducted by Smith et al.<sub>1</sub> and confirmed by Jones<sub>2</sub>.</p>
  <p>
    <sub>1</sub> Smith, J., et al. (2024). Research Journal.<br>
    <sub>2</sub> Jones, A. (2024). Science Review.
  </p>
  <mark>If the above code is not working, copy and run it in the compiler.</mark>
</body>
</html>`
  },
  {
    tag: 'summary',
    description: 'The <summary> tag defines a visible heading for the <details> element. The heading can be clicked to view/hide the details. It must be the first child element of <details>.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Summary Tag Example</title>
  <style>
    details { border: 1px solid #ddd; border-radius: 6px; margin: 10px 0; overflow: hidden; }
    summary {
      background: #007bff;
      color: white;
      padding: 12px 16px;
      cursor: pointer;
      font-weight: bold;
      list-style: none;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    summary::-webkit-details-marker { display: none; }
    summary::after { content: '+'; font-size: 1.3em; }
    details[open] summary { background: #0056b3; }
    details[open] summary::after { content: '-'; }
    .details-content { padding: 15px; background: #f8f9fa; }
  </style>
</head>
<body>
  <h2>Summary Tag Example:</h2>
  <p>The summary tag provides a heading for a details element. Click to expand/collapse:</p>

  <details>
    <summary>What is HTML?</summary>
    <div class="details-content">
      <p>HTML (HyperText Markup Language) is the standard markup language for creating web pages. It defines the structure and content of web documents using elements and tags.</p>
    </div>
  </details>

  <details>
    <summary>What is CSS?</summary>
    <div class="details-content">
      <p>CSS (Cascading Style Sheets) is the language used to style and layout web pages, including design, layout, and variations in display for different devices and screen sizes.</p>
    </div>
  </details>

  <details open>
    <summary>What is JavaScript? (open by default)</summary>
    <div class="details-content">
      <p>JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and everything else in web pages.</p>
    </div>
  </details>
  <mark>If the above code is not working, copy and run it in the compiler.</mark>
</body>
</html>`
  },
  {
    tag: 'sup',
    description: 'The <sup> tag defines superscript text. Superscript text appears half a character above the normal line and is often rendered in a smaller font. It is commonly used in math, footnotes, and ordinal numbers.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sup Tag Example</title>
  <style>
    .formula { font-size: 1.1em; background: #f8f9fa; padding: 10px; border-left: 3px solid #28a745; margin: 10px 0; }
  </style>
</head>
<body>
  <h2>Sup (Superscript) Tag Example:</h2>

  <h3>Mathematical Powers:</h3>
  <div class="formula">x<sup>2</sup> + y<sup>2</sup> = z<sup>2</sup> (Pythagorean theorem)</div>
  <div class="formula">2<sup>10</sup> = 1024</div>
  <div class="formula">E = mc<sup>2</sup> (Einstein's mass-energy equivalence)</div>
  <div class="formula">a<sup>n</sup> + b<sup>n</sup> = c<sup>n</sup></div>

  <h3>Ordinal Numbers:</h3>
  <p>1<sup>st</sup> place, 2<sup>nd</sup> place, 3<sup>rd</sup> place, 4<sup>th</sup> place</p>

  <h3>Trademarks and Copyright:</h3>
  <p>Google<sup>&trade;</sup> is a registered trademark.</p>
  <p>Tech In My Style<sup>&reg;</sup> is a registered company.</p>
  <p>Content &copy; 2024<sup>*</sup></p>

  <h3>Footnote References:</h3>
  <p>Climate change is a global challenge<sup>1</sup> requiring immediate action<sup>2</sup>.</p>
  <p><sup>1</sup> UN Climate Report, 2023</p>
  <p><sup>2</sup> IPCC Guidelines, 2022</p>
  <mark>If the above code is not working, copy and run it in the compiler.</mark>
</body>
</html>`
  },
  {
    tag: 'svg',
    description: 'The <svg> tag defines a container for SVG (Scalable Vector Graphics). SVG allows you to draw vector-based graphics directly in HTML using XML-based syntax. They scale perfectly at any size without loss of quality.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>SVG Tag Example</title>
</head>
<body>
  <h2>SVG Tag Example:</h2>

  <h3>Basic Shapes:</h3>
  <svg width="400" height="120" xmlns="http://www.w3.org/2000/svg">
    <rect x="10" y="10" width="80" height="80" fill="#007bff" rx="5"/>
    <circle cx="160" cy="50" r="40" fill="#28a745"/>
    <ellipse cx="270" cy="50" rx="60" ry="35" fill="#dc3545"/>
    <line x1="340" y1="10" x2="390" y2="110" stroke="#333" stroke-width="3"/>
  </svg>

  <h3>Text in SVG:</h3>
  <svg width="300" height="60" xmlns="http://www.w3.org/2000/svg">
    <text x="10" y="40" font-family="Arial" font-size="30" fill="#007bff" font-weight="bold">Hello SVG!</text>
  </svg>

  <h3>SVG Path (Star):</h3>
  <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
    <polygon points="50,5 61,35 98,35 68,57 79,91 50,70 21,91 32,57 2,35 39,35"
      fill="#FFD700" stroke="#FFA500" stroke-width="2"/>
  </svg>

  <h3>SVG with Gradient:</h3>
  <svg width="200" height="100" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" style="stop-color:#007bff;stop-opacity:1"/>
        <stop offset="100%" style="stop-color:#28a745;stop-opacity:1"/>
      </linearGradient>
    </defs>
    <rect width="200" height="100" fill="url(#grad1)" rx="10"/>
    <text x="40" y="55" fill="white" font-size="18" font-weight="bold">Gradient</text>
  </svg>
  <mark>If the above code is not working, copy and run it in the compiler.</mark>
</body>
</html>`
  },
  {
    tag: 'table',
    description: 'The <table> tag defines an HTML table. It contains one or more table-related elements: thead, tbody, tfoot, tr, th, td, caption, col, colgroup. Tables should only be used for tabular data, not for layout.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Table Tag Example</title>
  <style>
    table { border-collapse: collapse; width: 100%; margin: 15px 0; }
    th, td { border: 1px solid #ddd; padding: 12px 15px; text-align: left; }
    thead tr { background-color: #007bff; color: white; }
    tbody tr:nth-child(even) { background-color: #f2f2f2; }
    tbody tr:hover { background-color: #dde8ff; }
    tfoot tr { background-color: #e9ecef; font-weight: bold; }
    caption { font-size: 1.2em; font-weight: bold; padding: 10px; text-align: left; }
  </style>
</head>
<body>
  <h2>Table Tag Example:</h2>

  <table>
    <caption>Employee Salary Report - Q1 2024</caption>
    <colgroup>
      <col style="width:30%">
      <col style="width:25%">
      <col style="width:20%">
      <col style="width:25%">
    </colgroup>
    <thead>
      <tr>
        <th>Employee Name</th>
        <th>Department</th>
        <th>Role</th>
        <th>Salary</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>Alice Johnson</td><td>Engineering</td><td>Senior Dev</td><td>$95,000</td></tr>
      <tr><td>Bob Smith</td><td>Design</td><td>UI Designer</td><td>$75,000</td></tr>
      <tr><td>Carol White</td><td>Marketing</td><td>Manager</td><td>$82,000</td></tr>
      <tr><td>David Lee</td><td>Engineering</td><td>Junior Dev</td><td>$62,000</td></tr>
    </tbody>
    <tfoot>
      <tr>
        <td colspan="3">Total</td>
        <td>$314,000</td>
      </tr>
    </tfoot>
  </table>
  <mark>If the above code is not working, copy and run it in the compiler.</mark>
</body>
</html>`
  },
  {
    tag: 'tbody',
    description: 'The <tbody> tag groups the body content in an HTML table. It is used in conjunction with the <thead> and <tfoot> elements, which specify other parts of the table. It enables independent scrolling of the table body.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tbody Tag Example</title>
  <style>
    table { border-collapse: collapse; width: 100%; }
    th, td { border: 1px solid #ddd; padding: 10px 14px; text-align: left; }
    thead { background: #007bff; color: white; position: sticky; top: 0; }
    tbody { overflow-y: auto; }
    tbody tr:nth-child(even) { background: #f8f9fa; }
    tbody tr:hover { background: #e8f0fe; cursor: pointer; }
    tfoot { background: #343a40; color: white; font-weight: bold; }
    .table-container { max-height: 250px; overflow-y: auto; border: 1px solid #ddd; border-radius: 5px; }
  </style>
</head>
<body>
  <h2>Tbody Tag Example:</h2>
  <p>The tbody groups the main data rows. Notice the scrollable body with fixed header:</p>

  <div class="table-container">
    <table>
      <thead>
        <tr><th>#</th><th>Name</th><th>Subject</th><th>Score</th><th>Grade</th></tr>
      </thead>
      <tbody>
        <tr><td>1</td><td>Alice</td><td>Math</td><td>95</td><td>A</td></tr>
        <tr><td>2</td><td>Bob</td><td>Science</td><td>82</td><td>B</td></tr>
        <tr><td>3</td><td>Carol</td><td>English</td><td>91</td><td>A-</td></tr>
        <tr><td>4</td><td>David</td><td>History</td><td>78</td><td>C+</td></tr>
        <tr><td>5</td><td>Eve</td><td>Math</td><td>88</td><td>B+</td></tr>
        <tr><td>6</td><td>Frank</td><td>Science</td><td>96</td><td>A</td></tr>
        <tr><td>7</td><td>Grace</td><td>English</td><td>74</td><td>C</td></tr>
        <tr><td>8</td><td>Henry</td><td>History</td><td>85</td><td>B</td></tr>
      </tbody>
      <tfoot>
        <tr><td colspan="3">Class Average</td><td>86.1</td><td>B+</td></tr>
      </tfoot>
    </table>
  </div>
  <mark>If the above code is not working, copy and run it in the compiler.</mark>
</body>
</html>`
  },
  {
    tag: 'td',
    description: 'The <td> tag defines a standard data cell in an HTML table. It represents one cell of a table row. It can contain text, images, lists, other tables, and more. The colspan and rowspan attributes let it span multiple columns/rows.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Td Tag Example</title>
  <style>
    table { border-collapse: collapse; width: 100%; margin: 15px 0; }
    th, td { border: 2px solid #333; padding: 10px 14px; text-align: center; }
    th { background: #007bff; color: white; }
    .merged { background: #fffde7; font-weight: bold; }
  </style>
</head>
<body>
  <h2>Td (Table Data Cell) Tag Example:</h2>

  <h3>Basic Table Cells:</h3>
  <table>
    <tr><th>Name</th><th>Age</th><th>City</th></tr>
    <tr><td>Alice</td><td>28</td><td>New York</td></tr>
    <tr><td>Bob</td><td>35</td><td>London</td></tr>
  </table>

  <h3>Colspan and Rowspan:</h3>
  <table>
    <tr>
      <th colspan="3">Student Report Card</th>
    </tr>
    <tr>
      <th>Name</th>
      <th>Subject</th>
      <th>Score</th>
    </tr>
    <tr>
      <td rowspan="3" class="merged">Alice</td>
      <td>Math</td>
      <td>95</td>
    </tr>
    <tr>
      <td>Science</td>
      <td>88</td>
    </tr>
    <tr>
      <td>English</td>
      <td>92</td>
    </tr>
    <tr>
      <td colspan="2" style="text-align:right; font-weight:bold;">Average:</td>
      <td>91.7</td>
    </tr>
  </table>
  <mark>If the above code is not working, copy and run it in the compiler.</mark>
</body>
</html>`
  },
  {
    tag: 'textarea',
    description: 'The <textarea> tag defines a multi-line text input control. It can hold an unlimited number of characters. The size of the text area is defined by the cols and rows attributes, or with CSS width and height.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Textarea Tag Example</title>
  <style>
    .form-group { margin: 15px 0; }
    label { display: block; font-weight: bold; margin-bottom: 5px; }
    textarea { padding: 10px; border: 1px solid #ccc; border-radius: 5px; font-family: inherit; font-size: 14px; resize: vertical; }
    textarea:focus { outline: none; border-color: #007bff; box-shadow: 0 0 0 3px rgba(0,123,255,0.15); }
    button { padding: 10px 20px; background: #007bff; color: white; border: none; border-radius: 4px; cursor: pointer; }
    #charCount { color: #666; font-size: 0.9em; }
  </style>
</head>
<body>
  <h2>Textarea Tag Example:</h2>
  <form>
    <div class="form-group">
      <label for="message">Message (basic):</label>
      <textarea id="message" name="message" rows="4" cols="50" placeholder="Type your message here..."></textarea>
    </div>

    <div class="form-group">
      <label for="bio">Biography (with default text):</label>
      <textarea id="bio" name="bio" rows="5" cols="50">Hello! I am a web developer with 5 years of experience in HTML, CSS, and JavaScript. I love building user-friendly websites.</textarea>
    </div>

    <div class="form-group">
      <label for="feedback">Feedback (disabled):</label>
      <textarea id="feedback" rows="3" cols="50" disabled>This textarea is disabled and cannot be edited.</textarea>
    </div>

    <div class="form-group">
      <label for="review">Review (with char counter):</label>
      <textarea id="review" name="review" rows="4" cols="50" maxlength="200" placeholder="Max 200 characters..."
        oninput="document.getElementById('charCount').textContent = this.value.length + '/200'"></textarea>
      <span id="charCount">0/200</span>
    </div>

    <button type="submit">Submit</button>
  </form>
  <mark>If the above code is not working, copy and run it in the compiler.</mark>
</body>
</html>`
  },
  {
    tag: 'tfoot',
    description: 'The <tfoot> tag groups the footer content in an HTML table. It should contain summary rows like totals, averages, or other aggregate information. It always appears at the bottom of the table, even if placed before tbody in the HTML.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tfoot Tag Example</title>
  <style>
    table { border-collapse: collapse; width: 100%; max-width: 600px; margin: 15px 0; }
    th, td { border: 1px solid #ddd; padding: 10px 15px; text-align: left; }
    thead tr { background: #007bff; color: white; }
    tbody tr:nth-child(even) { background: #f8f9fa; }
    tfoot tr { background: #343a40; color: white; font-weight: bold; font-size: 1.05em; }
    tfoot td { border-top: 3px solid #007bff; }
    .currency { text-align: right; }
  </style>
</head>
<body>
  <h2>Tfoot (Table Footer) Tag Example:</h2>

  <table>
    <caption>Monthly Expense Report</caption>
    <thead>
      <tr>
        <th>Category</th>
        <th>Description</th>
        <th class="currency">Amount</th>
      </tr>
    </thead>
    <tfoot>
      <tr>
        <td colspan="2">Total Monthly Expenses</td>
        <td class="currency">$3,150.00</td>
      </tr>
    </tfoot>
    <tbody>
      <tr><td>Housing</td><td>Rent</td><td class="currency">$1,200.00</td></tr>
      <tr><td>Food</td><td>Groceries & Dining</td><td class="currency">$450.00</td></tr>
      <tr><td>Transport</td><td>Car & Gas</td><td class="currency">$350.00</td></tr>
      <tr><td>Utilities</td><td>Electric, Water, Internet</td><td class="currency">$200.00</td></tr>
      <tr><td>Entertainment</td><td>Streaming, Movies</td><td class="currency">$100.00</td></tr>
      <tr><td>Savings</td><td>Monthly Savings</td><td class="currency">$850.00</td></tr>
    </tbody>
  </table>
  <mark>If the above code is not working, copy and run it in the compiler.</mark>
</body>
</html>`
  },
  {
    tag: 'th',
    description: 'The <th> tag defines a header cell in an HTML table. Text in <th> elements are bold and centered by default. The scope attribute indicates whether the header is for a row, column, row group, or column group.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Th Tag Example</title>
  <style>
    table { border-collapse: collapse; width: 100%; margin: 15px 0; }
    th, td { border: 1px solid #ccc; padding: 10px 14px; }
    th { background: #007bff; color: white; text-align: center; }
    th[scope="row"] { background: #0056b3; text-align: left; }
    td { text-align: center; }
    tbody tr:hover { background: #f0f4ff; }
  </style>
</head>
<body>
  <h2>Th (Table Header) Tag Example:</h2>

  <h3>Column Headers:</h3>
  <table>
    <thead>
      <tr>
        <th scope="col">Student</th>
        <th scope="col">Math</th>
        <th scope="col">Science</th>
        <th scope="col">English</th>
        <th scope="col">Average</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>Alice</td><td>95</td><td>88</td><td>91</td><td>91.3</td></tr>
      <tr><td>Bob</td><td>82</td><td>76</td><td>85</td><td>81.0</td></tr>
      <tr><td>Carol</td><td>90</td><td>94</td><td>89</td><td>91.0</td></tr>
    </tbody>
  </table>

  <h3>Row Headers (scope="row"):</h3>
  <table>
    <tr>
      <th scope="col">Subject</th>
      <th scope="col">Q1</th>
      <th scope="col">Q2</th>
      <th scope="col">Q3</th>
    </tr>
    <tr>
      <th scope="row">Math</th>
      <td>88</td><td>91</td><td>95</td>
    </tr>
    <tr>
      <th scope="row">Science</th>
      <td>82</td><td>79</td><td>86</td>
    </tr>
  </table>
  <mark>If the above code is not working, copy and run it in the compiler.</mark>
</body>
</html>`
  },
  {
    tag: 'thead',
    description: 'The <thead> tag groups the header content in an HTML table. It is used in conjunction with <tbody> and <tfoot> to clearly separate the header rows from the body and footer rows of the table.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thead Tag Example</title>
  <style>
    table { border-collapse: collapse; width: 100%; max-width: 650px; }
    th, td { border: 1px solid #ddd; padding: 11px 15px; text-align: left; }
    thead tr { background: linear-gradient(90deg, #007bff, #0056b3); color: white; }
    thead th { font-size: 0.95em; letter-spacing: 0.5px; text-transform: uppercase; }
    tbody tr:nth-child(odd) { background: white; }
    tbody tr:nth-child(even) { background: #f4f8ff; }
    tbody tr:hover { background: #dde8ff; }
    tfoot { background: #e9ecef; font-weight: bold; }
    .table-scroll { overflow-x: auto; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); }
  </style>
</head>
<body>
  <h2>Thead (Table Header) Tag Example:</h2>
  <p>The thead provides a semantic and styled header for the table:</p>

  <div class="table-scroll">
    <table>
      <thead>
        <tr>
          <th>Order ID</th>
          <th>Product</th>
          <th>Customer</th>
          <th>Date</th>
          <th>Status</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>#1001</td><td>Laptop</td><td>Alice</td><td>2024-01-10</td><td>Delivered</td><td>$999</td></tr>
        <tr><td>#1002</td><td>Mouse</td><td>Bob</td><td>2024-01-11</td><td>Shipped</td><td>$25</td></tr>
        <tr><td>#1003</td><td>Keyboard</td><td>Carol</td><td>2024-01-12</td><td>Processing</td><td>$75</td></tr>
        <tr><td>#1004</td><td>Monitor</td><td>David</td><td>2024-01-13</td><td>Delivered</td><td>$450</td></tr>
      </tbody>
      <tfoot>
        <tr><td colspan="5">Total Revenue</td><td>$1,549</td></tr>
      </tfoot>
    </table>
  </div>
  <mark>If the above code is not working, copy and run it in the compiler.</mark>
</body>
</html>`
  },
  {
    tag: 'time',
    description: 'The <time> tag defines a specific time (or datetime). The datetime attribute is used to specify machine-readable date/time for search engines, calendars, and other applications.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Time Tag Example</title>
  <style>
    time { color: #007bff; font-weight: bold; }
    .event { background: #f8f9fa; border-left: 4px solid #007bff; padding: 12px; margin: 10px 0; border-radius: 0 5px 5px 0; }
    .event-date { display: block; color: #888; font-size: 0.85em; margin-bottom: 5px; }
  </style>
</head>
<body>
  <h2>Time Tag Example:</h2>

  <h3>Simple Time:</h3>
  <p>The store opens at <time>09:00</time> and closes at <time>21:00</time>.</p>

  <h3>Date:</h3>
  <p>HTML5 was published on <time datetime="2014-10-28">October 28, 2014</time>.</p>

  <h3>Date and Time:</h3>
  <p>The event starts on <time datetime="2024-12-25T18:00:00">December 25, 2024 at 6:00 PM</time>.</p>

  <h3>Blog Post Timestamps:</h3>
  <article class="event">
    <time class="event-date" datetime="2024-01-15T10:30:00">Published: January 15, 2024 at 10:30 AM</time>
    <strong>Introduction to HTML5 Features</strong>
    <p>Explore the new features introduced in HTML5...</p>
  </article>
  <article class="event">
    <time class="event-date" datetime="2024-02-20">Published: February 20, 2024</time>
    <strong>CSS Grid vs Flexbox</strong>
    <p>A comparison of the two layout systems...</p>
  </article>

  <h3>Duration:</h3>
  <p>The tutorial takes approximately <time datetime="PT2H30M">2 hours and 30 minutes</time>.</p>
  <mark>If the above code is not working, copy and run it in the compiler.</mark>
</body>
</html>`
  },
  {
    tag: 'title',
    description: 'The <title> tag defines the title of the HTML document. It is required in all HTML documents and is placed in the <head> section. The title appears in the browser tab, bookmarks, and search engine results.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Title Tag Example | Tech In My Style</title>
</head>
<body>
  <h2>Title Tag Example:</h2>
  <p>The title tag in this page's head is: <strong>"Title Tag Example | Tech In My Style"</strong></p>
  <p>Look at your browser tab to see it in action!</p>

  <h3>Where the Title Appears:</h3>
  <ul>
    <li><strong>Browser Tab</strong> — Shown at the top of the browser</li>
    <li><strong>Bookmarks</strong> — Used as the default bookmark name</li>
    <li><strong>Search Results</strong> — Displayed as the clickable link text in Google</li>
    <li><strong>Social Media</strong> — Used when sharing the page</li>
    <li><strong>Browser History</strong> — Shown in browsing history</li>
  </ul>

  <h3>Best Practices for Title Tags:</h3>
  <ul>
    <li>Keep titles between 50-60 characters</li>
    <li>Include the main keyword near the beginning</li>
    <li>Make each page title unique</li>
    <li>Use a format like: "Page Name | Site Name"</li>
    <li>Avoid keyword stuffing</li>
  </ul>

  <h3>Good Title Examples:</h3>
  <ul>
    <li>Home | Tech In My Style</li>
    <li>HTML Tutorial for Beginners | Tech In My Style</li>
    <li>Contact Us | Tech In My Style</li>
  </ul>
  <mark>If the above code is not working, copy and run it in the compiler.</mark>
</body>
</html>`
  },
  {
    tag: 'tr',
    description: 'The <tr> tag defines a row in an HTML table. A table row contains one or more <th> (header) or <td> (data) elements. Rows are grouped in <thead>, <tbody>, or <tfoot> sections.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tr Tag Example</title>
  <style>
    table { border-collapse: collapse; width: 100%; max-width: 600px; margin: 15px 0; }
    th, td { border: 1px solid #ddd; padding: 10px 14px; }
    tr:first-child { background: #007bff; color: white; }
    tr:nth-child(even) { background: #f8f9fa; }
    tr:hover:not(:first-child) { background: #dde8ff; cursor: pointer; }
    .highlight-row { background: #fff3cd !important; font-weight: bold; }
    .danger-row { background: #f8d7da !important; }
    .success-row { background: #d4edda !important; }
  </style>
</head>
<body>
  <h2>Tr (Table Row) Tag Example:</h2>

  <h3>Basic Table Rows:</h3>
  <table>
    <tr><th>Name</th><th>Department</th><th>Salary</th><th>Status</th></tr>
    <tr class="success-row"><td>Alice Johnson</td><td>Engineering</td><td>$95,000</td><td>Active</td></tr>
    <tr><td>Bob Smith</td><td>Design</td><td>$75,000</td><td>Active</td></tr>
    <tr class="highlight-row"><td>Carol White</td><td>Marketing</td><td>$82,000</td><td>On Leave</td></tr>
    <tr class="danger-row"><td>David Lee</td><td>Engineering</td><td>$62,000</td><td>Inactive</td></tr>
    <tr><td>Eve Davis</td><td>HR</td><td>$70,000</td><td>Active</td></tr>
  </table>

  <h3>Rows with Spanning Cells:</h3>
  <table>
    <tr><th colspan="4" style="text-align:center">Q1 Sales Summary</th></tr>
    <tr><th>Region</th><th>Jan</th><th>Feb</th><th>Mar</th></tr>
    <tr><td>North</td><td>$12K</td><td>$15K</td><td>$18K</td></tr>
    <tr><td>South</td><td>$9K</td><td>$11K</td><td>$14K</td></tr>
  </table>
  <mark>If the above code is not working, copy and run it in the compiler.</mark>
</body>
</html>`
  },
  {
    tag: 'track',
    description: 'The <track> tag specifies text tracks for media elements (video and audio). It is used to provide subtitles, captions, descriptions, chapters, and metadata. The kind attribute specifies the type of track.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Track Tag Example</title>
  <style>
    video { display: block; margin: 10px 0; border-radius: 5px; background: #000; }
    .info-box { background: #e8f4fd; border: 1px solid #bee5eb; border-radius: 5px; padding: 15px; margin: 15px 0; }
  </style>
</head>
<body>
  <h2>Track Tag Example:</h2>

  <h3>Video with Subtitle Tracks:</h3>
  <video controls width="500">
    <source src="video.mp4" type="video/mp4">
    <track kind="subtitles" src="subtitles-en.vtt" srclang="en" label="English" default>
    <track kind="subtitles" src="subtitles-es.vtt" srclang="es" label="Spanish">
    <track kind="subtitles" src="subtitles-fr.vtt" srclang="fr" label="French">
    <track kind="captions" src="captions-en.vtt" srclang="en" label="English Captions">
    <track kind="descriptions" src="descriptions.vtt" srclang="en" label="Audio Descriptions">
    <track kind="chapters" src="chapters.vtt" srclang="en" label="Chapters">
    Your browser does not support HTML video.
  </video>

  <div class="info-box">
    <h3>Track Kind Attribute Values:</h3>
    <ul>
      <li><strong>subtitles</strong> — Translations of the spoken dialogue</li>
      <li><strong>captions</strong> — Transcription of dialogue and sound effects</li>
      <li><strong>descriptions</strong> — Textual description of video for blind users</li>
      <li><strong>chapters</strong> — Chapter titles for navigation</li>
      <li><strong>metadata</strong> — Tracks for use by scripts (not displayed)</li>
    </ul>

    <h3>Track Attributes:</h3>
    <ul>
      <li><strong>kind</strong> — Type of text track</li>
      <li><strong>src</strong> — URL of the track file (.vtt format)</li>
      <li><strong>srclang</strong> — Language of the track text</li>
      <li><strong>label</strong> — User-visible title of the track</li>
      <li><strong>default</strong> — Specifies the track to be enabled by default</li>
    </ul>
  </div>
  <mark>If the above code is not working, copy and run it in the compiler.</mark>
</body>
</html>`
  },
  {
    tag: 'u',
    description: 'The <u> tag represents some text that is articulated and styled differently from normal text, rendered with an underline. It can be used for Chinese proper name marks, annotations, or misspelled words.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>U Tag Example</title>
  <style>
    .spelling-error { text-decoration: underline wavy red; }
    .custom-underline { text-decoration: underline dotted blue; }
    .thick-underline { text-decoration: underline 3px solid green; }
  </style>
</head>
<body>
  <h2>U (Underline) Tag Example:</h2>

  <h3>Basic Underline:</h3>
  <p>This is <u>underlined text</u> using the u tag.</p>

  <h3>Misspelling Annotation:</h3>
  <p>The <u class="spelling-error">wrold</u> is a beautiful place to live.</p>
  <p>I love to <u class="spelling-error">programe</u> websites.</p>

  <h3>Proper Names (Chinese proper name mark):</h3>
  <p>The author <u>J.K. Rowling</u> wrote the Harry Potter series.</p>

  <h3>Custom Styled Underlines:</h3>
  <p><u class="custom-underline">Dotted blue underline</u></p>
  <p><u class="thick-underline">Thick green underline</u></p>

  <h3>Important Note:</h3>
  <p>Avoid using the u tag just for visual decoration. Users may confuse underlined text with hyperlinks. Use CSS text-decoration instead for purely visual underlines:</p>
  <p style="text-decoration: underline;">CSS underline via style attribute</p>

  <h3>U vs Other Tags:</h3>
  <p><u>Underlined (u tag)</u> vs <a href="#">Hyperlink (a tag)</a> — look similar but are different!</p>
  <mark>If the above code is not working, copy and run it in the compiler.</mark>
</body>
</html>`
  },
  {
    tag: 'ul',
    description: 'The <ul> tag defines an unordered (bulleted) list. An unordered list starts with the <ul> tag and each list item starts with the <li> tag. Bullet style can be customized with CSS list-style-type.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Unordered List Tag Example</title>
  <style>
    ul { margin: 10px 0; padding-left: 25px; }
    li { margin: 5px 0; line-height: 1.7; }
    .disc { list-style-type: disc; }
    .circle { list-style-type: circle; }
    .square { list-style-type: square; }
    .none { list-style: none; padding: 0; }
    .none li { padding: 6px 10px; background: #f0f4ff; border-left: 3px solid #007bff; margin-bottom: 5px; border-radius: 0 4px 4px 0; }
    .custom-icon li::before { content: "✓ "; color: #28a745; font-weight: bold; }
    .custom-icon { list-style: none; padding-left: 0; }
  </style>
</head>
<body>
  <h2>Unordered List (ul) Tag Example:</h2>

  <h3>Default (disc bullets):</h3>
  <ul class="disc">
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
  </ul>

  <h3>Circle Bullets:</h3>
  <ul class="circle">
    <li>React</li>
    <li>Vue</li>
    <li>Angular</li>
  </ul>

  <h3>Square Bullets:</h3>
  <ul class="square">
    <li>Node.js</li>
    <li>Express</li>
    <li>MongoDB</li>
  </ul>

  <h3>No Bullets (styled as cards):</h3>
  <ul class="none">
    <li>Step 1: Create the HTML file</li>
    <li>Step 2: Add your content</li>
    <li>Step 3: Style with CSS</li>
  </ul>

  <h3>Custom Icon List:</h3>
  <ul class="custom-icon">
    <li>Fast Performance</li>
    <li>Mobile Responsive</li>
    <li>SEO Friendly</li>
    <li>Cross-browser Compatible</li>
  </ul>

  <h3>Nested Unordered List:</h3>
  <ul>
    <li>Frontend
      <ul>
        <li>HTML & CSS</li>
        <li>JavaScript</li>
        <li>Frameworks (React, Vue)</li>
      </ul>
    </li>
    <li>Backend
      <ul>
        <li>Node.js</li>
        <li>Python / Django</li>
      </ul>
    </li>
  </ul>
  <mark>If the above code is not working, copy and run it in the compiler.</mark>
</body>
</html>`
  },
  {
    tag: 'var',
    description: 'The <var> tag is used to define a variable in programming or in a mathematical expression. The content inside is typically rendered in italic. It is a semantic tag, not just visual.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Var Tag Example</title>
  <style>
    var { font-style: italic; font-weight: bold; color: #6f42c1; }
    .code-line { background: #f4f4f4; padding: 8px 12px; border-radius: 4px; font-family: monospace; margin: 5px 0; border-left: 3px solid #6f42c1; }
    .math { background: #e8f4fd; padding: 10px; border-radius: 5px; font-size: 1.1em; }
  </style>
</head>
<body>
  <h2>Var (Variable) Tag Example:</h2>

  <h3>Programming Variables:</h3>
  <p>Declare a variable using: <var>let</var>, <var>const</var>, or <var>var</var>.</p>
  <div class="code-line">let <var>name</var> = "Alice";</div>
  <div class="code-line">const <var>PI</var> = 3.14159;</div>
  <div class="code-line">var <var>count</var> = 0;</div>

  <h3>Mathematical Expressions:</h3>
  <div class="math">
    <p>The formula: <var>E</var> = <var>m</var><var>c</var><sup>2</sup></p>
    <p>Area of a circle: <var>A</var> = &pi;<var>r</var><sup>2</sup></p>
    <p>Slope formula: <var>m</var> = (<var>y</var><sub>2</sub> - <var>y</var><sub>1</sub>) / (<var>x</var><sub>2</sub> - <var>x</var><sub>1</sub>)</p>
  </div>

  <h3>In Documentation:</h3>
  <p>The function accepts two parameters: <var>width</var> and <var>height</var>.</p>
  <p>Pass the <var>userId</var> to retrieve the user's profile data.</p>
  <p>The loop uses <var>i</var> as the counter variable.</p>
  <mark>If the above code is not working, copy and run it in the compiler.</mark>
</body>
</html>`
  },
  {
    tag: 'video',
    description: 'The <video> tag is used to embed video content in a document. It may contain one or more <source> elements with different video formats. It supports controls, autoplay, loop, muted, and poster attributes.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Video Tag Example</title>
  <style>
    video { display: block; border-radius: 8px; margin: 10px 0; background: #000; }
    .video-wrapper { max-width: 600px; }
  </style>
</head>
<body>
  <h2>Video Tag Example:</h2>

  <div class="video-wrapper">
    <h3>Basic Video with Controls:</h3>
    <video controls width="500">
      <source src="video.mp4" type="video/mp4">
      <source src="video.webm" type="video/webm">
      <source src="video.ogg" type="video/ogg">
      Your browser does not support the video tag.
    </video>

    <h3>Video with Poster Image:</h3>
    <video controls width="500" poster="thumbnail.jpg">
      <source src="video.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>

    <h3>Autoplay, Muted, and Loop (Background Video):</h3>
    <video autoplay muted loop width="500" playsinline>
      <source src="background-video.mp4" type="video/mp4">
    </video>
  </div>

  <h3>Video Attributes:</h3>
  <ul>
    <li><strong>controls</strong> - Show play/pause, volume, and fullscreen</li>
    <li><strong>autoplay</strong> - Video plays automatically on load</li>
    <li><strong>loop</strong> - Replays the video after it ends</li>
    <li><strong>muted</strong> - Audio is muted by default</li>
    <li><strong>poster</strong> - Image shown before the video plays</li>
    <li><strong>preload</strong> - How the video should be loaded (auto, metadata, none)</li>
    <li><strong>playsinline</strong> - Play inline on iOS Safari</li>
    <li><strong>width / height</strong> - Dimensions of the video player</li>
  </ul>
  <mark>If the above code is not working, copy and run it in the compiler.</mark>
</body>
</html>`
  },
  {
    tag: 'wbr',
    description: 'The <wbr> tag specifies where in a text it would be acceptable to add a line break. It is useful for long URLs or words that should break at specific points to prevent overflow in narrow containers.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>WBR Tag Example</title>
  <style>
    .narrow-box { width: 200px; border: 2px solid #007bff; padding: 10px; border-radius: 5px; background: #f8f9fa; margin: 10px 0; overflow-wrap: normal; word-break: normal; }
    .url { font-family: monospace; font-size: 0.9em; color: #007bff; }
    .wide-box { max-width: 100%; border: 2px solid #28a745; padding: 10px; border-radius: 5px; background: #f8f9fa; margin: 10px 0; }
    code { background: #e9ecef; padding: 2px 6px; border-radius: 3px; }
  </style>
</head>
<body>
  <h2>WBR (Word Break Opportunity) Tag Example:</h2>

  <h3>Long URL Without WBR (may overflow):</h3>
  <div class="narrow-box">
    <p class="url">https://www.example.com/very/long/path/to/some/resource</p>
  </div>

  <h3>Long URL With WBR (breaks nicely):</h3>
  <div class="narrow-box">
    <p class="url">https://www.<wbr>example.<wbr>com/<wbr>very/<wbr>long/<wbr>path/<wbr>to/<wbr>some/<wbr>resource</p>
  </div>

  <h3>Long Technical Term:</h3>
  <div class="narrow-box">
    <p>Super<wbr>Califragilistic<wbr>Expiali<wbr>docious</p>
  </div>

  <h3>Long Variable Names in Documentation:</h3>
  <div class="wide-box">
    <p>Use the function <code>getUser<wbr>Authentication<wbr>Token</code> to retrieve the user's auth token from the session.</p>
  </div>

  <h3>When to Use WBR:</h3>
  <ul>
    <li>Long URLs in narrow containers</li>
    <li>Long technical terms or compound words</li>
    <li>Long code identifiers or variable names</li>
    <li>File paths on small screens</li>
  </ul>
  <mark>If the above code is not working, copy and run it in the compiler.</mark>
</body>
</html>`
  }
];

export default tagPagesData;
