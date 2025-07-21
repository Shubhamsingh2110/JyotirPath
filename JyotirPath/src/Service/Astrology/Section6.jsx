import React from 'react'
import { Sparkles } from "lucide-react"
import img from '../../Images/saturn.png'
import img1 from '../../Images/bgrotate.png'

const Section6 = () => {
  return (
     <div className="min-h-[500px] md:min-h-[600px] lg:min-h-[700px] bg-gradient-to-br from-stone-50 to-amber-50 flex items-center justify-center p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center relative">
        {/* Left Content */}
        <div className="space-y-6 md:space-y-8 lg:pr-12 text-center lg:text-left order-2 lg:order-1">
          <div className="space-y-4 md:space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-medium text-[#C89B6D] leading-tight font-cinzel">
              CONSULTATION WITH VEDIC ASTROLOGER
              <br />
              <span className="text-[#C89B6D]"></span>
            </h1>

            <p className="text-stone-600 text-base md:text-lg leading-relaxed max-w-md mx-auto lg:mx-0">
               Gain powerful insights into your life's journey through ancient Vedic astrology. 
  Understand your birth chart, planetary influences, and receive personalized guidance 
  for health, career, relationships, and spiritual growth.
            </p>
          </div>

        </div>

        {/* Right Image */}
        <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end">
          {/* Decorative rotating element - hidden on mobile, visible on larger screens 
          <div className="absolute -top-10 md:-top-16 lg:-top-20 right-2 md:-right-20 w-32 h-32 md:w-48 md:h-48 lg:w-60 lg:h-60 rounded-full opacity-80 md:opacity-100 animate-spin-slow hidden sm:block">
            <img src={img1} alt="" />
          </div> */}

          {/* Main image container */}
          <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-xl md:shadow-2xl w-full max-w-[300px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[500px]">
            <img
              src="https://i.pinimg.com/736x/2e/94/10/2e94109a44c74ea86b84744fbc28eefd.jpg"
              alt="Magali Willms - Professional portrait"
              className="w-full h-[250px] sm:h-[280px] md:h-[320px] lg:h-[350px] object-cover object-center"
            />
          </div>

          {/* Additional decorative element - adjusted for mobile 
          <div className="absolute -bottom-6 md:-bottom-8 lg:-bottom-12 -left-8 md:-left-12 lg:-left-5 w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 rounded-full opacity-60 md:opacity-100 hidden sm:block">
            <img src={img} alt="" />
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default Section6
