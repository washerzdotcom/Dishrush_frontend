// CardList.js
import React, { useEffect } from "react";
import Card from "./Card";
import { motion, useAnimation } from "framer-motion";
import "./cardstyles.css";
import myfair_witch from "../assets/movies/myfair_witch.webp"; // Import your image
import espn from "../assets/movies/espn.webp";
import goodmrng from "../assets/movies/good_mrng_america.webp"
import househunters from "../assets/movies/house_hunters.webp"
import Kelly_rayan from "../assets/movies/Kelly_rayan.webp"
import lego from "../assets/movies/lego_masters_fox.webp"
import married from "../assets/movies/married_at_first_site.webp"
import masked from "../assets/movies/masked_singer.webp"
import nxt from "../assets/movies/nxt.webp"
import quantum from "../assets/movies/quantum_leap.webp"
import sister from "../assets/movies/sister_wives.webp"
import surviour from "../assets/movies/surviour.webp"
import voice from "../assets/movies/the_voice.webp"
import today from "../assets/movies/today.webp"
import under from "../assets/movies/under_wraps.webp"

const CardList = ({ direction }) => {
  // Array of images to be displayed
  const cards = [myfair_witch,espn,goodmrng,househunters,Kelly_rayan,lego,married,masked,nxt,quantum,sister,surviour,voice,today,under];
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
          y: direction === "down" ? [0, -cards.length * 170] : [-cards.length * 170, 0],
          transition: {
            repeat: Infinity,
            duration: 30,
            ease: "linear",
          },
        })
      }
    >
      {/* Render the original and duplicated list of images for infinite scrolling */}
      {cards.concat(cards).map((imageSrc, index) => (
        <Card key={index} imageSrc={imageSrc} i={index} />  // Pass the image source to the Card component
      ))}
    </motion.div>
  );
};

export default CardList;
