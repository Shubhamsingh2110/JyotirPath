import React from 'react'

const Section1 = () => {
  return (
    <>
  <section className="relative min-h-screen w-full overflow-hidden bg-white">
      <div className="container mx-auto px-4 py-8 min-h-screen">
        {/* Mobile Layout */}
        <div className="flex flex-col items-center justify-center min-h-screen md:hidden">
          {/* Main Title */}
          <div className="text-center mb-8">
            <h1 className="text-4xl sm:text-5xl font-serif text-gray-900">The Secrets</h1>
            <div className="flex items-baseline justify-center gap-2 mt-2">
              <span className="text-4xl sm:text-5xl font-serif text-gray-900">of</span>
              <span className="text-4xl sm:text-5xl font-serif italic text-gray-900">the Cosmos</span>
            </div>
          </div>

          {/* Woman Image */}
          <div className="relative w-64 h-80 mb-8">
            <img
              src="https://i.pinimg.com/736x/4c/b3/cc/4cb3cc171279fa7cae7bfe95d495d4e4.jpg"
              alt="Fortune teller with crystal ball"
              fill
              className="object-cover rounded-t-full"
              priority
            />
          </div>

          {/* Secondary Title */}
          <div className="text-center mt-16">
            <h2 className="text-3xl sm:text-4xl font-serif text-gray-900 leading-tight">
              <span className="text-white">Disco</span>ver Your
            </h2>
            <h2 className="text-3xl sm:text-4xl font-serif text-gray-900 leading-tight mt-1">Destiny</h2>
            <span className="text-3xl sm:text-4xl font-serif italic text-gray-900 block mt-1">with Stars</span>
          </div>

          {/* Tertiary Title */}
          <div className="text-center mt-4">
            <h3 className="text-2xl font-serif text-gray-900 leading-tight">Unveil Your Future with Cards</h3>
          </div>

          {/* Description */}
          <div className="text-center max-w-sm mt-6">
            <p className="text-sm text-gray-600 leading-relaxed">
              Step into the mystical world of tarot and uncover the secrets that the future holds. Let our experienced
              fortune teller guide you through the cards, revealing insights and wisdom tailored just for you.
            </p>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:block relative w-full max-w-7xl mx-auto min-h-screen">
          {/* Central woman image */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-[150px] -translate-y-[390px] z-10">
            <div className="relative w-80 h-96 lg:w-96 lg:h-[480px] xl:w-[400px] xl:h-[500px]">
              <img
                src="https://i.pinimg.com/736x/4c/b3/cc/4cb3cc171279fa7cae7bfe95d495d4e4.jpg"
                alt="Fortune teller with crystal ball"
                fill
                className="object-cover rounded-t-full"
                priority
              />
            </div>
          </div>

          {/* "The Secrets of the Cosm" - Top left */}
          <div className="absolute top-8 lg:top-20 left-10 z-20">
            <h1 className="text-5xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-serif text-gray-900 leading-none">
              The Secrets
            </h1>
            <div className="flex items-baseline gap-2 mt-2">
              <span className="text-5xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-serif text-gray-900">of </span>
              <span className="text-5xl lg:text-7xl xl:text-9xl 2xl:text-9xl font-serif italic text-gray-900">
                the Co<span className='text-white'>smos</span>
              </span>
            </div>
          </div>

          {/* "Discover Your Destiny with Stars" - Top right */}
          <div className="absolute top-8 lg:top-96 right-10 z-20 text-right">
            <h2 className="text-4xl lg:text-7xl xl:text-8xl 2xl:text-8xl font-serif text-gray-900 leading-none">
              <span className="text-white">Disco</span>ver Your
            </h2>
            <h2 className="text-4xl lg:text-7xl xl:text-8xl 2xl:text-8xl font-serif text-gray-900 leading-none mt-2">
              Destiny
            </h2>
            <div className="mt-2">
              <span className="text-4xl lg:text-7xl xl:text-8xl 2xl:text-8xl font-serif italic text-gray-900">
                with Stars
              </span>
            </div>
          </div>

          {/* "Unveil Your Future with Cards" - Bottom left */}
          <div className="absolute bottom-32 lg:bottom-72 left-0 z-20">
            <h3 className="text-2xl lg:text-4xl xl:text-5xl font-serif text-gray-900 leading-tight">Unveil Your</h3>
            <h3 className="text-2xl lg:text-4xl xl:text-5xl font-serif text-gray-900 leading-tight mt-1">
              Future with Cards
            </h3>
          </div>

          {/* Subtext - Bottom left */}
          <div className="absolute bottom-8 lg:bottom-44 right-[800px] z-20 max-w-md lg:max-w-lg">
            <p className="text-sm lg:text-base text-gray-600 leading-10">
              Step into the mystical world of tarot and uncover the secrets that the future holds. Let our experienced
              fortune teller guide you through the cards, revealing insights and wisdom tailored just for you.
            </p>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Section1
