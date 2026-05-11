'use client'
import { motion } from 'framer-motion'
import { ArrowRight, TrendingUp } from 'lucide-react'

export default function CTA() {
  return (
    <section className="w-full bg-gradient-to-br from-green-500 to-green-600 py-10 md:py-14 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-white"
          >
<span className="inline-block bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
              Start Your Transformation Today
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">
              Ready to Modernize Your IT Infrastructure?
            </h2>
            <p className="text-green-50 text-lg mb-8 leading-relaxed">
              Get a free consultation and discover how we can help reduce costs, improve security, 
              and scale your business with cutting-edge technology solutions.
            </p>
            <div className="flex items-center gap-4 flex-wrap">
              <motion.a
                href="#contact-form"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 bg-white text-green-600 font-semibold px-7 py-3.5 rounded-lg hover:bg-gray-50 transition-all duration-200 shadow-lg"
              >
                Get Started Now
                <ArrowRight className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="#pricing"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 border-2 border-white text-white font-semibold px-7 py-3.5 rounded-lg hover:bg-white/10 transition-all duration-200"
              >
                View Pricing
              </motion.a>
            </div>
          </motion.div>

          {/* Right: Growth Chart */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl md:rounded-2xl shadow-xl md:shadow-2xl p-5 md:p-6 lg:p-8"
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-sm font-semibold text-gray-600 mb-1">Business Growth</p>
                <div className="flex items-end gap-1">
                  <span className="text-4xl font-bold text-green-500">+28.6</span>
                  <span className="text-xl font-bold text-green-500 mb-1">%</span>
                </div>
              </div>
              <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-green-500" />
              </div>
            </div>

            {/* Chart */}
            <div className="h-40">
              <svg viewBox="0 0 300 120" className="w-full h-full">
                <defs>
                  <linearGradient id="ctaGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#22c55e" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#22c55e" stopOpacity="0" />
                  </linearGradient>
                </defs>
                {/* Grid lines */}
                {[0, 1, 2, 3, 4].map((i) => (
                  <line
                    key={i}
                    x1="0"
                    y1={i * 30}
                    x2="300"
                    y2={i * 30}
                    stroke="#f3f4f6"
                    strokeWidth="1"
                  />
                ))}
                {/* Area */}
                <path
                  d="M0,100 C50,95 80,85 120,70 C160,55 200,65 240,40 C270,25 285,30 300,15 L300,120 L0,120 Z"
                  fill="url(#ctaGrad)"
                />
                {/* Line */}
                <path
                  d="M0,100 C50,95 80,85 120,70 C160,55 200,65 240,40 C270,25 285,30 300,15"
                  fill="none"
                  stroke="#22c55e"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                {/* Dot */}
                <circle cx="300" cy="15" r="5" fill="#22c55e" />
              </svg>
            </div>

            <div className="flex items-center justify-between mt-6 pt-6 border-t border-gray-100">
              <div className="text-center">
                <p className="text-2xl font-bold text-gray-900">1200+</p>
                <p className="text-xs text-gray-500 mt-1">Projects</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-gray-900">500+</p>
                <p className="text-xs text-gray-500 mt-1">Clients</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-gray-900">99.9%</p>
                <p className="text-xs text-gray-500 mt-1">Uptime</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
