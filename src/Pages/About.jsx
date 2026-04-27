import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Stats from "../Components/AboutPage/Stats";
import MissionVision from "../Components/AboutPage/MissionVision";
import WhyChooseUs from "../Components/AboutPage/WhyChooseUs";
import { Hero } from "../Components/AboutPage/Hero";

const About = () => {
  return (
    <div className="min-h-screen">
      <Hero/>
      <Stats />
      <MissionVision />
      <WhyChooseUs />
      
      <section className="py-16 reveal-section">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="reveal bg-gradient-to-r from-[#111111] to-[#FF6B00]/20 rounded-2xl p-12 flex flex-col lg:flex-row items-center justify-between gap-8 border border-[#FF6B00]/30">
            <div>
              <h2 className="text-4xl text-white font-bold uppercase mb-3" style={{ fontFamily: 'Barlow Condensed, sans-serif' }}>
                Ready to Start Your Journey?
              </h2>
              <p className="text-[#999999] text-lg">Join hundreds of students building their tech careers</p>
            </div>
            <Link
              to="/signup"
              className="px-10 py-4 bg-[#FF6B00] text-white rounded-lg hover:bg-[#FF8C38] transition-all font-bold text-lg whitespace-nowrap"
              style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;