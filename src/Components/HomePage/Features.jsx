import { Code, Users, Briefcase, TrendingUp } from "lucide-react";

export function Features() {
  return (
    <section className="py-12 bg-[#111111] border-y border-white/10">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex items-center gap-4 p-6 border-r border-white/10 last:border-r-0">
            <Code className="text-[#F46F25]" size={32} />
            <div>
              <h3 className="font-bold text-sm" style={{ fontFamily: 'Barlow Condensed, sans-serif' }}>PRACTICAL LEARNING</h3>
              <p className="text-[#999999] text-xs">Hands-on projects</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-6 border-r border-white/10 last:border-r-0">
            <Users className="text-[#F46F25]" size={32} />
            <div>
              <h3 className="font-bold text-sm" style={{ fontFamily: 'Barlow Condensed, sans-serif' }}>EXPERT MENTORS</h3>
              <p className="text-[#999999] text-xs">Industry professionals</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-6 border-r border-white/10 last:border-r-0">
            <Briefcase className="text-[#F46F25]" size={32} />
            <div>
              <h3 className="font-bold text-sm" style={{ fontFamily: 'Barlow Condensed, sans-serif' }}>FREELANCING SUPPORT</h3>
              <p className="text-[#999999] text-xs">Launch your career</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-6">
            <TrendingUp className="text-[#F46F25]" size={32} />
            <div>
              <h3 className="font-bold text-sm" style={{ fontFamily: 'Barlow Condensed, sans-serif' }}>CAREER GROWTH</h3>
              <p className="text-[#999999] text-xs">Continuous development</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
