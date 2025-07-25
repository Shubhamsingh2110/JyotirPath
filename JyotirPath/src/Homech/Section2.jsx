import React from 'react'
import { Gem, Sparkles } from "lucide-react"

const Section2 = () => {
  return (
    <>
    <section className="relative w-full py-8 md:py-16 px-4 md:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Mobile Layout */}
        <div className="block md:hidden space-y-8">
          {/* Mobile Header */}
          <div className="text-center space-y-4">
            <p className="text-sm italic text-gray-600 font-light tracking-wide">Tarot Insights</p>
            <h1 className="text-3xl font-serif font-light text-gray-900">
              Mysteries of Life
              <br />
              with a Star Guide
            </h1>
            <p className="text-base text-gray-600 leading-relaxed">
              Whether you seek guidance on love, career, or personal growth, each card drawn will bring clarity and
              wisdom. Connect with the ancient art of tarot and let the answers you seek come to light.
            </p>
          </div>

          {/* Mobile Images */}
          <div className="space-y-8">
            <div className="relative">
              <img
                src="https://i.pinimg.com/736x/d2/7e/f6/d27ef639fc1c82192ee757762daa4919.jpg"
                alt="Hand drawing tarot cards over an astrological chart"
                width={400}
                height={400}
                className="w-full h-64 rounded-r-[100px] object-cover mx-auto"
              />
            </div>

            <div className="relative">
              <img
                src="https://i.pinimg.com/736x/8e/17/2b/8e172baccea8f0fa4d1be3aea5556235.jpg"
                alt="Woman's hand on crystal ball"
                width={350}
                height={350}
                className="w-full h-64 rounded-tl-[100px] object-cover mx-auto"
              />
              <div className="text-center mt-4">
                <p className="font-serif text-2xl italic font-normal text-black">Mary Sunnibol</p>
              </div>
            </div>
          </div>

          {/* Mobile Statistics */}
          <div className="grid grid-cols-2 gap-8 mt-8">
            <div className="text-center space-y-2">
            </div>
             
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:grid grid-cols-12 gap-6 lg:gap-8 min-h-[600px] lg:min-h-[700px]">
          {/* Left Column - Tarot Cards Image */}
          <div className="col-span-4 flex flex-col items-center justify-start space-y-6 lg:space-y-8">
            <div className="relative w-full max-w-sm lg:max-w-md">
              <img
                src="https://i.pinimg.com/736x/d2/7e/f6/d27ef639fc1c82192ee757762daa4919.jpg"
                alt="Hand drawing tarot cards over an astrological chart"
                width={400}
                height={400}
                className="w-full h-72 lg:h-[700px] rounded-[120px] lg:rounded-[200px] object-cover transform translate-y-4 lg:translate-y-10"
              />
            </div>

            {/* Statistics under first image */}
            <div className="w-full space-y-4 lg:space-y-6 text-center transform translate-y-8 lg:translate-y-40">
              <div className="space-y-3 lg:space-y-4">
               </div>
            </div>
          </div>

          {/* Center Content */}
          <div className="col-span-4 flex flex-col justify-start space-y-4 lg:space-y-6 px-2 lg:px-8 text-left">
            {/* Subheading */}
            <p className="text-sm italic text-gray-600 font-light tracking-wide">Tarot Insights</p>

            {/* Main Heading */}
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-serif font-light text-gray-900 leading-tight">
              Mysteries of Life
              <br />
              with a Star Guide
            </h1>

            {/* Description */}
            <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
              Whether you seek guidance on love, career, or personal growth, each card drawn will bring clarity and
              wisdom. Connect with the ancient art of tarot and let the answers you seek come to light.
            </p>

            {/* Second Statistic */}
            <div className="space-y-3 lg:space-y-4 pt-6 lg:pt-8 text-center transform translate-y-16 lg:translate-y-28"></div>
          </div>

          {/* Right Column - Crystal Ball Image */}
          <div className="col-span-4 flex items-start justify-center pt-8 lg:pt-16">
            <div className="relative w-full max-w-sm lg:max-w-md">
              <img
                src="https://i.pinimg.com/736x/8e/17/2b/8e172baccea8f0fa4d1be3aea5556235.jpg"
                alt="Woman's hand on crystal ball"
                width={350}
                height={350}
                className="w-full h-64 lg:h-80 xl:h-auto rounded-[120px] lg:rounded-[200px] object-cover transform translate-y-16 lg:-translate-y-10"
              />

              {/* Mary Sunnibol signature */}
              <div className="absolute -bottom-16 lg:-bottom-28 right-2 lg:right-4 transform -translate-x-8 lg:-translate-x-32">
                <p className="font-serif text-2xl lg:text-3xl xl:text-4xl italic font-normal text-black">
                  Mary Sunnibol
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Section2
