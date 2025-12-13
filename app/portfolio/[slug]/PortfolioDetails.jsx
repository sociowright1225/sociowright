// app/portfolio/[slug]/PortfolioDetails.jsx
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const blogData = {
  "project1": {
    project: "project1",
    Category: "Digital Marketing",
    date: "12-12-2025",
  },
  "project2": {
    project: "project2",
    Category: "Digital Marketing",
    date: "12-12-2025",
  },
  "project3": {
    project: "project3",
    Category: "Digital Marketing",
    date: "12-12-2025",
  },
  "project4": {
    project: "project1",
    Category: "Digital Marketing",
    date: "12-12-2025",
  },
  "project5": {
    project: "project2",
    Category: "Digital Marketing",
    date: "12-12-2025",
  },
  "project6": {
    project: "project3",
    Category: "Digital Marketing",
    date: "12-12-2025",
  },
   "project11": {
    project: "project1",
    Category: "Digital Marketing",
    date: "12-12-2025",
  },
  "project22": {
    project: "project2",
    Category: "Digital Marketing",
    date: "12-12-2025",
  },
  "project33": {
    project: "project3",
    Category: "Digital Marketing",
    date: "12-12-2025",
  },
  "project44": {
    project: "project1",
    Category: "Digital Marketing",
    date: "12-12-2025",
  },
  "project55": {
    project: "project2",
    Category: "Digital Marketing",
    date: "12-12-2025",
  },
  "project66": {
    project: "project3",
    Category: "Digital Marketing",
    date: "12-12-2025",
  },
     "project111": {
    project: "project1",
    Category: "Digital Marketing",
    date: "12-12-2025",
  },
  "project222": {
    project: "project2",
    Category: "Digital Marketing",
    date: "12-12-2025",
  },
  "project333": {
    project: "project3",
    Category: "Digital Marketing",
    date: "12-12-2025",
  },
  "project444": {
    project: "project1",
    Category: "Digital Marketing",
    date: "12-12-2025",
  },
  "project555": {
    project: "project2",
    Category: "Digital Marketing",
    date: "12-12-2025",
  },
 
};

const images = [
  "/img/work1.jpg",
  "/img/work2.jpg",
  "/img/work3.jpg",
  "/img/work4.jpg",
  "/img/work5.jpg",
  "/img/work6.jpg",
];

export default function PortfolioDetails({ slug }) {
  const blog = blogData[slug];

  if (!blog) {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold">Blog Not Found</h1>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen py-12 pt-28 px-4 sm:px-6 lg:px-12">
      
      {/* Breadcrumb + Title */}
      <div className="max-w-6xl mx-auto">
        <p className="text-gray-400 text-xs sm:text-sm mb-2">
          Home / Portfolio / <span className="font-medium">{blog.project}</span>
        </p>

        <h1 className="text-3xl sm:text-4xl uppercase lg:text-5xl font-bold leading-tight">
          {blog.project}{" "}
          <span className="text-[#5D804B] ">
            {blog.Category}
          </span>
        </h1>
      </div>

      {/* MAIN GRID */}
      <div className="max-w-6xl mx-auto mt-10 grid grid-cols-1 lg:grid-cols-4 gap-8">

        {/* LEFT SIDE DETAILS */}
        <div className="space-y-8">

          {/* Project Details Box */}
          <div className="rounded-xl p-6 border border-gray-700">
            <h3 className="bg-[#5D804B] text-white font-semibold py-2 px-4 rounded-md w-max text-sm sm:text-base">
              Project Details
            </h3>

            <div className="mt-4 space-y-4 text-xs sm:text-sm">
              <div>
                <p className="text-gray-400">Project Name:</p>
                <p className="font-semibold text-gray-900">{blog.project}</p>
              </div>

              <div>
                <p className="text-gray-400">Category:</p>
                <p className="font-semibold text-gray-900">{blog.Category}</p>
              </div>

              <div>
                <p className="text-gray-400">Date:</p>
                <p className="font-semibold text-gray-900">{blog.date}</p>
              </div>

              {/* Social Icons */}
            <div className="pt-3">
  <p className="text-gray-400 mb-2">Share:</p>

  <div className="flex gap-4 text-xl">
    <FaFacebookF className="cursor-pointer hover:text-blue-500 transition" />
    <FaInstagram className="cursor-pointer hover:text-pink-500 transition" />
    <FaLinkedin className="cursor-pointer hover:text-blue-800 transition" />
    <FaXTwitter className="cursor-pointer hover:text-gray-700 transition" />
  </div>
</div>

            </div>
          </div>

          {/* Contact Box */}
          <div className="rounded-xl p-6 border border-gray-700">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-[#5D804B] text-black w-12 h-12 rounded-lg flex items-center justify-center">
                <i className="ri-mail-send-fill text-2xl"></i>
              </div>
              <p className="font-semibold text-gray-900 text-sm sm:text-base">
                We are always here to discuss with you
              </p>
            </div>

            <p className="text-xs sm:text-sm text-gray-400 mb-3">
              hello@creative.example
            </p>

            <button className="mt-2 bg-[#5D804B] hover:bg-[#466139] text-white px-5 py-2 rounded-lg text-sm sm:text-base transition">
              Contact Us →
            </button>
          </div>

        </div>

        {/* RIGHT SIDE - Image Gallery */}
        <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {images.map((img, i) => (
            <div key={i} className="rounded-xl overflow-hidden shadow-lg">
              <img
                src={img}
                alt="portfolio item"
                className="
                  w-full 
                  h-48 sm:h-56 md:h-64 lg:h-72 
                  object-cover 
                  hover:scale-105 
                  transition duration-300
                "
              />
            </div>
          ))}
        </div>

      </div>

    </div>
  );
}
