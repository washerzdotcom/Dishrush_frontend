import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Sample images (Replace with actual images)
import image1 from "../assets/Hotel.webp";
import image2 from "../assets/room.webp";
import image3 from "../assets/bar.webp";

const CarouselComponent = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true, // For automatic scrolling
      autoplaySpeed: 3000,
      fade: true, // For fade effect
      arrows: true, // Left and right arrows
    };
  
    return (
      <div className="w-full max-w-4xl mx-auto mt-8 mb-6 overflow-hidden">
        <Slider {...settings}>
          {/* Carousel Slide 1 */}
          <div className="relative">
            <img
              src={image1}
              alt="Slide 1"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
            {/* Full shadow overlay with centered text */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center rounded-lg">
              <h2 className="text-white text-2xl font-semibold">Hotels</h2>
            </div>
          </div>
  
          {/* Carousel Slide 2 */}
          <div className="relative">
            <img
              src={image2}
              alt="Slide 2"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
            {/* Full shadow overlay with centered text */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center rounded-lg">
              <h2 className="text-white text-2xl font-semibold">Hospitals</h2>
            </div>
          </div>
  
          {/* Carousel Slide 3 */}
          <div className="relative">
            <img
              src={image3}
              alt="Slide 3"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
            {/* Full shadow overlay with centered text */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center rounded-lg">
              <h2 className="text-white text-2xl font-semibold">Bar & Restaurants</h2>
            </div>
          </div>
        </Slider>
      </div>
    );
  };
  
  export default CarouselComponent;
  