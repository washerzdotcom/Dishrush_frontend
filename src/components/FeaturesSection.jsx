// src/FeaturesSection.js
import React from 'react';

const features = [
  {
    title: 'DIRECTV ADVANCED ENTERTAINMENT PLATFORM (AEP)',
    icon: 'HD', // You can replace this with an actual image path if needed
    points: [
      'AEP supports 4K HDR, HD and SD satellite broadcast channels',
      'Easy customized home screen for your property with logo and brand',
      'Gain access to premium On-Demand entertainment',
      'RELIABLE, ENERGY-EFFICIENT',
      'Remotely manageable',
      'Easy search-and-highlight menu and guide designs',
      'SHOWTIME and Hallmark Channel Everywhere',
      'DIRECTV linear satellite and broadband over-the-top (OTT) content',
    ],
  },
  {
    title: 'DIRECTV RESIDENTIAL EXPERIENCE (DRE & DRE PLUS)',
    icon: 'HD',
    points: [
      'Interactive HD entertainment',
      'Access to over 100 HD channels',
      'Compact, hidden HD receivers',
      'No master control server or switches required',
      'Property Management System Integration (DRE+)',
      'Ability to change default language. Example Spanish (DRE+)',
      'Send on screen messages to guest rooms (DRE+)',
      'HBO and Showtime on demand (DRE+)',
      'Optional DVR facility - pause, rewind, record Live (DRE+)',
    ],
  },
  {
    title: 'DIRECTV - COM 3000',
    icon: '4K',
    points: [
      'Third generation commercial headend TV from Direct TV.',
      'Extremely compact system (Up to 138 channels per chassis)',
      'Supports 4K HDR satellite broadcast channels.',
      'Requires Pro Idiom TVs for HD output',
      'System is energy efficient and simple to install',
      'Available for any size property over most wiring schemes.',
      'No receiver in the room',
      'The Unit qualifies as a Plug and Play',
      'Engineered to be backward compatible for expansion of existing deployments',
    ],
  },
];

const FeaturesSection = () => {
  return (
    <>
    <h1 className='flex justify-center items-center mt-10 text-4xl font-bold'>DIRECTV SYSTEM & OTA SOLUTIONS</h1>
    <div className="max-w-6xl mx-auto px-4 py-10 grid gap-8 lg:grid-cols-3">
      {features.map((feature, index) => (
        <div
          key={index}
          className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg border transform hover:scale-105 transition-transform duration-300"
        >
          <h3 className="text-black text-lg font-bold mb-4">{feature.title}</h3>
          <div className="text-3xl text-gray-600 mb-6">{feature.icon}</div> {/* Replace with an actual icon if available */}
          <ul className="space-y-2 text-left">
            {feature.points.map((point, i) => (
              <li
                key={i}
                className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500 before:content-['✔'] before:text-green-500 before:mr-2"
              >
                {point}
              </li>
            ))}
          </ul>
          <button className="mt-6 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-700 text-white font-semibold rounded-md shadow-md hover:bg-gradient-to-r hover:from-purple-700 hover:to-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-transform transform hover:scale-105 active:scale-95">
            Learn More
          </button>
        </div>
      ))}
    </div>
    </>
    
  );
};

export default FeaturesSection;
