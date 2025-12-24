"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function StickyScrollText({
  text = "",
  mode = "word", // "word" | "letter"
  startTrigger = 0.3, // scroll start (0–1)
  endTrigger = 0.8, // scroll end (0–1)
  inactiveColor = "text-white",
  activeColor = "text-black",
  containerHeight = "200vh",
  stickyTop = "top-24",
  textSize = "text-4xl md:text-5xl",
  textAlign = "text-center",
  fontWeight = "font-semibold",
  maxWidth = "max-w-4xl",
}) {
  const containerRef = useRef(null);
  const [progress, setProgress] = useState(0);

  const items = mode === "letter" ? text.split("") : text.split(" ");

  useEffect(() => {
    const onScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const start = windowHeight * startTrigger;
      const end = windowHeight * endTrigger;

      const value = (start - rect.top) / (end - start);
      const clamped = Math.min(Math.max(value, 0), 1);

      setProgress(clamped);
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, [startTrigger, endTrigger]);

  return (
    <section
      ref={containerRef}
      className="w-full relative"
      style={{ height: containerHeight }}
    >
      <div
        className={`sticky ${stickyTop} h-[80vh] z-10 flex items-center flex-col gap-8 justify-center px-6`}
      >
        <p
          className={`${maxWidth} ${textSize} ${textAlign} ${fontWeight} leading-tight`}
        >
          {items.map((item, i) => {
            const point = (i + 1) / items.length;
            const active = progress >= point;

            return (
              <span
                key={i}
                className={`transition-colors duration-300 ${
                  active ? activeColor : inactiveColor
                }`}
              >
                {item}
                {mode === "word" ? " " : ""}
              </span>
            );
          })}
        </p>
        <div className=" bottom-20 max-lg:bottom-10 left-20 max-lg:left-10 z-50">
          <a
            href="/about"
            className="relative group px-8 py-3 bg-red-500 text-white hover:text-white rounded-xl
             text-sm overflow-hidden transition"
          >
            <span className="relative z-10">Know More</span>

            <span
              className=" absolute bottom-0 left-1/2 w-0 h-0 rounded-xl bg-black 
            transition-all duration-200 ease-out group-hover:w-full group-hover:h-full -translate-x-1/2"
            ></span>
          </a>
        </div>
      </div>
      <div className="w-full flex justify-center items-center">
        <div className="flex h-full items-center w-full max-w-7xl justify-between absolute top-0">
          <div className="">
            <img
              src={"https://picsum.photos/id/287/300/300"}
              alt=""
              className="w-70 h-[30rem] max-lg:w-30 max-lg:h-[15rem] "
            />
            <img
              src={"https://picsum.photos/id/287/300/300"}
              alt=""
              className="w-70 h-[30rem] bottom-30 left-20 max-lg:left-5 max-lg:bottom-30 relative max-lg:w-30 max-lg:h-[15rem] "
            />
          </div>

          <div className="">
            <img
              src={"https://picsum.photos/id/287/300/300"}
              alt=""
              className="w-70 h-[30rem] max-lg:w-30 max-lg:h-[15rem] top-50 max-lg:top-30 relative "
            />{" "}
            <img
              src={"https://picsum.photos/id/287/300/300"}
              alt=""
              className="w-70 h-[30rem] max-lg:w-30 max-lg:right-5 max-lg:top-18 bottom-0 right-20 max-lg:h-[15rem] relative "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
