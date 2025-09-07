// pages/favs.js
import Link from "next/link";
import CategoryRow from "../components/CategoryRow";

export default function FavsPage() {
  const items = Array.from({ length: 8 }, (_, i) => ({
    title: `Favorite #${i + 1}`,
    tags: ["favorites"],
    img: `https://picsum.photos/seed/fav-${i + 1}/800/450`,
    live: i % 4 === 0,
  }));

  return (
    <main className="page">
      <h2 className="section-title glow">
        <Link href="/favs">Favs</Link>
      </h2>
      <CategoryRow title="Your Favorites" items={items} />
    </main>
  );
}
