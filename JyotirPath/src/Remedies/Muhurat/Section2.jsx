import React from 'react'
import { Dot } from "lucide-react"
import { Link } from "react-router-dom";

const Section2 = () => {
  return (
    <div className="bg-white">
      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
          {/* Left Side - Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-t-full overflow-hidden h-[400px] sm:h-[450px] md:h-[500px] lg:h-[550px] w-full max-w-[525px] mx-auto lg:mx-0">
              <img
                src="https://i.pinimg.com/736x/f2/af/af/f2afaf33fb5daa00bb0934fc5bf2f4be.jpg"
                alt="Vedic calendar, planets, and auspicious ritual items representing Muhurat"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-6 sm:space-y-8 order-1 lg:order-2">
            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-amber-700 font-cinzel leading-tight">
                Auspicious Muhurat & Divine Timings
              </h1>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                Grounded in the principles of Vedic astrology, I help you align with the universe by choosing the most auspicious moments Shubh Muhurat for life’s important milestones. Whether you're planning a wedding, new venture, or religious ritual, choosing the right time brings harmony and prosperity.
              </p>

              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                My mission is to guide you through the divine rhythms of planetary movements, tithi, nakshatra, and yogas to ensure your efforts are blessed with cosmic support. When your actions are synced with the universe, you invite clarity, abundance, and spiritual alignment.
              </p>
            </div>

            {/* Services */}
            <div className="space-y-0">
              <div className="border-b-2 border-amber-700 bg-white backdrop-blur-sm cursor-pointer hover:bg-amber-50 transition-colors">
                <div className="p-4 sm:p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Dot className="w-5 h-5 sm:w-10 sm:h-10 text-amber-700 flex-shrink-0" />
                      <span className="font-normal text-gray-800 font-cinzel text-sm sm:text-base">
                        Wedding, Naming & Housewarming Muhurats
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-b-2 border-amber-700 bg-white backdrop-blur-sm cursor-pointer hover:bg-amber-50 transition-colors">
                <div className="p-4 sm:p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Dot className="w-5 h-5 sm:w-10 sm:h-10 text-amber-700 flex-shrink-0" />
                      <span className="font-normal text-gray-800 font-cinzel text-sm sm:text-base">
                        Business Launch, Travel & Ritual Timings
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-2 sm:pt-0">
              <Link to="/contact" className="bg-white text-black px-6 sm:px-8 py-2.5 sm:py-3 font-medium border-2 border-amber-700 text-base sm:text-lg hover:bg-gray-50 transition-colors w-full sm:w-auto">
                MORE INFO
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Section2
