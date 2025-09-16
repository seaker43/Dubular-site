export const runtime = "edge";

export default async function handler(req, res) {
 // Minimal health check for Cloudflare Pages
 res.status(200).json({ ok: true, ts: new Date().toISOString() });
}
