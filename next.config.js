/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/stream/:channel',
        destination: '/streams/:channel',
        permanent: true,
      },
    ];
  },
};
module.exports = nextConfig;
