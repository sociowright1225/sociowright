/** @type {import('next').NextConfig} */
const nextConfig = {
  // Try turning this off first to isolate the error
  reactCompiler: true, 
  
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  // Adding logging can sometimes help Turbopack surface the real error
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
};

export default nextConfig;