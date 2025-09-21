import worker from './.open-next/worker/index.mjs';\n\nexport default {\n  async fetch(request, env, ctx) {\n    return worker.fetch(request, env, ctx);\n  }\n};
