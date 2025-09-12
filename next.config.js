// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    runtime: 'experimental-edge', // force everything onto edge runtime
  },
  output: 'standalone', // disables static pre-rendering, avoids /404 & /500 errors
  reactStrictMode: true, // keep strict mode on
  swcMinify: true,       // use SWC for faster minification
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // allow all external image domains
      },
    ],
  },
}

module.exports = nextConfig
