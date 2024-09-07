// Card.js
import React from "react";

const Card = ({ imageSrc, i }) => {
  return (
    <div className={i%2 != 0 ? "card": "card-big"}>
      <img src={imageSrc} alt="Movie" className="card-image" />
    </div>
  );
};

export default Card;
