"use client";
import React, { useState } from "react";

const FeaturesSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const features = [
    {
      title: "Smart Solutions",
      description:
        "Intelligent systems that adapt to your needs, powered by cutting-edge technology.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
    },
    {
      title: "Global Reach",
      description:
        "Connect with audiences worldwide through our distributed network infrastructure.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      title: "Future Ready",
      description:
        "Stay ahead with forward-thinking solutions designed for tomorrow's challenges.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M8 13v-1m4 1v-3m4 3V8M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Animated background lines */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute h-px bg-white/10"
            style={{
              left: "0",
              right: "0",
              top: `${i * 10}%`,
              transform: "translateX(-100%)",
              animation: `slideRight 8s ${i * 0.5}s infinite linear`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-20 relative">
          <h2 className="text-5xl font-bold text-center animate-fade-in-down hover:scale-105 transition-all duration-500 bg-gradient-to-r from-white via-neutral-200 to-white bg-clip-text text-transparent gradient-text">
            Innovative Features
            <div className=" mt-4 w-24 h-1 bg-white/20 mx-auto" />
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Experience the next generation of digital solutions
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative bg-white/5 rounded-2xl overflow-hidden min-h-full">
                {/* Animated border */}
                <div
                  className="absolute inset-0 border-2 border-white/20"
                  style={{
                    clipPath:
                      hoveredIndex === index ? "inset(0)" : "inset(100% 0 0 0)",
                    transition: "clip-path 0.5s ease",
                  }}
                />

                {/* Content container */}
                <div className="p-8 relative z-10">
                  {/* Icon with orbital animation */}
                  <div className="relative w-16 h-16 mb-6">
                    <div className="absolute inset-0 flex items-center justify-center text-white/60">
                      {feature.icon}
                    </div>

                    <div
                      className="absolute inset-0 border border-white/20 rounded-full"
                      style={{
                        animation:
                          hoveredIndex === index
                            ? "orbit 4s linear infinite"
                            : "none",
                      }}
                    />
                  </div>
                  {hoveredIndex !== index && (
                    <h3 className="relative text-xl font-semibold text-white">
                      {feature.title}
                    </h3>
                  )}

                  {/* Text content with slide-up animation */}
                  <div className="relative overflow-hidden">
                    <h3
                      className="text-xl font-semibold text-white mb-4"
                      style={{
                        transform:
                          hoveredIndex === index
                            ? "translateY(0)"
                            : "translateY(20px)",
                        opacity: hoveredIndex === index ? 1 : 0,
                        transition: "transform 0.5s ease, opacity 0.5s ease",
                      }}
                    >
                      {feature.title}
                    </h3>
                    <p
                      className="text-white/60"
                      style={{
                        transform:
                          hoveredIndex === index
                            ? "translateY(0)"
                            : "translateY(20px)",
                        opacity: hoveredIndex === index ? 1 : 0,
                        transition:
                          "transform 0.5s ease 0.1s, opacity 0.5s ease 0.1s",
                      }}
                    >
                      {feature.description}
                    </p>
                  </div>
                </div>

                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes slideRight {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        @keyframes orbit {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </section>
  );
};

export default FeaturesSection;
