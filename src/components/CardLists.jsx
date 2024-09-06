// CardList.js
import React, { useEffect } from "react";
import Card from "./Card";
import { motion, useAnimation } from "framer-motion";
import "./cardstyles.css";

const CardList = ({ direction }) => {
  const cards = ["Card 1", "Card 2", "Card 3", "Card 4", "Card 5"];
  const controls = useAnimation();

  useEffect(() => {
    const scrollDistance = cards.length * 170; // Adjust this value to match the card height + gap
    const animationConfig = {
      y: direction === "down" ? [0, -scrollDistance] : [-scrollDistance, 0],
      transition: {
        repeat: Infinity,
        duration: 20, // Duration for one complete scroll cycle
        ease: "linear",
      },
    };

    controls.start(animationConfig);
  }, [controls, cards.length, direction]);

  return (
    <motion.div
      className="card-list"
      animate={controls}
      onMouseEnter={() => controls.stop()} // Stop animation on hover
      onMouseLeave={() =>
        controls.start({
          y:
            direction === "down"
              ? [0, -cards.length * 170]
              : [-cards.length * 170, 0],
          transition: {
            repeat: Infinity,
            duration: 10,
            ease: "linear",
          },
        })
      }
    >
      {/* Render the original and duplicated list of cards for infinite scrolling */}
      {cards.concat(cards).map((card, index) => (
        <Card key={index}>{card}</Card>
      ))}
    </motion.div>
  );
};

export default CardList;
