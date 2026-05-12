import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Industries from '@/components/Industries'
import Services from '@/components/Services'
import Process from '@/components/Process'
import Team from '@/components/Team'
import Certifications from '@/components/Certifications'
import CaseStudies from '@/components/CaseStudies'
import Pricing from '@/components/Pricing'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import Blog from '@/components/Blog'
import Contact from '@/components/Contact'
import CTA from '@/components/CTA'
import WhatsAppFloat from '@/components/WhatsAppFloat'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Features />
      <Industries />
      <Services />
      <Process />
      <Team />
      <Certifications />
      <CaseStudies />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Blog />
      <Contact />
      <CTA />
      <WhatsAppFloat />
    </main>
  )
}
