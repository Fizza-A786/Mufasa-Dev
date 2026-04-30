import { Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaThreads,
} from "react-icons/fa6";

const socialLinks = [
  { name: "Facebook", icon: FaFacebookF, url: "#" },
  { name: "Twitter", icon: FaTwitter, url: "#" },
  { name: "Instagram", icon: FaInstagram, url: "#" },
  { name: "Threads", icon: FaThreads, url: "#" },
  { name: "LinkedIn", icon: FaLinkedinIn, url: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-white/10 mt-20">

      <div className="max-w-7xl mx-auto px-6 md:px-11 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

        {/* LOGO + ABOUT */}
        <div>

          {/* Logo (proper left alignment) */}
          <div className="flex items-start mb-4">
            <img
              src="/hoverLogo.png"
              alt="logo"
              className="w-[160px] h-auto object-contain"
            />
          </div>

          <p className="text-[#999] text-sm mb-5 leading-relaxed">
            Learn tech skills, start freelancing, and build your digital career with real-world experience.
          </p>

          {/* Socials */}
          <div className="flex gap-3 flex-wrap">

            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  aria-label={social.name}
                  className="w-10 h-10 rounded-full bg-[#111] border border-white/10 flex items-center justify-center
                             text-white hover:text-[#F46F25]
                             hover:-translate-y-1 transition-all duration-300"
                >
                  <Icon size={16} />
                </a>
              );
            })}

          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="font-bold mb-4 text-white">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {["Home", "About", "Services", "Projects"].map((link) => {
              const path = link === "Home" ? "/" : `/${link.toLowerCase()}`;
              return (
                <li key={link}>
                  <Link
                    to={path}
                    className="text-[#999] hover:text-[#F46F25] transition-colors duration-200"
                  >
                    {link}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* SERVICES */}
        <div>
          <h3 className="font-bold mb-4 text-white">Services</h3>
          <ul className="space-y-2 text-sm">
            {["Web Development", "UI/UX Design", "Freelancing Training", "Internship Program"].map((service) => (
              <li key={service}>
                <a
                  href="#"
                  className="text-[#999] hover:text-[#F46F25] transition-colors duration-200"
                >
                  {service}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="font-bold mb-4 text-white">Contact</h3>

          <div className="space-y-3 text-[#999] text-sm">

            <a
              href="mailto:info@mufasa.com"
              className="flex items-center gap-2 hover:text-[#F46F25] transition-colors duration-200"
            >
              <Mail size={16} /> info@mufasa.com
            </a>

            <a
              href="tel:+923001234567"
              className="flex items-center gap-2 hover:text-[#F46F25] transition-colors duration-200"
            >
              <Phone size={16} /> +92 300 1234567
            </a>

            <p>Pakistan</p>

          </div>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10 py-4 text-center text-[#777] text-sm">
        © {new Date().getFullYear()} Mufasa Developers. All rights reserved.
      </div>

    </footer>
  );
}