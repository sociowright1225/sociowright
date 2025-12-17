"use client";

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

  const items =
    mode === "letter" ? text.split("") : text.split(" ");

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
      className="w-full"
      style={{ height: containerHeight }}
    >
      <div
        className={`sticky ${stickyTop} h-[60vh] flex items-center justify-center px-6`}
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
      </div>
    </section>
  );
}
