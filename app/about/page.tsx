import AboutPage from '@/components/AboutPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us | IT Strategy, Cloud, Cybersecurity Experts | InnovaIT',
  description: 'Learn about InnovaIT, our mission, values, leadership team, and how we help businesses modernize technology with confidence.',
  keywords: 'about InnovaIT, IT company, technology partner, cloud experts, cybersecurity team, managed IT company',
}

export default function About() {
  return <AboutPage />
}
