import React from "react";
import SlidingCardsContent from "./SlidingCardsContent";
import CarouselComponent from "../components/SlidingCards"; // Ensure CarouselComponent is imported correctly

const DirectiveBussiness = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-4">
      {/* Left side: SlidingCardsContent */}
      <div className="w-full md:w-1/2 mb-4 md:mb-0">
        <SlidingCardsContent />
      </div>

      {/* Right side: CarouselComponent */}
      <div className="w-full md:w-1/2">
        <CarouselComponent />
      </div>
    </div>
  );
};

export default DirectiveBussiness;
