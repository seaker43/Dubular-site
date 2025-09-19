export default {
  async fetch(request, env, ctx) {
    return new Response("Booting…", { status: 200, headers: { "content-type": "text/plain" } });
  }
};
