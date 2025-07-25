import React from 'react'

 const testimonials = [
  {
    name: "Ancient Wisdom",
    role: "Vedic Astrology Expert",
    quote:
      "With over 20 years of experience, I help individuals uncover hidden energies through traditional Vedic methods to bring clarity and peace in their lives.",
    image: "https://sohinisastri.com/wp-content/uploads/2024/03/home-cover-subject-main.webp",
  },
  {
    name: "Compassionate Service",
    role: "Spiritual Healer & Astrologer",
    quote:
      "I combine astrology with intuitive healing to guide people through emotional, career, and relationship transitions with compassion and accuracy.",
    image: "https://www.astrospring.com/images/content/about/astro_img1.jpg",
  },
  {
    name: "Proven Results",
    role: "Modern Astrologer & Life Coach",
    quote:
      "My approach blends ancient wisdom with modern tools, offering practical and transformative insights to help clients make confident life decisions.",
    image: "https://www.kpjyotish.com/Abhay_Godse.jpg",
  },
];



const Section2 = () => {
  return (
   <section className="relative min-h-screen bg-white overflow-hidden py-20 px-4">
      {/* Starry Background */}
      <div className="absolute inset-0">
        {/* Generate random stars */}
        {Array.from({ length: 100 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Shooting Star Line */}
      <div className="absolute top-32 right-0 w-96 h-px bg-gradient-to-l from-transparent via-yellow-600 to-transparent transform rotate-12 opacity-80" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-cinzel text-[#b69066] mb-6 tracking-wider">
            Meet Our Expert Astrologers
          </h2>
          <p className="text-black text-lg md:text-xl max-w-2xl mx-auto font-poppins">
           Our team of certified practitioners brings decades of experience and authentic knowledge to every consultation
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
  {testimonials.map((testimonial, index) => (
    <div
      key={index}
      className="bg-white border-[0.2px] border-[#b69066] p-8 text-center relative min-h-[420px]"
    >
      {/* Profile Image */}
      <div className="mb-6 flex justify-center">
        <div className="relative">
          <img
            src={testimonial.image || "/placeholder.svg"}
            alt={testimonial.name}
            className="w-20 h-20 rounded-full object-cover"
          />
          {/* Dotted Border */}
          <div className="absolute inset-0 rounded-full border-2 border-dotted border-[#b69066] opacity-60" />
        </div>
      </div>

      {/* Quote */}
      <blockquote className="text-[#b69066] font-cinzel text-lg leading-relaxed mb-6">
        "{testimonial.quote}"
      </blockquote>

      {/* Name and Role */}
      <div className="text-black font-sans">
        <p className="font-medium">{testimonial.name}</p>
        <p className="text-sm opacity-80">{testimonial.role}</p>
      </div>
    </div>
  ))}
</div>

      </div>

      {/* Additional decorative elements */}
      <div className="absolute bottom-20 left-10 w-2 h-2 bg-yellow-400 rounded-full opacity-40 animate-pulse" />
      <div className="absolute top-40 left-1/4 w-1 h-1 bg-blue-400 rounded-full opacity-60" />
      <div className="absolute bottom-32 right-1/3 w-1.5 h-1.5 bg-purple-400 rounded-full opacity-50" />
    </section>
  )
}

export default Section2
