"use client";

import { useEffect, useState, useRef } from "react";

import BlurText from "../components/buildKeyframes";

import { Space_Grotesk } from "next/font/google";

import { ChevronLeft, ChevronRight } from "lucide-react";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],

  weight: ["700"],

  variable: "--font-space-grotesk",
});

export default function VintageGallery() {
  const [reelLinks, setReelLinks] = useState([]);

  const scrollRef = useRef(null);

  // Fetching Links from DB

  useEffect(() => {
    const fetchLinks = async () => {
      try {
        const res = await fetch("/api/links");

        const data = await res.json();

        setReelLinks(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Failed to fetch reel links:", error);
      }
    };

    fetchLinks();
  }, []);

  // Instagram Embed script ko process karne ke liye

  useEffect(() => {
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    }
  }, [reelLinks]);

  // Slider Navigation Logic

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;

      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;

      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <div className="flex justify-center items-center bg-[#fdfbf7]">
      <section className="w-full max-w-[1400px] py-12 md:py-20 relative px-4">
        {/* Heading remains same */}

        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#2d2d2d]">
            <BlurText
              text=" OUR MOST VIEWED ON INSTAGRAM "
              delay={250}
              animateBy="words"
              direction="top"
              className={`text-red-500 uppercase ${spaceGrotesk.className}`}
            />
          </h2>
        </div>

        {/* Navigation Buttons remain same */}

        {/* Slider Container */}

        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-4 md:gap-8 snap-x snap-mandatory scrollbar-hide pb-10"
          style={{ scrollBehavior: "smooth" }}
        >
          {reelLinks.length > 0
            ? reelLinks.map((reel, i) => {
                // URL se extra parameters hatana

                const cleanUrl = reel.url.split("?")[0];

                return (
                  <div
                    key={reel._id || i}
                    className="w-[280px] sm:w-[320px] md:w-[380px] shrink-0 snap-center bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden"
                  >
                    {/* Container with overflow hidden and negative margin to hide extra details */}

                    <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
                      <blockquote
                        className="instagram-media"
                        data-instgrm-permalink={`${cleanUrl}?utm_source=ig_embed&amp;utm_campaign=loading`}
                        data-instgrm-version="14"
                        style={{
                          width: "100%",

                          margin: "0",

                          padding: "0",

                          border: "none",

                          // Isse extra padding aur details niche dab jayengi

                          transform: "translateY(-10px)",
                        }}
                      ></blockquote>
                    </div>
                  </div>
                );
              })
            : [1, 2, 3].map((n) => (
                <div
                  key={n}
                  className="w-[300px] h-[500px] bg-gray-100 animate-pulse rounded-2xl shrink-0"
                />
              ))}
        </div>

        <script async src="https://www.instagram.com/embed.js"></script>

        <style jsx global>{`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }

          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }

          /* Instagram ke footer aur details ko hide karne ke liye CSS injection */

          .instagram-media iframe {
            border-radius: 12px !important;

            /* Footer hide karne ki koshish */
          }
        `}</style>
      </section>
    </div>
  );
}
