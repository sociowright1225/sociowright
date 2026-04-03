import TextType from "../components/TextType";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center flex-col py-20">
      <div className="max-w-7xl mx-auto lg:pt-10 px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          {/* Right Image */}
          <div className="relative">
            <img
              src="https://res.cloudinary.com/dwdmczhsn/image/upload/v1773426511/6C8D9DA3-8634-49FA-945C-9060F6310F33_twolfw.jpg" // replace with your image path
              alt="Photographer portrait"
              className="w-full h-[500px] object-cover rounded-lg "
            />
          </div>

          {/* Left Content */}
          <div className=" max-w-xl">
            <h1 className="text-3xl md:text-5xl font-semibold leading-tight">
              I'am Chinmay, i help brands grow through <br />
              <TextType
                text={["Digital Marketing", "Interior Shoots", "Ad Films"]}
                typingSpeed={75}
                pauseDuration={1500}
                showCursor={true}
                cursorCharacter="|"
                className="text-gray-500"
              />
            </h1>

            <p className="mt-6 text-gray-500 text-base max-lg:text-sm leading-relaxed">
              My path wasn't a straight line. I explored Engineering and even
              the world of CA, but neither sparked the passion I was looking
              for. That changed when I discovered marketing. I cut my teeth as a
              content creator with Raipur’s finest—the{" "}
              <span className="font-semibold text-gray-700">
                1857 community
              </span>{" "}
              and
              <span className="font-semibold text-gray-700">
                {" "}
                Easy Communications
              </span>
              —where I learned what truly drives engagement. I founded{" "}
              <span className="font-semibold text-gray-700">
                Socio Wright
              </span>{" "}
              to bring that clarity to you, with a singular goal: helping brands
              stop guessing and start connecting with their primary audience.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <a
                href="/portfolio"
                className=" bottom-20 max-lg:bottom-10 left-20 max-lg:left-10 z-50"
              >
                <button
                  className="relative group px-8 py-3 bg-white shadow hover:text-white text-black rounded-full 
           text-sm overflow-hidden transition"
                >
                  <span className="relative z-10">Browse Gallery</span>

                  <span
                    className=" absolute bottom-0 left-1/2 w-0 h-0 rounded-t-3xl bg-black 
            transition-all duration-200 ease-out group-hover:w-full group-hover:h-full -translate-x-1/2"
                  ></span>
                </button>
              </a>

              <a
                href="/contact"
                className=" bottom-20 max-lg:bottom-10 left-20 max-lg:left-10 z-50"
              >
                <button
                  className="relative group px-8 py-3 bg-red-500 shadow text-white rounded-full
           text-sm overflow-hidden transition"
                >
                  <span className="relative z-10"> Get in touch</span>

                  <span
                    className=" absolute bottom-0 left-1/2 w-0 h-0 rounded-t-3xl bg-black 
            transition-all duration-200 ease-out group-hover:w-full group-hover:h-full -translate-x-1/2"
                  ></span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto pt-30 px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          {/* Right Image */}
          <div className="relative lg:hidden">
            <img
              src="https://res.cloudinary.com/dwdmczhsn/image/upload/v1773427140/IMAGE_cdafna.png" // replace with your image path
              alt="Photographer portrait"
              className="w-full h-[500px] object-cover rounded-lg "
            />
          </div>
          {/* Left Content */}
          <div className=" max-w-xl">
            <h1 className="text-3xl md:text-5xl font-semibold leading-tight">
              I'am Krishna, and <br />
              {/* <TextType
                text={["Digital Marketing", "Interior Shoots", "Ad Films"]}
                typingSpeed={75}
                pauseDuration={1500}
                showCursor={true}
                cursorCharacter="|"
                className="text-gray-500"
              /> */}
            </h1>

            <p className="mt-6 text-gray-500 text-base max-lg:text-sm leading-relaxed">
              My Journey I’ve always been drawn to{" "}
              <span className="font-semibold text-gray-700">creativity</span> {" "}—
              capturing moments, editing, and bringing ideas to life. After
              12th, I stepped into my family business, but quickly realized that
              routine desk work wasn’t where I thrived. That’s when I discovered{" "}
              <span className="font-semibold text-gray-700">marketing</span>—the
              perfect blend of creativity and strategy. I immersed myself in
              learning, experimenting, and building, eventually helping multiple
              brands grow, connect with their audience, and stand out in a
              crowded space. Today, through{" "}
              <span className="font-semibold text-gray-700">Socio Wright</span>,
              I focus on turning ideas into impact and helping brands grow with
              clarity and purpose.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <a
                href="/portfolio"
                className=" bottom-20 max-lg:bottom-10 left-20 max-lg:left-10 z-50"
              >
                <button
                  className="relative group px-8 py-3 bg-white shadow hover:text-white text-black rounded-full 
           text-sm overflow-hidden transition"
                >
                  <span className="relative z-10">Browse Gallery</span>

                  <span
                    className=" absolute bottom-0 left-1/2 w-0 h-0 rounded-t-3xl bg-black 
            transition-all duration-200 ease-out group-hover:w-full group-hover:h-full -translate-x-1/2"
                  ></span>
                </button>
              </a>

              <a
                href="/contact"
                className=" bottom-20 max-lg:bottom-10 left-20 max-lg:left-10 z-50"
              >
                <button
                  className="relative group px-8 py-3 bg-red-500 shadow text-white rounded-full
           text-sm overflow-hidden transition"
                >
                  <span className="relative z-10"> Get in touch</span>

                  <span
                    className=" absolute bottom-0 left-1/2 w-0 h-0 rounded-t-3xl bg-black 
            transition-all duration-200 ease-out group-hover:w-full group-hover:h-full -translate-x-1/2"
                  ></span>
                </button>
              </a>
            </div>
          </div>
          {/* Right Image */}
          <div className="relative max-lg:hidden">
            <img
              src="https://res.cloudinary.com/dwdmczhsn/image/upload/v1773427140/IMAGE_cdafna.png" // replace with your image path
              alt="Photographer portrait"
              className="w-full h-[500px] object-cover rounded-lg "
            />
          </div>
        </div>
      </div>
    </section>
  );
};
