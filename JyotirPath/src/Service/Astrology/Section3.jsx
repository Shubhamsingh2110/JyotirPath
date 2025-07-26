import React from 'react'
import img from '../../Images/circle.png'

const Section3 = () => {
  return (
<section className="w-full bg-stone-50 relative overflow-hidden border-b border-[#C89B6D]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:grid lg:grid-cols-2 min-h-[600px] md:min-h-[750px] lg:min-h-[750px]">
          {/* Left Column - Content */}
          <div className="flex flex-col justify-center py-12 md:py-16 lg:py-24 pr-0 lg:pr-12 z-10 relative order-2 lg:order-1">
            <h1 className="text-3xl md:text-4xl lg:text-6xl xl:text-5xl font-medium font-cinzel leading-tight mb-6 md:mb-8 text-[#C89B6D]">
              What is Vedic Astrology?
            </h1>
            <div className="text-base md:text-lg lg:text-xl leading-relaxed mb-8 md:mb-12 font-cinzel max-w-none lg:max-w-lg text-[#666666] space-y-4 lg:space-y-0">
              <p className="lg:inline">
                Vedic astrology, also known as Jyotisha, is the ancient Indian system of astrology that has been
                practiced for over 5,000 years. Unlike Western astrology, Vedic astrology uses the sidereal zodiac and
                incorporates unique techniques for precise predictions and spiritual guidance.
              </p>
              <br className="hidden lg:inline" />
              <p className="lg:inline">
                Our comprehensive astrological analysis examines your birth chart (Kundali) to reveal insights about
                your personality, relationships, career, health, and spiritual path. We use traditional calculation
                methods combined with modern interpretation techniques for maximum accuracy.
              </p>
            </div>
          </div>

          {/* Right Column - Planet Images */}
          <div className="relative flex items-center justify-center order-1 lg:order-2 lg:absolute lg:right-0 lg:top-0 lg:w-1/2 lg:h-full lg:flex lg:items-center lg:justify-end py-8 lg:py-0">
            {/* Main Venus Image */}
            <div className="relative w-full h-full">
              <img
                src="https://i.pinimg.com/736x/99/2a/bc/992abc1a4b10a2abc4ad1bde03d53d2d.jpg"
                alt="Venus planet with cratered surface"
                className="w-64 h-80 md:w-80 md:h-96 lg:w-[500px] lg:h-[700px] object-cover mx-auto lg:mx-0 lg:translate-y-8 lg:translate-x-28"
              />

              {/* Secondary Image - Positioned as overlay */}
              <div className="absolute top-16 left-16 md:top-20 md:left-20 lg:top-40 lg:left-40 w-24 h-24 md:w-32 md:h-32 lg:w-[450px] lg:h-[600px]">
                {/* Placeholder for secondary image */}
                <div className="absolute -top-8 -right-8 md:-top-12 md:-right-12 lg:-top-20 lg:-right-20 w-8 h-8 md:w-12 md:h-12 lg:w-[200px] lg:h-[200px] animate-spin-slow">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section3
