'use client'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

const faqs = [
  {
    question: 'How quickly can you implement IT solutions for my business?',
    answer: 'Implementation timelines vary based on project scope. Simple cloud migrations can be completed in 1-2 weeks, while comprehensive enterprise solutions typically take 4-8 weeks. We provide detailed timelines during the consultation phase and work to minimize disruption to your operations.',
  },
  {
    question: 'Do you offer 24/7 technical support?',
    answer: 'Yes! Our Business and Enterprise plans include 24/7 priority support with guaranteed 15-minute response times for critical issues. Our Starter plan includes business hours support (9 AM - 6 PM) with next-business-day response for non-urgent matters.',
  },
  {
    question: 'Can you help with cybersecurity compliance?',
    answer: 'Absolutely. We help businesses achieve compliance with SOC 2, ISO 27001, HIPAA, PCI DSS, and other industry standards. Our team performs security audits, implements required controls, and provides ongoing monitoring to maintain compliance.',
  },
  {
    question: 'What cloud platforms do you work with?',
    answer: 'We are certified partners with AWS, Microsoft Azure, and Google Cloud Platform. Our team can help you choose the right platform for your needs, migrate existing infrastructure, optimize costs, and manage multi-cloud environments.',
  },
  {
    question: 'Do you provide training for our team?',
    answer: 'Yes, comprehensive training is included with all our implementations. We offer on-site training, virtual workshops, documentation, and video tutorials. Enterprise clients also receive ongoing training sessions as part of their engagement.',
  },
  {
    question: 'What is your disaster recovery process?',
    answer: 'We implement comprehensive backup and disaster recovery solutions tailored to your RTO (Recovery Time Objective) and RPO (Recovery Point Objective) requirements. This includes automated daily backups, redundant systems, and documented recovery procedures tested regularly.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="w-full bg-gray-50 py-10 md:py-14 lg:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-10"
        >
          <span className="text-green-500 font-semibold text-sm uppercase tracking-wider">FAQ</span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mt-2 md:mt-3">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Get answers to common questions about our IT services and solutions.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-xl shadow-sm overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-4 md:p-5 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === i ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <motion.div
                initial={false}
                animate={{ height: openIndex === i ? 'auto' : 0, opacity: openIndex === i ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="px-5 pb-5 text-gray-600 leading-relaxed">{faq.answer}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
