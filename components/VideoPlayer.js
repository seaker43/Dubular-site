import { useEffect, useRef, useState } from "react";
import Hls from "hls.js";

export default function VideoPlayer({
  src,
  poster = "",
  autoPlay = true,
  muted = true,
  controls = true,
}) {
  const videoRef = useRef(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !src) return;

    let hls;
    setError("");

    const isHls = typeof src === "string" && src.endsWith(".m3u8");

    if (isHls && Hls.isSupported()) {
      hls = new Hls({ enableWorker: true, lowLatencyMode: true });
      hls.loadSource(src);
      hls.attachMedia(video);
      hls.on(Hls.Events.ERROR, (_, data) => {
        if (data?.fatal) setError("Stream error. Trying to recover…");
      });
    } else {
      // Native playback path (iOS Safari supports HLS natively)
      video.src = src;
    }

    return () => {
      if (hls) {
        hls.destroy();
      }
    };
  }, [src]);

  return (
    <div className="player-wrap">
      <video
        ref={videoRef}
        className="video-el"
        poster={poster}
        playsInline
        autoPlay={autoPlay}
        muted={muted}
        controls={controls}
      />
      {error ? (
        <div className="player-toolbar" role="alert">
          <span className="badge">Player</span>
          <span>{error}</span>
        </div>
      ) : null}
    </div>
  );
}
