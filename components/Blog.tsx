'use client'
import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowRight, User } from 'lucide-react'

const posts = [
  {
    title: '10 Cloud Migration Strategies for Enterprise Success',
    excerpt: 'Learn the proven strategies that have helped over 100 enterprises successfully migrate to the cloud with zero downtime.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
    category: 'Cloud',
    author: 'Sarah Chen',
    date: 'Jan 15, 2026',
    readTime: '8 min read',
  },
  {
    title: 'Cybersecurity Trends: What to Expect in 2026',
    excerpt: 'Stay ahead of emerging threats with our comprehensive analysis of the cybersecurity landscape for the coming year.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80',
    category: 'Security',
    author: 'Michael Roberts',
    date: 'Jan 10, 2026',
    readTime: '6 min read',
  },
  {
    title: 'Building Scalable Applications with Microservices',
    excerpt: 'A deep dive into microservices architecture and how it can help your business scale efficiently.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80',
    category: 'Development',
    author: 'Emily Davis',
    date: 'Jan 5, 2026',
    readTime: '10 min read',
  },
]

export default function Blog() {
  return (
    <section className="w-full bg-white py-10 md:py-14 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-8 md:mb-10"
        >
          <div>
            <span className="text-green-500 font-semibold text-sm uppercase tracking-wider">Insights</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mt-2 md:mt-3">
              Latest from Our Blog
            </h2>
            <p className="text-gray-600 mt-4 max-w-xl">
              Stay updated with the latest trends, insights, and best practices in IT and technology.
            </p>
          </div>
          <a
            href="#"
            className="mt-4 md:mt-0 inline-flex items-center gap-2 text-green-500 font-semibold hover:text-green-600 transition-colors"
          >
            View All Articles
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {posts.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="group bg-white border border-gray-100 rounded-xl md:rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div className="relative h-44 sm:h-48 md:h-52 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-4 md:p-5">
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-green-500 transition-colors line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {post.excerpt}
                </p>

                <div className="flex items-center gap-2 pt-4 border-t border-gray-100">
                  <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                    <User className="w-4 h-4 text-gray-500" />
                  </div>
                  <span className="text-sm text-gray-600">{post.author}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
