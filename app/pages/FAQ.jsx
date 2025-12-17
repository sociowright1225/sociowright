"use client"

import { useState } from "react";

const faqs = [
  {
    q: "How do I book a photoshoot?",
    a: "You can book a session by filling out the contact form on my website or reaching out via email. Let me know your preferred date, location, and any specific ideas you have in mind."
  },
  {
    q: "What’s your photography style?",
    a: "My style is clean, natural, and story-driven, focusing on light, composition, and authentic moments."
  },
  {
    q: "Do you offer retouching and editing?",
    a: "Yes, all delivered photos include professional color correction and light retouching."
  },
  {
    q: "How long does it take to receive the final photos?",
    a: "Final images are typically delivered within 1–2 weeks depending on the scope of the project."
  },
  {
    q: "What if I need to reschedule or cancel?",
    a: "Please notify me at least 48 hours in advance. We can reschedule based on availability."
  },
  {
    q: "What’s your payment process?",
    a: "A deposit is required to secure your booking, with the remaining balance due upon delivery."
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
