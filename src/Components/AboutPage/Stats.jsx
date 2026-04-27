import React, { useState, useRef, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const stats = [
  { id: "about-students-count", target: 500, suffix: "+", label: "Students Trained", sub: "Empowered learners" },
  { id: "about-projects-count", target: 50,  suffix: "",  label: "Projects Completed", sub: "Real-world experience" },
  { id: "about-satisfaction",   target: 100, suffix: "%", label: "Satisfaction Rate", sub: "Happy students" },
  { id: "about-mentors-count",  target: 10,  suffix: "",  label: "Expert Mentors", sub: "Industry professionals" },
];

function Stats() {
  const [animated, setAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100
    });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated) {
          setAnimated(true);
          stats.forEach(({ id, target }) => animateCounter(id, target));
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [animated]);

  const animateCounter = (id, target) => {
    const el = document.getElementById(id);
    if (!el) return;
    let current = 0;
    const increment = target / 60;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        el.textContent = target.toString();
        clearInterval(timer);
      } else {
        el.textContent = Math.floor(current).toString();
      }
    }, 30);
  };

  return (
    <section ref={sectionRef} className="py-16 sm:py-24 bg-[#111111]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map(({ id, suffix, label, sub }, idx) => (
            <div key={id} className="text-center" data-aos="fade-up" data-aos-delay={idx * 150}>
              {/* Number */}
              <div
                className="text-4xl sm:text-6xl font-bold text-[#FF6B00] mb-2"
                style={{ fontFamily: "Barlow Condensed, sans-serif" }}
              >
                <span id={id}>0</span>{suffix}
              </div>
              {/* Label */}
              <p
                className="text-white font-bold text-base sm:text-lg mb-1"
                style={{ fontFamily: "Barlow Condensed, sans-serif" }}
              >
                {label}
              </p>
              {/* Sub-label */}
              <p className="text-[#999999] text-xs sm:text-sm">{sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;