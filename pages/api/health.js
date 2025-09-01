// pages/api/health.js
export default async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");
  return res.status(200).json({
    status: "ok",
    time: new Date().toISOString(),
    region: process.env.CF_REGION || process.env.VERCEL_REGION || "unknown",
    runtime: "Next.js API Route",
  });
}
