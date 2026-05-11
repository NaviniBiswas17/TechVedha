'use client'
import { motion } from 'framer-motion'
import { ArrowUpRight, TrendingUp, Clock, DollarSign } from 'lucide-react'

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

import { Shield } from 'lucide-react'

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {caseStudies.map((study, i) => (
            <motion.div
              key={study.client}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-xl md:rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={study.image}
                  alt={study.client}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-green-400 text-xs font-semibold uppercase tracking-wider">{study.industry}</span>
                  <h3 className="text-white font-bold text-xl">{study.client}</h3>
                </div>
              </div>

              <div className="p-4 md:p-5">
                <div className="mb-4">
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Challenge</p>
                  <p className="text-gray-700 text-sm">{study.challenge}</p>
                </div>

                <div className="mb-4">
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Solution</p>
                  <p className="text-gray-700 text-sm">{study.solution}</p>
                </div>

                <div className="grid grid-cols-3 gap-2 mb-4">
                  {study.results.map((result) => (
                    <div key={result.label} className="text-center p-2 bg-gray-50 rounded-lg">
                      <result.icon className="w-4 h-4 text-green-500 mx-auto mb-1" />
                      <p className="text-lg font-bold text-gray-900">{result.value}</p>
                      <p className="text-xs text-gray-500">{result.label}</p>
                    </div>
                  ))}
                </div>

                <div className="border-t border-gray-100 pt-4">
                  <p className="text-gray-600 text-sm italic mb-2">&ldquo;{study.quote}&rdquo;</p>
                  <p className="text-xs text-gray-500">{study.author}</p>
                </div>

                <button className="mt-4 w-full flex items-center justify-center gap-2 text-green-500 font-semibold text-sm hover:text-green-600 transition-colors">
                  Read Full Case Study
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
