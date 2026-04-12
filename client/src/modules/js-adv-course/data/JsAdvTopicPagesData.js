// src/data/JsAdvTopicPagesData.js
// Complete topic detail data — descriptions, key points, and runnable JS examples

const JsAdvTopicPagesData = [
  /* ═══════════════════════════════════════════════════════════
     MODULE 1 — Closures & Scope
  ═══════════════════════════════════════════════════════════ */
  {
    id: "lexical-environment",
    topicId: "lexical-environment",
    title: "Lexical Environment",
    category: "Closures & Scope",
    difficulty: "Intermediate",
    time: "20 min",
    description:
      "A Lexical Environment is the internal data structure that the JavaScript engine creates at parse time — before any code runs — to record where variables and functions are declared. Every execution context carries one, and they chain together to form the scope chain. Understanding lexical environments is the foundation for truly mastering closures, hoisting, and the this keyword.",
    keyPoints: [
      "Created at parse time, not at runtime",
      "Consists of an Environment Record (stores variable bindings) and an outer reference (parent scope)",
      "Global, function, and block scopes each create their own lexical environment",
      "let/const bindings exist in the Environment Record but are inaccessible until their declaration line (TDZ)",
      "Closure = a function + a reference to its outer lexical environment",
      "Arrow functions do NOT create their own lexical environment for this",
    ],
    code: `// ─── Lexical Environment Deep Dive ───────────────────────────────

// 1. Global Lexical Environment is created first
const globalVar = 'I am global';

// 2. Each function creates its own Lexical Environment
function outer() {
  const outerVar = 'I am in outer'; // recorded in outer's env record

  function inner() {
    const innerVar = 'I am in inner'; // recorded in inner's env record

    // Scope chain: inner → outer → global
    console.log(innerVar);    // found in inner's own record
    console.log(outerVar);    // found in outer's record via chain
    console.log(globalVar);   // found in global record via chain
  }

  inner();
}
outer();

// 3. Temporal Dead Zone (TDZ) — let/const exist in the env record
//    but are not yet initialised until their line is reached
function tdz() {
  // console.log(x); // ❌ ReferenceError: Cannot access 'x' before init
  let x = 42;
  console.log('x after declaration:', x); // ✅ 42
}
tdz();

// 4. Block scope creates a new Lexical Environment
{
  let blockScoped = 'only inside this block';
  console.log('Inside block:', blockScoped);
}
// console.log(blockScoped); // ❌ ReferenceError

// 5. Demonstrating the outer reference (scope chain lookup)
const brand = 'JS.ADV';

function showBrand() {
  // 'brand' not in local env record → JS walks outer reference → finds it globally
  console.log('Brand:', brand);
}
showBrand();

console.log('All lexical environment examples complete ✅');
`,
  },

  {
    id: "closure-fundamentals",
    topicId: "closure-fundamentals",
    title: "Closure Fundamentals",
    category: "Closures & Scope",
    difficulty: "Intermediate",
    time: "25 min",
    description:
      "A closure is formed when a function retains a live reference to its outer lexical environment even after that outer function has returned. Closures are not a copy of the outer scope — they hold a live binding, meaning changes made by either the inner or outer code are reflected everywhere. They are the engine behind private state, factory functions, event handlers, and countless real-world patterns.",
    keyPoints: [
      "A closure is a function paired with a reference to its outer lexical environment",
      "The outer function does NOT need to still be running — closures outlive their creator",
      "Closures hold LIVE references, not snapshots — mutations are visible to all closures over the same variable",
      "Classic loop bug: var in a loop shares one binding; fix with let or an IIFE",
      "Used for: private state, factory functions, partial application, event handlers",
      "Each invocation of the outer function creates a NEW, independent closure",
    ],
    code: `// ─── Closure Fundamentals ─────────────────────────────────────

// 1. Basic closure: inner function outlives outer
function makeGreeting(language) {
  const greetings = { en: 'Hello', es: 'Hola', fr: 'Bonjour' };
  return function(name) {
    // 'greetings' and 'language' are closed over — still accessible
    return \`\${greetings[language] || 'Hi'}, \${name}!\`;
  };
}
const greetEN = makeGreeting('en');
const greetES = makeGreeting('es');
console.log(greetEN('Alice'));  // Hello, Alice!
console.log(greetES('Bob'));    // Hola, Bob!

// 2. Private state via closure
function createBankAccount(initialBalance) {
  let balance = initialBalance; // truly private — no way to access it directly

  return {
    deposit(amount)  { balance += amount; console.log(\`Deposited \${amount}. Balance: \${balance}\`); },
    withdraw(amount) {
      if (amount > balance) { console.log('Insufficient funds'); return; }
      balance -= amount;
      console.log(\`Withdrew \${amount}. Balance: \${balance}\`);
    },
    getBalance()     { return balance; },
  };
}
const account = createBankAccount(100);
account.deposit(50);      // Balance: 150
account.withdraw(30);     // Balance: 120
console.log(account.getBalance()); // 120
// console.log(account.balance); // undefined — truly private!

// 3. Classic loop bug and fix
const buggy = [];
for (var i = 0; i < 3; i++) {
  buggy.push(() => i); // all closures share the SAME 'i'
}
console.log('Buggy:', buggy.map(f => f())); // [3, 3, 3]

const fixed = [];
for (let j = 0; j < 3; j++) {
  fixed.push(() => j); // each iteration creates a NEW binding for j
}
console.log('Fixed:', fixed.map(f => f())); // [0, 1, 2]

// 4. Live reference demo
function counter() {
  let count = 0;
  const inc = () => ++count;
  const dec = () => --count;
  const get = () => count;
  return { inc, dec, get };
}
const c = counter();
c.inc(); c.inc(); c.inc(); c.dec();
console.log('Counter:', c.get()); // 2

console.log('Closure fundamentals complete ✅');
`,
  },

  {
    id: "module-pattern",
    topicId: "module-pattern",
    title: "Module Pattern",
    category: "Closures & Scope",
    difficulty: "Advanced",
    time: "20 min",
    description:
      "The Module Pattern uses closures to emulate private and public access modifiers — a concept JavaScript did not have natively until ES6 classes and ES modules. By returning an object literal from an IIFE (or a factory function), you expose only the methods and properties you choose, hiding implementation details. This remains one of the most important patterns in JS architecture.",
    keyPoints: [
      "Encapsulates private state using closure scope",
      'Returns a public API object — the "revealing" variant explicitly maps private fns to public names',
      "Classic version uses an IIFE to create a singleton module",
      "Factory function version creates multiple independent instances",
      "ES6 modules (import/export) are the modern native version of this pattern",
      "Prevents global namespace pollution and enforces clean API boundaries",
    ],
    code: `// ─── Module Pattern ────────────────────────────────────────────

// 1. Classic IIFE Module (singleton)
const ShoppingCart = (() => {
  // ── Private ──────────────────────────────────────────────
  let items = [];
  let discount = 0;

  function calcTotal() {
    return items.reduce((sum, item) => sum + item.price * item.qty, 0)
           * (1 - discount);
  }

  // ── Public API (Revealing Module Pattern) ────────────────
  return {
    addItem(name, price, qty = 1) {
      const existing = items.find(i => i.name === name);
      if (existing) { existing.qty += qty; }
      else { items.push({ name, price, qty }); }
      console.log(\`Added \${qty}x \${name} @ $\${price}\`);
    },
    removeItem(name) {
      items = items.filter(i => i.name !== name);
      console.log(\`Removed \${name}\`);
    },
    applyDiscount(pct) { discount = pct / 100; },
    getTotal()   { return calcTotal().toFixed(2); },
    getItems()   { return [...items]; },           // return copy, not reference
    clear()      { items = []; discount = 0; },
  };
})();

ShoppingCart.addItem('JS Book', 29.99);
ShoppingCart.addItem('Monitor', 299.99);
ShoppingCart.applyDiscount(10);
console.log('Total:', ShoppingCart.getTotal()); // ~$296.98

// 2. Factory Module — creates independent instances
function createLogger(prefix) {
  const logs = [];

  return {
    log(msg)   { const entry = \`[\${prefix}] \${msg}\`; logs.push(entry); console.log(entry); },
    warn(msg)  { const entry = \`[\${prefix}] ⚠ \${msg}\`; logs.push(entry); console.warn(entry); },
    history()  { return [...logs]; },
    clear()    { logs.length = 0; },
  };
}

const appLogger  = createLogger('APP');
const httpLogger = createLogger('HTTP');
appLogger.log('Server started');
httpLogger.log('GET /api/users 200');
appLogger.warn('Memory usage high');
console.log('App log history:', appLogger.history());
console.log('HTTP log history:', httpLogger.history()); // independent!

console.log('Module pattern complete ✅');
`,
  },

  {
    id: "iife-patterns",
    topicId: "iife-patterns",
    title: "IIFE Patterns",
    category: "Closures & Scope",
    difficulty: "Intermediate",
    time: "15 min",
    description:
      "An Immediately Invoked Function Expression (IIFE) is a function that is defined and called in the same expression. Before ES6 block scoping and modules existed, IIFEs were THE solution for creating private scopes and avoiding global variable pollution. Even today they appear in bundler output, polyfills, and SDK wrappers.",
    keyPoints: [
      "Syntax: (function() { ... })() or (() => { ... })()",
      "Creates a fresh scope — variables inside cannot leak to the outer scope",
      "The leading parenthesis converts the function declaration into an expression",
      "Common for one-time initialization code and legacy module emulation",
      "Can accept arguments: (function(win, doc) { ... })(window, document)",
      "Named IIFEs give better stack traces without polluting outer scope",
    ],
    code: `// ─── IIFE Patterns ─────────────────────────────────────────────

// 1. Classic IIFE — private scope
(function() {
  const secret = 'hidden from outer scope';
  console.log('Inside IIFE:', secret);
})();
// console.log(secret); // ❌ ReferenceError

// 2. Arrow function IIFE
(() => {
  const init = 'arrow IIFE init code';
  console.log(init);
})();

// 3. Named IIFE — better stack traces
(function initApp() {
  console.log('App initialised via named IIFE');
})();

// 4. IIFE with parameters — dependency injection
const config = { version: '2.0', env: 'production' };

(function(cfg, global) {
  // 'cfg' is a local alias — changes here do not mutate the outer 'config'
  console.log(\`App v\${cfg.version} running in \${cfg.env}\`);
  console.log('Global this:', typeof global);
})(config, globalThis);

// 5. IIFE returning a value
const PI_UTILS = (function() {
  const PI = Math.PI;
  return {
    circumference: r => 2 * PI * r,
    area:          r => PI * r * r,
  };
})();
console.log('Circumference r=5:', PI_UTILS.circumference(5).toFixed(4));
console.log('Area r=5:',         PI_UTILS.area(5).toFixed(4));

// 6. Async IIFE — top-level await substitute
(async function() {
  const simulatedFetch = () =>
    new Promise(resolve => setTimeout(() => resolve({ data: 'API result' }), 50));

  const result = await simulatedFetch();
  console.log('Async IIFE result:', result.data);
})();

console.log('IIFE patterns complete ✅');
`,
  },

  {
    id: "memoization",
    topicId: "memoization",
    title: "Memoization",
    category: "Closures & Scope",
    difficulty: "Advanced",
    time: "20 min",
    description:
      "Memoization is an optimization technique that caches the return value of a function for a given set of arguments. On subsequent calls with identical arguments, the cached result is returned immediately — bypassing expensive computation. JavaScript closures provide a natural home for the cache Map, making memoization elegant to implement from scratch.",
    keyPoints: [
      "Cache results by serializing arguments as a Map key",
      "Only suitable for pure functions (same input → same output, no side effects)",
      "Generic memoize() wrapper uses closures to maintain per-function cache",
      "Use Map over plain object for non-string keys and WeakMap for object keys (allows GC)",
      "Fibonacci without memoization: O(2ⁿ) — with memoization: O(n)",
      "React.useMemo and React.useCallback are framework-level memoization tools",
    ],
    code: `// ─── Memoization ────────────────────────────────────────────────

// 1. Generic memoize wrapper
function memoize(fn) {
  const cache = new Map();

  return function(...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      console.log(\`Cache HIT  [\${key}]\`);
      return cache.get(key);
    }
    console.log(\`Cache MISS [\${key}] — computing...\`);
    const result = fn.apply(this, args);
    cache.set(key, result);
    return result;
  };
}

// 2. Expensive computation example
function slowFactorial(n) {
  if (n <= 1) return 1;
  return n * slowFactorial(n - 1);
}
const fastFactorial = memoize(slowFactorial);

console.log(fastFactorial(10));  // MISS — computes
console.log(fastFactorial(10));  // HIT  — instant
console.log(fastFactorial(5));   // MISS
console.log(fastFactorial(5));   // HIT

// 3. Fibonacci — classic memoization showcase
const fib = memoize(function fibonacci(n) {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
});

console.time('fib(40)');
console.log('fib(40):', fib(40));
console.timeEnd('fib(40)');

// 4. Memoize with WeakMap for object arguments (GC-friendly)
function memoizeWeak(fn) {
  const cache = new WeakMap();
  return function(obj, ...rest) {
    if (!cache.has(obj)) {
      cache.set(obj, fn.call(this, obj, ...rest));
    }
    return cache.get(obj);
  };
}

const processUser = memoizeWeak((user) => ({
  ...user,
  displayName: \`\${user.firstName} \${user.lastName}\`,
  initials: \`\${user.firstName[0]}\${user.lastName[0]}\`,
}));

const user = { firstName: 'Jane', lastName: 'Doe' };
console.log(processUser(user));
console.log(processUser(user)); // returned from WeakMap cache

console.log('Memoization complete ✅');
`,
  },

  /* ═══════════════════════════════════════════════════════════
     MODULE 2 — Prototypes & Inheritance
  ═══════════════════════════════════════════════════════════ */
  {
    id: "prototype-chain",
    topicId: "prototype-chain",
    title: "The Prototype Chain",
    category: "Prototypes & Inheritance",
    difficulty: "Intermediate",
    time: "25 min",
    description:
      "Every JavaScript object has an internal [[Prototype]] slot that points to another object or null. When you access a property that does not exist on an object, the engine walks up this chain of prototypes until it finds it or reaches null. This prototype chain is the foundation of JavaScript's inheritance model and powers methods like .toString(), .hasOwnProperty(), and Array methods.",
    keyPoints: [
      "[[Prototype]] is the internal link; __proto__ is its accessor (use Object.getPrototypeOf instead)",
      "Property lookup: own properties first → [[Prototype]] → [[Prototype]] of [[Prototype]] → null",
      "Object.prototype is at the top of every chain — it provides toString, hasOwnProperty, etc.",
      "Arrays: instance → Array.prototype → Object.prototype → null",
      "Functions: instance → Function.prototype → Object.prototype → null",
      "Setting a property always operates on the object itself, never the prototype",
    ],
    code: `// ─── Prototype Chain ────────────────────────────────────────────

// 1. Basic chain inspection
const obj = { x: 1 };
console.log(Object.getPrototypeOf(obj) === Object.prototype); // true
console.log(Object.getPrototypeOf(Object.prototype));          // null (top!)

// 2. Property lookup traversal
const animal = {
  breathe() { return 'breathing...'; },
};
const dog = Object.create(animal); // dog[[Prototype]] = animal
dog.bark = () => 'Woof!';

const labrador = Object.create(dog);
labrador.fetch = () => 'Fetching!';

console.log(labrador.fetch());   // own property
console.log(labrador.bark());    // found on dog (one level up)
console.log(labrador.breathe()); // found on animal (two levels up)
console.log(labrador.toString()); // found on Object.prototype

// 3. hasOwnProperty vs in operator
console.log(labrador.hasOwnProperty('fetch'));   // true  — own
console.log(labrador.hasOwnProperty('bark'));    // false — inherited
console.log('bark' in labrador);                 // true  — checks chain

// 4. Shadowing — overriding a prototype method
function Vehicle(type) { this.type = type; }
Vehicle.prototype.describe = function() {
  return \`I am a \${this.type}\`;
};

function Car(brand) {
  Vehicle.call(this, 'car');
  this.brand = brand;
}
Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

// Shadow describe on Car instances
Car.prototype.describe = function() {
  return \`\${this.brand} — \${Vehicle.prototype.describe.call(this)}\`;
};

const tesla = new Car('Tesla');
console.log(tesla.describe());                          // Tesla — I am a car
console.log(tesla instanceof Car);                      // true
console.log(tesla instanceof Vehicle);                  // true

// 5. Inspecting the full chain
let proto = tesla;
let depth = 0;
while (proto !== null) {
  console.log(\`Level \${depth++}:\`, proto.constructor?.name || 'Object');
  proto = Object.getPrototypeOf(proto);
}

console.log('Prototype chain complete ✅');
`,
  },

  {
    id: "object-create",
    topicId: "object-create",
    title: "Object.create()",
    category: "Prototypes & Inheritance",
    difficulty: "Intermediate",
    time: "15 min",
    description:
      "Object.create(proto, propertiesObject) creates a brand-new object whose [[Prototype]] is set to the proto argument. It is the purest form of prototypal inheritance — no constructor functions, no classes, just direct object-to-object delegation. Understanding Object.create() is essential for writing lightweight, allocation-efficient code and for understanding how class syntax works under the hood.",
    keyPoints: [
      "Object.create(null) creates a truly empty object with NO prototype (useful for maps)",
      "Second argument mirrors Object.defineProperties — use for non-enumerable, read-only props",
      "Enables differential inheritance: only store what differs from the prototype",
      "Equivalent to: const obj = {}; Object.setPrototypeOf(obj, proto); — but faster",
      "Object.create is how Object.setPrototypeOf chains work for class extends",
      "Prefer over direct __proto__ assignment for performance and clarity",
    ],
    code: `// ─── Object.create() ────────────────────────────────────────────

// 1. Basic usage
const personProto = {
  greet() { return \`Hello, I'm \${this.name} (\${this.age})\`; },
  birthday() { this.age++; return this.age; },
};

const alice = Object.create(personProto);
alice.name = 'Alice';
alice.age  = 30;
console.log(alice.greet());   // Hello, I'm Alice (30)
console.log(alice.birthday()); // 31

// 2. Pure null-prototype object — clean dictionary (no hasOwnProperty etc.)
const dict = Object.create(null);
dict.foo = 'bar';
dict.hello = 'world';
console.log('dict has no prototype:', Object.getPrototypeOf(dict) === null);
// Safe to store user-supplied keys — no prototype pollution risk!

// 3. Property descriptors as second argument
const config = Object.create(Object.prototype, {
  MAX_RETRIES: {
    value: 3,
    writable: false,     // cannot reassign
    enumerable: true,
    configurable: false,
  },
  BASE_URL: {
    value: 'https://api.example.com',
    writable: false,
    enumerable: true,
    configurable: false,
  },
});
console.log(config.MAX_RETRIES); // 3
config.MAX_RETRIES = 99;          // silently fails in sloppy mode
console.log(config.MAX_RETRIES); // still 3

// 4. Multi-level inheritance chain with Object.create
const Vehicle = { type: 'vehicle', move() { return \`\${this.name} moves\`; } };
const Car     = Object.create(Vehicle);
Car.type = 'car';
Car.honk = function() { return \`\${this.name} beeps!\`; };

const myCar = Object.create(Car);
myCar.name = 'Tesla';
console.log(myCar.move());   // Tesla moves  (found on Vehicle)
console.log(myCar.honk());   // Tesla beeps! (found on Car)
console.log(myCar.type);     // car           (shadows Vehicle.type)

console.log(Object.create() + ' complete ✅');
`,
  },

  {
    id: "constructor-functions",
    topicId: "constructor-functions",
    title: "Constructor Functions",
    category: "Prototypes & Inheritance",
    difficulty: "Intermediate",
    time: "20 min",
    description:
      "Constructor functions predate ES6 classes and are what the class syntax compiles down to. When called with new, JavaScript automatically creates a blank object, sets its [[Prototype]] to the constructor's .prototype property, binds this to that object, and returns it. Mastering constructor functions gives you deep insight into what class syntax actually does.",
    keyPoints: [
      "new does 4 things: creates object, sets [[Prototype]], binds this, returns the object",
      "Methods belong on Constructor.prototype, not on this — shared by all instances",
      "The .constructor property on every prototype points back to the constructor function",
      "Forgetting new is a common bug — guard with: if (!(this instanceof Ctor)) return new Ctor()",
      "Static methods live on the constructor function itself, not on .prototype",
      "ES6 class syntax is syntactic sugar — it still uses prototypes and constructor functions",
    ],
    code: `// ─── Constructor Functions ──────────────────────────────────────

// 1. Basic constructor function
function Person(name, age) {
  // 'new' makes 'this' point to a fresh object
  this.name = name;
  this.age  = age;
  // ⚠ Don't put methods on 'this' — they'd be recreated per instance
}

// Methods on prototype — shared across ALL instances (efficient)
Person.prototype.greet = function() {
  return \`Hi, I'm \${this.name} and I'm \${this.age} years old.\`;
};
Person.prototype.birthday = function() {
  this.age++;
  return \`Happy birthday \${this.name}! Now \${this.age}.\`;
};

// Static method — on the constructor itself, not the prototype
Person.create = (name, age) => new Person(name, age);

const alice = new Person('Alice', 28);
const bob   = Person.create('Bob', 32);
console.log(alice.greet());
console.log(bob.birthday());

// 2. Inheritance with constructor functions
function Employee(name, age, role) {
  Person.call(this, name, age);  // call parent constructor
  this.role = role;
}
// Set up prototype chain
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee; // restore constructor reference

Employee.prototype.introduce = function() {
  return \`\${this.greet()} I work as a \${this.role}.\`;
};

const emp = new Employee('Carol', 26, 'Engineer');
console.log(emp.introduce());
console.log(emp instanceof Employee); // true
console.log(emp instanceof Person);   // true

// 3. Guard against missing 'new'
function SafePoint(x, y) {
  if (!(this instanceof SafePoint)) return new SafePoint(x, y);
  this.x = x;
  this.y = y;
}
SafePoint.prototype.toString = function() { return \`(\${this.x}, \${this.y})\`; };

const p1 = new SafePoint(1, 2);
const p2 = SafePoint(3, 4); // works even without 'new'!
console.log(p1.toString(), p2.toString());

console.log('Constructor functions complete ✅');
`,
  },

  {
    id: "es6-classes",
    topicId: "es6-classes",
    title: "ES6 Classes Deep Dive",
    category: "Prototypes & Inheritance",
    difficulty: "Intermediate",
    time: "30 min",
    description:
      "ES6 classes are syntactic sugar over constructor functions and prototypal inheritance — they compile to the exact same prototype-based mechanism under the hood. But classes also add powerful new features: private fields (#), static blocks, getter/setter, and class fields that make object-oriented code in JavaScript cleaner and more explicit.",
    keyPoints: [
      'class is syntactic sugar — typeof ClassName === "function" is still true',
      "Private fields (#name) are truly private — not enumerable, not accessible via bracket notation",
      "static methods/fields belong to the class itself, not instances",
      "Getter/setter pairs provide computed property access syntax",
      "extends + super wire up the prototype chain automatically",
      "Class fields (without #) are own properties set before the constructor body runs",
    ],
    code: `// ─── ES6 Classes Deep Dive ──────────────────────────────────────

class BankAccount {
  // Public class field
  currency = 'USD';
  // Private fields (truly inaccessible from outside)
  #balance;
  #transactions = [];

  constructor(owner, initialBalance = 0) {
    this.owner = owner;
    this.#balance = initialBalance;
  }

  // Getter — access like a property
  get balance() { return this.#balance; }

  // Static factory method
  static open(owner, initial) { return new BankAccount(owner, initial); }

  // Instance methods
  deposit(amount) {
    if (amount <= 0) throw new Error('Deposit must be positive');
    this.#balance += amount;
    this.#transactions.push({ type: 'deposit', amount, date: new Date().toISOString() });
    return this;  // enable chaining
  }

  withdraw(amount) {
    if (amount > this.#balance) throw new Error('Insufficient funds');
    this.#balance -= amount;
    this.#transactions.push({ type: 'withdrawal', amount, date: new Date().toISOString() });
    return this;
  }

  get statement() {
    return this.#transactions.map(t =>
      \`\${t.type.toUpperCase().padEnd(12)} \${t.amount.toString().padStart(8)} \${this.currency}\`
    ).join('\\n');
  }

  toString() { return \`[\${this.owner}] \${this.currency} \${this.#balance}\`; }
}

// Inheritance
class SavingsAccount extends BankAccount {
  #interestRate;

  constructor(owner, balance, rate) {
    super(owner, balance);      // MUST call super before accessing 'this'
    this.#interestRate = rate;
  }

  applyInterest() {
    const interest = this.balance * this.#interestRate;
    this.deposit(interest);
    console.log(\`Interest applied: \${interest.toFixed(2)}\`);
    return this;
  }
}

const acc = BankAccount.open('Alice', 500);
acc.deposit(200).deposit(100).withdraw(50);
console.log(acc.toString());
console.log(acc.statement);

const savings = new SavingsAccount('Bob', 1000, 0.05);
savings.applyInterest();
console.log(savings.toString());

// Verify privacy
console.log('balance via getter:', acc.balance);
// console.log(acc.#balance); // SyntaxError — truly private!

console.log('ES6 Classes complete ✅');
`,
  },

  {
    id: "mixins-composition",
    topicId: "mixins-composition",
    title: "Mixins & Composition",
    category: "Prototypes & Inheritance",
    difficulty: "Advanced",
    time: "25 min",
    description:
      'Mixins are objects or functions that provide reusable behaviour that can be mixed into multiple classes or objects without establishing an inheritance relationship. Composition ("has-a") is often preferred over inheritance ("is-a") because it avoids the fragile base class problem and tight coupling. The pattern "favour object composition over class inheritance" is one of the most important design principles in software.',
    keyPoints: [
      "A mixin is simply an object whose methods are copied onto a target prototype",
      "Object.assign(Target.prototype, MixinA, MixinB) applies mixins to a class",
      "Mixin functions that take a superclass and return an extended class compose cleanly",
      "Composition pattern: build an object by delegating to specialized helper objects",
      "Avoids the diamond inheritance problem inherent in classical OOP",
      '"Favour composition over inheritance" — GoF Design Patterns',
    ],
    code: `// ─── Mixins & Composition ────────────────────────────────────────

// ── Mixin objects ──────────────────────────────────────────────
const Serializable = {
  serialize()   { return JSON.stringify(this); },
  toJSON()      { return { ...this }; },
};

const Validatable = {
  validate(schema) {
    for (const [key, rule] of Object.entries(schema)) {
      if (rule.required && this[key] == null) {
        throw new Error(\`Validation failed: \${key} is required\`);
      }
      if (rule.type && typeof this[key] !== rule.type) {
        throw new Error(\`Validation failed: \${key} must be \${rule.type}\`);
      }
    }
    return true;
  },
};

const EventEmitter = {
  _events: null,
  on(event, listener) {
    if (!this._events) this._events = {};
    (this._events[event] ??= []).push(listener);
  },
  emit(event, ...args) {
    (this._events?.[event] || []).forEach(l => l(...args));
  },
  off(event, listener) {
    if (this._events?.[event]) {
      this._events[event] = this._events[event].filter(l => l !== listener);
    }
  },
};

// Apply multiple mixins to a class
class User {
  constructor(name, email) {
    this.name  = name;
    this.email = email;
  }
}
Object.assign(User.prototype, Serializable, Validatable, EventEmitter);

const u = new User('Alice', 'alice@example.com');
console.log(u.serialize());
console.log(u.validate({ name: { required: true, type: 'string' }, email: { required: true, type: 'string' } }));

u.on('login', (ip) => console.log(\`User \${u.name} logged in from \${ip}\`));
u.emit('login', '192.168.1.1');

// ── Functional mixin (class factory) ──────────────────────────
const Timestamped = (Base) => class extends Base {
  constructor(...args) { super(...args); this.createdAt = new Date(); }
  get age() { return Math.floor((Date.now() - this.createdAt) / 1000) + 's'; }
};

const Activatable = (Base) => class extends Base {
  #active = false;
  activate()   { this.#active = true;  console.log(\`\${this.name} activated\`); }
  deactivate() { this.#active = false; console.log(\`\${this.name} deactivated\`); }
  get isActive() { return this.#active; }
};

class BaseEntity { constructor(name) { this.name = name; } }
class SmartDevice extends Activatable(Timestamped(BaseEntity)) {}

const device = new SmartDevice('Smart Lamp');
device.activate();
console.log('Active:', device.isActive);
console.log('Created at:', device.createdAt.toISOString());

console.log('Mixins & Composition complete ✅');
`,
  },

  /* ═══════════════════════════════════════════════════════════
     MODULE 3 — Advanced Functions
  ═══════════════════════════════════════════════════════════ */
  {
    id: "currying",
    topicId: "currying",
    title: "Currying & Partial Application",
    category: "Advanced Functions",
    difficulty: "Advanced",
    time: "25 min",
    description:
      'Currying transforms a function that takes multiple arguments into a sequence of functions each taking one argument: f(a, b, c) → f(a)(b)(c). Partial application "pre-fills" some arguments to create a specialized function. Both techniques improve reusability, enable point-free programming, and are cornerstones of functional JavaScript.',
    keyPoints: [
      "Currying: f(a,b,c) → f(a)(b)(c) — each call returns a new function until all args are provided",
      "Partial application: supply some args now, rest later — not necessarily one-at-a-time",
      "Automatic curry() wrapper uses fn.length to know when all args are received",
      "Enables point-free style: const double = multiply(2) — no need to mention the argument",
      "Works beautifully with compose/pipe pipelines",
      "Lodash/Ramda _.curry wraps functions for both curried and normal call styles",
    ],
    code: `// ─── Currying & Partial Application ─────────────────────────────

// 1. Manual currying
const add = a => b => c => a + b + c;
console.log(add(1)(2)(3)); // 6

const add5 = add(5);       // partially applied
const add5and3 = add5(3);  // still partially applied
console.log(add5and3(2));  // 10

// 2. Generic auto-curry wrapper
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);         // all args received — call original
    }
    return function(...args2) {            // return a function waiting for more
      return curried.apply(this, args.concat(args2));
    };
  };
}

const multiply = curry((a, b, c) => a * b * c);
console.log(multiply(2)(3)(4));   // 24
console.log(multiply(2, 3)(4));   // 24 — mixed style also works
console.log(multiply(2)(3, 4));   // 24
console.log(multiply(2, 3, 4));   // 24 — normal call still works

// 3. Real-world: curried validator
const isGreaterThan = curry((min, value) => value > min);
const isPositive    = isGreaterThan(0);
const isAdult       = isGreaterThan(17);

console.log([5, -3, 18, 0, 16].map(isPositive)); // [true, false, true, false, false]
console.log([15, 18, 20, 16].map(isAdult));       // [false, true, true, false]

// 4. Partial application (differs from currying: supply N args at once)
function partial(fn, ...presetArgs) {
  return function(...laterArgs) {
    return fn(...presetArgs, ...laterArgs);
  };
}

const log = (level, timestamp, message) =>
  console.log(\`[\${level}] \${timestamp}: \${message}\`);

const logError = partial(log, 'ERROR', new Date().toISOString());
logError('Connection timeout');
logError('Invalid token');

// 5. Point-free style with curried functions
const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);
const double = multiply(2)(1); // = 2... let me do it differently
const triple = curry((a, b) => a * b)(3);

const transform = pipe(
  x => x + 10,
  triple,
  x => x - 2,
);
console.log(transform(5)); // (5+10)*3 - 2 = 43

console.log('Currying & Partial Application complete ✅');
`,
  },

  {
    id: "function-composition",
    topicId: "function-composition",
    title: "Function Composition",
    category: "Advanced Functions",
    difficulty: "Advanced",
    time: "20 min",
    description:
      "Function composition is the act of combining simple functions to build more complex ones. The output of each function becomes the input of the next. compose(f, g)(x) = f(g(x)) — right-to-left; pipe(f, g)(x) = g(f(x)) — left-to-right. This pattern produces small, testable, single-purpose functions that are assembled into powerful pipelines.",
    keyPoints: [
      "compose(...fns) applies functions right-to-left: compose(f,g,h)(x) = f(g(h(x)))",
      "pipe(...fns) applies left-to-right (more readable for data transformation pipelines)",
      "Each function in the pipeline should be pure and unary (single argument)",
      "Transducers are composable, high-performance data transformations",
      "Point-free style: define data transformations without mentioning the data argument",
      "Works naturally with curried functions — combine library of small utilities",
    ],
    code: `// ─── Function Composition ────────────────────────────────────────

// 1. compose — right to left
const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);

// 2. pipe — left to right (usually more readable)
const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);

// 3. Small utility functions
const trim        = s  => s.trim();
const toLowerCase = s  => s.toLowerCase();
const capitalize  = s  => s.charAt(0).toUpperCase() + s.slice(1);
const removeSpaces = s => s.replace(/\\s+/g, '-');
const addPrefix   = prefix => s => \`\${prefix}-\${s}\`;

// 4. Compose pipeline — create URL slug from title
const toSlug = pipe(trim, toLowerCase, removeSpaces, addPrefix('post'));
console.log(toSlug('  Advanced JavaScript Patterns  '));
// → post-advanced-javascript-patterns

// 5. compose vs pipe — same result, different order
const formatName = compose(capitalize, trim, toLowerCase);
const formatName2 = pipe(toLowerCase, trim, capitalize);
console.log(formatName('  jAVASCRIPT  '));   // Javascript
console.log(formatName2('  jAVASCRIPT  '));  // Javascript

// 6. Composing async functions (promise-based pipe)
const pipeAsync = (...fns) => x =>
  fns.reduce((promise, fn) => promise.then(fn), Promise.resolve(x));

const fetchUser    = id  => Promise.resolve({ id, name: 'Alice', score: 85 });
const addRank      = user => ({ ...user, rank: user.score >= 80 ? 'Gold' : 'Silver' });
const formatOutput = user => \`[\${user.rank}] \${user.name} (id: \${user.id})\`;

const getUserDisplay = pipeAsync(fetchUser, addRank, formatOutput);
getUserDisplay(42).then(console.log); // [Gold] Alice (id: 42)

// 7. Real-world: data transformation pipeline
const products = [
  { name: 'JS Course', price: 99, category: 'education', inStock: true },
  { name: 'CSS Guide', price: 49, category: 'education', inStock: false },
  { name: 'Laptop',    price: 999, category: 'tech',     inStock: true },
];

const filterInStock   = items => items.filter(i => i.inStock);
const filterCategory  = cat  => items => items.filter(i => i.category === cat);
const applyDiscount   = pct  => items => items.map(i => ({ ...i, price: i.price * (1 - pct/100) }));
const sortByPrice     = items => [...items].sort((a, b) => a.price - b.price);

const getDeals = pipe(
  filterInStock,
  filterCategory('education'),
  applyDiscount(20),
  sortByPrice,
);
console.log(getDeals(products));

console.log('Function Composition complete ✅');
`,
  },

  {
    id: "generators",
    topicId: "generators",
    title: "Generators & Iterators",
    category: "Advanced Functions",
    difficulty: "Advanced",
    time: "30 min",
    description:
      "Generator functions (function*) can pause their execution and resume later, remembering their state across resumptions. They implement the iterator protocol automatically and are powerful tools for lazy evaluation, infinite sequences, async control flow (the predecessor to async/await), and elegant state machines.",
    keyPoints: [
      "function* declares a generator; yield pauses and returns a value",
      "Calling a generator returns an iterator object with .next(), .return(), .throw()",
      ".next() resumes execution until the next yield; returns { value, done }",
      "yield* delegates to another iterable/generator",
      "Two-way communication: you can pass a value INTO a generator via next(value)",
      "Generators are lazy — values computed on demand, enabling infinite sequences",
    ],
    code: `// ─── Generators & Iterators ─────────────────────────────────────

// 1. Basic generator
function* counter(start = 0, step = 1) {
  let current = start;
  while (true) {
    const reset = yield current;
    current = reset !== undefined ? reset : current + step;
  }
}

const gen = counter(0, 2);
console.log(gen.next().value);      // 0
console.log(gen.next().value);      // 2
console.log(gen.next().value);      // 4
console.log(gen.next(100).value);   // 100 (reset!) — value sent INTO generator
console.log(gen.next().value);      // 102

// 2. Finite generator — iterating with for...of
function* range(start, end, step = 1) {
  for (let i = start; i < end; i += step) {
    yield i;
  }
}
console.log([...range(0, 10, 2)]); // [0, 2, 4, 6, 8]

// 3. Infinite Fibonacci sequence (lazy!)
function* fibonacci() {
  let [a, b] = [0, 1];
  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}

function take(n, iterable) {
  const result = [];
  for (const val of iterable) {
    result.push(val);
    if (result.length >= n) break;
  }
  return result;
}
console.log('First 10 Fibonacci:', take(10, fibonacci()));

// 4. yield* — generator delegation
function* letters() { yield 'a'; yield 'b'; yield 'c'; }
function* digits()  { yield 1;   yield 2;   yield 3;   }
function* combined() {
  yield* letters();
  yield '-';
  yield* digits();
}
console.log([...combined()]); // ['a','b','c','-',1,2,3]

// 5. Custom iterable object using Symbol.iterator
class Range {
  constructor(start, end) { this.start = start; this.end = end; }

  [Symbol.iterator]() {
    let current = this.start;
    const end   = this.end;
    return {
      next() {
        return current <= end
          ? { value: current++, done: false }
          : { value: undefined, done: true };
      },
    };
  }
}

for (const n of new Range(1, 5)) {
  process?.stdout?.write(n + ' ') || console.log(n);
}
console.log([...new Range(10, 15)]);

console.log('Generators & Iterators complete ✅');
`,
  },

  {
    id: "symbols-iterables",
    topicId: "symbols-iterables",
    title: "Symbols & Iterables",
    category: "Advanced Functions",
    difficulty: "Advanced",
    time: "20 min",
    description:
      "Symbol is a primitive type introduced in ES6 that creates unique, non-colliding property keys. Well-known symbols (Symbol.iterator, Symbol.toPrimitive, Symbol.hasInstance, etc.) let you hook into JavaScript language behaviours. By implementing Symbol.iterator, any object becomes iterable — usable in for...of, spread, destructuring, and Array.from.",
    keyPoints: [
      "Symbol() creates a unique primitive — no two Symbol() calls are equal",
      "Symbol.for(key) creates/retrieves a global symbol — useful across modules",
      "Well-known symbols customise built-in language operations",
      "Symbol.iterator: makes an object iterable (for...of, spread, destructuring)",
      "Symbol.toPrimitive: controls how an object converts to a primitive (string/number/default)",
      "Symbols used as property keys are non-enumerable by Object.keys — hidden from for...in",
    ],
    code: `// ─── Symbols & Iterables ─────────────────────────────────────────

// 1. Symbol basics
const sym1 = Symbol('description');
const sym2 = Symbol('description');
console.log(sym1 === sym2);          // false — always unique
console.log(sym1.toString());        // Symbol(description)
console.log(typeof sym1);            // 'symbol'

// 2. Symbol as non-colliding object key
const ID      = Symbol('id');
const SECRET  = Symbol('secret');

const user = {
  name:    'Alice',
  [ID]:    123,
  [SECRET]: 'password123',
};
console.log(user[ID]);                       // 123
console.log(Object.keys(user));              // ['name'] — symbols hidden!
console.log(Object.getOwnPropertySymbols(user)); // [Symbol(id), Symbol(secret)]

// 3. Global symbol registry
const s1 = Symbol.for('app.token');
const s2 = Symbol.for('app.token');
console.log(s1 === s2);  // true — same global symbol
console.log(Symbol.keyFor(s1)); // 'app.token'

// 4. Symbol.iterator — make any object iterable
class LinkedList {
  constructor() { this.head = null; }

  push(value) {
    const node = { value, next: this.head };
    this.head = node;
    return this;
  }

  [Symbol.iterator]() {
    let current = this.head;
    return {
      next() {
        if (current) {
          const value = current.value;
          current = current.next;
          return { value, done: false };
        }
        return { value: undefined, done: true };
      },
    };
  }
}

const list = new LinkedList();
list.push(3).push(2).push(1);
console.log([...list]);         // [1, 2, 3]
for (const v of list) console.log(v);
const [first, second] = list;  // destructuring!
console.log(first, second);

// 5. Symbol.toPrimitive
class Temperature {
  constructor(celsius) { this.celsius = celsius; }

  [Symbol.toPrimitive](hint) {
    if (hint === 'number') return this.celsius;
    if (hint === 'string') return \`\${this.celsius}°C\`;
    return this.celsius;  // default
  }
}

const temp = new Temperature(100);
console.log(\`Temperature: \${temp}\`); // Temperature: 100°C
console.log(temp * 2);                 // 200

console.log('Symbols & Iterables complete ✅');
`,
  },

  {
    id: "tagged-templates",
    topicId: "tagged-templates",
    title: "Tagged Template Literals",
    category: "Advanced Functions",
    difficulty: "Advanced",
    time: "15 min",
    description:
      'A tagged template literal is a function call where the function (the "tag") receives the string parts and interpolated values as separate arguments. This gives you full control over how a template literal is processed — enabling HTML escaping, SQL sanitisation, i18n, CSS-in-JS, and DSLs. Libraries like styled-components, graphql-tag, and lit-html are all built on tagged templates.',
    keyPoints: [
      "Tag function signature: tag(strings, ...values) — strings.raw gives raw unprocessed strings",
      "Enables safe string interpolation: prevent XSS by escaping values automatically",
      "SQL template tags can parameterise queries, preventing SQL injection",
      "CSS-in-JS (styled-components) uses tagged templates for component-scoped styles",
      "The return value of the tag function can be anything — string, object, DOM node",
      "strings.length === values.length + 1 always holds",
    ],
    code: `// ─── Tagged Template Literals ───────────────────────────────────

// 1. Basic tag function anatomy
function inspect(strings, ...values) {
  console.log('Strings:', strings);
  console.log('Values: ', values);
  return strings.reduce((result, str, i) =>
    result + str + (values[i] !== undefined ? \`[[\${values[i]}]]\` : ''), '');
}
const name = 'World';
const count = 42;
console.log(inspect\`Hello \${name}, you have \${count} messages\`);

// 2. HTML escape tag — prevent XSS
function html(strings, ...values) {
  const escape = str => String(str)
    .replace(/&/g,  '&amp;')
    .replace(/</g,  '&lt;')
    .replace(/>/g,  '&gt;')
    .replace(/"/g,  '&quot;')
    .replace(/'/g,  '&#39;');

  return strings.reduce((result, str, i) =>
    result + str + (values[i] !== undefined ? escape(values[i]) : ''), '');
}

const userInput = '<script>alert("XSS")</script>';
const safeHTML  = html\`<div class="user-content">\${userInput}</div>\`;
console.log('Safe HTML:', safeHTML);
// <div class="user-content">&lt;script&gt;alert(&quot;XSS&quot;)&lt;/script&gt;</div>

// 3. SQL tag — safe parameterized queries
function sql(strings, ...values) {
  const query  = strings.reduce((q, str, i) => q + str + (values[i] !== undefined ? \`$\${i}\` : ''), '');
  return { query, params: values };
}

const userId    = 42;
const userEmail = 'alice@example.com';
const query     = sql\`SELECT * FROM users WHERE id = \${userId} AND email = \${userEmail}\`;
console.log('Query:', query.query);
// SELECT * FROM users WHERE id = $0 AND email = $1
console.log('Params:', query.params);

// 4. i18n / translation tag
const translations = {
  en: { greeting: 'Hello', farewell: 'Goodbye' },
  es: { greeting: 'Hola',  farewell: 'Adiós'   },
};
let locale = 'es';
function t(strings, ...keys) {
  return strings.reduce((result, str, i) => {
    const key = keys[i];
    return result + (translations[locale]?.[key] || key || '') + str;
  }, '');
}
console.log(t\`${"greeting"} from JS.ADV!\`); // Hola from JS.ADV!

// 5. String.raw — get raw string without escape processing
console.log(String.raw\`Line1\\nLine2\\nLine3\`); // literal \n not newlines

console.log('Tagged Template Literals complete ✅');
`,
  },

  /* ═══════════════════════════════════════════════════════════
     MODULE 4 — Asynchronous Patterns
  ═══════════════════════════════════════════════════════════ */
  {
    id: "event-loop",
    topicId: "event-loop",
    title: "Event Loop Deep Dive",
    category: "Asynchronous Patterns",
    difficulty: "Advanced",
    time: "35 min",
    description:
      "The event loop is the mechanism that allows JavaScript (a single-threaded language) to perform non-blocking I/O operations. It continuously monitors the call stack and task queues: when the call stack is empty, it first drains the microtask queue (Promises, queueMicrotask), then takes one macrotask (setTimeout, setInterval, I/O), repeating the cycle. Understanding this ordering is essential for predicting async code behaviour.",
    keyPoints: [
      "JavaScript is single-threaded — the event loop provides the illusion of concurrency",
      "Call Stack: LIFO execution of synchronous code",
      "Microtask queue: Promise.then/catch/finally, queueMicrotask — drained COMPLETELY before next macrotask",
      "Macrotask queue (Task queue): setTimeout, setInterval, I/O callbacks — one per loop tick",
      "Execution order: sync → microtasks → macrotask → microtasks → macrotask ...",
      "requestAnimationFrame runs between the microtask drain and paint — before the next macrotask",
    ],
    code: `// ─── Event Loop Deep Dive ────────────────────────────────────────
// Run this and predict the output BEFORE looking!

console.log('1 — synchronous start');

setTimeout(() => console.log('2 — setTimeout (macrotask)'), 0);

Promise.resolve()
  .then(() => console.log('3 — Promise.then (microtask)'))
  .then(() => console.log('4 — chained .then (microtask)'));

queueMicrotask(() => console.log('5 — queueMicrotask'));

console.log('6 — synchronous end');

/* Expected output:
   1 — synchronous start
   6 — synchronous end
   3 — Promise.then (microtask)    ← microtask queue drained first
   4 — chained .then (microtask)   ← still draining microtasks
   5 — queueMicrotask              ← also a microtask
   2 — setTimeout (macrotask)      ← finally the macrotask
*/

// ── Microtask flood (starving the macrotask queue) ────────────
let i = 0;
function floodMicrotasks() {
  if (i < 5) {
    Promise.resolve().then(() => {
      console.log(\`Microtask flood \${++i}\`);
      floodMicrotasks(); // queue another microtask BEFORE the timeout runs
    });
  }
}
setTimeout(() => console.log('Timeout after flood'), 0);
floodMicrotasks();
// The timeout fires only AFTER all 5 microtasks complete

// ── Async/await desugared — shows it's just promises ─────────
async function demo() {
  console.log('async fn start');             // sync
  await Promise.resolve('tick');             // schedules .then callback
  console.log('after await');               // runs as microtask
}
console.log('before async call');
demo();
console.log('after async call');
// before async call → async fn start → after async call → after await

console.log('Event Loop demo complete ✅');
`,
  },

  {
    id: "promise-internals",
    topicId: "promise-internals",
    title: "Promise Internals",
    category: "Asynchronous Patterns",
    difficulty: "Advanced",
    time: "30 min",
    description:
      "Promises represent the eventual completion (or failure) of an asynchronous operation and its resulting value. Under the hood, a Promise is a state machine with three states: pending → fulfilled or rejected. Mastering promise chaining, error propagation, and the difference between caught and uncaught rejections separates junior from senior JavaScript developers.",
    keyPoints: [
      "Three states: pending, fulfilled (resolved), rejected — transitions are one-way",
      ".then(onFulfilled, onRejected) returns a NEW promise — enabling chaining",
      "Errors propagate down the chain until caught by .catch() or the second arg of .then()",
      "Returning a value in .then() wraps it in a resolved promise",
      'Returning a promise in .then() "flattens" it — the chain waits for it to settle',
      "Unhandled rejections crash Node.js and trigger warnings in browsers",
    ],
    code: `// ─── Promise Internals ───────────────────────────────────────────

// 1. Creating and consuming promises
const asyncDelay = (ms, value) =>
  new Promise((resolve) => setTimeout(() => resolve(value), ms));

const asyncFail = (ms, msg) =>
  new Promise((_, reject) => setTimeout(() => reject(new Error(msg)), ms));

asyncDelay(50, 'Hello').then(v => console.log('Resolved:', v));

// 2. Promise chaining — each .then returns a new promise
asyncDelay(30, 10)
  .then(n => n * 2)          // 20 — wraps in resolved promise
  .then(n => n + 5)          // 25
  .then(n => asyncDelay(10, n * 3)) // 75 — flattening a promise
  .then(n => console.log('Chain result:', n)); // 75

// 3. Error propagation through the chain
asyncDelay(10, 'start')
  .then(() => { throw new Error('Oops in step 2'); })
  .then(() => console.log('This is SKIPPED'))
  .then(() => console.log('This is also SKIPPED'))
  .catch(err => console.log('Caught:', err.message))   // catches all above
  .then(() => console.log('Chain continues after catch'));

// 4. Promise.resolve / Promise.reject factory shortcuts
Promise.resolve(42).then(v => console.log('Already resolved:', v));
Promise.reject(new Error('immediate fail')).catch(e => console.log('Immediate catch:', e.message));

// 5. Build your own mini-Promise (educational)
class MiniPromise {
  #state    = 'pending';
  #value    = undefined;
  #handlers = [];

  constructor(executor) {
    const resolve = (value) => this.#transition('fulfilled', value);
    const reject  = (reason) => this.#transition('rejected', reason);
    try { executor(resolve, reject); }
    catch (e) { reject(e); }
  }

  #transition(state, value) {
    if (this.#state !== 'pending') return;
    this.#state = state;
    this.#value = value;
    this.#handlers.forEach(h => this.#handle(h));
  }

  #handle({ onFulfilled, onRejected, resolve, reject }) {
    queueMicrotask(() => {
      const cb = this.#state === 'fulfilled' ? onFulfilled : onRejected;
      if (!cb) { (this.#state === 'fulfilled' ? resolve : reject)(this.#value); return; }
      try { resolve(cb(this.#value)); } catch(e) { reject(e); }
    });
  }

  then(onFulfilled, onRejected) {
    return new MiniPromise((resolve, reject) => {
      this.#handlers.push({ onFulfilled, onRejected, resolve, reject });
      if (this.#state !== 'pending') this.#handle(this.#handlers.at(-1));
    });
  }

  catch(onRejected) { return this.then(null, onRejected); }
}

new MiniPromise((res) => setTimeout(() => res(99), 20))
  .then(v => v * 2)
  .then(v => console.log('MiniPromise result:', v)); // 198

console.log('Promise Internals complete ✅');
`,
  },

  {
    id: "async-await-advanced",
    topicId: "async-await-advanced",
    title: "Async/Await Advanced",
    category: "Asynchronous Patterns",
    difficulty: "Intermediate",
    time: "25 min",
    description:
      "async/await is syntactic sugar over Promises that makes asynchronous code look and behave more like synchronous code. An async function always returns a Promise. The await keyword pauses execution of the async function until the awaited promise settles. Mastery includes error handling patterns, parallel vs sequential execution, async iteration, and avoiding common pitfalls.",
    keyPoints: [
      "async functions always return a Promise — even if you return a plain value",
      "await can only be used inside async functions (or at the top level in modules)",
      "try/catch works naturally around await for error handling",
      "Awaiting in a loop runs sequentially — use Promise.all for parallelism",
      "async/await does NOT make code multi-threaded — it is still single-threaded",
      "Top-level await is available in ES2022 modules",
    ],
    code: `// ─── Async/Await Advanced ────────────────────────────────────────

const delay = (ms, val) => new Promise(r => setTimeout(() => r(val), ms));
const fail  = (ms, msg) => new Promise((_, r) => setTimeout(() => r(new Error(msg)), ms));

// 1. Basic async/await
async function fetchUser(id) {
  const user = await delay(30, { id, name: 'Alice', role: 'admin' });
  return user;
}
fetchUser(1).then(u => console.log('User:', u.name));

// 2. Error handling patterns
async function safeFetch(id) {
  try {
    if (id < 0) await fail(10, 'Invalid user ID');
    const user = await delay(20, { id, name: 'Bob' });
    return { ok: true, data: user };
  } catch (err) {
    return { ok: false, error: err.message };  // ← return error, don't throw
  }
}
async function demo() {
  console.log(await safeFetch(1));   // { ok: true, data: ... }
  console.log(await safeFetch(-1));  // { ok: false, error: 'Invalid user ID' }
}
demo();

// 3. Sequential vs Parallel
async function sequential() {
  console.time('sequential');
  const a = await delay(50, 'A');
  const b = await delay(50, 'B');
  const c = await delay(50, 'C');
  console.timeEnd('sequential'); // ~150ms
  return [a, b, c];
}

async function parallel() {
  console.time('parallel');
  const [a, b, c] = await Promise.all([
    delay(50, 'A'), delay(50, 'B'), delay(50, 'C'),
  ]);
  console.timeEnd('parallel'); // ~50ms
  return [a, b, c];
}

// 4. Async iteration (for await...of)
async function* generatePages(count) {
  for (let page = 1; page <= count; page++) {
    const data = await delay(10, { page, items: [\`item\${page}a\`, \`item\${page}b\`] });
    yield data;
  }
}

async function consumePages() {
  for await (const page of generatePages(3)) {
    console.log(\`Page \${page.page}:\`, page.items);
  }
}
consumePages();

// 5. Common pitfall: await in array methods
async function wrongWay(ids) {
  // forEach doesn't await — all fire in parallel with no way to catch
  const results = [];
  // WRONG: ids.forEach(async id => results.push(await delay(10, id)));
  // CORRECT:
  for (const id of ids) {
    results.push(await delay(10, id * 10));
  }
  return results;
}
wrongWay([1,2,3]).then(r => console.log('Sequential results:', r));

console.log('Async/Await Advanced complete ✅');
`,
  },

  {
    id: "promise-combinators",
    topicId: "promise-combinators",
    title: "Promise Combinators",
    category: "Asynchronous Patterns",
    difficulty: "Intermediate",
    time: "20 min",
    description:
      "Promise combinators let you coordinate multiple asynchronous operations with different semantics. Promise.all fails fast on the first rejection; Promise.allSettled waits for all and reports every outcome; Promise.race resolves/rejects with the first settled; Promise.any resolves with the first fulfillment and only rejects if ALL reject. Choosing the right combinator is critical for correct error handling.",
    keyPoints: [
      "Promise.all: parallel execution, short-circuits on first rejection — use when ALL must succeed",
      "Promise.allSettled: waits for ALL, returns array of { status, value/reason } — use for independent ops",
      "Promise.race: first settled (resolve OR reject) wins — use for timeout patterns",
      "Promise.any: first FULFILLED wins; rejects with AggregateError only if all reject — use for redundancy",
      "All combinators accept any iterable of promises (or values auto-wrapped in Promise.resolve)",
      "Wrap with try/catch or .catch() — Promise.all and Promise.any can reject",
    ],
    code: `// ─── Promise Combinators ─────────────────────────────────────────

const resolve = (ms, val) => new Promise(r => setTimeout(() => r(val), ms));
const reject  = (ms, msg) => new Promise((_, r) => setTimeout(() => r(new Error(msg)), ms));

// 1. Promise.all — all must succeed
Promise.all([resolve(30,'A'), resolve(20,'B'), resolve(10,'C')])
  .then(([a, b, c]) => console.log('all resolved:', a, b, c));

Promise.all([resolve(10,'OK'), reject(20,'FAIL'), resolve(30,'OK2')])
  .catch(err => console.log('all: first reject:', err.message));

// 2. Promise.allSettled — never rejects, gets full picture
Promise.allSettled([resolve(10,'ok1'), reject(5,'err1'), resolve(15,'ok2')])
  .then(results => {
    results.forEach(r => {
      if (r.status === 'fulfilled') console.log('  ✅', r.value);
      else                          console.log('  ❌', r.reason.message);
    });
  });

// 3. Promise.race — first settled wins
Promise.race([resolve(100,'slow'), resolve(20,'fast'), resolve(60,'medium')])
  .then(winner => console.log('race winner:', winner)); // fast

// Timeout pattern with race
function withTimeout(promise, ms) {
  const timeout = new Promise((_, r) =>
    setTimeout(() => r(new Error(\`Timeout after \${ms}ms\`)), ms));
  return Promise.race([promise, timeout]);
}
withTimeout(resolve(500, 'data'), 100)
  .catch(err => console.log('Timed out:', err.message));

// 4. Promise.any — first FULFILLED wins
Promise.any([reject(10,'e1'), resolve(30,'winner'), resolve(40,'also good')])
  .then(val => console.log('any winner:', val)); // winner

// All reject → AggregateError
Promise.any([reject(10,'e1'), reject(20,'e2'), reject(30,'e3')])
  .catch(err => {
    console.log('any all failed:', err instanceof AggregateError);
    console.log('errors:', err.errors.map(e => e.message));
  });

// 5. Real-world: parallel API calls with allSettled
async function loadDashboard(userId) {
  const [profile, posts, notifications] = await Promise.allSettled([
    resolve(30, { name: 'Alice', id: userId }),
    resolve(50, [{ id: 1, title: 'My first post' }]),
    reject(20, 'Notification service down'),
  ]);

  return {
    profile:       profile.status === 'fulfilled' ? profile.value : null,
    posts:         posts.status   === 'fulfilled' ? posts.value   : [],
    notifications: notifications.status === 'fulfilled' ? notifications.value : [],
    errors:        [profile, posts, notifications]
                   .filter(r => r.status === 'rejected')
                   .map(r => r.reason.message),
  };
}
loadDashboard(42).then(d => console.log('JsAdvDashboard:', d));

console.log('Promise Combinators complete ✅');
`,
  },

  {
    id: "observable-patterns",
    topicId: "observable-patterns",
    title: "Observable Patterns",
    category: "Asynchronous Patterns",
    difficulty: "Advanced",
    time: "25 min",
    description:
      "Observables represent a lazy, cancellable stream of values over time — unlike Promises which resolve once. The Observer pattern forms the basis of RxJS and the proposed TC39 Observable specification. Building a minimal Observable implementation teaches you how streams, subscriptions, operators, and error propagation work under the hood.",
    keyPoints: [
      "Observable = lazy: nothing happens until you subscribe()",
      "Observer object: { next(value), error(err), complete() }",
      "Subscription returns an unsubscribe function — prevents memory leaks",
      "Hot vs Cold: cold observables create fresh data per subscriber; hot share one stream",
      "Operators like map, filter, merge transform streams without mutating the source",
      "RxJS subjects are both Observable and Observer — bridge imperative/reactive worlds",
    ],
    code: `// ─── Observable Patterns ─────────────────────────────────────────

// 1. Minimal Observable implementation
class Observable {
  #subscribe;

  constructor(subscribeFn) {
    this.#subscribe = subscribeFn;
  }

  subscribe(observerOrNext, error, complete) {
    const observer = typeof observerOrNext === 'function'
      ? { next: observerOrNext, error: error || (() => {}), complete: complete || (() => {}) }
      : observerOrNext;

    let unsubscribed = false;
    const wrappedObserver = {
      next:     (v) => { if (!unsubscribed) observer.next(v);        },
      error:    (e) => { if (!unsubscribed) observer.error(e);       },
      complete: ()  => { if (!unsubscribed) { observer.complete(); unsubscribed = true; } },
    };

    const teardown = this.#subscribe(wrappedObserver);
    return { unsubscribe: () => { unsubscribed = true; teardown?.(); } };
  }

  // Operators
  map(fn) {
    return new Observable(obs => {
      const sub = this.subscribe(v => obs.next(fn(v)), obs.error, obs.complete);
      return () => sub.unsubscribe();
    });
  }

  filter(predicate) {
    return new Observable(obs => {
      const sub = this.subscribe(v => predicate(v) && obs.next(v), obs.error, obs.complete);
      return () => sub.unsubscribe();
    });
  }

  // Static creators
  static from(iterable) {
    return new Observable(obs => {
      for (const v of iterable) obs.next(v);
      obs.complete();
    });
  }

  static interval(ms) {
    return new Observable(obs => {
      let n = 0;
      const id = setInterval(() => obs.next(n++), ms);
      return () => clearInterval(id);
    });
  }
}

// 2. Usage
Observable.from([1, 2, 3, 4, 5])
  .filter(x => x % 2 === 0)
  .map(x => x * x)
  .subscribe({
    next:     v  => console.log('Even square:', v),
    complete: () => console.log('Stream complete'),
  });

// 3. Interval with auto-unsubscribe
const sub = Observable.interval(100)
  .map(n => \`tick \${n}\`)
  .subscribe({ next: v => console.log(v) });

setTimeout(() => { sub.unsubscribe(); console.log('Unsubscribed'); }, 350);

console.log('Observable Patterns complete ✅');
`,
  },

  /* ═══════════════════════════════════════════════════════════
     MODULE 5 — Functional Programming
  ═══════════════════════════════════════════════════════════ */
  {
    id: "immutability",
    topicId: "immutability",
    title: "Immutability in JS",
    category: "Functional Programming",
    difficulty: "Intermediate",
    time: "20 min",
    description:
      'Immutability means that once a data structure is created, it cannot be changed — any "mutation" creates a new structure instead. In JavaScript, primitives are already immutable; objects and arrays are mutable by default. Enforcing immutability eliminates a whole class of bugs from shared state, makes change tracking trivial (reference equality), and is the foundation of React/Redux state management.',
    keyPoints: [
      "Object.freeze() makes an object shallowly immutable — nested objects are NOT frozen",
      "Spread operator and Object.assign create shallow copies — sufficient for flat structures",
      "Deep immutability: recursively freeze or use libraries like Immer",
      "Structural sharing (Immer, Immutable.js): reuse unchanged sub-trees — efficient",
      "Redux rule: reducers must return a new object/array, never mutate state in place",
      "const ≠ immutable — const prevents reassignment, not mutation of the value",
    ],
    code: `// ─── Immutability in JS ──────────────────────────────────────────

// 1. const ≠ immutable
const arr = [1, 2, 3];
arr.push(4);              // ✅ mutation allowed — const only prevents reassignment
// arr = [1,2,3,4];      // ❌ TypeError: Assignment to constant variable

// 2. Object.freeze — shallow immutability
const config = Object.freeze({
  api: { base: 'https://api.example.com', version: 'v2' },
  timeout: 5000,
});
config.timeout = 9999;             // silently ignored in sloppy mode
console.log(config.timeout);      // 5000 — unchanged ✅
config.api.version = 'v99';       // ❌ SHALLOW! nested object is still mutable
console.log(config.api.version);  // 'v99' — mutated ⚠

// 3. Deep freeze utility
function deepFreeze(obj) {
  Object.getOwnPropertyNames(obj).forEach(name => {
    const val = obj[name];
    if (val && typeof val === 'object') deepFreeze(val);
  });
  return Object.freeze(obj);
}

const frozen = deepFreeze({ a: { b: { c: 42 } } });
frozen.a.b.c = 99; // silently ignored
console.log(frozen.a.b.c); // 42 ✅

// 4. Immutable update patterns (like Redux reducers)
const state = { user: { name: 'Alice', age: 30 }, count: 0 };

// ❌ Mutation — never do this in reducers
// state.count++;
// state.user.age++;

// ✅ Immutable update via spread
const newState = {
  ...state,
  count: state.count + 1,
  user: { ...state.user, age: state.user.age + 1 },
};
console.log('Old state count:', state.count);     // 0
console.log('New state count:', newState.count);  // 1

// 5. Immutable array operations
const original = [1, 2, 3, 4, 5];

const withItem  = [...original, 6];             // add
const withoutI  = original.filter((_, i) => i !== 2); // remove index 2
const updated   = original.map((x, i) => i === 1 ? 99 : x); // update index 1
const inserted  = [...original.slice(0, 2), 99, ...original.slice(2)]; // insert at 2

console.log('Original:', original);   // unchanged!
console.log('Added:',    withItem);
console.log('Removed:',  withoutI);
console.log('Updated:',  updated);
console.log('Inserted:', inserted);

console.log('Immutability complete ✅');
`,
  },

  {
    id: "pure-functions",
    topicId: "pure-functions",
    title: "Pure Functions & Side Effects",
    category: "Functional Programming",
    difficulty: "Intermediate",
    time: "20 min",
    description:
      "A pure function always returns the same output for the same input and produces no observable side effects. Side effects include mutating arguments, modifying global state, making network requests, writing to the DOM, or logging. Writing pure functions makes code predictable, testable, and safe to optimise with memoization or parallelism.",
    keyPoints: [
      "Deterministic: same input → same output every time",
      "No side effects: doesn't modify external state, I/O, or its arguments",
      "Referentially transparent: can substitute f(x) with its result without changing program behaviour",
      "Testable: no mocking required — just call with input, check output",
      "Side effects are inevitable (you must log, fetch, update DOM) — isolate them at the edges",
      '"Functional core, imperative shell": pure logic in the centre, side effects at the boundary',
    ],
    code: `// ─── Pure Functions & Side Effects ──────────────────────────────

// 1. Pure vs Impure
let taxRate = 0.2; // global state

// ❌ Impure — depends on external variable
function calcTaxImpure(price) {
  return price * taxRate; // changes if taxRate changes!
}

// ✅ Pure — all inputs explicit
function calcTax(price, rate) {
  return price * rate;
}

console.log(calcTax(100, 0.2)); // always 20
console.log(calcTax(100, 0.2)); // always 20

// 2. Impure: mutates argument
function addItemImpure(cart, item) {
  cart.items.push(item);         // ❌ mutates the original cart!
  cart.total += item.price;
  return cart;
}

// ✅ Pure: returns new object
function addItem(cart, item) {
  return {
    ...cart,
    items: [...cart.items, item],
    total: cart.total + item.price,
  };
}

const cart1 = { items: [], total: 0 };
const cart2 = addItem(cart1, { name: 'Book', price: 29 });
const cart3 = addItem(cart2, { name: 'Pen',  price: 3  });
console.log('cart1 unchanged:', cart1.total); // 0
console.log('cart3 total:',     cart3.total); // 32

// 3. Isolating side effects — functional core, imperative shell
// Pure core: business logic
const applyPromo = (cart, code) =>
  code === 'SAVE10' ? { ...cart, discount: 0.10 } : cart;

const calculateTotal = (cart) =>
  cart.items.reduce((s, i) => s + i.price, 0) * (1 - (cart.discount || 0));

// Impure shell: only at the edges
function processOrder(cart, promoCode) {
  const updated = applyPromo(cart, promoCode);  // pure
  const total   = calculateTotal(updated);       // pure
  // Side effects isolated here:
  console.log(\`Order total: $\${total.toFixed(2)}\`);  // I/O
  return total;
}

const myCart = { items: [{ price: 100 }, { price: 50 }], discount: 0 };
processOrder(myCart, 'SAVE10'); // Order total: $135.00

// 4. Pure function pipeline
const pipeline = (...fns) => input => fns.reduce((v, f) => f(v), input);

const processData = pipeline(
  arr => arr.filter(n => n > 0),
  arr => arr.map(n => n * 2),
  arr => arr.reduce((sum, n) => sum + n, 0),
);
console.log(processData([-1, 2, -3, 4, 5])); // (2+4+5)*2 = 22

console.log('Pure Functions & Side Effects complete ✅');
`,
  },

  {
    id: "functors-monads",
    topicId: "functors-monads",
    title: "Functors & Monads",
    category: "Functional Programming",
    difficulty: "Advanced",
    time: "30 min",
    description:
      "A Functor is any type that implements a map method that applies a function to its contained value while preserving the container structure. A Monad extends Functor with flatMap (also called chain or bind) which prevents nested containers. JavaScript Arrays and Promises are already Monads. Understanding these abstractions unlocks powerful patterns for handling null, errors, and async flows safely.",
    keyPoints: [
      "Functor: has .map(fn) — applies fn to the value inside, returns same container type",
      "Arrays are functors: [1,2,3].map(x => x*2) returns an array",
      "Monad: has .flatMap (or .chain) — prevents nested containers like [[1],[2]] → [1,2]",
      "Maybe Monad: wraps a value that might be null/undefined — eliminates null checks",
      "Either Monad: represents success (Right) or failure (Left) — a typed error handling pattern",
      "Promise is a monad: .then(fn) flattens Promise<Promise<T>> to Promise<T>",
    ],
    code: `// ─── Functors & Monads ───────────────────────────────────────────

// 1. Array as Functor and Monad
const nums = [1, 2, 3];
console.log(nums.map(x => x * 2));     // Functor: [2,4,6]
console.log(nums.flatMap(x => [x, x * x])); // Monad: [1,1,2,4,3,9]

// 2. Maybe Monad — safe null handling
class Maybe {
  #value;
  constructor(value) { this.#value = value; }

  static of(value)   { return new Maybe(value); }
  static empty()     { return new Maybe(null); }

  isNothing()  { return this.#value == null; }

  map(fn) {
    return this.isNothing() ? Maybe.empty() : Maybe.of(fn(this.#value));
  }

  flatMap(fn) {
    return this.isNothing() ? Maybe.empty() : fn(this.#value);
  }

  getOrElse(defaultValue) {
    return this.isNothing() ? defaultValue : this.#value;
  }

  toString() { return this.isNothing() ? 'Maybe(Nothing)' : \`Maybe(\${this.#value})\`; }
}

// Safe property access without null checks
const getCity = user =>
  Maybe.of(user)
    .flatMap(u => Maybe.of(u.address))
    .flatMap(a => Maybe.of(a.city))
    .getOrElse('Unknown city');

console.log(getCity({ address: { city: 'Tokyo' } }));  // Tokyo
console.log(getCity({ address: null }));                 // Unknown city
console.log(getCity(null));                              // Unknown city

// 3. Either Monad — typed error handling
class Either {
  constructor(value) { this.value = value; }

  static right(value) { return new Right(value); }
  static left(value)  { return new Left(value); }
}

class Right extends Either {
  map(fn)     { return Either.right(fn(this.value)); }
  flatMap(fn) { return fn(this.value); }
  fold(leftFn, rightFn) { return rightFn(this.value); }
  toString() { return \`Right(\${this.value})\`; }
}

class Left extends Either {
  map()       { return this; }  // short-circuit
  flatMap()   { return this; }  // short-circuit
  fold(leftFn) { return leftFn(this.value); }
  toString() { return \`Left(\${this.value})\`; }
}

const parseAge = str => {
  const n = parseInt(str, 10);
  return isNaN(n) ? Either.left(\`"\${str}" is not a number\`) : Either.right(n);
};

const validateAge = n =>
  n >= 0 && n <= 150 ? Either.right(n) : Either.left(\`Age \${n} is out of range\`);

const processAge = str =>
  parseAge(str)
    .flatMap(validateAge)
    .map(age => \`Valid age: \${age}\`)
    .fold(err => \`Error: \${err}\`, ok => ok);

console.log(processAge('25'));    // Valid age: 25
console.log(processAge('abc'));   // Error: "abc" is not a number
console.log(processAge('200'));   // Error: Age 200 is out of range

console.log('Functors & Monads complete ✅');
`,
  },

  {
    id: "pipe-compose",
    topicId: "pipe-compose",
    title: "Pipe & Compose Patterns",
    category: "Functional Programming",
    difficulty: "Advanced",
    time: "20 min",
    description:
      "Pipe and Compose are the primary tools for building data transformation pipelines in functional JavaScript. They allow you to break complex operations into small, single-purpose functions and combine them declaratively. Pipe flows data left-to-right (like Unix pipes |); Compose flows right-to-left (like mathematical f∘g). Both return a new function — embracing the functional principle of first-class functions.",
    keyPoints: [
      "pipe(f, g, h)(x) = h(g(f(x))) — left to right (data-first reading order)",
      "compose(f, g, h)(x) = f(g(h(x))) — right to left (mathematical notation)",
      "Both return a NEW function — the combined transformation is reusable",
      "All functions in the pipeline should ideally be unary (single argument)",
      "Use pipeAsync / composeAsync for async function pipelines (reduce with Promises)",
      "Transducers are a more performance-efficient form of composable array transformations",
    ],
    code: `// ─── Pipe & Compose Patterns ─────────────────────────────────────

// ── Core implementations ──────────────────────────────────────
const pipe    = (...fns) => (x) => fns.reduce((v, f) => f(v), x);
const compose = (...fns) => (x) => fns.reduceRight((v, f) => f(v), x);

// Async versions
const pipeAsync    = (...fns) => (x) => fns.reduce((p, f) => p.then(f), Promise.resolve(x));
const composeAsync = (...fns) => (x) => fns.reduceRight((p, f) => p.then(f), Promise.resolve(x));

// ── Building blocks ───────────────────────────────────────────
const trim         = s => s.trim();
const split        = delim => s => s.split(delim);
const join         = delim => arr => arr.join(delim);
const filter       = pred  => arr => arr.filter(pred);
const map          = fn    => arr => arr.map(fn);
const toLowerCase  = s => s.toLowerCase();
const replace      = (from, to) => s => s.replace(from, to);

// ── Pipeline 1: text normaliser ───────────────────────────────
const normalise = pipe(
  trim,
  toLowerCase,
  replace(/[^a-z0-9\s]/g, ''),
  replace(/\s+/g, ' '),
);
console.log(normalise('  Hello, World!! 123  ')); // hello world 123

// ── Pipeline 2: word frequency counter ───────────────────────
const wordFrequency = pipe(
  normalise,
  split(' '),
  words => words.reduce((freq, word) => {
    freq[word] = (freq[word] || 0) + 1;
    return freq;
  }, {}),
);
console.log(wordFrequency('the quick brown fox the lazy dog the'));
// { the: 3, quick: 1, brown: 1, fox: 1, lazy: 1, dog: 1 }

// ── Pipeline 3: data transformation ──────────────────────────
const users = [
  { name: 'Alice', age: 28, role: 'dev',    salary: 95000 },
  { name: 'Bob',   age: 35, role: 'manager',salary: 120000 },
  { name: 'Carol', age: 22, role: 'dev',    salary: 72000 },
  { name: 'Dave',  age: 41, role: 'dev',    salary: 105000 },
];

const getDeveloperReport = pipe(
  filter(u => u.role === 'dev'),
  map(u => ({ ...u, seniority: u.age >= 30 ? 'Senior' : 'Junior' })),
  map(u => ({ name: u.name, seniority: u.seniority, salary: u.salary })),
);
console.table(getDeveloperReport(users));

// ── Pipeline 4: async pipeline ────────────────────────────────
const delay = (ms, v) => new Promise(r => setTimeout(() => r(v), ms));

const fetchUser   = id   => delay(20, { id, name: 'Alice', score: 85 });
const enrichUser  = user => delay(10, { ...user, level: user.score > 80 ? 'Pro' : 'Starter' });
const formatUser  = user => \`[\${user.level}] \${user.name}\`;

const getUserCard = pipeAsync(fetchUser, enrichUser, formatUser);
getUserCard(1).then(card => console.log('User card:', card)); // [Pro] Alice

console.log('Pipe & Compose complete ✅');
`,
  },

  /* ═══════════════════════════════════════════════════════════
     MODULE 6 — Design Patterns
  ═══════════════════════════════════════════════════════════ */
  {
    id: "singleton-pattern",
    topicId: "singleton-pattern",
    title: "Singleton Pattern",
    category: "Design Patterns",
    difficulty: "Intermediate",
    time: "15 min",
    description:
      "The Singleton pattern ensures that a class has only one instance and provides a global access point to it. It is used for shared resources like a database connection pool, configuration manager, event bus, or application-wide logger. JavaScript modules are singletons by default — once imported, the module's exported value is cached and reused.",
    keyPoints: [
      "Only ONE instance exists for the lifetime of the application",
      "Controlled global access point — better than a plain global variable",
      "ES6 modules are inherently singletons (cached after first import)",
      "The class-based version stores the instance on the class itself",
      "Thread safety is not a concern in single-threaded JS, unlike other languages",
      "Over-use is an anti-pattern — prefer dependency injection for testability",
    ],
    code: `// ─── Singleton Pattern ───────────────────────────────────────────

// 1. Class-based Singleton
class ConfigManager {
  static #instance = null;
  #config = {};

  // Private constructor — prevent direct new
  constructor() {
    if (ConfigManager.#instance) {
      throw new Error('Use ConfigManager.getInstance()');
    }
    // Load defaults
    this.#config = {
      apiBase:  'https://api.example.com',
      timeout:  5000,
      retries:  3,
      logLevel: 'info',
    };
  }

  static getInstance() {
    if (!ConfigManager.#instance) {
      ConfigManager.#instance = new ConfigManager();
    }
    return ConfigManager.#instance;
  }

  get(key)        { return this.#config[key]; }
  set(key, value) { this.#config[key] = value; }
  getAll()        { return { ...this.#config }; }
}

const cfg1 = ConfigManager.getInstance();
const cfg2 = ConfigManager.getInstance();
console.log('Same instance:', cfg1 === cfg2); // true

cfg1.set('logLevel', 'debug');
console.log('cfg2 sees change:', cfg2.get('logLevel')); // debug — same object!

// 2. Module singleton (simpler, idiomatic JS)
// In a real module: just export an instance
const AppState = (() => {
  let state = { theme: 'dark', language: 'en', notifications: true };
  const listeners = new Set();

  return {
    get:    (key)        => state[key],
    set:    (key, value) => {
      state = { ...state, [key]: value };
      listeners.forEach(l => l({ key, value, state }));
    },
    subscribe: (fn)     => { listeners.add(fn); return () => listeners.delete(fn); },
    snapshot:  ()       => ({ ...state }),
  };
})();

const unsub = AppState.subscribe(({ key, value }) =>
  console.log(\`State change: \${key} = \${JSON.stringify(value)}\`));

AppState.set('theme', 'light');
AppState.set('language', 'fr');
console.log('Current state:', AppState.snapshot());
unsub(); // stop listening
AppState.set('notifications', false); // no log — unsubscribed

console.log('Singleton Pattern complete ✅');
`,
  },

  {
    id: "observer-pattern",
    topicId: "observer-pattern",
    title: "Observer Pattern",
    category: "Design Patterns",
    difficulty: "Intermediate",
    time: "20 min",
    description:
      "The Observer (Pub/Sub) pattern defines a one-to-many dependency: when one object (the subject/publisher) changes state, all its dependents (observers/subscribers) are notified and updated automatically. It is the pattern behind DOM events, Node.js EventEmitter, Redux store subscriptions, Vue reactivity, and countless UI frameworks.",
    keyPoints: [
      "Subject maintains a list of observers and notifies them of state changes",
      "Observers register/unregister dynamically — loose coupling between subject and observers",
      "Pub/Sub variant adds a message broker (channel) — decouples publishers and subscribers entirely",
      "Node.js EventEmitter is a built-in implementation of the Observer pattern",
      "The subscription returns an unsubscribe function — prevents memory leaks",
      "Weak references (WeakRef + FinalizationRegistry) enable garbage-collected observers",
    ],
    code: `// ─── Observer Pattern ────────────────────────────────────────────

// 1. Classic EventEmitter
class EventEmitter {
  #events = new Map();

  on(event, listener) {
    if (!this.#events.has(event)) this.#events.set(event, new Set());
    this.#events.get(event).add(listener);
    return () => this.off(event, listener); // return unsubscribe fn
  }

  once(event, listener) {
    const wrapper = (...args) => {
      listener(...args);
      this.off(event, wrapper);
    };
    return this.on(event, wrapper);
  }

  off(event, listener) {
    this.#events.get(event)?.delete(listener);
  }

  emit(event, ...args) {
    this.#events.get(event)?.forEach(listener => listener(...args));
  }

  listenerCount(event) { return this.#events.get(event)?.size ?? 0; }
}

// 2. Observable Store (Redux-like)
class Store extends EventEmitter {
  #state;
  #reducer;

  constructor(reducer, initialState) {
    super();
    this.#reducer = reducer;
    this.#state   = initialState;
  }

  getState() { return this.#state; }

  dispatch(action) {
    const prev = this.#state;
    this.#state = this.#reducer(this.#state, action);
    if (prev !== this.#state) this.emit('change', this.#state, prev, action);
    return action;
  }

  subscribe(listener) { return this.on('change', listener); }
}

// Reducer — pure function
function counterReducer(state = { count: 0 }, action) {
  switch (action.type) {
    case 'INCREMENT': return { ...state, count: state.count + action.by ?? 1 };
    case 'DECREMENT': return { ...state, count: state.count - (action.by ?? 1) };
    case 'RESET':     return { ...state, count: 0 };
    default:          return state;
  }
}

const store = new Store(counterReducer, { count: 0 });

// Subscribe
const unsubscribe = store.subscribe((newState, prevState, action) => {
  console.log(\`\${action.type}: \${prevState.count} → \${newState.count}\`);
});

store.dispatch({ type: 'INCREMENT', by: 5 });
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'DECREMENT', by: 2 });
store.dispatch({ type: 'RESET' });
console.log('Final count:', store.getState().count);

unsubscribe();
store.dispatch({ type: 'INCREMENT' }); // no log — unsubscribed

console.log('Observer Pattern complete ✅');
`,
  },

  {
    id: "factory-pattern",
    topicId: "factory-pattern",
    title: "Factory Pattern",
    category: "Design Patterns",
    difficulty: "Intermediate",
    time: "20 min",
    description:
      "The Factory Pattern provides an interface for creating objects without specifying the exact class or constructor. Instead of calling new DirectClass(), you call a factory function or method that decides which concrete type to instantiate. This decouples object creation from usage, makes code extensible (add new types without changing existing code), and centralises complex object construction logic.",
    keyPoints: [
      "Simple Factory: a function that creates different objects based on a type argument",
      "Factory Method: subclasses override how an object is created (open/closed principle)",
      "Abstract Factory: create families of related objects without specifying concrete classes",
      "Centralises construction logic — validation, defaults, caching can all live in one place",
      "The registry pattern: map type strings to constructor functions for extensible factories",
      "Combines naturally with the Singleton pattern for managing created instances",
    ],
    code: `// ─── Factory Pattern ─────────────────────────────────────────────

// 1. Simple factory function
function createUser(type, data) {
  const base = {
    id:        Math.random().toString(36).slice(2, 9),
    createdAt: new Date().toISOString(),
    ...data,
  };

  const factories = {
    admin:   d => ({ ...d, permissions: ['read','write','delete','admin'], maxSessions: 10 }),
    editor:  d => ({ ...d, permissions: ['read', 'write'],                 maxSessions: 5  }),
    viewer:  d => ({ ...d, permissions: ['read'],                          maxSessions: 3  }),
  };

  const factory = factories[type] ?? factories.viewer;
  return factory(base);
}

console.log(createUser('admin',  { name: 'Alice' }));
console.log(createUser('editor', { name: 'Bob'   }));
console.log(createUser('viewer', { name: 'Carol' }));

// 2. Registry-based factory — extensible without modifying factory code
class NotificationFactory {
  static #registry = new Map();

  static register(type, creator) {
    this.#registry.set(type, creator);
    return this; // chainable
  }

  static create(type, payload) {
    const creator = this.#registry.get(type);
    if (!creator) throw new Error(\`Unknown notification type: \${type}\`);
    return creator(payload);
  }
}

// Register notification types
NotificationFactory
  .register('email', ({ to, subject, body }) => ({
    type: 'email', to, subject, body, send: () => console.log(\`Email → \${to}: \${subject}\`),
  }))
  .register('sms', ({ phone, message }) => ({
    type: 'sms', phone, message, send: () => console.log(\`SMS → \${phone}: \${message}\`),
  }))
  .register('push', ({ userId, title, body }) => ({
    type: 'push', userId, title, body, send: () => console.log(\`Push → user \${userId}: \${title}\`),
  }));

const email = NotificationFactory.create('email', { to: 'alice@x.com', subject: 'Welcome!', body: '...' });
const sms   = NotificationFactory.create('sms',   { phone: '+1234567890', message: 'Your OTP: 1234' });
const push  = NotificationFactory.create('push',  { userId: 42, title: 'New message', body: '...' });

[email, sms, push].forEach(n => n.send());

// 3. Abstract factory — create families of related objects
function createUIKit(theme) {
  const themes = {
    dark:  {
      Button: (label) => ({ render: () => \`[🌙 DARK BUTTON: \${label}]\` }),
      Input:  (placeholder) => ({ render: () => \`[🌙 DARK INPUT: \${placeholder}]\` }),
    },
    light: {
      Button: (label) => ({ render: () => \`[☀️ LIGHT BUTTON: \${label}]\` }),
      Input:  (placeholder) => ({ render: () => \`[☀️ LIGHT INPUT: \${placeholder}]\` }),
    },
  };
  return themes[theme] || themes.light;
}

const kit = createUIKit('dark');
console.log(kit.Button('Submit').render());
console.log(kit.Input('Enter email...').render());

console.log('Factory Pattern complete ✅');
`,
  },

  {
    id: "strategy-pattern",
    topicId: "strategy-pattern",
    title: "Strategy Pattern",
    category: "Design Patterns",
    difficulty: "Advanced",
    time: "20 min",
    description:
      "The Strategy Pattern defines a family of algorithms, encapsulates each one, and makes them interchangeable. It lets the algorithm vary independently from clients that use it. In JavaScript, since functions are first-class, strategies can simply be functions passed as arguments — eliminating the verbose class-based version found in other languages.",
    keyPoints: [
      "Encapsulates a family of interchangeable algorithms behind a common interface",
      "In JS, strategies are just functions — no need for Strategy interface classes",
      "Open/Closed Principle: add new strategies without modifying the context",
      "Eliminates large if/else or switch statements that grow with each new algorithm",
      "Used in: sorting algorithms, payment processors, validation rules, authentication methods",
      "Combines naturally with the factory pattern to select strategies by name",
    ],
    code: `// ─── Strategy Pattern ────────────────────────────────────────────

// 1. Sorting strategies
const sortStrategies = {
  bubble: (arr) => {
    const a = [...arr];
    for (let i = 0; i < a.length; i++)
      for (let j = 0; j < a.length - i - 1; j++)
        if (a[j] > a[j+1]) [a[j], a[j+1]] = [a[j+1], a[j]];
    return a;
  },
  quick: (arr) => {
    if (arr.length <= 1) return arr;
    const pivot = arr[Math.floor(arr.length / 2)];
    const left  = arr.filter(x => x < pivot);
    const mid   = arr.filter(x => x === pivot);
    const right = arr.filter(x => x > pivot);
    return [...sortStrategies.quick(left), ...mid, ...sortStrategies.quick(right)];
  },
  native: (arr) => [...arr].sort((a, b) => a - b),
};

class Sorter {
  #strategy;
  constructor(strategy = 'native') { this.#strategy = sortStrategies[strategy]; }
  setStrategy(name) { this.#strategy = sortStrategies[name]; return this; }
  sort(arr) { return this.#strategy(arr); }
}

const data = [64, 34, 25, 12, 22, 11, 90];
const sorter = new Sorter('bubble');
console.log('Bubble:', sorter.sort(data));
sorter.setStrategy('quick');
console.log('Quick: ', sorter.sort(data));

// 2. Payment strategy (real-world)
const paymentStrategies = {
  creditCard: ({ amount, card }) => {
    console.log(\`💳 Charging $\${amount} to card ending in \${card.slice(-4)}\`);
    return { success: true, method: 'credit_card', amount };
  },
  paypal: ({ amount, email }) => {
    console.log(\`🅿️  Paying $\${amount} via PayPal to \${email}\`);
    return { success: true, method: 'paypal', amount };
  },
  crypto: ({ amount, wallet }) => {
    console.log(\`₿  Sending $\${amount} to wallet \${wallet.slice(0,8)}...\`);
    return { success: true, method: 'crypto', amount };
  },
};

class Checkout {
  #paymentStrategy;
  setPaymentMethod(method) {
    if (!paymentStrategies[method]) throw new Error(\`Unknown payment: \${method}\`);
    this.#paymentStrategy = paymentStrategies[method];
    return this;
  }
  pay(details) {
    if (!this.#paymentStrategy) throw new Error('Set a payment method first');
    return this.#paymentStrategy(details);
  }
}

const checkout = new Checkout();
checkout.setPaymentMethod('creditCard').pay({ amount: 99.99, card: '4111111111111111' });
checkout.setPaymentMethod('paypal').pay({ amount: 49.99, email: 'user@example.com' });

console.log('Strategy Pattern complete ✅');
`,
  },

  {
    id: "proxy-decorator",
    topicId: "proxy-decorator",
    title: "Proxy & Decorator",
    category: "Design Patterns",
    difficulty: "Advanced",
    time: "25 min",
    description:
      'The ES6 Proxy object wraps another object (the "target") and intercepts operations on it — property access, assignment, function calls, and more. This enables powerful meta-programming: validation, logging, reactivity (Vue 3), immutability enforcement, and caching. The Decorator pattern (similar in intent) adds behaviour to functions or class methods using wrapper functions or the @ decorator proposal.',
    keyPoints: [
      "Proxy(target, handler) — handler has traps: get, set, apply, construct, has, deleteProperty, etc.",
      "Reflect object provides default implementations for all proxy traps",
      "Vue 3 reactivity system is built entirely on Proxy",
      "Proxy enables validation, logging, lazy loading, and virtual properties",
      "Decorator pattern: wrap a function to add behaviour before/after its execution",
      "The TC39 decorator proposal adds @ syntax for class methods and fields",
    ],
    code: `// ─── Proxy & Decorator ───────────────────────────────────────────

// 1. Validation Proxy
function createValidatedObject(target, schema) {
  return new Proxy(target, {
    set(obj, key, value) {
      const rule = schema[key];
      if (rule) {
        if (rule.type && typeof value !== rule.type) {
          throw new TypeError(\`\${key} must be a \${rule.type}, got \${typeof value}\`);
        }
        if (rule.min !== undefined && value < rule.min) {
          throw new RangeError(\`\${key} must be >= \${rule.min}\`);
        }
        if (rule.max !== undefined && value > rule.max) {
          throw new RangeError(\`\${key} must be <= \${rule.max}\`);
        }
      }
      return Reflect.set(obj, key, value);
    },
  });
}

const user = createValidatedObject({}, {
  name:  { type: 'string' },
  age:   { type: 'number', min: 0, max: 150 },
  score: { type: 'number', min: 0, max: 100 },
});

user.name  = 'Alice';  // ok
user.age   = 28;       // ok
user.score = 95;       // ok
console.log(user);
try { user.age = -1; } catch(e) { console.log('Error:', e.message); }
try { user.name = 42;  } catch(e) { console.log('Error:', e.message); }

// 2. Logging Proxy
function createLoggedObject(target, label = 'Object') {
  return new Proxy(target, {
    get(obj, key) {
      const val = Reflect.get(obj, key);
      if (typeof val === 'function') {
        return function(...args) {
          console.log(\`[\${label}] Calling \${key}(\${args.map(a => JSON.stringify(a)).join(', ')})\`);
          const result = val.apply(obj, args);
          console.log(\`[\${label}] \${key} returned \${JSON.stringify(result)}\`);
          return result;
        };
      }
      console.log(\`[\${label}] GET \${key} = \${JSON.stringify(val)}\`);
      return val;
    },
  });
}

const api = createLoggedObject({
  greet: name => \`Hello, \${name}!\`,
  add:   (a, b) => a + b,
}, 'API');
api.greet('Bob');
api.add(3, 4);

// 3. Function Decorator pattern
function memoize(fn) {
  const cache = new Map();
  return function(...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) return cache.get(key);
    const result = fn.apply(this, args);
    cache.set(key, result);
    return result;
  };
}

function once(fn) {
  let called = false, result;
  return function(...args) {
    if (called) return result;
    called = true;
    return (result = fn.apply(this, args));
  };
}

const init = once(() => { console.log('Initialised!'); return 'done'; });
console.log(init()); // Initialised! done
console.log(init()); // done (no second log)

console.log('Proxy & Decorator complete ✅');
`,
  },

  /* ═══════════════════════════════════════════════════════════
     MODULE 7 — Performance & Memory
  ═══════════════════════════════════════════════════════════ */
  {
    id: "memory-management",
    topicId: "memory-management",
    title: "Memory Management",
    category: "Performance & Memory",
    difficulty: "Advanced",
    time: "25 min",
    description:
      "JavaScript automatically allocates memory when objects are created and frees it via garbage collection. However, poor code patterns can cause memory leaks — objects that are no longer needed but cannot be freed because a reference still exists. Understanding how V8 allocates memory (stack vs heap), what keeps objects alive, and common leak patterns is essential for building production applications.",
    keyPoints: [
      "Stack: stores primitives and function call frames — fast, auto-managed, size-limited",
      "Heap: stores objects and closures — garbage collected, much larger",
      "V8 uses generational GC: most objects die young (minor GC) — long-lived ones move to old space",
      "WeakMap/WeakSet hold weak references — they don't prevent garbage collection",
      "Common leaks: global variables, forgotten timers, event listeners, closures over large objects",
      "Chrome DevTools Memory tab: heap snapshots, allocation timeline, memory profiles",
    ],
    code: `// ─── Memory Management ───────────────────────────────────────────

// 1. Stack vs Heap illustration
function stackDemo() {
  let a = 1;      // primitive — stored on stack
  let b = a;      // copy of value
  b = 99;
  console.log('a:', a, 'b:', b); // a: 1 b: 99 — independent copies
}
stackDemo();

function heapDemo() {
  const obj1 = { x: 1 };   // object — stored on heap, obj1 holds REFERENCE
  const obj2 = obj1;        // copy of REFERENCE — both point to same heap object
  obj2.x = 99;
  console.log('obj1.x:', obj1.x); // 99 — same object!
}
heapDemo();

// 2. Common memory leaks

// Leak 1: global variable accumulation
// window.leakyArray = []; // grows forever if you push to it

// Leak 2: Forgotten interval
let counter = 0;
const intervalId = setInterval(() => { counter++; }, 10);
setTimeout(() => {
  clearInterval(intervalId);   // ✅ always clear intervals you don't need
  console.log('Interval ran:', counter, 'times');
}, 100);

// Leak 3: Closure over large data
function leakyFactory() {
  const HUGE_DATA = new Array(10000).fill('data'); // 10k items
  return function() {
    // This closure keeps HUGE_DATA alive even if we only need 'length'
    return HUGE_DATA.length;
  };
}

function fixedFactory() {
  const HUGE_DATA = new Array(10000).fill('data');
  const length = HUGE_DATA.length; // extract only what you need
  // HUGE_DATA can now be GC'd; only 'length' (a number) is retained
  return function() { return length; };
}

// 3. WeakMap — memory-friendly metadata store
const metadata = new WeakMap();

class Component {
  constructor(name) {
    this.name = name;
    metadata.set(this, { renders: 0, createdAt: Date.now() });
  }
  render() {
    const meta = metadata.get(this);
    meta.renders++;
    console.log(\`\${this.name} rendered \${meta.renders} times\`);
  }
}

let btn = new Component('Button');
btn.render(); btn.render();
// When btn = null, the WeakMap entry is eligible for GC — no leak!
btn = null;
console.log('Button reference released — WeakMap entry can be GC\'d');

// 4. FinalizationRegistry (ES2021) — observe GC
const registry = new FinalizationRegistry((name) => {
  console.log(\`\${name} was garbage collected\`);
});

let temp = { data: 'temporary' };
registry.register(temp, 'TempObject');
temp = null; // eligible for GC

console.log('Memory Management complete ✅');
`,
  },

  {
    id: "garbage-collection",
    topicId: "garbage-collection",
    title: "Garbage Collection",
    category: "Performance & Memory",
    difficulty: "Advanced",
    time: "20 min",
    description:
      "Garbage Collection (GC) is the automatic process of reclaiming memory occupied by objects that are no longer reachable. V8 uses a generational mark-and-sweep algorithm: objects start in young space (Scavenger GC) and promoted to old space (Major GC) if they survive. Understanding when GC runs and what prevents objects from being collected helps you write GC-friendly code.",
    keyPoints: [
      "Mark-and-sweep: mark all reachable objects from GC roots, sweep unmarked ones",
      "Reachability: an object is reachable if it can be accessed from global scope, current call stack, or closures",
      "Young generation (nursery): fast Scavenger GC — most objects die here",
      "Old generation: slower Mark-Compact GC — runs less frequently",
      "GC roots: global object, call stack variables, CPU registers",
      "Circular references between objects are handled correctly by modern mark-and-sweep",
    ],
    code: `// ─── Garbage Collection ──────────────────────────────────────────

// 1. Reachability — what keeps objects alive
let obj = { data: 'alive' };   // reachable via 'obj' variable
let ref = obj;                  // also reachable via 'ref'

obj = null;  // obj no longer points to the object
// The object is STILL reachable via 'ref' — NOT GC'd yet

ref = null;  // now nothing points to the object — eligible for GC
console.log('Object eligible for GC after both references cleared');

// 2. Circular references — correctly handled by mark-and-sweep
function createCycle() {
  const a = { name: 'a' };
  const b = { name: 'b' };
  a.other = b;
  b.other = a;  // cycle!
  // Both a and b will be GC'd when this function returns
  // because neither is reachable from outside the function
}
createCycle();
console.log('Circular references collected correctly by modern GC');

// 3. Detached DOM nodes — common real-world leak
// (conceptual, not runnable in pure Node.js)
const domCache = new Map();
function createButton(id) {
  const data = { id, clickCount: 0, listeners: [] };
  domCache.set(id, data);  // stored in Map — prevented from GC!
  return data;
}
// Fix: use WeakMap instead
const domCacheWeak = new WeakMap();
// Now when the DOM element is removed, its entry can be GC'd

// 4. GC-friendly patterns
class Cache {
  // ❌ Memory leak — items never removed
  // #store = new Map();

  // ✅ WeakMap — values GC'd when keys have no other references
  #weakStore = new WeakMap();

  // ✅ LRU Cache — bounded size, evict oldest
  #lruStore  = new Map();
  #maxSize;

  constructor(maxSize = 100) { this.#maxSize = maxSize; }

  setLRU(key, value) {
    if (this.#lruStore.has(key)) this.#lruStore.delete(key); // refresh order
    this.#lruStore.set(key, value);
    if (this.#lruStore.size > this.#maxSize) {
      // Delete least recently used (first entry)
      this.#lruStore.delete(this.#lruStore.keys().next().value);
    }
  }

  getLRU(key) { return this.#lruStore.get(key); }
  get size()  { return this.#lruStore.size; }
}

const cache = new Cache(3);
cache.setLRU('a', 1);
cache.setLRU('b', 2);
cache.setLRU('c', 3);
cache.setLRU('d', 4);  // evicts 'a' (LRU)
console.log('Cache size:', cache.size);    // 3
console.log('a evicted:', cache.getLRU('a')); // undefined

// 5. Weak references (ES2021)
const obj2 = { important: 'data' };
const weakRef = new WeakRef(obj2);
console.log('Weak ref alive:', weakRef.deref()?.important); // data
// obj2 = null; after GC: weakRef.deref() returns undefined

console.log('Garbage Collection complete ✅');
`,
  },

  {
    id: "debounce-throttle",
    topicId: "debounce-throttle",
    title: "Debouncing & Throttling",
    category: "Performance & Memory",
    difficulty: "Advanced",
    time: "20 min",
    description:
      "Debouncing and Throttling are techniques to control how often a function executes in response to rapidly-firing events. Debounce delays execution until events stop firing for a specified wait period — ideal for search inputs and resize handlers. Throttle ensures a function fires at most once per time interval regardless of how many events occur — ideal for scroll handlers and game loops.",
    keyPoints: [
      'Debounce: wait until events STOP for `delay` ms, then fire once — "wait for silence"',
      'Throttle: fire at most once every `interval` ms — "rate limiter"',
      "Debounce with leading=true: fire immediately, then ignore until silence",
      "Trailing edge (default): fires after the last event; Leading edge: fires on first event",
      "requestAnimationFrame-based throttle is perfect for scroll/resize (aligns with display refresh)",
      "Lodash _.debounce and _.throttle are production-ready implementations",
    ],
    code: `// ─── Debouncing & Throttling ─────────────────────────────────────

// 1. Debounce — waits for silence
function debounce(fn, delay, { leading = false } = {}) {
  let timer;
  let lastCallTime = 0;

  return function debounced(...args) {
    const context = this;
    const now = Date.now();

    if (leading && now - lastCallTime > delay) {
      lastCallTime = now;
      fn.apply(context, args);
      return;
    }
    clearTimeout(timer);
    timer = setTimeout(() => {
      lastCallTime = Date.now();
      fn.apply(context, args);
    }, delay);
  };
}

// 2. Throttle — fires at most once per interval
function throttle(fn, interval) {
  let lastFired = 0;
  let timer;

  return function throttled(...args) {
    const context = this;
    const now = Date.now();
    const remaining = interval - (now - lastFired);

    if (remaining <= 0) {
      clearTimeout(timer);
      lastFired = now;
      fn.apply(context, args);
    } else {
      clearTimeout(timer);
      timer = setTimeout(() => {
        lastFired = Date.now();
        fn.apply(context, args);
      }, remaining);
    }
  };
}

// 3. rAF throttle — perfect for scroll/animations
function rafThrottle(fn) {
  let frameId = null;
  return function(...args) {
    if (frameId) return; // skip if frame already scheduled
    frameId = requestAnimationFrame
      ? requestAnimationFrame(() => { fn.apply(this, args); frameId = null; })
      : setTimeout(() => { fn.apply(this, args); frameId = null; }, 16);
  };
}

// 4. Demo — simulate rapid-fire events
const searchAPI = debounce((query) => {
  console.log(\`[debounce] API call for: "\${query}"\`);
}, 300);

const scrollHandler = throttle((pos) => {
  console.log(\`[throttle] Scroll at position: \${pos}\`);
}, 200);

// Simulate typing
let pos = 0;
const typingInterval = setInterval(() => {
  searchAPI(\`query_\${pos}\`);    // fires only after 300ms silence
  scrollHandler(pos * 10);      // fires at most every 200ms
  pos++;
  if (pos > 6) {
    clearInterval(typingInterval);
    console.log('Rapid events stopped — debounce will fire once more in 300ms');
  }
}, 50);

// 5. Cancel / flush support
function debounceAdvanced(fn, delay) {
  let timer;
  function debounced(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  }
  debounced.cancel = () => clearTimeout(timer);
  debounced.flush  = function(...args) { clearTimeout(timer); fn.apply(this, args); };
  return debounced;
}

const autosave = debounceAdvanced((data) => console.log('Saved:', data), 500);
autosave({ content: 'Draft 1' });
autosave({ content: 'Draft 2' });
autosave.flush({ content: 'Final' }); // save immediately

console.log('Debouncing & Throttling complete ✅');
`,
  },

  /* ═══════════════════════════════════════════════════════════
     MODULE 8 — Modern JavaScript (ES6+)
  ═══════════════════════════════════════════════════════════ */
  {
    id: "advanced-destructuring",
    topicId: "advanced-destructuring",
    title: "Advanced Destructuring",
    category: "Modern JavaScript",
    difficulty: "Intermediate",
    time: "20 min",
    description:
      "Destructuring assignment allows unpacking values from arrays or properties from objects into distinct variables. Advanced uses include nested destructuring, renaming during destructuring, default values, rest patterns, parameter destructuring, and computed property names. Combined with function parameters, destructuring makes APIs much more ergonomic.",
    keyPoints: [
      "Array destructuring uses position; object destructuring uses property names",
      "Rename while destructuring: const { oldName: newName } = obj",
      "Default values: const { x = 10 } = {} — only used when value is undefined",
      "Nested destructuring: const { a: { b: { c } } } = deep",
      "Rest pattern: const { a, ...rest } = obj — rest collects remaining properties",
      "Swap variables without temp: [a, b] = [b, a]",
    ],
    code: `// ─── Advanced Destructuring ──────────────────────────────────────

// 1. Array destructuring
const [first, second, , fourth, fifth = 'default'] = [10, 20, 30, 40];
console.log(first, second, fourth, fifth); // 10 20 40 default

// Swap without temp variable
let a = 1, b = 2;
[a, b] = [b, a];
console.log(a, b); // 2 1

// Rest in arrays
const [head, ...tail] = [1, 2, 3, 4, 5];
console.log(head, tail); // 1 [2,3,4,5]

// 2. Object destructuring
const { name, age, role: userRole = 'viewer' } = { name: 'Alice', age: 30 };
console.log(name, age, userRole); // Alice 30 viewer (renamed + default)

// Rest in objects
const { x, y, ...coords } = { x: 1, y: 2, z: 3, w: 4 };
console.log(x, y, coords); // 1 2 {z:3, w:4}

// 3. Nested destructuring
const user = {
  profile: {
    name:    'Bob',
    address: { city: 'Tokyo', zip: '100-0001' },
  },
  settings: { theme: 'dark', lang: 'en' },
};

const { profile: { name: userName, address: { city } }, settings: { theme } } = user;
console.log(userName, city, theme); // Bob Tokyo dark

// 4. Function parameter destructuring
function createCard({ title, body, tags = [], isPinned = false, author: { name: authorName } = {} }) {
  return { title, body, tags, isPinned, authorName };
}
console.log(createCard({
  title:    'ES6 Tips',
  body:     'Destructuring is awesome',
  tags:     ['js', 'es6'],
  author:   { name: 'Carol' },
}));

// 5. Destructuring in loops
const entries = [['key1', 'val1'], ['key2', 'val2'], ['key3', 'val3']];
for (const [key, value] of entries) {
  console.log(\`\${key} → \${value}\`);
}

// 6. Computed property names in destructuring
const prop = 'name';
const { [prop]: dynamicName } = { name: 'Dynamic!' };
console.log(dynamicName); // Dynamic!

// 7. Destructuring function return values
function minMax(arr) {
  return { min: Math.min(...arr), max: Math.max(...arr), avg: arr.reduce((s,n)=>s+n,0)/arr.length };
}
const { min, max, avg } = minMax([3, 1, 4, 1, 5, 9, 2, 6]);
console.log(\`min:\${min} max:\${max} avg:\${avg.toFixed(2)}\`);

console.log('Advanced Destructuring complete ✅');
`,
  },

  {
    id: "optional-chaining",
    topicId: "optional-chaining",
    title: "Optional Chaining (?.)",
    category: "Modern JavaScript",
    difficulty: "Beginner",
    time: "15 min",
    description:
      "The optional chaining operator (?.) allows you to safely access nested object properties without needing to explicitly check for null or undefined at each level. If any part of the chain is null or undefined, the entire expression short-circuits and returns undefined — instead of throwing a TypeError. It also works for method calls (?.) and bracket notation (?.[]).",
    keyPoints: [
      "obj?.prop — returns undefined if obj is null/undefined, otherwise obj.prop",
      "obj?.method() — calls method only if obj is not null/undefined",
      "arr?.[index] — safe bracket access on potentially null arrays",
      "Chains can be: user?.address?.city?.toLowerCase()",
      'Combines with ?? for clean defaults: user?.name ?? "Anonymous"',
      "Does NOT suppress errors thrown by the method — only handles null/undefined access",
    ],
    code: `// ─── Optional Chaining (?.) ──────────────────────────────────────

// 1. The problem it solves
const user1 = { address: { city: 'Tokyo' } };
const user2 = { address: null };
const user3 = null;

// Old way — verbose null guard
function getCityOld(u) {
  return u && u.address && u.address.city ? u.address.city : 'Unknown';
}
// New way — clean and readable
const getCity = u => u?.address?.city ?? 'Unknown';

console.log(getCity(user1)); // Tokyo
console.log(getCity(user2)); // Unknown
console.log(getCity(user3)); // Unknown

// 2. Method calls with ?.
const api = {
  getUser: () => ({ name: 'Alice' }),
};
const nullApi = null;

console.log(api?.getUser()?.name);      // Alice
console.log(nullApi?.getUser()?.name);  // undefined (no error!)

// 3. Bracket notation with ?.
const data = { users: ['Alice', 'Bob', 'Carol'] };
const empty = null;

console.log(data?.users?.[1]);   // Bob
console.log(empty?.users?.[0]);  // undefined

// 4. Dynamic method calls
function callMethod(obj, methodName) {
  return obj?.[methodName]?.();  // call method if exists
}

const calculator = { double: x => x * 2, square: x => x * x };
console.log(callMethod(calculator, 'double'));  // hmm, no arg — undefined
// better usage:
const withArg = (obj, method, ...args) => obj?.[method]?.(...args);
console.log(withArg(calculator, 'double', 5));   // 10
console.log(withArg(calculator, 'cube',   5));   // undefined — no error
console.log(withArg(null,       'double', 5));   // undefined — no error

// 5. Real-world: safe API response navigation
function parseApiResponse(response) {
  return {
    userId:    response?.data?.user?.id,
    userName:  response?.data?.user?.profile?.displayName ?? 'Anonymous',
    postCount: response?.data?.posts?.length ?? 0,
    firstTag:  response?.data?.posts?.[0]?.tags?.[0] ?? 'uncategorised',
  };
}

const good = { data: { user: { id: 1, profile: { displayName: 'Alice' } }, posts: [{ tags: ['js','react'] }] } };
const bad  = { data: null };
const ugly = null;

console.log(parseApiResponse(good));
console.log(parseApiResponse(bad));
console.log(parseApiResponse(ugly));

console.log('Optional Chaining complete ✅');
`,
  },

  {
    id: "nullish-coalescing",
    topicId: "nullish-coalescing",
    title: "Nullish Coalescing (??)",
    category: "Modern JavaScript",
    difficulty: "Beginner",
    time: "15 min",
    description:
      "The nullish coalescing operator (??) returns the right-hand side operand only when the left-hand side is null or undefined — NOT when it is 0, false, or an empty string. This is a critical distinction from the OR operator (||) which treats all falsy values as missing. The logical nullish assignment (??=) operator extends this for conditional assignment.",
    keyPoints: [
      'a ?? b — returns b only if a is null or undefined (not 0, "", false)',
      "Differs from || which treats ALL falsy values as missing",
      "??= (logical nullish assignment): assign only if currently null/undefined",
      'Chains naturally with ?.: user?.name ?? "Anonymous"',
      "Cannot mix with && or || without parentheses — syntactic restriction to prevent confusion",
      "Useful for: default values, config merging, optional property defaults",
    ],
    code: `// ─── Nullish Coalescing (??) ─────────────────────────────────────

// 1. The key difference: ?? vs ||
const config = {
  timeout:   0,          // zero is a valid value
  retries:   0,          // zero is a valid value
  logLevel: '',          // empty string is a valid value
  debug:    false,       // false is valid
  maxItems: null,        // null means "not configured"
  host:     undefined,   // undefined means "not set"
};

// Using || — BROKEN: treats 0, '', false as missing!
console.log('timeout  ||:', config.timeout  || 5000);  // 5000 (WRONG!)
console.log('logLevel ||:', config.logLevel || 'info'); // 'info' (WRONG!)
console.log('debug    ||:', config.debug    || true);   // true  (WRONG!)

// Using ?? — CORRECT: only falls back for null/undefined
console.log('timeout  ??:', config.timeout  ?? 5000);  // 0    ✅
console.log('logLevel ??:', config.logLevel ?? 'info'); // ''   ✅
console.log('debug    ??:', config.debug    ?? true);   // false ✅
console.log('maxItems ??:', config.maxItems ?? 100);    // 100  ✅ (was null)
console.log('host     ??:', config.host     ?? 'localhost'); // localhost ✅

// 2. Chaining with optional chaining
const getDisplayName = user => user?.profile?.displayName ?? user?.name ?? 'Anonymous';
console.log(getDisplayName({ profile: { displayName: 'JsGuru' } })); // JsGuru
console.log(getDisplayName({ name: 'Alice' }));                       // Alice
console.log(getDisplayName({}));                                       // Anonymous
console.log(getDisplayName(null));                                     // Anonymous

// 3. Logical nullish assignment ??=
const settings = { theme: 'dark', pageSize: null, lang: undefined };
settings.theme    ??= 'light';   // NO assignment — already 'dark'
settings.pageSize ??= 20;        // assigns 20 (was null)
settings.lang     ??= 'en';      // assigns 'en' (was undefined)
console.log(settings);           // { theme: 'dark', pageSize: 20, lang: 'en' }

// 4. Config merging with ??
function mergeConfig(userConfig = {}, defaults) {
  return Object.keys(defaults).reduce((merged, key) => {
    merged[key] = userConfig[key] ?? defaults[key];
    return merged;
  }, {});
}

const userCfg     = { timeout: 0, maxRetries: 5, debug: false };
const defaultsCfg = { timeout: 3000, maxRetries: 3, debug: true, baseURL: '/api' };
console.log(mergeConfig(userCfg, defaultsCfg));
// timeout: 0 (kept!), maxRetries: 5, debug: false (kept!), baseURL: '/api'

console.log('Nullish Coalescing complete ✅');
`,
  },

  {
    id: "dynamic-imports",
    topicId: "dynamic-imports",
    title: "Dynamic Imports",
    category: "Modern JavaScript",
    difficulty: "Advanced",
    time: "25 min",
    description:
      "Dynamic import() is a function-like expression that loads an ES module on demand and returns a Promise. Unlike static imports (which are hoisted and loaded at parse time), dynamic imports are lazy — the module is fetched, parsed, and evaluated only when the import() call is executed. This enables code splitting, lazy loading, conditional imports, and significant performance improvements.",
    keyPoints: [
      "import(moduleSpecifier) returns a Promise<module> — asynchronous, lazy",
      "Enables code splitting: bundle the app into smaller chunks loaded on demand",
      "The module specifier can be a dynamic expression (variable)",
      "Useful for: route-based splitting, feature flags, heavy libraries on demand",
      "Combined with async/await: const { default: Module } = await import(path)",
      "Vite and Webpack automatically split chunks at dynamic import() boundaries",
    ],
    code: `// ─── Dynamic Imports ─────────────────────────────────────────────
// Note: dynamic import() works natively in browsers and Node.js ESM modules.
// This example simulates the pattern since we're in a single-file context.

// 1. Simulated dynamic module loader
function simulateDynamicImport(moduleName) {
  const modules = {
    mathUtils: {
      add:      (a, b) => a + b,
      multiply: (a, b) => a * b,
      square:   (x)    => x * x,
    },
    stringUtils: {
      capitalize:  s => s.charAt(0).toUpperCase() + s.slice(1),
      camelToKebab: s => s.replace(/([A-Z])/g, m => \`-\${m.toLowerCase()}\`),
    },
    default: { version: '1.0.0' },
  };
  return Promise.resolve(modules[moduleName] || modules.default);
}

// 2. Lazy load on demand
async function processNumbers(nums) {
  // Only load math utils when actually needed
  const math = await simulateDynamicImport('mathUtils');
  return {
    sum:     nums.reduce(math.add, 0),
    squares: nums.map(math.square),
  };
}
processNumbers([1, 2, 3, 4, 5]).then(r => console.log('Number processing:', r));

// 3. Conditional import based on feature flag
async function initEditor(useAdvanced = false) {
  const moduleName = useAdvanced ? 'stringUtils' : 'mathUtils';
  const module = await simulateDynamicImport(moduleName);
  console.log('Loaded module keys:', Object.keys(module));
  return module;
}
initEditor(true).then(m => console.log('Capitalize test:', m.capitalize('hello')));

// 4. Route-based code splitting pattern (React Router style)
const routeModules = {
  '/':        () => simulateDynamicImport('default'),
  '/topics':  () => simulateDynamicImport('stringUtils'),
  '/compiler':() => simulateDynamicImport('mathUtils'),
};

async function loadRoute(path) {
  const loader = routeModules[path];
  if (!loader) { console.log('Route not found'); return null; }
  console.log(\`Loading route "\${path}"...\`);
  const module = await loader();
  console.log(\`Route "\${path}" loaded:\`, Object.keys(module));
  return module;
}

loadRoute('/topics');
loadRoute('/compiler');

// 5. Import with retry logic
async function importWithRetry(loader, retries = 3) {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      return await loader();
    } catch (err) {
      if (attempt === retries) throw err;
      console.log(\`Import attempt \${attempt} failed, retrying...\`);
      await new Promise(r => setTimeout(r, attempt * 100));
    }
  }
}

importWithRetry(() => simulateDynamicImport('mathUtils'))
  .then(m => console.log('Loaded with retry support:', Object.keys(m)));

console.log('Dynamic Imports complete ✅');
`,
  },

  {
    id: "esm-commonjs",
    topicId: "esm-commonjs",
    title: "ESM vs CommonJS",
    category: "Modern JavaScript",
    difficulty: "Advanced",
    time: "30 min",
    description:
      "JavaScript has two module systems: CommonJS (require/module.exports), invented by Node.js and dominant for years; and ES Modules (import/export), the native language standard from ES6. They have fundamental differences in how they load, parse, and share dependencies. Understanding both systems — and how to interop between them — is essential for any full-stack JavaScript developer.",
    keyPoints: [
      "CommonJS (CJS): synchronous require(), mutable module.exports, runtime evaluation",
      "ES Modules (ESM): static import/export, live bindings (not copies), async in browsers",
      "ESM is statically analysed — bundlers can tree-shake unused exports",
      "CJS exports are copied at require time; ESM exports are live bindings",
      'package.json "type": "module" activates ESM for .js files; or use .mjs extension',
      "ESM can import CJS (with caveats); CJS cannot require() ESM directly",
    ],
    code: `// ─── ESM vs CommonJS ─────────────────────────────────────────────
// Demonstrating the patterns and differences

// ════════════════════════════════════════════════════════════════
// COMMONJS PATTERNS (what you'd write in a .cjs or Node.js file)
// ════════════════════════════════════════════════════════════════

// --- mathLib.cjs ---
// let count = 0;
// function add(a, b) { count++; return a + b; }
// function getCallCount() { return count; }
// module.exports = { add, getCallCount };          // CommonJS export
// module.exports.PI = 3.14159;                      // add property later

// --- main.cjs ---
// const { add, getCallCount } = require('./mathLib.cjs');
// const mathLib = require('./mathLib.cjs'); // same cached instance!
// console.log(add(1, 2));           // 3
// console.log(mathLib.add(3, 4));   // 7 (same count++)
// console.log(getCallCount());      // 2

// ════════════════════════════════════════════════════════════════
// ES MODULE PATTERNS (what you'd write in a .mjs or type:module file)
// ════════════════════════════════════════════════════════════════

// --- mathLib.mjs ---
// export let count = 0;                            // named export (live binding)
// export function add(a, b) { count++; return a + b; }
// export function getCallCount() { return count; }
// export default { name: 'MathLib', version: '1.0' };  // default export
// export const PI = 3.14159;                           // named export

// --- main.mjs ---
// import defaultExport, { add, getCallCount, count } from './mathLib.mjs';
// import * as math from './mathLib.mjs';     // namespace import
// console.log(add(1, 2));   // 3
// console.log(count);       // 1 — LIVE BINDING — reflects the current value!
// // In CJS, this would be 0 (captured at require time)

// ════════════════════════════════════════════════════════════════
// Key difference demonstrated: LIVE BINDINGS vs COPIES
// ════════════════════════════════════════════════════════════════

// Simulate ESM live binding behaviour
const esmModule = (() => {
  let count = 0;                               // module-scoped variable

  // ESM live binding: importing code sees the CURRENT value
  const exports = {};
  Object.defineProperty(exports, 'count', {   // live binding via getter
    get: () => count,
    enumerable: true,
  });
  exports.increment = () => { count++; };
  return exports;
})();

console.log('ESM: count before:', esmModule.count);   // 0
esmModule.increment();
esmModule.increment();
console.log('ESM: count after:', esmModule.count);    // 2 — live binding!

// Simulate CJS copy behaviour
const cjsModule = (() => {
  let count = 0;
  return { count, increment: () => { count++; } };   // count is COPIED
})();

console.log('CJS: count before:', cjsModule.count);  // 0
cjsModule.increment();
cjsModule.increment();
console.log('CJS: count after:', cjsModule.count);   // still 0 — stale copy!

// Summary table
console.table({
  Feature:       { CJS: 'CommonJS',      ESM: 'ES Modules' },
  Syntax:        { CJS: 'require()',     ESM: 'import'      },
  Loading:       { CJS: 'Synchronous',   ESM: 'Async'       },
  Exports:       { CJS: 'Copies',        ESM: 'Live bindings'},
  'Tree-shake':  { CJS: 'No',           ESM: 'Yes'          },
});

console.log('ESM vs CommonJS complete ✅');
`,
  },

  /* ═══════════════════════════════════════════════════════════
     MODULE 9 — Browser & Web APIs
  ═══════════════════════════════════════════════════════════ */
  {
    id: "execution-context",
    topicId: "execution-context",
    title: "Execution Context & Call Stack",
    category: "Core Engine",
    difficulty: "Advanced",
    time: "25 min",
    description:
      "The Execution Context is the environment in which JavaScript code is evaluated and executed. Every function call creates a new execution context pushed onto the call stack. Each context contains a Variable Environment (storing variables and function declarations), a Lexical Environment, and a this binding. The call stack is a LIFO data structure — understanding it is key to debugging stack overflows and async code.",
    keyPoints: [
      "Global Execution Context: created first, hosts global variables and functions",
      "Function Execution Context: created on each function call, pushed onto the call stack",
      "Call Stack: LIFO — the currently executing function is always at the top",
      "Each context has: Variable Environment, Lexical Environment, ThisBinding",
      "Stack overflow: too many nested calls (e.g. infinite recursion) overflow the stack",
      "The single call stack is why JS is single-threaded — only one context executes at a time",
    ],
    code: `// ─── Execution Context & Call Stack ─────────────────────────────

// 1. Visualising the call stack
function multiply(a, b) {
  // Call stack: [global, multiply]
  console.log('  multiply: executing with', a, b);
  return a * b;
}

function square(n) {
  // Call stack: [global, square]
  console.log(' square: calling multiply');
  const result = multiply(n, n); // push multiply
  // Call stack: [global, square] again after multiply returns
  return result;
}

function printSquare(n) {
  // Call stack: [global, printSquare]
  console.log('printSquare: calling square');
  const sq = square(n); // push square
  console.log('Result:', sq);
}

// Call stack: [global]
printSquare(5);
// call stack returns to [global] after printSquare finishes

// 2. Variable Environment — hoisting
console.log('\\n--- Hoisting ---');
console.log(typeof hoistedFn);  // 'function' — fully hoisted
console.log(typeof hoistedVar); // 'undefined' — var hoisted but not initialised
// console.log(typeof tdzVar);  // ReferenceError — let is in TDZ

function hoistedFn() { return 'I am hoisted!'; }
var hoistedVar = 'initialised';
let tdzVar     = 'in TDZ until here';

// 3. Stack overflow
function recurse(n) {
  if (n <= 0) return 'done';
  return recurse(n - 1); // each call pushes a new context
}
// recurse(100000); // ❌ Maximum call stack size exceeded

// Safe: Tail-call optimised style with trampoline
function trampoline(fn) {
  return function(...args) {
    let result = fn(...args);
    while (typeof result === 'function') result = result();
    return result;
  };
}

function recurseSafe(n, acc = 0) {
  if (n <= 0) return acc;
  return () => recurseSafe(n - 1, acc + 1); // return a thunk instead of calling
}

const safeRecurse = trampoline(recurseSafe);
console.log('\\nTrampoline result:', safeRecurse(10000)); // 10000 — no stack overflow!

// 4. this binding in execution contexts
const obj = {
  name: 'MyObject',
  regularMethod: function() { return this.name; },        // this = obj
  arrowMethod:   () => typeof this,                        // this = outer (global/undefined in strict)
};
console.log('\\nthis in regular method:', obj.regularMethod()); // MyObject
console.log('this in arrow method:', obj.arrowMethod());        // object or undefined

console.log('Execution Context complete ✅');
`,
  },

  {
    id: "this-keyword",
    topicId: "this-keyword",
    title: "this Keyword (All Scenarios)",
    category: "Core Engine",
    difficulty: "Advanced",
    time: "30 min",
    description:
      "The this keyword in JavaScript is not lexical — its value is determined by HOW a function is called, not where it is defined (with the exception of arrow functions). There are four binding rules: default, implicit, explicit (call/apply/bind), and new. Arrow functions inherit this from their lexical scope. Mastering this is crucial for class-based OOP, event handlers, and working with frameworks.",
    keyPoints: [
      "Default binding: this = global object (window/globalThis) in non-strict, undefined in strict mode",
      "Implicit binding: obj.method() — this = obj (the object before the dot)",
      "Explicit binding: call(thisArg), apply(thisArg, argsArray), bind(thisArg) — force this",
      "new binding: new Ctor() — this = newly created object",
      "Arrow functions: no own this — capture this from enclosing lexical scope at definition time",
      "Priority: new > explicit > implicit > default",
    ],
    code: `// ─── this Keyword — All Scenarios ───────────────────────────────
'use strict'; // use strict mode for clearer behaviour

// 1. Default binding (strict: undefined, sloppy: globalThis)
function showThis() {
  // In strict mode: this = undefined
  // In sloppy mode: this = globalThis (window in browser)
  console.log('Default this:', typeof this);
}
showThis(); // undefined (strict)

// 2. Implicit binding — object before the dot
const user = {
  name: 'Alice',
  greet() { return \`Hi, I'm \${this.name}\`; },
  getNameFn() { return this.name; },
};
console.log(user.greet()); // "Hi, I'm Alice" — this = user

// Implicit binding LOST when method is extracted
const greetFn = user.greet;
// greetFn(); // undefined or TypeError — 'this' is no longer user

// 3. Explicit binding
function introduce(greeting, punctuation) {
  return \`\${greeting}, I'm \${this.name}\${punctuation}\`;
}

const alice = { name: 'Alice' };
const bob   = { name: 'Bob'   };

console.log(introduce.call(alice,  'Hello', '!'));       // Hello, I'm Alice!
console.log(introduce.apply(bob,  ['Hey',  '...']));     // Hey, I'm Bob...

const aliceIntro = introduce.bind(alice, 'Howdy');       // partial application
console.log(aliceIntro('~'));                            // Howdy, I'm Alice~
console.log(aliceIntro('?'));                            // Howdy, I'm Alice?

// 4. new binding
function Person(name, age) {
  // this = newly created object
  this.name = name;
  this.age  = age;
}
const carol = new Person('Carol', 25);
console.log(carol.name, carol.age); // Carol 25

// 5. Arrow functions — lexical this
class Timer {
  constructor() {
    this.ticks = 0;
  }
  start() {
    // Arrow function captures 'this' from start()'s context (the Timer instance)
    const tick = () => {
      this.ticks++;  // 'this' is always the Timer instance ✅
    };
    tick(); tick(); tick();
    console.log('Ticks:', this.ticks);  // 3
  }
  startBroken() {
    // Regular function loses 'this'
    function tick() {
      // this.ticks++; // ❌ TypeError in strict mode
    }
  }
}
new Timer().start();

// 6. Priority: new > explicit > implicit > default
function Fn() { console.log('new binding this:', this.constructor === Fn); }
const bound = Fn.bind({ custom: 'explicit' });
new bound(); // new wins over bind — true

console.log('this Keyword complete ✅');
`,
  },

  {
    id: "scope-chain",
    topicId: "scope-chain",
    title: "Scope Chain & Hoisting",
    category: "Core Engine",
    difficulty: "Advanced",
    time: "25 min",
    description:
      "The scope chain is the ordered sequence of lexical environments that JavaScript searches when resolving a variable name. Each function creates a new scope; block scopes (if, for, let/const) create sub-scopes. Hoisting is the JavaScript engine's pre-pass that records variable and function declarations before any code runs — understanding it explains many surprising behaviors.",
    keyPoints: [
      "Scope chain: inner → outer → ... → global — walks until variable found or ReferenceError",
      "var is function-scoped and hoisted to the top of its function (initialised as undefined)",
      "let/const are block-scoped and hoisted but NOT initialised — Temporal Dead Zone",
      "Function declarations are fully hoisted (both declaration and body)",
      "Function expressions (const fn = function() {}) are NOT hoisted",
      "var leaks out of blocks (if, for) but not out of functions",
    ],
    code: `// ─── Scope Chain & Hoisting ──────────────────────────────────────

// 1. Scope chain lookup
const global = 'global';
function outer() {
  const outerVar = 'outer';
  function middle() {
    const middleVar = 'middle';
    function inner() {
      const innerVar = 'inner';
      // Chain: inner → middle → outer → global
      console.log(innerVar, middleVar, outerVar, global);
    }
    inner();
  }
  middle();
}
outer();

// 2. var hoisting — full demo
console.log('\\n--- var hoisting ---');
console.log(x); // undefined (NOT ReferenceError) — var is hoisted
var x = 5;
console.log(x); // 5

// 3. let/const TDZ
console.log('\\n--- TDZ ---');
{
  // console.log(y); // ❌ ReferenceError — y is in TDZ
  let y = 10;
  console.log(y); // 10 — accessible after declaration
}

// 4. Function declaration vs expression hoisting
console.log('\\n--- Function hoisting ---');
console.log(declared()); // ✅ works — fully hoisted
// console.log(expressed()); // ❌ TypeError — not yet initialised

function declared() { return 'declared function — fully hoisted'; }
const expressed = () => 'arrow function expression — NOT hoisted';

// 5. var vs let in loops
console.log('\\n--- Loop scope ---');
for (var i = 0; i < 3; i++) {} // i leaks out
console.log('var i after loop:', i); // 3

for (let j = 0; j < 3; j++) {} // j stays in block
// console.log(j); // ReferenceError

// 6. var escapes blocks but not functions
if (true) {
  var blockVar = 'var escapes blocks'; // accessible outside if
  let blockLet = 'let stays in block'; // NOT accessible outside
}
console.log(blockVar); // 'var escapes blocks'
// console.log(blockLet); // ReferenceError

// 7. Shadowing
const shadow = 'global shadow';
function shadowDemo() {
  const shadow = 'function shadow'; // shadows global
  {
    const shadow = 'block shadow';  // shadows function
    console.log('Inner shadow:', shadow);
  }
  console.log('Function shadow:', shadow);
}
shadowDemo();
console.log('Global shadow:', shadow);

console.log('Scope Chain & Hoisting complete ✅');
`,
  },

  /* ═══════════════════════════════════════════════════════════
     MODULE 10 — API & Networking
  ═══════════════════════════════════════════════════════════ */
  {
    id: "fetch-advanced",
    topicId: "fetch-advanced",
    title: "Fetch API (Advanced)",
    category: "API & Networking",
    difficulty: "Advanced",
    time: "30 min",
    description:
      "The Fetch API provides a Promise-based interface for making HTTP requests. Advanced usage covers request configuration (headers, body, method), response handling (streaming, blob, text), abort controllers for cancellation, timeout patterns, interceptors, and retry logic with exponential backoff.",
    keyPoints: [
      "fetch() returns a Promise that resolves to a Response object — check ok before consuming",
      "Response.json(), .text(), .blob(), .arrayBuffer(), .formData() — different body consumers",
      "AbortController + AbortSignal allows cancellation of in-flight requests",
      "Timeout: Promise.race(fetch(...), timeoutPromise) or AbortController with setTimeout",
      "Interceptor pattern: wrap fetch to add auth headers, logging, or error normalisation globally",
      "Exponential backoff for retries: wait 2^attempt * 100ms between retries",
    ],
    code: `// ─── Fetch API (Advanced) ────────────────────────────────────────

// 1. Fetch wrapper with full config support
async function apiFetch(url, options = {}) {
  const {
    method = 'GET',
    body,
    headers = {},
    timeout = 8000,
  } = options;

  const controller = new AbortController();
  const timeoutId  = setTimeout(() => controller.abort(), timeout);

  try {
    const response = await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json', ...headers },
      body:    body ? JSON.stringify(body) : undefined,
      signal:  controller.signal,
    });

    if (!response.ok) {
      throw new Error(\`HTTP \${response.status}: \${response.statusText}\`);
    }
    return await response.json();
  } catch (err) {
    if (err.name === 'AbortError') throw new Error(\`Request timed out after \${timeout}ms\`);
    throw err;
  } finally {
    clearTimeout(timeoutId);
  }
}

// 2. Retry with exponential backoff
async function fetchWithRetry(url, options = {}, retries = 3) {
  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      return await apiFetch(url, options);
    } catch (err) {
      if (attempt === retries) throw err;
      const wait = Math.min(2 ** attempt * 100, 2000);
      console.log(\`Attempt \${attempt + 1} failed: \${err.message}. Retrying in \${wait}ms...\`);
      await new Promise(r => setTimeout(r, wait));
    }
  }
}

// 3. Request interceptor pattern
const httpClient = (() => {
  const interceptors = { request: [], response: [], error: [] };
  let authToken = 'Bearer demo-token';

  return {
    addRequestInterceptor:  fn => interceptors.request.push(fn),
    addResponseInterceptor: fn => interceptors.response.push(fn),
    addErrorInterceptor:    fn => interceptors.error.push(fn),

    async get(url) {
      let config = { url, headers: {} };
      // Apply request interceptors
      for (const fn of interceptors.request) { config = await fn(config); }

      try {
        const res  = await fetch(config.url, { headers: config.headers });
        let data   = await res.json();
        // Apply response interceptors
        for (const fn of interceptors.response) { data = await fn(data); }
        return data;
      } catch (err) {
        let e = err;
        for (const fn of interceptors.error) { e = await fn(e); }
        throw e;
      }
    },
  };
})();

// Add auth interceptor
httpClient.addRequestInterceptor(config => ({
  ...config,
  headers: { ...config.headers, Authorization: 'Bearer my-token' },
}));
httpClient.addResponseInterceptor(data => {
  console.log('[Interceptor] Response received, items:', Array.isArray(data) ? data.length : 1);
  return data;
});

// 4. Demo calls using JSONPlaceholder
console.log('Fetching users...');
apiFetch('https://jsonplaceholder.typicode.com/users')
  .then(users => console.log('Users:', users.slice(0,2).map(u => u.name)))
  .catch(err  => console.error('Error:', err.message));

apiFetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(post => console.log('Post title:', post.title))
  .catch(err => console.error('Post error:', err.message));

console.log('Fetch API complete ✅');
`,
  },

  {
    id: "error-handling-async",
    topicId: "error-handling-async",
    title: "Error Handling in Async Code",
    category: "API & Networking",
    difficulty: "Advanced",
    time: "25 min",
    description:
      "Robust error handling in asynchronous JavaScript requires understanding multiple failure modes: network errors, HTTP error status codes, JSON parse failures, timeouts, and logical errors in data. Patterns include the Result type (returning {ok, error} instead of throwing), global error handlers, error boundaries, and structured logging.",
    keyPoints: [
      "Always .catch() or try/catch async/await — unhandled rejections crash Node.js",
      "Distinguish: network error (no response), HTTP error (bad status), parse error (bad JSON)",
      "Result pattern: return { ok: true, data } | { ok: false, error } — no exceptions",
      'Global handlers: window.addEventListener("unhandledrejection") / process.on("unhandledRejection")',
      "Custom error classes: extend Error, add .code, .status, .context for rich error info",
      "Error boundaries (React) catch render-time errors; try/catch catches async errors in useEffect",
    ],
    code: `// ─── Error Handling in Async Code ────────────────────────────────

// 1. Custom error hierarchy
class AppError extends Error {
  constructor(message, { code, status, context } = {}) {
    super(message);
    this.name    = this.constructor.name;
    this.code    = code    || 'UNKNOWN_ERROR';
    this.status  = status  || 500;
    this.context = context || {};
  }
}

class NetworkError   extends AppError {}
class ValidationError extends AppError { constructor(msg, ctx) { super(msg, { code: 'VALIDATION_ERROR', status: 422, context: ctx }); } }
class NotFoundError  extends AppError { constructor(msg) { super(msg, { code: 'NOT_FOUND', status: 404 }); } }
class AuthError      extends AppError { constructor(msg) { super(msg, { code: 'UNAUTHORIZED', status: 401 }); } }

// 2. Result type — no exception throwing in business logic
function Result(ok, value) {
  return ok
    ? { ok: true,  data:  value }
    : { ok: false, error: value };
}
Result.ok  = v => Result(true,  v);
Result.err = e => Result(false, e);

async function safeApiCall(url) {
  try {
    const res = await fetch(url);
    if (res.status === 404) return Result.err(new NotFoundError(\`Not found: \${url}\`));
    if (res.status === 401) return Result.err(new AuthError('Please log in'));
    if (!res.ok)            return Result.err(new NetworkError(\`HTTP \${res.status}\`));

    let data;
    try { data = await res.json(); }
    catch { return Result.err(new AppError('Invalid JSON response', { code: 'PARSE_ERROR' })); }

    return Result.ok(data);
  } catch (err) {
    if (err.name === 'AbortError') return Result.err(new NetworkError('Request timed out'));
    return Result.err(new NetworkError(err.message, { code: 'NETWORK_ERROR' }));
  }
}

// Usage — no try/catch at call site!
async function loadPost(id) {
  const result = await safeApiCall(\`https://jsonplaceholder.typicode.com/posts/\${id}\`);
  if (!result.ok) {
    console.error(\`[\${result.error.code}] \${result.error.message}\`);
    return null;
  }
  return result.data;
}

loadPost(1).then(post  => post && console.log('Loaded post:', post.title));
loadPost(99999).then(p => console.log('Invalid post:', p)); // null

// 3. Graceful degradation with fallbacks
async function loadWithFallback(primaryUrl, fallbackData) {
  const result = await safeApiCall(primaryUrl);
  return result.ok ? result.data : fallbackData;
}

loadWithFallback(
  'https://jsonplaceholder.typicode.com/users/1',
  { name: 'Guest', email: 'guest@example.com' }
).then(user => console.log('User:', user.name));

// 4. Global unhandled rejection handler
process?.on?.('unhandledRejection', (reason) => {
  console.error('[GLOBAL] Unhandled Promise Rejection:', reason);
});
// In browser: window.addEventListener('unhandledrejection', e => ...)

console.log('Error Handling in Async Code complete ✅');
`,
  },

  /* ═══════════════════════════════════════════════════════════
     MODULE 11 — Testing & Debugging
  ═══════════════════════════════════════════════════════════ */
  {
    id: "clean-code",
    topicId: "clean-code",
    title: "Clean & Maintainable Code",
    category: "Testing & Debugging",
    difficulty: "Intermediate",
    time: "25 min",
    description:
      "Clean code is not just about aesthetics — it directly impacts how quickly bugs are found, how safely features are added, and how confidently a team can work in a codebase. The principles of clean JavaScript include meaningful naming, small single-responsibility functions, avoiding side effects, preferring declarative over imperative style, and writing self-documenting code.",
    keyPoints: [
      "Names should reveal intent: getUserById not getUD, processPayment not doPay",
      'Functions should do ONE thing — if you need "and" to describe it, split it',
      "Prefer pure functions — predictable, testable, easy to understand",
      "DRY (Don't Repeat Yourself) — extract repeated logic into named functions",
      "Early returns reduce nesting: guard clauses at the top of functions",
      "Comments explain WHY, not WHAT — the code should explain what it does",
    ],
    code: `// ─── Clean & Maintainable Code ───────────────────────────────────

// ═══════════════ BEFORE (Messy) ════════════════
function proc(u, c) {
  let r = [];
  for (let i = 0; i < u.length; i++) {
    if (u[i].a === true && u[i].s >= 18) {
      if (c === 'USD') { r.push({ n: u[i].n, m: '$' + (u[i].b * 1.1).toFixed(2) }); }
      else { r.push({ n: u[i].n, m: '€' + (u[i].b * 0.9).toFixed(2) }); }
    }
  }
  return r;
}

// ═══════════════ AFTER (Clean) ═════════════════

// Named, self-documenting constants
const ADULT_AGE_THRESHOLD = 18;
const USD_MARKUP = 1.10;
const EUR_MARKUP = 0.90;

// Pure, single-purpose helper functions with clear names
const isEligibleUser = user => user.isActive && user.age >= ADULT_AGE_THRESHOLD;

const formatAmount = (amount, currency) => {
  const rate   = currency === 'USD' ? USD_MARKUP : EUR_MARKUP;
  const symbol = currency === 'USD' ? '$' : '€';
  return \`\${symbol}\${(amount * rate).toFixed(2)}\`;
};

// Main function — short, readable, declarative
function getEligibleUserBillings(users, currency) {
  return users
    .filter(isEligibleUser)
    .map(user => ({
      name:   user.name,
      amount: formatAmount(user.balance, currency),
    }));
}

// Test with sample data
const users = [
  { name: 'Alice', isActive: true,  age: 25, balance: 100 },
  { name: 'Bob',   isActive: false, age: 30, balance: 200 }, // inactive
  { name: 'Carol', isActive: true,  age: 16, balance: 50  }, // underage
  { name: 'Dave',  isActive: true,  age: 28, balance: 150 },
];

console.log('USD billings:', getEligibleUserBillings(users, 'USD'));
console.log('EUR billings:', getEligibleUserBillings(users, 'EUR'));

// ── Early returns (guard clauses) ────────────────────────────
// BEFORE:
function processOrderBefore(order) {
  if (order) {
    if (order.items && order.items.length > 0) {
      if (order.user && order.user.isVerified) {
        return { status: 'processed', total: order.items.reduce((s, i) => s + i.price, 0) };
      }
    }
  }
  return null;
}

// AFTER (guard clauses eliminate deep nesting):
function processOrder(order) {
  if (!order)                        return null;
  if (!order.items?.length)          return { status: 'empty' };
  if (!order.user?.isVerified)       return { status: 'unverified' };

  const total = order.items.reduce((sum, item) => sum + item.price, 0);
  return { status: 'processed', total };
}

console.log(processOrder({ items: [{price:10},{price:20}], user: { isVerified: true } }));
console.log(processOrder(null));
console.log(processOrder({ items: [], user: { isVerified: true } }));

console.log('Clean Code complete ✅');
`,
  },

  /* ═══════════════════════════════════════════════════════════
     MODULE 12 — Storage & Browser APIs
  ═══════════════════════════════════════════════════════════ */
  {
    id: "cookies-storage",
    topicId: "cookies-storage",
    title: "Cookies vs Storage",
    category: "Storage & Browser APIs",
    difficulty: "Intermediate",
    time: "20 min",
    description:
      "The browser provides multiple client-side storage mechanisms: Cookies (sent with every HTTP request, size-limited, expiry-aware), localStorage (persistent, 5-10MB, synchronous), sessionStorage (tab-scoped, cleared on close), and IndexedDB (async, large objects, queryable). Choosing the right one depends on persistence needs, size, and whether the data needs to be sent to the server.",
    keyPoints: [
      "Cookies: 4KB limit, sent with every HTTP request, domain/path/expiry scoped",
      "localStorage: 5-10MB, persists across sessions, synchronous (blocks main thread)",
      "sessionStorage: same as localStorage but cleared when the tab is closed",
      "Both storage APIs are synchronous — for large data, prefer IndexedDB",
      "Cookies: use HttpOnly (prevent XS access) + Secure (HTTPS only) + SameSite (CSRF protection)",
      "localStorage is vulnerable to XSS — never store tokens in it if you can use HttpOnly cookies",
    ],
    code: `// ─── Cookies vs Web Storage ──────────────────────────────────────

// ── LocalStorage wrapper with JSON serialisation ──────────────
const storage = {
  set(key, value, ttlMs = null) {
    const item = {
      value,
      expiry: ttlMs ? Date.now() + ttlMs : null,
    };
    try {
      localStorage.setItem(key, JSON.stringify(item));
      return true;
    } catch (e) {
      console.error('localStorage.setItem failed:', e.message);
      return false;
    }
  },

  get(key) {
    try {
      const raw = localStorage.getItem(key);
      if (!raw) return null;
      const item = JSON.parse(raw);
      if (item.expiry && Date.now() > item.expiry) {
        localStorage.removeItem(key);
        return null; // expired
      }
      return item.value;
    } catch {
      return null;
    }
  },

  remove(key) { localStorage.removeItem(key); },
  clear()     { localStorage.clear(); },

  getAll() {
    return Object.fromEntries(
      Object.keys(localStorage).map(k => [k, this.get(k)])
    );
  },
};

// Usage
storage.set('user', { name: 'Alice', role: 'admin' });
storage.set('token', 'abc123', 60_000); // expires in 60 seconds
console.log('User:', storage.get('user'));

// ── SessionStorage — tab-scoped ───────────────────────────────
const session = {
  set: (k, v) => sessionStorage.setItem(k, JSON.stringify(v)),
  get: (k)    => { try { return JSON.parse(sessionStorage.getItem(k)); } catch { return null; } },
};
session.set('pageVisits', 1);
console.log('Session page visits:', session.get('pageVisits'));

// ── Cookie utilities ──────────────────────────────────────────
const cookies = {
  set(name, value, options = {}) {
    const { maxAge, path = '/', secure = false, sameSite = 'Lax' } = options;
    let cookie = \`\${encodeURIComponent(name)}=\${encodeURIComponent(value)}\`;
    if (maxAge)   cookie += \`; Max-Age=\${maxAge}\`;
    cookie += \`; Path=\${path}\`;
    if (secure)   cookie += '; Secure';
    cookie += \`; SameSite=\${sameSite}\`;
    // document.cookie = cookie; // (disabled — no DOM in this runner)
    console.log('Would set cookie:', cookie);
  },

  get(name) {
    const entry = document?.cookie
      ?.split('; ')
      .find(row => row.startsWith(\`\${name}=\`));
    return entry ? decodeURIComponent(entry.split('=')[1]) : null;
  },

  delete(name) {
    // document.cookie = \`\${name}=; Max-Age=0; Path=/\`;
    console.log(\`Would delete cookie: \${name}\`);
  },
};

cookies.set('theme', 'dark', { maxAge: 86400, sameSite: 'Strict' });
cookies.set('session', 'token123', { secure: true, sameSite: 'Lax' });

// ── Comparison table ──────────────────────────────────────────
console.table({
  Cookie:        { size: '4KB', persist: 'configurable', server: '✅ sent', httpOnly: '✅' },
  localStorage:  { size: '5MB', persist: 'forever',      server: '❌',      httpOnly: '❌' },
  sessionStorage:{ size: '5MB', persist: 'tab session',  server: '❌',      httpOnly: '❌' },
  IndexedDB:     { size: 'GBs', persist: 'forever',      server: '❌',      httpOnly: '❌' },
});

console.log('Cookies vs Storage complete ✅');
`,
  },

  {
    id: "web-workers",
    topicId: "web-workers",
    title: "Web Workers (Intro)",
    category: "Storage & Browser APIs",
    difficulty: "Advanced",
    time: "30 min",
    description:
      "Web Workers enable true background threading in JavaScript — running scripts in parallel without blocking the main UI thread. Workers cannot access the DOM but can use fetch, IndexedDB, WebSockets, and most Web APIs. Communication happens via postMessage and MessageEvent. SharedArrayBuffer + Atomics enable shared memory and synchronisation between workers.",
    keyPoints: [
      "Workers run in a separate thread — no access to DOM, window, or document",
      "Communication: main ↔ worker via postMessage(data) and onmessage events",
      "data is structured-cloned (copied by value, not reference) — no shared memory by default",
      "Terminate workers: worker.terminate() or self.close() inside worker",
      "SharedArrayBuffer enables true shared memory — requires cross-origin isolation headers",
      "Use workers for: heavy computation, image processing, cryptography, parsing large JSON",
    ],
    code: `// ─── Web Workers ─────────────────────────────────────────────────
// In a real application: worker code goes in a separate .js file
// Here we use Blob URLs to demonstrate the pattern inline

// ── Worker code (would normally be in worker.js) ──────────────
const workerCode = \`
  // Inside the worker — no DOM, no window
  self.onmessage = function({ data }) {
    const { type, payload } = data;

    switch (type) {
      case 'COMPUTE_PRIMES': {
        const primes = computePrimes(payload.limit);
        self.postMessage({ type: 'PRIMES_RESULT', payload: { primes, count: primes.length } });
        break;
      }
      case 'SORT_LARGE': {
        const sorted = [...payload.data].sort((a, b) => a - b);
        self.postMessage({ type: 'SORT_RESULT', payload: sorted });
        break;
      }
    }
  };

  function computePrimes(limit) {
    // Sieve of Eratosthenes
    const sieve = new Uint8Array(limit + 1).fill(1);
    sieve[0] = sieve[1] = 0;
    for (let i = 2; i * i <= limit; i++) {
      if (sieve[i]) for (let j = i * i; j <= limit; j += i) sieve[j] = 0;
    }
    const primes = [];
    for (let i = 2; i <= limit; i++) if (sieve[i]) primes.push(i);
    return primes;
  }
\`;

// ── Main thread code ──────────────────────────────────────────
function createWorker(code) {
  const blob = new Blob([code], { type: 'application/javascript' });
  const url  = URL.createObjectURL(blob);
  return new Worker(url);
}

// Check if Worker is available (not available in all environments)
if (typeof Worker !== 'undefined') {
  const worker = createWorker(workerCode);

  // Listen for messages from worker
  worker.onmessage = ({ data }) => {
    const { type, payload } = data;
    if (type === 'PRIMES_RESULT') {
      console.log(\`Found \${payload.count} primes up to limit\`);
      console.log('Last 5 primes:', payload.primes.slice(-5));
      worker.terminate(); // always clean up!
    }
  };

  worker.onerror = (err) => {
    console.error('Worker error:', err.message);
    worker.terminate();
  };

  // Send work to the worker (runs in background, doesn't block UI)
  console.log('Dispatching heavy computation to worker...');
  worker.postMessage({ type: 'COMPUTE_PRIMES', payload: { limit: 50000 } });
  console.log('Main thread is FREE while worker computes!');

} else {
  // Fallback: run on main thread (blocks)
  console.log('Worker not available — running on main thread');
  const limit = 50000;
  const sieve = new Uint8Array(limit + 1).fill(1);
  sieve[0] = sieve[1] = 0;
  for (let i = 2; i*i <= limit; i++) if (sieve[i]) for (let j=i*i; j<=limit; j+=i) sieve[j]=0;
  const primes = [];
  for (let i = 2; i <= limit; i++) if (sieve[i]) primes.push(i);
  console.log(\`Found \${primes.length} primes. Last 5:\`, primes.slice(-5));
}

console.log('Web Workers complete ✅');
`,
  },
];

export default JsAdvTopicPagesData;
