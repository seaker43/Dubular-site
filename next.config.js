// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // prevent Next from forcing static 404/500 generation
  output: 'standalone',

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // allow all external image domains
      },
    ],
    unoptimized: true, // skip Image Optimization (Cloudflare handles it)
  },

  eslint: {
    ignoreDuringBuilds: true, // don’t block build on lint errors
  },
  typescript: {
    ignoreBuildErrors: true, // don’t block build on TS errors
  },
};

module.exports = nextConfig;
