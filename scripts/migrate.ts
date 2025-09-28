// scripts/migrate.ts
import fs from "node:fs";
import path from "node:path";
import { execSync } from "node:child_process";

const root = process.cwd();
const dir = path.join(root, "drizzle", "migrations");
const files = fs.readdirSync(dir)
  .filter(f => f.endsWith(".sql"))
  .sort((a, b) => a.localeCompare(b));

const target = (process.env.DB_TARGET ?? "d1").toLowerCase();

function sh(cmd: string) {
  console.log(`$ ${cmd}`);
  execSync(cmd, { stdio: "inherit" });
}

async function runD1() {
  const dbName = process.env.D1_DATABASE || process.env.D1_DB_NAME || "dubular_db";
  for (const f of files) {
    const filePath = path.join(dir, f);
    console.log(`Applying D1: ${f}`);
    sh(`npx wrangler d1 execute ${dbName} --remote --yes --file ${JSON.stringify(filePath)}`);
  }
  console.log("✅ D1 migrations applied.");
}

async function runPg() {
  const url = process.env.DATABASE_URL;
  if (!url) throw new Error("DATABASE_URL is required for PG migrations");
  const { Client } = require("pg") as typeof import("pg");
  const client = new Client({ connectionString: url, ssl: { rejectUnauthorized: false } });
  await client.connect();
  try {
    for (const f of files) {
      const sql = fs.readFileSync(path.join(dir, f), "utf8");
      console.log(`Applying PG: ${f}`);
      await client.query(sql);
    }
  } finally {
    await client.end();
  }
  console.log("✅ PG migrations applied.");
}

(async () => {
  if (files.length === 0) {
    console.log("No migrations found in drizzle/migrations");
    return;
  }
  if (target === "d1") {
    await runD1();
  } else if (target === "pg" || target === "postgres") {
    await runPg();
  } else {
    throw new Error(`Unknown DB_TARGET "${target}" (use "d1" or "pg")`);
  }
})();
