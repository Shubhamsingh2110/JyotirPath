import { Link } from "react-router";
import { useEffect, useState } from "react";

export default function Header() {
  const [currentLanguage, setCurrentLanguage] = useState("en");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleTranslate = (language) => {
    setCurrentLanguage(language);

    // ✅ Trigger Google Translate language change
    const selectEl = document.querySelector(".goog-te-combo");
    if (selectEl) {
      selectEl.value = language;
      selectEl.dispatchEvent(new Event("change"));
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    document.body.appendChild(script);

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "en,hi",
          autoDisplay: false,
        },
        "google_translate_element"
      );
    };
  }, []);

  return (
    <header className="bg-white text-black border-b border-stone-200 sticky top-0 z-40 shadow-sm">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Logo Section */}
        <div className="flex items-center justify-between py-4 sm:py-6">
          <Link to="/" className="flex-1 flex justify-center">
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl font-light tracking-wider font-cinzel text-center">
              <span className="block sm:hidden">Devjanya</span>
              <span className="hidden sm:block">Devjanya Jyotish</span>
            </h1>
          </Link>

          {/* Mobile menu button */}
          <div className="lg:hidden absolute right-4 sm:right-6">
            <button
              onClick={toggleMobileMenu}
              className="p-2 text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#C89B6D] rounded-md"
              aria-label="Toggle mobile menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Navigation Section (Desktop) */}
        <div className="hidden lg:flex items-center justify-center pb-4">
          <div className="flex items-center space-x-6 xl:space-x-8 font-medium text-xs lg:text-sm xl:text-base">
            {/* HOME */}
            <Link
              to="/"
              className="hover:text-black flex items-center gap-1 group relative transition-colors"
            >
              <span className="text-[#C89B6D] group-hover:rotate-180 transition-transform duration-300">
                ✦
              </span>
              HOME
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C89B6D] group-hover:w-full transition-all duration-300 ease-out" />
            </Link>

            {/* SERVICES Dropdown */}
            <div className="relative group">
              <button className="hover:text-black flex items-center gap-1 group relative transition-colors">
                <span className="text-[#C89B6D] group-hover:rotate-180 transition-transform duration-300">
                  ✦
                </span>
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

            {/* REMEDIAL SOLUTIONS Dropdown */}
            <div className="relative group">
              <button className="hover:text-black text-xs lg:text-base flex items-center gap-1 group relative transition-colors">
                <span className="text-[#C89B6D] group-hover:rotate-180 transition-transform duration-300">
                  ✦
                </span>
                <span className="hidden xl:inline">REMEDIAL SOLUTIONS</span>
                <span className="xl:hidden">REMEDIES</span>
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

            {/* DAIVIYA SAHYOG Dropdown */}
            <div className="relative group">
              <button className="hover:text-black text-xs lg:text-base flex items-center gap-1 group relative transition-colors">
                <span className="text-[#C89B6D] group-hover:rotate-180 transition-transform duration-300">
                  ✦
                </span>
                <span className="hidden xl:inline">DAIVIYA SAHYOG</span>
                <span className="xl:hidden">SOLUTIONS</span>
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

            {/* ABOUT US */}
            <Link
              to="/about"
              className="hover:text-black text-xs lg:text-base flex items-center gap-1 group relative transition-colors"
            >
              <span className="text-[#C89B6D] group-hover:rotate-180 transition-transform duration-300">
                ✦
              </span>
              ABOUT US
            </Link>

            {/* CONTACT */}
            <Link
              to="/contact"
              className="hover:text-black flex items-center gap-1 group relative transition-colors"
            >
              <span className="text-[#C89B6D] group-hover:rotate-180 transition-transform duration-300">
                ✦
              </span>
              CONTACT
            </Link>

            {/* Language Toggle (Desktop) */}
            <div className="flex gap-2 ml-4 xl:ml-6">
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
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-stone-200 shadow-lg">
            <nav className="px-4 py-4 space-y-3 max-h-[80vh] overflow-y-auto">
              {/* Mobile nav links here ... */}
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
              {/* Language Toggle (Mobile) */}
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

      {/* Hidden Google Translate dropdown (needed for switching) */}
      <div id="google_translate_element" className="hidden"></div>
    </header>
  );
}
