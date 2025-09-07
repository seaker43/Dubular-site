import Image from "next/image";
import Link from "next/link";

export default function MediaCard({
  href = "#",
  title = "",
  tags = [],
  img,
  live = false,
}) {
  return (
    <Link href={href} className="block">
      <article className="card card-glow p-0 rounded-2xl">
        <div className="thumb h-52 md:h-60">
          {!!img && (
            <Image
              src={img}
              alt={title}
              fill
              sizes="(max-width:768px) 100vw, 50vw"
              className="object-cover"
              priority={false}
            />
          )}

          <div className="thumb-overlay">
            <div className="flex items-center gap-2">
              {live && <span className="live-chip">LIVE</span>}
              <h3 className="neon-text text-xl font-extrabold">{title}</h3>
            </div>
            {tags?.length ? (
              <p className="meta text-sm">{tags.join(" • ")}</p>
            ) : null}
          </div>
        </div>
      </article>
    </Link>
  );
}
