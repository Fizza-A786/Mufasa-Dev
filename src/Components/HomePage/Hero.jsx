import { Link } from "react-router-dom";
import { ArrowUpRight, Phone } from "lucide-react";
import { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";

export default function Hero() {
  // AOS initialization moved to App.jsx for better performance

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden px-5 sm:px-10 lg:px-16 pt-40 pb-16 lg:pt-28 lg:pb-0">

      {/* Ambient glows */}
      <div className="absolute right-[-60px] w-[420px] h-[420px] bg-[#F46F25]/18 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-60px] left-[-60px] w-[340px] h-[340px] bg-blue-700/14 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[1280px] mx-auto w-full grid lg:grid-cols-[3fr_2fr] gap-8 items-center relative z-10">

        {/* ── LEFT ── */}
        <div className="max-w-2xl mx-auto lg:mx-0 text-left">

          {/* Heading */}
          <h1 className="font-black leading-[1.1] mb-5 tracking-tight text-[clamp(32px,6vw,64px)] text-center lg:text-left">
            <span data-aos="fade-up" data-aos-delay="100" className="block text-white">Scaleable</span>
            <span data-aos="fade-up" data-aos-delay="200" className="block">
              <span className="text-[#F46F25]">Software</span>
              <span className="text-white"> &amp; </span>
              <span className="text-[#F46F25]">Web</span>
            </span>
            <span data-aos="fade-up" data-aos-delay="300" className="block text-white">Development</span>
          </h1>

          {/* Description */}
          <p
            data-aos="fade-up"
            data-aos-delay="350"
            className="text-white/70 text-base sm:text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0 text-center lg:text-left"
          >
            Take your business to the next level with our expert development services.
            We create custom software, stunning websites, and user-friendly apps that
            not only meet your needs but exceed your expectations.
          </p>

          {/* Bullets */}
          <ul
            data-aos="fade-up"
            data-aos-delay="380"
            className="flex flex-col gap-4 mb-10 items-center lg:items-start"
          >
            {["Custom Software & Web Solutions", "Seamless App Development"].map((item) => (
              <li key={item} className="flex items-center gap-3 text-white font-semibold text-sm sm:text-base">
                <span className="w-[20px] h-[20px] rounded-full border-2 border-[#F46F25] flex items-center justify-center shrink-0">
                  <span className="w-[8px] h-[8px] rounded-full bg-[#F46F25]" />
                </span>
                {item}
              </li>
            ))}
          </ul>

          {/* CTA Row */}
          <div
            data-aos="fade-up"
            data-aos-delay="420"
            className="flex flex-col sm:flex-row gap-6 items-center justify-center lg:justify-start"
          >
            <Link
              to="/contactus"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#F46F25] text-white rounded-xl
                         text-sm font-bold uppercase tracking-widest
                         shadow-[0_8px_28px_rgba(244,111,37,0.4)]
                         hover:scale-105 hover:shadow-[0_12px_38px_rgba(244,111,37,0.55)]
                         transition-all duration-300 group"
            >
              Contact Us Today!
              <ArrowUpRight
                size={18}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />
            </Link>

            <div className="flex items-center gap-3">
              <div className="w-[42px] h-[42px] rounded-full bg-green-500 flex items-center justify-center shadow-[0_4px_16px_rgba(34,197,94,0.4)] shrink-0">
                <Phone size={17} className="text-white" />
              </div>
              <div>
                <p className="text-white/55 text-[9px] uppercase tracking-[0.12em] mb-0.5">
                  Book a Free Consultation
                </p>
                <p className="text-white font-bold text-sm tracking-wide">
                  +1 (443) 746 – 2273
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ── RIGHT ── */}
        <div
          data-aos="zoom-in"
          data-aos-delay="200"
          className="flex justify-center items-center relative mt-12 lg:mt-0"
        >
          <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[450px] lg:h-[450px]">

            <img
              src="/hero.png"
              alt="tech visual"
              className="w-full h-full object-contain opacity-90"
              style={{
                animation: "floatY 6s ease-in-out infinite"
              }}
            />

            <div className="absolute inset-0 bg-[#F46F25]/20 blur-[60px] lg:blur-[80px] rounded-full -z-10" />

          </div>
        </div>

      </div>

      <style>{`
        @keyframes floatY {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-18px); }
        }
      `}</style>
    </section>
  );
}