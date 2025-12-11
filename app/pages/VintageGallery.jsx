export default function VintageGallery() {
  const images = [
    "/images/pic1.jpg",
    "/images/pic2.jpg",
    "/images/pic3.jpg",
    "/images/pic4.jpg",
    "/images/pic5.jpg",
    "/images/pic6.jpg",
  ];

  return (
    <section className="w-full py-16 bg-[#fdfbf7]">
      {/* Top Heading */}
      <div className="text-center max-w-3xl mx-auto px-4">
        <p className="tracking-wide text-[13px] font-medium text-neutral-700">
          DRAWING INSPIRATION FROM VINTAGE FILM, MAGAZINES, AND FASHION,
          THE TEZZA APP FEATURES PRESETS THAT TRANSPORT YOU BACK IN TIME TO
          CREATE INSTANT NOSTALGIA AND QUALITY CONTENT. TAG US IN YOUR PHOTOS
          AND VIDEOS FOR A CHANCE TO BE FEATURED.
        </p>
      </div>

      {/* Scrollable Image Row */}
      <div className="mt-10 overflow-x-auto scrollbar-hide">
        <div className="flex justify-center items-center gap-6 px-6">
          {images.map((src, i) => (
            <div
              key={i}
              className="min-w-[180px] h-[280px] rounded-xl overflow-hidden shadow-sm bg-neutral-200 shrink-0"
            >
              <img
                src={src}
                alt=""
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
