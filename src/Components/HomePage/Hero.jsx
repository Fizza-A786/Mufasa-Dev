import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Hero() {

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  return (
    <section
      className="py-10 md:py-20 flex items-center relative overflow-hidden pt-24 px-6 lg:px-16 bg-black min-h-[80vh]"
    >
      {/* Background Glow */}
      <div className="absolute top-[-120px] right-[-120px] w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] bg-[#F46F25]/20 blur-[140px] rounded-full" />

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-10 md:gap-14 items-center relative z-10">

        {/* LEFT CONTENT */}
        <div className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left">


          <h1 className="hero-heading text-white font-bold leading-[1.1] mb-6 text-[clamp(30px,6vw,60px)] mt-8 md:mt-10">
            <span data-aos="fade-up" data-aos-delay="100" className="block mb-1">Build Skills.</span>
            <span data-aos="fade-up" data-aos-delay="200" className="block mb-1">Earn Online.</span>
            <span data-aos="fade-up" data-aos-delay="300" className="text-[#F46F25] whitespace-nowrap block">
              Work with Mufasa.
            </span>
          </h1>

          <p
            data-aos="fade-up"
            data-aos-delay="350"
            className="hero-text text-gray-400 text-sm sm:text-base mb-6 md:mb-10 max-w-md mx-auto lg:mx-0 leading-relaxed"
          >
            Master modern web development, learn freelancing, and launch your
            tech career with hands-on training from industry experts.
          </p>

          <div className="hero-buttons relative z-10 flex flex-wrap justify-center lg:justify-start gap-4">

            <Link
              data-aos="fade-up"
              data-aos-delay="400"
              to="/signup"
              className="flex items-center gap-2 px-6 sm:px-7 py-3 bg-[#F46F25] text-white rounded-lg text-sm font-medium shadow-[0_8px_30px_rgba(244,111,37,0.35)] hover:bg-[#e55d1a] hover:scale-105 transition-all"
            >
              Get Started <ArrowRight size={18} />
            </Link>

            <Link
              data-aos="fade-up"
              data-aos-delay="500"
              to="/blog"
              className="px-6 sm:px-7 py-3 border border-[#F46F25] text-[#F46F25] rounded-lg hover:text-white hover:scale-105 transition-all duration-300 text-sm font-medium hover:bg-[#F46F25]"
            >
              Explore Blog
            </Link>

          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div
          data-aos="zoom-in"
          data-aos-delay="200"
          className="flex justify-center relative mt-10 lg:mt-0"
        >
          <div className="absolute w-[200px] sm:w-[250px] md:w-[300px] h-[200px] sm:h-[250px] md:h-[300px] bg-[#F46F25]/30 blur-[120px] rounded-full" />

          <div className="hero-image relative w-full max-w-[320px] sm:max-w-[380px] md:max-w-[420px] aspect-square rounded-3xl bg-gradient-to-br from-[#F46F25] to-[#d65a1c] flex items-center justify-center shadow-[0_30px_100px_rgba(244,111,37,0.4)] overflow-hidden">
            <img
              src="https://images.pexels.com/photos/7652043/pexels-photo-7652043.jpeg"
              alt=""
              className="w-full h-full object-cover rounded-3xl hover:scale-105 transition-all duration-500"
            />
          </div>
        </div>

      </div>
    </section>
  );
}