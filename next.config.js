const path = require('path')

module.exports = {
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}), // keep Next defaults
      '@': path.resolve(__dirname),   // your custom alias
    }
    return config
  },
}
