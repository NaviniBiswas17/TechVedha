'use client'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact-form" className="w-full bg-white py-10 md:py-14 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-green-500 font-semibold text-sm uppercase tracking-wider">Contact Us</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mt-2 md:mt-3 mb-3 md:mb-4">
              Let&apos;s Start Your IT Transformation
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Ready to modernize your infrastructure? Fill out the form and our team will get back to you within 24 hours.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-green-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Headquarters</h4>
                  <p className="text-gray-600 text-sm">123 Tech Plaza, Suite 500<br />San Francisco, CA 94105</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-green-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Phone</h4>
                  <p className="text-gray-600 text-sm">+1 (555) 123-4567<br />+1 (555) 987-6543</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-green-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Email</h4>
                  <p className="text-gray-600 text-sm">info@innovait.com<br />support@innovait.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-green-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Working Hours</h4>
                  <p className="text-gray-600 text-sm">Mon - Fri: 9:00 AM - 6:00 PM PST<br />24/7 Support Available</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-xl md:rounded-2xl p-5 md:p-6 lg:p-8"
          >
            <form className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all"
                  placeholder="john@company.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all"
                  placeholder="Your Company"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Service Interest</label>
                <select className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all bg-white">
                  <option>Select a service...</option>
                  <option>Cloud Solutions</option>
                  <option>Cybersecurity</option>
                  <option>Custom Development</option>
                  <option>IT Support</option>
                  <option>Data Management</option>
                  <option>Digital Transformation</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-green-500 text-white font-semibold py-3.5 rounded-lg hover:bg-green-600 transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-green-500/30"
              >
                Send Message
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
