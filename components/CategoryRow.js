export default function CategoryRow({ title, items }) {
  return (
    <section className="mb-7">
      <h2 className="text-2xl font-extrabold mb-3 text-white drop-shadow-[0_0_10px_rgba(24,226,122,.45)]">{title}</h2>
      <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory px-1 pb-2 [-webkit-overflow-scrolling:touch]">
        {items.map(function (it, idx) {
          return (
            <a key={idx} href="#" className="snap-start min-w-[72vw] sm:min-w-[260px] bg-[#071612] border border-[rgba(24,226,122,.18)] rounded-xl shadow-[0_0_18px_rgba(24,226,122,.25)] text-white no-underline overflow-hidden">
              <div
                className="w-full aspect-[16/9] bg-center bg-cover"
                style={{ backgroundImage: "url(" + it.thumb + ")" }}
              />
              <div className="p-3">
                <div className="flex items-center gap-2">
                  {it.live ? <span className="text-[11px] px-2 py-[2px] rounded-full bg-[rgba(24,226,122,.12)] border border-[rgba(24,226,122,.35)] text-[#8eff8e]">LIVE</span> : null}
                  <div className="font-semibold">{it.title}</div>
                </div>
                {Array.isArray(it.tags) && it.tags.length > 0 ? (
                  <div className="opacity-70 text-sm mt-1">{it.tags.join(" • ")}</div>
                ) : null}
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}
