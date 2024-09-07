import React from "react";

const MiddleChildCard = ({ title, image }) => {
  return (
    <div className="bg-gradient-to-b from-white to-blue-100 rounded-lg shadow-lg p-6 w-full">
      <div className="flex justify-center mb-4">
        <img src={image} alt={title} className="w-25 h-25" />
      </div>
      <h3 className="text-xl font-bold text-blue-900">{title}</h3>
    </div>
  );
};

export default MiddleChildCard;
