import TextType from "../components/TextType";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center flex-col py-20">
      <div className="max-w-7xl mx-auto lg:pt-10 px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          {/* Right Image */}
          <div className="relative">
            <img
              src="https://res.cloudinary.com/dwdmczhsn/image/upload/v1773427140/IMAGE_cdafna.png" // replace with your image path
              alt="Photographer portrait"
              className="w-full h-[500px] object-cover rounded-lg "
            />
          </div>

          {/* Left Content */}
          <div className=" max-w-xl">
            <h1 className="text-3xl md:text-5xl font-semibold leading-tight">
              We help brands grow through <br />
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
          {/* Left Content */}
          <div className=" max-w-xl">
            {/* <h1 className="text-3xl md:text-5xl font-semibold leading-tight">
              We help brands grow through <br />
              <TextType
                text={["Digital Marketing", "Interior Shoots", "Ad Films"]}
                typingSpeed={75}
                pauseDuration={1500}
                showCursor={true}
                cursorCharacter="|"
                className="text-gray-500"
              />
            </h1> */}

          <p className="mt-6 text-gray-500 text-base max-lg:text-sm leading-relaxed">
  Creativity has always been a natural part of who I am. I’ve always enjoyed 
  capturing moments, editing visuals, and experimenting with ideas that turn 
  simple concepts into meaningful stories. After completing my 12th grade, 
  I joined my family business, but soon realized that the routine of managing 
  numbers and calculations wasn’t where my true passion lived.
<br />
  What truly excited me was the creative process of building something impactful. 
  That’s when I discovered the world of marketing. It felt like the perfect blend 
  of creativity and strategy. I began exploring content creation, branding, 
  social media strategy, and digital growth.
<br />
  Over time, I had the opportunity to work with different brands, helping them 
  strengthen their presence, connect with their audience, and grow in an 
  authentic way. Today, through <span className="font-medium text-gray-700">Socio Wright</span>, 
  I channel that same passion into helping businesses expand their reach and 
  build brands that truly stand out.
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
          <div className="relative">
            <img
              src="https://res.cloudinary.com/dwdmczhsn/image/upload/v1773426511/6C8D9DA3-8634-49FA-945C-9060F6310F33_twolfw.jpg" // replace with your image path
              alt="Photographer portrait"
              className="w-full h-[500px] object-cover rounded-lg "
            />
          </div>
        </div>
      </div>
    </section>
  );
};
