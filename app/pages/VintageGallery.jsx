import { FaInstagram } from "react-icons/fa";

export default function VintageGallery() {
  const images = [
    "https://res.cloudinary.com/dwdmczhsn/image/upload/v1765459851/main-sample.png",
    "https://res.cloudinary.com/dwdmczhsn/image/upload/v1765547385/Screenshot_2025-12-12_190942_lmfgg9.png",
    "https://res.cloudinary.com/dwdmczhsn/image/upload/v1765459851/main-sample.png",
    "https://res.cloudinary.com/dwdmczhsn/image/upload/v1765459851/main-sample.png",
    "https://res.cloudinary.com/dwdmczhsn/image/upload/v1765547385/Screenshot_2025-12-12_190942_lmfgg9.png",
    "https://res.cloudinary.com/dwdmczhsn/image/upload/v1765459851/main-sample.png",
  ];

  return (
    <div className="flex justify-center items-center">
      <section className="w-full max-w-[1300px] py-12 md:py-16 bg-[#fdfbf7]">
        
        {/* Top Heading */}
        <div className="text-center max-w-3xl mx-auto px-4">
          <p className="tracking-wide text-[12px] sm:text-[13px] font-medium text-neutral-700 leading-relaxed">
            DRAWING INSPIRATION FROM VINTAGE FILM, MAGAZINES, AND FASHION, 
            THE TEZZA APP FEATURES PRESETS THAT TRANSPORT YOU BACK IN TIME TO 
            CREATE INSTANT NOSTALGIA AND QUALITY CONTENT. TAG US IN YOUR PHOTOS 
            AND VIDEOS FOR A CHANCE TO BE FEATURED.
          </p>
        </div>

        {/* Scrollable Image Row */}
        <div className="mt-10 overflow-x-auto scrollbar-hide">
          <div className="flex items-center gap-4 sm:gap-6 px-4 sm:px-6">

            {images.map((src, i) => (
              <div
                key={i}
                className="
                  relative group
                  shrink-0 
                  w-[130px] h-[200px] 
                  sm:w-[160px] sm:h-[240px]
                  md:w-[180px] md:h-[280px]
                  rounded-xl overflow-hidden shadow-sm bg-neutral-200
                "
              >
                {/* Image */}
                <img
                  src={src}
                  alt=""
                  className="
                    w-full h-full object-cover 
                    transition-transform duration-300 
                    group-hover:scale-105
                  "
                />

                {/* Hover Overlay */}
                <div
                  className="
                    absolute inset-0 
                    bg-[#E8CEA2]/40
                    opacity-0 group-hover:opacity-100
                    flex items-center justify-center
                    transition-all duration-300
                  "
                >
                  {/* Instagram Icon */}
                  <FaInstagram className="text-white text-3xl drop-shadow-xl" />
                </div>

              </div>
            ))}

          </div>
        </div>
      </section>
    </div>
  );
}
