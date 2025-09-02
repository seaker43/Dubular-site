export const runtime = 'experimental-edge';

import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import VideoPlayer from "../../components/VideoPlayer";
import StreamChat from "../../components/StreamChat";

const CHANNELS = {
  dubular: {
    title: "Dubular",
    // Demo HLS sources; replace with your own later
    hls: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
    poster: "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  starplayer: {
    title: "Star Player",
    hls: "https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8",
    poster: "https://images.pexels.com/photos/2816168/pexels-photo-2816168.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  speedrunner: {
    title: "Speed Runner",
    hls: "https://moqthon.bitmovin.com/hls/playlist.m3u8",
    poster: "https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
};

export default function ChannelPage() {
  const router = useRouter();
  const { channel } = router.query;
  const info = CHANNELS[String(channel || "").toLowerCase()];

  if (!info) {
    return (
      <Layout title="Stream not found">
        <h1>Stream not found</h1>
        <p>The channel “{channel}” does not exist.</p>
      </Layout>
    );
  }

  return (
    <Layout title={info.title}>
      <div className="stream-grid">
        <div className="stream-main">
          <VideoPlayer src={info.hls} poster={info.poster} />
          <h2 className="stream-title">{info.title}</h2>
        </div>
        <div className="stream-side">
          <StreamChat channel={String(channel)} />
        </div>
      </div>
    </Layout>
  );
}

// Pre-render a few demo channels
export async function getStaticPaths() {
  return {
    paths: Object.keys(CHANNELS).map((slug) => ({ params: { channel: slug } })),
    fallback: "blocking",
  };
}

export async function getStaticProps() {
  return { props: {} , revalidate: 60 };
}
