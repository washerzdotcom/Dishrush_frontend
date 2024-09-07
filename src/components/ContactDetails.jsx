import React from 'react'
import free from "../assets/freequoto.webp"

const ContactDetails = () => {
  return (
    <>
    <h1 className='flex justify-center items-center mt-10 text-4xl font-bold'>Contact Us</h1>
    <div className="bg-blue-800 h-[4px] w-1/5 mt-1 mx-auto"></div>
    <div className='flex justify-center items-center  mx-64 my-12'>
    <img src={free} />
    {/* hello */}
</div>
    </>
  )
}

export default ContactDetails