"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How do I book a photoshoot?",
    answer:
      "You can book directly through our online booking form. Choose your date, time, and package, and you'll receive an instant confirmation.",
  },
  {
    question: "Do you require a deposit?",
    answer:
      "Yes, a small non-refundable deposit is required to secure your booking. The remaining balance is paid on the day of the shoot.",
  },
  {
    question: "What should I wear for the photoshoot?",
    answer:
      "Solid colors usually photograph best. Once you book, we’ll send you a full outfit guide to help you prepare.",
  },
  {
    question: "When will I get my edited photos?",
    answer:
      "Edited photos are delivered within 5–10 business days via an online gallery.",
  },
  {
    question: "Do you provide raw (unedited) images?",
    answer:
      "We do not release raw files. Only fully edited high-resolution photos are provided.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 md:px-8 py-10 sm:py-14">
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-10">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4 sm:space-y-5">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="
              border border-gray-200 rounded-xl shadow-sm 
              p-4 sm:p-5 md:p-6 
              transition bg-white
            "
          >
            <button
              className="flex justify-between items-center w-full text-left"
              onClick={() => toggleFAQ(index)}
            >
              <span className="text-base sm:text-lg md:text-xl font-medium">
                {faq.question}
              </span>

              <ChevronDown
                className={`h-5 w-5 sm:h-6 sm:w-6 transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Animated Answer */}
            <div
              className={`
                text-gray-600 text-sm sm:text-base mt-2 
                transition-all duration-300 overflow-hidden
                ${openIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}
              `}
            >
              <div className="pt-2">{faq.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
