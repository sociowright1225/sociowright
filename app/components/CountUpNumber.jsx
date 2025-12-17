"use client"

import { useEffect, useRef, useState } from "react";

export const CountUpNumber = ({ value, suffix = "", duration = 1200 }) => {
  const ref = useRef(null);
  const [current, setCurrent] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;

          const start = performance.now();
          const endValue = parseInt(value, 10);

          const animate = (time) => {
            const progress = Math.min((time - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3); // easeOut
            setCurrent(Math.floor(eased * endValue));

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCurrent(endValue);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [value, duration]);

  return (
    <span ref={ref} className="text-6xl md:text-7xl font-bold tracking-tight">
      {current}
      {suffix}
    </span>
  );
};
