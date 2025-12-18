import React from "react";
import Homepage from "./pages/Hero";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Footer from "./components/Footer";
import ContactForm from "./pages/ContactForm";
import Portfolio from "./pages/Portfolio";
import VintageGallery from "./pages/VintageGallery";
import FAQ from "./pages/FAQ";
import AlwaysReady from "./pages/AlwaysReady";
import StatsSection from "./pages/Stats";
import Testimonials from "./pages/Testimonials";

export default function page() {
  return (
    <div className="bg-[#F2F1EA]">
      <Homepage />
      <About />
      <StatsSection/>
      <Portfolio />
      <VintageGallery />
      {/* <AlwaysReady /> */}
      <Testimonials/>
      <FAQ />
    </div>
  );
}
