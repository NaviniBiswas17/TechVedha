import PricingPage from '@/components/PricingPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pricing | Managed IT, Cloud, Cybersecurity Plans | InnovaIT',
  description: 'Explore transparent IT pricing plans for startups, growing businesses, and enterprise teams. Compare support, cloud, and cybersecurity service tiers.',
  keywords: 'IT pricing, managed IT plans, cloud pricing, cybersecurity pricing, enterprise IT services',
}

export default function Pricing() {
  return <PricingPage />
}
