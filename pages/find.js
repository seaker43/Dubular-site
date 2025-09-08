// pages/find.js
import Layout from "@components/Layout";
import MediaLoopRow from "@components/MediaLoopRow";
import SearchBar from "@components/SearchBar";

export default function Find() {
  const trending = [
    { id: 1, title: "LoFi #1", image: "/thumbnails/trending1.jpg", color: "pink" },
    { id: 2, title: "LoFi #2", image: "/thumbnails/trending2.jpg", color: "blue" },
    { id: 3, title: "Live Synthwave", image: "/thumbnails/trending1.jpg", color: "red" },
    { id: 4, title: "Vibes", image: "/thumbnails/trending2.jpg", color: "pink" },
    { id: 5, title: "Chillhop", image: "/thumbnails/trending1.jpg", color: "blue" },
  ];

  const art = [
    { id: 6, title: "Art Drop", image: "/thumbnails/trending1.jpg", color: "pink" },
    { id: 7, title: "Sketches", image: "/thumbnails/trending2.jpg", color: "blue" },
    { id: 8, title: "Neon Frames", image: "/thumbnails/trending1.jpg", color: "pink" },
    { id: 9, title: "Poster Lab", image: "/thumbnails/trending2.jpg", color: "blue" },
  ];

  const indie = [
    { id: 10, title: "Indie Doc", image: "/thumbnails/trending1.jpg", color: "blue" },
    { id: 11, title: "Creator Spotlight", image: "/thumbnails/trending2.jpg", color: "pink" },
    { id: 12, title: "Live Talk", image: "/thumbnails/trending1.jpg", color: "red" },
    { id: 13, title: "Field Notes", image: "/thumbnails/trending2.jpg", color: "blue" },
  ];

  return (
    <Layout title="Find">
      <div className="space-y-6">
        <div className="px-4 md:px-6">
          <SearchBar placeholder="Search titles..." />
        </div>

        <MediaLoopRow title="Trending" items={trending} />
        <MediaLoopRow title="Art" items={art} />
        <MediaLoopRow title="Independent Media" items={indie} />
      </div>
    </Layout>
  );
}
