import worker from "./.open-next/server-functions/default/index.js";

export default {
  async fetch(request, env, ctx) {
    return worker.fetch(request, env, ctx);
  },
};
