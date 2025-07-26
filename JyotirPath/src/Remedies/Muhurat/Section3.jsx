import React from 'react'
import img from './Muhuratimage/fire.png'
import img1 from './Muhuratimage/pot.png'
import img2 from './Muhuratimage/swastik.png'
import img3 from './Muhuratimage/handimg.png'


const Section3 = () => {
    const services = [
    {
    title: "Wedding Muhurat",
    description: "Find the most auspicious date and time for a blissful and harmonious marriage.",
    image: img,
    alt: "Astrology compass symbol",
  },
  {
    title: "Business Muhurat",
    description: "Choose a prosperous time to launch or expand your business ventures successfully.",
    image: img1,
    alt: "Tarot moon symbol",
  },
  {
    title: "Spiritual Muhurat",
    description: "Align your spiritual practices with cosmic energies for deeper inner growth.",
    image: img2,
    alt: "Yin yang relationship symbol",
  },
  {
    title: "Personal Muhurat",
    description: "Select favorable moments for personal milestones, ensuring positivity and success.",
    image: img3,
    alt: "Ancient rune symbol",
  },
  ]
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12 min-h-[400px]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col items-center text-center space-y-4">
            <div className="relative w-32 h-32">
              <img
                src={service.image || "/placeholder.svg"}
                alt={service.alt}
                fill
                className="object-contain filter sepia opacity-60"
              />
            </div>
            <h3 className="text-xl font-semibold text-amber-700 tracking-wide font-cinzel">{service.title}</h3>
            <p className="text-sm text-gray-600 leading-relaxed max-w-[200px] ">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
    
  )
}

export default Section3
