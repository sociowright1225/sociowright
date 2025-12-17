"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function Portfolio() {
  const [projects, setProjects] = useState([]);
  const [activeCategory, setActiveCategory] = useState("Digital Marketing");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/portfolio", {
          cache: "no-store",
        });

        if (!res.ok) throw new Error("Fetch failed");

        const data = await res.json();
        setProjects(data);
      } catch (err) {
        console.error(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchPortfolio();
  }, []);

  const categories = [
    "Digital Marketing",
    "Interior Shoots",
    "Ad Films",
  ];

  const filteredProjects = projects.filter(
    (item) => item.category === activeCategory
  );

  if (loading) {
    return (
      <p className="pt-40 text-center text-gray-500">
        Loading portfolio...
      </p>
    );
  }

  if (error) {
    return (
      <p className="pt-40 text-center text-red-500">
        Failed to load portfolio
      </p>
    );
  }

  return (
    <section className="flex justify-center px-4 sm:px-6 md:px-10 pt-20">
      <div className="w-full max-w-[1200px] pb-16">
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-center mb-10 text-gray-800">
          {activeCategory.toUpperCase()}
        </h1>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full border transition-all text-sm sm:text-base ${
                activeCategory === category
                  ? "bg-black text-white border-black font-semibold"
                  : "border-gray-300 text-gray-700 hover:border-black hover:text-black"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((item) => (
            <Link
              key={item._id}
              href={`/portfolio/${item.slug}`}
              className="group rounded-lg overflow-hidden border bg-white shadow-sm hover:shadow-lg transition"
            >
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-full h-48 sm:h-56 object-cover group-hover:scale-105 transition-transform duration-300"
              />

              <div className="p-4 bg-gray-50 border-t">
                <p className="text-lg font-semibold text-gray-800">
                  {item.title}
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  {item.date}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <p className="text-center text-gray-500 mt-16">
            No projects found in this category.
          </p>
        )}
      </div>
    </section>
  );
}
