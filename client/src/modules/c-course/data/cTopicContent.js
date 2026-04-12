// Topic content data — each key matches a slug from topics.js
const content = {
  'introduction': {
    title: 'Introduction to C Programming',
    breadcrumb: ['Introduction', 'Introduction to C'],
    overview: `C is a general-purpose, procedural programming language developed by Dennis Ritchie at Bell Labs in 1972. It is one of the most widely used programming languages of all time and forms the foundation for many modern languages like C++, Java, and Python.`,
    tip: { heading: 'Did You Know?', text: 'The C language was originally developed to write the UNIX operating system. Today it powers everything from embedded systems to operating system kernels.' },
    sections: [
      { heading: 'Why Learn C?', content: `<ul><li><strong>Foundation:</strong> Understanding C gives you deep insight into how computers work at a low level.</li><li><strong>Performance:</strong> C programs are fast and efficient, making it ideal for system programming.</li><li><strong>Portability:</strong> C code can run on virtually any platform with minimal changes.</li><li><strong>Career:</strong> C is widely used in embedded systems, OS development, and competitive programming.</li></ul>` },
    ],
    code: { filename: 'hello.c', code: `#include <stdio.h>\n\nint main() {\n    printf("Hello, World!\\n");\n    return 0;\n}` },
    applications: [
      { icon: 'fa-server', title: 'Operating Systems', desc: 'Linux, Windows kernel, and macOS are written in C.' },
      { icon: 'fa-microchip', title: 'Embedded Systems', desc: 'Microcontrollers and IoT devices use C for low-level control.' },
      { icon: 'fa-database', title: 'Databases', desc: 'MySQL and PostgreSQL are implemented in C.' },
    ],
    questions: [
      { question: 'Who developed the C language?', answer: 'Dennis Ritchie developed C at Bell Labs in 1972.' },
      { question: 'What is C used for?', answer: 'C is used for system programming, embedded systems, OS development, and as a foundation for learning other languages.' },
      { question: 'Is C still relevant today?', answer: 'Yes. C remains one of the most popular languages, especially in systems programming, embedded development, and performance-critical applications.' },
    ],
    pdfLink: null,
  },

  'introduction-history': {
    title: 'History of C Programming',
    breadcrumb: ['Introduction', 'History of C'],
    overview: `C evolved from earlier languages: BCPL → B → C. Dennis Ritchie created C between 1969 and 1973 at Bell Labs. The first book "The C Programming Language" by Kernighan and Ritchie (K&R) was published in 1978.`,
    tip: { heading: 'Timeline', text: '1969: B language by Ken Thompson → 1972: C by Dennis Ritchie → 1978: K&R C → 1989: ANSI C (C89) → 1999: C99 → 2011: C11 → 2018: C17' },
    sections: [
      { heading: 'C Standards', content: `<ul><li><strong>C89/C90:</strong> First standardized version by ANSI/ISO.</li><li><strong>C99:</strong> Added inline functions, variable-length arrays, and new data types.</li><li><strong>C11:</strong> Added multi-threading support and improved Unicode handling.</li><li><strong>C17:</strong> Bug fixes and clarifications to C11.</li></ul>` },
    ],
    code: { filename: 'standards.c', code: `// C99 feature: declare variable anywhere\n#include <stdio.h>\n\nint main() {\n    for (int i = 0; i < 5; i++) {  // C99 allows this\n        printf("%d\\n", i);\n    }\n    return 0;\n}` },
    applications: [
      { icon: 'fa-history', title: 'Legacy Systems', desc: 'Many critical systems written in C from the 1970s-80s still run today.' },
      { icon: 'fa-code-branch', title: 'Language Influence', desc: 'C influenced C++, Java, C#, JavaScript, and many other languages.' },
    ],
    questions: [
      { question: 'What language did C evolve from?', answer: 'C evolved from the B language, which itself evolved from BCPL.' },
      { question: 'What is ANSI C?', answer: 'ANSI C (C89) is the first standardized version of C, published by the American National Standards Institute in 1989.' },
    ],
    pdfLink: null,
  },

  'introduction-features': {
    title: 'Features of C Programming',
    breadcrumb: ['Introduction', 'Features'],
    overview: `C is a powerful language with a rich set of features that make it suitable for both system-level and application-level programming.`,
    tip: { heading: 'Key Insight', text: 'C gives you direct access to memory through pointers, making it both powerful and potentially dangerous if used carelessly.' },
    sections: [
      { heading: 'Core Features', content: `<ul><li><strong>Simple & Efficient:</strong> Clean syntax and minimal runtime overhead.</li><li><strong>Portable:</strong> Write once, compile anywhere.</li><li><strong>Low-level Access:</strong> Direct memory manipulation via pointers.</li><li><strong>Rich Library:</strong> Standard library with I/O, math, string functions.</li><li><strong>Structured:</strong> Supports functions, loops, and conditionals.</li><li><strong>Extensible:</strong> Can be extended with user-defined functions and libraries.</li></ul>` },
    ],
    code: { filename: 'features.c', code: `#include <stdio.h>\n#include <string.h>\n\nint main() {\n    // Pointers - direct memory access\n    int x = 42;\n    int *ptr = &x;\n    printf("Value: %d, Address: %p\\n", *ptr, ptr);\n\n    // String manipulation\n    char name[] = "C Language";\n    printf("Length: %lu\\n", strlen(name));\n\n    return 0;\n}` },
    applications: [
      { icon: 'fa-tachometer-alt', title: 'High Performance', desc: 'C programs run close to hardware speed with minimal overhead.' },
      { icon: 'fa-puzzle-piece', title: 'Modular', desc: 'Code can be split into reusable functions and modules.' },
    ],
    questions: [
      { question: 'Is C a high-level or low-level language?', answer: 'C is considered a middle-level language — it has high-level constructs like functions and loops, but also low-level features like direct memory access.' },
      { question: 'What makes C portable?', answer: 'C code can be compiled on different platforms with minimal changes because the language standard is well-defined and compilers exist for virtually every platform.' },
    ],
    pdfLink: null,
  },

  'introduction-applications': {
    title: 'Applications of C Programming',
    breadcrumb: ['Introduction', 'Applications'],
    overview: `C is used in a wide range of domains due to its performance, portability, and low-level capabilities.`,
    tip: { heading: 'Fun Fact', text: 'The Linux kernel, which powers billions of devices, is written almost entirely in C.' },
    sections: [
      { heading: 'Where is C Used?', content: `<ul><li><strong>Operating Systems:</strong> Linux, Windows NT kernel, macOS core.</li><li><strong>Embedded Systems:</strong> Arduino, microcontrollers, IoT devices.</li><li><strong>Compilers:</strong> GCC, Clang, and many language interpreters are written in C.</li><li><strong>Databases:</strong> MySQL, SQLite, PostgreSQL.</li><li><strong>Game Engines:</strong> Many game engines use C for performance-critical code.</li><li><strong>Networking:</strong> Network protocols and tools like OpenSSL.</li></ul>` },
    ],
    code: { filename: 'system_info.c', code: `#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    // System command execution\n    printf("Running system command:\\n");\n    system("echo Hello from C!");\n    return 0;\n}` },
    applications: [
      { icon: 'fa-linux', title: 'Linux Kernel', desc: 'The entire Linux kernel is written in C.' },
      { icon: 'fa-robot', title: 'Robotics', desc: 'Real-time control systems in robotics use C.' },
      { icon: 'fa-network-wired', title: 'Networking', desc: 'TCP/IP stack implementations are written in C.' },
    ],
    questions: [
      { question: 'Why is C used for operating systems?', answer: 'C provides direct hardware access, efficient memory management, and produces fast machine code — all essential for OS development.' },
      { question: 'Can C be used for web development?', answer: 'While not common, C can be used for web server backends (like parts of Apache) and CGI scripts.' },
    ],
    pdfLink: null,
  },

  'introduction-setup': {
    title: 'Setting Up C Development Environment',
    breadcrumb: ['Introduction', 'Setup Environment'],
    overview: `To start programming in C, you need a compiler and optionally an IDE. The most popular compiler is GCC (GNU Compiler Collection).`,
    tip: { heading: 'Quick Start', text: 'On Windows, install MinGW or use WSL. On Linux/Mac, GCC is usually pre-installed or available via package manager.' },
    sections: [
      { heading: 'Installation Steps', content: `<ul><li><strong>Windows:</strong> Install MinGW-w64 or use VS Code with the C/C++ extension.</li><li><strong>Linux:</strong> Run <code>sudo apt install gcc</code> (Ubuntu/Debian).</li><li><strong>macOS:</strong> Run <code>xcode-select --install</code> to get Clang.</li><li><strong>Online:</strong> Use <a href="https://onlinegdb.com" target="_blank">OnlineGDB</a> or <a href="https://replit.com" target="_blank">Replit</a> for instant access.</li></ul>` },
    ],
    code: { filename: 'compile.sh', code: `# Compile a C file\ngcc hello.c -o hello\n\n# Run the compiled program\n./hello\n\n# Compile with warnings enabled\ngcc -Wall -Wextra hello.c -o hello` },
    applications: [
      { icon: 'fa-terminal', title: 'GCC', desc: 'The most widely used C compiler, available on all platforms.' },
      { icon: 'fa-code', title: 'VS Code', desc: 'Lightweight editor with excellent C/C++ extension support.' },
      { icon: 'fa-desktop', title: 'Code::Blocks', desc: 'Full-featured IDE specifically designed for C/C++ development.' },
    ],
    questions: [
      { question: 'What is GCC?', answer: 'GCC (GNU Compiler Collection) is a free, open-source compiler that supports C, C++, and many other languages.' },
      { question: 'How do I compile a C program?', answer: 'Use the command: <code>gcc filename.c -o outputname</code> then run <code>./outputname</code> on Linux/Mac or <code>outputname.exe</code> on Windows.' },
    ],
    pdfLink: null,
  },

  'basics': {
    title: 'Basics of C Programming',
    breadcrumb: ['Basics', 'Basics of C'],
    overview: `Before diving into advanced topics, it's essential to understand the foundational elements of the C programming language. This includes understanding the structure of a program, tokens, keywords, identifiers, data types, variables, constants, and basic input/output.`,
    tip: { heading: 'Tip', text: 'Mastering the basics helps you build a strong foundation and understand how memory, logic, and compilation work in C.' },
    sections: [
      { heading: 'Basic Building Blocks', content: `<ul><li><strong>Tokens:</strong> The smallest individual units in a C program (keywords, identifiers, constants, strings, operators, etc.).</li><li><strong>Keywords:</strong> Reserved words like <code>int</code>, <code>return</code>, <code>while</code>.</li><li><strong>Identifiers:</strong> Names used to identify variables, functions, arrays (e.g., <code>count</code>, <code>main</code>).</li><li><strong>Constants:</strong> Fixed values that do not change during execution (e.g., <code>5</code>, <code>'A'</code>, <code>3.14</code>).</li><li><strong>Variables:</strong> Named memory locations to store data.</li><li><strong>Data Types:</strong> Define the type of data a variable can store (e.g., <code>int</code>, <code>float</code>, <code>char</code>).</li></ul>` },
    ],
    code: { filename: 'basics.c', code: `#include <stdio.h>\n\nint main() {\n    int age = 20;\n    float height = 5.9;\n    char grade = 'A';\n\n    printf("Age: %d\\n", age);\n    printf("Height: %.1f\\n", height);\n    printf("Grade: %c\\n", grade);\n\n    return 0;\n}` },
    applications: [
      { icon: 'fa-terminal', title: 'CLI Tools', desc: 'Creating command-line utilities and automation scripts.' },
      { icon: 'fa-calculator', title: 'Basic Calculators', desc: 'Developing arithmetic and logic-based tools using variables and operators.' },
      { icon: 'fa-graduation-cap', title: 'Learning Platform', desc: 'Used by educators to teach basic programming concepts.' },
    ],
    questions: [
      { question: 'What is a token in C?', answer: 'A token is the smallest unit in a C program, such as keywords, identifiers, operators, constants, etc.' },
      { question: 'What are keywords in C?', answer: 'Keywords are reserved words predefined by the C language (e.g., <code>int</code>, <code>return</code>, <code>while</code>).' },
      { question: 'Difference between constant and variable?', answer: 'A variable can change its value during execution, whereas a constant\'s value remains fixed.' },
    ],
    pdfLink: 'https://drive.google.com/file/d/12TFwwkxC6epXlRMDzSH3bdKcoZ4HIqvm/view?usp=drive_link',
  },

  'basics-tokens': {
    title: 'C Tokens',
    breadcrumb: ['Basics', 'C Tokens'],
    overview: `Tokens are the smallest individual units of a C program. The compiler breaks the source code into tokens during the lexical analysis phase.`,
    tip: { heading: 'Remember', text: 'Every C program is made up of tokens. Understanding tokens helps you understand how the compiler reads your code.' },
    sections: [
      { heading: 'Types of Tokens', content: `<ul><li><strong>Keywords:</strong> Reserved words — <code>int</code>, <code>if</code>, <code>while</code>, <code>return</code> (32 keywords in C89).</li><li><strong>Identifiers:</strong> User-defined names for variables, functions — <code>count</code>, <code>main</code>, <code>sum</code>.</li><li><strong>Constants:</strong> Fixed literal values — <code>42</code>, <code>3.14</code>, <code>'A'</code>, <code>"hello"</code>.</li><li><strong>Operators:</strong> Symbols for operations — <code>+</code>, <code>-</code>, <code>*</code>, <code>/</code>, <code>==</code>.</li><li><strong>Punctuators:</strong> Special characters — <code>;</code>, <code>{}</code>, <code>()</code>, <code>,</code>.</li><li><strong>String Literals:</strong> Text in double quotes — <code>"Hello World"</code>.</li></ul>` },
    ],
    code: { filename: 'tokens.c', code: `#include <stdio.h>   // preprocessor directive\n\nint main() {          // int=keyword, main=identifier, (){}=punctuators\n    int x = 10;       // int=keyword, x=identifier, ==operator, 10=constant\n    int y = 20;\n    int sum = x + y;  // +=operator\n    printf("%d\\n", sum);\n    return 0;\n}` },
    applications: [
      { icon: 'fa-search', title: 'Lexical Analysis', desc: 'Compilers use tokenization as the first step in parsing source code.' },
      { icon: 'fa-code', title: 'Syntax Highlighting', desc: 'Code editors use token types to apply syntax highlighting.' },
    ],
    questions: [
      { question: 'How many keywords are in C?', answer: 'C89 has 32 keywords. C99 added 5 more (like <code>inline</code>, <code>restrict</code>), and C11 added a few more.' },
      { question: 'Can identifiers start with a number?', answer: 'No. Identifiers must start with a letter (a-z, A-Z) or underscore (_). They cannot start with a digit.' },
    ],
    pdfLink: null,
  },

  'basics-datatypes': {
    title: 'Data Types in C',
    breadcrumb: ['Basics', 'Data Types'],
    overview: `Data types in C define the type and size of data that a variable can hold. C has several built-in data types and allows creation of user-defined types.`,
    tip: { heading: 'Size Note', text: 'The exact size of data types can vary by platform. Use <code>sizeof()</code> to check the actual size on your system.' },
    sections: [
      { heading: 'Primary Data Types', content: `<ul><li><strong>int:</strong> Integer — typically 4 bytes. Range: -2,147,483,648 to 2,147,483,647.</li><li><strong>float:</strong> Single-precision decimal — 4 bytes. ~6-7 decimal digits precision.</li><li><strong>double:</strong> Double-precision decimal — 8 bytes. ~15-16 decimal digits precision.</li><li><strong>char:</strong> Single character — 1 byte. Stores ASCII values.</li><li><strong>void:</strong> Represents no value. Used for functions that return nothing.</li></ul>` },
      { heading: 'Type Modifiers', content: `<ul><li><code>short int</code> — 2 bytes</li><li><code>long int</code> — 4 or 8 bytes</li><li><code>long long int</code> — 8 bytes</li><li><code>unsigned int</code> — only positive values, doubles the positive range</li></ul>` },
    ],
    code: { filename: 'datatypes.c', code: `#include <stdio.h>\n\nint main() {\n    int i = 100;\n    float f = 3.14f;\n    double d = 3.14159265358979;\n    char c = 'A';\n\n    printf("int: %d (%lu bytes)\\n", i, sizeof(i));\n    printf("float: %.2f (%lu bytes)\\n", f, sizeof(f));\n    printf("double: %.10f (%lu bytes)\\n", d, sizeof(d));\n    printf("char: %c (%lu bytes)\\n", c, sizeof(c));\n\n    return 0;\n}` },
    applications: [
      { icon: 'fa-memory', title: 'Memory Optimization', desc: 'Choosing the right data type saves memory in embedded systems.' },
      { icon: 'fa-calculator', title: 'Precision Control', desc: 'float vs double choice affects calculation precision.' },
    ],
    questions: [
      { question: 'What is the difference between float and double?', answer: 'float is 4 bytes with ~7 digits of precision. double is 8 bytes with ~15 digits of precision. Use double for more accurate calculations.' },
      { question: 'What does void mean in C?', answer: 'void means "no type". It is used for functions that do not return a value, or for generic pointers (<code>void *</code>).' },
    ],
    pdfLink: null,
  },

  'basics-variables': {
    title: 'Variables in C',
    breadcrumb: ['Basics', 'Variables'],
    overview: `A variable is a named memory location that stores a value. In C, every variable must be declared with a data type before use.`,
    tip: { heading: 'Best Practice', text: 'Always initialize variables before using them. Uninitialized variables contain garbage values that can cause unpredictable behavior.' },
    sections: [
      { heading: 'Variable Declaration & Initialization', content: `<ul><li><strong>Declaration:</strong> <code>int age;</code> — reserves memory but doesn't set a value.</li><li><strong>Initialization:</strong> <code>int age = 25;</code> — declares and sets a value.</li><li><strong>Assignment:</strong> <code>age = 30;</code> — changes the value after declaration.</li></ul>` },
      { heading: 'Naming Rules', content: `<ul><li>Must start with a letter or underscore.</li><li>Can contain letters, digits, and underscores.</li><li>Case-sensitive: <code>age</code> and <code>Age</code> are different.</li><li>Cannot use C keywords as variable names.</li></ul>` },
    ],
    code: { filename: 'variables.c', code: `#include <stdio.h>\n\nint main() {\n    // Declaration\n    int age;\n    float salary;\n\n    // Initialization\n    age = 25;\n    salary = 50000.50f;\n\n    // Declare and initialize\n    char grade = 'A';\n    int score = 95;\n\n    printf("Age: %d\\n", age);\n    printf("Salary: %.2f\\n", salary);\n    printf("Grade: %c, Score: %d\\n", grade, score);\n\n    return 0;\n}` },
    applications: [
      { icon: 'fa-database', title: 'Data Storage', desc: 'Variables store user input, calculation results, and program state.' },
      { icon: 'fa-exchange-alt', title: 'Data Manipulation', desc: 'Variables allow data to be read, modified, and written throughout program execution.' },
    ],
    questions: [
      { question: 'What is the scope of a variable?', answer: 'Scope defines where a variable is accessible. Local variables are accessible only within their block. Global variables are accessible throughout the program.' },
      { question: 'What is a global variable?', answer: 'A global variable is declared outside all functions and is accessible from any function in the program.' },
    ],
    pdfLink: null,
  },

  'basics-constants': {
    title: 'Constants in C',
    breadcrumb: ['Basics', 'Constants'],
    overview: `Constants are fixed values that cannot be changed during program execution. C provides two ways to define constants: using <code>#define</code> and using the <code>const</code> keyword.`,
    tip: { heading: 'Convention', text: 'By convention, constant names are written in ALL_CAPS to distinguish them from variables.' },
    sections: [
      { heading: 'Types of Constants', content: `<ul><li><strong>#define:</strong> Preprocessor macro — replaced before compilation. No type checking.</li><li><strong>const:</strong> Type-safe constant variable — checked by the compiler.</li><li><strong>Literal Constants:</strong> Direct values like <code>42</code>, <code>3.14</code>, <code>'A'</code>, <code>"hello"</code>.</li><li><strong>Enum Constants:</strong> Named integer constants using <code>enum</code>.</li></ul>` },
    ],
    code: { filename: 'constants.c', code: `#include <stdio.h>\n\n#define PI 3.14159\n#define MAX_SIZE 100\n\nint main() {\n    const int DAYS_IN_WEEK = 7;\n    const float GRAVITY = 9.81f;\n\n    float radius = 5.0f;\n    float area = PI * radius * radius;\n\n    printf("Area: %.2f\\n", area);\n    printf("Days in week: %d\\n", DAYS_IN_WEEK);\n    printf("Gravity: %.2f m/s^2\\n", GRAVITY);\n\n    return 0;\n}` },
    applications: [
      { icon: 'fa-lock', title: 'Configuration', desc: 'Constants define fixed configuration values like buffer sizes and limits.' },
      { icon: 'fa-shield-alt', title: 'Safety', desc: 'Using const prevents accidental modification of important values.' },
    ],
    questions: [
      { question: 'What is the difference between #define and const?', answer: '<code>#define</code> is a preprocessor directive with no type checking. <code>const</code> is a typed constant that is checked by the compiler and respects scope rules.' },
      { question: 'Can you change a const variable?', answer: 'No. Attempting to modify a <code>const</code> variable results in a compile-time error.' },
    ],
    pdfLink: null,
  },

  'basics-printf-scanf': {
    title: 'Input/Output Operations in C',
    breadcrumb: ['Basics', 'Input/Output'],
    overview: `C uses <code>printf()</code> for output and <code>scanf()</code> for input. Both are part of the standard I/O library <code>stdio.h</code>.`,
    tip: { heading: 'Format Specifiers', text: 'Always match the format specifier to the variable type: %d for int, %f for float, %c for char, %s for string.' },
    sections: [
      { heading: 'Format Specifiers', content: `<ul><li><code>%d</code> — int</li><li><code>%f</code> — float</li><li><code>%lf</code> — double</li><li><code>%c</code> — char</li><li><code>%s</code> — string</li><li><code>%p</code> — pointer address</li><li><code>%x</code> — hexadecimal</li><li><code>%o</code> — octal</li></ul>` },
    ],
    code: { filename: 'io.c', code: `#include <stdio.h>\n\nint main() {\n    int age;\n    char name[50];\n    float gpa;\n\n    printf("Enter your name: ");\n    scanf("%s", name);\n\n    printf("Enter your age: ");\n    scanf("%d", &age);\n\n    printf("Enter your GPA: ");\n    scanf("%f", &gpa);\n\n    printf("\\nName: %s\\n", name);\n    printf("Age: %d\\n", age);\n    printf("GPA: %.2f\\n", gpa);\n\n    return 0;\n}` },
    applications: [
      { icon: 'fa-keyboard', title: 'User Input', desc: 'scanf reads data entered by the user from the keyboard.' },
      { icon: 'fa-print', title: 'Output Display', desc: 'printf displays formatted output to the console.' },
    ],
    questions: [
      { question: 'Why do we use & with scanf?', answer: 'The <code>&</code> operator gives scanf the memory address of the variable so it can store the input value there. Exception: strings (char arrays) don\'t need <code>&</code> because the array name is already a pointer.' },
      { question: 'What is the difference between printf and puts?', answer: '<code>printf</code> supports format specifiers and can print any type. <code>puts</code> only prints strings and automatically adds a newline.' },
    ],
    pdfLink: null,
  },

  'pointers': {
    title: 'Introduction to Pointers in C',
    breadcrumb: ['Pointers', 'Pointers Intro'],
    overview: `A pointer in C is a variable that stores the memory address of another variable. Pointers provide powerful capabilities such as dynamic memory allocation, efficient array handling, and direct memory access.`,
    tip: { heading: 'Key Insight', text: 'In C, the symbol <code>*</code> is used to declare a pointer, and the symbol <code>&</code> is used to get the address of a variable.' },
    sections: [
      { heading: 'Pointer Basics', content: `<ul><li><code>int *ptr;</code> — declares a pointer to an integer.</li><li><code>ptr = &x;</code> — stores the address of variable x into ptr.</li><li><code>*ptr</code> — dereferences the pointer (accesses the value at the address).</li></ul>` },
    ],
    code: { filename: 'pointer_example.c', code: `#include <stdio.h>\n\nint main() {\n    int a = 10;\n    int *ptr;\n\n    ptr = &a;  // ptr holds the address of variable a\n\n    printf("Value of a = %d\\n", a);\n    printf("Address of a = %p\\n", &a);\n    printf("Value stored in ptr = %p\\n", ptr);\n    printf("Value pointed by ptr = %d\\n", *ptr);\n\n    return 0;\n}` },
    applications: [
      { icon: 'fa-memory', title: 'Dynamic Memory Management', desc: 'Used in functions like malloc, calloc, and free to manage heap memory.' },
      { icon: 'fa-database', title: 'Efficient Data Structures', desc: 'Enables implementation of linked lists, trees, graphs, etc.' },
      { icon: 'fa-code-branch', title: 'Function Arguments', desc: 'Pointers allow functions to modify arguments directly.' },
    ],
    questions: [
      { question: 'What is a pointer?', answer: 'A pointer is a variable that stores the memory address of another variable.' },
      { question: 'How do you declare a pointer in C?', answer: 'By using the asterisk (*) symbol before the pointer name. For example: <code>int *ptr;</code>' },
      { question: 'What is the difference between & and * in pointers?', answer: '<code>&</code> is the address-of operator, while <code>*</code> is the dereference operator that accesses the value at the pointer\'s address.' },
    ],
    pdfLink: 'https://drive.google.com/file/d/11bs3D62uRNpF6TGUeRVgA7AIKtskP5Tz/view?usp=drive_link',
  },
};

