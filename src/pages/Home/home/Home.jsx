import HowItWorks from "../../../components/HowItWorks";
import Banner from "../Banner/Banner";
import OurProducts from "../../../pages/OurProducts"
import CustomerFeedbackCarousel from "./CustomerFeedbackCarousel";
import FeaturesSection from "./FeaturesSection";
import CallToActionSection from "./CallToActionSection";
import ImageSpotlightSection from "./ImageSpotlightSection";
import BrandCarousel from "./BrandCarousel";

const Home = () => {
  return (
    <div className="min-h-screen">
        <Banner/>
        <OurProducts/>
        <BrandCarousel/>
        <ImageSpotlightSection/>
        <HowItWorks/>
        <CustomerFeedbackCarousel/>
        <FeaturesSection/>
        <CallToActionSection/>
    </div>
  );
};

export default Home;