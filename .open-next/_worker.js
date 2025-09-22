// Wrap OpenNext handler so CF Pages sees a Worker with fetch
import * as mod from "./server-functions/default/index.mjs";

let worker;
if (mod.handler) {
  worker = mod.handler;
} else if (mod.default) {
  worker = mod.default;
} else if (mod.fetch) {
  worker = { fetch: mod.fetch };
}

export default worker ?? {
  async fetch() {
    return new Response("OpenNext handler not found.", { status: 500 });
  }
};
