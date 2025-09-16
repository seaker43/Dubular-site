export const runtime = "experimental-edge";

export default async function handler(req) {
 const pools = [
 {
 id: "pool-1",
 title: "Nova vs Luma (DJ Battle)",
 pot: 12450,
 status: "upcoming",
 },
 { id: "pool-2", title: "Speedrunner Showdown", pot: 6200, status: "live" },
 ];
 return new Response(JSON.stringify({ pools }), {
 headers: { "content-type": "application/json" },
 });
}
