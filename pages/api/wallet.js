export const runtime = "edge";

export default async function handler(req) {
  const wallet = { balance: 15420 };
  return new Response(JSON.stringify(wallet), { headers: { "content-type": "application/json" } });
}
