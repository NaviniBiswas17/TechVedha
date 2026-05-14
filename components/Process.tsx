'use client'
import { motion } from 'framer-motion'
import { Search, Lightbulb, Settings, Headphones } from 'lucide-react'

const steps = [
  {
    icon: Search,
    title: 'Discovery',
    description: 'We analyze your business requirements, existing infrastructure, and goals to understand your unique needs.',
    color: 'text-blue-500',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
  },
  {
    icon: Lightbulb,
    title: 'Strategy',
    description: 'Our experts design a tailored solution architecture that aligns with your budget and growth objectives.',
    color: 'text-green-500',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200',
  },
  {
    icon: Settings,
    title: 'Implementation',
    description: 'We execute the plan with minimal disruption, ensuring smooth deployment and seamless integration.',
    color: 'text-orange-500',
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-200',
  },
  {
    icon: Headphones,
    title: 'Ongoing Support',
    description: 'Continuous monitoring, maintenance, and optimization to ensure peak performance and security.',
    color: 'text-purple-500',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200',
  },
]

export default function Process() {
  return (
    <section id="solutions" className="w-full bg-gray-50 py-10 md:py-14 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-10"
        >
          <span className="text-green-500 font-semibold text-sm uppercase tracking-wider">
            Our Proven Methodology
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mt-2 md:mt-3">
            Strategic Partnership From Start to Finish
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            A collaborative, results-driven approach ensuring your IT infrastructure delivers competitive advantage and sustainable growth
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative"
            >
              {/* Connector Line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-gray-200 to-transparent z-0"></div>
              )}

              {/* Card */}
              <div className="relative bg-white border-2 border-gray-100 rounded-xl md:rounded-2xl p-4 md:p-5 hover:border-green-200 hover:shadow-lg transition-all duration-300 z-10">
                <div className={`w-14 h-14 rounded-xl ${step.bgColor} flex items-center justify-center mb-4`}>
                  <step.icon className={`w-7 h-7 ${step.color}`} />
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
