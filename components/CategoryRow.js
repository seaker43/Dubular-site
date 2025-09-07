import Image from "next/image";
import Link from "next/link";

export default function CategoryRow({ title, items = [] }) {
  return (
    <section className="mt-8">
      <h2 className="section-title neon">{title}</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {items.map((item, idx) => (
          <article
            key={`${item.title}-${idx}`}
            className="relative overflow-hidden rounded-2xl bg-[var(--card)] ring-1 ring-slate-800 thumb-glow"
          >
            {/* THUMBNAIL — rectangular, no rounded corners on the image */}
            <div className="relative w-full h-48 sm:h-56 md:h-64">
              <Image
                src={item.img}
                alt={item.title}
                fill
                priority={idx < 4}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover rounded-none"
              />
              {/* Bottom overlay with LIVE + title */}
              <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/75 via-black/25 to-transparent">
                <div className="flex items-end gap-2">
                  {item.live ? <span className="live-pill">LIVE</span> : null}
                  <h3 className="neon text-lg font-semibold drop-shadow">
                    {item.title}
                  </h3>
                </div>
                <p className="mt-1 text-sm text-[var(--muted)]">
                  {Array.isArray(item.tags) ? item.tags.join(" • ") : item.tags}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
