import React from 'react'
import img from '../../Images/circle.png'

const Section3 = () => {
  return (
<section className="w-full bg-stone-50 relative overflow-hidden border-b border-[#C89B6D]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 min-h-[750px]">
          {/* Left Column - Content */}
          <div className="flex flex-col justify-center py-16 lg:py-24 pr-0 lg:pr-12 z-10 relative ">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-5xl font-medium font-cinzel leading-tight mb-8 text-[#C89B6D]">
              What is Vedic Astrology?
            </h1>

            <p className="text-lg md:text-xl leading-relaxed mb-12 font-cinzel max-w-lg text-[#666666]">
             
             Vedic astrology, also known as Jyotisha, is the ancient Indian system of astrology that has been practiced for over 5,000 years. Unlike Western astrology, Vedic astrology uses the sidereal zodiac and incorporates
              unique techniques for precise predictions and spiritual guidance. <br />
              Our comprehensive astrological analysis examines your birth chart (Kundali) to reveal insights about your personality, relationships, career, health, and spiritual path. We use traditional calculation methods combined
               with modern interpretation techniques for maximum accuracy.
            </p>

          
          </div>

          {/* Right Column - Planet Images */}
          <div className="relative lg:absolute lg:right-0 lg:top-0 lg:w-1/2 lg:h-full flex items-center justify-end">
            {/* Main Venus Image */}
            <div className="relative w-full h-full">
              <img
                src="https://i.pinimg.com/736x/99/2a/bc/992abc1a4b10a2abc4ad1bde03d53d2d.jpg"
                alt="Venus planet with cratered surface"
                className="w-[500px] h-[700px] object-cover  translate-y-8 translate-x-28 "
              />

              {/* Secondary Image - Positioned as overlay */}
              <div className="absolute top-40 left-40 w-32 h-32 md:w-40 md:h-40 lg:w-[450px] lg:h-[600px]  ">
               {/*
                <img
                  src=""
                  alt="Venus atmospheric view"
                  className="w-full h-full object-cover rounded-sm shadow-lg"
                />
                 */}
                <div className="absolute -top-20 -right-20 w-12 h-12 md:w-[200px] md:h-[200px] animate-spin-slow ">
                 <img src="" alt="" className='' />
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
