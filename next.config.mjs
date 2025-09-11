/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: { unoptimized: true },        // good for CF Pages / next-on-pages
  eslint: { ignoreDuringBuilds: true }, // silence ESLint during CF build
  experimental: {
  }
};
export default nextConfig;
