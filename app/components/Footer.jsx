import {
  FaInstagram,
  FaTiktok,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FiClock, FiMapPin } from "react-icons/fi";

export default function Footer() {
  return (
    <div className="flex justify-center items-center bg-[#F3D7A3] flex-col">
      <footer className="w-full max-w-[1200px] py-12 sm:py-16 px-4 sm:px-8 md:px-12 text-sm sm:text-base tracking-wide">

        {/* MAIN GRID */}
        <div
          className="
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            lg:grid-cols-4 
            gap-10 sm:gap-12 
            items-start
          "
        >

          {/* Column 1 - Company + Socials */}
          <div>
            <h4 className="font-semibold mb-4">COMPANY</h4>
            <ul className="space-y-2">
              <li className="opacity-80 font-semibold">Socio Wright</li>
              <li className="opacity-70 italic">“Do it the Wright way!”</li>
            </ul>

            <div className="flex gap-4 mt-5 text-xl">
              <a href="#" className="hover:opacity-60"><FaInstagram /></a>
              <a href="#" className="hover:opacity-60"><FaTiktok /></a>
              <a href="#" className="hover:opacity-60"><FaLinkedin /></a>
              <a href="#" className="hover:opacity-60"><FaYoutube /></a>
            </div>
          </div>

          {/* Column 2 - Services */}
          <div>
            <h4 className="font-semibold mb-4">SERVICES</h4>
            <ul className="space-y-2">
              <li><a className="hover:opacity-60">Digital Marketing</a></li>
              <li><a className="hover:opacity-60">Interior Shoots (Photo & Video)</a></li>
              <li><a className="hover:opacity-60">Ad Film Shoot</a></li>
            </ul>
          </div>

          {/* Column 3 - Pages */}
          <div>
            <h4 className="font-semibold mb-4">PAGES</h4>
            <ul className="space-y-2">
              <li><a href="/about" className="hover:opacity-60">About</a></li>
              <li><a href="/portfolio" className="hover:opacity-60">Portfolio</a></li>
              <li><a href="/contact" className="hover:opacity-60">Contact</a></li>
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h4 className="font-semibold mb-4">CONTACT</h4>

            <ul className="space-y-3">

              {/* Address */}
              <li className="flex items-start gap-2 opacity-80 leading-relaxed">
                <FiMapPin className="mt-1" />
                <span>
                  108, New Housing Board Complex, Infront of<br />
                  Shankar Nagar Chaupati, Shankar Nagar, Raipur (C.G)
                </span>
              </li>

              {/* Email */}
              <li>
                <a href="mailto:socio.wright@gmail.com" className="flex items-center gap-2 hover:opacity-60">
                  <HiOutlineMail /> socio.wright@gmail.com
                </a>
              </li>

              {/* Timing */}
              <li className="flex items-center gap-2 opacity-80 mt-2">
                <FiClock /> Mon–Sat: 11 AM – 7 PM
              </li>

              <li className="opacity-80">❌ Sunday Closed</li>
            </ul>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="flex flex-wrap items-center justify-center mt-10 text-center gap-1 text-sm sm:text-base">
          <p>
            Copyright © {new Date().getFullYear()}{" "}
            <a href="/" className="font-semibold">Socio Wright</a>           </p>

          <p>Designed & Developed by</p>

          <a
            className="font-semibold hover:underline"
            href="https://portfolio.diginote.in"
          >
            Zero Gravity Website
          </a>
        </div>
      </footer>
    </div>
  );
}
