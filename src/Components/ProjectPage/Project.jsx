import { useState } from "react";
import project1 from "../../assets/book.png";
import project2 from "../../assets/carrent.jpg";
import project3 from "../../assets/charity.jpeg";
import project4 from "../../assets/ecommerce.png";
import project5 from "../../assets/foodymat.jpg";

/* ================= DATA ================= */

const PROJECTS = [
  {
    title: "Donation Platform",
    desc: "A modern fundraising system with real-time tracking and secure payments.",
    img: project1,
    tags: ["React", "Node.js"],
  },
  {
    title: "Car Booking App",
    desc: "Smart booking system with GPS tracking and scheduling features.",
    img: project2,
    tags: ["React Native", "Maps"],
  },
  {
    title: "SaaS Dashboard",
    desc: "Analytics dashboard with real-time insights and data visualization.",
    img: project3,
    tags: ["React", "Charts"],
  },
  {
    title: "Real Estate Website",
    desc: "Property listing platform with filters and modern UI experience.",
    img: project4,
    tags: ["Next.js", "Tailwind"],
  },
  {
    title: "UI Design System",
    desc: "Reusable UI components and design system for scalable apps.",
    img: project5,
    tags: ["Figma", "UI/UX"],
  },
];

/* ================= CARD ================= */

function ProjectCard({ item }) {
  return (
    <div className=" border border-white/10  rounded-2xl overflow-hidden hover:border-[#F46F25]/40 transition-all duration-300">

      <div className="flex flex-col md:flex-row">

        {/* IMAGE */}
        <div className="md:w-1/2 h-60 md:h-auto overflow-hidden">
          <img
            src={item.img}
            alt={item.title}
            loading="lazy"
            className="w-full h-full object-cover hover:scale-105 transition duration-500"
          />
        </div>

        {/* CONTENT */}
        <div className="md:w-1/2 p-6 flex flex-col justify-center">

          <h3 className="text-white text-xl font-semibold mb-2">
            {item.title}
          </h3>

          <p className="text-[#aaa] text-sm mb-4 leading-relaxed">
            {item.desc}
          </p>

          {/* TAGS */}
          <div className="flex flex-wrap gap-2 mb-5">
            {item.tags.map((tag, i) => (
              <span
                key={i}
                className="text-xs px-2 py-1 bg-[#1a1a1a] text-[#bbb] rounded"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* BUTTON */}
          <button className="w-fit bg-[#1a1a1a] hover:bg-[#F46F25] text-white text-sm px-5 py-2 rounded-full transition-all duration-300">
            View Project
          </button>

        </div>
      </div>
    </div>
  );
}

/* ================= SECTION ================= */

export default function ProjectsSection() {
  return (
    <section className="bg-black text-white py-20 md:30 px-6">

      {/* HEADER */}
      <div className="text-center mb-16 mt-10">
         <h1
           
              className="text-5xl sm:text-6xl md:text-7xl font-bold  leading-none mb-6 text-white"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Featured{" "}
              <span className="text-[#FF6B00]">Projects</span>
            </h1>

        <p className="text-[#888] max-w-xl mx-auto text-sm">
          A collection of real-world applications built with modern technologies and clean UI principles.
        </p>
      </div>

      {/* PROJECT LIST */}
      <div className="max-w-6xl mx-auto flex flex-col gap-8">

        {PROJECTS.map((item, i) => (
          <ProjectCard key={i} item={item} />
        ))}

      </div>

    </section>
  );
}