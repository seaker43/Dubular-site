import { sql } from "drizzle-orm";
import {
  pgTable,
  serial,
  varchar,
  integer,
  timestamp,
  uniqueIndex,
} from "drizzle-orm/pg-core";
import {
  sqliteTable,
  integer as sInt,
  text as sText,
} from "drizzle-orm/sqlite-core";

export const users_pg = pgTable(
  "users",
  {
    id: serial("id").primaryKey(),
    handle: varchar("handle", { length: 50 }).notNull(),
    displayName: varchar("display_name", { length: 120 }),
    createdAt: timestamp("created_at", { withTimezone: false })
      .defaultNow()
      .notNull(),
  },
  (t) => ({ handleIdx: uniqueIndex("users_handle_idx").on(t.handle) }),
);

export const users_sqlite = sqliteTable("users", {
  id: sInt("id").primaryKey({ autoIncrement: true }),
  handle: sText("handle").notNull(),
  displayName: sText("display_name"),
  createdAt: sText("created_at")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
});

export const follows_pg = pgTable("follows", {
  id: serial("id").primaryKey(),
  followerId: integer("follower_id").notNull(),
  creatorId: integer("creator_id").notNull(),
  createdAt: timestamp("created_at", { withTimezone: false })
    .defaultNow()
    .notNull(),
});

export const follows_sqlite = sqliteTable("follows", {
  id: sInt("id").primaryKey({ autoIncrement: true }),
  followerId: sInt("follower_id").notNull(),
  creatorId: sInt("creator_id").notNull(),
  createdAt: sText("created_at")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
});