// Generate placeholder content for all remaining slugs
const allSlugs = [
  'introduction','introduction-history','introduction-features','introduction-applications','introduction-setup',
  'basics','basics-tokens','basics-datatypes','basics-variables','basics-constants','basics-printf-scanf',
  'operators','operators-assignment','operators-precedence','operators-typecasting',
  'control-flow','control-loops','control-switch','control-goto',
  'functions','functions-types','functions-call','functions-recursion','functions-storage',
  'arrays','array-2d','array-operations',
  'strings','string-functions','string-vs-char',
  'pointers','pointer-void','pointer-array','pointer-function','pointer-operations',
  'structures','structure-nested','structure-typedef','structure-difference',
  'file-handling','file-modes','file-pointer','file-text-vs-binary',
  'preprocessing','preprocessing-define','preprocessing-macros','preprocessing-conditional',
  'command-line','command-line-parsing',
  'memory-management','memory-management-calloc','memory-management-realloc','memory-management-free',
  'error-handling','error-handling-perror','error-handling-exceptions',
  'advanced-keywords','advanced-keywords-bitfields','advanced-keywords-volatile','advanced-keywords-restrict',
];

const titleMap = {
  'operators': 'Operators & Expressions',
  'operators-assignment': 'Assignment Operators',
  'operators-precedence': 'Operator Precedence',
  'operators-typecasting': 'Type Casting',
  'control-flow': 'Control Flow in C',
  'control-loops': 'Loops in C',
  'control-switch': 'Switch Statement',
  'control-goto': 'Goto Statement',
  'functions': 'Functions in C',
  'functions-types': 'Types of Functions',
  'functions-call': 'Function Calls',
  'functions-recursion': 'Recursion in C',
  'functions-storage': 'Storage Classes',
  'arrays': 'Arrays in C',
  'array-2d': '2D Arrays',
  'array-operations': 'Array Operations',
  'strings': 'Strings in C',
  'string-functions': 'String Functions',
  'string-vs-char': 'String vs Char Array',
  'pointer-void': 'Void Pointer',
  'pointer-array': 'Pointer and Array',
  'pointer-function': 'Pointer and Function',
  'pointer-operations': 'Pointer Operations',
  'structures': 'Structures in C',
  'structure-nested': 'Nested Structures',
  'structure-typedef': 'Typedef in C',
  'structure-difference': 'Struct vs Union',
  'file-handling': 'File Handling in C',
  'file-modes': 'File Modes',
  'file-pointer': 'File Pointer',
  'file-text-vs-binary': 'Text vs Binary Files',
  'preprocessing': 'Preprocessing in C',
  'preprocessing-define': '#define Directive',
  'preprocessing-macros': 'Macros in C',
  'preprocessing-conditional': 'Conditional Compilation',
  'command-line': 'Command Line Arguments',
  'command-line-parsing': 'Parsing Arguments',
  'memory-management': 'Dynamic Memory Allocation',
  'memory-management-calloc': 'calloc() Function',
  'memory-management-realloc': 'realloc() Function',
  'memory-management-free': 'free() Function',
  'error-handling': 'Error Handling in C',
  'error-handling-perror': 'perror and errno',
  'error-handling-exceptions': 'Exception Mechanisms',
  'advanced-keywords': 'Advanced Keywords in C',
  'advanced-keywords-bitfields': 'Bitfields in C',
  'advanced-keywords-volatile': 'volatile Keyword',
  'advanced-keywords-restrict': 'restrict Keyword',
};

