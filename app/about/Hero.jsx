import TextType from "../components/TextType";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center py-20">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          {/* Right Image */}
          <div className="relative">
            <img
              src="https://img.freepik.com/free-photo/man-with-camera_23-2147689324.jpg?uid=R103518039&ga=GA1.1.135994635.1764499232&semt=ais_hybrid&w=740&q=80" // replace with your image path
              alt="Photographer portrait"
              className="w-full h-[500px] object-cover rounded-lg grayscale"
            />
          </div>

          {/* Left Content */}
          <div className=" max-w-xl">
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
              I'm Chinmay,
              <br />I help brands grow through {" "}
              <TextType
                text={["Digital Marketing", "Interior Shoots", "Ad Films"]}
                typingSpeed={75}
                pauseDuration={1500}
                showCursor={true}
                cursorCharacter="|"
                className="text-red-500"
              />
            </h1>

            <p className="mt-6 text-gray-500 text-sm leading-relaxed">
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
                href="/projects"
                className="bg-white text-black px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-200 transition"
              >
                Browse Gallery
              </a>

              <a
                href="tel:918905022497"
                className="bg-gray-800 text-white  px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-700 transition"
              >
                Get in touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
