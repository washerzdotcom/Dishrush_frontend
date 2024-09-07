import React from "react";

const TextHighlight = () => {
  return (
    <div className="text-left space-y-6">
      <h1 className="text-5xl font-bold leading-snug">
        Direct TV Solution Offered for Business
      </h1>
      {/* Gradient text */}
      <h2 className="text-5xl font-bold bg-gradient-to-r from-orange-300 via-purple-400 to-purple-500 text-transparent bg-clip-text">
        Price starts from
      </h2>
      <h3 className="text-4xl font-semibold bg-gradient-to-r from-green-400 to-purple-400 text-transparent bg-clip-text">
        $9.30 per room per month
      </h3>
      {/* <p className="text-2xl text-gray-600">Keep things simple</p> */}
    </div>
  );
};

export default TextHighlight;
