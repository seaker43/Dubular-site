/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Turn off SWC entirely (use Babel + Terser instead)
  swcMinify: false,
  experimental: {
    swcLoader: false,
    swcMinify: false,
  },

  images: {
    remotePatterns: [{ protocol: "https", hostname: "**" }],
  },
};

module.exports = nextConfig;
