import React from 'react'

const Section5 = () => {
const testimonials = [
  {
    name: "Aishwarya Nair",
    role: "Business man",
    image: "https://i.pinimg.com/736x/2b/4a/0b/2b4a0b51b6b1d5a0d51edadfe685a7b3.jpg",
    message:
      "I was at a turning point in my career and felt quite uncertain. The astrology session gave me clarity and direction, helping me make the right choices with confidence.",
  },
  {
    name: "Ritika Mehra",
    role: "Classical Dancer",
    image: "https://i.pinimg.com/736x/42/a9/26/42a926ee907ca29cdb5dc8c7bfdf6582.jpg",
    message:
      "Numerology opened a new perspective for me. I never thought numbers could connect so deeply with my journey, but it truly reflected my life path.",
  },
  {
    name: "Sneha Kulkarni",
    role: "Creative Director",
    image: "https://i.pinimg.com/736x/a3/ae/ac/a3aeac1628cd4e9b4ead5dc43864e813.jpg",
    message:
      "At first, I was a little doubtful, but the consultation explained so much about my nature, strengths, and challenges. It felt very personal and meaningful.",
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
