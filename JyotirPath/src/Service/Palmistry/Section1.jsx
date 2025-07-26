import React from 'react'
import img from '../../Images/circlebg.png'

const Section1 = () => {
  return (
    <div className="relative overflow-hidden min-h-screen">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-stone-50/80"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[80vh] lg:min-h-[70vh]">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left order-2 lg:order-1">
            <div className="space-y-4 sm:space-y-6">
              <p className="text-orange-400 font-medium tracking-wider text-xs sm:text-sm uppercase">
                Ask one question for free
              </p>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-normal text-gray-900 leading-tight font-serif">
                Discover the Secrets<br className="hidden sm:block" />
              </h1>

              <div className="space-y-3 sm:space-y-4 text-gray-600 text-base sm:text-lg max-w-lg mx-auto lg:mx-0">
                <p>
                  Palmistry, or chiromancy, is the ancient art of reading the lines, mounts, and features of the hand to uncover deep insights into your life’s path, personality, and destiny. For centuries, palm readers have interpreted these signs to reveal truth and guidance.
                </p>
                <p>
                  Your hands tell a powerful story about your relationships, health, career, and inner journey. Every curve, crease, and finger formation holds meaning. Discover what your palms say about you and unlock the wisdom waiting in your hands.
                </p>
              </div>
            </div>
          </div>

          {/* Right Content - Image with Rotating Background */}
          <div className="relative flex justify-center order-1 lg:order-2">
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl">
              {/* Main palm image */}
              <div className="relative mx-auto">
                <img
                  src="https://i.pinimg.com/736x/fb/41/f7/fb41f758d0457b7b65e060ed84f83b78.jpg"
                  alt="Palm Reading Image"
                  className="object-cover opacity-70 rounded-t-full rounded-2xl shadow-2xl w-48 h-80 sm:w-56 sm:h-96 md:w-64 md:h-[28rem] lg:w-72 lg:h-[32rem] xl:w-80 xl:h-[36rem] mx-auto"
                />

                {/* Rotating circle background */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] xl:w-[28rem] xl:h-[28rem] rounded-full opacity-90 animate-spin"
                    style={{
                      backgroundImage: `url(${img})`,
                      backgroundSize: "contain",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      animation: "spin 20s linear infinite",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section1
