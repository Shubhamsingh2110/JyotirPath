import React from 'react'
import { Dot } from "lucide-react"
import img from './careerimages/bgoffice.png'
import { Link } from "react-router-dom";

const Section2 = () => {
  return (
    <>
      <div className="bg-white">
        {/* Main Content */}
        <main className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
            {/* Left Side - Images */}
            <div className="relative order-2 lg:order-1">
              {/* Main Image */}
              <div className="relative overflow-hidden aspect-square w-full max-w-[300px] sm:max-w-[350px] lg:max-w-[390px] border border-gray-200 rounded-full mx-auto lg:mx-0 lg:ml-auto lg:right-32">
                <img
                  src="https://i.pinimg.com/736x/50/d4/46/50d44685f2d670a0db687541fb9bf3d2.jpg"
                  alt="Vedic chart, spiritual career path symbols"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>

              {/* Secondary Image - Overlapping */}
              <div className="absolute -bottom-4 sm:-bottom-6 lg:bottom-1 left-1/2 lg:left-20 transform -translate-x-1/2 lg:translate-x-0 lg:right-32 xl:right-48 w-[200px] sm:w-[250px] lg:w-[280px] xl:w-[300px] h-[280px] sm:h-[350px] lg:h-[390px] xl:h-[420px] z-10 ">
                <img
                  src={img}
                  alt="Person meditating on career decisions guided by astrology"
                  className="w-full h-full object-cover rounded-b-[80px] sm:rounded-b-[100px] lg:rounded-b-[130px]"
                />
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="space-y-6 lg:space-y-8 order-1 lg:order-2">
              <div className="space-y-4 lg:space-y-6">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-normal text-orange-500 font-cinzel leading-tight">
                  Vedic Career Insights
                </h1>

                <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                  With guidance rooted in Jyotish Shastra (Vedic astrology), I help you uncover your true career path through the alignment of the planets and your karmic blueprint. By studying your 10th house, Saturn (Shani), Mercury (Budh), and planetary dashas, we decode the direction best suited to your soul’s work and professional fulfillment.
                </p>

                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  Whether you're seeking career clarity, navigating transitions, or feeling blocked in your current path, Vedic astrology offers divine insights to help you realign. I am here to support you in unlocking your professional purpose, aligning your work with dharma, and achieving long-term success guided by cosmic intelligence.
                </p>
              </div>

              {/* Services */}
              <div className="space-y-0">
                <div className="border-b-2 border-orange-200 bg-white backdrop-blur-sm cursor-pointer hover:bg-orange-50 transition-colors">
                  <div className="p-4 sm:p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Dot className="w-5 h-5 sm:w-10 sm:h-10 text-orange-400 flex-shrink-0" />
                        <span className="font-normal text-gray-800 font-cinzel text-sm sm:text-base">
                          Career & Profession Chart Reading
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-b-2 border-orange-200 bg-white backdrop-blur-sm cursor-pointer hover:bg-orange-50 transition-colors">
                  <div className="p-4 sm:p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Dot className="w-5 h-5 sm:w-10 sm:h-10 text-orange-400 flex-shrink-0" />
                        <span className="font-normal text-gray-800 font-cinzel text-sm sm:text-base">
                          Dasha Timing & Job Change Guidance
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-2 lg:pt-0">
                <Link to="/contact" className="bg-white text-black px-6 sm:px-8 py-2.5 sm:py-3 font-medium border-2 border-orange-400 text-base sm:text-lg hover:bg-orange-50 transition-colors w-full sm:w-auto">
                  MORE INFO
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export default Section2;
