// src/components/common/Footer.jsx

import { Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const FacebookIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-white/10 mt-20">

      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

        {/* LOGO + ABOUT */}
        <div>
          <h2 className="text-2xl font-bold mb-4">
            <span className="text-[#F46F25]">Mufasa</span> Developers
          </h2>
          <p className="text-[#999] text-sm mb-4 leading-relaxed">
            Learn tech skills, start freelancing, and build your digital career with real-world experience.
          </p>

          <div className="flex gap-3">
            <a href="#" aria-label="Facebook" className="text-[#999] hover:text-[#F46F25] transition-colors duration-200">
              <FacebookIcon />
            </a>
            <a href="#" aria-label="Instagram" className="text-[#999] hover:text-[#F46F25] transition-colors duration-200">
              <InstagramIcon />
            </a>
            <a href="#" aria-label="LinkedIn" className="text-[#999] hover:text-[#F46F25] transition-colors duration-200">
              <LinkedinIcon />
            </a>
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
                  <Link to={path} className="text-[#999] hover:text-[#F46F25] transition-colors duration-200">
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
                <a href="#" className="text-[#999] hover:text-[#F46F25] transition-colors duration-200">
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
            <a href="mailto:info@mufasa.com" className="flex items-center gap-2 hover:text-[#F46F25] transition-colors duration-200">
              <Mail size={16} /> info@mufasa.com
            </a>
            <a href="tel:+923001234567" className="flex items-center gap-2 hover:text-[#F46F25] transition-colors duration-200">
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