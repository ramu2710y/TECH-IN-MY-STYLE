const tagData = {
  categories: [
    {
      name: "Formatting Tags",
      description: "Tags for text formatting and styling",
      tags: [
        { name: "abbr", description: "Abbreviation or acronym" },
        { name: "b", description: "Bold text" },
        { name: "bdi", description: "Bidirectional isolate text" },
        { name: "bdo", description: "Bidirectional text override" },
        { name: "cite", description: "Citation or reference to a source" },
        { name: "code", description: "Code text" },
        { name: "del", description: "Deleted text" },
        { name: "em", description: "Emphasized text" },
        { name: "i", description: "Italic text" },
        { name: "ins", description: "Inserted text" },
        { name: "kbd", description: "Keyboard input" },
        { name: "mark", description: "Marked/highlighted text" },
        { name: "s", description: "Strikethrough text" },
        { name: "small", description: "Smaller text" },
        { name: "span", description: "Generic inline container" },
        { name: "strong", description: "Important text (semantically strong)" },
        { name: "sub", description: "Subscript text" },
        { name: "sup", description: "Superscript text" },
        { name: "u", description: "Underlined text (non-semantic)" },
        { name: "var", description: "Variable" }
      ]
    },
    {
      name: "Sectioning Tags",
      description: "Tags for document structure and layout",
      tags: [
        { name: "address", description: "Contact information" },
        { name: "article", description: "Self-contained content" },
        { name: "aside", description: "Aside content" },
        { name: "div", description: "Generic division" },
        { name: "footer", description: "Document footer section" },
        { name: "header", description: "Document header section" },
        { name: "main", description: "Main content section" },
        { name: "nav", description: "Navigation links section" },
        { name: "section", description: "Thematic section" }
      ]
    },
    {
      name: "Text Structure Tags",
      description: "Tags for structuring text content",
      tags: [
        { name: "blockquote", description: "Block quotation" },
        { name: "dd", description: "Description list item description" },
        { name: "dl", description: "Description list" },
        { name: "dt", description: "Description list item term" },
        { name: "figcaption", description: "Caption for figure" },
        { name: "figure", description: "Figure with optional caption" },
        { name: "hr", description: "Horizontal rule" },
        { name: "li", description: "List item" },
        { name: "ol", description: "Ordered list" },
        { name: "p", description: "Paragraph" },
        { name: "pre", description: "Preformatted text" },
        { name: "ul", description: "Unordered list" }
      ]
    },
    {
      name: "Form Tags",
      description: "Tags for creating forms and user input",
      tags: [
        { name: "button", description: "Clickable button" },
        { name: "datalist", description: "Predefined options for input" },
        { name: "fieldset", description: "Group related form elements" },
        { name: "form", description: "Form container" },
        { name: "input", description: "Input field" },
        { name: "label", description: "Label for form element" },
        { name: "legend", description: "Caption for fieldset" },
        { name: "meter", description: "Scalar measurement" },
        { name: "optgroup", description: "Group of options in select" },
        { name: "option", description: "Option in select list" },
        { name: "output", description: "Calculation result" },
        { name: "progress", description: "Progress indicator" },
        { name: "select", description: "Dropdown selection list" },
        { name: "textarea", description: "Multi-line text input" }
      ]
    },
    {
      name: "Table Tags",
      description: "Tags for creating tables",
      tags: [
        { name: "caption", description: "Table caption" },
        { name: "col", description: "Table column" },
        { name: "colgroup", description: "Group of table columns" },
        { name: "table", description: "Table container" },
        { name: "tbody", description: "Table body" },
        { name: "td", description: "Table data cell" },
        { name: "tfoot", description: "Table footer" },
        { name: "th", description: "Table header cell" },
        { name: "thead", description: "Table header" },
        { name: "tr", description: "Table row" }
      ]
    },
    {
      name: "Media Tags",
      description: "Tags for embedding media content",
      tags: [
        { name: "audio", description: "Audio content" },
        { name: "canvas", description: "Canvas for drawing graphics" },
        { name: "embed", description: "Embedded external content" },
        { name: "iframe", description: "Inline frame" },
        { name: "img", description: "Image" },
        { name: "object", description: "Embedded object" },
        { name: "picture", description: "Container for multiple image sources" },
        { name: "svg", description: "Scalable Vector Graphics" },
        { name: "video", description: "Video content" }
      ]
    },
    {
      name: "Metadata Tags",
      description: "Tags for document metadata and information",
      tags: [
        { name: "base", description: "Base URL for all relative URLs" },
        { name: "head", description: "Document metadata container" },
        { name: "link", description: "External resource link" },
        { name: "meta", description: "Metadata" },
        { name: "style", description: "CSS styles" },
        { name: "title", description: "Document title" }
      ]
    },
    {
      name: "Scripting Tags",
      description: "Tags for scripts and interactive content",
      tags: [
        { name: "noscript", description: "Content for when scripting is disabled" },
        { name: "script", description: "JavaScript code" },
        { name: "template", description: "HTML template fragment" }
      ]
    },
    {
      name: "Interactive Tags",
      description: "Tags for interactive elements",
      tags: [
        { name: "details", description: "Disclosure widget" },
        { name: "dialog", description: "Dialog box" },
        { name: "summary", description: "Summary for details element" }
      ]
    },
    {
      name: "Semantic HTML5 Tags",
      description: "New semantic tags introduced in HTML5",
      tags: [
        { name: "article", description: "Self-contained content" },
        { name: "aside", description: "Aside content" },
        { name: "figcaption", description: "Caption for figure" },
        { name: "figure", description: "Figure with optional caption" },
        { name: "footer", description: "Document footer section" },
        { name: "header", description: "Document header section" },
        { name: "main", description: "Main content section" },
        { name: "mark", description: "Marked/highlighted text" },
        { name: "nav", description: "Navigation links section" },
        { name: "section", description: "Thematic section" },
        { name: "time", description: "Date/time" },
        { name: "wbr", description: "Word break opportunity" }
      ]
    }
  ]
};

export default tagData;
