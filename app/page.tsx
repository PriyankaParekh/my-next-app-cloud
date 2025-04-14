import Navbar from "./components/navbar/page";
import HeroBanner from "./components/hero-banner/page";
import Footer from "./components/footer/page";
import Testimonials from "./components/testimonial/page";
// import Features from "./components/feature-service/page";
import FeaturesSection from "./components/feature-service/page";
import OurProcess from "./components/stats-section/page";
// import LoginPage from "./components/login/page";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="relative">
        {/* <LoginPage/> */}
        <Navbar />
        <HeroBanner />
      </div>
      {/* <div className="max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center gradient-text">
          Welcome to the Next Generation
        </h1>
        <p className="mt-4 text-center text-gray-400 max-w-2xl mx-auto">
          Experience the perfect blend of innovation and design with our
          cutting-edge solutions.
        </p>
      </div> */}
      <Testimonials />
      <FeaturesSection />
      <OurProcess />
      <Footer />
    </main>
  );
}
