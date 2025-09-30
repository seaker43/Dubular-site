-- Drop old follows table
DROP TABLE IF EXISTS follows;

-- Create new follows table using IDs
CREATE TABLE follows (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  follower_id INTEGER NOT NULL,
  following_id INTEGER NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY(follower_id) REFERENCES creators(id),
  FOREIGN KEY(following_id) REFERENCES creators(id)
);

-- Seed sample follows (IDs resolved dynamically)
INSERT INTO follows (follower_id, following_id)
SELECT c1.id, c2.id FROM creators c1, creators c2
WHERE c1.handle='alice' AND c2.handle='bob'
ON CONFLICT DO NOTHING;

INSERT INTO follows (follower_id, following_id)
SELECT c1.id, c2.id FROM creators c1, creators c2
WHERE c1.handle='bob' AND c2.handle='carol'
ON CONFLICT DO NOTHING;
