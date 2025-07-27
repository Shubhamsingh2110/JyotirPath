import { Search, ShoppingBag, Settings, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("en");
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavigate = (path) => {
    navigate(path);
    setIsMobileMenuOpen(false);
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
        script.src =
          "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
        script.async = true;
        document.body.appendChild(script);
      }
    };

    addTranslateScript();

    const savedLang = localStorage.getItem("preferredLanguage");
    if (savedLang) {
      setCurrentLanguage(savedLang);
      setTimeout(() => handleTranslate(savedLang), 1000); // Delay to ensure script loads
    }
  }, []);

  return (
    <header className="bg-white text-black border-b-[0.2px] border-stone-200">
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-28 px-4">
          <h1 className="text-2xl md:text-4xl font-light tracking-wider font-cinzel">JyotirPath</h1>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-10 font-poppins text-base font-medium">
            {/* --- HOME --- */}
            <button onClick={() => navigate("/")} className="hover:text-black flex items-center gap-1 group relative">
              <span className="text-[#C89B6D] group-hover:rotate-180 transition-transform duration-300">✦</span>
              HOME
              <span className="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 ease-out" style={{ backgroundColor: "#C89B6D" }} />
            </button>

            {/* --- SERVICES Dropdown --- */}
            <div className="relative group">
              <button className="hover:text-black flex items-center gap-1 group relative">
                <span className="text-[#C89B6D] group-hover:rotate-180 transition-transform duration-300">✦</span>
                SERVICES
              </button>
              <div className="absolute opacity-0 invisible group-hover:opacity-100 group-hover:visible transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 ease-out bg-white border border-[#C89B6D] mt-2 py-2 px-4 space-y-2 shadow-xl z-50 min-w-[150px]">
                <button onClick={() => navigate("/service/astrology")} className="block hover:text-[#C89B6D] py-1 hover:translate-x-2">Astrology</button>
                <button onClick={() => navigate("/service/palmistry")} className="block hover:text-[#C89B6D] py-1 hover:translate-x-2">Palmistry</button>
                <button onClick={() => navigate("/service/numerology")} className="block hover:text-[#C89B6D] py-1 hover:translate-x-2">Numerology</button>
              </div>
            </div>

            {/* --- REMEDIES Dropdown --- */}
            <div className="relative group">
              <button className="hover:text-black flex items-center gap-1 group relative">
                <span className="text-[#C89B6D] group-hover:rotate-180 transition-transform duration-300">✦</span>
                REMEDIES
              </button>
              <div className="absolute opacity-0 invisible group-hover:opacity-100 group-hover:visible transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 ease-out bg-white border border-[#C89B6D] mt-2 py-2 px-4 space-y-2 shadow-xl z-50 min-w-[150px]">
                <button onClick={() => navigate("/remedies/marriage")} className="block hover:text-[#C89B6D] py-1 hover:translate-x-2">Marriage</button>
                <button onClick={() => navigate("/remedies/progency")} className="block hover:text-[#C89B6D] py-1 hover:translate-x-2">Progency</button>
                <button onClick={() => navigate("/remedies/education")} className="block hover:text-[#C89B6D] py-1 hover:translate-x-2">Education</button>
                <button onClick={() => navigate("/remedies/career")} className="block hover:text-[#C89B6D] py-1 hover:translate-x-2">Career</button>
                <button onClick={() => navigate("/remedies/muhurat")} className="block hover:text-[#C89B6D] py-1 hover:translate-x-2">Muhurat</button>
              </div>
            </div>

            {/* --- ASTROLOGICAL --- */}
            <div className="relative group">
              <button className="hover:text-black flex items-center gap-1 group relative">
                <span className="text-[#C89B6D] group-hover:rotate-180 transition-transform duration-300">✦</span>
                ASTROLOGICAL
              </button>
              <div className="absolute opacity-0 invisible group-hover:opacity-100 group-hover:visible transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 ease-out bg-white border border-[#C89B6D] mt-2 py-2 px-4 space-y-2 shadow-xl z-50 min-w-[180px]">
                <button onClick={() => navigate("/solution/gemstone")} className="block hover:text-[#C89B6D] py-1 hover:translate-x-2">Gemstones</button>
                <button onClick={() => navigate("/solution/gharshanti")} className="block hover:text-[#C89B6D] py-1 hover:translate-x-2">Ghar Shanti Pooja</button>
              </div>
            </div>

            <button onClick={() => navigate("/about")} className="hover:text-black flex items-center gap-1 group relative">
              <span className="text-[#C89B6D] group-hover:rotate-180 transition-transform duration-300">✦</span>
              ABOUT US
            </button>

            <button onClick={() => navigate("/contact")} className="hover:text-black flex items-center gap-1 group relative">
              <span className="text-[#C89B6D] group-hover:rotate-180 transition-transform duration-300">✦</span>
              CONTACT
            </button>

            {/* Language Toggle */}
            <div className="flex gap-2 ml-4">
              <button
                onClick={() => handleTranslate("hi")}
                className={`px-3 py-1 rounded-full text-sm ${
                  currentLanguage === "hi"
                    ? "bg-[#C89B6D] text-white"
                    : "border border-[#C89B6D] text-[#C89B6D] hover:bg-[#C89B6D] hover:text-white"
                }`}
              >
                हिंदी
              </button>
              <button
                onClick={() => handleTranslate("en")}
                className={`px-3 py-1 rounded-full text-sm ${
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
          <button onClick={toggleMobileMenu} className="lg:hidden p-2 text-black hover:text-[#C89B6D]">
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-black border-t border-[#C89B6D] px-4 py-6 space-y-4 text-white font-poppins">
            <button onClick={() => handleNavigate("/")}>HOME</button>
            <div>
              <div className="text-[#C89B6D] font-semibold">SERVICES</div>
              <button onClick={() => handleNavigate("/service/astrology")}>Astrology</button>
              <button onClick={() => handleNavigate("/service/palmistry")}>Palmistry</button>
              <button onClick={() => handleNavigate("/service/numerology")}>Numerology</button>
            </div>
            <div>
              <div className="text-[#C89B6D] font-semibold">REMEDIES</div>
              <button onClick={() => handleNavigate("/remedies/marriage")}>Marriage</button>
              <button onClick={() => handleNavigate("/remedies/progency")}>Progency</button>
              <button onClick={() => handleNavigate("/remedies/education")}>Education</button>
              <button onClick={() => handleNavigate("/remedies/career")}>Career</button>
              <button onClick={() => handleNavigate("/remedies/muhurat")}>Muhurat</button>
            </div>
            <div>
              <div className="text-[#C89B6D] font-semibold">ASTROLOGICAL</div>
              <button onClick={() => handleNavigate("/solution/gemstone")}>Gemstones</button>
              <button onClick={() => handleNavigate("/solution/gharshanti")}>Ghar Shanti Pooja</button>
            </div>
            <button onClick={() => handleNavigate("/about")}>ABOUT US</button>
            <button onClick={() => handleNavigate("/contact")}>CONTACT</button>

            {/* Mobile Language Buttons */}
            <div className="flex gap-2 mt-4">
              <button
                onClick={() => handleTranslate("hi")}
                className={`px-3 py-1 rounded-full text-sm ${
                  currentLanguage === "hi"
                    ? "bg-[#C89B6D] text-white"
                    : "border border-[#C89B6D] text-[#C89B6D] hover:bg-[#C89B6D] hover:text-white"
                }`}
              >
                हिंदी
              </button>
              <button
                onClick={() => handleTranslate("en")}
                className={`px-3 py-1 rounded-full text-sm ${
                  currentLanguage === "en"
                    ? "bg-[#C89B6D] text-white"
                    : "border border-[#C89B6D] text-[#C89B6D] hover:bg-[#C89B6D] hover:text-white"
                }`}
              >
                English
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
