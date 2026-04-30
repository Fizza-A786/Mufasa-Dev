import React from "react";
import { Check } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const whyImage =
  "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800";

const features = [
  {
    title: "Practical & Industry-Focused Courses",
    description:
      "Learn skills that are immediately applicable in the real world, designed by industry experts.",
  },
  {
    title: "Real World Projects",
    description:
      "Build your portfolio with actual projects that showcase your abilities to potential clients.",
  },
  {
    title: "Freelancing Guidance",
    description:
      "Get step-by-step training on how to find clients, price your services, and grow your freelance business.",
  },
  {
    title: "Dedicated Mentors & Support",
    description:
      "Access personalized mentorship from experienced professionals throughout your learning journey.",
  },
];

function WhyChooseUs() {
  return (
    <section className="py-16 sm:py-24  overflow-x-hidden">

      {/* WIDTH FIXED (matches Navbar system) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-11">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* LEFT TEXT */}
          <div data-aos="fade-right">

            <h2
              className="text-4xl sm:text-5xl text-white font-bold uppercase mb-8"
              style={{ fontFamily: "Barlow Condensed, sans-serif" }}
            >
              WHY CHOOSE <span className="text-[#FF6B00]">MUFASA?</span>
            </h2>

            <div className="flex flex-col gap-6">
              {features.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4"
                  data-aos="fade-up"
                  data-aos-delay={Math.min(idx * 100, 300)}
                >
                  <div className="w-6 h-6 rounded-full bg-[#FF6B00] flex items-center justify-center flex-shrink-0 mt-1">
                    <Check size={14} className="text-white" strokeWidth={3} />
                  </div>

                  <div>
                    <h4
                      className="text-lg sm:text-xl text-white font-bold mb-1"
                      style={{ fontFamily: "Barlow Condensed, sans-serif" }}
                    >
                      {item.title}
                    </h4>
                    <p className="text-[#999999] text-sm sm:text-base leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div
            className="group relative w-full aspect-[4/3] sm:aspect-square rounded-2xl overflow-hidden cursor-pointer"
            data-aos="fade-left"
            data-aos-delay="300"
          >
            <img
              src={whyImage}
              alt="Why Choose Mufasa"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity duration-500 group-hover:opacity-50" />

            <div className="absolute inset-0 bg-[#FF6B00]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-[#FF6B00] opacity-0 group-hover:opacity-100 transition-all duration-500" />

            <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-[#FF6B00] opacity-0 group-hover:opacity-100 transition-all duration-500" />
          </div>

        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;