import React from 'react'
import img from '../../Images/moon.png'

const Section7 = () => {
  return (
     <section className="w-full bg-stone-50 relative overflow-hidden border-b border-t border-[#C89B6D]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:grid lg:grid-cols-2 min-h-[600px] md:min-h-[750px] lg:min-h-[750px]">
          {/* Left Column - Planet Images */}
          <div className="relative flex items-center justify-center order-1 lg:order-1 lg:absolute lg:left-0 lg:top-0 lg:w-1/2 lg:h-full lg:flex lg:items-center lg:justify-start py-8 lg:py-0">
            {/* Main Planet Image */}
            <div className="relative w-full h-full">
              <img
                src="https://i.pinimg.com/736x/53/cd/3e/53cd3e10c5a5fd0ec7fa01d5fbf28628.jpg"
                alt="Moon surface with detailed craters"
                className="w-64 h-80 md:w-80 md:h-96 lg:w-[500px] lg:h-[700px] object-cover mx-auto lg:mx-0 lg:translate-y-20 lg:translate-x-28"
              />
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="flex flex-col justify-center py-12 md:py-16 lg:py-24 pl-0 lg:pl-12 z-10 relative order-2 lg:order-2 lg:col-start-2">
            <h1 className="text-3xl md:text-4xl lg:text-6xl xl:text-5xl font-medium font-cinzel leading-tight mb-6 md:mb-8 text-[#C89B6D]">
              What's Included in Your Reading
            </h1>
            <div className="text-base md:text-lg lg:text-xl leading-relaxed mb-8 md:mb-12 font-cinzel max-w-none lg:max-w-lg text-[#666666] space-y-3 md:space-y-4">
              <ul className="list-disc list-inside space-y-3 md:space-y-2">
                <li>
                  <strong>Detailed birth chart reading:</strong> Deep analysis and interpretation of your natal chart,
                  offering practical guidance tailored to your life's journey.
                </li>
                <li>
                  <strong>Planetary period analysis:</strong> Understand the influence of cosmic cycles and timing,
                  empowering your decisions with clarity and foresight.
                </li>
                <li>
                  <strong>Life predictions and guidance:</strong> Get actionable insights into future opportunities and
                  challenges to navigate your path effectively.
                </li>
                <li>
                  <strong>Remedial measures:</strong> Powerful Vedic solutions and ancient wisdom to harmonize your
                  energies and overcome life's obstacles.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section7
