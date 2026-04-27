import { Code, Users, Briefcase, GraduationCap, ArrowRight } from "lucide-react";

// Services data - centralized for easier maintenance
const services = [
  { 
    icon: Code, 
    title: "Web Development", 
    description: "Build modern, responsive websites and applications" 
  },
  { 
    icon: Users, 
    title: "UI/UX Design", 
    description: "Create beautiful and intuitive user experiences" 
  },
  { 
    icon: Briefcase, 
    title: "Freelancing Training", 
    description: "Learn how to succeed as a freelancer" 
  },
  { 
    icon: GraduationCap, 
    title: "Internship Program", 
    description: "Gain real-world industry experience" 
  },
];

export default function Services() {
  return (
    <section className="py-24 reveal-section">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <h2 className="text-5xl font-bold uppercase mb-4" style={{ fontFamily: 'Barlow Condensed, sans-serif' }}>
            Our <span className="text-[#F46F25]">Services</span>
          </h2>
          <p className="text-[#999999] max-w-2xl mx-auto">
            Comprehensive solutions to help you succeed in the digital world
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="reveal p-8 bg-[#111111] rounded-xl border border-white/10 hover:border-[#F46F25]/50 transition-all duration-300 group cursor-pointer"
            >
              <service.icon className="text-[#F46F25] mb-4 group-hover:scale-110 transition-transform" size={40} />
              <h3 className="text-xl font-bold mb-3 uppercase" style={{ fontFamily: 'Barlow Condensed, sans-serif' }}>
                {service.title}
              </h3>
              <p className="text-[#999999] mb-4 text-sm">{service.description}</p>
              <a href="#" className="text-[#F46F25] text-sm font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                Learn More <ArrowRight size={16} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

