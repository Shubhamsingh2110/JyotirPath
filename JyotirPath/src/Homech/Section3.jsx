import React from 'react'
import img from '../Images/image copy 3.png'
import video from '../video/gangaarti video.mp4'

const Section3 = () => {
  return (
    <>
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video className="absolute inset-0 h-full w-full object-cover" autoPlay muted loop playsInline preload="metadata">
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay for Better Text Readability */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Main Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
        {/* Mystical Sun Symbol */}
        <div className="mb-8 rounded-full border-2 border-white/60 p-6 backdrop-blur-sm">
          <div className="relative">
            <img src={img} alt='sun' className="h-16 w-16 text-white" strokeWidth={1} />
            <div className="absolute -inset-4 rounded-full border border-white/30" />
            <div className="absolute -inset-8 rounded-full border border-white/20" />
          </div>
        </div>

        {/* Main Headline */}
        <h1
          className=" font-cinzel mb-12 max-w-4xl text-4xl font-light leading-tight tracking-wide md:text-5xl lg:text-6xl"
        >
          Revealing Your Future,
          <br />
          One Card at a Time
        </h1>

        {/* CTA Button */}
        <button className="group relative overflow-hidden border-2 border-white/80 bg-transparent px-8 py-3 text-lg font-light tracking-wider text-white transition-all duration-300 hover:bg-white hover:text-black">
          <span className="relative z-10">Start Now</span>
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm transition-all duration-300 group-hover:bg-white" />
        </button>
      </div>

      {/* Animated Background Text */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
        <div
          className="animate-scroll-text whitespace-nowrap text-8xl font-light text-white/10 md:text-9xl lg:text-[12rem]"
          style={{ fontFamily: "Georgia, serif" }}
        >
          Destiny&nbsp;&nbsp;•&nbsp;&nbsp;Future&nbsp;&nbsp;•&nbsp;&nbsp;Wisdom&nbsp;&nbsp;•&nbsp;&nbsp;Destiny&nbsp;&nbsp;•&nbsp;&nbsp;Future&nbsp;&nbsp;•&nbsp;&nbsp;Wisdom&nbsp;&nbsp;•&nbsp;&nbsp;
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes scroll-text {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll-text {
          animation: scroll-text 30s linear infinite;
        }
        
        /* Fade in animation for content */
        .relative.z-10 > * {
          animation: fadeInUp 1s ease-out forwards;
          opacity: 0;
          transform: translateY(30px);
        }
        
        .relative.z-10 > *:nth-child(1) {
          animation-delay: 0.2s;
        }
        
        .relative.z-10 > *:nth-child(2) {
          animation-delay: 0.4s;
        }
        
        .relative.z-10 > *:nth-child(3) {
          animation-delay: 0.6s;
        }
        
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
    </>
  )
}

export default Section3
