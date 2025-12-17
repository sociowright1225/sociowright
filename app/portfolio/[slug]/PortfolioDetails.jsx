// app/portfolio/[slug]/PortfolioDetails.jsx
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import connectDB from "@/lib/mongodb";
import Portfolio from "@/models/Portfolio";

const isVideo = (url) => {
  return /\.(mp4|webm|ogg|mov)$/i.test(url);
};

export default async function PortfolioDetails({ params }) {
  const { slug } = params;

  await connectDB();

  const project = await Portfolio.findOne({ slug }).lean();

  if (!project) {
    return (
      <p className="pt-40 text-center text-gray-500">
        Project not found
      </p>
    );
  }

  const {
    title,
    category,
    thumbnail,
    gallery = [],
    date,
  } = project;

  return (
    <div className="w-full min-h-screen flex flex-col items-center py-12 pt-28 px-4 sm:px-6 lg:px-12 bg-[#F2F1EA]">

      {/* Breadcrumb + Title */}
      <div className="max-w-6xl mx-auto w-full mb-6">
        <p className="text-gray-400 text-xs sm:text-sm mb-2">
          Home / Portfolio / <span className="font-medium">{title}</span>
        </p>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase">
          {title}{" "}
          <span className="text-[#5D804B]">{category}</span>
        </h1>
      </div>

      {/* Hero Image */}
      <section className="w-full max-w-6xl mb-16">
        <div className="w-full h-[60vh] rounded-xl overflow-hidden">
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Overview Section */}
      <section className="w-full max-w-6xl mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Left */}
          <div>
            <p className="text-sm tracking-widest text-gray-400 mb-6">
              [ OVERVIEW ]
            </p>
          </div>

          {/* Right */}
          <div>
            <p className="text-gray-600 leading-relaxed max-w-xl">
              This project showcases creative work focused on visual storytelling,
              branding consistency, and high-impact presentation tailored for the
              client’s marketing goals.
            </p>

            {/* Meta Info */}
            <div className="mt-16 grid grid-cols-2 gap-x-12 gap-y-10">
              <div>
                <p className="text-sm text-gray-400 mb-2">Year</p>
                <p className="font-semibold text-lg">
                  {new Date(date).getFullYear()}
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-400 mb-2">Category</p>
                <p className="font-semibold text-lg">{category}</p>
              </div>

              <div>
                <p className="text-sm text-gray-400 mb-2">Client</p>
                <p className="font-semibold text-lg">{title}</p>
              </div>

              <div>
                <p className="text-sm text-gray-400 mb-2">Platform</p>
                <p className="font-semibold text-lg">Digital Media</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="w-full max-w-7xl">
        <div className="flex flex-wrap justify-center gap-6">
          {gallery.map((src, i) => (
            src && (
              <div
                key={i}
                className="rounded-xl overflow-hidden shadow-lg"
              >
                {isVideo(src) ? (
                  <video
                    src={src}
                    controls
                    muted
                    className="w-full h-48 sm:h-56 md:h-64 lg:h-96 object-cover"
                  />
                ) : (
                  <img
                    src={src}
                    alt={`${title} ${i + 1}`}
                    className="w-full h-48 sm:h-56 md:h-64 lg:h-96 object-cover hover:scale-105 transition duration-300"
                  />
                )}
              </div>
            )
          ))}
        </div>
      </section>

    </div>
  );
}
