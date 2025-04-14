"use client";

import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "Working with this team was a game-changer for our business. They delivered a stunning website that perfectly captures our brand.",
      author: "Jane Doe",
      company: "Tech Innovators Inc.",
    },
    {
      quote:
        "The mobile app they developed for us has received rave reviews from our users. Highly recommended!",
      author: "John Smith",
      company: "MobileFirst Solutions",
    },
    {
      quote:
        "Their SEO services have significantly improved our online visibility. We've seen a notable increase in organic traffic.",
      author: "Emily Johnson",
      company: "E-commerce Experts",
    },
  ];

  return (
    <section className="bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-white/10 to-transparent" />
          <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-white/10 to-transparent" />
        </div>

        {/* Section Header */}
        <div className="relative mb-16 text-center">
          <h2 className="text-5xl font-bold text-center animate-fade-in-down hover:scale-105 transition-all duration-500 bg-gradient-to-r from-white via-neutral-200 to-white bg-clip-text text-transparent gradient-text">
            What Our Clients Say
          </h2>
          <div className="mt-4 w-24 h-1 bg-white/20 mx-auto" />
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-full">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="group relative overflow-hidden">
              {/* Card Background with Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

              {/* Card Content */}
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 transition-all duration-500 group-hover:transform group-hover:scale-[1.02] group-hover:shadow-2xl min-h-full">
                {/* Quote Icon */}
                <div className="mb-6">
                  <svg
                    className="w-8 h-8 text-white/20 group-hover:text-white/40 transition-colors duration-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                {/* Quote Text */}
                <p className="text-white/70 text-lg mb-6 leading-relaxed group-hover:text-white/90 transition-colors duration-500">
                  {testimonial.quote}
                </p>

                {/* Author Info */}
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mr-4">
                    <span className="text-white/60 text-xl font-bold">
                      {testimonial.author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-white group-hover:text-white transition-colors duration-500">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-white/50 group-hover:text-white/70 transition-colors duration-500">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
