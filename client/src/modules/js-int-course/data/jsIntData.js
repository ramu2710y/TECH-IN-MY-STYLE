// jsIntData.js — JavaScript Intermediate Course Data
// Contains all 11 categories with their topics

export const jsIntData = {
  categories: [
    {
      name: "Advanced Data Types",
      description: "Deep dive into arrays, objects, and nested structures beyond the basics",
      icon: "bi bi-collection-fill",
      color: "#8b5cf6",
      tags: [
        {
          name: "arrays-advanced",
          description: "Advanced array creation, multi-dimensional arrays, and array-like objects"
        },
        {
          name: "objects-deep",
          description: "Deep object usage — property shorthand, computed keys, property descriptors"
        },
        {
          name: "nested-objects-arrays",
          description: "Working with deeply nested objects and arrays — access, update, traverse"
        }
      ]
    },
    {
      name: "Array Methods",
      description: "Master JavaScript's powerful built-in array transformation and iteration methods",
      icon: "bi bi-funnel-fill",
      color: "#6d28d9",
      tags: [
        {
          name: "map",
          description: "map() — transform every element and return a new array"
        },
        {
          name: "filter",
          description: "filter() — select elements matching a condition"
        },
        {
          name: "reduce",
          description: "reduce() — accumulate array values into a single result"
        },
        {
          name: "forEach",
          description: "forEach() — iterate through each array element (no return)"
        },
        {
          name: "find",
          description: "find() — return the first element that passes a test"
        },
        {
          name: "some",
          description: "some() — check if at least one element passes a test"
        },
        {
          name: "every",
          description: "every() — check if all elements pass a test"
        }
      ]
    },
    {
      name: "Functions Intermediate",
      description: "Explore callbacks, closures, higher-order functions, and advanced parameter patterns",
      icon: "bi bi-lightning-fill",
      color: "#ec4899",
      tags: [
        {
          name: "callback-functions",
          description: "Callback functions — passing functions as arguments to other functions"
        },
        {
          name: "higher-order-functions",
          description: "Higher-order functions — functions that accept or return other functions"
        },
        {
          name: "closures",
          description: "Closures — functions that remember variables from their enclosing scope"
        },
        {
          name: "default-parameters",
          description: "Default parameters — set fallback values for function arguments"
        },
        {
          name: "rest-parameters",
          description: "Rest parameters (...args) — collect multiple arguments into an array"
        }
      ]
    },
    {
      name: "ES6+ Features",
      description: "Modern JavaScript syntax and features introduced in ES6 and beyond",
      icon: "bi bi-stars",
      color: "#8b5cf6",
      tags: [
        {
          name: "let-const-deep",
          description: "let vs const deep dive — scope, hoisting, temporal dead zone, best practices"
        },
        {
          name: "arrow-functions-advanced",
          description: "Arrow functions deep — implicit returns, this binding, when to use"
        },
        {
          name: "template-literals",
          description: "Template literals — interpolation, multiline strings, tagged templates"
        },
        {
          name: "destructuring",
          description: "Destructuring — extract values from arrays and objects elegantly"
        },
        {
          name: "spread-operator",
          description: "Spread operator (...) — expand arrays/objects in expressions and calls"
        }
      ]
    },
    {
      name: "Asynchronous JavaScript",
      description: "Handle async operations using timers, callbacks, Promises, and async/await",
      icon: "bi bi-clock-history",
      color: "#6d28d9",
      tags: [
        {
          name: "setTimeout",
          description: "setTimeout() — execute code after a delay"
        },
        {
          name: "setInterval",
          description: "setInterval() — repeatedly execute code at timed intervals"
        },
        {
          name: "callback-async",
          description: "Callback-based async pattern — handling async with nested callbacks"
        },
        {
          name: "promises",
          description: "Promises — represent a future value; .then(), .catch(), .finally()"
        },
        {
          name: "async-await",
          description: "async/await — write async code that reads like synchronous code"
        }
      ]
    },
    {
      name: "DOM Manipulation",
      description: "Dynamically create, modify, and remove HTML elements using JavaScript",
      icon: "bi bi-window-stack",
      color: "#ec4899",
      tags: [
        {
          name: "querySelectorAll",
          description: "querySelectorAll() — select all elements matching a CSS selector"
        },
        {
          name: "classlist",
          description: "classList — add, remove, toggle, and check CSS classes dynamically"
        },
        {
          name: "createElement",
          description: "createElement() — create new HTML elements from JavaScript"
        },
        {
          name: "appendChild",
          description: "appendChild() — insert a node as the last child of an element"
        },
        {
          name: "removeElement",
          description: "remove() — remove an element from the DOM"
        }
      ]
    },
    {
      name: "Events",
      description: "Deep understanding of event listeners, propagation, delegation, and the event object",
      icon: "bi bi-cursor-fill",
      color: "#8b5cf6",
      tags: [
        {
          name: "event-listeners-deep",
          description: "Event listeners deep — addEventListener, removeEventListener, once option"
        },
        {
          name: "event-object",
          description: "Event object — properties and methods of the event passed to handlers"
        },
        {
          name: "event-bubbling",
          description: "Event bubbling — how events propagate up through the DOM tree"
        },
        {
          name: "event-delegation",
          description: "Event delegation — handle events on parent for dynamic child elements"
        }
      ]
    },
    {
      name: "Error Handling",
      description: "Write robust code that gracefully handles exceptions and unexpected failures",
      icon: "bi bi-shield-exclamation",
      color: "#6d28d9",
      tags: [
        {
          name: "try-catch",
          description: "try...catch — wrap risky code and handle errors gracefully"
        },
        {
          name: "finally",
          description: "finally — code that always runs after try/catch regardless of outcome"
        },
        {
          name: "throw",
          description: "throw — create and throw custom error objects or messages"
        }
      ]
    },
    {
      name: "Browser Storage",
      description: "Persist and manage data in the browser using localStorage and sessionStorage",
      icon: "bi bi-hdd-fill",
      color: "#ec4899",
      tags: [
        {
          name: "localStorage",
          description: "localStorage — persist key-value data across browser sessions"
        },
        {
          name: "sessionStorage",
          description: "sessionStorage — store data for the duration of a browser session"
        }
      ]
    },
    {
      name: "JSON Handling",
      description: "Parse and serialize JSON data for storage, transfer, and API communication",
      icon: "bi bi-braces",
      color: "#8b5cf6",
      tags: [
        {
          name: "json-parse",
          description: "JSON.parse() — convert a JSON string into a JavaScript object"
        },
        {
          name: "json-stringify",
          description: "JSON.stringify() — convert a JavaScript object into a JSON string"
        }
      ]
    },
    {
      name: "Fetch API",
      description: "Make HTTP requests to servers and external APIs using the Fetch API",
      icon: "bi bi-globe2",
      color: "#6d28d9",
      tags: [
        {
          name: "fetch",
          description: "fetch() — make HTTP requests to servers and APIs"
        },
        {
          name: "handling-api-responses",
          description: "Handling API responses — parse JSON, handle errors, check status codes"
        },
        {
          name: "then-chaining",
          description: ".then() chaining — chain multiple promise operations in sequence"
        }
      ]
    }
  ]
};

/**
 * getAllTopics()
 * Flattens all topics from every category into a single array.
 * Uses a Map to deduplicate by topic name, attaching the parent category name.
 *
 * @returns {Array<{ name: string, description: string, category: string }>}
 */
export function getAllTopics() {
  const map = new Map();
  jsIntData.categories.forEach(cat => {
    cat.tags.forEach(tag => {
      if (!map.has(tag.name)) {
        map.set(tag.name, { ...tag, category: cat.name });
      }
    });
  });
  return Array.from(map.values());
}

export default jsIntData;
