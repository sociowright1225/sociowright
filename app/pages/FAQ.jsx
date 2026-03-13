"use client"

import { useState } from "react";

const faqs = [
  {
    q: "Do you offer marketing or just production?",
    a: "We offer both. Socio Wright handles your digital strategy, social media management, and ads, while Cine Wright covers high-end photography and video production. You can book us for one service or a full integrated package."
  },
  {
    q: "Do you guarantee results for social media marketing?",
    a: "We guarantee a data-driven approach. While viral reach can never be promised, our clients typically see a 2X increase in engagement and lead quality within the first 90 days of our strategic overhaul."
  },
  {
    q: "For interior shoots, do you charge by the hour or by image?",
    a: "We typically work on a project or day-rate basis. This ensures we are not rushing the shoot and have enough time to capture changing light throughout the day for the best possible results."
  },
  {
    q: "Do you create the content for our social media?",
    a: "Yes. Unlike agencies that ask you for photos, we create them. From reels to static graphics and professional product photography, we handle the entire content supply chain."
  },
  {
    q: "What industries do you specialize in?",
    a: "We have deep expertise in Architecture, Interior Design, and Building Material sectors such as RMC, lighting, and hardware. We also work with select lifestyle and retail brands that value high aesthetics."
  },
  {
    q: "How do we get started?",
    a: "It starts with a discovery call. We discuss your current challenges, whether it is brand awareness or visual quality, and then tailor a proposal aligned with your business goals."
  }
];


export default function FAQ() {
  const [active, setActive] = useState(0);

  return (
    <section className="w-full px-6 md:px-12 py-24 ">
      <div className="grid md:grid-cols-2 gap-16">
        {/* Left intro */}
        <div className="space-y-6 max-w-md">
          <p className="text-xs uppercase tracking-widest text-gray-500">
            [Frequently Asked Questions]
          </p>
          <p className="text-sm text-gray-600 leading-relaxed">
            If you’re wondering about how I work, what gear I use, or what to
            expect on a shoot — this is where it starts. No jargon, no
            overcomplication.
          </p>
        </div>

        {/* Right accordion */}
        <div className="divide-y divide-gray-200">
          {faqs.map((item, i) => {
            const isOpen = active === i;

            return (
              <button
                key={i}
                onClick={() => setActive(isOpen ? null : i)}
                className="w-full text-left py-6 flex gap-6 items-start group"
              >
                {/* Number */}
                <span className="text-sm text-gray-400 pt-1">
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex justify-between items-start gap-4">
                    <h3 className="text-lg font-medium">
                      {item.q}
                    </h3>

                    <span className="text-xl leading-none">
                      {isOpen ? "×" : "+"}
                    </span>
                  </div>

                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen ? "grid-rows-[1fr] mt-4" : "grid-rows-[0fr]"
                    }`}
                  >
                    <p className="overflow-hidden text-sm text-gray-600 leading-relaxed">
                      {item.a}
                    </p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
