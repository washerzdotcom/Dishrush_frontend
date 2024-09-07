import React from "react";
import MiddleChildCard from "./MiddleCardChild";
import headend from "../assets/headend.webp";
import distv from "../assets/dis_tv.webp";
import dretv from "../assets/dre_tv.webp";
import com from "../assets/com_system.webp";
import TextHighlight from "./TextHighLight";

const MiddleParentCard = () => {
  const cardsData = [
    {
      title: "AEP",
      image: distv,
    },
    {
      title: "DRE",
      image: dretv,
    },
    {
      title: "COM3000",
      image: com,
    },
    {
      title: "HEADEND",
      image: headend,
    },
  ];

  return (
    <div>
      <div className="p-5 bg-white">
        <TextHighlight />
      </div>
      <div className="flex justify-center space-x-6 p-8 bg-blue-50 mt-4">
        {cardsData.map((card, index) => (
          <MiddleChildCard key={index} title={card.title} image={card.image} />
        ))}
      </div>
    </div>
  );
};

export default MiddleParentCard;
