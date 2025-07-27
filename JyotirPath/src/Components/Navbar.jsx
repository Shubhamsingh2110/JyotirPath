import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("en"); // Add state for current language
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavigate = (path) => {
    navigate(path);
    setIsMobileMenuOpen(false);
  };

  const handleTranslate = (langCode) => {
    // Update current language state
    setCurrentLanguage(langCode);
    
    // Trigger Google Translate
    const selectEl = document.querySelector(".goog-te-combo");
    if (selectEl) {
      selectEl.value = langCode;
      selectEl.dispatchEvent(new Event("change"));
    }
  };

  useEffect(() => {
    // Try to detect initial language from localStorage or browser
    const detectInitialLanguage = () => {
      // Check localStorage first
      const savedLanguage = localStorage.getItem('preferredLanguage');
      if (savedLanguage) {
        setCurrentLanguage(savedLanguage);
      }
      // If no saved preference, check browser language
      else if (navigator.language && navigator.language.includes('hi')) {
        setCurrentLanguage('hi');
      }
    };

    detectInitialLanguage();

    // Define the global init function before the script is loaded
    window.googleTranslateElementInit = () => {
      if (window.google && window.google.translate) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            autoDisplay: false,
          },
          "google_translate_element"
        );
        
        // Apply saved language after init
        setTimeout(() => {
          const savedLang = localStorage.getItem('preferredLanguage');
          if (savedLang && savedLang !== 'en') {
            const selectEl = document.querySelector(".goog-te-combo");
            if (selectEl) {
              selectEl.value = savedLang;
              selectEl.dispatchEvent(new Event("change"));
            }
          }
        }, 1000);
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
  }, []);

  return (
    <header className="bg-white text-black border-b border-stone-200">
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-28 px-4">
          {/* Logo / Brand */}
          <h1 className="text-2xl md:text-4xl font-light tracking-wider font-cinzel">
            JyotirPath
          </h1>

          {/* Desktop Navigation */}
          <nav
            role="navigation"
            aria-label="Main navigation"
            className="hidden lg:flex items-center space-x-10 font-poppins text-base font-medium"
          >
            <NavButton onClick={() => navigate("/")}>HOME</NavButton>

            <Dropdown label="SERVICES">
              <DropdownItem onClick={() => navigate("/service/astrology")}>Astrology</DropdownItem>
              <DropdownItem onClick={() => navigate("/service/palmistry")}>Palmistry</DropdownItem>
              <DropdownItem onClick={() => navigate("/service/numerology")}>Numerology</DropdownItem>
            </Dropdown>

            <Dropdown label="REMEDIES">
              <DropdownItem onClick={() => navigate("/remedies/marriage")}>Marriage</DropdownItem>
              <DropdownItem onClick={() => navigate("/remedies/progency")}>Progency</DropdownItem>
              <DropdownItem onClick={() => navigate("/remedies/education")}>Education</DropdownItem>
              <DropdownItem onClick={() => navigate("/remedies/career")}>Career</DropdownItem>
              <DropdownItem onClick={() => navigate("/remedies/muhurat")}>Muhurat</DropdownItem>
            </Dropdown>

            <Dropdown label="ASTROLOGICAL">
              <DropdownItem onClick={() => navigate("/solution/gemstone")}>Gemstones</DropdownItem>
              <DropdownItem onClick={() => navigate("/solution/gharshanti")}>Ghar Shanti Pooja</DropdownItem>
            </Dropdown>

            <NavButton onClick={() => navigate("/about")}>ABOUT US</NavButton>
            <NavButton onClick={() => navigate("/contact")}>CONTACT</NavButton>

            {/* Translate Buttons with active state styling */}
            <div className="flex gap-2 ml-4">
              <button
                onClick={() => {
                  handleTranslate("hi");
                  localStorage.setItem('preferredLanguage', 'hi');
                }}
                className={`px-3 py-1 rounded-full text-sm transition-colors ${
                  currentLanguage === "hi"
                    ? "bg-[#C89B6D] text-white" 
                    : "border border-[#C89B6D] text-[#C89B6D] hover:bg-[#C89B6D] hover:text-white"
                }`}
              >
                हिंदी
              </button>
              <button
                onClick={() => {
                  handleTranslate("en");
                  localStorage.setItem('preferredLanguage', 'en');
                }}
                className={`px-3 py-1 rounded-full text-sm transition-colors ${
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
            className="lg:hidden p-2 text-black hover:text-[#C89B6D]"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            <span className="sr-only">Toggle menu</span>
          </button>
        </div>

        {/* Google Translate Hidden Container */}
        <div id="google_translate_element" style={{ display: "none" }} />

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-black border-t border-[#C89B6D] px-4 py-6 space-y-4 text-white font-poppins">
            <button onClick={() => handleNavigate("/")} className="block">HOME</button>

            <MobileGroup title="SERVICES">
              <button onClick={() => handleNavigate("/service/astrology")}>Astrology</button>
              <button onClick={() => handleNavigate("/service/palmistry")}>Palmistry</button>
              <button onClick={() => handleNavigate("/service/numerology")}>Numerology</button>
            </MobileGroup>

            <MobileGroup title="REMEDIES">
              <button onClick={() => handleNavigate("/remedies/marriage")}>Marriage</button>
              <button onClick={() => handleNavigate("/remedies/progency")}>Progency</button>
              <button onClick={() => handleNavigate("/remedies/education")}>Education</button>
              <button onClick={() => handleNavigate("/remedies/career")}>Career</button>
              <button onClick={() => handleNavigate("/remedies/muhurat")}>Muhurat</button>
            </MobileGroup>

            <MobileGroup title="ASTROLOGICAL">
              <button onClick={() => handleNavigate("/solution/gemstone")}>Gemstones</button>
              <button onClick={() => handleNavigate("/solution/gharshanti")}>Ghar Shanti Pooja</button>
            </MobileGroup>

            <button onClick={() => handleNavigate("/about")}>ABOUT US</button>
            <button onClick={() => handleNavigate("/contact")}>CONTACT</button>

            {/* Translate Buttons with active state styling for mobile */}
            <div className="flex gap-2 mt-4">
              <button 
                onClick={() => {
                  handleTranslate("hi");
                  localStorage.setItem('preferredLanguage', 'hi');
                }} 
                className={`px-3 py-1 rounded-full text-sm transition-colors ${
                  currentLanguage === "hi"
                    ? "bg-[#C89B6D] text-white" 
                    : "border border-[#C89B6D] text-[#C89B6D] hover:bg-[#C89B6D] hover:text-white"
                }`}
              >
                हिंदी
              </button>
              <button 
                onClick={() => {
                  handleTranslate("en");
                  localStorage.setItem('preferredLanguage', 'en');
                }} 
                className={`px-3 py-1 rounded-full text-sm transition-colors ${
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

const NavButton = ({ children, onClick }) => (
  <button onClick={onClick} className="hover:text-black flex items-center gap-1 group relative">
    <span className="text-[#C89B6D] group-hover:rotate-180 transition-transform duration-300">✦</span>
    {children}
    <span
      className="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 ease-out"
      style={{ backgroundColor: "#C89B6D" }}
    />
  </button>
);

const Dropdown = ({ label, children }) => (
  <div className="relative group">
    <button className="hover:text-black flex items-center gap-1 group relative">
      <span className="text-[#C89B6D] group-hover:rotate-180 transition-transform duration-300">✦</span>
      {label}
      <span
        className="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 ease-out"
        style={{ backgroundColor: "#C89B6D" }}
      />
    </button>
    <div className="absolute opacity-0 invisible group-hover:opacity-100 group-hover:visible transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 ease-out bg-white border border-[#C89B6D] mt-2 py-2 px-4 space-y-2 shadow-xl z-50 min-w-[150px]">
      {children}
    </div>
  </div>
);

const DropdownItem = ({ children, onClick }) => (
  <button onClick={onClick} className="block hover:text-[#C89B6D] py-1 hover:translate-x-2">
    {children}
  </button>
);

const MobileGroup = ({ title, children }) => (
  <div className="pl-4 space-y-1">
    <div className="text-[#C89B6D] font-semibold">{title}</div>
    {children}
  </div>
);
