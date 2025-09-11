/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: { ignoreDuringBuilds: true }, // don’t block deploys on lint issues
};
export default nextConfig;
