
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
    tagline: "Perfect for landing pages, portfolios & small sites.",
    monthlyPrice: 499,
    yearlyPrice: 399,
    isPopular: false,
    buttonText: "Get Started →",
    buttonFilled: false,
    features: [
      { text: "Up to 5 pages",            included: true  },
      { text: "Fully responsive design",  included: true  },
      { text: "Basic SEO setup",          included: true  },
      { text: "Contact form integration", included: true  },
      { text: "1 round of revisions",     included: true  },
      { text: "CMS / Blog integration",   included: false },
      { text: "Custom animations",        included: false },
      { text: "Priority support",         included: false },
    ],
  },
  {
    id: "pro",
    label: "Professional",
    name: "Pro",
    icon: "⚡",
    tagline: "For businesses that need a polished, converting product.",
    monthlyPrice: 1299,
    yearlyPrice: 999,
    isPopular: true,
    buttonText: "Get Started →",
    buttonFilled: true,
    features: [
      { text: "Up to 15 pages",           included: true  },
      { text: "Fully responsive design",  included: true  },
      { text: "Advanced SEO + sitemap",   included: true  },
      { text: "CMS / Blog integration",   included: true  },
      { text: "Custom animations",        included: true  },
      { text: "3 rounds of revisions",    included: true  },
      { text: "Performance optimization", included: true  },
      { text: "Priority support",         included: false },
    ],
  },
  {
    id: "agency",
    label: "Agency",
    name: "Custom",
    icon: "🚀",
    tagline: "White-label builds, retainers & complex full-stack apps.",
    monthlyPrice: null,
    yearlyPrice: null,
    isPopular: false,
    buttonText: "Let's Talk →",
    buttonFilled: false,
    features: [
      { text: "Unlimited pages",            included: true },
      { text: "Full-stack development",     included: true },
      { text: "Custom integrations & APIs", included: true },
      { text: "Dashboard / Admin panel",    included: true },
      { text: "Motion & 3D visuals",        included: true },
      { text: "Unlimited revisions",        included: true },
      { text: "White-label delivery",       included: true },
      { text: "Priority support",           included: true },
    ],
  },
];

function PlanCard({ plan, isYearly, index }) {
  const price   = isYearly ? plan.yearlyPrice : plan.monthlyPrice;
  const perText = isYearly ? "per month · billed yearly" : "per project · one-time";

  return (
    <div
      data-aos="fade-up"
      data-aos-delay={index * 100}
      className={`
        relative flex flex-col rounded-2xl p-8
        transition-transform duration-300 hover:-translate-y-2
        ${plan.isPopular
          ? "bg-[#1e1e1e] border-2 border-[#ff6b00]"
          : "bg-[#1a1a1a] border border-[#2a2a2a] hover:border-[#444]"
        }
      `}
    >

      {plan.isPopular && (
        <span className="absolute top-0 right-0 bg-[#ff6b00] text-white text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-tr-2xl rounded-bl-2xl">
          Most Popular
        </span>
      )}

      <div className={`
        w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-5
        ${plan.id === "basic"  ? "bg-white/5"                             : ""}
        ${plan.id === "pro"    ? "bg-[#ff6b00]/20"                        : ""}
        ${plan.id === "agency" ? "bg-white/[0.03] border border-[#333]"   : ""}
      `}>
        {plan.icon}
      </div>

      <p className="text-[#ff6b00] text-[10px] font-black uppercase tracking-[3.5px] mb-1">
        {plan.label}
      </p>

      <h3 className="text-white font-black text-2xl uppercase tracking-tight mb-2">
        {plan.name}
      </h3>

      <p className="text-[#888] text-sm leading-relaxed mb-6 min-h-[44px]">
        {plan.tagline}
      </p>

      <div className="border-t border-[#2a2a2a] mb-6" />

      {price ? (
        <>
          <div className="flex items-end gap-1 mb-1">
            <span className="text-[#ff6b00] text-xl font-bold pb-2 leading-none">$</span>
            <span className="text-white text-5xl font-black leading-none tracking-tighter">
              {price.toLocaleString()}
            </span>
          </div>
          <p className="text-[#888] text-xs mb-1">{perText}</p>
        </>
      ) : (
        <>
          <p className="text-[#ff6b00] text-4xl font-black tracking-tight leading-none">
            Custom
          </p>
          <p className="text-[#888] text-xs mt-2 mb-1">
            tailored to your project scope
          </p>
        </>
      )}

      <ul className="flex flex-col gap-3 my-6 flex-1">
        {plan.features.map((f, i) => (
          <li
            key={i}
            className={`flex items-center gap-3 text-sm ${
              f.included ? "text-white" : "text-[#4a4a4a]"
            }`}
          >
            <span className={`
              w-5 h-5 rounded-full flex items-center justify-center
              text-[10px] font-black shrink-0
              ${f.included
                ? "bg-[#ff6b00]/20 text-[#ff6b00]"
                : "bg-white/5 text-[#333]"
              }
            `}>
              {f.included ? "✓" : "✗"}
            </span>
            {f.text}
          </li>
        ))}
      </ul>

      <Link
        to="/contactus"
        className={`
          block w-full py-4 rounded-xl text-sm font-black uppercase
          tracking-widest text-center transition-all duration-200
          no-underline mt-auto
          ${plan.buttonFilled
            ? "bg-[#ff6b00] text-white border-2 border-[#ff6b00] hover:bg-[#ff8c33] hover:border-[#ff8c33]"
            : "bg-transparent text-white border-2 border-[#333] hover:border-[#666] hover:bg-white/5"
          }
        `}
      >
        {plan.buttonText}
      </Link>

    </div>
  );
}

