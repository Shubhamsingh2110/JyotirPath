import React from 'react'
import img from '../../PalmistryImages/image copy 2.png'
import img1 from '../../PalmistryImages/image copy 3.png'
import img2 from '../../PalmistryImages/image copy 4.png'
import img3 from '../../PalmistryImages/image copy 5.png'
import img4 from '../../PalmistryImages/image copy.png'
import img5 from '../../PalmistryImages/image.png'

const Section3 = () => {
    const services = [
  {
    icon: <img src={img} className="w-8 h-8" />,
    title: "General consultation",
    description:
      "Unlock insights into your overall life path. From personality traits to decision patterns, understand what’s guiding your journey.",
  },
  {
    icon: <img src={img1} className="w-8 h-8" />,
    title: "Personal life advice",
    description:
      "Facing emotional crossroads or relationship confusion? Get personalized guidance to help you make empowered life choices.",
  },
  {
    icon: <img src={img2} className="w-8 h-8" />,
    title: "Annual forecast",
    description:
      "Discover what the stars hold for you this year opportunities, challenges, and key moments mapped out in advance.",
  },
  {
    icon: <img src={img3} className="w-8 h-8" />,
    title: "Work, career, finance",
    description:
      "Explore your professional path and financial future. Find clarity on career direction and timing for smart decisions.",
  },
  {
    icon: <img src={img4} className="w-8 h-8" />,
    title: "Forecast of future events",
    description:
      "Get a glimpse into what’s coming. From big decisions to life shifts, use cosmic timing to move with confidence.",
  },
  {
    icon: <img src={img5} className="w-8 h-8" />,
    title: "Current life situation",
    description:
      "Feeling uncertain? Understand the deeper forces shaping your present and find clarity for your next step.",
  },
];

  return (
    <div className="relative min-h-screen bg-[#1C1C27] overflow-hidden">
      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-amber-600 text-sm font-medium tracking-wider uppercase mb-8">OUR SERVICES</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extralight text-white leading-tight max-w-4xl mx-auto font-cinzel">
            Benefits of Palm Reading
          </h1>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div key={index} className="text-center group border-[0.01px] border-stone-50 p-10 ">
              {/* Icon */}
              <div className="mb-6 flex justify-center">
                <div className="w-20 h-20 bg-[#D97B65] rounded-full flex items-center justify-center transition-colors duration-300 ">
                  {service.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-medium font-cinzel text-white mb-4 group-hover:text-amber-100 transition-colors duration-300">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 leading-relaxed text-sm max-w-xs mx-auto group-hover:text-gray-300 transition-colors duration-300">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Section3
