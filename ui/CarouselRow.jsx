import Link from "next/link";

function toHref(title){
  const t = (title||"").toLowerCase();
  if (t.includes("trending")) return "/trending";
  if (t.includes("fav")) return "/favs";
  if (t.includes("recommend")) return "/recommended";
  return "#";
}

export default function CarouselRow({ title, items = [] }) {
  return (
    <section className="section">
      <div className="section-head">
        <Link href={toHref(title)} className="section-title">{title}</Link>
        <div className="section-underline" />
      </div>

      <div className="h-scroll" role="list">
        {items.map((it, i) => (
          <article className="card" role="listitem" key={it.id || i}>
            <div
              className="thumb"
              style={{ backgroundImage: `url(${it.image})` }}
              aria-label={it.title}
            >
              {it.live && <span className="pill">LIVE</span>}
            </div>
            <div className="card_meta">
              <h3 className="card_title">{it.title}</h3>
              {it.tags?.length ? (
                <div className="card_sub">{it.tags.join(" • ")}</div>
              ) : it.genre ? (
                <div className="card_sub">{it.genre}</div>
              ) : null}
            </div>
          </article>
        ))}

        {/* graceful empty & skeletons */}
        {!items.length && Array.from({ length: 4 }).map((_, i) => (
          <div className="card skeleton" key={`s-${i}`}>
            <div className="thumb" />
            <div className="card_meta">
              <div className="sk-line w1" />
              <div className="sk-line w2" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
