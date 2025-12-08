import HowItWorks from "../../../components/HowItWorks";
import Banner from "../Banner/Banner";
import OurProducts from "../../../pages/OurProducts"
import CustomerFeedbackCarousel from "./CustomerFeedbackCarousel";

const Home = () => {
  return (
    <div className="min-h-screen">
        <Banner/>
        <OurProducts/>
        <HowItWorks/>
        <CustomerFeedbackCarousel/>
    </div>
  );
};

export default Home;