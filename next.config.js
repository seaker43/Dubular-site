/** @type {import("next").NextConfig} */
const nextConfig = {
  eslint: { ignoreDuringBuilds: true },
  images: { unoptimized: true },
  experimental: { outputFileTracingRoot: __dirname },
  output: "standalone"
};
module.exports = nextConfig;
