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
              I'm John Carter, <br /> a
              product photographer 
              from <span className="font-bold">San Francisco, CA</span>
            </h1>

            <p className="mt-6 text-gray-400 text-sm leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit,
              sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua. Ut enim ad minim veniam quis.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <button className="bg-white text-black px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-200 transition">
                Browse albums
              </button>

              <button className="bg-gray-800 text-white  px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-700 transition">
                Get in touch
              </button>
            </div>
          </div>

        

        </div>
      </div>
    </section>
  );
};

