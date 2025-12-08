import HowItWorks from "../../../components/HowItWorks";
import Banner from "../Banner/Banner";
import OurProducts from "../../../pages/OurProducts"

const Home = () => {
  return (
    <div className="min-h-screen">
        <Banner/>
        <OurProducts/>
        <HowItWorks/>
    </div>
  );
};

export default Home;