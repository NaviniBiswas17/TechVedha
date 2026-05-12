'use client'
import { motion } from 'framer-motion'
import { ArrowRight, Play, TrendingUp, Shield, Clock, CheckCircle, ChevronDown } from 'lucide-react'
import { useRef, useEffect } from 'react'

const floatingStats = [
  { icon: TrendingUp, value: '99.9%', label: 'Uptime', subtext: 'Guaranteed', color: 'bg-green-500' },
  { icon: Shield, value: '500+', label: 'Clients', subtext: 'Worldwide', color: 'bg-blue-500' },
  { icon: Clock, value: '24/7', label: 'Support', subtext: 'Always On', color: 'bg-purple-500' },
]

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    video.muted = true
    video.playsInline = true

    const attemptPlay = async () => {
      try {
        await video.play()
      } catch {
        // Some mobile browsers may delay autoplay until the media is ready.
      }
    }

    const handleCanPlay = () => {
      attemptPlay()
    }

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        attemptPlay()
      }
    }

    video.load()
    attemptPlay()

    video.addEventListener('loadedmetadata', handleCanPlay)
    video.addEventListener('canplay', handleCanPlay)
    document.addEventListener('visibilitychange', handleVisibilityChange)

    return () => {
      video.removeEventListener('loadedmetadata', handleCanPlay)
      video.removeEventListener('canplay', handleCanPlay)
      document.removeEventListener('visibilitychange', handleVisibilityChange)
    }
  }, [])

  return (
    <section id="home" className="relative w-full min-h-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80"
          className="absolute inset-0 h-full w-full object-cover object-center md:object-center"
        >
          <source src="/0_Video_Call_Conference_1920x1080 (1).mp4" type="video/mp4" />
        </video>
        
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/45 md:from-black/80 md:via-black/60 md:to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70" />
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
              className="inline-flex items-center gap-2 w-fit bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 shadow-sm"
            >
              <span className="flex items-center gap-1">
                <span className="text-green-400 font-bold">$2M+</span>
                <span className="text-xs sm:text-sm font-medium text-white/90">saved for clients this year</span>
              </span>
            </motion.div>

            {/* Main Heading with Animation */}
            <div className="space-y-2">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight"
              >
                Transform Your
                <br />
                <span className="relative inline-block">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-500">
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
                className="text-xl sm:text-2xl text-white/80 font-light"
              >
                with Enterprise IT Solutions
              </motion.p>
            </div>

            {/* Description - Value Proposition */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-white/70 text-base sm:text-lg leading-relaxed max-w-xl"
            >
              Stop wasting money on outdated systems. 500+ businesses trust us to slash downtime, 
              secure their data, and scale without headaches. Your competitors are already ahead — 
              <span className="text-green-400 font-semibold"> let&apos;s close that gap today.</span>
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
                className="group inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white font-semibold px-8 py-4 rounded-xl border-2 border-white/30 hover:border-green-400 hover:bg-white/20 shadow-sm transition-all duration-300"
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
                { icon: CheckCircle, text: 'Zero Downtime Guarantee', color: 'text-green-400' },
                { icon: CheckCircle, text: '24/7 Expert Support', color: 'text-green-400' },
                { icon: CheckCircle, text: '30-Day Money Back', color: 'text-green-400' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm font-medium text-white/90">
                  <item.icon className={`w-5 h-5 ${item.color}`} />
                  <span>{item.text}</span>
                </div>
              ))}
            </motion.div>

            {/* Mobile Stats Cards - Visible on mobile/tablet only */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="lg:hidden grid grid-cols-3 gap-3 pt-4"
            >
              {floatingStats.map((stat, i) => (
                <div
                  key={stat.label}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/20 text-center"
                >
                  <div className={`w-8 h-8 ${stat.color} rounded-lg flex items-center justify-center mx-auto mb-2`}>
                    <stat.icon className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-lg font-bold text-white">{stat.value}</p>
                  <p className="text-xs text-white/70">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Floating Stats for Desktop */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:flex relative items-center justify-center"
          >
            {/* Floating Stats Cards - Positioned Around Content */}
            <div className="relative w-full h-[400px]">
              {floatingStats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: 0.8 + i * 0.15, duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  className={`absolute ${
                    i === 0 ? 'top-0 left-0' :
                    i === 1 ? 'top-1/2 -translate-y-1/2 right-0' :
                    'bottom-0 left-1/4'
                  } bg-white/10 backdrop-blur-md rounded-xl shadow-xl p-4 sm:p-5 border border-white/20`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center shadow-lg`}>
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-white">{stat.value}</p>
                      <p className="text-sm text-white/70">{stat.label}</p>
                    </div>
                  </div>
                </motion.div>
              ))}

            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2"
        >
          <span className="text-xs text-white/50">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown className="w-5 h-5 text-white/50" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
