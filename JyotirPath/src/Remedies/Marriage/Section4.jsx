import React from 'react';
import { Link } from "react-router-dom";

const services = [
  {
    id: 1,
    title: "Kundali Matching",
    description: "Unlock the secrets of your unique birth chart, including your Sun.",
    image: "https://i.pinimg.com/736x/36/5c/4f/365c4faca8de50d126961b257559a827.jpg",
    alt: "Astrological birth chart with planetary positions",
    path: "/femaleform",
  },
  {
    id: 2,
    title: "Love Marriage Consultation",
    description: "Helping you prepare for opportunities and challenges.",
    image: "https://i.pinimg.com/736x/bd/5f/e0/bd5fe0c57b86e8f37bfa54710773ad35.jpg",
    alt: "Tarot cards spread on wooden surface",
    path: "/loveform",
  },
];

const Section4 = () => {
  return (
    <div className="min-h-auto bg-gray-50 relative">
      {/* Services Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {services.map((service) => (
          <div key={service.id} className="flex flex-col md:flex-row h-[400px]">
            {/* Image Section */}
            <Link to="/genderform" className="flex-1 relative overflow-hidden cursor-pointer block">
              <img
                src={service.image}
                alt={service.alt}
                className="object-cover hover:scale-105 transition-transform duration-500 w-full h-full"
              />
            </Link>

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
    </div>
  );
};

export default Section4;
