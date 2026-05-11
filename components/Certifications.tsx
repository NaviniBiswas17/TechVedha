'use client'
import { motion } from 'framer-motion'
import { Award, Shield, CheckCircle, BadgeCheck } from 'lucide-react'

const certifications = [
  {
    icon: Award,
    title: 'ISO 27001 Certified',
    description: 'Information Security Management System certification ensuring data protection standards.',
  },
  {
    icon: Shield,
    title: 'SOC 2 Type II',
    description: 'Certified for security, availability, processing integrity, and confidentiality.',
  },
  {
    icon: CheckCircle,
    title: 'AWS Premier Partner',
    description: 'Top-tier AWS partnership with certified architects and extensive cloud expertise.',
  },
  {
    icon: BadgeCheck,
    title: 'Microsoft Gold Partner',
    description: 'Microsoft Gold competency in Cloud Platform and Cloud Productivity.',
  },
]

const stats = [
  { value: '15+', label: 'Years Experience' },
  { value: '98%', label: 'Client Retention' },
  { value: '50+', label: 'Industry Awards' },
  { value: '24/7', label: 'Global Support' },
]

export default function Certifications() {
  return (
    <section className="w-full bg-gradient-to-b from-gray-900 to-gray-800 py-10 md:py-14 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-10 md:mb-12 pb-10 md:pb-12 border-b border-gray-700"
        >
          {stats.map((stat, i) => (
            <div key={stat.label} className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, type: 'spring' }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-green-400 mb-1 md:mb-2"
              >
                {stat.value}
              </motion.div>
              <p className="text-gray-400 text-sm">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Certifications */}
        <div className="text-center mb-8 md:mb-10">
          <span className="text-green-400 font-semibold text-sm uppercase tracking-wider">Trust & Compliance</span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mt-2 md:mt-3">
            Certified & Accredited
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Our certifications demonstrate our commitment to security, quality, and industry best practices.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-gray-800/50 border border-gray-700 rounded-xl md:rounded-2xl p-4 md:p-5 hover:border-green-500/50 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-green-500/10 rounded-xl flex items-center justify-center mb-4">
                <cert.icon className="w-7 h-7 text-green-400" />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">{cert.title}</h3>
              <p className="text-gray-400 text-sm">{cert.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 md:mt-12 pt-10 md:pt-12 border-t border-gray-700"
        >
          <p className="text-center text-gray-500 text-sm mb-8">Trusted by leading organizations worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 lg:gap-8 opacity-50">
            {['Google', 'Microsoft', 'Amazon', 'Salesforce', 'Oracle', 'IBM'].map((company) => (
              <span key={company} className="text-xl font-bold text-gray-500">{company}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
