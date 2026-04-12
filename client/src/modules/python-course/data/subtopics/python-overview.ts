import type { SubtopicData } from '../subtopicsData'

const data: SubtopicData = {
  slug: 'python-overview',
  title: 'Python Overview',
  breadcrumb: 'Getting Started',
  readingTime: '5 min',
  description: 'Python is a high-level, interpreted, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation. Python is dynamically-typed and garbage-collected.',
  prerequisites: ['None - perfect for absolute beginners!'],
  examples: `# Your first Python program\nprint("Hello, World!")\n\n# Basic arithmetic\nx = 10\ny = 5\nprint(f"Sum: {x + y}")`,
  realWorld: ['Web Development (Django, Flask)', 'Data Science (Pandas, NumPy)', 'Artificial Intelligence (PyTorch, TensorFlow)', 'Automation Scripts'],
  applications: ['Instagram', 'Spotify', 'Netflix', 'Dropbox'],
  interviewQuestions: [
    { q: 'What is Python?', a: 'Python is a high-level, interpreted programming language known for its simplicity and readability.' },
    { q: 'Is Python compiled or interpreted?', a: 'Python is both: it is compiled to bytecode and then interpreted by the Python Virtual Machine (PVM).' },
    { q: 'What are the key features of Python?', a: 'Interpreted nature, dynamically typed, object-oriented, huge standard library, and multi-paradigm support.' }
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
  ]
}

export default data
