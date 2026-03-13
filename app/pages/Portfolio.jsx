"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Space_Grotesk } from "next/font/google";
import BlurText from "../components/buildKeyframes";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-space-grotesk",
});

export default function Portfolio() {
 const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch("/api/portfolio");
        const data = await res.json();
        
        if (Array.isArray(data)) {
          const filteredProjects = data
            // 1. Sirf 'Interior Shoots' filter karein
            .filter((item) => item.category === "Interior Shoots")
            // 2. Recent projects pehle dikhane ke liye date ke basis par sort karein
            .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
            // 3. Pehle 6 projects uthayein
            .slice(0, 6);
          
          setProjects(filteredProjects);
        }
      } catch (error) {
        console.error("Failed to fetch projects:", error);
      }
    };
    fetchProjects();
  }, []);

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

          <div className="flex items-center gap-4">
            {/* Custom Navigation Buttons */}
            <div className="flex gap-2 mr-4">
                <button onClick={scrollPrev} className="p-2 rounded-full border border-gray-300 hover:bg-black hover:text-white transition">
                    <ChevronLeft size={20} />
                </button>
                <button onClick={scrollNext} className="p-2 rounded-full border border-gray-300 hover:bg-black hover:text-white transition">
                    <ChevronRight size={20} />
                </button>
            </div>

            <a href="/portfolio">
              <button className="relative group px-8 py-3 bg-red-500 shadow text-white rounded-full text-sm overflow-hidden transition">
                <span className="relative z-10 uppercase font-bold"> portfolio</span>
                <span className="absolute bottom-0 left-1/2 w-0 h-0 rounded-t-3xl bg-black transition-all duration-200 ease-out group-hover:w-full group-hover:h-full -translate-x-1/2"></span>
              </button>
            </a>
          </div>
        </div>

        {/* Embla Viewport */}
        <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
          <div className="flex gap-6">
            {projects.map((item) => (
              <div
                key={item._id}
                className="flex-[0_0_85%] sm:flex-[0_0_45%] lg:flex-[0_0_31%] min-w-0"
              >
                <div className="group relative w-full aspect-[4/5] rounded-xl overflow-hidden bg-white shadow-sm border border-gray-100">
                  <img
                    src={item.thumbnail} // Admin dashboard wala thumbnail field
                    alt={item.title}
                    className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  {/* Overlay (Show on Hover) */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-400 mb-2">
                      {item.category}
                    </p>
                    <h3 className="text-xl font-bold text-white tracking-tight">
                      {item.title}
                    </h3>
                    <div className="mt-4 w-10 h-[2px] bg-red-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  </div>
                </div>
                {/* Title and location below for better visibility on mobile */}
                <div className="mt-4 px-1">
                   <h4 className="font-bold text-gray-800 uppercase text-sm">{item.title}</h4>
                   <p className="text-xs text-gray-500">{item.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}