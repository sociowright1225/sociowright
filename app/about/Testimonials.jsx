"use client";

export default function Testimonials() {
  const testimonials = [
    {
      title: "Forbes 30 Under 30 - Art & Style",
      quote: `“You’ve just taken a day’s worth of photos and you’re getting 
      ready to upload them to Instagram. But first, you have to ensure that the 
      aesthetic matches your feed. What app are you pulling out? For millions 
      around the world, the answer may be Tezza.”`,
      link: "#",
    },
    {
      title: "Business Insider",
      quote: `“Tezza's photo-editing tools have become favorites among creators, 
      offering a range of filters that can make any iPhone photo or video look 
      like it was taken on 35mm film or captured on a vintage camcorder.”`,
      link: "#",
    },
    {
      title: "CNBC Make It",
      quote: `“Together, they make a good team, they say: Barton’s perfectionist 
      streak from her freelance photography days balances out Herrmann’s mantra 
      that ‘done is better than perfect.’”`,
      link: "#",
    },
    {
      title: "CNBC Make It",
      quote: `“Together, they make a good team, they say: Barton’s perfectionist 
      streak from her freelance photography days balances out Herrmann’s mantra 
      that ‘done is better than perfect.’”`,
      link: "#",
    },
    {
      title: "CNBC Make It",
      quote: `“Together, they make a good team, they say: Barton’s perfectionist 
      streak from her freelance photography days balances out Herrmann’s mantra 
      that ‘done is better than perfect.’”`,
      link: "#",
    },
  ];

  return (
    <section className="bg-[#f9f6ef]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-serif mb-10">
          What are people saying?
        </h2>

        {/* Carousel */}
        <div
          className="
            flex gap-4
            overflow-x-auto
            scroll-smooth
            snap-x snap-mandatory
            pb-4
            [-webkit-overflow-scrolling:touch]
          "
        >
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="
                snap-start
                shrink-0
                w-[85%]
                sm:w-[48%]
                lg:w-[32%]
              "
            >
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
        </div>
      </div>
    </section>
  );
}
