import fs from "fs";
import path from "path";

const methods = ["GET", "POST", "PUT", "PATCH", "DELETE"];
const apiDir = "app/api";

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true })
    .flatMap(e => {
      const p = path.join(dir, e.name);
      return e.isDirectory() ? walk(p) : p;
    })
    .filter(p => p.includes("/api/") && p.endsWith("route.ts"));
}

const files = walk(apiDir);
for (const f of files) {
  let s = fs.readFileSync(f, "utf8");

  // remove top-level import of cloudflare:env
  s = s.replace(/\n?import\s*{?\s*env\s*}?\s*from\s*["']cloudflare:env["'];?/g, "\n");

  // insert lazy import inside each HTTP handler
  for (const m of methods) {
    const re = new RegExp(`export\\s+async\\s+function\\s+${m}\\s*\\([^)]*\\)\\s*{`);
    s = s.replace(re, match => `${match}\n  const { env } = await import("cloudflare:env");`);
  }

  fs.writeFileSync(f, s);
  console.log("patched", f);
}
