import Image from "next/image";

export default function StreamCard({ title, img, live=false, flame=false, edgeColor="#18e27a" }) {
  return (
    <article className={`relative ${flame ? "flame" : "edge-frame"}`} style={{"--edge-color": edgeColor}}>
      {live && (
        <span className="absolute top-2 left-2 z-20 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">LIVE</span>
      )}
      <div className="relative aspect-video w-full">
        <Image src={img} alt={title} fill className="object-cover" sizes="(max-width:640px) 92vw, 33vw" priority />
      </div>
      <div className="p-3">
        <h3 className="text-#18e27a-300 font-semibold">{title}</h3>
      </div>
    </article>
  );
}
