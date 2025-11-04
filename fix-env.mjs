import fs from "fs";
import path from "path";

const apiDir = "app/api";
const methods = ["GET","POST","PUT","PATCH","DELETE"];

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true })
    .flatMap(e => {
      const p = path.join(dir, e.name);
      return e.isDirectory() ? walk(p) : p;
    })
    .filter(p => p.includes(`${path.sep}api${path.sep}`) && p.endsWith("route.ts"));
}

const files = walk(apiDir);
for (const f of files) {
  let s = fs.readFileSync(f, "utf8");

  // 1) remove any static import and any previously injected lazy import
  s = s
    .replace(/\n?import\s*{?\s*env\s*}?\s*from\s*["']cloudflare:env["'];?\s*/g, "\n")
    .replace(/\s*const\s*\{\s*env\s*\}\s*=\s*await\s*import\(["']cloudflare:env["']\);\s*/g, "\n");

  // 2) inject exactly one lazy import at the top of each exported HTTP handler
  for (const m of methods) {
    const re = new RegExp(`export\\s+async\\s+function\\s+${m}\\s*\\([^)]*\\)\\s*{`);
    s = s.replace(re, (hdr) => `${hdr}\n  const { env } = await import("cloudflare:env");`);
  }

  fs.writeFileSync(f, s);
  console.log("fixed", f);
}
