import React from 'react'
import img from '../../Images/numberimg2.jpg'
import { Star } from "lucide-react"


const Section2 = () => {
  return (
    <section className="min-h-screen bg-stone-50 relative overflow-hidden">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left side - Decorative Numbers */}
          <div className="relative">
            <img src={img} alt="" className='h-[500px] lg:h-[600px] object-cover' />
          </div>

          {/* Right side - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-amber-600 font-medium tracking-wider uppercase text-sm">What we do</p>

              <h1 className="text-4xl lg:text-5xl xl:text-5xl font-cinzel text-slate-800 leading-tight">
                Numerology helps to transform you
              </h1>

              <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
                Our numerological analysis provides practical guidance for making important decisions, understanding your natural talents, and choosing the most auspicious timing for significant life events.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section2
