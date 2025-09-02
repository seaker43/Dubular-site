/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "images.unsplash.com",
      "source.unsplash.com",
      "i.imgur.com",
      "cdn.dubular.live" // add your CDN if you have one
    ],
  },
  experimental: {
    runtime: "experimental-edge",
  },
};
module.exports = nextConfig;
