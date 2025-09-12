/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // 👇 Force Babel, never SWC
  swcMinify: false,
  experimental: {
    forceSwcTransforms: false,
  },

  // Ensure images still work
  images: {
    remotePatterns: [{ protocol: "https", hostname: "**" }],
  },
};

module.exports = nextConfig;
