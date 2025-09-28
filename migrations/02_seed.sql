INSERT OR IGNORE INTO users (username) VALUES ('alice'),('bob'),('charlie');

INSERT OR IGNORE INTO creators (handle, display_name, bio, thumbnail_url) VALUES
 ('creatorA','Creator A','Variety streamer','/images/seed/creatorA.jpg'),
 ('creatorB','Creator B','FPS and esports','/images/seed/creatorB.jpg'),
 ('creatorC','Creator C','IRL + music','/images/seed/creatorC.jpg');

-- simple streams (two live)
INSERT INTO streams (creator_id, title, is_live, thumbnail_url, viewers, started_at)
SELECT id, 'Late Night Grind', 1, '/images/seed/streamA.jpg', 1243, strftime('%s','now')-3600 FROM creators WHERE handle='creatorA';
INSERT INTO streams (creator_id, title, is_live, thumbnail_url, viewers, started_at)
SELECT id, 'Ranked Ladder Push', 1, '/images/seed/streamB.jpg', 823, strftime('%s','now')-1800 FROM creators WHERE handle='creatorB';
INSERT INTO streams (creator_id, title, is_live, thumbnail_url, viewers, started_at)
SELECT id, 'Weekend Recap (VOD)', 0, '/images/seed/streamC.jpg', 0, NULL FROM creators WHERE handle='creatorC';

-- follows so /api/follow has data to show
INSERT OR IGNORE INTO follows (user_id, creator_id)
SELECT u.id, c.id
FROM users u
JOIN creators c ON c.handle IN ('creatorA','creatorB')
WHERE u.username IN ('alice','bob');
