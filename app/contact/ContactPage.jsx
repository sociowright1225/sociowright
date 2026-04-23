"use client";

import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { Space_Grotesk } from "next/font/google";
import { Clock } from "lucide-react";
import BlurText from "../components/buildKeyframes";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-space-grotesk",
});

export default function ContactPage() {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending....");

    const formData = new FormData(event.target);

    // Your Web3Forms Access Key
    formData.append("access_key", "9694a1cc-0b1d-4a32-b360-688aca5759dd");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Success! Message Sent.");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      setResult("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="w-full justify-center items-center flex">
      <div className="max-w-[1200px] w-full py-12 pt-24 px-4 sm:px-6 lg:px-16 text-gray-800">
        
        {/* HEADER / HERO */}
        <div className="relative h-28 md:h-36 w-full bg-cover bg-center rounded-2xl">
          <div className="relative z-10 flex flex-col text-center justify-center h-full px-4 sm:px-10 lg:px-16">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-wide">
              <BlurText
                text="CONTACT US"
                delay={250}
                animateBy="words"
                direction="top"
                className={`text-red-500 ${spaceGrotesk.className}`}
              />
            </h1>
          </div>
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-12">
          
          {/* INFO + MAP */}
          <div className="space-y-8 sm:space-y-10">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">
              Get In Touch
            </h1>

            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <FaPhoneAlt className="text-gray-700 text-lg sm:text-xl mt-1" />
                <a href="tel:+918905022497" className="text-gray-600 text-base sm:text-lg">
                  +91-8905022497
                </a>
              </div>

              <div className="flex items-start gap-3">
                <FaEnvelope className="text-gray-700 text-lg sm:text-xl mt-1" />
                <a href="mailto:socio.wright@gmail.com" className="text-gray-600 text-base sm:text-lg">
                  socio.wright@gmail.com
                </a>
              </div>
                
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-gray-700 text-2xl sm:text-3xl mt-1" />
                <p className="text-gray-600 text-base sm:text-lg">
                  108, New Housing board complex, infront of shankar nagar
                  chaupati, shankar nagar, Raipur (C.G)
                </p>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="text-gray-700 text-lg sm:text-xl mt-1" />
                <p className="text-gray-600 text-base sm:text-lg">
                  11AM to 7 PM Sunday closed 
                </p>
              </div>
            </div>

            {/* MAP */}
            <div className="rounded-md overflow-hidden border border-gray-300">
              <iframe
                title="Google Map"
                width="100%"
                className="h-48 sm:h-56 md:h-64 lg:h-72"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.548981682855!2d81.65682897589332!3d21.24969248002677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28dd030635e985%3A0xc3467c69994c6533!2sShankar%20Nagar%20Chowpati!5e0!3m2!1sen!2sin!4v1714000000000!5m2!1sen!2sin"
              />
            </div>
          </div>

          {/* CONTACT FORM */}
          <div className="p-5 sm:p-6 md:p-8 rounded-md shadow-md border border-gray-200 bg-white">
            <form onSubmit={onSubmit} className="space-y-4 sm:space-y-5">
              {/* Optional: Add a Honeypot to prevent spam */}
              <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }}></input>

              <div>
                <label className="text-sm text-gray-700 font-medium">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your Name..."
                  className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md text-sm sm:text-base focus:ring-2 focus:ring-orange-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-sm text-gray-700 font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="example@yourmail.com"
                  className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md text-sm sm:text-base focus:ring-2 focus:ring-orange-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-sm text-gray-700 font-medium">Subject</label>
                <input
                  type="text"
                  name="subject"
                  required
                  placeholder="Title..."
                  className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md text-sm sm:text-base focus:ring-2 focus:ring-orange-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-sm text-gray-700 font-medium">Message</label>
                <textarea
                  name="message"
                  required
                  rows="5"
                  placeholder="Type Here..."
                  className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md resize-none text-sm sm:text-base focus:ring-2 focus:ring-orange-400 focus:outline-none"
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="relative group px-8 py-3 w-full bg-red-500 shadow text-white rounded-full 
                  text-sm overflow-hidden transition disabled:bg-gray-400"
                >
                  <span className="relative z-10 uppercase font-bold">
                    {result ? result : "Send Now"}
                  </span>
                  <span
                    className="absolute bottom-0 left-1/2 w-0 h-0 rounded-t-3xl bg-black 
                    transition-all duration-300 ease-out group-hover:w-full group-hover:h-full -translate-x-1/2"
                  ></span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}