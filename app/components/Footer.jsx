import { Bebas_Neue } from "next/font/google";

const bebas = Bebas_Neue({
  weight: "400", // Bebas Neue Bold alag weight me nahi aata, sab 400 hi hota
  subsets: ["latin"],
});

export default function Footer() {
  return (
    <div className="h-screen relative">
      <footer className="w-full fixed max-lg:top-80 bottom-0 -z-10 border-t border-gray-200 px-6 md:px-12  overflow-hidden">
      

        <div className="w-full py-4 space-y-2 max-lg:space-y-8">
          <div className="flex justify-between max-lg:justify-start max-lg:flex-col">
            <h3 className="text-3xl font-semibold uppercase">Contact</h3>
            <p>+91-8905022497, socio.wright@gmail.com </p>
          </div>
          <div className="flex justify-between max-lg:justify-start max-lg:flex-col">
            <h3 className="text-3xl font-semibold uppercase">Social</h3>
            <p>Instagram, Linkedin</p>
          </div>
          
          <div className="flex justify-between max-lg:justify-start max-lg:flex-col">
            <h3 className="text-3xl font-semibold uppercase">Working Hours</h3>
            <p>Working hours: 11AM to 7 PM Sunday closed </p>
          </div>
          <div className="flex justify-between max-lg:justify-start max-lg:flex-col">
            <h3 className="text-3xl font-semibold uppercase">Location</h3>
            <p className="w-md max-lg:pr-30 text-right max-lg:text-left">
                Office address: 108, New Housing board complex, infront of
                shankar nagar chaupati, shankar nagar, Raipur (C.G){" "}
              </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200" />

        {/* Huge background name */}
        <div className=" bottom-0 left-0 w-full pointer-events-none select-none">
          <h1
            className={`text-[20vw] ${bebas} uppercase text-center leading-none font-bold text-gray-300 opacity-70 whitespace-nowrap`}
          >
            Chinmay
          </h1>
        </div>

        {/* Bottom bar */}
        <div className="relative z-10 flex justify-between items-center text-xs text-gray-500">
          <p>© 2025 Milo Theron</p>
          <p>Made with Framer by Denysfs</p>
        </div>
      </footer>
    </div>
  );
}
