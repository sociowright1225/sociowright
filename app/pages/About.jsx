import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="w-full py-20 px-6 md:px-12">
      
      {/* Top Text Row */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
        <h2 className="text-3xl md:text-5xl font-serif  leading-tight">
          Ignite the spark.  <br />
          Turn vision into momentum.  <br />
          Make your brand unforgettable.
        </h2>

        <a href="/contact" className="mt-6 md:mt-0 uppercase px-6 py-2 bg-[#5F7D3A] text-white text-base rounded-full tracking-wide hover:bg-[#4e682f] transition">
          Contact Us
        </a>
      </div>

      {/* Main Content Box */}
      <div className="max-w-6xl mx-auto bg-white rounded-3xl overflow-hidden shadow-sm flex flex-col md:flex-row">

        {/* Left Image */}
        <div className="md:w-1/2">
          <Image
            src="https://res.cloudinary.com/drpyepp9t/image/upload/v1744806854/samples/man-on-a-street.jpg"  // Replace with your Cloudinary URL
            width={800}
            height={900}
            alt="Digital Marketing Visual"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Text Block */}
        <div className="md:w-1/2 bg-[#EFE9DF] p-5 md:p-16 flex flex-col justify-center">
          <h3 className="text-5xl max-lg:text-3xl font-serif mb-6">
            Make your digital presence magic
          </h3>

          <p className="text-md max-lg:text-base tracking-wider leading-relaxed mb-10 max-w-md">
            Our digital strategies are crafted to elevate your brand with clarity, 
            creativity, and precision. From social campaigns to high-converting funnels, 
            we bring together data-driven insight and modern design to help your brand 
            stand out—boldly, beautifully, and impactfully.
          </p>

          <a href="/about" className="px-6 py-2 border border-black rounded-full text-xl font-medium hover:bg-black hover:text-white transition w-fit">
            About Us
          </a>
        </div>

      </div>
    </section>
  );
}
