// Runtime DB switcher for Cloudflare Pages/Workers + Next.js app router
import { drizzle as drizzleD1 } from "drizzle-orm/d1";
import { drizzle as drizzleNeon } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import type { DrizzleD1Database } from "drizzle-orm/d1";
import type { NeonHttpDatabase } from "drizzle-orm/neon-http";
import { users_pg, users_sqlite, follows_pg, follows_sqlite } from "@/drizzle/schema";

type DBAny = DrizzleD1Database | NeonHttpDatabase<any>;
const target = (process.env.DB_TARGET ?? "d1") as "d1" | "pg";

export const tables = target === "pg"
  ? { users: users_pg, follows: follows_pg }
  : { users: users_sqlite, follows: follows_sqlite };

export function getDb(env: any): DBAny {
  if (target === "pg") {
    const sql = neon(process.env.DATABASE_URL!); // prefer Hyperdrive URL on CF
    return drizzleNeon(sql);
  }
  return drizzleD1(env.D1 as D1Database); // D1 binding name: D1
}
