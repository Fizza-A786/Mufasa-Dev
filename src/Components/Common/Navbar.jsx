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
    { path: "/projects", label: "Projects" },
    { path: "/blog", label: "Blog" },
  ];

  const isActive = (path) =>
    path === "/"
      ? location.pathname === "/"
      : location.pathname.startsWith(path);

  // scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // close menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // lock body scroll when menu open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 
      bg-[#0A0A0A] lg:bg-transparent
      ${scrolled ? "lg:bg-[#0A0A0A]/95 backdrop-blur-md shadow-lg" : ""}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-11 py-4">
        <div className="flex items-center justify-between">

          {/* LOGO */}
          <div className="relative w-auto flex-shrink-0 group overflow-hidden min-h-[56px]">

            {/* Hover LOGO */}
            <div
              className="absolute inset-0 flex items-center justify-center 
              w-0 opacity-0 
              group-hover:w-full group-hover:opacity-100 
              transition-all duration-500 ease-in-out z-10"
            >
              <Link to="/" className="flex items-center gap-2">
                <img
                  src="/logo.png"
                  alt="Logo"
                  className="h-15 object-contain"
                />
              </Link>
            </div>

            {/* Default LOGO */}
            <div
              className="flex items-center justify-center 
              transition-all duration-500 ease-in-out 
              group-hover:-translate-x-full group-hover:opacity-0"
            >
              <Link to="/">
                <img
                  src="/hoverLogo.png"
                  alt="Hover Logo"
                  className="h-13 object-contain"
                />
              </Link>
            </div>
          </div>

          {/* DESKTOP LINKS */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative text-sm font-semibold uppercase tracking-wide transition ${
                  isActive(link.path)
                    ? "text-[#F46F25]"
                    : "text-white hover:text-[#F46F25]"
                }`}
              >
                {link.label}

                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-[#F46F25] transition-all duration-300 ${
                    isActive(link.path) ? "w-full" : "w-0"
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* DESKTOP BUTTONS */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://www.upwork.com/freelancers/~0187b7cb16b8a2b93f"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 border border-[#F46F25] text-[#F46F25] rounded-md text-sm font-semibold hover:bg-[#F46F25]/10 transition"
            >
              UpWork
            </a>

            <Link
              to="/contactus"
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
                href="https://www.upwork.com/freelancers/~0187b7cb16b8a2b93f"
                target="_blank"
                rel="noopener noreferrer"
                className="text-center border border-[#F46F25] text-[#F46F25] py-2 rounded-md text-sm font-semibold"
              >
                UpWork
              </a>

              <Link
                to="/contactus"
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