-- migrations/0006_follows_use_ids.sql
PRAGMA foreign_keys=off;
BEGIN TRANSACTION;
ALTER TABLE follows RENAME TO follows_old;
CREATE TABLE follows (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  follower_id INTEGER NOT NULL,
  following_id INTEGER NOT NULL,
  created_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%d %H:%M:%f','now')),
  UNIQUE(follower_id, following_id),
  FOREIGN KEY (follower_id) REFERENCES creators(id) ON DELETE CASCADE,
  FOREIGN KEY (following_id) REFERENCES creators(id) ON DELETE CASCADE
);
INSERT INTO follows (follower_id, following_id, created_at)
SELECT f1.id, f2.id, fo.created_at
FROM follows_old fo
JOIN creators f1 ON f1.handle = fo.follower_handle
JOIN creators f2 ON f2.handle = fo.following_handle;
DROP TABLE follows_old;
COMMIT;
PRAGMA foreign_keys=on;
