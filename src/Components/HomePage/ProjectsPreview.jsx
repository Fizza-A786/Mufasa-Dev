import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import charity from "../../assets/charity.jpeg";
import carrent from "../../assets/carrent.jpg";
import book from "../../assets/book.png";

const projects = [
  { id: 1, title: "Charity", image: charity, link: "#" },
  { id: 2, title: "Carrent", image: carrent, link: "#" },
  { id: 3, title: "Book", image: book, link: "#" },
];

export function ProjectsPreview() {
  return (
    <div className="flex flex-col items-center text-center">
      <h2 className="text-4xl font-bold uppercase mb-8" style={{ fontFamily: 'Barlow Condensed, sans-serif' }}>
        Our <span className="text-[#F46F25]">Project</span>
      </h2>

      <div className="grid grid-cols-3 gap-4 mb-6 w-full">
        {projects.map((project) => (
          <a
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="reveal relative aspect-square rounded-xl overflow-hidden group cursor-pointer"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#F46F25]/80 to-transparent opacity-0 group-hover:opacity-100 transition-all flex items-end p-4">
              <span className="text-white font-bold" style={{ fontFamily: "Barlow Condensed, sans-serif" }}>
                {project.title}
              </span>
            </div>
          </a>
        ))}
      </div>

      <Link to="/projects" className="inline-flex items-center gap-2 text-[#F46F25] font-bold hover:gap-3 transition-all">
        View All Projects <ArrowRight size={20} />
      </Link>
    </div>
  );
}

export default ProjectsPreview;