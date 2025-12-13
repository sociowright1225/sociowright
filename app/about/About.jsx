"use client";

export default function AboutUs() {
  return (
    <div className="flex justify-center items-center">
      <section className="w-full max-w-[1200px] bg-[#f7f4ef] text-gray-900 px-4 sm:px-8 md:px-14 pt-14 sm:pt-20">
        {/* --- TOP SECTION --- */}
        <div className="grid md:grid-cols-2 gap-10 sm:gap-12 items-center mb-16 sm:mb-20">
          {/* Left Title */}
          <h1 className="text-3xl sm:text-4xl md:text-4xl font-serif font-thin leading-snug">
            Socio Wright finds, shares, and inspires the little things that make
            life more beautiful.
          </h1>

          {/* Right Text */}
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-4">
            <p className="text-base leading-relaxed text-gray-600 max-w-sm">
              At Socio Wright, our vision is to empower creativity. Through
              tools, inspiration, and community, we believe anyone can discover
              beauty in their art.
            </p>
            <p className="text-base leading-relaxed text-gray-600 max-w-sm">
              At Socio Wright, our vision is to empower creativity. Through
              tools, inspiration, and community, we believe anyone can discover
              beauty in their art.
            </p>
          </div>
        </div>

        {/* --- MID SECTION GALLERY + TEXT --- */}
        <div
          className="
          grid 
          grid-cols-1 
          lg:grid-cols-2
          gap-10 sm:gap-12 
          mb-20
        "
        >
          {/* LEFT IMAGES */}
          <div className="flex flex-col gap-6 w-full">
            <img
              src="https://res.cloudinary.com/dwdmczhsn/image/upload/v1765459851/main-sample.png"
              alt="Creative Work"
              className="w-full h-72 sm:h-[450px] md:h-[600px] lg:h-[700px] object-cover rounded-xl"
            />

            <img
              src="https://res.cloudinary.com/dwdmczhsn/image/upload/v1765547385/Screenshot_2025-12-12_190942_lmfgg9.png"
              alt="Founders"
              className="w-full h-56 sm:h-[300px] md:h-[350px] lg:h-[420px] object-cover rounded-xl"
            />
          </div>

          {/* CENTER TEXT + RIGHT IMAGE */}
          <div className="text-sm leading-relaxed text-gray-700 flex flex-col gap-10 max-w-xl mx-auto lg:max-w-none">
            {/* Right Image */}
            <div className="rounded-xl overflow-hidden shadow-md w-full">
              <img
                src="https://creative-garage.in/wp-content/uploads/2025/04/RD-SMM.webp"
                alt="Creative Work"
                className="w-full h-60 sm:h-72 md:h-80 object-cover"
              />
            </div>

            {/* TEXT BLOCKS */}
            <div className="flex flex-col gap-10 text-base">
              {/* Paragraph Group 1 */}
              <div className="space-y-6">
                <p>
                  Creativity can come from everywhere. All it takes is a spark—a
                  moment, and a way to bring it to life. We exist for the
                  creators making their mark in this new era of inspiration.
                </p>

                <p>
                  These tools bring new possibilities, and Socio Wright brings
                  what’s next. Female-founded, design-driven, and inspired by
                  real stories—Socio Wright blends lifestyle, creativity, and
                  visual expression into a powerful platform for the modern
                  creator.
                </p>

                <p>
                  These tools bring new possibilities, and Socio Wright brings
                  what’s next. Female-founded, design-driven, and inspired by
                  real stories—Socio Wright blends lifestyle, creativity, and
                  visual expression into a powerful platform for the modern
                  creator.
                </p>
              </div>

              {/* Paragraph Group 2 */}
              <div className="space-y-6">
                <p>
                  Creativity can come from everywhere. All it takes is a spark—a
                  moment, and a way to bring it to life. We exist for the
                  creators making their mark in this new era of inspiration.
                </p>

                <p>
                  These tools bring new possibilities, and Socio Wright brings
                  what’s next. Female-founded, design-driven, and inspired by
                  real stories—Socio Wright blends lifestyle, creativity, and
                  visual expression into a powerful platform for the modern
                  creator.
                </p>

                <p>
                  These tools bring new possibilities, and Socio Wright brings
                  what’s next. Female-founded, design-driven, and inspired by
                  real stories—Socio Wright blends lifestyle, creativity, and
                  visual expression into a powerful platform for the modern
                  creator.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
