"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Testimonials() {
  const testimonials = [
    {
      title: "Forbes 30 Under 30 - Art & Style",
      quote: `“You’ve just taken a day’s worth of photos and you’re getting 
      ready to upload them to Instagram. But first, you have to ensure that the 
      aesthetic matches your feed. What app are you pulling out? For millions 
      around the world, the answer may be Tezza.”`,
      link: "#"
    },
    {
      title: "Business Insider",
      quote: `“Tezza's photo-editing tools have become favorites among creators, 
      offering a range of filters that can make any iPhone photo or video look 
      like it was taken on 35mm film or captured on a vintage camcorder.”`,
      link: "#"
    },
    {
      title: "CNBC Make It",
      quote: `“Together, they make a good team, they say: Barton’s perfectionist 
      streak from her freelance photography days balances out Herrmann’s mantra 
      that ‘done is better than perfect.’”`,
      link: "#"
    },
    {
      title: "CNBC Make It",
      quote: `“Together, they make a good team, they say: Barton’s perfectionist 
      streak from her freelance photography days balances out Herrmann’s mantra 
      that ‘done is better than perfect.’”`,
      link: "#"
    },
    {
      title: "CNBC Make It",
      quote: `“Together, they make a good team, they say: Barton’s perfectionist 
      streak from her freelance photography days balances out Herrmann’s mantra 
      that ‘done is better than perfect.’”`,
      link: "#"
    },
  ];

  // Slick Slider Settings
const settings = {
  dots: true,
  infinite: true,
  autoplay: true,
  speed: 700,
  autoplaySpeed: 3000,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false, // 🚀 Hides left/right arrow buttons

  responsive: [
    {
      breakpoint: 1024, // Tablet
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 640, // Mobile
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};


  return (
    <section className=" bg-[#f9f6ef]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Heading */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-serif mb-10">
          What are people saying?
        </h2>

        {/* Carousel */}
        <Slider {...settings}>
          {testimonials.map((item, index) => (
            <div key={index} className="px-2 sm:px-3">
              <div
                className="
                  bg-[#3a78a0] 
                  text-white 
                  p-6 sm:p-8 
                  rounded-lg 
                  flex flex-col justify-between 
                  min-h-[260px] sm:min-h-[300px] lg:min-h-80
                "
              >
                <div>
                  <h3 className="font-semibold text-base sm:text-lg mb-3">
                    {item.title}
                  </h3>

                  <p className="text-sm sm:text-base leading-relaxed">
                    {item.quote}
                  </p>
                </div>

                <a
                  href={item.link}
                  className="mt-6 inline-block text-sm underline hover:opacity-80"
                >
                  See article
                </a>
              </div>
            </div>
          ))}
        </Slider>

      </div>
    </section>
  );
}