const moduleMap = {
  'operators': 'Operators', 'operators-assignment': 'Operators', 'operators-precedence': 'Operators', 'operators-typecasting': 'Operators',
  'control-flow': 'Control Flow', 'control-loops': 'Control Flow', 'control-switch': 'Control Flow', 'control-goto': 'Control Flow',
  'functions': 'Functions', 'functions-types': 'Functions', 'functions-call': 'Functions', 'functions-recursion': 'Functions', 'functions-storage': 'Functions',
  'arrays': 'Arrays', 'array-2d': 'Arrays', 'array-operations': 'Arrays',
  'strings': 'Strings', 'string-functions': 'Strings', 'string-vs-char': 'Strings',
  'pointer-void': 'Pointers', 'pointer-array': 'Pointers', 'pointer-function': 'Pointers', 'pointer-operations': 'Pointers',
  'structures': 'Structures', 'structure-nested': 'Structures', 'structure-typedef': 'Structures', 'structure-difference': 'Structures',
  'file-handling': 'File Handling', 'file-modes': 'File Handling', 'file-pointer': 'File Handling', 'file-text-vs-binary': 'File Handling',
  'preprocessing': 'Preprocessing', 'preprocessing-define': 'Preprocessing', 'preprocessing-macros': 'Preprocessing', 'preprocessing-conditional': 'Preprocessing',
  'command-line': 'Command Line', 'command-line-parsing': 'Command Line',
  'memory-management': 'Memory Management', 'memory-management-calloc': 'Memory Management', 'memory-management-realloc': 'Memory Management', 'memory-management-free': 'Memory Management',
  'error-handling': 'Error Handling', 'error-handling-perror': 'Error Handling', 'error-handling-exceptions': 'Error Handling',
  'advanced-keywords': 'Advanced Keywords', 'advanced-keywords-bitfields': 'Advanced Keywords', 'advanced-keywords-volatile': 'Advanced Keywords', 'advanced-keywords-restrict': 'Advanced Keywords',
};

