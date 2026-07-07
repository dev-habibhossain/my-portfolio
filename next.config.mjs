/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Allow remote portrait/cover images (e.g. from image hosts) to be used
    // with next/image. Add more hostnames here as needed.
    remotePatterns: [
      { protocol: "https", hostname: "i.ibb.co.com" },
      { protocol: "https", hostname: "i.ibb.co" },
    ],
  },
};

export default nextConfig;
