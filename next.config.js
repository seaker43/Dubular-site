/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
<<<<<<< HEAD

  // 👇 Force Babel, never SWC
  swcMinify: false,
  experimental: {
    forceSwcTransforms: false,
  },

  // Ensure images still work
  images: {
    remotePatterns: [{ protocol: "https", hostname: "**" }],
  },
=======
  swcMinify: false,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "**" }
    ]
  }
>>>>>>> 3626b3f6 (fix: next.config.js + Termux dev setup)
};
module.exports = nextConfig;
