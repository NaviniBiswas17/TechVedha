'use client'
import { motion } from 'framer-motion'
import { ArrowRight, Play, Star, TrendingUp, Shield, Clock, Users, CheckCircle, ChevronDown } from 'lucide-react'
import Image from 'next/image'

const trustLogos = [
  { name: 'Google', width: 80 },
  { name: 'Microsoft', width: 100 },
  { name: 'Amazon', width: 80 },
  { name: 'Meta', width: 70 },
]

const floatingStats = [
  { icon: TrendingUp, value: '99.9%', label: 'Uptime', subtext: 'Guaranteed', color: 'bg-green-500' },
  { icon: Shield, value: '500+', label: 'Clients', subtext: 'Worldwide', color: 'bg-blue-500' },
  { icon: Clock, value: '24/7', label: 'Support', subtext: 'Always On', color: 'bg-purple-500' },
]

export default function Hero() {
  return (
    <section id="home" className="relative w-full min-h-screen bg-gradient-to-br from-gray-50 via-white to-green-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] bg-gradient-to-br from-green-200/20 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            scale: [1, 1.3, 1],
            rotate: [0, -45, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-gradient-to-tr from-blue-200/20 to-transparent rounded-full blur-3xl"
        />
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 md:pt-24 lg:pt-28 pb-16 md:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex flex-col gap-6 md:gap-8"
          >
            {/* Trust Badge - Results Focused */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="inline-flex items-center gap-2 w-fit bg-green-50 border border-green-200 rounded-full px-4 py-2 shadow-sm"
            >
              <span className="flex items-center gap-1">
                <span className="text-green-600 font-bold">$2M+</span>
                <span className="text-xs sm:text-sm font-medium text-gray-700">saved for clients this year</span>
              </span>
            </motion.div>

            {/* Main Heading with Animation */}
            <div className="space-y-2">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.1] tracking-tight"
              >
                Transform Your
                <br />
                <span className="relative inline-block">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-600">
                    Business
                  </span>
                  <motion.svg
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 1, duration: 0.8 }}
                    className="absolute -bottom-2 left-0 w-full"
                    height="12"
                    viewBox="0 0 200 12"
                    fill="none"
                  >
                    <path
                      d="M2 8C50 2 150 2 198 8"
                      stroke="url(#underlineGradient)"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                    <defs>
                      <linearGradient id="underlineGradient" x1="0" y1="0" x2="200" y2="0">
                        <stop offset="0%" stopColor="#22c55e" />
                        <stop offset="100%" stopColor="#16a34a" />
                      </linearGradient>
                    </defs>
                  </motion.svg>
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-xl sm:text-2xl text-gray-600 font-light"
              >
                with Enterprise IT Solutions
              </motion.p>
            </div>

            {/* Description - Value Proposition */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-xl"
            >
              Stop wasting money on outdated systems. 500+ businesses trust us to slash downtime, 
              secure their data, and scale without headaches. Your competitors are already ahead — 
              <span className="text-green-600 font-semibold"> let&apos;s close that gap today.</span>
            </motion.p>

            {/* CTA Buttons - High Converting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.a
                href="#contact-form"
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px -15px rgba(34, 197, 94, 0.4)" }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-green-500/30 transition-all duration-300 text-lg"
              >
                Start Saving Money Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a
                href="#all-services"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex items-center justify-center gap-2 bg-white text-gray-800 font-semibold px-8 py-4 rounded-xl border-2 border-gray-200 hover:border-green-500 hover:text-green-600 shadow-sm transition-all duration-300"
              >
                <Play className="w-4 h-4 fill-current" />
                See How It Works
              </motion.a>
            </motion.div>

            {/* Trust Indicators - Business Impact */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="flex flex-wrap items-center gap-4 sm:gap-6 pt-4"
            >
              {[
                { icon: CheckCircle, text: 'Zero Downtime Guarantee', color: 'text-green-600' },
                { icon: CheckCircle, text: '24/7 Expert Support', color: 'text-green-600' },
                { icon: CheckCircle, text: '30-Day Money Back', color: 'text-green-600' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm font-medium text-gray-700">
                  <item.icon className={`w-5 h-5 ${item.color}`} />
                  <span>{item.text}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Hero Image + Floating Stats */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative lg:pl-8"
          >
            {/* Main Image Container */}
            <div className="relative">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative rounded-2xl overflow-hidden shadow-2xl shadow-gray-200/50"
              >
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                  alt="Team collaboration"
                  className="w-full h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </motion.div>

              {/* Floating Stats Cards */}
              {floatingStats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: 0.8 + i * 0.15, duration: 0.5 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className={`absolute ${
                    i === 0 ? 'top-4 sm:top-8 -left-2 sm:-left-8' :
                    i === 1 ? 'bottom-20 sm:bottom-24 -left-2 sm:-left-6' :
                    'bottom-4 sm:bottom-8 right-2 sm:-right-4'
                  } bg-white rounded-xl shadow-xl shadow-gray-200/50 p-3 sm:p-4 border border-gray-100 backdrop-blur-sm`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 ${stat.color} rounded-lg flex items-center justify-center`}>
                      <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-xl sm:text-2xl font-bold text-gray-900">{stat.value}</p>
                      <p className="text-xs text-gray-500">{stat.label}</p>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Decorative Elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-4 -right-4 w-16 h-16 border-4 border-green-200 rounded-full border-dashed"
              />
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-1/2 -right-6 w-3 h-3 bg-green-500 rounded-full"
              />
            </div>
          </motion.div>
        </div>

        {/* Trust Logos Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-16 md:mt-20 pt-8 border-t border-gray-200"
        >
          <p className="text-center text-sm text-gray-500 mb-6">Trusted by industry leaders</p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-50">
            {trustLogos.map((logo) => (
              <span key={logo.name} className="text-lg md:text-xl font-bold text-gray-400 hover:text-gray-600 transition-colors">
                {logo.name}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2"
        >
          <span className="text-xs text-gray-400">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown className="w-5 h-5 text-gray-400" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
