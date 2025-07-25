import React from 'react'
const services = [
  {
    id: 1,
    name: "Ancient Wisdom",
    description:
      "Harnessing sacred Vedic knowledge and time-honored rituals to bring spiritual clarity, balance, and purpose to your life.",
    image: "https://i.pinimg.com/736x/89/93/cd/8993cde9408b47f751c7f268a2f98dfa.jpg",
  },
  {
    id: 2,
    name: "Compassionate Service",
    description:
      "Personalized spiritual support through traditional fire rituals, mantra healing, and empathetic guidance for emotional peace.",
    image: "https://i.pinimg.com/736x/0a/9b/df/0a9bdfd06ae830fb1d9c2cec30ce3936.jpg",
  },
  {
    id: 3,
    name: "Proven Results",
    description:
      "Blending scriptural insights with practical astrology to provide actionable guidance for success in relationships, career, and life.",
    image: "https://i.pinimg.com/736x/04/84/cf/0484cf4be799712f69f11aa91bc405bc.jpg",
  },
  {
    id: 4,
    name: "Guidance",
    description:
      "One-on-one spiritual mentorship to align your path with higher purpose, inner peace, and long-term fulfillment.",
    image: "https://i.pinimg.com/736x/f7/c7/ed/f7c7ed104575f1b60388e9506de1d002.jpg",
  },
];


const Section3 = () => {
  return (
     <section className="relative min-h-screen bg-white overflow-hidden py-16 px-4">
      {/* Starry background */}
      <div className="absolute inset-0">
        {/* Generate random stars */}
        {Array.from({ length: 100 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-60 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-cinzel text-[#b69066] uppercase tracking-wider mb-6">
            MY SERVICES
          </h2>
          <p className="text-black text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-poppins">
            Guiding You Through Ancient Vedic Practices, Personalized Rituals, and Proven Astrological Wisdom 
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {services.map((service) => (
            <div key={service.id} className="text-center group">
              {/* Service Image */}
              <div className="mb-6 flex justify-center">
                <div className="relative w-48 h-48 md:w-52 md:h-52 lg:w-56 lg:h-56">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.name}
                    className="w-full h-full object-cover rounded-full transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Service Name */}
              <h3 className="text-[#b69066] font-cinzel text-xl md:text-2xl uppercase tracking-wide mb-4">
                {service.name}
              </h3>

              {/* Service Description */}
              <p className="text-black text-sm md:text-base leading-relaxed max-w-xs mx-auto">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Section3
