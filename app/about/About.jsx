"use client";

export default function AboutUs() {
  return (
    <section className="w-full bg-[#f7f4ef] text-gray-900 px-6 md:px-14 py-20">
      
      {/* --- TOP SECTION --- */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
        
        {/* Text */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Tezza finds, shares, and inspires the little things that make life more beautiful.
          </h1>
          <p className="text-sm leading-relaxed max-w-sm text-gray-600">
            At TEZZA, our vision is to empower creativity. Through tools, inspiration, 
            and community, we believe anyone can discover beauty in their art.
          </p>
        </div>

        {/* Image */}
        <div className="rounded-xl overflow-hidden shadow-md">
          <img
            src="https://source.unsplash.com/random/800x900?people"
            alt="Top about"
            className="w-full h-[400px] object-cover"
          />
        </div>
      </div>

      {/* --- MID SECTION GALLERY + TEXT --- */}
      <div className="grid md:grid-cols-3 gap-12 mb-20 place-items-center">
        
        {/* Left Image */}
        <div className="rounded-xl overflow-hidden shadow-md w-full">
          <img
            src="https://source.unsplash.com/random/600x600?studio"
            alt="Studio"
            className="w-full h-\[320px\] object-cover"
          />
        </div>

        {/* Center Text */}
        <div className="text-sm leading-relaxed text-gray-700 max-w-xs md:max-w-none">
          <p>
            Creativity can come from everywhere. All it takes is a spark—a moment,
            and a way to bring it to life. We exist for the creators making their
            mark in this new era of inspiration.
          </p>
          <p className="mt-6">
            These tools bring new possibilities, and Tezza brings what’s next.
          </p>
        </div>

        {/* Right Image */}
        <div className="rounded-xl overflow-hidden shadow-md w-full">
          <img
            src="https://source.unsplash.com/random/600x600?fashion"
            alt="Creative Work"
            className="w-full h-\[320px] object-cover"
          />
        </div>
      </div>

      {/* --- LOGO + TEXT SECTION --- */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
        
        {/* Logo */}
        <div className="flex justify-center md:justify-start">
          <img
            src="https://source.unsplash.com/random/200x200?logo"
            alt="Logo mark"
            className="w-32 opacity-90"
          />
        </div>

        {/* Text */}
        <div className="text-sm leading-relaxed max-w-md text-gray-700">
          <p>
            Founded by creators and built for creators, Tezza continues to inspire
            visual storytellers everywhere. We make tools that elevate expression
            and encourage creativity without limits.
          </p>
        </div>
      </div>

      {/* --- BOTTOM SECTION --- */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        
        {/* Image */}
        <div className="rounded-xl overflow-hidden shadow-md">
          <img
            src="https://source.unsplash.com/random/900x900?portrait"
            alt="Founders"
            className="w-full h-[420px] object-cover"
          />
        </div>

        {/* Text */}
        <div className="text-sm leading-relaxed max-w-md text-gray-700">
          <p>
            Female-founded, design-driven, and inspired by real stories—Tezza blends
            lifestyle, creativity, and visual expression into a powerful platform 
            for the modern creator.
          </p>
        </div>
      </div>

    </section>
  );
}
