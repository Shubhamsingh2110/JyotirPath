import React from 'react'
import img from './Educationimages/image.png'
import img1 from './Educationimages/flower.png'
import img2 from './Educationimages/chain.png'
import img3 from './Educationimages/lotushand.png'

const Section3 = () => {
    const services = [
    {
    title: "Saraswati Puja",
    description: "Invoke the blessings of Goddess Saraswati for wisdom.",
    image: img,
    alt: "Astrology compass symbol",
  },
  {
    title: "Mercury Strengthening",
    description: "Enhance communication, intelligence, and decision making through rituals.",
    image: img1,
    alt: "Tarot moon symbol",
  },
  {
    title: "Vidya Mantras",
    description: "Chant powerful mantras to improve concentration and memory.",
    image: img2,
    alt: "Yin yang relationship symbol",
  },
  {
    title: "Success Rituals",
    description: "Perform sacred rituals to attract prosperity and remove obstacles.",
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
            <h3 className="text-xl font-semibold text-blue-300 tracking-wide font-cinzel">{service.title}</h3>
            <p className="text-sm text-gray-600 leading-relaxed max-w-[200px] ">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
    
  )
}

export default Section3
