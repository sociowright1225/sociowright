"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Portfolio() {
  // All IMAGES
  const imageCategories = {
    "Digital Marketing": [
      {
        id: 1,
        title: "DM Image 1",
        url: "https://creative-garage.in/wp-content/uploads/2025/04/RD-SMM.webp",
        slug: "project1",
      },
      {
        id: 2,
        title: "DM Image 2",
        url: "https://creative-garage.in/wp-content/uploads/2025/04/RD-SMM.webp",
        slug: "project2",
      },
      {
        id: 3,
        title: "DM Image 1",
        url: "https://creative-garage.in/wp-content/uploads/2025/04/RD-SMM.webp",
        slug: "project3",
      },
      {
        id: 4,
        title: "DM Image 2",
        url: "https://creative-garage.in/wp-content/uploads/2025/04/RD-SMM.webp",
        slug: "project4",
      },
      {
        id: 5,
        title: "DM Image 1",
        url: "https://creative-garage.in/wp-content/uploads/2025/04/RD-SMM.webp",
        slug: "project5",
      },
      {
        id: 6,
        title: "DM Image 2",
        url: "https://creative-garage.in/wp-content/uploads/2025/04/RD-SMM.webp",
        slug: "project6",
      },
    ],

    "Interior Shoots": [
      {
        id: 1,
        title: "Interior Image 1",
        url: "https://res.cloudinary.com/dwdmczhsn/image/upload/v1765547385/Screenshot_2025-12-12_190942_lmfgg9.png",
        slug: "project11",
      },
      {
        id: 2,
        title: "Interior Image 2",
        url: "https://res.cloudinary.com/dwdmczhsn/image/upload/v1765547385/Screenshot_2025-12-12_190942_lmfgg9.png",
        slug: "project22",
      },
      {
        id: 3,
        title: "Interior Image 1",
        url: "https://res.cloudinary.com/dwdmczhsn/image/upload/v1765547385/Screenshot_2025-12-12_190942_lmfgg9.png",
        slug: "project33",
      },
      {
        id: 4,
        title: "Interior Image 2",
        url: "https://res.cloudinary.com/dwdmczhsn/image/upload/v1765547385/Screenshot_2025-12-12_190942_lmfgg9.png",
        slug: "project44",
      },
      {
        id: 5,
        title: "Interior Image 1",
        url: "https://res.cloudinary.com/dwdmczhsn/image/upload/v1765547385/Screenshot_2025-12-12_190942_lmfgg9.png",
        slug: "project55",
      },
      {
        id: 6,
        title: "Interior Image 2",
        url: "https://res.cloudinary.com/dwdmczhsn/image/upload/v1765547385/Screenshot_2025-12-12_190942_lmfgg9.png",
        slug: "project66",
      },
    ],

    "Ad Films": [
      {
        id: 1,
        title: "Ad Image 1",
        url: "https://res.cloudinary.com/dwdmczhsn/image/upload/v1765459851/main-sample.png",
        slug: "project111",
      },
      {
        id: 2,
        title: "Ad Image 2",
        url: "https://res.cloudinary.com/dwdmczhsn/image/upload/v1765459851/main-sample.png",
        slug: "project222",
      },
      {
        id: 3,
        title: "Ad Image 3",
        url: "https://res.cloudinary.com/dwdmczhsn/image/upload/v1765459851/main-sample.png",
        slug: "project333",
      },
      { 
        id: 4,
        title: "Ad Image 2",
        url: "https://res.cloudinary.com/dwdmczhsn/image/upload/v1765459851/main-sample.png",
        slug: "project444",
      },
      {
        id: 5,
        title: "Ad Image 3",
        url: "https://res.cloudinary.com/dwdmczhsn/image/upload/v1765459851/main-sample.png",
        slug: "project555",
      },
    ],
  };

  const categories = Object.keys(imageCategories);
  const [activeCategory, setActiveCategory] = useState("Digital Marketing");

  return (
    <section className="flex flex-col items-center justify-center px-4 sm:px-6 md:px-10 pt-20">
      <div className="w-full max-w-[1200px] text-black pt-10 pb-16">
        {/* Dynamic Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-center mb-10 text-gray-800">
          {activeCategory.toUpperCase()}
        </h1>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 sm:px-6 py-2 rounded-full border text-sm sm:text-base transition-all ${
                activeCategory === category
                  ? "bg-black text-white border-black font-bold shadow-md"
                  : "border-gray-300 text-gray-700 hover:border-black hover:text-black"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Responsive Grid */}
        <div
          className="
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          lg:grid-cols-3 
          gap-6 sm:gap-8
        "
        >
          {imageCategories[activeCategory].map((image) => (
            <Link
              key={image.id}
              href={`/portfolio/${image.slug}`}
              className="rounded-lg overflow-hidden shadow-lg border border-gray-200 bg-white"
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-44 sm:h-56 md:h-64 object-cover"
              />

              <div className="p-3 bg-gray-50 border-t border-gray-200">
                <p className="text-base sm:text-lg font-semibold text-gray-800">
                  {image.title}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
