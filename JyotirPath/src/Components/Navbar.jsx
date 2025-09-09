import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("en");

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleTranslate = (langCode) => {
    const selectEl = document.querySelector(".goog-te-combo");
    if (selectEl) {
      selectEl.value = langCode;
      selectEl.dispatchEvent(new Event("change"));
      setCurrentLanguage(langCode);
      localStorage.setItem("preferredLanguage", langCode);
    }
  };

  useEffect(() => {
    // Google Translate Init
    window.googleTranslateElementInit = () => {
      if (window.google && window.google.translate) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            autoDisplay: false,
          },
          "google_translate_element"
        );
      }
    };

    const addTranslateScript = () => {
      if (!document.querySelector("#google-translate-script")) {
        const script = document.createElement("script");
        script.id = "google-translate-script";
        script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
        script.async = true;
        document.body.appendChild(script);
      }
    };

    addTranslateScript();

    const savedLang = localStorage.getItem("preferredLanguage");
    if (savedLang) {
      setCurrentLanguage(savedLang);
      setTimeout(() => handleTranslate(savedLang), 1000);
    }
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const target = event.target;
      if (isMobileMenuOpen && !target.closest(".mobile-menu-container")) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Hidden Google Translate Element */}
      <div id="google_translate_element" className="hidden"></div>

      <header className="bg-white text-black border-b border-stone-200 sticky top-0 z-40 shadow-sm">
        <div className="container mx-auto max-w-7xl">
          <div className="flex items-center justify-between h-20 md:h-24 lg:h-28 px-4 sm:px-6 lg:px-8">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <h1 className="text-xl sm:text-xl md:text-3xl lg:text-3xl font-light tracking-wider font-cinzel ">
                Devjanya Jyotish
              </h1>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-7 font-medium text-sm xl:text-base">
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
                <button className="hover:text-black flex items-center gap-1 group relative transition-colors">
                  <span className="text-[#C89B6D] group-hover:rotate-180 transition-transform duration-300">✦</span>
                  REMEDIES
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

              {/* ASTROLOGICAL Dropdown */}
              <div className="relative group">
                <button className="hover:text-black flex items-center gap-1 group relative transition-colors">
                  <span className="text-[#C89B6D] group-hover:rotate-180 transition-transform duration-300">✦</span>
                  ASTROLOGICAL
                </button>
                <div className="absolute opacity-0 invisible group-hover:opacity-100 group-hover:visible transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 ease-out bg-white border border-[#C89B6D] mt-2 py-3 px-4 space-y-2 shadow-xl z-50 min-w-[180px] rounded-md">
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
                    Ghar Shanti Pooja
                  </Link>
                </div>
              </div>

              <Link to="/about" className="hover:text-black flex items-center gap-1 group relative transition-colors">
                <span className="text-[#C89B6D] group-hover:rotate-180 transition-transform duration-300">✦</span>
                ABOUT US
              </Link>

              <Link to="/contact" className="hover:text-black flex items-center gap-1 group relative transition-colors">
                <span className="text-[#C89B6D] group-hover:rotate-180 transition-transform duration-300">✦</span>
                CONTACT
              </Link>

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
              <Link
                to="/"
                onClick={toggleMobileMenu}
                className="block w-full text-left py-2 text-lg font-medium hover:text-[#C89B6D] transition-colors duration-200"
              >
                HOME
              </Link>

              {/* Mobile Services */}
              <div className="space-y-3">
                <div className="text-[#C89B6D] font-semibold text-lg border-b border-[#C89B6D] pb-2">SERVICES</div>
                <div className="pl-4 space-y-2">
                  <Link
                    to="/service/astrology"
                    onClick={toggleMobileMenu}
                    className="block w-full text-left py-2 hover:text-[#C89B6D] hover:translate-x-2 transition-all duration-200"
                  >
                    Astrology
                  </Link>
                  <Link
                    to="/service/palmistry"
                    onClick={toggleMobileMenu}
                    className="block w-full text-left py-2 hover:text-[#C89B6D] hover:translate-x-2 transition-all duration-200"
                  >
                    Palmistry
                  </Link>
                  <Link
                    to="/service/numerology"
                    onClick={toggleMobileMenu}
                    className="block w-full text-left py-2 hover:text-[#C89B6D] hover:translate-x-2 transition-all duration-200"
                  >
                    Numerology
                  </Link>
                </div>
              </div>

              {/* Mobile Remedies */}
              <div className="space-y-3">
                <div className="text-[#C89B6D] font-semibold text-lg border-b border-[#C89B6D] pb-2">REMEDIES</div>
                <div className="pl-4 space-y-2">
                  <Link
                    to="/remedies/marriage"
                    onClick={toggleMobileMenu}
                    className="block w-full text-left py-2 hover:text-[#C89B6D] hover:translate-x-2 transition-all duration-200"
                  >
                    Marriage
                  </Link>
                  <Link
                    to="/remedies/progency"
                    onClick={toggleMobileMenu}
                    className="block w-full text-left py-2 hover:text-[#C89B6D] hover:translate-x-2 transition-all duration-200"
                  >
                    Progeny
                  </Link>
                  <Link
                    to="/remedies/education"
                    onClick={toggleMobileMenu}
                    className="block w-full text-left py-2 hover:text-[#C89B6D] hover:translate-x-2 transition-all duration-200"
                  >
                    Education
                  </Link>
                  <Link
                    to="/remedies/career"
                    onClick={toggleMobileMenu}
                    className="block w-full text-left py-2 hover:text-[#C89B6D] hover:translate-x-2 transition-all duration-200"
                  >
                    Career
                  </Link>
                  <Link
                    to="/remedies/muhurat"
                    onClick={toggleMobileMenu}
                    className="block w-full text-left py-2 hover:text-[#C89B6D] hover:translate-x-2 transition-all duration-200"
                  >
                    Muhurat
                  </Link>
                </div>
              </div>

              {/* Mobile Astrological */}
              <div className="space-y-3">
                <div className="text-[#C89B6D] font-semibold text-lg border-b border-[#C89B6D] pb-2">ASTROLOGICAL</div>
                <div className="pl-4 space-y-2">
                  <Link
                    to="/solution/gemstone"
                    onClick={toggleMobileMenu}
                    className="block w-full text-left py-2 hover:text-[#C89B6D] hover:translate-x-2 transition-all duration-200"
                  >
                    Gemstones/Rudraksh
                  </Link>
                  <Link
                    to="/solution/gharshanti"
                    onClick={toggleMobileMenu}
                    className="block w-full text-left py-2 hover:text-[#C89B6D] hover:translate-x-2 transition-all duration-200"
                  >
                    Ghar Shanti Pooja
                  </Link>
                </div>
              </div>

              {/* Mobile About & Contact */}
              <Link
                to="/about"
                onClick={toggleMobileMenu}
                className="block w-full text-left py-2 text-lg font-medium hover:text-[#C89B6D] transition-colors duration-200"
              >
                ABOUT US
              </Link>
              <Link
                to="/contact"
                onClick={toggleMobileMenu}
                className="block w-full text-left py-2 text-lg font-medium hover:text-[#C89B6D] transition-colors duration-200"
              >
                CONTACT
              </Link>

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
  );
};

export default Navbar;
