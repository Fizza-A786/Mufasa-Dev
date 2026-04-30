import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const plans = [
  {
    id: "basic",
    label: "Starter",
    name: "Basic",
    icon: "🌱",
    price: 499,
    desc: "Perfect for small websites and portfolios.",
    features: ["5 Pages", "Responsive Design", "Basic SEO", "Contact Form"],
  },
  {
    id: "pro",
    label: "Popular",
    name: "Pro",
    icon: "⚡",
    price: 1299,
    desc: "Best for businesses that need a premium website.",
    features: ["15 Pages", "Advanced SEO", "CMS", "Animations"],
    highlight: true,
  },
  {
    id: "agency",
    label: "Custom",
    name: "Agency",
    icon: "🚀",
    price: null,
    desc: "Custom solutions for complex applications.",
    features: ["Unlimited Pages", "Full Stack", "API Integration", "Dashboard"],
  },
];

function PlanCard({ plan, index }) {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={index * 120}
      className={`card group relative rounded-2xl p-6 sm:p-8 transition-all duration-300
      ${
        plan.highlight
          ? "border-2 border-[#F46F25] bg-[#111]"
          : "border border-white/10 bg-[#111]"
      }`}
    >
      {/* Badge */}
      <span className="text-[#F46F25] text-xs uppercase tracking-widest">
        {plan.label}
      </span>

      {/* Icon */}
      <div className="text-3xl mt-3">{plan.icon}</div>

      {/* Title */}
      <h3 className="text-xl font-bold mt-3">{plan.name}</h3>

      {/* Description */}
      <p className="text-[#888] text-sm mt-2">{plan.desc}</p>

      {/* Price */}
      <div className="mt-5">
        {plan.price ? (
          <p className="text-3xl font-bold">
            ${plan.price}
          </p>
        ) : (
          <p className="text-3xl font-bold text-[#F46F25]">
            Custom
          </p>
        )}
      </div>

      {/* Features */}
      <ul className="mt-5 space-y-2 text-sm text-[#aaa]">
        {plan.features.map((f, i) => (
          <li key={i}>✓ {f}</li>
        ))}
      </ul>

      {/* Button */}
      <Link
        to="/contactus"
        className={`block text-center mt-6 py-3 rounded-lg text-sm font-semibold transition-all
        ${
          plan.highlight
            ? "bg-[#F46F25] hover:bg-[#ff8c33] text-white"
            : "border border-white/20 hover:border-[#F46F25] hover:bg-white/5"
        }`}
      >
        Get Started →
      </Link>
    </div>
  );
}


export default function Pricing() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <>
      {/* 🔥 SMOOTH HOVER */}
      <style>{`
        .card {
          will-change: transform;
          transition: transform 0.35s cubic-bezier(0.22,1,0.36,1),
                      box-shadow 0.35s ease;
        }

        .card:hover {
          transform: translateY(-10px) scale(1.03);
          box-shadow: 0 20px 50px rgba(244,111,37,0.2);
        }
      `}</style>

      <section className="py-20 px-4 text-white">

        {/* HEADING */}
        <div className="text-center mb-14" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold">
            Pricing <span className="text-[#F46F25]">Plans</span>
          </h2>
          <p className="text-[#888] mt-3 text-sm max-w-md mx-auto">
            Choose the plan that fits your needs. Simple and transparent pricing.
          </p>
        </div>

        {/* GRID */}
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <PlanCard key={plan.id} plan={plan} index={index} />
          ))}
        </div>

      </section>
    </>
  );
}