import { useEffect, useRef } from"react";

export default function VideoPlayer({
 src,
 poster,
 autoPlay = true,
 muted = true,
}) {
 const videoRef = useRef(null);

 useEffect(() => {
 const video = videoRef.current;
 if (!video || !src) return;

 const isM3U8 = src.endsWith(".m3u8") || src.includes(".m3u8");

 if (!isM3U8) {
 video.src = src;
 return;
 }

 async function setup() {
 const isNative = video.canPlayType("application/vnd.apple.mpegurl");
 if (isNative) {
 video.src = src;
 return;
 }
 const Hls = (await import("hls.js")).default;
 if (Hls.isSupported()) {
 const hls = new Hls({ enableWorker: true });
 hls.loadSource(src);
 hls.attachMedia(video);
 } else {
 console.warn("HLS not supported in this browser.");
 }
 }
 setup();
 }, [src]);

 return (
 <div className="stream-player">
 <video
 ref={videoRef}
 className="stream-video"
 controls
 playsInline
 muted={muted}
 autoPlay={autoPlay}
 poster={poster}
 />
 </div>
 );
}
