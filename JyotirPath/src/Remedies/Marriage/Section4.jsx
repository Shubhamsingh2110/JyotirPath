import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const services = [
  {
    id: 1,
    title: "Marriage Muhurat",
    description: "Compare your synastry and potential couple challenges.",
    image: "https://i.pinimg.com/736x/e5/5a/9a/e55a9a6ad6831e722eccfe08cdaa13b3.jpg",
    alt: "Meditation pose with chakra symbols",
  },
  {
    id: 2,
    title: "Kundali Matching",
    description: "Unlock the secrets of your unique birth chart, including your Sun.",
    image: "https://i.pinimg.com/736x/36/5c/4f/365c4faca8de50d126961b257559a827.jpg",
    alt: "Astrological birth chart with planetary positions",
  },
  {
    id: 3,
    title: "Love Marriage Consultation",
    description: "Helping you prepare for opportunities and challenges.",
    image: "https://i.pinimg.com/736x/bd/5f/e0/bd5fe0c57b86e8f37bfa54710773ad35.jpg",
    alt: "Tarot cards spread on wooden surface",
  },
  {
    id: 4,
    title: "Doshas & Remedies",
    description: "Gain a deeper understanding of your personality traits, strengths.",
    image: "https://i.pinimg.com/736x/65/e2/8a/65e28a9339f083e669762df31a894e4d.jpg",
    alt: "Zodiac wheel with sun symbol in center",
  },
];

const Section4 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const navigate = useNavigate();

  const handleImageClick = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const handleGenderSelect = (gender) => {
    setIsModalOpen(false);
    if (gender === "Male") {
      navigate("/maleform");
    } else if (gender === "Female") {
      navigate("/femaleform");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 relative">
      {/* Services Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {services.map((service) => (
          <div key={service.id} className="flex flex-col md:flex-row h-[400px]">
            {/* Image Section */}
            <div
              className="flex-1 relative overflow-hidden cursor-pointer"
              onClick={() => handleImageClick(service)}
            >
              <img
                src={service.image}
                alt={service.alt}
                className="object-cover hover:scale-105 transition-transform duration-500 w-full h-full"
              />
            </div>

            {/* Info Section */}
            <div className="flex-1 bg-black flex items-center justify-center p-8">
              <div className="text-center text-white space-y-4 max-w-xs">
                <h2 className="text-2xl font-light tracking-wide leading-tight font-cinzel">{service.title}</h2>
                <p className="text-gray-300 text-sm leading-relaxed">{service.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Gender Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white w-80 h-96 p-6 rounded-2xl shadow-xl flex flex-col justify-between relative">
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 right-3 text-gray-500 hover:text-gray-700 text-xl"
            >
              &times;
            </button>

            {/* Modal Content */}
            <div className="mt-6 text-center">
              <h2 className="text-2xl font-semibold mb-4">Select Gender</h2>
              <p className="text-gray-600 text-sm mb-6">
                For <span className="font-bold">{selectedService?.title}</span>
              </p>

              <div className="flex justify-center gap-4">
                {/* Male Button */}
                <button
                  onClick={() => handleGenderSelect("Male")}
                  className="w-full py-2 flex items-center justify-center gap-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round"
                      d="M16 8V4h4M16 4l-6.586 6.586a4 4 0 105.657 5.657L20 8" />
                  </svg>
                  Male
                </button>

                {/* Female Button */}
                <button
                  onClick={() => handleGenderSelect("Female")}
                  className="w-full py-2 flex items-center justify-center gap-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round"
                      d="M12 14a5 5 0 100-10 5 5 0 000 10zM12 14v7m0-7h-3m3 0h3" />
                  </svg>
                  Female
                </button>
              </div>
            </div>

            <div className="text-center text-xs text-gray-400 mt-6">
              Choosing gender helps us personalize your consultation.
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Section4;
