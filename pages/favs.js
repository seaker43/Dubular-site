import Link from "next/link";
import CategoryRow from "../components/CategoryRow";

export default function Favs() {
  const items = globalThis.__FAVS__ || [];
  return (
    <main className="page">
      <h2 className="section-title glow">
        <Link href="/favs">Favorites</Link>
      </h2>
      <CategoryRow title="Favorites" items={items} />
    </main>
  );
}
