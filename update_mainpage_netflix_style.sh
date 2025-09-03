#!/data/data/com.termux/files/usr/bin/bash
mkdir -p public && cd public
for i in 1 2 3 4 5; do
  curl -s -o "trending$i.jpg" "https://placehold.co/300x170?text=Thumbnail+$i"
done
cd ..
git add .
