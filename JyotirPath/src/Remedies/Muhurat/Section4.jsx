import React from 'react'


const services = [
  {
    id: 1,
    title: "Rahu Kaal",
    description: "Compare your synastry and potential couple challenges.",
    image: "https://i.pinimg.com/1200x/32/c4/a5/32c4a573ac2b89d83ec8e6d7e24b8bf7.jpg",
    alt: "Meditation pose with chakra symbols",
  },
  {
    id: 2,
    title: "Yamaganda Kaal",
    description: "Unlock the secrets of your unique birth chart, including your Sun.",
    image: "https://i.pinimg.com/1200x/9c/09/7a/9c097a34d85a93a66be81303d934d5a5.jpg",
    alt: "Astrological birth chart with planetary positions",
  },
  {
    id: 3,
    title: "Void of Course Moon",
    description: "Helping you prepare for opportunities and challenges.",
    image: "https://i.pinimg.com/736x/49/60/c0/4960c083d55206b608a4f6f0d013c579.jpg",
    alt: "Tarot cards spread on wooden surface",
  },
  {
    id: 4,
    title: "Gulika Kaal",
    description: "Gain a deeper understanding of your personality traits, strengths.",
    image: "https://i.pinimg.com/1200x/ee/59/1a/ee591ae285440246842cf89c36d065bf.jpg",
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
            <div className="flex-1 bg-amber-700 flex items-center justify-center p-8">
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
