import ContactPage from '@/components/ContactPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us | Talk to IT Experts | InnovaIT',
  description: 'Contact InnovaIT for IT consulting, cloud solutions, cybersecurity services, and digital transformation support.',
  keywords: 'contact InnovaIT, IT consultation, managed IT contact, cybersecurity consultation, cloud solutions contact',
}

export default function ContactRoute() {
  return <ContactPage />
}
