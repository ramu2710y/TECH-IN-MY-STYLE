// src/data/JsAdvTopicsData.js
// Advanced JavaScript Course Data — 13 Modules, 58 JsAdvTopics

export const JsAdvTopicsData = {
  modules: [
    /* ═══════════════════════════════════════════════════════════
       MODULE 1 — Closures & Scope
    ═══════════════════════════════════════════════════════════ */
    {
      id: "closures-scope",
      title: "Closures & Scope",
      description:
        "Master lexical environments, closure patterns, and scope chains that power JavaScript internals.",
      icon: "bi bi-box-seam-fill",
      color: "#06b6d4",
      topics: [
        {
          id: "lexical-environment",
          title: "Lexical Environment",
          description:
            "How JS engines create and chain execution contexts at parse time",
          difficulty: "Intermediate",
          time: "20 min",
        },
        {
          id: "closure-fundamentals",
          title: "Closure Fundamentals",
          description:
            "Functions that remember their enclosing scope — deep dive into the mechanism",
          difficulty: "Intermediate",
          time: "25 min",
        },
        {
          id: "module-pattern",
          title: "Module Pattern",
          description:
            "Create private state and public APIs using closures — the classic JS pattern",
          difficulty: "Advanced",
          time: "20 min",
        },
        {
          id: "iife-patterns",
          title: "IIFE Patterns",
          description:
            "Immediately invoked function expressions for scoping and encapsulation",
          difficulty: "Intermediate",
          time: "15 min",
        },
        {
          id: "memoization",
          title: "Memoization",
          description:
            "Cache expensive function results for performance using closures",
          difficulty: "Advanced",
          time: "20 min",
        },
      ],
    },

    /* ═══════════════════════════════════════════════════════════
       MODULE 2 — Prototypes & Inheritance
    ═══════════════════════════════════════════════════════════ */
    {
      id: "prototypes-inheritance",
      title: "Prototypes & Inheritance",
      description:
        "Understand the prototype chain, object creation, and JavaScript's classical OOP model.",
      icon: "bi bi-diagram-3-fill",
      color: "#a855f7",
      topics: [
        {
          id: "prototype-chain",
          title: "The Prototype Chain",
          description:
            "How property lookup traverses the prototype chain in JavaScript",
          difficulty: "Intermediate",
          time: "25 min",
        },
        {
          id: "object-create",
          title: "Object.create()",
          description:
            "Create objects with a specific prototype — pure prototypal inheritance",
          difficulty: "Intermediate",
          time: "15 min",
        },
        {
          id: "constructor-functions",
          title: "Constructor Functions",
          description:
            "Build objects using constructor functions and the new keyword",
          difficulty: "Intermediate",
          time: "20 min",
        },
        {
          id: "es6-classes",
          title: "ES6 Classes Deep Dive",
          description:
            "Classes, extends, super, static methods, and private fields",
          difficulty: "Intermediate",
          time: "30 min",
        },
        {
          id: "mixins-composition",
          title: "Mixins & Composition",
          description:
            "Compose behaviors without inheritance using mixin patterns",
          difficulty: "Advanced",
          time: "25 min",
        },
      ],
    },

    /* ═══════════════════════════════════════════════════════════
       MODULE 3 — Advanced Functions
    ═══════════════════════════════════════════════════════════ */
    {
      id: "advanced-functions",
      title: "Advanced Functions",
      description:
        "Explore currying, composition, generators, iterators, and advanced parameter techniques.",
      icon: "bi bi-lightning-charge-fill",
      color: "#f59e0b",
      topics: [
        {
          id: "currying",
          title: "Currying & Partial Application",
          description:
            "Transform multi-argument functions into chains of single-argument functions",
          difficulty: "Advanced",
          time: "25 min",
        },
        {
          id: "function-composition",
          title: "Function Composition",
          description:
            "Combine small functions into pipelines — the compose and pipe patterns",
          difficulty: "Advanced",
          time: "20 min",
        },
        {
          id: "generators",
          title: "Generators & Iterators",
          description:
            "Control function execution flow with generator functions and the iterator protocol",
          difficulty: "Advanced",
          time: "30 min",
        },
        {
          id: "symbols-iterables",
          title: "Symbols & Iterables",
          description:
            "Use Symbol.iterator to make custom objects iterable with for...of",
          difficulty: "Advanced",
          time: "20 min",
        },
        {
          id: "tagged-templates",
          title: "Tagged Template Literals",
          description:
            "Process template literals with tag functions for DSLs and sanitization",
          difficulty: "Advanced",
          time: "15 min",
        },
      ],
    },

    /* ═══════════════════════════════════════════════════════════
       MODULE 4 — Asynchronous Patterns
    ═══════════════════════════════════════════════════════════ */
    {
      id: "async-patterns",
      title: "Asynchronous Patterns",
      description:
        "Go deep into the event loop, promise internals, async/await, and concurrent operations.",
      icon: "bi bi-clock-history",
      color: "#06b6d4",
      topics: [
        {
          id: "event-loop",
          title: "Event Loop Deep Dive",
          description:
            "Call stack, task queue, microtask queue, and how JS achieves concurrency",
          difficulty: "Advanced",
          time: "35 min",
        },
        {
          id: "promise-internals",
          title: "Promise Internals",
          description:
            "Build a Promise from scratch — understand resolve, reject, then chaining",
          difficulty: "Advanced",
          time: "30 min",
        },
        {
          id: "async-await-advanced",
          title: "Async/Await Advanced",
          description:
            "Error handling patterns, parallel execution, and real-world async code",
          difficulty: "Intermediate",
          time: "25 min",
        },
        {
          id: "promise-combinators",
          title: "Promise Combinators",
          description:
            "Promise.all, allSettled, race, any — when and how to use each",
          difficulty: "Intermediate",
          time: "20 min",
        },
        {
          id: "observable-patterns",
          title: "Observable Patterns",
          description:
            "Reactive programming concepts and the observer pattern for async streams",
          difficulty: "Advanced",
          time: "25 min",
        },
      ],
    },

    /* ═══════════════════════════════════════════════════════════
       MODULE 5 — Functional Programming
    ═══════════════════════════════════════════════════════════ */
    {
      id: "functional-programming",
      title: "Functional Programming",
      description:
        "Immutability, pure functions, functors, and composable data transformation techniques.",
      icon: "bi bi-infinity",
      color: "#10b981",
      topics: [
        {
          id: "immutability",
          title: "Immutability in JS",
          description:
            "Techniques for immutable data updates — spread, Object.freeze, immer patterns",
          difficulty: "Intermediate",
          time: "20 min",
        },
        {
          id: "pure-functions",
          title: "Pure Functions & Side Effects",
          description:
            "Write deterministic functions and manage side effects effectively",
          difficulty: "Intermediate",
          time: "20 min",
        },
        {
          id: "functors-monads",
          title: "Functors & Monads",
          description:
            "Map and chain operations over wrapped values — practical FP patterns",
          difficulty: "Advanced",
          time: "30 min",
        },
        {
          id: "pipe-compose",
          title: "Pipe & Compose Patterns",
          description:
            "Build reusable data transformation pipelines for clean functional code",
          difficulty: "Advanced",
          time: "20 min",
        },
      ],
    },

    /* ═══════════════════════════════════════════════════════════
       MODULE 6 — Design Patterns
    ═══════════════════════════════════════════════════════════ */
    {
      id: "design-patterns",
      title: "Design Patterns",
      description:
        "Proven object-oriented and functional patterns for scalable, maintainable JavaScript code.",
      icon: "bi bi-grid-3x3-gap-fill",
      color: "#8b5cf6",
      topics: [
        {
          id: "singleton-pattern",
          title: "Singleton Pattern",
          description:
            "Ensure a class has only one instance and provide a global access point",
          difficulty: "Intermediate",
          time: "15 min",
        },
        {
          id: "observer-pattern",
          title: "Observer Pattern",
          description:
            "Publish/subscribe event system — decouple components with events",
          difficulty: "Intermediate",
          time: "20 min",
        },
        {
          id: "factory-pattern",
          title: "Factory Pattern",
          description:
            "Create objects without specifying their exact class — flexible instantiation",
          difficulty: "Intermediate",
          time: "20 min",
        },
        {
          id: "strategy-pattern",
          title: "Strategy Pattern",
          description:
            "Define a family of algorithms and make them interchangeable at runtime",
          difficulty: "Advanced",
          time: "20 min",
        },
        {
          id: "proxy-decorator",
          title: "Proxy & Decorator",
          description:
            "Wrap objects to add behavior, validation, or logging transparently",
          difficulty: "Advanced",
          time: "25 min",
        },
      ],
    },

    /* ═══════════════════════════════════════════════════════════
       MODULE 7 — Performance & Memory
    ═══════════════════════════════════════════════════════════ */
    {
      id: "performance-memory",
      title: "Performance & Memory",
      description:
        "Write fast, memory-efficient JavaScript — debouncing, throttling, and garbage collection.",
      icon: "bi bi-speedometer2",
      color: "#ef4444",
      topics: [
        {
          id: "memory-management",
          title: "Memory Management",
          description:
            "How JavaScript allocates, uses, and reclaims memory during runtime",
          difficulty: "Advanced",
          time: "25 min",
        },
        {
          id: "garbage-collection",
          title: "Garbage Collection",
          description:
            "Mark-and-sweep, reference counting, and avoiding memory leaks",
          difficulty: "Advanced",
          time: "20 min",
        },
        {
          id: "debounce-throttle",
          title: "Debounce & Throttle",
          description:
            "Control event handler execution frequency for optimal performance",
          difficulty: "Intermediate",
          time: "20 min",
        },
        {
          id: "lazy-loading",
          title: "Lazy Loading & Code Splitting",
          description:
            "Load modules and resources on-demand for faster initial page load",
          difficulty: "Intermediate",
          time: "20 min",
        },
      ],
    },

    /* ═══════════════════════════════════════════════════════════
       MODULE 8 — Meta-Programming
    ═══════════════════════════════════════════════════════════ */
    {
      id: "meta-programming",
      title: "Meta-Programming",
      description:
        "Use Proxy, Reflect, WeakMaps, and property descriptors to write introspective code.",
      icon: "bi bi-braces-asterisk",
      color: "#f97316",
      topics: [
        {
          id: "proxy-reflect",
          title: "Proxy & Reflect API",
          description:
            "Intercept and customize fundamental JavaScript operations at runtime",
          difficulty: "Advanced",
          time: "30 min",
        },
        {
          id: "weakmap-weakref",
          title: "WeakMap, WeakSet & WeakRef",
          description:
            "Memory-friendly collections that don't prevent garbage collection",
          difficulty: "Advanced",
          time: "20 min",
        },
        {
          id: "property-descriptors",
          title: "Property Descriptors",
          description:
            "Object.defineProperty, getters/setters, enumerable, configurable, writable flags",
          difficulty: "Advanced",
          time: "25 min",
        },
        {
          id: "reflect-api-methods",
          title: "Reflect API Methods",
          description:
            "Use Reflect for default behavior in Proxy traps and safe property access",
          difficulty: "Advanced",
          time: "15 min",
        },
      ],
    },

    /* ═══════════════════════════════════════════════════════════
       MODULE 9 — Browser & Web APIs
    ═══════════════════════════════════════════════════════════ */
    {
      id: "browser-web-apis",
      title: "Browser & Web APIs",
      description:
        "Advanced browser APIs — Service Workers, WebSockets, IndexedDB, and Observers.",
      icon: "bi bi-globe2",
      color: "#0ea5e9",
      topics: [
        {
          id: "service-workers",
          title: "Service Workers",
          description:
            "Offline-first apps, background sync, and push notification support",
          difficulty: "Advanced",
          time: "35 min",
        },
        {
          id: "websockets",
          title: "WebSockets",
          description:
            "Real-time bidirectional communication between client and server",
          difficulty: "Advanced",
          time: "25 min",
        },
        {
          id: "indexeddb",
          title: "IndexedDB",
          description:
            "Large-scale client-side structured data storage for complex apps",
          difficulty: "Advanced",
          time: "30 min",
        },
        {
          id: "intersection-observer",
          title: "Intersection Observer",
          description:
            "Efficiently detect when elements enter or exit the viewport",
          difficulty: "Intermediate",
          time: "15 min",
        },
        {
          id: "web-workers",
          title: "Web Workers",
          description:
            "Run JavaScript in background threads for CPU-intensive tasks",
          difficulty: "Advanced",
          time: "25 min",
        },
      ],
    },

    /* ═══════════════════════════════════════════════════════════
       MODULE 10 — ES Modules & Build Tools
    ═══════════════════════════════════════════════════════════ */
    {
      id: "es-modules",
      title: "ES Modules & Build Tools",
      description:
        "Modern module systems, dynamic imports, tree shaking, and bundler concepts.",
      icon: "bi bi-puzzle-fill",
      color: "#84cc16",
      topics: [
        {
          id: "es-modules-deep",
          title: "ES Modules Deep Dive",
          description:
            "Static imports, named exports, default exports, and live bindings",
          difficulty: "Intermediate",
          time: "25 min",
        },
        {
          id: "dynamic-imports",
          title: "Dynamic Imports",
          description:
            "Load modules conditionally at runtime with the import() function",
          difficulty: "Intermediate",
          time: "15 min",
        },
        {
          id: "tree-shaking",
          title: "Tree Shaking",
          description:
            "Eliminate dead code in bundled JavaScript for smaller production builds",
          difficulty: "Intermediate",
          time: "15 min",
        },
        {
          id: "bundler-concepts",
          title: "Bundler Concepts",
          description:
            "How Vite, Webpack, and Rollup transform your source into production code",
          difficulty: "Intermediate",
          time: "20 min",
        },
      ],
    },

    /* ═══════════════════════════════════════════════════════════
       MODULE 11 — TypeScript Essentials
    ═══════════════════════════════════════════════════════════ */
    {
      id: "typescript-essentials",
      title: "TypeScript Essentials",
      description:
        "Static types, generics, utility types, and type narrowing for safer JavaScript.",
      icon: "bi bi-shield-check",
      color: "#3b82f6",
      topics: [
        {
          id: "type-system-basics",
          title: "TypeScript Type System",
          description:
            "Primitive types, union types, intersection types, and type aliases",
          difficulty: "Beginner",
          time: "25 min",
        },
        {
          id: "generics",
          title: "Generics",
          description:
            "Write flexible, reusable functions and classes with type parameters",
          difficulty: "Intermediate",
          time: "30 min",
        },
        {
          id: "utility-types",
          title: "Utility Types",
          description:
            "Partial, Required, Pick, Omit, Record, ReturnType and more built-in helpers",
          difficulty: "Intermediate",
          time: "20 min",
        },
        {
          id: "type-guards",
          title: "Type Guards & Narrowing",
          description:
            "Narrow types with typeof, instanceof, in operator, and custom type guards",
          difficulty: "Intermediate",
          time: "20 min",
        },
      ],
    },

    /* ═══════════════════════════════════════════════════════════
       MODULE 12 — Testing & Quality
    ═══════════════════════════════════════════════════════════ */
    {
      id: "testing-quality",
      title: "Testing & Quality",
      description:
        "Unit testing, TDD, mocking, and integration testing for reliable JavaScript code.",
      icon: "bi bi-check2-circle",
      color: "#22c55e",
      topics: [
        {
          id: "unit-testing",
          title: "Unit Testing Concepts",
          description:
            "Test individual functions in isolation with Jest or Vitest",
          difficulty: "Intermediate",
          time: "25 min",
        },
        {
          id: "tdd",
          title: "Test-Driven Development",
          description:
            "Write tests first, then implementation — the red-green-refactor cycle",
          difficulty: "Intermediate",
          time: "20 min",
        },
        {
          id: "mocking-spies",
          title: "Mocking & Spies",
          description:
            "Replace dependencies with mocks and track function calls with spies",
          difficulty: "Advanced",
          time: "25 min",
        },
        {
          id: "integration-testing",
          title: "Integration Testing",
          description:
            "Test how multiple components work together in realistic scenarios",
          difficulty: "Advanced",
          time: "30 min",
        },
      ],
    },

    /* ═══════════════════════════════════════════════════════════
       MODULE 13 — Algorithms & Data Structures
    ═══════════════════════════════════════════════════════════ */
    {
      id: "algorithms-ds",
      title: "Algorithms & Data Structures",
      description:
        "Implement common data structures and algorithms in idiomatic JavaScript.",
      icon: "bi bi-diagram-2-fill",
      color: "#ec4899",
      topics: [
        {
          id: "linked-lists",
          title: "Linked Lists in JS",
          description:
            "Singly and doubly linked lists — implementation and real use cases",
          difficulty: "Advanced",
          time: "30 min",
        },
        {
          id: "trees-graphs",
          title: "Trees & Graphs",
          description:
            "Binary trees, BSTs, DFS and BFS traversal in JavaScript",
          difficulty: "Advanced",
          time: "35 min",
        },
        {
          id: "hash-maps",
          title: "Hash Maps & Sets",
          description:
            "Efficient lookups using Map and Set — O(1) operations and patterns",
          difficulty: "Intermediate",
          time: "20 min",
        },
        {
          id: "algorithm-complexity",
          title: "Algorithm Complexity (Big O)",
          description:
            "Analyze time and space complexity of your JavaScript code",
          difficulty: "Intermediate",
          time: "25 min",
        },
      ],
    },
  ],
};

/* ─────────────────────────────────────────────────────────────────────────────
   getAllTopics()
   Flattens all topics from every module into one array, attaching parent
   module metadata so each topic can be displayed independently.

   @returns {Array<{
     id, title, description, difficulty, time,
     moduleId, moduleTitle, moduleColor, moduleIcon
   }>}
───────────────────────────────────────────────────────────────────────────── */
export function getAllTopics() {
  const result = [];
  JsAdvTopicsData.modules.forEach((mod) => {
    mod.topics.forEach((topic) => {
      result.push({
        ...topic,
        moduleId: mod.id,
        moduleTitle: mod.title,
        moduleColor: mod.color,
        moduleIcon: mod.icon,
      });
    });
  });
  return result;
}

export default JsAdvTopicsData;
