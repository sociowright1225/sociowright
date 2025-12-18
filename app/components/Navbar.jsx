"use client";
import { useState } from "react";
import { Bebas_Neue } from "next/font/google";

const bebas = Bebas_Neue({
  weight: "400", // Bebas Neue Bold alag weight me nahi aata, sab 400 hi hota
  subsets: ["latin"],
});

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full py-6 fixed z-[999] bg-transparent">
      <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between max-lg:justify-center">
        {/* Desktop Left */}
        <div className="hidden md:flex items-center gap-10 text-xs tracking-widest">
          <a href="/" className="hover:opacity-60">
            HOME
          </a>
          <a href="/about" className="hover:opacity-60">
            ABOUT US
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden max-lg:right-4 max-lg:absolute  text-sm tracking-widest"
          onClick={() => setOpen(true)}
        >
          MENU
        </button>

        {/* Center Logo */}
        <a href="/" className="">
          <div
            className={`text-center items-end gap-20 justify-end leading-0 tracking-widest`}
          >
            {" "}
            <h1 className={`text-6xl font-bold max-lg:text-4xl ${bebas.className} tracking-tight`}>Socio Wright</h1>
            <small>Do it the Wright way!</small>
          </div>
          
        </a>

        {/* Desktop Right */}
        <div className="hidden md:flex items-center gap-10 text-xs tracking-widest">
          <a href="/portfolio" className="hover:opacity-60">
            PORTFOLIO
          </a>
          <a href="/contact" className="hover:opacity-60">
            CONTACT US
          </a>
        </div>
      </nav>

      {/* ========== MOBILE FULL-SCREEN MENU ========== */}
      {open && (
        <div className="fixed inset-0 bg-[#CBB892] z-50 px-6 py-6 flex flex-col">
          {/* Top Row: CLOSE + LOGO */}
          <div className="flex items-center justify-between mb-10">
            <button
              className="text-xs tracking-widest"
              onClick={() => setOpen(false)}
            >
              CLOSE
            </button>

            <h1
              className={`text-6xl font-bold max-lg:text-4xl ${bebas.className} tracking-tight`}
            >
              {" "}
              Socio Wright
            </h1>
          </div>

          {/* Main Menu Links */}
          <div className="flex flex-col gap-4 text-3xl font-serif mb-16">
            <a href="/" onClick={() => setOpen(false)}>
              Home
            </a>

            <a href="/about" onClick={() => setOpen(false)}>
              About Us
            </a>
            <a href="/portfolio" onClick={() => setOpen(false)}>
              Portfolio
            </a>
            <a href="/contact" onClick={() => setOpen(false)}>
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
