'use client'
import { motion } from 'framer-motion'
import { ArrowUpRight, TrendingUp, Clock, DollarSign, Shield } from 'lucide-react'

const caseStudies = [
  {
    client: 'Global Finance Corp',
    industry: 'Finance',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80',
    challenge: 'Legacy systems causing 12-hour downtime monthly',
    solution: 'Cloud migration & infrastructure modernization',
    results: [
      { icon: TrendingUp, value: '99.99%', label: 'Uptime Achieved' },
      { icon: Clock, value: '75%', label: 'Faster Processing' },
      { icon: DollarSign, value: '$2M', label: 'Annual Savings' },
    ],
    quote: 'InnovaIT transformed our infrastructure. We went from constant outages to near-perfect reliability.',
    author: 'Robert Chen, CTO',
  },
  {
    client: 'HealthFirst Medical',
    industry: 'Healthcare',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80',
    challenge: 'HIPAA compliance gaps & data security concerns',
    solution: 'Comprehensive cybersecurity overhaul',
    results: [
      { icon: Shield, value: '100%', label: 'Compliance Score' },
      { icon: Clock, value: '60%', label: 'Faster Access' },
      { icon: TrendingUp, value: 'Zero', label: 'Breaches' },
    ],
    quote: 'Their security expertise gave us complete confidence in protecting patient data.',
    author: 'Dr. Sarah Williams, CEO',
  },
  {
    client: 'RetailMax Chain',
    industry: 'Retail',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
    challenge: 'Disconnected systems across 200+ stores',
    solution: 'Unified omnichannel platform',
    results: [
      { icon: TrendingUp, value: '40%', label: 'Revenue Increase' },
      { icon: Clock, value: 'Real-time', label: 'Inventory Sync' },
      { icon: DollarSign, value: '3x', label: 'ROI in Year 1' },
    ],
    quote: 'The unified platform revolutionized how we manage our retail operations.',
    author: 'Michael Torres, COO',
  },
]

export default function CaseStudies() {
  return (
    <section className="w-full bg-gray-50 py-10 md:py-14 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-10"
        >
          <span className="text-green-500 font-semibold text-sm uppercase tracking-wider">Case Studies</span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mt-2 md:mt-3">
            Client Success Stories
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            See how we have helped businesses transform their IT infrastructure and achieve measurable results.
          </p>
        </motion.div>

        <div className="mx-auto flex max-w-5xl flex-col gap-4">
          {caseStudies.map((study, i) => (
            <motion.div
              key={study.client}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="grid grid-cols-1 md:grid-cols-[220px_minmax(0,1fr)]">
                <div className="relative h-44 overflow-hidden md:h-full md:min-h-[220px]">
                  <img
                    src={study.image}
                    alt={study.client}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <span className="text-xs font-semibold uppercase tracking-wider text-green-400">{study.industry}</span>
                    <h3 className="text-lg font-bold text-white">{study.client}</h3>
                  </div>
                </div>

                <div className="flex h-full flex-col p-4 md:p-5">
                  <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_240px] lg:items-start lg:gap-5">
                    <div>
                      <div className="mb-3">
                        <p className="mb-1 text-xs uppercase tracking-wider text-gray-500">Challenge</p>
                        <p className="text-sm text-gray-700">{study.challenge}</p>
                      </div>

                      <div className="mb-3">
                        <p className="mb-1 text-xs uppercase tracking-wider text-gray-500">Solution</p>
                        <p className="text-sm text-gray-700">{study.solution}</p>
                      </div>

                      <div className="border-t border-gray-100 pt-3">
                        <p className="mb-2 line-clamp-2 text-sm italic text-gray-600">&ldquo;{study.quote}&rdquo;</p>
                        <p className="text-xs text-gray-500">{study.author}</p>
                      </div>
                    </div>

                    <div className="flex flex-col gap-3">
                      <div className="grid grid-cols-3 gap-2">
                        {study.results.map((result) => (
                          <div key={result.label} className="rounded-xl bg-gray-50 px-2 py-3 text-center">
                            <result.icon className="mx-auto mb-1 h-4 w-4 text-green-500" />
                            <p className="text-base font-bold leading-tight text-gray-900">{result.value}</p>
                            <p className="mt-1 text-[11px] leading-tight text-gray-500">{result.label}</p>
                          </div>
                        ))}
                      </div>

                      <button className="flex w-full items-center justify-center gap-2 rounded-xl border border-green-100 bg-green-50 px-4 py-2.5 text-sm font-semibold text-green-600 transition-colors hover:border-green-200 hover:bg-green-100">
                        Read Full Case Study
                        <ArrowUpRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
