import React from "react";
export const runtime = "experimental-edge";
export const dynamic = "force-dynamic";
export const revalidate = 0;

import { useRouter } from "next/router";
import Layout from "../../components/Layout";

export default function ChannelStream() {
  const router = useRouter();
  const { channel } = router.query;

  if (!channel) {
    return <div className="text-center text-white">Loading stream…</div>;
  }

  return (
    <Layout>
      <div className="py-4 text-white">
        <h1 className="text-2xl font-bold mb-4">{channel}’s Stream</h1>
        <video
          controls
          autoPlay
          muted
          className="w-full rounded-lg border border-#18e27a-500"
        >
          <source
            src={`/streams/${channel}.m3u8`}
            type="application/x-mpegURL"
          />
          Your browser does not support HLS streaming.
        </video>
      </div>
    </Layout>
  );
}
