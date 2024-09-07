// src/PromoSection.js
import React from 'react';
import tv from "../assets/Tv.webp"

const PromoSection = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between max-w-6xl mx-auto p-8 bg-white m-24">
      {/* Text Section */}
      <div className="lg:w-1/2 text-center lg:text-left space-y-4">
        <h2 className="text-3xl font-bold text-gray-900">
          Enjoy 3 Months of DirecTV <span className="text-blue-600">for Free!</span>
        </h2>
        <p className="text-gray-700">
          Don’t miss out on this limited-time opportunity to enjoy premium entertainment
          at no cost. Claim your free 3 months now! Give a remarkable in-room experience to your guest.
        </p>
        <p className="text-gray-700">
          Directv New Year Promotion for 2024 has been rolled out. This promotion is only
          applicable for commercial/business properties.
        </p>
        <button className="mt-4 px-6 py-3 bg-blue-700 text-white font-semibold rounded-md shadow-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform transform hover:scale-105 active:scale-95">
          Claim Now
        </button>
      </div>

      {/* Image Section */}
      <div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center lg:justify-end">
        <img
          src={tv} // replace with the actual path or URL of the image
          alt="DirecTV Offer"
          className="w-full max-w-md rounded-md shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
        />
      </div>
    </div>
  );
};

export default PromoSection;
