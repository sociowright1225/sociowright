"use client";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full py-6 fixed z-50 bg-transparent">
      <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between">
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
          className="md:hidden text-sm tracking-widest"
          onClick={() => setOpen(true)}
        >
          MENU
        </button>

        {/* Center Logo */}
        <div className="flex-1 flex justify-center">
          <h1 className="text-4xl font-bold max-lg:text-2xl tracking-tight"> Socio Wright</h1>
        </div>

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

            <h1 className="text-3xl font-extrabold tracking-tight">TEZZA</h1>
          </div>

          {/* Main Menu Links */}
          <div className="flex flex-col gap-4 text-3xl font-serif mb-16">
            <a href="/" onClick={() => setOpen(false)}>
              Home
            </a>
            <a href="/shop" onClick={() => setOpen(false)}>
              Shop
            </a>
            <a href="/about" onClick={() => setOpen(false)}>
              About Us
            </a>
            <a href="/faq" onClick={() => setOpen(false)}>
              FAQ
            </a>
            <a href="/contact" onClick={() => setOpen(false)}>
              Contact
            </a>
          </div>

          {/* Bottom Section */}
          <div className="mt-auto">
            <div className="flex gap-10 text-xs tracking-widest mb-6">
              <a href="#">INSTAGRAM</a>
              <a href="#">TIK TOK</a>
            </div>

            {/* Country Selector */}
            <select className="px-4 py-2 border border-black rounded-lg bg-white text-xs">
              <option>INR</option>
              <option>USD</option>
              <option>EUR</option>
            </select>

            {/* Bottom Legal */}
            <div className="flex gap-10 text-xs tracking-widest mt-6">
              <a href="#">PRIVACY</a>
              <a href="#">TERMS</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
