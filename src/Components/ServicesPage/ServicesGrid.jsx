import React, { useEffect } from "react";
import {
  Code,
  Palette,
  Briefcase,
  Users,
  TrendingUp,
  Package,
} from "lucide-react";

import AOS from "aos";
import "aos/dist/aos.css";

/* ================= DATA ================= */

const services = [
  {
    icon: Code,
    title: "Web Development",
    description:
      "Master modern web technologies including React, Node.js, and full-stack development.",
    tag: "Development",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Learn design principles, wireframing, prototyping with Figma, and create stunning UI.",
    tag: "Design",
  },
  {
    icon: Briefcase,
    title: "Freelancing Training",
    description:
      "Complete guide to launching your freelance career and finding clients.",
    tag: "Career",
  },
  {
    icon: Users,
    title: "Internship Program",
    description:
      "Gain real-world experience working on live projects with expert guidance.",
    tag: "Experience",
  },
  {
    icon: TrendingUp,
    title: "SEO & Marketing",
    description:
      "Learn SEO, digital marketing, and strategies to grow online businesses.",
    tag: "Growth",
  },
  {
    icon: Package,
    title: "Branding & Design",
    description:
      "Create brand identity, logos, and strong visual systems.",
    tag: "Branding",
  },
];

/* ================= COMPONENT ================= */

export function ServicesGrid() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700;800&family=DM+Sans:wght@400;500;600&display=swap');

        .icon-box {
          border: 2px solid rgba(255,107,0,0.5);
          transition: all 0.3s ease;
        }

        .card:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 24px 60px rgba(255,107,0,0.18);
        }

        .card:hover .icon-box {
          background-color: #FF6B00;
          color:white;
          transform: rotate(-6deg) scale(1.1);
        }

        .card:hover .service-icon {
          color: #fff;
        }
      `}</style>

      <section
        className="min-h-screen pt-24 pb-20 text-white"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        {/* HEADING */}
        <div className="text-center mb-16">
          <p
            data-aos="fade-up"
            className="text-[#FF6B00] text-xs uppercase tracking-widest mb-4"
          >
            What We Offer
          </p>

          <h1
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-5xl md:text-7xl font-bold"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Our <span className="text-[#FF6B00]">Services</span>
          </h1>

          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-[#777] mt-4 max-w-xl mx-auto"
          >
            A wide range of services to help you grow in the digital world.
          </p>
        </div>
        <div className="max-w-[1220px] mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              className="card p-7 rounded-2xl border border-white/10 bg-[#111] cursor-pointer transition-all duration-300"
            >
              <span className="text-xs text-[#FF6B00]">
                {service.tag}
              </span>

              <div className="icon-box w-14 h-14 flex items-center justify-center rounded-xl my-5">
                <service.icon
                  className="service-icon"
                  size={26}
                  style={{ color: "#FF6B00" }}
                />
              </div>

              <h3 className="text-xl font-bold mb-2">
                {service.title}
              </h3>

              <p className="text-[#777] text-sm mb-4">
                {service.description}
              </p>

              <span className="text-[#FF6B00] text-xs font-bold">
                Learn More →
              </span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}