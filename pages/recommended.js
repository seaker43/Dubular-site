// pages/recommended.js
import Link from "next/link";
import CategoryRow from "../components/CategoryRow";

export default function Recommended() {
  const items = globalThis.__RECOMMENDED__ || [];
  return (
    <main className="page">
      <h2 className="section-title glow">
        <Link href="/recommended">Recommended</Link>
      </h2>
      <CategoryRow title="Recommended" items={items} />
    </main>
  );
}
