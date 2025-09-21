// _worker.js — Cloudflare Pages Functions entrypoint
import { createHandler } from "open-next/server";

export default {
  async fetch(request, env, ctx) {
    const handler = createHandler();
    return handler(request, env, ctx);
  },
};
