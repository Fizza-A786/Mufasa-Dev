import Hero from "../Components/HomePage/Hero";
import Features from "../Components/HomePage/Features";
import Services from "../Components/HomePage/Services";
import ProjectsPreview from "../Components/HomePage/ProjectsPreview";
import Testimonials from "../Components/HomePage/Testimonials";
import CTA from "../Components/HomePage/CTA";

const Home = () => {
  return (
    <div className="bg-[#0A0A0A] text-white">
      <Hero />
      <Features />
      <Services />
      <div className="px-6 max-w-[1280px] mx-auto py-20">
        <ProjectsPreview />
      </div>
      <Testimonials />
      <CTA />
    </div>
  );
};

export default Home;