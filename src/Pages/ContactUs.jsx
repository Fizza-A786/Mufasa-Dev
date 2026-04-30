import React, { useEffect } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

function ContactUs() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <section className="text-white py-20 sm:py-28 overflow-x-hidden">
      <div className="max-w-[1280px] mx-auto px-10 sm:px-10">

        {/* Heading */}
        <div className="text-center mb-14" data-aos="fade-up">
          <h2
            className="text-4xl sm:text-5xl font-bold uppercase"
            style={{ fontFamily: "Barlow Condensed, sans-serif" }}
          >
            CONTACT <span className="text-[#FF6B00]">US</span>
          </h2>
          <p className="text-[#999] mt-4 text-sm sm:text-base max-w-2xl mx-auto">
            Have a question, project idea, or want to join Mufasa Developers?
            We’re here to help you build your future in tech.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* LEFT INFO */}
          <div className="flex flex-col gap-8" data-aos="fade-right">

            <div className="bg-[#111111] p-6 rounded-2xl border border-[#1f1f1f] hover:border-[#FF6B00] transition">
              <div className="flex items-center gap-4">
                <Phone className="text-[#FF6B00]" />
                <div>
                  <h4 className="text-lg font-bold">Phone</h4>
                  <p className="text-[#999] text-sm">+92 300 0000000</p>
                </div>
              </div>
            </div>

            <div className="bg-[#111111] p-6 rounded-2xl border border-[#1f1f1f] hover:border-[#FF6B00] transition">
              <div className="flex items-center gap-4">
                <Mail className="text-[#FF6B00]" />
                <div>
                  <h4 className="text-lg font-bold">Email</h4>
                  <p className="text-[#999] text-sm">support@mufasadevelopers.com</p>
                </div>
              </div>
            </div>

            <div className="bg-[#111111] p-6 rounded-2xl border border-[#1f1f1f] hover:border-[#FF6B00] transition">
              <div className="flex items-center gap-4">
                <MapPin className="text-[#FF6B00]" />
                <div>
                  <h4 className="text-lg font-bold">Location</h4>
                  <p className="text-[#999] text-sm">Bahawalpur, Pakistan</p>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT FORM */}
          <div
            className="bg-[#111111] p-6 sm:p-10 rounded-2xl border border-[#1f1f1f]"
            data-aos="fade-left"
          >
            <h3
              className="text-2xl sm:text-3xl font-bold mb-6 uppercase"
              style={{ fontFamily: "Barlow Condensed, sans-serif" }}
            >
              SEND A <span className="text-[#FF6B00]">MESSAGE</span>
            </h3>

            <form className="flex flex-col gap-5">

              <input
                type="text"
                placeholder="Your Name"
                className="bg-[#0D0D0D] border border-[#222] p-3 rounded-lg focus:border-[#FF6B00] outline-none transition"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="bg-[#0D0D0D] border border-[#222] p-3 rounded-lg focus:border-[#FF6B00] outline-none transition"
              />

              <input
                type="text"
                placeholder="Subject"
                className="bg-[#0D0D0D] border border-[#222] p-3 rounded-lg focus:border-[#FF6B00] outline-none transition"
              />

              <textarea
                rows="5"
                placeholder="Your Message"
                className="bg-[#0D0D0D] border border-[#222] p-3 rounded-lg focus:border-[#FF6B00] outline-none transition resize-none"
              />

              <button
                type="submit"
                className="flex items-center justify-center gap-2 bg-[#FF6B00] hover:bg-orange-600 transition py-3 rounded-lg font-bold uppercase"
              >
                Send Message <Send size={16} />
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

export default ContactUs;