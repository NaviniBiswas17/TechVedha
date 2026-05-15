'use client'
import { Mail, Phone, MapPin } from 'lucide-react'
import Image from 'next/image'

const footerLinks = {
  Company: ['About Us', 'Careers', 'Blog', 'Press'],
  Services: ['IT Consulting', 'Cloud Solutions', 'Cybersecurity', 'Support'],
  Resources: ['Documentation', 'Help Center', 'Community', 'Contact'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Compliance'],
}

export default function Footer() {
  return (
    <footer id="contact" className="w-full bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10 lg:py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8 mb-6 md:mb-8">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <div className="relative mb-4 h-16 w-44">
              <Image
                src="/logo.png"
                alt="InnovaIT logo"
                fill
                sizes="176px"
                className="object-contain object-left"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Delivering reliable IT solutions that drive efficiency, security, and long-term growth for businesses worldwide.
            </p>
            <div className="space-y-3">
              <a href="mailto:info@innovait.com" className="flex items-center gap-2 text-sm hover:text-green-400 transition-colors">
                <Mail className="w-4 h-4" />
                info@innovait.com
              </a>
              <a href="tel:+1234567890" className="flex items-center gap-2 text-sm hover:text-green-400 transition-colors">
                <Phone className="w-4 h-4" />
                +1 (234) 567-890
              </a>
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="w-4 h-4" />
                San Francisco, CA
              </div>
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-semibold text-white text-sm mb-4">{title}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-gray-400 hover:text-green-400 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} InnovaIT. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-gray-500 hover:text-green-400 transition-colors">Privacy</a>
            <a href="#" className="text-sm text-gray-500 hover:text-green-400 transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
