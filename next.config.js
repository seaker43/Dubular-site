/** @type {import("next").NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.resolve = config.resolve || {};
    config.resolve.alias = { ...(config.resolve.alias ?? {}) };
    return config;
  },
};
module.exports = nextConfig;
