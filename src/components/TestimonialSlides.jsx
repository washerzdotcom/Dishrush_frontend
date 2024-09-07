import React from 'react'
import Testimonials from "./Testimonials"
import reviews from "../utilites/reviewdata";

const TestimonialSlides = () => {
  return (
    <div className="flex flex-col w-full h-[100vh] justify-center items-center bg-gray-200 overflow-x-hidden">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Our Testimonials</h1>
          <div className="bg-blue-800 h-[4px] w-1/5 mt-1 mx-auto"></div>
          <Testimonials reviews={reviews} />
        </div>
      </div>
  )
}

export default TestimonialSlides;
