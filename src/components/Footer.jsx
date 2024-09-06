import React from 'react';
import directtv from "../assets/directtv.webp"
import rca  from "../assets/rca.webp"
import mydevice from "../assets/mydevice.webp"

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About Us Section */}
        <div className='px-5'>
          <h3 className="text-xl font-semibold mb-4">About Us</h3>
          <p className="text-sm">
            Dishrus is an authorized dealer of DIRECTV for business that provides tailor-made entertainment, communication, and safety solutions for hotels, nursing homes & senior living homes, ensuring high guest satisfaction and low operational costs.
          </p>
        </div>

        {/* Partners Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Partners</h3>
          <div className="space-y-2">
            <img src={directtv} alt="DirectTV" className="w-24" />
            <img src={rca} alt="RCA" className="w-24" />
            <img src={mydevice} alt="myDevices" className="w-24" />
          </div>
        </div>

        {/* Solutions Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Solution</h3>
          <ul className="text-sm space-y-2">
            <li>Advanced Entertainment Platform AEP</li>
            <li>DIRECTV – Residential Experience</li>
            <li>DIRECTV – COM3000</li>
            <li>Dishrus's Headend System</li>
          </ul>
        </div>

        {/* Contact Us Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <ul className="text-sm space-y-2">
            <li><a href="tel:5167789366">(516) 778-9366</a></li>
            <li><a href="mailto:business@dishrus.com">business@dishrus.com</a></li>
            <li>60 Ira Road, Syosset, NY 11791</li>
            <li><a href="https://www.google.com/maps">Get Directions</a></li>
          </ul>
          {/* Social Media Links */}
          <div className="mt-4 space-x-4">
            <a href="#" className="text-blue-500"><i className="fab fa-facebook"></i></a>
            <a href="#" className="text-blue-400"><i className="fab fa-twitter"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
