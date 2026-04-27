import { Link } from "react-router-dom";

export function CTA() {
  return (
    <section className="py-12 sm:py-16 reveal-section">
      
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        
        <div className="reveal bg-gradient-to-r from-[#111111] to-[#F46F25]/20 rounded-2xl p-6 sm:p-8 md:p-12 flex flex-col lg:flex-row items-center lg:items-center justify-between gap-6 sm:gap-8 border border-[#F46F25]/30">
          
          {/* TEXT */}
          <div className="text-center lg:text-left">
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase mb-3"
              style={{ fontFamily: "Barlow Condensed, sans-serif" }}
            >
              Ready to Start Your Journey?
            </h2>

            <p className="text-[#999999] text-sm sm:text-base md:text-lg">
              Join hundreds of students building their tech careers
            </p>
          </div>

          {/* BUTTON */}
          <Link
            to="/signup"
            className="w-full sm:w-auto text-center px-8 sm:px-10 py-3 sm:py-4 bg-[#F46F25] text-white rounded-lg hover:bg-[#F46F25]/80 transition-all font-bold text-base sm:text-lg whitespace-nowrap"
            style={{ fontFamily: "Barlow Condensed, sans-serif" }}
          >
            Get Started
          </Link>

        </div>
      </div>
    </section>
  );
}

export default CTA;