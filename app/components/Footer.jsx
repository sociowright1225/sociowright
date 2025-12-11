export default function Footer() {
  return (
    <footer className="w-full bg-[#F3D7A3] py-16 px-6 md:px-12 text-sm tracking-wide">
      <div className="flex flex-wrap gap-10 items-start justify-center">
        {/* Column 4 - Company Info */}
        <div>
          <h4 className="font-semibold mb-4">COMPANY</h4>
          <ul className="space-y-2">
            <li className="opacity-80 font-semibold">Socio Wright</li>
            <li className="opacity-70 italic">“Do it the Wright way!”</li>
          </ul>
        </div>

        {/* Column 1 - Services */}
        <div>
          <h4 className="font-semibold mb-4">SERVICES</h4>
          <ul className="space-y-2">
            <li>
              <a className="hover:opacity-60">Digital Marketing</a>
            </li>
            <li>
              <a className="hover:opacity-60">
                Interior Shoots (Photo & Video)
              </a>
            </li>
            <li>
              <a className="hover:opacity-60">Ad Film Shoot</a>
            </li>
          </ul>
        </div>

        {/* Column 2 - Follow Us */}
        <div>
          <h4 className="font-semibold mb-4">FOLLOW US</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:opacity-60">
                Instagram
              </a>
            </li>
            <li>
              <a href="#" className="hover:opacity-60">
                TikTok
              </a>
            </li>
            <li>
              <a href="#" className="hover:opacity-60">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="#" className="hover:opacity-60">
                YouTube
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3 - Legal */}
        <div>
          <h4 className="font-semibold mb-4">LEGAL</h4>
          <ul className="space-y-2">
            <li>
              <a className="hover:opacity-60">Terms of Use</a>
            </li>
            <li>
              <a className="hover:opacity-60">Privacy Policy</a>
            </li>
            <li>
              <a className="hover:opacity-60">Cookie Policy</a>
            </li>
          </ul>
        </div>

        {/* Column 4 - Company Info */}
        <div>
          <h4 className="font-semibold mb-4">COMPANY</h4>
          <ul className="space-y-2">
            <li className="mt-3 opacity-80">
              📍 108, New Housing Board Complex, Infront of <br /> Shankar Nagar
              Chaupati, Shankar Nagar, Raipur (C.G)
            </li>
            <li className="opacity-80">📞 +91-8905022497</li>
            <li>
              <a
                href="mailto:socio.wright@gmail.com"
                className="hover:opacity-60"
              >
                ✉️ socio.wright@gmail.com
              </a>
            </li>
            <li className="opacity-80 mt-3">🕒 Mon–Sat: 11 AM – 7 PM</li>
            <li className="opacity-80">❌ Sunday Closed</li>
          </ul>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="flex flex-wrap items-center justify-center mt-10 text-center gap-1">
        <p className="">
          © {new Date().getFullYear()} <a href="/">Socio Wright</a> —
        </p>

        <p className="">Designed & Developed by</p>
        <a className="font-semibold" href="https:portfolio.diginote.in">
          Zero Gravity Website
        </a>
      </div>
    </footer>
  );
}
