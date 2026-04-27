import { Star } from "lucide-react";

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Ahmed Khan",
      role: "Web Developer",
      quote:
        "Mufasa Developers transformed my career. The practical training and mentorship helped me land my first freelance projects within weeks!",
    },
    {
      id: 2,
      name: "Fatima Ali",
      role: "UI/UX Designer",
      quote:
        "The best investment I made in my education. The courses are comprehensive, and the support from mentors is exceptional.",
    },
  ];

  return (
    <section className="py-24 bg-[#111111] reveal-section">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <h2
            className="text-5xl font-bold uppercase mb-4"
            style={{ fontFamily: "Barlow Condensed, sans-serif" }}
          >
            What Our Students Say
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="reveal p-8 bg-[#0A0A0A] rounded-xl border border-white/10"
            >
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={`star-${star}`}
                    className="text-[#F46F25] fill-[#F46F25]"
                    size={20}
                  />
                ))}
              </div>

              <p className="text-[#999999] mb-6 italic">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#F46F25] to-[#F46F25]/70 flex items-center justify-center">
                  <span
                    className="text-white font-bold text-xl"
                    style={{ fontFamily: "Barlow Condensed, sans-serif" }}
                  >
                    {testimonial.name[0]}
                  </span>
                </div>

                <div>
                  <h4
                    className="font-bold"
                    style={{ fontFamily: "Barlow Condensed, sans-serif" }}
                  >
                    {testimonial.name}
                  </h4>
                  <p className="text-[#999999] text-sm">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;