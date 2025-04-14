"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    { name: "Web Solutions", href: "/services/web-development" },
    { name: "Mobile Solutions", href: "/services/mobile-development" },
    { name: "UI/UX Solutions", href: "/services/ui-services" },
    { name: "SEO Services", href: "/services/seo-services" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 nav-blur ${
        scrolled
          ? "py-3 bg-black/80"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link
              href="/"
              className="text-3xl font-bold gradient-text hover:scale-105 transform transition-all duration-300"
            >
              Cloudivox
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-2">
            <Link
              href="/"
              className="px-5 py-2.5 rounded-full text-gray-300 font-medium hover:text-white hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="px-5 py-2.5 rounded-full text-gray-300 font-medium hover:text-white hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              About
            </Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="px-5 py-2.5 rounded-full text-gray-300 font-medium hover:text-white hover:bg-white/10 transition-all duration-300 flex items-center transform hover:-translate-y-0.5"
              >
                Our Services
                <svg
                  className="ml-1.5 h-4 w-4 transition-transform duration-300 group-hover:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <div className="absolute top-full left-1/2 -translate-x-1/2 w-64 pt-3 opacity-0 translate-y-2 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-300">
                <div className="bg-black/90 rounded-2xl shadow-xl border border-white/10 py-2 overflow-hidden backdrop-blur-lg">
                  {services.map((service, index) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className={`block px-6 py-3 text-gray-300 hover:bg-white/10 hover:text-white transition-all duration-300 ${
                        index !== services.length - 1
                          ? "border-b border-white/10"
                          : ""
                      }`}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              href="/blog"
              className="px-5 py-2.5 rounded-full text-gray-300 font-medium hover:text-white hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Blog
            </Link>

            <Link
              href="/contact"
              className="ml-2 px-7 py-2.5 rounded-full bg-white/10 text-white font-medium hover:bg-white/20 transition-all duration-300 backdrop-blur-sm transform hover:-translate-y-0.5 border border-white/20"
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300 focus:outline-none"
            >
              {isOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-[32rem] opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden border-t border-white/10`}
      >
        <div className="px-4 py-6 space-y-4 bg-black/90 backdrop-blur-lg">
          <Link
            href="/"
            className="block px-5 py-3 rounded-xl text-gray-300 font-medium hover:text-white hover:bg-white/10 transition-all duration-300"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="block px-5 py-3 rounded-xl text-gray-300 font-medium hover:text-white hover:bg-white/10 transition-all duration-300"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>

          {/* Mobile Services Dropdown */}
          <div>
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="flex items-center justify-center w-full px-5 py-3 rounded-xl text-gray-300 font-medium hover:text-white hover:bg-white/10 transition-all duration-300"
            >
              Our Services
              <svg
                className={`ml-1.5 h-4 w-4 transition-transform duration-300 ${
                  servicesOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            <div
              className={`transition-all duration-500 ${
                servicesOpen ? "max-h-64 opacity-100 mt-2" : "max-h-0 opacity-0"
              } overflow-hidden`}
            >
              {services.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="block px-8 py-3 text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300"
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </div>

          <Link
            href="/blog"
            className="block px-5 py-3 rounded-xl text-gray-300 font-medium hover:text-white hover:bg-white/10 transition-all duration-300"
            onClick={() => setIsOpen(false)}
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="block px-5 py-3 rounded-xl text-white font-medium bg-white/10 hover:bg-white/20 transition-all duration-300 border border-white/20"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;