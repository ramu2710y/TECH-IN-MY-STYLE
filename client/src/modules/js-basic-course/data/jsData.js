/* ═══════════════════════════════════════════════════════════════════
   jsData.js  —  JAVASCRIPT BASIC IN MY STYLE
   All JavaScript Basic topics organized by category.
   Color theme: #F7DF1E (JS Yellow) · #323330 (JS Dark)
═══════════════════════════════════════════════════════════════════ */

export const jsData = {
  categories: [
    {
      name: "Getting Started",
      description: "Introduction to JavaScript, setup, and your first programs",
      icon: "bi bi-play-circle-fill",
      color: "#F7DF1E",
      tags: [
        {
          name: "introduction",
          description: "What JavaScript is and why you should learn it",
        },
        {
          name: "hello-world",
          description: "Writing your very first JavaScript program",
        },
        {
          name: "console",
          description: "Using console.log and the browser developer tools",
        },
        {
          name: "comments",
          description: "Single-line and multi-line comments in JS",
        },
        {
          name: "script-tag",
          description: "Adding JavaScript to HTML with the script tag",
        },
      ],
    },

    {
      name: "Variables and Data Types",
      description: "Store and work with different kinds of data",
      icon: "bi bi-database-fill",
      color: "#F0B429",
      tags: [
        {
          name: "var",
          description: "Declare variables with var (function-scoped, hoisted)",
        },
        {
          name: "let",
          description: "Declare block-scoped variables that can be reassigned",
        },
        {
          name: "const",
          description: "Declare constants that cannot be reassigned",
        },
        {
          name: "string",
          description: "Text data type enclosed in quotes or backticks",
        },
        {
          name: "number",
          description: "Numeric data type for integers and floating-point",
        },
        { name: "boolean", description: "Logical true or false values" },
        {
          name: "typeof",
          description: "Operator that returns the data type of a value",
        },
        {
          name: "template-literals",
          description: "Embed expressions inside strings using backtick syntax",
        },
        {
          name: "type-conversion",
          description: "Convert values between types: Number, String, Boolean",
        },
      ],
    },

    {
      name: "Operators",
      description: "Perform calculations, comparisons, and logic",
      icon: "bi bi-calculator-fill",
      color: "#C9B800",
      tags: [
        {
          name: "arithmetic-operators",
          description: "Add, subtract, multiply, divide, modulus, exponent",
        },
        {
          name: "assignment-operators",
          description: "=, +=, -=, *=, /= and other compound assignments",
        },
        {
          name: "comparison-operators",
          description: "==, ===, !=, !==, >, <, >=, <= comparisons",
        },
        {
          name: "logical-operators",
          description: "AND, OR, NOT, nullish coalescing operators",
        },
        {
          name: "ternary-operator",
          description: "Shorthand conditional: condition ? valueA : valueB",
        },
        {
          name: "spread-operator",
          description: "Expand arrays or objects with ... spread syntax",
        },
        {
          name: "destructuring",
          description: "Unpack array elements or object properties cleanly",
        },
      ],
    },

    {
      name: "Control Flow",
      description: "Make decisions and direct program execution",
      icon: "bi bi-diagram-3-fill",
      color: "#F7DF1E",
      tags: [
        {
          name: "if-else",
          description: "Execute code blocks based on a condition",
        },
        {
          name: "else-if",
          description: "Chain multiple conditions with else if clauses",
        },
        {
          name: "switch",
          description: "Match a value against multiple case branches",
        },
        {
          name: "short-circuit",
          description: "Lazy evaluation using && and || operators",
        },
        {
          name: "nullish-coalescing",
          description: "Return right-hand value when left is null or undefined",
        },
        {
          name: "optional-chaining",
          description: "Safely access nested properties with the ?. operator",
        },
      ],
    },

    {
      name: "Loops",
      description: "Repeat code with different looping constructs",
      icon: "bi bi-arrow-repeat",
      color: "#F0B429",
      tags: [
        {
          name: "for-loop",
          description: "Classic loop with init, condition, and increment",
        },
        {
          name: "while-loop",
          description: "Loop that runs as long as its condition is truthy",
        },
        {
          name: "do-while",
          description:
            "Loop body executes at least once before checking condition",
        },
        {
          name: "for-of",
          description:
            "Iterate over iterable values such as arrays and strings",
        },
        {
          name: "for-in",
          description: "Iterate over enumerable property keys of an object",
        },
        {
          name: "break",
          description: "Exit a loop or switch statement immediately",
        },
        {
          name: "continue",
          description: "Skip the rest of the current loop iteration",
        },
        {
          name: "nested-loops",
          description: "Placing one loop inside another for 2D iteration",
        },
      ],
    },

    {
      name: "Functions",
      description: "Write reusable, modular blocks of logic",
      icon: "bi bi-lightning-fill",
      color: "#C9B800",
      tags: [
        {
          name: "function-declaration",
          description: "Named function using the function keyword",
        },
        {
          name: "function-expression",
          description: "Assign an anonymous function to a variable",
        },
        {
          name: "arrow-functions",
          description: "Concise function syntax with the fat-arrow =>",
        },
        {
          name: "parameters",
          description: "Pass data into functions via named parameters",
        },
        {
          name: "default-parameters",
          description: "Provide fallback values for missing arguments",
        },
        {
          name: "rest-parameters",
          description: "Collect extra arguments into an array with ...rest",
        },
        {
          name: "return",
          description: "Send a value back from a function to the caller",
        },
        {
          name: "scope",
          description: "Global, function, and block scope explained",
        },
        {
          name: "hoisting",
          description: "Function and var declarations lifted to scope top",
        },
        {
          name: "closures",
          description: "Inner functions that retain access to outer scope",
        },
        {
          name: "iife",
          description: "Immediately Invoked Function Expressions",
        },
        {
          name: "callbacks",
          description: "Functions passed as arguments and called later",
        },
        {
          name: "higher-order-functions",
          description: "Functions that accept or return other functions",
        },
      ],
    },

    {
      name: "Arrays",
      description: "Store and manipulate ordered collections of data",
      icon: "bi bi-collection-fill",
      color: "#F7DF1E",
      tags: [
        {
          name: "create-arrays",
          description: "Array literal [], Array(), Array.of(), Array.from()",
        },
        {
          name: "array-access",
          description: "Read elements by index and use the .length property",
        },
        {
          name: "push-pop",
          description: "Add or remove elements at the end of an array",
        },
        {
          name: "shift-unshift",
          description: "Add or remove elements at the beginning",
        },
        {
          name: "splice",
          description: "Insert, remove, or replace elements at any index",
        },
        {
          name: "slice",
          description: "Extract a portion of an array as a new array",
        },
        {
          name: "forEach",
          description: "Iterate over every element with a callback",
        },
        {
          name: "map",
          description: "Transform elements and return a new array",
        },
        {
          name: "filter",
          description: "Keep only elements that pass a test function",
        },
        {
          name: "reduce",
          description: "Accumulate array values to a single output",
        },
        {
          name: "find-findIndex",
          description: "Return first matching element or its index",
        },
        {
          name: "includes",
          description: "Check whether an array contains a given value",
        },
        {
          name: "sort",
          description: "Sort elements in place, optionally with a comparator",
        },
        {
          name: "flat-flatMap",
          description: "Flatten nested arrays into a single-level array",
        },
        {
          name: "array-spread",
          description: "Clone and merge arrays using the spread operator",
        },
        {
          name: "array-destructuring",
          description: "Unpack array positions into named variables",
        },
      ],
    },

    {
      name: "Objects",
      description: "Work with structured key-value data",
      icon: "bi bi-box-fill",
      color: "#F0B429",
      tags: [
        {
          name: "create-objects",
          description: "Object literals with properties and methods",
        },
        {
          name: "object-access",
          description: "Dot notation and bracket notation property access",
        },
        {
          name: "object-methods",
          description: "Functions defined as properties on objects",
        },
        {
          name: "this-keyword",
          description: "Refers to the object that called the current method",
        },
        {
          name: "object-destructuring",
          description: "Extract named properties into separate variables",
        },
        {
          name: "object-spread",
          description: "Shallow copy and merge objects with ...spread",
        },
        {
          name: "Object-keys-values",
          description: "Object.keys(), Object.values(), Object.entries()",
        },
        {
          name: "json",
          description: "JSON.parse() and JSON.stringify() for serialisation",
        },
        {
          name: "object-shorthand",
          description: "Shorthand property and method syntax in ES6",
        },
        {
          name: "computed-properties",
          description: "Dynamic property names using [expression] syntax",
        },
      ],
    },

    {
      name: "Strings",
      description: "Manipulate and transform text data",
      icon: "bi bi-fonts",
      color: "#C9B800",
      tags: [
        {
          name: "string-basics",
          description: "Single quotes, double quotes, and backtick strings",
        },
        {
          name: "string-length",
          description: "Count characters with the .length property",
        },
        {
          name: "string-access",
          description: "Read characters by index using [] or charAt()",
        },
        {
          name: "string-methods",
          description:
            "toUpperCase, toLowerCase, trim, repeat, padStart, padEnd",
        },
        {
          name: "indexOf-includes",
          description:
            "Find substrings with indexOf(), includes(), startsWith()",
        },
        {
          name: "slice-substring",
          description: "Extract portions with slice() and substring()",
        },
        {
          name: "split-join",
          description: "Convert strings to arrays and back with split and join",
        },
        {
          name: "replace-replaceAll",
          description: "Replace occurrences using replace() and replaceAll()",
        },
        {
          name: "string-template",
          description:
            "Multi-line strings and interpolation with template literals",
        },
      ],
    },

    {
      name: "DOM Manipulation",
      description: "Select and modify HTML elements with JavaScript",
      icon: "bi bi-layout-text-sidebar",
      color: "#F7DF1E",
      tags: [
        {
          name: "getElementById",
          description: "Select a single element by its id attribute",
        },
        {
          name: "querySelector",
          description: "Select first matching element with CSS selector",
        },
        {
          name: "querySelectorAll",
          description: "Select all matching elements as a NodeList",
        },
        {
          name: "innerHTML",
          description: "Get or set HTML markup inside an element",
        },
        {
          name: "textContent",
          description: "Get or set plain text content of an element",
        },
        {
          name: "setAttribute",
          description: "Read and write element attributes",
        },
        {
          name: "classList",
          description: "add, remove, toggle, and contains for CSS classes",
        },
        {
          name: "style-property",
          description: "Set inline styles directly via element.style",
        },
        {
          name: "createElement",
          description: "Create new DOM elements with document.createElement",
        },
        {
          name: "appendChild",
          description: "Attach new or existing nodes as children",
        },
        {
          name: "removeChild",
          description: "Remove a child node from its parent",
        },
        {
          name: "parentElement",
          description: "Navigate the DOM tree upward and sideways",
        },
      ],
    },

    {
      name: "Events",
      description: "Respond to user interactions and browser events",
      icon: "bi bi-cursor-fill",
      color: "#F0B429",
      tags: [
        {
          name: "addEventListener",
          description: "Register event handlers on DOM elements",
        },
        {
          name: "click-event",
          description: "Fire a handler when the user clicks an element",
        },
        {
          name: "keydown-keyup",
          description: "Respond to keyboard key press and release events",
        },
        {
          name: "mouseover-mouseout",
          description: "Handle mouse enter and leave hover events",
        },
        {
          name: "input-change",
          description: "React to form field value changes",
        },
        {
          name: "submit-event",
          description: "Intercept and handle HTML form submissions",
        },
        {
          name: "event-object",
          description: "The event parameter: target, type, key, clientX",
        },
        {
          name: "preventDefault",
          description: "Stop default browser actions like link navigation",
        },
        {
          name: "event-delegation",
          description:
            "Use a parent element to handle events for dynamic children",
        },
        {
          name: "removeEventListener",
          description: "Remove a previously registered event handler",
        },
      ],
    },

    {
      name: "Error Handling",
      description: "Write resilient code that handles failures gracefully",
      icon: "bi bi-shield-exclamation",
      color: "#C9B800",
      tags: [
        {
          name: "try-catch",
          description: "Wrap risky code in try and handle failures in catch",
        },
        {
          name: "finally",
          description: "Block that always executes after try-catch completes",
        },
        {
          name: "throw",
          description: "Manually throw an error with the throw statement",
        },
        {
          name: "error-types",
          description: "ReferenceError, TypeError, SyntaxError, RangeError",
        },
        {
          name: "custom-errors",
          description:
            "Extend the Error class to create domain-specific errors",
        },
        {
          name: "console-error",
          description: "Debug with console.error, console.warn, console.table",
        },
      ],
    },
  ],
};

export function getAllTopics() {
  const map = new Map();
  jsData.categories.forEach((cat) => {
    cat.tags.forEach((tag) => {
      if (!map.has(tag.name)) {
        map.set(tag.name, {
          ...tag,
          category: cat.name,
          categoryColor: cat.color,
        });
      }
    });
  });
  return Array.from(map.values()).sort((a, b) => a.name.localeCompare(b.name));
}

export function getTopicDetails(name) {
  if (!name) return null;
  const key = name.toLowerCase().trim();
  for (const cat of jsData.categories) {
    const found = cat.tags.find((t) => t.name.toLowerCase() === key);
    if (found) return { ...found, category: cat.name, color: cat.color };
  }
  return null;
}

export default jsData;
