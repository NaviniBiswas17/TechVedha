'use client'
import { motion } from 'framer-motion'
import { Award, Shield, CheckCircle, BadgeCheck } from 'lucide-react'

const certifications = [
  {
    icon: Award,
    title: 'ISO 27001 Certified',
    description: 'Proven information security standards.',
  },
  {
    icon: Shield,
    title: 'SOC 2 Type II',
    description: 'Verified controls for security and availability.',
  },
  {
    icon: CheckCircle,
    title: 'AWS Premier Partner',
    description: 'Advanced AWS expertise and delivery.',
  },
  {
    icon: BadgeCheck,
    title: 'Microsoft Gold Partner',
    description: 'Recognized Microsoft cloud competency.',
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
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 mb-8 md:mb-10 pb-8 md:pb-10 border-b border-gray-700"
        >
          {stats.map((stat, i) => (
            <div key={stat.label} className="rounded-2xl border border-white/5 bg-white/[0.03] px-3 py-4 text-center">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, type: 'spring' }}
                className="mb-1 text-2xl font-bold text-green-400 md:text-3xl lg:text-4xl"
              >
                {stat.value}
              </motion.div>
              <p className="text-xs text-gray-400 md:text-sm">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Certifications */}
        <div className="text-center mb-7 md:mb-8">
          <span className="text-green-400 font-semibold text-sm uppercase tracking-wider">Trusted Standards & Credentials</span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mt-2 md:mt-3">
            Certified Excellence Backed by Industry Leaders
          </h2>
          <p className="text-gray-400 mt-3 max-w-xl mx-auto text-sm sm:text-base">
            Our partner-level certifications and compliance credentials ensure your business receives only enterprise-grade security and proven reliability.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-gray-800/50 border border-gray-700 rounded-xl md:rounded-2xl p-4 hover:border-green-500/50 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center mb-3">
                <cert.icon className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-white font-bold text-base md:text-lg mb-1.5 leading-snug">{cert.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{cert.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
