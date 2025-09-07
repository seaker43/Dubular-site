import Link from "next/link";
import CategoryRow from "../components/CategoryRow";

export default function Trending() {
  const items = globalThis.__TRENDING__ || [];
  return (
    <main className="page">
      <h2 className="section-title glow">
        <Link href="/trending">Trending Now</Link>
      </h2>
      <CategoryRow title="Trending Now" items={items} />
    </main>
  );
}
