// src/ContactForm.js
import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    mobileNumber: '',
    propertyName: '',
    propertyNumber: '',
    zipCode: '',
    businessType: '',
    bestTimeToContact: '',
    currentTvProvider: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-10 p-8 bg-white shadow-lg rounded-lg border border-gray-200 m-10">
      {/* <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Contact Us</h2> */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-gray-700 font-medium mb-1" htmlFor="firstName">
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200 ease-in-out transform hover:scale-105 focus:scale-105"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1" htmlFor="lastName">
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200 ease-in-out transform hover:scale-105 focus:scale-105"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1" htmlFor="mobileNumber">
            Mobile Number
          </label>
          <input
            type="tel"
            name="mobileNumber"
            id="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200 ease-in-out transform hover:scale-105 focus:scale-105"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1" htmlFor="propertyName">
            Property Name
          </label>
          <input
            type="text"
            name="propertyName"
            id="propertyName"
            value={formData.propertyName}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200 ease-in-out transform hover:scale-105 focus:scale-105"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1" htmlFor="propertyNumber">
            Property Number
          </label>
          <input
            type="text"
            name="propertyNumber"
            id="propertyNumber"
            value={formData.propertyNumber}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200 ease-in-out transform hover:scale-105 focus:scale-105"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1" htmlFor="zipCode">
            Zip Code
          </label>
          <input
            type="text"
            name="zipCode"
            id="zipCode"
            value={formData.zipCode}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200 ease-in-out transform hover:scale-105 focus:scale-105"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-1" htmlFor="businessType">
            Business Type
          </label>
          <select
            name="businessType"
            id="businessType"
            value={formData.businessType}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200 ease-in-out transform hover:scale-105 focus:scale-105"
          >
            <option value="">Select Business Type</option>
            <option value="Hotel">Hotel</option>
            <option value="Motel">Motel</option>
            <option value="Hospital">Hospital</option>
            <option value="Dormitory">Dormitory</option>
            <option value="Commercial">Commercial</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1" htmlFor="bestTimeToContact">
            Best Time to Contact
          </label>
          <select
            name="bestTimeToContact"
            id="bestTimeToContact"
            value={formData.bestTimeToContact}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200 ease-in-out transform hover:scale-105 focus:scale-105"
          >
            <option value="">Select Best Time</option>
            <option value="Morning">Morning</option>
            <option value="Afternoon">Afternoon</option>
            <option value="Evening">Evening</option>
          </select>
        </div>

        <div className="md:col-span-2">
          <label className="block text-gray-700 font-medium mb-1" htmlFor="currentTvProvider">
            Current TV Provider
          </label>
          <input
            type="text"
            name="currentTvProvider"
            id="currentTvProvider"
            value={formData.currentTvProvider}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200 ease-in-out transform hover:scale-105 focus:scale-105"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-gray-700 font-medium mb-1" htmlFor="message">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200 ease-in-out transform hover:scale-105 focus:scale-105"
            rows="4"
          ></textarea>
        </div>

        <div className="md:col-span-2">
          <button
            type="submit"
            className="w-full bg-blue-800 text-white py-3 px-6 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out transform hover:scale-105 active:scale-95"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
