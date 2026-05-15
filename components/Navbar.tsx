'use client'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const navLinks = [
  { name: 'Home', href: '/', type: 'page' },
  { name: 'Services', href: '/services', type: 'page' },
  { name: 'Pricing', href: '/pricing', type: 'page' },
  { name: 'About', href: '/about', type: 'page' },
  { name: 'FAQ', href: '/faq', type: 'page' },
  { name: 'Contact', href: '/contact', type: 'page' },
  { name: 'Admin', href: '/admin/login', type: 'page' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const isLinkActive = (href: string, type: string) => {
    if (type !== 'page') return false
    return pathname === href
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    
    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check initial position
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid h-20 grid-cols-[auto_1fr_auto] items-center gap-4 md:h-16 lg:grid-cols-[1fr_auto_1fr]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 justify-self-start group">
            <div className="relative h-20 w-44 rounded-lg transition-transform group-hover:scale-105 md:h-16 md:w-40">
              <Image
                src={scrolled ? '/logo2.png' : '/logo.png'}
                alt="InnovaIT logo"
                fill
                sizes="(min-width: 768px) 160px, 176px"
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden items-center justify-center gap-6 lg:flex xl:gap-8">
            {navLinks.map((link) => {
              const isActive = isLinkActive(link.href, link.type)
              return (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={`text-sm font-medium transition-colors duration-300 ${
                      scrolled 
                        ? isActive
                          ? 'text-gray-900 border-b-2 border-green-500 pb-1'
                          : 'text-gray-600 hover:text-gray-900'
                        : isActive
                          ? 'text-white border-b-2 border-green-400 pb-1'
                          : 'text-white/80 hover:text-white'
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              )
            })}
          </ul>

          <div className="flex items-center justify-end gap-2 justify-self-end sm:gap-3">
            {/* CTA Button */}
            <Link href="/contact">
              <motion.span
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={`hidden sm:flex text-sm font-semibold px-4 md:px-5 py-2 md:py-2.5 rounded-lg transition-all duration-300 cursor-pointer ${
                  scrolled 
                    ? 'bg-green-500 text-white hover:bg-green-600 shadow-sm' 
                    : 'bg-white text-gray-900 hover:bg-green-50'
                }`}
              >
                Contact Us
              </motion.span>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors duration-300 ${
                scrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
              }`}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`lg:hidden py-4 border-t ${
              scrolled ? 'bg-white border-gray-100' : 'bg-black/50 backdrop-blur-md border-white/10'
            }`}
          >
              <ul className="flex flex-col gap-2 px-4">
              {navLinks.map((link) => {
                const isActive = isLinkActive(link.href, link.type)
                return (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block py-2 text-sm font-medium transition-colors duration-300 ${
                        scrolled 
                          ? isActive
                            ? 'text-green-600 bg-gray-50' 
                            : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50' 
                          : isActive
                            ? 'text-green-400 bg-white/10'
                            : 'text-white/90 hover:text-white hover:bg-white/10'
                      } rounded-lg px-2`}
                    >
                      {link.name}
                    </Link>
                  </li>
                )
              })}
              <li className="pt-2">
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block py-2.5 text-center text-sm font-semibold rounded-lg ${
                    scrolled 
                      ? 'bg-green-500 text-white hover:bg-green-600' 
                      : 'bg-white text-gray-900 hover:bg-green-50'
                  }`}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}
