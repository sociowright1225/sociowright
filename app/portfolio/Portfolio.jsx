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
        const res = await fetch("/api/portfolio", {
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
      <p className="pt-40 h-screen text-center text-gray-500">
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
    <section className="flex flex-col  items-center justify-center px-4 sm:px-6 md:px-10 pt-20">
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
              className={`px-4 sm:px-6 py-2 rounded-full border text-base max-lg:text-[10px] transition-all ${
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <Link
              key={project._id}
              href={`/portfolio/${project.slug}`}
              className="rounded-lg overflow-hidden shadow-lg border border-gray-200 bg-white"
            >
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-44 sm:h-56 md:h-64 object-cover"
              />

              <div className="p-3 bg-white border-t border-gray-200">
                <p className="text-base sm:text-lg font-semibold text-gray-800">
                  {project.title}
                </p>
              </div>
            </Link>
          ))}

          {filteredProjects.length === 0 && (
            <p className="col-span-full text-center text-gray-500">
              No projects found in this category
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
