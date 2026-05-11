'use client'

import { motion } from 'framer-motion'
import { 
  Cloud, Shield, Code2, Database, Cpu, Globe, 
  Smartphone, Server, ArrowRight, CheckCircle2, 
  Zap, Lock, BarChart3, Users, MessageSquare,
  ChevronRight, Play, Star, TrendingUp, Award,
  Clock, Headphones, FileCheck, LineChart
} from 'lucide-react'
import Navbar from './Navbar'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 }
}

const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

const floatingStats = [
  { icon: TrendingUp, value: '99.9%', label: 'Uptime', color: 'bg-green-500' },
  { icon: Shield, value: '500+', label: 'Clients', color: 'bg-blue-500' },
  { icon: Clock, value: '24/7', label: 'Support', color: 'bg-purple-500' },
]

const mainServices = [
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    headline: 'Scale Without Limits',
    description: 'Transform your infrastructure with AWS, Azure, and Google Cloud. Reduce costs by 40% while improving scalability and reliability.',
    features: ['Cloud Migration', 'Hybrid Cloud Setup', 'Cloud Security', 'Cost Optimization', '24/7 Monitoring'],
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
    color: 'from-blue-500 to-cyan-500',
    stats: { value: '40%', label: 'Cost Reduction' }
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    headline: 'Zero-Trust Security',
    description: 'Protect your business from evolving cyber threats. Enterprise-grade security that keeps your data safe 24/7/365.',
    features: ['Threat Detection', 'Penetration Testing', 'Security Audits', 'Compliance Management', 'Incident Response'],
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80',
    color: 'from-red-500 to-orange-500',
    stats: { value: '99.9%', label: 'Threat Blocked' }
  },
  {
    icon: Code2,
    title: 'Custom Software',
    headline: 'Built for Your Success',
    description: 'Tailored software solutions that solve your unique business challenges. From concept to deployment, we deliver excellence.',
    features: ['Web Applications', 'Enterprise Software', 'API Development', 'Legacy Modernization', 'Quality Assurance'],
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80',
    color: 'from-green-500 to-emerald-500',
    stats: { value: '500+', label: 'Projects Delivered' }
  },
  {
    icon: Database,
    title: 'Data & AI Solutions',
    headline: 'Turn Data Into Gold',
    description: 'Unlock the power of your data with AI and machine learning. Make smarter decisions with predictive analytics.',
    features: ['Data Analytics', 'Machine Learning', 'Business Intelligence', 'Data Engineering', 'AI Consulting'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    color: 'from-purple-500 to-pink-500',
    stats: { value: '3x', label: 'ROI Increase' }
  },
  {
    icon: Server,
    title: 'Managed IT Services',
    headline: 'Focus on Growth, Not IT',
    description: 'End-to-end IT management that lets you focus on what you do best. Proactive support that prevents problems before they happen.',
    features: ['24/7 Monitoring', 'Help Desk Support', 'Network Management', 'Backup & Recovery', 'IT Consulting'],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
    color: 'from-indigo-500 to-blue-500',
    stats: { value: '24/7', label: 'Support Available' }
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    headline: 'Apps That Engage',
    description: 'Native and cross-platform mobile apps that your customers love. From iOS to Android, we build experiences that drive results.',
    features: ['iOS Development', 'Android Apps', 'React Native', 'Flutter Apps', 'App Maintenance'],
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80',
    color: 'from-teal-500 to-green-500',
    stats: { value: '1M+', label: 'App Downloads' }
  }
]

const additionalServices = [
  { icon: Globe, title: 'Web Development', desc: 'Modern, responsive websites that convert visitors into customers' },
  { icon: Cpu, title: 'DevOps & CI/CD', desc: 'Streamlined development pipelines for faster releases' },
  { icon: Zap, title: 'IT Consulting', desc: 'Strategic technology guidance for business growth' },
  { icon: Lock, title: 'Compliance Services', desc: 'GDPR, HIPAA, SOC2 compliance made simple' },
  { icon: BarChart3, title: 'Business Intelligence', desc: 'Dashboards and reports that drive decisions' },
  { icon: Users, title: 'IT Staff Augmentation', desc: 'Skilled developers and IT experts on demand' }
]

const whyChooseUs = [
  {
    icon: Award,
    title: 'Industry Expertise',
    desc: '15+ years delivering IT solutions across healthcare, finance, retail, and manufacturing'
  },
  {
    icon: Clock,
    title: 'Rapid Deployment',
    desc: 'Agile methodology ensures quick time-to-market without compromising quality'
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    desc: 'Round-the-clock support team always ready to help, with 2-minute response time'
  },
  {
    icon: FileCheck,
    title: 'Quality Assurance',
    desc: 'Rigorous testing and QA processes ensure bug-free, reliable solutions'
  },
  {
    icon: LineChart,
    title: 'Proven Results',
    desc: 'Track record of 40% cost reduction and 99.9% uptime for our clients'
  },
  {
    icon: MessageSquare,
    title: 'Clear Communication',
    desc: 'Regular updates, transparent pricing, and dedicated account managers'
  }
]

