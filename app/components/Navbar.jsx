"use client";
import { useState } from "react";
import { Bebas_Neue } from "next/font/google";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full py-6 fixed top-0 z-[999] bg-transparent">
      <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between max-lg:justify-center">
        {/* Desktop Left */}
        <div className="hidden md:flex items-center gap-10 text-xs tracking-widest">
          <a href="/" className="hover:opacity-60">HOME</a>
          <a href="/about" className="hover:opacity-60">ABOUT US</a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden absolute right-6 text-sm tracking-widest z-[1000]"
          onClick={() => setOpen(true)}
        >
          MENU
        </button>

        {/* Center Logo */}
        <a href="/" className="block">
          <div className="text-center flex flex-col items-center tracking-widest">
            <h1 className={`text-6xl font-bold max-lg:text-4xl ${bebas.className} tracking-tight`}>
              Socio Wright
            </h1>
            <small className="text-[10px] uppercase">Do it the Wright way!</small>
          </div>
        </a>

        {/* Desktop Right */}
        <div className="hidden md:flex items-center gap-10 text-xs tracking-widest">
          <a href="/portfolio" className="hover:opacity-60">PORTFOLIO</a>
          <a href="/contact" className="hover:opacity-60">CONTACT US</a>
        </div>
      </nav>

      {/* ========== SLIDING MOBILE MENU ========== */}
      {/* Overlay: Dims the background when menu is open */}
      <div 
        className={`fixed inset-0 bg-black/20 backdrop-blur-sm transition-opacity duration-300 md:hidden ${open ? "opacity-100 visible" : "opacity-0 invisible"}`}
        onClick={() => setOpen(false)}
      />

      {/* Menu Panel */}
      <div 
        className={`fixed top-0 right-0 h-full w-[80%] max-w-sm bg-white z-[1001] p-8 transition-transform duration-500 ease-in-out md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end mb-12">
          <button
            className="text-xs tracking-widest border  border-black/20 px-3 py-1 rounded-full"
            onClick={() => setOpen(false)}
          >
            CLOSE
          </button>
        </div>

        <div className="flex flex-col gap-8">
          <a href="/" className="text-4xl font-serif border-b text-red-500 border-black/10 pb-2" onClick={() => setOpen(false)}>Home</a>
          <a href="/about" className="text-4xl font-serif border-b text-red-500 border-black/10 pb-2" onClick={() => setOpen(false)}>About Us</a>
          <a href="/portfolio" className="text-4xl font-serif border-b text-red-500 border-black/10 pb-2" onClick={() => setOpen(false)}>Portfolio</a>
          <a href="/contact" className="text-4xl font-serif border-b text-red-500 border-black/10 pb-2" onClick={() => setOpen(false)}>Contact</a>
        </div>

        {/* <div className="mt-auto pt-10">
           <h1 className={`${bebas.className} text-2xl`}>Socio Wright</h1>
           <p className="text-[10px] tracking-widest">EST. 2024</p>
        </div> */}
      </div>
    </header>
  );
}