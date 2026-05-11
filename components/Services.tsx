'use client'
import { motion } from 'framer-motion'
import { Cloud, Shield, Code, Server, Database, Smartphone } from 'lucide-react'

const services = [
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure setup, migration, and management with AWS, Azure, and Google Cloud.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80',
    features: ['Cloud Migration', 'Infrastructure Setup', '24/7 Monitoring', 'Cost Optimization'],
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    description: 'Enterprise-grade security solutions protecting your data, networks, and systems from threats.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&q=80',
    features: ['Threat Detection', 'Security Audits', 'Compliance', 'Data Protection'],
  },
  {
    icon: Code,
    title: 'Custom Development',
    description: 'Bespoke software solutions tailored to your business needs, from web apps to enterprise systems.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&q=80',
    features: ['Web Applications', 'Mobile Apps', 'API Development', 'Legacy Modernization'],
  },
  {
    icon: Server,
    title: 'IT Support',
    description: 'Round-the-clock technical support and maintenance to keep your business running smoothly.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80',
    features: ['Help Desk', 'Remote Support', 'On-site Service', 'Proactive Maintenance'],
  },
  {
    icon: Database,
    title: 'Data Management',
    description: 'Comprehensive data solutions including backup, recovery, analytics, and database management.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
    features: ['Data Backup', 'Disaster Recovery', 'Analytics', 'Database Admin'],
  },
  {
    icon: Smartphone,
    title: 'Digital Transformation',
    description: 'Strategic consulting and implementation to modernize your business processes and technologies.',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=80',
    features: ['Strategy Consulting', 'Process Automation', 'Tech Integration', 'Training'],
  },
]

export default function Services() {
  return (
    <section id="all-services" className="w-full bg-gray-50 py-10 md:py-14 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-10"
        >
          <span className="text-green-500 font-semibold text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mt-2 md:mt-3">
            Solutions We Deliver
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Comprehensive IT services designed to accelerate your business growth and operational efficiency
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-5">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="group flex h-full flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-40 sm:h-44 md:h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                      <service.icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-white font-bold text-lg">{service.title}</h3>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                <div className="mt-auto flex flex-wrap gap-2">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
