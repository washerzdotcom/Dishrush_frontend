import React, { useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

const TestimonialCard = (props) => {  // Rename this Card to TestimonialCard
    let review = props.review;
    return (
        <div className='flex flex-col md:relative'>
            <div className='absolute top-[-7rem] z-[10] mx-auto'>
                {/* <img
                    className="aspect-square rounded-full w-[140px] h-[140px] z-[25]"
                    src={review.image}
                    alt={review.name}
                /> */}
                {/* <div className='w-[140px] h-[140px] bg-violet-500 rounded-full absolute top-[-6px] z-[-10] left-[10px]'></div> */}
            </div>

            <div className='text-center mt-7'>
                <p className='tracking-wider font-bold text-2xl capitalize'>{review.name}</p>
                <p className='text-blue-800 uppercase text-sm'>{review.job}</p>
            </div>

            <div className='text-blue-800 mx-auto mt-5'>
                <FaQuoteLeft />
            </div>

            <div className='text-center mt-4 text-slate-500'>
                {review.text}
            </div>

            <div className='text-blue-800 mx-auto mt-5'>
                <FaQuoteRight />
            </div>
        </div>
    );
}

const Testimonials = (props) => {
    let reviews = props.reviews;
    const [index, setIndex] = useState(0);

    function leftShiftHandler() {
        if (index - 1 < 0) {
            setIndex(reviews.length - 1);
        } else {
            setIndex(index - 1);
        }
    }

    function rightShiftHandler() {
        if (index + 1 >= reviews.length) {
            setIndex(0);
        } else {
            setIndex(index + 1);
        }
    }

    function surpriseHandler() {
        let randomIndex = Math.floor(Math.random() * reviews.length);
        setIndex(randomIndex);
    }

    // Automatically move to the next slide every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            rightShiftHandler();
        }, 2000); // Change slide every 5 seconds

        // Clean up the interval on component unmount
        return () => clearInterval(interval);
    }, [index]);

    return (
        <div className='w-[85vw] md:w-[700px] bg-white flex flex-col justify-center items-center mt-10 p-10 transition-all duration-700 hover:shadow-xl rounded-md'>
            <TestimonialCard review={reviews[index]} /> {/* Use renamed component */}

            <div className='flex text-3xl mt-10 gap-3 text-blue-800 font-bold mx-auto'>
                <button
                    onClick={leftShiftHandler}
                    className='cursor-pointer hover:text-blue-800 '>
                    <FiChevronLeft />
                </button>
                <button
                    onClick={rightShiftHandler}
                    className='cursor-pointer hover:text-blue-800 '>
                    <FiChevronRight />
                </button>
            </div>

            <div className='mt-6'>
                <button
                    onClick={surpriseHandler}
                    className='bg-blue-800 hover:bg-blue-500 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg'>
                    Surprise Me
                </button>
            </div>
        </div>
    );
}

export default Testimonials;
