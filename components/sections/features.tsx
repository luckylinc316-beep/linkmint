'use client'

import { Zap, TrendingUp, Target, BarChart3 } from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: 'AI Website Generation',
    description: 'Launch faster with AI-powered website generation tailored to your business.'
  },
  {
    icon: TrendingUp,
    title: 'Local SEO',
    description: 'Rank in your city with optimized pages for local search and service areas.'
  },
  {
    icon: Target,
    title: 'Lead Capture',
    description: 'Turn visitors into customers with smart forms and lead capture systems.'
  },
  {
    icon: BarChart3,
    title: 'CRM & Analytics',
    description: 'Track every lead, manage contacts, and measure what matters.'
  },
]

export function Features() {
  return (
    <section id="features" className="py-20 md:py-32 bg-white">
      <div className="container max-w-screen-2xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything You Need</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            All-in-one platform built specifically for local business success
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div key={feature.title} className="space-y-4 p-6 rounded-lg border border-gray-200 hover:border-blue-400 hover:shadow-lg transition">
                <Icon className="w-12 h-12 text-blue-600" />
                <h3 className="text-lg font-semibold">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
