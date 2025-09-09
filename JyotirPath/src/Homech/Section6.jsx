import React from 'react'

const Section6 = () => {
  return (
    <>
    <div className="min-h-screen bg-white p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Mobile Layout - Single Column */}
        <div className="grid grid-cols-1 gap-4 md:hidden">
          <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white p-2">
            <img
              src="https://i.pinimg.com/736x/09/07/11/090711f285451ec7db392675b47bc9ee.jpg"
              alt="The Moon tarot card XVIII on round stone with marble background"
              className="w-full h-72 sm:h-80 object-cover rounded-xl"
            />
          </div>

          <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white p-2">
            <img
              src="https://i.pinimg.com/736x/a0/bf/a1/a0bfa16a5a65738d974b7c0de8164797.jpg"
              alt="Scattered tarot deck with natal chart and gemstones"
              className="w-full h-72 sm:h-56 object-cover rounded-xl"
            />
          </div>

          <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white p-2">
            <img
              src="https://i.pinimg.com/736x/2a/6b/1e/2a6b1e8a909d0af52162ed04162d3dfa.jpg"
              alt="Person performing pendulum chakra healing over woman lying down"
              className="w-full h-72 sm:h-80 object-cover rounded-xl"
            />
          </div>

          <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white p-2">
            <img
              src="https://i.pinimg.com/736x/1b/10/e0/1b10e0ce4e537f7313d78b0b134c1b2f.jpg"
              alt="Woman doing tarot card reading at spiritual table with crystals, candles, and plants"
              className="w-full h-72 sm:h-80 object-cover rounded-xl"
            />
          </div>

          <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white p-2">
            <img
              src="https://i.pinimg.com/736x/52/a4/ef/52a4efd117f8d24b5c6db7dd20da0e65.jpg"
              alt="Hand placing chakra stones on drawn silhouette with singing bowl"
              className="w-full h-72 sm:h-64 object-cover rounded-xl"
            />
          </div>

          <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white p-2">
            <img
              src="https://i.pinimg.com/736x/54/dd/3e/54dd3e9eff38faa420ea599b9904ac07.jpg"
              alt="Crystals and gemstones like amethyst and green aventurine on wood with blurred nature background"
              className="w-full h-72 sm:h-56 object-cover rounded-xl"
            />
          </div>
        </div>

        {/* Tablet Layout - 2 Columns */}
        <div className="hidden md:grid lg:hidden grid-cols-2 gap-6 auto-rows-min">
          <div className="row-span-2">
            <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white p-2">
              <img
                src="https://i.pinimg.com/736x/09/07/11/090711f285451ec7db392675b47bc9ee.jpg"
                alt="The Moon tarot card XVIII on round stone with marble background"
                className="w-full h-96 object-cover rounded-xl"
              />
            </div>
          </div>

          <div>
            <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white p-2 mb-6">
              <img
                src="https://i.pinimg.com/736x/a0/bf/a1/a0bfa16a5a65738d974b7c0de8164797.jpg"
                alt="Scattered tarot deck with natal chart and gemstones"
                className="w-full h-48 object-cover rounded-xl"
              />
            </div>

            <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white p-2">
              <img
                src="https://i.pinimg.com/736x/2a/6b/1e/2a6b1e8a909d0af52162ed04162d3dfa.jpg"
                alt="Person performing pendulum chakra healing over woman lying down"
                className="w-full h-48 object-cover rounded-xl"
              />
            </div>
          </div>

          <div>
            <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white p-2 mb-6">
              <img
                src="https://i.pinimg.com/736x/1b/10/e0/1b10e0ce4e537f7313d78b0b134c1b2f.jpg"
                alt="Woman doing tarot card reading at spiritual table with crystals, candles, and plants"
                className="w-full h-64 object-cover rounded-xl"
              />
            </div>

            <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white p-2">
              <img
                src="https://i.pinimg.com/736x/ee/96/6f/ee966f140f6613c0b3178b406a1b4bcc.jpg"
                alt="Hand placing chakra stones on drawn silhouette with singing bowl"
                className="w-full h-48 object-cover rounded-xl"
              />
            </div>
          </div>

          <div>
            <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white p-2">
              <img
                src="https://i.pinimg.com/736x/54/dd/3e/54dd3e9eff38faa420ea599b9904ac07.jpg"
                alt="Crystals and gemstones like amethyst and green aventurine on wood with blurred nature background"
                className="w-full h-48 object-cover rounded-xl"
              />
            </div>
          </div>
        </div>

        {/* Desktop Layout - 3 Columns (Original with improvements) */}
        <div className="hidden lg:grid grid-cols-3 gap-6 auto-rows-min">
          {/* Top-left: The Moon Tarot Card */}
          <div className="row-span-2">
            <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white p-2">
              <img
                src="https://i.pinimg.com/736x/09/07/11/090711f285451ec7db392675b47bc9ee.jpg"
                alt="The Moon tarot card XVIII on round stone with marble background"
                className="w-full h-[350px] object-cover rounded-xl"
              />
            </div>
          </div>

          {/* Top-middle: Tarot deck with natal chart */}
          <div className="row-span-1">
            <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white p-2">
              <img
                src="https://i.pinimg.com/736x/a0/bf/a1/a0bfa16a5a65738d974b7c0de8164797.jpg"
                alt="Scattered tarot deck with natal chart and gemstones"
                className="w-full h-60 object-cover rounded-xl"
              />
            </div>
          </div>

          {/* Top-right: Pendulum healing session */}
          <div className="row-span-2">
            <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white p-2">
              <img
                src="https://i.pinimg.com/736x/2a/6b/1e/2a6b1e8a909d0af52162ed04162d3dfa.jpg"
                alt="Person performing pendulum chakra healing over woman lying down"
                className="w-full h-[485px] object-cover rounded-xl"
              />
            </div>
          </div>

          {/* Middle-left: Woman doing tarot reading */}
          <div className="row-span-2">
            <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white p-2 ">
              <img
                src="https://i.pinimg.com/736x/1b/10/e0/1b10e0ce4e537f7313d78b0b134c1b2f.jpg"
                alt="Woman doing tarot card reading at spiritual table with crystals, candles, and plants"
                className="w-full h-[490px] object-cover rounded-xl"
              />
            </div>
          </div>

          {/* Middle-center: Chakra stones */}
          <div className="row-span-2 xl:-translate-y-40">
            <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white p-2 ">
              <img
                src="https://i.pinimg.com/736x/52/a4/ef/52a4efd117f8d24b5c6db7dd20da0e65.jpg"
                alt="Hand placing chakra stones on drawn silhouette with singing bowl"
                className="w-full h-96 object-cover rounded-xl object-middle"
              />
            </div>
          </div>

          {/* Bottom-right: Crystals and gemstones */}
          <div className="row-span-1">
            <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white p-2 lg:-translate-y-5">
              <img
                src="https://i.pinimg.com/736x/54/dd/3e/54dd3e9eff38faa420ea599b9904ac07.jpg"
                alt="Crystals and gemstones like amethyst and green aventurine on wood with blurred nature background"
                className="w-full h-56 object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Section6
