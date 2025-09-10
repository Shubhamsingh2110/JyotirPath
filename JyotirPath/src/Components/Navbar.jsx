import { Link } from "react-router";
import { useState } from "react";

export default function Header() {
  const [currentLanguage, setCurrentLanguage] = useState("en");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleTranslate = (language) => {
    setCurrentLanguage(language);
    // Add translation logic here
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white text-black border-b border-stone-200 sticky top-0 z-40 shadow-sm">
      <div className="container mx-auto max-w-7xl">
        <div className="flex items-center justify-between h-16 sm:h-20 md:h-24 lg:h-28 px-4 sm:px-6 lg:px-8">
          {/* Left Navigation - 3 items */}
          <nav className="hidden xl:flex items-center space-x-4 2xl:space-x-7 font-medium text-xs lg:text-sm xl:text-base">
            <Link to="/" className="hover:text-black flex items-center gap-1 group relative transition-colors">
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
                  to="/service/astrology"
                  className="block hover:text-[#C89B6D] py-2 hover:translate-x-2 transition-all duration-200"
                >
                  Astrology
                </Link>
                <Link
                  to="/service/palmistry"
                  className="block hover:text-[#C89B6D] py-2 hover:translate-x-2 transition-all duration-200"
                >
                  Palmistry
                </Link>
                <Link
                  to="/service/numerology"
                  className="block hover:text-[#C89B6D] py-2 hover:translate-x-2 transition-all duration-200"
                >
                  Numerology
                </Link>
              </div>
            </div>

            {/* REMEDIES Dropdown */}
            <div className="relative group">
              <button className="hover:text-black text-xs lg:text-sm flex items-center gap-1 group relative transition-colors">
                <span className="text-[#C89B6D] group-hover:rotate-180 transition-transform duration-300">✦</span>
                <span className="hidden lg:inline">REMEDIAL SOLUTIONS</span>
                <span className="lg:hidden">REMEDIES</span>
              </button>
              <div className="absolute opacity-0 invisible group-hover:opacity-100 group-hover:visible transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 ease-out bg-white border border-[#C89B6D] mt-2 py-3 px-4 space-y-2 shadow-xl z-50 min-w-[160px] rounded-md">
                <Link
                  to="/remedies/marriage"
                  className="block hover:text-[#C89B6D] py-2 hover:translate-x-2 transition-all duration-200"
                >
                  Marriage
                </Link>
                <Link
                  to="/remedies/progency"
                  className="block hover:text-[#C89B6D] py-2 hover:translate-x-2 transition-all duration-200"
                >
                  Progeny
                </Link>
                <Link
                  to="/remedies/education"
                  className="block hover:text-[#C89B6D] py-2 hover:translate-x-2 transition-all duration-200"
                >
                  Education
                </Link>
                <Link
                  to="/remedies/career"
                  className="block hover:text-[#C89B6D] py-2 hover:translate-x-2 transition-all duration-200"
                >
                  Career
                </Link>
                <Link
                  to="/remedies/muhurat"
                  className="block hover:text-[#C89B6D] py-2 hover:translate-x-2 transition-all duration-200"
                >
                  Muhurat
                </Link>
              </div>
            </div>
          </nav>

          <nav className="hidden lg:flex xl:hidden items-center space-x-3 font-medium text-xs">
            <Link to="/" className="hover:text-black flex items-center gap-1 group relative transition-colors">
              <span className="text-[#C89B6D]">✦</span>
              HOME
            </Link>
            <Link
              to="/services"
              className="hover:text-black flex items-center gap-1 group relative transition-colors"
            >
              <span className="text-[#C89B6D]">✦</span>
              SERVICES
            </Link>
            <Link to="/about" className="hover:text-black flex items-center gap-1 group relative transition-colors">
              <span className="text-[#C89B6D]">✦</span>
              ABOUT
            </Link>
          </nav>

          {/* Logo - Centered */}
          <Link to="/" className="flex-shrink-0 mx-4 lg:mx-0">
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl font-light tracking-wider font-serif text-center">
              <span className="block sm:hidden">Devjanya</span>
              <span className="hidden sm:block">Devjanya Jyotish</span>
            </h1>
          </Link>

          {/* Right Navigation - 3 items */}
          <nav className="hidden xl:flex items-center space-x-4 2xl:space-x-7 font-medium text-xs lg:text-sm xl:text-base">
            {/* ASTROLOGICAL Dropdown */}
            <div className="relative group">
              <button className="hover:text-black text-xs lg:text-sm flex items-center gap-1 group relative transition-colors">
                <span className="text-[#C89B6D] group-hover:rotate-180 transition-transform duration-300">✦</span>
                <span className="hidden lg:inline">DAIVIYA SAHYOG</span>
                <span className="lg:hidden">SOLUTIONS</span>
              </button>
              <div className="absolute opacity-0 invisible group-hover:opacity-100 group-hover:visible transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 ease-out bg-white border border-[#C89B6D] mt-2 py-3 px-4 space-y-2 shadow-xl z-50 min-w-[180px] rounded-md right-0">
                <Link
                  to="/solution/gemstone"
                  className="block hover:text-[#C89B6D] py-2 hover:translate-x-2 transition-all duration-200"
                >
                  Gemstones/Rudraksh
                </Link>
                <Link
                  to="/solution/gharshanti"
                  className="block hover:text-[#C89B6D] py-2 hover:translate-x-2 transition-all duration-200"
                >
                  Grah Shanti pooja
                </Link>
              </div>
            </div>

            <Link
              to="/about"
              className="hover:text-black text-xs lg:text-sm flex items-center gap-1 group relative transition-colors"
            >
              <span className="text-[#C89B6D] group-hover:rotate-180 transition-transform duration-300">✦</span>
              ABOUT US
            </Link>

            <Link to="/contact" className="hover:text-black flex items-center gap-1 group relative transition-colors">
              <span className="text-[#C89B6D] group-hover:rotate-180 transition-transform duration-300">✦</span>
              CONTACT
            </Link>
          </nav>

          <nav className="hidden lg:flex xl:hidden items-center space-x-3 font-medium text-xs">
            <Link
              to="/solutions"
              className="hover:text-black flex items-center gap-1 group relative transition-colors"
            >
              <span className="text-[#C89B6D]">✦</span>
              SOLUTIONS
            </Link>
            <Link to="/contact" className="hover:text-black flex items-center gap-1 group relative transition-colors">
              <span className="text-[#C89B6D]">✦</span>
              CONTACT
            </Link>
          </nav>

          {/* Language Toggle - Positioned after right nav */}
          <div className="hidden lg:flex gap-2 ml-2 xl:ml-4">
            <button
              onClick={() => handleTranslate("hi")}
              className={`px-2 xl:px-3 py-1 rounded-full text-xs xl:text-sm transition-all duration-200 ${
                currentLanguage === "hi"
                  ? "bg-[#C89B6D] text-white"
                  : "border border-[#C89B6D] text-[#C89B6D] hover:bg-[#C89B6D] hover:text-white"
              }`}
            >
              हिंदी
            </button>
            <button
              onClick={() => handleTranslate("en")}
              className={`px-2 xl:px-3 py-1 rounded-full text-xs xl:text-sm transition-all duration-200 ${
                currentLanguage === "en"
                  ? "bg-[#C89B6D] text-white"
                  : "border border-[#C89B6D] text-[#C89B6D] hover:bg-[#C89B6D] hover:text-white"
              }`}
            >
              EN
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMobileMenu}
              className="p-2 text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#C89B6D] rounded-md"
              aria-label="Toggle mobile menu"
            >
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
            <nav className="px-4 py-4 space-y-3 max-h-[80vh] overflow-y-auto">
              <Link
                to="/"
                className="block py-3 text-base font-medium hover:text-[#C89B6D] transition-colors border-b border-stone-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                HOME
              </Link>

              <div className="space-y-3 border-b border-stone-100 pb-3">
                <div className="text-base font-semibold text-gray-900 flex items-center gap-2">
                  <span className="text-[#C89B6D]">✦</span>
                  SERVICES
                </div>
                <div className="pl-6 space-y-2">
                  <Link
                    to="/service/astrology"
                    className="block py-2 text-sm text-gray-600 hover:text-[#C89B6D] transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Astrology
                  </Link>
                  <Link
                    to="/service/palmistry"
                    className="block py-2 text-sm text-gray-600 hover:text-[#C89B6D] transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Palmistry
                  </Link>
                  <Link
                    to="/service/numerology"
                    className="block py-2 text-sm text-gray-600 hover:text-[#C89B6D] transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Numerology
                  </Link>
                </div>
              </div>

              <div className="space-y-3 border-b border-stone-100 pb-3">
                <div className="text-base font-semibold text-gray-900 flex items-center gap-2">
                  <span className="text-[#C89B6D]">✦</span>
                  REMEDIAL SOLUTIONS
                </div>
                <div className="pl-6 space-y-2">
                  <Link
                    to="/remedies/marriage"
                    className="block py-2 text-sm text-gray-600 hover:text-[#C89B6D] transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Marriage
                  </Link>
                  <Link
                    to="/remedies/progency"
                    className="block py-2 text-sm text-gray-600 hover:text-[#C89B6D] transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Progeny
                  </Link>
                  <Link
                    to="/remedies/education"
                    className="block py-2 text-sm text-gray-600 hover:text-[#C89B6D] transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Education
                  </Link>
                  <Link
                    to="/remedies/career"
                    className="block py-2 text-sm text-gray-600 hover:text-[#C89B6D] transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Career
                  </Link>
                  <Link
                    to="/remedies/muhurat"
                    className="block py-2 text-sm text-gray-600 hover:text-[#C89B6D] transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Muhurat
                  </Link>
                </div>
              </div>

              <div className="space-y-3 border-b border-stone-100 pb-3">
                <div className="text-base font-semibold text-gray-900 flex items-center gap-2">
                  <span className="text-[#C89B6D]">✦</span>
                  DAIVIYA SAHYOG
                </div>
                <div className="pl-6 space-y-2">
                  <Link
                    to="/solution/gemstone"
                    className="block py-2 text-sm text-gray-600 hover:text-[#C89B6D] transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Gemstones/Rudraksh
                  </Link>
                  <Link
                    to="/solution/gharshanti"
                    className="block py-2 text-sm text-gray-600 hover:text-[#C89B6D] transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Grah Shanti pooja
                  </Link>
                </div>
              </div>

              <Link
                to="/about"
                className="block py-3 text-base font-medium hover:text-[#C89B6D] transition-colors border-b border-stone-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                ABOUT US
              </Link>

              <Link
                to="/contact"
                className="block py-3 text-base font-medium hover:text-[#C89B6D] transition-colors border-b border-stone-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                CONTACT
              </Link>

              {/* Language Toggle for Mobile */}
              <div className="flex gap-3 pt-4">
                <button
                  onClick={() => handleTranslate("hi")}
                  className={`flex-1 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    currentLanguage === "hi"
                      ? "bg-[#C89B6D] text-white"
                      : "border border-[#C89B6D] text-[#C89B6D] hover:bg-[#C89B6D] hover:text-white"
                  }`}
                >
                  हिंदी
                </button>
                <button
                  onClick={() => handleTranslate("en")}
                  className={`flex-1 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
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
  );
}
