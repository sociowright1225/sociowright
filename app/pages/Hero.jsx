import React from "react";
import BlurText from "../components/buildKeyframes";
import { Space_Grotesk } from "next/font/google";
import ImageTrail from "../components/ImageTrail";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-space-grotesk",
});

export default function Hero() {
  return (
    <div className="justify-center h-screen relative flex items-center flex-col max-lg:pt-14">
      <div
        style={{
          height: "100%",
          width: "100%",
          position: "absolute",
          overflow: "hidden",
        }}
      >
        <ImageTrail
          items={[
            "https://picsum.photos/id/287/300/300",
            "https://picsum.photos/id/1001/300/300",
            "https://picsum.photos/id/1025/300/300",
            "https://picsum.photos/id/1026/300/300",
            "https://picsum.photos/id/1027/300/300",
            "https://picsum.photos/id/1028/300/300",
            "https://picsum.photos/id/1029/300/300",
            "https://picsum.photos/id/1030/300/300",
            "https://picsum.photos/id/1026/300/300",
            "https://picsum.photos/id/1027/300/300",
            "https://picsum.photos/id/1028/300/300",

            // ...
          ]}
          variant={1}
        />
      </div>
      <h1 className="flex justify-center items-center">
        <BlurText
          text="RAW REAL UNFILTERED"
          delay={250}
          animateBy="words"
          direction="top"
          className={`space text-8xl max-lg:text-5xl uppercase text-red-500 mb-4 text-center ${spaceGrotesk}`}
        />
      </h1>
      <p className="max-w-2xl mb-4 text-center">
        Our digital strategies are crafted to elevate your brand with clarity,
        creativity, and precision. From social campaigns to high-converting
        funnels, we bring together data-driven insight and modern design to help
        your brand stand out—boldly, beautifully, and impactfully.
      </p>

      <div className=" bottom-20 max-lg:bottom-10 left-20 max-lg:left-10 z-50">
        <button
          className="relative group px-8 py-3 bg-[#F2F1EA] text-black hover:text-white rounded-xl border
         border-black text-sm font-serif overflow-hidden transition"
        >
          <span className="relative z-10">Contact Us Now</span>

          <span
            className=" absolute bottom-0 left-1/2 w-0 h-0 rounded-t-xl bg-black 
            transition-all duration-200 ease-out group-hover:w-full group-hover:h-full -translate-x-1/2"
          ></span>
        </button>
      </div>
    </div>
  );
}
