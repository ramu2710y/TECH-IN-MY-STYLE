export const topicsData = [
  {
    id: 'introduction',
    number: 1,
    title: 'Introduction to Java',
    icon: 'BookOpen',
    color: 'from-java-blue to-java-lightblue',
    description: 'Start your Java journey with the fundamentals',
    subtopics: [
      { title: 'What is Java?', desc: 'Learn about the Java programming language and its fundamental concepts.', slug: 'what-is-java' },
      { title: 'History and Evolution of Java', desc: 'Explore the origins and development of Java through the years.', slug: 'history-of-java' },
      { title: 'Features of Java', desc: 'Discover the key characteristics that make Java popular and powerful.', slug: 'features-of-java' },
      { title: 'Java Editions (SE, EE, ME)', desc: 'Understand the different editions of Java and their purposes.', slug: 'java-editions' },
      { title: 'JVM, JRE, and JDK', desc: 'Learn about the Java Virtual Machine, Runtime Environment, and Development Kit.', slug: 'jvm-jre-jdk' },
      { title: 'How Java Works', desc: 'Understand the compilation and interpretation process in Java.', slug: 'how-java-works' },
      { title: 'Setting Up Java Environment', desc: 'Step-by-step guide to set up your Java development environment.', slug: 'setting-up-java' },
      { title: 'First Java Program', desc: 'Create your first Hello World program in Java.', slug: 'first-java-program' },
      { title: 'Java Development Tools', desc: 'Overview of popular IDEs: IntelliJ, Eclipse, NetBeans.', slug: 'java-development-tools' },
    ]
  },
  {
    id: 'java-basics',
    number: 2,
    title: 'Java Basics',
    icon: 'Code',
    color: 'from-java-orange to-yellow-500',
    description: 'Master the fundamentals of Java programming',
    subtopics: [
      { title: 'Java Syntax & Structure', desc: 'Learn the basic syntax and structure of Java programs.', slug: 'java-syntax' },
      { title: 'Data Types and Variables', desc: 'Explore different data types and how to use variables in Java.', slug: 'data-types' },
      { title: 'Operators', desc: 'Learn about arithmetic, logical, and bitwise operators in Java.', slug: 'operators' },
      { title: 'Type Casting', desc: 'Understand how to convert between different data types in Java.', slug: 'type-casting' },
      { title: 'Control Flow', desc: 'Master if, if-else, and switch statements for flow control.', slug: 'control-flow' },
      { title: 'Loops', desc: 'Learn how to use for, while, and do-while loops in Java.', slug: 'loops' },
      { title: 'Input and Output', desc: 'Understand how to handle input and output using Scanner and BufferedReader.', slug: 'input-output' },
      { title: 'Arrays and Multidimensional Arrays', desc: 'Learn how to work with single and multidimensional arrays in Java.', slug: 'arrays' },
      { title: 'Command Line Arguments', desc: 'Understand how to pass and use command line arguments in Java.', slug: 'command-line-arguments' },
    ]
  },
  {
    id: 'oop',
    number: 3,
    title: 'Object-Oriented Programming (OOP)',
    icon: 'Cube',
    color: 'from-purple-600 to-java-blue',
    description: 'Learn the pillars of OOP with Java',
    subtopics: [
      { title: 'Classes and Objects', desc: 'Learn the fundamental concepts of classes and objects in Java.', slug: 'classes-objects' },
      { title: 'Constructors', desc: 'Understand default and parameterized constructors in Java.', slug: 'constructors' },
      { title: 'this and super Keywords', desc: 'Learn how to use this and super keywords in Java classes.', slug: 'this-super' },
      { title: 'Inheritance', desc: 'Explore single, multilevel, and hierarchical inheritance in Java.', slug: 'inheritance' },
      { title: 'Polymorphism', desc: 'Understand method overloading and overriding in Java.', slug: 'polymorphism' },
      { title: 'Encapsulation', desc: 'Learn how to implement data hiding and encapsulation in Java.', slug: 'encapsulation' },
      { title: 'Abstraction', desc: 'Master abstract classes and interfaces in Java.', slug: 'abstraction' },
      { title: 'Static and Final Keywords', desc: 'Understand the usage of static and final keywords in Java.', slug: 'static-final' },
      { title: 'Access Modifiers', desc: 'Learn about public, private, protected, and default access modifiers.', slug: 'access-modifiers' },
      { title: 'Object Class Methods', desc: 'Explore equals, toString, and other methods from the Object class.', slug: 'object-class-methods' },
    ]
  },
  {
    id: 'multi-threading',
    number: 4,
    title: 'Multi-Threading and Concurrency',
    icon: 'Shuffle',
    color: 'from-green-500 to-java-blue',
    description: 'Build concurrent and parallel Java applications',
    subtopics: [
      { title: 'Introduction to Threads', desc: 'Learn the basics of threading in Java applications.', slug: 'intro-to-threads' },
      { title: 'Runnable Interface', desc: 'Interface to define a thread task in Java.', slug: 'runnable' },
      { title: 'Synchronization', desc: 'Controlling access to shared resources to prevent conflicts.', slug: 'synchronization' },
      { title: 'Concurrency', desc: 'Ability of the system to run multiple tasks in overlapping periods.', slug: 'concurrency' },
    ]
  },
  {
    id: 'packages',
    number: 5,
    title: 'Packages in Java',
    icon: 'Archive',
    color: 'from-java-lightblue to-cyan-500',
    description: 'Organize your Java code with packages',
    subtopics: [
      { title: 'Built-in Packages', desc: 'Explore the standard packages provided by Java.', slug: 'built-in-packages' },
      { title: 'User-defined Packages', desc: 'Create and manage your own custom packages in Java.', slug: 'user-defined' },
    ]
  },
  {
    id: 'exception-handling',
    number: 6,
    title: 'Exception Handling in Java',
    icon: 'ExclamationTriangle',
    color: 'from-red-500 to-java-orange',
    description: 'Handle errors gracefully in Java programs',
    subtopics: [
      { title: 'Types of Exceptions', desc: 'Learn about checked and unchecked exceptions in Java.', slug: 'types-of-exceptions' },
      { title: 'Custom Exception Classes', desc: 'Create your own custom exception classes in Java.', slug: 'custom-exception' },
      { title: 'Try-Catch-Finally Flow', desc: 'Master exception handling with try, catch, and finally blocks.', slug: 'try-catch' },
    ]
  },
  {
    id: 'strings-enum',
    number: 7,
    title: 'Strings, Enum, Annotations & File Handling',
    icon: 'DocumentText',
    color: 'from-java-orange to-amber-400',
    description: 'Work with strings, enums, annotations and files',
    subtopics: [
      { title: 'Strings', desc: 'Learn about String, StringBuffer, and StringBuilder in Java.', slug: 'strings' },
      { title: 'Enum', desc: 'Learn about Enumerations in Java.', slug: 'enum' },
      { title: 'Annotations', desc: 'Learn about Annotations in Java.', slug: 'annotations' },
      { title: 'File Handling', desc: 'Learn about File Handling in Java.', slug: 'file-handling' },
      { title: 'Wrapper Classes', desc: 'Learn about Wrapper Classes in Java.', slug: 'wrapper-classes' },
    ]
  },
  {
    id: 'collections',
    number: 8,
    title: 'Java Collection Framework',
    icon: 'Squares2X2',
    color: 'from-java-blue to-indigo-600',
    description: 'Master Java collections and data structures',
    subtopics: [
      { title: 'Overview and Hierarchy', desc: 'Understand the Java Collection Framework architecture.', slug: 'collection-overview' },
      { title: 'ArrayList and LinkedList', desc: 'Learn about List implementations in Java.', slug: 'arraylist-linkedlist' },
      { title: 'HashMap and HashSet', desc: 'Explore Map and Set data structures in Java.', slug: 'hashmap-hashset' },
      { title: 'Iterator and ListIterator', desc: 'Learn to iterate over collections in Java.', slug: 'iterator' },
    ]
  },
];

