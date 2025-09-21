// _worker.js
// Cloudflare Pages entrypoint — route all requests into OpenNext
import { createHandler } from "open-next/server";

export default {
  async fetch(request, env, ctx) {
    const handler = createHandler();
    return handler(request, env, ctx);
  },
};
