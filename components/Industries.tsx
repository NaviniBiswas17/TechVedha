'use client'
import { motion } from 'framer-motion'
import { Building2, HeartPulse, ShoppingCart, GraduationCap, Landmark, Factory } from 'lucide-react'

const industries = [
  {
    icon: Building2,
    name: 'Real Estate',
    description: 'Property management systems, virtual tours, and secure document handling.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80',
  },
  {
    icon: HeartPulse,
    name: 'Healthcare',
    description: 'HIPAA-compliant systems, EMR integration, and telemedicine solutions.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80',
  },
  {
    icon: ShoppingCart,
    name: 'Retail & E-commerce',
    description: 'Omnichannel platforms, inventory management, and payment processing.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80',
  },
  {
    icon: GraduationCap,
    name: 'Education',
    description: 'Learning management systems, virtual classrooms, and student portals.',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80',
  },
  {
    icon: Landmark,
    name: 'Finance',
    description: 'Secure banking systems, fraud detection, and regulatory compliance.',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=80',
  },
  {
    icon: Factory,
    name: 'Manufacturing',
    description: 'IoT integration, supply chain management, and predictive maintenance.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80',
  },
]

export default function Industries() {
  return (
    <section className="w-full bg-white py-10 md:py-14 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-10"
        >
          <span className="text-green-500 font-semibold text-sm uppercase tracking-wider">Deep Expertise</span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mt-2 md:mt-3">
            Industry-Specific Solutions That Understand Your Challenges
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            With 15+ years serving multiple sectors, we deliver specialized solutions that meet strict compliance requirements and industry best practices
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {industries.map((industry, i) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative overflow-hidden rounded-2xl cursor-pointer"
            >
              <div className="absolute inset-0">
                <img
                  src={industry.image}
                  alt={industry.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-gray-900/30" />
              </div>
              <div className="relative p-4 md:p-6 h-56 sm:h-60 md:h-64 flex flex-col justify-end">
                <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mb-4">
                  <industry.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-bold text-xl mb-2">{industry.name}</h3>
                <p className="text-gray-300 text-sm">{industry.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
