import React from "react";
import Homepage from "./pages/Hero";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Footer from "./components/Footer";
import ContactForm from "./pages/ContactForm";
import Portfolio from "./pages/Portfolio";
import VintageGallery from "./pages/VintageGallery";

export default function page() {
  return (
    <div>
      <Homepage />
      <About />
      <Portfolio />
      <VintageGallery />
      <ContactForm />
    </div>
  );
}
