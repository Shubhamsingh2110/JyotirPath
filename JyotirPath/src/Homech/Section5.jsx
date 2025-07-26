import React from 'react'

const Section5 = () => {
  return (
    <>
      <div className="lg:hidden min-h-screen bg-white">
        <div className="flex flex-col">
          {/* Content Section - Mobile */}
          <div className="flex flex-col justify-center p-4 sm:p-6 md:p-8 space-y-6 bg-white">
            <div className="space-y-4 max-w-lg mx-auto">
              <p className="text-xs sm:text-sm italic text-gray-600 font-serif">Unlock the Secrets of Your Future</p>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif text-gray-900 leading-tight">
                Mystical Services for Your Journey
              </h1>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                Dive into the mystical realm with our diverse range of services designed to offer guidance and clarity.
                Our experienced astrologers and numerologists offer deep insights rooted in ancient Hindu traditions.
              </p>
            </div>
          </div>

          {/* Main Image - Mobile */}
          <div className="flex items-center justify-center p-4 sm:p-6">
            <img
              src="https://i.pinimg.com/736x/a7/58/1a/a7581af4290f6aef3fed59464cd60dc4.jpg"
              alt="Person sketching astrological chart with tarot cards"
              width={600}
              height={700}
              className="w-full max-w-md h-64 sm:h-80 object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Decorative Image - Mobile */}
          <div className="p-4 sm:p-6">
            <div className="w-full max-w-sm mx-auto h-48 sm:h-56 rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://i.pinimg.com/736x/f7/6f/f2/f76ff2dfb687f27680edc4a9e54975e0.jpg"
                alt="Woman doing tarot reading with candles and crystals"
                width={300}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Services Section - Mobile */}
          <div className="bg-white py-6 sm:py-8 px-4 sm:px-6">
            <div className="grid sm:grid-cols-2 gap-6 text-center max-w-2xl mx-auto">
              {/* Astrology */}
              <div className="space-y-3 sm:space-y-4">
                <div className="w-16 h-20 sm:w-20 sm:h-24 mx-auto border-2 border-gray-300 rounded-t-full rounded-b-lg flex items-center justify-center bg-white shadow-sm">
                  <svg
                    className="w-8 h-8 sm:w-10 sm:h-10 text-gray-600"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                  >
                    <circle cx="12" cy="8" r="3" />
                    <path d="M12 11v10" />
                    <path d="M8 21h8" />
                    <path d="M10 16h4" />
                  </svg>
                </div>
                <h3 className="text-base sm:text-lg font-serif text-gray-900">Astrology</h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                  Discover the power of Vedic Astrology (Jyotish)—gain clarity through Kundli analysis, planetary
                  guidance, and personalized predictions by expert astrologers.
                </p>
              </div>

              {/* Numerology */}
              <div className="space-y-3 sm:space-y-4">
                <div className="w-16 h-20 sm:w-20 sm:h-24 mx-auto border-2 border-stone-300 rounded-t-full rounded-b-lg flex items-center justify-center bg-white shadow-sm">
                  <svg
                    className="w-8 h-8 sm:w-10 sm:h-10 text-gray-600"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                  >
                    <path d="M3 3h18v18H3z" />
                    <path d="M8 8h8" />
                    <path d="M8 12h8" />
                    <path d="M8 16h4" />
                  </svg>
                </div>
                <h3 className="text-base sm:text-lg font-serif text-gray-900">Numerology</h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                  Unlock the secrets hidden in your name and birthdate using Vedic Numerology. Our expert helps align
                  your life’s path with cosmic energies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:block min-h-[1000px]">
        <div className="grid lg:grid-cols-2 h-[1100px]">
          {/* Left Grid - Image and Services */}
          <div className="relative overflow-hidden bg-white flex flex-col">
            {/* Main Image */}
            <div className="flex-1 flex items-center justify-center p-10">
              <img
                src="https://i.pinimg.com/736x/a7/58/1a/a7581af4290f6aef3fed59464cd60dc4.jpg"
                alt="Astrological sketch and tarot"
                width={600}
                height={700}
                className="w-full max-w-[650px] h-[500px] object-cover -translate-y-36 object-center"
              />
            </div>
            {/* Services Section */}
            <div className="bg-white py-8 px-8 -translate-y-72">
              <div className="grid md:grid-cols-2 gap-8 text-center max-w-2xl mx-auto">
                {/* Astrology */}
                <div className="space-y-4">
                  <div className="w-20 h-28 mx-auto border-2 border-gray-300 rounded-t-full rounded-b-lg flex items-center justify-center bg-gray-50">
                    <svg
                      className="w-10 h-10 text-gray-600"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                    >
                      <circle cx="12" cy="8" r="3" />
                      <path d="M12 11v10" />
                      <path d="M8 21h8" />
                      <path d="M10 16h4" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-serif text-gray-900">Astrology</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Discover the power of Vedic Astrology (Jyotish)—gain clarity through Kundli analysis, planetary
                    guidance, and personalized predictions by expert astrologers.
                  </p>
                </div>

                {/* Numerology */}
                <div className="space-y-4">
                  <div className="w-20 h-28 mx-auto border-2 border-stone-300 rounded-t-full rounded-b-lg flex items-center justify-center bg-gray-50">
                    <svg
                      className="w-10 h-10 text-gray-600"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                    >
                      <path d="M3 3h18v18H3z" />
                      <path d="M8 8h8" />
                      <path d="M8 12h8" />
                      <path d="M8 16h4" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-serif text-gray-900">Numerology</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Unlock the secrets hidden in your name and birthdate using Vedic Numerology. Our expert helps align
                    your life’s path with cosmic energies.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Grid - Content */}
          <div className="flex flex-col justify-center p-8 lg:p-12 space-y-8 bg-white">
            <div className="space-y-6 max-w-lg">
              <p className="text-sm italic text-gray-600 font-serif">Unlock the Secrets of Your Future</p>
              <h1 className="text-4xl lg:text-5xl font-serif text-gray-900 leading-tight">
                Mystical Services for Your Journey
              </h1>
              <p className="text-gray-700 leading-relaxed max-w-md">
                Dive into the mystical realm with our diverse range of services designed to offer guidance and clarity.
                Our experienced astrologers and numerologists offer deep insights rooted in ancient Hindu traditions.
              </p>
            </div>

            {/* Side Images */}
            <div className="flex flex-col space-y-4 max-w-xs">
              <div className="relative">
                <div className="w-40 h-80 rounded-t-full rounded-b-full overflow-hidden translate-x-[480px] -translate-y-[310px]">
                  <img
                    src="https://i.pinimg.com/736x/92/69/c4/9269c4a522e7c4c4457388d1f9668a4a.jpg"
                    alt="Hand holding tarot cards"
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -right-[335px] -top-36 transform -translate-y-1/2 -rotate-90">
                  <span className="text-3xl font-serif text-white whitespace-nowrap">Fortune Teller</span>
                </div>
              </div>
            </div>

            <div className="h-[550px] w-[600px] -translate-y-64">
              <img
                src="https://i.pinimg.com/736x/f7/6f/f2/f76ff2dfb687f27680edc4a9e54975e0.jpg"
                alt="Woman doing tarot reading with candles and crystals"
                width={300}
                height={200}
                className="h-[550px] w-[600px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Section5
