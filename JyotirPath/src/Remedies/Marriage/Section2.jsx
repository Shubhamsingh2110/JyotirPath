import React from 'react'
import { Dot } from "lucide-react"
import { Link } from "react-router-dom";

const Section2 = () => {
  return (
    <div className="bg-white">
      <main className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
          
          {/* Left Side - Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-tr-[80px] sm:rounded-tr-[120px] lg:rounded-tr-[150px] overflow-hidden h-[300px] sm:h-[400px] lg:h-[550px] w-full max-w-[525px] mx-auto lg:mx-0">
              <img
                src="https://images.unsplash.com/photo-1713958325165-07e1cefedd8b?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Mystical tarot cards, crystals, and spiritual symbols arranged on a table"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-6 lg:space-y-8 order-1 lg:order-2">
            <div className="space-y-4">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-normal text-gray-800 font-cinzel leading-tight">
                Mystical Insights on Marriage
              </h1>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                With a deep understanding Dot and spiritual energies, I provide heartfelt guidance on marriage and partnerships. Whether you're navigating relationship challenges, exploring compatibility, or seeking divine timing for marriage, I offer clarity rooted in ancient wisdom.
              </p>

              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                My mission is to help you build and maintain fulfilling, soul-connected relationships. Whether you're newly engaged, facing crossroads in your union, or searching for your life partner, I support you in uncovering the spiritual insights and cosmic alignment behind your love story.
              </p>
            </div>

            {/* Services */}
            <div className="space-y-0">
              <div className="border-b-2 border-gray-300 bg-white backdrop-blur-sm cursor-pointer hover:bg-gray-50 transition-colors">
                <div className="p-4 sm:p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Dot className="w-5 h-5 sm:w-10 sm:h-10 text-black flex-shrink-0" />
                      <span className="font-normal text-gray-800 font-cinzel text-sm sm:text-base">
                        Astrological Compatibility & Timing
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-b-2 border-gray-300 bg-white backdrop-blur-sm cursor-pointer hover:bg-gray-50 transition-colors">
                <div className="p-4 sm:p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Dot className="w-5 h-5 sm:w-10 sm:h-10 text-black flex-shrink-0" />
                      <span className="font-normal text-gray-800 font-cinzel text-sm sm:text-base">
                        Soulmate & Relationship Readings
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-2 lg:pt-0">
              <Link to="/contact" className="bg-white text-black px-6 sm:px-8 py-2.5 sm:py-3 font-medium border-2 border-gray-200 text-base sm:text-lg hover:bg-gray-50 transition-colors w-full sm:w-auto">
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
