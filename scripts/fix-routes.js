import fs from "fs";
const p = ".open-next/_routes.json";
const routes = {
  version: 1,
  include: ["/*"],
  exclude: ["/_next/*", "/static/*", "/favicon.ico", "/robots.txt", "/sitemap.xml"]
};
fs.mkdirSync(".open-next", { recursive: true });
fs.writeFileSync(p, JSON.stringify(routes, null, 2));
console.log("✅ ensured", p);
