import React from 'react'
import img from '../../Images/landscape.jpg'


const Section4 = () => {
  return (
<div className="relative h-[550px] flex items-center justify-center overflow-hidden">
  {/* Background Image with Blur */}
  <div
    className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-sm scale-110"
    style={{
      backgroundImage: `url(https://i.pinimg.com/736x/25/97/c3/2597c30040ab0082afa07a26feb34686.jpg)`,
    }}
  />

  {/* Overlay for better text readability */}
  <div className="absolute inset-0 bg-black/20" />

  {/* Content */}
  <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
    <h1 className="text-2xl md:text-3xl lg:text-5xl font-cinzel font-normal text-white mb-8 leading-tight">
      WHAT DOES YOUR BIRTH CHART
      <br />
      TELL{" "}
      YOU
      ? LEARN TODAY!
    </h1>

  </div>
</div>

  )
}

export default Section4
