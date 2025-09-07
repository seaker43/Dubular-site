/** Final next.config.js (no optimizeCss; CF friendly) */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: '**' },
      { protocol: 'http',  hostname: '**' }
    ],
    formats: ['image/avif','image/webp']
  }
};
module.exports = nextConfig;
