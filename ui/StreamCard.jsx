import Image from "next/image";

export default function StreamCard({ title, img, live, trending = false, edgeColor = "#22d3ee" }) {
  const ringClass = trending ? "flame-ring" : "neon-ring";
  return (
    <div
      className={["card-shell halo", ringClass, "raised pressable"].join(" ")}
      style={!trending ? { ["--edge"]: edgeColor } : undefined}
    >
      <article className="card-inner ring-1 ring-white/5 relative z-10">
        <div className="relative aspect-[16/9]">
          {live && (
            <span className="absolute top-2 left-2 z-20 bg-red-600 text-xs px-2 py-1 rounded-md">
              LIVE
            </span>
          )}
          <Image src={img} alt={title} fill className="object-cover" sizes="256px" />
        </div>
        <div className="p-3 relative z-10">
          <h3 className="text-cyan-400 font-medium text-sm line-clamp-2">{title}</h3>
        </div>
      </article>
    </div>
  );
}
