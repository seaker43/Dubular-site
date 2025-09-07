/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  images: {
    // Remote domains for thumbnails
    domains: [
      "picsum.photos",   // your current seeded demo images
      "images.unsplash.com", // optional, in case you use Unsplash later
      "cdn.dubular.live" // optional, your own CDN if you add one
    ],
    formats: ["image/avif", "image/webp"], // smaller/faster
  },

  experimental: {
    optimizeCss: true, // tailwind builds faster
  },
};

module.exports = nextConfig;
