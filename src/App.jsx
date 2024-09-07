import Slider from "react-slick";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Carousel from "./components/Slider";
import Footer from "./components/Footer";
// import CarouselComponent from "./components/SlidingCards";
import DirectiveBussiness from "./components/DirectiveBussiness";
import MiddleParentCard from "./components/MiddleCardParent";


export default function App() {
  return (
    <>
    <Navbar/>
    <HeroSection/>
    <Carousel/>
    <DirectiveBussiness/>
    <MiddleParentCard/>
    <Footer/>
    </>
  )
}