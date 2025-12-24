import { FaInstagram } from "react-icons/fa";
import BlurText from "../components/buildKeyframes";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-space-grotesk",
});

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
       <h2 className="text-4xl font-bold text-[#2d2d2d]">
            <BlurText
              text=" OUR MOST VIEWED ON INSTAGRAM "
              delay={250}
              animateBy="words"
              direction="top"
              className={`text-red-500 uppercase ${spaceGrotesk.className}`}
            />
          </h2>
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
