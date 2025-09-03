import Image from "next/image";
export default function StreamCard({ title, img, live }) {
  return (
    <article className="bg-zinc-900 rounded overflow-hidden shadow-lg relative">
      {live && <span className="absolute top-2 left-2 bg-red-600 text-xs px-2 py-1 rounded">LIVE</span>}
      <div className="relative aspect-[16/9]">
        <Image src={img} alt={title} fill className="object-cover" sizes="(max-width:640px) 50vw, (max-width:1024px) 33vw, 20vw" />
      </div>
      <div className="p-2">
        <h3 className="text-cyan-400 font-medium text-sm line-clamp-2">{title}</h3>
      </div>
    </article>
  );
}
