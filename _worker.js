export default {
  async fetch(request, env, ctx) {
    try {
      const mod = await import("./.open-next/worker.js");
      const worker = mod.default ?? mod;
      return worker.fetch(request, env, ctx);
    } catch (e) {
      return new Response("OpenNext worker not found. Run build.", { status: 503, headers: {"content-type":"text/plain"} });
    }
  }
};
