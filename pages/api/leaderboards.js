import React from "react";
export const runtime = "edge";

export default async function handler(req) {
  const data = {
    streamers: [
      { name: "DJ Nova", tokens: 58230, wins: 12 },
      { name: "LumaBeats", tokens: 54110, wins: 10 },
    ],
    viewers: [
      { name: "crypt0fan", earned: 9200, streak: 14 },
      { name: "viewerX", earned: 8800, streak: 11 },
    ],
  };
  return new Response(JSON.stringify(data), {
    headers: { "content-type": "application/json" },
  });
}
