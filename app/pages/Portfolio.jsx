'use client';

import React, { useState, useEffect } from "react"; // Added hooks
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const items = [
  { id: 1, title: "The Socio Wright Hat", img: "https://res.cloudinary.com/dwdmczhsn/image/upload/v1765459851/main-sample.png", price: "₹2,709.16 INR" },
  { id: 2, title: "Create With Pleasure Sweater", img: "https://res.cloudinary.com/dwdmczhsn/image/upload/v1765547385/Screenshot_2025-12-12_190942_lmfgg9.png", price: "₹8,037.19 INR" },
  { id: 3, title: "Create With Pleasure Tote", img: "https://res.cloudinary.com/dwdmczhsn/image/upload/v1765459851/main-sample.png", price: "₹3,612.22 INR" },
  { id: 4, title: "The Socio Wright Hat", img: "https://res.cloudinary.com/dwdmczhsn/image/upload/v1765459851/main-sample.png", price: "₹2,709.16 INR" },
  { id: 5, title: "Create With Pleasure Sweater", img: "https://res.cloudinary.com/dwdmczhsn/image/upload/v1765547385/Screenshot_2025-12-12_190942_lmfgg9.png", price: "₹8,037.19 INR" },
  { id: 6, title: "Create With Pleasure Tote", img: "https://res.cloudinary.com/dwdmczhsn/image/upload/v1765459851/main-sample.png", price: "₹3,612.22 INR" },
];

export default function Portfolio() {
  // 1. Logic to prevent SSR mismatch
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const settings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3.2, 
    slidesToScroll: 1,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2.2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1.5 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1.2 },
      },
    ],
  };

  // 2. Return null or a skeleton until client-side is ready
  if (!hasMounted) return null;

  return (
    <section className="py-14 bg-[#f8f6ef] overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="w-full flex py-8 flex-col md:flex-row justify-between items-start md:items-center gap-4 px-6">
          <h2 className="text-3xl font-bold text-[#2d2d2d]">Our Featured Projects</h2>
          <a href="/portfolio" className="w-max uppercase px-8 py-3 bg-[#5F7D3A] text-white text-sm font-medium rounded-full hover:bg-[#4e682f] transition-all">
            View Portfolio
          </a>
        </div>

        <div className="px-4">
          <Slider {...settings} className="portfolio-slider">
            {items.map((item) => (
              <div key={item.id} className="px-2">
                <div className="group relative w-full aspect-square md:h-[450px] rounded-2xl overflow-hidden bg-white shadow-sm">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-sm font-light uppercase tracking-widest">{item.price}</p>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <style jsx global>{`
        /* Crucial fix for Slick in Next.js/Tailwind */
        .portfolio-slider .slick-track {
           display: flex !important;
        }
        .portfolio-slider .slick-slide {
           height: inherit !important;
        }
        .portfolio-slider .slick-list {
          overflow: visible;
        }
      `}</style>
    </section>
  );
}