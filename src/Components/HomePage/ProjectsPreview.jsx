import { Link } from "react-router-dom";
import { Eye } from "lucide-react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

import charity from "../../assets/charity.jpeg";
import carrent from "../../assets/carrent.jpg";
import book from "../../assets/book.png";

const projects = [
  { id: 1, title: "Charity", image: charity, link: "#" },
  { id: 2, title: "Carrent", image: carrent, link: "#" },
  { id: 3, title: "Book", image: book, link: "#" },
];

export function ProjectsPreview() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".projects-heading", {
        y: 30,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
      });

      gsap.from(".project-tile", {
        y: 50,
        opacity: 0,
        stagger: 0.18,
        duration: 0.9,
        ease: "power3.out",
      });

      gsap.from(".projects-btn", {
        opacity: 0,
        y: 20,
        duration: 0.6,
        delay: 0.4,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full px-3 sm:px-2 lg:px-8 py-10 flex flex-col items-center"
    >
      <h2
        className="projects-heading text-3xl sm:text-4xl md:text-5xl font-semibold tracking-wide mb-4 text-center"
        style={{ fontFamily: "Barlow Condensed, sans-serif" }}
      >
        Selected <span className="text-[#F46F25]">Work</span>
      </h2>

      <p className="text-center text-white/60 text-sm sm:text-base max-w-xl mb-10 leading-relaxed">
        A curated collection of our most impactful digital projects.
        Designed with precision, built for performance and experience.
      </p>
      <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <a
            key={project.id}
            href={project.link}
            className="project-tile group relative overflow-hidden rounded-2xl"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-[300px] object-cover transition-transform duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-500" />

            <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">

              <h3
                className="text-white text-lg font-semibold tracking-wide"
                style={{ fontFamily: "Barlow Condensed, sans-serif" }}
              >
                {project.title}
              </h3>

              <div className="opacity-0 group-hover:opacity-100 transition-all duration-300">
                <Eye className="text-white" size={20} />
              </div>

            </div>

          </a>
        ))}
      </div>

      <Link
        to="/projects"
        className="projects-btn mt-10 inline-flex items-center gap-2 text-sm font-medium tracking-wider text-white/80 hover:text-white transition-all"
      >
        View Full Portfolio
        <span className="w-6 h-[1px] bg-[#F46F25]"></span>
      </Link>

    </section>
  );
}

export default ProjectsPreview;