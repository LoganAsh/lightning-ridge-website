/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Stock photos served from Unsplash (used on the Employee portal).
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
  },
};
export default nextConfig;
