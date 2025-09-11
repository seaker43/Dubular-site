/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: { unoptimized: true },        // good for CF Pages / next-on-pages
  eslint: { ignoreDuringBuilds: true }, // silence ESLint during CF build
  experimental: {
    instrumentationHook: false          // avoid accidental double exports via instrumentation
  }
};
export default nextConfig;
