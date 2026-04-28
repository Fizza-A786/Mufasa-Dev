import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const heroImage =
  "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=800";

export function Hero() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-[#0D0D0D] pt-20 sm:pt-24 overflow-x-hidden">

      {/* Hero Section */}
      <section className="py-10 sm:py-16">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* IMAGE */}
            <div
              className="group relative w-full aspect-[4/3] sm:aspect-square rounded-2xl overflow-hidden cursor-pointer order-2 lg:order-1 will-change-transform"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              <img
                src={heroImage}
                alt="Mufasa Developers Team"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-500 group-hover:opacity-50" />

              <div className="absolute inset-0 bg-[#FF6B00]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-[#FF6B00] opacity-0 group-hover:opacity-100 transition-all duration-500" />

              <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-[#FF6B00] opacity-0 group-hover:opacity-100 transition-all duration-500" />

              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p
                  className="text-white text-xl font-bold uppercase"
                  style={{ fontFamily: "Barlow Condensed, sans-serif" }}
                >
                  Mufasa Developers
                </p>
                <span className="text-[#FF6B00] text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  Since 2026
                </span>
              </div>
            </div>

            {/* TEXT */}
            <div
              className="order-1 lg:order-2 flex flex-col gap-5 will-change-transform"
              data-aos="fade-left"
              data-aos-delay="400"
            >
              <h2
                className="text-4xl sm:text-5xl xl:text-6xl font-bold uppercase leading-tight text-white"
                style={{ fontFamily: "Barlow Condensed, sans-serif" }}
              >
                WE ARE <span className="text-[#FF6B00]">MUFASA DEVELOPERS</span>
              </h2>

              <p className="text-[#999999] text-sm sm:text-base leading-relaxed">
                Mufasa Developers is a leading tech education platform dedicated to empowering
                aspiring developers and freelancers with the skills they need to succeed in
                the digital economy.
              </p>

              <p className="text-[#999999] text-sm sm:text-base leading-relaxed">
                Founded by industry professionals who understand the gap between traditional
                education and market demands, we provide practical, hands-on training that
                prepares students for real-world challenges. Our comprehensive courses, expert
                mentorship, and proven freelancing strategies have helped hundreds of students
                launch successful tech careers.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}