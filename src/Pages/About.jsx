import { Link } from "react-router-dom";
import Stats from "../Components/AboutPage/Stats";
import MissionVision from "../Components/AboutPage/MissionVision";
import WhyChooseUs from "../Components/AboutPage/WhyChooseUs";
import { Hero } from "../Components/AboutPage/Hero";
import CTA from "../Components/AboutPage/CTA";

const About = () => {
  return (
    <div className="min-h-screen">
      <Hero/>
      <Stats />
      <MissionVision />
      <WhyChooseUs />
      <CTA/>
      
     
    </div>
  );
};

export default About;