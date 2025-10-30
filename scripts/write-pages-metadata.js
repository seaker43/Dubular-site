const fs = require("fs");
const path = require("path");

(function () {
  const out = path.join(process.cwd(), ".open-next");
  fs.mkdirSync(out, { recursive: true });

  // Write Pages metadata with D1 binding
  const pagesMeta = {
    bindings: [
      {
        name: "DB",
        type: "d1",
        id: process.env.CF_D1_DB_ID || "e26195c7-2b3b-4804-9c78-298daf52dda9",
      },
    ],
  };
  fs.writeFileSync(
    path.join(out, "pages.json"),
    JSON.stringify(pagesMeta, null, 2)
  );
  console.log("✅ Wrote pages.json with D1 binding");

  // Write Cloudflare Pages routes file
  const routes = {
    version: 1,
    include: ["/*"],
    exclude: [
      "/_next/static/*",
      "/_next/image/*",
      "/favicon.ico",
      "/robots.txt",
      "/sitemap.xml",
    ],
  };
  fs.writeFileSync(
    path.join(out, "_routes.json"),
    JSON.stringify(routes, null, 2)
  );
  console.log("✅ Wrote _routes.json (catch-all to Worker)");
})();
