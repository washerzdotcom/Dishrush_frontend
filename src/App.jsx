import Slider from "react-slick";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Carousel from "./components/Slider";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
    <Navbar/>
    <HeroSection/>
    <Carousel/>
    <Footer/>
    </>
  )
}