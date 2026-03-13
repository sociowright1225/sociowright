import React from "react";

export default function AlwaysReady() {
  return (
    <div className="py-10 md:py-20 flex justify-center items-center px-4">
      {/* BOTTOM HERO SECTION */}
      <section
        className="
          relative w-full max-w-[1200px] 
          h-[14em] sm:h-[20em] md:h-[24em] 
          bg-cover bg-center rounded-4xl max-lg:rounded-2xl overflow-hidden 
          mt-10 md:mt-20 flex items-center justify-center
        "
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dwdmczhsn/image/upload/v1765527124/set-up-studio-shoot_ovwpwc.jpg')",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 sm:px-6">
          <p className="text-xs sm:text-sm uppercase tracking-wide mb-2 text-white">
            Hire Us Now
          </p>

          <h1 className="
              text-xl sm:text-3xl md:text-5xl 
              font-bold leading-snug 
              max-w-3xl mx-auto text-white
            "
          >
            We Are Always Ready To
            <br />
            Take A Perfect Shot
          </h1>

          <a
            href="/contact"
            className="
              inline-block mt-5 sm:mt-6 
              bg-blue-400 text-white font-semibold 
              py-2 px-6 sm:px-8 
              rounded-full hover:opacity-90 transition
            "
          >
            Get Started
          </a>
        </div>
      </section>
    </div>
  );
}
