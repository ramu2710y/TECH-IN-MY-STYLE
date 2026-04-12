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
    description: 'The <dialog> tag defines a dialog box or subwindow. It can be used to create modal dialogs, alert boxes, or other interactive UI components that appear on top of the main content.',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Dialog Tag Example</title>
  <style>
    dialog { border: 1px solid #ccc; border-radius: 8px; padding: 20px; box-shadow: 0 4px 8px rgba(0,0,0,0.1); }
    dialog::backdrop { background: rgba(0,0,0,0.5); }
    button { padding: 8px 16px; margin: 5px; border: none; border-radius: 4px; cursor: pointer; }
    .primary { background: #007bff; color: white; }
    .secondary { background: #6c757d; color: white; }
  </style>
</head>
<body>
  <h2>Dialog Tag Example:</h2>

  <button onclick="document.getElementById('myDialog').showModal()">Open Dialog</button>
  <button onclick="document.getElementById('alertDialog').showModal()">Show Alert</button>

  <dialog id="myDialog">
    <h3>Confirmation Dialog</h3>
    <p>Are you sure you want to proceed with this action?</p>
    <p>This action cannot be undone.</p>
    <button class="primary" onclick="this.parentElement.close()">Confirm</button>
    <button class="secondary" onclick="this.parentElement.close()">Cancel</button>
  </dialog>

  <dialog id="alertDialog">
    <h3>Alert!</h3>
    <p>Your changes have been saved successfully.</p>
    <button class="primary" onclick="this.parentElement.close()">OK</button>
  </dialog>

  <h3>Dialog Attributes:</h3>
  <ul>
    <li><strong>open</strong> - Dialog is visible when present</li>
    <li><strong>showModal()</strong> - Shows dialog as modal</li>
    <li><strong>show()</strong> - Shows dialog as non-modal</li>
    <li><strong>close()</strong> - Closes the dialog</li>
  </ul>
  <mark>If the above code is not working, copy and run it in the compiler.</mark>
</body>
</html>`
  }
];

export default tagPagesData;
