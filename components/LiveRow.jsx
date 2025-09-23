import Image from "next/image";
import Link from "next/link";

const liveThumbs = [
  { src: "/thumbnails/live1.jpg", title: "Arena Finals", href: "/streams" },
  { src: "/thumbnails/live2.jpg", title: "Night Vibes",  href: "/streams" },
  { src: "/thumbnails/live3.jpg", title: "IRL Walk",     href: "/streams" },
  { src: "/thumbnails/live4.jpg", title: "Music Set",    href: "/streams" },
];

export default function LiveRow() {
  return (
    <section className="live-row">
      <h2 className="heading">Live Now</h2>
      <div className="track">
        {liveThumbs.map((t, i) => (
          <Link key={i} href={t.href} className="card">
            <Image src={t.src} alt={t.title} width={320} height={180} priority />
            <span className="badge">LIVE</span>
            <span className="title">{t.title}</span>
          </Link>
        ))}
      </div>

      <style jsx>{`
        .live-row { padding: 16px; }
        .heading { color: #fff; font-size: 1.25rem; font-weight: 700; margin: 0 0 10px; }
        .track { display: flex; gap: 12px; overflow-x: auto; -webkit-overflow-scrolling: touch; padding-bottom: 4px; }
        .card { position: relative; display: inline-block; text-decoration: none; }
        .card :global(img) {
          border-radius: 12px;
          box-shadow: 0 0 10px rgba(255,0,0,.7), 0 0 20px rgba(255,0,0,.4);
          animation: glow 1.6s ease-in-out infinite alternate;
        }
        .badge {
          position: absolute; top: 8px; left: 8px;
          background: #ff1f1f; color: #fff; font-weight: 800;
          padding: 3px 10px; border-radius: 999px; font-size: 12px; letter-spacing: .06em;
          box-shadow: 0 0 12px rgba(255,0,0,.9);
        }
        .title { display: block; margin-top: 6px; color: #fff; font-size: .95rem; }
        @keyframes glow {
          from { box-shadow: 0 0 10px rgba(255,0,0,.7), 0 0 20px rgba(255,0,0,.4); }
          to   { box-shadow: 0 0 24px rgba(255,0,0,1), 0 0 48px rgba(255,0,0,.6); }
        }
      `}</style>
    </section>
  );
}
