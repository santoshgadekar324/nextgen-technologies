export interface WorkflowStep {
  title: string
  description: string
}

export interface Service {
  slug: string
  title: string
  category: string
  icon: string
  shortDescription: string
  overview: string
  benefits: string[]
  features: string[]
  technologies: string[]
  workflow: WorkflowStep[]
  cta: string
}

export interface TechCategory {
  name: string
  items: string[]
}

export interface Project {
  slug: string
  title: string
  category: string
  summary: string
  description: string
  features: string[]
  techStack: string[]
  githubUrl: string
  demoUrl: string
  status: string
}

export interface Job {
  slug: string
  title: string
  department: string
  type: string
  location: string
  experience: string
  description: string
  responsibilities: string[]
  requirements: string[]
  niceToHave: string[]
}

export interface BlogPost {
  slug: string
  title: string
  category: string
  excerpt: string
  content: string[]
  author: string
  authorRole: string
  date: string
  readTime: string
  tags: string[]
}

export interface Testimonial {
  name: string
  role: string
  company: string
  quote: string
  rating: number
  initials: string
}

export interface TeamMember {
  name: string
  role: string
  bio: string
  initials: string
}

export interface Stat {
  value: string
  label: string
}

export interface CoreValue {
  title: string
  description: string
  icon: string
}
