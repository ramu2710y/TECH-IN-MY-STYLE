// jsIntTopicExamples.js — JavaScript Intermediate Course Code Examples
// Complete, runnable examples for all 44 topics

export const jsIntTopicExamples = [
  // ─────────────────────────────────────────────
  // CATEGORY 1: Advanced Data Types
  // ─────────────────────────────────────────────
  {
    topic: "arrays-advanced",
    description:
      "Advanced array creation, multi-dimensional arrays, and array-like objects",
    code: `// ── Advanced Arrays ──────────────────────────────────────────
// 1. Array constructor vs literal
const byLiteral   = [1, 2, 3];
const byConstructor = new Array(3);        // [ empty × 3 ]
const filled      = new Array(3).fill(0);  // [0, 0, 0]
console.log('Filled:', filled);

// 2. Array.from() — build arrays from any iterable or array-like
const fromString  = Array.from('hello');           // ['h','e','l','l','o']
const fromRange   = Array.from({ length: 5 }, (_, i) => i + 1); // [1,2,3,4,5]
const fromSet     = Array.from(new Set([1, 2, 2, 3]));           // [1,2,3]
console.log('From string:', fromString);
console.log('From range:',  fromRange);
console.log('From Set:',    fromSet);

// 3. Array.of() — create array from arguments (unlike new Array)
const nums = Array.of(7);    // [7]  — NOT [ empty × 7 ]
console.log('Array.of(7):', nums);

// 4. Multi-dimensional arrays (2D grid)
const grid = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
console.log('Center cell:', grid[1][1]); // 5
grid.forEach(row => console.log(row.join(' | ')));

// 5. Array-like objects — convert NodeList / arguments to true array
function sumAll() {
  const argsArray = Array.from(arguments); // arguments is array-like
  return argsArray.reduce((acc, n) => acc + n, 0);
}
console.log('sumAll(1,2,3,4):', sumAll(1, 2, 3, 4)); // 10

// 6. Sparse arrays and Array.isArray()
const sparse = [1, , , 4];
console.log('Length:', sparse.length); // 4
console.log('Is array:', Array.isArray(sparse)); // true
`,
  },
  {
    topic: "objects-deep",
    description:
      "Deep object usage — property shorthand, computed keys, property descriptors",
    code: `// ── Deep Object Usage ────────────────────────────────────────
// 1. Property shorthand
const name = 'Alice';
const age  = 30;
const user = { name, age };  // same as { name: name, age: age }
console.log('Shorthand:', user);

// 2. Method shorthand
const calc = {
  value: 10,
  double() { return this.value * 2; },    // shorthand
  triple: function() { return this.value * 3; } // classic
};
console.log('Double:', calc.double()); // 20

// 3. Computed property keys
const field = 'score';
const level = 3;
const data = {
  [field]: 100,
  ['level_' + level]: 'expert',
  [Symbol('id')]: 42
};
console.log('Computed:', data.score, data.level_3);

// 4. Object.defineProperty() — control descriptors
const config = {};
Object.defineProperty(config, 'MAX_SIZE', {
  value: 1000,
  writable: false,    // cannot reassign
  enumerable: true,   // shows in for...in / Object.keys
  configurable: false // cannot delete or redefine
});
config.MAX_SIZE = 9999; // silently fails in non-strict
console.log('MAX_SIZE:', config.MAX_SIZE); // still 1000

// 5. Getters and setters
const circle = {
  radius: 5,
  get area()  { return Math.PI * this.radius ** 2; },
  set diameter(d) { this.radius = d / 2; }
};
console.log('Area:', circle.area.toFixed(2));
circle.diameter = 20;
console.log('New radius:', circle.radius); // 10

// 6. Object.keys / values / entries
const product = { id: 1, title: 'Pen', price: 1.5 };
console.log('Keys:',    Object.keys(product));
console.log('Values:',  Object.values(product));
console.log('Entries:', Object.entries(product));
`,
  },
  {
    topic: "nested-objects-arrays",
    description:
      "Working with deeply nested objects and arrays — access, update, traverse",
    code: `// ── Nested Objects & Arrays ──────────────────────────────────
const company = {
  name: 'TechCorp',
  departments: [
    {
      dept: 'Engineering',
      employees: [
        { id: 1, name: 'Alice', skills: ['JS', 'React'] },
        { id: 2, name: 'Bob',   skills: ['Python', 'Django'] }
      ]
    },
    {
      dept: 'Design',
      employees: [
        { id: 3, name: 'Carol', skills: ['Figma', 'CSS'] }
      ]
    }
  ]
};

// 1. Accessing deeply nested values
const firstEmployee = company.departments[0].employees[0];
console.log('First employee:', firstEmployee.name); // Alice
console.log('Her skills:', firstEmployee.skills[0]); // JS

// 2. Optional chaining — safe deep access
const ceo = company?.leadership?.ceo ?? 'Not defined';
console.log('CEO:', ceo); // Not defined (no error)

// 3. Traverse all employees with flatMap
const allEmployees = company.departments.flatMap(d => d.employees);
console.log('All employees:', allEmployees.map(e => e.name));

// 4. Collect all skills across company
const allSkills = company.departments
  .flatMap(d => d.employees)
  .flatMap(e => e.skills);
console.log('All skills:', allSkills);

// 5. Immutably update a nested value
const updated = {
  ...company,
  departments: company.departments.map(dept =>
    dept.dept === 'Engineering'
      ? {
          ...dept,
          employees: dept.employees.map(emp =>
            emp.id === 1
              ? { ...emp, skills: [...emp.skills, 'Node.js'] }
              : emp
          )
        }
      : dept
  )
};
const aliceUpdated = updated.departments[0].employees[0];
console.log('Updated skills:', aliceUpdated.skills);

// 6. Deep clone using JSON (simple objects only)
const clone = JSON.parse(JSON.stringify(company));
clone.name = 'OtherCorp';
console.log('Original unchanged:', company.name); // TechCorp
`,
  },

  // ─────────────────────────────────────────────
  // CATEGORY 2: Array Methods
  // ─────────────────────────────────────────────
  {
    topic: "map",
    description: "map() — transform every element and return a new array",
    code: `// ── Array.map() ───────────────────────────────────────────────
const numbers = [1, 2, 3, 4, 5];

// 1. Double every number
const doubled = numbers.map(num => num * 2);
console.log('Doubled:', doubled); // [2, 4, 6, 8, 10]

// 2. Extract a property from objects
const users = [
  { id: 1, name: 'Alice', age: 25 },
  { id: 2, name: 'Bob',   age: 30 },
  { id: 3, name: 'Carol', age: 22 }
];
const names = users.map(user => user.name);
console.log('Names:', names); // ['Alice', 'Bob', 'Carol']

// 3. Format prices with currency symbol
const prices = [10.5, 25.99, 5.0, 99.99];
const formatted = prices.map(p => '$' + p.toFixed(2));
console.log('Prices:', formatted);

// 4. Use the index argument to add sequence numbers
const ranked = users.map((user, index) => ({
  rank: index + 1,
  name: user.name,
  age: user.age
}));
console.log('Ranked:', ranked);

// 5. Convert Celsius to Fahrenheit
const celsius    = [0, 20, 37, 100];
const fahrenheit = celsius.map(c => (c * 9) / 5 + 32);
console.log('Fahrenheit:', fahrenheit); // [32, 68, 98.6, 212]

// 6. Chain map with filter
const evenSquares = numbers
  .filter(n => n % 2 === 0)
  .map(n => n * n);
console.log('Even squares:', evenSquares); // [4, 16]
`,
  },
  {
    topic: "filter",
    description: "filter() — select elements matching a condition",
    code: `// ── Array.filter() ───────────────────────────────────────────
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 1. Filter even numbers
const evens = numbers.filter(n => n % 2 === 0);
console.log('Evens:', evens); // [2, 4, 6, 8, 10]

// 2. Filter by object property
const products = [
  { name: 'Laptop',  price: 999,  inStock: true  },
  { name: 'Phone',   price: 499,  inStock: false },
  { name: 'Tablet',  price: 299,  inStock: true  },
  { name: 'Monitor', price: 399,  inStock: false },
  { name: 'Keyboard',price: 79,   inStock: true  }
];

const available   = products.filter(p => p.inStock);
const affordable  = products.filter(p => p.price < 400);
console.log('In stock:',   available.map(p => p.name));
console.log('Under $400:', affordable.map(p => p.name));

// 3. Combine conditions
const goodDeal = products.filter(p => p.inStock && p.price < 400);
console.log('Good deals:', goodDeal.map(p => p.name));

// 4. Remove falsy values from an array
const messy = [0, 'hello', null, 42, '', undefined, false, 'world'];
const clean = messy.filter(Boolean);
console.log('Clean:', clean); // ['hello', 42, 'world']

// 5. Filter unique values (deduplicate)
const tags = ['js', 'css', 'js', 'html', 'css', 'js'];
const unique = tags.filter((tag, index, arr) => arr.indexOf(tag) === index);
console.log('Unique tags:', unique);

// 6. Search filter — case-insensitive string match
const query  = 'ta';
const result = products.filter(p => p.name.toLowerCase().includes(query));
console.log('Search results:', result.map(p => p.name));
`,
  },
  {
    topic: "reduce",
    description: "reduce() — accumulate array values into a single result",
    code: `// ── Array.reduce() ───────────────────────────────────────────
const numbers = [1, 2, 3, 4, 5];

// 1. Sum all numbers
const sum = numbers.reduce((acc, n) => acc + n, 0);
console.log('Sum:', sum); // 15

// 2. Product of all numbers
const product = numbers.reduce((acc, n) => acc * n, 1);
console.log('Product:', product); // 120

// 3. Find max value
const max = numbers.reduce((acc, n) => (n > acc ? n : acc), -Infinity);
console.log('Max:', max); // 5

// 4. Flatten nested arrays
const nested = [[1, 2], [3, 4], [5, 6]];
const flat   = nested.reduce((acc, arr) => acc.concat(arr), []);
console.log('Flat:', flat); // [1,2,3,4,5,6]

// 5. Count occurrences of values
const fruits = ['apple', 'banana', 'apple', 'cherry', 'banana', 'apple'];
const count  = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});
console.log('Count:', count); // { apple: 3, banana: 2, cherry: 1 }

// 6. Group objects by a property
const people = [
  { name: 'Alice', dept: 'Engineering' },
  { name: 'Bob',   dept: 'Design'      },
  { name: 'Carol', dept: 'Engineering' },
  { name: 'Dave',  dept: 'Design'      }
];
const grouped = people.reduce((acc, person) => {
  const key = person.dept;
  if (!acc[key]) acc[key] = [];
  acc[key].push(person.name);
  return acc;
}, {});
console.log('Grouped:', grouped);

// 7. Cart total with discount
const cart = [{ item: 'Book', price: 15, qty: 2 }, { item: 'Pen', price: 3, qty: 5 }];
const total = cart.reduce((acc, { price, qty }) => acc + price * qty, 0);
console.log('Cart total: $' + total); // $45
`,
  },
  {
    topic: "forEach",
    description: "forEach() — iterate through each array element (no return)",
    code: `// ── Array.forEach() ──────────────────────────────────────────
const fruits = ['apple', 'banana', 'cherry', 'date'];

// 1. Basic iteration — log each item
fruits.forEach(fruit => console.log('Fruit:', fruit));

// 2. Using index and array arguments
fruits.forEach((fruit, index, arr) => {
  console.log(index + 1 + '/' + arr.length + ' — ' + fruit);
});

// 3. Mutating an external data structure
const salesData = [
  { product: 'Laptop',  units: 3, price: 999  },
  { product: 'Phone',   units: 5, price: 499  },
  { product: 'Tablet',  units: 2, price: 299  }
];
let totalRevenue = 0;
salesData.forEach(item => {
  totalRevenue += item.units * item.price;
});
console.log('Total Revenue: $' + totalRevenue); // $5974

// 4. Build HTML strings (side-effect pattern)
const listItems = [];
fruits.forEach(fruit => {
  listItems.push('<li>' + fruit + '</li>');
});
console.log('HTML:', listItems.join(''));

// 5. forEach vs map — forEach returns undefined
const doubled = [];
[1, 2, 3].forEach(n => doubled.push(n * 2));
console.log('Doubled:', doubled); // [2, 4, 6]

// 6. Nested forEach — iterate a 2D grid
const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
matrix.forEach((row, r) => {
  row.forEach((cell, c) => {
    process.stdout.write(cell + ' ');
  });
  console.log('');
});
`,
  },
  {
    topic: "find",
    description: "find() — return the first element that passes a test",
    code: `// ── Array.find() & findIndex() ───────────────────────────────
const users = [
  { id: 1, name: 'Alice',  role: 'admin' },
  { id: 2, name: 'Bob',    role: 'user'  },
  { id: 3, name: 'Carol',  role: 'user'  },
  { id: 4, name: 'Dave',   role: 'admin' }
];

// 1. Find by id
const found = users.find(u => u.id === 3);
console.log('Found:', found); // { id: 3, name: 'Carol', role: 'user' }

// 2. Returns undefined if not found
const ghost = users.find(u => u.id === 99);
console.log('Ghost:', ghost); // undefined

// 3. Find first admin
const firstAdmin = users.find(u => u.role === 'admin');
console.log('First admin:', firstAdmin.name); // Alice

// 4. findIndex() — same but returns the index
const idx = users.findIndex(u => u.name === 'Carol');
console.log('Carol index:', idx); // 2

// 5. Use findIndex to update an item immutably
const updatedUsers = [...users];
const targetIdx = updatedUsers.findIndex(u => u.id === 2);
if (targetIdx !== -1) {
  updatedUsers[targetIdx] = { ...updatedUsers[targetIdx], role: 'admin' };
}
console.log('Bob new role:', updatedUsers[1].role); // admin

// 6. Find in numbers — first value over threshold
const scores  = [42, 78, 91, 55, 88, 60];
const passing = scores.find(s => s >= 90);
console.log('First passing score:', passing); // 91

// 7. Guard with optional chaining when result may be undefined
const missingUser = users.find(u => u.id === 0);
console.log('Safe name:', missingUser?.name ?? 'Unknown'); // Unknown
`,
  },
  {
    topic: "some",
    description: "some() — check if at least one element passes a test",
    code: `// ── Array.some() ─────────────────────────────────────────────
const numbers = [1, 3, 5, 7, 8, 11];

// 1. Check if any number is even
const hasEven = numbers.some(n => n % 2 === 0);
console.log('Has even:', hasEven); // true

// 2. Check if any is negative
const hasNegative = numbers.some(n => n < 0);
console.log('Has negative:', hasNegative); // false

// 3. Form validation — check for empty fields
const formFields = [
  { label: 'Name',  value: 'Alice' },
  { label: 'Email', value: ''      },
  { label: 'Phone', value: '123'   }
];
const hasEmpty = formFields.some(field => field.value.trim() === '');
console.log('Has empty field:', hasEmpty); // true
if (hasEmpty) {
  const emptyField = formFields.find(f => f.value.trim() === '');
  console.log('Empty field is:', emptyField.label); // Email
}

// 4. Permission check — does user have required role?
const userRoles = ['editor', 'viewer'];
const adminRoles = ['admin', 'superadmin'];
const hasPermission = userRoles.some(role => adminRoles.includes(role));
console.log('Has permission:', hasPermission); // false

// 5. Stop early — some() short-circuits on first true
let checked = 0;
const earlyStop = [10, 20, 3, 40, 50].some(n => {
  checked++;
  return n < 5;
});
console.log('Checked', checked, 'elements before stopping'); // 3

// 6. Check if cart contains a specific item
const cart = ['apple', 'banana', 'grape'];
const wantsGrape = cart.some(item => item === 'grape');
console.log('Grape in cart:', wantsGrape); // true
`,
  },
  {
    topic: "every",
    description: "every() — check if all elements pass a test",
    code: `// ── Array.every() ────────────────────────────────────────────
const scores  = [88, 92, 75, 95, 83];
const numbers = [2, 4, 6, 8, 10];

// 1. Are all scores above 70?
const allPassing = scores.every(s => s >= 70);
console.log('All passing:', allPassing); // true

// 2. Are all numbers even?
const allEven = numbers.every(n => n % 2 === 0);
console.log('All even:', allEven); // true

// 3. Validate an entire form
const formFields = [
  { label: 'Name',  value: 'Alice'        },
  { label: 'Email', value: 'a@example.com' },
  { label: 'Phone', value: '555-0100'     }
];
const allFilled = formFields.every(field => field.value.trim() !== '');
console.log('Form valid:', allFilled); // true

// 4. Check if all products are in stock
const inventory = [
  { name: 'Pen',    inStock: true  },
  { name: 'Pencil', inStock: true  },
  { name: 'Ruler',  inStock: false }
];
const fullyStocked = inventory.every(item => item.inStock);
console.log('Fully stocked:', fullyStocked); // false

// 5. Combine every() with some() for range validation
const temperatures = [18, 22, 19, 25, 21];
const comfortable = temperatures.every(t => t >= 15 && t <= 30);
console.log('All comfortable:', comfortable); // true

// 6. Short-circuit behavior — stops on first false
let count = 0;
const result = [100, 200, 3, 400].every(n => {
  count++;
  return n > 10;
});
console.log('Checked:', count, '— Result:', result);
// Checked: 3 — Result: false (stopped at element 3)
`,
  },

  // ─────────────────────────────────────────────
  // CATEGORY 3: Functions Intermediate
  // ─────────────────────────────────────────────
  {
    topic: "callback-functions",
    description:
      "Callback functions — passing functions as arguments to other functions",
    code: `// ── Callback Functions ───────────────────────────────────────
// 1. Basic callback pattern
function greet(name, formatter) {
  return 'Hello, ' + formatter(name) + '!';
}
const toUpper = str => str.toUpperCase();
const toLower = str => str.toLowerCase();
console.log(greet('Alice', toUpper)); // Hello, ALICE!
console.log(greet('Alice', toLower)); // Hello, alice!

// 2. Built-in callbacks: setTimeout
console.log('Start');
setTimeout(() => console.log('Callback fires after 1s'), 1000);
console.log('End — this runs before the callback!');

// 3. Custom iteration with a callback
function repeat(times, callback) {
  for (let i = 0; i < times; i++) {
    callback(i);
  }
}
repeat(4, i => console.log('Step', i));

// 4. Async-style callback — simulate a data fetch
function fetchUser(id, onSuccess, onError) {
  const db = { 1: 'Alice', 2: 'Bob' };
  if (db[id]) {
    onSuccess({ id, name: db[id] });
  } else {
    onError(new Error('User ' + id + ' not found'));
  }
}
fetchUser(1, user => console.log('Got user:', user.name), err => console.error(err.message));
fetchUser(9, user => console.log('Got:', user),           err => console.error('Error:', err.message));

// 5. Callbacks with array methods
const numbers = [5, 3, 8, 1, 9, 2];
numbers.sort((a, b) => a - b); // comparison callback
console.log('Sorted:', numbers);

// 6. Named vs anonymous callbacks
function logResult(result) {
  console.log('Result:', result);
}
[10, 20, 30].forEach(logResult); // named callback reference
`,
  },
  {
    topic: "higher-order-functions",
    description:
      "Higher-order functions — functions that accept or return other functions",
    code: `// ── Higher-Order Functions ───────────────────────────────────
// A HOF either accepts a function as argument or returns one (or both)

// 1. HOF that accepts a function — custom "applyTwice"
function applyTwice(fn, value) {
  return fn(fn(value));
}
const addThree = x => x + 3;
console.log(applyTwice(addThree, 10)); // 16

// 2. HOF that returns a function — multiplier factory
function multiplier(factor) {
  return function (number) {
    return number * factor;
  };
}
const double = multiplier(2);
const triple = multiplier(3);
console.log('Double 5:', double(5)); // 10
console.log('Triple 5:', triple(5)); // 15

// 3. Function composition
const compose = (f, g) => x => f(g(x));
const add1    = x => x + 1;
const square  = x => x * x;
const squareThenAdd1 = compose(add1, square);
console.log('squareThenAdd1(4):', squareThenAdd1(4)); // 17

// 4. HOF for memoization
function memoize(fn) {
  const cache = {};
  return function (...args) {
    const key = JSON.stringify(args);
    if (cache[key] !== undefined) {
      console.log('Cache hit!');
      return cache[key];
    }
    cache[key] = fn(...args);
    return cache[key];
  };
}
const slowSquare = memoize(n => { /* heavy calc */ return n * n; });
console.log(slowSquare(7)); // computes: 49
console.log(slowSquare(7)); // Cache hit! 49

// 5. HOF for partial application
function partial(fn, ...presetArgs) {
  return function (...laterArgs) {
    return fn(...presetArgs, ...laterArgs);
  };
}
const add   = (a, b, c) => a + b + c;
const add10 = partial(add, 10);
console.log('add10(5, 2):', add10(5, 2)); // 17

// 6. Real-world: logging wrapper HOF
function withLogging(fn) {
  return function (...args) {
    console.log('Calling with:', args);
    const result = fn(...args);
    console.log('Result:', result);
    return result;
  };
}
const loggedDouble = withLogging(double);
loggedDouble(7);
`,
  },
  {
    topic: "closures",
    description:
      "Closures — functions that remember variables from their enclosing scope",
    code: `// ── Closures ──────────────────────────────────────────────────
// A closure is a function that retains access to its lexical scope
// even after the outer function has finished executing.

// 1. Basic closure — counter factory
function makeCounter(start = 0) {
  let count = start; // closed-over variable
  return {
    increment() { count++; },
    decrement() { count--; },
    reset()     { count = start; },
    value()     { return count; }
  };
}
const counter = makeCounter(10);
counter.increment();
counter.increment();
counter.decrement();
console.log('Count:', counter.value()); // 11

// 2. Two independent closures share nothing
const counterA = makeCounter(0);
const counterB = makeCounter(100);
counterA.increment();
counterB.increment();
console.log('A:', counterA.value()); // 1
console.log('B:', counterB.value()); // 101

// 3. Private state via closure
function bankAccount(initialBalance) {
  let balance = initialBalance;
  return {
    deposit(amount)  { balance += amount; return balance; },
    withdraw(amount) {
      if (amount > balance) { console.log('Insufficient funds'); return balance; }
      balance -= amount;
      return balance;
    },
    getBalance() { return balance; }
  };
}
const account = bankAccount(500);
account.deposit(200);
account.withdraw(100);
console.log('Balance:', account.getBalance()); // 600

// 4. Closure in a loop — classic pitfall & fix
const funcs = [];
for (let i = 0; i < 3; i++) {    // 'let' creates a new binding per iteration
  funcs.push(() => console.log('i =', i));
}
funcs.forEach(f => f()); // 0, 1, 2  (correct with let)

// 5. Closure for caching (memoization)
function memoSquare() {
  const cache = {};
  return function (n) {
    if (n in cache) return cache[n];
    cache[n] = n * n;
    return cache[n];
  };
}
const sq = memoSquare();
console.log(sq(5));  // 25
console.log(sq(5));  // 25 (from cache)
`,
  },
  {
    topic: "default-parameters",
    description:
      "Default parameters — set fallback values for function arguments",
    code: `// ── Default Parameters ───────────────────────────────────────
// 1. Basic default value
function greet(name = 'stranger') {
  return 'Hello, ' + name + '!';
}
console.log(greet('Alice'));    // Hello, Alice!
console.log(greet());          // Hello, stranger!
console.log(greet(undefined)); // Hello, stranger! — undefined triggers default

// 2. Multiple defaults
function createProfile(name = 'Anonymous', age = 0, role = 'viewer') {
  return { name, age, role };
}
console.log(createProfile('Bob', 25));        // role defaults to 'viewer'
console.log(createProfile());                 // all defaults

// 3. Default that references a previous parameter
function range(start = 0, end = start + 10) {
  return { start, end };
}
console.log(range());        // { start: 0, end: 10 }
console.log(range(5));       // { start: 5, end: 15 }
console.log(range(5, 20));   // { start: 5, end: 20 }

// 4. Default that calls a function
function timestamp() { return new Date().toISOString(); }
function logEvent(event, time = timestamp()) {
  console.log('[' + time + ']', event);
}
logEvent('Login');   // uses current time
logEvent('Logout', '2025-01-01T00:00:00Z'); // uses provided time

// 5. Defaults with destructuring
function buildURL({ protocol = 'https', host = 'localhost', port = 3000 } = {}) {
  return protocol + '://' + host + ':' + port;
}
console.log(buildURL({ host: 'api.example.com', port: 8080 }));
console.log(buildURL()); // uses all defaults

// 6. null does NOT trigger defaults — only undefined does
function test(a = 'default') { return a; }
console.log(test(null));      // null — default NOT applied
console.log(test(undefined)); // 'default' — default applied
console.log(test(0));         // 0 — default NOT applied (0 is not undefined)
`,
  },
  {
    topic: "rest-parameters",
    description:
      "Rest parameters (...args) — collect multiple arguments into an array",
    code: `// ── Rest Parameters ──────────────────────────────────────────
// Rest must be the LAST parameter and there can only be one per function

// 1. Basic rest — collect all arguments
function sumAll(...numbers) {
  return numbers.reduce((acc, n) => acc + n, 0);
}
console.log(sumAll(1, 2, 3));          // 6
console.log(sumAll(10, 20, 30, 40));   // 100
console.log(sumAll());                 // 0

// 2. Mix regular and rest parameters
function logMessage(level, ...messages) {
  const prefix = '[' + level.toUpperCase() + ']';
  messages.forEach(msg => console.log(prefix, msg));
}
logMessage('info', 'Server started', 'Listening on port 3000');
logMessage('error', 'Connection failed');

// 3. Rest vs arguments object
function oldStyle() {
  // arguments is array-LIKE, not a real array
  return Array.from(arguments).reduce((a, b) => a + b, 0);
}
function newStyle(...args) {
  // args is a real array — all array methods work directly
  return args.reduce((a, b) => a + b, 0);
}
console.log(oldStyle(1, 2, 3)); // 6
console.log(newStyle(1, 2, 3)); // 6

// 4. Spread + Rest together
function first(head, ...tail) {
  console.log('Head:', head);
  console.log('Tail:', tail);
}
first('a', 'b', 'c', 'd'); // head: 'a', tail: ['b','c','d']

// 5. Practical: tag logger with metadata
function createLogger(module) {
  return function (...args) {
    console.log('[' + module + ']', ...args);
  };
}
const authLog = createLogger('Auth');
authLog('User logged in', { userId: 42 });
authLog('Token refreshed');

// 6. Merge multiple arrays using rest
function mergeArrays(...arrays) {
  return [].concat(...arrays);
}
console.log(mergeArrays([1, 2], [3, 4], [5, 6])); // [1,2,3,4,5,6]
`,
  },

  // ─────────────────────────────────────────────
  // CATEGORY 4: ES6+ Features
  // ─────────────────────────────────────────────
  {
    topic: "let-const-deep",
    description:
      "let vs const deep dive — scope, hoisting, temporal dead zone, best practices",
    code: `// ── let vs const Deep Dive ───────────────────────────────────
// 1. Block scope — let/const are scoped to their nearest { }
{
  let   blockLet   = 'only here';
  const blockConst = 'only here too';
  console.log(blockLet, blockConst);
}
// console.log(blockLet); // ReferenceError — not accessible here

// 2. var leaks out of blocks (but not functions)
{
  var leaked = 'I escape the block!';
}
console.log(leaked); // works (bad practice)

// 3. Temporal Dead Zone (TDZ) — let/const exist but can't be read
//    before their declaration line
console.log(typeof undeclared); // 'undefined' — no TDZ for var
// console.log(tdz); // ReferenceError: Cannot access 'tdz' before initialization
let tdz = 'now accessible';

// 4. const does NOT mean immutable for objects/arrays
const user = { name: 'Alice', age: 25 };
user.age = 26;          // OK — mutating the object
// user = {};           // TypeError — reassigning the binding
console.log('User:', user);

const nums = [1, 2, 3];
nums.push(4);           // OK
console.log('Nums:', nums);

// 5. Freeze for true immutability
const CONFIG = Object.freeze({ API_URL: 'https://api.example.com', timeout: 5000 });
CONFIG.timeout = 9999;  // silently ignored
console.log('Timeout:', CONFIG.timeout); // 5000

// 6. Loop variable behavior
for (let i = 0; i < 3; i++) { /* i is block-scoped per iteration */ }
for (var j = 0; j < 3; j++) { /* j leaks out */ }
console.log('j after loop:', j); // 3

// 7. Best practice guide
// const  — default choice (signals "this binding won't change")
// let    — only when reassignment is needed
// var    — avoid in modern code
`,
  },
  {
    topic: "arrow-functions-advanced",
    description:
      "Arrow functions deep — implicit returns, this binding, when to use",
    code: `// ── Arrow Functions — Deep Dive ──────────────────────────────
// 1. Syntax variations
const add        = (a, b) => a + b;             // implicit return
const square     = n => n * n;                  // single param, no parens needed
const greet      = () => 'Hello!';              // no params
const makeObj    = (x, y) => ({ x, y });        // return object — wrap in ()
const multiLine  = (a, b) => {                  // block body needs explicit return
  const sum = a + b;
  return sum;
};
console.log(add(3, 4), square(5), greet(), makeObj(1, 2));

// 2. Implicit return with array methods
const numbers  = [1, 2, 3, 4, 5];
const doubled  = numbers.map(n => n * 2);
const odds     = numbers.filter(n => n % 2 !== 0);
console.log('Doubled:', doubled);
console.log('Odds:', odds);

// 3. The key difference — 'this' binding
//    Arrow functions DO NOT have their own 'this'
//    They capture 'this' from the enclosing lexical scope

function Timer() {
  this.seconds = 0;
  // Regular function would lose 'this' inside setInterval:
  // setInterval(function() { this.seconds++; }, 1000); // 'this' is undefined/global

  // Arrow function inherits 'this' from the Timer constructor:
  setInterval(() => {
    this.seconds++;
    if (this.seconds <= 3) console.log('Tick:', this.seconds);
  }, 1000);
}
// const t = new Timer(); // uncomment to test in browser

// 4. When NOT to use arrow functions
const obj = {
  value: 42,
  // BAD — arrow function: 'this' is NOT obj
  getValueArrow: () => undefined, // would be global/undefined this.value
  // GOOD — regular method shorthand
  getValue() { return this.value; }
};
console.log('getValue:', obj.getValue()); // 42

// 5. Arrow functions can't be constructors
// const Foo = () => {}; new Foo(); // TypeError: Foo is not a constructor

// 6. No 'arguments' object in arrow functions
function outer() {
  const inner = () => {
    console.log(arguments[0]); // uses OUTER's arguments
  };
  inner();
}
outer('inherited!'); // 'inherited!'
`,
  },
  {
    topic: "template-literals",
    description:
      "Template literals — interpolation, multiline strings, tagged templates",
    code: `// ── Template Literals ────────────────────────────────────────
// Use backtick characters to delimit template literals

// 1. Basic string interpolation
const name  = 'Alice';
const score = 95;
console.log('Name: ' + name + ', Score: ' + score); // old way
console.log(\`Name: \${name}, Score: \${score}\`);     // template literal

// 2. Expressions — any valid JS goes inside \${ }
const a = 10, b = 5;
console.log(\`\${a} + \${b} = \${a + b}\`);
console.log(\`Is passing: \${score >= 50 ? 'Yes' : 'No'}\`);
console.log(\`Square of a: \${a ** 2}\`);

// 3. Multiline strings — no more \\n needed
const html = \`
  <div class="card">
    <h2>\${name}</h2>
    <p>Score: \${score}</p>
  </div>
\`;
console.log(html);

// 4. Nesting template literals
const items = ['apple', 'banana', 'cherry'];
const list  = \`<ul>\${items.map(item => \`<li>\${item}</li>\`).join('')}</ul>\`;
console.log(list);

// 5. Tagged templates — process a template with a function
function highlight(strings, ...values) {
  return strings.reduce((result, str, i) => {
    const value = values[i] !== undefined ? \`<strong>\${values[i]}</strong>\` : '';
    return result + str + value;
  }, '');
}
const product = 'Laptop';
const price   = 999;
const output  = highlight\`The \${product} costs \$\${price} today.\`;
console.log(output);
// The <strong>Laptop</strong> costs $<strong>999</strong> today.

// 6. Safe SQL / URL builder pattern
function buildQuery(strings, ...values) {
  const sanitized = values.map(v => encodeURIComponent(String(v)));
  return strings.reduce((q, str, i) => q + str + (sanitized[i] || ''), '');
}
const table  = 'users';
const userId = '42 OR 1=1'; // attempted injection
const query  = buildQuery\`SELECT * FROM \${table} WHERE id=\${userId}\`;
console.log(query);
`,
  },
  {
    topic: "destructuring",
    description:
      "Destructuring — extract values from arrays and objects elegantly",
    code: `// ── Destructuring ─────────────────────────────────────────────
// 1. Array destructuring
const [first, second, third] = [10, 20, 30, 40];
console.log(first, second, third); // 10 20 30

// 2. Skip elements with commas
const [,, thirdItem] = ['a', 'b', 'c', 'd'];
console.log('Third:', thirdItem); // c

// 3. Rest in array destructuring
const [head, ...tail] = [1, 2, 3, 4, 5];
console.log('Head:', head, '— Tail:', tail); // 1 — [2,3,4,5]

// 4. Default values in array destructuring
const [x = 0, y = 0, z = 0] = [5, 10];
console.log(x, y, z); // 5 10 0

// 5. Swap variables
let p = 1, q = 2;
[p, q] = [q, p];
console.log('Swapped:', p, q); // 2 1

// 6. Object destructuring
const user = { id: 1, name: 'Alice', age: 28, role: 'admin' };
const { name, age, role } = user;
console.log(name, age, role); // Alice 28 admin

// 7. Rename during destructuring
const { name: userName, role: userRole = 'guest' } = user;
console.log(userName, userRole); // Alice admin

// 8. Nested object destructuring
const order = { id: 99, customer: { name: 'Bob', address: { city: 'NYC' } } };
const { customer: { name: custName, address: { city } } } = order;
console.log(custName, city); // Bob NYC

// 9. Destructuring in function parameters
function displayUser({ name, age, role = 'viewer' }) {
  console.log(\`\${name} (\${age}) — \${role}\`);
}
displayUser({ name: 'Carol', age: 22 }); // Carol (22) — viewer

// 10. Mixed array + object destructuring
const response = { status: 200, data: [{ id: 1, title: 'Intro to JS' }] };
const { status, data: [firstCourse] } = response;
console.log(status, firstCourse.title); // 200 Intro to JS
`,
  },
  {
    topic: "spread-operator",
    description:
      "Spread operator (...) — expand arrays/objects in expressions and calls",
    code: `// ── Spread Operator (...) ────────────────────────────────────
// 1. Spread array into function arguments
const nums = [3, 1, 4, 1, 5, 9, 2, 6];
console.log('Max:', Math.max(...nums)); // 9
console.log('Min:', Math.min(...nums)); // 1

// 2. Copy an array (shallow)
const original = [1, 2, 3];
const copy     = [...original];
copy.push(4);
console.log('Original:', original); // [1,2,3] — unchanged
console.log('Copy:', copy);         // [1,2,3,4]

// 3. Merge arrays
const arr1  = [1, 2, 3];
const arr2  = [4, 5, 6];
const arr3  = [7, 8, 9];
const merged = [...arr1, ...arr2, ...arr3];
console.log('Merged:', merged);

// 4. Insert in the middle
const beginning = [1, 2];
const end       = [6, 7];
const full      = [...beginning, 3, 4, 5, ...end];
console.log('Full:', full);

// 5. Spread with strings
const chars = [..."hello"];
console.log('Chars:', chars); // ['h','e','l','l','o']

// 6. Spread to copy objects (shallow)
const defaults = { theme: 'dark', lang: 'en', fontSize: 14 };
const userPrefs = { lang: 'fr', fontSize: 18 };
const settings  = { ...defaults, ...userPrefs }; // userPrefs overrides defaults
console.log('Settings:', settings);

// 7. Add / override properties
const base = { id: 1, name: 'Widget', price: 10 };
const sale = { ...base, price: 7.5, onSale: true };
console.log('Sale:', sale);

// 8. Convert Set to array (unique values)
const rawTags   = ['js', 'css', 'js', 'html', 'css'];
const uniqueTags = [...new Set(rawTags)];
console.log('Unique:', uniqueTags);

// 9. Pass object fields as function arguments
function createUser(name, age, role) {
  return { name, age, role };
}
const params = { name: 'Dave', age: 31, role: 'editor' };
const newUser = createUser(...Object.values(params));
console.log('User:', newUser);
`,
  },

  // ─────────────────────────────────────────────
  // CATEGORY 5: Asynchronous JavaScript
  // ─────────────────────────────────────────────
  {
    topic: "setTimeout",
    description: "setTimeout() — execute code after a delay",
    code: `// ── setTimeout() ─────────────────────────────────────────────
// setTimeout(callback, delayMs, ...args) — runs callback ONCE after delay

// 1. Basic usage
console.log('1 — synchronous start');
setTimeout(() => {
  console.log('3 — runs after 1 second');
}, 1000);
console.log('2 — synchronous end'); // this runs BEFORE the timeout fires

// 2. Pass arguments to the callback
function greet(name, greeting) {
  console.log(greeting + ', ' + name + '!');
}
setTimeout(greet, 500, 'Alice', 'Hello'); // Hello, Alice! after 500ms

// 3. Cancelling a timeout with clearTimeout
const timerId = setTimeout(() => {
  console.log('This will NOT print');
}, 2000);
clearTimeout(timerId); // cancel before it fires
console.log('Timer', timerId, 'cancelled');

// 4. setTimeout with 0ms delay — defers to end of call stack
console.log('A');
setTimeout(() => console.log('C — runs after call stack clears'), 0);
console.log('B');
// Output order: A → B → C

// 5. Recursive setTimeout — a more controllable version of setInterval
let count = 0;
function tick() {
  count++;
  console.log('Tick', count);
  if (count < 5) {
    setTimeout(tick, 200); // schedule next tick after THIS one completes
  }
}
setTimeout(tick, 200);

// 6. Debounce pattern using setTimeout
function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}
const search = debounce(query => console.log('Searching:', query), 300);
search('J');
search('Ja');
search('JavaScript'); // only this call actually fires after 300ms
`,
  },
  {
    topic: "setInterval",
    description: "setInterval() — repeatedly execute code at timed intervals",
    code: `// ── setInterval() ────────────────────────────────────────────
// setInterval(callback, intervalMs) — runs callback repeatedly until cleared

// 1. Basic interval — runs every second
let count = 0;
const intervalId = setInterval(() => {
  count++;
  console.log('Tick:', count);
  if (count >= 5) {
    clearInterval(intervalId); // stop after 5 ticks
    console.log('Interval stopped');
  }
}, 1000);

// 2. Live countdown timer
function countdown(from) {
  let current = from;
  console.log('Countdown:', current);
  const id = setInterval(() => {
    current--;
    console.log('Countdown:', current);
    if (current <= 0) {
      clearInterval(id);
      console.log('GO!');
    }
  }, 500);
}
countdown(5);

// 3. Polling for changes — check a condition every N ms
let dataReady = false;
setTimeout(() => { dataReady = true; }, 2500); // data arrives at 2.5s

const pollId = setInterval(() => {
  if (dataReady) {
    console.log('Data is ready! Processing...');
    clearInterval(pollId);
  } else {
    console.log('Still waiting for data...');
  }
}, 800);

// 4. setInterval vs recursive setTimeout
//    setInterval: next call starts N ms after the PREVIOUS START
//    Recursive setTimeout: next call starts N ms after the PREVIOUS END
//    Use recursive setTimeout for tasks that may run longer than the interval

function recurringTask() {
  const id = setInterval(() => {
    // If this callback took 900ms and interval is 1000ms,
    // calls could pile up quickly — recursive setTimeout avoids this
    console.log('Interval task at', Date.now());
  }, 1000);
  setTimeout(() => clearInterval(id), 5000); // clean up after 5s
}
`,
  },
  {
    topic: "callback-async",
    description:
      "Callback-based async pattern — handling async with nested callbacks",
    code: `// ── Callback-Based Async ─────────────────────────────────────
// Before Promises, async code was handled with callbacks.
// This shows the pattern and why it leads to "callback hell".

// 1. Simulated async operations using setTimeout
function readFile(filename, callback) {
  setTimeout(() => {
    if (!filename) return callback(new Error('No filename provided'), null);
    callback(null, 'Contents of ' + filename); // Node.js error-first convention
  }, 300);
}

function parseData(raw, callback) {
  setTimeout(() => {
    callback(null, raw.toUpperCase()); // simulate parsing
  }, 200);
}

function saveResult(data, callback) {
  setTimeout(() => {
    callback(null, { success: true, saved: data });
  }, 100);
}

// 2. Simple callback usage
readFile('data.txt', (err, contents) => {
  if (err) return console.error('Error:', err.message);
  console.log('File contents:', contents);
});

// 3. Callback hell / pyramid of doom — nesting multiple async steps
readFile('input.txt', (err1, raw) => {
  if (err1) return console.error('Step 1 failed:', err1.message);
  console.log('Step 1 — read:', raw);

  parseData(raw, (err2, parsed) => {
    if (err2) return console.error('Step 2 failed:', err2.message);
    console.log('Step 2 — parsed:', parsed);

    saveResult(parsed, (err3, result) => {
      if (err3) return console.error('Step 3 failed:', err3.message);
      console.log('Step 3 — saved:', result);
      // More nesting would go here... this is callback hell!
    });
  });
});

// 4. Mitigating callback hell — named functions
function onRead(err, raw) {
  if (err) return console.error(err.message);
  parseData(raw, onParse);
}
function onParse(err, parsed) {
  if (err) return console.error(err.message);
  saveResult(parsed, onSave);
}
function onSave(err, result) {
  if (err) return console.error(err.message);
  console.log('Pipeline done:', result);
}
readFile('clean.txt', onRead); // much flatter
`,
  },
  {
    topic: "promises",
    description:
      "Promises — represent a future value; .then(), .catch(), .finally()",
    code: `// ── Promises ──────────────────────────────────────────────────
// A Promise is an object representing eventual completion or failure of async work.
// States: pending → fulfilled | rejected

// 1. Creating a promise
const p = new Promise((resolve, reject) => {
  const success = true;
  setTimeout(() => {
    if (success) resolve('Data loaded!');
    else         reject(new Error('Load failed'));
  }, 500);
});

p.then(result => console.log('Resolved:', result))
 .catch(err   => console.error('Rejected:', err.message))
 .finally(()  => console.log('Always runs (cleanup, hide spinner, etc.)'));

// 2. Wrapping callback APIs in Promises
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
delay(200).then(() => console.log('200ms later'));

// 3. Fetch-like simulation
function fetchUser(id) {
  return new Promise((resolve, reject) => {
    const db = { 1: 'Alice', 2: 'Bob' };
    setTimeout(() => {
      db[id] ? resolve({ id, name: db[id] }) : reject(new Error('User not found'));
    }, 300);
  });
}
fetchUser(1).then(u => console.log('Got user:', u.name));
fetchUser(9).catch(e => console.error('Error:', e.message));

// 4. Promise.all — wait for multiple promises concurrently
Promise.all([delay(100), delay(200), delay(300)])
  .then(() => console.log('All three delays done'));

Promise.all([fetchUser(1), fetchUser(2)])
  .then(([u1, u2]) => console.log('Both users:', u1.name, u2.name))
  .catch(err => console.error('One failed:', err.message));

// 5. Promise.race — first one to settle wins
Promise.race([delay(500), delay(100)])
  .then(() => console.log('Race won by 100ms delay'));

// 6. Promise.allSettled — get results regardless of rejection
Promise.allSettled([fetchUser(1), fetchUser(99), fetchUser(2)])
  .then(results => {
    results.forEach(r => {
      if (r.status === 'fulfilled') console.log('OK:', r.value.name);
      else                          console.log('Failed:', r.reason.message);
    });
  });
`,
  },
  {
    topic: "async-await",
    description:
      "async/await — write async code that reads like synchronous code",
    code: `// ── async / await ────────────────────────────────────────────
// async functions always return a Promise.
// await pauses execution inside the async function until the Promise settles.

// Helper promises
const delay = ms => new Promise(res => setTimeout(res, ms));
function fetchProduct(id) {
  return new Promise((resolve, reject) => {
    const products = { 1: { id: 1, name: 'Laptop', price: 999 }, 2: { id: 2, name: 'Phone', price: 499 } };
    setTimeout(() => {
      products[id] ? resolve(products[id]) : reject(new Error('Product ' + id + ' not found'));
    }, 200);
  });
}

// 1. Basic async/await
async function getProduct() {
  const product = await fetchProduct(1);
  console.log('Product:', product.name, '- $' + product.price);
}
getProduct();

// 2. Error handling with try/catch
async function safeGetProduct(id) {
  try {
    const product = await fetchProduct(id);
    console.log('Found:', product.name);
  } catch (err) {
    console.error('Error:', err.message);
  } finally {
    console.log('Fetch attempt complete');
  }
}
safeGetProduct(1);   // Found: Laptop
safeGetProduct(99);  // Error: Product 99 not found

// 3. Sequential vs concurrent
async function sequential() {
  const start = Date.now();
  const p1 = await fetchProduct(1);
  const p2 = await fetchProduct(2);
  console.log('Sequential:', Date.now() - start, 'ms', p1.name, '+', p2.name);
}
async function concurrent() {
  const start = Date.now();
  const [p1, p2] = await Promise.all([fetchProduct(1), fetchProduct(2)]);
  console.log('Concurrent:', Date.now() - start, 'ms', p1.name, '+', p2.name);
}
sequential(); // ~400ms
concurrent(); // ~200ms

// 4. Async iteration pipeline
async function pipeline() {
  console.log('Starting pipeline...');
  await delay(100);
  const product = await fetchProduct(1);
  const withTax = { ...product, price: (product.price * 1.1).toFixed(2) };
  await delay(100);
  console.log('Final product with tax:', withTax);
}
pipeline();
`,
  },

  // ─────────────────────────────────────────────
  // CATEGORY 6: DOM Manipulation
  // ─────────────────────────────────────────────
  {
    topic: "querySelectorAll",
    description:
      "querySelectorAll() — select all elements matching a CSS selector",
    code: `// ── querySelectorAll() ───────────────────────────────────────
// Returns a static NodeList of all matching elements.
// Supports any valid CSS selector.

// Setup: imagine this HTML is in the page
// <ul id="menu">
//   <li class="item active">JsIntHome</li>
//   <li class="item">About</li>
//   <li class="item active">Services</li>
//   <li class="item">Contact</li>
// </ul>
// <p data-type="intro">Hello</p>
// <p data-type="body">World</p>

// 1. Select all list items
const items = document.querySelectorAll('.item');
console.log('Total items:', items.length); // 4

// 2. Select active items only
const active = document.querySelectorAll('.item.active');
console.log('Active count:', active.length); // 2

// 3. Iterate with forEach (NodeList supports forEach)
items.forEach((item, index) => {
  console.log(index + ':', item.textContent);
});

// 4. Convert to array for full array method access
const itemsArray = Array.from(document.querySelectorAll('.item'));
const texts = itemsArray.map(el => el.textContent.trim());
console.log('Texts:', texts);

// 5. Attribute selector
const introParagraphs = document.querySelectorAll('[data-type="intro"]');
introParagraphs.forEach(p => (p.style.fontWeight = 'bold'));

// 6. Scoped query — search within a specific parent
const menu = document.querySelector('#menu');
const menuItems = menu.querySelectorAll('li'); // only li inside #menu
console.log('Menu items:', menuItems.length);

// 7. Complex CSS selectors
const firstActive = document.querySelectorAll('.item:first-child');
const nthItem     = document.querySelectorAll('.item:nth-child(2)');
console.log('First child:', firstActive[0]?.textContent);
console.log('2nd item:', nthItem[0]?.textContent);

// 8. Add class to all matched elements at once
document.querySelectorAll('.item').forEach(el => {
  el.classList.add('menu-item');
});
`,
  },
  {
    topic: "classlist",
    description:
      "classList — add, remove, toggle, and check CSS classes dynamically",
    code: `// ── classList API ─────────────────────────────────────────────
// classList is a DOMTokenList — a live collection of an element's classes.

// Setup: <div id="box" class="container dark"></div>
const box = document.getElementById('box') || document.createElement('div');
box.className = 'container dark'; // reset for demo

// 1. add() — add one or more classes
box.classList.add('visible');
box.classList.add('rounded', 'shadow'); // multiple at once
console.log('After add:', box.className);

// 2. remove() — remove one or more classes
box.classList.remove('dark');
box.classList.remove('rounded', 'shadow');
console.log('After remove:', box.className);

// 3. toggle() — add if absent, remove if present
box.classList.toggle('active');       // adds 'active'
console.log('Toggled on:', box.classList.contains('active')); // true
box.classList.toggle('active');       // removes 'active'
console.log('Toggled off:', box.classList.contains('active')); // false

// 4. toggle with force argument
box.classList.toggle('visible', true);  // always adds
box.classList.toggle('hidden', false);  // always removes
console.log('Force toggle:', box.className);

// 5. contains() — check for a class
console.log('Has container:', box.classList.contains('container')); // true
console.log('Has dark:', box.classList.contains('dark'));           // false

// 6. replace() — swap one class for another
box.classList.add('btn-primary');
box.classList.replace('btn-primary', 'btn-secondary');
console.log('After replace:', box.className);

// 7. Practical dark mode toggle
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
  const isDark = document.body.classList.contains('dark-mode');
  console.log('Dark mode:', isDark ? 'ON' : 'OFF');
}

// 8. Iterate all classes
box.classList.add('a', 'b', 'c');
box.classList.forEach(cls => console.log('Class:', cls));
console.log('Class count:', box.classList.length);
`,
  },
  {
    topic: "createElement",
    description: "createElement() — create new HTML elements from JavaScript",
    code: `// ── createElement() ──────────────────────────────────────────
// document.createElement(tagName) creates a new element node
// that exists in memory but is NOT yet in the DOM.

// 1. Create a simple element
const heading = document.createElement('h1');
heading.textContent = 'Hello from JavaScript!';
heading.id = 'main-title';
heading.className = 'title text-center';
console.log('Created:', heading.outerHTML);

// 2. Create with attributes
const link = document.createElement('a');
link.href      = 'https://developer.mozilla.org';
link.target    = '_blank';
link.textContent = 'MDN Docs';
link.setAttribute('rel', 'noopener noreferrer');
console.log('Link:', link.outerHTML);

// 3. Create an image
const img = document.createElement('img');
img.src = 'https://via.placeholder.com/200';
img.alt = 'Placeholder image';
img.width  = 200;
img.height = 200;
img.classList.add('rounded', 'shadow');

// 4. Create a card component dynamically
function createCard({ title, body, badge }) {
  const card    = document.createElement('div');
  const cardBody = document.createElement('div');
  const cardTitle = document.createElement('h5');
  const cardText  = document.createElement('p');
  const badgeEl   = document.createElement('span');

  card.className      = 'card mb-3';
  cardBody.className  = 'card-body';
  cardTitle.className = 'card-title';
  cardText.className  = 'card-text';
  badgeEl.className   = 'badge bg-primary';

  cardTitle.textContent = title;
  cardText.textContent  = body;
  badgeEl.textContent   = badge;

  cardBody.append(badgeEl, cardTitle, cardText);
  card.appendChild(cardBody);
  return card;
}
const card = createCard({ title: 'ES6 Features', body: 'Learn modern JS syntax.', badge: 'New' });
document.body?.appendChild(card);
console.log('Card created:', card.querySelector('.card-title').textContent);

// 5. Create a button with an event
const btn = document.createElement('button');
btn.textContent = 'Click Me';
btn.className   = 'btn btn-primary';
btn.addEventListener('click', () => alert('Button clicked!'));
`,
  },
  {
    topic: "appendChild",
    description:
      "appendChild() — insert a node as the last child of an element",
    code: `// ── appendChild() & Modern Alternatives ─────────────────────
// appendChild(node) — moves or inserts a node as the last child

// 1. Basic append
const ul = document.createElement('ul');
const li = document.createElement('li');
li.textContent = 'First item';
ul.appendChild(li);
console.log('List HTML:', ul.innerHTML);

// 2. Append multiple items
const fruits = ['Apple', 'Banana', 'Cherry'];
const list   = document.createElement('ul');
fruits.forEach(fruit => {
  const item = document.createElement('li');
  item.textContent = fruit;
  list.appendChild(item); // each appended one by one
});
document.body?.appendChild(list);
console.log('Fruit list items:', list.children.length); // 3

// 3. appendChild moves existing nodes — not copies
const container = document.createElement('div');
const para      = document.createElement('p');
para.textContent = 'Move me';
document.body?.appendChild(para);
container.appendChild(para); // para is MOVED from body to container
// para is no longer in body — it's now only in container

// 4. Modern alternative: append() — accepts strings and nodes
const wrapper = document.createElement('div');
const title   = document.createElement('h2');
title.textContent = 'Hello';
wrapper.append(title, ' — Welcome!'); // mix Node + text string
console.log('Wrapper:', wrapper.innerHTML);

// 5. prepend() — insert as first child
const firstItem = document.createElement('li');
firstItem.textContent = 'First!';
list.prepend(firstItem); // added before 'Apple'

// 6. insertBefore() — precise positioning
const refNode = list.children[2]; // before 'Cherry'
const newItem = document.createElement('li');
newItem.textContent = 'Blueberry';
list.insertBefore(newItem, refNode);
console.log('All items:', [...list.children].map(el => el.textContent));

// 7. DocumentFragment — batch DOM insertions efficiently
const fragment = document.createDocumentFragment();
['X', 'Y', 'Z'].forEach(letter => {
  const li2 = document.createElement('li');
  li2.textContent = letter;
  fragment.appendChild(li2); // appended to fragment (off-screen)
});
list.appendChild(fragment); // ONE reflow instead of many
`,
  },
  {
    topic: "removeElement",
    description: "remove() — remove an element from the DOM",
    code: `// ── Removing Elements from the DOM ──────────────────────────
// Modern: element.remove()
// Classic: parent.removeChild(element)

// Setup — create some elements
const container = document.createElement('div');
container.id = 'container';
['Item 1', 'Item 2', 'Item 3', 'Item 4'].forEach((text, i) => {
  const p = document.createElement('p');
  p.textContent = text;
  p.id = 'item-' + (i + 1);
  container.appendChild(p);
});
document.body?.appendChild(container);
console.log('Initial count:', container.children.length); // 4

// 1. Modern remove()
const item1 = document.getElementById('item-1');
item1?.remove();
console.log('After remove():', container.children.length); // 3

// 2. Classic removeChild()
const item2 = document.getElementById('item-2');
if (item2) container.removeChild(item2);
console.log('After removeChild():', container.children.length); // 2

// 3. Remove by condition — remove all elements matching a selector
function removeAll(selector, parent = document) {
  parent.querySelectorAll(selector).forEach(el => el.remove());
}
removeAll('p', container);
console.log('After removeAll:', container.children.length); // 0

// 4. Clear all children — two approaches
function clearChildren(parent) {
  // Option A: modern
  parent.replaceChildren(); // fast
  // Option B: classic loop
  // while (parent.firstChild) parent.removeChild(parent.firstChild);
}
const box = document.createElement('div');
box.innerHTML = '<span>a</span><span>b</span><span>c</span>';
clearChildren(box);
console.log('Cleared children count:', box.children.length); // 0

// 5. Remove after delay — "notification" pattern
function showNotification(message, duration = 3000) {
  const notif = document.createElement('div');
  notif.textContent  = message;
  notif.className    = 'notification';
  document.body?.appendChild(notif);
  setTimeout(() => notif.remove(), duration);
  console.log('Notification shown, will remove in', duration, 'ms');
}
showNotification('Saved successfully!', 2000);

// 6. Detach and re-attach for efficient batch updates
const ul = document.createElement('ul');
document.body?.appendChild(ul);
const parent = ul.parentNode;
const placeholder = ul.nextSibling;
parent?.removeChild(ul);       // detach
for (let i = 0; i < 100; i++) {
  const li = document.createElement('li');
  li.textContent = 'Item ' + i;
  ul.appendChild(li);          // update off-DOM (fast)
}
parent?.insertBefore(ul, placeholder); // re-attach in one reflow
`,
  },

  // ─────────────────────────────────────────────
  // CATEGORY 7: Events
  // ─────────────────────────────────────────────
  {
    topic: "event-listeners-deep",
    description:
      "Event listeners deep — addEventListener, removeEventListener, once option",
    code: `// ── Event Listeners — Deep Dive ──────────────────────────────
// addEventListener(type, listener, options)
// options: { capture, once, passive, signal }

// Setup
const btn = document.createElement('button');
btn.textContent = 'Click Me';
document.body?.appendChild(btn);

// 1. Basic listener
function onClick(e) {
  console.log('Clicked!', e.type, e.target);
}
btn.addEventListener('click', onClick);

// 2. Remove a listener — must use same function reference
btn.removeEventListener('click', onClick);
console.log('Listener removed');

// 3. once: true — automatically removes after first fire
btn.addEventListener('click', () => console.log('Only fires once!'), { once: true });

// 4. capture: true — handle in capture phase (top-down vs default bubble up)
document.body?.addEventListener('click', e => {
  console.log('Body capture — target:', e.target.tagName);
}, { capture: true });

// 5. passive: true — promise not to call e.preventDefault() (boosts scroll performance)
document.addEventListener('scroll', () => {}, { passive: true });

// 6. AbortController — remove multiple listeners at once
const controller = new AbortController();
const { signal }  = controller;

btn.addEventListener('click',     () => console.log('click'),     { signal });
btn.addEventListener('mouseenter',() => console.log('mouseenter'),{ signal });
btn.addEventListener('mouseleave',() => console.log('mouseleave'),{ signal });

// Remove all three at once:
controller.abort();
console.log('All listeners via signal removed');

// 7. Multiple event types with one handler
function handlePointer(e) {
  console.log('Pointer event:', e.type, 'at', e.clientX, e.clientY);
}
['mousedown', 'mouseup', 'mousemove'].forEach(type => {
  btn.addEventListener(type, handlePointer);
});
`,
  },
  {
    topic: "event-object",
    description:
      "Event object — properties and methods of the event passed to handlers",
    code: `// ── The Event Object ─────────────────────────────────────────
// Every event handler receives an Event object with useful info.

// Setup
const btn   = document.createElement('button');
btn.textContent = 'Click Me';
const input = document.createElement('input');
input.placeholder = 'Type here';
document.body?.append(btn, input);

// 1. Common Event properties
btn.addEventListener('click', function(e) {
  console.log('--- Click Event Object ---');
  console.log('type:',          e.type);          // 'click'
  console.log('target:',        e.target);         // the button element
  console.log('currentTarget:', e.currentTarget);  // element listener is on
  console.log('timeStamp:',     e.timeStamp);      // ms since page load
  console.log('bubbles:',       e.bubbles);        // true — click bubbles
  console.log('cancelable:',    e.cancelable);     // true
});

// 2. Mouse event properties
btn.addEventListener('click', e => {
  console.log('--- Mouse Info ---');
  console.log('clientX/Y:', e.clientX, e.clientY); // viewport coords
  console.log('pageX/Y:',   e.pageX,   e.pageY);   // page coords
  console.log('button:',    e.button);              // 0=left,1=mid,2=right
  console.log('shiftKey:',  e.shiftKey);            // was Shift held?
  console.log('ctrlKey:',   e.ctrlKey);
});

// 3. Keyboard event properties
input.addEventListener('keydown', e => {
  console.log('--- Key Info ---');
  console.log('key:',     e.key);       // 'Enter', 'a', 'ArrowUp', etc.
  console.log('code:',    e.code);      // 'KeyA', 'Enter', 'Space'
  console.log('altKey:',  e.altKey);
  if (e.key === 'Enter') {
    console.log('Enter pressed — value:', e.target.value);
  }
});

// 4. preventDefault() — stop default browser behavior
const form = document.createElement('form');
form.addEventListener('submit', e => {
  e.preventDefault(); // prevent page reload
  console.log('Form submitted without reload');
});

// 5. stopPropagation() — stop event from bubbling
btn.addEventListener('click', e => {
  e.stopPropagation();
  console.log('Stopped at button — parent will NOT hear this');
});
document.body?.addEventListener('click', () => {
  console.log('Body click — only fires if button did not stopPropagation');
});
`,
  },
  {
    topic: "event-bubbling",
    description:
      "Event bubbling — how events propagate up through the DOM tree",
    code: `// ── Event Bubbling & Capturing ───────────────────────────────
// Bubbling: event fires on target, then propagates UP through ancestors
// Capturing: event fires on root, travels DOWN to target (less common)

// Build a nested DOM structure
const outer  = document.createElement('div');
const middle = document.createElement('div');
const inner  = document.createElement('button');

outer.id  = 'outer';
middle.id = 'middle';
inner.id  = 'inner';
inner.textContent = 'Click Me';

outer.style.padding  = '30px';
middle.style.padding = '20px';

outer.appendChild(middle);
middle.appendChild(inner);
document.body?.appendChild(outer);

// 1. Bubbling — all three fire when button is clicked
outer.addEventListener('click',  () => console.log('Outer  — bubble phase'));
middle.addEventListener('click', () => console.log('Middle — bubble phase'));
inner.addEventListener('click',  () => console.log('Inner  — bubble phase (target)'));
// Click output order: Inner → Middle → Outer

// 2. Capture phase — fires top-down BEFORE bubbling
outer.addEventListener('click',  () => console.log('Outer  — CAPTURE'), true);
middle.addEventListener('click', () => console.log('Middle — CAPTURE'), true);
// Full order: Outer(cap) → Middle(cap) → Inner(target) → Middle(bub) → Outer(bub)

// 3. stopPropagation() — prevent further bubbling
middle.addEventListener('click', e => {
  e.stopPropagation(); // outer will NOT hear this click
  console.log('Middle stopped propagation');
});

// 4. stopImmediatePropagation() — also stops other listeners on SAME element
inner.addEventListener('click', e => {
  e.stopImmediatePropagation();
  console.log('First inner listener — stops all others on inner too');
});
inner.addEventListener('click', () => {
  console.log('Second inner listener — will NOT fire due to stopImmediatePropagation');
});

// 5. Events that do NOT bubble: focus, blur, load, scroll (use capture or focusin)
inner.addEventListener('focus', () => console.log('focus — does not bubble'));
outer.addEventListener('focusin', () => console.log('focusin — DOES bubble (use this instead)'));
`,
  },
  {
    topic: "event-delegation",
    description:
      "Event delegation — handle events on parent for dynamic child elements",
    code: `// ── Event Delegation ─────────────────────────────────────────
// Instead of adding listeners to every child, add ONE listener to the parent.
// Uses event bubbling — the child event bubbles up to the parent.
// KEY BENEFIT: works for dynamically added elements too!

// 1. The problem without delegation
const ul1 = document.createElement('ul');
['One', 'Two', 'Three'].forEach(text => {
  const li = document.createElement('li');
  li.textContent = text;
  li.addEventListener('click', () => console.log('Clicked:', text)); // 3 listeners!
  ul1.appendChild(li);
});

// 2. Delegation — ONE listener on parent
const ul2 = document.createElement('ul');
['Alpha', 'Beta', 'Gamma'].forEach(text => {
  const li = document.createElement('li');
  li.textContent = text;
  ul2.appendChild(li); // no listener on individual items
});
ul2.addEventListener('click', e => {
  if (e.target.tagName === 'LI') { // guard: ensure we clicked an li
    console.log('Delegated click on:', e.target.textContent);
  }
});
document.body?.append(ul1, ul2);

// 3. Works with dynamically added items!
const dynamicList = document.createElement('ul');
document.body?.appendChild(dynamicList);
dynamicList.addEventListener('click', e => {
  const li = e.target.closest('li');  // closest() handles nested elements
  if (li && dynamicList.contains(li)) {
    console.log('Dynamic item clicked:', li.textContent);
  }
});
// Add item 2 seconds later — delegation handles it automatically
setTimeout(() => {
  const li = document.createElement('li');
  li.textContent = 'Dynamic item (added later)';
  dynamicList.appendChild(li);
  console.log('Dynamic item added');
}, 2000);

// 4. Delegation with data-* attributes for action routing
const toolbar = document.createElement('div');
toolbar.innerHTML = \`
  <button data-action="save">Save</button>
  <button data-action="delete">Delete</button>
  <button data-action="share">Share</button>
\`;
const actions = {
  save:   () => console.log('Saving...'),
  delete: () => console.log('Deleting...'),
  share:  () => console.log('Sharing...')
};
toolbar.addEventListener('click', e => {
  const action = e.target.dataset.action;
  if (action && actions[action]) actions[action]();
});
document.body?.appendChild(toolbar);
`,
  },

  // ─────────────────────────────────────────────
  // CATEGORY 8: Error Handling
  // ─────────────────────────────────────────────
  {
    topic: "try-catch",
    description: "try...catch — wrap risky code and handle errors gracefully",
    code: `// ── try...catch ───────────────────────────────────────────────
// try    — code that might throw an error
// catch  — runs if an error is thrown, receives the error object
// The error object has: name, message, stack

// 1. Basic try...catch
try {
  const result = JSON.parse('{ invalid json }');
  console.log(result);
} catch (err) {
  console.error('Caught:', err.name);    // SyntaxError
  console.error('Message:', err.message);
}

// 2. Specific error types
function divide(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError('Both arguments must be numbers');
  }
  if (b === 0) throw new RangeError('Cannot divide by zero');
  return a / b;
}

try {
  console.log(divide(10, 2));   // 5
  console.log(divide(10, 0));   // throws RangeError
} catch (err) {
  if (err instanceof RangeError)  console.error('Range error:', err.message);
  else if (err instanceof TypeError) console.error('Type error:', err.message);
  else                               console.error('Unknown error:', err.message);
}

// 3. Nested try...catch
function parseUserAge(input) {
  try {
    const data = JSON.parse(input);
    try {
      if (data.age < 0) throw new RangeError('Age cannot be negative');
      return data.age;
    } catch (innerErr) {
      console.error('Validation error:', innerErr.message);
      return 0;
    }
  } catch (outerErr) {
    console.error('Parse error:', outerErr.message);
    return null;
  }
}
console.log(parseUserAge('{"age": 25}'));       // 25
console.log(parseUserAge('{"age": -5}'));       // 0 (validation error)
console.log(parseUserAge('not json at all'));   // null (parse error)

// 4. Re-throwing errors
function loadConfig(path) {
  try {
    if (!path) throw new Error('Config path is required');
    // ... load file
  } catch (err) {
    if (err instanceof TypeError) console.error('Type issue:', err.message);
    else throw err; // re-throw if we can't handle it
  }
}
`,
  },
  {
    topic: "finally",
    description:
      "finally — code that always runs after try/catch regardless of outcome",
    code: `// ── finally ───────────────────────────────────────────────────
// finally block ALWAYS runs — whether there was an error or not.
// Ideal for cleanup: closing connections, hiding spinners, releasing locks.

// 1. Basic try/catch/finally
function riskyOperation() {
  try {
    console.log('Trying...');
    throw new Error('Something went wrong!');
    console.log('This never runs');
  } catch (err) {
    console.error('Caught:', err.message);
  } finally {
    console.log('Finally: always runs (cleanup here)');
  }
}
riskyOperation();

// 2. finally without catch
function withoutCatch() {
  try {
    return 'success value';
  } finally {
    console.log('finally runs even before the return!');
  }
}
const val = withoutCatch();
console.log('Returned:', val);

// 3. finally overrides the return value
function tricky() {
  try {
    return 'from try';
  } finally {
    return 'from finally'; // this wins!
  }
}
console.log(tricky()); // 'from finally'

// 4. Real-world: loading spinner + API call simulation
function fetchData(url) {
  let spinner = { active: false };
  spinner.active = true;
  console.log('Spinner: ON');
  try {
    if (!url.startsWith('https')) throw new Error('URL must use HTTPS');
    console.log('Fetching:', url);
    // ... actual fetch would go here
    return { data: 'response' };
  } catch (err) {
    console.error('Fetch failed:', err.message);
    return null;
  } finally {
    spinner.active = false;
    console.log('Spinner: OFF — always cleaned up');
  }
}
fetchData('http://api.example.com'); // throws, but spinner still turns off
fetchData('https://api.example.com'); // works, spinner still turns off

// 5. Database connection pattern
function withConnection(callback) {
  const conn = { open: true, query: sql => ({ rows: [], sql }) };
  console.log('DB connection opened');
  try {
    return callback(conn);
  } catch (err) {
    console.error('DB error:', err.message);
  } finally {
    conn.open = false;
    console.log('DB connection closed (finally)');
  }
}
withConnection(db => {
  const result = db.query('SELECT * FROM users');
  console.log('Query executed:', result.sql);
});
`,
  },
  {
    topic: "throw",
    description: "throw — create and throw custom error objects or messages",
    code: `// ── throw Statement & Custom Errors ──────────────────────────
// throw can throw any value, but Error objects are best practice
// because they include a stack trace.

// 1. throw built-in error types
function getElement(arr, index) {
  if (!Array.isArray(arr)) throw new TypeError('Expected an array');
  if (index < 0 || index >= arr.length) throw new RangeError('Index out of bounds');
  return arr[index];
}
try { getElement('not-array', 0); } catch(e) { console.error(e.name + ':', e.message); }
try { getElement([1,2,3], 10); }    catch(e) { console.error(e.name + ':', e.message); }
console.log(getElement([1, 2, 3], 1)); // 2

// 2. Custom Error classes (ES6)
class ValidationError extends Error {
  constructor(message, field) {
    super(message);
    this.name    = 'ValidationError';
    this.field   = field;
  }
}

class NotFoundError extends Error {
  constructor(resource, id) {
    super(resource + ' with id ' + id + ' was not found');
    this.name     = 'NotFoundError';
    this.resource = resource;
    this.id       = id;
    this.statusCode = 404;
  }
}

// 3. Using custom errors
function validateEmail(email) {
  if (!email)                  throw new ValidationError('Email is required', 'email');
  if (!email.includes('@'))    throw new ValidationError('Email is invalid', 'email');
  return true;
}

try { validateEmail(''); }
catch(e) {
  if (e instanceof ValidationError) console.error('Field:', e.field, '—', e.message);
}

// 4. Re-throw unknown errors
function findUser(id) {
  const users = [{ id: 1, name: 'Alice' }];
  const user  = users.find(u => u.id === id);
  if (!user) throw new NotFoundError('User', id);
  return user;
}

function loadProfile(id) {
  try {
    const user = findUser(id);
    console.log('Profile:', user.name);
  } catch(err) {
    if (err instanceof NotFoundError) {
      console.warn(err.message, '— StatusCode:', err.statusCode);
    } else {
      throw err; // re-throw unexpected errors
    }
  }
}
loadProfile(1);  // Profile: Alice
loadProfile(99); // Not found warning
`,
  },

  // ─────────────────────────────────────────────
  // CATEGORY 9: Browser Storage
  // ─────────────────────────────────────────────
  {
    topic: "localStorage",
    description:
      "localStorage — persist key-value data across browser sessions",
    code: `// ── localStorage ─────────────────────────────────────────────
// Stores string key-value pairs in the browser.
// Data persists across sessions (survives browser close/reopen).
// Storage limit: ~5MB per origin. Synchronous API.

// 1. Basic CRUD operations
localStorage.setItem('username', 'Alice');
localStorage.setItem('theme', 'dark');
localStorage.setItem('language', 'en');

const name  = localStorage.getItem('username');
const theme = localStorage.getItem('theme');
console.log('Username:', name);   // Alice
console.log('Theme:', theme);     // dark

// getItem returns null for missing keys
const missing = localStorage.getItem('nonexistent');
console.log('Missing:', missing); // null

// 2. Storing and retrieving objects (must serialize to JSON)
const userPrefs = { fontSize: 16, sidebarOpen: true, lang: 'en' };
localStorage.setItem('prefs', JSON.stringify(userPrefs));

const storedPrefs = JSON.parse(localStorage.getItem('prefs'));
console.log('Prefs:', storedPrefs);
console.log('Font size:', storedPrefs.fontSize); // 16

// 3. Updating a stored object
function updatePref(key, value) {
  const current = JSON.parse(localStorage.getItem('prefs') || '{}');
  current[key]  = value;
  localStorage.setItem('prefs', JSON.stringify(current));
}
updatePref('fontSize', 18);
console.log('Updated prefs:', JSON.parse(localStorage.getItem('prefs')));

// 4. Removing items
localStorage.removeItem('language');
console.log('Language after remove:', localStorage.getItem('language')); // null

// 5. Iterate all stored items
console.log('--- All localStorage items ---');
for (let i = 0; i < localStorage.length; i++) {
  const key = localStorage.key(i);
  console.log(key + ':', localStorage.getItem(key));
}

// 6. Clear everything
// localStorage.clear(); // commented out to preserve other examples

// 7. Helper wrapper with error handling
const storage = {
  get(key, fallback = null) {
    try { return JSON.parse(localStorage.getItem(key)) ?? fallback; }
    catch { return fallback; }
  },
  set(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); return true; }
    catch (e) { console.error('Storage full?', e); return false; }
  },
  remove(key) { localStorage.removeItem(key); }
};
storage.set('cart', [{ id: 1, qty: 2 }, { id: 2, qty: 1 }]);
console.log('Cart:', storage.get('cart'));
`,
  },
  {
    topic: "sessionStorage",
    description:
      "sessionStorage — store data for the duration of a browser session",
    code: `// ── sessionStorage ───────────────────────────────────────────
// Same API as localStorage, but data is cleared when the browser tab closes.
// Each tab gets its own isolated sessionStorage — tabs don't share it.
// Great for: wizard/multi-step form state, temporary auth tokens, page state.

// 1. Basic operations — identical API to localStorage
sessionStorage.setItem('stepNumber', '2');
sessionStorage.setItem('formData', JSON.stringify({ name: 'Alice', email: 'a@b.com' }));

const step     = sessionStorage.getItem('stepNumber');
const formData = JSON.parse(sessionStorage.getItem('formData'));
console.log('Step:', step);       // 2
console.log('Form data:', formData);

// 2. Multi-step form example
const MultiStepForm = {
  KEY: 'wizard_state',
  save(data) {
    const current = this.load();
    const merged  = { ...current, ...data, lastStep: data.step || current.lastStep };
    sessionStorage.setItem(this.KEY, JSON.stringify(merged));
    console.log('Saved step:', merged.lastStep);
  },
  load() {
    return JSON.parse(sessionStorage.getItem(this.KEY) || '{}');
  },
  clear() {
    sessionStorage.removeItem(this.KEY);
    console.log('Wizard state cleared');
  }
};

MultiStepForm.save({ step: 1, name: 'Bob', email: 'bob@test.com' });
MultiStepForm.save({ step: 2, address: '123 Main St', city: 'NYC' });
MultiStepForm.save({ step: 3, payment: 'card' });
console.log('Full form state:', MultiStepForm.load());

// 3. Difference from localStorage
localStorage.setItem('persists', 'I survive browser close');
sessionStorage.setItem('temporary', 'I die when tab closes');
// Both accessible right now:
console.log('Local:', localStorage.getItem('persists'));
console.log('Session:', sessionStorage.getItem('temporary'));

// 4. Page visit tracking for current session only
const visits = parseInt(sessionStorage.getItem('visitCount') || '0') + 1;
sessionStorage.setItem('visitCount', visits);
console.log('Page visited', visits, 'time(s) this session');

// 5. Scroll position restore within a session
function saveScrollPosition() {
  sessionStorage.setItem('scrollY', window.scrollY);
}
function restoreScrollPosition() {
  const y = sessionStorage.getItem('scrollY');
  if (y !== null) window.scrollTo(0, parseInt(y));
}
// Call saveScrollPosition() on page leave, restoreScrollPosition() on load
`,
  },

  // ─────────────────────────────────────────────
  // CATEGORY 10: JSON Handling
  // ─────────────────────────────────────────────
  {
    topic: "json-parse",
    description:
      "JSON.parse() — convert a JSON string into a JavaScript object",
    code: `// ── JSON.parse() ─────────────────────────────────────────────
// Converts a valid JSON string into a JavaScript value.
// JSON.parse(text, reviver?)

// 1. Basic parsing
const jsonStr = '{"name":"Alice","age":30,"active":true}';
const obj     = JSON.parse(jsonStr);
console.log('Parsed:', obj);
console.log('Name:', obj.name); // Alice
console.log('Type:', typeof obj); // object

// 2. Parse arrays
const arrayStr = '[1, 2, 3, "four", true, null]';
const arr      = JSON.parse(arrayStr);
console.log('Parsed array:', arr);
console.log('Length:', arr.length); // 6

// 3. Parse nested JSON
const nested = \`{
  "user": {
    "id": 42,
    "name": "Bob",
    "address": { "city": "NYC", "zip": "10001" },
    "scores": [88, 92, 95]
  }
}\`;
const data = JSON.parse(nested);
console.log('City:', data.user.address.city);      // NYC
console.log('Top score:', Math.max(...data.user.scores)); // 95

// 4. Error handling — always wrap in try/catch
function safeParse(str, fallback = null) {
  try {
    return JSON.parse(str);
  } catch (err) {
    console.error('JSON.parse failed:', err.message);
    return fallback;
  }
}
console.log(safeParse('{"valid": true}'));    // { valid: true }
console.log(safeParse('{invalid}'));          // null + error logged
console.log(safeParse('', []));              // [] — fallback used

// 5. Reviver function — transform values during parsing
const dateJson = '{"event":"Launch","date":"2025-01-15T10:00:00Z","score":"42"}';
const withReviver = JSON.parse(dateJson, (key, value) => {
  if (key === 'date')  return new Date(value);  // string → Date object
  if (key === 'score') return parseInt(value);  // string → number
  return value;
});
console.log('Event:', withReviver.event);
console.log('Date type:', withReviver.date instanceof Date); // true
console.log('Score type:', typeof withReviver.score);        // number

// 6. Parse from server / localStorage
const stored = localStorage.getItem('userPrefs') || '{"theme":"light"}';
const prefs  = safeParse(stored, { theme: 'light' });
console.log('Prefs:', prefs);
`,
  },
  {
    topic: "json-stringify",
    description:
      "JSON.stringify() — convert a JavaScript object into a JSON string",
    code: `// ── JSON.stringify() ─────────────────────────────────────────
// Converts a JavaScript value to a JSON string.
// JSON.stringify(value, replacer?, space?)

// 1. Basic usage
const user = { name: 'Alice', age: 30, active: true };
const json = JSON.stringify(user);
console.log('JSON string:', json);
console.log('Type:', typeof json); // string

// 2. Pretty printing with space argument
const prettyJson = JSON.stringify(user, null, 2);
console.log('Pretty:\n' + prettyJson);

// 3. What gets omitted from JSON output
const tricky = {
  name: 'Test',
  fn:        () => 'I am a function',  // omitted (functions not JSON-serializable)
  undef:     undefined,                // omitted
  symbol:    Symbol('sym'),            // omitted
  date:      new Date(),               // converted to ISO string
  regex:     /hello/,                  // converted to {}
  infinity:  Infinity,                 // converted to null
  nan:       NaN,                      // converted to null
  normal:    42
};
console.log('Tricky:', JSON.stringify(tricky, null, 2));

// 4. Replacer — filter or transform what gets serialized
const data = { id: 1, name: 'Bob', password: 's3cr3t', role: 'admin', score: 99 };

// Array replacer — whitelist of keys to include
const safe1 = JSON.stringify(data, ['name', 'role', 'score']);
console.log('Whitelisted:', safe1); // password excluded

// Function replacer — transform individual values
const safe2 = JSON.stringify(data, (key, value) => {
  if (key === 'password') return undefined; // exclude
  if (typeof value === 'number') return value * 2; // double numbers
  return value;
});
console.log('Transformed:', safe2);

// 5. toJSON() — custom serialization
class Product {
  constructor(name, price, internal) {
    this.name     = name;
    this.price    = price;
    this.internal = internal;
  }
  toJSON() { // called automatically by JSON.stringify
    return { name: this.name, price: this.price }; // exclude internal
  }
}
const p = new Product('Laptop', 999, 'secret-sku-abc');
console.log('Product JSON:', JSON.stringify(p)); // internal excluded

// 6. Deep clone pattern (simple objects only)
const original = { a: 1, b: { c: 2 } };
const clone    = JSON.parse(JSON.stringify(original));
clone.b.c      = 99;
console.log('Original:', original.b.c); // 2 — unchanged
`,
  },

  // ─────────────────────────────────────────────
  // CATEGORY 11: Fetch API
  // ─────────────────────────────────────────────
  {
    topic: "fetch",
    description: "fetch() — make HTTP requests to servers and APIs",
    code: `// ── fetch() ──────────────────────────────────────────────────
// fetch(url, options?) returns a Promise<Response>
// It's the modern replacement for XMLHttpRequest.

// 1. Basic GET request
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())
  .then(data => {
    console.log('Post title:', data.title);
    console.log('Body:', data.body.slice(0, 50) + '...');
  })
  .catch(err => console.error('Fetch failed:', err.message));

// 2. GET with async/await (preferred style)
async function getPost(id) {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/' + id);
  if (!response.ok) throw new Error('HTTP error: ' + response.status);
  const post = await response.json();
  console.log('Async fetch — title:', post.title);
  return post;
}
getPost(2);

// 3. POST request — send data to server
async function createPost(postData) {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer my-token-here'
    },
    body: JSON.stringify(postData)
  });
  const created = await response.json();
  console.log('Created post id:', created.id, '— title:', created.title);
  return created;
}
createPost({ title: 'My First Post', body: 'Hello world!', userId: 1 });

// 4. PUT request — update a resource
async function updatePost(id, data) {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/' + id, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  return res.json();
}

// 5. DELETE request
async function deletePost(id) {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/' + id, {
    method: 'DELETE'
  });
  console.log('Deleted, status:', res.status); // 200
}
deletePost(1);

// 6. Fetch with timeout using AbortController
async function fetchWithTimeout(url, ms = 3000) {
  const controller = new AbortController();
  const timeoutId  = setTimeout(() => controller.abort(), ms);
  try {
    const res = await fetch(url, { signal: controller.signal });
    clearTimeout(timeoutId);
    return await res.json();
  } catch (err) {
    if (err.name === 'AbortError') console.error('Request timed out');
    else throw err;
  }
}
fetchWithTimeout('https://jsonplaceholder.typicode.com/users/1', 5000)
  .then(u => console.log('User:', u?.name));
`,
  },
  {
    topic: "handling-api-responses",
    description:
      "Handling API responses — parse JSON, handle errors, check status codes",
    code: `// ── Handling API Responses ───────────────────────────────────
// fetch() only rejects on NETWORK errors, not HTTP error status codes!
// A 404 or 500 response still resolves — you must check response.ok

// 1. Always check response.ok before parsing
async function safeFetch(url) {
  const response = await fetch(url);

  // response.ok is true for status 200-299
  if (!response.ok) {
    const errBody = await response.text().catch(() => '');
    throw new Error('HTTP ' + response.status + ' ' + response.statusText + ': ' + errBody);
  }
  return response.json();
}

safeFetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(post => console.log('OK post:', post.title))
  .catch(err  => console.error('Failed:', err.message));

safeFetch('https://jsonplaceholder.typicode.com/posts/99999') // 404
  .catch(err  => console.error('Expected error:', err.message));

// 2. Reading the Response object
async function inspectResponse(url) {
  const res = await fetch(url);
  console.log('Status:', res.status);          // 200, 404, 500...
  console.log('Status text:', res.statusText); // 'OK', 'Not Found'...
  console.log('OK:', res.ok);                  // true / false
  console.log('URL:', res.url);
  console.log('Content-Type:', res.headers.get('Content-Type'));
  if (res.ok) return res.json();
}
inspectResponse('https://jsonplaceholder.typicode.com/users/1')
  .then(u => console.log('User name:', u?.name));

// 3. Reading different response body types
async function responseTypes() {
  const base = 'https://jsonplaceholder.typicode.com/posts/1';

  const jsonRes = await fetch(base);
  const json    = await jsonRes.json();   // parse as JSON object
  console.log('JSON:', typeof json);

  const textRes = await fetch(base);
  const text    = await textRes.text();   // raw string
  console.log('Text:', typeof text, text.slice(0, 30) + '...');
  // Note: body can only be consumed ONCE per Response instance
}
responseTypes();

// 4. Robust API client wrapper
async function apiRequest(endpoint, options = {}) {
  const BASE = 'https://jsonplaceholder.typicode.com';
  const defaults = {
    headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }
  };
  const config = { ...defaults, ...options, headers: { ...defaults.headers, ...options.headers } };
  try {
    const res = await fetch(BASE + endpoint, config);
    if (res.status === 204) return null; // No Content
    const data = await res.json();
    if (!res.ok) throw Object.assign(new Error(data.message || 'API Error'), { status: res.status, data });
    return data;
  } catch (err) {
    console.error('API request failed:', err.message);
    throw err;
  }
}
apiRequest('/todos/1').then(todo => console.log('Todo:', todo.title));
`,
  },
  {
    topic: "then-chaining",
    description:
      ".then() chaining — chain multiple promise operations in sequence",
    code: `// ── .then() Chaining ─────────────────────────────────────────
// Each .then() receives the return value of the previous .then()
// Returning a value wraps it in a resolved promise automatically
// Returning a Promise waits for that promise before continuing

// 1. Basic chain — each then transforms the value
Promise.resolve(5)
  .then(n => n * 2)        // 10
  .then(n => n + 3)        // 13
  .then(n => 'Result: ' + n) // 'Result: 13'
  .then(msg => console.log(msg)); // Result: 13

// 2. Async chain — return a new promise from inside .then()
const delay = (ms, val) => new Promise(res => setTimeout(() => res(val), ms));

delay(100, 'step-1')
  .then(step => {
    console.log('Got:', step);
    return delay(100, 'step-2'); // return a new promise — chain waits
  })
  .then(step => {
    console.log('Got:', step);
    return delay(100, 'step-3');
  })
  .then(step => console.log('Got:', step, '— chain complete'));

// 3. Real-world API chain: fetch user → fetch posts → filter
const BASE = 'https://jsonplaceholder.typicode.com';

fetch(BASE + '/users/1')
  .then(res => {
    if (!res.ok) throw new Error('Failed to load user');
    return res.json();
  })
  .then(user => {
    console.log('User:', user.name);
    return fetch(BASE + '/posts?userId=' + user.id); // next request
  })
  .then(res => res.json())
  .then(posts => {
    console.log('Total posts:', posts.length);
    return posts.filter(p => p.title.length > 40); // transform
  })
  .then(longPosts => {
    console.log('Long-title posts:', longPosts.length);
  })
  .catch(err => console.error('Chain error caught:', err.message))
  .finally(() => console.log('Chain finished'));

// 4. Error in the middle of a chain
Promise.resolve('start')
  .then(v => { console.log(v); return 'next'; })
  .then(v => { throw new Error('Mid-chain failure!'); })
  .then(v => { console.log('This is skipped'); })   // skipped
  .catch(err => {
    console.error('Caught:', err.message);
    return 'recovered'; // catch can RETURN and resume the chain!
  })
  .then(v => console.log('After recovery:', v)); // 'recovered'
`,
  },
];

export default jsIntTopicExamples;
