import { Link } from "react-router-dom";
import { ArrowUpRight, Phone } from "lucide-react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Hero() {
  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-out-cubic", once: true });
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden px-6 sm:px-10 lg:px-16 py-24 mt-10">

      {/* Ambient glows */}
      <div className="absolute right-[-60px] w-[420px] h-[420px] bg-[#F46F25]/18 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-60px] left-[-60px] w-[340px] h-[340px] bg-blue-700/14 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[1280px] mx-auto w-full grid lg:grid-cols-[3fr_2fr] gap-8 items-center relative z-10">

        {/* ── LEFT ── */}
        <div className="max-w-2xl mx-auto lg:mx-0 text-left">

          {/* Heading */}
          <h1 className="font-black leading-[1.07] mb-5 tracking-tight text-[clamp(34px,4.5vw,60px)]">
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
            className="text-white/62 text-sm sm:text-base leading-relaxed mb-7 max-w-lg"
          >
            Take your business to the next level with our expert development services.
            We create custom software, stunning websites, and user-friendly apps that
            not only meet your needs but exceed your expectations.
          </p>

          {/* Bullets */}
          <ul
            data-aos="fade-up"
            data-aos-delay="380"
            className="flex flex-col gap-3 mb-9 items-start"
          >
            {["Custom Software & Web Solutions", "Seamless App Development"].map((item) => (
              <li key={item} className="flex items-center gap-3 text-white font-semibold text-sm">
                <span className="w-[18px] h-[18px] rounded-full border-2 border-[#F46F25] flex items-center justify-center flex-shrink-0">
                  <span className="w-[7px] h-[7px] rounded-full bg-[#F46F25]" />
                </span>
                {item}
              </li>
            ))}
          </ul>

          {/* CTA Row */}
          <div
            data-aos="fade-up"
            data-aos-delay="420"
            className="flex flex-wrap gap-5 items-center justify-start"
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#F46F25] text-white rounded
                         text-xs font-bold uppercase tracking-widest
                         shadow-[0_8px_28px_rgba(244,111,37,0.4)]
                         hover:scale-105 hover:shadow-[0_12px_38px_rgba(244,111,37,0.55)]
                         transition-all duration-300 group"
            >
              Contact Us Today!
              <ArrowUpRight
                size={15}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />
            </Link>

            <div className="flex items-center gap-3">
              <div className="w-[42px] h-[42px] rounded-full bg-green-500 flex items-center justify-center shadow-[0_4px_16px_rgba(34,197,94,0.4)] flex-shrink-0">
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
          className="hidden lg:flex justify-center items-center relative"
        >
          <div className="relative w-[450px] h-[450px]">

            <img
              src="../../public/hero.png"
              alt="tech visual"
              className="w-full h-full object-contain opacity-90"
              style={{
                animation: "floatY 6s ease-in-out infinite"
              }}
            />

            <div className="absolute inset-0 bg-[#F46F25]/20 blur-[80px] rounded-full -z-10" />

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