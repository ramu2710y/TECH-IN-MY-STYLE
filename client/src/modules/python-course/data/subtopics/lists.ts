import type { SubtopicData } from '../subtopicsData'
const data: SubtopicData = {
  slug: 'lists', title: 'Python Lists', breadcrumb: 'Data Types', readingTime: '12 min',
  description: 'Python lists are ordered, mutable collection of items that can contain mixed data types. They are highly flexible and are one of the most commonly used data structures.',
  prerequisites: ['Basic variable knowledge', 'Indexing basics'],
  examples: `# Creating a list\nfruits = ["apple", "banana", "cherry"]\n\n# Modifying a list\nfruits[1] = "blueberry"\n\n# List methods\nfruits.append("orange")\nfruits.insert(1, "mango")\nfruits.pop() # Removes the last item\n\n# Looping\nfor f in fruits:\n    print(f)\n\n# List comprehensions\nsquares = [x**2 for x in range(1, 6)]\nprint(squares) # [1, 4, 9, 16, 25]`,
  realWorld: ['Shopping carts', 'Task lists', 'Database results', 'Storing data collections'],
  applications: ['Dynamic web content', 'Data storage', 'Queue/Stack implementations', 'Iterative algorithms'],
  interviewQuestions: [
    { q: 'Are lists mutable?', a: 'Yes, lists are mutable objects. You can modify, add, or remove items.' },
    { q: 'Difference between append() and extend()?', a: 'append() adds an item to the end; extend() adds another list (iterable) to the current list.' },
    { q: 'What is a list comprehension?', a: 'A concise way to create lists using a single line of code, often used for transformation or filtering.' }
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
