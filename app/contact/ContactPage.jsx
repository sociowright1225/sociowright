export default function ContactPage() {
  return (
    <section className="w-full min-h-screen py-12 px-4 lg:px-16 bg-white text-gray-800">

      {/* HEADER / HERO */}
      <div
        className="relative h-64 w-full bg-cover bg-center"
        style={{ backgroundImage: "url('/your-header-image.jpg')" }}
      >
        {/* LIGHT OVERLAY */}
        <div className="absolute inset-0 bg-white/40"></div>

        <div className="relative z-10 flex flex-col justify-center h-full px-6 lg:px-16">
          <h1 className="text-4xl font-extrabold tracking-wide text-gray-900">
            CONTACT <span className="text-orange-500">US</span>
          </h1>
          <p className="uppercase text-sm mt-2 tracking-widest text-gray-700">
            we'd love to hear what you think
          </p>
        </div>
      </div>

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-12">

        {/* LEFT: FORM */}
        <div className="p-10 rounded-md shadow-md border border-gray-200 bg-white">
          <h4 className="text-gray-500 text-sm">Contact Us</h4>
          <h1 className="text-4xl font-bold mb-8 text-gray-900">Get In Touch</h1>

          <form className="space-y-6">

            {/* Name */}
            <div>
              <label className="text-sm text-gray-700">Name</label>
              <input
                type="text"
                placeholder="Your Name..."
                className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-400 focus:outline-none"
              />
            </div>

            {/* Email */}
            <div>
              <label className="text-sm text-gray-700">Email</label>
              <input
                type="email"
                placeholder="example@yourmail.com"
                className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-400 focus:outline-none"
              />
            </div>

            {/* Subject */}
            <div>
              <label className="text-sm text-gray-700">Subject</label>
              <input
                type="text"
                placeholder="Title..."
                className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-400 focus:outline-none"
              />
            </div>

            {/* Message */}
            <div>
              <label className="text-sm text-gray-700">Message</label>
              <textarea
                placeholder="Type Here..."
                rows="5"
                className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md resize-none focus:ring-2 focus:ring-orange-400 focus:outline-none"
              ></textarea>
            </div>

            {/* Submit */}
            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-full mt-4 transition">
              Send Now
            </button>
          </form>
        </div>

        {/* RIGHT: INFO + MAP */}
        <div className="space-y-10">

          <p className="text-gray-700 leading-relaxed max-w-lg">
            In tempus nisl turpis, at ultricies dui eleifend a. Quisque et quam vel nunc
            consequat pharetra euismod et elit. Morbi nibh tortor, ullamcorper id purus eu,
            rhoncus consequat velit.
          </p>

          {/* CONTACT GRID */}
          <div className="grid grid-cols-2 gap-8">

            {/* Phone */}
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="text-orange-500 text-3xl">📞</div>
              <h3 className="font-bold text-gray-900">Phone Number</h3>
              <p className="text-gray-600 text-sm">+6282 4032 567</p>
            </div>

            {/* Email */}
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="text-orange-500 text-3xl">✉️</div>
              <h3 className="font-bold text-gray-900">Email Address</h3>
              <p className="text-gray-600 text-sm">Example@Email.Com</p>
            </div>

            {/* Whatsapp */}
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="text-green-500 text-3xl">🟢</div>
              <h3 className="font-bold text-gray-900">Whatsapp</h3>
              <p className="text-gray-600 text-sm">082-245-7253</p>
            </div>

            {/* Location */}
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="text-orange-500 text-3xl">📍</div>
              <h3 className="font-bold text-gray-900">Our Office</h3>
              <p className="text-gray-600 text-sm">2443 Oak Ridge Omaha, QA 45065</p>
            </div>
          </div>

          {/* MAP */}
          <div className="rounded-md overflow-hidden border border-gray-300">
            <iframe
              title="Google Map"
              width="100%"
              height="260"
              loading="lazy"
              allowFullScreen
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19801.56651495503!2d-0.1208501!3d51.5032974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604c1f42bc3fb%3A0xbaa2de0f0bab126!2sLondon%20Eye!5e0!3m2!1sen!2sus!4v1684200000000"
            ></iframe>
          </div>

        </div>
      </div>

      {/* BOTTOM HERO SECTION */}
      <section
        className="relative w-full h-[60vh] lg:h-[70vh] bg-cover bg-center mt-20 flex items-center justify-center"
        style={{ backgroundImage: "url('/your-hero-image.jpg')" }}
      >
        <div className="absolute inset-0 bg-white/50"></div>

        <div className="relative z-10 text-center px-4">
          <p className="text-sm uppercase tracking-wide mb-3 text-gray-700">Hire Us Now</p>

          <h1 className="text-3xl md:text-5xl font-bold leading-snug max-w-3xl mx-auto text-gray-900">
            We Are Always Ready To<br />Take A Perfect Shot
          </h1>

          <button className="mt-6 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-8 rounded-full transition">
            Get Started
          </button>
        </div>
      </section>

    </section>
  );
}
