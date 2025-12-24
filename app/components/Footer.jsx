"use client";

import { Bebas_Neue } from "next/font/google";
import { useEffect, useState } from "react";

const bebas = Bebas_Neue({
  weight: "400", // Bebas Neue Bold alag weight me nahi aata, sab 400 hi hota
  subsets: ["latin"],
});

export default function Footer() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrolledToBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 20; // buffer

      setActive(scrolledToBottom);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="h-screen relative">
      <footer
        className={`fixed bottom-0 w-full border-t border-gray-200 px-6 md:px-12 overflow-hidden transition-all duration-300
        ${active ? "z-10" : "-z-10"}`}
      >
        <div className="w-full py-4 space-y-2 max-lg:space-y-8">
          <div className="flex justify-between max-lg:justify-start max-lg:flex-col">
            <h3 className="text-3xl font-semibold uppercase">Contact</h3>
            <p>
  <a
    href="tel:+918905022497"
    className="hover:underline"
  >
    +91-8905022497
  </a>
  {", "}
  <a
    href="mailto:socio.wright@gmail.com"
    className="hover:underline"
  >
    socio.wright@gmail.com
  </a>
</p>

          </div>
          <div className="flex justify-between max-lg:justify-start max-lg:flex-col">
            <h3 className="text-3xl font-semibold uppercase">Social</h3>
            <p>
              <a href="https://www.instagram.com/sociowright.in?igsh=MXhoM3h1d3dmZm54MQ%3D%3D&utm_source=qr">
                Instagram
              </a>
              , <a href="/">Linkedin</a>
            </p>
          </div>

          <div className="flex justify-between max-lg:justify-start max-lg:flex-col">
            <h3 className="text-3xl font-semibold uppercase">Working Hours</h3>
            <p>11AM to 7 PM Sunday closed </p>
          </div>
          <div className="flex justify-between max-lg:justify-start max-lg:flex-col">
            <h3 className="text-3xl font-semibold uppercase">Location</h3>
            <p className="w-md max-lg:pr-30 text-right max-lg:text-left">
              108, New Housing board complex, infront of shankar
              nagar chaupati, shankar nagar, Raipur (C.G){" "}
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200" />

        {/* Huge background name */}
        <div className=" bottom-0 left-0 w-full pointer-events-none select-none">
          <h1
            className={`text-[20vw] ${bebas.className} uppercase text-center leading-none font-bold text-gray-300 opacity-70 whitespace-nowrap`}
          >
            Socio Wright
          </h1>
        </div>

        {/* Bottom bar */}
    <div className="relative pb-2 flex justify-between items-center max-lg:flex-col text-xs text-gray-500">
  <p>© {new Date().getFullYear()} Socio Wright</p>
  <p>
    Designed & Developed by{" "}
    <a
      href="https://zerogravityweb.diginote.in"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-black underline"
    >
      zerogravityweb
    </a>
  </p>
</div>

      </footer>
    </div>
  );
}
