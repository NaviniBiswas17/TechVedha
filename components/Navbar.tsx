'use client'
import { motion } from 'framer-motion'
import { Shield } from 'lucide-react'

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#all-services' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'About', href: '#about' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Contact', href: '#contact-form' },
]

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 md:h-16">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-9 h-9 bg-green-500 rounded-lg flex items-center justify-center transition-transform group-hover:scale-105">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-gray-900 text-lg">InnovaIT</span>
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link, i) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    i === 0
                      ? 'text-gray-900 border-b-2 border-green-500 pb-1'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="hidden sm:flex bg-green-500 text-white text-sm font-semibold px-4 md:px-6 py-2 md:py-2.5 rounded-lg hover:bg-green-600 transition-colors duration-200 shadow-sm"
          >
            Contact Us
          </motion.a>
        </div>
      </div>
    </motion.nav>
  )
}
