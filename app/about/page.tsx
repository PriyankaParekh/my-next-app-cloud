"use client";
import React, { useEffect, useRef } from "react";

const AboutUs = () => {
  const sectionRef = useRef(null);

  // Simple scroll-based animation using Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slide-up");
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-black to-purple-50 flex items-center justify-center py-12">
      <div
        ref={sectionRef}
        className="max-w-4xl mx-auto p-8 bg-black rounded-xl shadow-lg opacity-0 transition-all duration-1000"
      >
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-black text-center mb-6 gradient-text">
          About Us
        </h1>
        <p className="text-lg text-gray-300 text-center mb-10">
          Crafting innovative solutions with passion and precision.
        </p>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Section */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-100">Who We Are</h2>
            <p className="text-gray-300 leading-relaxed">
              We are a dynamic team of creators, developers, and strategists
              dedicated to delivering top-notch solutions in web development,
              mobile apps, SEO, and UI/UX design. Using cutting-edge tools like
              Tailwind CSS and React, we bring your ideas to life with a focus
              on aesthetics and functionality.
            </p>
          </div>

          {/* Right Section */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-100">What We Do</h2>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-white/30 rounded-full"></span>
                <span>Custom Web & Mobile Development</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-white/30 rounded-full"></span>
                <span>SEO Optimization for Maximum Reach</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-white/30 rounded-full"></span>
                <span>Stunning UI/UX Design</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-10 text-center">
          <button className="px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-400 transition-colors duration-300">
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
