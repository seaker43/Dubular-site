-- users: site accounts (viewers or creators)
CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  username TEXT UNIQUE NOT NULL,
  created_at INTEGER NOT NULL DEFAULT (strftime('%s','now'))
);

-- creators: channel/creator profile
CREATE TABLE IF NOT EXISTS creators (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  handle TEXT UNIQUE NOT NULL,
  display_name TEXT NOT NULL,
  bio TEXT DEFAULT '',
  thumbnail_url TEXT DEFAULT '',
  created_at INTEGER NOT NULL DEFAULT (strftime('%s','now'))
);

-- streams: individual stream records
CREATE TABLE IF NOT EXISTS streams (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  creator_id INTEGER NOT NULL,
  title TEXT NOT NULL,
  is_live INTEGER NOT NULL DEFAULT 0, -- 0/1
  thumbnail_url TEXT DEFAULT '',
  viewers INTEGER NOT NULL DEFAULT 0,
  started_at INTEGER, -- unix seconds
  FOREIGN KEY (creator_id) REFERENCES creators(id) ON DELETE CASCADE
);

-- follows: user -> creator
CREATE TABLE IF NOT EXISTS follows (
  user_id INTEGER NOT NULL,
  creator_id INTEGER NOT NULL,
  created_at INTEGER NOT NULL DEFAULT (strftime('%s','now')),
  PRIMARY KEY (user_id, creator_id),
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY (creator_id) REFERENCES creators(id) ON DELETE CASCADE
);

-- helpful indexes
CREATE INDEX IF NOT EXISTS idx_streams_live ON streams(is_live, viewers DESC);
CREATE INDEX IF NOT EXISTS idx_creators_handle ON creators(handle);
CREATE INDEX IF NOT EXISTS idx_follows_user ON follows(user_id);
