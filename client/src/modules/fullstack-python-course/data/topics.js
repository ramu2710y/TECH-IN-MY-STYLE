export const learningPaths = [
  { level: 'Beginner',     icon: 'fa-seedling', color: '#22c55e', topics: ['variables','data-types','operators','conditionals','loops'] },
  { level: 'Intermediate', icon: 'fa-code',     color: '#3b82f6', topics: ['functions','oop','modules','file-handling','exceptions'] },
  { level: 'Backend',      icon: 'fa-server',   color: '#a855f7', topics: ['flask','django','rest-api','databases','orm'] },
  { level: 'Advanced',     icon: 'fa-bolt',     color: '#f59e0b', topics: ['async','decorators','generators','auth','testing'] },
  { level: 'Deployment',   icon: 'fa-rocket',   color: '#ff1e1e', topics: ['docker','ci-cd','cloud','monitoring','security'] },
];

export const allTopics = [
  // BEGINNER
  { id:'variables', title:'Variables & Data Types', icon:'fa-database', category:'Beginner', color:'#22c55e', tagline:'The building blocks of every program', description:'Variables are named containers that store data values. Python is dynamically typed — no need to declare types explicitly. Every value is an object.', keyPoints:['Python infers types automatically at runtime','Variables are references to objects in memory','Multiple assignment and unpacking supported','Naming follows snake_case convention'], code:`# Variable assignment\nname = "Python"\nversion = 3.12\nis_awesome = True\nscore = None\n\n# Multiple assignment\nx, y, z = 10, 20, 30\n\n# Type checking\nprint(type(name))    # <class 'str'>\nprint(type(version)) # <class 'float'>\n\n# f-string formatting\nprint(f"{name} v{version} is awesome: {is_awesome}")\n\n# Type conversion\nage = int("25")\nprice = float("9.99")\ntext = str(100)\n\n# Common data types\nmy_list  = [1, 2, 3]          # mutable sequence\nmy_tuple = (1, 2, 3)          # immutable sequence\nmy_dict  = {"key": "value"}   # key-value pairs\nmy_set   = {1, 2, 3}          # unique values`, applications:[{title:'Config Management',icon:'fa-sliders'},{title:'Data Processing',icon:'fa-chart-bar'},{title:'User Input Handling',icon:'fa-keyboard'},{title:'API Responses',icon:'fa-plug'}], interview:[{q:'What is the difference between mutable and immutable types?',a:'Immutable types (int, str, tuple) cannot be changed after creation. Mutable types (list, dict, set) can be modified in place. This affects how Python handles memory and variable references.'},{q:'How does Python handle variable scope?',a:'Python uses LEGB rule: Local → Enclosing → Global → Built-in. Variables are looked up in this order. Use `global` or `nonlocal` keywords to modify outer scope variables.'},{q:'What is the difference between `is` and `==`?',a:'`==` checks value equality. `is` checks identity (same object in memory). Small integers and interned strings may share identity, but never rely on `is` for value comparison.'}], mcqs:[{q:'Which of these is an immutable type in Python?',options:['list','dict','tuple','set'],answer:2},{q:'What does `type(3.14)` return?',options:['int','float','double','number'],answer:1},{q:'Which naming convention is standard in Python?',options:['camelCase','PascalCase','snake_case','kebab-case'],answer:2}], resources:[{title:'Python Docs — Built-in Types',icon:'fa-book',url:'https://docs.python.org/3/library/stdtypes.html'},{title:'Real Python — Variables',icon:'fa-graduation-cap',url:'https://realpython.com/python-variables/'}] },
  { id:'data-types', title:'Lists, Tuples & Dicts', icon:'fa-list', category:'Beginner', color:'#22c55e', tagline:"Python's core collection types", description:"Python provides powerful built-in collections. Lists are ordered and mutable, tuples are ordered and immutable, dicts are key-value stores, and sets hold unique values.", keyPoints:['Lists support indexing, slicing, and mutation','Tuples are faster and hashable — use as dict keys','Dicts are O(1) lookup via hash tables','Sets eliminate duplicates automatically'], code:`# Lists\nfruits = ["apple", "banana", "cherry"]\nfruits.append("mango")\nfruits[0] = "avocado"\nprint(fruits[1:3])   # slicing\n\n# List comprehension\nsquares = [x**2 for x in range(10) if x % 2 == 0]\n\n# Tuples\npoint = (10, 20)\nx, y = point  # unpacking\n\n# Dictionaries\nuser = {"name": "Alice", "age": 30, "active": True}\nuser["email"] = "alice@example.com"\nname = user.get("name", "Unknown")\n\n# Dict comprehension\nsquared = {x: x**2 for x in range(5)}\n\n# Sets\ntags = {"python", "backend", "api"}\ntags.add("flask")\nunique = set([1, 2, 2, 3, 3])  # {1, 2, 3}`, applications:[{title:'Data Pipelines',icon:'fa-diagram-project'},{title:'Caching',icon:'fa-memory'},{title:'JSON Handling',icon:'fa-file-code'},{title:'Deduplication',icon:'fa-filter'}], interview:[{q:'What is the time complexity of dict lookup?',a:"O(1) average case. Python dicts use hash tables. The key is hashed to find the bucket. Worst case is O(n) due to hash collisions, but this is extremely rare with Python's hash implementation."},{q:'When would you use a tuple over a list?',a:"Use tuples for data that should not change (coordinates, RGB values, DB records). Tuples are faster, use less memory, and can be used as dict keys or set members since they are hashable."},{q:'How does list comprehension differ from a for loop?',a:'List comprehensions are more concise and generally faster because they are optimized at the bytecode level. They create a new list in one expression. Use them for simple transformations; use loops for complex logic.'}], mcqs:[{q:'Which method adds an element to the end of a list?',options:['add()','push()','append()','insert()'],answer:2},{q:'What does `dict.get("key", default)` return if key is missing?',options:['None','KeyError','default value','False'],answer:2},{q:'Which collection type stores only unique values?',options:['list','tuple','dict','set'],answer:3}], resources:[{title:'Python Docs — Data Structures',icon:'fa-book',url:'https://docs.python.org/3/tutorial/datastructures.html'},{title:'Real Python — Lists & Tuples',icon:'fa-graduation-cap',url:'https://realpython.com/python-lists-tuples/'}] },
  { id:'operators', title:'Operators & Expressions', icon:'fa-calculator', category:'Beginner', color:'#22c55e', tagline:'The language of computation', description:'Operators are symbols that perform operations on values. Python supports arithmetic, comparison, logical, bitwise, and assignment operators with clean, readable syntax.', keyPoints:['Arithmetic: +, -, *, /, //, %, **','Comparison: ==, !=, <, >, <=, >=','Logical: and, or, not (short-circuit evaluation)','Walrus operator := assigns and returns in one step'], code:`# Arithmetic\nprint(10 // 3)   # 3  (floor division)\nprint(10 % 3)    # 1  (modulo)\nprint(2 ** 8)    # 256 (power)\n\n# Comparison\nx = 10\nprint(5 < x < 20)   # True (chained comparison)\n\n# Logical with short-circuit\nname = None\ndisplay = name or "Anonymous"  # "Anonymous"\n\n# Walrus operator (Python 3.8+)\ndata = [1, 2, 3, 4, 5]\nif (n := len(data)) > 3:\n    print(f"List has {n} items")\n\n# Bitwise\nflags = 0b1010\nmask  = 0b1100\nprint(bin(flags & mask))  # 0b1000 (AND)\nprint(bin(flags | mask))  # 0b1110 (OR)\nprint(flags >> 1)         # 5 (right shift)\n\n# Augmented assignment\ncount = 0\ncount += 1   # same as count = count + 1`, applications:[{title:'Validation Logic',icon:'fa-shield'},{title:'Bit Flags / Permissions',icon:'fa-flag'},{title:'Math Utilities',icon:'fa-calculator'},{title:'Conditional Defaults',icon:'fa-toggle-on'}], interview:[{q:'What is short-circuit evaluation?',a:'In `a and b`, if `a` is falsy Python skips evaluating `b`. In `a or b`, if `a` is truthy Python skips `b`. This is used for safe defaults: `value = x or default`.'},{q:'What does the walrus operator do?',a:"The walrus operator `:=` assigns a value to a variable as part of an expression. Useful in while loops and comprehensions to avoid calling a function twice: `while chunk := f.read(8192):`."},{q:'What is the difference between / and // in Python?',a:'`/` always returns a float (true division). `//` returns the floor of the division as an integer. `10/3 = 3.333...`, `10//3 = 3`.'}], mcqs:[{q:'What does `2 ** 10` evaluate to?',options:['20','100','1024','512'],answer:2},{q:'Which operator is the walrus operator?',options:[':=','==','=>','::'],answer:0},{q:'What does `bool("")` return?',options:['True','False','None','Error'],answer:1}], resources:[{title:'Python Docs — Expressions',icon:'fa-book',url:'https://docs.python.org/3/reference/expressions.html'},{title:'Real Python — Operators',icon:'fa-graduation-cap',url:'https://realpython.com/python-operators-expressions/'}] },
  { id:'conditionals', title:'Conditionals', icon:'fa-code-branch', category:'Beginner', color:'#22c55e', tagline:'Decision-making in code', description:'Conditionals control the flow of execution based on boolean expressions. Python uses if/elif/else and the ternary expression for concise branching.', keyPoints:['if/elif/else for multi-branch logic','Ternary: value_if_true if condition else value_if_false','match/case (Python 3.10+) for structural pattern matching','Truthy/falsy values — empty collections are falsy'], code:`# Basic if/elif/else\nscore = 85\n\nif score >= 90:\n    grade = "A"\nelif score >= 80:\n    grade = "B"\nelif score >= 70:\n    grade = "C"\nelse:\n    grade = "F"\n\n# Ternary expression\nstatus = "pass" if score >= 60 else "fail"\n\n# match/case (Python 3.10+)\ncommand = "quit"\nmatch command:\n    case "start":\n        print("Starting...")\n    case "stop" | "quit":\n        print("Stopping...")\n    case _:\n        print("Unknown command")\n\n# Guard clauses (early return pattern)\ndef process(data):\n    if not data:\n        return None\n    if not isinstance(data, dict):\n        raise TypeError("Expected dict")\n    return data.get("value")`, applications:[{title:'Input Validation',icon:'fa-check-double'},{title:'Auth Checks',icon:'fa-lock'},{title:'Feature Flags',icon:'fa-toggle-on'},{title:'Error Handling',icon:'fa-triangle-exclamation'}], interview:[{q:'What values are falsy in Python?',a:'False, None, 0, 0.0, empty string "", empty list [], empty dict {}, empty set set(), empty tuple (). Everything else is truthy.'},{q:'What is a guard clause?',a:'A guard clause is an early return at the top of a function that handles edge cases first. It reduces nesting and makes the happy path clear. Preferred over deeply nested if/else.'},{q:'How does match/case differ from if/elif?',a:"match/case (Python 3.10+) supports structural pattern matching — it can destructure objects, match sequences, and use guards. It's more powerful than simple value comparison."}], mcqs:[{q:'Which of these is falsy in Python?',options:['"False"','1','[]','" "'],answer:2},{q:'What is the ternary syntax in Python?',options:['x ? a : b','a if x else b','if x then a else b','x and a or b'],answer:1},{q:'Which Python version introduced match/case?',options:['3.8','3.9','3.10','3.11'],answer:2}], resources:[{title:'Python Docs — Control Flow',icon:'fa-book',url:'https://docs.python.org/3/tutorial/controlflow.html'},{title:'Real Python — Conditionals',icon:'fa-graduation-cap',url:'https://realpython.com/python-conditional-statements/'}] },
  { id:'loops', title:'Loops & Iteration', icon:'fa-rotate', category:'Beginner', color:'#22c55e', tagline:'Repeat with precision', description:"Python loops iterate over sequences and ranges. The for loop is the workhorse; while handles condition-based repetition. Iterators and generators make iteration memory-efficient.", keyPoints:['for loop iterates over any iterable','enumerate() gives index + value together','zip() iterates multiple sequences in parallel','break, continue, else clause on loops'], code:`# for loop with enumerate\nfruits = ["apple", "banana", "cherry"]\nfor i, fruit in enumerate(fruits, start=1):\n    print(f"{i}. {fruit}")\n\n# zip — parallel iteration\nnames  = ["Alice", "Bob", "Carol"]\nscores = [95, 87, 92]\nfor name, score in zip(names, scores):\n    print(f"{name}: {score}")\n\n# while with break/continue\nn = 0\nwhile True:\n    n += 1\n    if n % 2 == 0:\n        continue\n    if n > 9:\n        break\n    print(n)  # 1, 3, 5, 7, 9\n\n# Loop else (runs if no break)\nfor x in range(5):\n    if x == 10:\n        break\nelse:\n    print("No break occurred")\n\n# Generator expression (memory efficient)\ntotal = sum(x**2 for x in range(1_000_000))`, applications:[{title:'Data Processing',icon:'fa-gears'},{title:'File Parsing',icon:'fa-file-lines'},{title:'Batch Operations',icon:'fa-layer-group'},{title:'Polling / Retry',icon:'fa-arrows-rotate'}], interview:[{q:'What is the difference between a list comprehension and a generator expression?',a:'A list comprehension `[x for x in ...]` creates the entire list in memory. A generator expression `(x for x in ...)` is lazy — it yields one item at a time. Use generators for large datasets.'},{q:'What does the else clause on a for loop do?',a:'The else block runs only if the loop completed without hitting a break. Useful for search patterns: loop through items, break if found, else handle not-found case.'},{q:"How does Python's for loop work internally?",a:"Python calls `iter()` on the iterable to get an iterator, then repeatedly calls `next()` until StopIteration is raised. Any object implementing `__iter__` and `__next__` is iterable."}], mcqs:[{q:'What does `enumerate(["a","b"], start=1)` yield first?',options:['(0, "a")','(1, "a")','("a", 1)','1'],answer:1},{q:'Which statement skips the current iteration?',options:['break','pass','continue','skip'],answer:2},{q:'What is a generator expression enclosed in?',options:['[]','{}','()','<>'],answer:2}], resources:[{title:'Python Docs — for Statements',icon:'fa-book',url:'https://docs.python.org/3/reference/compound_stmts.html#for'},{title:'Real Python — Python for Loops',icon:'fa-graduation-cap',url:'https://realpython.com/python-for-loop/'}] },
  // INTERMEDIATE
  { id:'functions', title:'Functions', icon:'fa-code', category:'Intermediate', color:'#3b82f6', tagline:'Reusable blocks of precision logic', description:'Functions encapsulate logic into reusable, testable units. Python functions are first-class objects — they can be passed, returned, and stored like any value.', keyPoints:['Functions are first-class citizens in Python','Support default, keyword, and variadic arguments','Lambda functions for concise one-liners','Closures capture enclosing scope variables'], code:`# Basic function with type hints\ndef greet(name: str, greeting: str = "Hello") -> str:\n    return f"{greeting}, {name}!"\n\n# *args and **kwargs\ndef log(*args, **kwargs):\n    for arg in args:\n        print(arg)\n    for key, val in kwargs.items():\n        print(f"{key}: {val}")\n\n# Lambda\nsquare = lambda x: x ** 2\n\n# Higher-order function\ndef apply(func, value):\n    return func(value)\n\nresult = apply(square, 5)  # 25\n\n# Closure\ndef multiplier(factor):\n    def multiply(x):\n        return x * factor\n    return multiply\n\ndouble = multiplier(2)\nprint(double(10))  # 20`, applications:[{title:'API Endpoints',icon:'fa-plug'},{title:'Data Transformation',icon:'fa-right-left'},{title:'Event Handlers',icon:'fa-bolt'},{title:'Middleware Logic',icon:'fa-layer-group'}], interview:[{q:'What is the difference between *args and **kwargs?',a:'*args collects positional arguments into a tuple. **kwargs collects keyword arguments into a dictionary. Both allow functions to accept variable numbers of arguments.'},{q:'What is a closure in Python?',a:'A closure is a function that remembers variables from its enclosing scope even after that scope has finished executing. Created when a nested function references a variable from the outer function.'},{q:'What is the difference between a function and a method?',a:'A method is a function defined inside a class and bound to an instance or class. It receives `self` (or `cls`) as the first argument automatically.'}], mcqs:[{q:'What does *args collect into?',options:['list','tuple','dict','set'],answer:1},{q:'Which keyword makes a variable global inside a function?',options:['extern','global','public','nonlocal'],answer:1},{q:'What is a lambda function?',options:['A named function','An anonymous one-line function','A class method','A built-in function'],answer:1}], resources:[{title:'Python Docs — Functions',icon:'fa-book',url:'https://docs.python.org/3/tutorial/controlflow.html#defining-functions'},{title:'Real Python — Functions Guide',icon:'fa-graduation-cap',url:'https://realpython.com/defining-your-own-python-function/'}] },
  { id:'oop', title:'Object-Oriented Programming', icon:'fa-cubes', category:'Intermediate', color:'#3b82f6', tagline:'Model the real world with precision', description:'OOP organizes code around objects that combine state and behavior. Python supports full OOP with classes, inheritance, polymorphism, and abstract base classes.', keyPoints:['Classes are blueprints; objects are instances','Encapsulation hides internal implementation','Inheritance enables code reuse and extension','Polymorphism allows uniform interfaces'], code:`from abc import ABC, abstractmethod\n\nclass Vehicle(ABC):\n    def __init__(self, brand: str, speed: int):\n        self.brand = brand\n        self._speed = speed  # protected\n\n    @abstractmethod\n    def describe(self) -> str:\n        pass\n\n    @property\n    def speed(self):\n        return self._speed\n\nclass Car(Vehicle):\n    def __init__(self, brand, speed, doors):\n        super().__init__(brand, speed)\n        self.doors = doors\n\n    def describe(self) -> str:\n        return f"{self.brand} | {self._speed}km/h | {self.doors} doors"\n\n    def __repr__(self):\n        return f"Car(brand={self.brand!r})"\n\nferrari = Car("Ferrari", 320, 2)\nprint(ferrari.describe())\nprint(ferrari.speed)`, applications:[{title:'Django Models',icon:'fa-table'},{title:'REST Serializers',icon:'fa-code'},{title:'Design Patterns',icon:'fa-object-group'},{title:'Game Entities',icon:'fa-gamepad'}], interview:[{q:'What are the four pillars of OOP?',a:'Encapsulation (bundling data + methods), Abstraction (hiding complexity), Inheritance (reusing parent class), Polymorphism (same interface, different behavior).'},{q:'What is the difference between @classmethod and @staticmethod?',a:'@classmethod receives the class as first argument (cls) and can modify class state. @staticmethod receives no implicit first argument and is just a regular function namespaced to the class.'},{q:'What is MRO in Python?',a:'Method Resolution Order defines the order Python searches for methods in inheritance hierarchies. Python uses C3 linearization algorithm. Check with ClassName.__mro__.'}], mcqs:[{q:'Which method is called when an object is created?',options:['__start__','__init__','__new__','__create__'],answer:1},{q:'What does `super()` do?',options:['Creates a new class','Calls parent class method','Deletes an object','Checks inheritance'],answer:1},{q:'Which decorator makes a method callable on the class itself?',options:['@staticmethod','@property','@classmethod','@abstractmethod'],answer:2}], resources:[{title:'Python Docs — Classes',icon:'fa-book',url:'https://docs.python.org/3/tutorial/classes.html'},{title:'Real Python — OOP',icon:'fa-graduation-cap',url:'https://realpython.com/python3-object-oriented-programming/'}] },
  { id:'modules', title:'Modules & Packages', icon:'fa-box', category:'Intermediate', color:'#3b82f6', tagline:'Organize code at scale', description:'Modules are Python files. Packages are directories of modules. The import system lets you split code into reusable, maintainable units and share them via PyPI.', keyPoints:['Any .py file is a module','__init__.py makes a directory a package','Relative imports for intra-package references','Virtual environments isolate dependencies'], code:`# mypackage/__init__.py\nfrom .utils import format_date\nfrom .models import User\n\n# mypackage/utils.py\nfrom datetime import datetime\n\ndef format_date(dt: datetime) -> str:\n    return dt.strftime("%Y-%m-%d")\n\n# mypackage/models.py\nfrom dataclasses import dataclass, field\nfrom typing import List\n\n@dataclass\nclass User:\n    name: str\n    email: str\n    tags: List[str] = field(default_factory=list)\n\n    def __post_init__(self):\n        self.email = self.email.lower()\n\n# main.py\nfrom mypackage import User, format_date\nfrom datetime import datetime\n\nuser = User("Alice", "Alice@Example.com", ["admin"])\nprint(user.email)          # alice@example.com\nprint(format_date(datetime.now()))`, applications:[{title:'Library Development',icon:'fa-book-open'},{title:'Plugin Systems',icon:'fa-puzzle-piece'},{title:'Shared Utilities',icon:'fa-wrench'},{title:'PyPI Publishing',icon:'fa-upload'}], interview:[{q:'What is the difference between a module and a package?',a:'A module is a single .py file. A package is a directory containing an __init__.py file and multiple modules. Packages can be nested to create sub-packages.'},{q:'What does `if __name__ == "__main__":` do?',a:"This block runs only when the file is executed directly, not when imported. It allows a module to be both importable as a library and runnable as a script."},{q:'What is a virtual environment?',a:'A virtual environment is an isolated Python environment with its own packages. Created with `python -m venv venv`. Prevents dependency conflicts between projects.'}], mcqs:[{q:'What file makes a directory a Python package?',options:['main.py','__init__.py','setup.py','package.py'],answer:1},{q:'Which command creates a virtual environment?',options:['pip install venv','python -m venv venv','virtualenv create','python venv init'],answer:1},{q:'What does `from . import utils` mean?',options:['Import from root','Relative import from current package','Import built-in utils','Import from parent'],answer:1}], resources:[{title:'Python Docs — Modules',icon:'fa-book',url:'https://docs.python.org/3/tutorial/modules.html'},{title:'Real Python — Packages',icon:'fa-graduation-cap',url:'https://realpython.com/python-modules-packages/'}] },
  { id:'file-handling', title:'File Handling', icon:'fa-file-code', category:'Intermediate', color:'#3b82f6', tagline:'Read, write, and process files', description:'Python makes file I/O simple with built-in open(), context managers, and the pathlib module. Handle text, binary, JSON, and CSV files with clean, safe patterns.', keyPoints:['Always use `with` statement — auto-closes files','pathlib.Path is the modern way to handle paths','json module for serialization/deserialization','csv module for tabular data'], code:`from pathlib import Path\nimport json, csv\n\n# Text file — read/write\npath = Path("data/config.txt")\npath.parent.mkdir(parents=True, exist_ok=True)\n\npath.write_text("Hello, Python!")\ncontent = path.read_text()\n\n# Context manager (explicit)\nwith open("log.txt", "a", encoding="utf-8") as f:\n    f.write("New log entry\\n")\n\n# JSON\nconfig = {"host": "localhost", "port": 8000}\nPath("config.json").write_text(json.dumps(config, indent=2))\nloaded = json.loads(Path("config.json").read_text())\n\n# CSV\nrows = [{"name": "Alice", "score": 95}, {"name": "Bob", "score": 87}]\nwith open("scores.csv", "w", newline="") as f:\n    writer = csv.DictWriter(f, fieldnames=["name", "score"])\n    writer.writeheader()\n    writer.writerows(rows)\n\n# Glob — find files\npy_files = list(Path(".").glob("**/*.py"))`, applications:[{title:'Config Loading',icon:'fa-sliders'},{title:'Log Processing',icon:'fa-file-lines'},{title:'Data Import/Export',icon:'fa-file-import'},{title:'Report Generation',icon:'fa-file-lines'}], interview:[{q:'Why use `with open()` instead of `open()`?',a:"The `with` statement is a context manager that guarantees the file is closed even if an exception occurs. Without it, you must manually call `f.close()` and handle exceptions yourself."},{q:'What is the difference between pathlib and os.path?',a:"pathlib.Path is object-oriented and more readable. `Path('a') / 'b' / 'c.txt'` vs `os.path.join('a', 'b', 'c.txt')`. pathlib also has methods like `.read_text()`, `.write_text()`, `.glob()`."},{q:'How do you handle large files efficiently?',a:"Read line by line with `for line in file:` instead of `file.readlines()`. This is memory-efficient as it reads one line at a time. For binary files, use `file.read(chunk_size)` in a loop."}], mcqs:[{q:'Which mode opens a file for appending?',options:['"r"','"w"','"a"','"x"'],answer:2},{q:'What does `Path("a") / "b"` do?',options:['Division','Joins path segments','Creates a file','Error'],answer:1},{q:'Which module handles JSON in Python?',options:['pickle','json','yaml','marshal'],answer:1}], resources:[{title:'Python Docs — pathlib',icon:'fa-book',url:'https://docs.python.org/3/library/pathlib.html'},{title:'Real Python — File I/O',icon:'fa-graduation-cap',url:'https://realpython.com/read-write-files-python/'}] },
  { id:'exceptions', title:'Exceptions & Error Handling', icon:'fa-triangle-exclamation', category:'Intermediate', color:'#3b82f6', tagline:'Fail gracefully, recover cleanly', description:"Exceptions are Python's mechanism for handling errors at runtime. Proper exception handling makes code robust, debuggable, and production-ready.", keyPoints:['try/except/else/finally for full control','Raise custom exceptions for domain errors','Exception chaining with `raise X from Y`','Context managers for resource cleanup'], code:`# Basic exception handling\ntry:\n    result = 10 / 0\nexcept ZeroDivisionError as e:\n    print(f"Error: {e}")\nexcept (TypeError, ValueError) as e:\n    print(f"Type/Value error: {e}")\nelse:\n    print("Success!")  # runs if no exception\nfinally:\n    print("Always runs")  # cleanup\n\n# Custom exceptions\nclass APIError(Exception):\n    def __init__(self, message: str, status_code: int = 500):\n        super().__init__(message)\n        self.status_code = status_code\n\nclass NotFoundError(APIError):\n    def __init__(self, resource: str):\n        super().__init__(f"{resource} not found", status_code=404)\n\n# Exception chaining\ndef fetch_user(user_id: int):\n    try:\n        raise ConnectionError("DB unreachable")\n    except ConnectionError as e:\n        raise APIError("Failed to fetch user") from e`, applications:[{title:'API Error Responses',icon:'fa-plug'},{title:'DB Transaction Safety',icon:'fa-database'},{title:'Input Validation',icon:'fa-check-double'},{title:'Retry Logic',icon:'fa-arrows-rotate'}], interview:[{q:'What is the difference between Exception and BaseException?',a:'BaseException is the root of all exceptions including SystemExit, KeyboardInterrupt, and GeneratorExit. Exception is the base for all regular (non-system) exceptions. Always catch Exception, not BaseException.'},{q:'What does `raise X from Y` do?',a:"Exception chaining. It sets the __cause__ attribute, indicating that X was directly caused by Y. When printed, Python shows both exceptions. Use `raise X from None` to suppress the original."},{q:'When does the else clause in try/except run?',a:"The else block runs only if no exception was raised in the try block. It's useful for code that should only run on success, keeping it separate from the try block."}], mcqs:[{q:'Which block always executes in try/except?',options:['try','except','else','finally'],answer:3},{q:'How do you raise a custom exception?',options:['throw MyError()','raise MyError()','except MyError()','throw new MyError()'],answer:1},{q:'What is the base class for most exceptions?',options:['BaseException','Exception','Error','RuntimeError'],answer:1}], resources:[{title:'Python Docs — Exceptions',icon:'fa-book',url:'https://docs.python.org/3/tutorial/errors.html'},{title:'Real Python — Exception Handling',icon:'fa-graduation-cap',url:'https://realpython.com/python-exceptions/'}] },
  // BACKEND
  { id:'flask', title:'Flask Framework', icon:'fa-flask', category:'Backend', color:'#a855f7', tagline:'Micro-framework, maximum control', description:"Flask is a lightweight WSGI web framework. It gives you the tools to build web apps and APIs without imposing structure — you decide the architecture.", keyPoints:['Minimal core — add only what you need','Jinja2 templating built-in','Blueprints for modular applications','Flask-SQLAlchemy, Flask-JWT for extensions'], code:`from flask import Flask, jsonify, request\nfrom functools import wraps\n\napp = Flask(__name__)\n\ndef require_token(f):\n    @wraps(f)\n    def decorated(*args, **kwargs):\n        token = request.headers.get('Authorization')\n        if not token:\n            return jsonify({'error': 'Unauthorized'}), 401\n        return f(*args, **kwargs)\n    return decorated\n\n@app.route('/api/users', methods=['GET'])\n@require_token\ndef get_users():\n    users = [{'id': 1, 'name': 'Alice'}, {'id': 2, 'name': 'Bob'}]\n    return jsonify({'users': users, 'count': len(users)})\n\n@app.route('/api/users', methods=['POST'])\ndef create_user():\n    data = request.get_json()\n    return jsonify({'message': 'Created', 'user': data}), 201\n\n@app.errorhandler(404)\ndef not_found(e):\n    return jsonify({'error': 'Not found'}), 404\n\nif __name__ == '__main__':\n    app.run(debug=True, port=5000)`, applications:[{title:'REST APIs',icon:'fa-plug'},{title:'Microservices',icon:'fa-network-wired'},{title:'Web Dashboards',icon:'fa-chart-line'},{title:'Auth Services',icon:'fa-shield-halved'}], interview:[{q:'What is the difference between Flask and Django?',a:"Flask is a micro-framework — minimal, flexible, you choose your components. Django is a full-stack framework with ORM, admin, auth built-in. Flask is better for APIs and microservices; Django for full web apps."},{q:'How does Flask handle request context?',a:'Flask uses thread-local proxies (request, g, session) that are pushed onto a context stack per request. This allows global-like access without passing objects around.'},{q:'What are Flask Blueprints?',a:'Blueprints allow you to organize a Flask app into modular components. Each blueprint can have its own routes, templates, and static files, then registered on the main app.'}], mcqs:[{q:'Which decorator registers a Flask route?',options:['@app.url','@app.route','@app.path','@app.endpoint'],answer:1},{q:'What does `request.get_json()` return?',options:['A string','A Python dict','A JSON string','A Response object'],answer:1},{q:'What HTTP status code means "Created"?',options:['200','201','204','301'],answer:1}], resources:[{title:'Flask Official Docs',icon:'fa-book',url:'https://flask.palletsprojects.com/'},{title:'Flask Mega-Tutorial',icon:'fa-graduation-cap',url:'https://blog.miguelgrinberg.com/post/the-flask-mega-tutorial-part-i-hello-world'}] },
  { id:'django', title:'Django Framework', icon:'fa-globe', category:'Backend', color:'#a855f7', tagline:'Batteries-included web framework', description:'Django is a high-level Python web framework that encourages rapid development. It includes ORM, admin panel, auth, forms, and more out of the box.', keyPoints:['MTV architecture: Model-Template-View','Built-in ORM with migrations','Admin panel auto-generated from models','Django REST Framework for APIs'], code:`# models.py\nfrom django.db import models\n\nclass Post(models.Model):\n    title   = models.CharField(max_length=200)\n    content = models.TextField()\n    author  = models.ForeignKey("auth.User", on_delete=models.CASCADE)\n    created = models.DateTimeField(auto_now_add=True)\n\n    class Meta:\n        ordering = ["-created"]\n\n    def __str__(self):\n        return self.title\n\n# serializers.py (DRF)\nfrom rest_framework import serializers\n\nclass PostSerializer(serializers.ModelSerializer):\n    author_name = serializers.CharField(source="author.username", read_only=True)\n\n    class Meta:\n        model = Post\n        fields = ["id", "title", "content", "author_name", "created"]\n\n# views.py (DRF)\nfrom rest_framework import viewsets, permissions\n\nclass PostViewSet(viewsets.ModelViewSet):\n    queryset = Post.objects.select_related("author").all()\n    serializer_class = PostSerializer\n    permission_classes = [permissions.IsAuthenticatedOrReadOnly]\n\n    def perform_create(self, serializer):\n        serializer.save(author=self.request.user)`, applications:[{title:'Full Web Apps',icon:'fa-globe'},{title:'Admin Dashboards',icon:'fa-gauge'},{title:'E-commerce',icon:'fa-cart-shopping'},{title:'CMS Platforms',icon:'fa-newspaper'}], interview:[{q:'What is the difference between select_related and prefetch_related?',a:'select_related does a SQL JOIN for ForeignKey/OneToOne — one query. prefetch_related does separate queries for ManyToMany/reverse FK and joins in Python. Use select_related for single-valued relations.'},{q:'What is Django middleware?',a:"Middleware is a hook into Django's request/response processing. It's a lightweight plugin system for globally altering input or output. Examples: AuthenticationMiddleware, CsrfViewMiddleware, GZipMiddleware."},{q:'What is the N+1 query problem?',a:'When you fetch N objects and then make 1 additional query per object (e.g., accessing a related field in a loop). Fix with select_related() or prefetch_related() to fetch everything in 1-2 queries.'}], mcqs:[{q:'Which command creates Django database tables?',options:['python manage.py migrate','python manage.py syncdb','python manage.py createdb','python manage.py setup'],answer:0},{q:'What does `on_delete=models.CASCADE` do?',options:['Prevents deletion','Deletes related objects','Sets field to NULL','Raises an error'],answer:1},{q:'Which DRF class provides full CRUD automatically?',options:['APIView','GenericView','ModelViewSet','ViewSet'],answer:2}], resources:[{title:'Django Official Docs',icon:'fa-book',url:'https://docs.djangoproject.com/'},{title:'Django REST Framework',icon:'fa-graduation-cap',url:'https://www.django-rest-framework.org/'}] },
  { id:'rest-api', title:'REST API Design', icon:'fa-plug', category:'Backend', color:'#a855f7', tagline:'Design APIs that developers love', description:'REST (Representational State Transfer) is an architectural style for APIs. Good REST API design is consistent, predictable, and self-documenting.', keyPoints:['Resources are nouns, HTTP methods are verbs','Proper status codes communicate intent','Versioning via URL or headers','Pagination, filtering, and sorting patterns'], code:`# FastAPI — modern, fast, auto-documented\nfrom fastapi import FastAPI, HTTPException, Query\nfrom pydantic import BaseModel\nfrom typing import Optional\n\napp = FastAPI(title="My API", version="1.0.0")\n\nclass UserCreate(BaseModel):\n    name: str\n    email: str\n\nclass UserResponse(BaseModel):\n    id: int\n    name: str\n    email: str\n\n@app.get("/api/v1/users", response_model=list[UserResponse])\nasync def list_users(\n    page: int = Query(1, ge=1),\n    limit: int = Query(10, le=100),\n    search: Optional[str] = None,\n):\n    return []\n\n@app.post("/api/v1/users", response_model=UserResponse, status_code=201)\nasync def create_user(user: UserCreate):\n    return {"id": 1, **user.dict()}\n\n@app.get("/api/v1/users/{user_id}", response_model=UserResponse)\nasync def get_user(user_id: int):\n    raise HTTPException(status_code=404, detail="User not found")`, applications:[{title:'Mobile Backends',icon:'fa-mobile-screen'},{title:'SPA Backends',icon:'fa-window-maximize'},{title:'Third-party Integrations',icon:'fa-link'},{title:'Microservices',icon:'fa-network-wired'}], interview:[{q:'What are the HTTP methods and their purposes?',a:'GET (read), POST (create), PUT (full update), PATCH (partial update), DELETE (remove). HEAD (headers only), OPTIONS (capabilities). Use the right verb for the right action.'},{q:'What is idempotency?',a:'An operation is idempotent if calling it multiple times produces the same result. GET, PUT, DELETE are idempotent. POST is not. PATCH may or may not be. Important for retry logic.'},{q:'How do you version a REST API?',a:'URL versioning (/api/v1/users) is most common and explicit. Header versioning (Accept: application/vnd.api+json;version=1) is cleaner but harder to test. Query param (?version=1) is least preferred.'}], mcqs:[{q:'Which HTTP method is used to partially update a resource?',options:['PUT','POST','PATCH','UPDATE'],answer:2},{q:'What status code means "Unauthorized"?',options:['400','401','403','404'],answer:1},{q:'Which status code means the resource was created?',options:['200','201','204','202'],answer:1}], resources:[{title:'FastAPI Docs',icon:'fa-book',url:'https://fastapi.tiangolo.com/'},{title:'REST API Best Practices',icon:'fa-graduation-cap',url:'https://restfulapi.net/'}] },
  { id:'databases', title:'Databases & SQL', icon:'fa-database', category:'Backend', color:'#a855f7', tagline:'Persist data with confidence', description:'Databases are the backbone of every backend system. Python connects to SQL databases via psycopg2, SQLite, or ORMs. Understanding raw SQL is essential.', keyPoints:['PostgreSQL is the go-to for production Python apps','Indexes dramatically speed up queries','Transactions ensure data consistency (ACID)','Connection pooling prevents resource exhaustion'], code:`import psycopg2\nfrom psycopg2.extras import RealDictCursor\nfrom contextlib import contextmanager\n\nDATABASE_URL = "postgresql://user:pass@localhost/mydb"\n\n@contextmanager\ndef get_db():\n    conn = psycopg2.connect(DATABASE_URL)\n    try:\n        yield conn\n        conn.commit()\n    except Exception:\n        conn.rollback()\n        raise\n    finally:\n        conn.close()\n\ndef get_users(limit: int = 10, offset: int = 0):\n    with get_db() as conn:\n        with conn.cursor(cursor_factory=RealDictCursor) as cur:\n            cur.execute(\n                "SELECT id, name, email FROM users "\n                "ORDER BY created_at DESC LIMIT %s OFFSET %s",\n                (limit, offset)\n            )\n            return cur.fetchall()\n\ndef create_user(name: str, email: str) -> dict:\n    with get_db() as conn:\n        with conn.cursor(cursor_factory=RealDictCursor) as cur:\n            cur.execute(\n                "INSERT INTO users (name, email) VALUES (%s, %s) RETURNING *",\n                (name, email)\n            )\n            return cur.fetchone()`, applications:[{title:'User Management',icon:'fa-users'},{title:'Analytics',icon:'fa-chart-line'},{title:'Audit Logs',icon:'fa-scroll'},{title:'Reporting',icon:'fa-file-lines'}], interview:[{q:'What is an index and when should you use one?',a:'An index is a data structure that speeds up SELECT queries at the cost of slower writes and more storage. Add indexes on columns used in WHERE, JOIN, and ORDER BY clauses. Avoid over-indexing.'},{q:'What are ACID properties?',a:"Atomicity (all or nothing), Consistency (valid state before and after), Isolation (concurrent transactions don't interfere), Durability (committed data survives crashes). PostgreSQL is fully ACID compliant."},{q:'What is N+1 query problem and how to fix it?',a:'Fetching N records then making 1 query per record = N+1 queries. Fix with JOINs or batch queries. In ORMs use select_related/prefetch_related (Django) or joinedload (SQLAlchemy).'}], mcqs:[{q:'Which SQL clause filters rows?',options:['ORDER BY','GROUP BY','WHERE','HAVING'],answer:2},{q:'What does a database transaction ensure?',options:['Speed','ACID properties','Indexing','Replication'],answer:1},{q:'Which PostgreSQL driver is most common for Python?',options:['pymysql','sqlite3','psycopg2','cx_Oracle'],answer:2}], resources:[{title:'PostgreSQL Docs',icon:'fa-book',url:'https://www.postgresql.org/docs/'},{title:'Real Python — Databases',icon:'fa-graduation-cap',url:'https://realpython.com/python-sql-libraries/'}] },
  { id:'orm', title:'SQLAlchemy ORM', icon:'fa-table', category:'Backend', color:'#a855f7', tagline:'Python objects, SQL power', description:"SQLAlchemy is Python's most powerful ORM. It maps Python classes to database tables and lets you query with Python instead of raw SQL, while still giving full SQL control.", keyPoints:['Declarative models map to DB tables','Session manages unit of work pattern','Relationships: one-to-many, many-to-many','Alembic handles schema migrations'], code:`from sqlalchemy import create_engine, Column, Integer, String, ForeignKey\nfrom sqlalchemy.orm import DeclarativeBase, relationship, Session\n\nengine = create_engine("postgresql+psycopg2://user:pass@localhost/db")\n\nclass Base(DeclarativeBase):\n    pass\n\nclass User(Base):\n    __tablename__ = "users"\n    id    = Column(Integer, primary_key=True)\n    name  = Column(String(100), nullable=False)\n    email = Column(String(200), unique=True, nullable=False)\n    posts = relationship("Post", back_populates="author", lazy="select")\n\nclass Post(Base):\n    __tablename__ = "posts"\n    id        = Column(Integer, primary_key=True)\n    title     = Column(String(200), nullable=False)\n    author_id = Column(Integer, ForeignKey("users.id"), nullable=False)\n    author    = relationship("User", back_populates="posts")\n\n# CRUD operations\nwith Session(engine) as session:\n    user = User(name="Alice", email="alice@example.com")\n    session.add(user)\n    session.commit()\n\n    users = session.query(User).filter(User.name.like("A%")).all()\n\n    from sqlalchemy.orm import joinedload\n    users_with_posts = (\n        session.query(User)\n        .options(joinedload(User.posts))\n        .all()\n    )`, applications:[{title:'Django-like Models',icon:'fa-table'},{title:'FastAPI + SQLAlchemy',icon:'fa-bolt'},{title:'Data Migration',icon:'fa-right-left'},{title:'Multi-DB Support',icon:'fa-server'}], interview:[{q:'What is the Unit of Work pattern?',a:"SQLAlchemy's Session tracks all changes to objects. When you commit, it generates the minimal SQL to sync the in-memory state with the database. This batches operations efficiently."},{q:'What is lazy vs eager loading?',a:'Lazy loading fetches related objects only when accessed (extra queries). Eager loading (joinedload/selectinload) fetches everything upfront in fewer queries. Choose based on access patterns.'},{q:'What is Alembic?',a:"Alembic is SQLAlchemy's migration tool. It generates migration scripts when you change models, allowing you to evolve your schema safely with version control."}], mcqs:[{q:'What does `session.commit()` do?',options:['Closes the session','Saves changes to DB','Rolls back changes','Creates a table'],answer:1},{q:'Which relationship type uses a join table?',options:['OneToOne','ForeignKey','ManyToMany','OneToMany'],answer:2},{q:'What tool handles SQLAlchemy migrations?',options:['Django','Alembic','Flyway','Liquibase'],answer:1}], resources:[{title:'SQLAlchemy Docs',icon:'fa-book',url:'https://docs.sqlalchemy.org/'},{title:'Real Python — SQLAlchemy',icon:'fa-graduation-cap',url:'https://realpython.com/python-sqlalchemy/'}] },
  // ADVANCED
  { id:'async', title:'Async & Await', icon:'fa-rotate', category:'Advanced', color:'#f59e0b', tagline:'Concurrency without the complexity', description:"Python's asyncio enables concurrent I/O-bound operations using coroutines. Write non-blocking code that looks synchronous — the foundation of FastAPI and modern Python backends.", keyPoints:['async/await syntax for coroutines','Event loop manages task scheduling','asyncio.gather() for concurrent execution','aiohttp, FastAPI built on asyncio'], code:`import asyncio\nimport aiohttp\n\nasync def fetch_data(session, url: str) -> dict:\n    async with session.get(url) as response:\n        return await response.json()\n\nasync def fetch_all(urls: list[str]) -> list:\n    async with aiohttp.ClientSession() as session:\n        tasks = [fetch_data(session, url) for url in urls]\n        results = await asyncio.gather(*tasks)\n        return results\n\nasync def main():\n    urls = [\n        'https://api.example.com/users/1',\n        'https://api.example.com/users/2',\n        'https://api.example.com/users/3',\n    ]\n    # All 3 requests run concurrently\n    data = await fetch_all(urls)\n    for item in data:\n        print(item)\n\nasyncio.run(main())`, applications:[{title:'FastAPI Services',icon:'fa-bolt'},{title:'Web Scraping',icon:'fa-globe'},{title:'Real-time Apps',icon:'fa-signal'},{title:'Batch API Calls',icon:'fa-layer-group'}], interview:[{q:'What is the difference between concurrency and parallelism?',a:'Concurrency is about dealing with multiple tasks at once (interleaving). Parallelism is about doing multiple tasks simultaneously (multi-core). asyncio provides concurrency, not parallelism.'},{q:'When should you use asyncio vs threading?',a:"Use asyncio for I/O-bound tasks (network, file I/O) — it's more efficient with less overhead. Use threading for blocking I/O that doesn't support async. Use multiprocessing for CPU-bound tasks."},{q:'What is an event loop?',a:'The event loop is the core of asyncio. It runs coroutines, handles I/O events, and schedules callbacks. It continuously checks for completed I/O operations and resumes waiting coroutines.'}], mcqs:[{q:'What keyword defines a coroutine function?',options:['await','async def','coroutine','yield'],answer:1},{q:'Which function runs multiple coroutines concurrently?',options:['asyncio.run()','asyncio.gather()','asyncio.wait()','asyncio.create_task()'],answer:1},{q:'asyncio is best suited for which type of tasks?',options:['CPU-bound','Memory-bound','I/O-bound','GPU-bound'],answer:2}], resources:[{title:'Python asyncio Docs',icon:'fa-book',url:'https://docs.python.org/3/library/asyncio.html'},{title:'Real Python — Async IO',icon:'fa-graduation-cap',url:'https://realpython.com/async-io-python/'}] },
  { id:'decorators', title:'Decorators', icon:'fa-wand-magic-sparkles', category:'Advanced', color:'#f59e0b', tagline:'Wrap functions with superpowers', description:"Decorators are higher-order functions that wrap other functions to extend behavior without modifying the original. They're the backbone of Flask routes, Django views, and more.", keyPoints:['A decorator is a function that returns a function','Use functools.wraps to preserve metadata','Class-based decorators for stateful behavior','Stacking decorators applies them bottom-up'], code:`import functools\nimport time\n\n# Basic decorator\ndef timer(func):\n    @functools.wraps(func)\n    def wrapper(*args, **kwargs):\n        start = time.perf_counter()\n        result = func(*args, **kwargs)\n        elapsed = time.perf_counter() - start\n        print(f"{func.__name__} took {elapsed:.4f}s")\n        return result\n    return wrapper\n\n# Decorator with arguments\ndef retry(max_attempts: int = 3, delay: float = 1.0):\n    def decorator(func):\n        @functools.wraps(func)\n        def wrapper(*args, **kwargs):\n            for attempt in range(max_attempts):\n                try:\n                    return func(*args, **kwargs)\n                except Exception as e:\n                    if attempt == max_attempts - 1:\n                        raise\n                    time.sleep(delay)\n        return wrapper\n    return decorator\n\n# Class-based decorator (stateful)\nclass cache:\n    def __init__(self, func):\n        self.func = func\n        self.store = {}\n        functools.update_wrapper(self, func)\n\n    def __call__(self, *args):\n        if args not in self.store:\n            self.store[args] = self.func(*args)\n        return self.store[args]\n\n@retry(max_attempts=3, delay=0.5)\n@timer\ndef fetch_data(url: str):\n    pass  # HTTP call`, applications:[{title:'Route Registration',icon:'fa-route'},{title:'Auth & Permissions',icon:'fa-lock'},{title:'Caching',icon:'fa-memory'},{title:'Logging & Tracing',icon:'fa-scroll'}], interview:[{q:'Why use functools.wraps?',a:"Without @functools.wraps, the wrapper function replaces the original's __name__, __doc__, and other metadata. @functools.wraps copies these attributes so the decorated function looks like the original."},{q:'How do you create a decorator that accepts arguments?',a:'You need three levels of nesting: the outer function accepts the arguments, returns a decorator function, which accepts the function, and returns the wrapper. Or use a class with __init__ for args and __call__ for the function.'},{q:'In what order are stacked decorators applied?',a:'Bottom-up. `@A @B def f()` is equivalent to `f = A(B(f))`. B wraps f first, then A wraps the result. But they execute top-down when called.'}], mcqs:[{q:'What does @functools.wraps do?',options:['Speeds up the function','Preserves function metadata','Caches the result','Adds type hints'],answer:1},{q:'A decorator is essentially a:',options:['Class','Higher-order function','Generator','Context manager'],answer:1},{q:'Which built-in decorator caches function results?',options:['@cache','@functools.lru_cache','@memoize','@cached'],answer:1}], resources:[{title:'Python Docs — functools',icon:'fa-book',url:'https://docs.python.org/3/library/functools.html'},{title:'Real Python — Decorators',icon:'fa-graduation-cap',url:'https://realpython.com/primer-on-python-decorators/'}] },
  { id:'generators', title:'Generators & Iterators', icon:'fa-infinity', category:'Advanced', color:'#f59e0b', tagline:'Lazy evaluation at its finest', description:"Generators produce values on demand using yield, enabling memory-efficient processing of large datasets. They're the foundation of Python's iteration protocol.", keyPoints:['yield pauses execution and returns a value','Generator functions return a generator object','yield from delegates to a sub-generator','Infinite sequences without infinite memory'], code:`from typing import Generator, Iterator\nimport itertools\n\n# Basic generator\ndef fibonacci() -> Generator[int, None, None]:\n    a, b = 0, 1\n    while True:\n        yield a\n        a, b = b, a + b\n\n# Take first N from infinite generator\nfib = fibonacci()\nfirst_10 = [next(fib) for _ in range(10)]\n\n# Generator pipeline\ndef read_lines(filename: str) -> Iterator[str]:\n    with open(filename) as f:\n        yield from f\n\ndef filter_empty(lines: Iterator[str]) -> Iterator[str]:\n    return (line.strip() for line in lines if line.strip())\n\ndef parse_csv(lines: Iterator[str]) -> Iterator[dict]:\n    headers = next(lines).split(",")\n    for line in lines:\n        yield dict(zip(headers, line.split(",")))\n\n# Compose pipeline (processes one line at a time)\npipeline = parse_csv(filter_empty(read_lines("data.csv")))\n\n# itertools\npairs = list(itertools.combinations([1, 2, 3, 4], 2))`, applications:[{title:'Large File Processing',icon:'fa-file-lines'},{title:'Data Streaming',icon:'fa-water'},{title:'Infinite Sequences',icon:'fa-infinity'},{title:'Pipeline Processing',icon:'fa-diagram-project'}], interview:[{q:'What is the difference between a generator and a list?',a:'A list stores all values in memory. A generator computes values lazily — one at a time. For large datasets, generators use O(1) memory vs O(n) for lists.'},{q:'What does `yield from` do?',a:"yield from iterable delegates to a sub-generator or iterable, yielding each value. It also passes send() and throw() calls through. Cleaner than `for item in sub: yield item`."},{q:'How do you send values into a generator?',a:"Use `generator.send(value)`. The value becomes the result of the `yield` expression inside the generator. First call must be `next()` or `send(None)` to advance to the first yield."}], mcqs:[{q:'What keyword makes a function a generator?',options:['return','yield','async','generate'],answer:1},{q:'What exception signals a generator is exhausted?',options:['GeneratorExit','StopIteration','IndexError','RuntimeError'],answer:1},{q:'Which is more memory-efficient for large data?',options:['list comprehension','generator expression','tuple','dict'],answer:1}], resources:[{title:'Python Docs — Generators',icon:'fa-book',url:'https://docs.python.org/3/howto/functional.html#generators'},{title:'Real Python — Generators',icon:'fa-graduation-cap',url:'https://realpython.com/introduction-to-python-generators/'}] },
  { id:'auth', title:'Authentication & JWT', icon:'fa-shield-halved', category:'Advanced', color:'#f59e0b', tagline:'Secure your APIs the right way', description:"Authentication verifies identity; authorization controls access. JWT (JSON Web Tokens) enable stateless auth — the server doesn't store session state.", keyPoints:['JWT: Header.Payload.Signature (base64 encoded)','Access tokens short-lived (15min), refresh tokens longer','bcrypt for password hashing — never store plaintext','OAuth2 for third-party auth (Google, GitHub)'], code:`from datetime import datetime, timedelta, timezone\nimport jwt\nimport bcrypt\n\nSECRET_KEY = "your-secret-key"\nALGORITHM  = "HS256"\n\n# Password hashing\ndef hash_password(password: str) -> str:\n    salt = bcrypt.gensalt(rounds=12)\n    return bcrypt.hashpw(password.encode(), salt).decode()\n\ndef verify_password(password: str, hashed: str) -> bool:\n    return bcrypt.checkpw(password.encode(), hashed.encode())\n\n# JWT creation\ndef create_access_token(user_id: int) -> str:\n    payload = {\n        "sub": str(user_id),\n        "iat": datetime.now(timezone.utc),\n        "exp": datetime.now(timezone.utc) + timedelta(minutes=15),\n        "type": "access",\n    }\n    return jwt.encode(payload, SECRET_KEY, algorithm=ALGORITHM)\n\n# JWT verification\ndef verify_token(token: str) -> dict:\n    try:\n        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])\n        return payload\n    except jwt.ExpiredSignatureError:\n        raise ValueError("Token expired")\n    except jwt.InvalidTokenError:\n        raise ValueError("Invalid token")`, applications:[{title:'API Authentication',icon:'fa-key'},{title:'Role-Based Access',icon:'fa-user-shield'},{title:'OAuth2 Integration',icon:'fa-brands fa-google'},{title:'Session Management',icon:'fa-clock'}], interview:[{q:'What are the three parts of a JWT?',a:"Header (algorithm + token type), Payload (claims: sub, iat, exp, custom data), Signature (HMAC of header+payload using secret). The signature verifies the token hasn't been tampered with."},{q:'Why use short-lived access tokens with refresh tokens?',a:"Short access tokens (15min) limit damage if stolen. Refresh tokens (7-30 days) allow getting new access tokens without re-login. Store refresh tokens server-side to enable revocation."},{q:'Why is bcrypt preferred over SHA256 for passwords?',a:'bcrypt is intentionally slow (configurable cost factor) making brute-force attacks expensive. SHA256 is fast — designed for speed, not password security. bcrypt also includes a salt automatically.'}], mcqs:[{q:'What does JWT stand for?',options:['Java Web Token','JSON Web Token','JavaScript Web Token','JSON Web Transfer'],answer:1},{q:'Which part of JWT contains user data?',options:['Header','Payload','Signature','Footer'],answer:1},{q:'Which hashing algorithm is recommended for passwords?',options:['MD5','SHA256','bcrypt','SHA1'],answer:2}], resources:[{title:'JWT.io — Debugger',icon:'fa-book',url:'https://jwt.io/'},{title:'Real Python — Token Auth',icon:'fa-graduation-cap',url:'https://realpython.com/token-based-authentication-with-flask/'}] },
  { id:'testing', title:'Testing with pytest', icon:'fa-vial', category:'Advanced', color:'#f59e0b', tagline:'Code you can trust', description:"pytest is Python's most popular testing framework. Write unit tests, integration tests, and use fixtures, mocking, and parametrize for comprehensive test coverage.", keyPoints:['pytest auto-discovers test_*.py files','Fixtures provide reusable test setup/teardown','@pytest.mark.parametrize for data-driven tests','unittest.mock for isolating dependencies'], code:`import pytest\nfrom unittest.mock import patch, MagicMock\n\n# Unit test\ndef add(a: int, b: int) -> int:\n    return a + b\n\ndef test_add():\n    assert add(2, 3) == 5\n    assert add(-1, 1) == 0\n\n# Parametrize\n@pytest.mark.parametrize("a,b,expected", [\n    (2, 3, 5),\n    (-1, 1, 0),\n    (0, 0, 0),\n])\ndef test_add_parametrized(a, b, expected):\n    assert add(a, b) == expected\n\n# Fixture\n@pytest.fixture\ndef db_session():\n    session = create_test_session()\n    yield session\n    session.rollback()\n    session.close()\n\ndef test_create_user(db_session):\n    user = User(name="Alice", email="alice@test.com")\n    db_session.add(user)\n    db_session.commit()\n    assert user.id is not None\n\n# Mocking\ndef test_send_email():\n    with patch("myapp.email.send") as mock_send:\n        mock_send.return_value = True\n        result = notify_user(user_id=1)\n        mock_send.assert_called_once()\n        assert result is True`, applications:[{title:'CI/CD Pipelines',icon:'fa-code-branch'},{title:'TDD Workflow',icon:'fa-rotate-left'},{title:'API Testing',icon:'fa-plug'},{title:'Regression Prevention',icon:'fa-shield'}], interview:[{q:'What is the difference between a mock and a stub?',a:"A stub returns predefined values (replaces a dependency). A mock also verifies interactions — you assert it was called with specific arguments. Python's MagicMock can do both."},{q:'What is a pytest fixture?',a:'A fixture is a function decorated with @pytest.fixture that provides setup/teardown for tests. Tests declare fixtures as parameters. Fixtures can have scopes: function, class, module, session.'},{q:'What is test coverage and what percentage is good?',a:'Coverage measures what percentage of code is executed by tests. 80%+ is generally good. 100% is not always practical. Focus on critical paths, edge cases, and business logic rather than chasing 100%.'}], mcqs:[{q:'Which decorator runs a test with multiple inputs?',options:['@pytest.fixture','@pytest.mark.parametrize','@pytest.mark.skip','@pytest.mark.xfail'],answer:1},{q:"What does `mock.assert_called_once()` verify?",options:['Mock was never called','Mock was called exactly once','Mock returned a value','Mock raised an exception'],answer:1},{q:'Which command runs pytest with coverage?',options:['pytest --cov','pytest --coverage','pytest -c','pytest --report'],answer:0}], resources:[{title:'pytest Docs',icon:'fa-book',url:'https://docs.pytest.org/'},{title:'Real Python — pytest',icon:'fa-graduation-cap',url:'https://realpython.com/pytest-python-testing/'}] },
  // DEPLOYMENT
  { id:'docker', title:'Docker & Deployment', icon:'fa-box', category:'Deployment', color:'#ff1e1e', tagline:'Ship anywhere, run everywhere', description:'Docker packages your Python app and its dependencies into a portable container. Deploy consistently across dev, staging, and production with zero environment surprises.', keyPoints:['Dockerfile defines the container image','docker-compose for multi-service apps','Environment variables for config management','Health checks and restart policies'], code:`# Dockerfile\nFROM python:3.12-slim\n\nWORKDIR /app\n\n# Install dependencies first (layer caching)\nCOPY requirements.txt .\nRUN pip install --no-cache-dir -r requirements.txt\n\n# Copy source\nCOPY . .\n\n# Non-root user for security\nRUN adduser --disabled-password appuser\nUSER appuser\n\nEXPOSE 8000\n\nCMD ["gunicorn", "app:app", "--bind", "0.0.0.0:8000", "--workers", "4"]\n\n# docker-compose.yml\n# version: '3.9'\n# services:\n#   web:\n#     build: .\n#     ports: ["8000:8000"]\n#     environment:\n#       - DATABASE_URL=postgresql://user:pass@db/mydb\n#   db:\n#     image: postgres:15\n#     volumes: [pgdata:/var/lib/postgresql/data]`, applications:[{title:'Cloud Deployment',icon:'fa-cloud'},{title:'CI/CD Pipelines',icon:'fa-code-branch'},{title:'Microservices',icon:'fa-network-wired'},{title:'Dev Environments',icon:'fa-laptop-code'}], interview:[{q:'What is the difference between a Docker image and container?',a:'An image is a read-only template with instructions for creating a container. A container is a running instance of an image — it adds a writable layer on top.'},{q:'What is layer caching in Docker?',a:"Docker caches each instruction layer. If a layer hasn't changed, it reuses the cache. Copy requirements.txt before source code so dependency installation is cached unless requirements change."},{q:'Why run containers as non-root?',a:'Running as root inside a container is a security risk. If the container is compromised, the attacker gets root privileges. Non-root users limit the blast radius of any security breach.'}], mcqs:[{q:'Which command builds a Docker image?',options:['docker run','docker build','docker create','docker start'],answer:1},{q:'What file defines a multi-container Docker app?',options:['Dockerfile','docker-compose.yml','docker.json','container.yaml'],answer:1},{q:'Which instruction sets the working directory in a Dockerfile?',options:['RUN','ENV','WORKDIR','SET'],answer:2}], resources:[{title:'Docker Official Docs',icon:'fa-book',url:'https://docs.docker.com/'},{title:'Docker for Python Devs',icon:'fa-graduation-cap',url:'https://testdriven.io/blog/docker-best-practices/'}] },
  { id:'ci-cd', title:'CI/CD Pipelines', icon:'fa-code-branch', category:'Deployment', color:'#ff1e1e', tagline:'Automate the path to production', description:'CI/CD automates testing, building, and deploying code. Every push triggers a pipeline that catches bugs early and ships code safely. GitHub Actions is the go-to for Python projects.', keyPoints:['CI: run tests on every push/PR','CD: auto-deploy on merge to main','Matrix builds test multiple Python versions','Secrets management for credentials'], code:`# .github/workflows/ci.yml\nname: CI/CD Pipeline\n\non:\n  push:\n    branches: [main, develop]\n  pull_request:\n    branches: [main]\n\njobs:\n  test:\n    runs-on: ubuntu-latest\n    strategy:\n      matrix:\n        python-version: ["3.11", "3.12"]\n\n    steps:\n      - uses: actions/checkout@v4\n\n      - name: Set up Python\n        uses: actions/setup-python@v5\n        with:\n          python-version: ${"$"}{matrix.python-version}\n          cache: 'pip'\n\n      - name: Install dependencies\n        run: |\n          pip install -r requirements.txt\n          pip install pytest pytest-cov\n\n      - name: Run tests\n        run: pytest --cov=app --cov-report=xml\n\n  deploy:\n    needs: test\n    runs-on: ubuntu-latest\n    if: github.ref == 'refs/heads/main'\n    steps:\n      - name: Deploy to production\n        run: |\n          docker build -t myapp .\n          docker push registry/myapp:latest`, applications:[{title:'Auto Testing',icon:'fa-vial'},{title:'Auto Deployment',icon:'fa-rocket'},{title:'Code Quality Gates',icon:'fa-shield'},{title:'Release Automation',icon:'fa-tag'}], interview:[{q:'What is the difference between CI and CD?',a:'CI (Continuous Integration) automatically builds and tests code on every commit. CD (Continuous Delivery/Deployment) automatically deploys passing builds to staging or production.'},{q:'What is a matrix build?',a:'A matrix build runs the same job with different configurations (Python versions, OS, etc.) in parallel. Ensures your code works across all supported environments.'},{q:'How do you handle secrets in CI/CD?',a:"Store secrets in the CI platform's secret store (GitHub Secrets, etc.), never in code. Access via environment variables. Rotate secrets regularly. Use OIDC for cloud auth instead of long-lived credentials."}], mcqs:[{q:'What triggers a GitHub Actions workflow?',options:['Only manual runs','Events defined in `on:`','Only scheduled runs','Only push events'],answer:1},{q:'What does `needs: test` in a job mean?',options:['The job needs testing','Runs after the test job','Skips if test fails','Runs in parallel with test'],answer:1},{q:'Where should CI/CD secrets be stored?',options:['In the code','In a .env file','In the CI platform secret store','In a config file'],answer:2}], resources:[{title:'GitHub Actions Docs',icon:'fa-book',url:'https://docs.github.com/en/actions'},{title:'Real Python — CI/CD',icon:'fa-graduation-cap',url:'https://realpython.com/python-continuous-integration/'}] },
  { id:'cloud', title:'Cloud Deployment', icon:'fa-cloud', category:'Deployment', color:'#ff1e1e', tagline:'Scale from zero to millions', description:'Deploy Python apps to the cloud using platforms like Railway, Render, or container services. Environment configuration, health checks, and zero-downtime deploys are essential.', keyPoints:['Environment variables for all config (12-factor app)','Health check endpoints for load balancers','Gunicorn/Uvicorn as production WSGI/ASGI servers','Horizontal scaling with stateless apps'], code:`# config.py — 12-factor app config\nfrom pydantic_settings import BaseSettings\n\nclass Settings(BaseSettings):\n    app_name: str = "My API"\n    debug: bool = False\n    database_url: str\n    redis_url: str = "redis://localhost:6379"\n    secret_key: str\n    allowed_hosts: list[str] = ["*"]\n\n    class Config:\n        env_file = ".env"\n\nsettings = Settings()\n\n# Health check endpoint\nfrom fastapi import FastAPI\napp = FastAPI()\n\n@app.get("/health")\nasync def health_check():\n    return {\n        "status": "healthy",\n        "version": "1.0.0",\n    }\n\n# Procfile (Heroku/Railway)\n# web: gunicorn app:app --workers 4 --bind 0.0.0.0:$PORT`, applications:[{title:'SaaS Products',icon:'fa-cloud-arrow-up'},{title:'API Services',icon:'fa-server'},{title:'Scheduled Jobs',icon:'fa-clock'},{title:'Background Workers',icon:'fa-gears'}], interview:[{q:'What is the 12-factor app methodology?',a:'A set of best practices for building cloud-native apps: store config in environment variables, treat backing services as attached resources, keep dev/prod parity, log to stdout, etc.'},{q:'What is the difference between WSGI and ASGI?',a:'WSGI (Web Server Gateway Interface) is synchronous — one request at a time per worker. ASGI (Async Server Gateway Interface) supports async, WebSockets, and long-polling. FastAPI uses ASGI (Uvicorn).'},{q:'How many Gunicorn workers should you use?',a:'Rule of thumb: (2 x CPU cores) + 1. For a 2-core server: 5 workers. For async apps (FastAPI + Uvicorn), use fewer workers with more async concurrency.'}], mcqs:[{q:'Which server runs FastAPI in production?',options:['Gunicorn','Uvicorn','Nginx','Apache'],answer:1},{q:'Where should app config be stored per 12-factor?',options:['config.py','Environment variables','database','JSON file'],answer:1},{q:'What does a health check endpoint return?',options:['User data','App status/version','Logs','Metrics'],answer:1}], resources:[{title:'12-Factor App',icon:'fa-book',url:'https://12factor.net/'},{title:'Render — Deploy Python',icon:'fa-graduation-cap',url:'https://render.com/docs/deploy-flask'}] },
  { id:'monitoring', title:'Monitoring & Logging', icon:'fa-chart-line', category:'Deployment', color:'#ff1e1e', tagline:'Observe everything, miss nothing', description:"Production apps need observability. Structured logging, metrics, and error tracking let you understand what's happening and fix issues before users notice.", keyPoints:['Structured logging (JSON) for machine-readable logs','Sentry for error tracking and alerting','Prometheus + Grafana for metrics','Correlation IDs to trace requests across services'], code:`import logging, json, time, uuid\nfrom starlette.middleware.base import BaseHTTPMiddleware\n\n# Structured JSON logging\nclass JSONFormatter(logging.Formatter):\n    def format(self, record):\n        log = {\n            "timestamp": self.formatTime(record),\n            "level": record.levelname,\n            "message": record.getMessage(),\n            "module": record.module,\n        }\n        if record.exc_info:\n            log["exception"] = self.formatException(record.exc_info)\n        return json.dumps(log)\n\nhandler = logging.StreamHandler()\nhandler.setFormatter(JSONFormatter())\nlogger = logging.getLogger("app")\nlogger.addHandler(handler)\nlogger.setLevel(logging.INFO)\n\n# Request logging middleware (FastAPI)\nclass LoggingMiddleware(BaseHTTPMiddleware):\n    async def dispatch(self, request, call_next):\n        request_id = str(uuid.uuid4())[:8]\n        start = time.perf_counter()\n        response = await call_next(request)\n        duration = round((time.perf_counter() - start) * 1000, 2)\n        logger.info(json.dumps({\n            "request_id": request_id,\n            "method": request.method,\n            "path": request.url.path,\n            "status": response.status_code,\n            "duration_ms": duration,\n        }))\n        return response`, applications:[{title:'Error Alerting',icon:'fa-bell'},{title:'Performance Tracking',icon:'fa-gauge-high'},{title:'Audit Trails',icon:'fa-scroll'},{title:'SLA Monitoring',icon:'fa-chart-bar'}], interview:[{q:'What is structured logging?',a:'Logging in a machine-readable format (JSON) instead of plain text. Each log entry is a structured object with consistent fields (timestamp, level, message, context). Makes log aggregation and searching much easier.'},{q:'What is the difference between logging levels?',a:'DEBUG (detailed dev info), INFO (normal operations), WARNING (unexpected but handled), ERROR (something failed), CRITICAL (system-level failure). Set level to INFO in production, DEBUG in development.'},{q:'What is a correlation ID?',a:'A unique ID assigned to each request and passed through all services and log entries. Allows you to trace a single request across multiple microservices and log aggregators.'}], mcqs:[{q:'Which log level is for normal operational messages?',options:['DEBUG','INFO','WARNING','ERROR'],answer:1},{q:'What format is best for production logs?',options:['Plain text','XML','JSON','CSV'],answer:2},{q:'What tool is commonly used for Python error tracking?',options:['Grafana','Prometheus','Sentry','Datadog'],answer:2}], resources:[{title:'Python Logging Docs',icon:'fa-book',url:'https://docs.python.org/3/library/logging.html'},{title:'Sentry for Python',icon:'fa-graduation-cap',url:'https://docs.sentry.io/platforms/python/'}] },
  { id:'security', title:'Security Best Practices', icon:'fa-lock', category:'Deployment', color:'#ff1e1e', tagline:"Build systems that can't be broken", description:'Security is not an afterthought — it is built in from day one. SQL injection, XSS, CSRF, and insecure dependencies are the most common attack vectors in Python web apps.', keyPoints:['Never trust user input — validate everything','Use parameterized queries to prevent SQL injection','HTTPS everywhere — never transmit secrets in plain text','Keep dependencies updated — use pip-audit'], code:`# SQL Injection prevention\n# BAD — never do this\nquery = f"SELECT * FROM users WHERE name = '{user_input}'"\n\n# GOOD — parameterized query\ncursor.execute("SELECT * FROM users WHERE name = %s", (user_input,))\n\n# Input validation with Pydantic\nfrom pydantic import BaseModel, EmailStr, field_validator\nimport re\n\nclass UserCreate(BaseModel):\n    name: str\n    email: EmailStr\n    password: str\n\n    @field_validator("name")\n    @classmethod\n    def validate_name(cls, v):\n        if not re.match(r"^[a-zA-Z ]{2,50}$", v):\n            raise ValueError("Invalid name")\n        return v.strip()\n\n    @field_validator("password")\n    @classmethod\n    def validate_password(cls, v):\n        if len(v) < 8:\n            raise ValueError("Password too short")\n        return v\n\n# Security headers middleware\n@app.middleware("http")\nasync def security_headers(request, call_next):\n    response = await call_next(request)\n    response.headers["X-Content-Type-Options"] = "nosniff"\n    response.headers["X-Frame-Options"] = "DENY"\n    response.headers["Strict-Transport-Security"] = "max-age=31536000"\n    return response`, applications:[{title:'Input Sanitization',icon:'fa-filter'},{title:'Rate Limiting',icon:'fa-gauge'},{title:'Dependency Auditing',icon:'fa-magnifying-glass'},{title:'Secret Rotation',icon:'fa-key'}], interview:[{q:'What is SQL injection and how do you prevent it?',a:'SQL injection is when user input is embedded directly in SQL queries, allowing attackers to manipulate the query. Prevent with parameterized queries (never string formatting) and ORMs that handle escaping.'},{q:"What is CSRF and how does Django protect against it?",a:"Cross-Site Request Forgery tricks authenticated users into making unwanted requests. Django's CsrfViewMiddleware generates a token per session and validates it on POST requests."},{q:'What is the principle of least privilege?',a:'Give each component only the permissions it needs. DB user should only have SELECT/INSERT/UPDATE on needed tables. API keys should have minimal scopes. Containers should run as non-root.'}], mcqs:[{q:'Which prevents SQL injection?',options:['Input length limits','Parameterized queries','HTTPS','Rate limiting'],answer:1},{q:'What does HTTPS protect against?',options:['SQL injection','XSS','Man-in-the-middle attacks','CSRF'],answer:2},{q:'Which tool audits Python dependencies for vulnerabilities?',options:['pip check','pip-audit','safety','bandit'],answer:1}], resources:[{title:'OWASP Top 10',icon:'fa-book',url:'https://owasp.org/www-project-top-ten/'},{title:'Real Python — Security',icon:'fa-graduation-cap',url:'https://realpython.com/python-security/'}] },
];

