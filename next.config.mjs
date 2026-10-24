/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Free stock photos (Unsplash on Services, Pexels on the Employee portal).
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "images.pexels.com" },
    ],
  },
};
export default nextConfig;
