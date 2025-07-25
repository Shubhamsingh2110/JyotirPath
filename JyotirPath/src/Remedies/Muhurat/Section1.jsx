import React from 'react'

const Section1 = () => {
  return (
    <>
    <section className="relative h-[400px] md:h-[500px] lg:h-[400px] w-full overflow-hidden bg-stone-50">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/10143686/pexels-photo-10143686.jpeg?_gl=1*1ql1udp*_ga*MjA5MTg1MDI1OC4xNzQ4MzIzMTE4*_ga_8JE65Q40S6*czE3NTA1OTcwMTIkbzExJGcxJHQxNzUwNTk3MDM1JGozNyRsMCRoMA.."
            alt="Crystal Ball Background"
            className="w-full h-full object-cover object-center "
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex h-full items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light mb-4 tracking-wide font-cinzel text-amber-100">Muhurat & Timings</h1>
            <p className="text-lg md:text-xl lg:text-2xl font-light tracking-wide opacity-90 font-cinzel">
                 Choose the most auspicious moments for new beginnings, rituals, and spiritual milestones guided by divine timing
            </p>
          </div>
        </div>

        {/* SVG Bottom Curve */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <svg
            className="relative block w-full h-[100px]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 100"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0 C480,100 960,100 1440,0 L1440,100 L0,100 Z"
              fill="#ffffff"
            />
          </svg>
        </div>
      </section>
    </>
  )
}

export default Section1
