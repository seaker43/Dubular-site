// pages/find.js
import Layout from "@components/Layout";
import MediaRow from "@components/MediaRow";
import SearchBar from "@components/SearchBar";

export default function Find() {
  const trending = [
    { id: 1, title: "LoFi #1", image: "/thumbnails/trending1.jpg", color: "pink" },
    { id: 2, title: "LoFi #2", image: "/thumbnails/trending2.jpg", color: "blue" },
    { id: 3, title: "Live Synthwave", image: "/thumbnails/trending1.jpg", color: "red" }, // LIVE
  ];

  const art = [
    { id: 4, title: "Art Drop", image: "/thumbnails/trending1.jpg", color: "pink" },
    { id: 5, title: "Sketches", image: "/thumbnails/trending2.jpg", color: "blue" },
  ];

  const indie = [
    { id: 6, title: "Indie Doc", image: "/thumbnails/trending1.jpg", color: "blue" },
    { id: 7, title: "Creator Spotlight", image: "/thumbnails/trending2.jpg", color: "pink" },
  ];

  return (
    <Layout title="Find">
      <div className="px-4 md:px-6 space-y-6">
        <SearchBar placeholder="Search titles..." />
        <MediaRow title="Trending" items={trending} href="/trending" />
        <MediaRow title="Art" items={art} href="/art" />
        <MediaRow title="Independent Media" items={indie} href="/indie" />
      </div>
    </Layout>
  );
}
