import FAQPage from '@/components/FAQPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FAQ | IT Support, Cloud, Security Questions | InnovaIT',
  description: 'Browse common questions about InnovaIT services, implementation timelines, support, cloud platforms, and cybersecurity compliance.',
  keywords: 'IT FAQ, cloud migration questions, managed IT support FAQ, cybersecurity FAQ, InnovaIT help',
}

export default function FAQRoute() {
  return <FAQPage />
}
