// pages/find.js
import Layout from "@components/Layout";
import SearchBar from "@components/SearchBar";
import MediaLoopRow from "@components/MediaLoopRow";

export default function Find() {
  // You can swap these images for category-specific art later
  const trending = [
    { id: 1,  title: "LoFi #1",         image: "/thumbnails/trending1.jpg", color: "pink" },
    { id: 2,  title: "LoFi #2",         image: "/thumbnails/trending2.jpg", color: "blue" },
    { id: 3,  title: "Live Synthwave",  image: "/thumbnails/trending1.jpg", color: "red"  }, // LIVE
    { id: 4,  title: "Vibes",           image: "/thumbnails/trending2.jpg", color: "pink" },
    { id: 5,  title: "Chillhop",        image: "/thumbnails/trending1.jpg", color: "blue" },
    { id: 6,  title: "Night Drive",     image: "/thumbnails/trending2.jpg", color: "pink" },
  ];

  const art = [
    { id: 7,  title: "Art Drop",        image: "/thumbnails/trending1.jpg", color: "pink" },
    { id: 8,  title: "Sketches",        image: "/thumbnails/trending2.jpg", color: "blue" },
    { id: 9,  title: "Neon Frames",     image: "/thumbnails/trending1.jpg", color: "pink" },
    { id: 10, title: "Poster Lab",      image: "/thumbnails/trending2.jpg", color: "blue" },
    { id: 11, title: "Palette Play",    image: "/thumbnails/trending1.jpg", color: "pink" },
    { id: 12, title: "Live Gallery",    image: "/thumbnails/trending2.jpg", color: "red"  }, // LIVE
  ];

  const indie = [
    { id: 13, title: "Indie Doc",       image: "/thumbnails/trending1.jpg", color: "blue" },
    { id: 14, title: "Creator Spotlight", image: "/thumbnails/trending2.jpg", color: "pink" },
    { id: 15, title: "Field Notes",     image: "/thumbnails/trending1.jpg", color: "blue" },
    { id: 16, title: "Micro Series",    image: "/thumbnails/trending2.jpg", color: "pink" },
    { id: 17, title: "Live Talk",       image: "/thumbnails/trending1.jpg", color: "red"  }, // LIVE
    { id: 18, title: "Studio Tour",     image: "/thumbnails/trending2.jpg", color: "blue" },
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
