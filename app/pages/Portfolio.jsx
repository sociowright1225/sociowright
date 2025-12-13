'use client';

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
  {
    id: 7,
    title: "The Socio Wright Hat",
    img: "https://res.cloudinary.com/dwdmczhsn/image/upload/v1765459851/main-sample.png",
    price: "₹2,709.16 INR",
  },
  {
    id: 8,
    title: "Create With Pleasure Sweater",
    img: "https://res.cloudinary.com/dwdmczhsn/image/upload/v1765547385/Screenshot_2025-12-12_190942_lmfgg9.png",
    price: "₹8,037.19 INR",
  },
  {
    id: 9,
    title: "Create With Pleasure Tote",
    img: "https://res.cloudinary.com/dwdmczhsn/image/upload/v1765459851/main-sample.png",
    price: "₹3,612.22 INR",
  },
];

export default function Portfolio() {
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
        settings: { slidesToShow: 1.6 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1.2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1.2 },
      },
    ],
  };

  return (
    <section className="py-14 bg-[#f8f6ef] flex items-center justify-center">
      <div className="w-full max-w-[1200px]">
        <div className="w-full flex py-8 flex-col md:flex-row justify-between items-start md:items-center gap-4 px-6">
          <h2 className="text-2xl font-semibold">Our Featured Projects</h2>

          <a
            href="/portfolio"
            className="
              w-max uppercase px-6 py-2
              bg-[#5F7D3A] text-white
              text-sm sm:text-base
              rounded-full tracking-wide
              hover:bg-[#4e682f]
              transition
            "
          >
            Portfolio
          </a>
        </div>

        <div className="px-4">
          <Slider {...settings}>
            {items.map((item) => (
              <div key={item.id} className="px-4">
                <div className="relative h-[400px] max-lg:h-[300px] rounded-xl overflow-hidden bg-white">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transition duration-500 hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
