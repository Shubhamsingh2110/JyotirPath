import React from 'react'
import { ChevronRight } from "lucide-react"
import { Link } from "react-router-dom";

const Section2 = () => {
  return (
    <div className="bg-white">
      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
          {/* Left Side - Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-[80px] sm:rounded-[120px] lg:rounded-[150px] overflow-hidden h-[300px] sm:h-[400px] lg:h-[550px] w-full max-w-[525px] mx-auto lg:mx-0">
              <img
                src="https://images.pexels.com/photos/1586257/pexels-photo-1586257.jpeg"
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
                Vedic Insights into Parenthood and Progeny
              </h1>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                The journey of parenthood is not just a physical experience it is a sacred passage of the soul. Through the lens of astrology, I offer a deeper understanding of your karmic blueprint and how it influences fertility, conception, and your spiritual bond with future children.
              </p>

              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Whether you're hoping to conceive, facing challenges on the path to parenthood, or simply seeking clarity about your role as a parent, I am here to guide you. By exploring planetary alignments, birth charts, and divine timing, we illuminate the path to welcoming a soul destined to join your life’s journey. Embrace the mysteries of progeny and discover the cosmic threads that connect you to your future lineage.
              </p>
            </div>

            {/* Services */}
            <div className="space-y-0">
              <div className="border-b-2 border-gray-300 bg-white backdrop-blur-sm cursor-pointer hover:bg-gray-50 transition-colors">
                <div className="p-4 sm:p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-black flex-shrink-0" />
                      <span className="font-normal text-gray-800 font-cinzel text-sm sm:text-base">
                        Fertility & Conception Insights
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-b-2 border-gray-300 bg-white backdrop-blur-sm cursor-pointer hover:bg-gray-50 transition-colors">
                <div className="p-4 sm:p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-black flex-shrink-0" />
                      <span className="font-normal text-gray-800 font-cinzel text-sm sm:text-base">
                        Karmic Bonds with Children
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

export default Section2;
