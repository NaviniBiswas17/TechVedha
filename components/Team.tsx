'use client'
import { motion } from 'framer-motion'
import { Linkedin, Twitter, Mail } from 'lucide-react'

const team = [
  {
    name: 'James Wilson',
    role: 'CEO & Founder',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80',
    bio: '20+ years in IT leadership, former CTO at Fortune 500 companies.',
    social: { linkedin: '#', twitter: '#', email: 'james@innovait.com' },
  },
  {
    name: 'Sarah Chen',
    role: 'Chief Technology Officer',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
    bio: 'Cloud architecture expert with AWS and Azure certifications.',
    social: { linkedin: '#', twitter: '#', email: 'sarah@innovait.com' },
  },
  {
    name: 'Michael Roberts',
    role: 'Head of Cybersecurity',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
    bio: 'Former NSA security analyst, CISSP certified security expert.',
    social: { linkedin: '#', twitter: '#', email: 'michael@innovait.com' },
  },
  {
    name: 'Emily Davis',
    role: 'Director of Operations',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80',
    bio: 'MBA with expertise in scaling IT operations globally.',
    social: { linkedin: '#', twitter: '#', email: 'emily@innovait.com' },
  },
]

export default function Team() {
  return (
    <section id="about" className="w-full bg-gray-50 py-10 md:py-14 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-10"
        >
          <span className="text-green-500 font-semibold text-sm uppercase tracking-wider">Our Team</span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mt-2 md:mt-3">
            Meet the Experts Behind InnovaIT
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Our leadership team brings decades of combined experience in enterprise IT, cybersecurity, and cloud solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 flex justify-center gap-3">
                    <a href={member.social.linkedin} className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                      <Linkedin className="w-5 h-5 text-white" />
                    </a>
                    <a href={member.social.twitter} className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                      <Twitter className="w-5 h-5 text-white" />
                    </a>
                    <a href={`mailto:${member.social.email}`} className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                      <Mail className="w-5 h-5 text-white" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-3 md:p-4">
                <h3 className="font-bold text-gray-900 text-lg">{member.name}</h3>
                <p className="text-green-500 text-sm font-medium mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
