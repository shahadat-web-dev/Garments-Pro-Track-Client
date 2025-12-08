import HowItWorks from "../../../components/HowItWorks";
import Banner from "../Banner/Banner";
import OurProducts from "../../../pages/OurProducts"
import CustomerFeedbackCarousel from "./CustomerFeedbackCarousel";
import FeaturesSection from "./FeaturesSection";

const Home = () => {
  return (
    <div className="min-h-screen">
        <Banner/>
        <OurProducts/>
        <HowItWorks/>
        <CustomerFeedbackCarousel/>
        <FeaturesSection/>
    </div>
  );
};

export default Home;