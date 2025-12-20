"use client"; // This is the crucial line

import React from 'react';
import { Space_Grotesk } from "next/font/google";
import BlurText from '../components/buildKeyframes';

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-space-grotesk",
});
const testimonials = [
  { id: 1, name: "Sarah J.", role: "Director", content: "The responsiveness of the team exceeded our expectations.", avatar: "https://i.pravatar.cc/150?u=1" },
  { id: 2, name: "James C.", role: "Founder", content: "A total game changer for our internal workflow and UI.", avatar: "https://i.pravatar.cc/150?u=2" },
  { id: 3, name: "Elena R.", role: "Designer", content: "The most intuitive component library I have ever used.", avatar: "https://i.pravatar.cc/150?u=3" },
  { id: 4, name: "Mark T.", role: "CEO", content: "Highly recommended for any fast-scaling startup.", avatar: "https://i.pravatar.cc/150?u=4" },
  { id: 5, name: "Linda K.", role: "Manager", content: "Implementation was seamless and the support is 10/10.", avatar: "https://i.pravatar.cc/150?u=5" },
];

export default function TestimonialMarquee() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      {/* CSS-in-JS for Marquee Animation */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-infinite {
          display: flex;
          width: max-content;
          animation: marquee 35s linear infinite;
        }
        .animate-marquee-infinite:hover {
          animation-play-state: paused;
        }
      `}} />

      <div className="max-w-7xl mx-auto px-4 mb-12 text-center">
        <h2 className="text-5xl font-bold text-gray-900 uppercase leading-tight">
            <BlurText
          text="Testimonials"
          delay={250}
          animateBy="words"
          direction="top"
          className={`text-red-500 ${spaceGrotesk}`}
        />
          </h2>
   
      </div>

      <div className="relative">
        {/* Faded Edge Overlays */}
        <div className="absolute inset-y-0 left-0 w-24 sm:w-48 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-24 sm:w-48 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

        <div className="animate-marquee-infinite">
          {/* Loop twice for seamless scrolling */}
          {[...testimonials, ...testimonials].map((item, index) => (
            <div
              key={index}
              className="w-[300px] sm:w-[450px] mx-4 bg-gray-50 border border-gray-100 p-8 rounded-3xl flex flex-col justify-between transition-colors hover:bg-gray-100"
            >
              <div>
                <div className="flex text-yellow-400 mb-4 text-sm tracking-widest">
                  ★★★★★
                </div>
                <p className="text-gray-700 text-lg leading-relaxed mb-8 italic">
                  "{item.content}"
                </p>
              </div>
              
              <div className="flex items-center gap-4">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-12 h-12 rounded-full grayscale-[0.5]"
                />
                <div>
                  <h4 className="font-bold text-gray-900 leading-none">{item.name}</h4>
                  <p className="text-sm text-gray-500 mt-1">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}