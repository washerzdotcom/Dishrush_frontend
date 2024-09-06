import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const brands = [
    { name: 'RELAXO', logo: '/path-to-logo1.png' },
    { name: 'Gillette', logo: '/path-to-logo2.png' },
    { name: 'BeatO', logo: '/path-to-logo3.png' },
    { name: 'm caffeine', logo: '/path-to-logo4.png' },
    { name: 'BODYCARE', logo: '/path-to-logo5.png' },
    { name: 'Aalishan', logo: '/path-to-logo6.png' },
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
        <div className="max-w-full py-5">
            <Slider {...settings}>
                {brands.map((brand, index) => (
                    <div
                        key={index}
                        className="flex justify-center items-center bg-white border border-gray-200 rounded-lg h-24 p-4 mx-2 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
                    >
                        <div className="text-center">
                            <h3 className="text-lg font-semibold text-blue-900">{brand.name}</h3>
                            {/* Optional: Add a subtext similar to the image */}
                            {/* <p className="text-sm text-gray-600">SMART DIABETES MANAGEMENT</p> */}
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Carousel;
