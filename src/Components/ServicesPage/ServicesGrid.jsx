import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Code, Palette, Briefcase, Users, TrendingUp, Package } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: Code,
    title: "Web Development",
    description:
      "Master modern web technologies including React, Node.js, and full-stack development. Build responsive, scalable applications from scratch.",
    tag: "Development",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Learn design principles, user research, wireframing, prototyping with Figma, and create stunning user interfaces that convert.",
    tag: "Design",
  },
  {
    icon: Briefcase,
    title: "Freelancing Training",
    description:
      "Complete guide to launching your freelance career: finding clients, pricing, contracts, communication, and building long-term success.",
    tag: "Career",
  },
  {
    icon: Users,
    title: "Internship Program",
    description:
      "Gain hands-on experience working on real client projects under expert supervision. Build your portfolio while learning industry best practices.",
    tag: "Experience",
  },
  {
    icon: TrendingUp,
    title: "SEO & Marketing",
    description:
      "Learn search engine optimization, digital marketing strategies, content marketing, and analytics to grow online businesses.",
    tag: "Growth",
  },
  {
    icon: Package,
    title: "Branding & Design",
    description:
      "Master brand identity creation, logo design, visual systems, and creating cohesive brand experiences across all touchpoints.",
    tag: "Branding",
  },
];

export function ServicesGrid() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const labelRef = useRef(null);
  const subRef = useRef(null);
  const cardRefs = useRef([]);
  const dividerRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // --- Label line animation
      gsap.from(labelRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: labelRef.current,
          start: "top 85%",
        },
      });

      // --- Heading split animation (word by word)
      gsap.from(headingRef.current, {
        opacity: 0,
        y: 60,
        skewY: 4,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 85%",
        },
      });

      // --- Subtext
      gsap.from(subRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: subRef.current,
          start: "top 88%",
        },
      });

      // --- Cards staggered entrance
      gsap.from(cardRefs.current, {
        opacity: 0,
        y: 60,
        scale: 0.95,
        duration: 0.7,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardRefs.current[0],
          start: "top 85%",
        },
      });

      // --- Divider lines animate width on scroll
      dividerRefs.current.forEach((el) => {
        if (!el) return;
        gsap.from(el, {
          width: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
          },
        });
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Card hover: lift + glow
  const handleMouseEnter = (e) => {
    gsap.to(e.currentTarget, {
      y: -10,
      scale: 1.02,
      boxShadow: "0 24px 60px rgba(255,107,0,0.18)",
      duration: 0.4,
      ease: "power2.out",
    });
    // Animate icon box
    const iconBox = e.currentTarget.querySelector(".icon-box");
    gsap.to(iconBox, {
      backgroundColor: "#FF6B00",
      rotate: -6,
      scale: 1.12,
      duration: 0.35,
      ease: "back.out(1.4)",
    });
    const icon = e.currentTarget.querySelector(".service-icon");
    gsap.to(icon, { color: "#ffffff", duration: 0.25 });

    // Animate divider
    const divider = e.currentTarget.querySelector(".card-divider");
    gsap.to(divider, { width: 56, duration: 0.3, ease: "power2.out" });

    // Arrow nudge
    const arrow = e.currentTarget.querySelector(".learn-arrow");
    gsap.to(arrow, { x: 5, duration: 0.3, ease: "power2.out" });
  };

  const handleMouseLeave = (e) => {
    gsap.to(e.currentTarget, {
      y: 0,
      scale: 1,
      boxShadow: "0 0px 0px rgba(255,107,0,0)",
      duration: 0.5,
      ease: "power3.out",
    });
    const iconBox = e.currentTarget.querySelector(".icon-box");
    gsap.to(iconBox, {
      backgroundColor: "transparent",
      rotate: 0,
      scale: 1,
      duration: 0.4,
      ease: "power2.out",
    });
    const icon = e.currentTarget.querySelector(".service-icon");
    gsap.to(icon, { color: "#FF6B00", duration: 0.25 });

    const divider = e.currentTarget.querySelector(".card-divider");
    gsap.to(divider, { width: 32, duration: 0.3, ease: "power2.out" });

    const arrow = e.currentTarget.querySelector(".learn-arrow");
    gsap.to(arrow, { x: 0, duration: 0.3, ease: "power2.out" });
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700;800&family=DM+Sans:wght@400;500;600&display=swap');

        .icon-box {
          border: 2px solid rgba(255,107,0,0.5);
          background: transparent;
        }
        .learn-arrow {
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }
      `}</style>

      <div
        ref={sectionRef}
        className="min-h-screen pt-24 pb-20"
        style={{ background: "#0A0A0A", fontFamily: "'DM Sans', sans-serif" }}
      >
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
          <div className="flex items-center gap-2 text-xs text-[#555] tracking-widest uppercase">
            <Link to="/" className="hover:text-[#FF6B00] transition-colors duration-200">
              Home
            </Link>
            <span className="text-[#333]">/</span>
            <span className="text-white">Services</span>
          </div>
        </div>

        {/* Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
          <div ref={labelRef} className="inline-flex items-center gap-3 mb-5">
            <span className="w-8 h-px bg-[#FF6B00]" />
            <span className="text-[#FF6B00] text-xs font-semibold uppercase tracking-[0.22em]">
              What We Offer
            </span>
            <span className="w-8 h-px bg-[#FF6B00]" />
          </div>

          <div className="overflow-hidden">
            <h1
              ref={headingRef}
              className="text-5xl sm:text-6xl md:text-7xl font-extrabold uppercase leading-none mb-6 text-white"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Our{" "}
              <span className="text-[#FF6B00]">Services</span>
            </h1>
          </div>

          <p
            ref={subRef}
            className="text-[#777] text-base sm:text-lg max-w-xl mx-auto leading-relaxed"
          >
            A wide range of services designed to help you build skills, launch
            your career, and succeed in the digital world.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7">
            {services.map((service, idx) => (
              <div
                key={idx}
                ref={(el) => (cardRefs.current[idx] = el)}
                className="relative p-7 sm:p-8 rounded-2xl border border-white/8 cursor-pointer"
                style={{
                  background: "#111111",
                  borderColor: "rgba(255,255,255,0.07)",
                  willChange: "transform",
                }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {/* Tag badge */}
                <span
                  className="absolute top-5 right-5 text-[10px] font-semibold uppercase tracking-widest px-2.5 py-0.5 rounded-full"
                  style={{
                    color: "rgba(255,107,0,0.65)",
                    border: "1px solid rgba(255,107,0,0.2)",
                  }}
                >
                  {service.tag}
                </span>

                {/* Icon */}
                <div className="icon-box w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                  <service.icon
                    className="service-icon"
                    size={26}
                    style={{ color: "#FF6B00" }}
                  />
                </div>

                {/* Title */}
                <h3
                  className="text-xl sm:text-2xl font-bold uppercase mb-3 text-white"
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    letterSpacing: "0.04em",
                  }}
                >
                  {service.title}
                </h3>

                {/* Animated divider */}
                <div
                  className="card-divider h-0.5 mb-4"
                  ref={(el) => (dividerRefs.current[idx] = el)}
                  style={{ width: 32, background: "rgba(255,107,0,0.4)" }}
                />

                {/* Description */}
                <p className="text-[#777] text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* CTA */}
                <a
                  href="#"
                  className="learn-arrow text-[#FF6B00] text-xs font-bold uppercase tracking-widest"
                >
                  Learn More
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M2 7h10M8 3l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}