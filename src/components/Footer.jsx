import React from "react";
import { FaFacebook, FaTwitter, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import directtv from "../assets/directtv.webp"
import rca  from "../assets/rca.webp"
import mydevice from "../assets/mydevice.webp"

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
        {/* About Us */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">About Us</h2>
          <p className="text-sm leading-relaxed">
            Dishrus is an authorized dealer of DIRECTV FOR BUSINESS that
            provides tailor-made entertainment, communication, and safety
            solutions for hotels, nursing homes & senior living homes, ensuring
            high guest satisfaction and low operational costs.
          </p>
        </div>

        {/* Partners */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Partners</h2>
          <div className="space-y-2">
            <img
              src={directtv} // Replace with actual image URL or import
              alt="DIRECTV"
              className="w-28"
            />
            <img
              src={rca} // Replace with actual image URL or import
              alt="RCA"
              className="w-20"
            />
            <img
              src={mydevice} // Replace with actual image URL or import
              alt="myDevices"
              className="w-32"
            />
          </div>
        </div>

        {/* Solution */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Solution</h2>
          <ul className="space-y-2 text-sm">
            <li>Advance Entertainment Platform AEP</li>
            <li>DIRECTV – Residential Experience</li>
            <li>DIRECTV – COM3000</li>
            <li>Dishrus’s Headend System</li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <ul className="text-sm space-y-2">
            <li className="flex items-center">
              <FaPhoneAlt className="mr-2" /> (516) 778-9366
            </li>
            <li className="flex items-center">
              <FaEnvelope className="mr-2" />{" "}
              <a href="mailto:BUSINESS@DISHRUS.COM" className="underline">
                BUSINESS@DISHRUS.COM
              </a>
            </li>
          </ul>

          {/* Visit Us */}
          <div className="mt-4">
            <h3 className="text-lg font-semibold">Visit Us</h3>
            <p className="text-sm">60 Ira Road, Syosset, NY 11791</p>
            <a
              href="https://www.google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 text-blue-500 underline flex items-center"
            >
              <FaMapMarkerAlt className="mr-2" /> Get Directions
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="container mx-auto flex justify-between items-center py-4 px-4 mt-8">
        <div className="space-x-4 flex items-center">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={24} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={24} />
          </a>
        </div>

        {/* <div className="ml-0">
            <p>all right reserved to dishrus pvt ltd</p>
        </div> */}

        {/* <a
          href="#quote"
          className="bg-green-500 text-white px-4 py-2 rounded-full"
        >
          Get a free quote now!
        </a> */}
      </div>
    </footer>
  );
};

export default Footer;