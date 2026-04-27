import React from "react";
import { Target, Eye } from "lucide-react";

const cards = [
  {
    icon: Target,
    title: "Our Mission",
    text: "To bridge the gap between traditional education and industry requirements by providing practical, hands-on training that empowers individuals to build successful careers in technology and freelancing.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    text: "To become the leading tech education platform in Pakistan, recognized for producing skilled professionals who drive innovation and contribute meaningfully to the global digital economy.",
  },
];

function MissionVision() {
  return (
    <section className="py-16 sm:py-24 bg-[#0D0D0D]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {cards.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="p-8 sm:p-10 bg-[#111111] text-white rounded-2xl border border-white/10 hover:border-[#FF6B00]/50 transition-all duration-300 group"
            >
              {/* Icon */}
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#FF6B00]/10 flex items-center justify-center mb-6 group-hover:bg-[#FF6B00]/20 transition-colors duration-300">
                <Icon className="text-[#FF6B00]" size={28} />
              </div>

              {/* Title */}
              <h3
                className="text-2xl sm:text-3xl text-white  font-bold uppercase mb-3"
                style={{ fontFamily: "Barlow Condensed, sans-serif" }}
              >
                {title}
              </h3>

              {/* Divider */}
              <div className="w-10 h-[2px] bg-[#FF6B00] mb-4 group-hover:w-16 transition-all duration-300" />

              {/* Text */}
              <p className="text-[#999999] text-sm sm:text-base leading-relaxed">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MissionVision;