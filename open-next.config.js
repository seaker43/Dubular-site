/**
 * OpenNext configuration for Cloudflare Pages
 * Ensures _routes.json and server functions are generated
 */
module.exports = {
  default: true,
  outDir: ".open-next",
  platform: "cloudflare",
  routes: true,
  functions: {
    default: {
      type: "fetch",
      entry: "server-functions/default/index.js"
    }
  }
};
