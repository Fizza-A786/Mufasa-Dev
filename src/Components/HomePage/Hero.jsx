import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="py-10 md:py-23 flex items-center relative overflow-hidden pt-24 px-6 lg:px-16 bg-black min-h-[80vh]">
      <div className="absolute top-[-120px] right-[-120px] w-[500px] h-[500px] bg-[#F46F25]/20 blur-[140px] rounded-full" />
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-14 items-center relative z-10">
        <div className="max-w-xl">
          <div className="inline-block md:mt-6 mt-6 px-5 py-2 bg-[#F46F25]/10 border border-[#F46F25]/30 rounded-full">
            <span className="text-[#F46F25] text-[11px] uppercase tracking-widest font-semibold">
              Welcome to Mufasa Developers
            </span>
          </div>
          <h1 className="text-white font-bold leading-[1.1] mb-6 text-[clamp(34px,5vw,60px)] md:mt-10 mt-8">
            <span className="block mb-1">Build Skills.</span>
            <span className="block mb-1">Earn Online.</span>
            <span className="text-[#F46F25] whitespace-nowrap">Work with Mufasa.</span>
          </h1>
          <p className="text-gray-400 text-sm sm:text-base mb-6 md:mb-10 max-w-md leading-relaxed">
            Master modern web development, learn freelancing, and launch your
            tech career with hands-on training from industry experts.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/signup"
              className="flex items-center gap-2 px-7 py-3 bg-[#F46F25] text-white rounded-lg text-sm font-medium shadow-[0_8px_30px_rgba(244,111,37,0.35)] hover:bg-[#e55d1a] hover:scale-105 transition-all"
            >
              Get Started <ArrowRight size={18} />
            </Link>
            <Link
              to="/blog"
              className="px-7 py-3 border border-[#F46F25] text-[#F46F25] rounded-lg hover:text-white hover:scale-110 transition-all duration-300 text-sm font-medium hover:bg-[#F46F25]"
            >
              Explore Blog
            </Link>
          </div>
        </div>
        <div className="hidden lg:flex justify-center relative">
          <div className="absolute w-[300px] h-[300px] bg-[#F46F25]/30 blur-[120px] rounded-full" />
          <div className="relative w-[420px] h-[420px] rounded-3xl bg-gradient-to-br from-[#F46F25] to-[#d65a1c] flex items-center justify-center shadow-[0_30px_100px_rgba(244,111,37,0.4)] overflow-hidden">
            <img
              src="https://images.pexels.com/photos/7652043/pexels-photo-7652043.jpeg"
              alt=""
              className="w-full h-full object-cover rounded-3xl hover:scale-105 transition-all duration-400"
            />
          </div>
        </div>
      </div>
    </section>
  );
}