import ServicesPage from '@/components/ServicesPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'IT Services | Cloud, Cybersecurity, Software Development | InnovaIT',
  description: 'Enterprise IT services including cloud solutions, cybersecurity, custom software development, managed IT services, and digital transformation. Get a free consultation today.',
  keywords: 'IT services, cloud solutions, cybersecurity, software development, managed IT, digital transformation, DevOps, AI services',
}

export default function Services() {
  return <ServicesPage />
}
