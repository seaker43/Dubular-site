export const runtime = 'edge';
import { useRouter } from "next/router";
import Link from "next/link";
import Layout from "../../components/Layout";
import VideoPlayer from "../../components/VideoPlayer";
import StreamChat from "../../components/StreamChat";

export async function getStaticPaths() {
  // Pre-render a few demo channels; others can be fallback
  return {
    paths: [
      { params: { channel: "dubular" } },
      { params: { channel: "starplayer" } },
      { params: { channel: "speedrunner" } },
    ],
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  return { props: { channel: params.channel } };
}

export default function StreamPage({ channel }) {
  const router = useRouter();
  const src = typeof router.query.src === "string"
    ? router.query.src
    : "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8";

  return (
    <Layout>
      <main className="stream-page">
        <section>
          <VideoPlayer src={src} muted={false} />
          <div className="player-toolbar">
            <div className="meta">
              <span className="badge">LIVE</span>
              <span className="player-title">@{channel}</span>
              <span>•</span>
              <span>1,024 viewers</span>
            </div>
            <div className="meta">
              <Link className="btn" href="/pools">Join Stream Pool</Link>
              <button className="btn">Follow</button>
              <button className="btn">Subscribe</button>
            </div>
          </div>

          <section className="grid" style={{ marginTop: 16 }}>
            <div className="card">
              <h3>About</h3>
              <p>Welcome to @{channel}! This is a demo stream using HLS playback. Replace the <code>?src=</code> URL parameter with your HLS manifest to test your own stream.</p>
            </div>
            <div className="card">
              <h3>Rewards</h3>
              <p>Earn Dubular Tokens while watching. Tip the streamer using the chat quick buttons.</p>
            </div>
            <div className="card">
              <h3>Leaderboards</h3>
              <p>See top fans & streamers on the <Link href="/leaderboards">leaderboards</Link>.</p>
            </div>
          </section>
        </section>

        <StreamChat channel={channel} />
      </main>
    </Layout>
  );
}
