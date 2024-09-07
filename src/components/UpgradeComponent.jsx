import React from 'react';
import rca from "../assets/rca.webp"
import directtv from "../assets/directtv.webp"
import mydevice from "../assets/mydevice.webp"

const UpgradeComponent = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col justify-center items-center text-center text-white p-4">
      
      {/* Scrolling Logos */}
      <div className="relative overflow-hidden w-full max-w-4xl mb-24">
        <div className="flex animate-scrollX hover:animate-scrollXHover space-x-64">
          <img src={rca} alt="RCA Logo" className="w-32" />
          <img src={mydevice} alt="MyDevices Logo" className="w-32" />
          <img src={directtv} alt="DIRECTV Logo" className="w-32" />
          <img src={rca} alt="RCA Logo" className="w-32" /> {/* Repeating for infinite scroll */}
          <img src={mydevice} alt="MyDevices Logo" className="w-32" />
          <img src={directtv} alt="DIRECTV Logo" className="w-32" />
        </div>
      </div>

      {/* Heading and Subtext */}
      <h1 className="text-4xl font-bold mb-12">
        AN UPGRADE YOUR GUESTS WILL NEVER FORGET
      </h1>
      <p className="text-blue-400 text-lg mb-8">
        DIRECTV’s full suite of free-to-guest solutions will transform your properties, help reduce servicing costs and provide the ultimate commercial entertainment experience for all your guests.
      </p>

      {/* Button */}
      <button className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-6 rounded-md text-lg">
        UPGRADE NOW
      </button>
    </div>
  );
};

export default UpgradeComponent;
