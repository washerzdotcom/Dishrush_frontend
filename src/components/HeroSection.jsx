import React from "react";
import "./herosection.css";
import CardList from "./CardLists";

function HeroSection() {
  return (
    <div className="w-full h-screen flex flex-col hero-background slanted-bottom">
      {/* Main Content (Children) */}
      <div className="w-full h-full flex flex-col md:flex-row">
        {/* Left Component with Text and Button */}
        <div className="w-full md:w-1/2 h-full bg-transparent flex flex-col justify-center p-10">
          {/* Gradient Heading */}
          <h1 className="text-7xl font-extrabold text-white">    
            {/* bg-gradient-to-r from-purple-500 via-orange-400 to-blue-500 bg-clip-text text-transparent */}
            "Dishrus delivers budget-friendly
            <br /> entertainment."
          </h1>

          {/* Subtext */}
          <p className="mt-4 text-lg text-gray-300">
            Dishrus can help you find right solution on right budget for your
            hotel entertainment
          </p>

          {/* Button */}
          <button className="mt-6 w-32 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
            Get a Free Quote
          </button>
          <p className="mt-6 text-2xl text-gray-300">
          Call (516)778-9366
          </p>
        </div>

        {/* Right Component (Empty for now) */}
        <div className="w-full md:w-1/2 h-full bg-transparent flex items-center justify-center">
          {/* <p className="text-lg text-white">Right Component (Empty)</p> */}
          <CardList direction="down" />
          <CardList direction="up" />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
