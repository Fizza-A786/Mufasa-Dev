import { Code, Users, Briefcase, GraduationCap, ArrowRight } from "lucide-react";

const services = [
  { icon: Code, title: "Web Development", description: "Build modern, responsive websites and applications" },
  { icon: Users, title: "UI/UX Design", description: "Create beautiful and intuitive user experiences" },
  { icon: Briefcase, title: "Freelancing Training", description: "Learn how to succeed as a freelancer" },
  { icon: GraduationCap, title: "Internship Program", description: "Gain real-world industry experience" },
];

export default function Services() {
  return (
    <section className="py-14 sm:py-16  reveal-section">
      
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-14">

        {/* Heading */}
        <div
          className="text-center mb-12 sm:mb-16"
          data-aos="fade-up"
        >
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase mb-4"
            style={{ fontFamily: "Barlow Condensed, sans-serif" }}
          >
            Our <span className="text-[#F46F25]">Services</span>
          </h2>

          <p className="text-[#999999] max-w-xl mx-auto text-sm sm:text-base">
            Comprehensive solutions to help you succeed in the digital world
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">

          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 sm:p-8 bg-[#111111] rounded-xl border border-white/10 hover:border-[#F46F25]/50 transition-all duration-300 group cursor-pointer"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              
              <service.icon
                className="text-[#F46F25] mb-4 group-hover:scale-110 transition-transform"
                size={38}
              />

              <h3
                className="text-lg sm:text-xl font-bold mb-3 uppercase"
                style={{ fontFamily: "Barlow Condensed, sans-serif" }}
              >
                {service.title}
              </h3>

              <p className="text-[#999999] mb-4 text-sm leading-relaxed">
                {service.description}
              </p>

              <a
                href="#"
                className="text-[#F46F25] text-sm font-bold flex items-center gap-2 group-hover:gap-3 transition-all"
              >
                Learn More <ArrowRight size={16} />
              </a>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}