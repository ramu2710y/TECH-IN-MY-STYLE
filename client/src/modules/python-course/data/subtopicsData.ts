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
