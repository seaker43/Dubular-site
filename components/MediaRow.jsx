import ThumbnailCard from "./ThumbnailCard";

export default function MediaRow({ title = "Trending Now", items = [], href = "/see-all" }) {
  const data = items.length ? items : [
    {
      id: "lofi-1",
      title: "LoFi #1",
      image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80",
    },
    {
      id: "lofi-2",
      title: "LoFi #2",
      image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80",
    },
    {
      id: "lofi-3",
      title: "LoFi #3",
      image: "https://images.unsplash.com/photo-1521334726092-b509a19597c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80",
    },
  ];

  return (
    <section className="section">
      <div className="section-header">
        <h3 className="section-title">{title}</h3>
        <a href={href} className="section-link">SEE ALL →</a>
      </div>
      <ul className="row">
        {data.map((it) => (
          <li key={it.id} className="min-w-[65%] sm:min-w-[45%] md:min-w-[30%] lg:min-w-[22%]">
            <ThumbnailCard {...it} />
          </li>
        ))}
      </ul>
    </section>
  );
}
