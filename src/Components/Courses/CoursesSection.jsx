import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const courses = [
  "React & Next.js",
  "Figma Mastery",
  "Full Stack Dev",
  "SEO & Growth",
  "Brand Identity",
];

const CoursesSection=()=> {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const tagRefs = useRef([]);
  const badgeRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headingRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: headingRef.current, start: "top 85%" },
      });

      gsap.from(badgeRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.8,
        scrollTrigger: { trigger: badgeRef.current, start: "top 90%" },
      });

      gsap.from(tagRefs.current, {
        opacity: 0,
        scale: 0.9,
        stagger: 0.1,
        duration: 0.5,
        scrollTrigger: { trigger: tagRefs.current[0], start: "top 90%" },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        background: "#0A0A0A",
        padding: "90px 20px",
        fontFamily: "'DM Sans', sans-serif",
        textAlign: "center",
      }}
    >
      {/* Badge */}
      <div ref={badgeRef} style={{ marginBottom: 20 }}>
        <span
          style={{
            display: "inline-block",
            padding: "6px 16px",
            fontSize: 11,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#FF6B00",
            border: "1px solid rgba(255,107,0,0.3)",
            borderRadius: 20,
          }}
        >
          Coming Soon
        </span>
      </div>

      {/* Heading */}
      <h2
        ref={headingRef}
        style={{
          fontFamily: "'Barlow Condensed', sans-serif",
          fontSize: "clamp(32px, 6vw, 64px)",
          fontWeight: 800,
          color: "#fff",
          marginBottom: 16,
        }}
      >
        Our <span style={{ color: "#FF6B00" }}>Courses</span>
      </h2>

      {/* Description */}
      <p
        style={{
          color: "#888",
          maxWidth: 520,
          margin: "0 auto 40px",
          fontSize: 15,
          lineHeight: 1.6,
        }}
      >
        We're crafting high-quality courses in development, design, and digital growth.
        Stay tuned — something powerful is on the way.
      </p>

      {/* Tags */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 10,
          marginBottom: 40,
        }}
      >
        {courses.map((c, i) => (
          <span
            key={i}
            ref={(el) => (tagRefs.current[i] = el)}
            style={{
              background: "#111",
              border: "1px solid rgba(255,107,0,0.15)",
              color: "#aaa",
              fontSize: 11,
              padding: "6px 14px",
              borderRadius: 20,
            }}
          >
            {c}
          </span>
        ))}
      </div>

      {/* CTA */}
      <button
        style={{
          background: "#FF6B00",
          color: "#fff",
          border: "none",
          padding: "12px 28px",
          fontSize: 13,
          letterSpacing: "0.1em",
          cursor: "pointer",
          borderRadius: 6,
          transition: "0.2s",
        }}
        onMouseOver={(e) => (e.target.style.transform = "translateY(-2px)")}
        onMouseOut={(e) => (e.target.style.transform = "translateY(0px)")}
      >
        Notify Me on Launch
      </button>
    </section>
  );
}

export default CoursesSection;