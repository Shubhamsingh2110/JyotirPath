import React from 'react'

const Section4 = () => {
  return (
    <>
   <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24 bg-white relative overflow-hidden min-h-[250px] sm:min-h-[300px] lg:min-h-[350px]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12 max-w-7xl mx-auto -translate-y-8 sm:-translate-y-12 lg:translate-y-0">
            {/* Tarot Card Readings */}
            <div className="relative flex items-center justify-center min-h-[180px] sm:min-h-[200px] lg:min-h-[220px] group">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-[100px] sm:text-[100px] md:text-[120px] lg:text-[140px] xl:text-[160px] font-bold text-stone-200 select-none leading-none transition-all duration-300 group-hover:text-stone-300">
                  67
                </span>
              </div>
              <div className="relative z-10 text-center px-2 sm:px-4">
                <h3 className="text-lg sm:text-xl lg:text-xl text-black leading-tight font-cinzel transition-all duration-300 group-hover:text-stone-700">
                  Tarot Card Readings
                </h3>
              </div>
            </div>

            {/* Crystal Ball Sessions */}
            <div className="relative flex items-center justify-center min-h-[180px] sm:min-h-[200px] lg:min-h-[220px] group">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-[100px] sm:text-[100px] md:text-[120px] lg:text-[140px] xl:text-[160px] font-bold text-stone-200 select-none leading-none transition-all duration-300 group-hover:text-stone-300">
                  43
                </span>
              </div>
              <div className="relative z-10 text-center px-2 sm:px-4">
                <h3 className="text-lg sm:text-xl lg:text-xl text-black leading-tight font-cinzel transition-all duration-300 group-hover:text-stone-700">
                  Crystal Ball Sessions
                </h3>
              </div>
            </div>

            {/* Palmistry Analysis */}
            <div className="relative flex items-center justify-center min-h-[180px] sm:min-h-[200px] lg:min-h-[220px] group">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-[100px] sm:text-[100px] md:text-[120px] lg:text-[140px] xl:text-[160px] font-bold text-stone-200 select-none leading-none transition-all duration-300 group-hover:text-stone-300">
                  83
                </span>
              </div>
              <div className="relative z-10 text-center px-2 sm:px-4">
                <h3 className="text-lg sm:text-xl lg:text-xl text-black leading-tight font-cinzel transition-all duration-300 group-hover:text-stone-700">
                  Palmistry Analysis
                </h3>
              </div>
            </div>

            {/* Astrology Insights */}
            <div className="relative flex items-center justify-center min-h-[180px] sm:min-h-[200px] lg:min-h-[220px] group">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-[100px] sm:text-[100px] md:text-[120px] lg:text-[140px] xl:text-[160px] font-bold text-stone-200 select-none leading-none transition-all duration-300 group-hover:text-stone-300">
                  59
                </span>
              </div>
              <div className="relative z-10 text-center px-2 sm:px-4">
                <h3 className="text-lg sm:text-xl lg:text-xl text-black leading-tight font-cinzel transition-all duration-300 group-hover:text-stone-700">
                  Astrology Insights
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Section4
