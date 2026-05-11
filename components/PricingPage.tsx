'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Check, Shield, Sparkles, Star } from 'lucide-react'
import Navbar from './Navbar'
import Pricing from './Pricing'

const perks = [
  'No hidden setup fees',
  'Flexible monthly contracts',
  'Migration support included',
  'Security-first onboarding',
]

const comparison = [
  {
    title: 'Fast Response Times',
    description: 'Priority support queues, clear SLAs, and real engineers who know your stack.',
  },
  {
    title: 'Scalable Infrastructure',
    description: 'Plans designed to grow from small teams to enterprise-grade operations.',
  },
  {
    title: 'Security By Default',
    description: 'Monitoring, backups, and compliance-minded processes built into every tier.',
  },
]

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section className="relative overflow-hidden bg-gray-950">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1920&q=80"
            alt="Business pricing and IT planning"
            className="h-full w-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/55" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(34,197,94,0.22),_transparent_30%)]" />
        </div>

        <div className="relative mx-auto flex min-h-[88vh] max-w-7xl items-center px-4 pb-16 pt-24 sm:px-6 lg:px-8 lg:pt-28">
          <div className="grid w-full items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-2xl"
            >
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-sm">
                <Star className="h-4 w-4 fill-green-400 text-green-400" />
                <span className="text-sm font-medium text-white/90">Simple plans for growing teams</span>
              </div>

              <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                Pricing That
                <span className="block bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                  Scales With You
                </span>
              </h1>

              <p className="mt-5 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
                Choose a plan built for your current stage, then expand confidently with support,
                security, and infrastructure that keep pace with your business.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <motion.a
                  href="/#contact-form"
                  whileHover={{ scale: 1.04, boxShadow: '0 20px 40px -15px rgba(34, 197, 94, 0.45)' }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-green-500 to-green-600 px-7 py-4 text-base font-bold text-white shadow-lg shadow-green-500/25 transition-all duration-300"
                >
                  Talk to Sales
                  <ArrowRight className="h-5 w-5" />
                </motion.a>
                <motion.a
                  href="#plans"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center rounded-xl border-2 border-white/25 bg-white/10 px-7 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-green-400 hover:bg-white/15"
                >
                  View Plans
                </motion.a>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {perks.map((perk) => (
                  <div key={perk} className="flex items-center gap-3 text-sm text-white/85">
                    <Check className="h-4 w-4 flex-shrink-0 text-green-400" />
                    <span>{perk}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="hidden lg:block"
            >
              <div className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-md shadow-2xl shadow-black/30">
                <div className="grid gap-4">
                  <div className="rounded-2xl border border-white/10 bg-white/10 p-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-white/70">Most Chosen Plan</p>
                        <h3 className="mt-1 text-2xl font-bold text-white">Business</h3>
                      </div>
                      <div className="rounded-full bg-green-400/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-green-300">
                        Best Value
                      </div>
                    </div>
                    <div className="mt-5 flex items-end gap-2">
                      <span className="text-5xl font-bold text-white">$2,499</span>
                      <span className="pb-2 text-white/60">/month</span>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-white/70">
                      Designed for growing companies that need stronger support, better security,
                      and room to scale.
                    </p>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-3">
                    {comparison.map((item) => (
                      <div key={item.title} className="rounded-2xl border border-white/10 bg-black/20 p-4">
                        <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-green-500/15">
                          <Shield className="h-5 w-5 text-green-400" />
                        </div>
                        <h4 className="text-sm font-semibold text-white">{item.title}</h4>
                        <p className="mt-2 text-xs leading-relaxed text-white/65">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <div id="plans">
        <Pricing />
      </div>

      <section className="bg-gray-50 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-3">
            {comparison.map((item) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-green-100">
                  <Sparkles className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