export const stats = [
  { label: 'Topics Covered', value: '8+', icon: 'BookOpen' },
  { label: 'Subtopics', value: '60+', icon: 'DocumentText' },
  { label: 'Code Examples', value: '200+', icon: 'Code' },
  { label: 'Students Learning', value: '10K+', icon: 'Users' },
];

export const features = [
  {
    icon: 'ComputerDesktop',
    title: 'Comprehensive Curriculum',
    desc: 'From basics to advanced topics, we cover everything you need to become a Java expert.',
    color: 'text-java-blue',
    bg: 'bg-blue-50 dark:bg-blue-900/20',
  },
  {
    icon: 'CodeBracket',
    title: 'Interactive Compiler',
    desc: 'Write and run Java code directly in your browser with our built-in Java IDE.',
    color: 'text-java-orange',
    bg: 'bg-orange-50 dark:bg-orange-900/20',
  },
  {
    icon: 'VideoCameraIcon',
    title: 'Video Resources',
    desc: 'Visual learning with curated video content for each topic and subtopic.',
    color: 'text-purple-600',
    bg: 'bg-purple-50 dark:bg-purple-900/20',
  },
  {
    icon: 'ClipboardDocumentCheck',
    title: 'Interview Preparation',
    desc: 'MCQs and interview questions to help you ace your technical interviews.',
    color: 'text-green-600',
    bg: 'bg-green-50 dark:bg-green-900/20',
  },
  {
    icon: 'CommandLine',
    title: 'Docker Support',
    desc: 'Learn to containerize your Java applications with Docker guides.',
    color: 'text-java-lightblue',
    bg: 'bg-cyan-50 dark:bg-cyan-900/20',
  },
  {
    icon: 'UsersIcon',
    title: 'Community Connect',
    desc: 'Join our community on Telegram, Instagram, WhatsApp, and YouTube.',
    color: 'text-red-500',
    bg: 'bg-red-50 dark:bg-red-900/20',
  },
];