function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
      easing: "ease-out",
    });
  }, []);

  return (
    <section className="bg-[#0d0d0d] text-white px-5 py-20">
      <div className="max-w-6xl mx-auto w-full">

        <div className="text-center mb-16" data-aos="fade-up">

          <p className="text-[#ff6b00] text-xs font-black uppercase tracking-[4px] mb-3">
            Pricing Plans
          </p>

          <div className="w-12 h-[3px] bg-[#ff6b00] mx-auto mb-5 rounded-full" />

          <h2 className="text-4xl md:text-5xl font-black uppercase leading-tight tracking-tight mb-4">
            Simple, Transparent{" "}
            <span className="text-[#ff6b00]">Pricing</span>
          </h2>

          <p className="text-[#888] text-sm md:text-base leading-relaxed max-w-lg mx-auto mb-8">
            No hidden fees, no lock-in contracts. Choose the plan that fits
            your project and goals.
          </p>

          <div className="flex items-center justify-center gap-4 flex-wrap">

            <span className={`text-sm font-medium transition-colors duration-200 ${!isYearly ? "text-white" : "text-[#888]"}`}>
              Monthly
            </span>

            <button
              onClick={() => setIsYearly(!isYearly)}
              aria-label="Toggle billing period"
              className="relative bg-[#ff6b00] rounded-full border-none cursor-pointer flex-shrink-0"
              style={{ width: "52px", height: "28px" }}
            >
              <span
                className="absolute top-1 w-5 h-5 bg-white rounded-full transition-all duration-200"
                style={{ left: isYearly ? "28px" : "4px" }}
              />
            </button>

            <span className={`text-sm font-medium transition-colors duration-200 ${isYearly ? "text-white" : "text-[#888]"}`}>
              Yearly
            </span>

            <span className="bg-[#ff6b00]/15 text-[#ff6b00] text-xs font-bold px-4 py-1 rounded-full border border-[#ff6b00]/30 tracking-wide">
              Save 20%
            </span>

          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {plans.map((plan, index) => (
            <PlanCard
              key={plan.id}
              plan={plan}
              isYearly={isYearly}
              index={index}
            />
          ))}
        </div>

        <p className="text-center text-[#888] text-sm mb-16" data-aos="fade-up">
          🔒{" "}
          <strong className="text-[#ff6b00]">14-day money-back guarantee</strong>
          {" "}· No questions asked · Secure payment
        </p>

        <div
          data-aos="fade-up"
          className="
            flex flex-col md:flex-row items-start md:items-center
            justify-between gap-8
            bg-gradient-to-br from-[#1c0900] via-[#2e1500] to-[#1c0900]
            border border-[#ff6b00]/35 rounded-2xl
            px-8 md:px-14 py-12
          "
        >
          <div>
            <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-2">
              Not Sure Which Plan{" "}
              <span className="text-[#ff6b00]">Is Right?</span>
            </h3>
            <p className="text-[#888] text-sm leading-relaxed">
              Let's jump on a free 30-minute call and figure it out together.
            </p>
          </div>

          <Link
            to="/contact"
            className="
              shrink-0 bg-[#ff6b00] hover:bg-[#ff8c33] text-white
              font-black text-sm uppercase tracking-widest
              px-9 py-4 rounded-xl transition-colors duration-200
              no-underline whitespace-nowrap
            "
          >
            Book a Free Call →
          </Link>
        </div>

      </div>
    </section>
  );
}

export default Pricing;