/** @type {import("next").NextConfig} */
const nextConfig = {
  output: "standalone",
  images: { unoptimized: true },
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  // moved out of "experimental"
  outputFileTracingRoot: __dirname,
  webpack: (config) => {
    config.resolve = config.resolve || {};
    config.resolve.alias = { ...(config.resolve.alias ?? {}) };
    return config;
  },
};
module.exports = nextConfig;
