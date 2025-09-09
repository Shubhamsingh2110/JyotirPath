import { Link } from "react-router";
import { useState } from "react"

export default function Header() {
  const [currentLanguage, setCurrentLanguage] = useState("en")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleTranslate = (language) => {
    setCurrentLanguage(language)
    // Add translation logic here
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <header className="bg-white text-black border-b border-stone-200 sticky top-0 z-40 shadow-sm">
      <div className="container mx-auto max-w-7xl">
        <div className="flex items-center justify-between h-20 md:h-24 lg:h-28 px-4 sm:px-6 lg:px-8 translate-x-20">
          {/* Left Navigation - 3 items */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-7 font-medium text-sm xl:text-base">
            <Link href="/" className="hover:text-black flex items-center gap-1 group relative transition-colors">
              <span className="text-[#C89B6D] group-hover:rotate-180 transition-transform duration-300">✦</span>
              HOME
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C89B6D] group-hover:w-full transition-all duration-300 ease-out" />
            </Link>

            {/* SERVICES Dropdown */}
            <div className="relative group">
              <button className="hover:text-black flex items-center gap-1 group relative transition-colors">
                <span className="text-[#C89B6D] group-hover:rotate-180 transition-transform duration-300">✦</span>
                SERVICES
              </button>
              <div className="absolute opacity-0 invisible group-hover:opacity-100 group-hover:visible transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 ease-out bg-white border border-[#C89B6D] mt-2 py-3 px-4 space-y-2 shadow-xl z-50 min-w-[160px] rounded-md">
                <Link
                  href="/service/astrology"
                  className="block hover:text-[#C89B6D] py-2 hover:translate-x-2 transition-all duration-200"
                >
                  Astrology
                </Link>
                <Link
                  href="/service/palmistry"
                  className="block hover:text-[#C89B6D] py-2 hover:translate-x-2 transition-all duration-200"
                >
                  Palmistry
                </Link>
                <Link
                  href="/service/numerology"
                  className="block hover:text-[#C89B6D] py-2 hover:translate-x-2 transition-all duration-200"
                >
                  Numerology
                </Link>
              </div>
            </div>

            {/* REMEDIES Dropdown */}
            <div className="relative group">
              <button className="hover:text-black text-sm flex items-center gap-1 group relative transition-colors">
                <span className="text-[#C89B6D] group-hover:rotate-180 transition-transform duration-300">✦</span>
                REMEDIAL SOLUTIONS
              </button>
              <div className="absolute opacity-0 invisible group-hover:opacity-100 group-hover:visible transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 ease-out bg-white border border-[#C89B6D] mt-2 py-3 px-4 space-y-2 shadow-xl z-50 min-w-[160px] rounded-md">
                <Link
                  href="/remedies/marriage"
                  className="block hover:text-[#C89B6D] py-2 hover:translate-x-2 transition-all duration-200"
                >
                  Marriage
                </Link>
                <Link
                  href="/remedies/progency"
                  className="block hover:text-[#C89B6D] py-2 hover:translate-x-2 transition-all duration-200"
                >
                  Progeny
                </Link>
                <Link
                  href="/remedies/education"
                  className="block hover:text-[#C89B6D] py-2 hover:translate-x-2 transition-all duration-200"
                >
                  Education
                </Link>
                <Link
                  href="/remedies/career"
                  className="block hover:text-[#C89B6D] py-2 hover:translate-x-2 transition-all duration-200"
                >
                  Career
                </Link>
                <Link
                  href="/remedies/muhurat"
                  className="block hover:text-[#C89B6D] py-2 hover:translate-x-2 transition-all duration-200"
                >
                  Muhurat
                </Link>
              </div>
            </div>
          </nav>

          {/* Logo - Centered */}
          <Link href="/" className="flex-shrink-0">
            <h1 className="text-xl sm:text-xl md:text-3xl lg:text-2xl font-light tracking-wider font-cinzel">
              Devjanya Jyotish
            </h1>
          </Link>

          {/* Right Navigation - 3 items */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-7 font-medium text-sm xl:text-base">
            {/* ASTROLOGICAL Dropdown */}
            <div className="relative group">
              <button className="hover:text-black text-sm flex items-center gap-1 group relative transition-colors">
                <span className="text-[#C89B6D] group-hover:rotate-180 transition-transform duration-300">✦</span>
                DAIVIYA SAHYOG
              </button>
              <div className="absolute opacity-0 invisible group-hover:opacity-100 group-hover:visible transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 ease-out bg-white border border-[#C89B6D] mt-2 py-3 px-4 space-y-2 shadow-xl z-50 min-w-[180px] rounded-md">
                <Link
                  href="/solution/gemstone"
                  className="block hover:text-[#C89B6D] py-2 hover:translate-x-2 transition-all duration-200"
                >
                  Gemstones/Rudraksh
                </Link>
                <Link
                  href="/solution/gharshanti"
                  className="block hover:text-[#C89B6D] py-2 hover:translate-x-2 transition-all duration-200"
                >
                  Grah Shanti pooja
                </Link>
              </div>
            </div>

            <Link
              href="/about"
              className="hover:text-black text-sm flex items-center gap-1 group relative transition-colors"
            >
              <span className="text-[#C89B6D] group-hover:rotate-180 transition-transform duration-300">✦</span>
              ABOUT US
            </Link>

            <Link href="/contact" className="hover:text-black flex items-center gap-1 group relative transition-colors">
              <span className="text-[#C89B6D] group-hover:rotate-180 transition-transform duration-300">✦</span>
              CONTACT
            </Link>
          </nav>

          {/* Language Toggle - Positioned after right nav */}
          <div className="hidden lg:flex gap-2">
            <button
              onClick={() => handleTranslate("hi")}
              className={`px-3 py-1 rounded-full text-sm transition-all duration-200 ${
                currentLanguage === "hi"
                  ? "bg-[#C89B6D] text-white"
                  : "border border-[#C89B6D] text-[#C89B6D] hover:bg-[#C89B6D] hover:text-white"
              }`}
            >
              हिंदी
            </button>
            <button
              onClick={() => handleTranslate("en")}
              className={`px-3 py-1 rounded-full text-sm transition-all duration-200 ${
                currentLanguage === "en"
                  ? "bg-[#C89B6D] text-white"
                  : "border border-[#C89B6D] text-[#C89B6D] hover:bg-[#C89B6D] hover:text-white"
              }`}
            >
              English
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button onClick={toggleMobileMenu} className="p-2 text-gray-600 hover:text-gray-900">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-stone-200 shadow-lg">
            <nav className="px-4 py-6 space-y-4">
              <Link href="/" className="block py-2 text-sm font-medium hover:text-[#C89B6D] transition-colors">
                HOME
              </Link>

              <div className="space-y-2">
                <div className="text-sm font-medium text-gray-900">SERVICES</div>
                <div className="pl-4 space-y-2">
                  <Link href="/service/astrology" className="block py-1 text-sm text-gray-600 hover:text-[#C89B6D]">
                    Astrology
                  </Link>
                  <Link href="/service/palmistry" className="block py-1 text-sm text-gray-600 hover:text-[#C89B6D]">
                    Palmistry
                  </Link>
                  <Link href="/service/numerology" className="block py-1 text-sm text-gray-600 hover:text-[#C89B6D]">
                    Numerology
                  </Link>
                </div>
              </div>

              <div className="space-y-2">
                <div className="text-sm font-medium text-gray-900">REMEDIAL SOLUTIONS</div>
                <div className="pl-4 space-y-2">
                  <Link href="/remedies/marriage" className="block py-1 text-sm text-gray-600 hover:text-[#C89B6D]">
                    Marriage
                  </Link>
                  <Link href="/remedies/progency" className="block py-1 text-sm text-gray-600 hover:text-[#C89B6D]">
                    Progeny
                  </Link>
                  <Link href="/remedies/education" className="block py-1 text-sm text-gray-600 hover:text-[#C89B6D]">
                    Education
                  </Link>
                  <Link href="/remedies/career" className="block py-1 text-sm text-gray-600 hover:text-[#C89B6D]">
                    Career
                  </Link>
                  <Link href="/remedies/muhurat" className="block py-1 text-sm text-gray-600 hover:text-[#C89B6D]">
                    Muhurat
                  </Link>
                </div>
              </div>

              <div className="space-y-2">
                <div className="text-sm font-medium text-gray-900">DAIVIYA SAHYOG</div>
                <div className="pl-4 space-y-2">
                  <Link href="/solution/gemstone" className="block py-1 text-sm text-gray-600 hover:text-[#C89B6D]">
                    Gemstones/Rudraksh
                  </Link>
                  <Link href="/solution/gharshanti" className="block py-1 text-sm text-gray-600 hover:text-[#C89B6D]">
                    Grah Shanti pooja
                  </Link>
                </div>
              </div>

              <Link href="/about" className="block py-2 text-sm font-medium hover:text-[#C89B6D] transition-colors">
                ABOUT US
              </Link>

              <Link href="/contact" className="block py-2 text-sm font-medium hover:text-[#C89B6D] transition-colors">
                CONTACT
              </Link>

              {/* Language Toggle for Mobile */}
              <div className="flex gap-2 pt-4 border-t border-stone-200">
                <button
                  onClick={() => handleTranslate("hi")}
                  className={`px-3 py-1 rounded-full text-sm transition-all duration-200 ${
                    currentLanguage === "hi"
                      ? "bg-[#C89B6D] text-white"
                      : "border border-[#C89B6D] text-[#C89B6D] hover:bg-[#C89B6D] hover:text-white"
                  }`}
                >
                  हिंदी
                </button>
                <button
                  onClick={() => handleTranslate("en")}
                  className={`px-3 py-1 rounded-full text-sm transition-all duration-200 ${
                    currentLanguage === "en"
                      ? "bg-[#C89B6D] text-white"
                      : "border border-[#C89B6D] text-[#C89B6D] hover:bg-[#C89B6D] hover:text-white"
                  }`}
                >
                  English
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
