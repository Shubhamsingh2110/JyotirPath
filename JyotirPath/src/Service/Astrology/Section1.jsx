
import { useState } from "react"
import { ChevronLeft, ChevronRight, Sparkles, Heart } from "lucide-react"
import img from '../../Images/moon2.png'
import imgstar from '../../Images/star2.png'
import left from '../../Images/leftarrow.png'
import right from '../../Images/rightarrow.png'
import img1 from '../../Images/krishna.jpg'

export default function CompatibilityPage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [showQuiz, setShowQuiz] = useState(false)
  const [formData, setFormData] = useState({
    yourName: "",
    partnerName: "",
    yourBirthdate: "",
    partnerBirthdate: "",
  })
  const [result, setResult] = useState(null)

  const slides = [
    {
      title: "Understand your life purpose and destiny",
      subtitle: "Discover your romantic compatibility",
      image: img1,
    },
    {
      title: "Discover your natural talents and abilities",
      subtitle: "Explore the depths of your connection",
      image: "https://i.pinimg.com/736x/86/04/c0/8604c0a2382d751bdeda415bc4f88f2d.jpg",
    },
    {
      title: "Find the best timing for important life events",
      subtitle: "See what the stars have aligned for you",
      image: "https://i.pinimg.com/736x/db/ad/20/dbad204d753e2c9aa2d550e9cc293ebd.jpg",
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="relative h-[600px] w-full overflow-hidden border-b-[0.2px] border-[#C89B6D]">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={slides[currentSlide].image || "/placeholder.svg"}
          alt="Romantic couple"
          className="w-full h-[600px] object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 lg:left-6 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 "
        aria-label="Previous slide"
      >
        <img src={left} className="w-4 h-4 sm:w-5 sm:h-5 lg:w-12 lg:h-12" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 lg:right-6 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 "
        aria-label="Next slide"
      >
        <img src={right} className="w-4 h-4 sm:w-5 sm:h-5 lg:w-12 lg:h-12" />
      </button>

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[600px] text-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full">
          {/* Decorative Sun Icon */}
          <div className="mb-6 sm:mb-8 lg:mb-12 flex justify-center">
           {/* <img src="" alt="" className="h-32 w-28 animate-spin-slow object-cover"/> */}
          </div>

          {/* Main Title */}
          <h1 className="text-2xl font-cinzel text-[#C89B6D] sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-light mb-3 sm:mb-4 lg:mb-6 max-w-6xl mx-auto leading-tight tracking-wider px-2">
            {slides[currentSlide].title}
          </h1>

          {/* Subtitle */}
          <p className="text-base font-cinzel sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-8 sm:mb-10 lg:mb-12 max-w-2xl mx-auto px-2">
            {slides[currentSlide].subtitle}
          </p>
      
        </div>
      </div>
    </div>
  )
}
