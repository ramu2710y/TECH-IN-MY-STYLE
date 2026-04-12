import type { SubtopicData } from '../subtopicsData'

const data: SubtopicData = {
  slug: 'booleans',
  title: 'Python Boolean',
  breadcrumb: 'Data Types',
  readingTime: '10 min',
  description: `A Boolean in Python is a data type that represents one of two values:\nTrue\nFalse\nBooleans are used in logical operations, comparisons, and control flow like if, while, etc. Internally, True is represented as 1 and False as 0. Booleans often result from comparison or logical expressions.`,
  prerequisites: [
    'Familiarity with Python data types and variables.',
    'Basic understanding of conditional statements (like if, else).',
  ],
  examples: `# Boolean values
is_true = True
is_false = False
# Comparison operators return Boolean values
print(10 > 5)        # True
print(3 == 7)        # False
# Boolean in conditions
age = 18
if age >= 18:
    print("Eligible to vote")  # This will be printed
# Boolean operations
a = True
b = False
print(a and b)       # False (both must be True)
print(a or b)        # True (at least one is True)
print(not a)         # False (negation)
# Boolean as result of type casting
print(bool(0))       # False
print(bool(5))       # True
print(bool(""))      # False (empty string is False)
print(bool("hello")) # True`,
  realWorld: [
    'Checking user permissions and authentication.',
    'Decision-making in control flows (if, while, for loops).',
    'Validating form inputs or data entries.',
    'Toggling states (e.g., turning features on/off).',
    'Evaluating conditions in simulations or rule-based systems.',
  ],
  applications: [
    'Web development: Login success/failure flags, feature toggles.',
    'AI/ML: Boolean masks for selecting data or applying logic.',
    'Game development: Collision detection, win/loss state.',
    'Data science: Filtering data with Boolean conditions.',
    'IoT systems: Sensor ON/OFF, signal monitoring.',
  ],
  interviewQuestions: [
    { q: 'What is a Boolean in Python?', a: 'A Boolean is a data type that represents one of two values: True or False. It is often the result of comparisons.' },
    { q: 'How are Booleans internally represented in Python?', a: 'Internally, True is represented as 1 and False is represented as 0. You can even perform arithmetic with them.' },
    { q: 'What will bool([]) return? Why?', a: 'bool([]) returns False because empty sequences (lists, tuples, strings) are considered "falsy" in Python.' },
    { q: 'Explain the difference between and, or, and not.', a: '"and" returns True if both are True; "or" returns True if at least one is True; "not" negates the value.' },
    { q: 'How do Booleans behave in control flow structures?', a: 'In Python, control flow structures like "if" and "while" treat the Boolean True as the signal to execute the block, and False to skip it.' }
  ],
  resources: [
    {
      icon: 'video',
      title: 'Topic video source',
      description: 'A comprehensive video',
      link: 'https://youtu.be/9OK32jb_TdI?si=xdrF6PINsEOIg5R1',
      linkText: 'Watch',
    },
    {
      icon: 'book',
      title: 'Python pdf',
      description: 'pdf on topic',
      link: 'https://drive.google.com/file/d/1SlG7xt6UGPQ7qDwN4N57V7_pq4VX0g6N/view?usp=drive_link',
      linkText: 'Visit',
    },
  ],
}

export default data
