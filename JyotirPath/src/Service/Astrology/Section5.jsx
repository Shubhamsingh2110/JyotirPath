import React from 'react'

const Section5 = () => {
  const testimonials = [
    {
      name: "Aiyana Sharma",
      role: "Singer",
      image: "https://i.pinimg.com/736x/3f/f5/1c/3ff51c5a29586ab8a0dfc72d57fea179.jpg",
      message:
        "I was at a crossroads in my career and deeply confused. The astrology session helped me uncover patterns and guided me toward the right decisions.",
    },
    {
      name: "Judith Kapoor",
      role: "Dancer",
      image: "https://i.pinimg.com/736x/c4/e7/10/c4e7107f4b231612707e4231c5c3d9cf.jpg",
      message:
        "Numerology gave me a fresh perspective on my life path. I never realized how numbers could align so closely with my experiences.",
    },
    {
      name: "Sara Desai",
      role: "Creative Director",
      image: "https://i.pinimg.com/736x/a3/ae/ac/a3aeac1628cd4e9b4ead5dc43864e813.jpg",
      message:
        "I was skeptical at first, but the consultation revealed so much about my personality and challenges. Truly transformative.",
    },
  ]

  return (
    <div className="w-full bg-stone-100 border-t-[0.2px] border-b-[0.2px] border-[#C89B6D]">
      <div className="grid grid-cols-1 md:grid-cols-3 min-h-[350px]">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`relative p-8 flex flex-col justify-center items-center text-center ${
              index < 2 ? "border-r border-stone-200" : ""
            }`}
          >
            {/* Profile Photo */}
            <div className="w-24 h-24 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-white shadow-lg mb-6">
              <img
                src={testimonial.image || "/placeholder.svg"}
                alt={`${testimonial.name} profile`}
                className="object-cover w-full h-full object-top"
              />
            </div>

            {/* Testimonial Content */}
            <div className="space-y-8 max-w-[85%]">
              {/* Quote */}
              <blockquote className="text-lg md:text-xl font-light text-amber-900 leading-relaxed font">
                "{testimonial.message}"
              </blockquote>

              {/* Name and Role */}
              <div className="space-y-1">
                <div className="text-lg font-cinzel font-medium text-amber-900 tracking-wide">{testimonial.name}</div>
                <div className="text-sm font-medium text-amber-800 tracking-wider uppercase">{testimonial.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Section5
