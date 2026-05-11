'use client'
import { motion } from 'framer-motion'
import { Quote, Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'CTO',
    company: 'TechVenture Inc.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80',
    content: 'InnovaIT transformed our entire infrastructure. Their cloud migration was seamless, and we have seen a 40% reduction in operational costs.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Operations Director',
    company: 'GlobalTrade Solutions',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
    content: 'The cybersecurity solutions they implemented have given us peace of mind. Their 24/7 monitoring caught and prevented several attacks.',
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    role: 'CEO',
    company: 'StartUp Hub',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80',
    content: 'Outstanding custom development team. They built our platform from scratch and delivered beyond our expectations. Highly recommended!',
    rating: 5,
  },
  {
    name: 'David Park',
    role: 'IT Manager',
    company: 'FinanceFlow Corp',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80',
    content: 'Their IT support team is incredibly responsive. Downtime has been virtually eliminated since we partnered with InnovaIT.',
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="w-full bg-white py-10 md:py-14 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-10"
        >
          <span className="text-green-500 font-semibold text-sm uppercase tracking-wider">Testimonials</span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mt-2 md:mt-3">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Trusted by 500+ businesses worldwide for their IT needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-gray-50 rounded-xl md:rounded-2xl p-4 md:p-5 relative"
            >
              <Quote className="w-8 h-8 text-green-200 absolute top-6 right-6" />
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">{testimonial.content}</p>
              <div className="flex gap-1">
                {[...Array(testimonial.rating)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
