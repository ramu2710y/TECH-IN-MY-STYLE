export interface Subtopic {
  label: string
  slug: string
}

export interface TopicCard {
  title: string
  description: string
  subtopics: Subtopic[]
}

export interface TopicSection {
  title: string
  cards: TopicCard[]
}

export const topicSections: TopicSection[] = [
  {
    title: 'Getting Started with Python',
    cards: [
      {
        title: 'Introduction to Python',
        description: 'Begin your Python journey with fundamental concepts and setup instructions.',
        subtopics: [
          { label: 'Python Overview', slug: 'python-overview' },
          { label: 'Python Installation and Setup', slug: 'python-installation' },
          { label: 'Python IDEs', slug: 'ides' },
        ],
      },
      {
        title: 'Syntax and Semantics',
        description: 'Learn the basic structure and rules of Python code.',
        subtopics: [
          { label: 'Indentation and Code Blocks', slug: 'indentation' },
          { label: 'Comments', slug: 'comments' },
          { label: 'Statements and Expressions', slug: 'statements' },
        ],
      },
      {
        title: 'Data Types',
        description: 'Explore the various data types available in Python.',
        subtopics: [
          { label: 'Numbers (int, float, complex)', slug: 'numbers' },
          { label: 'Strings', slug: 'strings' },
          { label: 'Booleans', slug: 'booleans' },
          { label: 'Lists', slug: 'lists' },
          { label: 'Tuples', slug: 'tuples' },
          { label: 'Sets', slug: 'sets' },
          { label: 'Dictionaries', slug: 'dictionaries' },
          { label: 'NoneType', slug: 'nonetype' },
        ],
      },
    ],
  },
  {
    title: 'Python Fundamentals',
    cards: [
      {
        title: 'Variables and Constants',
        description: 'Learn how to declare and work with variables in Python.',
        subtopics: [
          { label: 'Variable Declaration and Assignment', slug: 'variable-declaration' },
          { label: 'Constants in Python', slug: 'constants' },
        ],
      },
      {
        title: 'Operators',
        description: 'Understand the various operators used in Python programming.',
        subtopics: [
          { label: 'Arithmetic Operators', slug: 'arithmetic-operators' },
          { label: 'Comparison Operators', slug: 'comparison-operators' },
          { label: 'Logical Operators', slug: 'logical-operators' },
          { label: 'Membership Operators', slug: 'membership-operators' },
          { label: 'Identity Operators', slug: 'identity-operators' },
        ],
      },
      {
        title: 'Control Flow',
        description: 'Master the tools to control the flow of your Python programs.',
        subtopics: [
          { label: 'Conditional Statements', slug: 'conditional-statements' },
          { label: 'Loops (for, while)', slug: 'loops' },
          { label: 'Break, Continue, Pass', slug: 'break-continue-pass' },
          { label: 'List Comprehensions', slug: 'list-comprehensions' },
        ],
      },
    ],
  },
  {
    title: 'Advanced Concepts',
    cards: [
      {
        title: 'Functions',
        description: 'Learn how to create and use functions in Python.',
        subtopics: [
          { label: 'Function Definition and Calling', slug: 'function-definition' },
          { label: 'Arguments', slug: 'function-arguments' },
          { label: 'Return Statement', slug: 'return-statement' },
          { label: 'Lambda Functions', slug: 'lambda-functions' },
          { label: 'Recursion', slug: 'recursion' },
        ],
      },
      {
        title: 'Error Handling',
        description: 'Learn techniques to handle errors in your Python programs.',
        subtopics: [
          { label: 'Exceptions', slug: 'exceptions' },
          { label: 'Raising Exceptions', slug: 'raising-exceptions' },
          { label: 'Custom Exception Classes', slug: 'custom-exceptions' },
        ],
      },
      {
        title: 'Data Structures',
        description: "Deep dive into Python's built-in data structures.",
        subtopics: [
          { label: 'Lists (Advanced)', slug: 'lists-advanced' },
          { label: 'Tuples (Advanced)', slug: 'tuples-advanced' },
          { label: 'Sets (Advanced)', slug: 'sets-advanced' },
          { label: 'Dictionaries (Advanced)', slug: 'dictionaries-advanced' },
        ],
      },
    ],
  },
  {
    title: 'Intermediate Topics',
    cards: [
      {
        title: 'Object-Oriented Programming',
        description: 'Master object-oriented programming concepts in Python.',
        subtopics: [
          { label: 'Classes and Objects', slug: 'classes-objects' },
          { label: 'Instance and Class Variables', slug: 'variables-oop' },
          { label: 'Methods', slug: 'methods' },
          { label: 'Inheritance', slug: 'inheritance' },
          { label: 'Encapsulation', slug: 'encapsulation' },
          { label: 'Polymorphism', slug: 'polymorphism' },
          { label: 'Abstraction', slug: 'abstraction' },
          { label: 'Magic Methods', slug: 'magic-methods' },
        ],
      },
      {
        title: 'Regular Expressions',
        description: 'Learn how to use regular expressions for pattern matching in Python.',
        subtopics: [
          { label: 'Introduction to regex', slug: 'regex-intro' },
          { label: 'Syntax and Patterns', slug: 'regex-syntax' },
          { label: 're Module', slug: 're-module' },
        ],
      },
      {
        title: 'Advanced Topics',
        description: 'Explore advanced Python concepts for building sophisticated applications.',
        subtopics: [
          { label: 'Iterators and Generators', slug: 'iterators' },
          { label: 'Multithreading and Multiprocessing', slug: 'multithreading' },
        ],
      },
    ],
  },
]
