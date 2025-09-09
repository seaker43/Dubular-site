// components/FindThumb.jsx
import Image from "next/image";

export default function FindThumb({ item }) {
  return (
    <li className="thumb-card glow-dual ring-1 ring-white/5 overflow-hidden">
      <Image
        src={item.src}
        alt={item.title}
        fill
        priority={false}
        sizes="(max-width: 768px) 60vw, 320px"
        className="thumb-img"
      />
      <span className="thumb-title">{item.title}</span>
    </li>
  );
}
