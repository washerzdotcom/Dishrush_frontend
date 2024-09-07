// Card.js
import React from "react";

const Card = ({ imageSrc }) => {
  return (
    <div className="card">
      <img src={imageSrc} alt="Movie" className="card-image" />
    </div>
  );
};

export default Card;
