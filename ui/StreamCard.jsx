import Image from "next/image";

export default function StreamCard({ title, img, live, edgeColor, trending = false }) {
  return (
    <article
      className={[
        "bg-zinc-900/80 rounded-xl overflow-hidden ring-1 ring-white/5 transition relative raised",
        trending ? "flame-ring" : "",
        edgeColor ? "edge-light" : "",
      ].join(" ")}
      style={edgeColor ? { ["--edge"]: edgeColor } : undefined}
    >
      <div className="relative aspect-[16/9]">
        {live && (
          <span className="absolute top-2 left-2 z-10 bg-red-600 text-xs px-2 py-1 rounded-md">
            LIVE
          </span>
        )}
        <Image src={img} alt={title} fill className="object-cover" sizes="256px" />
      </div>
      <div className="p-3">
        <h3 className="text-cyan-400 font-medium text-sm line-clamp-2">{title}</h3>
      </div>
    </article>
  );
}