allSlugs.forEach(slug => {
  if (!content[slug]) {
    const title = titleMap[slug] || slug;
    const mod = moduleMap[slug] || 'C Programming';
    content[slug] = {
      title,
      breadcrumb: [mod, title],
      overview: `This section covers ${title} in C programming. Understanding this topic is essential for writing efficient and correct C programs.`,
      tip: { heading: 'Study Tip', text: `Practice writing code examples for ${title} to reinforce your understanding.` },
      sections: [
        { heading: 'Key Concepts', content: `<p>This topic covers the essential concepts of <strong>${title}</strong> in C. Study the code example below and experiment with it to deepen your understanding.</p>` },
      ],
      code: { filename: `${slug.replace(/-/g, '_')}.c`, code: `#include <stdio.h>\n\nint main() {\n    // ${title} example\n    printf("Studying: ${title}\\n");\n    return 0;\n}` },
      applications: [
        { icon: 'fa-code', title: 'Practical Use', desc: `${title} is used in real-world C programs for various purposes.` },
        { icon: 'fa-graduation-cap', title: 'Learning', desc: 'Understanding this concept builds your C programming foundation.' },
      ],
      questions: [
        { question: `What is ${title}?`, answer: `${title} is an important concept in C programming. Refer to the content above for a detailed explanation.` },
        { question: `When do you use ${title}?`, answer: `${title} is used when you need to work with this specific aspect of C programming.` },
      ],
      pdfLink: null,
    };
  }
});

export default content;
