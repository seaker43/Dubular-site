import worker from '../.open-next/worker/index.mjs';export async function onRequest(c){return worker.fetch(c.request,c.env,{waitUntil:c.waitUntil})}
