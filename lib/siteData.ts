export type ProjectMetricIcon = 'trending' | 'clock' | 'dollar' | 'shield'

export type ProjectMetric = {
  icon: ProjectMetricIcon
  value: string
  label: string
}

export type ManagedProject = {
  id: string
  client: string
  industry: string
  image: string
  challenge: string
  solution: string
  results: ProjectMetric[]
  quote: string
  author: string
  published: boolean
}

export type ContactSubmission = {
  id: string
  firstName: string
  lastName: string
  email: string
  company: string
  service: string
  message: string
  status: 'new' | 'contacted' | 'closed'
  createdAt: string
}

export const STORAGE_KEYS = {
  projects: 'innovait.projects',
  contactSubmissions: 'innovait.contactSubmissions',
}

export const defaultProjects: ManagedProject[] = [
  {
    id: 'global-finance-corp',
    client: 'Global Finance Corp',
    industry: 'Finance',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80',
    challenge: 'Legacy systems causing 12-hour downtime monthly',
    solution: 'Cloud migration & infrastructure modernization',
    results: [
      { icon: 'trending', value: '99.99%', label: 'Uptime Achieved' },
      { icon: 'clock', value: '75%', label: 'Faster Processing' },
      { icon: 'dollar', value: '$2M', label: 'Annual Savings' },
    ],
    quote: 'InnovaIT transformed our infrastructure. We went from constant outages to near-perfect reliability.',
    author: 'Robert Chen, CTO',
    published: true,
  },
  {
    id: 'healthfirst-medical',
    client: 'HealthFirst Medical',
    industry: 'Healthcare',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80',
    challenge: 'HIPAA compliance gaps & data security concerns',
    solution: 'Comprehensive cybersecurity overhaul',
    results: [
      { icon: 'shield', value: '100%', label: 'Compliance Score' },
      { icon: 'clock', value: '60%', label: 'Faster Access' },
      { icon: 'trending', value: 'Zero', label: 'Breaches' },
    ],
    quote: 'Their security expertise gave us complete confidence in protecting patient data.',
    author: 'Dr. Sarah Williams, CEO',
    published: true,
  },
  {
    id: 'retailmax-chain',
    client: 'RetailMax Chain',
    industry: 'Retail',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
    challenge: 'Disconnected systems across 200+ stores',
    solution: 'Unified omnichannel platform',
    results: [
      { icon: 'trending', value: '40%', label: 'Revenue Increase' },
      { icon: 'clock', value: 'Real-time', label: 'Inventory Sync' },
      { icon: 'dollar', value: '3x', label: 'ROI in Year 1' },
    ],
    quote: 'The unified platform revolutionized how we manage our retail operations.',
    author: 'Michael Torres, COO',
    published: true,
  },
]

export const createEmptyProject = (): ManagedProject => ({
  id: `project-${Date.now()}`,
  client: '',
  industry: '',
  image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=80',
  challenge: '',
  solution: '',
  results: [
    { icon: 'trending', value: '', label: '' },
    { icon: 'clock', value: '', label: '' },
    { icon: 'dollar', value: '', label: '' },
  ],
  quote: '',
  author: '',
  published: true,
})
