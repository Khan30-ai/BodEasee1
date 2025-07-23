import React, { useState, useEffect } from "react";
import { Link, Route } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); //apply navbar bg on scroll
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); //user scrolled
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { id: "home", label: "Home", Route: "/" },
    { id: "about", label: "About Us" },
    { id: "contact", label: "Contact Us" },
  ];
  const location = useLocation(); //routing ke liye
  const navigate = useNavigate();

  const handleNavClick = (sectionId) => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: sectionId } });
    } else {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#faf1ea]/90 backdrop-blur-md shadow-lg border-b border-[#f3d8c5]/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo and brand name */}

          <div className="flex items-center ">
            <div
              onClick={() => {
                navigate("/", { state: { scrollTo: "top" } });
                setTimeout(() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }, 400); // slight delay for smoother transition
              }}
              className="flex items-center space-x-3 cursor-pointer"
              style={{ pointerEvents: "auto", cursor: "pointer" }}
            >
              <div className="w-12 h-12  bg-[#87532e] rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300">
                <span className="text-white font-bold text-xl font-serif">
                  B
                </span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-amber-800 font-serif">
                  BodEase
                </h1>
                <p className="text-xs text-amber-600 font-medium">
                  Diet Consultancy
                </p>
              </div>
            </div>
          </div>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className=" relative cursor-pointer text-amber-800 hover:text-amber-600 transition-colors duration-300 font-medium group py-2"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-600 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}

            {/* Dropdown menu for Programs (visible on hover in desktopn view) */}

            <div className="relative group">
              <button
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
                className="relative text-amber-800 hover:text-amber-600 font-medium transition-colors duration-300 flex items-center space-x-1 py-2"
              >
                <span>Programs</span>
                <svg
                  className="w-4 h-4 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.08 1.04l-4.25 4.25a.75.75 0 01-1.06 0L5.21 8.27a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {isDropdownOpen && (
                <div
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                  className="absolute top-full left-0 mt-0.25 w-48 bg-white shadow-md rounded-md border border-amber-200 z-50"
                >
                  <Link
                    to="/programs/weight-loss"
                    className="block px-4 py-2 text-sm text-amber-800 hover:bg-[#faf1ea]"
                  >
                    Weight Loss
                  </Link>
                  <Link
                    to="/programs/weight-gain"
                    className="block px-4 py-2 text-sm text-amber-800 hover:bg-[#faf1ea]"
                  >
                    Weight Gain
                  </Link>
                  <Link
                    to="/programs/skin-hair"
                    className="block px-4 py-2 text-sm text-amber-800 hover:bg-[#faf1ea]"
                  >
                    Skin & Hair
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button 
          Toggle button to show/hide mobile navigation*/}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg text-amber-800 hover:bg-amber-100 transition-colors duration-300"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden bg-amber-50/95 backdrop-blur-md border-t border-amber-200/50`}
      >
        <div className="px-4 py-6 space-y-4">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => {
                handleNavClick(link.id);
                setIsMenuOpen(false);
              }}
              className="block py-2 text-amber-800 hover:text-amber-600 transition-colors duration-300 font-medium"
            >
              {link.label}
            </button>
          ))}

          {/* Dropdown for Programs */}
          <div className="pt-2">
            <p className="text-amber-800 font-medium">Programs</p>
            <div className="ml-4 mt-2 space-y-2">
              <Link
                to="/programs/weight-loss"
                onClick={() => setIsMenuOpen(false)}
                className="block text-sm text-amber-700 hover:text-amber-600"
              >
                Weight Loss
              </Link>
              <Link
                to="/programs/weight-gain"
                onClick={() => setIsMenuOpen(false)}
                className="block text-sm text-amber-700 hover:text-amber-600"
              >
                Weight Gain
              </Link>
              <Link
                to="/programs/skin-hair"
                onClick={() => setIsMenuOpen(false)}
                className="block text-sm text-amber-700 hover:text-amber-600"
              >
                Skin & Hair
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