export const featuredTopics = allTopics.slice(0, 4);

export const buildProjects = [
  {
    id: 'blog-api',
    title: 'Blog API',
    icon: 'fa-pen-nib',
    color: '#3b82f6',
    description: 'Full CRUD REST API with authentication, pagination, and categories.',
    tech: ['Flask', 'SQLAlchemy', 'JWT', 'PostgreSQL'],
    explanation: 'Flask Blueprints keep routes modular. SQLAlchemy ORM handles DB. JWT secures endpoints. Pagination prevents large payloads.',
    structure: `blog-api/
+-- app/
|   +-- __init__.py
|   +-- models/
|   |   +-- user.py
|   |   +-- post.py
|   +-- routes/
|   |   +-- auth.py
|   |   +-- posts.py
|   +-- utils/
|       +-- decorators.py
+-- config.py
+-- requirements.txt
+-- Dockerfile`,
    files: [
      { name: 'app/__init__.py', lang: 'python', code: `from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_jwt_extended import JWTManager

db = SQLAlchemy()
jwt = JWTManager()

def create_app(config="config.Config"):
    app = Flask(__name__)
    app.config.from_object(config)
    db.init_app(app)
    jwt.init_app(app)
    from .routes.auth import auth_bp
    from .routes.posts import posts_bp
    app.register_blueprint(auth_bp, url_prefix="/api/auth")
    app.register_blueprint(posts_bp, url_prefix="/api")
    return app` },
      { name: 'app/models/user.py', lang: 'python', code: `from app import db
from werkzeug.security import generate_password_hash, check_password_hash

class User(db.Model):
    __tablename__ = "users"
    id       = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email    = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(256), nullable=False)
    posts    = db.relationship("Post", backref="author", lazy="dynamic")

    def set_password(self, raw):
        self.password = generate_password_hash(raw)

    def check_password(self, raw):
        return check_password_hash(self.password, raw)

    def to_dict(self):
        return {"id": self.id, "username": self.username, "email": self.email}` },
      { name: 'app/models/post.py', lang: 'python', code: `from app import db
from datetime import datetime, timezone

class Post(db.Model):
    __tablename__ = "posts"
    id         = db.Column(db.Integer, primary_key=True)
    title      = db.Column(db.String(200), nullable=False)
    content    = db.Column(db.Text, nullable=False)
    category   = db.Column(db.String(50), default="general")
    author_id  = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    created_at = db.Column(db.DateTime, default=lambda: datetime.now(timezone.utc))

    def to_dict(self):
        return {
            "id": self.id, "title": self.title,
            "content": self.content, "category": self.category,
            "author": self.author.username,
            "created_at": self.created_at.isoformat(),
        }` },
      { name: 'app/routes/auth.py', lang: 'python', code: `from flask import Blueprint, request, jsonify
from flask_jwt_extended import create_access_token, create_refresh_token
from app import db
from app.models.user import User

auth_bp = Blueprint("auth", __name__)

@auth_bp.route("/register", methods=["POST"])
def register():
    data = request.get_json()
    if User.query.filter_by(email=data["email"]).first():
        return jsonify({"error": "Email already registered"}), 409
    user = User(username=data["username"], email=data["email"])
    user.set_password(data["password"])
    db.session.add(user)
    db.session.commit()
    return jsonify({"message": "Registered", "user": user.to_dict()}), 201

@auth_bp.route("/login", methods=["POST"])
def login():
    data = request.get_json()
    user = User.query.filter_by(email=data["email"]).first()
    if not user or not user.check_password(data["password"]):
        return jsonify({"error": "Invalid credentials"}), 401
    return jsonify({
        "access_token": create_access_token(identity=user.id),
        "refresh_token": create_refresh_token(identity=user.id),
    })` },
      { name: 'app/routes/posts.py', lang: 'python', code: `from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from app import db
from app.models.post import Post

posts_bp = Blueprint("posts", __name__)

@posts_bp.route("/posts", methods=["GET"])
def get_posts():
    page     = request.args.get("page", 1, type=int)
    category = request.args.get("category")
    query    = Post.query
    if category:
        query = query.filter_by(category=category)
    paginated = query.order_by(Post.created_at.desc()).paginate(page=page, per_page=10)
    return jsonify({
        "posts": [p.to_dict() for p in paginated.items],
        "total": paginated.total, "pages": paginated.pages, "page": page,
    })

@posts_bp.route("/posts", methods=["POST"])
@jwt_required()
def create_post():
    data = request.get_json()
    post = Post(
        title=data["title"], content=data["content"],
        category=data.get("category", "general"),
        author_id=get_jwt_identity(),
    )
    db.session.add(post)
    db.session.commit()
    return jsonify(post.to_dict()), 201

@posts_bp.route("/posts/<int:post_id>", methods=["DELETE"])
@jwt_required()
def delete_post(post_id):
    post = Post.query.get_or_404(post_id)
    if post.author_id != get_jwt_identity():
        return jsonify({"error": "Forbidden"}), 403
    db.session.delete(post)
    db.session.commit()
    return jsonify({"message": "Deleted"})` },
      { name: 'config.py', lang: 'python', code: `import os

class Config:
    SECRET_KEY = os.environ.get("SECRET_KEY", "dev-secret")
    SQLALCHEMY_DATABASE_URI = os.environ.get("DATABASE_URL", "sqlite:///blog.db")
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    JWT_SECRET_KEY = os.environ.get("JWT_SECRET_KEY", "jwt-secret")
    JWT_ACCESS_TOKEN_EXPIRES  = 900
    JWT_REFRESH_TOKEN_EXPIRES = 604800` },
      { name: 'Dockerfile', lang: 'docker', code: `FROM python:3.12-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY . .
RUN adduser --disabled-password appuser && chown -R appuser /app
USER appuser
EXPOSE 5000
CMD ["gunicorn", "wsgi:app", "--bind", "0.0.0.0:5000", "--workers", "4"]` },
    ],
  },
  {
    id: 'auth-system',
    title: 'Auth System',
    icon: 'fa-shield-halved',
    color: '#a855f7',
    description: 'JWT-based authentication with refresh tokens, role-based access control.',
    tech: ['FastAPI', 'JWT', 'bcrypt', 'Redis'],
    explanation: 'FastAPI dependency injection handles auth cleanly. bcrypt hashes passwords. Redis stores refresh token blacklist for logout support.',
    structure: `auth-system/
+-- app/
|   +-- auth/
|   |   +-- router.py
|   |   +-- schemas.py
|   |   +-- service.py
|   +-- core/
|   |   +-- security.py
|   |   +-- config.py
|   +-- models/
|       +-- user.py
+-- main.py
+-- requirements.txt`,
    files: [
      { name: 'main.py', lang: 'python', code: `from fastapi import FastAPI
from app.auth.router import router as auth_router
from app.core.config import settings

app = FastAPI(title=settings.app_name, version="1.0.0")
app.include_router(auth_router, prefix="/auth", tags=["auth"])

@app.get("/health")
async def health():
    return {"status": "ok"}` },
      { name: 'app/core/config.py', lang: 'python', code: `from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    app_name: str = "Auth System"
    secret_key: str = "change-me-in-production"
    algorithm: str = "HS256"
    access_token_expire_minutes: int = 15
    refresh_token_expire_days: int = 7
    database_url: str = "sqlite+aiosqlite:///./auth.db"
    redis_url: str = "redis://localhost:6379"

    class Config:
        env_file = ".env"

settings = Settings()` },
      { name: 'app/core/security.py', lang: 'python', code: `from datetime import datetime, timedelta, timezone
import jwt
import bcrypt
from app.core.config import settings

def hash_password(password: str) -> str:
    return bcrypt.hashpw(password.encode(), bcrypt.gensalt(12)).decode()

def verify_password(password: str, hashed: str) -> bool:
    return bcrypt.checkpw(password.encode(), hashed.encode())

def create_token(subject: str, expires_delta: timedelta) -> str:
    payload = {
        "sub": subject,
        "iat": datetime.now(timezone.utc),
        "exp": datetime.now(timezone.utc) + expires_delta,
    }
    return jwt.encode(payload, settings.secret_key, algorithm=settings.algorithm)

def decode_token(token: str) -> dict:
    return jwt.decode(token, settings.secret_key, algorithms=[settings.algorithm])` },
      { name: 'app/auth/schemas.py', lang: 'python', code: `from pydantic import BaseModel, EmailStr

class RegisterRequest(BaseModel):
    username: str
    email: EmailStr
    password: str

class LoginRequest(BaseModel):
    email: EmailStr
    password: str

class TokenResponse(BaseModel):
    access_token: str
    refresh_token: str
    token_type: str = "bearer"` },
      { name: 'app/auth/router.py', lang: 'python', code: `from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer
from datetime import timedelta
from app.auth.schemas import RegisterRequest, LoginRequest, TokenResponse
from app.core.security import hash_password, verify_password, create_token, decode_token
from app.core.config import settings

router = APIRouter()
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="auth/login")

@router.post("/register", status_code=201)
async def register(body: RegisterRequest):
    hashed = hash_password(body.password)
    return {"message": "Registered", "username": body.username}

@router.post("/login", response_model=TokenResponse)
async def login(body: LoginRequest):
    access  = create_token(body.email, timedelta(minutes=settings.access_token_expire_minutes))
    refresh = create_token(body.email, timedelta(days=settings.refresh_token_expire_days))
    return TokenResponse(access_token=access, refresh_token=refresh)

async def get_current_user(token: str = Depends(oauth2_scheme)):
    try:
        payload = decode_token(token)
        return payload.get("sub")
    except Exception:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid token")

@router.get("/me")
async def me(user: str = Depends(get_current_user)):
    return {"email": user}` },
      { name: 'requirements.txt', lang: 'text', code: `fastapi==0.115.0
uvicorn[standard]==0.30.0
pydantic-settings==2.4.0
pyjwt==2.9.0
bcrypt==4.2.0
redis==5.1.0
aiosqlite==0.20.0` },
    ],
  },
  {
    id: 'task-manager',
    title: 'Task Manager',
    icon: 'fa-list-check',
    color: '#22c55e',
    description: 'Real-time task management API with WebSocket updates and priority queues.',
    tech: ['Django', 'Channels', 'Celery', 'Redis'],
    explanation: 'Django Channels enables WebSocket connections. Celery handles background task processing. Redis serves as both channel layer and task broker.',
    structure: `task-manager/
+-- tasks/
|   +-- models.py
|   +-- views.py
|   +-- serializers.py
|   +-- consumers.py
|   +-- tasks.py
+-- celery_app.py
+-- routing.py
+-- settings.py`,
    files: [
      { name: 'tasks/models.py', lang: 'python', code: `from django.db import models
from django.contrib.auth.models import User

class Task(models.Model):
    PRIORITY = [("low","Low"),("medium","Medium"),("high","High")]
    STATUS   = [("todo","Todo"),("in_progress","In Progress"),("done","Done")]

    title       = models.CharField(max_length=200)
    description = models.TextField(blank=True)
    priority    = models.CharField(max_length=10, choices=PRIORITY, default="medium")
    status      = models.CharField(max_length=20, choices=STATUS, default="todo")
    owner       = models.ForeignKey(User, on_delete=models.CASCADE, related_name="tasks")
    due_date    = models.DateField(null=True, blank=True)
    created_at  = models.DateTimeField(auto_now_add=True)
    updated_at  = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["-priority", "due_date"]

    def __str__(self):
        return self.title` },
      { name: 'tasks/serializers.py', lang: 'python', code: `from rest_framework import serializers
from .models import Task

class TaskSerializer(serializers.ModelSerializer):
    owner_name = serializers.CharField(source="owner.username", read_only=True)

    class Meta:
        model  = Task
        fields = ["id","title","description","priority","status",
                  "owner_name","due_date","created_at","updated_at"]
        read_only_fields = ["id","owner_name","created_at","updated_at"]` },
      { name: 'tasks/views.py', lang: 'python', code: `from rest_framework import viewsets, permissions, filters
from django_filters.rest_framework import DjangoFilterBackend
from .models import Task
from .serializers import TaskSerializer
from .tasks import send_task_notification

class TaskViewSet(viewsets.ModelViewSet):
    serializer_class   = TaskSerializer
    permission_classes = [permissions.IsAuthenticated]
    filter_backends    = [DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter]
    filterset_fields   = ["status", "priority"]
    search_fields      = ["title", "description"]
    ordering_fields    = ["created_at", "due_date", "priority"]

    def get_queryset(self):
        return Task.objects.filter(owner=self.request.user).select_related("owner")

    def perform_create(self, serializer):
        task = serializer.save(owner=self.request.user)
        send_task_notification.delay(task.id, "created")` },
      { name: 'tasks/consumers.py', lang: 'python', code: `import json
from channels.generic.websocket import AsyncWebsocketConsumer

class TaskConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        self.user = self.scope["user"]
        if not self.user.is_authenticated:
            await self.close()
            return
        self.room = f"tasks_{self.user.id}"
        await self.channel_layer.group_add(self.room, self.channel_name)
        await self.accept()

    async def disconnect(self, code):
        await self.channel_layer.group_discard(self.room, self.channel_name)

    async def task_update(self, event):
        await self.send(text_data=json.dumps(event["data"]))` },
      { name: 'celery_app.py', lang: 'python', code: `import os
from celery import Celery

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "taskmanager.settings")
app = Celery("taskmanager")
app.config_from_object("django.conf:settings", namespace="CELERY")
app.autodiscover_tasks()

@app.task(bind=True, max_retries=3)
def send_task_notification(self, task_id: int, action: str):
    from channels.layers import get_channel_layer
    from asgiref.sync import async_to_sync
    from tasks.models import Task
    from tasks.serializers import TaskSerializer

    task = Task.objects.get(id=task_id)
    data = TaskSerializer(task).data
    channel_layer = get_channel_layer()
    async_to_sync(channel_layer.group_send)(
        f"tasks_{task.owner_id}",
        {"type": "task.update", "data": {"action": action, "task": data}},
    )` },
      { name: 'routing.py', lang: 'python', code: `from django.urls import re_path
from tasks.consumers import TaskConsumer

websocket_urlpatterns = [
    re_path(r"ws/tasks/$", TaskConsumer.as_asgi()),
]` },
    ],
  },
  {
    id: 'rest-api-prod',
    title: 'Production REST API',
    icon: 'fa-server',
    color: '#ff1e1e',
    description: 'Production-grade API with rate limiting, caching, logging, and monitoring.',
    tech: ['FastAPI', 'Redis', 'PostgreSQL', 'Docker'],
    explanation: 'Rate limiting prevents abuse. Redis caching reduces DB load. Structured logging enables observability. Docker ensures consistent deployment.',
    structure: `rest-api/
+-- app/
|   +-- api/v1/
|   |   +-- endpoints/
|   |       +-- users.py
|   +-- core/
|   |   +-- cache.py
|   |   +-- limiter.py
|   |   +-- config.py
|   +-- middleware/
|       +-- logging.py
+-- main.py
+-- docker-compose.yml
+-- Dockerfile`,
    files: [
      { name: 'main.py', lang: 'python', code: `from fastapi import FastAPI
from contextlib import asynccontextmanager
from app.core.cache import init_redis
from app.api.v1.endpoints.users import router as users_router
from app.middleware.logging import LoggingMiddleware

@asynccontextmanager
async def lifespan(app: FastAPI):
    await init_redis()
    yield

app = FastAPI(title="Production API", version="1.0.0", lifespan=lifespan)
app.add_middleware(LoggingMiddleware)
app.include_router(users_router, prefix="/api/v1/users", tags=["users"])

@app.get("/health")
async def health():
    return {"status": "healthy", "version": "1.0.0"}` },
      { name: 'app/core/cache.py', lang: 'python', code: `import redis.asyncio as aioredis
import json
from functools import wraps

redis_client = None

async def init_redis():
    global redis_client
    redis_client = await aioredis.from_url("redis://localhost:6379", decode_responses=True)

def cache(expire: int = 300):
    def decorator(func):
        @wraps(func)
        async def wrapper(*args, **kwargs):
            key = f"cache:{func.__name__}:{str(kwargs)}"
            cached = await redis_client.get(key)
            if cached:
                return json.loads(cached)
            result = await func(*args, **kwargs)
            await redis_client.setex(key, expire, json.dumps(result))
            return result
        return wrapper
    return decorator` },
      { name: 'app/core/limiter.py', lang: 'python', code: `from slowapi import Limiter
from slowapi.util import get_remote_address
from slowapi.errors import RateLimitExceeded
from fastapi import Request
from fastapi.responses import JSONResponse

limiter = Limiter(key_func=get_remote_address)

async def rate_limit_handler(request: Request, exc: RateLimitExceeded):
    return JSONResponse(
        status_code=429,
        content={"error": "Rate limit exceeded", "retry_after": str(exc.retry_after)},
    )` },
      { name: 'app/api/v1/endpoints/users.py', lang: 'python', code: `from fastapi import APIRouter, Depends, Request
from sqlalchemy.ext.asyncio import AsyncSession
from app.core.cache import cache
from app.core.limiter import limiter

router = APIRouter()

@router.get("/")
@limiter.limit("100/minute")
@cache(expire=60)
async def list_users(request: Request, page: int = 1, limit: int = 20):
    # fetch from DB with pagination
    return {"users": [], "page": page, "limit": limit}

@router.get("/{user_id}")
@limiter.limit("200/minute")
@cache(expire=120)
async def get_user(request: Request, user_id: int):
    return {"id": user_id}` },
      { name: 'app/middleware/logging.py', lang: 'python', code: `import time, uuid, logging, json
from starlette.middleware.base import BaseHTTPMiddleware

logger = logging.getLogger("api")

class LoggingMiddleware(BaseHTTPMiddleware):
    async def dispatch(self, request, call_next):
        request_id = str(uuid.uuid4())[:8]
        start = time.perf_counter()
        response = await call_next(request)
        duration = round((time.perf_counter() - start) * 1000, 2)
        logger.info(json.dumps({
            "request_id": request_id,
            "method": request.method,
            "path": request.url.path,
            "status": response.status_code,
            "duration_ms": duration,
        }))
        response.headers["X-Request-ID"] = request_id
        return response` },
      { name: 'docker-compose.yml', lang: 'yaml', code: `version: "3.9"
services:
  api:
    build: .
    ports: ["8000:8000"]
    environment:
      - DATABASE_URL=postgresql+asyncpg://user:pass@db/apidb
      - REDIS_URL=redis://redis:6379
    depends_on: [db, redis]
    restart: unless-stopped

  db:
    image: postgres:16-alpine
    environment:
      POSTGRES_USER: user
      POSTGRES_PASSWORD: pass
      POSTGRES_DB: apidb
    volumes: [pgdata:/var/lib/postgresql/data]

  redis:
    image: redis:7-alpine
    command: redis-server --maxmemory 256mb --maxmemory-policy allkeys-lru

volumes:
  pgdata:` },
    ],
  },
];
