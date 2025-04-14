const Footer = () => {
  return (
    <footer className="relative bg-black/40 text-white py-16 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bottom-0 -left-48 bg-white/5 rounded-full mix-blend-overlay filter blur-3xl opacity-30 animate-pulse-slow"></div>
        <div
          className="absolute w-96 h-96 -top-48 -right-48 bg-white/5 rounded-full mix-blend-overlay filter blur-3xl opacity-30 animate-pulse-slow"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 md:gap-8">
          {/* Column 1 - Company Info */}
          <div className="transform hover:translate-y-[-2px] transition-transform duration-300">
            <h3 className="text-2xl font-bold gradient-text">Cloudivox</h3>
            <p className="mt-4 text-gray-400 leading-relaxed">
              Providing top-notch web, mobile, SEO, and UI/UX solutions.
            </p>
          </div>

          {/* Column 2 - Quick Links */}
          <div className="transform hover:translate-y-[-2px] transition-transform duration-300">
            <h3 className="text-lg font-semibold text-white/90">Quick Links</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="/"
                  className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                >
                  <span className="w-0 group-hover:w-2 h-[2px] bg-white mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                >
                  <span className="w-0 group-hover:w-2 h-[2px] bg-white mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  About
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                >
                  <span className="w-0 group-hover:w-2 h-[2px] bg-white mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  Our Services
                </a>
              </li>
              <li>
                <a
                  href="/blog"
                  className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                >
                  <span className="w-0 group-hover:w-2 h-[2px] bg-white mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                >
                  <span className="w-0 group-hover:w-2 h-[2px] bg-white mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 - Legal */}
          <div className="transform hover:translate-y-[-2px] transition-transform duration-300">
            <h3 className="text-lg font-semibold text-white/90">Legal</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="/terms"
                  className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                >
                  <span className="w-0 group-hover:w-2 h-[2px] bg-white mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  href="/privacy"
                  className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                >
                  <span className="w-0 group-hover:w-2 h-[2px] bg-white mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/faqs"
                  className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                >
                  <span className="w-0 group-hover:w-2 h-[2px] bg-white mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  FAQs
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="text-center">
            <p className="text-gray-400">
              © {new Date().getFullYear()}{" "}
              <span className="gradient-text font-semibold">Cloudivox</span>. All
              rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
