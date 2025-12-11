"use client"

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const items = [
  {
    id: 1,
    title: "The Tezza Hat",
    img: "/images/hat.jpg",
    price: "₹2,709.16 INR",
  },
  {
    id: 2,
    title: "Create With Pleasure Sweater",
    img: "/images/sweater.jpg",
    price: "₹8,037.19 INR",
  },
  {
    id: 3,
    title: "Create With Pleasure Tote",
    img: "/images/tote.jpg",
    price: "₹3,612.22 INR",
  },
  {
    id: 4,
    title: "Creative Tee",
    img: "/images/tee.jpg",
    price: "₹2,299.99 INR",
  },
   {
    id: 1,
    title: "The Tezza Hat",
    img: "/images/hat.jpg",
    price: "₹2,709.16 INR",
  },
  {
    id: 2,
    title: "Create With Pleasure Sweater",
    img: "/images/sweater.jpg",
    price: "₹8,037.19 INR",
  },
  {
    id: 3,
    title: "Create With Pleasure Tote",
    img: "/images/tote.jpg",
    price: "₹3,612.22 INR",
  },
  {
    id: 4,
    title: "Creative Tee",
    img: "/images/tee.jpg",
    price: "₹2,299.99 INR",
  },
];

export default function Portfolio() {
  const settings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3.2,          // <-- Creates the left-side gap
    slidesToScroll: 1,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1.6,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.05,
        },
      },
    ],
  };

  return (
    <section className="py-14 bg-[#f8f6ef] flex items-center justify-center">
     <div className="w-full max-w-[1200px]">
         <h2 className="text-2xl font-semibold mb-8 px-6">
        Portfolio
      </h2>

      <div className="px-4">
        <Slider {...settings}>
          {items.map((item) => (
            <div key={item.id} className="px-4">
              <div
                className="
                 
                "
              >
                <div className="relative h-[400px] rounded-xl overflow-hidden bg-white">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transition duration-500 hover:scale-105"
                  />

                  {/* Bottom overlay pill */}
                  <button
                    className="
                      absolute bottom-4 left-1/2 -translate-x-1/2
                      bg-white text-gray-800 border border-gray-300
                      px-3 py-2 rounded-full text-sm shadow-sm
                      hover:bg-black hover:text-white transition
                    "
                  >
                    Shop — {item.price}
                  </button>
                </div>

                <p className="text-center mt-4 font-medium mb-4">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
     </div>
    </section>
  );
}
