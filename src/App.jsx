import Slider from "react-slick";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Carousel from "./components/Slider";
import Footer from "./components/Footer";
// import CarouselComponent from "./components/SlidingCards";
import DirectiveBussiness from "./components/DirectiveBussiness";
import TestimonialSlides from "./components/TestimonialSlides";
import UpgradeComponent from "./components/UpgradeComponent";
import ContactMapSection from "./components/ContactMapSection";
import PromoSection from "./components/PromoSection";
import FeaturesSection from "./components/FeaturesSection";



export default function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Carousel />
      <DirectiveBussiness />
      <TestimonialSlides/>
      <PromoSection/>
      <UpgradeComponent/>
      <FeaturesSection/>
      <ContactMapSection/>
      <Footer />
    </>
  );
}
