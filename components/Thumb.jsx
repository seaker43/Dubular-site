import { useState } from "react";

export default function Thumb({ src, alt = "thumbnail", className = "" }) {
  const [imgSrc, setImgSrc] = useState(src || "/placeholder.svg");
  return (
    <img
      src={imgSrc}
      alt={alt}
      loading="lazy"
      decoding="async"
      className={className || "w-full h-full object-cover rounded-lg"}
      onError={() => setImgSrc("/placeholder.svg")}
      draggable="false"
    />
  );
}
