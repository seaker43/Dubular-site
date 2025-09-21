// Use the worker that OpenNext generates during the build.
// This file exists after `npx open-next build --target cloudflare`.
import worker from "./.open-next/worker.js";
export default worker;
