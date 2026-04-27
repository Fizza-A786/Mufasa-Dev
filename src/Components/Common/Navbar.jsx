import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/services", label: "Services" },
    { path: "/courses", label: "Courses" },
    { path: "/blog", label: "Blog" },
    { path: "/projects", label: "Projects" },
  ];

  const isActive = (path) =>
    path === "/"
      ? location.pathname === "/"
      : location.pathname.startsWith(path);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      const timer = setTimeout(() => {
        setMobileMenuOpen(false);
      }, 0);
      return () => clearTimeout(timer);
    }
  }, [location.pathname, mobileMenuOpen]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0A0A0A]/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">

          {/* LOGO */}
          <Link to="/" className="flex items-center group">
            <div className="relative w-14 h-14">

              {/* DEFAULT LOGO */}
              <img
                src="/logo.png"
                alt="Logo"
                className="absolute inset-0 w-full h-full object-contain transition-all duration-500 ease-in-out opacity-100 group-hover:opacity-0"
              />

              {/* HOVER LOGO */}
              <img
                src="/hoverLogo.png"
                alt="Hover Logo"
                className="absolute inset-0 w-full h-full object-contain transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100"
              />

            </div>
          </Link>

          {/* DESKTOP LINKS */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-semibold uppercase tracking-wide transition ${
                  isActive(link.path)
                    ? "text-[#F46F25]"
                    : "text-white hover:text-[#F46F25]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* DESKTOP BUTTONS */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://www.upwork.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 border border-[#F46F25] text-[#F46F25] rounded-md text-sm font-semibold hover:bg-[#F46F25]/10 transition"
            >
              UpWork
            </a>

            <Link
              to="/contact"
              className="px-5 py-2 bg-[#F46F25] text-white rounded-md text-sm font-semibold hover:bg-[#e05d1a] transition"
            >
              Contact Us
            </Link>
          </div>

          {/* MOBILE BUTTON */}
          <button
            className="lg:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 border-t border-white/10 pt-4 space-y-2">

            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-3 py-2 rounded-md text-sm font-semibold ${
                  isActive(link.path)
                    ? "text-[#F46F25] bg-[#F46F25]/10"
                    : "text-white hover:text-[#F46F25]"
                }`}
              >
                {link.label}
              </Link>
            ))}

            <div className="pt-4 flex flex-col gap-3">
              <a
                href="https://www.upwork.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-center border border-[#F46F25] text-[#F46F25] py-2 rounded-md text-sm font-semibold"
              >
                UpWork
              </a>

              <Link
                to="/contact"
                className="text-center bg-[#F46F25] text-white py-2 rounded-md text-sm font-semibold"
              >
                Contact Us
              </Link>
            </div>

          </div>
        )}
      </div>
    </nav>
  );
}