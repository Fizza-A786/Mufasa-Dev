import { Link } from "react-router-dom";

export function CTA() {
  return (
    <section className="py-16 reveal-section">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="reveal bg-gradient-to-r from-[#111111] to-[#F46F25]/20 rounded-2xl p-12 flex flex-col lg:flex-row items-center justify-between gap-8 border border-[#F46F25]/30">
          <div>
            <h2 className="text-4xl font-bold uppercase mb-3" style={{ fontFamily: 'Barlow Condensed, sans-serif' }}>
              Ready to Start Your Journey?
            </h2>
            <p className="text-[#999999] text-lg">Join hundreds of students building their tech careers</p>
          </div>
          <Link
            to="/signup"
            className="px-10 py-4 bg-[#F46F25] text-white rounded-lg hover:bg-[#F46F25]/80 transition-all font-bold text-lg whitespace-nowrap"
            style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CTA;
