import worker from "./.open-next/worker/index.mjs";

export default {
  async fetch(request, env, ctx) {
    return worker.fetch(request, env, ctx);
  }
};
