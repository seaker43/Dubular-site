import CategoryRow from "../components/home/CategoryRow";
import BottomBar from "../components/home/BottomBar";

export default function Home() {
  return (
    <>
      {/* main content (space at bottom so fixed bar doesn’t overlap) */}
      <main style={{ paddingBottom: 90 }}>
        <CategoryRow title="Trending Now" />
        <CategoryRow title="Esports" />
        <CategoryRow title="Mobile Streams" />
      </main>

      {/* fixed shortcut bar */}
      <BottomBar />
    </>
  );
}
