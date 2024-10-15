import HeroSection from "../components/HeroSection";
import FeatureSection from "../components/FeatureSection";
import Workflow from "../components/Workflow";


const Home = () => {
    return (
      <div className="max-w-7xl mx-auto pt-0 px-6">
        <HeroSection />
        <FeatureSection />
        <Workflow />
      </div>
    );
  };
  
  export default Home;