import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { Space_Grotesk } from "next/font/google";
import BlurText from '../components/buildKeyframes';

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-space-grotesk",
});

export default function ContactPage() {
  return (
    <section className="w-full justify-center items-center flex">

     <div className="max-w-[1200px] w-full py-12 pt-24 px-4 sm:px-6 lg:px-16  text-gray-800">
       {/* HEADER / HERO */}
      <div
        className="
          relative h-28 md:h-36 
          w-full bg-cover bg-center rounded-2xl
        "
 
      >
        <div className="absolute inset-0 rounded-2xl "></div>

        <div className="relative z-10 flex flex-col text-center justify-center h-full px-4 sm:px-10 lg:px-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-wide text-white">
           <BlurText
          text="CONTACT US"
          delay={250}
          animateBy="words"
          direction="top"
          className={`text-red-500 ${spaceGrotesk}`}
        />
          </h1>
          <p className="uppercase text-xs sm:text-sm mt-2 tracking-widest text-black">
            we'd love to hear what you think
          </p>
        </div>
      </div>

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-12">

        {/* RIGHT: INFO + MAP */}
        <div className="space-y-8 sm:space-y-10">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">
            Get In Touch
          </h1>

          {/* CONTACT INFO LIST */}
          <div className="flex flex-col gap-4">

            <div className="flex items-start gap-3">
              <FaPhoneAlt className="text-gray-700 text-lg sm:text-xl" />
              <p className="text-gray-600 text-base sm:text-lg">
                +6282 4032 567
              </p>
            </div>

            <div className="flex items-start gap-3">
              <FaEnvelope className="text-gray-700 text-lg sm:text-xl" />
              <p className="text-gray-600 text-base sm:text-lg">
                Example@Email.Com
              </p>
            </div>

            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-gray-700 text-lg sm:text-xl" />
              <p className="text-gray-600 text-base sm:text-lg">
                2443 Oak Ridge Omaha, QA 45065
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
              src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.9656647413017!2d81.6620357!3d21.2534394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28dd6f18802a1f%3A0xa2e540d8363f140f!2sShankar%20Nagar%2C%20Raipur%2C%20Chhattisgarh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin`}
            />
          </div>
        </div>

        {/* LEFT: CONTACT FORM */}
        <div className="p-5 sm:p-6 md:p-8 rounded-md shadow-md border border-gray-200 bg-white">

          <form className="space-y-4 sm:space-y-5">

            <div>
              <label className="text-sm text-gray-700">Name</label>
              <input
                type="text"
                placeholder="Your Name..."
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md text-sm sm:text-base focus:ring-2 focus:ring-orange-400 focus:outline-none"
              />
            </div>

            <div>
              <label className="text-sm text-gray-700">Email</label>
              <input
                type="email"
                placeholder="example@yourmail.com"
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md text-sm sm:text-base focus:ring-2 focus:ring-orange-400 focus:outline-none"
              />
            </div>

            <div>
              <label className="text-sm text-gray-700">Subject</label>
              <input
                type="text"
                placeholder="Title..."
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md text-sm sm:text-base focus:ring-2 focus:ring-orange-400 focus:outline-none"
              />
            </div>

            <div>
              <label className="text-sm text-gray-700">Message</label>
              <textarea
                rows="5"
                placeholder="Type Here..."
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md resize-none text-sm sm:text-base focus:ring-2 focus:ring-orange-400 focus:outline-none"
              ></textarea>
            </div>

            <button className="w-full bg-[#5D804B] hover:bg-[#466139] text-white font-semibold py-3 rounded-full mt-3 sm:mt-4 text-base sm:text-lg transition">
              Send Now
            </button>

          </form>
        </div>
      </div>
     </div>

    </section>
  );
}
