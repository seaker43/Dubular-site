/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // No static export here:
  // output: 'export',
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
};

module.exports = nextConfig;
