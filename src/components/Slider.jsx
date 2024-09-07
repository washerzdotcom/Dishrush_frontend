import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import hbo from "../assets/movies/hbo_cinema.webp"; // Example logo paths
import showtime from "../assets/movies/showtime.webp";
import nfl from "../assets/movies/nfl.webp"

const brands = [
    { name: 'HBO', logo: hbo },
    { name: 'Showtime', logo: showtime },
    { name: 'NFL', logo: nfl },
    { name: 'HBO', logo: hbo },
    { name: 'Showtime', logo: showtime },
    { name: 'NFL', logo: nfl },
    // Add more brands as needed
];

const Carousel = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 5000,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: 'linear',
        arrows: false,
        pauseOnHover: false,
    };

    return (
     <>
             <div className="max-w-full py-5 mt-7">
            <Slider {...settings}>
                {brands.map((brand, index) => (
                    <div
                        key={index}
                        className="flex justify-center items-center bg-white border border-gray-200 rounded-lg h-24 p-4 mx-2 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
                    >
                        <img 
                            src={brand.logo} 
                            alt={brand.name} 
                            className="h-full w-full object-contain" 
                        />
                    </div>
                ))}
            </Slider>
        </div>
        <div className="w-full py-12 mt-5 text-center bg-white">
      <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-grey-500 bg-transparent">
        DEAL FOR NEW DIRECTV COMMERCIAL ACCOUNT ADVANTAGES FOR HOTELS GREAT OFFERS ON DIRECTV HOSPITALITY
      </h2>
      <p className="mt-8 text-lg text-gray-600">
        New Directv commercial Packages Starts From <span className="font-bold text-black">$9.30/room per month</span>
      </p>
      <button className="mt-6 w-32 py-2 bg-blue-900 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
            Channel LineUp
          </button>
    </div>
     </>
    );
};

export default Carousel;
