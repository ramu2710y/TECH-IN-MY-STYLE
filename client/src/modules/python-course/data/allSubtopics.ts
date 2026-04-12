export interface Resource {
  icon: 'video' | 'book'
  title: string
  description: string
  link: string
  linkText: string
}

export interface SubtopicData {
  slug: string
  title: string
  breadcrumb: string
  readingTime: string
  description: string
  prerequisites: string[]
  examples: string
  realWorld: string[]
  applications: string[]
  interviewQuestions: { q: string; a: string }[]
  resources: Resource[]
}


import booleans from './subtopics/booleans'
import pythonOverview from './subtopics/python-overview'
import strings from './subtopics/strings'
import lists from './subtopics/lists'
import functionDefinition from './subtopics/function-definition'
import classesObjects from './subtopics/classes-objects'

const subtopicsMap: Record<string, SubtopicData> = {
  'booleans': booleans,
  'python-overview': pythonOverview,
  'strings': strings,
  'lists': lists,
  'function-definition': functionDefinition,
  'classes-objects': classesObjects,
}

export function getSubtopic(slug: string): SubtopicData | null {
  return subtopicsMap[slug] || makeGeneric(slug)
}

function makeGeneric(slug: string): SubtopicData {
  const title = slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
  return {
    slug, title, breadcrumb: 'Python Topics', readingTime: '10 min',
    description: `Learn about ${title} in Python. This topic covers the fundamental concepts, syntax, and practical applications.`,
    prerequisites: ['Basic Python knowledge', 'Understanding of Python syntax'],
    examples: `# ${title} example\n# See the official Python documentation for detailed examples`,
    realWorld: ['Used in real-world Python applications', 'Applied in software development', 'Used in data processing', 'Applied in automation scripts'],
    applications: ['Web development', 'Data science', 'Automation', 'Machine learning'],
    interviewQuestions: [
      { q: `What is ${title} in Python?`, a: `${title} is a fundamental concept in Python used for building efficient and scalable applications.` },
      { q: `How do you use ${title}?`, a: `You can use ${title} by following the standard Python syntax and best practices as shown in the examples above.` },
      { q: `What are the benefits of ${title}?`, a: `Benefits include better code organization, improved readability, and more robust logic in your programs.` },
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
}
