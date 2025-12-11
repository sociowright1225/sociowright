"use client";

import React, { useState } from "react";

export default function Portfolio() {
  // All IMAGES stored inside the component
  const imageCategories = {
    "Digital Marketing": [
      { id: 1, title: "DM Image 1", url: "/images/dm1.jpg" },
      { id: 2, title: "DM Image 2", url: "/images/dm2.jpg" },
    ],
    "Interior Shoots": [
      { id: 1, title: "Interior Image 1", url: "/images/interior1.jpg" },
    ],
    "Ad Films": [
      { id: 1, title: "Ad Image 1", url: "/images/ad1.jpg" },
      { id: 2, title: "Ad Image 2", url: "/images/ad2.jpg" },
    ],
  };

  const categories = Object.keys(imageCategories);
  const [activeCategory, setActiveCategory] = useState("Ad Films");

  return (
    <div className="w-full bg-white text-black pt-30 p-8">
      {/* Dynamic Title */}
      <h1 className="text-6xl font-extrabold text-center mb-10 text-gray-800">
        {activeCategory.toUpperCase()}
      </h1>

      {/* Category Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-6 py-2 rounded-full border transition-all ${
              activeCategory === category
                ? "bg-black text-white border-black font-bold shadow-md"
                : "border-gray-300 text-gray-700 hover:border-black hover:text-black"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Images Section */}
      <div className="grid md:grid-cols-2 gap-8">
        {imageCategories[activeCategory].map((image) => (
          <div
            key={image.id}
            className="rounded-lg overflow-hidden shadow-lg border border-gray-200 bg-white"
          >
            <img
              src={image.url}
              alt={image.title}
              className="w-full h-64 object-cover"
            />

            <div className="p-3 bg-gray-50 border-t border-gray-200">
              <p className="text-lg font-semibold text-gray-800">
                {image.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
