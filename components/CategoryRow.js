export default function CategoryRow({ title, items }) {
</div>
  return (
</div>
    <section className="mb-8">
</div>
      <h2 className="mb-3 text-2xl font-bold text-emerald-300">{title}</h2>
</div>
      <div className="flex snap-x gap-4 overflow-x-auto pb-3">
</div>
        {items.map((it, idx) => (
</div>
          <a
</div>
            key={idx}
</div>
            href="#"
</div>
            className="group active:scale-[.98] relative w-64 flex-shrink-0 snap-start overflow-hidden rounded-lg bg-neutral-900 ring-1 ring-neutral-800 hover:scale-[1.03] hover:ring-emerald-400/60 transition-all duration-300"
</div>
          >
</div>
            <img
</div>
              src={it.img}
</div>
              alt={it.title || "thumbnail"}
</div>
              loading="lazy"
</div>
              className="h-36 w-full object-cover"
</div>
            />
</div>
            <div className="p-3">
</div>
              <div className="flex items-center gap-2">
</div>
                {it.live && (
</div>
                  <span className="inline-flex items-center rounded px-1.5 py-0.5 text-[11px] font-bold bg-emerald-500/15 text-emerald-300 ring-1 ring-emerald-400/40 shadow-[0_0_6px_#34d399,0_0_12px_#34d399] shadow-[0_0_6px_#34d399,0_0_12px_#34d399]">
</div>
                    LIVE
</div>
                  </span>
</div>
                )}
</div>
                <span className="text-lg font-semibold leading-tight text-gray-100 group-hover:text-emerald-300 transition-colors">
</div>
                  {it.title}
</div>
                </span>
</div>
              </div>
</div>
              {it.tags && it.tags.length > 0 && (
</div>
                <p className="mt-1 text-sm text-gray-400">
</div>
                  {it.tags.join(" • ")}
</div>
                </p>
</div>
              )}
</div>
            </div>
</div>
          </a>
</div>
        ))}
</div>
      </div>
</div>
    </section>
</div>
  );
</div>
}
</div>
