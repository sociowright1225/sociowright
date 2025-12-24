"use client";

import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react"; // बटन के लिए आइकन
import { Space_Grotesk } from "next/font/google";
import BlurText from "../components/buildKeyframes";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-space-grotesk",
});
const items = [
  {
    id: 1,
    title: "The Socio Wright Hat",
    img: "https://res.cloudinary.com/dwdmczhsn/image/upload/v1765459851/main-sample.png",
    price: "₹2,709.16 INR",
  },
  {
    id: 2,
    title: "Create With Pleasure Sweater",
    img: "https://res.cloudinary.com/dwdmczhsn/image/upload/v1765547385/Screenshot_2025-12-12_190942_lmfgg9.png",
    price: "₹8,037.19 INR",
  },
  {
    id: 3,
    title: "Create With Pleasure Tote",
    img: "https://res.cloudinary.com/dwdmczhsn/image/upload/v1765459851/main-sample.png",
    price: "₹3,612.22 INR",
  },
  {
    id: 4,
    title: "The Socio Wright Hat",
    img: "https://res.cloudinary.com/dwdmczhsn/image/upload/v1765459851/main-sample.png",
    price: "₹2,709.16 INR",
  },
  {
    id: 5,
    title: "Create With Pleasure Sweater",
    img: "https://res.cloudinary.com/dwdmczhsn/image/upload/v1765547385/Screenshot_2025-12-12_190942_lmfgg9.png",
    price: "₹8,037.19 INR",
  },
  {
    id: 6,
    title: "Create With Pleasure Tote",
    img: "https://res.cloudinary.com/dwdmczhsn/image/upload/v1765459851/main-sample.png",
    price: "₹3,612.22 INR",
  },
];

export default function Portfolio() {
  // Embla Initialize
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    dragFree: true,
  });

  // Navigation Logic
  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  return (
    <section className="py-14 bg-[#f8f6ef]">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Header Section */}
        <div className="w-full flex py-8 flex-col md:flex-row justify-between items-start gap-4">
          <div className="space-y-2">
            <h2 className="text-4xl font-bold text-[#2d2d2d]">
              {" "}
              <BlurText
                text="BEYOND THE STRATEGY"
                delay={250}
                animateBy="words"
                direction="top"
                className={`text-red-500 uppercase ${spaceGrotesk.className}`}
              />
            </h2>
            <p className="text-gray-600 xl:w-3xl">
              We wear two hats. Alongside digital marketing, we offer
              professional interior photography—documenting spaces with the same
              precision we apply to your growth strategy.
            </p>
          </div>

          <a
            href="/projects"
            className=" bottom-20 max-lg:bottom-10 left-20 max-lg:left-10 z-50"
          >
            <button
              className="relative group px-8 py-3 bg-red-500 shadow text-white rounded-full 
           text-sm overflow-hidden transition"
            >
              <span className="relative z-10 uppercase"> portfolio</span>

              <span
                className=" absolute bottom-0 left-1/2 w-0 h-0 rounded-t-3xl bg-black 
            transition-all duration-200 ease-out group-hover:w-full group-hover:h-full -translate-x-1/2"
              ></span>
            </button>
          </a>
        </div>

        {/* Embla Viewport */}
        <div
          className="overflow-hidden cursor-grab active:cursor-grabbing"
          ref={emblaRef}
        >
          <div className="flex gap-6">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex-[0_0_85%] sm:flex-[0_0_45%] lg:flex-[0_0_31%] min-w-0"
              >
                <div className="group relative w-full aspect-[4/5] rounded-xl overflow-hidden bg-white shadow-sm border border-gray-100">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  {/* Overlay */}
                  <div className="absolute hidden inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                    <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#b4cc94] mb-2">
                      {item.price}
                    </p>
                    <h3 className="text-xl font-semibold text-white tracking-tight">
                      {item.title}
                    </h3>
                    <div className="mt-4 w-10 h-[2px] bg-[#5F7D3A] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
