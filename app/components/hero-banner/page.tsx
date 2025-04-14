"use client";

import { useState } from "react";

const HeroBanner = () => {
  const [hoverLeft, setHoverLeft] = useState(false);
  const [hoverRight, setHoverRight] = useState(false);
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      icon: (
        <svg
          className="w-8 h-8"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M16 18L22 12L16 6"></path>
          <path d="M8 6L2 12L8 18"></path>
        </svg>
      ),
      title: "Web Development",
      description: "Creating responsive, modern web applications",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
          <path d="M12 18h.01"></path>
        </svg>
      ),
      title: "Mobile Solutions",
      description: "Native and cross-platform mobile apps",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
          <line x1="9" y1="9" x2="9.01" y2="9"></line>
          <line x1="15" y1="9" x2="15.01" y2="9"></line>
        </svg>
      ),
      title: "UI/UX Design",
      description: "Intuitive and beautiful user experiences",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <path d="M21 21l-4.35-4.35"></path>
        </svg>
      ),
      title: "SEO Services",
      description: "Boost your online visibility",
    },
  ];

  return (
    <section className="min-h-screen pt-20 flex flex-col md:flex-row relative bg-black text-white overflow-hidden">
      {/* Left Panel */}
      <div
        className={`flex-1 p-8 md:p-16 flex items-center justify-center relative transition-all duration-700 ease-in-out ${
          hoverLeft ? "md:flex-[0.8]" : "md:flex-[0.6]"
        } ${hoverRight ? "md:flex-[0.6]" : ""}`}
        onMouseEnter={() => setHoverLeft(true)}
        onMouseLeave={() => setHoverLeft(false)}
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 -top-48 -left-48 bg-white/5 rounded-full mix-blend-overlay filter blur-3xl opacity-30 animate-pulse-slow"></div>
        </div>

        <div className="relative z-10 max-w-xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 gradient-text">
            Empowering Businesses with Innovation
          </h1>
          <p className="text-gray-400 text-lg mb-8 leading-relaxed">
            Transform your digital presence with our innovative solutions. We
            create experiences that inspire and engage.
          </p>
          <a
            href="/contact"
            className="group inline-flex items-center px-6 py-3 text-sm font-medium border border-white/20 rounded-full hover:bg-white/10 transition-all duration-300"
          >
            Start Your Journey
            <svg
              className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>

      {/* Right Panel */}
      <div
        className={`flex-1 p-8 md:p-16 flex items-center justify-center relative transition-all duration-700 ease-in-out ${
          hoverRight ? "md:flex-[0.8]" : "md:flex-[0.6]"
        } ${hoverLeft ? "md:flex-[0.6]" : ""}`}
        onMouseEnter={() => setHoverRight(true)}
        onMouseLeave={() => setHoverRight(false)}
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 -bottom-48 -right-48 bg-white/5 rounded-full mix-blend-overlay filter blur-3xl opacity-30 animate-pulse-slow"></div>
        </div>

        {/* Services Grid */}
        <div className="relative z-10 grid grid-cols-2 gap-4 w-full max-w-lg">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-500 cursor-pointer transform hover:-translate-y-1 ${
                activeService === index ? "bg-white/10 border-white/20" : ""
              }`}
              onMouseEnter={() => setActiveService(index)}
            >
              <div className="flex flex-col items-center text-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-white/20 rounded-full blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>
                  <div className="relative z-10 text-white group-hover:scale-110 transition-transform duration-500 mb-3">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-sm font-semibold mb-2 gradient-text">
                  {service.title}
                </h3>
                <p className="text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Center Divider */}
      <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1px] h-[70%] bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
    </section>
  );
};

export default HeroBanner;
