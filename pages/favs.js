<<<<<<< HEAD
import CategoryRow from "../components/CategoryRow";

export default function FavsPage() {
  const favs = Array.from({ length: 8 }, (_, i) => ({
    title: `Favorite #${i + 1}`,
    img: `https://picsum.photos/seed/fav-${i + 1}/800/450`,
    tags: ["favorites"],
    live: i % 4 === 0,
  }));
=======
import CarouselRow from "../components/CategoryRow";
>>>>>>> 63785215 (fix(pages): replace ../components/CategoryRow with components/CategoryRow everywhere)

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0b0f12] to-black">
      <div className="mx-auto max-w-6xl px-4 pb-20">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white my-6">
          Favorites
        </h1>
        <CategoryRow title="Your Favorites" items={favs} />
      </div>
    </main>
  );
}
