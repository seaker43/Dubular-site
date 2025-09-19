import worker from "./.open-next/worker.js";
export default { fetch(request, env, ctx) { return worker.fetch(request, env, ctx); } };
