import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Importing icons for the hamburger menu
import logo from '../assets/dishrush_logo.webp';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="flex items-center justify-between py-2 px-6 bg-gray-800 text-white relative">
      {/* Logo */}
      <div className="flex-shrink-0">
        <a href="#">
          <img src={logo} alt="Logo" className="h-14 w-auto object-contain" />
        </a>
      </div>

      {/* Hamburger Icon for Mobile */}
      <div className="md:hidden">
        <button onClick={toggleMobileMenu} className="text-white focus:outline-none">
          {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Navigation Links */}
      <ul
        className={`flex-col md:flex-row md:flex space-y-4 md:space-y-0 md:space-x-8 absolute md:static left-0 md:left-auto w-full md:w-auto bg-gray-800 md:bg-transparent p-6 md:p-0 transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'top-16 flex' : 'top-[-490px] hidden md:flex'
        }`}
      >
        <li><a href="#" className="block md:inline-block hover:text-gray-400">Home</a></li>
        <li><a href="#" className="block md:inline-block hover:text-gray-400">Solution</a></li>
        <li><a href="#" className="block md:inline-block hover:text-gray-400">Industries</a></li>
        <li><a href="#" className="block md:inline-block hover:text-gray-400">Blog</a></li>
        <li><a href="#" className="block md:inline-block hover:text-gray-400">About</a></li>
        <li><a href="#" className="block md:inline-block hover:text-gray-400">Contact Us</a></li>
      </ul>

      {/* Login Button */}
      <div className="hidden md:block">
        <button className="px-4 py-2 bg-blue-500 rounded hover:bg-blue-600">Try for Free</button>
      </div>
    </nav>
  );
};

export default Navbar;
