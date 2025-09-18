/**
 * Cloudflare Pages shim: forward every request to the OpenNext worker
 * produced in `.vercel/output/_worker.js`.
 */
export { default } from "../.vercel/output/_worker.js";
