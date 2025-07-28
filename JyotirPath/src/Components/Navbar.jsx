"use client"

import { Menu, X } from "lucide-react"
import { useEffect, useState } from "react"

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [currentLanguage, setCurrentLanguage] = useState("en")

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const handleNavigate = (path) => {
    // You can replace this with your preferred navigation method
    // For example: window.location.href = path
    // Or use React Router: navigate(path)
    window.location.href = path
    setIsMobileMenuOpen(false)
  }

  const handleTranslate = (langCode) => {
    const selectEl = document.querySelector(".goog-te-combo")
    if (selectEl) {
      selectEl.value = langCode
      selectEl.dispatchEvent(new Event("change"))
      setCurrentLanguage(langCode)
      localStorage.setItem("preferredLanguage", langCode)
    }
  }

  useEffect(() => {
    // Google Translate Init
    window.googleTranslateElementInit = () => {
      if (window.google && window.google.translate) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            autoDisplay: false,
          },
          "google_translate_element",
        )
      }
    }

    const addTranslateScript = () => {
      if (!document.querySelector("#google-translate-script")) {
        const script = document.createElement("script")
        script.id = "google-translate-script"
        script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        script.async = true
        document.body.appendChild(script)
      }
    }

    addTranslateScript()

    const savedLang = localStorage.getItem("preferredLanguage")
    if (savedLang) {
      setCurrentLanguage(savedLang)
      setTimeout(() => handleTranslate(savedLang), 1000)
    }
  }, [])

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const target = event.target
      if (isMobileMenuOpen && !target.closest(".mobile-menu-container")) {
        setIsMobileMenuOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [isMobileMenuOpen])

  return (
    <>
      {/* Hidden Google Translate Element */}
      <div id="google_translate_element" className="hidden"></div>

      <header className="bg-white text-black border-b border-stone-200 sticky top-0 z-40 shadow-sm">
        <div className="container mx-auto max-w-7xl">
          <div className="flex items-center justify-between h-20 md:h-24 lg:h-28 px-4 sm:px-6 lg:px-8">
            {/* Logo */}
            <a href="/" className="flex-shrink-0">
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light tracking-wider font-cinzel ">
                JyotirPath
              </h1>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-10 font-medium text-sm xl:text-base">
              {/* HOME */}
              <a href="/" className="hover:text-black flex items-center gap-1 group relative transition-colors">
                <span className="text-[#C89B6D] group-hover:rotate-180 transition-transform duration-300">✦</span>
                HOME
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C89B6D] group-hover:w-full transition-all duration-300 ease-out" />
              </a>

              {/* SERVICES Dropdown */}
              <div className="relative group">
                <button className="hover:text-black flex items-center gap-1 group relative transition-colors">
                  <span className="text-[#C89B6D] group-hover:rotate-180 transition-transform duration-300">✦</span>
                  SERVICES
                </button>
                <div className="absolute opacity-0 invisible group-hover:opacity-100 group-hover:visible transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 ease-out bg-white border border-[#C89B6D] mt-2 py-3 px-4 space-y-2 shadow-xl z-50 min-w-[160px] rounded-md">
                  <a
                    href="/service/astrology"
                    className="block hover:text-[#C89B6D] py-2 hover:translate-x-2 transition-all duration-200"
                  >
                    Astrology
                  </a>
                  <a
                    href="/service/palmistry"
                    className="block hover:text-[#C89B6D] py-2 hover:translate-x-2 transition-all duration-200"
                  >
                    Palmistry
                  </a>
                  <a
                    href="/service/numerology"
                    className="block hover:text-[#C89B6D] py-2 hover:translate-x-2 transition-all duration-200"
                  >
                    Numerology
                  </a>
                </div>
              </div>

              {/* REMEDIES Dropdown */}
              <div className="relative group">
                <button className="hover:text-black flex items-center gap-1 group relative transition-colors">
                  <span className="text-[#C89B6D] group-hover:rotate-180 transition-transform duration-300">✦</span>
                  REMEDIES
                </button>
                <div className="absolute opacity-0 invisible group-hover:opacity-100 group-hover:visible transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 ease-out bg-white border border-[#C89B6D] mt-2 py-3 px-4 space-y-2 shadow-xl z-50 min-w-[160px] rounded-md">
                  <a
                    href="/remedies/marriage"
                    className="block hover:text-[#C89B6D] py-2 hover:translate-x-2 transition-all duration-200"
                  >
                    Marriage
                  </a>
                  <a
                    href="/remedies/progency"
                    className="block hover:text-[#C89B6D] py-2 hover:translate-x-2 transition-all duration-200"
                  >
                    Progency
                  </a>
                  <a
                    href="/remedies/education"
                    className="block hover:text-[#C89B6D] py-2 hover:translate-x-2 transition-all duration-200"
                  >
                    Education
                  </a>
                  <a
                    href="/remedies/career"
                    className="block hover:text-[#C89B6D] py-2 hover:translate-x-2 transition-all duration-200"
                  >
                    Career
                  </a>
                  <a
                    href="/remedies/muhurat"
                    className="block hover:text-[#C89B6D] py-2 hover:translate-x-2 transition-all duration-200"
                  >
                    Muhurat
                  </a>
                </div>
              </div>

              {/* ASTROLOGICAL Dropdown */}
              <div className="relative group">
                <button className="hover:text-black flex items-center gap-1 group relative transition-colors">
                  <span className="text-[#C89B6D] group-hover:rotate-180 transition-transform duration-300">✦</span>
                  ASTROLOGICAL
                </button>
                <div className="absolute opacity-0 invisible group-hover:opacity-100 group-hover:visible transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 ease-out bg-white border border-[#C89B6D] mt-2 py-3 px-4 space-y-2 shadow-xl z-50 min-w-[180px] rounded-md">
                  <a
                    href="/solution/gemstone"
                    className="block hover:text-[#C89B6D] py-2 hover:translate-x-2 transition-all duration-200"
                  >
                    Gemstones
                  </a>
                  <a
                    href="/solution/gharshanti"
                    className="block hover:text-[#C89B6D] py-2 hover:translate-x-2 transition-all duration-200"
                  >
                    Ghar Shanti Pooja
                  </a>
                </div>
              </div>

              <a href="/about" className="hover:text-black flex items-center gap-1 group relative transition-colors">
                <span className="text-[#C89B6D] group-hover:rotate-180 transition-transform duration-300">✦</span>
                ABOUT US
              </a>

              <a href="/contact" className="hover:text-black flex items-center gap-1 group relative transition-colors">
                <span className="text-[#C89B6D] group-hover:rotate-180 transition-transform duration-300">✦</span>
                CONTACT
              </a>

              {/* Language Toggle */}
              <div className="flex gap-2 ml-4">
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

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 text-black hover:text-[#C89B6D] transition-colors duration-200 mobile-menu-container"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          <div
            className={`lg:hidden mobile-menu-container transition-all duration-300 ease-in-out overflow-hidden ${
              isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="bg-gradient-to-b from-gray-900 to-black border-t border-[#C89B6D] px-4 sm:px-6 py-6 space-y-6 text-white">
              {/* Mobile Home */}
              <button
                onClick={() => handleNavigate("/")}
                className="block w-full text-left py-2 text-lg font-medium hover:text-[#C89B6D] transition-colors duration-200"
              >
                HOME
              </button>

              {/* Mobile Services */}
              <div className="space-y-3">
                <div className="text-[#C89B6D] font-semibold text-lg border-b border-[#C89B6D] pb-2">SERVICES</div>
                <div className="pl-4 space-y-2">
                  <button
                    onClick={() => handleNavigate("/service/astrology")}
                    className="block w-full text-left py-2 hover:text-[#C89B6D] hover:translate-x-2 transition-all duration-200"
                  >
                    Astrology
                  </button>
                  <button
                    onClick={() => handleNavigate("/service/palmistry")}
                    className="block w-full text-left py-2 hover:text-[#C89B6D] hover:translate-x-2 transition-all duration-200"
                  >
                    Palmistry
                  </button>
                  <button
                    onClick={() => handleNavigate("/service/numerology")}
                    className="block w-full text-left py-2 hover:text-[#C89B6D] hover:translate-x-2 transition-all duration-200"
                  >
                    Numerology
                  </button>
                </div>
              </div>

              {/* Mobile Remedies */}
              <div className="space-y-3">
                <div className="text-[#C89B6D] font-semibold text-lg border-b border-[#C89B6D] pb-2">REMEDIES</div>
                <div className="pl-4 space-y-2">
                  <button
                    onClick={() => handleNavigate("/remedies/marriage")}
                    className="block w-full text-left py-2 hover:text-[#C89B6D] hover:translate-x-2 transition-all duration-200"
                  >
                    Marriage
                  </button>
                  <button
                    onClick={() => handleNavigate("/remedies/progency")}
                    className="block w-full text-left py-2 hover:text-[#C89B6D] hover:translate-x-2 transition-all duration-200"
                  >
                    Progency
                  </button>
                  <button
                    onClick={() => handleNavigate("/remedies/education")}
                    className="block w-full text-left py-2 hover:text-[#C89B6D] hover:translate-x-2 transition-all duration-200"
                  >
                    Education
                  </button>
                  <button
                    onClick={() => handleNavigate("/remedies/career")}
                    className="block w-full text-left py-2 hover:text-[#C89B6D] hover:translate-x-2 transition-all duration-200"
                  >
                    Career
                  </button>
                  <button
                    onClick={() => handleNavigate("/remedies/muhurat")}
                    className="block w-full text-left py-2 hover:text-[#C89B6D] hover:translate-x-2 transition-all duration-200"
                  >
                    Muhurat
                  </button>
                </div>
              </div>

              {/* Mobile Astrological */}
              <div className="space-y-3">
                <div className="text-[#C89B6D] font-semibold text-lg border-b border-[#C89B6D] pb-2">ASTROLOGICAL</div>
                <div className="pl-4 space-y-2">
                  <button
                    onClick={() => handleNavigate("/solution/gemstone")}
                    className="block w-full text-left py-2 hover:text-[#C89B6D] hover:translate-x-2 transition-all duration-200"
                  >
                    Gemstones
                  </button>
                  <button
                    onClick={() => handleNavigate("/solution/gharshanti")}
                    className="block w-full text-left py-2 hover:text-[#C89B6D] hover:translate-x-2 transition-all duration-200"
                  >
                    Ghar Shanti Pooja
                  </button>
                </div>
              </div>

              {/* Mobile About & Contact */}
              <button
                onClick={() => handleNavigate("/about")}
                className="block w-full text-left py-2 text-lg font-medium hover:text-[#C89B6D] transition-colors duration-200"
              >
                ABOUT US
              </button>
              <button
                onClick={() => handleNavigate("/contact")}
                className="block w-full text-left py-2 text-lg font-medium hover:text-[#C89B6D] transition-colors duration-200"
              >
                CONTACT
              </button>

              {/* Mobile Language Buttons */}
              <div className="flex gap-3 pt-4 border-t border-gray-700">
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
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar
