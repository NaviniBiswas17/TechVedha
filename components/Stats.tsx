'use client'
import { motion } from 'framer-motion'
import { Trophy, Users, FolderOpen, Headphones } from 'lucide-react'

const stats = [
  { icon: Trophy, value: '10+', label: 'Years Experience', color: 'text-yellow-500', bgColor: 'bg-yellow-50' },
  { icon: Users, value: '500+', label: 'Satisfied Clients', color: 'text-blue-500', bgColor: 'bg-blue-50' },
  { icon: FolderOpen, value: '1200+', label: 'Projects Delivered', color: 'text-green-500', bgColor: 'bg-green-50' },
  { icon: Headphones, value: '24/7', label: 'Support Available', color: 'text-purple-500', bgColor: 'bg-purple-50' },
]

export default function Stats() {
  return (
    <section className="w-full bg-gradient-to-b from-gray-50 to-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <div className={`w-16 h-16 rounded-2xl ${stat.bgColor} flex items-center justify-center mb-4`}>
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </div>
              <p className="text-3xl lg:text-4xl font-bold text-gray-900 mb-1">{stat.value}</p>
              <p className="text-gray-600 text-sm font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
