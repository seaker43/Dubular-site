/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "images.unsplash.com",
      "source.unsplash.com",
      "i.imgur.com",
      "cdn.dubular.live"
    ]
  }
};
module.exports = nextConfig;
