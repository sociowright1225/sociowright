import React from "react";
import BlurText from "../components/buildKeyframes";
import ImageTrail from "../components/ImageTrail";
import { Space_Grotesk } from "next/font/google";
const hero1 = "/homepage/hero1.jpg";
const hero2 = "/homepage/hero2.jpg";
const hero3 = "/homepage/hero3.jpg";
const hero4 = "/homepage/hero4.jpg";
const hero5 = "/homepage/hero5.jpg";
const hero6 = "/homepage/hero6.jpg";
const hero7 = "/homepage/hero7.jpg";
const hero8 = "/homepage/hero8.jpg";
const hero9 = "/homepage/hero9.jpg";
const hero10 = "/homepage/hero10.jpg";
const hero11 = "/homepage/hero11.jpg";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-space-grotesk",
});

export default function Hero() {
  return (
    <div className="justify-center bg-white h-screen relative flex items-center flex-col pt-50 max-lg:pt-10">
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
            hero1,
            hero2,
            hero3,
            hero4,
            hero5,
            hero6,
            hero7,
            hero8,
            hero9,
            hero10,
            hero11,
            
          ]}
          variant={1}
        />
      </div>
      <h1 className="flex justify-center items-center">
        <BlurText
          text=" Real Stories. Unfiltered Impact."
          delay={250}
          animateBy="words"
          direction="top"
          className={`space text-7xl max-lg:text-5xl xl:w-7xl uppercase text-red-500 mb-4 text-center ${spaceGrotesk}`}
        />
      </h1>
      <p className="max-w-2xl mb-4 text-center">
        In a world of polished noise, authenticity wins. From bold social
        campaigns to precision-engineered funnels, we craft the digital presence
        your brand deserves—bold, beautiful, and distinctively yours.
      </p>

      <a
        href="/contact"
        className=" bottom-20 max-lg:bottom-10 left-20 max-lg:left-10 z-50"
      >
        <button
          className="relative group px-8 py-3 bg-red-500 text-white rounded-full 
           text-sm overflow-hidden transition"
        >
          <span className="relative z-10"> Let’s Create</span>

          <span
            className=" absolute bottom-0 left-1/2 w-0 h-0 rounded-t-3xl bg-black 
            transition-all duration-200 ease-out group-hover:w-full group-hover:h-full -translate-x-1/2"
          ></span>
        </button>
      </a>
      <div className="w-full flex ">
        <div className="flex flex-col  relative bottom-30 max-lg:bottom-10 justify-center items-center w-full">
          <div className="flex justify-between  items-center max-w-5xl w-full">
            {" "}
            <img
              className="w-30 max-lg:w-20 gif-icon"
              src="https://res.cloudinary.com/dwdmczhsn/image/upload/v1766139186/solo-traveller_yjygyz.gif"
              alt=""
            />
            <img
              className="w-30 max-lg:w-20 gif-icon"
              src="https://res.cloudinary.com/dwdmczhsn/image/upload/v1766135526/cute-camera_kwemnf.gif"
              alt=""
            />
          </div>
          <div className="flex justify-between max-lg:justify-evenly items-center max-w-2xl w-full">
            {" "}
            <img
              className="w-30 max-lg:w-20 gif-icon"
              src="https://res.cloudinary.com/dwdmczhsn/image/upload/v1766139150/photo-camera_w6d9ry.gif"
              alt=""
            />
            <img
              className="w-30 max-lg:w-20 gif-icon"
              src="https://res.cloudinary.com/dwdmczhsn/image/upload/v1766135492/photo-gallery_ulaiyv.gif"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
