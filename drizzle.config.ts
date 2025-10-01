import type { Config } from "drizzle-kit";
const target = (process.env.DB_TARGET ?? "d1") as "d1" | "pg";
export default {
  schema: "./drizzle/schema.ts",
  out: "./drizzle/migrations",
  dialect: target === "pg" ? "postgresql" : "sqlite",
  dbCredentials:
    target === "pg"
      ? { url: process.env.DATABASE_URL! }
      : { url: "file:local.sqlite" },
} satisfies Config;
