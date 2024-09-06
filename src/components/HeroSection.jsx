import React from 'react'
import './herosection.css'
import CardList from './CardLists'

function HeroSection() {
  return (
    <div className="w-full h-screen flex flex-col hero-background slanted-bottom">
      {/* Main Content (Children) */}
      <div className="w-full h-full flex flex-col md:flex-row">
        {/* Left Component with Text and Button */}
        <div className="w-full md:w-1/2 h-full bg-transparent flex flex-col justify-center p-10">
          {/* Gradient Heading */}
          <h1 className="text-7xl font-extrabold bg-gradient-to-r from-purple-500 via-orange-400 to-blue-500 bg-clip-text text-transparent">
          "Dishrus delivers budget-friendly<br/> entertainment".
          </h1>

          {/* Subtext */}
          <p className="mt-4 text-lg text-gray-300">
            Create a delightful online journey by optimizing your shipping process and everything surrounding it.
          </p>

          {/* Button */}
          <button className="mt-6 px-4 py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700">
            Sign up for free
          </button>
        </div>

        {/* Right Component (Empty for now) */}
        <div className="w-full md:w-1/2 h-full bg-transparent flex items-center justify-center">
          {/* <p className="text-lg text-white">Right Component (Empty)</p> */}
          <CardList direction="down" />
          <CardList direction="up" />
        </div>
      </div>
    </div>
  )
}

export default HeroSection
