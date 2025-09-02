export const runtime = 'experimental-edge';
export const dynamic = 'force-dynamic';
export const revalidate = 0;

import CategoryRow from "../components/home/CategoryRow";
import BottomBar from "../components/home/BottomBar";

export default function Home() {
  return (
    <div className="pb-20">
      <CategoryRow
        title="Trending Now"
        items={[
          { href: "/stream/dubular", title: "Dubular Live", thumb: "/thumbs/sample1.jpg", live: true },
          { href: "/stream/starplayer", title: "Star Player", thumb: "/thumbs/sample2.jpg" },
        ]}
      />
      <CategoryRow
        title="Esports"
        items={[
          { href: "/stream/speedrunner", title: "Speedrunner", thumb: "/thumbs/sample3.jpg" },
          { href: "/stream/progamer", title: "Pro Gamer", thumb: "/thumbs/sample4.jpg" },
        ]}
      />
      <BottomBar />
    </div>
  );
}
