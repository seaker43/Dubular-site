/** @type {import('next').NextConfig} */
const config = {
  webpack: (cfg) => {
    cfg.externals = cfg.externals || [];
    // Prevent Webpack from trying to bundle the virtual module
    if (!cfg.externals.includes('cloudflare:env')) {
      cfg.externals.push('cloudflare:env');
    }
    return cfg;
  },
};

export default config;
