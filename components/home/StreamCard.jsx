import Link from "next/link";

export default function StreamCard({ href="#", title="Untitled", thumb="/thumbs/sample1.jpg", live=false }) {
  return (
    <Link href={href} className="block w-[56vw] max-w-[240px] shrink-0">
      <div className="relative rounded-xl overflow-hidden">
        <div className="absolute inset-0 rounded-xl" style={{
          boxShadow: "0 0 30px rgba(0, 230, 255, .12)"
        }}/>
        <img
          src={thumb}
          alt={title}
          className="h-[32vw] max-h-[135px] w-full object-cover rounded-xl"
          style={{ background:"linear-gradient(135deg,#0b1218,#0e171f)" }}
          loading="lazy"
        />
        {live && (
          <span
            className="absolute top-2 left-2 text-[10px] px-2 py-[2px] rounded-full"
            style={{
              background:"#ff2d55",
              color:"white",
              boxShadow:"0 0 10px rgba(255,45,85,.4)"
            }}
          >
            LIVE
          </span>
        )}
      </div>
      <div className="mt-1.5 text-[12.5px] leading-tight line-clamp-2 opacity-90">{title}</div>
    </Link>
  );
}
