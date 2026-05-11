'use client'
import { motion } from 'framer-motion'

const partners = [
  { name: 'Microsoft', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg' },
  { name: 'AWS', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg' },
  { name: 'Google Cloud', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg' },
  { name: 'Salesforce', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg' },
  { name: 'Oracle', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg' },
  { name: 'IBM', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg' },
]

export default function Partners() {
  return (
    <section className="w-full bg-white py-8 md:py-10 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-gray-500 mb-4 md:mb-6"
        >
          Trusted Technology Partners
        </motion.p>
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 lg:gap-12">
          {partners.map((partner, i) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-6 md:h-8 w-auto object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
