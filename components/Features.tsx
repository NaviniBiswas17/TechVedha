'use client'
import { motion } from 'framer-motion'
import { Users, Clock, TrendingUp, Award } from 'lucide-react'

const features = [
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Certified IT professionals with 10+ years of experience in delivering enterprise solutions.',
    color: 'text-blue-500',
    bgColor: 'bg-blue-50',
  },
  {
    icon: Clock,
    title: '24/7 Support',
    description: 'Round-the-clock technical support with guaranteed 15-minute response time for critical issues.',
    color: 'text-green-500',
    bgColor: 'bg-green-50',
  },
  {
    icon: TrendingUp,
    title: 'Scalable Solutions',
    description: 'Future-proof infrastructure designed to scale seamlessly as your business grows.',
    color: 'text-purple-500',
    bgColor: 'bg-purple-50',
  },
  {
    icon: Award,
    title: 'Proven Results',
    description: 'Track record of 99.9% uptime and 40% average cost reduction for our clients.',
    color: 'text-orange-500',
    bgColor: 'bg-orange-50',
  },
]

export default function Features() {
  return (
    <section id="why-choose-us" className="w-full bg-white py-10 md:py-14 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-10"
        >
          <span className="text-green-500 font-semibold text-sm uppercase tracking-wider">
            Why Industry Leaders Trust Us
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mt-2 md:mt-3">
            The Competitive Advantages That Matter
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Built on proven expertise, security-first practices, and a commitment to your operational excellence and business growth
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="bg-white border border-gray-100 rounded-xl md:rounded-2xl p-4 md:p-5 h-full hover:shadow-xl transition-all duration-300">
                <div className={`w-14 h-14 rounded-xl ${feature.bgColor} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`w-7 h-7 ${feature.color}`} />
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
