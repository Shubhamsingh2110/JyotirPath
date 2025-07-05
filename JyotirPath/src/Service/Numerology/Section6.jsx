import React from 'react'
import img from '../../Images/numberimg4.jpg'

const Section6 = () => {
  return (
    <>
    <div className="relative min-h-[400px] bg-[#1C1C29] overflow-hidden">
      <div className="relative z-10 container mx-auto px-6 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-6">
            <div className="text-amber-400 text-sm font-medium tracking-wider uppercase font-cinzel">Gift Cards</div>

            <h1 className="text-4xl lg:text-5xl xl:text-5xl font-light font-cinzel text-white leading-tight">
              Free numerological express consultation
            </h1>

            <p className="text-slate-300 text-lg leading-relaxed max-w-lg">
              Discovering your life purpose through numbers is at the heart of numerology—a powerful ancient practice that reveals the hidden meaning behind your birth date and name. Each number holds a unique vibration and symbolism that can uncover your strengths, challenges, and spiritual path. By decoding these numbers, you gain deep insights into your personality, destiny, and the lessons you’re meant to learn in this lifetime.
            </p>

      
          </div>

          {/* Right side image */}
          <div className="relative flex items-center justify-center lg:justify-end">
            <div className="relative">
              <img
                src={img}
                alt="Numerology consultation"
                className="w-80 h-80 lg:w-[400px] lg:h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Section6
