import { Link } from "react-router-dom";
import { Code, ArrowRight, Clock } from "lucide-react";

export function CoursesPreview() {
  const courses = [
    "Full Stack Web Development",
    "UI/UX Design Mastery",
    "Freelancing Success Blueprint",
  ];

  return (
    <section className="py-24 bg-[#111111] reveal-section">
      <div className="max-w-[1280px] mx-auto px-6">

        {/* Header with Coming Soon badge */}
        <div className="flex items-center gap-4 mb-8 reveal">
          <h2
            className="text-4xl font-bold uppercase"
            style={{ fontFamily: "Barlow Condensed, sans-serif" }}
          >
            Popular Courses
          </h2>
          <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F46F25]/10 border border-[#F46F25]/30 text-[#F46F25] text-xs font-bold uppercase tracking-widest">
            <Clock size={12} />
            Coming Soon
          </span>
        </div>

        {/* Full-width course cards */}
        <div className="space-y-6">
          {courses.map((course, idx) => (
            <div
              key={idx}
              className="reveal relative p-6 bg-[#0A0A0A] rounded-xl border border-white/10 opacity-60 cursor-not-allowed overflow-hidden"
            >
              {/* Lock overlay */}
              <div className="absolute inset-0 backdrop-blur-[1px] bg-[#0A0A0A]/30 z-10 flex items-center justify-center rounded-xl">
                <span className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F46F25]/10 border border-[#F46F25]/30 text-[#F46F25] text-xs font-bold uppercase tracking-widest">
                  <Clock size={12} />
                  Coming Soon
                </span>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-20 h-20 rounded-lg bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] flex items-center justify-center">
                  <Code className="text-[#F46F25]" size={32} />
                </div>
                <div className="flex-1">
                  <h3
                    className="font-bold mb-1 uppercase"
                    style={{ fontFamily: "Barlow Condensed, sans-serif" }}
                  >
                    {course.title}
                  </h3>
                  <p className="text-[#999999] text-sm">{course.duration} • Expert mentors</p>
                </div>
                <span className="text-[#F46F25] font-bold text-xl">PKR 12,000</span>
              </div>
            </div>
          ))}
        </div>

        {/* Notify CTA */}
        <div className="mt-8 reveal flex items-center gap-4">
          <p className="text-[#999999] text-sm">
            Be the first to know when courses launch.
          </p>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-[#F46F25] font-bold hover:gap-3 transition-all whitespace-nowrap"
          >
            Notify Me <ArrowRight size={20} />
          </Link>
        </div>

      </div>
    </section>
  );
}

export default CoursesPreview;