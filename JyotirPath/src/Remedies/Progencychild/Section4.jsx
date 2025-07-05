import React from 'react'


const services = [
  {
    id: 1,
    title: "Astrological Compatibility",
    description: "Compare your synastry and potential couple challenges.",
    image: "https://images.pexels.com/photos/9346141/pexels-photo-9346141.jpeg",
    alt: "Meditation pose with chakra symbols",
  },
  {
    id: 2,
    title: "Birth Chart Astrology",
    description: "Unlock the secrets of your unique birth chart, including your Sun.",
    image: "https://images.pexels.com/photos/2995347/pexels-photo-2995347.jpeg",
    alt: "Astrological birth chart with planetary positions",
  },
  {
    id: 3,
    title: "Annual Horoscope",
    description: "Helping you prepare for opportunities and challenges.",
    image: "https://images.pexels.com/photos/5119602/pexels-photo-5119602.jpeg",
    alt: "Tarot cards spread on wooden surface",
  },
  {
    id: 4,
    title: "Sun Sign Personality",
    description: "Gain a deeper understanding of your personality traits, strengths.",
    image: "https://images.pexels.com/photos/3901903/pexels-photo-3901903.jpeg",
    alt: "Zodiac wheel with sun symbol in center",
  },
]

const Section4 = () => {
    
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {services.map((service) => (
          <div key={service.id} className="flex flex-col md:flex-row h-[400px]">
            {/* Image Section */}
            <div className="flex-1 relative overflow-hidden">
              <img
                src={service.image || "/placeholder.svg"}
                alt={service.alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500 w-full h-full"
              />
            </div>

            {/* Info Section */}
            <div className="flex-1 bg-rose-900 flex items-center justify-center p-8">
              <div className="text-center text-white space-y-4 max-w-xs">
                <h2 className="text-2xl font-light tracking-wide leading-tight font-cinzel">{service.title}</h2>

                <p className="text-gray-300 text-sm leading-relaxed">{service.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Section4