const processSteps = [
  {
    step: '01',
    title: 'Discovery',
    desc: 'We understand your business, challenges, and goals through in-depth consultation'
  },
  {
    step: '02',
    title: 'Strategy',
    desc: 'Our experts design a tailored solution roadmap aligned with your objectives'
  },
  {
    step: '03',
    title: 'Development',
    desc: 'Agile development with regular demos, feedback loops, and transparent progress'
  },
  {
    step: '04',
    title: 'Deployment',
    desc: 'Seamless launch with comprehensive testing, training, and documentation'
  },
  {
    step: '05',
    title: 'Support',
    desc: 'Ongoing maintenance, monitoring, and optimization for continuous improvement'
  }
]

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'CTO, TechVentures Inc',
    content: 'InnovaIT transformed our legacy infrastructure into a modern cloud setup. We saved 45% on IT costs and our team productivity increased by 60%.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80'
  },
  {
    name: 'Michael Roberts',
    role: 'Director of Operations, GlobalRetail',
    content: 'Their cybersecurity team blocked a major ransomware attack that could have cost us millions. The proactive monitoring is worth every penny.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80'
  },
  {
    name: 'Jennifer Park',
    role: 'CEO, HealthPlus Solutions',
    content: 'The custom healthcare app they built helped us serve 3x more patients. HIPAA compliance was handled perfectly. Highly recommend!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80'
  }
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      {/* Hero Section - Image Background */}
      <section className="relative w-full min-h-screen overflow-hidden">
        {/* Image Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1920&q=80"
            alt="Modern IT services workspace"
            className="absolute inset-0 h-full w-full object-cover"
          />
          
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
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
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="inline-flex items-center gap-2 w-fit bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 shadow-sm"
              >
                <Star className="w-4 h-4 text-green-400 fill-green-400" />
                <span className="text-xs sm:text-sm font-medium text-white/90">#1 Rated IT Services Provider</span>
              </motion.div>

              {/* Heading */}
              <div className="space-y-2">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight"
                >
                  Enterprise IT
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-500">
                    Solutions
                  </span>
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="text-xl sm:text-2xl text-white/80 font-light"
                >
                  That Drive Business Growth
                </motion.p>
              </div>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="text-white/70 text-base sm:text-lg leading-relaxed max-w-xl"
              >
                From cloud migration to custom software development, we deliver cutting-edge 
                technology that reduces costs, boosts efficiency, and scales your business.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <motion.a
                  href="/#contact-form"
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px -15px rgba(34, 197, 94, 0.4)" }}
                  whileTap={{ scale: 0.98 }}
                  className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-green-500/30 transition-all duration-300 text-lg"
                >
                  Get Free Consultation
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.a>
                <motion.a
                  href="/"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="group inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white font-semibold px-8 py-4 rounded-xl border-2 border-white/30 hover:border-green-400 hover:bg-white/20 shadow-sm transition-all duration-300"
                >
                  Back to Home
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Right: Floating Stats for Desktop */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hidden lg:flex relative items-center justify-center"
            >
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

          {/* Mobile Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="lg:hidden grid grid-cols-3 gap-3 mt-8"
          >
            {floatingStats.map((stat) => (
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
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">Our Services</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-3 mb-4">
              Solutions for Every Business Need
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Comprehensive IT services designed to accelerate your digital transformation 
              and drive measurable business results
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {mainServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="grid md:grid-cols-2 h-full">
                  <div className="relative h-64 md:h-full overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-60`} />
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="bg-white/20 backdrop-blur-md rounded-lg p-3 border border-white/30">
                        <div className="text-2xl font-bold text-white">{service.stats.value}</div>
                        <div className="text-sm text-white/90">{service.stats.label}</div>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 lg:p-8 flex flex-col">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-4`}>
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-green-600 font-semibold mb-3">{service.headline}</p>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">{service.description}</p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-gray-700">
                          <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <motion.a
                      href="#contact"
                      whileHover={{ x: 5 }}
                      className="inline-flex items-center gap-2 text-green-600 font-semibold group/link"
                    >
                      Learn More
                      <ChevronRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Additional Services</h2>
            <p className="text-gray-600">Specialized solutions to meet your unique requirements</p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {additionalServices.map((service, index) => (
              <motion.div
                key={service.title}
                variants={fadeInUp}
                className="group p-6 bg-gray-50 rounded-xl hover:bg-gradient-to-br hover:from-green-50 hover:to-blue-50 transition-all duration-300 border border-gray-100 hover:border-green-200"
              >
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-green-500 group-hover:scale-110 transition-all duration-300">
                  <service.icon className="w-6 h-6 text-green-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 lg:py-32 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,_#22c55e_0%,_transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,_#3b82f6_0%,_transparent_50%)]" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-green-400 font-semibold text-sm uppercase tracking-wider">Why InnovaIT</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-3 mb-4">
              The Partner You Can Trust
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              We don&apos;t just deliver projects — we deliver success
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">Our Process</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-3 mb-4">
              How We Deliver Excellence
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              A proven methodology that ensures successful project delivery every time
            </p>
          </motion.div>

          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 transform -translate-y-1/2" />
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 relative z-10">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-4">
                      <span className="text-white font-bold">{step.step}</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600 text-sm">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">Testimonials</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-3 mb-4">
              Trusted by Industry Leaders
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-8 border border-gray-100"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">&quot;{testimonial.content}&quot;</p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-green-600 to-green-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.4%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" />
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-green-100 text-lg mb-8 max-w-2xl mx-auto">
              Get a free consultation and discover how our IT solutions can save you money, 
              boost productivity, and accelerate growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 bg-white text-green-700 font-bold px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 text-lg shadow-xl"
              >
                Schedule Free Consultation
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="tel:+1234567890"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 bg-green-500 text-white font-semibold px-8 py-4 rounded-xl border-2 border-white/30 hover:bg-green-400 transition-all duration-300"
              >
                Call Us Now
              </motion.a>
            </div>
            <p className="text-green-200 text-sm mt-6">
              No commitment required. 100% free assessment.
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
