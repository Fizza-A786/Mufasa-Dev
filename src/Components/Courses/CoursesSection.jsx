import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const courses = [
  "React & Next.js",
  "Figma Mastery",
  "Full Stack Development",
  "SEO & Growth",
  "Brand Identity",
];

const CoursesSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section className="bg-[#0A0A0A] text-white py-24 px-6">
      <div className="max-w-6xl mx-auto text-center mb-16">

        {/* Heading */}
        <h2
          data-aos="fade-up"
          className="text-4xl md:text-6xl font-bold"
          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          Our <span className="text-[#FF6B00]">Courses</span>
        </h2>

        {/* Description */}
        <p
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-[#888] max-w-xl mx-auto mt-4 text-sm md:text-base leading-relaxed"
        >
          We're building powerful courses in development, design, and digital growth.
          Stay tuned for something amazing.
        </p>
      </div>

      {/* ================= TAGS ================= */}
      <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-3 mb-14">

        {courses.map((course, i) => (
          <span
            key={i}
            data-aos="fade-up"
            data-aos-delay={i * 100}
            className="px-4 py-2 text-sm rounded-full border border-white/10 bg-[#111] text-[#ccc]
            cursor-default transition-all duration-500 
            hover:border-[#FF6B00] hover:text-white hover:shadow-md hover:shadow-[#FF6B00]/10"
          >
            {course}
          </span>
        ))}

      </div>

      {/* ================= CTA ================= */}
      <div className="text-center" data-aos="fade-up">

        <button
          className="bg-[#FF6B00] hover:bg-[#ff8c33] text-white px-8 py-3 rounded-lg
          text-sm font-semibold tracking-widest transition-all duration-500 ease-out
          shadow-lg shadow-[#FF6B00]/20 hover:shadow-[#FF6B00]/40 hover:-translate-y-1"
        >
          Notify Me on Launch
        </button>

        <p className="text-[#666] text-xs mt-4">
          Get early access when courses are released
        </p>

      </div>

    </section>
  );
};

export default CoursesSection;