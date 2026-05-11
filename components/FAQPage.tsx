'use client'

import { motion } from 'framer-motion'
import { ArrowRight, LifeBuoy, MessageSquare, ShieldCheck, Sparkles } from 'lucide-react'
import Navbar from './Navbar'
import FAQ from './FAQ'

const supportHighlights = [
  {
    icon: LifeBuoy,
    title: 'Responsive Support',
    description: 'Fast help from real specialists when your team needs answers, guidance, or urgent troubleshooting.',
  },
  {
    icon: ShieldCheck,
    title: 'Clear, Trusted Advice',
    description: 'Straightforward recommendations shaped by reliability, security, and long-term business value.',
  },
  {
    icon: MessageSquare,
    title: 'No Guesswork',
    description: 'We explain complex IT topics in plain language so decisions feel easier and more confident.',
  },
]

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section className="relative overflow-hidden bg-gray-950">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1920&q=80"
            alt="Team answering customer questions"
            className="h-full w-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/55" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(34,197,94,0.2),_transparent_30%)]" />
        </div>

        <div className="relative mx-auto flex min-h-[72vh] max-w-7xl items-center px-4 pb-14 pt-24 sm:px-6 lg:px-8 lg:pt-28">
          <div className="grid w-full items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-2xl"
            >
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-sm">
                <Sparkles className="h-4 w-4 text-green-400" />
                <span className="text-sm font-medium text-white/90">Answers that make IT simpler</span>
              </div>

              <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                Frequently Asked
                <span className="block bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                  Questions
                </span>
              </h1>

              <p className="mt-5 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
                Explore the questions business leaders ask most often about support, security,
                cloud migration, implementation timelines, and working with InnovaIT.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.04, boxShadow: '0 20px 40px -15px rgba(34, 197, 94, 0.45)' }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-green-500 to-green-600 px-7 py-4 text-base font-bold text-white shadow-lg shadow-green-500/25 transition-all duration-300"
                >
                  Ask Our Team
                  <ArrowRight className="h-5 w-5" />
                </motion.a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="grid gap-4"
            >
              {supportHighlights.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-md shadow-xl shadow-black/20"
                >
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-green-500/15">
                    <item.icon className="h-6 w-6 text-green-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">{item.description}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <FAQ />

      <section className="bg-green-600 py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Still need a more specific answer?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-green-50">
              Tell us what you are planning, what is blocking progress, or where your current setup is causing friction.
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-4 text-base font-bold text-green-700 transition-all duration-300 hover:bg-gray-100"
            >
              Contact InnovaIT
              <ArrowRight className="h-5 w-5" />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
