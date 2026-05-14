'use client'

import { motion } from 'framer-motion'
import {
  ArrowRight,
  Award,
  CheckCircle2,
  HeartHandshake,
  Lightbulb,
  Shield,
  Sparkles,
  Target,
} from 'lucide-react'
import Navbar from './Navbar'
import Team from './Team'

const values = [
  {
    icon: Shield,
    title: 'Trust Built In',
    description: 'We design every engagement around reliability, security, and clear accountability from day one.',
  },
  {
    icon: Lightbulb,
    title: 'Practical Innovation',
    description: 'Modern solutions matter only when they solve real business problems and improve daily work.',
  },
  {
    icon: HeartHandshake,
    title: 'Partnership First',
    description: 'Our team works like an extension of yours, aligning technology decisions with long-term business goals.',
  },
]

const highlights = [
  { value: '500+', label: 'Businesses Supported' },
  { value: '99.9%', label: 'Average Uptime' },
  { value: '15+', label: 'Years of Experience' },
  { value: '24/7', label: 'Expert Support' },
]

const milestones = [
  {
    year: '2010',
    title: 'Founded with a mission',
    description: 'InnovaIT started with one goal: make enterprise-grade IT guidance accessible to growing businesses.',
  },
  {
    year: '2016',
    title: 'Cloud transformation focus',
    description: 'We expanded into cloud migration and managed infrastructure services to help clients scale faster.',
  },
  {
    year: '2021',
    title: 'Security-led expansion',
    description: 'Cybersecurity, compliance, and resilient operations became a core part of every client engagement.',
  },
  {
    year: 'Today',
    title: 'A strategic technology partner',
    description: 'We help ambitious teams modernize systems, reduce risk, and build tech foundations that last.',
  },
]

const promises = [
  'Clear communication and transparent planning',
  'Scalable systems that grow with your business',
  'Fast support with measurable operational impact',
  'Security-first delivery across every service line',
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section className="relative overflow-hidden bg-gray-950">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1920&q=80"
            alt="InnovaIT team collaborating"
            className="h-full w-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/55" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,197,94,0.22),_transparent_30%)]" />
        </div>

        <div className="relative mx-auto flex min-h-[88vh] max-w-7xl items-center px-4 pb-16 pt-24 sm:px-6 lg:px-8 lg:pt-28">
          <div className="grid w-full items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-2xl"
            >
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-sm">
                <Sparkles className="h-4 w-4 text-green-400" />
                <span className="text-sm font-medium text-white/90">15+ Years of Enterprise Excellence</span>
              </div>

              <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                Your Trusted Technology
                <span className="block bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                  Partner for Growth
                </span>
              </h1>

              <p className="mt-5 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
                With a commitment to reliability, security, and measurable business impact, we've helped 500+ organizations modernize their IT infrastructure. 
                Our team of certified experts ensures your technology works harder so you can focus on growth.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <motion.a
                  href="/#contact-form"
                  whileHover={{ scale: 1.04, boxShadow: '0 20px 40px -15px rgba(34, 197, 94, 0.45)' }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-green-500 to-green-600 px-7 py-4 text-base font-bold text-white shadow-lg shadow-green-500/25 transition-all duration-300"
                >
                  Start a Conversation
                  <ArrowRight className="h-5 w-5" />
                </motion.a>
                <motion.a
                  href="/services"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center rounded-xl border-2 border-white/25 bg-white/10 px-7 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-green-400 hover:bg-white/15"
                >
                  Explore Services
                </motion.a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="grid gap-4 sm:grid-cols-2"
            >
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur-md shadow-xl shadow-black/20"
                >
                  <p className="text-4xl font-bold text-white">{item.value}</p>
                  <p className="mt-2 text-sm text-white/70">{item.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-semibold uppercase tracking-wider text-green-600">Our Story</span>
            <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
              Technology should create momentum, not friction.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-gray-600">
              Many businesses outgrow their systems before they outgrow their ambition. That creates
              slow processes, security gaps, and teams that spend more time fighting tools than serving customers.
            </p>
            <p className="mt-4 text-base leading-relaxed text-gray-600">
              InnovaIT exists to change that. We help organizations simplify operations, strengthen
              resilience, and invest in technology with clarity. Our work is not just about deploying
              software or maintaining infrastructure. It is about building confidence into the way a company runs.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {promises.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-xl bg-gray-50 px-4 py-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
                  <p className="text-sm text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-gray-50 p-6 shadow-sm sm:p-8"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100">
                <Target className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-green-600">Our Mission</p>
                <h3 className="text-2xl font-bold text-gray-900">Help teams move forward faster</h3>
              </div>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-gray-600">
              We create secure, scalable, and human-centered IT environments that unlock better focus,
              faster decisions, and stronger growth for the people using them every day.
            </p>

            <div className="mt-8 space-y-4">
              {values.map((value) => (
                <div key={value.title} className="rounded-2xl border border-gray-100 bg-white p-5">
                  <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-green-50">
                    <value.icon className="h-5 w-5 text-green-600" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900">{value.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 text-center"
          >
            <span className="text-sm font-semibold uppercase tracking-wider text-green-600">Why Companies Choose Us</span>
            <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
              A better experience from strategy to support
            </h2>
          </motion.div>

          <div className="grid gap-6 lg:grid-cols-3">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-green-100">
                  <value.icon className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{value.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 text-center"
          >
            <span className="text-sm font-semibold uppercase tracking-wider text-green-600">Our Journey</span>
            <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
              Built through experience, refined through outcomes
            </h2>
          </motion.div>

          <div className="grid gap-6 lg:grid-cols-4">
            {milestones.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="rounded-2xl bg-gray-50 p-6"
              >
                <div className="mb-4 inline-flex rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">
                  {item.year}
                </div>
                <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Team />

      <section className="bg-gradient-to-br from-green-600 to-green-700 py-16 lg:py-20">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15">
              <Award className="h-7 w-7 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Looking for a team that cares about the outcome as much as the technology?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-green-50">
              Let&apos;s design an IT foundation that supports your people, protects your business,
              and gives you room to grow with confidence.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <motion.a
                href="/#contact-form"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-4 text-base font-bold text-green-700 transition-all duration-300 hover:bg-gray-100"
              >
                Talk to Our Team
                <ArrowRight className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="/pricing"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center rounded-xl border-2 border-white/30 px-7 py-4 text-base font-semibold text-white transition-all duration-300 hover:bg-white/10"
              >
                Explore Pricing
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
