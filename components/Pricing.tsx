'use client'
import { motion } from 'framer-motion'
import { Check, Sparkles } from 'lucide-react'

const plans = [
  {
    name: 'Starter',
    price: '999',
    period: '/month',
    description: 'Perfect for small businesses getting started',
    features: [
      'Up to 25 users',
      'Basic cloud setup',
      'Business hours support',
      'Monthly security scans',
      'Data backup (weekly)',
      'Email support',
    ],
    popular: false,
  },
  {
    name: 'Business',
    price: '2,499',
    period: '/month',
    description: 'Ideal for growing companies',
    features: [
      'Up to 100 users',
      'Advanced cloud infrastructure',
      '24/7 priority support',
      'Weekly security scans',
      'Data backup (daily)',
      'Phone & email support',
      'Dedicated account manager',
      'Monthly performance reports',
    ],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For large organizations with complex needs',
    features: [
      'Unlimited users',
      'Custom architecture design',
      '24/7 dedicated support team',
      'Real-time security monitoring',
      'Continuous data backup',
      'On-site support available',
      'Strategic IT consulting',
      'Custom SLA agreements',
      'Disaster recovery planning',
    ],
    popular: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="w-full bg-white py-10 md:py-14 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-10"
        >
          <span className="text-green-500 font-semibold text-sm uppercase tracking-wider">Pricing</span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mt-2 md:mt-3">
            Transparent Pricing Plans
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Choose the plan that fits your business. All plans include our core IT services with no hidden fees.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 lg:gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className={`relative rounded-xl md:rounded-2xl p-5 md:p-6 lg:p-7 ${
                plan.popular
                  ? 'bg-gradient-to-b from-green-500 to-green-600 text-white shadow-xl shadow-green-500/30'
                  : 'bg-gray-50 text-gray-900 hover:shadow-lg transition-shadow'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-yellow-400 text-yellow-900 text-xs font-bold px-4 py-1 rounded-full flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className={`text-xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm ${plan.popular ? 'text-green-100' : 'text-gray-500'}`}>
                  {plan.description}
                </p>
              </div>

              <div className="mb-6">
                <span className={`text-4xl lg:text-5xl font-bold ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                  ${plan.price}
                </span>
                <span className={plan.popular ? 'text-green-100' : 'text-gray-500'}>{plan.period}</span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.popular ? 'text-green-200' : 'text-green-500'}`} />
                    <span className={`text-sm ${plan.popular ? 'text-green-50' : 'text-gray-600'}`}>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="/#contact-form"
                className={`block text-center font-semibold py-3 rounded-lg transition-all duration-200 ${
                  plan.popular
                    ? 'bg-white text-green-600 hover:bg-gray-100'
                    : 'bg-green-500 text-white hover:bg-green-600'
                }`}
              >
                {plan.price === 'Custom' ? 'Contact Sales' : 'Get Started'}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
