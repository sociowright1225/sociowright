import React from "react";

export default function Hero() {
  return (
    <div className="justify-center relative items-center flex flex-col pt-24">
      <h1 className="text-7xl w-full max-w-[800px] max-lg:text-4xl font-serif py-2 max-lg:px-3 text-center">
        Tezza empowers and ignites the artist within all of us.
      </h1>
      {/* Background Video */}
      <video
        className="relative top-0 pt-10 left-0 w-full h-full object-cover max-lg:h-screen"
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
