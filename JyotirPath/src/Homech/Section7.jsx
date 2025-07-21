import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const MiniPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleOptionClick = (gender) => {
    console.log("Selected gender:", gender);
    navigate("/form");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="px-5 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
      >
        Open Mini Screen
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white w-80 h-96 p-6 rounded-2xl shadow-xl flex flex-col justify-between relative">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-3 text-gray-500 hover:text-gray-700 text-xl"
            >
              &times;
            </button>

            {/* Modal Content */}
            <div className="mt-6">
              <h2 className="text-2xl font-semibold text-center mb-6">Select Gender</h2>

              <div className="flex justify-between gap-4 px-4">
                <button
                  onClick={() => handleOptionClick("Male")}
                  className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                >
                  Male
                </button>
                <button
                  onClick={() => handleOptionClick("Female")}
                  className="w-full py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition"
                >
                  Female
                </button>
              </div>
            </div>

            <div className="text-center text-sm text-gray-400 mt-6">
              Please choose your gender to continue.
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MiniPopup;
