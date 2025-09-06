import CategoryRow from "../components/CategoryRow";
import BottomBar from "../components/BottomBar";

const trending = [
  { title: "Pixel Art #1", img: "/thumbnails/trending1.jpg", tags: ["art","pixel"], live: true },
  { title: "City Drone", img: "/thumbnails/trending2.jpg", tags: ["drone","city"], live: false },
  { title: "Synthwave Mix", img: "/thumbnails/trending3.jpg", tags: ["music"], live: false },
  { title: "Live Coding", img: "/thumbnails/trending4.jpg", tags: ["dev","js"], live: true },
  { title: "Nature Walks", img: "/thumbnails/trending5.jpg", tags: ["outdoors"], live: false },
];

const mostLiked = [
  { title: "Golden Hour", img: "/thumbnails/trending2.jpg", tags: ["photo"], live: false },
  { title: "Retro Chips", img: "/thumbnails/trending3.jpg", tags: ["music","8bit"], live: false },
  { title: "Dance Party", img: "/thumbnails/trending4.jpg", tags: ["live","dj"], live: true },
];

const biggestGrinders = [
  { title: "Speed Painter", img: "/thumbnails/trending1.jpg", tags: ["art"], live: true },
  { title: "Night Rider", img: "/thumbnails/trending5.jpg", tags: ["ride"], live: false },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0b0f12] to-black">
      <div className="mx-auto max-w-6xl px-4 pb-24">
        <h1 className="sr-only">Dubular</h1>
        <CategoryRow title="Trending Now" items={trending} />
        <CategoryRow title="Most Liked" items={mostLiked} />
        <CategoryRow title="Biggest Grinders" items={biggestGrinders} />
        <div className="h-16" />
      </div>
      <BottomBar />
    </main>
  );
}
