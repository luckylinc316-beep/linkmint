'use client'

const industries = [
  { icon: '🏠', name: 'Roofing' },
  { icon: '❄️', name: 'HVAC' },
  { icon: '🔧', name: 'Plumbing' },
  { icon: '⚡', name: 'Electrical' },
  { icon: '🌿', name: 'Landscaping' },
  { icon: '🏗️', name: 'Renovation' },
  { icon: '🪨', name: 'Concrete' },
  { icon: '🎨', name: 'Painting' },
]

export function Industries() {
  return (
    <section className="py-20 md:py-32 bg-gray-50">
      <div className="container max-w-screen-2xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Built For Home Service Businesses</h2>
          <p className="text-lg text-gray-600">
            Starting with trades, expanding to all local service industries
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {industries.map((industry) => (
            <div 
              key={industry.name}
              className="p-6 rounded-lg bg-white border border-gray-200 hover:border-blue-400 hover:shadow-md transition flex flex-col items-center justify-center gap-3 cursor-pointer"
            >
              <span className="text-4xl">{industry.icon}</span>
              <span className="text-sm font-semibold text-gray-700 text-center">{industry.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
