// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Option A: allow a specific CDN domain
    domains: ["cdn.dubular.live"],

    // Or Option B (modern): remotePatterns (more precise)
    // remotePatterns: [
    //   {
    //     protocol: "https",
    //     hostname: "cdn.dubular.live",
    //     port: "",
    //     pathname: "/**",
    //   },
    // ],
  },
  // If you deploy on CF Pages with next-on-pages, keep other settings as-is
};

module.exports = nextConfig;
