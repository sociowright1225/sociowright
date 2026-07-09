"use client";

import React, { useEffect, useState, useRef } from 'react';
import { Space_Grotesk } from "next/font/google";
import BlurText from '../components/buildKeyframes';

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-space-grotesk",
});

export default function TestimonialMarquee() {
  const [reviews, setReviews] = useState([]);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await fetch("/api/testimonials");
        const data = await res.json();
        setReviews(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Failed to fetch testimonials:", error);
      }
    };
    fetchReviews();
  }, []);

  // Handler for manual button navigation
  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      // scroll amount matches roughly one card width + margins
      const scrollAmount = direction === 'left' ? -480 : 480; 
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  if (reviews.length === 0) return null;

  return (
    <section className="py-20 bg-white overflow-hidden relative group">
      {/* CSS-in-JS for Marquee Animation */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-infinite {
          display: flex;
          width: max-content;
          animation: marquee 40s linear infinite;
        }
        /* Pauses when user hovers over the cards */
        .animate-marquee-infinite:hover {
          animation-play-state: paused;
        }
      `}} />

      {/* Header and Buttons Container */}
      <div className="max-w-7xl mx-auto px-4 mb-12 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-center sm:text-left">
          <h2 className="text-5xl font-bold text-gray-900 uppercase leading-tight">
            <BlurText
              text="Testimonials"
              delay={250}
              animateBy="words"
              direction="top"
              className={`text-red-500 ${spaceGrotesk.className}`}
            />
          </h2>
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-3 z-20">
          <button 
            onClick={() => scroll('left')}
            className="w-12 h-12 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-700 shadow-sm hover:bg-gray-50 active:scale-95 transition-all"
            aria-label="Scroll left"
          >
            ←
          </button>
          <button 
            onClick={() => scroll('right')}
            className="w-12 h-12 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-700 shadow-sm hover:bg-gray-50 active:scale-95 transition-all"
            aria-label="Scroll right"
          >
            →
          </button>
        </div>
      </div>

      {/* Marquee viewport wrapping parent */}
      <div 
        ref={scrollContainerRef}
        className="relative overflow-x-auto no-scrollbar scroll-smooth"
      >
        {/* Faded Edge Overlays */}
        <div className="absolute inset-y-0 left-0 w-24 sm:w-48 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-24 sm:w-48 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

        <div className="animate-marquee-infinite">
          {/* Duplicate the array for seamless looping */}
          {[...reviews, ...reviews].map((item, index) => (
            <div
              key={index}
              className="w-[300px] sm:w-[450px] mx-4 bg-gray-50 border border-gray-100 p-8 rounded-3xl flex flex-col justify-between transition-colors hover:bg-gray-100"
            >
              <div>
                <div className="flex text-yellow-400 mb-4 text-sm tracking-widest">
                  ★★★★★
                </div>
                <p className="text-gray-700 text-lg leading-relaxed mb-8 italic">
                  "{item.message}"
                </p>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                   {item.avatar ? (
                     <img src={item.avatar} alt={item.name} className="w-full h-full object-cover" />
                   ) : (
                     <span className="font-bold text-gray-400 uppercase">{item.name?.charAt(0)}</span>
                   )}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 leading-none">{item.name}</h4>
                  <p className="text-sm text-gray-500 mt-1 uppercase tracking-tighter font-semibold">Verified Client</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}