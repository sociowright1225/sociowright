import { Bebas_Neue } from "next/font/google";

const bebas = Bebas_Neue({
  weight: "400", // Bebas Neue Bold alag weight me nahi aata, sab 400 hi hota
  subsets: ["latin"],
});

export default function Footer() {
  return (
    <div className="h-screen">
      <footer className="w-full fixed bottom-0 -z-10 border-t border-gray-200 px-6 md:px-12  overflow-hidden">
      {/* Top section */}
      <div className="flex flex-col md:flex-row justify-between gap-12 py-10">
        {/* Left labels */}
        <div className="space-y-6">
          <p className="text-xs uppercase tracking-widest text-gray-500">
            Milo Theron
          </p>
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold uppercase">Contact</h3>
            <h3 className="text-2xl font-semibold uppercase">Location</h3>
            <h3 className="text-2xl font-semibold uppercase">Social</h3>
          </div>
        </div>

        {/* Right content */}
        <div className="space-y-6 text-right">
          <nav className="flex justify-end gap-6 text-xs uppercase tracking-widest text-gray-500">
            <a href="#" className="hover:text-black">About</a>
            <a href="#" className="hover:text-black">Works</a>
            <a href="#" className="hover:text-black">Contact</a>
          </nav>

          <div className="space-y-3 text-sm">
            <p>+123 456 789, hi@milotheron.com</p>
            <p>Melbourne, Australia</p>
            <p>Instagram, Pinterest, Unsplash</p>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200" />

      {/* Huge background name */}
      <div className=" bottom-0 left-0 w-full pointer-events-none select-none">
        <h1 className={`text-[20vw] ${bebas} uppercase text-center leading-none font-bold text-gray-300 opacity-70 whitespace-nowrap`}>
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
