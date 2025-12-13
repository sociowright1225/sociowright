import React from "react";

export default function Hero() {
  return (
    <div className="justify-center relative items-center flex-col pt-30 max-lg:pt-24">
      <h1 className="text-7xl py-4  max-lg:text-4xl font-serif  max-lg:px-3 text-center">
        Do it the Wright way! 
      </h1>
      {/* Background Video */}
      <video
        className="relative top-0 pt-5 left-0 w-full h-full object-cover max-lg:h-screen"
        autoPlay
        muted
        loop
        playsInline
      >
        <source
          src="https://res.cloudinary.com/drpyepp9t/video/upload/v1744806848/samples/cld-sample-video.mp4"
          type="video/mp4"
        />
       
      </video>
       <div className="absolute bottom-20 max-lg:bottom-10 left-20 max-lg:left-10 z-10">
        <button className="px-8 py-3 text-white hover:text-black rounded-full border border-white text-sm font-serif hover:bg-white/80 transition">
        Contact Us Now
        </button>
      </div>
    </div>
  );
}
