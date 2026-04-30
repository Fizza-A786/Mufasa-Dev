import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Ahmed Khan",
    role: "Web Developer",
    quote: "Mufasa Developers transformed my career. The practical training and mentorship helped me land my first freelance projects within weeks!",
  },
  {
    id: 2,
    name: "Fatima Ali",
    role: "UI/UX Designer",
    quote: "The best investment I made in my education. The courses are comprehensive, and the support from mentors is exceptional.",
  },
];

function Testimonials() {
  return (
    <section className="py-14 sm:py-16 reveal-section">
      
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12">

        {/* Heading */}
        <div className="text-center mb-12 sm:mb-16 reveal">
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-wide"
            style={{ fontFamily: "Barlow Condensed, sans-serif" }}
          >
            What Our Students Say
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">

          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="reveal p-6 sm:p-8 bg-[#0A0A0A] rounded-xl border border-white/10"
            >

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="text-[#F46F25] fill-[#F46F25]"
                    size={18}
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-[#999999] mb-6 italic text-sm sm:text-base leading-relaxed">
                "{testimonial.quote}"
              </p>

              {/* User */}
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-[#F46F25] to-[#F46F25]/70 flex items-center justify-center">
                  <span
                    className="text-white font-bold text-lg sm:text-xl"
                    style={{ fontFamily: "Barlow Condensed, sans-serif" }}
                  >
                    {testimonial.name[0]}
                  </span>
                </div>

                <div>
                  <h4
                    className="font-bold text-sm sm:text-base"
                    style={{ fontFamily: "Barlow Condensed, sans-serif" }}
                  >
                    {testimonial.name}
                  </h4>
                  <p className="text-[#999999] text-xs sm:text-sm">
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